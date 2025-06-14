import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { invoices, customers, revenue, users } from '../_lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  console.log("creating table...");
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
  console.log("table created, inserting data...");

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const result = sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      console.log(`inserted user ${user.id}`);
      return result;
    }),
  );

  console.log("finished users");
  return insertedUsers;
}

async function seedInvoices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  console.log("creating table...");
  await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;
  console.log("table created, inserting data...");

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => {
        const result = sql`
          INSERT INTO invoices (customer_id, amount, status, date)
          VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
          ON CONFLICT (id) DO NOTHING;`;
        console.log(`inserted invoice ${invoice.customer_id} - ${invoice.amount} - ${invoice.date}`);
        return result;
      },
    ),
  );

  console.log("finished invoices");
  return insertedInvoices;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  console.log("creating table...");
  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;
  console.log("table created, inserting data...");

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => {
        const result = sql`INSERT INTO customers (id, name, email, image_url)
            VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
            ON CONFLICT (id) DO NOTHING;`;
        console.log(`inserted customer ${customer.id}`);
        return result;
      },
    ),
  );

  console.log("finished customers");
  return insertedCustomers;
}

async function seedRevenue() {
  console.log("creating table...");
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;
  console.log("table created, inserting data...");

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => {
        const result = sql`INSERT INTO revenue (month, revenue)
          VALUES (${rev.month}, ${rev.revenue})
          ON CONFLICT (month) DO NOTHING;`
        console.log(`inserted revenue ${rev.month}`);
        return result;
      },
    ),
  );

  console.log("finished revenue");
  return insertedRevenue;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      console.log("seeding users..."),
      seedUsers(),
      console.log("seeding customers..."),
      seedCustomers(),
      console.log("seeding invoices..."),
      seedInvoices(),
      console.log("seeding revenue..."),
      seedRevenue(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
