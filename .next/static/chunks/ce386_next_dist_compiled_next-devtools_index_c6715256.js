(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/next@15.4.0-canary.78_react_30f3e4af1d95965e7c385d93627382e2/node_modules/next/dist/compiled/next-devtools/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$78_react_30f3e4af1d95965e7c385d93627382e2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.0-canary.78_react_30f3e4af1d95965e7c385d93627382e2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __webpack_modules__ = {
    "./dist/compiled/anser/index.js": function(e) {
        (()=>{
            "use strict";
            var n = {
                211: (e)=>{
                    var n = function() {
                        function e(e, n) {
                            for(var t = 0; t < n.length; t++){
                                var r = n[t];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function(n, t, r) {
                            return t && e(n.prototype, t), r && e(n, r), n;
                        };
                    }(), t = [
                        [
                            {
                                color: "0, 0, 0",
                                class: "ansi-black"
                            },
                            {
                                color: "187, 0, 0",
                                class: "ansi-red"
                            },
                            {
                                color: "0, 187, 0",
                                class: "ansi-green"
                            },
                            {
                                color: "187, 187, 0",
                                class: "ansi-yellow"
                            },
                            {
                                color: "0, 0, 187",
                                class: "ansi-blue"
                            },
                            {
                                color: "187, 0, 187",
                                class: "ansi-magenta"
                            },
                            {
                                color: "0, 187, 187",
                                class: "ansi-cyan"
                            },
                            {
                                color: "255,255,255",
                                class: "ansi-white"
                            }
                        ],
                        [
                            {
                                color: "85, 85, 85",
                                class: "ansi-bright-black"
                            },
                            {
                                color: "255, 85, 85",
                                class: "ansi-bright-red"
                            },
                            {
                                color: "0, 255, 0",
                                class: "ansi-bright-green"
                            },
                            {
                                color: "255, 255, 85",
                                class: "ansi-bright-yellow"
                            },
                            {
                                color: "85, 85, 255",
                                class: "ansi-bright-blue"
                            },
                            {
                                color: "255, 85, 255",
                                class: "ansi-bright-magenta"
                            },
                            {
                                color: "85, 255, 255",
                                class: "ansi-bright-cyan"
                            },
                            {
                                color: "255, 255, 255",
                                class: "ansi-bright-white"
                            }
                        ]
                    ];
                    e.exports = function() {
                        function e() {
                            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                            this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null, this.bright = 0;
                        }
                        return n(e, null, [
                            {
                                key: "escapeForHtml",
                                value: function(n) {
                                    return (new e).escapeForHtml(n);
                                }
                            },
                            {
                                key: "linkify",
                                value: function(n) {
                                    return (new e).linkify(n);
                                }
                            },
                            {
                                key: "ansiToHtml",
                                value: function(n, t) {
                                    return (new e).ansiToHtml(n, t);
                                }
                            },
                            {
                                key: "ansiToJson",
                                value: function(n, t) {
                                    return (new e).ansiToJson(n, t);
                                }
                            },
                            {
                                key: "ansiToText",
                                value: function(n) {
                                    return (new e).ansiToText(n);
                                }
                            }
                        ]), n(e, [
                            {
                                key: "setupPalette",
                                value: function() {
                                    this.PALETTE_COLORS = [];
                                    for(var e = 0; e < 2; ++e)for(var n = 0; n < 8; ++n)this.PALETTE_COLORS.push(t[e][n].color);
                                    for(var r = [
                                        0,
                                        95,
                                        135,
                                        175,
                                        215,
                                        255
                                    ], o = function(e, n, t) {
                                        return r[e] + ", " + r[n] + ", " + r[t];
                                    }, a = 0; a < 6; ++a)for(var l = 0; l < 6; ++l)for(var i = 0; i < 6; ++i)this.PALETTE_COLORS.push(o(a, l, i));
                                    for(var s = 8, c = 0; c < 24; ++c, s += 10)this.PALETTE_COLORS.push(o(s, s, s));
                                }
                            },
                            {
                                key: "escapeForHtml",
                                value: function(e) {
                                    return e.replace(/[&<>]/gm, function(e) {
                                        return "&" == e ? "&amp;" : "<" == e ? "&lt;" : ">" == e ? "&gt;" : "";
                                    });
                                }
                            },
                            {
                                key: "linkify",
                                value: function(e) {
                                    return e.replace(/(https?:\/\/[^\s]+)/gm, function(e) {
                                        return '<a href="' + e + '">' + e + "</a>";
                                    });
                                }
                            },
                            {
                                key: "ansiToHtml",
                                value: function(e, n) {
                                    return this.process(e, n, !0);
                                }
                            },
                            {
                                key: "ansiToJson",
                                value: function(e, n) {
                                    return (n = n || {}).json = !0, n.clearLine = !1, this.process(e, n, !0);
                                }
                            },
                            {
                                key: "ansiToText",
                                value: function(e) {
                                    return this.process(e, {}, !1);
                                }
                            },
                            {
                                key: "process",
                                value: function(e, n, t) {
                                    var r = this, o = e.split(/\033\[/), a = o.shift();
                                    null == n && (n = {}), n.clearLine = /\r/.test(e);
                                    var l = o.map(function(e) {
                                        return r.processChunk(e, n, t);
                                    });
                                    if (n && n.json) {
                                        var i = this.processChunkJson("");
                                        return i.content = a, i.clearLine = n.clearLine, l.unshift(i), n.remove_empty && (l = l.filter(function(e) {
                                            return !e.isEmpty();
                                        })), l;
                                    }
                                    return l.unshift(a), l.join("");
                                }
                            },
                            {
                                key: "processChunkJson",
                                value: function(e, n, r) {
                                    var o = (n = void 0 === n ? {} : n).use_classes = void 0 !== n.use_classes && n.use_classes, a = n.key = o ? "class" : "color", l = {
                                        content: e,
                                        fg: null,
                                        bg: null,
                                        fg_truecolor: null,
                                        bg_truecolor: null,
                                        clearLine: n.clearLine,
                                        decoration: null,
                                        was_processed: !1,
                                        isEmpty: function() {
                                            return !l.content;
                                        }
                                    }, i = e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);
                                    if (!i) return l;
                                    l.content = i[4];
                                    var s = i[2].split(";");
                                    if ("" !== i[1] || "m" !== i[3] || !r) return l;
                                    for(this.decoration = null; s.length > 0;){
                                        var c = parseInt(s.shift());
                                        if (isNaN(c) || 0 === c) this.fg = this.bg = this.decoration = null;
                                        else if (1 === c) this.decoration = "bold";
                                        else if (2 === c) this.decoration = "dim";
                                        else if (3 == c) this.decoration = "italic";
                                        else if (4 == c) this.decoration = "underline";
                                        else if (5 == c) this.decoration = "blink";
                                        else if (7 === c) this.decoration = "reverse";
                                        else if (8 === c) this.decoration = "hidden";
                                        else if (9 === c) this.decoration = "strikethrough";
                                        else if (39 == c) this.fg = null;
                                        else if (49 == c) this.bg = null;
                                        else if (c >= 30 && c < 38) this.fg = t[0][c % 10][a];
                                        else if (c >= 90 && c < 98) this.fg = t[1][c % 10][a];
                                        else if (c >= 40 && c < 48) this.bg = t[0][c % 10][a];
                                        else if (c >= 100 && c < 108) this.bg = t[1][c % 10][a];
                                        else if (38 === c || 48 === c) {
                                            var u = 38 === c;
                                            if (s.length >= 1) {
                                                var d = s.shift();
                                                if ("5" === d && s.length >= 1) {
                                                    var f = parseInt(s.shift());
                                                    if (f >= 0 && f <= 255) if (o) {
                                                        var p = f >= 16 ? "ansi-palette-" + f : t[+(f > 7)][f % 8].class;
                                                        u ? this.fg = p : this.bg = p;
                                                    } else this.PALETTE_COLORS || this.setupPalette(), u ? this.fg = this.PALETTE_COLORS[f] : this.bg = this.PALETTE_COLORS[f];
                                                } else if ("2" === d && s.length >= 3) {
                                                    var h = parseInt(s.shift()), m = parseInt(s.shift()), g = parseInt(s.shift());
                                                    if (h >= 0 && h <= 255 && m >= 0 && m <= 255 && g >= 0 && g <= 255) {
                                                        var b = h + ", " + m + ", " + g;
                                                        o ? u ? (this.fg = "ansi-truecolor", this.fg_truecolor = b) : (this.bg = "ansi-truecolor", this.bg_truecolor = b) : u ? this.fg = b : this.bg = b;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return null === this.fg && null === this.bg && null === this.decoration || (l.fg = this.fg, l.bg = this.bg, l.fg_truecolor = this.fg_truecolor, l.bg_truecolor = this.bg_truecolor, l.decoration = this.decoration, l.was_processed = !0), l;
                                }
                            },
                            {
                                key: "processChunk",
                                value: function(e, n, t) {
                                    var r = this;
                                    n = n || {};
                                    var o = this.processChunkJson(e, n, t);
                                    if (n.json) return o;
                                    if (o.isEmpty()) return "";
                                    if (!o.was_processed) return o.content;
                                    var a = n.use_classes, l = [], i = [], s = {}, c = function(e) {
                                        var n = [], t = void 0;
                                        for(t in e)e.hasOwnProperty(t) && n.push("data-" + t + '="' + r.escapeForHtml(e[t]) + '"');
                                        return n.length > 0 ? " " + n.join(" ") : "";
                                    };
                                    return (o.fg && (a ? (i.push(o.fg + "-fg"), null !== o.fg_truecolor && (s["ansi-truecolor-fg"] = o.fg_truecolor, o.fg_truecolor = null)) : l.push("color:rgb(" + o.fg + ")")), o.bg && (a ? (i.push(o.bg + "-bg"), null !== o.bg_truecolor && (s["ansi-truecolor-bg"] = o.bg_truecolor, o.bg_truecolor = null)) : l.push("background-color:rgb(" + o.bg + ")")), o.decoration && (a ? i.push("ansi-" + o.decoration) : "bold" === o.decoration ? l.push("font-weight:bold") : "dim" === o.decoration ? l.push("opacity:0.5") : "italic" === o.decoration ? l.push("font-style:italic") : "reverse" === o.decoration ? l.push("filter:invert(100%)") : "hidden" === o.decoration ? l.push("visibility:hidden") : "strikethrough" === o.decoration ? l.push("text-decoration:line-through") : l.push("text-decoration:" + o.decoration)), a) ? '<span class="' + i.join(" ") + '"' + c(s) + ">" + o.content + "</span>" : '<span style="' + l.join(";") + '"' + c(s) + ">" + o.content + "</span>";
                                }
                            }
                        ]), e;
                    }();
                }
            }, t = {};
            function r(e) {
                var o = t[e];
                if (void 0 !== o) return o.exports;
                var a = t[e] = {
                    exports: {}
                }, l = !0;
                try {
                    n[e](a, a.exports, r), l = !1;
                } finally{
                    l && delete t[e];
                }
                return a.exports;
            }
            r.ab = "//", e.exports = r(211);
        })();
    },
    "./dist/compiled/react-dom/cjs/react-dom-client.production.js": function(e, n, t) {
        "use strict";
        var r, o = t("./dist/compiled/scheduler/index.js"), a = t("./dist/compiled/react/index.js"), l = t("./dist/compiled/react-dom/index.js");
        function i(e) {
            var n = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                n += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var t = 2; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
            }
            return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function s(e) {
            var n = e, t = e;
            if (e.alternate) for(; n.return;)n = n.return;
            else {
                e = n;
                do 0 != (4098 & (n = e).flags) && (t = n.return), e = n.return;
                while (e)
            }
            return 3 === n.tag ? t : null;
        }
        function c(e) {
            if (13 === e.tag) {
                var n = e.memoizedState;
                if (null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n) return n.dehydrated;
            }
            return null;
        }
        function u(e) {
            if (31 === e.tag) {
                var n = e.memoizedState;
                if (null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n) return n.dehydrated;
            }
            return null;
        }
        function d(e) {
            if (s(e) !== e) throw Error(i(188));
        }
        var f = Object.assign, p = Symbol.for("react.element"), h = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), x = Symbol.for("react.consumer"), w = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), _ = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var C = Symbol.for("react.activity");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var E = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var P = Symbol.iterator;
        function N(e) {
            return null === e || "object" != typeof e ? null : "function" == typeof (e = P && e[P] || e["@@iterator"]) ? e : null;
        }
        var z = Symbol.for("react.client.reference"), L = Array.isArray, T = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, R = [], I = -1;
        function M(e) {
            return {
                current: e
            };
        }
        function F(e) {
            0 > I || (e.current = R[I], R[I] = null, I--);
        }
        function H(e, n) {
            R[++I] = e.current, e.current = n;
        }
        var U = M(null), V = M(null), B = M(null), $ = M(null);
        function q(e, n) {
            switch(H(B, n), H(V, e), H(U, null), n.nodeType){
                case 9:
                case 11:
                    e = (e = n.documentElement) && (e = e.namespaceURI) ? cm(e) : 0;
                    break;
                default:
                    if (e = n.tagName, n = n.namespaceURI) e = cg(n = cm(n), e);
                    else switch(e){
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
            }
            F(U), H(U, e);
        }
        function Z() {
            F(U), F(V), F(B);
        }
        function W(e) {
            null !== e.memoizedState && H($, e);
            var n = U.current, t = cg(n, e.type);
            n !== t && (H(V, e), H(U, t));
        }
        function Q(e) {
            V.current === e && (F(U), F(V)), $.current === e && (F($), c9._currentValue = A);
        }
        function X(e) {
            if (void 0 === nR) try {
                throw Error();
            } catch (e) {
                var n = e.stack.trim().match(/\n( *(at )?)/);
                nR = n && n[1] || "", nI = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return "\n" + nR + e + nI;
        }
        var G = !1;
        function K(e, n) {
            if (!e || G) return "";
            G = !0;
            var t = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var r = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (n) {
                                var t = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                    try {
                                        Reflect.construct(t, []);
                                    } catch (e) {
                                        var r = e;
                                    }
                                    Reflect.construct(e, [], t);
                                } else {
                                    try {
                                        t.call();
                                    } catch (e) {
                                        r = e;
                                    }
                                    e.call(t.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (e) {
                                    r = e;
                                }
                                (t = e()) && "function" == typeof t.catch && t.catch(function() {});
                            }
                        } catch (e) {
                            if (e && r && "string" == typeof e.stack) return [
                                e.stack,
                                r.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                o && o.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var a = r.DetermineComponentFrameRoot(), l = a[0], i = a[1];
                if (l && i) {
                    var s = l.split("\n"), c = i.split("\n");
                    for(o = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot");)r++;
                    for(; o < c.length && !c[o].includes("DetermineComponentFrameRoot");)o++;
                    if (r === s.length || o === c.length) for(r = s.length - 1, o = c.length - 1; 1 <= r && 0 <= o && s[r] !== c[o];)o--;
                    for(; 1 <= r && 0 <= o; r--, o--)if (s[r] !== c[o]) {
                        if (1 !== r || 1 !== o) do if (r--, o--, 0 > o || s[r] !== c[o]) {
                            var u = "\n" + s[r].replace(" at new ", " at ");
                            return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                        }
                        while (1 <= r && 0 <= o)
                        break;
                    }
                }
            } finally{
                G = !1, Error.prepareStackTrace = t;
            }
            return (t = e ? e.displayName || e.name : "") ? X(t) : "";
        }
        function Y(e) {
            try {
                var n = "";
                do n += function(e) {
                    switch(e.tag){
                        case 26:
                        case 27:
                        case 5:
                            return X(e.type);
                        case 16:
                            return X("Lazy");
                        case 13:
                            return X("Suspense");
                        case 19:
                            return X("SuspenseList");
                        case 0:
                        case 15:
                            return K(e.type, !1);
                        case 11:
                            return K(e.type.render, !1);
                        case 1:
                            return K(e.type, !0);
                        case 31:
                            return X("Activity");
                        default:
                            return "";
                    }
                }(e), e = e.return;
                while (e)
                return n;
            } catch (e) {
                return "\nError generating stack: " + e.message + "\n" + e.stack;
            }
        }
        var J = Object.prototype.hasOwnProperty, ee = o.unstable_scheduleCallback, en = o.unstable_cancelCallback, et = o.unstable_shouldYield, er = o.unstable_requestPaint, eo = o.unstable_now, ea = o.unstable_getCurrentPriorityLevel, el = o.unstable_ImmediatePriority, ei = o.unstable_UserBlockingPriority, es = o.unstable_NormalPriority, ec = o.unstable_LowPriority, eu = o.unstable_IdlePriority, ed = o.log, ef = o.unstable_setDisableYieldValue, ep = null, eh = null;
        function em(e) {
            if ("function" == typeof ed && ef(e), eh && "function" == typeof eh.setStrictMode) try {
                eh.setStrictMode(ep, e);
            } catch (e) {}
        }
        var eg = Math.clz32 ? Math.clz32 : function(e) {
            return 0 == (e >>>= 0) ? 32 : 31 - (eb(e) / ev | 0) | 0;
        }, eb = Math.log, ev = Math.LN2, ey = 256, ex = 4194304;
        function ew(e) {
            var n = 42 & e;
            if (0 !== n) return n;
            switch(e & -e){
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194048 & e;
                case 4194304:
                case 8388608:
                case 0x1000000:
                case 0x2000000:
                    return 0x3c00000 & e;
                case 0x4000000:
                    return 0x4000000;
                case 0x8000000:
                    return 0x8000000;
                case 0x10000000:
                    return 0x10000000;
                case 0x20000000:
                    return 0x20000000;
                case 0x40000000:
                    return 0;
                default:
                    return e;
            }
        }
        function ej(e, n, t) {
            var r = e.pendingLanes;
            if (0 === r) return 0;
            var o = 0, a = e.suspendedLanes, l = e.pingedLanes;
            e = e.warmLanes;
            var i = 0x7ffffff & r;
            return 0 !== i ? 0 != (r = i & ~a) ? o = ew(r) : 0 != (l &= i) ? o = ew(l) : t || 0 != (t = i & ~e) && (o = ew(t)) : 0 != (i = r & ~a) ? o = ew(i) : 0 !== l ? o = ew(l) : t || 0 != (t = r & ~e) && (o = ew(t)), 0 === o ? 0 : 0 !== n && n !== o && 0 == (n & a) && ((a = o & -o) >= (t = n & -n) || 32 === a && 0 != (4194048 & t)) ? n : o;
        }
        function ek(e, n) {
            return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n);
        }
        function eO() {
            var e = ey;
            return 0 == (4194048 & (ey <<= 1)) && (ey = 256), e;
        }
        function eS() {
            var e = ex;
            return 0 == (0x3c00000 & (ex <<= 1)) && (ex = 4194304), e;
        }
        function e_(e) {
            for(var n = [], t = 0; 31 > t; t++)n.push(e);
            return n;
        }
        function eC(e, n) {
            e.pendingLanes |= n, 0x10000000 !== n && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function eE(e, n, t) {
            e.pendingLanes |= n, e.suspendedLanes &= ~n;
            var r = 31 - eg(n);
            e.entangledLanes |= n, e.entanglements[r] = 0x40000000 | e.entanglements[r] | 4194090 & t;
        }
        function eP(e, n) {
            var t = e.entangledLanes |= n;
            for(e = e.entanglements; t;){
                var r = 31 - eg(t), o = 1 << r;
                o & n | e[r] & n && (e[r] |= n), t &= ~o;
            }
        }
        function eN(e, n) {
            var t = n & -n;
            return 0 != ((t = 0 != (42 & t) ? 1 : ez(t)) & (e.suspendedLanes | n)) ? 0 : t;
        }
        function ez(e) {
            switch(e){
                case 2:
                    e = 1;
                    break;
                case 8:
                    e = 4;
                    break;
                case 32:
                    e = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 0x1000000:
                case 0x2000000:
                    e = 128;
                    break;
                case 0x10000000:
                    e = 0x8000000;
                    break;
                default:
                    e = 0;
            }
            return e;
        }
        function eL(e) {
            return 2 < (e &= -e) ? 8 < e ? 0 != (0x7ffffff & e) ? 32 : 0x10000000 : 8 : 2;
        }
        function eT() {
            var e = D.p;
            return 0 !== e ? e : void 0 === (e = window.event) ? 32 : uf(e.type);
        }
        function eD(e, n) {
            var t = D.p;
            try {
                return D.p = e, n();
            } finally{
                D.p = t;
            }
        }
        var eA = Math.random().toString(36).slice(2), eR = "__reactFiber$" + eA, eI = "__reactProps$" + eA, eM = "__reactContainer$" + eA, eF = "__reactEvents$" + eA, eH = "__reactListeners$" + eA, eU = "__reactHandles$" + eA, eV = "__reactResources$" + eA, eB = "__reactMarker$" + eA;
        function e$(e) {
            delete e[eR], delete e[eI], delete e[eF], delete e[eH], delete e[eU];
        }
        function eq(e) {
            var n = e[eR];
            if (n) return n;
            for(var t = e.parentNode; t;){
                if (n = t[eM] || t[eR]) {
                    if (t = n.alternate, null !== n.child || null !== t && null !== t.child) for(e = cT(e); null !== e;){
                        if (t = e[eR]) return t;
                        e = cT(e);
                    }
                    return n;
                }
                t = (e = t).parentNode;
            }
            return null;
        }
        function eZ(e) {
            if (e = e[eR] || e[eM]) {
                var n = e.tag;
                if (5 === n || 6 === n || 13 === n || 31 === n || 26 === n || 27 === n || 3 === n) return e;
            }
            return null;
        }
        function eW(e) {
            var n = e.tag;
            if (5 === n || 26 === n || 27 === n || 6 === n) return e.stateNode;
            throw Error(i(33));
        }
        function eQ(e) {
            var n = e[eV];
            return n || (n = e[eV] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), n;
        }
        function eX(e) {
            e[eB] = !0;
        }
        var eG = new Set, eK = {};
        function eY(e, n) {
            eJ(e, n), eJ(e + "Capture", n);
        }
        function eJ(e, n) {
            for(eK[e] = n, e = 0; e < n.length; e++)eG.add(n[e]);
        }
        var e0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), e1 = {}, e2 = {};
        function e3(e, n, t) {
            if (J.call(e2, n) || !J.call(e1, n) && (e0.test(n) ? e2[n] = !0 : (e1[n] = !0, !1))) if (null === t) e.removeAttribute(n);
            else {
                switch(typeof t){
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(n);
                        return;
                    case "boolean":
                        var r = n.toLowerCase().slice(0, 5);
                        if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(n);
                }
                e.setAttribute(n, "" + t);
            }
        }
        function e4(e, n, t) {
            if (null === t) e.removeAttribute(n);
            else {
                switch(typeof t){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(n);
                        return;
                }
                e.setAttribute(n, "" + t);
            }
        }
        function e5(e, n, t, r) {
            if (null === r) e.removeAttribute(t);
            else {
                switch(typeof r){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(t);
                        return;
                }
                e.setAttributeNS(n, t, "" + r);
            }
        }
        function e6(e) {
            switch(typeof e){
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function e8(e) {
            var n = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n);
        }
        function e9(e) {
            e._valueTracker || (e._valueTracker = function(e) {
                var n = e8(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
                if (!e.hasOwnProperty(n) && void 0 !== t && "function" == typeof t.get && "function" == typeof t.set) {
                    var o = t.get, a = t.set;
                    return Object.defineProperty(e, n, {
                        configurable: !0,
                        get: function() {
                            return o.call(this);
                        },
                        set: function(e) {
                            r = "" + e, a.call(this, e);
                        }
                    }), Object.defineProperty(e, n, {
                        enumerable: t.enumerable
                    }), {
                        getValue: function() {
                            return r;
                        },
                        setValue: function(e) {
                            r = "" + e;
                        },
                        stopTracking: function() {
                            e._valueTracker = null, delete e[n];
                        }
                    };
                }
            }(e));
        }
        function e7(e) {
            if (!e) return !1;
            var n = e._valueTracker;
            if (!n) return !0;
            var t = n.getValue(), r = "";
            return e && (r = e8(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== t && (n.setValue(e), !0);
        }
        function ne(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body;
            } catch (n) {
                return e.body;
            }
        }
        var nn = /[\n"\\]/g;
        function nt(e) {
            return e.replace(nn, function(e) {
                return "\\" + e.charCodeAt(0).toString(16) + " ";
            });
        }
        function nr(e, n, t, r, o, a, l, i) {
            e.name = "", null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l ? e.type = l : e.removeAttribute("type"), null != n ? "number" === l ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + e6(n)) : e.value !== "" + e6(n) && (e.value = "" + e6(n)) : "submit" !== l && "reset" !== l || e.removeAttribute("value"), null != n ? na(e, l, e6(n)) : null != t ? na(e, l, e6(t)) : null != r && e.removeAttribute("value"), null == o && null != a && (e.defaultChecked = !!a), null != o && (e.checked = o && "function" != typeof o && "symbol" != typeof o), null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i ? e.name = "" + e6(i) : e.removeAttribute("name");
        }
        function no(e, n, t, r, o, a, l, i) {
            if (null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a && (e.type = a), null != n || null != t) {
                if (("submit" === a || "reset" === a) && null == n) return;
                t = null != t ? "" + e6(t) : "", n = null != n ? "" + e6(n) : t, i || n === e.value || (e.value = n), e.defaultValue = n;
            }
            r = "function" != typeof (r = null != r ? r : o) && "symbol" != typeof r && !!r, e.checked = i ? e.checked : !!r, e.defaultChecked = !!r, null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l && (e.name = l);
        }
        function na(e, n, t) {
            "number" === n && ne(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
        }
        function nl(e, n, t, r) {
            if (e = e.options, n) {
                n = {};
                for(var o = 0; o < t.length; o++)n["$" + t[o]] = !0;
                for(t = 0; t < e.length; t++)o = n.hasOwnProperty("$" + e[t].value), e[t].selected !== o && (e[t].selected = o), o && r && (e[t].defaultSelected = !0);
            } else {
                for(o = 0, t = "" + e6(t), n = null; o < e.length; o++){
                    if (e[o].value === t) {
                        e[o].selected = !0, r && (e[o].defaultSelected = !0);
                        return;
                    }
                    null !== n || e[o].disabled || (n = e[o]);
                }
                null !== n && (n.selected = !0);
            }
        }
        function ni(e, n, t) {
            if (null != n && ((n = "" + e6(n)) !== e.value && (e.value = n), null == t)) {
                e.defaultValue !== n && (e.defaultValue = n);
                return;
            }
            e.defaultValue = null != t ? "" + e6(t) : "";
        }
        function ns(e, n, t, r) {
            if (null == n) {
                if (null != r) {
                    if (null != t) throw Error(i(92));
                    if (L(r)) {
                        if (1 < r.length) throw Error(i(93));
                        r = r[0];
                    }
                    t = r;
                }
                null == t && (t = ""), n = t;
            }
            e.defaultValue = t = e6(n), (r = e.textContent) === t && "" !== r && null !== r && (e.value = r);
        }
        function nc(e, n) {
            if (n) {
                var t = e.firstChild;
                if (t && t === e.lastChild && 3 === t.nodeType) {
                    t.nodeValue = n;
                    return;
                }
            }
            e.textContent = n;
        }
        var nu = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function nd(e, n, t) {
            var r = 0 === n.indexOf("--");
            null == t || "boolean" == typeof t || "" === t ? r ? e.setProperty(n, "") : "float" === n ? e.cssFloat = "" : e[n] = "" : r ? e.setProperty(n, t) : "number" != typeof t || 0 === t || nu.has(n) ? "float" === n ? e.cssFloat = t : e[n] = ("" + t).trim() : e[n] = t + "px";
        }
        function nf(e, n, t) {
            if (null != n && "object" != typeof n) throw Error(i(62));
            if (e = e.style, null != t) {
                for(var r in t)!t.hasOwnProperty(r) || null != n && n.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                for(var o in n)r = n[o], n.hasOwnProperty(o) && t[o] !== r && nd(e, o, r);
            } else for(var a in n)n.hasOwnProperty(a) && nd(e, a, n[a]);
        }
        function np(e) {
            if (-1 === e.indexOf("-")) return !1;
            switch(e){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var nh = new Map([
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ],
            [
                "crossOrigin",
                "crossorigin"
            ],
            [
                "accentHeight",
                "accent-height"
            ],
            [
                "alignmentBaseline",
                "alignment-baseline"
            ],
            [
                "arabicForm",
                "arabic-form"
            ],
            [
                "baselineShift",
                "baseline-shift"
            ],
            [
                "capHeight",
                "cap-height"
            ],
            [
                "clipPath",
                "clip-path"
            ],
            [
                "clipRule",
                "clip-rule"
            ],
            [
                "colorInterpolation",
                "color-interpolation"
            ],
            [
                "colorInterpolationFilters",
                "color-interpolation-filters"
            ],
            [
                "colorProfile",
                "color-profile"
            ],
            [
                "colorRendering",
                "color-rendering"
            ],
            [
                "dominantBaseline",
                "dominant-baseline"
            ],
            [
                "enableBackground",
                "enable-background"
            ],
            [
                "fillOpacity",
                "fill-opacity"
            ],
            [
                "fillRule",
                "fill-rule"
            ],
            [
                "floodColor",
                "flood-color"
            ],
            [
                "floodOpacity",
                "flood-opacity"
            ],
            [
                "fontFamily",
                "font-family"
            ],
            [
                "fontSize",
                "font-size"
            ],
            [
                "fontSizeAdjust",
                "font-size-adjust"
            ],
            [
                "fontStretch",
                "font-stretch"
            ],
            [
                "fontStyle",
                "font-style"
            ],
            [
                "fontVariant",
                "font-variant"
            ],
            [
                "fontWeight",
                "font-weight"
            ],
            [
                "glyphName",
                "glyph-name"
            ],
            [
                "glyphOrientationHorizontal",
                "glyph-orientation-horizontal"
            ],
            [
                "glyphOrientationVertical",
                "glyph-orientation-vertical"
            ],
            [
                "horizAdvX",
                "horiz-adv-x"
            ],
            [
                "horizOriginX",
                "horiz-origin-x"
            ],
            [
                "imageRendering",
                "image-rendering"
            ],
            [
                "letterSpacing",
                "letter-spacing"
            ],
            [
                "lightingColor",
                "lighting-color"
            ],
            [
                "markerEnd",
                "marker-end"
            ],
            [
                "markerMid",
                "marker-mid"
            ],
            [
                "markerStart",
                "marker-start"
            ],
            [
                "overlinePosition",
                "overline-position"
            ],
            [
                "overlineThickness",
                "overline-thickness"
            ],
            [
                "paintOrder",
                "paint-order"
            ],
            [
                "panose-1",
                "panose-1"
            ],
            [
                "pointerEvents",
                "pointer-events"
            ],
            [
                "renderingIntent",
                "rendering-intent"
            ],
            [
                "shapeRendering",
                "shape-rendering"
            ],
            [
                "stopColor",
                "stop-color"
            ],
            [
                "stopOpacity",
                "stop-opacity"
            ],
            [
                "strikethroughPosition",
                "strikethrough-position"
            ],
            [
                "strikethroughThickness",
                "strikethrough-thickness"
            ],
            [
                "strokeDasharray",
                "stroke-dasharray"
            ],
            [
                "strokeDashoffset",
                "stroke-dashoffset"
            ],
            [
                "strokeLinecap",
                "stroke-linecap"
            ],
            [
                "strokeLinejoin",
                "stroke-linejoin"
            ],
            [
                "strokeMiterlimit",
                "stroke-miterlimit"
            ],
            [
                "strokeOpacity",
                "stroke-opacity"
            ],
            [
                "strokeWidth",
                "stroke-width"
            ],
            [
                "textAnchor",
                "text-anchor"
            ],
            [
                "textDecoration",
                "text-decoration"
            ],
            [
                "textRendering",
                "text-rendering"
            ],
            [
                "transformOrigin",
                "transform-origin"
            ],
            [
                "underlinePosition",
                "underline-position"
            ],
            [
                "underlineThickness",
                "underline-thickness"
            ],
            [
                "unicodeBidi",
                "unicode-bidi"
            ],
            [
                "unicodeRange",
                "unicode-range"
            ],
            [
                "unitsPerEm",
                "units-per-em"
            ],
            [
                "vAlphabetic",
                "v-alphabetic"
            ],
            [
                "vHanging",
                "v-hanging"
            ],
            [
                "vIdeographic",
                "v-ideographic"
            ],
            [
                "vMathematical",
                "v-mathematical"
            ],
            [
                "vectorEffect",
                "vector-effect"
            ],
            [
                "vertAdvY",
                "vert-adv-y"
            ],
            [
                "vertOriginX",
                "vert-origin-x"
            ],
            [
                "vertOriginY",
                "vert-origin-y"
            ],
            [
                "wordSpacing",
                "word-spacing"
            ],
            [
                "writingMode",
                "writing-mode"
            ],
            [
                "xmlnsXlink",
                "xmlns:xlink"
            ],
            [
                "xHeight",
                "x-height"
            ]
        ]), nm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function ng(e) {
            return nm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var nb = null;
        function nv(e) {
            return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
        }
        var ny = null, nx = null;
        function nw(e) {
            var n = eZ(e);
            if (n && (e = n.stateNode)) {
                var t = e[eI] || null;
                switch(e = n.stateNode, n.type){
                    case "input":
                        if (nr(e, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name), n = t.name, "radio" === t.type && null != n) {
                            for(t = e; t.parentNode;)t = t.parentNode;
                            for(t = t.querySelectorAll('input[name="' + nt("" + n) + '"][type="radio"]'), n = 0; n < t.length; n++){
                                var r = t[n];
                                if (r !== e && r.form === e.form) {
                                    var o = r[eI] || null;
                                    if (!o) throw Error(i(90));
                                    nr(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                                }
                            }
                            for(n = 0; n < t.length; n++)(r = t[n]).form === e.form && e7(r);
                        }
                        break;
                    case "textarea":
                        ni(e, t.value, t.defaultValue);
                        break;
                    case "select":
                        null != (n = t.value) && nl(e, !!t.multiple, n, !1);
                }
            }
        }
        var nj = !1;
        function nk(e, n, t) {
            if (nj) return e(n, t);
            nj = !0;
            try {
                return e(n);
            } finally{
                if (nj = !1, (null !== ny || null !== nx) && (sc(), ny && (n = ny, e = nx, nx = ny = null, nw(n), e))) for(n = 0; n < e.length; n++)nw(e[n]);
            }
        }
        function nO(e, n) {
            var t = e.stateNode;
            if (null === t) return null;
            var r = t[eI] || null;
            if (null === r) return null;
            switch(t = r[n], n){
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = "button" !== (e = e.type) && "input" !== e && "select" !== e && "textarea" !== e), e = !r;
                    break;
                default:
                    e = !1;
            }
            if (e) return null;
            if (t && "function" != typeof t) throw Error(i(231, n, typeof t));
            return t;
        }
        var nS = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, n_ = !1;
        if (nS) try {
            var nC = {};
            Object.defineProperty(nC, "passive", {
                get: function() {
                    n_ = !0;
                }
            }), window.addEventListener("test", nC, nC), window.removeEventListener("test", nC, nC);
        } catch (e) {
            n_ = !1;
        }
        var nE = null, nP = null, nN = null;
        function nz() {
            if (nN) return nN;
            var e, n, t = nP, r = t.length, o = "value" in nE ? nE.value : nE.textContent, a = o.length;
            for(e = 0; e < r && t[e] === o[e]; e++);
            var l = r - e;
            for(n = 1; n <= l && t[r - n] === o[a - n]; n++);
            return nN = o.slice(e, 1 < n ? 1 - n : void 0);
        }
        function nL(e) {
            var n = e.keyCode;
            return "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : e = n, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
        }
        function nT() {
            return !0;
        }
        function nD() {
            return !1;
        }
        function nA(e) {
            function n(n, t, r, o, a) {
                for(var l in this._reactName = n, this._targetInst = r, this.type = t, this.nativeEvent = o, this.target = a, this.currentTarget = null, e)e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
                return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nT : nD, this.isPropagationStopped = nD, this;
            }
            return f(n.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nT);
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nT);
                },
                persist: function() {},
                isPersistent: nT
            }), n;
        }
        var nR, nI, nM, nF, nH, nU = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, nV = nA(nU), nB = f({}, nU, {
            view: 0,
            detail: 0
        }), n$ = nA(nB), nq = f({}, nB, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: n2,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== nH && (nH && "mousemove" === e.type ? (nM = e.screenX - nH.screenX, nF = e.screenY - nH.screenY) : nF = nM = 0, nH = e), nM);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : nF;
            }
        }), nZ = nA(nq), nW = nA(f({}, nq, {
            dataTransfer: 0
        })), nQ = nA(f({}, nB, {
            relatedTarget: 0
        })), nX = nA(f({}, nU, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })), nG = nA(f({}, nU, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        })), nK = nA(f({}, nU, {
            data: 0
        })), nY = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, nJ = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, n0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function n1(e) {
            var n = this.nativeEvent;
            return n.getModifierState ? n.getModifierState(e) : !!(e = n0[e]) && !!n[e];
        }
        function n2() {
            return n1;
        }
        var n3 = nA(f({}, nB, {
            key: function(e) {
                if (e.key) {
                    var n = nY[e.key] || e.key;
                    if ("Unidentified" !== n) return n;
                }
                return "keypress" === e.type ? 13 === (e = nL(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? nJ[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: n2,
            charCode: function(e) {
                return "keypress" === e.type ? nL(e) : 0;
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function(e) {
                return "keypress" === e.type ? nL(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            }
        })), n4 = nA(f({}, nq, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })), n5 = nA(f({}, nB, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: n2
        })), n6 = nA(f({}, nU, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })), n8 = nA(f({}, nq, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        })), n9 = nA(f({}, nU, {
            newState: 0,
            oldState: 0
        })), n7 = [
            9,
            13,
            27,
            32
        ], te = nS && "CompositionEvent" in window, tn = null;
        nS && "documentMode" in document && (tn = document.documentMode);
        var tt = nS && "TextEvent" in window && !tn, tr = nS && (!te || tn && 8 < tn && 11 >= tn), to = !1;
        function ta(e, n) {
            switch(e){
                case "keyup":
                    return -1 !== n7.indexOf(n.keyCode);
                case "keydown":
                    return 229 !== n.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function tl(e) {
            return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var ti = !1, ts = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function tc(e) {
            var n = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === n ? !!ts[e.type] : "textarea" === n;
        }
        function tu(e, n, t, r) {
            ny ? nx ? nx.push(r) : nx = [
                r
            ] : ny = r, 0 < (n = cn(n, "onChange")).length && (t = new nV("onChange", "change", null, t, r), e.push({
                event: t,
                listeners: n
            }));
        }
        var td = null, tf = null;
        function tp(e) {
            s3(e, 0);
        }
        function th(e) {
            if (e7(eW(e))) return e;
        }
        function tm(e, n) {
            if ("change" === e) return n;
        }
        var tg = !1;
        if (nS) {
            if (nS) {
                var tb = "oninput" in document;
                if (!tb) {
                    var tv = document.createElement("div");
                    tv.setAttribute("oninput", "return;"), tb = "function" == typeof tv.oninput;
                }
                r = tb;
            } else r = !1;
            tg = r && (!document.documentMode || 9 < document.documentMode);
        }
        function ty() {
            td && (td.detachEvent("onpropertychange", tx), tf = td = null);
        }
        function tx(e) {
            if ("value" === e.propertyName && th(tf)) {
                var n = [];
                tu(n, tf, e, nv(e)), nk(tp, n);
            }
        }
        function tw(e, n, t) {
            "focusin" === e ? (ty(), td = n, tf = t, td.attachEvent("onpropertychange", tx)) : "focusout" === e && ty();
        }
        function tj(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return th(tf);
        }
        function tk(e, n) {
            if ("click" === e) return th(n);
        }
        function tO(e, n) {
            if ("input" === e || "change" === e) return th(n);
        }
        var tS = "function" == typeof Object.is ? Object.is : function(e, n) {
            return e === n && (0 !== e || 1 / e == 1 / n) || e != e && n != n;
        };
        function t_(e, n) {
            if (tS(e, n)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
            var t = Object.keys(e), r = Object.keys(n);
            if (t.length !== r.length) return !1;
            for(r = 0; r < t.length; r++){
                var o = t[r];
                if (!J.call(n, o) || !tS(e[o], n[o])) return !1;
            }
            return !0;
        }
        function tC(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function tE(e, n) {
            var t, r = tC(e);
            for(e = 0; r;){
                if (3 === r.nodeType) {
                    if (t = e + r.textContent.length, e <= n && t >= n) return {
                        node: r,
                        offset: n - e
                    };
                    e = t;
                }
                e: {
                    for(; r;){
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e;
                        }
                        r = r.parentNode;
                    }
                    r = void 0;
                }
                r = tC(r);
            }
        }
        function tP(e) {
            e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
            for(var n = ne(e.document); n instanceof e.HTMLIFrameElement;){
                try {
                    var t = "string" == typeof n.contentWindow.location.href;
                } catch (e) {
                    t = !1;
                }
                if (t) e = n.contentWindow;
                else break;
                n = ne(e.document);
            }
            return n;
        }
        function tN(e) {
            var n = e && e.nodeName && e.nodeName.toLowerCase();
            return n && ("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === n || "true" === e.contentEditable);
        }
        var tz = nS && "documentMode" in document && 11 >= document.documentMode, tL = null, tT = null, tD = null, tA = !1;
        function tR(e, n, t) {
            var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
            tA || null == tL || tL !== ne(r) || (r = "selectionStart" in (r = tL) && tN(r) ? {
                start: r.selectionStart,
                end: r.selectionEnd
            } : {
                anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }, tD && t_(tD, r) || (tD = r, 0 < (r = cn(tT, "onSelect")).length && (n = new nV("onSelect", "select", null, n, t), e.push({
                event: n,
                listeners: r
            }), n.target = tL)));
        }
        function tI(e, n) {
            var t = {};
            return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
        }
        var tM = {
            animationend: tI("Animation", "AnimationEnd"),
            animationiteration: tI("Animation", "AnimationIteration"),
            animationstart: tI("Animation", "AnimationStart"),
            transitionrun: tI("Transition", "TransitionRun"),
            transitionstart: tI("Transition", "TransitionStart"),
            transitioncancel: tI("Transition", "TransitionCancel"),
            transitionend: tI("Transition", "TransitionEnd")
        }, tF = {}, tH = {};
        function tU(e) {
            if (tF[e]) return tF[e];
            if (!tM[e]) return e;
            var n, t = tM[e];
            for(n in t)if (t.hasOwnProperty(n) && n in tH) return tF[e] = t[n];
            return e;
        }
        nS && (tH = document.createElement("div").style, "AnimationEvent" in window || (delete tM.animationend.animation, delete tM.animationiteration.animation, delete tM.animationstart.animation), "TransitionEvent" in window || delete tM.transitionend.transition);
        var tV = tU("animationend"), tB = tU("animationiteration"), t$ = tU("animationstart"), tq = tU("transitionrun"), tZ = tU("transitionstart"), tW = tU("transitioncancel"), tQ = tU("transitionend"), tX = new Map, tG = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function tK(e, n) {
            tX.set(e, n), eY(n, [
                e
            ]);
        }
        tG.push("scrollEnd");
        var tY = new WeakMap;
        function tJ(e, n) {
            if ("object" == typeof e && null !== e) {
                var t = tY.get(e);
                return void 0 !== t ? t : (n = {
                    value: e,
                    source: n,
                    stack: Y(n)
                }, tY.set(e, n), n);
            }
            return {
                value: e,
                source: n,
                stack: Y(n)
            };
        }
        var t0 = [], t1 = 0, t2 = 0;
        function t3() {
            for(var e = t1, n = t2 = t1 = 0; n < e;){
                var t = t0[n];
                t0[n++] = null;
                var r = t0[n];
                t0[n++] = null;
                var o = t0[n];
                t0[n++] = null;
                var a = t0[n];
                if (t0[n++] = null, null !== r && null !== o) {
                    var l = r.pending;
                    null === l ? o.next = o : (o.next = l.next, l.next = o), r.pending = o;
                }
                0 !== a && t8(t, o, a);
            }
        }
        function t4(e, n, t, r) {
            t0[t1++] = e, t0[t1++] = n, t0[t1++] = t, t0[t1++] = r, t2 |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r);
        }
        function t5(e, n, t, r) {
            return t4(e, n, t, r), t9(e);
        }
        function t6(e, n) {
            return t4(e, null, null, n), t9(e);
        }
        function t8(e, n, t) {
            e.lanes |= t;
            var r = e.alternate;
            null !== r && (r.lanes |= t);
            for(var o = !1, a = e.return; null !== a;)a.childLanes |= t, null !== (r = a.alternate) && (r.childLanes |= t), 22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (o = !0)), e = a, a = a.return;
            return 3 === e.tag ? (a = e.stateNode, o && null !== n && (o = 31 - eg(t), null === (r = (e = a.hiddenUpdates)[o]) ? e[o] = [
                n
            ] : r.push(n), n.lane = 0x20000000 | t), a) : null;
        }
        function t9(e) {
            if (50 < sn) throw sn = 0, st = null, Error(i(185));
            for(var n = e.return; null !== n;)n = (e = n).return;
            return 3 === e.tag ? e.stateNode : null;
        }
        var t7 = {};
        function re(e, n, t, r) {
            this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function rn(e, n, t, r) {
            return new re(e, n, t, r);
        }
        function rt(e) {
            return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function rr(e, n) {
            var t = e.alternate;
            return null === t ? ((t = rn(e.tag, n, e.key, e.mode)).elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = 0x3e00000 & e.flags, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = null === n ? null : {
                lanes: n.lanes,
                firstContext: n.firstContext
            }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
        }
        function ro(e, n) {
            e.flags &= 0x3e00002;
            var t = e.alternate;
            return null === t ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, e.dependencies = null === (n = t.dependencies) ? null : {
                lanes: n.lanes,
                firstContext: n.firstContext
            }), e;
        }
        function ra(e, n, t, r, o, a) {
            var l = 0;
            if (r = e, "function" == typeof e) rt(e) && (l = 1);
            else if ("string" == typeof e) l = !function(e, n, t) {
                if (1 === t || null != n.itemProp) return !1;
                switch(e){
                    case "meta":
                    case "title":
                        return !0;
                    case "style":
                        if ("string" != typeof n.precedence || "string" != typeof n.href || "" === n.href) break;
                        return !0;
                    case "link":
                        if ("string" != typeof n.rel || "string" != typeof n.href || "" === n.href || n.onLoad || n.onError) break;
                        if ("stylesheet" === n.rel) return e = n.disabled, "string" == typeof n.precedence && null == e;
                        return !0;
                    case "script":
                        if (n.async && "function" != typeof n.async && "symbol" != typeof n.async && !n.onLoad && !n.onError && n.src && "string" == typeof n.src) return !0;
                }
                return !1;
            }(e, t, U.current) ? "html" === e || "head" === e || "body" === e ? 27 : 5 : 26;
            else e: switch(e){
                case C:
                    return (e = rn(31, t, n, o)).elementType = C, e.lanes = a, e;
                case g:
                    return rl(t.children, o, a, n);
                case b:
                    l = 8, o |= 24;
                    break;
                case v:
                    return (e = rn(12, t, n, 2 | o)).elementType = v, e.lanes = a, e;
                case k:
                    return (e = rn(13, t, n, o)).elementType = k, e.lanes = a, e;
                case O:
                    return (e = rn(19, t, n, o)).elementType = O, e.lanes = a, e;
                default:
                    if ("object" == typeof e && null !== e) switch(e.$$typeof){
                        case y:
                        case w:
                            l = 10;
                            break e;
                        case x:
                            l = 9;
                            break e;
                        case j:
                            l = 11;
                            break e;
                        case S:
                            l = 14;
                            break e;
                        case _:
                            l = 16, r = null;
                            break e;
                    }
                    l = 29, t = Error(i(130, null === e ? "null" : typeof e, "")), r = null;
            }
            return (n = rn(l, t, n, o)).elementType = e, n.type = r, n.lanes = a, n;
        }
        function rl(e, n, t, r) {
            return (e = rn(7, e, r, n)).lanes = t, e;
        }
        function ri(e, n, t) {
            return (e = rn(6, e, null, n)).lanes = t, e;
        }
        function rs(e) {
            var n = rn(18, null, null, 0);
            return n.stateNode = e, n;
        }
        function rc(e, n, t) {
            return (n = rn(4, null !== e.children ? e.children : [], e.key, n)).lanes = t, n.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, n;
        }
        var ru = [], rd = 0, rf = null, rp = 0, rh = [], rm = 0, rg = null, rb = 1, rv = "";
        function ry(e, n) {
            ru[rd++] = rp, ru[rd++] = rf, rf = e, rp = n;
        }
        function rx(e, n, t) {
            rh[rm++] = rb, rh[rm++] = rv, rh[rm++] = rg, rg = e;
            var r = rb;
            e = rv;
            var o = 32 - eg(r) - 1;
            r &= ~(1 << o), t += 1;
            var a = 32 - eg(n) + o;
            if (30 < a) {
                var l = o - o % 5;
                a = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, rb = 1 << 32 - eg(n) + o | t << o | r, rv = a + e;
            } else rb = 1 << a | t << o | r, rv = e;
        }
        function rw(e) {
            null !== e.return && (ry(e, 1), rx(e, 1, 0));
        }
        function rj(e) {
            for(; e === rf;)rf = ru[--rd], ru[rd] = null, rp = ru[--rd], ru[rd] = null;
            for(; e === rg;)rg = rh[--rm], rh[rm] = null, rv = rh[--rm], rh[rm] = null, rb = rh[--rm], rh[rm] = null;
        }
        function rk(e, n) {
            rh[rm++] = rb, rh[rm++] = rv, rh[rm++] = rg, rb = n.id, rv = n.overflow, rg = e;
        }
        var rO = null, rS = null, r_ = !1, rC = null, rE = !1, rP = Error(i(519));
        function rN(e) {
            var n = Error(i(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", ""));
            throw rR(tJ(n, e)), rP;
        }
        function rz(e) {
            var n = e.stateNode, t = e.type, r = e.memoizedProps;
            switch(n[eR] = e, n[eI] = r, t){
                case "dialog":
                    s4("cancel", n), s4("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    s4("load", n);
                    break;
                case "video":
                case "audio":
                    for(t = 0; t < s1.length; t++)s4(s1[t], n);
                    break;
                case "source":
                    s4("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    s4("error", n), s4("load", n);
                    break;
                case "details":
                    s4("toggle", n);
                    break;
                case "input":
                    s4("invalid", n), no(n, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), e9(n);
                    break;
                case "select":
                    s4("invalid", n);
                    break;
                case "textarea":
                    s4("invalid", n), ns(n, r.value, r.defaultValue, r.children), e9(n);
            }
            "string" != typeof (t = r.children) && "number" != typeof t && "bigint" != typeof t || n.textContent === "" + t || !0 === r.suppressHydrationWarning || ci(n.textContent, t) ? (null != r.popover && (s4("beforetoggle", n), s4("toggle", n)), null != r.onScroll && s4("scroll", n), null != r.onScrollEnd && s4("scrollend", n), null != r.onClick && (n.onclick = cs), n = !0) : n = !1, n || rN(e, !0);
        }
        function rL(e) {
            for(rO = e.return; rO;)switch(rO.tag){
                case 5:
                case 31:
                case 13:
                    rE = !1;
                    return;
                case 27:
                case 3:
                    rE = !0;
                    return;
                default:
                    rO = rO.return;
            }
        }
        function rT(e) {
            if (e !== rO) return !1;
            if (!r_) return rL(e), r_ = !0, !1;
            var n, t = e.tag;
            if ((n = 3 !== t && 27 !== t) && ((n = 5 === t) && (n = "form" === (n = e.type) || "button" === n || cb(e.type, e.memoizedProps)), n = !n), n && rS && rN(e), rL(e), 13 === t) {
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                rS = cL(e);
            } else if (31 === t) {
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                rS = cL(e);
            } else 27 === t ? (t = rS, cO(e.type) ? (e = cz, cz = null, rS = e) : rS = t) : rS = rO ? cN(e.stateNode.nextSibling) : null;
            return !0;
        }
        function rD() {
            rS = rO = null, r_ = !1;
        }
        function rA() {
            var e = rC;
            return null !== e && (null === iY ? iY = e : iY.push.apply(iY, e), rC = null), e;
        }
        function rR(e) {
            null === rC ? rC = [
                e
            ] : rC.push(e);
        }
        var rI = M(null), rM = null, rF = null;
        function rH(e, n, t) {
            H(rI, n._currentValue), n._currentValue = t;
        }
        function rU(e) {
            e._currentValue = rI.current, F(rI);
        }
        function rV(e, n, t) {
            for(; null !== e;){
                var r = e.alternate;
                if ((e.childLanes & n) !== n ? (e.childLanes |= n, null !== r && (r.childLanes |= n)) : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
                e = e.return;
            }
        }
        function rB(e, n, t, r) {
            var o = e.child;
            for(null !== o && (o.return = e); null !== o;){
                var a = o.dependencies;
                if (null !== a) {
                    var l = o.child;
                    a = a.firstContext;
                    e: for(; null !== a;){
                        var s = a;
                        a = o;
                        for(var c = 0; c < n.length; c++)if (s.context === n[c]) {
                            a.lanes |= t, null !== (s = a.alternate) && (s.lanes |= t), rV(a.return, t, e), r || (l = null);
                            break e;
                        }
                        a = s.next;
                    }
                } else if (18 === o.tag) {
                    if (null === (l = o.return)) throw Error(i(341));
                    l.lanes |= t, null !== (a = l.alternate) && (a.lanes |= t), rV(l, t, e), l = null;
                } else l = o.child;
                if (null !== l) l.return = o;
                else for(l = o; null !== l;){
                    if (l === e) {
                        l = null;
                        break;
                    }
                    if (null !== (o = l.sibling)) {
                        o.return = l.return, l = o;
                        break;
                    }
                    l = l.return;
                }
                o = l;
            }
        }
        function r$(e, n, t, r) {
            e = null;
            for(var o = n, a = !1; null !== o;){
                if (!a) {
                    if (0 != (524288 & o.flags)) a = !0;
                    else if (0 != (262144 & o.flags)) break;
                }
                if (10 === o.tag) {
                    var l = o.alternate;
                    if (null === l) throw Error(i(387));
                    if (null !== (l = l.memoizedProps)) {
                        var s = o.type;
                        tS(o.pendingProps.value, l.value) || (null !== e ? e.push(s) : e = [
                            s
                        ]);
                    }
                } else if (o === $.current) {
                    if (null === (l = o.alternate)) throw Error(i(387));
                    l.memoizedState.memoizedState !== o.memoizedState.memoizedState && (null !== e ? e.push(c9) : e = [
                        c9
                    ]);
                }
                o = o.return;
            }
            null !== e && rB(n, e, t, r), n.flags |= 262144;
        }
        function rq(e) {
            for(e = e.firstContext; null !== e;){
                if (!tS(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function rZ(e) {
            rM = e, rF = null, null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function rW(e) {
            return rX(rM, e);
        }
        function rQ(e, n) {
            return null === rM && rZ(e), rX(e, n);
        }
        function rX(e, n) {
            var t = n._currentValue;
            if (n = {
                context: n,
                memoizedValue: t,
                next: null
            }, null === rF) {
                if (null === e) throw Error(i(308));
                rF = n, e.dependencies = {
                    lanes: 0,
                    firstContext: n
                }, e.flags |= 524288;
            } else rF = rF.next = n;
            return t;
        }
        var rG = "undefined" != typeof AbortController ? AbortController : function() {
            var e = [], n = this.signal = {
                aborted: !1,
                addEventListener: function(n, t) {
                    e.push(t);
                }
            };
            this.abort = function() {
                n.aborted = !0, e.forEach(function(e) {
                    return e();
                });
            };
        }, rK = o.unstable_scheduleCallback, rY = o.unstable_NormalPriority, rJ = {
            $$typeof: w,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function r0() {
            return {
                controller: new rG,
                data: new Map,
                refCount: 0
            };
        }
        function r1(e) {
            e.refCount--, 0 === e.refCount && rK(rY, function() {
                e.controller.abort();
            });
        }
        var r2 = null, r3 = 0, r4 = 0, r5 = null;
        function r6() {
            if (0 == --r3 && null !== r2) {
                null !== r5 && (r5.status = "fulfilled");
                var e = r2;
                r2 = null, r4 = 0, r5 = null;
                for(var n = 0; n < e.length; n++)(0, e[n])();
            }
        }
        var r8 = T.S;
        T.S = function(e, n) {
            "object" == typeof n && null !== n && "function" == typeof n.then && function(e, n) {
                if (null === r2) {
                    var t = r2 = [];
                    r3 = 0, r4 = sG(), r5 = {
                        status: "pending",
                        value: void 0,
                        then: function(e) {
                            t.push(e);
                        }
                    };
                }
                r3++, n.then(r6, r6);
            }(0, n), null !== r8 && r8(e, n);
        };
        var r9 = M(null);
        function r7() {
            var e = r9.current;
            return null !== e ? e : iR.pooledCache;
        }
        function oe(e, n) {
            null === n ? H(r9, r9.current) : H(r9, n.pool);
        }
        function on() {
            var e = r7();
            return null === e ? null : {
                parent: rJ._currentValue,
                pool: e
            };
        }
        var ot = Error(i(460)), or = Error(i(474)), oo = Error(i(542)), oa = {
            then: function() {}
        };
        function ol(e) {
            return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function oi() {}
        function os(e, n, t) {
            switch(void 0 === (t = e[t]) ? e.push(n) : t !== n && (n.then(oi, oi), n = t), n.status){
                case "fulfilled":
                    return n.value;
                case "rejected":
                    throw od(e = n.reason), e;
                default:
                    if ("string" == typeof n.status) n.then(oi, oi);
                    else {
                        if (null !== (e = iR) && 100 < e.shellSuspendCounter) throw Error(i(482));
                        (e = n).status = "pending", e.then(function(e) {
                            if ("pending" === n.status) {
                                var t = n;
                                t.status = "fulfilled", t.value = e;
                            }
                        }, function(e) {
                            if ("pending" === n.status) {
                                var t = n;
                                t.status = "rejected", t.reason = e;
                            }
                        });
                    }
                    switch(n.status){
                        case "fulfilled":
                            return n.value;
                        case "rejected":
                            throw od(e = n.reason), e;
                    }
                    throw oc = n, ot;
            }
        }
        var oc = null;
        function ou() {
            if (null === oc) throw Error(i(459));
            var e = oc;
            return oc = null, e;
        }
        function od(e) {
            if (e === ot || e === oo) throw Error(i(483));
        }
        var of = null, op = 0;
        function oh(e) {
            var n = op;
            return op += 1, null === of && (of = []), os(of, e, n);
        }
        function om(e, n) {
            e.ref = void 0 !== (n = n.props.ref) ? n : null;
        }
        function og(e, n) {
            if (n.$$typeof === p) throw Error(i(525));
            throw Error(i(31, "[object Object]" === (e = Object.prototype.toString.call(n)) ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
        }
        function ob(e) {
            return (0, e._init)(e._payload);
        }
        function ov(e) {
            function n(n, t) {
                if (e) {
                    var r = n.deletions;
                    null === r ? (n.deletions = [
                        t
                    ], n.flags |= 16) : r.push(t);
                }
            }
            function t(t, r) {
                if (!e) return null;
                for(; null !== r;)n(t, r), r = r.sibling;
                return null;
            }
            function r(e) {
                for(var n = new Map; null !== e;)null !== e.key ? n.set(e.key, e) : n.set(e.index, e), e = e.sibling;
                return n;
            }
            function o(e, n) {
                return (e = rr(e, n)).index = 0, e.sibling = null, e;
            }
            function a(n, t, r) {
                return (n.index = r, e) ? null !== (r = n.alternate) ? (r = r.index) < t ? (n.flags |= 0x4000002, t) : r : (n.flags |= 0x4000002, t) : (n.flags |= 1048576, t);
            }
            function l(n) {
                return e && null === n.alternate && (n.flags |= 0x4000002), n;
            }
            function s(e, n, t, r) {
                return null === n || 6 !== n.tag ? (n = ri(t, e.mode, r)).return = e : (n = o(n, t)).return = e, n;
            }
            function c(e, n, t, r) {
                var a = t.type;
                return a === g ? d(e, n, t.props.children, r, t.key) : (null !== n && (n.elementType === a || "object" == typeof a && null !== a && a.$$typeof === _ && ob(a) === n.type) ? om(n = o(n, t.props), t) : om(n = ra(t.type, t.key, t.props, null, e.mode, r), t), n.return = e, n);
            }
            function u(e, n, t, r) {
                return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation ? (n = rc(t, e.mode, r)).return = e : (n = o(n, t.children || [])).return = e, n;
            }
            function d(e, n, t, r, a) {
                return null === n || 7 !== n.tag ? (n = rl(t, e.mode, r, a)).return = e : (n = o(n, t)).return = e, n;
            }
            function f(e, n, t) {
                if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return (n = ri("" + n, e.mode, t)).return = e, n;
                if ("object" == typeof n && null !== n) {
                    switch(n.$$typeof){
                        case h:
                            return om(t = ra(n.type, n.key, n.props, null, e.mode, t), n), t.return = e, t;
                        case m:
                            return (n = rc(n, e.mode, t)).return = e, n;
                        case _:
                            return f(e, n = (0, n._init)(n._payload), t);
                    }
                    if (L(n) || N(n)) return (n = rl(n, e.mode, t, null)).return = e, n;
                    if ("function" == typeof n.then) return f(e, oh(n), t);
                    if (n.$$typeof === w) return f(e, rQ(e, n), t);
                    og(e, n);
                }
                return null;
            }
            function p(e, n, t, r) {
                var o = null !== n ? n.key : null;
                if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return null !== o ? null : s(e, n, "" + t, r);
                if ("object" == typeof t && null !== t) {
                    switch(t.$$typeof){
                        case h:
                            return t.key === o ? c(e, n, t, r) : null;
                        case m:
                            return t.key === o ? u(e, n, t, r) : null;
                        case _:
                            return p(e, n, t = (o = t._init)(t._payload), r);
                    }
                    if (L(t) || N(t)) return null !== o ? null : d(e, n, t, r, null);
                    if ("function" == typeof t.then) return p(e, n, oh(t), r);
                    if (t.$$typeof === w) return p(e, n, rQ(e, t), r);
                    og(e, t);
                }
                return null;
            }
            function b(e, n, t, r, o) {
                if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return s(n, e = e.get(t) || null, "" + r, o);
                if ("object" == typeof r && null !== r) {
                    switch(r.$$typeof){
                        case h:
                            return c(n, e = e.get(null === r.key ? t : r.key) || null, r, o);
                        case m:
                            return u(n, e = e.get(null === r.key ? t : r.key) || null, r, o);
                        case _:
                            return b(e, n, t, r = (0, r._init)(r._payload), o);
                    }
                    if (L(r) || N(r)) return d(n, e = e.get(t) || null, r, o, null);
                    if ("function" == typeof r.then) return b(e, n, t, oh(r), o);
                    if (r.$$typeof === w) return b(e, n, t, rQ(n, r), o);
                    og(n, r);
                }
                return null;
            }
            return function(s, c, u, d) {
                try {
                    op = 0;
                    var v = function s(c, u, d, v) {
                        if ("object" == typeof d && null !== d && d.type === g && null === d.key && (d = d.props.children), "object" == typeof d && null !== d) {
                            switch(d.$$typeof){
                                case h:
                                    e: {
                                        for(var y = d.key; null !== u;){
                                            if (u.key === y) {
                                                if ((y = d.type) === g) {
                                                    if (7 === u.tag) {
                                                        t(c, u.sibling), (v = o(u, d.props.children)).return = c, c = v;
                                                        break e;
                                                    }
                                                } else if (u.elementType === y || "object" == typeof y && null !== y && y.$$typeof === _ && ob(y) === u.type) {
                                                    t(c, u.sibling), om(v = o(u, d.props), d), v.return = c, c = v;
                                                    break e;
                                                }
                                                t(c, u);
                                                break;
                                            }
                                            n(c, u), u = u.sibling;
                                        }
                                        d.type === g ? (v = rl(d.props.children, c.mode, v, d.key)).return = c : (om(v = ra(d.type, d.key, d.props, null, c.mode, v), d), v.return = c), c = v;
                                    }
                                    return l(c);
                                case m:
                                    e: {
                                        for(y = d.key; null !== u;){
                                            if (u.key === y) if (4 === u.tag && u.stateNode.containerInfo === d.containerInfo && u.stateNode.implementation === d.implementation) {
                                                t(c, u.sibling), (v = o(u, d.children || [])).return = c, c = v;
                                                break e;
                                            } else {
                                                t(c, u);
                                                break;
                                            }
                                            n(c, u), u = u.sibling;
                                        }
                                        (v = rc(d, c.mode, v)).return = c, c = v;
                                    }
                                    return l(c);
                                case _:
                                    return s(c, u, d = (y = d._init)(d._payload), v);
                            }
                            if (L(d)) return function(o, l, i, s) {
                                for(var c = null, u = null, d = l, h = l = 0, m = null; null !== d && h < i.length; h++){
                                    d.index > h ? (m = d, d = null) : m = d.sibling;
                                    var g = p(o, d, i[h], s);
                                    if (null === g) {
                                        null === d && (d = m);
                                        break;
                                    }
                                    e && d && null === g.alternate && n(o, d), l = a(g, l, h), null === u ? c = g : u.sibling = g, u = g, d = m;
                                }
                                if (h === i.length) return t(o, d), r_ && ry(o, h), c;
                                if (null === d) {
                                    for(; h < i.length; h++)null !== (d = f(o, i[h], s)) && (l = a(d, l, h), null === u ? c = d : u.sibling = d, u = d);
                                    return r_ && ry(o, h), c;
                                }
                                for(d = r(d); h < i.length; h++)null !== (m = b(d, o, h, i[h], s)) && (e && null !== m.alternate && d.delete(null === m.key ? h : m.key), l = a(m, l, h), null === u ? c = m : u.sibling = m, u = m);
                                return e && d.forEach(function(e) {
                                    return n(o, e);
                                }), r_ && ry(o, h), c;
                            }(c, u, d, v);
                            if (N(d)) {
                                if ("function" != typeof (y = N(d))) throw Error(i(150));
                                return function(o, l, s, c) {
                                    if (null == s) throw Error(i(151));
                                    for(var u = null, d = null, h = l, m = l = 0, g = null, v = s.next(); null !== h && !v.done; m++, v = s.next()){
                                        h.index > m ? (g = h, h = null) : g = h.sibling;
                                        var y = p(o, h, v.value, c);
                                        if (null === y) {
                                            null === h && (h = g);
                                            break;
                                        }
                                        e && h && null === y.alternate && n(o, h), l = a(y, l, m), null === d ? u = y : d.sibling = y, d = y, h = g;
                                    }
                                    if (v.done) return t(o, h), r_ && ry(o, m), u;
                                    if (null === h) {
                                        for(; !v.done; m++, v = s.next())null !== (v = f(o, v.value, c)) && (l = a(v, l, m), null === d ? u = v : d.sibling = v, d = v);
                                        return r_ && ry(o, m), u;
                                    }
                                    for(h = r(h); !v.done; m++, v = s.next())null !== (v = b(h, o, m, v.value, c)) && (e && null !== v.alternate && h.delete(null === v.key ? m : v.key), l = a(v, l, m), null === d ? u = v : d.sibling = v, d = v);
                                    return e && h.forEach(function(e) {
                                        return n(o, e);
                                    }), r_ && ry(o, m), u;
                                }(c, u, d = y.call(d), v);
                            }
                            if ("function" == typeof d.then) return s(c, u, oh(d), v);
                            if (d.$$typeof === w) return s(c, u, rQ(c, d), v);
                            og(c, d);
                        }
                        return "string" == typeof d && "" !== d || "number" == typeof d || "bigint" == typeof d ? (d = "" + d, null !== u && 6 === u.tag ? (t(c, u.sibling), (v = o(u, d)).return = c) : (t(c, u), (v = ri(d, c.mode, v)).return = c), l(c = v)) : t(c, u);
                    }(s, c, u, d);
                    return of = null, v;
                } catch (e) {
                    if (e === ot || e === oo) throw e;
                    var y = rn(29, e, null, s.mode);
                    return y.lanes = d, y.return = s, y;
                } finally{}
            };
        }
        var oy = ov(!0), ox = ov(!1), ow = !1;
        function oj(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            };
        }
        function ok(e, n) {
            e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function oO(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function oS(e, n, t) {
            var r = e.updateQueue;
            if (null === r) return null;
            if (r = r.shared, 0 != (2 & iA)) {
                var o = r.pending;
                return null === o ? n.next = n : (n.next = o.next, o.next = n), r.pending = n, n = t9(e), t8(e, null, t), n;
            }
            return t4(e, r, n, t), t9(e);
        }
        function o_(e, n, t) {
            if (null !== (n = n.updateQueue) && (n = n.shared, 0 != (4194048 & t))) {
                var r = n.lanes;
                r &= e.pendingLanes, t |= r, n.lanes = t, eP(e, t);
            }
        }
        function oC(e, n) {
            var t = e.updateQueue, r = e.alternate;
            if (null !== r && t === (r = r.updateQueue)) {
                var o = null, a = null;
                if (null !== (t = t.firstBaseUpdate)) {
                    do {
                        var l = {
                            lane: t.lane,
                            tag: t.tag,
                            payload: t.payload,
                            callback: null,
                            next: null
                        };
                        null === a ? o = a = l : a = a.next = l, t = t.next;
                    }while (null !== t)
                    null === a ? o = a = n : a = a.next = n;
                } else o = a = n;
                t = {
                    baseState: r.baseState,
                    firstBaseUpdate: o,
                    lastBaseUpdate: a,
                    shared: r.shared,
                    callbacks: r.callbacks
                }, e.updateQueue = t;
                return;
            }
            null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
        }
        var oE = !1;
        function oP() {
            if (oE) {
                var e = r5;
                if (null !== e) throw e;
            }
        }
        function oN(e, n, t, r) {
            oE = !1;
            var o = e.updateQueue;
            ow = !1;
            var a = o.firstBaseUpdate, l = o.lastBaseUpdate, i = o.shared.pending;
            if (null !== i) {
                o.shared.pending = null;
                var s = i, c = s.next;
                s.next = null, null === l ? a = c : l.next = c, l = s;
                var u = e.alternate;
                null !== u && (i = (u = u.updateQueue).lastBaseUpdate) !== l && (null === i ? u.firstBaseUpdate = c : i.next = c, u.lastBaseUpdate = s);
            }
            if (null !== a) {
                var d = o.baseState;
                for(l = 0, u = c = s = null, i = a;;){
                    var p = -0x20000001 & i.lane, h = p !== i.lane;
                    if (h ? (iM & p) === p : (r & p) === p) {
                        0 !== p && p === r4 && (oE = !0), null !== u && (u = u.next = {
                            lane: 0,
                            tag: i.tag,
                            payload: i.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var m = e, g = i;
                            switch(p = n, g.tag){
                                case 1:
                                    if ("function" == typeof (m = g.payload)) {
                                        d = m.call(t, d, p);
                                        break e;
                                    }
                                    d = m;
                                    break e;
                                case 3:
                                    m.flags = -65537 & m.flags | 128;
                                case 0:
                                    if (null == (p = "function" == typeof (m = g.payload) ? m.call(t, d, p) : m)) break e;
                                    d = f({}, d, p);
                                    break e;
                                case 2:
                                    ow = !0;
                            }
                        }
                        null !== (p = i.callback) && (e.flags |= 64, h && (e.flags |= 8192), null === (h = o.callbacks) ? o.callbacks = [
                            p
                        ] : h.push(p));
                    } else h = {
                        lane: p,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    }, null === u ? (c = u = h, s = d) : u = u.next = h, l |= p;
                    if (null === (i = i.next)) if (null === (i = o.shared.pending)) break;
                    else i = (h = i).next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
                }
                null === u && (s = d), o.baseState = s, o.firstBaseUpdate = c, o.lastBaseUpdate = u, null === a && (o.shared.lanes = 0), iZ |= l, e.lanes = l, e.memoizedState = d;
            }
        }
        function oz(e, n) {
            if ("function" != typeof e) throw Error(i(191, e));
            e.call(n);
        }
        function oL(e, n) {
            var t = e.callbacks;
            if (null !== t) for(e.callbacks = null, e = 0; e < t.length; e++)oz(t[e], n);
        }
        var oT = M(null), oD = M(0);
        function oA(e, n) {
            H(oD, e = i$), H(oT, n), i$ = e | n.baseLanes;
        }
        function oR() {
            H(oD, i$), H(oT, oT.current);
        }
        function oI() {
            i$ = oD.current, F(oT), F(oD);
        }
        var oM = M(null), oF = null;
        function oH(e) {
            var n = e.alternate;
            H(oq, 1 & oq.current), H(oM, e), null === oF && (null === n || null !== oT.current ? oF = e : null !== n.memoizedState && (oF = e));
        }
        function oU(e) {
            H(oq, oq.current), H(oM, e), null === oF && (oF = e);
        }
        function oV(e) {
            22 === e.tag ? (H(oq, oq.current), H(oM, e), null === oF && (oF = e)) : oB(e);
        }
        function oB() {
            H(oq, oq.current), H(oM, oM.current);
        }
        function o$(e) {
            F(oM), oF === e && (oF = null), F(oq);
        }
        var oq = M(0);
        function oZ(e) {
            for(var n = e; null !== n;){
                if (13 === n.tag) {
                    var t = n.memoizedState;
                    if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || cP(t))) return n;
                } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
                    if (0 != (128 & n.flags)) return n;
                } else if (null !== n.child) {
                    n.child.return = n, n = n.child;
                    continue;
                }
                if (n === e) break;
                for(; null === n.sibling;){
                    if (null === n.return || n.return === e) return null;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
            return null;
        }
        var oW = 0, oQ = null, oX = null, oG = null, oK = !1, oY = !1, oJ = !1, o0 = 0, o1 = 0, o2 = null, o3 = 0;
        function o4() {
            throw Error(i(321));
        }
        function o5(e, n) {
            if (null === n) return !1;
            for(var t = 0; t < n.length && t < e.length; t++)if (!tS(e[t], n[t])) return !1;
            return !0;
        }
        function o6(e, n, t, r, o, a) {
            return oW = a, oQ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, T.H = null === e || null === e.memoizedState ? ln : lt, oJ = !1, a = t(r, o), oJ = !1, oY && (a = o9(n, t, r, o)), o8(e), a;
        }
        function o8(e) {
            T.H = le;
            var n = null !== oX && null !== oX.next;
            if (oW = 0, oG = oX = oQ = null, oK = !1, o1 = 0, o2 = null, n) throw Error(i(300));
            null === e || ly || null !== (e = e.dependencies) && rq(e) && (ly = !0);
        }
        function o9(e, n, t, r) {
            oQ = e;
            var o = 0;
            do {
                if (oY && (o2 = null), o1 = 0, oY = !1, 25 <= o) throw Error(i(301));
                if (o += 1, oG = oX = null, null != e.updateQueue) {
                    var a = e.updateQueue;
                    a.lastEffect = null, a.events = null, a.stores = null, null != a.memoCache && (a.memoCache.index = 0);
                }
                T.H = lr, a = n(t, r);
            }while (oY)
            return a;
        }
        function o7() {
            var e = T.H, n = e.useState()[0];
            return n = "function" == typeof n.then ? al(n) : n, e = e.useState()[0], (null !== oX ? oX.memoizedState : null) !== e && (oQ.flags |= 1024), n;
        }
        function ae() {
            var e = 0 !== o0;
            return o0 = 0, e;
        }
        function an(e, n, t) {
            n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~t;
        }
        function at(e) {
            if (oK) {
                for(e = e.memoizedState; null !== e;){
                    var n = e.queue;
                    null !== n && (n.pending = null), e = e.next;
                }
                oK = !1;
            }
            oW = 0, oG = oX = oQ = null, oY = !1, o1 = o0 = 0, o2 = null;
        }
        function ar() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return null === oG ? oQ.memoizedState = oG = e : oG = oG.next = e, oG;
        }
        function ao() {
            if (null === oX) {
                var e = oQ.alternate;
                e = null !== e ? e.memoizedState : null;
            } else e = oX.next;
            var n = null === oG ? oQ.memoizedState : oG.next;
            if (null !== n) oG = n, oX = e;
            else {
                if (null === e) {
                    if (null === oQ.alternate) throw Error(i(467));
                    throw Error(i(310));
                }
                e = {
                    memoizedState: (oX = e).memoizedState,
                    baseState: oX.baseState,
                    baseQueue: oX.baseQueue,
                    queue: oX.queue,
                    next: null
                }, null === oG ? oQ.memoizedState = oG = e : oG = oG.next = e;
            }
            return oG;
        }
        function aa() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function al(e) {
            var n = o1;
            return o1 += 1, null === o2 && (o2 = []), e = os(o2, e, n), n = oQ, null === (null === oG ? n.memoizedState : oG.next) && (T.H = null === (n = n.alternate) || null === n.memoizedState ? ln : lt), e;
        }
        function ai(e) {
            if (null !== e && "object" == typeof e) {
                if ("function" == typeof e.then) return al(e);
                if (e.$$typeof === w) return rW(e);
            }
            throw Error(i(438, String(e)));
        }
        function as(e) {
            var n = null, t = oQ.updateQueue;
            if (null !== t && (n = t.memoCache), null == n) {
                var r = oQ.alternate;
                null !== r && null !== (r = r.updateQueue) && null != (r = r.memoCache) && (n = {
                    data: r.data.map(function(e) {
                        return e.slice();
                    }),
                    index: 0
                });
            }
            if (null == n && (n = {
                data: [],
                index: 0
            }), null === t && (t = aa(), oQ.updateQueue = t), t.memoCache = n, void 0 === (t = n.data[n.index])) for(t = n.data[n.index] = Array(e), r = 0; r < e; r++)t[r] = E;
            return n.index++, t;
        }
        function ac(e, n) {
            return "function" == typeof n ? n(e) : n;
        }
        function au(e) {
            return ad(ao(), oX, e);
        }
        function ad(e, n, t) {
            var r = e.queue;
            if (null === r) throw Error(i(311));
            r.lastRenderedReducer = t;
            var o = e.baseQueue, a = r.pending;
            if (null !== a) {
                if (null !== o) {
                    var l = o.next;
                    o.next = a.next, a.next = l;
                }
                n.baseQueue = o = a, r.pending = null;
            }
            if (a = e.baseState, null === o) e.memoizedState = a;
            else {
                n = o.next;
                var s = l = null, c = null, u = n, d = !1;
                do {
                    var f = -0x20000001 & u.lane;
                    if (f !== u.lane ? (iM & f) === f : (oW & f) === f) {
                        var p = u.revertLane;
                        if (0 === p) null !== c && (c = c.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }), f === r4 && (d = !0);
                        else if ((oW & p) === p) {
                            u = u.next, p === r4 && (d = !0);
                            continue;
                        } else f = {
                            lane: 0,
                            revertLane: u.revertLane,
                            gesture: null,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }, null === c ? (s = c = f, l = a) : c = c.next = f, oQ.lanes |= p, iZ |= p;
                        f = u.action, oJ && t(a, f), a = u.hasEagerState ? u.eagerState : t(a, f);
                    } else p = {
                        lane: f,
                        revertLane: u.revertLane,
                        gesture: u.gesture,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    }, null === c ? (s = c = p, l = a) : c = c.next = p, oQ.lanes |= f, iZ |= f;
                    u = u.next;
                }while (null !== u && u !== n)
                if (null === c ? l = a : c.next = s, !tS(a, e.memoizedState) && (ly = !0, d && null !== (t = r5))) throw t;
                e.memoizedState = a, e.baseState = l, e.baseQueue = c, r.lastRenderedState = a;
            }
            return null === o && (r.lanes = 0), [
                e.memoizedState,
                r.dispatch
            ];
        }
        function af(e) {
            var n = ao(), t = n.queue;
            if (null === t) throw Error(i(311));
            t.lastRenderedReducer = e;
            var r = t.dispatch, o = t.pending, a = n.memoizedState;
            if (null !== o) {
                t.pending = null;
                var l = o = o.next;
                do a = e(a, l.action), l = l.next;
                while (l !== o)
                tS(a, n.memoizedState) || (ly = !0), n.memoizedState = a, null === n.baseQueue && (n.baseState = a), t.lastRenderedState = a;
            }
            return [
                a,
                r
            ];
        }
        function ap(e, n, t) {
            var r = oQ, o = ao(), a = r_;
            if (a) {
                if (void 0 === t) throw Error(i(407));
                t = t();
            } else t = n();
            var l = !tS((oX || o).memoizedState, t);
            if (l && (o.memoizedState = t, ly = !0), o = o.queue, aM(ag.bind(null, r, o, e), [
                e
            ]), o.getSnapshot !== n || l || null !== oG && 1 & oG.memoizedState.tag) {
                if (r.flags |= 2048, aT(9, {
                    destroy: void 0
                }, am.bind(null, r, o, t, n), null), null === iR) throw Error(i(349));
                a || 0 != (124 & oW) || ah(r, n, t);
            }
            return t;
        }
        function ah(e, n, t) {
            e.flags |= 16384, e = {
                getSnapshot: n,
                value: t
            }, null === (n = oQ.updateQueue) ? (n = aa(), oQ.updateQueue = n, n.stores = [
                e
            ]) : null === (t = n.stores) ? n.stores = [
                e
            ] : t.push(e);
        }
        function am(e, n, t, r) {
            n.value = t, n.getSnapshot = r, ab(n) && av(e);
        }
        function ag(e, n, t) {
            return t(function() {
                ab(n) && av(e);
            });
        }
        function ab(e) {
            var n = e.getSnapshot;
            e = e.value;
            try {
                var t = n();
                return !tS(e, t);
            } catch (e) {
                return !0;
            }
        }
        function av(e) {
            var n = t6(e, 2);
            null !== n && sa(n, e, 2);
        }
        function ay(e) {
            var n = ar();
            if ("function" == typeof e) {
                var t = e;
                if (e = t(), oJ) {
                    em(!0);
                    try {
                        t();
                    } finally{
                        em(!1);
                    }
                }
            }
            return n.memoizedState = n.baseState = e, n.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ac,
                lastRenderedState: e
            }, n;
        }
        function ax(e, n, t, r) {
            return e.baseState = t, ad(e, oX, "function" == typeof r ? r : ac);
        }
        function aw(e, n, t, r, o) {
            if (a8(e)) throw Error(i(485));
            if (null !== (e = n.action)) {
                var a = {
                    payload: o,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(e) {
                        a.listeners.push(e);
                    }
                };
                null !== T.T ? t(!0) : a.isTransition = !1, r(a), null === (t = n.pending) ? (a.next = n.pending = a, aj(n, a)) : (a.next = t.next, n.pending = t.next = a);
            }
        }
        function aj(e, n) {
            var t = n.action, r = n.payload, o = e.state;
            if (n.isTransition) {
                var a = T.T, l = {};
                T.T = l;
                try {
                    var i = t(o, r), s = T.S;
                    null !== s && s(l, i), ak(e, n, i);
                } catch (t) {
                    aS(e, n, t);
                } finally{
                    null !== a && null !== l.types && (a.types = l.types), T.T = a;
                }
            } else try {
                a = t(o, r), ak(e, n, a);
            } catch (t) {
                aS(e, n, t);
            }
        }
        function ak(e, n, t) {
            null !== t && "object" == typeof t && "function" == typeof t.then ? t.then(function(t) {
                aO(e, n, t);
            }, function(t) {
                return aS(e, n, t);
            }) : aO(e, n, t);
        }
        function aO(e, n, t) {
            n.status = "fulfilled", n.value = t, a_(n), e.state = t, null !== (n = e.pending) && ((t = n.next) === n ? e.pending = null : (t = t.next, n.next = t, aj(e, t)));
        }
        function aS(e, n, t) {
            var r = e.pending;
            if (e.pending = null, null !== r) {
                r = r.next;
                do n.status = "rejected", n.reason = t, a_(n), n = n.next;
                while (n !== r)
            }
            e.action = null;
        }
        function a_(e) {
            e = e.listeners;
            for(var n = 0; n < e.length; n++)(0, e[n])();
        }
        function aC(e, n) {
            return n;
        }
        function aE(e, n) {
            if (r_) {
                var t = iR.formState;
                if (null !== t) {
                    e: {
                        var r = oQ;
                        if (r_) {
                            if (rS) {
                                n: {
                                    for(var o = rS, a = rE; 8 !== o.nodeType;)if (!a || null === (o = cN(o.nextSibling))) {
                                        o = null;
                                        break n;
                                    }
                                    o = "F!" === (a = o.data) || "F" === a ? o : null;
                                }
                                if (o) {
                                    rS = cN(o.nextSibling), r = "F!" === o.data;
                                    break e;
                                }
                            }
                            rN(r);
                        }
                        r = !1;
                    }
                    r && (n = t[0]);
                }
            }
            return (t = ar()).memoizedState = t.baseState = n, r = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: aC,
                lastRenderedState: n
            }, t.queue = r, t = a4.bind(null, oQ, r), r.dispatch = t, r = ay(!1), a = a6.bind(null, oQ, !1, r.queue), r = ar(), o = {
                state: n,
                dispatch: null,
                action: e,
                pending: null
            }, r.queue = o, t = aw.bind(null, oQ, o, a, t), o.dispatch = t, r.memoizedState = e, [
                n,
                t,
                !1
            ];
        }
        function aP(e) {
            return aN(ao(), oX, e);
        }
        function aN(e, n, t) {
            if (n = ad(e, n, aC)[0], e = au(ac)[0], "object" == typeof n && null !== n && "function" == typeof n.then) try {
                var r = al(n);
            } catch (e) {
                if (e === ot) throw oo;
                throw e;
            }
            else r = n;
            var o = (n = ao()).queue, a = o.dispatch;
            return t !== n.memoizedState && (oQ.flags |= 2048, aT(9, {
                destroy: void 0
            }, az.bind(null, o, t), null)), [
                r,
                a,
                e
            ];
        }
        function az(e, n) {
            e.action = n;
        }
        function aL(e) {
            var n = ao(), t = oX;
            if (null !== t) return aN(n, t, e);
            ao(), n = n.memoizedState;
            var r = (t = ao()).queue.dispatch;
            return t.memoizedState = e, [
                n,
                r,
                !1
            ];
        }
        function aT(e, n, t, r) {
            return e = {
                tag: e,
                create: t,
                deps: r,
                inst: n,
                next: null
            }, null === (n = oQ.updateQueue) && (n = aa(), oQ.updateQueue = n), null === (t = n.lastEffect) ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e), e;
        }
        function aD() {
            return ao().memoizedState;
        }
        function aA(e, n, t, r) {
            var o = ar();
            oQ.flags |= e, o.memoizedState = aT(1 | n, {
                destroy: void 0
            }, t, void 0 === r ? null : r);
        }
        function aR(e, n, t, r) {
            var o = ao();
            r = void 0 === r ? null : r;
            var a = o.memoizedState.inst;
            null !== oX && null !== r && o5(r, oX.memoizedState.deps) ? o.memoizedState = aT(n, a, t, r) : (oQ.flags |= e, o.memoizedState = aT(1 | n, a, t, r));
        }
        function aI(e, n) {
            aA(8390656, 8, e, n);
        }
        function aM(e, n) {
            aR(2048, 8, e, n);
        }
        function aF(e, n) {
            return aR(4, 2, e, n);
        }
        function aH(e, n) {
            return aR(4, 4, e, n);
        }
        function aU(e, n) {
            if ("function" == typeof n) {
                var t = n(e = e());
                return function() {
                    "function" == typeof t ? t() : n(null);
                };
            }
            if (null != n) return n.current = e = e(), function() {
                n.current = null;
            };
        }
        function aV(e, n, t) {
            t = null != t ? t.concat([
                e
            ]) : null, aR(4, 4, aU.bind(null, n, e), t);
        }
        function aB() {}
        function a$(e, n) {
            var t = ao();
            n = void 0 === n ? null : n;
            var r = t.memoizedState;
            return null !== n && o5(n, r[1]) ? r[0] : (t.memoizedState = [
                e,
                n
            ], e);
        }
        function aq(e, n) {
            var t = ao();
            n = void 0 === n ? null : n;
            var r = t.memoizedState;
            if (null !== n && o5(n, r[1])) return r[0];
            if (r = e(), oJ) {
                em(!0);
                try {
                    e();
                } finally{
                    em(!1);
                }
            }
            return t.memoizedState = [
                r,
                n
            ], r;
        }
        function aZ(e, n, t) {
            return void 0 === t || 0 != (0x40000000 & oW) ? e.memoizedState = n : (e.memoizedState = t, e = so(), oQ.lanes |= e, iZ |= e, t);
        }
        function aW(e, n, t, r) {
            return tS(t, n) ? t : null !== oT.current ? (tS(e = aZ(e, t, r), n) || (ly = !0), e) : 0 == (42 & oW) || 0 != (0x40000000 & oW) ? (ly = !0, e.memoizedState = t) : (e = so(), oQ.lanes |= e, iZ |= e, n);
        }
        function aQ(e, n, t, r, o) {
            var a = D.p;
            D.p = 0 !== a && 8 > a ? a : 8;
            var l = T.T, i = {};
            T.T = i, a6(e, !1, n, t);
            try {
                var s = o(), c = T.S;
                if (null !== c && c(i, s), null !== s && "object" == typeof s && "function" == typeof s.then) {
                    var u, d, f = (u = [], d = {
                        status: "pending",
                        value: null,
                        reason: null,
                        then: function(e) {
                            u.push(e);
                        }
                    }, s.then(function() {
                        d.status = "fulfilled", d.value = r;
                        for(var e = 0; e < u.length; e++)(0, u[e])(r);
                    }, function(e) {
                        for(d.status = "rejected", d.reason = e, e = 0; e < u.length; e++)(0, u[e])(void 0);
                    }), d);
                    a5(e, n, f, sr(e));
                } else a5(e, n, r, sr(e));
            } catch (t) {
                a5(e, n, {
                    then: function() {},
                    status: "rejected",
                    reason: t
                }, sr());
            } finally{
                D.p = a, null !== l && null !== i.types && (l.types = i.types), T.T = l;
            }
        }
        function aX() {}
        function aG(e, n, t, r) {
            if (5 !== e.tag) throw Error(i(476));
            var o = aK(e).queue;
            aQ(e, o, n, A, null === t ? aX : function() {
                return aY(e), t(r);
            });
        }
        function aK(e) {
            var n = e.memoizedState;
            if (null !== n) return n;
            var t = {};
            return (n = {
                memoizedState: A,
                baseState: A,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: ac,
                    lastRenderedState: A
                },
                next: null
            }).next = {
                memoizedState: t,
                baseState: t,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: ac,
                    lastRenderedState: t
                },
                next: null
            }, e.memoizedState = n, null !== (e = e.alternate) && (e.memoizedState = n), n;
        }
        function aY(e) {
            var n = aK(e).next.queue;
            a5(e, n, {}, sr());
        }
        function aJ() {
            return rW(c9);
        }
        function a0() {
            return ao().memoizedState;
        }
        function a1() {
            return ao().memoizedState;
        }
        function a2(e) {
            for(var n = e.return; null !== n;){
                switch(n.tag){
                    case 24:
                    case 3:
                        var t = sr(), r = oS(n, e = oO(t), t);
                        null !== r && (sa(r, n, t), o_(r, n, t)), n = {
                            cache: r0()
                        }, e.payload = n;
                        return;
                }
                n = n.return;
            }
        }
        function a3(e, n, t) {
            var r = sr();
            t = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: t,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, a8(e) ? a9(n, t) : null !== (t = t5(e, n, t, r)) && (sa(t, e, r), a7(t, n, r));
        }
        function a4(e, n, t) {
            a5(e, n, t, sr());
        }
        function a5(e, n, t, r) {
            var o = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: t,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (a8(e)) a9(n, o);
            else {
                var a = e.alternate;
                if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = n.lastRenderedReducer)) try {
                    var l = n.lastRenderedState, i = a(l, t);
                    if (o.hasEagerState = !0, o.eagerState = i, tS(i, l)) return t4(e, n, o, 0), null === iR && t3(), !1;
                } catch (e) {} finally{}
                if (null !== (t = t5(e, n, o, r))) return sa(t, e, r), a7(t, n, r), !0;
            }
            return !1;
        }
        function a6(e, n, t, r) {
            if (r = {
                lane: 2,
                revertLane: sG(),
                gesture: null,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, a8(e)) {
                if (n) throw Error(i(479));
            } else null !== (n = t5(e, t, r, 2)) && sa(n, e, 2);
        }
        function a8(e) {
            var n = e.alternate;
            return e === oQ || null !== n && n === oQ;
        }
        function a9(e, n) {
            oY = oK = !0;
            var t = e.pending;
            null === t ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
        }
        function a7(e, n, t) {
            if (0 != (4194048 & t)) {
                var r = n.lanes;
                r &= e.pendingLanes, n.lanes = t |= r, eP(e, t);
            }
        }
        var le = {
            readContext: rW,
            use: ai,
            useCallback: o4,
            useContext: o4,
            useEffect: o4,
            useImperativeHandle: o4,
            useLayoutEffect: o4,
            useInsertionEffect: o4,
            useMemo: o4,
            useReducer: o4,
            useRef: o4,
            useState: o4,
            useDebugValue: o4,
            useDeferredValue: o4,
            useTransition: o4,
            useSyncExternalStore: o4,
            useId: o4,
            useHostTransitionStatus: o4,
            useFormState: o4,
            useActionState: o4,
            useOptimistic: o4,
            useMemoCache: o4,
            useCacheRefresh: o4
        }, ln = {
            readContext: rW,
            use: ai,
            useCallback: function(e, n) {
                return ar().memoizedState = [
                    e,
                    void 0 === n ? null : n
                ], e;
            },
            useContext: rW,
            useEffect: aI,
            useImperativeHandle: function(e, n, t) {
                t = null != t ? t.concat([
                    e
                ]) : null, aA(4194308, 4, aU.bind(null, n, e), t);
            },
            useLayoutEffect: function(e, n) {
                return aA(4194308, 4, e, n);
            },
            useInsertionEffect: function(e, n) {
                aA(4, 2, e, n);
            },
            useMemo: function(e, n) {
                var t = ar();
                n = void 0 === n ? null : n;
                var r = e();
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return t.memoizedState = [
                    r,
                    n
                ], r;
            },
            useReducer: function(e, n, t) {
                var r = ar();
                if (void 0 !== t) {
                    var o = t(n);
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                } else o = n;
                return r.memoizedState = r.baseState = o, r.queue = e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: o
                }, e = e.dispatch = a3.bind(null, oQ, e), [
                    r.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                return ar().memoizedState = e = {
                    current: e
                };
            },
            useState: function(e) {
                var n = (e = ay(e)).queue, t = a4.bind(null, oQ, n);
                return n.dispatch = t, [
                    e.memoizedState,
                    t
                ];
            },
            useDebugValue: aB,
            useDeferredValue: function(e, n) {
                return aZ(ar(), e, n);
            },
            useTransition: function() {
                var e = ay(!1);
                return e = aQ.bind(null, oQ, e.queue, !0, !1), ar().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, n, t) {
                var r = oQ, o = ar();
                if (r_) {
                    if (void 0 === t) throw Error(i(407));
                    t = t();
                } else {
                    if (t = n(), null === iR) throw Error(i(349));
                    0 != (124 & iM) || ah(r, n, t);
                }
                o.memoizedState = t;
                var a = {
                    value: t,
                    getSnapshot: n
                };
                return o.queue = a, aI(ag.bind(null, r, a, e), [
                    e
                ]), r.flags |= 2048, aT(9, {
                    destroy: void 0
                }, am.bind(null, r, a, t, n), null), t;
            },
            useId: function() {
                var e = ar(), n = iR.identifierPrefix;
                if (r_) {
                    var t = rv, r = rb;
                    n = "\xab" + n + "R" + (t = (r & ~(1 << 32 - eg(r) - 1)).toString(32) + t), 0 < (t = o0++) && (n += "H" + t.toString(32)), n += "\xbb";
                } else n = "\xab" + n + "r" + (t = o3++).toString(32) + "\xbb";
                return e.memoizedState = n;
            },
            useHostTransitionStatus: aJ,
            useFormState: aE,
            useActionState: aE,
            useOptimistic: function(e) {
                var n = ar();
                n.memoizedState = n.baseState = e;
                var t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return n.queue = t, n = a6.bind(null, oQ, !0, t), t.dispatch = n, [
                    e,
                    n
                ];
            },
            useMemoCache: as,
            useCacheRefresh: function() {
                return ar().memoizedState = a2.bind(null, oQ);
            }
        }, lt = {
            readContext: rW,
            use: ai,
            useCallback: a$,
            useContext: rW,
            useEffect: aM,
            useImperativeHandle: aV,
            useInsertionEffect: aF,
            useLayoutEffect: aH,
            useMemo: aq,
            useReducer: au,
            useRef: aD,
            useState: function() {
                return au(ac);
            },
            useDebugValue: aB,
            useDeferredValue: function(e, n) {
                return aW(ao(), oX.memoizedState, e, n);
            },
            useTransition: function() {
                var e = au(ac)[0], n = ao().memoizedState;
                return [
                    "boolean" == typeof e ? e : al(e),
                    n
                ];
            },
            useSyncExternalStore: ap,
            useId: a0,
            useHostTransitionStatus: aJ,
            useFormState: aP,
            useActionState: aP,
            useOptimistic: function(e, n) {
                return ax(ao(), oX, e, n);
            },
            useMemoCache: as,
            useCacheRefresh: a1
        }, lr = {
            readContext: rW,
            use: ai,
            useCallback: a$,
            useContext: rW,
            useEffect: aM,
            useImperativeHandle: aV,
            useInsertionEffect: aF,
            useLayoutEffect: aH,
            useMemo: aq,
            useReducer: af,
            useRef: aD,
            useState: function() {
                return af(ac);
            },
            useDebugValue: aB,
            useDeferredValue: function(e, n) {
                var t = ao();
                return null === oX ? aZ(t, e, n) : aW(t, oX.memoizedState, e, n);
            },
            useTransition: function() {
                var e = af(ac)[0], n = ao().memoizedState;
                return [
                    "boolean" == typeof e ? e : al(e),
                    n
                ];
            },
            useSyncExternalStore: ap,
            useId: a0,
            useHostTransitionStatus: aJ,
            useFormState: aL,
            useActionState: aL,
            useOptimistic: function(e, n) {
                var t = ao();
                return null !== oX ? ax(t, oX, e, n) : (t.baseState = e, [
                    e,
                    t.queue.dispatch
                ]);
            },
            useMemoCache: as,
            useCacheRefresh: a1
        };
        function lo(e, n, t, r) {
            t = null == (t = t(r, n = e.memoizedState)) ? n : f({}, n, t), e.memoizedState = t, 0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var la = {
            enqueueSetState: function(e, n, t) {
                e = e._reactInternals;
                var r = sr(), o = oO(r);
                o.payload = n, null != t && (o.callback = t), null !== (n = oS(e, o, r)) && (sa(n, e, r), o_(n, e, r));
            },
            enqueueReplaceState: function(e, n, t) {
                e = e._reactInternals;
                var r = sr(), o = oO(r);
                o.tag = 1, o.payload = n, null != t && (o.callback = t), null !== (n = oS(e, o, r)) && (sa(n, e, r), o_(n, e, r));
            },
            enqueueForceUpdate: function(e, n) {
                e = e._reactInternals;
                var t = sr(), r = oO(t);
                r.tag = 2, null != n && (r.callback = n), null !== (n = oS(e, r, t)) && (sa(n, e, t), o_(n, e, t));
            }
        };
        function ll(e, n, t, r, o, a, l) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, l) : !n.prototype || !n.prototype.isPureReactComponent || !t_(t, r) || !t_(o, a);
        }
        function li(e, n, t, r) {
            e = n.state, "function" == typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r), "function" == typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && la.enqueueReplaceState(n, n.state, null);
        }
        function ls(e, n) {
            var t = n;
            if ("ref" in n) for(var r in t = {}, n)"ref" !== r && (t[r] = n[r]);
            if (e = e.defaultProps) for(var o in t === n && (t = f({}, t)), e)void 0 === t[o] && (t[o] = e[o]);
            return t;
        }
        var lc = "function" == typeof reportError ? reportError : function(e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                var n = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(n)) return;
            } else if ("object" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$78_react_30f3e4af1d95965e7c385d93627382e2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && "function" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$78_react_30f3e4af1d95965e7c385d93627382e2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit) return void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$78_react_30f3e4af1d95965e7c385d93627382e2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", e);
            console.error(e);
        };
        function lu(e) {
            lc(e);
        }
        function ld(e) {
            console.error(e);
        }
        function lf(e) {
            lc(e);
        }
        function lp(e, n) {
            try {
                (0, e.onUncaughtError)(n.value, {
                    componentStack: n.stack
                });
            } catch (e) {
                setTimeout(function() {
                    throw e;
                });
            }
        }
        function lh(e, n, t) {
            try {
                (0, e.onCaughtError)(t.value, {
                    componentStack: t.stack,
                    errorBoundary: 1 === n.tag ? n.stateNode : null
                });
            } catch (e) {
                setTimeout(function() {
                    throw e;
                });
            }
        }
        function lm(e, n, t) {
            return (t = oO(t)).tag = 3, t.payload = {
                element: null
            }, t.callback = function() {
                lp(e, n);
            }, t;
        }
        function lg(e) {
            return (e = oO(e)).tag = 3, e;
        }
        function lb(e, n, t, r) {
            var o = t.type.getDerivedStateFromError;
            if ("function" == typeof o) {
                var a = r.value;
                e.payload = function() {
                    return o(a);
                }, e.callback = function() {
                    lh(n, t, r);
                };
            }
            var l = t.stateNode;
            null !== l && "function" == typeof l.componentDidCatch && (e.callback = function() {
                lh(n, t, r), "function" != typeof o && (null === i3 ? i3 = new Set([
                    this
                ]) : i3.add(this));
                var e = r.stack;
                this.componentDidCatch(r.value, {
                    componentStack: null !== e ? e : ""
                });
            });
        }
        var lv = Error(i(461)), ly = !1;
        function lx(e, n, t, r) {
            n.child = null === e ? ox(n, null, t, r) : oy(n, e.child, t, r);
        }
        function lw(e, n, t, r, o) {
            t = t.render;
            var a = n.ref;
            if ("ref" in r) {
                var l = {};
                for(var i in r)"ref" !== i && (l[i] = r[i]);
            } else l = r;
            return (rZ(n), r = o6(e, n, t, l, a, o), i = ae(), null === e || ly) ? (r_ && i && rw(n), n.flags |= 1, lx(e, n, r, o), n.child) : (an(e, n, o), lB(e, n, o));
        }
        function lj(e, n, t, r, o) {
            if (null === e) {
                var a = t.type;
                return "function" != typeof a || rt(a) || void 0 !== a.defaultProps || null !== t.compare ? ((e = ra(t.type, null, r, n, n.mode, o)).ref = n.ref, e.return = n, n.child = e) : (n.tag = 15, n.type = a, lk(e, n, a, r, o));
            }
            if (a = e.child, !l$(e, o)) {
                var l = a.memoizedProps;
                if ((t = null !== (t = t.compare) ? t : t_)(l, r) && e.ref === n.ref) return lB(e, n, o);
            }
            return n.flags |= 1, (e = rr(a, r)).ref = n.ref, e.return = n, n.child = e;
        }
        function lk(e, n, t, r, o) {
            if (null !== e) {
                var a = e.memoizedProps;
                if (t_(a, r) && e.ref === n.ref) if (ly = !1, n.pendingProps = r = a, !l$(e, o)) return n.lanes = e.lanes, lB(e, n, o);
                else 0 != (131072 & e.flags) && (ly = !0);
            }
            return lP(e, n, t, r, o);
        }
        function lO(e, n, t, r) {
            var o = r.children, a = null !== e ? e.memoizedState : null;
            if ("hidden" === r.mode) {
                if (0 != (128 & n.flags)) {
                    if (r = null !== a ? a.baseLanes | t : t, null !== e) {
                        for(a = 0, o = n.child = e.child; null !== o;)a = a | o.lanes | o.childLanes, o = o.sibling;
                        n.childLanes = a & ~r;
                    } else n.childLanes = 0, n.child = null;
                    return lS(e, n, r, t);
                }
                if (0 == (0x20000000 & t)) return n.lanes = n.childLanes = 0x20000000, lS(e, n, null !== a ? a.baseLanes | t : t, t);
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, null !== e && oe(n, null !== a ? a.cachePool : null), null !== a ? oA(n, a) : oR(), oV(n);
            } else null !== a ? (oe(n, a.cachePool), oA(n, a), oB(n), n.memoizedState = null) : (null !== e && oe(n, null), oR(), oB(n));
            return lx(e, n, o, t), n.child;
        }
        function lS(e, n, t, r) {
            var o = r7();
            return n.memoizedState = {
                baseLanes: t,
                cachePool: o = null === o ? null : {
                    parent: rJ._currentValue,
                    pool: o
                }
            }, null !== e && oe(n, null), oR(), oV(n), null !== e && r$(e, n, r, !0), null;
        }
        function l_(e, n) {
            return (n = lM({
                mode: n.mode,
                children: n.children
            }, e.mode)).ref = e.ref, e.child = n, n.return = e, n;
        }
        function lC(e, n, t) {
            return oy(n, e.child, null, t), e = l_(n, n.pendingProps), e.flags |= 2, o$(n), n.memoizedState = null, e;
        }
        function lE(e, n) {
            var t = n.ref;
            if (null === t) null !== e && null !== e.ref && (n.flags |= 4194816);
            else {
                if ("function" != typeof t && "object" != typeof t) throw Error(i(284));
                (null === e || e.ref !== t) && (n.flags |= 4194816);
            }
        }
        function lP(e, n, t, r, o) {
            return (rZ(n), t = o6(e, n, t, r, void 0, o), r = ae(), null === e || ly) ? (r_ && r && rw(n), n.flags |= 1, lx(e, n, t, o), n.child) : (an(e, n, o), lB(e, n, o));
        }
        function lN(e, n, t, r, o, a) {
            return (rZ(n), n.updateQueue = null, t = o9(n, r, t, o), o8(e), r = ae(), null === e || ly) ? (r_ && r && rw(n), n.flags |= 1, lx(e, n, t, a), n.child) : (an(e, n, a), lB(e, n, a));
        }
        function lz(e, n, t, r, o) {
            if (rZ(n), null === n.stateNode) {
                var a = t7, l = t.contextType;
                "object" == typeof l && null !== l && (a = rW(l)), n.memoizedState = null !== (a = new t(r, a)).state && void 0 !== a.state ? a.state : null, a.updater = la, n.stateNode = a, a._reactInternals = n, (a = n.stateNode).props = r, a.state = n.memoizedState, a.refs = {}, oj(n), l = t.contextType, a.context = "object" == typeof l && null !== l ? rW(l) : t7, a.state = n.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (lo(n, t, l, r), a.state = n.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (l = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), l !== a.state && la.enqueueReplaceState(a, a.state, null), oN(n, r, a, o), oP(), a.state = n.memoizedState), "function" == typeof a.componentDidMount && (n.flags |= 4194308), r = !0;
            } else if (null === e) {
                a = n.stateNode;
                var i = n.memoizedProps, s = ls(t, i);
                a.props = s;
                var c = a.context, u = t.contextType;
                l = t7, "object" == typeof u && null !== u && (l = rW(u));
                var d = t.getDerivedStateFromProps;
                u = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate, i = n.pendingProps !== i, u || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (i || c !== l) && li(n, a, r, l), ow = !1;
                var f = n.memoizedState;
                a.state = f, oN(n, r, a, o), oP(), c = n.memoizedState, i || f !== c || ow ? ("function" == typeof d && (lo(n, t, d, r), c = n.memoizedState), (s = ow || ll(n, t, s, r, f, c, l)) ? (u || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (n.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = c), a.props = r, a.state = c, a.context = l, r = s) : ("function" == typeof a.componentDidMount && (n.flags |= 4194308), r = !1);
            } else {
                a = n.stateNode, ok(e, n), u = ls(t, l = n.memoizedProps), a.props = u, d = n.pendingProps, f = a.context, c = t.contextType, s = t7, "object" == typeof c && null !== c && (s = rW(c)), (c = "function" == typeof (i = t.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== d || f !== s) && li(n, a, r, s), ow = !1, f = n.memoizedState, a.state = f, oN(n, r, a, o), oP();
                var p = n.memoizedState;
                l !== d || f !== p || ow || null !== e && null !== e.dependencies && rq(e.dependencies) ? ("function" == typeof i && (lo(n, t, i, r), p = n.memoizedState), (u = ow || ll(n, t, u, r, f, p, s) || null !== e && null !== e.dependencies && rq(e.dependencies)) ? (c || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, s), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, s)), "function" == typeof a.componentDidUpdate && (n.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (n.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = p), a.props = r, a.state = p, a.context = s, r = u) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 1024), r = !1);
            }
            return a = r, lE(e, n), r = 0 != (128 & n.flags), a || r ? (a = n.stateNode, t = r && "function" != typeof t.getDerivedStateFromError ? null : a.render(), n.flags |= 1, null !== e && r ? (n.child = oy(n, e.child, null, o), n.child = oy(n, null, t, o)) : lx(e, n, t, o), n.memoizedState = a.state, e = n.child) : e = lB(e, n, o), e;
        }
        function lL(e, n, t, r) {
            return rD(), n.flags |= 256, lx(e, n, t, r), n.child;
        }
        var lT = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function lD(e) {
            return {
                baseLanes: e,
                cachePool: on()
            };
        }
        function lA(e, n, t) {
            return e = null !== e ? e.childLanes & ~t : 0, n && (e |= iX), e;
        }
        function lR(e, n, t) {
            var r, o = n.pendingProps, a = !1, l = 0 != (128 & n.flags);
            if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & oq.current)), r && (a = !0, n.flags &= -129), r = 0 != (32 & n.flags), n.flags &= -33, null === e) {
                if (r_) {
                    if (a ? oH(n) : oB(n), (e = rS) ? null !== (e = null !== (e = cE(e, rE)) && "&" !== e.data ? e : null) && (n.memoizedState = {
                        dehydrated: e,
                        treeContext: null !== rg ? {
                            id: rb,
                            overflow: rv
                        } : null,
                        retryLane: 0x20000000,
                        hydrationErrors: null
                    }, (t = rs(e)).return = n, n.child = t, rO = n, rS = null) : e = null, null === e) throw rN(n);
                    return cP(e) ? n.lanes = 32 : n.lanes = 0x20000000, null;
                }
                var s = o.children;
                return (o = o.fallback, a) ? (oB(n), s = lM({
                    mode: "hidden",
                    children: s
                }, a = n.mode), o = rl(o, a, t, null), s.return = n, o.return = n, s.sibling = o, n.child = s, (s = n.child).memoizedState = lD(t), s.childLanes = lA(e, r, t), n.memoizedState = lT, o) : (oH(n), lI(n, s));
            }
            var c = e.memoizedState;
            if (null !== c && null !== (s = c.dehydrated)) {
                if (l) 256 & n.flags ? (oH(n), n.flags &= -257, n = lF(e, n, t)) : null !== n.memoizedState ? (oB(n), n.child = e.child, n.flags |= 128, n = null) : (oB(n), s = o.fallback, a = n.mode, o = lM({
                    mode: "visible",
                    children: o.children
                }, a), s = rl(s, a, t, null), s.flags |= 2, o.return = n, s.return = n, o.sibling = s, n.child = o, oy(n, e.child, null, t), (o = n.child).memoizedState = lD(t), o.childLanes = lA(e, r, t), n.memoizedState = lT, n = s);
                else if (oH(n), cP(s)) {
                    if (r = s.nextSibling && s.nextSibling.dataset) var u = r.dgst;
                    r = u, (o = Error(i(419))).stack = "", o.digest = r, rR({
                        value: o,
                        source: null,
                        stack: null
                    }), n = lF(e, n, t);
                } else if (ly || r$(e, n, t, !1), r = 0 != (t & e.childLanes), ly || r) {
                    if (null !== (r = iR) && 0 !== (o = eN(r, t)) && o !== c.retryLane) throw c.retryLane = o, t6(e, o), sa(r, e, o), lv;
                    "$?" === s.data || sg(), n = lF(e, n, t);
                } else "$?" === s.data ? (n.flags |= 192, n.child = e.child, n = null) : (e = c.treeContext, rS = cN(s.nextSibling), rO = n, r_ = !0, rC = null, rE = !1, null !== e && rk(n, e), n = lI(n, o.children), n.flags |= 4096);
                return n;
            }
            return a ? (oB(n), s = o.fallback, a = n.mode, u = (c = e.child).sibling, (o = rr(c, {
                mode: "hidden",
                children: o.children
            })).subtreeFlags = 0x3e00000 & c.subtreeFlags, null !== u ? s = rr(u, s) : (s = rl(s, a, t, null), s.flags |= 2), s.return = n, o.return = n, o.sibling = s, n.child = o, o = s, s = n.child, null === (a = e.child.memoizedState) ? a = lD(t) : (null !== (c = a.cachePool) ? (u = rJ._currentValue, c = c.parent !== u ? {
                parent: u,
                pool: u
            } : c) : c = on(), a = {
                baseLanes: a.baseLanes | t,
                cachePool: c
            }), s.memoizedState = a, s.childLanes = lA(e, r, t), n.memoizedState = lT, o) : (oH(n), e = (t = e.child).sibling, (t = rr(t, {
                mode: "visible",
                children: o.children
            })).return = n, t.sibling = null, null !== e && (null === (r = n.deletions) ? (n.deletions = [
                e
            ], n.flags |= 16) : r.push(e)), n.child = t, n.memoizedState = null, t);
        }
        function lI(e, n) {
            return (n = lM({
                mode: "visible",
                children: n
            }, e.mode)).return = e, e.child = n;
        }
        function lM(e, n) {
            return (e = rn(22, e, null, n)).lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function lF(e, n, t) {
            return oy(n, e.child, null, t), e = lI(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
        }
        function lH(e, n, t) {
            e.lanes |= n;
            var r = e.alternate;
            null !== r && (r.lanes |= n), rV(e.return, n, t);
        }
        function lU(e, n, t, r, o) {
            var a = e.memoizedState;
            null === a ? e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: t,
                tailMode: o
            } : (a.isBackwards = n, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = t, a.tailMode = o);
        }
        function lV(e, n, t) {
            var r = n.pendingProps, o = r.revealOrder, a = r.tail;
            if (lx(e, n, r.children, t), 0 != (2 & (r = oq.current))) r = 1 & r | 2, n.flags |= 128;
            else {
                if (null !== e && 0 != (128 & e.flags)) e: for(e = n.child; null !== e;){
                    if (13 === e.tag) null !== e.memoizedState && lH(e, t, n);
                    else if (19 === e.tag) lH(e, t, n);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === n) break;
                    for(; null === e.sibling;){
                        if (null === e.return || e.return === n) break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
                r &= 1;
            }
            switch(H(oq, r), o){
                case "forwards":
                    for(o = null, t = n.child; null !== t;)null !== (e = t.alternate) && null === oZ(e) && (o = t), t = t.sibling;
                    null === (t = o) ? (o = n.child, n.child = null) : (o = t.sibling, t.sibling = null), lU(n, !1, o, t, a);
                    break;
                case "backwards":
                    for(t = null, o = n.child, n.child = null; null !== o;){
                        if (null !== (e = o.alternate) && null === oZ(e)) {
                            n.child = o;
                            break;
                        }
                        e = o.sibling, o.sibling = t, t = o, o = e;
                    }
                    lU(n, !0, t, null, a);
                    break;
                case "together":
                    lU(n, !1, null, null, void 0);
                    break;
                default:
                    n.memoizedState = null;
            }
            return n.child;
        }
        function lB(e, n, t) {
            if (null !== e && (n.dependencies = e.dependencies), iZ |= n.lanes, 0 == (t & n.childLanes)) {
                if (null === e) return null;
                else if (r$(e, n, t, !1), 0 == (t & n.childLanes)) return null;
            }
            if (null !== e && n.child !== e.child) throw Error(i(153));
            if (null !== n.child) {
                for(t = rr(e = n.child, e.pendingProps), n.child = t, t.return = n; null !== e.sibling;)e = e.sibling, (t = t.sibling = rr(e, e.pendingProps)).return = n;
                t.sibling = null;
            }
            return n.child;
        }
        function l$(e, n) {
            return 0 != (e.lanes & n) || !!(null !== (e = e.dependencies) && rq(e));
        }
        function lq(e, n, t) {
            if (null !== e) if (e.memoizedProps !== n.pendingProps) ly = !0;
            else {
                if (!l$(e, t) && 0 == (128 & n.flags)) return ly = !1, function(e, n, t) {
                    switch(n.tag){
                        case 3:
                            q(n, n.stateNode.containerInfo), rH(n, rJ, e.memoizedState.cache), rD();
                            break;
                        case 27:
                        case 5:
                            W(n);
                            break;
                        case 4:
                            q(n, n.stateNode.containerInfo);
                            break;
                        case 10:
                            rH(n, n.type, n.memoizedProps.value);
                            break;
                        case 31:
                            if (null !== n.memoizedState) return n.flags |= 128, oU(n), null;
                            break;
                        case 13:
                            var r = n.memoizedState;
                            if (null !== r) {
                                if (null !== r.dehydrated) return oH(n), n.flags |= 128, null;
                                if (0 != (t & n.child.childLanes)) return lR(e, n, t);
                                return oH(n), null !== (e = lB(e, n, t)) ? e.sibling : null;
                            }
                            oH(n);
                            break;
                        case 19:
                            var o = 0 != (128 & e.flags);
                            if ((r = 0 != (t & n.childLanes)) || (r$(e, n, t, !1), r = 0 != (t & n.childLanes)), o) {
                                if (r) return lV(e, n, t);
                                n.flags |= 128;
                            }
                            if (null !== (o = n.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), H(oq, oq.current), !r) return null;
                            break;
                        case 22:
                            return n.lanes = 0, lO(e, n, t, n.pendingProps);
                        case 24:
                            rH(n, rJ, e.memoizedState.cache);
                    }
                    return lB(e, n, t);
                }(e, n, t);
                ly = 0 != (131072 & e.flags);
            }
            else ly = !1, r_ && 0 != (1048576 & n.flags) && rx(n, rp, n.index);
            switch(n.lanes = 0, n.tag){
                case 16:
                    e: {
                        e = n.pendingProps;
                        var r = n.elementType, o = r._init;
                        if (r = o(r._payload), n.type = r, "function" == typeof r) rt(r) ? (e = ls(r, e), n.tag = 1, n = lz(null, n, r, e, t)) : (n.tag = 0, n = lP(null, n, r, e, t));
                        else {
                            if (null != r) {
                                if ((o = r.$$typeof) === j) {
                                    n.tag = 11, n = lw(null, n, r, e, t);
                                    break e;
                                } else if (o === S) {
                                    n.tag = 14, n = lj(null, n, r, e, t);
                                    break e;
                                }
                            }
                            throw Error(i(306, n = function e(n) {
                                if (null == n) return null;
                                if ("function" == typeof n) return n.$$typeof === z ? null : n.displayName || n.name || null;
                                if ("string" == typeof n) return n;
                                switch(n){
                                    case g:
                                        return "Fragment";
                                    case v:
                                        return "Profiler";
                                    case b:
                                        return "StrictMode";
                                    case k:
                                        return "Suspense";
                                    case O:
                                        return "SuspenseList";
                                    case C:
                                        return "Activity";
                                }
                                if ("object" == typeof n) switch(n.$$typeof){
                                    case m:
                                        return "Portal";
                                    case w:
                                        return (n.displayName || "Context") + ".Provider";
                                    case x:
                                        return (n._context.displayName || "Context") + ".Consumer";
                                    case j:
                                        var t = n.render;
                                        return (n = n.displayName) || (n = "" !== (n = t.displayName || t.name || "") ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
                                    case S:
                                        return null !== (t = n.displayName || null) ? t : e(n.type) || "Memo";
                                    case _:
                                        t = n._payload, n = n._init;
                                        try {
                                            return e(n(t));
                                        } catch (e) {}
                                }
                                return null;
                            }(r) || r, ""));
                        }
                    }
                    return n;
                case 0:
                    return lP(e, n, n.type, n.pendingProps, t);
                case 1:
                    return o = ls(r = n.type, n.pendingProps), lz(e, n, r, o, t);
                case 3:
                    e: {
                        if (q(n, n.stateNode.containerInfo), null === e) throw Error(i(387));
                        r = n.pendingProps;
                        var a = n.memoizedState;
                        o = a.element, ok(e, n), oN(n, r, null, t);
                        var l = n.memoizedState;
                        if (rH(n, rJ, r = l.cache), r !== a.cache && rB(n, [
                            rJ
                        ], t, !0), oP(), r = l.element, a.isDehydrated) if (a = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache
                        }, n.updateQueue.baseState = a, n.memoizedState = a, 256 & n.flags) {
                            n = lL(e, n, r, t);
                            break e;
                        } else if (r !== o) {
                            rR(o = tJ(Error(i(424)), n)), n = lL(e, n, r, t);
                            break e;
                        } else for(rS = cN((e = 9 === (e = n.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e).firstChild), rO = n, r_ = !0, rC = null, rE = !0, t = ox(n, null, r, t), n.child = t; t;)t.flags = -3 & t.flags | 4096, t = t.sibling;
                        else {
                            if (rD(), r === o) {
                                n = lB(e, n, t);
                                break e;
                            }
                            lx(e, n, r, t);
                        }
                        n = n.child;
                    }
                    return n;
                case 26:
                    return lE(e, n), null === e ? (t = cV(n.type, null, n.pendingProps, null)) ? n.memoizedState = t : r_ || (t = n.type, e = n.pendingProps, (r = ch(B.current).createElement(t))[eR] = n, r[eI] = e, cd(r, t, e), eX(r), n.stateNode = r) : n.memoizedState = cV(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
                case 27:
                    return W(n), null === e && r_ && (r = n.stateNode = cD(n.type, n.pendingProps, B.current), rO = n, rE = !0, o = rS, cO(n.type) ? (cz = o, rS = cN(r.firstChild)) : rS = o), lx(e, n, n.pendingProps.children, t), lE(e, n), null === e && (n.flags |= 4194304), n.child;
                case 5:
                    return null === e && r_ && ((o = r = rS) && (null !== (r = function(e, n, t, r) {
                        for(; 1 === e.nodeType;){
                            if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
                                if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
                            } else if (r) {
                                if (!e[eB]) switch(n){
                                    case "meta":
                                        if (!e.hasAttribute("itemprop")) break;
                                        return e;
                                    case "link":
                                        if ("stylesheet" === (o = e.getAttribute("rel")) && e.hasAttribute("data-precedence") || o !== t.rel || e.getAttribute("href") !== (null == t.href || "" === t.href ? null : t.href) || e.getAttribute("crossorigin") !== (null == t.crossOrigin ? null : t.crossOrigin) || e.getAttribute("title") !== (null == t.title ? null : t.title)) break;
                                        return e;
                                    case "style":
                                        if (e.hasAttribute("data-precedence")) break;
                                        return e;
                                    case "script":
                                        if (((o = e.getAttribute("src")) !== (null == t.src ? null : t.src) || e.getAttribute("type") !== (null == t.type ? null : t.type) || e.getAttribute("crossorigin") !== (null == t.crossOrigin ? null : t.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                        return e;
                                    default:
                                        return e;
                                }
                            } else {
                                if ("input" !== n || "hidden" !== e.type) return e;
                                var o = null == t.name ? null : "" + t.name;
                                if ("hidden" === t.type && e.getAttribute("name") === o) return e;
                            }
                            if (null === (e = cN(e.nextSibling))) break;
                        }
                        return null;
                    }(r, n.type, n.pendingProps, rE)) ? (n.stateNode = r, rO = n, rS = cN(r.firstChild), rE = !1, o = !0) : o = !1), o || rN(n)), W(n), o = n.type, a = n.pendingProps, l = null !== e ? e.memoizedProps : null, r = a.children, cb(o, a) ? r = null : null !== l && cb(o, l) && (n.flags |= 32), null !== n.memoizedState && (c9._currentValue = o = o6(e, n, o7, null, null, t)), lE(e, n), lx(e, n, r, t), n.child;
                case 6:
                    return null === e && r_ && ((e = t = rS) && (null !== (t = function(e, n, t) {
                        if ("" === n) return null;
                        for(; 3 !== e.nodeType;)if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t || null === (e = cN(e.nextSibling))) return null;
                        return e;
                    }(t, n.pendingProps, rE)) ? (n.stateNode = t, rO = n, rS = null, e = !0) : e = !1), e || rN(n)), null;
                case 13:
                    return lR(e, n, t);
                case 4:
                    return q(n, n.stateNode.containerInfo), r = n.pendingProps, null === e ? n.child = oy(n, null, r, t) : lx(e, n, r, t), n.child;
                case 11:
                    return lw(e, n, n.type, n.pendingProps, t);
                case 7:
                    return lx(e, n, n.pendingProps, t), n.child;
                case 8:
                case 12:
                    return lx(e, n, n.pendingProps.children, t), n.child;
                case 10:
                    return r = n.pendingProps, rH(n, n.type, r.value), lx(e, n, r.children, t), n.child;
                case 9:
                    return o = n.type._context, r = n.pendingProps.children, rZ(n), r = r(o = rW(o)), n.flags |= 1, lx(e, n, r, t), n.child;
                case 14:
                    return lj(e, n, n.type, n.pendingProps, t);
                case 15:
                    return lk(e, n, n.type, n.pendingProps, t);
                case 19:
                    return lV(e, n, t);
                case 31:
                    if (o = n.pendingProps, l = 0 != (128 & n.flags), n.flags &= -129, null === e) if (r_) {
                        if ("hidden" === o.mode) l_(n, o);
                        else if (oU(n), (t = rS) ? null !== (t = null !== (t = cE(t, rE)) && "&" === t.data ? t : null) && (n.memoizedState = {
                            dehydrated: t,
                            treeContext: null !== rg ? {
                                id: rb,
                                overflow: rv
                            } : null,
                            retryLane: 0x20000000,
                            hydrationErrors: null
                        }, (e = rs(t)).return = n, n.child = e, rO = n, rS = null) : t = null, null === t) throw rN(n);
                        n.lanes = 0x20000000, n = null;
                    } else n = l_(n, o);
                    else if (null !== (r = e.memoizedState)) if (a = r.dehydrated, oU(n), l) if (256 & n.flags) n.flags &= -257, n = lC(e, n, t);
                    else if (null !== n.memoizedState) n.child = e.child, n.flags |= 128, n = null;
                    else throw Error(i(558));
                    else if (ly || r$(e, n, t, !1), l = 0 != (t & e.childLanes), ly || l) {
                        if (null !== (o = iR) && 0 !== (a = eN(o, t)) && a !== r.retryLane) throw r.retryLane = a, t6(e, a), sa(o, e, a), lv;
                        sg(), n = lC(e, n, t);
                    } else t = r.treeContext, rS = cN(a.nextSibling), rO = n, r_ = !0, rC = null, rE = !1, null !== t && rk(n, t), n = l_(n, o), n.flags |= 4096;
                    else (t = rr(e.child, {
                        mode: o.mode,
                        children: o.children
                    })).ref = n.ref, n.child = t, t.return = n, n = t;
                    return n;
                case 22:
                    return lO(e, n, t, n.pendingProps);
                case 24:
                    return rZ(n), r = rW(rJ), null === e ? (null === (o = r7()) && (o = iR, a = r0(), o.pooledCache = a, a.refCount++, null !== a && (o.pooledCacheLanes |= t), o = a), n.memoizedState = {
                        parent: r,
                        cache: o
                    }, oj(n), rH(n, rJ, o)) : (0 != (e.lanes & t) && (ok(e, n), oN(n, null, null, t), oP()), o = e.memoizedState, a = n.memoizedState, o.parent !== r ? (o = {
                        parent: r,
                        cache: r
                    }, n.memoizedState = o, 0 === n.lanes && (n.memoizedState = n.updateQueue.baseState = o), rH(n, rJ, r)) : (rH(n, rJ, r = a.cache), r !== o.cache && rB(n, [
                        rJ
                    ], t, !0))), lx(e, n, n.pendingProps.children, t), n.child;
                case 29:
                    throw n.pendingProps;
            }
            throw Error(i(156, n.tag));
        }
        function lZ(e) {
            e.flags |= 4;
        }
        function lW(e, n, t, r, o) {
            if ((n = 0 != (32 & e.mode)) && (n = !1), n) {
                if (e.flags |= 0x1000000, (0x13ffff40 & o) === o) if (e.stateNode.complete) e.flags |= 8192;
                else if (sp()) e.flags |= 8192;
                else throw oc = oa, or;
            } else e.flags &= -0x1000001;
        }
        function lQ(e, n) {
            if ("stylesheet" !== n.type || 0 != (4 & n.state.loading)) e.flags &= -0x1000001;
            else if (e.flags |= 0x1000000, !c1(n)) if (sp()) e.flags |= 8192;
            else throw oc = oa, or;
        }
        function lX(e, n) {
            null !== n && (e.flags |= 4), 16384 & e.flags && (n = 22 !== e.tag ? eS() : 0x20000000, e.lanes |= n, iG |= n);
        }
        function lG(e, n) {
            if (!r_) switch(e.tailMode){
                case "hidden":
                    n = e.tail;
                    for(var t = null; null !== n;)null !== n.alternate && (t = n), n = n.sibling;
                    null === t ? e.tail = null : t.sibling = null;
                    break;
                case "collapsed":
                    t = e.tail;
                    for(var r = null; null !== t;)null !== t.alternate && (r = t), t = t.sibling;
                    null === r ? n || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            }
        }
        function lK(e) {
            var n = null !== e.alternate && e.alternate.child === e.child, t = 0, r = 0;
            if (n) for(var o = e.child; null !== o;)t |= o.lanes | o.childLanes, r |= 0x3e00000 & o.subtreeFlags, r |= 0x3e00000 & o.flags, o.return = e, o = o.sibling;
            else for(o = e.child; null !== o;)t |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
            return e.subtreeFlags |= r, e.childLanes = t, n;
        }
        function lY(e, n) {
            switch(rj(n), n.tag){
                case 3:
                    rU(rJ), Z();
                    break;
                case 26:
                case 27:
                case 5:
                    Q(n);
                    break;
                case 4:
                    Z();
                    break;
                case 31:
                    null !== n.memoizedState && o$(n);
                    break;
                case 13:
                    o$(n);
                    break;
                case 19:
                    F(oq);
                    break;
                case 10:
                    rU(n.type);
                    break;
                case 22:
                case 23:
                    o$(n), oI(), null !== e && F(r9);
                    break;
                case 24:
                    rU(rJ);
            }
        }
        function lJ(e, n) {
            try {
                var t = n.updateQueue, r = null !== t ? t.lastEffect : null;
                if (null !== r) {
                    var o = r.next;
                    t = o;
                    do {
                        if ((t.tag & e) === e) {
                            r = void 0;
                            var a = t.create;
                            t.inst.destroy = r = a();
                        }
                        t = t.next;
                    }while (t !== o)
                }
            } catch (e) {
                sz(n, n.return, e);
            }
        }
        function l0(e, n, t) {
            try {
                var r = n.updateQueue, o = null !== r ? r.lastEffect : null;
                if (null !== o) {
                    var a = o.next;
                    r = a;
                    do {
                        if ((r.tag & e) === e) {
                            var l = r.inst, i = l.destroy;
                            if (void 0 !== i) {
                                l.destroy = void 0, o = n;
                                try {
                                    i();
                                } catch (e) {
                                    sz(o, t, e);
                                }
                            }
                        }
                        r = r.next;
                    }while (r !== a)
                }
            } catch (e) {
                sz(n, n.return, e);
            }
        }
        function l1(e) {
            var n = e.updateQueue;
            if (null !== n) {
                var t = e.stateNode;
                try {
                    oL(n, t);
                } catch (n) {
                    sz(e, e.return, n);
                }
            }
        }
        function l2(e, n, t) {
            t.props = ls(e.type, e.memoizedProps), t.state = e.memoizedState;
            try {
                t.componentWillUnmount();
            } catch (t) {
                sz(e, n, t);
            }
        }
        function l3(e, n) {
            try {
                var t = e.ref;
                if (null !== t) {
                    switch(e.tag){
                        case 26:
                        case 27:
                        case 5:
                            var r = e.stateNode;
                            break;
                        default:
                            r = e.stateNode;
                    }
                    "function" == typeof t ? e.refCleanup = t(r) : t.current = r;
                }
            } catch (t) {
                sz(e, n, t);
            }
        }
        function l4(e, n) {
            var t = e.ref, r = e.refCleanup;
            if (null !== t) if ("function" == typeof r) try {
                r();
            } catch (t) {
                sz(e, n, t);
            } finally{
                e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null);
            }
            else if ("function" == typeof t) try {
                t(null);
            } catch (t) {
                sz(e, n, t);
            }
            else t.current = null;
        }
        function l5(e) {
            var n = e.type, t = e.memoizedProps, r = e.stateNode;
            try {
                switch(n){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t.autoFocus && r.focus();
                        break;
                    case "img":
                        t.src ? r.src = t.src : t.srcSet && (r.srcset = t.srcSet);
                }
            } catch (n) {
                sz(e, e.return, n);
            }
        }
        function l6(e, n, t) {
            try {
                var r = e.stateNode;
                (function(e, n, t, r) {
                    switch(n){
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "input":
                            var o = null, a = null, l = null, s = null, c = null, u = null, d = null;
                            for(h in t){
                                var f = t[h];
                                if (t.hasOwnProperty(h) && null != f) switch(h){
                                    case "checked":
                                    case "value":
                                        break;
                                    case "defaultValue":
                                        c = f;
                                    default:
                                        r.hasOwnProperty(h) || cc(e, n, h, null, r, f);
                                }
                            }
                            for(var p in r){
                                var h = r[p];
                                if (f = t[p], r.hasOwnProperty(p) && (null != h || null != f)) switch(p){
                                    case "type":
                                        a = h;
                                        break;
                                    case "name":
                                        o = h;
                                        break;
                                    case "checked":
                                        u = h;
                                        break;
                                    case "defaultChecked":
                                        d = h;
                                        break;
                                    case "value":
                                        l = h;
                                        break;
                                    case "defaultValue":
                                        s = h;
                                        break;
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != h) throw Error(i(137, n));
                                        break;
                                    default:
                                        h !== f && cc(e, n, p, h, r, f);
                                }
                            }
                            nr(e, l, s, c, u, d, a, o);
                            return;
                        case "select":
                            for(a in h = l = s = p = null, t)if (c = t[a], t.hasOwnProperty(a) && null != c) switch(a){
                                case "value":
                                    break;
                                case "multiple":
                                    h = c;
                                default:
                                    r.hasOwnProperty(a) || cc(e, n, a, null, r, c);
                            }
                            for(o in r)if (a = r[o], c = t[o], r.hasOwnProperty(o) && (null != a || null != c)) switch(o){
                                case "value":
                                    p = a;
                                    break;
                                case "defaultValue":
                                    s = a;
                                    break;
                                case "multiple":
                                    l = a;
                                default:
                                    a !== c && cc(e, n, o, a, r, c);
                            }
                            n = s, t = l, r = h, null != p ? nl(e, !!t, p, !1) : !!r != !!t && (null != n ? nl(e, !!t, n, !0) : nl(e, !!t, t ? [] : "", !1));
                            return;
                        case "textarea":
                            for(s in h = p = null, t)if (o = t[s], t.hasOwnProperty(s) && null != o && !r.hasOwnProperty(s)) switch(s){
                                case "value":
                                case "children":
                                    break;
                                default:
                                    cc(e, n, s, null, r, o);
                            }
                            for(l in r)if (o = r[l], a = t[l], r.hasOwnProperty(l) && (null != o || null != a)) switch(l){
                                case "value":
                                    p = o;
                                    break;
                                case "defaultValue":
                                    h = o;
                                    break;
                                case "children":
                                    break;
                                case "dangerouslySetInnerHTML":
                                    if (null != o) throw Error(i(91));
                                    break;
                                default:
                                    o !== a && cc(e, n, l, o, r, a);
                            }
                            ni(e, p, h);
                            return;
                        case "option":
                            for(var m in t)p = t[m], t.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m) && ("selected" === m ? e.selected = !1 : cc(e, n, m, null, r, p));
                            for(c in r)p = r[c], h = t[c], r.hasOwnProperty(c) && p !== h && (null != p || null != h) && ("selected" === c ? e.selected = p && "function" != typeof p && "symbol" != typeof p : cc(e, n, c, p, r, h));
                            return;
                        case "img":
                        case "link":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for(var g in t)p = t[g], t.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && cc(e, n, g, null, r, p);
                            for(u in r)if (p = r[u], h = t[u], r.hasOwnProperty(u) && p !== h && (null != p || null != h)) switch(u){
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != p) throw Error(i(137, n));
                                    break;
                                default:
                                    cc(e, n, u, p, r, h);
                            }
                            return;
                        default:
                            if (np(n)) {
                                for(var b in t)p = t[b], t.hasOwnProperty(b) && void 0 !== p && !r.hasOwnProperty(b) && cu(e, n, b, void 0, r, p);
                                for(d in r)p = r[d], h = t[d], r.hasOwnProperty(d) && p !== h && (void 0 !== p || void 0 !== h) && cu(e, n, d, p, r, h);
                                return;
                            }
                    }
                    for(var v in t)p = t[v], t.hasOwnProperty(v) && null != p && !r.hasOwnProperty(v) && cc(e, n, v, null, r, p);
                    for(f in r)p = r[f], h = t[f], r.hasOwnProperty(f) && p !== h && (null != p || null != h) && cc(e, n, f, p, r, h);
                })(r, e.type, t, n), r[eI] = n;
            } catch (n) {
                sz(e, e.return, n);
            }
        }
        function l8(e) {
            return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && cO(e.type) || 4 === e.tag;
        }
        function l9(e) {
            e: for(;;){
                for(; null === e.sibling;){
                    if (null === e.return || l8(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;){
                    if (27 === e.tag && cO(e.type) || 2 & e.flags || null === e.child || 4 === e.tag) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(2 & e.flags)) return e.stateNode;
            }
        }
        function l7(e, n, t) {
            var r = e.tag;
            if (5 === r || 6 === r) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
            else if (4 !== r && (27 === r && cO(e.type) && (t = e.stateNode), null !== (e = e.child))) for(l7(e, n, t), e = e.sibling; null !== e;)l7(e, n, t), e = e.sibling;
        }
        function ie(e) {
            var n = e.stateNode, t = e.memoizedProps;
            try {
                for(var r = e.type, o = n.attributes; o.length;)n.removeAttributeNode(o[0]);
                cd(n, r, t), n[eR] = e, n[eI] = t;
            } catch (n) {
                sz(e, e.return, n);
            }
        }
        var it = !1, ir = !1, io = !1, ia = "function" == typeof WeakSet ? WeakSet : Set, il = null;
        function ii(e, n, t) {
            var r = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    ix(e, t), 4 & r && lJ(5, t);
                    break;
                case 1:
                    if (ix(e, t), 4 & r) if (e = t.stateNode, null === n) try {
                        e.componentDidMount();
                    } catch (e) {
                        sz(t, t.return, e);
                    }
                    else {
                        var o = ls(t.type, n.memoizedProps);
                        n = n.memoizedState;
                        try {
                            e.componentDidUpdate(o, n, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (e) {
                            sz(t, t.return, e);
                        }
                    }
                    64 & r && l1(t), 512 & r && l3(t, t.return);
                    break;
                case 3:
                    if (ix(e, t), 64 & r && null !== (e = t.updateQueue)) {
                        if (n = null, null !== t.child) switch(t.child.tag){
                            case 27:
                            case 5:
                            case 1:
                                n = t.child.stateNode;
                        }
                        try {
                            oL(e, n);
                        } catch (e) {
                            sz(t, t.return, e);
                        }
                    }
                    break;
                case 27:
                    null === n && 4 & r && ie(t);
                case 26:
                case 5:
                    ix(e, t), null === n && 4 & r && l5(t), 512 & r && l3(t, t.return);
                    break;
                case 12:
                default:
                    ix(e, t);
                    break;
                case 31:
                    ix(e, t), 4 & r && ip(e, t);
                    break;
                case 13:
                    ix(e, t), 4 & r && ih(e, t), 64 & r && null !== (e = t.memoizedState) && null !== (e = e.dehydrated) && function(e, n) {
                        var t = e.ownerDocument;
                        if ("$?" !== e.data || "complete" === t.readyState) n();
                        else {
                            var r = function() {
                                n(), t.removeEventListener("DOMContentLoaded", r);
                            };
                            t.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
                        }
                    }(e, t = sA.bind(null, t));
                    break;
                case 22:
                    if (!(r = null !== t.memoizedState || it)) {
                        n = null !== n && null !== n.memoizedState || ir, o = it;
                        var a = ir;
                        it = r, (ir = n) && !a ? function e(n, t, r) {
                            for(r = r && 0 != (8772 & t.subtreeFlags), t = t.child; null !== t;){
                                var o = t.alternate, a = n, l = t, i = l.flags;
                                switch(l.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        e(a, l, r), lJ(4, l);
                                        break;
                                    case 1:
                                        if (e(a, l, r), "function" == typeof (a = (o = l).stateNode).componentDidMount) try {
                                            a.componentDidMount();
                                        } catch (e) {
                                            sz(o, o.return, e);
                                        }
                                        if (null !== (a = (o = l).updateQueue)) {
                                            var s = o.stateNode;
                                            try {
                                                var c = a.shared.hiddenCallbacks;
                                                if (null !== c) for(a.shared.hiddenCallbacks = null, a = 0; a < c.length; a++)oz(c[a], s);
                                            } catch (e) {
                                                sz(o, o.return, e);
                                            }
                                        }
                                        r && 64 & i && l1(l), l3(l, l.return);
                                        break;
                                    case 27:
                                        ie(l);
                                    case 26:
                                    case 5:
                                        e(a, l, r), r && null === o && 4 & i && l5(l), l3(l, l.return);
                                        break;
                                    case 12:
                                    default:
                                        e(a, l, r);
                                        break;
                                    case 31:
                                        e(a, l, r), r && 4 & i && ip(a, l);
                                        break;
                                    case 13:
                                        e(a, l, r), r && 4 & i && ih(a, l);
                                        break;
                                    case 22:
                                        null === l.memoizedState && e(a, l, r), l3(l, l.return);
                                    case 30:
                                }
                                t = t.sibling;
                            }
                        }(e, t, 0 != (8772 & t.subtreeFlags)) : ix(e, t), it = o, ir = a;
                    }
                case 30:
            }
        }
        var is = null, ic = !1;
        function iu(e, n, t) {
            for(t = t.child; null !== t;)id(e, n, t), t = t.sibling;
        }
        function id(e, n, t) {
            if (eh && "function" == typeof eh.onCommitFiberUnmount) try {
                eh.onCommitFiberUnmount(ep, t);
            } catch (e) {}
            switch(t.tag){
                case 26:
                    ir || l4(t, n), iu(e, n, t), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode).parentNode.removeChild(t);
                    break;
                case 27:
                    ir || l4(t, n);
                    var r = is, o = ic;
                    cO(t.type) && (is = t.stateNode, ic = !1), iu(e, n, t), cA(t.stateNode), is = r, ic = o;
                    break;
                case 5:
                    ir || l4(t, n);
                case 6:
                    if (r = is, o = ic, is = null, iu(e, n, t), is = r, ic = o, null !== is) if (ic) try {
                        (9 === is.nodeType ? is.body : "HTML" === is.nodeName ? is.ownerDocument.body : is).removeChild(t.stateNode);
                    } catch (e) {
                        sz(t, n, e);
                    }
                    else try {
                        is.removeChild(t.stateNode);
                    } catch (e) {
                        sz(t, n, e);
                    }
                    break;
                case 18:
                    null !== is && (ic ? (cS(9 === (e = is).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, t.stateNode), uN(e)) : cS(is, t.stateNode));
                    break;
                case 4:
                    r = is, o = ic, is = t.stateNode.containerInfo, ic = !0, iu(e, n, t), is = r, ic = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    ir || l0(2, t, n), ir || l0(4, t, n), iu(e, n, t);
                    break;
                case 1:
                    ir || (l4(t, n), "function" == typeof (r = t.stateNode).componentWillUnmount && l2(t, n, r)), iu(e, n, t);
                    break;
                case 21:
                default:
                    iu(e, n, t);
                    break;
                case 22:
                    ir = (r = ir) || null !== t.memoizedState, iu(e, n, t), ir = r;
            }
        }
        function ip(e, n) {
            if (null === n.memoizedState && null !== (e = n.alternate) && null !== (e = e.memoizedState)) {
                e = e.dehydrated;
                try {
                    uN(e);
                } catch (e) {
                    sz(n, n.return, e);
                }
            }
        }
        function ih(e, n) {
            if (null === n.memoizedState && null !== (e = n.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated)) try {
                uN(e);
            } catch (e) {
                sz(n, n.return, e);
            }
        }
        function im(e, n) {
            var t = function(e) {
                switch(e.tag){
                    case 31:
                    case 13:
                    case 19:
                        var n = e.stateNode;
                        return null === n && (n = e.stateNode = new ia), n;
                    case 22:
                        return null === (n = (e = e.stateNode)._retryCache) && (n = e._retryCache = new ia), n;
                    default:
                        throw Error(i(435, e.tag));
                }
            }(e);
            n.forEach(function(n) {
                var r = sR.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(r, r));
            });
        }
        function ig(e, n) {
            var t = n.deletions;
            if (null !== t) for(var r = 0; r < t.length; r++){
                var o = t[r], a = e, l = n, s = l;
                e: for(; null !== s;){
                    switch(s.tag){
                        case 27:
                            if (cO(s.type)) {
                                is = s.stateNode, ic = !1;
                                break e;
                            }
                            break;
                        case 5:
                            is = s.stateNode, ic = !1;
                            break e;
                        case 3:
                        case 4:
                            is = s.stateNode.containerInfo, ic = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (null === is) throw Error(i(160));
                id(a, l, o), is = null, ic = !1, null !== (a = o.alternate) && (a.return = null), o.return = null;
            }
            if (13878 & n.subtreeFlags) for(n = n.child; null !== n;)iv(n, e), n = n.sibling;
        }
        var ib = null;
        function iv(e, n) {
            var t = e.alternate, r = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    ig(n, e), iy(e), 4 & r && (l0(3, e, e.return), lJ(3, e), l0(5, e, e.return));
                    break;
                case 1:
                    ig(n, e), iy(e), 512 & r && (ir || null === t || l4(t, t.return)), 64 & r && it && null !== (e = e.updateQueue) && null !== (r = e.callbacks) && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === t ? r : t.concat(r));
                    break;
                case 26:
                    var o = ib;
                    if (ig(n, e), iy(e), 512 & r && (ir || null === t || l4(t, t.return)), 4 & r) {
                        var a = null !== t ? t.memoizedState : null;
                        if (r = e.memoizedState, null === t) if (null === r) if (null === e.stateNode) {
                            e: {
                                r = e.type, t = e.memoizedProps, o = o.ownerDocument || o;
                                n: switch(r){
                                    case "title":
                                        (!(a = o.getElementsByTagName("title")[0]) || a[eB] || a[eR] || "http://www.w3.org/2000/svg" === a.namespaceURI || a.hasAttribute("itemprop")) && (a = o.createElement(r), o.head.insertBefore(a, o.querySelector("head > title"))), cd(a, r, t), a[eR] = e, eX(a), r = a;
                                        break e;
                                    case "link":
                                        var l = cJ("link", "href", o).get(r + (t.href || ""));
                                        if (l) {
                                            for(var s = 0; s < l.length; s++)if ((a = l[s]).getAttribute("href") === (null == t.href || "" === t.href ? null : t.href) && a.getAttribute("rel") === (null == t.rel ? null : t.rel) && a.getAttribute("title") === (null == t.title ? null : t.title) && a.getAttribute("crossorigin") === (null == t.crossOrigin ? null : t.crossOrigin)) {
                                                l.splice(s, 1);
                                                break n;
                                            }
                                        }
                                        cd(a = o.createElement(r), r, t), o.head.appendChild(a);
                                        break;
                                    case "meta":
                                        if (l = cJ("meta", "content", o).get(r + (t.content || ""))) {
                                            for(s = 0; s < l.length; s++)if ((a = l[s]).getAttribute("content") === (null == t.content ? null : "" + t.content) && a.getAttribute("name") === (null == t.name ? null : t.name) && a.getAttribute("property") === (null == t.property ? null : t.property) && a.getAttribute("http-equiv") === (null == t.httpEquiv ? null : t.httpEquiv) && a.getAttribute("charset") === (null == t.charSet ? null : t.charSet)) {
                                                l.splice(s, 1);
                                                break n;
                                            }
                                        }
                                        cd(a = o.createElement(r), r, t), o.head.appendChild(a);
                                        break;
                                    default:
                                        throw Error(i(468, r));
                                }
                                a[eR] = e, eX(a), r = a;
                            }
                            e.stateNode = r;
                        } else c0(o, e.type, e.stateNode);
                        else e.stateNode = cQ(o, r, e.memoizedProps);
                        else a !== r ? (null === a ? null !== t.stateNode && (t = t.stateNode).parentNode.removeChild(t) : a.count--, null === r ? c0(o, e.type, e.stateNode) : cQ(o, r, e.memoizedProps)) : null === r && null !== e.stateNode && l6(e, e.memoizedProps, t.memoizedProps);
                    }
                    break;
                case 27:
                    ig(n, e), iy(e), 512 & r && (ir || null === t || l4(t, t.return)), null !== t && 4 & r && l6(e, e.memoizedProps, t.memoizedProps);
                    break;
                case 5:
                    if (ig(n, e), iy(e), 512 & r && (ir || null === t || l4(t, t.return)), 32 & e.flags) {
                        o = e.stateNode;
                        try {
                            nc(o, "");
                        } catch (n) {
                            sz(e, e.return, n);
                        }
                    }
                    4 & r && null != e.stateNode && (o = e.memoizedProps, l6(e, o, null !== t ? t.memoizedProps : o)), 1024 & r && (io = !0);
                    break;
                case 6:
                    if (ig(n, e), iy(e), 4 & r) {
                        if (null === e.stateNode) throw Error(i(162));
                        r = e.memoizedProps, t = e.stateNode;
                        try {
                            t.nodeValue = r;
                        } catch (n) {
                            sz(e, e.return, n);
                        }
                    }
                    break;
                case 3:
                    if (cY = null, o = ib, ib = cM(n.containerInfo), ig(n, e), ib = o, iy(e), 4 & r && null !== t && t.memoizedState.isDehydrated) try {
                        uN(n.containerInfo);
                    } catch (n) {
                        sz(e, e.return, n);
                    }
                    io && (io = !1, function e(n) {
                        if (1024 & n.subtreeFlags) for(n = n.child; null !== n;){
                            var t = n;
                            e(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), n = n.sibling;
                        }
                    }(e));
                    break;
                case 4:
                    r = ib, ib = cM(e.stateNode.containerInfo), ig(n, e), iy(e), ib = r;
                    break;
                case 12:
                default:
                    ig(n, e), iy(e);
                    break;
                case 31:
                case 19:
                    ig(n, e), iy(e), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, im(e, r));
                    break;
                case 13:
                    ig(n, e), iy(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== t && null !== t.memoizedState) && (i0 = eo()), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, im(e, r));
                    break;
                case 22:
                    o = null !== e.memoizedState;
                    var c = null !== t && null !== t.memoizedState, u = it, d = ir;
                    if (it = u || o, ir = d || c, ig(n, e), ir = d, it = u, iy(e), 8192 & r) e: for((n = e.stateNode)._visibility = o ? -2 & n._visibility : 1 | n._visibility, o && (null === t || c || it || ir || function e(n) {
                        for(n = n.child; null !== n;){
                            var t = n;
                            switch(t.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    l0(4, t, t.return), e(t);
                                    break;
                                case 1:
                                    l4(t, t.return);
                                    var r = t.stateNode;
                                    "function" == typeof r.componentWillUnmount && l2(t, t.return, r), e(t);
                                    break;
                                case 27:
                                    cA(t.stateNode);
                                case 26:
                                case 5:
                                    l4(t, t.return), e(t);
                                    break;
                                case 22:
                                    null === t.memoizedState && e(t);
                                    break;
                                default:
                                    e(t);
                            }
                            n = n.sibling;
                        }
                    }(e)), t = null, n = e;;){
                        if (5 === n.tag || 26 === n.tag) {
                            if (null === t) {
                                c = t = n;
                                try {
                                    if (a = c.stateNode, o) l = a.style, "function" == typeof l.setProperty ? l.setProperty("display", "none", "important") : l.display = "none";
                                    else {
                                        s = c.stateNode;
                                        var f = c.memoizedProps.style, p = null != f && f.hasOwnProperty("display") ? f.display : null;
                                        s.style.display = null == p || "boolean" == typeof p ? "" : ("" + p).trim();
                                    }
                                } catch (e) {
                                    sz(c, c.return, e);
                                }
                            }
                        } else if (6 === n.tag) {
                            if (null === t) {
                                c = n;
                                try {
                                    c.stateNode.nodeValue = o ? "" : c.memoizedProps;
                                } catch (e) {
                                    sz(c, c.return, e);
                                }
                            }
                        } else if (18 === n.tag) {
                            if (null === t) {
                                c = n;
                                try {
                                    var h = c.stateNode;
                                    o ? c_(h, !0) : c_(c.stateNode, !1);
                                } catch (e) {
                                    sz(c, c.return, e);
                                }
                            }
                        } else if ((22 !== n.tag && 23 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue;
                        }
                        if (n === e) break;
                        for(; null === n.sibling;){
                            if (null === n.return || n.return === e) break e;
                            t === n && (t = null), n = n.return;
                        }
                        t === n && (t = null), n.sibling.return = n.return, n = n.sibling;
                    }
                    4 & r && null !== (r = e.updateQueue) && null !== (t = r.retryQueue) && (r.retryQueue = null, im(e, t));
                case 30:
                case 21:
            }
        }
        function iy(e) {
            var n = e.flags;
            if (2 & n) {
                try {
                    for(var t, r = e.return; null !== r;){
                        if (l8(r)) {
                            t = r;
                            break;
                        }
                        r = r.return;
                    }
                    if (null == t) throw Error(i(160));
                    switch(t.tag){
                        case 27:
                            var o = t.stateNode, a = l9(e);
                            l7(e, a, o);
                            break;
                        case 5:
                            var l = t.stateNode;
                            32 & t.flags && (nc(l, ""), t.flags &= -33);
                            var s = l9(e);
                            l7(e, s, l);
                            break;
                        case 3:
                        case 4:
                            var c = t.stateNode.containerInfo, u = l9(e);
                            !function e(n, t, r) {
                                var o = n.tag;
                                if (5 === o || 6 === o) n = n.stateNode, t ? (9 === r.nodeType ? r.body : "HTML" === r.nodeName ? r.ownerDocument.body : r).insertBefore(n, t) : ((t = 9 === r.nodeType ? r.body : "HTML" === r.nodeName ? r.ownerDocument.body : r).appendChild(n), null != (r = r._reactRootContainer) || null !== t.onclick || (t.onclick = cs));
                                else if (4 !== o && (27 === o && cO(n.type) && (r = n.stateNode, t = null), null !== (n = n.child))) for(e(n, t, r), n = n.sibling; null !== n;)e(n, t, r), n = n.sibling;
                            }(e, u, c);
                            break;
                        default:
                            throw Error(i(161));
                    }
                } catch (n) {
                    sz(e, e.return, n);
                }
                e.flags &= -3;
            }
            4096 & n && (e.flags &= -4097);
        }
        function ix(e, n) {
            if (8772 & n.subtreeFlags) for(n = n.child; null !== n;)ii(e, n.alternate, n), n = n.sibling;
        }
        function iw(e, n) {
            var t = null;
            null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (t = e.memoizedState.cachePool.pool), e = null, null !== n.memoizedState && null !== n.memoizedState.cachePool && (e = n.memoizedState.cachePool.pool), e !== t && (null != e && e.refCount++, null != t && r1(t));
        }
        function ij(e, n) {
            e = null, null !== n.alternate && (e = n.alternate.memoizedState.cache), (n = n.memoizedState.cache) !== e && (n.refCount++, null != e && r1(e));
        }
        function ik(e, n, t, r) {
            if (10256 & n.subtreeFlags) for(n = n.child; null !== n;)iO(e, n, t, r), n = n.sibling;
        }
        function iO(e, n, t, r) {
            var o = n.flags;
            switch(n.tag){
                case 0:
                case 11:
                case 15:
                    ik(e, n, t, r), 2048 & o && lJ(9, n);
                    break;
                case 1:
                case 31:
                case 13:
                default:
                    ik(e, n, t, r);
                    break;
                case 3:
                    ik(e, n, t, r), 2048 & o && (e = null, null !== n.alternate && (e = n.alternate.memoizedState.cache), (n = n.memoizedState.cache) !== e && (n.refCount++, null != e && r1(e)));
                    break;
                case 12:
                    if (2048 & o) {
                        ik(e, n, t, r), e = n.stateNode;
                        try {
                            var a = n.memoizedProps, l = a.id, i = a.onPostCommit;
                            "function" == typeof i && i(l, null === n.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (e) {
                            sz(n, n.return, e);
                        }
                    } else ik(e, n, t, r);
                    break;
                case 23:
                    break;
                case 22:
                    a = n.stateNode, l = n.alternate, null !== n.memoizedState ? 2 & a._visibility ? ik(e, n, t, r) : iS(e, n) : 2 & a._visibility ? ik(e, n, t, r) : (a._visibility |= 2, function e(n, t, r, o, a) {
                        for(a = a && 0 != (10256 & t.subtreeFlags), t = t.child; null !== t;){
                            var l = t, i = l.flags;
                            switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    e(n, l, r, o, a), lJ(8, l);
                                    break;
                                case 23:
                                    break;
                                case 22:
                                    var s = l.stateNode;
                                    null !== l.memoizedState ? 2 & s._visibility ? e(n, l, r, o, a) : iS(n, l) : (s._visibility |= 2, e(n, l, r, o, a)), a && 2048 & i && iw(l.alternate, l);
                                    break;
                                case 24:
                                    e(n, l, r, o, a), a && 2048 & i && ij(l.alternate, l);
                                    break;
                                default:
                                    e(n, l, r, o, a);
                            }
                            t = t.sibling;
                        }
                    }(e, n, t, r, 0 != (10256 & n.subtreeFlags))), 2048 & o && iw(l, n);
                    break;
                case 24:
                    ik(e, n, t, r), 2048 & o && ij(n.alternate, n);
            }
        }
        function iS(e, n) {
            if (10256 & n.subtreeFlags) for(n = n.child; null !== n;){
                var t = n, r = t.flags;
                switch(t.tag){
                    case 22:
                        iS(e, t), 2048 & r && iw(t.alternate, t);
                        break;
                    case 24:
                        iS(e, t), 2048 & r && ij(t.alternate, t);
                        break;
                    default:
                        iS(e, t);
                }
                n = n.sibling;
            }
        }
        var i_ = 8192;
        function iC(e) {
            if (e.subtreeFlags & i_) for(e = e.child; null !== e;)iE(e), e = e.sibling;
        }
        function iE(e) {
            switch(e.tag){
                case 26:
                    iC(e), e.flags & i_ && null !== e.memoizedState && function(e, n, t) {
                        if (null === c2) throw Error(i(475));
                        var r = c2;
                        if ("stylesheet" === n.type && ("string" != typeof t.media || !1 !== matchMedia(t.media).matches) && 0 == (4 & n.state.loading)) {
                            if (null === n.instance) {
                                var o = cB(t.href), a = e.querySelector(c$(o));
                                if (a) {
                                    null !== (e = a._p) && "object" == typeof e && "function" == typeof e.then && (r.count++, r = c4.bind(r), e.then(r, r)), n.state.loading |= 4, n.instance = a, eX(a);
                                    return;
                                }
                                a = e.ownerDocument || e, t = cq(t), (o = cR.get(o)) && cG(t, o), eX(a = a.createElement("link"));
                                var l = a;
                                l._p = new Promise(function(e, n) {
                                    l.onload = e, l.onerror = n;
                                }), cd(a, "link", t), n.instance = a;
                            }
                            null === r.stylesheets && (r.stylesheets = new Map), r.stylesheets.set(n, e), (e = n.state.preload) && 0 == (3 & n.state.loading) && (r.count++, n = c4.bind(r), e.addEventListener("load", n), e.addEventListener("error", n));
                        }
                    }(ib, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                default:
                    iC(e);
                    break;
                case 3:
                case 4:
                    var n = ib;
                    ib = cM(e.stateNode.containerInfo), iC(e), ib = n;
                    break;
                case 22:
                    null === e.memoizedState && (null !== (n = e.alternate) && null !== n.memoizedState ? (n = i_, i_ = 0x1000000, iC(e), i_ = n) : iC(e));
            }
        }
        function iP(e) {
            var n = e.alternate;
            if (null !== n && null !== (e = n.child)) {
                n.child = null;
                do n = e.sibling, e.sibling = null, e = n;
                while (null !== e)
            }
        }
        function iN(e) {
            var n = e.deletions;
            if (0 != (16 & e.flags)) {
                if (null !== n) for(var t = 0; t < n.length; t++){
                    var r = n[t];
                    il = r, iL(r, e);
                }
                iP(e);
            }
            if (10256 & e.subtreeFlags) for(e = e.child; null !== e;)iz(e), e = e.sibling;
        }
        function iz(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    iN(e), 2048 & e.flags && l0(9, e, e.return);
                    break;
                case 3:
                case 12:
                default:
                    iN(e);
                    break;
                case 22:
                    var n = e.stateNode;
                    null !== e.memoizedState && 2 & n._visibility && (null === e.return || 13 !== e.return.tag) ? (n._visibility &= -3, function e(n) {
                        var t = n.deletions;
                        if (0 != (16 & n.flags)) {
                            if (null !== t) for(var r = 0; r < t.length; r++){
                                var o = t[r];
                                il = o, iL(o, n);
                            }
                            iP(n);
                        }
                        for(n = n.child; null !== n;){
                            switch((t = n).tag){
                                case 0:
                                case 11:
                                case 15:
                                    l0(8, t, t.return), e(t);
                                    break;
                                case 22:
                                    2 & (r = t.stateNode)._visibility && (r._visibility &= -3, e(t));
                                    break;
                                default:
                                    e(t);
                            }
                            n = n.sibling;
                        }
                    }(e)) : iN(e);
            }
        }
        function iL(e, n) {
            for(; null !== il;){
                var t = il;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        l0(8, t, n);
                        break;
                    case 23:
                    case 22:
                        if (null !== t.memoizedState && null !== t.memoizedState.cachePool) {
                            var r = t.memoizedState.cachePool.pool;
                            null != r && r.refCount++;
                        }
                        break;
                    case 24:
                        r1(t.memoizedState.cache);
                }
                if (null !== (r = t.child)) r.return = t, il = r;
                else for(t = e; null !== il;){
                    var o = (r = il).sibling, a = r.return;
                    if (!function e(n) {
                        var t = n.alternate;
                        null !== t && (n.alternate = null, e(t)), n.child = null, n.deletions = null, n.sibling = null, 5 === n.tag && null !== (t = n.stateNode) && e$(t), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
                    }(r), r === t) {
                        il = null;
                        break;
                    }
                    if (null !== o) {
                        o.return = a, il = o;
                        break;
                    }
                    il = a;
                }
            }
        }
        var iT = {
            getCacheForType: function(e) {
                var n = rW(rJ), t = n.data.get(e);
                return void 0 === t && (t = e(), n.data.set(e, t)), t;
            }
        }, iD = "function" == typeof WeakMap ? WeakMap : Map, iA = 0, iR = null, iI = null, iM = 0, iF = 0, iH = null, iU = !1, iV = !1, iB = !1, i$ = 0, iq = 0, iZ = 0, iW = 0, iQ = 0, iX = 0, iG = 0, iK = null, iY = null, iJ = !1, i0 = 0, i1 = 1 / 0, i2 = null, i3 = null, i4 = 0, i5 = null, i6 = null, i8 = 0, i9 = 0, i7 = null, se = null, sn = 0, st = null;
        function sr() {
            if (0 != (2 & iA) && 0 !== iM) return iM & -iM;
            if (null !== T.T) {
                var e = r4;
                return 0 !== e ? e : sG();
            }
            return eT();
        }
        function so() {
            0 === iX && (iX = 0 == (0x20000000 & iM) || r_ ? eO() : 0x20000000);
            var e = oM.current;
            return null !== e && (e.flags |= 32), iX;
        }
        function sa(e, n, t) {
            (e === iR && (2 === iF || 9 === iF) || null !== e.cancelPendingCommit) && (sd(e, 0), ss(e, iM, iX, !1)), eC(e, t), (0 == (2 & iA) || e !== iR) && (e === iR && (0 == (2 & iA) && (iW |= t), 4 === iq && ss(e, iM, iX, !1)), sB(e));
        }
        function sl(e, n, t) {
            if (0 != (6 & iA)) throw Error(i(327));
            for(var r = !t && 0 == (124 & n) && 0 == (n & e.expiredLanes) || ek(e, n), o = r ? function(e, n) {
                var t = iA;
                iA |= 2;
                var r = sh(), o = sm();
                iR !== e || iM !== n ? (i2 = null, i1 = eo() + 500, sd(e, n)) : iV = ek(e, n);
                e: for(;;)try {
                    if (0 !== iF && null !== iI) {
                        n = iI;
                        var a = iH;
                        n: switch(iF){
                            case 1:
                                iF = 0, iH = null, sx(e, n, a, 1);
                                break;
                            case 2:
                            case 9:
                                if (ol(a)) {
                                    iF = 0, iH = null, sy(n);
                                    break;
                                }
                                n = function() {
                                    2 !== iF && 9 !== iF || iR !== e || (iF = 7), sB(e);
                                }, a.then(n, n);
                                break e;
                            case 3:
                                iF = 7;
                                break e;
                            case 4:
                                iF = 5;
                                break e;
                            case 7:
                                ol(a) ? (iF = 0, iH = null, sy(n)) : (iF = 0, iH = null, sx(e, n, a, 7));
                                break;
                            case 5:
                                var l = null;
                                switch(iI.tag){
                                    case 26:
                                        l = iI.memoizedState;
                                    case 5:
                                    case 27:
                                        var s = iI;
                                        if (l ? c1(l) : s.stateNode.complete) {
                                            iF = 0, iH = null;
                                            var c = s.sibling;
                                            if (null !== c) iI = c;
                                            else {
                                                var u = s.return;
                                                null !== u ? (iI = u, sw(u)) : iI = null;
                                            }
                                            break n;
                                        }
                                }
                                iF = 0, iH = null, sx(e, n, a, 5);
                                break;
                            case 6:
                                iF = 0, iH = null, sx(e, n, a, 6);
                                break;
                            case 8:
                                su(), iq = 6;
                                break e;
                            default:
                                throw Error(i(462));
                        }
                    }
                    for(; null !== iI && !et();)sv(iI);
                    break;
                } catch (n) {
                    sf(e, n);
                }
                return (rF = rM = null, T.H = r, T.A = o, iA = t, null !== iI) ? 0 : (iR = null, iM = 0, t3(), iq);
            }(e, n) : sb(e, n, !0), a = r;;){
                if (0 === o) iV && !r && ss(e, n, 0, !1);
                else {
                    if (t = e.current.alternate, a && !function(e) {
                        for(var n = e;;){
                            var t = n.tag;
                            if ((0 === t || 11 === t || 15 === t) && 16384 & n.flags && null !== (t = n.updateQueue) && null !== (t = t.stores)) for(var r = 0; r < t.length; r++){
                                var o = t[r], a = o.getSnapshot;
                                o = o.value;
                                try {
                                    if (!tS(a(), o)) return !1;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            if (t = n.child, 16384 & n.subtreeFlags && null !== t) t.return = n, n = t;
                            else {
                                if (n === e) break;
                                for(; null === n.sibling;){
                                    if (null === n.return || n.return === e) return !0;
                                    n = n.return;
                                }
                                n.sibling.return = n.return, n = n.sibling;
                            }
                        }
                        return !0;
                    }(t)) {
                        o = sb(e, n, !1), a = !1;
                        continue;
                    }
                    if (2 === o) {
                        if (a = n, e.errorRecoveryDisabledLanes & a) var l = 0;
                        else l = 0 != (l = -0x20000001 & e.pendingLanes) ? l : 0x20000000 & l ? 0x20000000 : 0;
                        if (0 !== l) {
                            n = l;
                            e: {
                                o = iK;
                                var s = e.current.memoizedState.isDehydrated;
                                if (s && (sd(e, l).flags |= 256), 2 !== (l = sb(e, l, !1))) {
                                    if (iB && !s) {
                                        e.errorRecoveryDisabledLanes |= a, iW |= a, o = 4;
                                        break e;
                                    }
                                    a = iY, iY = o, null !== a && (null === iY ? iY = a : iY.push.apply(iY, a));
                                }
                                o = l;
                            }
                            if (a = !1, 2 !== o) continue;
                        }
                    }
                    if (1 === o) {
                        sd(e, 0), ss(e, n, 0, !0);
                        break;
                    }
                    e: {
                        switch(r = e, a = o){
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 4:
                                if ((4194048 & n) !== n) break;
                            case 6:
                                ss(r, n, iX, !iU);
                                break e;
                            case 2:
                                iY = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(i(329));
                        }
                        if ((0x3c00000 & n) === n && 10 < (o = i0 + 300 - eo())) {
                            if (ss(r, n, iX, !iU), 0 !== ej(r, 0, !0)) break e;
                            r.timeoutHandle = cy(si.bind(null, r, t, iY, i2, iJ, n, iX, iW, iG, iU, a, 2, -0, 0), o);
                            break e;
                        }
                        si(r, t, iY, i2, iJ, n, iX, iW, iG, iU, a, 0, -0, 0);
                    }
                }
                break;
            }
            sB(e);
        }
        function si(e, n, t, r, o, a, l, s, c, u, d, f, p, h) {
            if (e.timeoutHandle = -1, (8192 & (f = n.subtreeFlags) || 0x1002000 == (0x1002000 & f)) && (c2 = {
                stylesheets: null,
                count: 0,
                unsuspend: c3
            }, iE(n), null !== (f = function() {
                if (null === c2) throw Error(i(475));
                var e = c2;
                return e.stylesheets && 0 === e.count && c6(e, e.stylesheets), 0 < e.count ? function(n) {
                    var t = setTimeout(function() {
                        if (e.stylesheets && c6(e, e.stylesheets), e.unsuspend) {
                            var n = e.unsuspend;
                            e.unsuspend = null, n();
                        }
                    }, 6e4);
                    return e.unsuspend = n, function() {
                        e.unsuspend = null, clearTimeout(t);
                    };
                } : null;
            }()))) {
                e.cancelPendingCommit = f(sk.bind(null, e, n, a, t, r, o, l, s, c, d, 1, p, h)), ss(e, a, l, !u);
                return;
            }
            sk(e, n, a, t, r, o, l, s, c);
        }
        function ss(e, n, t, r) {
            n &= ~iQ, n &= ~iW, e.suspendedLanes |= n, e.pingedLanes &= ~n, r && (e.warmLanes |= n), r = e.expirationTimes;
            for(var o = n; 0 < o;){
                var a = 31 - eg(o), l = 1 << a;
                r[a] = -1, o &= ~l;
            }
            0 !== t && eE(e, t, n);
        }
        function sc() {
            return 0 != (6 & iA) || (s$(0, !1), !1);
        }
        function su() {
            if (null !== iI) {
                if (0 === iF) var e = iI.return;
                else e = iI, rF = rM = null, at(e), of = null, op = 0, e = iI;
                for(; null !== e;)lY(e.alternate, e), e = e.return;
                iI = null;
            }
        }
        function sd(e, n) {
            var t = e.timeoutHandle;
            -1 !== t && (e.timeoutHandle = -1, cx(t)), null !== (t = e.cancelPendingCommit) && (e.cancelPendingCommit = null, t()), su(), iR = e, iI = t = rr(e.current, null), iM = n, iF = 0, iH = null, iU = !1, iV = ek(e, n), iB = !1, iG = iX = iQ = iW = iZ = iq = 0, iY = iK = null, iJ = !1, 0 != (8 & n) && (n |= 32 & n);
            var r = e.entangledLanes;
            if (0 !== r) for(e = e.entanglements, r &= n; 0 < r;){
                var o = 31 - eg(r), a = 1 << o;
                n |= e[o], r &= ~a;
            }
            return i$ = n, t3(), t;
        }
        function sf(e, n) {
            oQ = null, T.H = le, n === ot || n === oo ? (n = ou(), iF = 3) : n === or ? (n = ou(), iF = 4) : iF = n === lv ? 8 : null !== n && "object" == typeof n && "function" == typeof n.then ? 6 : 1, iH = n, null === iI && (iq = 1, lp(e, tJ(n, e.current)));
        }
        function sp() {
            var e = oM.current;
            return null === e || ((4194048 & iM) === iM ? null === oF : ((0x3c00000 & iM) === iM || 0 != (0x20000000 & iM)) && e === oF);
        }
        function sh() {
            var e = T.H;
            return T.H = le, null === e ? le : e;
        }
        function sm() {
            var e = T.A;
            return T.A = iT, e;
        }
        function sg() {
            iq = 4, iU || (4194048 & iM) !== iM && null !== oM.current || (iV = !0), 0 == (0x7ffffff & iZ) && 0 == (0x7ffffff & iW) || null === iR || ss(iR, iM, iX, !1);
        }
        function sb(e, n, t) {
            var r = iA;
            iA |= 2;
            var o = sh(), a = sm();
            (iR !== e || iM !== n) && (i2 = null, sd(e, n)), n = !1;
            var l = iq;
            e: for(;;)try {
                if (0 !== iF && null !== iI) {
                    var i = iI, s = iH;
                    switch(iF){
                        case 8:
                            su(), l = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            null === oM.current && (n = !0);
                            var c = iF;
                            if (iF = 0, iH = null, sx(e, i, s, c), t && iV) {
                                l = 0;
                                break e;
                            }
                            break;
                        default:
                            c = iF, iF = 0, iH = null, sx(e, i, s, c);
                    }
                }
                (function() {
                    for(; null !== iI;)sv(iI);
                })(), l = iq;
                break;
            } catch (n) {
                sf(e, n);
            }
            return n && e.shellSuspendCounter++, rF = rM = null, iA = r, T.H = o, T.A = a, null === iI && (iR = null, iM = 0, t3()), l;
        }
        function sv(e) {
            var n = lq(e.alternate, e, i$);
            e.memoizedProps = e.pendingProps, null === n ? sw(e) : iI = n;
        }
        function sy(e) {
            var n = e, t = n.alternate;
            switch(n.tag){
                case 15:
                case 0:
                    n = lN(t, n, n.pendingProps, n.type, void 0, iM);
                    break;
                case 11:
                    n = lN(t, n, n.pendingProps, n.type.render, n.ref, iM);
                    break;
                case 5:
                    at(n);
                default:
                    lY(t, n), n = lq(t, n = iI = ro(n, i$), i$);
            }
            e.memoizedProps = e.pendingProps, null === n ? sw(e) : iI = n;
        }
        function sx(e, n, t, r) {
            rF = rM = null, at(n), of = null, op = 0;
            var o = n.return;
            try {
                if (function(e, n, t, r, o) {
                    if (t.flags |= 32768, null !== r && "object" == typeof r && "function" == typeof r.then) {
                        if (null !== (n = t.alternate) && r$(n, t, o, !0), null !== (t = oM.current)) {
                            switch(t.tag){
                                case 31:
                                case 13:
                                    return null === oF ? sg() : null === t.alternate && 0 === iq && (iq = 3), t.flags &= -257, t.flags |= 65536, t.lanes = o, r === oa ? t.flags |= 16384 : (null === (n = t.updateQueue) ? t.updateQueue = new Set([
                                        r
                                    ]) : n.add(r), sL(e, r, o)), !1;
                                case 22:
                                    return t.flags |= 65536, r === oa ? t.flags |= 16384 : (null === (n = t.updateQueue) ? (n = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([
                                            r
                                        ])
                                    }, t.updateQueue = n) : null === (t = n.retryQueue) ? n.retryQueue = new Set([
                                        r
                                    ]) : t.add(r), sL(e, r, o)), !1;
                            }
                            throw Error(i(435, t.tag));
                        }
                        return sL(e, r, o), sg(), !1;
                    }
                    if (r_) return null !== (n = oM.current) ? (0 == (65536 & n.flags) && (n.flags |= 256), n.flags |= 65536, n.lanes = o, r !== rP && rR(tJ(e = Error(i(422), {
                        cause: r
                    }), t))) : (r !== rP && rR(tJ(n = Error(i(423), {
                        cause: r
                    }), t)), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, r = tJ(r, t), o = lm(e.stateNode, r, o), oC(e, o), 4 !== iq && (iq = 2)), !1;
                    var a = Error(i(520), {
                        cause: r
                    });
                    if (a = tJ(a, t), null === iK ? iK = [
                        a
                    ] : iK.push(a), 4 !== iq && (iq = 2), null === n) return !0;
                    r = tJ(r, t), t = n;
                    do {
                        switch(t.tag){
                            case 3:
                                return t.flags |= 65536, e = o & -o, t.lanes |= e, e = lm(t.stateNode, r, e), oC(t, e), !1;
                            case 1:
                                if (n = t.type, a = t.stateNode, 0 == (128 & t.flags) && ("function" == typeof n.getDerivedStateFromError || null !== a && "function" == typeof a.componentDidCatch && (null === i3 || !i3.has(a)))) return t.flags |= 65536, o &= -o, t.lanes |= o, lb(o = lg(o), e, t, r), oC(t, o), !1;
                        }
                        t = t.return;
                    }while (null !== t)
                    return !1;
                }(e, o, n, t, iM)) {
                    iq = 1, lp(e, tJ(t, e.current)), iI = null;
                    return;
                }
            } catch (n) {
                if (null !== o) throw iI = o, n;
                iq = 1, lp(e, tJ(t, e.current)), iI = null;
                return;
            }
            32768 & n.flags ? (r_ || 1 === r ? e = !0 : iV || 0 != (0x20000000 & iM) ? e = !1 : (iU = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = oM.current) && 13 === r.tag && (r.flags |= 16384)), sj(n, e)) : sw(n);
        }
        function sw(e) {
            var n = e;
            do {
                if (0 != (32768 & n.flags)) return void sj(n, iU);
                e = n.return;
                var t = function(e, n, t) {
                    var r = n.pendingProps;
                    switch(rj(n), n.tag){
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                        case 1:
                            return lK(n), null;
                        case 3:
                            return t = n.stateNode, r = null, null !== e && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), rU(rJ), Z(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (null === e || null === e.child) && (rT(n) ? lZ(n) : null === e || e.memoizedState.isDehydrated && 0 == (256 & n.flags) || (n.flags |= 1024, rA())), lK(n), null;
                        case 26:
                            var o = n.type, a = n.memoizedState;
                            return null === e ? (lZ(n), null !== a ? (lK(n), lQ(n, a)) : (lK(n), lW(n, o, null, r, t))) : a ? a !== e.memoizedState ? (lZ(n), lK(n), lQ(n, a)) : (lK(n), n.flags &= -0x1000001) : ((e = e.memoizedProps) !== r && lZ(n), lK(n), lW(n, o, e, r, t)), null;
                        case 27:
                            if (Q(n), t = B.current, o = n.type, null !== e && null != n.stateNode) e.memoizedProps !== r && lZ(n);
                            else {
                                if (!r) {
                                    if (null === n.stateNode) throw Error(i(166));
                                    return lK(n), null;
                                }
                                e = U.current, rT(n) ? rz(n, e) : (e = cD(o, r, t), n.stateNode = e, lZ(n));
                            }
                            return lK(n), null;
                        case 5:
                            if (Q(n), o = n.type, null !== e && null != n.stateNode) e.memoizedProps !== r && lZ(n);
                            else {
                                if (!r) {
                                    if (null === n.stateNode) throw Error(i(166));
                                    return lK(n), null;
                                }
                                if (a = U.current, rT(n)) rz(n, a);
                                else {
                                    var l = ch(B.current);
                                    switch(a){
                                        case 1:
                                            a = l.createElementNS("http://www.w3.org/2000/svg", o);
                                            break;
                                        case 2:
                                            a = l.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                            break;
                                        default:
                                            switch(o){
                                                case "svg":
                                                    a = l.createElementNS("http://www.w3.org/2000/svg", o);
                                                    break;
                                                case "math":
                                                    a = l.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                                    break;
                                                case "script":
                                                    (a = l.createElement("div")).innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
                                                    break;
                                                case "select":
                                                    a = "string" == typeof r.is ? l.createElement("select", {
                                                        is: r.is
                                                    }) : l.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
                                                    break;
                                                default:
                                                    a = "string" == typeof r.is ? l.createElement(o, {
                                                        is: r.is
                                                    }) : l.createElement(o);
                                            }
                                    }
                                    a[eR] = n, a[eI] = r;
                                    e: for(l = n.child; null !== l;){
                                        if (5 === l.tag || 6 === l.tag) a.appendChild(l.stateNode);
                                        else if (4 !== l.tag && 27 !== l.tag && null !== l.child) {
                                            l.child.return = l, l = l.child;
                                            continue;
                                        }
                                        if (l === n) break;
                                        for(; null === l.sibling;){
                                            if (null === l.return || l.return === n) break e;
                                            l = l.return;
                                        }
                                        l.sibling.return = l.return, l = l.sibling;
                                    }
                                    switch(n.stateNode = a, cd(a, o, r), o){
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            r = !!r.autoFocus;
                                            break;
                                        case "img":
                                            r = !0;
                                            break;
                                        default:
                                            r = !1;
                                    }
                                    r && lZ(n);
                                }
                            }
                            return lK(n), lW(n, n.type, null === e ? null : e.memoizedProps, n.pendingProps, t), null;
                        case 6:
                            if (e && null != n.stateNode) e.memoizedProps !== r && lZ(n);
                            else {
                                if ("string" != typeof r && null === n.stateNode) throw Error(i(166));
                                if (e = B.current, rT(n)) {
                                    if (e = n.stateNode, t = n.memoizedProps, r = null, null !== (o = rO)) switch(o.tag){
                                        case 27:
                                        case 5:
                                            r = o.memoizedProps;
                                    }
                                    e[eR] = n, (e = !!(e.nodeValue === t || null !== r && !0 === r.suppressHydrationWarning || ci(e.nodeValue, t))) || rN(n, !0);
                                } else (e = ch(e).createTextNode(r))[eR] = n, n.stateNode = e;
                            }
                            return lK(n), null;
                        case 31:
                            if (t = n.memoizedState, null === e || null !== e.memoizedState) {
                                if (r = rT(n), null !== t) {
                                    if (null === e) {
                                        if (!r) throw Error(i(318));
                                        if (!(e = null !== (e = n.memoizedState) ? e.dehydrated : null)) throw Error(i(557));
                                        e[eR] = n;
                                    } else rD(), 0 == (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
                                    lK(n), e = !1;
                                } else t = rA(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = t), e = !0;
                                if (!e) {
                                    if (256 & n.flags) return o$(n), n;
                                    return o$(n), null;
                                }
                                if (0 != (128 & n.flags)) throw Error(i(558));
                            }
                            return lK(n), null;
                        case 13:
                            if (r = n.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (o = rT(n), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!o) throw Error(i(318));
                                        if (!(o = null !== (o = n.memoizedState) ? o.dehydrated : null)) throw Error(i(317));
                                        o[eR] = n;
                                    } else rD(), 0 == (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
                                    lK(n), o = !1;
                                } else o = rA(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = o), o = !0;
                                if (!o) {
                                    if (256 & n.flags) return o$(n), n;
                                    return o$(n), null;
                                }
                            }
                            if (o$(n), 0 != (128 & n.flags)) return n.lanes = t, n;
                            return t = null !== r, e = null !== e && null !== e.memoizedState, t && (r = n.child, o = null, null !== r.alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (o = r.alternate.memoizedState.cachePool.pool), a = null, null !== r.memoizedState && null !== r.memoizedState.cachePool && (a = r.memoizedState.cachePool.pool), a !== o && (r.flags |= 2048)), t !== e && t && (n.child.flags |= 8192), lX(n, n.updateQueue), lK(n), null;
                        case 4:
                            return Z(), null === e && s8(n.stateNode.containerInfo), lK(n), null;
                        case 10:
                            return rU(n.type), lK(n), null;
                        case 19:
                            if (F(oq), null === (o = n.memoizedState)) return lK(n), null;
                            if (r = 0 != (128 & n.flags), null === (a = o.rendering)) if (r) lG(o, !1);
                            else {
                                if (0 !== iq || null !== e && 0 != (128 & e.flags)) for(e = n.child; null !== e;){
                                    if (null !== (a = oZ(e))) {
                                        for(n.flags |= 128, lG(o, !1), e = a.updateQueue, n.updateQueue = e, lX(n, e), n.subtreeFlags = 0, e = t, t = n.child; null !== t;)ro(t, e), t = t.sibling;
                                        return H(oq, 1 & oq.current | 2), n.child;
                                    }
                                    e = e.sibling;
                                }
                                null !== o.tail && eo() > i1 && (n.flags |= 128, r = !0, lG(o, !1), n.lanes = 4194304);
                            }
                            else {
                                if (!r) if (null !== (e = oZ(a))) {
                                    if (n.flags |= 128, r = !0, e = e.updateQueue, n.updateQueue = e, lX(n, e), lG(o, !0), null === o.tail && "hidden" === o.tailMode && !a.alternate && !r_) return lK(n), null;
                                } else 2 * eo() - o.renderingStartTime > i1 && 0x20000000 !== t && (n.flags |= 128, r = !0, lG(o, !1), n.lanes = 4194304);
                                o.isBackwards ? (a.sibling = n.child, n.child = a) : (null !== (e = o.last) ? e.sibling = a : n.child = a, o.last = a);
                            }
                            if (null !== o.tail) return n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = eo(), n.sibling = null, e = oq.current, H(oq, r ? 1 & e | 2 : 1 & e), n;
                            return lK(n), null;
                        case 22:
                        case 23:
                            return o$(n), oI(), r = null !== n.memoizedState, null !== e ? null !== e.memoizedState !== r && (n.flags |= 8192) : r && (n.flags |= 8192), r ? 0 != (0x20000000 & t) && 0 == (128 & n.flags) && (lK(n), 6 & n.subtreeFlags && (n.flags |= 8192)) : lK(n), null !== (t = n.updateQueue) && lX(n, t.retryQueue), t = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (t = e.memoizedState.cachePool.pool), r = null, null !== n.memoizedState && null !== n.memoizedState.cachePool && (r = n.memoizedState.cachePool.pool), r !== t && (n.flags |= 2048), null !== e && F(r9), null;
                        case 24:
                            return t = null, null !== e && (t = e.memoizedState.cache), n.memoizedState.cache !== t && (n.flags |= 2048), rU(rJ), lK(n), null;
                        case 25:
                        case 30:
                            return null;
                    }
                    throw Error(i(156, n.tag));
                }(n.alternate, n, i$);
                if (null !== t) {
                    iI = t;
                    return;
                }
                if (null !== (n = n.sibling)) {
                    iI = n;
                    return;
                }
                iI = n = e;
            }while (null !== n)
            0 === iq && (iq = 5);
        }
        function sj(e, n) {
            do {
                var t = function(e, n) {
                    switch(rj(n), n.tag){
                        case 1:
                            return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
                        case 3:
                            return rU(rJ), Z(), 0 != (65536 & (e = n.flags)) && 0 == (128 & e) ? (n.flags = -65537 & e | 128, n) : null;
                        case 26:
                        case 27:
                        case 5:
                            return Q(n), null;
                        case 31:
                            if (null !== n.memoizedState) {
                                if (o$(n), null === n.alternate) throw Error(i(340));
                                rD();
                            }
                            return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
                        case 13:
                            if (o$(n), null !== (e = n.memoizedState) && null !== e.dehydrated) {
                                if (null === n.alternate) throw Error(i(340));
                                rD();
                            }
                            return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
                        case 19:
                            return F(oq), null;
                        case 4:
                            return Z(), null;
                        case 10:
                            return rU(n.type), null;
                        case 22:
                        case 23:
                            return o$(n), oI(), null !== e && F(r9), 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
                        case 24:
                            return rU(rJ), null;
                        default:
                            return null;
                    }
                }(e.alternate, e);
                if (null !== t) {
                    t.flags &= 32767, iI = t;
                    return;
                }
                if (null !== (t = e.return) && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !n && null !== (e = e.sibling)) {
                    iI = e;
                    return;
                }
                iI = e = t;
            }while (null !== e)
            iq = 6, iI = null;
        }
        function sk(e, n, t, r, o, a, l, s, c) {
            e.cancelPendingCommit = null;
            do sE();
            while (0 !== i4)
            if (0 != (6 & iA)) throw Error(i(327));
            if (null !== n) {
                if (n === e.current) throw Error(i(177));
                if (!function(e, n, t, r, o, a) {
                    var l = e.pendingLanes;
                    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
                    var i = e.entanglements, s = e.expirationTimes, c = e.hiddenUpdates;
                    for(t = l & ~t; 0 < t;){
                        var u = 31 - eg(t), d = 1 << u;
                        i[u] = 0, s[u] = -1;
                        var f = c[u];
                        if (null !== f) for(c[u] = null, u = 0; u < f.length; u++){
                            var p = f[u];
                            null !== p && (p.lane &= -0x20000001);
                        }
                        t &= ~d;
                    }
                    0 !== r && eE(e, r, 0), 0 !== a && 0 === o && 0 !== e.tag && (e.suspendedLanes |= a & ~(l & ~n));
                }(e, t, a = n.lanes | n.childLanes | t2, l, s, c), e === iR && (iI = iR = null, iM = 0), i6 = n, i5 = e, i8 = t, i9 = a, i7 = o, se = r, 0 != (10256 & n.subtreeFlags) || 0 != (10256 & n.flags) ? (e.callbackNode = null, e.callbackPriority = 0, ee(es, function() {
                    return sP(!0), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), r = 0 != (13878 & n.flags), 0 != (13878 & n.subtreeFlags) || r) {
                    r = T.T, T.T = null, o = D.p, D.p = 2, l = iA, iA |= 4;
                    try {
                        !function(e, n) {
                            if (e = e.containerInfo, cf = ua, tN(e = tP(e))) {
                                if ("selectionStart" in e) var t = {
                                    start: e.selectionStart,
                                    end: e.selectionEnd
                                };
                                else e: {
                                    var r = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                                    if (r && 0 !== r.rangeCount) {
                                        t = r.anchorNode;
                                        var o, a = r.anchorOffset, l = r.focusNode;
                                        r = r.focusOffset;
                                        try {
                                            t.nodeType, l.nodeType;
                                        } catch (e) {
                                            t = null;
                                            break e;
                                        }
                                        var s = 0, c = -1, u = -1, d = 0, f = 0, p = e, h = null;
                                        n: for(;;){
                                            for(; p !== t || 0 !== a && 3 !== p.nodeType || (c = s + a), p !== l || 0 !== r && 3 !== p.nodeType || (u = s + r), 3 === p.nodeType && (s += p.nodeValue.length), null !== (o = p.firstChild);)h = p, p = o;
                                            for(;;){
                                                if (p === e) break n;
                                                if (h === t && ++d === a && (c = s), h === l && ++f === r && (u = s), null !== (o = p.nextSibling)) break;
                                                h = (p = h).parentNode;
                                            }
                                            p = o;
                                        }
                                        t = -1 === c || -1 === u ? null : {
                                            start: c,
                                            end: u
                                        };
                                    } else t = null;
                                }
                                t = t || {
                                    start: 0,
                                    end: 0
                                };
                            } else t = null;
                            for(cp = {
                                focusedElem: e,
                                selectionRange: t
                            }, ua = !1, il = n; null !== il;)if (e = (n = il).child, 0 != (1024 & n.subtreeFlags) && null !== e) e.return = n, il = e;
                            else for(; null !== il;){
                                switch(l = (n = il).alternate, e = n.flags, n.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 26:
                                    case 27:
                                    case 6:
                                    case 4:
                                    case 17:
                                        break;
                                    case 1:
                                        if (0 != (1024 & e) && null !== l) {
                                            e = void 0, t = n, a = l.memoizedProps, l = l.memoizedState, r = t.stateNode;
                                            try {
                                                var m = ls(t.type, a, t.elementType === t.type);
                                                e = r.getSnapshotBeforeUpdate(m, l), r.__reactInternalSnapshotBeforeUpdate = e;
                                            } catch (e) {
                                                sz(t, t.return, e);
                                            }
                                        }
                                        break;
                                    case 3:
                                        if (0 != (1024 & e)) {
                                            if (9 === (t = (e = n.stateNode.containerInfo).nodeType)) cC(e);
                                            else if (1 === t) switch(e.nodeName){
                                                case "HEAD":
                                                case "HTML":
                                                case "BODY":
                                                    cC(e);
                                                    break;
                                                default:
                                                    e.textContent = "";
                                            }
                                        }
                                        break;
                                    default:
                                        if (0 != (1024 & e)) throw Error(i(163));
                                }
                                if (null !== (e = n.sibling)) {
                                    e.return = n.return, il = e;
                                    break;
                                }
                                il = n.return;
                            }
                        }(e, n, t);
                    } finally{
                        iA = l, D.p = o, T.T = r;
                    }
                }
                i4 = 1, sO(), sS(), s_();
            }
        }
        function sO() {
            if (1 === i4) {
                i4 = 0;
                var e = i5, n = i6, t = 0 != (13878 & n.flags);
                if (0 != (13878 & n.subtreeFlags) || t) {
                    t = T.T, T.T = null;
                    var r = D.p;
                    D.p = 2;
                    var o = iA;
                    iA |= 4;
                    try {
                        iv(n, e);
                        var a = cp, l = tP(e.containerInfo), i = a.focusedElem, s = a.selectionRange;
                        if (l !== i && i && i.ownerDocument && function e(n, t) {
                            return !!n && !!t && (n === t || (!n || 3 !== n.nodeType) && (t && 3 === t.nodeType ? e(n, t.parentNode) : "contains" in n ? n.contains(t) : !!n.compareDocumentPosition && !!(16 & n.compareDocumentPosition(t))));
                        }(i.ownerDocument.documentElement, i)) {
                            if (null !== s && tN(i)) {
                                var c = s.start, u = s.end;
                                if (void 0 === u && (u = c), "selectionStart" in i) i.selectionStart = c, i.selectionEnd = Math.min(u, i.value.length);
                                else {
                                    var d = i.ownerDocument || document, f = d && d.defaultView || window;
                                    if (f.getSelection) {
                                        var p = f.getSelection(), h = i.textContent.length, m = Math.min(s.start, h), g = void 0 === s.end ? m : Math.min(s.end, h);
                                        !p.extend && m > g && (l = g, g = m, m = l);
                                        var b = tE(i, m), v = tE(i, g);
                                        if (b && v && (1 !== p.rangeCount || p.anchorNode !== b.node || p.anchorOffset !== b.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                            var y = d.createRange();
                                            y.setStart(b.node, b.offset), p.removeAllRanges(), m > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
                                        }
                                    }
                                }
                            }
                            for(d = [], p = i; p = p.parentNode;)1 === p.nodeType && d.push({
                                element: p,
                                left: p.scrollLeft,
                                top: p.scrollTop
                            });
                            for("function" == typeof i.focus && i.focus(), i = 0; i < d.length; i++){
                                var x = d[i];
                                x.element.scrollLeft = x.left, x.element.scrollTop = x.top;
                            }
                        }
                        ua = !!cf, cp = cf = null;
                    } finally{
                        iA = o, D.p = r, T.T = t;
                    }
                }
                e.current = n, i4 = 2;
            }
        }
        function sS() {
            if (2 === i4) {
                i4 = 0;
                var e = i5, n = i6, t = 0 != (8772 & n.flags);
                if (0 != (8772 & n.subtreeFlags) || t) {
                    t = T.T, T.T = null;
                    var r = D.p;
                    D.p = 2;
                    var o = iA;
                    iA |= 4;
                    try {
                        ii(e, n.alternate, n);
                    } finally{
                        iA = o, D.p = r, T.T = t;
                    }
                }
                i4 = 3;
            }
        }
        function s_() {
            if (4 === i4 || 3 === i4) {
                i4 = 0, er();
                var e = i5, n = i6, t = i8, r = se;
                0 != (10256 & n.subtreeFlags) || 0 != (10256 & n.flags) ? i4 = 5 : (i4 = 0, i6 = i5 = null, sC(e, e.pendingLanes));
                var o = e.pendingLanes;
                if (0 === o && (i3 = null), eL(t), n = n.stateNode, eh && "function" == typeof eh.onCommitFiberRoot) try {
                    eh.onCommitFiberRoot(ep, n, void 0, 128 == (128 & n.current.flags));
                } catch (e) {}
                if (null !== r) {
                    n = T.T, o = D.p, D.p = 2, T.T = null;
                    try {
                        for(var a = e.onRecoverableError, l = 0; l < r.length; l++){
                            var i = r[l];
                            a(i.value, {
                                componentStack: i.stack
                            });
                        }
                    } finally{
                        T.T = n, D.p = o;
                    }
                }
                0 != (3 & i8) && sE(), sB(e), o = e.pendingLanes, 0 != (4194090 & t) && 0 != (42 & o) ? e === st ? sn++ : (sn = 0, st = e) : sn = 0, s$(0, !1);
            }
        }
        function sC(e, n) {
            0 == (e.pooledCacheLanes &= n) && null != (n = e.pooledCache) && (e.pooledCache = null, r1(n));
        }
        function sE(e) {
            return sO(), sS(), s_(), sP(e);
        }
        function sP() {
            if (5 !== i4) return !1;
            var e = i5, n = i9;
            i9 = 0;
            var t = eL(i8), r = T.T, o = D.p;
            try {
                D.p = 32 > t ? 32 : t, T.T = null, t = i7, i7 = null;
                var a = i5, l = i8;
                if (i4 = 0, i6 = i5 = null, i8 = 0, 0 != (6 & iA)) throw Error(i(331));
                var s = iA;
                if (iA |= 4, iz(a.current), iO(a, a.current, l, t), iA = s, s$(0, !1), eh && "function" == typeof eh.onPostCommitFiberRoot) try {
                    eh.onPostCommitFiberRoot(ep, a);
                } catch (e) {}
                return !0;
            } finally{
                D.p = o, T.T = r, sC(e, n);
            }
        }
        function sN(e, n, t) {
            n = tJ(t, n), n = lm(e.stateNode, n, 2), null !== (e = oS(e, n, 2)) && (eC(e, 2), sB(e));
        }
        function sz(e, n, t) {
            if (3 === e.tag) sN(e, e, t);
            else for(; null !== n;){
                if (3 === n.tag) {
                    sN(n, e, t);
                    break;
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === i3 || !i3.has(r))) {
                        e = tJ(t, e), null !== (r = oS(n, t = lg(2), 2)) && (lb(t, r, n, e), eC(r, 2), sB(r));
                        break;
                    }
                }
                n = n.return;
            }
        }
        function sL(e, n, t) {
            var r = e.pingCache;
            if (null === r) {
                r = e.pingCache = new iD;
                var o = new Set;
                r.set(n, o);
            } else void 0 === (o = r.get(n)) && (o = new Set, r.set(n, o));
            o.has(t) || (iB = !0, o.add(t), e = sT.bind(null, e, n, t), n.then(e, e));
        }
        function sT(e, n, t) {
            var r = e.pingCache;
            null !== r && r.delete(n), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, iR === e && (iM & t) === t && (4 === iq || 3 === iq && (0x3c00000 & iM) === iM && 300 > eo() - i0 ? 0 == (2 & iA) && sd(e, 0) : iQ |= t, iG === iM && (iG = 0)), sB(e);
        }
        function sD(e, n) {
            0 === n && (n = eS()), null !== (e = t6(e, n)) && (eC(e, n), sB(e));
        }
        function sA(e) {
            var n = e.memoizedState, t = 0;
            null !== n && (t = n.retryLane), sD(e, t);
        }
        function sR(e, n) {
            var t = 0;
            switch(e.tag){
                case 31:
                case 13:
                    var r = e.stateNode, o = e.memoizedState;
                    null !== o && (t = o.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                case 22:
                    r = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(i(314));
            }
            null !== r && r.delete(n), sD(e, t);
        }
        var sI = null, sM = null, sF = !1, sH = !1, sU = !1, sV = 0;
        function sB(e) {
            e !== sM && null === e.next && (null === sM ? sI = sM = e : sM = sM.next = e), sH = !0, sF || (sF = !0, cj(function() {
                0 != (6 & iA) ? ee(el, sq) : sZ();
            }));
        }
        function s$(e, n) {
            if (!sU && sH) {
                sU = !0;
                do for(var t = !1, r = sI; null !== r;){
                    if (!n) if (0 !== e) {
                        var o = r.pendingLanes;
                        if (0 === o) var a = 0;
                        else {
                            var l = r.suspendedLanes, i = r.pingedLanes;
                            a = 0xc000095 & (a = (1 << 31 - eg(42 | e) + 1) - 1 & (o & ~(l & ~i))) ? 0xc000095 & a | 1 : a ? 2 | a : 0;
                        }
                        0 !== a && (t = !0, sX(r, a));
                    } else a = iM, 0 == (3 & (a = ej(r, r === iR ? a : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || ek(r, a) || (t = !0, sX(r, a));
                    r = r.next;
                }
                while (t)
                sU = !1;
            }
        }
        function sq() {
            sZ();
        }
        function sZ() {
            sH = sF = !1;
            var e, n = 0;
            0 !== sV && (((e = window.event) && "popstate" === e.type ? e === cv || (cv = e, 0) : (cv = null, 1)) || (n = sV), sV = 0);
            for(var t = eo(), r = null, o = sI; null !== o;){
                var a = o.next, l = sW(o, t);
                0 === l ? (o.next = null, null === r ? sI = a : r.next = a, null === a && (sM = r)) : (r = o, (0 !== n || 0 != (3 & l)) && (sH = !0)), o = a;
            }
            0 !== i4 && 5 !== i4 || s$(n, !1);
        }
        function sW(e, n) {
            for(var t = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = -0x3c00001 & e.pendingLanes; 0 < a;){
                var l = 31 - eg(a), i = 1 << l, s = o[l];
                -1 === s ? (0 == (i & t) || 0 != (i & r)) && (o[l] = function(e, n) {
                    switch(e){
                        case 1:
                        case 2:
                        case 4:
                        case 8:
                        case 64:
                            return n + 250;
                        case 16:
                        case 32:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return n + 5e3;
                        default:
                            return -1;
                    }
                }(i, n)) : s <= n && (e.expiredLanes |= i), a &= ~i;
            }
            if (n = iR, t = iM, t = ej(e, e === n ? t : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === t || e === n && (2 === iF || 9 === iF) || null !== e.cancelPendingCommit) return null !== r && null !== r && en(r), e.callbackNode = null, e.callbackPriority = 0;
            if (0 == (3 & t) || ek(e, t)) {
                if ((n = t & -t) === e.callbackPriority) return n;
                switch(null !== r && en(r), eL(t)){
                    case 2:
                    case 8:
                        t = ei;
                        break;
                    case 32:
                    default:
                        t = es;
                        break;
                    case 0x10000000:
                        t = eu;
                }
                return t = ee(t, r = sQ.bind(null, e)), e.callbackPriority = n, e.callbackNode = t, n;
            }
            return null !== r && null !== r && en(r), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function sQ(e, n) {
            if (0 !== i4 && 5 !== i4) return e.callbackNode = null, e.callbackPriority = 0, null;
            var t = e.callbackNode;
            if (sE(!0) && e.callbackNode !== t) return null;
            var r = iM;
            return 0 === (r = ej(e, e === iR ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (sl(e, r, n), sW(e, eo()), null != e.callbackNode && e.callbackNode === t ? sQ.bind(null, e) : null);
        }
        function sX(e, n) {
            if (sE()) return null;
            sl(e, n, !0);
        }
        function sG() {
            return 0 === sV && (sV = eO()), sV;
        }
        function sK(e) {
            return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : ng("" + e);
        }
        function sY(e, n) {
            var t = n.ownerDocument.createElement("input");
            return t.name = n.name, t.value = n.value, e.id && t.setAttribute("form", e.id), n.parentNode.insertBefore(t, n), e = new FormData(e), t.parentNode.removeChild(t), e;
        }
        for(var sJ = 0; sJ < tG.length; sJ++){
            var s0 = tG[sJ];
            tK(s0.toLowerCase(), "on" + (s0[0].toUpperCase() + s0.slice(1)));
        }
        tK(tV, "onAnimationEnd"), tK(tB, "onAnimationIteration"), tK(t$, "onAnimationStart"), tK("dblclick", "onDoubleClick"), tK("focusin", "onFocus"), tK("focusout", "onBlur"), tK(tq, "onTransitionRun"), tK(tZ, "onTransitionStart"), tK(tW, "onTransitionCancel"), tK(tQ, "onTransitionEnd"), eJ("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), eJ("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), eJ("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), eJ("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), eY("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), eY("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), eY("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), eY("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), eY("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), eY("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var s1 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), s2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(s1));
        function s3(e, n) {
            n = 0 != (4 & n);
            for(var t = 0; t < e.length; t++){
                var r = e[t], o = r.event;
                r = r.listeners;
                e: {
                    var a = void 0;
                    if (n) for(var l = r.length - 1; 0 <= l; l--){
                        var i = r[l], s = i.instance, c = i.currentTarget;
                        if (i = i.listener, s !== a && o.isPropagationStopped()) break e;
                        a = i, o.currentTarget = c;
                        try {
                            a(o);
                        } catch (e) {
                            lc(e);
                        }
                        o.currentTarget = null, a = s;
                    }
                    else for(l = 0; l < r.length; l++){
                        if (s = (i = r[l]).instance, c = i.currentTarget, i = i.listener, s !== a && o.isPropagationStopped()) break e;
                        a = i, o.currentTarget = c;
                        try {
                            a(o);
                        } catch (e) {
                            lc(e);
                        }
                        o.currentTarget = null, a = s;
                    }
                }
            }
        }
        function s4(e, n) {
            var t = n[eF];
            void 0 === t && (t = n[eF] = new Set);
            var r = e + "__bubble";
            t.has(r) || (s9(n, e, 2, !1), t.add(r));
        }
        function s5(e, n, t) {
            var r = 0;
            n && (r |= 4), s9(t, e, r, n);
        }
        var s6 = "_reactListening" + Math.random().toString(36).slice(2);
        function s8(e) {
            if (!e[s6]) {
                e[s6] = !0, eG.forEach(function(n) {
                    "selectionchange" !== n && (s2.has(n) || s5(n, !1, e), s5(n, !0, e));
                });
                var n = 9 === e.nodeType ? e : e.ownerDocument;
                null === n || n[s6] || (n[s6] = !0, s5("selectionchange", !1, n));
            }
        }
        function s9(e, n, t, r) {
            switch(uf(n)){
                case 2:
                    var o = ul;
                    break;
                case 8:
                    o = ui;
                    break;
                default:
                    o = us;
            }
            t = o.bind(null, n, t, e), o = void 0, n_ && ("touchstart" === n || "touchmove" === n || "wheel" === n) && (o = !0), r ? void 0 !== o ? e.addEventListener(n, t, {
                capture: !0,
                passive: o
            }) : e.addEventListener(n, t, !0) : void 0 !== o ? e.addEventListener(n, t, {
                passive: o
            }) : e.addEventListener(n, t, !1);
        }
        function s7(e, n, t, r, o) {
            var a = r;
            if (0 == (1 & n) && 0 == (2 & n) && null !== r) e: for(;;){
                if (null === r) return;
                var l = r.tag;
                if (3 === l || 4 === l) {
                    var i = r.stateNode.containerInfo;
                    if (i === o) break;
                    if (4 === l) for(l = r.return; null !== l;){
                        var c = l.tag;
                        if ((3 === c || 4 === c) && l.stateNode.containerInfo === o) return;
                        l = l.return;
                    }
                    for(; null !== i;){
                        if (null === (l = eq(i))) return;
                        if (5 === (c = l.tag) || 6 === c || 26 === c || 27 === c) {
                            r = a = l;
                            continue e;
                        }
                        i = i.parentNode;
                    }
                }
                r = r.return;
            }
            nk(function() {
                var r = a, o = nv(t), l = [];
                e: {
                    var i = tX.get(e);
                    if (void 0 !== i) {
                        var c = nV, u = e;
                        switch(e){
                            case "keypress":
                                if (0 === nL(t)) break e;
                            case "keydown":
                            case "keyup":
                                c = n3;
                                break;
                            case "focusin":
                                u = "focus", c = nQ;
                                break;
                            case "focusout":
                                u = "blur", c = nQ;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                c = nQ;
                                break;
                            case "click":
                                if (2 === t.button) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                c = nZ;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                c = nW;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                c = n5;
                                break;
                            case tV:
                            case tB:
                            case t$:
                                c = nX;
                                break;
                            case tQ:
                                c = n6;
                                break;
                            case "scroll":
                            case "scrollend":
                                c = n$;
                                break;
                            case "wheel":
                                c = n8;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                c = nG;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                c = n4;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                c = n9;
                        }
                        var d = 0 != (4 & n), f = !d && ("scroll" === e || "scrollend" === e), p = d ? null !== i ? i + "Capture" : null : i;
                        d = [];
                        for(var h, m = r; null !== m;){
                            var g = m;
                            if (h = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === h || null === p || null != (g = nO(m, p)) && d.push(ce(m, g, h)), f) break;
                            m = m.return;
                        }
                        0 < d.length && (i = new c(i, u, null, t, o), l.push({
                            event: i,
                            listeners: d
                        }));
                    }
                }
                if (0 == (7 & n)) {
                    if ((i = "mouseover" === e || "pointerover" === e, c = "mouseout" === e || "pointerout" === e, !(i && t !== nb && (u = t.relatedTarget || t.fromElement) && (eq(u) || u[eM]))) && (c || i) && (i = o.window === o ? o : (i = o.ownerDocument) ? i.defaultView || i.parentWindow : window, c ? (u = t.relatedTarget || t.toElement, c = r, null !== (u = u ? eq(u) : null) && (f = s(u), d = u.tag, u !== f || 5 !== d && 27 !== d && 6 !== d) && (u = null)) : (c = null, u = r), c !== u)) {
                        if (d = nZ, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", ("pointerout" === e || "pointerover" === e) && (d = n4, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = null == c ? i : eW(c), h = null == u ? i : eW(u), (i = new d(g, m + "leave", c, t, o)).target = f, i.relatedTarget = h, g = null, eq(o) === r && ((d = new d(p, m + "enter", u, t, o)).target = h, d.relatedTarget = f, g = d), f = g, c && u) n: {
                            for(d = c, p = u, m = 0, h = d; h; h = ct(h))m++;
                            for(h = 0, g = p; g; g = ct(g))h++;
                            for(; 0 < m - h;)d = ct(d), m--;
                            for(; 0 < h - m;)p = ct(p), h--;
                            for(; m--;){
                                if (d === p || null !== p && d === p.alternate) break n;
                                d = ct(d), p = ct(p);
                            }
                            d = null;
                        }
                        else d = null;
                        null !== c && cr(l, i, c, d, !1), null !== u && null !== f && cr(l, f, u, d, !0);
                    }
                    e: {
                        if ("select" === (c = (i = r ? eW(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === c && "file" === i.type) var b, v = tm;
                        else if (tc(i)) if (tg) v = tO;
                        else {
                            v = tj;
                            var y = tw;
                        }
                        else (c = i.nodeName) && "input" === c.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) ? v = tk : r && np(r.elementType) && (v = tm);
                        if (v && (v = v(e, r))) {
                            tu(l, v, t, o);
                            break e;
                        }
                        y && y(e, i, r), "focusout" === e && r && "number" === i.type && null != r.memoizedProps.value && na(i, "number", i.value);
                    }
                    switch(y = r ? eW(r) : window, e){
                        case "focusin":
                            (tc(y) || "true" === y.contentEditable) && (tL = y, tT = r, tD = null);
                            break;
                        case "focusout":
                            tD = tT = tL = null;
                            break;
                        case "mousedown":
                            tA = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            tA = !1, tR(l, t, o);
                            break;
                        case "selectionchange":
                            if (tz) break;
                        case "keydown":
                        case "keyup":
                            tR(l, t, o);
                    }
                    if (te) n: {
                        switch(e){
                            case "compositionstart":
                                var x = "onCompositionStart";
                                break n;
                            case "compositionend":
                                x = "onCompositionEnd";
                                break n;
                            case "compositionupdate":
                                x = "onCompositionUpdate";
                                break n;
                        }
                        x = void 0;
                    }
                    else ti ? ta(e, t) && (x = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (x = "onCompositionStart");
                    x && (tr && "ko" !== t.locale && (ti || "onCompositionStart" !== x ? "onCompositionEnd" === x && ti && (b = nz()) : (nP = "value" in (nE = o) ? nE.value : nE.textContent, ti = !0)), 0 < (y = cn(r, x)).length && (x = new nK(x, e, null, t, o), l.push({
                        event: x,
                        listeners: y
                    }), b ? x.data = b : null !== (b = tl(t)) && (x.data = b))), (b = tt ? function(e, n) {
                        switch(e){
                            case "compositionend":
                                return tl(n);
                            case "keypress":
                                if (32 !== n.which) return null;
                                return to = !0, " ";
                            case "textInput":
                                return " " === (e = n.data) && to ? null : e;
                            default:
                                return null;
                        }
                    }(e, t) : function(e, n) {
                        if (ti) return "compositionend" === e || !te && ta(e, n) ? (e = nz(), nN = nP = nE = null, ti = !1, e) : null;
                        switch(e){
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                                    if (n.char && 1 < n.char.length) return n.char;
                                    if (n.which) return String.fromCharCode(n.which);
                                }
                                return null;
                            case "compositionend":
                                return tr && "ko" !== n.locale ? null : n.data;
                        }
                    }(e, t)) && 0 < (x = cn(r, "onBeforeInput")).length && (y = new nK("onBeforeInput", "beforeinput", null, t, o), l.push({
                        event: y,
                        listeners: x
                    }), y.data = b);
                    var w = e;
                    if ("submit" === w && r && r.stateNode === o) {
                        var j = sK((o[eI] || null).action), k = t.submitter;
                        k && null !== (w = (w = k[eI] || null) ? sK(w.formAction) : k.getAttribute("formAction")) && (j = w, k = null);
                        var O = new nV("action", "action", null, t, o);
                        l.push({
                            event: O,
                            listeners: [
                                {
                                    instance: null,
                                    listener: function() {
                                        if (t.defaultPrevented) {
                                            if (0 !== sV) {
                                                var e = k ? sY(o, k) : new FormData(o);
                                                aG(r, {
                                                    pending: !0,
                                                    data: e,
                                                    method: o.method,
                                                    action: j
                                                }, null, e);
                                            }
                                        } else "function" == typeof j && (O.preventDefault(), aG(r, {
                                            pending: !0,
                                            data: e = k ? sY(o, k) : new FormData(o),
                                            method: o.method,
                                            action: j
                                        }, j, e));
                                    },
                                    currentTarget: o
                                }
                            ]
                        });
                    }
                }
                s3(l, n);
            });
        }
        function ce(e, n, t) {
            return {
                instance: e,
                listener: n,
                currentTarget: t
            };
        }
        function cn(e, n) {
            for(var t = n + "Capture", r = []; null !== e;){
                var o = e, a = o.stateNode;
                if (5 !== (o = o.tag) && 26 !== o && 27 !== o || null === a || (null != (o = nO(e, t)) && r.unshift(ce(e, o, a)), null != (o = nO(e, n)) && r.push(ce(e, o, a))), 3 === e.tag) return r;
                e = e.return;
            }
            return [];
        }
        function ct(e) {
            if (null === e) return null;
            do e = e.return;
            while (e && 5 !== e.tag && 27 !== e.tag)
            return e || null;
        }
        function cr(e, n, t, r, o) {
            for(var a = n._reactName, l = []; null !== t && t !== r;){
                var i = t, s = i.alternate, c = i.stateNode;
                if (i = i.tag, null !== s && s === r) break;
                5 !== i && 26 !== i && 27 !== i || null === c || (s = c, o ? null != (c = nO(t, a)) && l.unshift(ce(t, c, s)) : o || null != (c = nO(t, a)) && l.push(ce(t, c, s))), t = t.return;
            }
            0 !== l.length && e.push({
                event: n,
                listeners: l
            });
        }
        var co = /\r\n?/g, ca = /\u0000|\uFFFD/g;
        function cl(e) {
            return ("string" == typeof e ? e : "" + e).replace(co, "\n").replace(ca, "");
        }
        function ci(e, n) {
            return n = cl(n), cl(e) === n;
        }
        function cs() {}
        function cc(e, n, t, r, o, a) {
            switch(t){
                case "children":
                    "string" == typeof r ? "body" === n || "textarea" === n && "" === r || nc(e, r) : ("number" == typeof r || "bigint" == typeof r) && "body" !== n && nc(e, "" + r);
                    break;
                case "className":
                    e4(e, "class", r);
                    break;
                case "tabIndex":
                    e4(e, "tabindex", r);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    e4(e, t, r);
                    break;
                case "style":
                    nf(e, r, a);
                    break;
                case "data":
                    if ("object" !== n) {
                        e4(e, "data", r);
                        break;
                    }
                case "src":
                case "href":
                    if ("" === r && ("a" !== n || "href" !== t) || null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) {
                        e.removeAttribute(t);
                        break;
                    }
                    r = ng("" + r), e.setAttribute(t, r);
                    break;
                case "action":
                case "formAction":
                    if ("function" == typeof r) {
                        e.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    }
                    if ("function" == typeof a && ("formAction" === t ? ("input" !== n && cc(e, n, "name", o.name, o, null), cc(e, n, "formEncType", o.formEncType, o, null), cc(e, n, "formMethod", o.formMethod, o, null), cc(e, n, "formTarget", o.formTarget, o, null)) : (cc(e, n, "encType", o.encType, o, null), cc(e, n, "method", o.method, o, null), cc(e, n, "target", o.target, o, null))), null == r || "symbol" == typeof r || "boolean" == typeof r) {
                        e.removeAttribute(t);
                        break;
                    }
                    r = ng("" + r), e.setAttribute(t, r);
                    break;
                case "onClick":
                    null != r && (e.onclick = cs);
                    break;
                case "onScroll":
                    null != r && s4("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && s4("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if ("object" != typeof r || !("__html" in r)) throw Error(i(61));
                        if (null != (t = r.__html)) {
                            if (null != o.children) throw Error(i(60));
                            e.innerHTML = t;
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = r && "function" != typeof r && "symbol" != typeof r;
                    break;
                case "muted":
                    e.muted = r && "function" != typeof r && "symbol" != typeof r;
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                case "autoFocus":
                case "innerText":
                case "textContent":
                    break;
                case "xlinkHref":
                    if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                        e.removeAttribute("xlink:href");
                        break;
                    }
                    t = ng("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(t, "" + r) : e.removeAttribute(t);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(t, "") : e.removeAttribute(t);
                    break;
                case "capture":
                case "download":
                    !0 === r ? e.setAttribute(t, "") : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(t, r) : e.removeAttribute(t);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(t, r) : e.removeAttribute(t);
                    break;
                case "rowSpan":
                case "start":
                    null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
                    break;
                case "popover":
                    s4("beforetoggle", e), s4("toggle", e), e3(e, "popover", r);
                    break;
                case "xlinkActuate":
                    e5(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                    break;
                case "xlinkArcrole":
                    e5(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                    break;
                case "xlinkRole":
                    e5(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                    break;
                case "xlinkShow":
                    e5(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                    break;
                case "xlinkTitle":
                    e5(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                    break;
                case "xlinkType":
                    e5(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                    break;
                case "xmlBase":
                    e5(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                    break;
                case "xmlLang":
                    e5(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                    break;
                case "xmlSpace":
                    e5(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                    break;
                case "is":
                    e3(e, "is", r);
                    break;
                default:
                    2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]) || e3(e, t = nh.get(t) || t, r);
            }
        }
        function cu(e, n, t, r, o, a) {
            switch(t){
                case "style":
                    nf(e, r, a);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if ("object" != typeof r || !("__html" in r)) throw Error(i(61));
                        if (null != (t = r.__html)) {
                            if (null != o.children) throw Error(i(60));
                            e.innerHTML = t;
                        }
                    }
                    break;
                case "children":
                    "string" == typeof r ? nc(e, r) : ("number" == typeof r || "bigint" == typeof r) && nc(e, "" + r);
                    break;
                case "onScroll":
                    null != r && s4("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && s4("scrollend", e);
                    break;
                case "onClick":
                    null != r && (e.onclick = cs);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!eK.hasOwnProperty(t)) e: {
                        if ("o" === t[0] && "n" === t[1] && (o = t.endsWith("Capture"), n = t.slice(2, o ? t.length - 7 : void 0), "function" == typeof (a = null != (a = e[eI] || null) ? a[t] : null) && e.removeEventListener(n, a, o), "function" == typeof r)) {
                            "function" != typeof a && null !== a && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(n, r, o);
                            break e;
                        }
                        t in e ? e[t] = r : !0 === r ? e.setAttribute(t, "") : e3(e, t, r);
                    }
            }
        }
        function cd(e, n, t) {
            switch(n){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    s4("error", e), s4("load", e);
                    var r, o = !1, a = !1;
                    for(r in t)if (t.hasOwnProperty(r)) {
                        var l = t[r];
                        if (null != l) switch(r){
                            case "src":
                                o = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(i(137, n));
                            default:
                                cc(e, n, r, l, t, null);
                        }
                    }
                    a && cc(e, n, "srcSet", t.srcSet, t, null), o && cc(e, n, "src", t.src, t, null);
                    return;
                case "input":
                    s4("invalid", e);
                    var s = r = l = a = null, c = null, u = null;
                    for(o in t)if (t.hasOwnProperty(o)) {
                        var d = t[o];
                        if (null != d) switch(o){
                            case "name":
                                a = d;
                                break;
                            case "type":
                                l = d;
                                break;
                            case "checked":
                                c = d;
                                break;
                            case "defaultChecked":
                                u = d;
                                break;
                            case "value":
                                r = d;
                                break;
                            case "defaultValue":
                                s = d;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != d) throw Error(i(137, n));
                                break;
                            default:
                                cc(e, n, o, d, t, null);
                        }
                    }
                    no(e, r, s, c, u, l, a, !1), e9(e);
                    return;
                case "select":
                    for(a in s4("invalid", e), o = l = r = null, t)if (t.hasOwnProperty(a) && null != (s = t[a])) switch(a){
                        case "value":
                            r = s;
                            break;
                        case "defaultValue":
                            l = s;
                            break;
                        case "multiple":
                            o = s;
                        default:
                            cc(e, n, a, s, t, null);
                    }
                    n = r, t = l, e.multiple = !!o, null != n ? nl(e, !!o, n, !1) : null != t && nl(e, !!o, t, !0);
                    return;
                case "textarea":
                    for(l in s4("invalid", e), r = a = o = null, t)if (t.hasOwnProperty(l) && null != (s = t[l])) switch(l){
                        case "value":
                            o = s;
                            break;
                        case "defaultValue":
                            a = s;
                            break;
                        case "children":
                            r = s;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != s) throw Error(i(91));
                            break;
                        default:
                            cc(e, n, l, s, t, null);
                    }
                    ns(e, o, a, r), e9(e);
                    return;
                case "option":
                    for(c in t)t.hasOwnProperty(c) && null != (o = t[c]) && ("selected" === c ? e.selected = o && "function" != typeof o && "symbol" != typeof o : cc(e, n, c, o, t, null));
                    return;
                case "dialog":
                    s4("beforetoggle", e), s4("toggle", e), s4("cancel", e), s4("close", e);
                    break;
                case "iframe":
                case "object":
                    s4("load", e);
                    break;
                case "video":
                case "audio":
                    for(o = 0; o < s1.length; o++)s4(s1[o], e);
                    break;
                case "image":
                    s4("error", e), s4("load", e);
                    break;
                case "details":
                    s4("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    s4("error", e), s4("load", e);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for(u in t)if (t.hasOwnProperty(u) && null != (o = t[u])) switch(u){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(i(137, n));
                        default:
                            cc(e, n, u, o, t, null);
                    }
                    return;
                default:
                    if (np(n)) {
                        for(d in t)t.hasOwnProperty(d) && void 0 !== (o = t[d]) && cu(e, n, d, o, t, void 0);
                        return;
                    }
            }
            for(s in t)t.hasOwnProperty(s) && null != (o = t[s]) && cc(e, n, s, o, t, null);
        }
        var cf = null, cp = null;
        function ch(e) {
            return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function cm(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function cg(e, n) {
            if (0 === e) switch(n){
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return 1 === e && "foreignObject" === n ? 0 : e;
        }
        function cb(e, n) {
            return "textarea" === e || "noscript" === e || "string" == typeof n.children || "number" == typeof n.children || "bigint" == typeof n.children || "object" == typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html;
        }
        var cv = null, cy = "function" == typeof setTimeout ? setTimeout : void 0, cx = "function" == typeof clearTimeout ? clearTimeout : void 0, cw = "function" == typeof Promise ? Promise : void 0, cj = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== cw ? function(e) {
            return cw.resolve(null).then(e).catch(ck);
        } : cy;
        function ck(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function cO(e) {
            return "head" === e;
        }
        function cS(e, n) {
            var t = n, r = 0;
            do {
                var o = t.nextSibling;
                if (e.removeChild(t), o && 8 === o.nodeType) if ("/$" === (t = o.data) || "/&" === t) {
                    if (0 === r) {
                        e.removeChild(o), uN(n);
                        return;
                    }
                    r--;
                } else if ("$" === t || "$?" === t || "$!" === t || "&" === t) r++;
                else if ("html" === t) cA(e.ownerDocument.documentElement);
                else if ("head" === t) {
                    cA(t = e.ownerDocument.head);
                    for(var a = t.firstChild; a;){
                        var l = a.nextSibling, i = a.nodeName;
                        a[eB] || "SCRIPT" === i || "STYLE" === i || "LINK" === i && "stylesheet" === a.rel.toLowerCase() || t.removeChild(a), a = l;
                    }
                } else "body" === t && cA(e.ownerDocument.body);
                t = o;
            }while (t)
            uN(n);
        }
        function c_(e, n) {
            var t = e;
            e = 0;
            do {
                var r = t.nextSibling;
                if (1 === t.nodeType ? n ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", "" === t.getAttribute("style") && t.removeAttribute("style")) : 3 === t.nodeType && (n ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), r && 8 === r.nodeType) if ("/$" === (t = r.data)) if (0 === e) break;
                else e--;
                else "$" !== t && "$?" !== t && "$!" !== t || e++;
                t = r;
            }while (t)
        }
        function cC(e) {
            var n = e.firstChild;
            for(n && 10 === n.nodeType && (n = n.nextSibling); n;){
                var t = n;
                switch(n = n.nextSibling, t.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        cC(t), e$(t);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if ("stylesheet" === t.rel.toLowerCase()) continue;
                }
                e.removeChild(t);
            }
        }
        function cE(e, n) {
            for(; 8 !== e.nodeType;)if (!n || null === (e = cN(e.nextSibling))) return null;
            return e;
        }
        function cP(e) {
            return "$!" === e.data || "$?" === e.data && "complete" === e.ownerDocument.readyState;
        }
        function cN(e) {
            for(; null != e; e = e.nextSibling){
                var n = e.nodeType;
                if (1 === n || 3 === n) break;
                if (8 === n) {
                    if ("$" === (n = e.data) || "$!" === n || "$?" === n || "&" === n || "F!" === n || "F" === n) break;
                    if ("/$" === n || "/&" === n) return null;
                }
            }
            return e;
        }
        var cz = null;
        function cL(e) {
            e = e.nextSibling;
            for(var n = 0; e;){
                if (8 === e.nodeType) {
                    var t = e.data;
                    if ("/$" === t || "/&" === t) {
                        if (0 === n) return cN(e.nextSibling);
                        n--;
                    } else "$" !== t && "$!" !== t && "$?" !== t && "&" !== t || n++;
                }
                e = e.nextSibling;
            }
            return null;
        }
        function cT(e) {
            e = e.previousSibling;
            for(var n = 0; e;){
                if (8 === e.nodeType) {
                    var t = e.data;
                    if ("$" === t || "$!" === t || "$?" === t || "&" === t) {
                        if (0 === n) return e;
                        n--;
                    } else "/$" !== t && "/&" !== t || n++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        function cD(e, n, t) {
            switch(n = ch(t), e){
                case "html":
                    if (!(e = n.documentElement)) throw Error(i(452));
                    return e;
                case "head":
                    if (!(e = n.head)) throw Error(i(453));
                    return e;
                case "body":
                    if (!(e = n.body)) throw Error(i(454));
                    return e;
                default:
                    throw Error(i(451));
            }
        }
        function cA(e) {
            for(var n = e.attributes; n.length;)e.removeAttributeNode(n[0]);
            e$(e);
        }
        var cR = new Map, cI = new Set;
        function cM(e) {
            return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
        }
        var cF = D.d;
        D.d = {
            f: function() {
                var e = cF.f(), n = sc();
                return e || n;
            },
            r: function(e) {
                var n = eZ(e);
                null !== n && 5 === n.tag && "form" === n.type ? aY(n) : cF.r(e);
            },
            D: function(e) {
                cF.D(e), cU("dns-prefetch", e, null);
            },
            C: function(e, n) {
                cF.C(e, n), cU("preconnect", e, n);
            },
            L: function(e, n, t) {
                if (cF.L(e, n, t), cH && e && n) {
                    var r = 'link[rel="preload"][as="' + nt(n) + '"]';
                    "image" === n && t && t.imageSrcSet ? (r += '[imagesrcset="' + nt(t.imageSrcSet) + '"]', "string" == typeof t.imageSizes && (r += '[imagesizes="' + nt(t.imageSizes) + '"]')) : r += '[href="' + nt(e) + '"]';
                    var o = r;
                    switch(n){
                        case "style":
                            o = cB(e);
                            break;
                        case "script":
                            o = cZ(e);
                    }
                    cR.has(o) || (e = f({
                        rel: "preload",
                        href: "image" === n && t && t.imageSrcSet ? void 0 : e,
                        as: n
                    }, t), cR.set(o, e), null !== cH.querySelector(r) || "style" === n && cH.querySelector(c$(o)) || "script" === n && cH.querySelector(cW(o)) || (cd(n = cH.createElement("link"), "link", e), eX(n), cH.head.appendChild(n)));
                }
            },
            m: function(e, n) {
                if (cF.m(e, n), cH && e) {
                    var t = n && "string" == typeof n.as ? n.as : "script", r = 'link[rel="modulepreload"][as="' + nt(t) + '"][href="' + nt(e) + '"]', o = r;
                    switch(t){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            o = cZ(e);
                    }
                    if (!cR.has(o) && (e = f({
                        rel: "modulepreload",
                        href: e
                    }, n), cR.set(o, e), null === cH.querySelector(r))) {
                        switch(t){
                            case "audioworklet":
                            case "paintworklet":
                            case "serviceworker":
                            case "sharedworker":
                            case "worker":
                            case "script":
                                if (cH.querySelector(cW(o))) return;
                        }
                        cd(t = cH.createElement("link"), "link", e), eX(t), cH.head.appendChild(t);
                    }
                }
            },
            X: function(e, n) {
                if (cF.X(e, n), cH && e) {
                    var t = eQ(cH).hoistableScripts, r = cZ(e), o = t.get(r);
                    o || ((o = cH.querySelector(cW(r))) || (e = f({
                        src: e,
                        async: !0
                    }, n), (n = cR.get(r)) && cK(e, n), eX(o = cH.createElement("script")), cd(o, "link", e), cH.head.appendChild(o)), o = {
                        type: "script",
                        instance: o,
                        count: 1,
                        state: null
                    }, t.set(r, o));
                }
            },
            S: function(e, n, t) {
                if (cF.S(e, n, t), cH && e) {
                    var r = eQ(cH).hoistableStyles, o = cB(e);
                    n = n || "default";
                    var a = r.get(o);
                    if (!a) {
                        var l = {
                            loading: 0,
                            preload: null
                        };
                        if (a = cH.querySelector(c$(o))) l.loading = 5;
                        else {
                            e = f({
                                rel: "stylesheet",
                                href: e,
                                "data-precedence": n
                            }, t), (t = cR.get(o)) && cG(e, t);
                            var i = a = cH.createElement("link");
                            eX(i), cd(i, "link", e), i._p = new Promise(function(e, n) {
                                i.onload = e, i.onerror = n;
                            }), i.addEventListener("load", function() {
                                l.loading |= 1;
                            }), i.addEventListener("error", function() {
                                l.loading |= 2;
                            }), l.loading |= 4, cX(a, n, cH);
                        }
                        a = {
                            type: "stylesheet",
                            instance: a,
                            count: 1,
                            state: l
                        }, r.set(o, a);
                    }
                }
            },
            M: function(e, n) {
                if (cF.M(e, n), cH && e) {
                    var t = eQ(cH).hoistableScripts, r = cZ(e), o = t.get(r);
                    o || ((o = cH.querySelector(cW(r))) || (e = f({
                        src: e,
                        async: !0,
                        type: "module"
                    }, n), (n = cR.get(r)) && cK(e, n), eX(o = cH.createElement("script")), cd(o, "link", e), cH.head.appendChild(o)), o = {
                        type: "script",
                        instance: o,
                        count: 1,
                        state: null
                    }, t.set(r, o));
                }
            }
        };
        var cH = "undefined" == typeof document ? null : document;
        function cU(e, n, t) {
            if (cH && "string" == typeof n && n) {
                var r = nt(n);
                r = 'link[rel="' + e + '"][href="' + r + '"]', "string" == typeof t && (r += '[crossorigin="' + t + '"]'), cI.has(r) || (cI.add(r), e = {
                    rel: e,
                    crossOrigin: t,
                    href: n
                }, null === cH.querySelector(r) && (cd(n = cH.createElement("link"), "link", e), eX(n), cH.head.appendChild(n)));
            }
        }
        function cV(e, n, t, r) {
            var o = (o = B.current) ? cM(o) : null;
            if (!o) throw Error(i(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return "string" == typeof t.precedence && "string" == typeof t.href ? (n = cB(t.href), (r = (t = eQ(o).hoistableStyles).get(n)) || (r = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, t.set(n, r)), r) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if ("stylesheet" === t.rel && "string" == typeof t.href && "string" == typeof t.precedence) {
                        e = cB(t.href);
                        var a, l, s, c, u = eQ(o).hoistableStyles, d = u.get(e);
                        if (d || (o = o.ownerDocument || o, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(e, d), (u = o.querySelector(c$(e))) && !u._p && (d.instance = u, d.state.loading = 5), cR.has(e) || (t = {
                            rel: "preload",
                            as: "style",
                            href: t.href,
                            crossOrigin: t.crossOrigin,
                            integrity: t.integrity,
                            media: t.media,
                            hrefLang: t.hrefLang,
                            referrerPolicy: t.referrerPolicy
                        }, cR.set(e, t), u || (a = o, l = e, s = t, c = d.state, a.querySelector('link[rel="preload"][as="style"][' + l + "]") ? c.loading = 1 : (c.preload = l = a.createElement("link"), l.addEventListener("load", function() {
                            return c.loading |= 1;
                        }), l.addEventListener("error", function() {
                            return c.loading |= 2;
                        }), cd(l, "link", s), eX(l), a.head.appendChild(l))))), n && null === r) throw Error(i(528, ""));
                        return d;
                    }
                    if (n && null !== r) throw Error(i(529, ""));
                    return null;
                case "script":
                    return n = t.async, "string" == typeof (t = t.src) && n && "function" != typeof n && "symbol" != typeof n ? (n = cZ(t), (r = (t = eQ(o).hoistableScripts).get(n)) || (r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, t.set(n, r)), r) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(i(444, e));
            }
        }
        function cB(e) {
            return 'href="' + nt(e) + '"';
        }
        function c$(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function cq(e) {
            return f({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function cZ(e) {
            return '[src="' + nt(e) + '"]';
        }
        function cW(e) {
            return "script[async]" + e;
        }
        function cQ(e, n, t) {
            if (n.count++, null === n.instance) switch(n.type){
                case "style":
                    var r = e.querySelector('style[data-href~="' + nt(t.href) + '"]');
                    if (r) return n.instance = r, eX(r), r;
                    var o = f({}, t, {
                        "data-href": t.href,
                        "data-precedence": t.precedence,
                        href: null,
                        precedence: null
                    });
                    return eX(r = (e.ownerDocument || e).createElement("style")), cd(r, "style", o), cX(r, t.precedence, e), n.instance = r;
                case "stylesheet":
                    o = cB(t.href);
                    var a = e.querySelector(c$(o));
                    if (a) return n.state.loading |= 4, n.instance = a, eX(a), a;
                    r = cq(t), (o = cR.get(o)) && cG(r, o), eX(a = (e.ownerDocument || e).createElement("link"));
                    var l = a;
                    return l._p = new Promise(function(e, n) {
                        l.onload = e, l.onerror = n;
                    }), cd(a, "link", r), n.state.loading |= 4, cX(a, t.precedence, e), n.instance = a;
                case "script":
                    if (a = cZ(t.src), o = e.querySelector(cW(a))) return n.instance = o, eX(o), o;
                    return r = t, (o = cR.get(a)) && cK(r = f({}, t), o), eX(o = (e = e.ownerDocument || e).createElement("script")), cd(o, "link", r), e.head.appendChild(o), n.instance = o;
                case "void":
                    return null;
                default:
                    throw Error(i(443, n.type));
            }
            return "stylesheet" === n.type && 0 == (4 & n.state.loading) && (r = n.instance, n.state.loading |= 4, cX(r, t.precedence, e)), n.instance;
        }
        function cX(e, n, t) {
            for(var r = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = r.length ? r[r.length - 1] : null, a = o, l = 0; l < r.length; l++){
                var i = r[l];
                if (i.dataset.precedence === n) a = i;
                else if (a !== o) break;
            }
            a ? a.parentNode.insertBefore(e, a.nextSibling) : (n = 9 === t.nodeType ? t.head : t).insertBefore(e, n.firstChild);
        }
        function cG(e, n) {
            null == e.crossOrigin && (e.crossOrigin = n.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = n.referrerPolicy), null == e.title && (e.title = n.title);
        }
        function cK(e, n) {
            null == e.crossOrigin && (e.crossOrigin = n.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = n.referrerPolicy), null == e.integrity && (e.integrity = n.integrity);
        }
        var cY = null;
        function cJ(e, n, t) {
            if (null === cY) {
                var r = new Map, o = cY = new Map;
                o.set(t, r);
            } else (r = (o = cY).get(t)) || (r = new Map, o.set(t, r));
            if (r.has(e)) return r;
            for(r.set(e, null), t = t.getElementsByTagName(e), o = 0; o < t.length; o++){
                var a = t[o];
                if (!(a[eB] || a[eR] || "link" === e && "stylesheet" === a.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a.namespaceURI) {
                    var l = a.getAttribute(n) || "";
                    l = e + l;
                    var i = r.get(l);
                    i ? i.push(a) : r.set(l, [
                        a
                    ]);
                }
            }
            return r;
        }
        function c0(e, n, t) {
            (e = e.ownerDocument || e).head.insertBefore(t, "title" === n ? e.querySelector("head > title") : null);
        }
        function c1(e) {
            return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
        }
        var c2 = null;
        function c3() {}
        function c4() {
            if (this.count--, 0 === this.count) {
                if (this.stylesheets) c6(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var c5 = null;
        function c6(e, n) {
            e.stylesheets = null, null !== e.unsuspend && (e.count++, c5 = new Map, n.forEach(c8, e), c5 = null, c4.call(e));
        }
        function c8(e, n) {
            if (!(4 & n.state.loading)) {
                var t = c5.get(e);
                if (t) var r = t.get(null);
                else {
                    t = new Map, c5.set(e, t);
                    for(var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < o.length; a++){
                        var l = o[a];
                        ("LINK" === l.nodeName || "not all" !== l.getAttribute("media")) && (t.set(l.dataset.precedence, l), r = l);
                    }
                    r && t.set(null, r);
                }
                l = (o = n.instance).getAttribute("data-precedence"), (a = t.get(l) || r) === r && t.set(null, o), t.set(l, o), this.count++, r = c4.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), a ? a.parentNode.insertBefore(o, a.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(o, e.firstChild), n.state.loading |= 4;
            }
        }
        var c9 = {
            $$typeof: w,
            Provider: null,
            Consumer: null,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0
        };
        function c7(e, n, t, r, o, a, l, i) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = e_(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = e_(0), this.hiddenUpdates = e_(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = a, this.onRecoverableError = l, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map;
        }
        function ue(e, n, t, r, o, a) {
            var l;
            o = (l = o) ? l = t7 : t7, null === r.context ? r.context = o : r.pendingContext = o, (r = oO(n)).payload = {
                element: t
            }, null !== (a = void 0 === a ? null : a) && (r.callback = a), null !== (t = oS(e, r, n)) && (sa(t, e, n), o_(t, e, n));
        }
        function un(e, n) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                var t = e.retryLane;
                e.retryLane = 0 !== t && t < n ? t : n;
            }
        }
        function ut(e, n) {
            un(e, n), (e = e.alternate) && un(e, n);
        }
        function ur(e) {
            if (13 === e.tag || 31 === e.tag) {
                var n = t6(e, 0x4000000);
                null !== n && sa(n, e, 0x4000000), ut(e, 0x4000000);
            }
        }
        function uo(e) {
            if (13 === e.tag || 31 === e.tag) {
                var n = sr(), t = t6(e, n = ez(n));
                null !== t && sa(t, e, n), ut(e, n);
            }
        }
        var ua = !0;
        function ul(e, n, t, r) {
            var o = T.T;
            T.T = null;
            var a = D.p;
            try {
                D.p = 2, us(e, n, t, r);
            } finally{
                D.p = a, T.T = o;
            }
        }
        function ui(e, n, t, r) {
            var o = T.T;
            T.T = null;
            var a = D.p;
            try {
                D.p = 8, us(e, n, t, r);
            } finally{
                D.p = a, T.T = o;
            }
        }
        function us(e, n, t, r) {
            if (ua) {
                var o = uc(r);
                if (null === o) s7(e, n, r, uu, t), uw(e, r);
                else if (function(e, n, t, r, o) {
                    switch(n){
                        case "focusin":
                            return uh = uj(uh, e, n, t, r, o), !0;
                        case "dragenter":
                            return um = uj(um, e, n, t, r, o), !0;
                        case "mouseover":
                            return ug = uj(ug, e, n, t, r, o), !0;
                        case "pointerover":
                            var a = o.pointerId;
                            return ub.set(a, uj(ub.get(a) || null, e, n, t, r, o)), !0;
                        case "gotpointercapture":
                            return a = o.pointerId, uv.set(a, uj(uv.get(a) || null, e, n, t, r, o)), !0;
                    }
                    return !1;
                }(o, e, n, t, r)) r.stopPropagation();
                else if (uw(e, r), 4 & n && -1 < ux.indexOf(e)) {
                    for(; null !== o;){
                        var a = eZ(o);
                        if (null !== a) switch(a.tag){
                            case 3:
                                if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                    var l = ew(a.pendingLanes);
                                    if (0 !== l) {
                                        var i = a;
                                        for(i.pendingLanes |= 2, i.entangledLanes |= 2; l;){
                                            var s = 1 << 31 - eg(l);
                                            i.entanglements[1] |= s, l &= ~s;
                                        }
                                        sB(a), 0 == (6 & iA) && (i1 = eo() + 500, s$(0, !1));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                null !== (i = t6(a, 2)) && sa(i, a, 2), sc(), ut(a, 2);
                        }
                        if (null === (a = uc(r)) && s7(e, n, r, uu, t), a === o) break;
                        o = a;
                    }
                    null !== o && r.stopPropagation();
                } else s7(e, n, r, null, t);
            }
        }
        function uc(e) {
            return ud(e = nv(e));
        }
        var uu = null;
        function ud(e) {
            if (uu = null, null !== (e = eq(e))) {
                var n = s(e);
                if (null === n) e = null;
                else {
                    var t = n.tag;
                    if (13 === t) {
                        if (null !== (e = c(n))) return e;
                        e = null;
                    } else if (31 === t) {
                        if (null !== (e = u(n))) return e;
                        e = null;
                    } else if (3 === t) {
                        if (n.stateNode.current.memoizedState.isDehydrated) return 3 === n.tag ? n.stateNode.containerInfo : null;
                        e = null;
                    } else n !== e && (e = null);
                }
            }
            return uu = e, null;
        }
        function uf(e) {
            switch(e){
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch(ea()){
                        case el:
                            return 2;
                        case ei:
                            return 8;
                        case es:
                        case ec:
                            return 32;
                        case eu:
                            return 0x10000000;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var up = !1, uh = null, um = null, ug = null, ub = new Map, uv = new Map, uy = [], ux = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function uw(e, n) {
            switch(e){
                case "focusin":
                case "focusout":
                    uh = null;
                    break;
                case "dragenter":
                case "dragleave":
                    um = null;
                    break;
                case "mouseover":
                case "mouseout":
                    ug = null;
                    break;
                case "pointerover":
                case "pointerout":
                    ub.delete(n.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    uv.delete(n.pointerId);
            }
        }
        function uj(e, n, t, r, o, a) {
            return null === e || e.nativeEvent !== a ? (e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [
                    o
                ]
            }, null !== n && null !== (n = eZ(n)) && ur(n)) : (e.eventSystemFlags |= r, n = e.targetContainers, null !== o && -1 === n.indexOf(o) && n.push(o)), e;
        }
        function uk(e) {
            var n = eq(e.target);
            if (null !== n) {
                var t = s(n);
                if (null !== t) {
                    if (13 === (n = t.tag)) {
                        if (null !== (n = c(t))) {
                            e.blockedOn = n, eD(e.priority, function() {
                                uo(t);
                            });
                            return;
                        }
                    } else if (31 === n) {
                        if (null !== (n = u(t))) {
                            e.blockedOn = n, eD(e.priority, function() {
                                uo(t);
                            });
                            return;
                        }
                    } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function uO(e) {
            if (null !== e.blockedOn) return !1;
            for(var n = e.targetContainers; 0 < n.length;){
                var t = uc(e.nativeEvent);
                if (null !== t) return null !== (n = eZ(t)) && ur(n), e.blockedOn = t, !1;
                var r = new (t = e.nativeEvent).constructor(t.type, t);
                nb = r, t.target.dispatchEvent(r), nb = null, n.shift();
            }
            return !0;
        }
        function uS(e, n, t) {
            uO(e) && t.delete(n);
        }
        function u_() {
            up = !1, null !== uh && uO(uh) && (uh = null), null !== um && uO(um) && (um = null), null !== ug && uO(ug) && (ug = null), ub.forEach(uS), uv.forEach(uS);
        }
        function uC(e, n) {
            e.blockedOn === n && (e.blockedOn = null, up || (up = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, u_)));
        }
        var uE = null;
        function uP(e) {
            uE !== e && (uE = e, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
                uE === e && (uE = null);
                for(var n = 0; n < e.length; n += 3){
                    var t = e[n], r = e[n + 1], o = e[n + 2];
                    if ("function" != typeof r) if (null === ud(r || t)) continue;
                    else break;
                    var a = eZ(t);
                    null !== a && (e.splice(n, 3), n -= 3, aG(a, {
                        pending: !0,
                        data: o,
                        method: t.method,
                        action: r
                    }, r, o));
                }
            }));
        }
        function uN(e) {
            function n(n) {
                return uC(n, e);
            }
            null !== uh && uC(uh, e), null !== um && uC(um, e), null !== ug && uC(ug, e), ub.forEach(n), uv.forEach(n);
            for(var t = 0; t < uy.length; t++){
                var r = uy[t];
                r.blockedOn === e && (r.blockedOn = null);
            }
            for(; 0 < uy.length && null === (t = uy[0]).blockedOn;)uk(t), null === t.blockedOn && uy.shift();
            if (null != (t = (e.ownerDocument || e).$$reactFormReplay)) for(r = 0; r < t.length; r += 3){
                var o = t[r], a = t[r + 1], l = o[eI] || null;
                if ("function" == typeof a) l || uP(t);
                else if (l) {
                    var i = null;
                    if (a && a.hasAttribute("formAction")) {
                        if (o = a, l = a[eI] || null) i = l.formAction;
                        else if (null !== ud(o)) continue;
                    } else i = l.action;
                    "function" == typeof i ? t[r + 1] = i : (t.splice(r, 3), r -= 3), uP(t);
                }
            }
        }
        function uz(e) {
            this._internalRoot = e;
        }
        function uL(e) {
            this._internalRoot = e;
        }
        uL.prototype.render = uz.prototype.render = function(e) {
            var n = this._internalRoot;
            if (null === n) throw Error(i(409));
            ue(n.current, sr(), e, n, null, null);
        }, uL.prototype.unmount = uz.prototype.unmount = function() {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                ue(e.current, 2, null, e, null, null), sc(), n[eM] = null;
            }
        }, uL.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var n = eT();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: n
                };
                for(var t = 0; t < uy.length && 0 !== n && n < uy[t].priority; t++);
                uy.splice(t, 0, e), 0 === t && uk(e);
            }
        };
        var uT = a.version;
        if ("19.2.0-canary-197d6a04-20250424" !== uT) throw Error(i(527, uT, "19.2.0-canary-197d6a04-20250424"));
        if (D.findDOMNode = function(e) {
            var n = e._reactInternals;
            if (void 0 === n) {
                if ("function" == typeof e.render) throw Error(i(188));
                throw Error(i(268, e = Object.keys(e).join(",")));
            }
            return e = null === (e = null !== (e = function(e) {
                var n = e.alternate;
                if (!n) {
                    if (null === (n = s(e))) throw Error(i(188));
                    return n !== e ? null : e;
                }
                for(var t = e, r = n;;){
                    var o = t.return;
                    if (null === o) break;
                    var a = o.alternate;
                    if (null === a) {
                        if (null !== (r = o.return)) {
                            t = r;
                            continue;
                        }
                        break;
                    }
                    if (o.child === a.child) {
                        for(a = o.child; a;){
                            if (a === t) return d(o), e;
                            if (a === r) return d(o), n;
                            a = a.sibling;
                        }
                        throw Error(i(188));
                    }
                    if (t.return !== r.return) t = o, r = a;
                    else {
                        for(var l = !1, c = o.child; c;){
                            if (c === t) {
                                l = !0, t = o, r = a;
                                break;
                            }
                            if (c === r) {
                                l = !0, r = o, t = a;
                                break;
                            }
                            c = c.sibling;
                        }
                        if (!l) {
                            for(c = a.child; c;){
                                if (c === t) {
                                    l = !0, t = a, r = o;
                                    break;
                                }
                                if (c === r) {
                                    l = !0, r = a, t = o;
                                    break;
                                }
                                c = c.sibling;
                            }
                            if (!l) throw Error(i(189));
                        }
                    }
                    if (t.alternate !== r) throw Error(i(190));
                }
                if (3 !== t.tag) throw Error(i(188));
                return t.stateNode.current === t ? e : n;
            }(n)) ? function e(n) {
                var t = n.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t) return n;
                for(n = n.child; null !== n;){
                    if (null !== (t = e(n))) return t;
                    n = n.sibling;
                }
                return null;
            }(e) : null) ? null : e.stateNode;
        }, "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var uD = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!uD.isDisabled && uD.supportsFiber) try {
                ep = uD.inject({
                    bundleType: 0,
                    version: "19.2.0-canary-197d6a04-20250424",
                    rendererPackageName: "react-dom",
                    currentDispatcherRef: T,
                    reconcilerVersion: "19.2.0-canary-197d6a04-20250424"
                }), eh = uD;
            } catch (e) {}
        }
        n.createRoot = function(e, n) {
            if (!(t = e) || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(i(299));
            var t, r, o, a, l, s, c, u, d, f = !1, p = "", h = lu, m = ld, g = lf, b = null;
            return null != n && (!0 === n.unstable_strictMode && (f = !0), void 0 !== n.identifierPrefix && (p = n.identifierPrefix), void 0 !== n.onUncaughtError && (h = n.onUncaughtError), void 0 !== n.onCaughtError && (m = n.onCaughtError), void 0 !== n.onRecoverableError && (g = n.onRecoverableError), void 0 !== n.unstable_transitionCallbacks && (b = n.unstable_transitionCallbacks)), r = e, o = 1, a = !1, l = null, s = 0, c = f, u = 0, d = null, r = new c7(r, o, a, p, h, m, g, null), o = 1, !0 === c && (o |= 24), c = rn(3, null, null, o), r.current = c, c.stateNode = r, o = r0(), o.refCount++, r.pooledCache = o, o.refCount++, c.memoizedState = {
                element: null,
                isDehydrated: a,
                cache: o
            }, oj(c), n = r, e[eM] = n.current, s8(e), new uz(n);
        };
    },
    "./dist/compiled/react-dom/cjs/react-dom.production.js": function(e, n, t) {
        "use strict";
        var r = t("./dist/compiled/react/index.js");
        function o(e) {
            var n = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                n += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var t = 2; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
            }
            return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function a() {}
        var l = {
            d: {
                f: a,
                r: function() {
                    throw Error(o(522));
                },
                D: a,
                C: a,
                L: a,
                m: a,
                X: a,
                S: a,
                M: a
            },
            p: 0,
            findDOMNode: null
        }, i = Symbol.for("react.portal"), s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function c(e, n) {
            return "font" === e ? "" : "string" == typeof n ? "use-credentials" === n ? n : "" : void 0;
        }
        n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, n.createPortal = function(e, n) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!n || 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType) throw Error(o(299));
            return function(e, n, t) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: i,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: n,
                    implementation: t
                };
            }(e, n, null, t);
        }, n.flushSync = function(e) {
            var n = s.T, t = l.p;
            try {
                if (s.T = null, l.p = 2, e) return e();
            } finally{
                s.T = n, l.p = t, l.d.f();
            }
        }, n.preconnect = function(e, n) {
            "string" == typeof e && (n = n ? "string" == typeof (n = n.crossOrigin) ? "use-credentials" === n ? n : "" : void 0 : null, l.d.C(e, n));
        }, n.prefetchDNS = function(e) {
            "string" == typeof e && l.d.D(e);
        }, n.preinit = function(e, n) {
            if ("string" == typeof e && n && "string" == typeof n.as) {
                var t = n.as, r = c(t, n.crossOrigin), o = "string" == typeof n.integrity ? n.integrity : void 0, a = "string" == typeof n.fetchPriority ? n.fetchPriority : void 0;
                "style" === t ? l.d.S(e, "string" == typeof n.precedence ? n.precedence : void 0, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a
                }) : "script" === t && l.d.X(e, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a,
                    nonce: "string" == typeof n.nonce ? n.nonce : void 0
                });
            }
        }, n.preinitModule = function(e, n) {
            if ("string" == typeof e) if ("object" == typeof n && null !== n) {
                if (null == n.as || "script" === n.as) {
                    var t = c(n.as, n.crossOrigin);
                    l.d.M(e, {
                        crossOrigin: t,
                        integrity: "string" == typeof n.integrity ? n.integrity : void 0,
                        nonce: "string" == typeof n.nonce ? n.nonce : void 0
                    });
                }
            } else null == n && l.d.M(e);
        }, n.preload = function(e, n) {
            if ("string" == typeof e && "object" == typeof n && null !== n && "string" == typeof n.as) {
                var t = n.as, r = c(t, n.crossOrigin);
                l.d.L(e, t, {
                    crossOrigin: r,
                    integrity: "string" == typeof n.integrity ? n.integrity : void 0,
                    nonce: "string" == typeof n.nonce ? n.nonce : void 0,
                    type: "string" == typeof n.type ? n.type : void 0,
                    fetchPriority: "string" == typeof n.fetchPriority ? n.fetchPriority : void 0,
                    referrerPolicy: "string" == typeof n.referrerPolicy ? n.referrerPolicy : void 0,
                    imageSrcSet: "string" == typeof n.imageSrcSet ? n.imageSrcSet : void 0,
                    imageSizes: "string" == typeof n.imageSizes ? n.imageSizes : void 0,
                    media: "string" == typeof n.media ? n.media : void 0
                });
            }
        }, n.preloadModule = function(e, n) {
            if ("string" == typeof e) if (n) {
                var t = c(n.as, n.crossOrigin);
                l.d.m(e, {
                    as: "string" == typeof n.as && "script" !== n.as ? n.as : void 0,
                    crossOrigin: t,
                    integrity: "string" == typeof n.integrity ? n.integrity : void 0
                });
            } else l.d.m(e);
        }, n.requestFormReset = function(e) {
            l.d.r(e);
        }, n.unstable_batchedUpdates = function(e, n) {
            return e(n);
        }, n.useFormState = function(e, n, t) {
            return s.H.useFormState(e, n, t);
        }, n.useFormStatus = function() {
            return s.H.useHostTransitionStatus();
        }, n.version = "19.2.0-canary-197d6a04-20250424";
    },
    "./dist/compiled/react-dom/client.js": function(e, n, t) {
        "use strict";
        !function e() {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
                console.error(e);
            }
        }(), e.exports = t("./dist/compiled/react-dom/cjs/react-dom-client.production.js");
    },
    "./dist/compiled/react-dom/index.js": function(e, n, t) {
        "use strict";
        !function e() {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
                console.error(e);
            }
        }(), e.exports = t("./dist/compiled/react-dom/cjs/react-dom.production.js");
    },
    "./dist/compiled/react/cjs/react-jsx-runtime.production.js": function(e, n) {
        "use strict";
        var t = Symbol.for("react.transitional.element");
        function r(e, n, r) {
            var o = null;
            if (void 0 !== r && (o = "" + r), void 0 !== n.key && (o = "" + n.key), "key" in n) for(var a in r = {}, n)"key" !== a && (r[a] = n[a]);
            else r = n;
            return {
                $$typeof: t,
                type: e,
                key: o,
                ref: void 0 !== (n = r.ref) ? n : null,
                props: r
            };
        }
        n.Fragment = Symbol.for("react.fragment"), n.jsx = r, n.jsxs = r;
    },
    "./dist/compiled/react/cjs/react.production.js": function(e, n) {
        "use strict";
        var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator, h = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, m = Object.assign, g = {};
        function b(e, n, t) {
            this.props = e, this.context = n, this.refs = g, this.updater = t || h;
        }
        function v() {}
        function y(e, n, t) {
            this.props = e, this.context = n, this.refs = g, this.updater = t || h;
        }
        b.prototype.isReactComponent = {}, b.prototype.setState = function(e, n) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, n, "setState");
        }, b.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }, v.prototype = b.prototype;
        var x = y.prototype = new v;
        x.constructor = y, m(x, b.prototype), x.isPureReactComponent = !0;
        var w = Array.isArray, j = {
            H: null,
            A: null,
            T: null,
            S: null
        }, k = Object.prototype.hasOwnProperty;
        function O(e, n, r, o, a, l) {
            return {
                $$typeof: t,
                type: e,
                key: n,
                ref: void 0 !== (r = l.ref) ? r : null,
                props: l
            };
        }
        function S(e) {
            return "object" == typeof e && null !== e && e.$$typeof === t;
        }
        var _ = /\/+/g;
        function C(e, n) {
            var t, r;
            return "object" == typeof e && null !== e && null != e.key ? (t = "" + e.key, r = {
                "=": "=0",
                ":": "=2"
            }, "$" + t.replace(/[=:]/g, function(e) {
                return r[e];
            })) : n.toString(36);
        }
        function E() {}
        function P(e, n, o) {
            if (null == e) return e;
            var a = [], l = 0;
            return !function e(n, o, a, l, i) {
                var s, c, u, d = typeof n;
                ("undefined" === d || "boolean" === d) && (n = null);
                var h = !1;
                if (null === n) h = !0;
                else switch(d){
                    case "bigint":
                    case "string":
                    case "number":
                        h = !0;
                        break;
                    case "object":
                        switch(n.$$typeof){
                            case t:
                            case r:
                                h = !0;
                                break;
                            case f:
                                return e((h = n._init)(n._payload), o, a, l, i);
                        }
                }
                if (h) return i = i(n), h = "" === l ? "." + C(n, 0) : l, w(i) ? (a = "", null != h && (a = h.replace(_, "$&/") + "/"), e(i, o, a, "", function(e) {
                    return e;
                })) : null != i && (S(i) && (s = i, c = a + (null == i.key || n && n.key === i.key ? "" : ("" + i.key).replace(_, "$&/") + "/") + h, i = O(s.type, c, void 0, void 0, void 0, s.props)), o.push(i)), 1;
                h = 0;
                var m = "" === l ? "." : l + ":";
                if (w(n)) for(var g = 0; g < n.length; g++)d = m + C(l = n[g], g), h += e(l, o, a, d, i);
                else if ("function" == typeof (g = null === (u = n) || "object" != typeof u ? null : "function" == typeof (u = p && u[p] || u["@@iterator"]) ? u : null)) for(n = g.call(n), g = 0; !(l = n.next()).done;)d = m + C(l = l.value, g++), h += e(l, o, a, d, i);
                else if ("object" === d) {
                    if ("function" == typeof n.then) return e(function(e) {
                        switch(e.status){
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                throw e.reason;
                            default:
                                switch("string" == typeof e.status ? e.then(E, E) : (e.status = "pending", e.then(function(n) {
                                    "pending" === e.status && (e.status = "fulfilled", e.value = n);
                                }, function(n) {
                                    "pending" === e.status && (e.status = "rejected", e.reason = n);
                                })), e.status){
                                    case "fulfilled":
                                        return e.value;
                                    case "rejected":
                                        throw e.reason;
                                }
                        }
                        throw e;
                    }(n), o, a, l, i);
                    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (o = String(n)) ? "object with keys {" + Object.keys(n).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
                }
                return h;
            }(e, a, "", "", function(e) {
                return n.call(o, e, l++);
            }), a;
        }
        function N(e) {
            if (-1 === e._status) {
                var n = e._result;
                (n = n()).then(function(n) {
                    (0 === e._status || -1 === e._status) && (e._status = 1, e._result = n);
                }, function(n) {
                    (0 === e._status || -1 === e._status) && (e._status = 2, e._result = n);
                }), -1 === e._status && (e._status = 0, e._result = n);
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
        }
        var z = "function" == typeof reportError ? reportError : function(e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                var n = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(n)) return;
            } else if ("object" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$78_react_30f3e4af1d95965e7c385d93627382e2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && "function" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$78_react_30f3e4af1d95965e7c385d93627382e2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit) return void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$78_react_30f3e4af1d95965e7c385d93627382e2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", e);
            console.error(e);
        };
        function L() {}
        n.Children = {
            map: P,
            forEach: function(e, n, t) {
                P(e, function() {
                    n.apply(this, arguments);
                }, t);
            },
            count: function(e) {
                var n = 0;
                return P(e, function() {
                    n++;
                }), n;
            },
            toArray: function(e) {
                return P(e, function(e) {
                    return e;
                }) || [];
            },
            only: function(e) {
                if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
                return e;
            }
        }, n.Component = b, n.Fragment = o, n.Profiler = l, n.PureComponent = y, n.StrictMode = a, n.Suspense = u, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, n.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(e) {
                return j.H.useMemoCache(e);
            }
        }, n.cache = function(e) {
            return function() {
                return e.apply(null, arguments);
            };
        }, n.cloneElement = function(e, n, t) {
            if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
            var r = m({}, e.props), o = e.key, a = void 0;
            if (null != n) for(l in void 0 !== n.ref && (a = void 0), void 0 !== n.key && (o = "" + n.key), n)k.call(n, l) && "key" !== l && "__self" !== l && "__source" !== l && ("ref" !== l || void 0 !== n.ref) && (r[l] = n[l]);
            var l = arguments.length - 2;
            if (1 === l) r.children = t;
            else if (1 < l) {
                for(var i = Array(l), s = 0; s < l; s++)i[s] = arguments[s + 2];
                r.children = i;
            }
            return O(e.type, o, void 0, void 0, a, r);
        }, n.createContext = function(e) {
            return (e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = e, e.Consumer = {
                $$typeof: i,
                _context: e
            }, e;
        }, n.createElement = function(e, n, t) {
            var r, o = {}, a = null;
            if (null != n) for(r in void 0 !== n.key && (a = "" + n.key), n)k.call(n, r) && "key" !== r && "__self" !== r && "__source" !== r && (o[r] = n[r]);
            var l = arguments.length - 2;
            if (1 === l) o.children = t;
            else if (1 < l) {
                for(var i = Array(l), s = 0; s < l; s++)i[s] = arguments[s + 2];
                o.children = i;
            }
            if (e && e.defaultProps) for(r in l = e.defaultProps)void 0 === o[r] && (o[r] = l[r]);
            return O(e, a, void 0, void 0, null, o);
        }, n.createRef = function() {
            return {
                current: null
            };
        }, n.forwardRef = function(e) {
            return {
                $$typeof: c,
                render: e
            };
        }, n.isValidElement = S, n.lazy = function(e) {
            return {
                $$typeof: f,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: N
            };
        }, n.memo = function(e, n) {
            return {
                $$typeof: d,
                type: e,
                compare: void 0 === n ? null : n
            };
        }, n.startTransition = function(e) {
            var n = j.T, t = {};
            j.T = t;
            try {
                var r = e(), o = j.S;
                null !== o && o(t, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(L, z);
            } catch (e) {
                z(e);
            } finally{
                null !== n && null !== t.types && (n.types = t.types), j.T = n;
            }
        }, n.unstable_useCacheRefresh = function() {
            return j.H.useCacheRefresh();
        }, n.use = function(e) {
            return j.H.use(e);
        }, n.useActionState = function(e, n, t) {
            return j.H.useActionState(e, n, t);
        }, n.useCallback = function(e, n) {
            return j.H.useCallback(e, n);
        }, n.useContext = function(e) {
            return j.H.useContext(e);
        }, n.useDebugValue = function() {}, n.useDeferredValue = function(e, n) {
            return j.H.useDeferredValue(e, n);
        }, n.useEffect = function(e, n) {
            return j.H.useEffect(e, n);
        }, n.useId = function() {
            return j.H.useId();
        }, n.useImperativeHandle = function(e, n, t) {
            return j.H.useImperativeHandle(e, n, t);
        }, n.useInsertionEffect = function(e, n) {
            return j.H.useInsertionEffect(e, n);
        }, n.useLayoutEffect = function(e, n) {
            return j.H.useLayoutEffect(e, n);
        }, n.useMemo = function(e, n) {
            return j.H.useMemo(e, n);
        }, n.useOptimistic = function(e, n) {
            return j.H.useOptimistic(e, n);
        }, n.useReducer = function(e, n, t) {
            return j.H.useReducer(e, n, t);
        }, n.useRef = function(e) {
            return j.H.useRef(e);
        }, n.useState = function(e) {
            return j.H.useState(e);
        }, n.useSyncExternalStore = function(e, n, t) {
            return j.H.useSyncExternalStore(e, n, t);
        }, n.useTransition = function() {
            return j.H.useTransition();
        }, n.version = "19.2.0-canary-197d6a04-20250424";
    },
    "./dist/compiled/react/index.js": function(e, n, t) {
        "use strict";
        e.exports = t("./dist/compiled/react/cjs/react.production.js");
    },
    "./dist/compiled/react/jsx-runtime.js": function(e, n, t) {
        "use strict";
        e.exports = t("./dist/compiled/react/cjs/react-jsx-runtime.production.js");
    },
    "./dist/compiled/scheduler/cjs/scheduler.production.js": function(e, n) {
        "use strict";
        function t(e, n) {
            var t = e.length;
            for(e.push(n); 0 < t;){
                var r = t - 1 >>> 1, o = e[r];
                if (0 < a(o, n)) e[r] = n, e[t] = o, t = r;
                else break;
            }
        }
        function r(e) {
            return 0 === e.length ? null : e[0];
        }
        function o(e) {
            if (0 === e.length) return null;
            var n = e[0], t = e.pop();
            if (t !== n) {
                e[0] = t;
                for(var r = 0, o = e.length, l = o >>> 1; r < l;){
                    var i = 2 * (r + 1) - 1, s = e[i], c = i + 1, u = e[c];
                    if (0 > a(s, t)) c < o && 0 > a(u, s) ? (e[r] = u, e[c] = t, r = c) : (e[r] = s, e[i] = t, r = i);
                    else if (c < o && 0 > a(u, t)) e[r] = u, e[c] = t, r = c;
                    else break;
                }
            }
            return n;
        }
        function a(e, n) {
            var t = e.sortIndex - n.sortIndex;
            return 0 !== t ? t : e.id - n.id;
        }
        if (n.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
            var l, i = performance;
            n.unstable_now = function() {
                return i.now();
            };
        } else {
            var s = Date, c = s.now();
            n.unstable_now = function() {
                return s.now() - c;
            };
        }
        var u = [], d = [], f = 1, p = null, h = 3, m = !1, g = !1, b = !1, v = !1, y = "function" == typeof setTimeout ? setTimeout : null, x = "function" == typeof clearTimeout ? clearTimeout : null, w = "undefined" != typeof setImmediate ? setImmediate : null;
        function j(e) {
            for(var n = r(d); null !== n;){
                if (null === n.callback) o(d);
                else if (n.startTime <= e) o(d), n.sortIndex = n.expirationTime, t(u, n);
                else break;
                n = r(d);
            }
        }
        function k(e) {
            if (b = !1, j(e), !g) if (null !== r(u)) g = !0, O || (O = !0, l());
            else {
                var n = r(d);
                null !== n && L(k, n.startTime - e);
            }
        }
        var O = !1, S = -1, _ = 5, C = -1;
        function E() {
            return !!v || !(n.unstable_now() - C < _);
        }
        function P() {
            if (v = !1, O) {
                var e = n.unstable_now();
                C = e;
                var t = !0;
                try {
                    e: {
                        g = !1, b && (b = !1, x(S), S = -1), m = !0;
                        var a = h;
                        try {
                            n: {
                                for(j(e), p = r(u); null !== p && !(p.expirationTime > e && E());){
                                    var i = p.callback;
                                    if ("function" == typeof i) {
                                        p.callback = null, h = p.priorityLevel;
                                        var s = i(p.expirationTime <= e);
                                        if (e = n.unstable_now(), "function" == typeof s) {
                                            p.callback = s, j(e), t = !0;
                                            break n;
                                        }
                                        p === r(u) && o(u), j(e);
                                    } else o(u);
                                    p = r(u);
                                }
                                if (null !== p) t = !0;
                                else {
                                    var c = r(d);
                                    null !== c && L(k, c.startTime - e), t = !1;
                                }
                            }
                            break e;
                        } finally{
                            p = null, h = a, m = !1;
                        }
                    }
                } finally{
                    t ? l() : O = !1;
                }
            }
        }
        if ("function" == typeof w) l = function() {
            w(P);
        };
        else if ("undefined" != typeof MessageChannel) {
            var N = new MessageChannel, z = N.port2;
            N.port1.onmessage = P, l = function() {
                z.postMessage(null);
            };
        } else l = function() {
            y(P, 0);
        };
        function L(e, t) {
            S = y(function() {
                e(n.unstable_now());
            }, t);
        }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e) {
            e.callback = null;
        }, n.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e ? Math.floor(1e3 / e) : 5;
        }, n.unstable_getCurrentPriorityLevel = function() {
            return h;
        }, n.unstable_next = function(e) {
            switch(h){
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = h;
            }
            var t = h;
            h = n;
            try {
                return e();
            } finally{
                h = t;
            }
        }, n.unstable_requestPaint = function() {
            v = !0;
        }, n.unstable_runWithPriority = function(e, n) {
            switch(e){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3;
            }
            var t = h;
            h = e;
            try {
                return n();
            } finally{
                h = t;
            }
        }, n.unstable_scheduleCallback = function(e, o, a) {
            var i = n.unstable_now();
            switch(a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? i + a : i, e){
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 0x3fffffff;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3;
            }
            return s = a + s, e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: s,
                sortIndex: -1
            }, a > i ? (e.sortIndex = a, t(d, e), null === r(u) && e === r(d) && (b ? (x(S), S = -1) : b = !0, L(k, a - i))) : (e.sortIndex = s, t(u, e), g || m || (g = !0, O || (O = !0, l()))), e;
        }, n.unstable_shouldYield = E, n.unstable_wrapCallback = function(e) {
            var n = h;
            return function() {
                var t = h;
                h = n;
                try {
                    return e.apply(this, arguments);
                } finally{
                    h = t;
                }
            };
        };
    },
    "./dist/compiled/scheduler/index.js": function(e, n, t) {
        "use strict";
        e.exports = t("./dist/compiled/scheduler/cjs/scheduler.production.js");
    },
    "./dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js": function(e) {
        (()=>{
            "use strict";
            "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = "//");
            var n, t, r, o, a, l, i, s, c = {};
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), n = "<unknown>", t = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|webpack-internal|rsc|turbopack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, r = /\((\S*)(?::(\d+))(?::(\d+))\)/, o = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|webpack-internal|rsc|turbopack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|webpack-internal|rsc|turbopack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, i = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i, c.parse = function(e) {
                return e.split("\n").reduce(function(e, c) {
                    var u, d, f, p, h, m, g = function(e) {
                        var o = t.exec(e);
                        if (!o) return null;
                        var a = o[2] && 0 === o[2].indexOf("native"), l = o[2] && 0 === o[2].indexOf("eval"), i = r.exec(o[2]);
                        return l && null != i && (o[2] = i[1], o[3] = i[2], o[4] = i[3]), {
                            file: a ? null : o[2],
                            methodName: o[1] || n,
                            arguments: a ? [
                                o[2]
                            ] : [],
                            lineNumber: o[3] ? +o[3] : null,
                            column: o[4] ? +o[4] : null
                        };
                    }(c) || (u = c, (d = o.exec(u)) ? {
                        file: d[2],
                        methodName: d[1] || n,
                        arguments: [],
                        lineNumber: +d[3],
                        column: d[4] ? +d[4] : null
                    } : null) || function(e) {
                        var t = a.exec(e);
                        if (!t) return null;
                        var r = t[3] && t[3].indexOf(" > eval") > -1, o = l.exec(t[3]);
                        return r && null != o && (t[3] = o[1], t[4] = o[2], t[5] = null), {
                            file: t[3],
                            methodName: t[1] || n,
                            arguments: t[2] ? t[2].split(",") : [],
                            lineNumber: t[4] ? +t[4] : null,
                            column: t[5] ? +t[5] : null
                        };
                    }(c) || (f = c, (p = s.exec(f)) ? {
                        file: p[2],
                        methodName: p[1] || n,
                        arguments: [],
                        lineNumber: +p[3],
                        column: p[4] ? +p[4] : null
                    } : null) || (h = c, (m = i.exec(h)) ? {
                        file: m[3],
                        methodName: m[1] || n,
                        arguments: [],
                        lineNumber: +m[4],
                        column: m[5] ? +m[5] : null
                    } : null);
                    return g && e.push(g), e;
                }, []);
            }, e.exports = c;
        })();
    },
    "./dist/compiled/strip-ansi/index.js": function(e) {
        (()=>{
            "use strict";
            var n = {
                511: (e)=>{
                    e.exports = ({ onlyFirst: e = !1 } = {})=>RegExp("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", e ? void 0 : "g");
                },
                532: (e, n, t)=>{
                    let r = t(511);
                    e.exports = (e)=>"string" == typeof e ? e.replace(r(), "") : e;
                }
            }, t = {};
            function r(e) {
                var o = t[e];
                if (void 0 !== o) return o.exports;
                var a = t[e] = {
                    exports: {}
                }, l = !0;
                try {
                    n[e](a, a.exports, r), l = !1;
                } finally{
                    l && delete t[e];
                }
                return a.exports;
            }
            r.ab = "//", e.exports = r(532);
        })();
    }
}, __webpack_module_cache__ = {};
function __webpack_require__(e) {
    var n = __webpack_module_cache__[e];
    if (void 0 !== n) return n.exports;
    var t = __webpack_module_cache__[e] = {
        exports: {}
    };
    return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
}
__webpack_require__.n = (e)=>{
    var n = e && e.__esModule ? ()=>e.default : ()=>e;
    return __webpack_require__.d(n, {
        a: n
    }), n;
}, __webpack_require__.d = (e, n)=>{
    for(var t in n)__webpack_require__.o(n, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
        enumerable: !0,
        get: n[t]
    });
}, __webpack_require__.o = (e, n)=>Object.prototype.hasOwnProperty.call(e, n), __webpack_require__.r = (e)=>{
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }), Object.defineProperty(e, "__esModule", {
        value: !0
    });
};
var __webpack_exports__ = {};
for(var __webpack_i__ in (()=>{
    "use strict";
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
        renderPagesDevOverlay: ()=>rK,
        dispatcher: ()=>rq,
        renderAppDevOverlay: ()=>rG
    });
    var e, n, t, r = __webpack_require__("./dist/compiled/react/jsx-runtime.js"), o = __webpack_require__("./dist/compiled/react/index.js");
    function a(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    var l = __webpack_require__("./dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js"), i = /\/_next(\/static\/.+)/, s = Symbol.for("next.console.error.digest");
    function c(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function u(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    var d = "static-indicator", f = "build-ok", p = "build-error", h = "before-fast-refresh", m = "fast-refresh", g = "version-info", b = "unhandled-error", v = "unhandled-rejection", y = "debug-info", x = "dev-indicator", w = "error-overlay-open", j = "error-overlay-close", k = "error-overlay-toggle", O = "building-indicator-show", S = "building-indicator-hide", _ = "rendering-indicator-show", C = "rendering-indicator-hide", E = "__nextjs-dev-tools-theme", P = "__nextjs-dev-tools-position", N = "__nextjs-dev-tools-scale", z = /\s+(at react-stack-bottom-frame.*)|(react-stack-bottom-frame@.*)/;
    function L(e) {
        return null == e ? void 0 : e.split(z)[0];
    }
    var T = (null == (e = ("TURBOPACK compile-time value", true)) ? void 0 : e.toString()) === "false", D = {
        nextId: 1,
        buildError: null,
        errors: [],
        notFound: !1,
        renderingIndicator: !1,
        staticIndicator: !1,
        showIndicator: !1,
        disableDevIndicator: !1,
        buildingIndicator: !1,
        refreshState: {
            type: "idle"
        },
        versionInfo: {
            installed: "0.0.0",
            staleness: "unknown"
        },
        debugInfo: {
            devtoolsFrontendUrl: void 0
        }
    }, A = __webpack_require__("./dist/compiled/react-dom/client.js");
    function R(e) {
        for(var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)t[r - 1] = arguments[r];
        var o = e.length - 1;
        return (e.slice(0, o).reduce(function(e, n, r) {
            return e + n + t[r];
        }, "") + e[o]).replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*([:;,{}])\s*/g, "$1").replace(/;+}/g, "}").trim();
    }
    function I() {
        var e, n, t = (e = [
            "\n      /* latin-ext */\n      @font-face {\n        font-family: '__nextjs-Geist';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-latin-ext.woff2) format('woff2');\n        unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7,\n          U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F,\n          U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n          U+A720-A7FF;\n      }\n      /* latin-ext */\n      @font-face {\n        font-family: '__nextjs-Geist Mono';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-mono-latin-ext.woff2) format('woff2');\n        unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7,\n          U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F,\n          U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n          U+A720-A7FF;\n      }\n      /* latin */\n      @font-face {\n        font-family: '__nextjs-Geist';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-latin.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,\n          U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,\n          U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      /* latin */\n      @font-face {\n        font-family: '__nextjs-Geist Mono';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-mono-latin.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,\n          U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,\n          U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n    "
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return I = function() {
            return t;
        }, t;
    }
    var M = function() {
        return (0, o.useInsertionEffect)(function() {
            var e = document.createElement("style");
            return e.textContent = R(I()), document.head.appendChild(e), function() {
                document.head.removeChild(e);
            };
        }, []), null;
    }, F = __webpack_require__("./dist/compiled/react-dom/index.js");
    function H(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function U(e) {
        var n, t, r = e.children, a = o.useRef(null), l = o.useRef(null), i = (n = o.useState(), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return H(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return H(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }())[1];
        return o.useEffect({
            "U.useEffect": function() {
                if (a.current = document.querySelector("nextjs-portal"), "undefined" != typeof localStorage) {
                    var e = localStorage.getItem(E);
                    "dark" === e ? (a.current.classList.add("dark"), a.current.classList.remove("light")) : "light" === e && (a.current.classList.remove("dark"), a.current.classList.add("light"));
                }
                null === a.current.shadowRoot && (l.current = a.current.attachShadow({
                    mode: "open"
                })), i({});
            }
        }["U.useEffect"], []), l.current ? (0, F.createPortal)(r, l.current) : null;
    }
    function V() {
        var e, n, t = (e = [
            "\n        :host {\n          /* \n           * Although the style applied to the shadow host is isolated,\n           * the element that attached the shadow host (i.e. \"nextjs-portal\")\n           * is still affected by the parent's style (e.g. \"body\"). This may\n           * occur style conflicts like \"display: flex\", with other children\n           * elements therefore give the shadow host an absolute position.\n           */\n          position: absolute;\n\n          --color-font: #757575;\n          --color-backdrop: rgba(250, 250, 250, 0.8);\n          --color-border-shadow: rgba(0, 0, 0, 0.145);\n\n          --color-title-color: #1f1f1f;\n          --color-stack-notes: #777;\n\n          --color-accents-1: #808080;\n          --color-accents-2: #222222;\n          --color-accents-3: #404040;\n\n          --font-stack-monospace: '__nextjs-Geist Mono', 'Geist Mono',\n            'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,\n            monospace;\n          --font-stack-sans: '__nextjs-Geist', 'Geist', -apple-system,\n            'Source Sans Pro', sans-serif;\n\n          font-family: var(--font-stack-sans);\n          font-variant-ligatures: none;\n\n          /* TODO: Remove replaced ones. */\n          --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n          --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),\n            0 1px 2px -1px rgb(0 0 0 / 0.1);\n          --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1),\n            0 2px 4px -2px rgb(0 0 0 / 0.1);\n          --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),\n            0 4px 6px -4px rgb(0 0 0 / 0.1);\n          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1),\n            0 8px 10px -6px rgb(0 0 0 / 0.1);\n          --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n          --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n          --shadow-none: 0 0 #0000;\n\n          --shadow-small: 0px 2px 2px rgba(0, 0, 0, 0.04);\n          --shadow-menu: 0px 1px 1px rgba(0, 0, 0, 0.02),\n            0px 4px 8px -4px rgba(0, 0, 0, 0.04),\n            0px 16px 24px -8px rgba(0, 0, 0, 0.06);\n\n          --focus-color: var(--color-blue-800);\n          --focus-ring: 2px solid var(--focus-color);\n\n          --timing-swift: cubic-bezier(0.23, 0.88, 0.26, 0.92);\n          --timing-overlay: cubic-bezier(0.175, 0.885, 0.32, 1.1);\n          /* prettier-ignore */\n          --timing-bounce: linear(0 0%, 0.005871 1%, 0.022058 2%, 0.046612 3%, 0.077823 4%, 0.114199 5%, 0.154441 6%, 0.197431 7.000000000000001%, 0.242208 8%, 0.287959 9%, 0.333995 10%, 0.379743 11%, 0.424732 12%, 0.46858 13%, 0.510982 14.000000000000002%, 0.551702 15%, 0.590564 16%, 0.627445 17%, 0.662261 18%, 0.694971 19%, 0.725561 20%, 0.754047 21%, 0.780462 22%, 0.804861 23%, 0.82731 24%, 0.847888 25%, 0.866679 26%, 0.883775 27%, 0.899272 28.000000000000004%, 0.913267 28.999999999999996%, 0.925856 30%, 0.937137 31%, 0.947205 32%, 0.956153 33%, 0.96407 34%, 0.971043 35%, 0.977153 36%, 0.982479 37%, 0.987094 38%, 0.991066 39%, 0.994462 40%, 0.997339 41%, 0.999755 42%, 1.001761 43%, 1.003404 44%, 1.004727 45%, 1.00577 46%, 1.006569 47%, 1.007157 48%, 1.007563 49%, 1.007813 50%, 1.007931 51%, 1.007939 52%, 1.007855 53%, 1.007697 54%, 1.007477 55.00000000000001%, 1.00721 56.00000000000001%, 1.006907 56.99999999999999%, 1.006576 57.99999999999999%, 1.006228 59%, 1.005868 60%, 1.005503 61%, 1.005137 62%, 1.004776 63%, 1.004422 64%, 1.004078 65%, 1.003746 66%, 1.003429 67%, 1.003127 68%, 1.00284 69%, 1.002571 70%, 1.002318 71%, 1.002082 72%, 1.001863 73%, 1.00166 74%, 1.001473 75%, 1.001301 76%, 1.001143 77%, 1.001 78%, 1.000869 79%, 1.000752 80%, 1.000645 81%, 1.00055 82%, 1.000464 83%, 1.000388 84%, 1.000321 85%, 1.000261 86%, 1.000209 87%, 1.000163 88%, 1.000123 89%, 1.000088 90%);\n\n          --rounded-none: 0px;\n          --rounded-sm: 2px;\n          --rounded-md: 4px;\n          --rounded-md-2: 6px;\n          --rounded-lg: 8px;\n          --rounded-xl: 12px;\n          --rounded-2xl: 16px;\n          --rounded-3xl: 24px;\n          --rounded-4xl: 32px;\n          --rounded-full: 9999px;\n\n          /* \n            This value gets set from the Dev Tools preferences,\n            and we use the following --size-* variables to \n            scale the relevant elements.\n\n            The reason why we don't rely on rem values is because\n            if an app sets their root font size to something tiny, \n            it feels unexpected to have the app root size leak \n            into a Next.js surface.\n\n            https://github.com/vercel/next.js/discussions/76812\n          */\n          --nextjs-dev-tools-scale: ",
            ";\n          --size-1: calc(1px / var(--nextjs-dev-tools-scale));\n          --size-2: calc(2px / var(--nextjs-dev-tools-scale));\n          --size-3: calc(3px / var(--nextjs-dev-tools-scale));\n          --size-4: calc(4px / var(--nextjs-dev-tools-scale));\n          --size-5: calc(5px / var(--nextjs-dev-tools-scale));\n          --size-6: calc(6px / var(--nextjs-dev-tools-scale));\n          --size-7: calc(7px / var(--nextjs-dev-tools-scale));\n          --size-8: calc(8px / var(--nextjs-dev-tools-scale));\n          --size-9: calc(9px / var(--nextjs-dev-tools-scale));\n          --size-10: calc(10px / var(--nextjs-dev-tools-scale));\n          --size-11: calc(11px / var(--nextjs-dev-tools-scale));\n          --size-12: calc(12px / var(--nextjs-dev-tools-scale));\n          --size-13: calc(13px / var(--nextjs-dev-tools-scale));\n          --size-14: calc(14px / var(--nextjs-dev-tools-scale));\n          --size-15: calc(15px / var(--nextjs-dev-tools-scale));\n          --size-16: calc(16px / var(--nextjs-dev-tools-scale));\n          --size-17: calc(17px / var(--nextjs-dev-tools-scale));\n          --size-18: calc(18px / var(--nextjs-dev-tools-scale));\n          --size-20: calc(20px / var(--nextjs-dev-tools-scale));\n          --size-22: calc(22px / var(--nextjs-dev-tools-scale));\n          --size-24: calc(24px / var(--nextjs-dev-tools-scale));\n          --size-26: calc(26px / var(--nextjs-dev-tools-scale));\n          --size-28: calc(28px / var(--nextjs-dev-tools-scale));\n          --size-30: calc(30px / var(--nextjs-dev-tools-scale));\n          --size-32: calc(32px / var(--nextjs-dev-tools-scale));\n          --size-34: calc(34px / var(--nextjs-dev-tools-scale));\n          --size-36: calc(36px / var(--nextjs-dev-tools-scale));\n          --size-38: calc(38px / var(--nextjs-dev-tools-scale));\n          --size-40: calc(40px / var(--nextjs-dev-tools-scale));\n          --size-42: calc(42px / var(--nextjs-dev-tools-scale));\n          --size-44: calc(44px / var(--nextjs-dev-tools-scale));\n          --size-46: calc(46px / var(--nextjs-dev-tools-scale));\n          --size-48: calc(48px / var(--nextjs-dev-tools-scale));\n\n          @media print {\n            display: none;\n          }\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-bottom: 8px;\n          font-weight: 500;\n          line-height: 1.5;\n        }\n\n        a {\n          color: var(--color-blue-900);\n          &:hover {\n            color: var(--color-blue-900);\n          }\n          &:focus {\n            outline: var(--focus-ring);\n          }\n        }\n      "
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return V = function() {
            return t;
        }, t;
    }
    function B(e) {
        var n = e.scale;
        return (0, r.jsx)("style", {
            children: R(V(), String(void 0 === n ? 1 : n))
        });
    }
    function $(e) {
        if ("" === e.trim()) throw Error("can't decode empty hex");
        var n = parseInt(e, 16);
        if (isNaN(n)) throw Error("invalid hex: `".concat(e, "`"));
        return String.fromCodePoint(n);
    }
    var q = /^__TURBOPACK__([a-zA-Z0-9_$]+)__$/, Z = /https?:\/\/[^\s/$.?#].[^\s)'"]*/i, W = new RegExp("(".concat(/__TURBOPACK__[a-zA-Z0-9_$]+__/g.source, "|\\s+)")), Q = function(e) {
        var n = e.text, t = e.matcher, a = n.split(W);
        return (0, r.jsx)(r.Fragment, {
            children: a.map(function(e, n) {
                if (Z.test(e)) {
                    var a = Z.exec(e)[0];
                    return "function" != typeof t || t(a) ? (0, r.jsx)(o.Fragment, {
                        children: (0, r.jsx)("a", {
                            href: a,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: e
                        })
                    }, "link-".concat(n)) : e;
                }
                try {
                    var l = function(e) {
                        var n = e.match(q);
                        if (!n) return e;
                        for(var t = n[1], r = "", o = 0, a = "", l = 0; l < t.length; l++){
                            var i = t[l];
                            if (0 === o) "_" === i ? o = 1 : "$" === i ? o = 2 : r += i;
                            else if (1 === o) "_" === i ? (r += " ", o = 0) : "$" === i ? (r += "_", o = 2) : (r += i, o = 0);
                            else if (2 === o) if (2 === a.length && (r += $(a), a = ""), "_" === i) {
                                if ("" !== a) throw Error("invalid hex: `".concat(a, "`"));
                                o = 3;
                            } else if ("$" === i) {
                                if ("" !== a) throw Error("invalid hex: `".concat(a, "`"));
                                o = 0;
                            } else a += i;
                            else if (3 === o) if ("_" === i) throw Error("invalid hex: `".concat(a + i, "`"));
                            else "$" === i ? (r += $(a), a = "", o = 0) : a += i;
                        }
                        return r;
                    }(e);
                    if (l !== e) return (0, r.jsxs)("i", {
                        children: [
                            "{",
                            l,
                            "}"
                        ]
                    }, "ident-".concat(n));
                } catch (t) {
                    return (0, r.jsxs)("i", {
                        children: [
                            "{",
                            e,
                            " (decoding failed: ",
                            "" + t,
                            ")",
                            "}"
                        ]
                    }, "ident-".concat(n));
                }
                return (0, r.jsx)(o.Fragment, {
                    children: e
                }, "text-".concat(n));
            })
        });
    }, X = [
        /^webpack-internal:\/\/\/(\([\w-]+\)\/)?/,
        /^(webpack:\/\/\/|webpack:\/\/(_N_E\/)?)(\([\w-]+\)\/)?/
    ];
    function G(e) {
        var n = !0, t = !1, r = void 0;
        try {
            for(var o, a = X[Symbol.iterator](); !(n = (o = a.next()).done); n = !0){
                var l = o.value;
                if (l.test(e)) return !0;
                e = e.replace(l, "");
            }
        } catch (e) {
            t = !0, r = e;
        } finally{
            try {
                n || null == a.return || a.return();
            } finally{
                if (t) throw r;
            }
        }
        return !1;
    }
    function K(e) {
        var n = !0, t = !1, r = void 0;
        try {
            for(var o, a = X[Symbol.iterator](); !(n = (o = a.next()).done); n = !0){
                var l = o.value;
                e = e.replace(l, "");
            }
        } catch (e) {
            t = !0, r = e;
        } finally{
            try {
                n || null == a.return || a.return();
            } finally{
                if (t) throw r;
            }
        }
        return e;
    }
    function Y(e, n, t, r, o, a, l) {
        try {
            var i = e[a](l), s = i.value;
        } catch (e) {
            t(e);
            return;
        }
        i.done ? n(s) : Promise.resolve(s).then(r, o);
    }
    function J(e) {
        return function() {
            var n = this, t = arguments;
            return new Promise(function(r, o) {
                var a = e.apply(n, t);
                function l(e) {
                    Y(a, r, o, l, i, "next", e);
                }
                function i(e) {
                    Y(a, r, o, l, i, "throw", e);
                }
                l(void 0);
            });
        };
    }
    function ee(e, n) {
        var t, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
            },
            trys: [],
            ops: []
        }, l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return l.next = i(0), l.throw = i(1), l.return = i(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this;
        }), l;
        //TURBOPACK unreachable
        ;
        function i(i) {
            return function(s) {
                var c = [
                    i,
                    s
                ];
                if (t) throw TypeError("Generator is already executing.");
                for(; l && (l = 0, c[0] && (a = 0)), a;)try {
                    if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                    switch(r = 0, o && (c = [
                        2 & c[0],
                        o.value
                    ]), c[0]){
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return a.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = c[1], c = [
                                0
                            ];
                            continue;
                        case 7:
                            c = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                a.label = c[1];
                                break;
                            }
                            if (6 === c[0] && a.label < o[1]) {
                                a.label = o[1], o = c;
                                break;
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(c);
                                break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    c = n.call(e, a);
                } catch (e) {
                    c = [
                        6,
                        e
                    ], r = 0;
                } finally{
                    t = o = 0;
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                };
            };
        }
    }
    function en(e, n) {
        var t;
        return "file://" === e.file || (null == (t = e.file) ? void 0 : t.match(/https?:\/\//)) ? Promise.resolve({
            error: !1,
            reason: null,
            external: !0,
            sourceStackFrame: e,
            originalStackFrame: null,
            originalCodeFrame: null,
            ignored: !0
        }) : J(function() {
            var t, r;
            return ee(this, function(o) {
                if ("rejected" === n.status) throw Error(n.reason);
                return [
                    2,
                    {
                        error: !1,
                        reason: null,
                        external: !1,
                        sourceStackFrame: e,
                        originalStackFrame: (r = n.value).originalStackFrame,
                        originalCodeFrame: r.originalCodeFrame || null,
                        ignored: (null == (t = r.originalStackFrame) ? void 0 : t.ignored) || !1
                    }
                ];
            });
        })().catch(function(n) {
            var t, r;
            return {
                error: !0,
                reason: null != (r = null != (t = null == n ? void 0 : n.message) ? t : null == n ? void 0 : n.toString()) ? r : "Unknown Error",
                external: !1,
                sourceStackFrame: e,
                originalStackFrame: null,
                originalCodeFrame: null,
                ignored: !1
            };
        });
    }
    function et(e, n, t) {
        return J(function() {
            var r, o, a, l;
            return ee(this, function(i) {
                switch(i.label){
                    case 0:
                        r = {
                            frames: e,
                            isServer: "server" === n,
                            isEdgeServer: "edge-server" === n,
                            isAppDirectory: t
                        }, o = void 0, a = void 0, i.label = 1;
                    case 1:
                        return i.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]), [
                            4,
                            fetch("/__nextjs_original-stack-frames", {
                                method: "POST",
                                body: JSON.stringify(r)
                            })
                        ];
                    case 2:
                        return o = i.sent(), [
                            3,
                            4
                        ];
                    case 3:
                        return a = i.sent() + "", [
                            3,
                            4
                        ];
                    case 4:
                        if (!(o && o.ok && 204 !== o.status)) return [
                            3,
                            6
                        ];
                        return [
                            4,
                            o.json()
                        ];
                    case 5:
                        return l = i.sent(), [
                            2,
                            Promise.all(e.map(function(e, n) {
                                return en(e, l[n]);
                            }))
                        ];
                    case 6:
                        if (!o) return [
                            3,
                            8
                        ];
                        return [
                            4,
                            o.text()
                        ];
                    case 7:
                        a = i.sent(), i.label = 8;
                    case 8:
                        return [
                            2,
                            Promise.all(e.map(function(e) {
                                return en(e, {
                                    status: "rejected",
                                    reason: "Failed to fetch the original stack frames ".concat(a ? ": ".concat(a) : "")
                                });
                            }))
                        ];
                }
            });
        })();
    }
    function er(e) {
        if (!e.file) return "";
        var n = G(e.file), t = "";
        if (n) t = K(e.file);
        else try {
            var r, o = new URL(e.file), a = "";
            (null == (r = globalThis.location) ? void 0 : r.origin) !== o.origin && ("null" === o.origin ? a += o.protocol : a += o.origin), a += o.pathname, t = K(a);
        } catch (n) {
            t = K(e.file);
        }
        return !G(e.file) && null != e.lineNumber && t && (null != e.column ? t += " (".concat(e.lineNumber, ":").concat(e.column, ")") : t += " (".concat(e.lineNumber, ")")), t;
    }
    function eo() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.file, t = e.lineNumber, r = e.column;
        return (0, o.useCallback)(function() {
            if (null != n && null != t && null != r) {
                var e = new URLSearchParams;
                e.append("file", n), e.append("lineNumber", String(t)), e.append("column", String(r)), self.fetch("".concat(("TURBOPACK compile-time value", "") || "", "/__nextjs_launch-editor?").concat(e.toString())).then(function() {}, function(e) {
                    console.error('Failed to open file "'.concat(n, " (").concat(t, ":").concat(r, ')" in your editor. Cause:'), e);
                });
            }
        }, [
            n,
            t,
            r
        ]);
    }
    function ea(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function el(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function ei(e) {
        return (0, r.jsx)("svg", el(ea({
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none"
        }, e), {
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "currentColor",
                d: "M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z"
            })
        }));
    }
    function es(e) {
        return (0, r.jsx)("svg", el(ea({
            xmlns: "http://www.w3.org/2000/svg",
            height: "16",
            strokeLinejoin: "round",
            viewBox: "-4 -4 24 24",
            width: "16"
        }, e), {
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.55846 2H7.44148L1.88975 13.5H14.1102L8.55846 2ZM9.90929 1.34788C9.65902 0.829456 9.13413 0.5 8.55846 0.5H7.44148C6.86581 0.5 6.34092 0.829454 6.09065 1.34787L0.192608 13.5653C-0.127943 14.2293 0.355835 15 1.09316 15H14.9068C15.6441 15 16.1279 14.2293 15.8073 13.5653L9.90929 1.34788ZM8.74997 4.75V5.5V8V8.75H7.24997V8V5.5V4.75H8.74997ZM7.99997 12C8.55226 12 8.99997 11.5523 8.99997 11C8.99997 10.4477 8.55226 10 7.99997 10C7.44769 10 6.99997 10.4477 6.99997 11C6.99997 11.5523 7.44769 12 7.99997 12Z",
                fill: "currentColor"
            })
        }));
    }
    function ec(e) {
        var n = e.lang;
        if (!n) return (0, r.jsx)(ep, {});
        switch(n.toLowerCase()){
            case "jsx":
            case "tsx":
                return (0, r.jsx)(eh, {});
            case "ts":
            case "typescript":
                return (0, r.jsx)(ef, {});
            case "javascript":
            case "js":
            case "mjs":
                return (0, r.jsx)(ed, {});
            case "json":
                return (0, r.jsx)(eu, {});
            default:
                return (0, r.jsx)(ep, {});
        }
    }
    function eu() {
        return (0, r.jsx)("svg", {
            clipRule: "evenodd",
            fillRule: "evenodd",
            height: "16",
            viewBox: "0 0 1321.45 1333.33",
            width: "16",
            children: (0, r.jsx)("path", {
                d: "M221.37 618.44h757.94V405.15H755.14c-23.5 0-56.32-12.74-71.82-28.24-15.5-15.5-25-43.47-25-66.97V82.89H88.39c-1.99 0-3.49 1-4.49 2-1.5 1-2 2.5-2 4.5v1155.04c0 1.5 1 3.5 2 4.5 1 1.49 3 1.99 4.49 1.99H972.8c2 0 1.89-.99 2.89-1.99 1.5-1 3.61-3 3.61-4.5v-121.09H221.36c-44.96 0-82-36.9-82-81.99V700.44c0-45.1 36.9-82 82-82zm126.51 117.47h75.24v146.61c0 30.79-2.44 54.23-7.33 70.31-4.92 16.03-14.8 29.67-29.65 40.85-14.86 11.12-33.91 16.72-57.05 16.72-24.53 0-43.51-3.71-56.94-11.06-13.5-7.36-23.89-18.1-31.23-32.3-7.35-14.14-11.69-31.67-12.99-52.53l71.5-10.81c.11 11.81 1.07 20.61 2.81 26.33 1.76 5.78 4.75 10.37 9 13.95 2.87 2.33 6.94 3.46 12.25 3.46 8.4 0 14.58-3.46 18.53-10.37 3.9-6.92 5.87-18.6 5.87-35V735.92zm112.77 180.67l71.17-4.97c1.54 12.81 4.69 22.62 9.44 29.28 7.74 10.88 18.74 16.34 33.09 16.34 10.68 0 18.93-2.76 24.68-8.36 5.81-5.58 8.7-12.07 8.7-19.41 0-6.97-2.71-13.26-8.2-18.79-5.47-5.53-18.23-10.68-38.28-15.65-32.89-8.17-56.27-19.1-70.26-32.74-14.12-13.57-21.18-30.92-21.18-52.03 0-13.83 3.61-26.89 10.85-39.21 7.22-12.38 18.07-22.06 32.59-29.09 14.52-7.04 34.4-10.56 59.65-10.56 31 0 54.62 6.41 70.88 19.29 16.28 12.81 25.92 33.24 29.04 61.27l-70.5 4.65c-1.87-12.25-5.81-21.17-11.81-26.7-6.05-5.6-14.35-8.36-24.9-8.36-8.71 0-15.31 2.07-19.73 6.16-4.4 4.09-6.59 9.12-6.59 15.02 0 4.27 1.81 8.11 5.37 11.57 3.45 3.59 11.8 6.85 25.02 9.93 32.75 7.86 56.2 15.84 70.31 23.87 14.18 8.05 24.52 17.98 30.96 29.92 6.44 11.88 9.66 25.2 9.66 39.96 0 17.29-4.3 33.24-12.88 47.89-8.63 14.58-20.61 25.7-36.08 33.24-15.41 7.54-34.85 11.31-58.33 11.31-41.24 0-69.81-8.86-85.68-26.52-15.88-17.65-24.85-40.09-26.96-67.3zm248.74-45.5c0-44.05 11.02-78.36 33.09-102.87 22.09-24.57 52.82-36.82 92.24-36.82 40.38 0 71.5 12.07 93.34 36.13 21.86 24.13 32.77 57.94 32.77 101.37 0 31.54-4.75 57.36-14.3 77.54-9.54 20.18-23.37 35.89-41.4 47.13-18.07 11.24-40.55 16.84-67.48 16.84-27.33 0-49.99-4.83-67.94-14.52-17.92-9.74-32.49-25.07-43.62-46.06-11.13-20.92-16.72-47.19-16.72-78.74zm74.89.19c0 27.21 4.57 46.81 13.68 58.68 9.13 11.88 21.57 17.85 37.26 17.85 16.1 0 28.65-5.84 37.45-17.47 8.87-11.68 13.28-32.54 13.28-62.77 0-25.39-4.63-43.92-13.84-55.61-9.26-11.76-21.75-17.6-37.56-17.6-15.13 0-27.34 5.97-36.49 17.85-9.21 11.88-13.78 31.61-13.78 59.07zm209.08-135.36h69.99l90.98 149.05V735.91h70.83v269.96h-70.83l-90.48-148.24v148.24h-70.49V735.91zm67.71-117.47h178.37c45.1 0 82 37.04 82 82v340.91c0 44.96-37.03 81.99-82 81.99h-178.37v147c0 17.5-6.99 32.99-18.5 44.5-11.5 11.49-27 18.5-44.5 18.5H62.97c-17.5 0-32.99-7-44.5-18.5-11.49-11.5-18.5-27-18.5-44.5V63.49c0-17.5 7-33 18.5-44.5S45.97.49 62.97.49H700.1c1.5-.5 3-.5 4.5-.5 7 0 14 3 19 7.49h1c1 .5 1.5 1 2.5 2l325.46 329.47c5.5 5.5 9.5 13 9.5 21.5 0 2.5-.5 4.5-1 7v250.98zM732.61 303.47V96.99l232.48 235.47H761.6c-7.99 0-14.99-3.5-20.5-8.49-4.99-5-8.49-12.5-8.49-20.5z",
                fill: "currentColor"
            })
        });
    }
    function ed() {
        return (0, r.jsx)("svg", {
            height: "16",
            viewBox: "0 0 50 50",
            width: "16",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
                d: "M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z",
                fill: "currentColor"
            })
        });
    }
    function ef() {
        return (0, r.jsxs)("svg", {
            fill: "none",
            height: "14",
            viewBox: "0 0 512 512",
            width: "14",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, r.jsx)("rect", {
                    fill: "currentColor",
                    height: "512",
                    rx: "50",
                    width: "512"
                }),
                (0, r.jsx)("rect", {
                    fill: "currentColor",
                    height: "512",
                    rx: "50",
                    width: "512"
                }),
                (0, r.jsx)("path", {
                    clipRule: "evenodd",
                    d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z",
                    fill: "var(--color-background-100)",
                    fillRule: "evenodd"
                })
            ]
        });
    }
    function ep() {
        return (0, r.jsx)("svg", {
            width: "16",
            height: "17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.5 7v7a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 14V.5h7.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V7zM13 7v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2h5v5h5zM9.5 2.621V5.5h2.879L9.5 2.621z",
                fill: "currentColor"
            })
        });
    }
    function eh() {
        return (0, r.jsxs)("svg", {
            height: "16",
            strokeLinejoin: "round",
            viewBox: "0 0 16 16",
            width: "16",
            children: [
                (0, r.jsx)("g", {
                    clipPath: "url(#file_react_clip0_872_3183)",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.5 1.93782C4.70129 1.82161 4.99472 1.7858 5.41315 1.91053C5.83298 2.03567 6.33139 2.31073 6.87627 2.73948C7.01136 2.84578 7.14803 2.96052 7.28573 3.08331C6.86217 3.53446 6.44239 4.04358 6.03752 4.60092C5.35243 4.67288 4.70164 4.78186 4.09916 4.92309C4.06167 4.74244 4.03064 4.56671 4.00612 4.39656C3.90725 3.71031 3.91825 3.14114 4.01979 2.71499C4.12099 2.29025 4.29871 2.05404 4.5 1.93782ZM7.49466 1.95361C7.66225 2.08548 7.83092 2.22804 7.99999 2.38067C8.16906 2.22804 8.33773 2.08548 8.50532 1.95361C9.10921 1.47842 9.71982 1.12549 10.3012 0.952202C10.8839 0.778496 11.4838 0.7738 12 1.0718C12.5161 1.3698 12.812 1.89169 12.953 2.48322C13.0936 3.07333 13.0932 3.77858 12.9836 4.53917C12.9532 4.75024 12.9141 4.9676 12.8665 5.19034C13.0832 5.26044 13.291 5.33524 13.489 5.41444C14.2025 5.69983 14.8134 6.05217 15.2542 6.46899C15.696 6.8868 16 7.404 16 8C16 8.596 15.696 9.11319 15.2542 9.53101C14.8134 9.94783 14.2025 10.3002 13.489 10.5856C13.291 10.6648 13.0832 10.7396 12.8665 10.8097C12.9141 11.0324 12.9532 11.2498 12.9837 11.4608C13.0932 12.2214 13.0936 12.9267 12.953 13.5168C12.812 14.1083 12.5161 14.6302 12 14.9282C11.4839 15.2262 10.8839 15.2215 10.3012 15.0478C9.71984 14.8745 9.10923 14.5216 8.50534 14.0464C8.33775 13.9145 8.16906 13.7719 7.99999 13.6193C7.83091 13.7719 7.66223 13.9145 7.49464 14.0464C6.89075 14.5216 6.28014 14.8745 5.69879 15.0478C5.11605 15.2215 4.51613 15.2262 3.99998 14.9282C3.48383 14.6302 3.18794 14.1083 3.047 13.5168C2.9064 12.9267 2.90674 12.2214 3.01632 11.4608C3.04673 11.2498 3.08586 11.0324 3.13351 10.8097C2.91679 10.7395 2.709 10.6648 2.511 10.5856C1.79752 10.3002 1.18658 9.94783 0.745833 9.53101C0.304028 9.11319 0 8.596 0 8C0 7.404 0.304028 6.8868 0.745833 6.46899C1.18658 6.05217 1.79752 5.69983 2.511 5.41444C2.709 5.33524 2.9168 5.26044 3.13352 5.19034C3.08587 4.9676 3.04675 4.75024 3.01634 4.53917C2.90676 3.77858 2.90642 3.07332 3.04702 2.48321C3.18796 1.89169 3.48385 1.3698 4 1.0718C4.51615 0.773798 5.11607 0.778495 5.69881 0.952201C6.28016 1.12549 6.89077 1.47841 7.49466 1.95361ZM7.36747 4.51025C7.57735 4.25194 7.78881 4.00927 7.99999 3.78356C8.21117 4.00927 8.42263 4.25194 8.63251 4.51025C8.42369 4.50346 8.21274 4.5 8 4.5C7.78725 4.5 7.5763 4.50345 7.36747 4.51025ZM8.71425 3.08331C9.13781 3.53447 9.55759 4.04358 9.96246 4.60092C10.6475 4.67288 11.2983 4.78186 11.9008 4.92309C11.9383 4.74244 11.9693 4.56671 11.9939 4.39657C12.0927 3.71031 12.0817 3.14114 11.9802 2.71499C11.879 2.29025 11.7013 2.05404 11.5 1.93782C11.2987 1.82161 11.0053 1.7858 10.5868 1.91053C10.167 2.03568 9.66859 2.31073 9.12371 2.73948C8.98862 2.84578 8.85196 2.96052 8.71425 3.08331ZM8 5.5C8.48433 5.5 8.95638 5.51885 9.41188 5.55456C9.67056 5.93118 9.9229 6.33056 10.1651 6.75C10.4072 7.16944 10.6269 7.58766 10.8237 7.99998C10.6269 8.41232 10.4072 8.83055 10.165 9.25C9.92288 9.66944 9.67053 10.0688 9.41185 10.4454C8.95636 10.4812 8.48432 10.5 8 10.5C7.51567 10.5 7.04363 10.4812 6.58813 10.4454C6.32945 10.0688 6.0771 9.66944 5.83494 9.25C5.59277 8.83055 5.37306 8.41232 5.17624 7.99998C5.37306 7.58765 5.59275 7.16944 5.83492 6.75C6.07708 6.33056 6.32942 5.93118 6.5881 5.55456C7.04361 5.51884 7.51566 5.5 8 5.5ZM11.0311 6.25C11.1375 6.43423 11.2399 6.61864 11.3385 6.80287C11.4572 6.49197 11.5616 6.18752 11.6515 5.89178C11.3505 5.82175 11.0346 5.75996 10.706 5.70736C10.8163 5.8848 10.9247 6.06576 11.0311 6.25ZM11.0311 9.75C11.1374 9.56576 11.2399 9.38133 11.3385 9.19709C11.4572 9.50801 11.5617 9.81246 11.6515 10.1082C11.3505 10.1782 11.0346 10.24 10.7059 10.2926C10.8162 10.1152 10.9247 9.93424 11.0311 9.75ZM11.9249 7.99998C12.2051 8.62927 12.4362 9.24738 12.6151 9.83977C12.7903 9.78191 12.958 9.72092 13.1176 9.65708C13.7614 9.39958 14.2488 9.10547 14.5671 8.80446C14.8843 8.50445 15 8.23243 15 8C15 7.76757 14.8843 7.49555 14.5671 7.19554C14.2488 6.89453 13.7614 6.60042 13.1176 6.34292C12.958 6.27907 12.7903 6.21808 12.6151 6.16022C12.4362 6.7526 12.2051 7.37069 11.9249 7.99998ZM9.96244 11.3991C10.6475 11.3271 11.2983 11.2181 11.9008 11.0769C11.9383 11.2576 11.9694 11.4333 11.9939 11.6034C12.0928 12.2897 12.0817 12.8589 11.9802 13.285C11.879 13.7098 11.7013 13.946 11.5 14.0622C11.2987 14.1784 11.0053 14.2142 10.5868 14.0895C10.167 13.9643 9.66861 13.6893 9.12373 13.2605C8.98863 13.1542 8.85196 13.0395 8.71424 12.9167C9.1378 12.4655 9.55758 11.9564 9.96244 11.3991ZM8.63249 11.4898C8.42262 11.7481 8.21116 11.9907 7.99999 12.2164C7.78881 11.9907 7.57737 11.7481 7.36749 11.4897C7.57631 11.4965 7.78726 11.5 8 11.5C8.21273 11.5 8.42367 11.4965 8.63249 11.4898ZM4.96891 9.75C5.07528 9.93424 5.18375 10.1152 5.29404 10.2926C4.9654 10.24 4.64951 10.1782 4.34844 10.1082C4.43833 9.81246 4.54276 9.508 4.66152 9.19708C4.76005 9.38133 4.86254 9.56575 4.96891 9.75ZM6.03754 11.3991C5.35244 11.3271 4.70163 11.2181 4.09914 11.0769C4.06165 11.2576 4.03062 11.4333 4.0061 11.6034C3.90723 12.2897 3.91823 12.8589 4.01977 13.285C4.12097 13.7098 4.29869 13.946 4.49998 14.0622C4.70127 14.1784 4.9947 14.2142 5.41313 14.0895C5.83296 13.9643 6.33137 13.6893 6.87625 13.2605C7.01135 13.1542 7.14802 13.0395 7.28573 12.9167C6.86217 12.4655 6.4424 11.9564 6.03754 11.3991ZM4.07507 7.99998C3.79484 8.62927 3.56381 9.24737 3.38489 9.83977C3.20969 9.78191 3.042 9.72092 2.88239 9.65708C2.23864 9.39958 1.75123 9.10547 1.43294 8.80446C1.11571 8.50445 1 8.23243 1 8C1 7.76757 1.11571 7.49555 1.43294 7.19554C1.75123 6.89453 2.23864 6.60042 2.88239 6.34292C3.042 6.27907 3.2097 6.21808 3.3849 6.16022C3.56383 6.75261 3.79484 7.37069 4.07507 7.99998ZM4.66152 6.80287C4.54277 6.49197 4.43835 6.18752 4.34846 5.89178C4.64952 5.82175 4.96539 5.75996 5.29402 5.70736C5.18373 5.8848 5.07526 6.06576 4.96889 6.25C4.86253 6.43423 4.76005 6.61864 4.66152 6.80287ZM9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30965 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30965 9.25 8Z",
                        fill: "currentColor"
                    })
                }),
                (0, r.jsx)("defs", {
                    children: (0, r.jsx)("clipPath", {
                        id: "file_react_clip0_872_3183",
                        children: (0, r.jsx)("rect", {
                            width: "16",
                            height: "16",
                            fill: "white"
                        })
                    })
                })
            ]
        });
    }
    var em = __webpack_require__("./dist/compiled/anser/index.js"), eg = __webpack_require__.n(em), eb = __webpack_require__("./dist/compiled/strip-ansi/index.js"), ev = __webpack_require__.n(eb);
    function ey(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function ex(e) {
        var n, t = e.stackFrame, a = e.codeFrame, l = (0, o.useMemo)(function() {
            var e, n;
            return (function(e) {
                var n = eg().ansiToJson(e, {
                    json: !0,
                    use_classes: !0,
                    remove_empty: !0
                }), t = [], r = [], o = !0, a = !1, l = void 0;
                try {
                    for(var i, s = n[Symbol.iterator](); !(o = (i = s.next()).done); o = !0){
                        var c = i.value;
                        if ("string" == typeof c.content && c.content.includes("\n")) for(var u = c.content.split("\n"), d = 0; d < u.length; d++){
                            var f = u[d];
                            f && r.push(function(e, n) {
                                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, r);
                                    }
                                    return t;
                                })(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                }), e;
                            }(function(e) {
                                for(var n = 1; n < arguments.length; n++){
                                    var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    }))), r.forEach(function(n) {
                                        var r, o, a;
                                        r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                                            value: a,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : r[o] = a;
                                    });
                                }
                                return e;
                            }({}, c), {
                                content: f
                            })), d < u.length - 1 && (t.push(r), r = []);
                        }
                        else r.push(c);
                    }
                } catch (e) {
                    a = !0, l = e;
                } finally{
                    try {
                        o || null == s.return || s.return();
                    } finally{
                        if (a) throw l;
                    }
                }
                return r.length > 0 && t.push(r), t;
            })((n = (e = a.split(/\r?\n/g)).map(function(e) {
                return null === /^>? +\d+ +\| [ ]+/.exec(ev()(e)) ? null : /^>? +\d+ +\| ( *)/.exec(ev()(e));
            }).filter(Boolean).map(function(e) {
                return e.pop();
            }).reduce(function(e, n) {
                return isNaN(e) ? n.length : Math.min(e, n.length);
            }, NaN)) > 1 ? e.map(function(e, t) {
                return ~(t = e.indexOf("|")) ? e.substring(0, t) + e.substring(t).replace("^\\ {".concat(n, "}"), "") : e;
            }).join("\n") : e.join("\n")).map(function(e) {
                var n, r, o, a, l, i, s, c, u;
                return {
                    line: e,
                    parsedLine: (n = e, r = t, ((null == (o = n[0]) ? void 0 : o.content) === ">" || (null == (a = n[0]) ? void 0 : a.content) === " ") && (s = null == (i = n[1]) || null == (u = i.content) || null == (c = u.replace("|", "")) ? void 0 : c.trim()), {
                        lineNumber: s,
                        isErroredLine: s === (null == (l = r.lineNumber) ? void 0 : l.toString())
                    })
                };
            });
        }, [
            a,
            t
        ]), i = eo({
            file: t.file,
            lineNumber: t.lineNumber,
            column: t.column
        }), s = null == t || null == (n = t.file) ? void 0 : n.split(".").pop();
        return (0, r.jsxs)("div", {
            "data-nextjs-codeframe": !0,
            children: [
                (0, r.jsx)("div", {
                    className: "code-frame-header",
                    children: (0, r.jsxs)("p", {
                        className: "code-frame-link",
                        children: [
                            (0, r.jsx)("span", {
                                className: "code-frame-icon",
                                children: (0, r.jsx)(ec, {
                                    lang: s
                                })
                            }),
                            (0, r.jsxs)("span", {
                                "data-text": !0,
                                children: [
                                    er(t),
                                    " @",
                                    " ",
                                    (0, r.jsx)(Q, {
                                        text: t.methodName
                                    })
                                ]
                            }),
                            (0, r.jsx)("button", {
                                "aria-label": "Open in editor",
                                "data-with-open-in-editor-link-source-file": !0,
                                onClick: i,
                                children: (0, r.jsx)("span", {
                                    className: "code-frame-icon",
                                    "data-icon": "right",
                                    children: (0, r.jsx)(ei, {
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })
                        ]
                    })
                }),
                (0, r.jsx)("pre", {
                    className: "code-frame-pre",
                    children: (0, r.jsx)("div", {
                        className: "code-frame-lines",
                        children: l.map(function(e, n) {
                            var t, o, a = e.line, l = e.parsedLine, i = l.lineNumber, s = l.isErroredLine, c = {};
                            return i && (c["data-nextjs-codeframe-line"] = i), s && (c["data-nextjs-codeframe-line--errored"] = !0), (0, r.jsx)("div", (t = ey({}, c), o = o = {
                                children: a.map(function(e, n) {
                                    return (0, r.jsx)("span", {
                                        style: ey({
                                            color: e.fg ? "var(--color-".concat(e.fg, ")") : void 0
                                        }, "bold" === e.decoration ? {
                                            fontWeight: 500
                                        } : "italic" === e.decoration ? {
                                            fontStyle: "italic"
                                        } : void 0),
                                        children: e.content
                                    }, "frame-".concat(n));
                                })
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t.push.apply(t, r);
                                }
                                return t;
                            })(Object(o)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                            }), t), "line-".concat(n));
                        })
                    })
                })
            ]
        });
    }
    function ew(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    var ej = [
        "[data-next-mark]",
        "[data-issues-open]",
        "#nextjs-dev-tools-menu",
        "[data-nextjs-error-overlay-nav]",
        "[data-info-popover]"
    ], ek = function(e) {
        var n, t, a, l, i, s, c, u = e.children, d = e.className, f = e.onClose, p = e["aria-labelledby"], h = e["aria-describedby"], m = (e.dialogResizerRef, function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "children",
            "className",
            "onClose",
            "aria-labelledby",
            "aria-describedby",
            "dialogResizerRef"
        ])), g = o.useRef(null), b = (n = o.useState("undefined" != typeof document && document.hasFocus() ? "dialog" : void 0), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return ew(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ew(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), v = b[0], y = b[1];
        return a = g.current, l = ej, i = function(e) {
            return e.preventDefault(), null == f ? void 0 : f();
        }, o.useEffect({
            "ek.useEffect": function() {
                if (null != a && null != i) {
                    var e = {
                        "ek.useEffect.e": function(e) {
                            !(!a || a.contains(e.target)) && (l.some({
                                "ek.useEffect.e": function(n) {
                                    return e.target.closest(n);
                                }
                            }["ek.useEffect.e"]) || i(e));
                        }
                    }["ek.useEffect.e"], n = a.getRootNode();
                    return n.addEventListener("mouseup", e), n.addEventListener("touchend", e, {
                        passive: !1
                    }), ({
                        "ek.useEffect": function() {
                            n.removeEventListener("mouseup", e), n.removeEventListener("touchend", e);
                        }
                    })["ek.useEffect"];
                }
            }
        }["ek.useEffect"], [
            i,
            a,
            l
        ]), o.useEffect({
            "ek.useEffect": function() {
                var e = {
                    "ek.useEffect.e": function() {
                        y(document.hasFocus() ? "dialog" : void 0);
                    }
                }["ek.useEffect.e"];
                if (null != g.current) return window.addEventListener("focus", e), window.addEventListener("blur", e), ({
                    "ek.useEffect": function() {
                        window.removeEventListener("focus", e), window.removeEventListener("blur", e);
                    }
                })["ek.useEffect"];
            }
        }["ek.useEffect"], []), o.useEffect({
            "ek.useEffect": function() {
                var e, n, t = g.current, r = null == t ? void 0 : t.getRootNode(), o = (e = r, null != (n = ShadowRoot) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : e instanceof n) ? null == r ? void 0 : r.activeElement : null;
                return null == t || t.focus(), ({
                    "ek.useEffect": function() {
                        null == t || t.blur(), null == o || o.focus();
                    }
                })["ek.useEffect"];
            }
        }["ek.useEffect"], []), (0, r.jsx)("div", (s = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            ref: g,
            tabIndex: -1,
            "data-nextjs-dialog": !0,
            role: v,
            "aria-labelledby": p,
            "aria-describedby": h,
            "aria-modal": "true",
            className: d,
            onKeyDown: function(e) {
                "Escape" === e.key && (null == f || f());
            }
        }, m), c = c = {
            children: u
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(c)).forEach(function(e) {
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e));
        }), s));
    }, eO = function(e) {
        var n = e.children, t = e.className;
        return (0, r.jsx)("div", {
            "data-nextjs-dialog-body": !0,
            className: t,
            children: n
        });
    }, eS = function(e) {
        var n = e.children, t = e.className;
        return (0, r.jsx)("div", {
            "data-nextjs-dialog-content": !0,
            className: t,
            children: n
        });
    }, e_ = function(e) {
        var n = e.children, t = e.className;
        return (0, r.jsx)("div", {
            "data-nextjs-dialog-header": !0,
            className: t,
            children: n
        });
    };
    function eC() {
        for(var e = arguments.length, n = Array(e), t = 0; t < e; t++)n[t] = arguments[t];
        return n.filter(Boolean).join(" ");
    }
    function eE(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function eP(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function eN(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function ez(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return eE(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eE(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    var eL = "function" == typeof o.useActionState ? function(e) {
        var n = ez(o.useActionState({
            "n.useActionState": function(n, t) {
                return "reset" === t ? {
                    state: "initial"
                } : "copy" === t ? navigator.clipboard ? navigator.clipboard.writeText(e).then({
                    "n.useActionState": function() {
                        return {
                            state: "success"
                        };
                    }
                }["n.useActionState"], {
                    "n.useActionState": function(e) {
                        return {
                            state: "error",
                            error: e
                        };
                    }
                }["n.useActionState"]) : {
                    state: "error",
                    error: "Copy to clipboard is not supported in this browser"
                } : n;
            }
        }["n.useActionState"], {
            state: "initial"
        }), 3), t = n[0], r = n[1], a = n[2];
        return [
            t,
            function() {
                o.startTransition(function() {
                    r("copy");
                });
            },
            o.useCallback(function() {
                r("reset");
            }, [
                r
            ]),
            a
        ];
    } : function(e) {
        var n = ez(o.useReducer({
            "n.useReducer": function(e, n) {
                return "reset" === n.type ? {
                    state: "initial"
                } : "copied" === n.type ? {
                    state: "success"
                } : "copying" === n.type ? {
                    state: "pending"
                } : "error" === n.type ? {
                    state: "error",
                    error: n.error
                } : e;
            }
        }["n.useReducer"], {
            state: "initial"
        }), 2), t = n[0], r = n[1], a = o.useCallback({
            "useCallback[a]": function() {
                r({
                    type: "reset"
                });
            }
        }["useCallback[a]"], []), l = "pending" === t.state;
        return [
            t,
            function() {
                l || (navigator.clipboard ? (r({
                    type: "copying"
                }), navigator.clipboard.writeText(e).then(function() {
                    r({
                        type: "copied"
                    });
                }, function(e) {
                    r({
                        type: "error",
                        error: e
                    });
                })) : r({
                    type: "error",
                    error: "Copy to clipboard is not supported in this browser"
                }));
            },
            a,
            l
        ];
    };
    function eT(e) {
        var n = e.actionLabel, t = e.successLabel, a = e.content, l = e.icon, i = e.disabled, s = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "actionLabel",
            "successLabel",
            "content",
            "icon",
            "disabled"
        ]), c = ez(eL(a), 4), u = c[0], d = c[1], f = c[2], p = c[3], h = "error" === u.state ? u.error : null;
        o.useEffect({
            "eT.useEffect": function() {
                null !== h && console.warn(h);
            }
        }["eT.useEffect"], [
            h
        ]), o.useEffect({
            "eT.useEffect": function() {
                if ("success" === u.state) {
                    var e = setTimeout({
                        "eT.useEffect.e": function() {
                            f();
                        }
                    }["eT.useEffect.e"], 2e3);
                    return ({
                        "eT.useEffect": function() {
                            clearTimeout(e);
                        }
                    })["eT.useEffect"];
                }
            }
        }["eT.useEffect"], [
            p,
            u.state,
            f
        ]);
        var m = !navigator.clipboard || p || i || !!h, g = "success" === u.state ? t : n, b = "success" === u.state ? (0, r.jsx)(eA, {}) : l || (0, r.jsx)(eD, {
            width: 14,
            height: 14,
            className: "error-overlay-toolbar-button-icon"
        });
        return (0, r.jsxs)("button", eN(eP({}, s), {
            type: "button",
            title: g,
            "aria-label": g,
            "aria-disabled": m,
            disabled: m,
            "data-nextjs-copy-button": !0,
            className: eC(s.className, "nextjs-data-copy-button", "nextjs-data-copy-button--".concat(u.state)),
            onClick: function() {
                m || d();
            },
            children: [
                b,
                "error" === u.state ? " ".concat(u.error) : null
            ]
        }));
    }
    function eD(e) {
        return (0, r.jsx)("svg", eN(eP({
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), {
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.406.438c-.845 0-1.531.685-1.531 1.53v6.563c0 .846.686 1.531 1.531 1.531H3.937V8.75H2.406a.219.219 0 0 1-.219-.219V1.97c0-.121.098-.219.22-.219h4.812c.12 0 .218.098.218.219v.656H8.75v-.656c0-.846-.686-1.532-1.531-1.532H2.406zm4.375 3.5c-.845 0-1.531.685-1.531 1.53v6.563c0 .846.686 1.531 1.531 1.531h4.813c.845 0 1.531-.685 1.531-1.53V5.468c0-.846-.686-1.532-1.531-1.532H6.78zm-.218 1.53c0-.12.097-.218.218-.218h4.813c.12 0 .219.098.219.219v6.562c0 .121-.098.219-.22.219H6.782a.219.219 0 0 1-.218-.219V5.47z",
                fill: "currentColor"
            })
        }));
    }
    function eA() {
        return (0, r.jsx)("svg", {
            height: "16",
            xlinkTitle: "copied",
            viewBox: "0 0 16 16",
            width: "16",
            stroke: "currentColor",
            fill: "currentColor",
            children: (0, r.jsx)("path", {
                d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
            })
        });
    }
    function eR(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function eI(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    var eM = function() {
        if ("undefined" == typeof window) return !1;
        var e = "chrome" in window && window.chrome, n = window.navigator.vendor;
        return null != e && "Google Inc." === n;
    }();
    function eF(e) {
        return (0, r.jsxs)("svg", eI(eR({
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), {
            children: [
                (0, r.jsx)("mask", {
                    id: "nodejs_icon_mask_a",
                    style: {
                        maskType: "luminance"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "14",
                    height: "14",
                    children: (0, r.jsx)("path", {
                        d: "M6.67.089 1.205 3.256a.663.663 0 0 0-.33.573v6.339c0 .237.126.455.33.574l5.466 3.17a.66.66 0 0 0 .66 0l5.465-3.17a.664.664 0 0 0 .329-.574V3.829a.663.663 0 0 0-.33-.573L7.33.089a.663.663 0 0 0-.661 0",
                        fill: "#fff"
                    })
                }),
                (0, r.jsx)("g", {
                    mask: "url(#nodejs_icon_mask_a)",
                    children: (0, r.jsx)("path", {
                        d: "M18.648 2.717 3.248-4.86-4.648 11.31l15.4 7.58 7.896-16.174z",
                        fill: "url(#nodejs_icon_linear_gradient_b)"
                    })
                }),
                (0, r.jsx)("mask", {
                    id: "nodejs_icon_mask_c",
                    style: {
                        maskType: "luminance"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "1",
                    y: "0",
                    width: "12",
                    height: "14",
                    children: (0, r.jsx)("path", {
                        d: "M1.01 10.57a.663.663 0 0 0 .195.17l4.688 2.72.781.45a.66.66 0 0 0 .51.063l5.764-10.597a.653.653 0 0 0-.153-.122L9.216 1.18 7.325.087a.688.688 0 0 0-.171-.07L1.01 10.57z",
                        fill: "#fff"
                    })
                }),
                (0, r.jsx)("g", {
                    mask: "url(#nodejs_icon_mask_c)",
                    children: (0, r.jsx)("path", {
                        d: "M-5.647 4.958 5.226 19.734l14.38-10.667L8.734-5.71-5.647 4.958z",
                        fill: "url(#nodejs_icon_linear_gradient_d)"
                    })
                }),
                (0, r.jsxs)("g", {
                    children: [
                        (0, r.jsx)("mask", {
                            id: "nodejs_icon_mask_e",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "1",
                            y: "0",
                            width: "13",
                            height: "14",
                            children: (0, r.jsx)("path", {
                                d: "M6.934.004A.665.665 0 0 0 6.67.09L1.22 3.247l5.877 10.746a.655.655 0 0 0 .235-.08l5.465-3.17a.665.665 0 0 0 .319-.453L7.126.015a.684.684 0 0 0-.189-.01",
                                fill: "#fff"
                            })
                        }),
                        (0, r.jsx)("g", {
                            mask: "url(#nodejs_icon_mask_e)",
                            children: (0, r.jsx)("path", {
                                d: "M1.22.002v13.992h11.894V.002H1.22z",
                                fill: "url(#nodejs_icon_linear_gradient_f)"
                            })
                        })
                    ]
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "nodejs_icon_linear_gradient_b",
                            x1: "10.943",
                            y1: "-1.084",
                            x2: "2.997",
                            y2: "15.062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: ".3",
                                    stopColor: "#3E863D"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".5",
                                    stopColor: "#55934F"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".8",
                                    stopColor: "#5AAD45"
                                })
                            ]
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "nodejs_icon_linear_gradient_d",
                            x1: "-.145",
                            y1: "12.431",
                            x2: "14.277",
                            y2: "1.818",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: ".57",
                                    stopColor: "#3E863D"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".72",
                                    stopColor: "#619857"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#76AC64"
                                })
                            ]
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "nodejs_icon_linear_gradient_f",
                            x1: "1.225",
                            y1: "6.998",
                            x2: "13.116",
                            y2: "6.998",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: ".16",
                                    stopColor: "#6BBF47"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".38",
                                    stopColor: "#79B461"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".47",
                                    stopColor: "#75AC64"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".7",
                                    stopColor: "#659E5A"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".9",
                                    stopColor: "#3E863D"
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
    function eH(e) {
        return (0, r.jsxs)("svg", eI(eR({
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), {
            children: [
                (0, r.jsx)("mask", {
                    id: "nodejs_icon_mask_a",
                    style: {
                        maskType: "luminance"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "14",
                    height: "14",
                    children: (0, r.jsx)("path", {
                        d: "M6.67.089 1.205 3.256a.663.663 0 0 0-.33.573v6.339c0 .237.126.455.33.574l5.466 3.17a.66.66 0 0 0 .66 0l5.465-3.17a.664.664 0 0 0 .329-.574V3.829a.663.663 0 0 0-.33-.573L7.33.089a.663.663 0 0 0-.661 0",
                        fill: "#fff"
                    })
                }),
                (0, r.jsx)("g", {
                    mask: "url(#nodejs_icon_mask_a)",
                    children: (0, r.jsx)("path", {
                        d: "M18.648 2.717 3.248-4.86-4.646 11.31l15.399 7.58 7.896-16.174z",
                        fill: "url(#nodejs_icon_linear_gradient_b)"
                    })
                }),
                (0, r.jsx)("mask", {
                    id: "nodejs_icon_mask_c",
                    style: {
                        maskType: "luminance"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "1",
                    y: "0",
                    width: "12",
                    height: "15",
                    children: (0, r.jsx)("path", {
                        d: "M1.01 10.571a.66.66 0 0 0 .195.172l4.688 2.718.781.451a.66.66 0 0 0 .51.063l5.764-10.597a.653.653 0 0 0-.153-.122L9.216 1.181 7.325.09a.688.688 0 0 0-.171-.07L1.01 10.572z",
                        fill: "#fff"
                    })
                }),
                (0, r.jsx)("g", {
                    mask: "url(#nodejs_icon_mask_c)",
                    children: (0, r.jsx)("path", {
                        d: "M-5.647 4.96 5.226 19.736 19.606 9.07 8.734-5.707-5.647 4.96z",
                        fill: "url(#nodejs_icon_linear_gradient_d)"
                    })
                }),
                (0, r.jsxs)("g", {
                    children: [
                        (0, r.jsx)("mask", {
                            id: "nodejs_icon_mask_e",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "1",
                            y: "0",
                            width: "13",
                            height: "14",
                            children: (0, r.jsx)("path", {
                                d: "M6.935.003a.665.665 0 0 0-.264.085l-5.45 3.158 5.877 10.747a.653.653 0 0 0 .235-.082l5.465-3.17a.665.665 0 0 0 .319-.452L7.127.014a.684.684 0 0 0-.189-.01",
                                fill: "#fff"
                            })
                        }),
                        (0, r.jsx)("g", {
                            mask: "url(#nodejs_icon_mask_e)",
                            children: (0, r.jsx)("path", {
                                d: "M1.222.001v13.992h11.893V0H1.222z",
                                fill: "url(#nodejs_icon_linear_gradient_f)"
                            })
                        })
                    ]
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "nodejs_icon_linear_gradient_b",
                            x1: "10.944",
                            y1: "-1.084",
                            x2: "2.997",
                            y2: "15.062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: ".3",
                                    stopColor: "#676767"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".5",
                                    stopColor: "#858585"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".8",
                                    stopColor: "#989A98"
                                })
                            ]
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "nodejs_icon_linear_gradient_d",
                            x1: "-.145",
                            y1: "12.433",
                            x2: "14.277",
                            y2: "1.819",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: ".57",
                                    stopColor: "#747474"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".72",
                                    stopColor: "#707070"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#929292"
                                })
                            ]
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "nodejs_icon_linear_gradient_f",
                            x1: "1.226",
                            y1: "6.997",
                            x2: "13.117",
                            y2: "6.997",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: ".16",
                                    stopColor: "#878787"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".38",
                                    stopColor: "#A9A9A9"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".47",
                                    stopColor: "#A5A5A5"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".7",
                                    stopColor: "#8F8F8F"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".9",
                                    stopColor: "#626262"
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
    var eU = "Learn more about enabling Node.js inspector for server code with Chrome DevTools";
    function eV(e) {
        var n = e.devtoolsFrontendUrl || "";
        return n && eM ? (0, r.jsx)(eT, {
            "data-nextjs-data-runtime-error-copy-devtools-url": !0,
            className: "nodejs-inspector-button",
            actionLabel: "Copy Chrome DevTools URL",
            successLabel: "Copied",
            content: n,
            icon: (0, r.jsx)(eF, {
                className: "error-overlay-toolbar-button-icon",
                width: 14,
                height: 14
            })
        }) : (0, r.jsx)("a", {
            title: eU,
            "aria-label": eU,
            className: "nodejs-inspector-button",
            href: "https://nextjs.org/docs/app/building-your-application/configuring/debugging#server-side-code",
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, r.jsx)(eH, {
                className: "error-overlay-toolbar-button-icon",
                width: 14,
                height: 14
            })
        });
    }
    function eB(e) {
        var n = e.error;
        return (0, r.jsx)(eT, {
            "data-nextjs-data-runtime-error-copy-stack": !0,
            className: "copy-stack-trace-button",
            actionLabel: "Copy Stack Trace",
            successLabel: "Stack Trace Copied",
            content: n.stack || "",
            disabled: !n.stack
        });
    }
    function e$(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function eq(e) {
        if (Array.isArray(e)) return e;
    }
    function eZ() {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function eW(e, n) {
        return eq(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || eX(e, n) || eZ();
    }
    function eQ(e) {
        return eq(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || eX(e) || eZ();
    }
    function eX(e, n) {
        if (e) {
            if ("string" == typeof e) return e$(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return e$(e, n);
        }
    }
    var eG = "https://react.dev/link/hydration-mismatch", eK = "https://nextjs.org/docs/messages/react-hydration-error", eY = [
        /^In HTML, (.+?) cannot be a child of <(.+?)>\.(.*)\nThis will cause a hydration error\.(.*)/,
        /^In HTML, (.+?) cannot be a descendant of <(.+?)>\.\nThis will cause a hydration error\.(.*)/,
        /^In HTML, text nodes cannot be a child of <(.+?)>\.\nThis will cause a hydration error\./,
        /^In HTML, whitespace text nodes cannot be a child of <(.+?)>\. Make sure you don't have any extra whitespace between tags on each line of your source code\.\nThis will cause a hydration error\./
    ];
    function eJ(e) {
        return eY.some(function(n) {
            return n.test(e);
        });
    }
    var e0 = [
        "https://nextjs.org",
        "https://react.dev"
    ];
    function e1(e) {
        return e0.some(function(n) {
            return e.startsWith(n);
        });
    }
    function e2(e) {
        var n = function(e) {
            var n, t, r, o = (n = e, t = e1, r = Array.from(n.matchAll(/https?:\/\/[^\s/$.?#].[^\s)'"]*/gi), function(e) {
                return e[0];
            }), t ? r.filter(function(e) {
                return t(e);
            }) : r);
            if (0 === o.length) return null;
            var a = o[0];
            return a === eG ? eK : a;
        }(e.errorMessage);
        return n ? (0, r.jsx)("a", {
            title: "Go to related documentation",
            "aria-label": "Go to related documentation",
            className: "docs-link-button",
            href: n,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, r.jsx)(e3, {
                className: "error-overlay-toolbar-button-icon",
                width: 14,
                height: 14
            })
        }) : (0, r.jsx)("button", {
            title: "No related documentation found",
            "aria-label": "No related documentation found",
            className: "docs-link-button",
            disabled: !0,
            children: (0, r.jsx)(e3, {
                className: "error-overlay-toolbar-button-icon",
                width: 14,
                height: 14
            })
        });
    }
    function e3(e) {
        var n, t;
        return (0, r.jsx)("svg", (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), t = t = {
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 .875h4.375C5.448.875 6.401 1.39 7 2.187A3.276 3.276 0 0 1 9.625.875H14v11.156H9.4c-.522 0-1.023.208-1.392.577l-.544.543h-.928l-.544-.543c-.369-.37-.87-.577-1.392-.577H0V.875zm6.344 3.281a1.969 1.969 0 0 0-1.969-1.968H1.312v8.53H4.6c.622 0 1.225.177 1.744.502V4.156zm1.312 7.064V4.156c0-1.087.882-1.968 1.969-1.968h3.063v8.53H9.4c-.622 0-1.225.177-1.744.502z",
                fill: "currentColor"
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function e4(e) {
        var n, t;
        return (0, r.jsx)("svg", (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor"
        }, e), t = t = {
            children: (0, r.jsx)("path", {
                d: "M4.30969 8.37891H2.38782C2.9805 10.3647 4.82188 11.8124 7.00012 11.8125C8.81977 11.8124 10.4043 10.8024 11.2228 9.30957L11.5382 8.73438L12.6896 9.36523L12.3741 9.94043L12.1681 10.2891C11.0815 11.993 9.17324 13.1249 7.00012 13.125C4.42207 13.1249 2.21747 11.5322 1.3136 9.27734V11.375H0.00109863V7.72266L0.0147705 7.58984C0.0760304 7.29089 0.340278 7.06641 0.657349 7.06641H4.30969V8.37891ZM7.00012 0.875C9.57685 0.875118 11.7819 2.46569 12.6866 4.71875V2.625H13.9991V6.27734C13.9991 6.63974 13.7053 6.93354 13.3429 6.93359H9.68958V5.62109H11.6115C11.0186 3.6356 9.17813 2.18763 7.00012 2.1875C5.17131 2.18757 3.57959 3.20771 2.76477 4.71289L2.45227 5.29004L1.29797 4.66504L1.61047 4.08789C2.64547 2.17605 4.67052 0.875068 7.00012 0.875Z",
                fill: "#A35200"
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function e5(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function e6(e) {
        var n, t, a = e.error, l = (n = (0, o.useState)(!1), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return e5(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return e5(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), i = l[0], s = l[1];
        return ((0, o.useEffect)(function() {
            var e = "__next_error_overlay:".concat(window.location.pathname, ":").concat(a.message);
            s("1" === sessionStorage.getItem(e));
            var n = function() {
                sessionStorage.setItem(e, "1");
            };
            return window.addEventListener("beforeunload", n), function() {
                window.removeEventListener("beforeunload", n);
            };
        }, [
            a.message
        ]), i) ? (0, r.jsxs)("button", {
            className: "restart-dev-server-button",
            onClick: function() {
                var e = "/__nextjs_restart_dev";
                ("TURBOPACK compile-time value", false) && (e = "/__nextjs_restart_dev?invalidatePersistentCache"), fetch(e, {
                    method: "POST"
                }).then(function() {});
            },
            title: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Restarts the development server without needing to leave the browser.",
            children: [
                (0, r.jsx)(e4, {
                    width: 14,
                    height: 14
                }),
                "Restart Dev Server"
            ]
        }) : null;
    }
    function e8(e) {
        var n = e.error, t = e.debugInfo;
        return (0, r.jsxs)("span", {
            className: "error-overlay-toolbar",
            children: [
                (0, r.jsx)(e6, {
                    error: n
                }),
                (0, r.jsx)(eB, {
                    error: n
                }),
                (0, r.jsx)(e2, {
                    errorMessage: n.message
                }),
                (0, r.jsx)(eV, {
                    devtoolsFrontendUrl: null == t ? void 0 : t.devtoolsFrontendUrl
                })
            ]
        });
    }
    function e9(e) {
        var n, t;
        return (0, r.jsx)("svg", (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "thumbs-up-icon"
        }, e), t = t = {
            children: (0, r.jsx)("g", {
                id: "thumb-up-16",
                children: (0, r.jsx)("path", {
                    id: "Union",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.89531 2.23959C6.72984 2.1214 6.5 2.23968 6.5 2.44303V5.24989C6.5 6.21639 5.7165 6.99989 4.75 6.99989H2.5V13.4999H12.1884C12.762 13.4999 13.262 13.1095 13.4011 12.5531L14.4011 8.55306C14.5984 7.76412 14.0017 6.99989 13.1884 6.99989H9.25H8.5V6.24989V3.51446C8.5 3.43372 8.46101 3.35795 8.39531 3.31102L6.89531 2.23959ZM5 2.44303C5 1.01963 6.6089 0.191656 7.76717 1.01899L9.26717 2.09042C9.72706 2.41892 10 2.94929 10 3.51446V5.49989H13.1884C14.9775 5.49989 16.2903 7.18121 15.8563 8.91686L14.8563 12.9169C14.5503 14.1411 13.4503 14.9999 12.1884 14.9999H1.75H1V14.2499V6.24989V5.49989H1.75H4.75C4.88807 5.49989 5 5.38796 5 5.24989V2.44303Z",
                    fill: "currentColor"
                })
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function e7(e) {
        var n, t;
        return (0, r.jsx)("svg", (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "thumbs-down-icon"
        }, e), t = t = {
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.89531 12.7603C5.72984 12.8785 5.5 12.7602 5.5 12.5569V9.75C5.5 8.7835 4.7165 8 3.75 8H1.5V1.5H11.1884C11.762 1.5 12.262 1.89037 12.4011 2.44683L13.4011 6.44683C13.5984 7.23576 13.0017 8 12.1884 8H8.25H7.5V8.75V11.4854C7.5 11.5662 7.46101 11.6419 7.39531 11.6889L5.89531 12.7603ZM4 12.5569C4 13.9803 5.6089 14.8082 6.76717 13.9809L8.26717 12.9095C8.72706 12.581 9 12.0506 9 11.4854V9.5H12.1884C13.9775 9.5 15.2903 7.81868 14.8563 6.08303L13.8563 2.08303C13.5503 0.858816 12.4503 0 11.1884 0H0.75H0V0.75V8.75V9.5H0.75H3.75C3.88807 9.5 4 9.61193 4 9.75V12.5569Z",
                fill: "currentColor"
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function ne(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function nn(e, n, t, r, o, a, l) {
        try {
            var i = e[a](l), s = i.value;
        } catch (e) {
            t(e);
            return;
        }
        i.done ? n(s) : Promise.resolve(s).then(r, o);
    }
    function nt(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e;
    }
    function nr(e) {
        var n, t, a = e.errorCode, l = e.className, i = (n = (0, o.useState)({}), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return ne(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ne(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), s = i[0], c = i[1], u = s[a], d = ("TURBOPACK compile-time value", false), f = (0, o.useCallback)(function(e) {
            var n;
            return (n = function() {
                return function(e, n) {
                    var t, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: []
                    }, l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return l.next = i(0), l.throw = i(1), l.return = i(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this;
                    }), l;
                    //TURBOPACK unreachable
                    ;
                    function i(i) {
                        return function(s) {
                            var c = [
                                i,
                                s
                            ];
                            if (t) throw TypeError("Generator is already executing.");
                            for(; l && (l = 0, c[0] && (a = 0)), a;)try {
                                if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                switch(r = 0, o && (c = [
                                    2 & c[0],
                                    o.value
                                ]), c[0]){
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = c[1], c = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        c = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break;
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1], o = c;
                                            break;
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(c);
                                            break;
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                }
                                c = n.call(e, a);
                            } catch (e) {
                                c = [
                                    6,
                                    e
                                ], r = 0;
                            } finally{
                                t = o = 0;
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            };
                        };
                    }
                }(this, function(n) {
                    switch(n.label){
                        case 0:
                            c(function(n) {
                                var t, r;
                                return t = function(e) {
                                    for(var n = 1; n < arguments.length; n++){
                                        var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }))), r.forEach(function(n) {
                                            nt(e, n, t[n]);
                                        });
                                    }
                                    return e;
                                }({}, n), r = null != (r = nt({}, a, e)) ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, r);
                                    }
                                    return t;
                                })(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                }), t;
                            }), n.label = 1;
                        case 1:
                            return n.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]), [
                                4,
                                fetch("".concat(("TURBOPACK compile-time value", "") || "", "/__nextjs_error_feedback?").concat(new URLSearchParams({
                                    errorCode: a,
                                    wasHelpful: e.toString()
                                })))
                            ];
                        case 2:
                            return n.sent().ok || console.error("Failed to record feedback on the server."), [
                                3,
                                4
                            ];
                        case 3:
                            return console.error("Failed to record feedback:", n.sent()), [
                                3,
                                4
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            }, function() {
                var e = this, t = arguments;
                return new Promise(function(r, o) {
                    var a = n.apply(e, t);
                    function l(e) {
                        nn(a, r, o, l, i, "next", e);
                    }
                    function i(e) {
                        nn(a, r, o, l, i, "throw", e);
                    }
                    l(void 0);
                });
            })();
        }, [
            a
        ]);
        return (0, r.jsx)("div", {
            className: eC("error-feedback", l),
            role: "region",
            "aria-label": "Error feedback",
            children: void 0 !== u ? (0, r.jsx)("p", {
                className: "error-feedback-thanks",
                role: "status",
                "aria-live": "polite",
                children: "Thanks for your feedback!"
            }) : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("p", {
                        children: (0, r.jsx)("a", {
                            href: "https://nextjs.org/telemetry#error-feedback",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "Was this helpful?"
                        })
                    }),
                    (0, r.jsx)("button", {
                        "aria-disabled": ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0,
                        "aria-label": "Mark as helpful",
                        onClick: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function() {
                            return f(!0);
                        },
                        className: eC("feedback-button", !0 === u && "voted"),
                        title: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0,
                        type: "button",
                        children: (0, r.jsx)(e9, {
                            "aria-hidden": "true"
                        })
                    }),
                    (0, r.jsx)("button", {
                        "aria-disabled": ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0,
                        "aria-label": "Mark as not helpful",
                        onClick: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function() {
                            return f(!1);
                        },
                        className: eC("feedback-button", !1 === u && "voted"),
                        title: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0,
                        type: "button",
                        children: (0, r.jsx)(e7, {
                            "aria-hidden": "true",
                            style: {
                                translate: "1px 1px"
                            }
                        })
                    })
                ]
            })
        });
    }
    function no(e) {
        var n = e.errorCode;
        return (0, r.jsx)("footer", {
            className: "error-overlay-footer",
            children: n ? (0, r.jsx)(nr, {
                className: "error-feedback",
                errorCode: n
            }) : null
        });
    }
    var na = "\n  .error-overlay-footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    gap: 8px;\n    padding: 12px;\n    background: var(--color-background-200);\n    border-top: 1px solid var(--color-gray-400);\n  }\n\n  .error-feedback {\n    margin-left: auto;\n\n    p {\n      font-size: var(--size-14);\n      font-weight: 500;\n      margin: 0;\n    }\n  }\n\n  ".concat("\n  .error-feedback {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    white-space: nowrap;\n    color: var(--color-gray-900);\n  }\n\n  .error-feedback-thanks {\n    height: var(--size-24);\n    display: flex;\n    align-items: center;\n    padding-right: 4px; /* To match the 4px inner padding of the thumbs up and down icons */\n  }\n\n  .feedback-button {\n    background: none;\n    border: none;\n    border-radius: var(--rounded-md);\n    width: var(--size-24);\n    height: var(--size-24);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n\n    &:hover {\n      background: var(--color-gray-alpha-100);\n    }\n\n    &:active {\n      background: var(--color-gray-alpha-200);\n    }\n  }\n\n  .feedback-button[aria-disabled='true'] {\n    opacity: 0.7;\n    cursor: not-allowed;\n  }\n\n  .feedback-button.voted {\n    background: var(--color-gray-alpha-200);\n  }\n\n  .thumbs-up-icon,\n  .thumbs-down-icon {\n    color: var(--color-gray-900);\n    width: var(--size-16);\n    height: var(--size-16);\n  }\n", "\n");
    function nl(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function ni(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return nl(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nl(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function ns(e) {
        var n = e.errorMessage, t = ni((0, o.useState)(!1), 2), a = t[0], l = t[1], i = ni((0, o.useState)(!1), 2), s = i[0], c = i[1], u = (0, o.useRef)(null);
        return (0, o.useLayoutEffect)(function() {
            u.current && c(u.current.scrollHeight > 200);
        }, [
            n
        ]), (0, r.jsxs)("div", {
            className: "nextjs__container_errors_wrapper",
            children: [
                (0, r.jsx)("p", {
                    ref: u,
                    id: "nextjs__container_errors_desc",
                    className: "nextjs__container_errors_desc ".concat(s && !a ? "truncated" : ""),
                    children: n
                }),
                s && !a && (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: "nextjs__container_errors_gradient_overlay"
                        }),
                        (0, r.jsx)("button", {
                            onClick: function() {
                                return l(!0);
                            },
                            className: "nextjs__container_errors_expand_button",
                            "aria-expanded": a,
                            "aria-controls": "nextjs__container_errors_desc",
                            children: "Show More"
                        })
                    ]
                })
            ]
        });
    }
    function nc(e) {
        var n = e.errorType;
        return (0, r.jsx)("span", {
            id: "nextjs__container_errors_label",
            className: "nextjs__container_errors_label",
            children: n
        });
    }
    function nu(e) {
        var n = e.title, t = e.className;
        return (0, r.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-label": n,
            className: t,
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.24996 12.0608L8.71963 11.5304L5.89641 8.70722C5.50588 8.3167 5.50588 7.68353 5.89641 7.29301L8.71963 4.46978L9.24996 3.93945L10.3106 5.00011L9.78029 5.53044L7.31062 8.00011L9.78029 10.4698L10.3106 11.0001L9.24996 12.0608Z",
                fill: "currentColor"
            })
        });
    }
    function nd(e) {
        var n = e.title, t = e.className;
        return (0, r.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            "aria-label": n,
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.75011 3.93945L7.28044 4.46978L10.1037 7.29301C10.4942 7.68353 10.4942 8.3167 10.1037 8.70722L7.28044 11.5304L6.75011 12.0608L5.68945 11.0001L6.21978 10.4698L8.68945 8.00011L6.21978 5.53044L5.68945 5.00011L6.75011 3.93945Z",
                fill: "currentColor"
            })
        });
    }
    function nf(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function np(e) {
        var n, t, a = e.runtimeErrors, l = e.activeIdx, i = e.onActiveIndexChange, s = (0, o.useCallback)(function() {
            return (0, o.startTransition)(function() {
                l > 0 && i(Math.max(0, l - 1));
            });
        }, [
            l,
            i
        ]), c = (0, o.useCallback)(function() {
            return (0, o.startTransition)(function() {
                l < a.length - 1 && i(Math.max(0, Math.min(a.length - 1, l + 1)));
            });
        }, [
            l,
            a.length,
            i
        ]), u = (0, o.useRef)(null), d = (0, o.useRef)(null), f = (n = (0, o.useState)(null), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return nf(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nf(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), p = f[0], h = f[1], m = (0, o.useCallback)(function(e) {
            h(e);
        }, []);
        return (0, o.useEffect)(function() {
            var e = function(e) {
                "ArrowLeft" === e.key ? (e.preventDefault(), e.stopPropagation(), s && s()) : "ArrowRight" === e.key && (e.preventDefault(), e.stopPropagation(), c && c());
            };
            if (null != p) {
                var n = p.getRootNode(), t = self.document;
                return n.addEventListener("keydown", e), n !== t && t.addEventListener("keydown", e), function() {
                    n.removeEventListener("keydown", e), n !== t && t.removeEventListener("keydown", e);
                };
            }
        }, [
            p,
            c,
            s
        ]), (0, o.useEffect)(function() {
            if (null != p) {
                var e, n, t = p.getRootNode();
                if (e = t, null != (n = ShadowRoot) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : e instanceof n) {
                    var r = t.activeElement;
                    0 === l ? u.current && r === u.current && u.current.blur() : l === a.length - 1 && d.current && r === d.current && d.current.blur();
                }
            }
        }, [
            p,
            l,
            a.length
        ]), (0, r.jsxs)("nav", {
            className: "error-overlay-pagination dialog-exclude-closing-from-outside-click",
            ref: m,
            children: [
                (0, r.jsx)("button", {
                    ref: u,
                    type: "button",
                    disabled: 0 === l,
                    "aria-disabled": 0 === l,
                    onClick: s,
                    "data-nextjs-dialog-error-previous": !0,
                    className: "error-overlay-pagination-button",
                    children: (0, r.jsx)(nu, {
                        title: "previous",
                        className: "error-overlay-pagination-button-icon"
                    })
                }),
                (0, r.jsxs)("div", {
                    className: "error-overlay-pagination-count",
                    children: [
                        (0, r.jsxs)("span", {
                            "data-nextjs-dialog-error-index": l,
                            children: [
                                l + 1,
                                "/"
                            ]
                        }),
                        (0, r.jsx)("span", {
                            "data-nextjs-dialog-header-total-count": !0,
                            children: a.length || 1
                        })
                    ]
                }),
                (0, r.jsx)("button", {
                    ref: d,
                    type: "button",
                    disabled: l >= a.length - 1,
                    "aria-disabled": l >= a.length - 1,
                    onClick: c,
                    "data-nextjs-dialog-error-next": !0,
                    className: "error-overlay-pagination-button",
                    children: (0, r.jsx)(nd, {
                        title: "next",
                        className: "error-overlay-pagination-button-icon"
                    })
                })
            ]
        });
    }
    function nh(e) {
        var n = e.versionInfo, t = e.bundlerName, o = n.staleness, a = function(e) {
            var n = e.installed, t = e.staleness, r = e.expected, o = "", a = "", l = "", i = "Next.js ".concat(n);
            switch(t){
                case "newer-than-npm":
                case "fresh":
                    o = i, a = "Latest available version is detected (".concat(n, ")."), l = "fresh";
                    break;
                case "stale-patch":
                case "stale-minor":
                    o = "".concat(i, " (stale)"), a = "There is a newer version (".concat(r, ") available, upgrade recommended! "), l = "stale";
                    break;
                case "stale-major":
                    o = "".concat(i, " (outdated)"), a = "An outdated version detected (latest is ".concat(r, "), upgrade is highly recommended!"), l = "outdated";
                    break;
                case "stale-prerelease":
                    o = "".concat(i, " (stale)"), a = "There is a newer canary version (".concat(r, ") available, please upgrade! "), l = "stale";
                    break;
                case "unknown":
                    o = "".concat(i, " (unknown)"), a = "No Next.js version data was found.", l = "unknown";
            }
            return {
                text: o,
                indicatorClass: l,
                title: a
            };
        }(n), l = a.text, i = a.indicatorClass, s = a.title, c = "Turbopack" === t;
        return o.startsWith("stale") ? (0, r.jsxs)("a", {
            className: "nextjs-container-build-error-version-status dialog-exclude-closing-from-outside-click",
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://nextjs.org/docs/messages/version-staleness",
            children: [
                (0, r.jsx)(nm, {
                    className: eC("version-staleness-indicator", i)
                }),
                (0, r.jsx)("span", {
                    "data-nextjs-version-checker": !0,
                    title: s,
                    children: l
                }),
                (0, r.jsx)("span", {
                    className: eC(c && "turbopack-text"),
                    children: t
                })
            ]
        }) : (0, r.jsxs)("span", {
            className: "nextjs-container-build-error-version-status dialog-exclude-closing-from-outside-click",
            children: [
                (0, r.jsx)(nm, {
                    className: eC("version-staleness-indicator", i)
                }),
                (0, r.jsx)("span", {
                    "data-nextjs-version-checker": !0,
                    title: s,
                    children: l
                }),
                (0, r.jsx)("span", {
                    className: eC(c && "turbopack-text"),
                    children: t
                })
            ]
        });
    }
    function nm(e) {
        var n = e.className;
        return (0, r.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("circle", {
                className: n,
                cx: "7",
                cy: "7",
                r: "5.5",
                strokeWidth: "3"
            })
        });
    }
    function ng(e) {
        var n = e.runtimeErrors, t = e.activeIdx, o = e.setActiveIndex, a = e.versionInfo, l = ("TURBOPACK compile-time value", "Turbopack") || "Webpack";
        return (0, r.jsxs)("div", {
            "data-nextjs-error-overlay-nav": !0,
            children: [
                (0, r.jsx)(nb, {
                    side: "left",
                    children: (0, r.jsx)(np, {
                        runtimeErrors: null != n ? n : [],
                        activeIdx: null != t ? t : 0,
                        onActiveIndexChange: null != o ? o : function() {}
                    })
                }),
                a && (0, r.jsx)(nb, {
                    side: "right",
                    children: (0, r.jsx)(nh, {
                        versionInfo: a,
                        bundlerName: l
                    })
                })
            ]
        });
    }
    function nb(e) {
        var n = e.children, t = e.side;
        return (0, r.jsxs)("div", {
            className: "error-overlay-notch",
            "data-side": void 0 === t ? "left" : t,
            children: [
                n,
                (0, r.jsx)(nv, {})
            ]
        });
    }
    function nv() {
        return (0, r.jsxs)("svg", {
            width: "60",
            height: "42",
            viewBox: "0 0 60 42",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "error-overlay-notch-tail",
            preserveAspectRatio: "none",
            children: [
                (0, r.jsxs)("mask", {
                    id: "error_overlay_nav_mask0_2667_14687",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "-1",
                    width: "60",
                    height: "43",
                    children: [
                        (0, r.jsxs)("mask", {
                            id: "error_overlay_nav_path_1_outside_1_2667_14687",
                            maskUnits: "userSpaceOnUse",
                            x: "0",
                            y: "-1",
                            width: "60",
                            height: "43",
                            fill: "black",
                            children: [
                                (0, r.jsx)("rect", {
                                    fill: "white",
                                    y: "-1",
                                    width: "60",
                                    height: "43"
                                }),
                                (0, r.jsx)("path", {
                                    d: "M1 0L8.0783 0C15.772 0 22.7836 4.41324 26.111 11.3501L34.8889 29.6498C38.2164 36.5868 45.228 41 52.9217 41H60H1L1 0Z"
                                })
                            ]
                        }),
                        (0, r.jsx)("path", {
                            d: "M1 0L8.0783 0C15.772 0 22.7836 4.41324 26.111 11.3501L34.8889 29.6498C38.2164 36.5868 45.228 41 52.9217 41H60H1L1 0Z",
                            fill: "white"
                        }),
                        (0, r.jsx)("path", {
                            d: "M1 0V-1H0V0L1 0ZM1 41H0V42H1V41ZM34.8889 29.6498L33.9873 30.0823L34.8889 29.6498ZM26.111 11.3501L27.0127 10.9177L26.111 11.3501ZM1 1H8.0783V-1H1V1ZM60 40H1V42H60V40ZM2 41V0L0 0L0 41H2ZM25.2094 11.7826L33.9873 30.0823L35.7906 29.2174L27.0127 10.9177L25.2094 11.7826ZM52.9217 42H60V40H52.9217V42ZM33.9873 30.0823C37.4811 37.3661 44.8433 42 52.9217 42V40C45.6127 40 38.9517 35.8074 35.7906 29.2174L33.9873 30.0823ZM8.0783 1C15.3873 1 22.0483 5.19257 25.2094 11.7826L27.0127 10.9177C23.5188 3.6339 16.1567 -1 8.0783 -1V1Z",
                            fill: "black",
                            mask: "url(#error_overlay_nav_path_1_outside_1_2667_14687)"
                        })
                    ]
                }),
                (0, r.jsxs)("g", {
                    mask: "url(#error_overlay_nav_mask0_2667_14687)",
                    children: [
                        (0, r.jsxs)("mask", {
                            id: "error_overlay_nav_path_3_outside_2_2667_14687",
                            maskUnits: "userSpaceOnUse",
                            x: "-1",
                            y: "0.0244141",
                            width: "60",
                            height: "43",
                            fill: "black",
                            children: [
                                (0, r.jsx)("rect", {
                                    fill: "white",
                                    x: "-1",
                                    y: "0.0244141",
                                    width: "60",
                                    height: "43"
                                }),
                                (0, r.jsx)("path", {
                                    d: "M0 1.02441H7.0783C14.772 1.02441 21.7836 5.43765 25.111 12.3746L33.8889 30.6743C37.2164 37.6112 44.228 42.0244 51.9217 42.0244H59H0L0 1.02441Z"
                                })
                            ]
                        }),
                        (0, r.jsx)("path", {
                            d: "M0 1.02441H7.0783C14.772 1.02441 21.7836 5.43765 25.111 12.3746L33.8889 30.6743C37.2164 37.6112 44.228 42.0244 51.9217 42.0244H59H0L0 1.02441Z",
                            fill: "var(--background-color)"
                        }),
                        (0, r.jsx)("path", {
                            d: "M0 1.02441L0 0.0244141H-1V1.02441H0ZM0 42.0244H-1V43.0244H0L0 42.0244ZM33.8889 30.6743L32.9873 31.1068L33.8889 30.6743ZM25.111 12.3746L26.0127 11.9421L25.111 12.3746ZM0 2.02441H7.0783V0.0244141H0L0 2.02441ZM59 41.0244H0L0 43.0244H59V41.0244ZM1 42.0244L1 1.02441H-1L-1 42.0244H1ZM24.2094 12.8071L32.9873 31.1068L34.7906 30.2418L26.0127 11.9421L24.2094 12.8071ZM51.9217 43.0244H59V41.0244H51.9217V43.0244ZM32.9873 31.1068C36.4811 38.3905 43.8433 43.0244 51.9217 43.0244V41.0244C44.6127 41.0244 37.9517 36.8318 34.7906 30.2418L32.9873 31.1068ZM7.0783 2.02441C14.3873 2.02441 21.0483 6.21699 24.2094 12.8071L26.0127 11.9421C22.5188 4.65831 15.1567 0.0244141 7.0783 0.0244141V2.02441Z",
                            fill: "var(--stroke-color)",
                            mask: "url(#error_overlay_nav_path_3_outside_2_2667_14687)"
                        })
                    ]
                })
            ]
        });
    }
    function ny(e) {
        var n, t, o = e.children, a = e.onClose, l = e.footer, i = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "children",
            "onClose",
            "footer"
        ]);
        return (0, r.jsxs)("div", {
            className: "error-overlay-dialog-container",
            children: [
                (0, r.jsx)(ek, (n = function(e) {
                    for(var n = 1; n < arguments.length; n++){
                        var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }))), r.forEach(function(n) {
                            var r, o, a;
                            r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = a;
                        });
                    }
                    return e;
                }({
                    "aria-labelledby": "nextjs__container_errors_label",
                    "aria-describedby": "nextjs__container_errors_desc",
                    className: "error-overlay-dialog-scroll",
                    onClose: a
                }, i), t = t = {
                    children: o
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, r);
                    }
                    return t;
                })(Object(t)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                }), n)),
                l
            ]
        });
    }
    function nx(e) {
        var n = e.children;
        return (0, r.jsx)(e_, {
            className: "nextjs-container-errors-header",
            children: n
        });
    }
    function nw(e) {
        var n = e.children;
        return (0, r.jsx)(eO, {
            className: "nextjs-container-errors-body",
            children: n
        });
    }
    var nj = function(e) {
        var n, t = e.frame, o = null != (n = t.originalStackFrame) ? n : t.sourceStackFrame, a = !!t.originalCodeFrame, l = eo(a ? {
            file: o.file,
            lineNumber: o.lineNumber,
            column: o.column
        } : void 0), i = er(o);
        return i ? (0, r.jsxs)("div", {
            "data-nextjs-call-stack-frame": !0,
            "data-nextjs-call-stack-frame-no-source": !a,
            "data-nextjs-call-stack-frame-ignored": t.ignored,
            children: [
                (0, r.jsxs)("div", {
                    className: "call-stack-frame-method-name",
                    children: [
                        (0, r.jsx)(Q, {
                            text: o.methodName
                        }),
                        a && (0, r.jsx)("button", {
                            onClick: l,
                            className: "open-in-editor-button",
                            "aria-label": "Open ".concat(o.methodName, " in editor"),
                            children: (0, r.jsx)(ei, {
                                width: 16,
                                height: 16
                            })
                        }),
                        t.error ? (0, r.jsx)("button", {
                            className: "source-mapping-error-button",
                            onClick: function() {
                                return console.error(t.reason);
                            },
                            title: "Sourcemapping failed. Click to log cause of error.",
                            children: (0, r.jsx)(es, {
                                width: 16,
                                height: 16
                            })
                        }) : null
                    ]
                }),
                (0, r.jsx)("span", {
                    className: "call-stack-frame-file-source",
                    "data-has-source": a,
                    children: i
                })
            ]
        }) : null;
    };
    function nk(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function nO(e) {
        var n, t, a = e.frames, l = e.dialogResizerRef, i = (0, o.useRef)(NaN), s = (n = (0, o.useState)(!1), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return nk(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nk(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), c = s[0], u = s[1], d = (0, o.useMemo)(function() {
            return a.reduce(function(e, n) {
                return e + +!!n.ignored;
            }, 0);
        }, [
            a
        ]);
        return (0, r.jsxs)("div", {
            className: "error-overlay-call-stack-container",
            children: [
                (0, r.jsxs)("div", {
                    className: "error-overlay-call-stack-header",
                    children: [
                        (0, r.jsxs)("p", {
                            className: "error-overlay-call-stack-title",
                            children: [
                                "Call Stack",
                                " ",
                                (0, r.jsx)("span", {
                                    className: "error-overlay-call-stack-count",
                                    children: a.length
                                })
                            ]
                        }),
                        d > 0 && (0, r.jsxs)("button", {
                            "data-expand-ignore-button": c,
                            className: "error-overlay-call-stack-ignored-list-toggle-button",
                            onClick: function() {
                                var e = null == l ? void 0 : l.current;
                                if (e) {
                                    var n = (null == e ? void 0 : e.getBoundingClientRect()).height;
                                    i.current || (i.current = n), c ? (e.style.height = "".concat(i.current, "px"), e.addEventListener("transitionend", function n() {
                                        e.removeEventListener("transitionend", n), u(!1);
                                    })) : u(!0);
                                }
                            },
                            children: [
                                "".concat(c ? "Hide" : "Show", " ").concat(d, " ignore-listed frame(s)"),
                                (0, r.jsx)(nS, {})
                            ]
                        })
                    ]
                }),
                a.map(function(e, n) {
                    return !e.ignored || c ? (0, r.jsx)(nj, {
                        frame: e
                    }, n) : null;
                })
            ]
        });
    }
    function nS() {
        return (0, r.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.70722 2.39641C8.3167 2.00588 7.68353 2.00588 7.29301 2.39641L4.46978 5.21963L3.93945 5.74996L5.00011 6.81062L5.53044 6.28029L8.00011 3.81062L10.4698 6.28029L11.0001 6.81062L12.0608 5.74996L11.5304 5.21963L8.70722 2.39641ZM5.53044 9.71963L5.00011 9.1893L3.93945 10.25L4.46978 10.7803L7.29301 13.6035C7.68353 13.994 8.3167 13.994 8.70722 13.6035L11.5304 10.7803L12.0608 10.25L11.0001 9.1893L10.4698 9.71963L8.00011 12.1893L5.53044 9.71963Z",
                fill: "currentColor"
            })
        });
    }
    var n_ = 0, nC = function(e) {
        var a, l, i = e.className, s = e.children, c = e.fixed, u = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "className",
            "children",
            "fixed"
        ]);
        return o.useEffect({
            "nC.useEffect": function() {
                return setTimeout({
                    "nC.useEffect": function() {
                        if (!(n_++ > 0)) {
                            var e = window.innerWidth - document.documentElement.clientWidth;
                            e > 0 && (n = document.body.style.paddingRight, document.body.style.paddingRight = "".concat(e, "px")), t = document.body.style.overflow, document.body.style.overflow = "hidden";
                        }
                    }
                }["nC.useEffect"]), ({
                    "nC.useEffect": function() {
                        setTimeout({
                            "nC.useEffect": function() {
                                0 !== n_ && 0 == --n_ && (void 0 !== n && (document.body.style.paddingRight = n, n = void 0), void 0 !== t && (document.body.style.overflow = t, t = void 0));
                            }
                        }["nC.useEffect"]);
                    }
                })["nC.useEffect"];
            }
        }["nC.useEffect"], []), (0, r.jsxs)("div", (a = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            "data-nextjs-dialog-overlay": !0,
            className: i
        }, u), l = l = {
            children: [
                (0, r.jsx)("div", {
                    "data-nextjs-dialog-backdrop": !0,
                    "data-nextjs-dialog-backdrop-fixed": !!c || void 0
                }),
                s
            ]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(l)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
        }), a));
    };
    function nE(e) {
        var n, t, o = e.children, a = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "children"
        ]);
        return (0, r.jsx)(nC, (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({}, a), t = t = {
            children: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function nP(e) {
        var n = Math.min(e.errorCount - e.activeIdx - 1, 2);
        return (0, r.jsx)("div", {
            "aria-hidden": !0,
            className: "error-overlay-bottom-stack",
            children: (0, r.jsxs)("div", {
                className: "error-overlay-bottom-stack-stack",
                "data-stack-count": n,
                children: [
                    (0, r.jsx)("div", {
                        className: "error-overlay-bottom-stack-layer error-overlay-bottom-stack-layer-1",
                        children: "1"
                    }),
                    (0, r.jsx)("div", {
                        className: "error-overlay-bottom-stack-layer error-overlay-bottom-stack-layer-2",
                        children: "2"
                    })
                ]
            })
        });
    }
    function nN(e) {
        var n = e.environmentName;
        return (0, r.jsx)("span", {
            "data-nextjs-environment-name-label": !0,
            children: n
        });
    }
    function nz(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function nL(e, n, t, r) {
        (0, o.useEffect)(function() {
            var o = function(e) {
                if ("Tab" === e.key && null !== a) {
                    var n, t, r, o, l = (r = (t = (n = a).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')) ? [
                        t[0],
                        t[t.length - 1]
                    ] : [], o = 2, function(e) {
                        if (Array.isArray(e)) return e;
                    }(r) || function(e, n) {
                        var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var a = [], l = !0, i = !1;
                            try {
                                for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                            } catch (e) {
                                i = !0, r = e;
                            } finally{
                                try {
                                    l || null == o.return || o.return();
                                } finally{
                                    if (i) throw r;
                                }
                            }
                            return a;
                        }
                    }(r, 2) || function(e, n) {
                        if (e) {
                            if ("string" == typeof e) return nz(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nz(e, n);
                        }
                    }(r, o) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }()), i = l[0], s = l[1], c = nT(a);
                    e.shiftKey ? c === i && (null == s || s.focus(), e.preventDefault()) : c === s && (null == i || i.focus(), e.preventDefault());
                }
            }, a = null, l = setTimeout(function() {
                if (a = e.current, t) r ? r() : null == a || a.focus(), null == a || a.addEventListener("keydown", o);
                else {
                    var l, i = nT(a);
                    n && (null == a ? void 0 : a.contains(i)) && (null == (l = n.current) || l.focus());
                }
            });
            return function() {
                clearTimeout(l), null == a || a.removeEventListener("keydown", o);
            };
        }, [
            t
        ]);
    }
    function nT(e) {
        var n, t, r = null == e ? void 0 : e.getRootNode();
        return (n = r, null != (t = ShadowRoot) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](n) : n instanceof t) ? null == r ? void 0 : r.activeElement : null;
    }
    function nD(e, n, t, r) {
        (0, o.useEffect)(function() {
            var o = function(t) {
                var o, a;
                null != (o = e.current) && o.getBoundingClientRect() && t.clientX >= e.current.getBoundingClientRect().left && t.clientX <= e.current.getBoundingClientRect().right && t.clientY >= e.current.getBoundingClientRect().top && t.clientY <= e.current.getBoundingClientRect().bottom || null != (a = n.current) && a.getBoundingClientRect() && t.clientX >= n.current.getBoundingClientRect().left && t.clientX <= n.current.getBoundingClientRect().right && t.clientY >= n.current.getBoundingClientRect().top && t.clientY <= n.current.getBoundingClientRect().bottom || r();
            }, a = function(e) {
                "Escape" === e.key && r();
            };
            if (t) return document.addEventListener("mousedown", o), document.addEventListener("keydown", a), function() {
                document.removeEventListener("mousedown", o), document.removeEventListener("keydown", a);
            };
        }, [
            t
        ]);
    }
    var nA = (0, o.forwardRef)(function(e, n) {
        var t = e.stop, o = e.blur, a = e.side, l = e.style, i = e.height;
        return (0, r.jsx)("div", {
            ref: n,
            "aria-hidden": !0,
            "data-nextjs-scroll-fader": !0,
            className: "nextjs-scroll-fader",
            "data-side": a,
            style: function(e) {
                for(var n = 1; n < arguments.length; n++){
                    var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }))), r.forEach(function(n) {
                        var r, o, a;
                        r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a;
                    });
                }
                return e;
            }({
                "--stop": t,
                "--blur": o,
                "--height": "".concat(i, "px")
            }, l)
        });
    });
    function nR(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function nI(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return nR(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nR(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    var nM = (0, o.forwardRef)(function(e, n) {
        var t, a, l, i, s, c, u, d, f, p, h = e.children, m = e.measure, g = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "children",
            "measure"
        ]), b = (0, o.useRef)(null), v = nI((t = b, a = m, i = (l = nI((0, o.useState)(0), 2))[0], s = l[1], u = (c = nI((0, o.useState)(!0), 2))[0], d = c[1], (0, o.useEffect)(function() {
            if (a) {
                var e, n = t.current;
                if (n) {
                    var r = new ResizeObserver(function(n) {
                        var t = nI(n, 1)[0].contentRect;
                        clearTimeout(e), e = window.setTimeout(function() {
                            d(!1);
                        }, 100), s(t.height);
                    });
                    return r.observe(n), function() {
                        return r.disconnect();
                    };
                }
            }
        }, [
            a
        ]), [
            i,
            u
        ]), 2), y = v[0], x = v[1];
        return (0, r.jsx)("div", (f = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({}, g), p = p = {
            ref: n,
            style: {
                height: x ? "auto" : y,
                transition: "height 250ms var(--timing-swift)"
            },
            children: (0, r.jsx)("div", {
                ref: b,
                children: h
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(p)).forEach(function(e) {
            Object.defineProperty(f, e, Object.getOwnPropertyDescriptor(p, e));
        }), f));
    });
    function nF(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function nH(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function nU(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function nV(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return nF(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nF(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function nB(e) {
        var n = e.errorMessage, t = e.errorType, a = e.children, l = e.errorCode, i = e.errorCount, s = e.error, c = e.debugInfo, u = e.isBuildError, d = e.onClose, f = e.versionInfo, p = e.runtimeErrors, h = e.activeIdx, m = e.setActiveIndex, g = e.isTurbopack, b = e.dialogResizerRef, v = e.rendered, y = void 0 === v || v, x = e.transitionDurationMs, w = {
            "data-rendered": y,
            style: {
                "--transition-duration": "".concat(x, "ms")
            }
        }, j = nV(o.useState(!!x), 2), k = j[0], O = j[1], S = o.useRef(null), _ = !!l, C = o.useRef(null);
        return nL(C, null, y), (0, r.jsx)(nE, nU(nH({
            fixed: u
        }, w), {
            children: (0, r.jsxs)("div", nU(nH({
                "data-nextjs-dialog-root": !0,
                onTransitionEnd: function(e) {
                    var n = e.propertyName, t = e.target;
                    "scale" === n && t === C.current && O(!1);
                },
                ref: C
            }, w), {
                children: [
                    (0, r.jsx)(ng, {
                        runtimeErrors: p,
                        activeIdx: h,
                        setActiveIndex: m,
                        versionInfo: f,
                        isTurbopack: g
                    }),
                    (0, r.jsxs)(ny, {
                        onClose: d,
                        dialogResizerRef: b,
                        "data-has-footer": _,
                        onScroll: function(e) {
                            if (S.current) {
                                var n, t, r, o = (n = e.currentTarget.scrollTop / 17, Math.min(Math.max(n, (r = nV(t = [
                                    0,
                                    1
                                ], 2))[0]), r[1]));
                                S.current.style.opacity = String(o);
                            }
                        },
                        footer: _ && (0, r.jsx)(no, {
                            errorCode: l
                        }),
                        children: [
                            (0, r.jsx)(nM, {
                                ref: b,
                                measure: !k,
                                "data-nextjs-dialog-sizer": !0,
                                children: (0, r.jsxs)(eS, {
                                    children: [
                                        (0, r.jsxs)(nx, {
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: "nextjs__container_errors__error_title",
                                                    "data-nextjs-error-code": l,
                                                    children: [
                                                        (0, r.jsxs)("span", {
                                                            "data-nextjs-error-label-group": !0,
                                                            children: [
                                                                (0, r.jsx)(nc, {
                                                                    errorType: t
                                                                }),
                                                                s.environmentName && (0, r.jsx)(nN, {
                                                                    environmentName: s.environmentName
                                                                })
                                                            ]
                                                        }),
                                                        (0, r.jsx)(e8, {
                                                            error: s,
                                                            debugInfo: c
                                                        })
                                                    ]
                                                }),
                                                (0, r.jsx)(ns, {
                                                    errorMessage: n
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(nw, {
                                            children: a
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(nP, {
                                errorCount: i,
                                activeIdx: null != h ? h : 0
                            })
                        ]
                    }),
                    (0, r.jsx)(nA, {
                        ref: S,
                        side: "top",
                        stop: "50%",
                        blur: "4px",
                        height: 48
                    })
                ]
            }))
        }));
    }
    var n$ = "\n  ".concat("\n  [data-nextjs-dialog-overlay] {\n    padding: initial;\n    top: 10vh;\n  }\n", "\n  ").concat("\n  .error-overlay-dialog-container {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    flex-direction: column;\n    background: var(--color-background-100);\n    background-clip: padding-box;\n    border: var(--next-dialog-border-width) solid var(--color-gray-400);\n    border-radius: 0 0 var(--next-dialog-radius) var(--next-dialog-radius);\n    box-shadow: var(--shadow-menu);\n    position: relative;\n    overflow: hidden;\n  }\n\n  .error-overlay-dialog-scroll {\n    overflow-y: auto;\n    height: 100%;\n  }\n", "\n  ").concat("\n  .nextjs-container-errors-header {\n    position: relative;\n  }\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-20);\n    line-height: var(--size-24);\n    font-weight: bold;\n    margin: calc(16px * 1.5) 0;\n    color: var(--color-title-h1);\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-14);\n    color: var(--color-accents-1);\n    margin-left: 16px;\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: 4px;\n  }\n  .nextjs-container-errors-header > p > a {\n    color: inherit;\n    font-weight: bold;\n  }\n  .nextjs-container-errors-header\n    > .nextjs-container-build-error-version-status {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n  }\n", "\n  ").concat("", "\n\n  ").concat("\n  [data-nextjs-error-overlay-nav] {\n    --stroke-color: var(--color-gray-400);\n    --background-color: var(--color-background-100);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    width: 100%;\n\n    position: relative;\n    z-index: 2;\n    outline: none;\n    translate: var(--next-dialog-border-width) var(--next-dialog-border-width);\n    max-width: var(--next-dialog-max-width);\n\n    .error-overlay-notch {\n      translate: calc(var(--next-dialog-border-width) * -1);\n      width: auto;\n      height: var(--next-dialog-notch-height);\n      padding: 12px;\n      background: var(--background-color);\n      border: var(--next-dialog-border-width) solid var(--stroke-color);\n      border-bottom: none;\n      position: relative;\n\n      &[data-side='left'] {\n        padding-right: 0;\n        border-radius: var(--next-dialog-radius) 0 0 0;\n\n        .error-overlay-notch-tail {\n          right: -54px;\n        }\n\n        > *:not(.error-overlay-notch-tail) {\n          margin-right: -10px;\n        }\n      }\n\n      &[data-side='right'] {\n        padding-left: 0;\n        border-radius: 0 var(--next-dialog-radius) 0 0;\n\n        .error-overlay-notch-tail {\n          left: -54px;\n          transform: rotateY(180deg);\n        }\n\n        > *:not(.error-overlay-notch-tail) {\n          margin-left: -12px;\n        }\n      }\n\n      .error-overlay-notch-tail {\n        position: absolute;\n        top: calc(var(--next-dialog-border-width) * -1);\n        pointer-events: none;\n        z-index: -1;\n        height: calc(100% + var(--next-dialog-border-width));\n      }\n    }\n  }\n\n  @media (max-width: 600px) {\n    [data-nextjs-error-overlay-nav] {\n      background: var(--background-color);\n      border-radius: var(--next-dialog-radius) var(--next-dialog-radius) 0 0;\n      border: var(--next-dialog-border-width) solid var(--stroke-color);\n      border-bottom: none;\n      overflow: hidden;\n      translate: 0 var(--next-dialog-border-width);\n      \n      .error-overlay-notch {\n        border-radius: 0;\n        border: 0;\n\n        &[data-side=\"left\"], &[data-side=\"right\"] {\n          border-radius: 0;\n        }\n\n        .error-overlay-notch-tail {\n          display: none;\n        }\n      }\n    }\n  }\n", "\n  ").concat("\n  .nextjs__container_errors_label {\n    padding: 2px 6px;\n    margin: 0;\n    border-radius: var(--rounded-md-2);\n    background: var(--color-red-100);\n    font-weight: 600;\n    font-size: var(--size-12);\n    color: var(--color-red-900);\n    font-family: var(--font-stack-monospace);\n    line-height: var(--size-20);\n  }\n", "\n  ").concat("\n  .nextjs__container_errors_wrapper {\n    position: relative;\n  }\n\n  .nextjs__container_errors_desc {\n    margin: 0;\n    margin-left: 4px;\n    color: var(--color-red-900);\n    font-weight: 500;\n    font-size: var(--size-16);\n    letter-spacing: -0.32px;\n    line-height: var(--size-24);\n    overflow-wrap: break-word;\n    white-space: pre-wrap;\n  }\n\n  .nextjs__container_errors_desc.truncated {\n    max-height: 200px;\n    overflow: hidden;\n  }\n\n  .nextjs__container_errors_gradient_overlay {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 85px;\n    background: linear-gradient(\n      180deg,\n      rgba(250, 250, 250, 0) 0%,\n      var(--color-background-100) 100%\n    );\n  }\n\n  .nextjs__container_errors_expand_button {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    align-items: center;\n    padding: 6px 8px;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    border-radius: 999px;\n    box-shadow:\n      0px 2px 2px var(--color-gray-alpha-100),\n      0px 8px 8px -8px var(--color-gray-alpha-100);\n    font-size: var(--size-13);\n    cursor: pointer;\n    color: var(--color-gray-900);\n    font-weight: 500;\n    transition: background-color 0.2s ease;\n  }\n\n  .nextjs__container_errors_expand_button:hover {\n    background: var(--color-gray-100);\n  }\n", "\n  ").concat("\n  .error-overlay-toolbar {\n    display: flex;\n    gap: 6px;\n  }\n\n  .nodejs-inspector-button,\n  .copy-stack-trace-button,\n  .docs-link-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: var(--size-28);\n    height: var(--size-28);\n    background: var(--color-background-100);\n    background-clip: padding-box;\n    border: 1px solid var(--color-gray-alpha-400);\n    box-shadow: var(--shadow-small);\n    border-radius: var(--rounded-full);\n\n    svg {\n      width: var(--size-14);\n      height: var(--size-14);\n    }\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n\n    &:not(:disabled):hover {\n      background: var(--color-gray-alpha-100);\n    }\n\n    &:not(:disabled):active {\n      background: var(--color-gray-alpha-200);\n    }\n\n    &:disabled {\n      background-color: var(--color-gray-100);\n      cursor: not-allowed;\n    }\n  }\n\n  .error-overlay-toolbar-button-icon {\n    color: var(--color-gray-900);\n  }\n", "\n  ").concat("\n  .error-overlay-call-stack-container {\n    position: relative;\n    margin-top: 8px;\n  }\n\n  .error-overlay-call-stack-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: var(--size-28);\n    padding: 8px 8px 12px 4px;\n    width: 100%;\n  }\n\n  .error-overlay-call-stack-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 8px;\n\n    margin: 0;\n\n    color: var(--color-gray-1000);\n    font-size: var(--size-16);\n    font-weight: 500;\n  }\n\n  .error-overlay-call-stack-count {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: var(--size-20);\n    height: var(--size-20);\n    gap: 4px;\n\n    color: var(--color-gray-1000);\n    text-align: center;\n    font-size: var(--size-11);\n    font-weight: 500;\n    line-height: var(--size-16);\n\n    border-radius: var(--rounded-full);\n    background: var(--color-gray-300);\n  }\n\n  .error-overlay-call-stack-ignored-list-toggle-button {\n    all: unset;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    color: var(--color-gray-900);\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    border-radius: 6px;\n    padding: 4px 6px;\n    margin-right: -6px;\n    transition: background 150ms ease;\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n  }\n", "\n\n  [data-nextjs-error-label-group] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n");
    function nq(e) {
        var n, t, o = e.file, a = e.location, l = eo({
            file: o,
            lineNumber: null != (n = null == a ? void 0 : a.line) ? n : 1,
            column: null != (t = null == a ? void 0 : a.column) ? t : 0
        });
        return (0, r.jsxs)("div", {
            "data-with-open-in-editor-link": !0,
            "data-with-open-in-editor-link-import-trace": !0,
            role: "link",
            onClick: l,
            title: "Click to open in your editor",
            children: [
                o,
                a ? ":".concat(a.line, ":").concat(a.column) : null,
                (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                        }),
                        (0, r.jsx)("polyline", {
                            points: "15 3 21 3 21 9"
                        }),
                        (0, r.jsx)("line", {
                            x1: "10",
                            y1: "14",
                            x2: "21",
                            y2: "3"
                        })
                    ]
                })
            ]
        });
    }
    function nZ(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    var nW = function(e) {
        var n, t, a, l, i, s, c, u, d, f, p = e.content, h = o.useMemo({
            "nW.useMemo[h]": function() {
                var e, n, t;
                return n = ({
                    "nW.useMemo[h]": function(e) {
                        var n, t, r = e.shift();
                        if (!r) return null;
                        var o = (n = r.split(":", 3), t = 3, ({
                            "nW.useMemo[h]": function(e) {
                                if (Array.isArray(e)) return e;
                            }
                        })["nW.useMemo[h]"](n) || ({
                            "nW.useMemo[h]": function(e, n) {
                                var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var a = [], l = !0, i = !1;
                                    try {
                                        for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                                    } catch (e) {
                                        i = !0, r = e;
                                    } finally{
                                        try {
                                            l || null == o.return || o.return();
                                        } finally{
                                            if (i) throw r;
                                        }
                                    }
                                    return a;
                                }
                            }
                        })["nW.useMemo[h]"](n, 3) || ({
                            "nW.useMemo[h]": function(e, n) {
                                if (e) {
                                    if ("string" == typeof e) return nZ(e, n);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nZ(e, n);
                                }
                            }
                        })["nW.useMemo[h]"](n, t) || ({
                            "nW.useMemo[h]": function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }
                        })["nW.useMemo[h]"]()), a = o[0], l = o[1], i = o[2], s = Number(l), c = Number(i), u = !Number.isNaN(s) && !Number.isNaN(c);
                        return {
                            fileName: u ? a : r,
                            location: u ? {
                                line: s,
                                column: c
                            } : void 0
                        };
                    }
                })["nW.useMemo[h]"](e = p.split("\n")), t = ({
                    "nW.useMemo[h]": function(e) {
                        if (e.some({
                            "nW.useMemo[h]": function(e) {
                                return /ReactServerComponentsError:/.test(e);
                            }
                        }["nW.useMemo[h]"]) || e.some({
                            "nW.useMemo[h]": function(e) {
                                return /Import trace for requested module:/.test(e);
                            }
                        }["nW.useMemo[h]"])) {
                            for(var n = []; /.+\..+/.test(e[e.length - 1]) && !e[e.length - 1].includes(":");){
                                var t = e.pop().trim();
                                n.unshift(t);
                            }
                            return n;
                        }
                        return [];
                    }
                })["nW.useMemo[h]"](e), {
                    file: n,
                    source: e.join("\n"),
                    importTraceFiles: t
                };
            }
        }["nW.useMemo[h]"], [
            p
        ]), m = h.file, g = h.source, b = h.importTraceFiles, v = o.useMemo({
            "nW.useMemo[v]": function() {
                return eg().ansiToJson(g, {
                    json: !0,
                    use_classes: !0,
                    remove_empty: !0
                });
            }
        }["nW.useMemo[v]"], [
            g
        ]), y = eo({
            file: null == m ? void 0 : m.fileName,
            lineNumber: null != (s = null == m || null == (n = m.location) ? void 0 : n.line) ? s : 1,
            column: null != (c = null == m || null == (t = m.location) ? void 0 : t.column) ? c : 0
        }), x = {
            file: null != (u = null == m ? void 0 : m.fileName) ? u : null,
            methodName: "",
            arguments: [],
            lineNumber: null != (d = null == m || null == (a = m.location) ? void 0 : a.line) ? d : null,
            column: null != (f = null == m || null == (l = m.location) ? void 0 : l.column) ? f : null
        }, w = null == x || null == (i = x.file) ? void 0 : i.split(".").pop();
        return (0, r.jsxs)("div", {
            "data-nextjs-codeframe": !0,
            children: [
                (0, r.jsx)("div", {
                    className: "code-frame-header",
                    children: (0, r.jsxs)("div", {
                        className: "code-frame-link",
                        children: [
                            (0, r.jsx)("span", {
                                className: "code-frame-icon",
                                children: (0, r.jsx)(ec, {
                                    lang: w
                                })
                            }),
                            (0, r.jsx)("span", {
                                "data-text": !0,
                                children: er(x)
                            }),
                            (0, r.jsx)("button", {
                                "aria-label": "Open in editor",
                                "data-with-open-in-editor-link-source-file": !0,
                                onClick: y,
                                children: (0, r.jsx)("span", {
                                    className: "code-frame-icon",
                                    "data-icon": "right",
                                    children: (0, r.jsx)(ei, {
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })
                        ]
                    })
                }),
                (0, r.jsx)("pre", {
                    className: "code-frame-pre",
                    children: (0, r.jsxs)("div", {
                        className: "code-frame-lines",
                        children: [
                            v.map(function(e, n) {
                                return (0, r.jsx)("span", {
                                    style: function(e) {
                                        for(var n = 1; n < arguments.length; n++){
                                            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            }))), r.forEach(function(n) {
                                                var r, o, a;
                                                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                                                    value: a,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : r[o] = a;
                                            });
                                        }
                                        return e;
                                    }({
                                        color: e.fg ? "var(--color-".concat(e.fg, ")") : void 0
                                    }, "bold" === e.decoration ? {
                                        fontWeight: 500
                                    } : "italic" === e.decoration ? {
                                        fontStyle: "italic"
                                    } : void 0),
                                    children: (0, r.jsx)(Q, {
                                        text: e.content
                                    })
                                }, "terminal-entry-".concat(n));
                            }),
                            b.map(function(e) {
                                return (0, r.jsx)(nq, {
                                    isSourceFile: !1,
                                    file: e
                                }, e);
                            })
                        ]
                    })
                })
            ]
        });
    }, nQ = function(e) {
        var n, t, o = e.onClick, a = e.children, l = e.className, i = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "onClick",
            "children",
            "className"
        ]);
        return (0, r.jsx)("div", (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({}, i), t = t = {
            onClick: function(e) {
                return e.target.closest("a") || e.preventDefault(), null == o ? void 0 : o();
            },
            className: eC("nextjs-toast", l),
            children: (0, r.jsx)("div", {
                "data-nextjs-toast-wrapper": !0,
                children: a
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }, nX = function(e) {
        var n = e.split("\n");
        return ev()(n[1] || "").replace(/^Error: /, "");
    }, nG = function(e) {
        var n, t, a = e.message, l = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "message"
        ]), i = (0, o.useCallback)(function() {}, []), s = Error(a), c = (0, o.useMemo)(function() {
            return nX(a) || "Failed to compile";
        }, [
            a
        ]);
        return (0, r.jsx)(nB, (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            errorType: "Build Error",
            errorMessage: c,
            onClose: i,
            error: s
        }, l), t = t = {
            children: (0, r.jsx)(nW, {
                content: a
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    };
    function nK() {
        var e, n, t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).collapsed;
        return (0, r.jsx)("svg", (e = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            "data-nextjs-call-stack-chevron-icon": !0,
            "data-collapsed": t,
            width: "16",
            height: "16",
            fill: "none"
        }, "boolean" == typeof t ? {
            style: {
                transform: t ? void 0 : "rotate(90deg)"
            }
        } : {}), n = n = {
            children: (0, r.jsx)("path", {
                style: {
                    fill: "var(--color-font)"
                },
                fillRule: "evenodd",
                d: "m6.75 3.94.53.53 2.824 2.823a1 1 0 0 1 0 1.414L7.28 11.53l-.53.53L5.69 11l.53-.53L8.69 8 6.22 5.53 5.69 5l1.06-1.06Z",
                clipRule: "evenodd"
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e));
    }
    function nY(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function nJ(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return nY(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nY(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function n0(e) {
        var n = e.reactOutputComponentDiff, t = nJ((0, o.useState)(!0), 2), a = t[0], l = t[1], i = (0, o.useMemo)(function() {
            var e = [];
            return n.split("\n").forEach(function(n, t) {
                var o, a, l = "+" === n[0] || "-" === n[0], i = ">" === n[0], s = l || i, c = s ? n[0] : "", u = s ? n.indexOf(c) : -1, d = nJ(s ? [
                    n.slice(0, u),
                    n.slice(u + 1)
                ] : [
                    n,
                    ""
                ], 2), f = d[0], p = d[1];
                l ? e.push((0, r.jsx)("span", {
                    "data-nextjs-container-errors-pseudo-html-line": !0,
                    "data-nextjs-container-errors-pseudo-html--diff": "+" === c ? "add" : "remove",
                    children: (0, r.jsxs)("span", {
                        children: [
                            f,
                            (0, r.jsx)("span", {
                                "data-nextjs-container-errors-pseudo-html-line-sign": !0,
                                children: c
                            }),
                            p,
                            "\n"
                        ]
                    })
                }, "comp-diff" + t)) : e.push((0, r.jsxs)("span", (o = function(e) {
                    for(var n = 1; n < arguments.length; n++){
                        var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }))), r.forEach(function(n) {
                            var r, o, a;
                            r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = a;
                        });
                    }
                    return e;
                }({
                    "data-nextjs-container-errors-pseudo-html-line": !0
                }, i ? {
                    "data-nextjs-container-errors-pseudo-html--diff": "error"
                } : void 0), a = a = {
                    children: [
                        f,
                        (0, r.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html-line-sign": !0,
                            children: c
                        }),
                        p,
                        "\n"
                    ]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, r);
                    }
                    return t;
                })(Object(a)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                }), o), "comp-diff" + t));
            }), e;
        }, [
            n
        ]);
        return (0, r.jsxs)("div", {
            "data-nextjs-container-errors-pseudo-html": !0,
            "data-nextjs-container-errors-pseudo-html-collapse": a,
            children: [
                (0, r.jsx)("button", {
                    "aria-expanded": !a,
                    "aria-label": "complete Component Stack",
                    "data-nextjs-container-errors-pseudo-html-collapse-button": !0,
                    onClick: function() {
                        return l(!a);
                    },
                    children: (0, r.jsx)(nK, {
                        collapsed: a
                    })
                }),
                (0, r.jsx)("pre", {
                    className: "nextjs__container_errors__component-stack",
                    children: (0, r.jsx)("code", {
                        children: i
                    })
                })
            ]
        });
    }
    var n1 = Symbol.for("NextjsError");
    function n2(e) {
        return e[n1] || null;
    }
    function n3(e, n, t, r, o, a, l) {
        try {
            var i = e[a](l), s = i.value;
        } catch (e) {
            t(e);
            return;
        }
        i.done ? n(s) : Promise.resolve(s).then(r, o);
    }
    function n4(e) {
        return function() {
            var n = this, t = arguments;
            return new Promise(function(r, o) {
                var a = e.apply(n, t);
                function l(e) {
                    n3(a, r, o, l, i, "next", e);
                }
                function i(e) {
                    n3(a, r, o, l, i, "throw", e);
                }
                l(void 0);
            });
        };
    }
    function n5(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function n6(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function n8(e, n) {
        var t, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
            },
            trys: [],
            ops: []
        }, l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return l.next = i(0), l.throw = i(1), l.return = i(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this;
        }), l;
        //TURBOPACK unreachable
        ;
        function i(i) {
            return function(s) {
                var c = [
                    i,
                    s
                ];
                if (t) throw TypeError("Generator is already executing.");
                for(; l && (l = 0, c[0] && (a = 0)), a;)try {
                    if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                    switch(r = 0, o && (c = [
                        2 & c[0],
                        o.value
                    ]), c[0]){
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return a.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = c[1], c = [
                                0
                            ];
                            continue;
                        case 7:
                            c = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                a.label = c[1];
                                break;
                            }
                            if (6 === c[0] && a.label < o[1]) {
                                a.label = o[1], o = c;
                                break;
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(c);
                                break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    c = n.call(e, a);
                } catch (e) {
                    c = [
                        6,
                        e
                    ], r = 0;
                } finally{
                    t = o = 0;
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                };
            };
        }
    }
    var n9 = function(e) {
        if ("use" in o) {
            var n = e.frames;
            if ("function" != typeof n) throw Error("Invariant: frames must be a function when the React version has React.use. This is a bug in Next.js.");
            return o.use(n());
        }
        if (!Array.isArray(e.frames)) throw Error("Invariant: frames must be an array when the React version does not have React.use. This is a bug in Next.js.");
        return e.frames;
    };
    function n7(e) {
        var n = e.error, t = e.dialogResizerRef, a = n9(n), l = (0, o.useMemo)(function() {
            var e, n = a.findIndex(function(e) {
                return !e.ignored && !!e.originalCodeFrame && !!e.originalStackFrame;
            });
            return null != (e = a[n]) ? e : null;
        }, [
            a
        ]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l && (0, r.jsx)(ex, {
                    stackFrame: l.originalStackFrame,
                    codeFrame: l.originalCodeFrame
                }),
                a.length > 0 && (0, r.jsx)(nO, {
                    dialogResizerRef: t,
                    frames: a
                })
            ]
        });
    }
    var te = "\n  ".concat("\n  [data-nextjs-container-errors-pseudo-html] {\n    padding: 8px 0;\n    margin: 8px 0;\n    border: 1px solid var(--color-gray-400);\n    background: var(--color-background-200);\n    color: var(--color-syntax-constant);\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-12);\n    line-height: 1.33em; /* 16px in 12px font size */\n    border-radius: var(--rounded-md-2);\n  }\n  [data-nextjs-container-errors-pseudo-html-line] {\n    display: inline-block;\n    width: 100%;\n    padding-left: 40px;\n    line-height: calc(5 / 3);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='error'] {\n    background: var(--color-amber-100);\n    box-shadow: 2px 0 0 0 var(--color-amber-900) inset;\n    font-weight: bold;\n  }\n  [data-nextjs-container-errors-pseudo-html-collapse-button] {\n    all: unset;\n    margin-left: 12px;\n    &:focus {\n      outline: none;\n    }\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='add'] {\n    background: var(--color-green-300);\n  }\n  [data-nextjs-container-errors-pseudo-html-line-sign] {\n    margin-left: calc(24px * -1);\n    margin-right: 24px;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='add']\n    [data-nextjs-container-errors-pseudo-html-line-sign] {\n    color: var(--color-green-900);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='remove'] {\n    background: var(--color-red-300);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='remove']\n    [data-nextjs-container-errors-pseudo-html-line-sign] {\n    color: var(--color-red-900);\n    margin-left: calc(24px * -1);\n    margin-right: 24px;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='error']\n    [data-nextjs-container-errors-pseudo-html-line-sign] {\n    color: var(--color-amber-900);\n  }\n  \n  [data-nextjs-container-errors-pseudo-html--hint] {\n    display: inline-block;\n    font-size: 0;\n    height: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html--tag-adjacent='false'] {\n    color: var(--color-accents-1);\n  }\n  .nextjs__container_errors__component-stack {\n    margin: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html-collapse='true']\n    .nextjs__container_errors__component-stack\n    code {\n    max-height: 120px;\n    mask-image: linear-gradient(to bottom,rgba(0,0,0,0) 0%,black 10%);\n    padding-bottom: 40px;\n  }\n  .nextjs__container_errors__component-stack code {\n    display: block;\n    width: 100%;\n    white-space: pre-wrap;\n    scroll-snap-type: y mandatory;\n    overflow-y: hidden;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff] {\n    scroll-snap-align: center;\n  }\n  .error-overlay-hydration-error-diff-plus-icon {\n    color: var(--color-green-900);\n  }\n  .error-overlay-hydration-error-diff-minus-icon {\n    color: var(--color-red-900);\n  }\n", "\n");
    function tn(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
    }
    function tt(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function tr(e) {
        return e.startsWith("https://nextjs.org");
    }
    function to(e) {
        var n = e.message;
        return (0, r.jsx)(Q, {
            text: n,
            matcher: tr
        });
    }
    function ta(e) {
        var n = e.error, t = "environmentName" in n ? n.environmentName : "", o = t ? "[ ".concat(t, " ] ") : "", a = n.message;
        return a.startsWith(o) && (a = a.slice(o.length)), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(Q, {
                text: a,
                matcher: tr
            })
        });
    }
    var tl = {
        hydrationWarning: null,
        notes: null,
        reactOutputComponentDiff: null
    };
    function ti(e) {
        var n, t, a, l, i, s, c, u, d, f = e.getSquashedHydrationErrorDetails, p = e.runtimeErrors, h = e.debugInfo, m = e.onClose, g = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "getSquashedHydrationErrorDetails",
            "runtimeErrors",
            "debugInfo",
            "onClose"
        ]), b = (0, o.useRef)(null), v = (0, o.useMemo)(function() {
            return p.length < 1;
        }, [
            p.length
        ]), y = (n = (0, o.useState)(0), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return tt(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tt(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), x = y[0], w = y[1], j = (0, o.useMemo)(function() {
            var e;
            return null != (e = p[x]) ? e : null;
        }, [
            x,
            p
        ]), k = (a = null == j ? void 0 : j.error, l = f, (0, o.useMemo)(function() {
            if (void 0 === a) return tl;
            var e, n, t, r = l(a);
            if (null !== r) return {
                hydrationWarning: null != (n = r.warning) ? n : null,
                notes: null,
                reactOutputComponentDiff: null != (t = r.reactOutputComponentDiff) ? t : null
            };
            if (!(eJ((e = a).message) || /Hydration failed because the server rendered (text|HTML) didn't match the client\./.test(e.message) || /A tree hydrated but some attributes of the server rendered HTML didn't match the client properties./.test(e.message))) return tl;
            var o = function(e) {
                var n = e.message;
                if (eJ(n)) {
                    var t = eW(n.split("\n\n"), 2), r = t[0], o = t[1], a = (void 0 === o ? "" : o).trim();
                    return {
                        message: "" === a ? n.trim() : r.trim(),
                        diff: a,
                        notes: null
                    };
                }
                var l = eW(n.split("".concat(eG)), 2), i = l[0], s = l[1], c = i.trim();
                if (void 0 !== s && s.length > 1) {
                    var u = [];
                    s.split("\n").forEach(function(e) {
                        "" !== e.trim() && (e.trim().startsWith("at ") || u.push(e));
                    });
                    var d = eQ(c.split("\n\n")), f = d[0], p = d.slice(1);
                    return {
                        message: f,
                        diff: u.join("\n"),
                        notes: p.join("\n\n") || null
                    };
                }
                var h = eQ(c.split("\n\n"));
                return {
                    message: h[0],
                    diff: null,
                    notes: h.slice(1).join("\n\n")
                };
            }(a), i = o.message, s = o.notes, c = o.diff;
            return null === i ? tl : {
                hydrationWarning: i,
                notes: s,
                reactOutputComponentDiff: c
            };
        }, [
            a,
            l
        ]));
        if (v) return (0, r.jsx)(nC, {});
        if (!j) return null;
        var O = j.error, S = [
            "server",
            "edge-server"
        ].includes(n2(O) || ""), _ = (i = O, "recoverable" === (s = j.type) ? "Recoverable ".concat(i.name) : "console" === s ? "Console ".concat(i.name) : "Runtime ".concat(i.name)), C = k.notes, E = k.hydrationWarning, P = (void 0 === (c = O) ? "undefined" : tn(c)) === "object" && null !== c && "__NEXT_ERROR_CODE" in c && "string" == typeof c.__NEXT_ERROR_CODE ? c.__NEXT_ERROR_CODE : (void 0 === c ? "undefined" : tn(c)) === "object" && null !== c && "digest" in c && "string" == typeof c.digest ? c.digest.split("@").find(function(e) {
            return e.startsWith("E");
        }) : void 0;
        return (0, r.jsxs)(nB, (u = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            errorCode: P,
            errorType: _,
            errorMessage: E ? (0, r.jsx)(to, {
                message: E
            }) : (0, r.jsx)(ta, {
                error: O
            }),
            onClose: S ? void 0 : m,
            debugInfo: h,
            error: O,
            runtimeErrors: p,
            activeIdx: x,
            setActiveIndex: w,
            dialogResizerRef: b
        }, g), d = d = {
            children: [
                (0, r.jsxs)("div", {
                    className: "error-overlay-notes-container",
                    children: [
                        C ? (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("p", {
                                id: "nextjs__container_errors__notes",
                                className: "nextjs__container_errors__notes",
                                children: C
                            })
                        }) : null,
                        E ? (0, r.jsx)("p", {
                            id: "nextjs__container_errors__link",
                            className: "nextjs__container_errors__link",
                            children: (0, r.jsx)(Q, {
                                text: "See more info here: ".concat(eK)
                            })
                        }) : null
                    ]
                }),
                k.reactOutputComponentDiff ? (0, r.jsx)(n0, {
                    reactOutputComponentDiff: k.reactOutputComponentDiff || ""
                }) : null,
                (0, r.jsx)(o.Suspense, {
                    fallback: (0, r.jsx)("div", {
                        "data-nextjs-error-suspended": !0
                    }),
                    children: (0, r.jsx)(n7, {
                        error: j,
                        dialogResizerRef: b
                    }, j.id.toString())
                })
            ]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(d)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(d)).forEach(function(e) {
            Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(d, e));
        }), u));
    }
    function ts(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function tc(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function tu(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function td(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function tf(e, n) {
        if (null == e) return {};
        var t, r, o = function(e, n) {
            if (null == e) return {};
            var t, r, o = {}, a = Object.keys(e);
            for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        }(e, n);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
        }
        return o;
    }
    function tp(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return tc(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tc(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function th() {
        var e, n, t = (e = [
            "\n          [data-next-badge-root] {\n            --timing: cubic-bezier(0.23, 0.88, 0.26, 0.92);\n            --duration-long: 250ms;\n            --color-outer-border: #171717;\n            --color-inner-border: hsla(0, 0%, 100%, 0.14);\n            --color-hover-alpha-subtle: hsla(0, 0%, 100%, 0.13);\n            --color-hover-alpha-error: hsla(0, 0%, 100%, 0.2);\n            --color-hover-alpha-error-2: hsla(0, 0%, 100%, 0.25);\n            --mark-size: calc(var(--size) - var(--size-2) * 2);\n\n            --focus-color: var(--color-blue-800);\n            --focus-ring: 2px solid var(--focus-color);\n\n            &:has([data-next-badge][data-error='true']) {\n              --focus-color: #fff;\n            }\n          }\n\n          [data-disabled-icon] {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-right: 4px;\n          }\n\n          [data-next-badge] {\n            -webkit-font-smoothing: antialiased;\n            width: var(--size);\n            height: var(--size);\n            display: flex;\n            align-items: center;\n            position: relative;\n            background: rgba(0, 0, 0, 0.8);\n            box-shadow:\n              0 0 0 1px var(--color-outer-border),\n              inset 0 0 0 1px var(--color-inner-border),\n              0px 16px 32px -8px rgba(0, 0, 0, 0.24);\n            backdrop-filter: blur(48px);\n            border-radius: var(--rounded-full);\n            user-select: none;\n            cursor: pointer;\n            scale: 1;\n            overflow: hidden;\n            will-change: scale, box-shadow, width, background;\n            transition:\n              scale var(--duration-short) var(--timing),\n              width var(--duration-long) var(--timing),\n              box-shadow var(--duration-long) var(--timing),\n              background var(--duration-short) ease;\n\n            &:active[data-error='false'] {\n              scale: 0.95;\n            }\n\n            &[data-animate='true']:not(:hover) {\n              scale: 1.02;\n            }\n\n            &[data-error='false']:has([data-next-mark]:focus-visible) {\n              outline: var(--focus-ring);\n              outline-offset: 3px;\n            }\n\n            &[data-error='true'] {\n              background: #ca2a30;\n              --color-inner-border: #e5484d;\n\n              [data-next-mark] {\n                background: var(--color-hover-alpha-error);\n                outline-offset: 0px;\n\n                &:focus-visible {\n                  outline: var(--focus-ring);\n                  outline-offset: -1px;\n                }\n\n                &:hover {\n                  background: var(--color-hover-alpha-error-2);\n                }\n              }\n            }\n\n            &[data-error-expanded='false'][data-error='true'] ~ [data-dot] {\n              scale: 1;\n            }\n\n            > div {\n              display: flex;\n            }\n          }\n\n          [data-issues-collapse]:focus-visible {\n            outline: var(--focus-ring);\n          }\n\n          [data-issues]:has([data-issues-open]:focus-visible) {\n            outline: var(--focus-ring);\n            outline-offset: -1px;\n          }\n\n          [data-dot] {\n            content: '';\n            width: var(--size-8);\n            height: var(--size-8);\n            background: #fff;\n            box-shadow: 0 0 0 1px var(--color-outer-border);\n            border-radius: 50%;\n            position: absolute;\n            top: 2px;\n            right: 0px;\n            scale: 0;\n            pointer-events: none;\n            transition: scale 200ms var(--timing);\n            transition-delay: var(--duration-short);\n          }\n\n          [data-issues] {\n            --padding-left: 8px;\n            display: flex;\n            gap: 2px;\n            align-items: center;\n            padding-left: 8px;\n            padding-right: 8px;\n            height: var(--size-32);\n            margin-right: 2px;\n            border-radius: var(--rounded-full);\n            transition: background var(--duration-short) ease;\n\n            &:has([data-issues-open]:hover) {\n              background: var(--color-hover-alpha-error);\n            }\n\n            &:has([data-issues-collapse]) {\n              padding-right: calc(var(--padding-left) / 2);\n            }\n\n            [data-cross] {\n              translate: 0px -1px;\n            }\n          }\n\n          [data-issues-open] {\n            font-size: var(--size-13);\n            color: white;\n            width: fit-content;\n            height: 100%;\n            display: flex;\n            gap: 2px;\n            align-items: center;\n            margin: 0;\n            line-height: var(--size-36);\n            font-weight: 500;\n            z-index: 2;\n            white-space: nowrap;\n\n            &:focus-visible {\n              outline: 0;\n            }\n          }\n\n          [data-issues-collapse] {\n            width: var(--size-24);\n            height: var(--size-24);\n            border-radius: var(--rounded-full);\n            transition: background var(--duration-short) ease;\n\n            &:hover {\n              background: var(--color-hover-alpha-error);\n            }\n          }\n\n          [data-cross] {\n            color: #fff;\n            width: var(--size-12);\n            height: var(--size-12);\n          }\n\n          [data-next-mark] {\n            width: var(--mark-size);\n            height: var(--mark-size);\n            margin: 0 2px;\n            display: flex;\n            align-items: center;\n            border-radius: var(--rounded-full);\n            transition: background var(--duration-long) var(--timing);\n\n            &:focus-visible {\n              outline: 0;\n            }\n\n            &:hover {\n              background: var(--color-hover-alpha-subtle);\n            }\n\n            svg {\n              flex-shrink: 0;\n              width: var(--size-40);\n              height: var(--size-40);\n            }\n          }\n\n          [data-issues-count-animation] {\n            display: grid;\n            place-items: center center;\n            font-variant-numeric: tabular-nums;\n\n            &[data-animate='false'] {\n              [data-issues-count-exit],\n              [data-issues-count-enter] {\n                animation-duration: 0ms;\n              }\n            }\n\n            > * {\n              grid-area: 1 / 1;\n            }\n\n            [data-issues-count-exit] {\n              animation: fadeOut 300ms var(--timing) forwards;\n            }\n\n            [data-issues-count-enter] {\n              animation: fadeIn 300ms var(--timing) forwards;\n            }\n          }\n\n          [data-issues-count-plural] {\n            display: inline-block;\n            &[data-animate='true'] {\n              animation: fadeIn 300ms var(--timing) forwards;\n            }\n          }\n\n          .path0 {\n            animation: draw0 1.5s ease-in-out infinite;\n          }\n\n          .path1 {\n            animation: draw1 1.5s ease-out infinite;\n            animation-delay: 0.3s;\n          }\n\n          .paused {\n            stroke-dashoffset: 0;\n          }\n\n          @keyframes fadeIn {\n            0% {\n              opacity: 0;\n              filter: blur(2px);\n              transform: translateY(8px);\n            }\n            100% {\n              opacity: 1;\n              filter: blur(0px);\n              transform: translateY(0);\n            }\n          }\n\n          @keyframes fadeOut {\n            0% {\n              opacity: 1;\n              filter: blur(0px);\n              transform: translateY(0);\n            }\n            100% {\n              opacity: 0;\n              transform: translateY(-12px);\n              filter: blur(2px);\n            }\n          }\n\n          @keyframes draw0 {\n            0%,\n            25% {\n              stroke-dashoffset: -29.6;\n            }\n            25%,\n            50% {\n              stroke-dashoffset: 0;\n            }\n            50%,\n            75% {\n              stroke-dashoffset: 0;\n            }\n            75%,\n            100% {\n              stroke-dashoffset: 29.6;\n            }\n          }\n\n          @keyframes draw1 {\n            0%,\n            20% {\n              stroke-dashoffset: -11.6;\n            }\n            20%,\n            50% {\n              stroke-dashoffset: 0;\n            }\n            50%,\n            75% {\n              stroke-dashoffset: 0;\n            }\n            75%,\n            100% {\n              stroke-dashoffset: 11.6;\n            }\n          }\n\n          @media (prefers-reduced-motion) {\n            [data-issues-count-exit],\n            [data-issues-count-enter],\n            [data-issues-count-plural] {\n              animation-duration: 0ms !important;\n            }\n          }\n        "
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return th = function() {
            return t;
        }, t;
    }
    var tm = (0, o.forwardRef)(function(e, n) {
        var t, a, l, i, s = e.disabled, c = e.issueCount, u = e.isDevBuilding, d = e.isDevRendering, f = e.isBuildError, p = e.onTriggerClick, h = e.toggleErrorOverlay, m = e.scale, g = tf(e, [
            "disabled",
            "issueCount",
            "isDevBuilding",
            "isDevRendering",
            "isBuildError",
            "onTriggerClick",
            "toggleErrorOverlay",
            "scale"
        ]), b = c > 0, v = tp((0, o.useState)(b), 2), y = v[0], x = v[1], w = tp((0, o.useState)(!1), 2), j = w[0], k = w[1], O = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = (0, o.useRef)(null), r = tp((0, o.useState)(!1), 2), a = r[0], l = r[1];
            return (0, o.useEffect)(function() {
                if (e > 0) {
                    var r = t.current ? Date.now() - t.current : -1;
                    if (t.current = Date.now(), !(r <= n)) {
                        l(!0);
                        var o = window.setTimeout(function() {
                            l(!1);
                        }, n);
                        return function() {
                            clearTimeout(o);
                        };
                    }
                }
            }, [
                e,
                n
            ]), a;
        }(c, 150), S = (0, o.useRef)(null), _ = (0, o.useRef)(null), C = (t = _, l = (a = tp((0, o.useState)(0), 2))[0], i = a[1], (0, o.useEffect)(function() {
            var e = t.current;
            if (e) {
                var n = new ResizeObserver(function(e) {
                    i(tp(e, 1)[0].contentRect.width);
                });
                return n.observe(e), function() {
                    return n.disconnect();
                };
            }
        }, [
            t
        ]), l), E = function(e) {
            var n, t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 750, a = (n = (0, o.useState)(!1), t = 2, function(e) {
                if (Array.isArray(e)) return e;
            }(n) || function(e, n) {
                var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var a = [], l = !0, i = !1;
                    try {
                        for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                    } catch (e) {
                        i = !0, r = e;
                    } finally{
                        try {
                            l || null == o.return || o.return();
                        } finally{
                            if (i) throw r;
                        }
                    }
                    return a;
                }
            }(n, 2) || function(e, n) {
                if (e) {
                    if ("string" == typeof e) return ts(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ts(e, n);
                }
            }(n, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }()), l = a[0], i = a[1], s = (0, o.useRef)(null), c = (0, o.useRef)(null);
            return (0, o.useEffect)(function() {
                if (c.current && (clearTimeout(c.current), c.current = null), e) null === s.current && (s.current = Date.now()), i(!0);
                else if (null === s.current) i(!1);
                else {
                    var n = Date.now() - s.current, t = r * Math.ceil(n / r) - n;
                    t > 0 ? c.current = setTimeout(function() {
                        i(!1), s.current = null;
                    }, t) : (i(!1), s.current = null);
                }
                return function() {
                    c.current && clearTimeout(c.current);
                };
            }, [
                e,
                r
            ]), l;
        }(u || d), P = y || s;
        return (0, o.useEffect)(function() {
            x(b);
        }, [
            b
        ]), (0, r.jsxs)("div", {
            "data-next-badge-root": !0,
            style: {
                "--size": "".concat(36 / (void 0 === m ? 1 : m), "px"),
                "--duration-short": "".concat(150, "ms"),
                display: s && (!b || j) ? "none" : "block"
            },
            children: [
                (0, r.jsx)("style", {
                    children: R(th())
                }),
                (0, r.jsx)("div", {
                    "data-next-badge": !0,
                    "data-error": b,
                    "data-error-expanded": P,
                    "data-animate": O,
                    style: {
                        width: 0 === C ? "auto" : C
                    },
                    children: (0, r.jsxs)("div", {
                        ref: _,
                        children: [
                            !s && (0, r.jsx)("button", td(tu({
                                ref: function() {
                                    for(var e = arguments.length, n = Array(e), t = 0; t < e; t++)n[t] = arguments[t];
                                    var r = n.filter(Boolean);
                                    return r.length <= 1 ? r[0] || null : function(e) {
                                        var n = !0, t = !1, o = void 0;
                                        try {
                                            for(var a, l = r[Symbol.iterator](); !(n = (a = l.next()).done); n = !0){
                                                var i = a.value;
                                                "function" == typeof i ? i(e) : i && (i.current = e);
                                            }
                                        } catch (e) {
                                            t = !0, o = e;
                                        } finally{
                                            try {
                                                n || null == l.return || l.return();
                                            } finally{
                                                if (t) throw o;
                                            }
                                        }
                                    };
                                }(S, n),
                                "data-next-mark": !0,
                                "data-next-mark-loading": E,
                                onClick: p
                            }, g), {
                                children: (0, r.jsx)(tb, {
                                    isLoading: E,
                                    isDevBuilding: u
                                })
                            })),
                            P && (0, r.jsxs)("div", {
                                "data-issues": !0,
                                children: [
                                    (0, r.jsxs)("button", {
                                        "data-issues-open": !0,
                                        "aria-label": "Open issues overlay",
                                        onClick: h,
                                        children: [
                                            s && (0, r.jsx)("div", {
                                                "data-disabled-icon": !0,
                                                children: (0, r.jsx)(tv, {})
                                            }),
                                            (0, r.jsx)(tg, {
                                                animate: O,
                                                "data-issues-count-animation": !0,
                                                children: c
                                            }, c),
                                            " ",
                                            (0, r.jsxs)("div", {
                                                children: [
                                                    "Issue",
                                                    c > 1 && (0, r.jsx)("span", {
                                                        "aria-hidden": !0,
                                                        "data-issues-count-plural": !0,
                                                        "data-animate": O && 2 === c,
                                                        children: "s"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !f && (0, r.jsx)("button", {
                                        "data-issues-collapse": !0,
                                        "aria-label": "Collapse issues badge",
                                        onClick: function() {
                                            var e;
                                            s ? k(!0) : x(!1), null == (e = S.current) || e.focus();
                                        },
                                        children: (0, r.jsx)(ty, {
                                            "data-cross": !0
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    "data-dot": !0
                })
            ]
        });
    });
    function tg(e) {
        var n = e.children, t = e.animate, o = tf(e, [
            "children",
            "animate"
        ]);
        return (0, r.jsxs)("div", td(tu({}, o), {
            "data-animate": void 0 === t || t,
            children: [
                (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    "data-issues-count-exit": !0,
                    children: n - 1
                }),
                (0, r.jsx)("div", {
                    "data-issues-count": !0,
                    "data-issues-count-enter": !0,
                    children: n
                })
            ]
        }));
    }
    function tb(e) {
        var n = e.isLoading, t = e.isDevBuilding ? "rgba(255,255,255,0.7)" : "white";
        return (0, r.jsxs)("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            "data-next-mark-loading": n,
            children: [
                (0, r.jsxs)("g", {
                    transform: "translate(8.5, 13)",
                    children: [
                        (0, r.jsx)("path", {
                            className: n ? "path0" : "paused",
                            d: "M13.3 15.2 L2.34 1 V12.6",
                            fill: "none",
                            stroke: "url(#next_logo_paint0_linear_1357_10853)",
                            strokeWidth: "1.86",
                            mask: "url(#next_logo_mask0)",
                            strokeDasharray: "29.6",
                            strokeDashoffset: "29.6"
                        }),
                        (0, r.jsx)("path", {
                            className: n ? "path1" : "paused",
                            d: "M11.825 1.5 V13.1",
                            strokeWidth: "1.86",
                            stroke: "url(#next_logo_paint1_linear_1357_10853)",
                            strokeDasharray: "11.6",
                            strokeDashoffset: "11.6"
                        })
                    ]
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "next_logo_paint0_linear_1357_10853",
                            x1: "9.95555",
                            y1: "11.1226",
                            x2: "15.4778",
                            y2: "17.9671",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    stopColor: t
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "0.604072",
                                    stopColor: t,
                                    stopOpacity: "0"
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: t,
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "next_logo_paint1_linear_1357_10853",
                            x1: "11.8222",
                            y1: "1.40039",
                            x2: "11.791",
                            y2: "9.62542",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    stopColor: t
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: t,
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        (0, r.jsxs)("mask", {
                            id: "next_logo_mask0",
                            children: [
                                (0, r.jsx)("rect", {
                                    width: "100%",
                                    height: "100%",
                                    fill: "white"
                                }),
                                (0, r.jsx)("rect", {
                                    width: "5",
                                    height: "1.5",
                                    fill: "black"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    function tv() {
        return (0, r.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.98071 1.125L1.125 3.98071L1.125 8.01929L3.98071 10.875H8.01929L10.875 8.01929V3.98071L8.01929 1.125H3.98071ZM3.82538 0C3.62647 0 3.4357 0.0790176 3.29505 0.21967L0.21967 3.29505C0.0790176 3.4357 0 3.62647 0 3.82538V8.17462C0 8.37353 0.0790178 8.5643 0.21967 8.70495L3.29505 11.7803C3.4357 11.921 3.62647 12 3.82538 12H8.17462C8.37353 12 8.5643 11.921 8.70495 11.7803L11.7803 8.70495C11.921 8.5643 12 8.37353 12 8.17462V3.82538C12 3.62647 11.921 3.4357 11.7803 3.29505L8.70495 0.21967C8.5643 0.0790177 8.37353 0 8.17462 0H3.82538ZM6.5625 2.8125V3.375V6V6.5625H5.4375V6V3.375V2.8125H6.5625ZM6 9C6.41421 9 6.75 8.66421 6.75 8.25C6.75 7.83579 6.41421 7.5 6 7.5C5.58579 7.5 5.25 7.83579 5.25 8.25C5.25 8.66421 5.58579 9 6 9Z",
                fill: "#EAEAEA"
            })
        });
    }
    function ty(e) {
        return (0, r.jsx)("svg", td(tu({
            width: "12",
            height: "12",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), {
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.08889 11.8384L2.62486 12.3024L1.69678 11.3744L2.16082 10.9103L6.07178 6.99937L2.16082 3.08841L1.69678 2.62437L2.62486 1.69629L3.08889 2.16033L6.99986 6.07129L10.9108 2.16033L11.3749 1.69629L12.3029 2.62437L11.8389 3.08841L7.92793 6.99937L11.8389 10.9103L12.3029 11.3744L11.3749 12.3024L10.9108 11.8384L6.99986 7.92744L3.08889 11.8384Z",
                fill: "currentColor"
            })
        }));
    }
    function tx(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function tw(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return tx(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tx(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function tj() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = tw((0, o.useState)(e), 2), r = t[0], a = t[1], l = tw((0, o.useState)(!1), 2), i = l[0], s = l[1], c = n.enterDelay, u = void 0 === c ? 1 : c, d = n.exitDelay, f = void 0 === d ? 0 : d;
        return (0, o.useEffect)(function() {
            var n, t;
            return e ? (a(!0), u <= 0 ? s(!0) : n = setTimeout(function() {
                s(!0);
            }, u)) : (s(!1), f <= 0 ? a(!1) : t = setTimeout(function() {
                a(!1);
            }, f)), function() {
                clearTimeout(n), clearTimeout(t);
            };
        }, [
            e,
            u,
            f
        ]), {
            mounted: r,
            rendered: i
        };
    }
    function tk(e) {
        var n, t, a = e.title, l = e.children, i = e.learnMoreLink, s = e.isOpen, c = e.triggerRef, u = e.close, d = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "title",
            "children",
            "learnMoreLink",
            "isOpen",
            "triggerRef",
            "close"
        ]), f = (0, o.useRef)(null), p = (0, o.useRef)(null), h = tj(s, {
            enterDelay: 0,
            exitDelay: 200
        }), m = h.mounted, g = h.rendered;
        return (nL(f, c, s, function() {
            var e;
            null == (e = p.current) || e.focus();
        }), nD(f, c, s, u), m) ? (0, r.jsx)("div", (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            tabIndex: -1,
            role: "dialog",
            ref: f,
            "data-info-popover": !0
        }, d), t = t = {
            "data-rendered": g,
            children: (0, r.jsxs)("div", {
                className: "dev-tools-info-container",
                children: [
                    (0, r.jsxs)("div", {
                        className: "dev-tools-info-header",
                        children: [
                            (0, r.jsx)("button", {
                                ref: p,
                                className: "dev-tools-info-close-button",
                                onClick: u,
                                "aria-label": "Close dialog",
                                children: (0, r.jsx)(tO, {})
                            }),
                            (0, r.jsx)("h3", {
                                className: "dev-tools-info-title",
                                children: a
                            })
                        ]
                    }),
                    (0, r.jsxs)("div", {
                        className: "dev-tools-info-body",
                        children: [
                            l,
                            i && (0, r.jsx)("div", {
                                className: "dev-tools-info-button-container",
                                children: (0, r.jsx)("a", {
                                    className: "dev-tools-info-learn-more-button",
                                    href: i,
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    children: "Learn More"
                                })
                            })
                        ]
                    })
                ]
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n)) : null;
    }
    function tO() {
        return (0, r.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
                d: "M5.14645 8.70703C4.75595 8.31651 4.75595 7.68349 5.14645 7.29297L10.5 1.93945L11.5605 3L6.56051 8L11.5605 13L10.5 14.0605L5.14645 8.70703Z",
                fill: "currentColor"
            })
        });
    }
    function tS(e) {
        var n, t;
        return (0, r.jsxs)(tk, (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            title: "Turbopack",
            learnMoreLink: "https://nextjs.org/docs/app/api-reference/turbopack"
        }, e), t = t = {
            children: [
                (0, r.jsxs)("article", {
                    className: "dev-tools-info-article",
                    children: [
                        (0, r.jsxs)("p", {
                            className: "dev-tools-info-paragraph",
                            children: [
                                "Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js. Turbopack can be used in Next.js in both the",
                                " ",
                                (0, r.jsx)("code", {
                                    className: "dev-tools-info-code",
                                    children: "pages"
                                }),
                                " and",
                                " ",
                                (0, r.jsx)("code", {
                                    className: "dev-tools-info-code",
                                    children: "app"
                                }),
                                " directories for faster local development."
                            ]
                        }),
                        (0, r.jsxs)("p", {
                            className: "dev-tools-info-paragraph",
                            children: [
                                "To enable Turbopack, use the",
                                " ",
                                (0, r.jsx)("code", {
                                    className: "dev-tools-info-code",
                                    children: "--turbopack"
                                }),
                                " flag when running the Next.js development server."
                            ]
                        })
                    ]
                }),
                (0, r.jsx)("div", {
                    className: "dev-tools-info-code-block-container",
                    children: (0, r.jsxs)("div", {
                        className: "dev-tools-info-code-block",
                        children: [
                            (0, r.jsx)(eT, {
                                actionLabel: "Copy Next.js Turbopack Command",
                                successLabel: "Next.js Turbopack Command Copied",
                                content: "--turbopack",
                                className: "dev-tools-info-copy-button"
                            }),
                            (0, r.jsx)("pre", {
                                className: "dev-tools-info-code-block-pre",
                                children: (0, r.jsxs)("code", {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: "  "
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: "{"
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: [
                                                "  ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-key",
                                                    children: '"scripts"'
                                                }),
                                                ": ",
                                                "{"
                                            ]
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "dev-tools-info-code-block-line dev-tools-info-highlight",
                                            children: [
                                                "    ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-key",
                                                    children: '"dev"'
                                                }),
                                                ":",
                                                " ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-value",
                                                    children: '"next dev --turbopack"'
                                                }),
                                                ","
                                            ]
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: [
                                                "    ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-key",
                                                    children: '"build"'
                                                }),
                                                ":",
                                                " ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-value",
                                                    children: '"next build"'
                                                }),
                                                ","
                                            ]
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: [
                                                "    ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-key",
                                                    children: '"start"'
                                                }),
                                                ":",
                                                " ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-value",
                                                    children: '"next start"'
                                                }),
                                                ","
                                            ]
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: [
                                                "    ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-key",
                                                    children: '"lint"'
                                                }),
                                                ":",
                                                " ",
                                                (0, r.jsx)("span", {
                                                    className: "dev-tools-info-code-block-json-value",
                                                    children: '"next lint"'
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: "  }"
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: "}"
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "dev-tools-info-code-block-line",
                                            children: "  "
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function t_(e) {
        var n = e.routerType;
        return (0, r.jsxs)("article", {
            className: "dev-tools-info-article",
            children: [
                (0, r.jsxs)("p", {
                    className: "dev-tools-info-paragraph",
                    children: [
                        "The path",
                        " ",
                        (0, r.jsx)("code", {
                            className: "dev-tools-info-code",
                            children: window.location.pathname
                        }),
                        " ",
                        'is marked as "static" since it will be prerendered during the build time.'
                    ]
                }),
                (0, r.jsxs)("p", {
                    className: "dev-tools-info-paragraph",
                    children: [
                        "With Static Rendering, routes are rendered at build time, or in the background after",
                        " ",
                        (0, r.jsx)("a", {
                            className: "dev-tools-info-link",
                            href: "pages" === n ? "https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration" : "https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "data revalidation"
                        }),
                        "."
                    ]
                }),
                (0, r.jsx)("p", {
                    className: "dev-tools-info-paragraph",
                    children: "Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page."
                })
            ]
        });
    }
    function tC(e) {
        var n = e.routerType;
        return (0, r.jsxs)("article", {
            className: "dev-tools-info-article",
            children: [
                (0, r.jsxs)("p", {
                    className: "dev-tools-info-paragraph",
                    children: [
                        "The path",
                        " ",
                        (0, r.jsx)("code", {
                            className: "dev-tools-info-code",
                            children: window.location.pathname
                        }),
                        " ",
                        'is marked as "dynamic" since it will be rendered for each user at',
                        " ",
                        (0, r.jsx)("strong", {
                            children: "request time"
                        }),
                        "."
                    ]
                }),
                (0, r.jsx)("p", {
                    className: "dev-tools-info-paragraph",
                    children: "Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params."
                }),
                "pages" === n ? (0, r.jsxs)("p", {
                    className: "dev-tools-info-pagraph",
                    children: [
                        "Exporting the",
                        " ",
                        (0, r.jsx)("a", {
                            className: "dev-tools-info-link",
                            href: "https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "getServerSideProps"
                        }),
                        " ",
                        "function will opt the route into dynamic rendering. This function will be called by the server on every request."
                    ]
                }) : (0, r.jsxs)("p", {
                    className: "dev-tools-info-paragraph",
                    children: [
                        "During rendering, if a",
                        " ",
                        (0, r.jsx)("a", {
                            className: "dev-tools-info-link",
                            href: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-apis",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Dynamic API"
                        }),
                        " ",
                        "or a",
                        " ",
                        (0, r.jsx)("a", {
                            className: "dev-tools-info-link",
                            href: "https://nextjs.org/docs/app/api-reference/functions/fetch",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "fetch"
                        }),
                        " ",
                        "option of",
                        " ",
                        (0, r.jsx)("code", {
                            className: "dev-tools-info-code",
                            children: "{ cache: 'no-store' }"
                        }),
                        " ",
                        "is discovered, Next.js will switch to dynamically rendering the whole route."
                    ]
                })
            ]
        });
    }
    var tE = {
        pages: {
            static: "https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation",
            dynamic: "https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"
        },
        app: {
            static: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default",
            dynamic: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering"
        }
    };
    function tP(e) {
        var n, t, o = e.routeType, a = e.routerType, l = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(e, [
            "routeType",
            "routerType"
        ]), i = "Static" === o, s = i ? tE[a].static : tE[a].dynamic;
        return (0, r.jsx)(tk, (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            title: "".concat(o, " Route"),
            learnMoreLink: s
        }, l), t = t = {
            children: i ? (0, r.jsx)(t_, {
                routerType: a
            }) : (0, r.jsx)(tC, {
                routerType: a
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function tN() {
        return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 20 20",
            fill: "none",
            children: (0, r.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "m9.7 3.736.045-.236h.51l.044.236a2.024 2.024 0 0 0 1.334 1.536c.19.066.375.143.554.23.618.301 1.398.29 2.03-.143l.199-.136.36.361-.135.199a2.024 2.024 0 0 0-.143 2.03c.087.179.164.364.23.554.224.65.783 1.192 1.536 1.334l.236.044v.51l-.236.044a2.024 2.024 0 0 0-1.536 1.334 4.95 4.95 0 0 1-.23.554 2.024 2.024 0 0 0 .143 2.03l.136.199-.361.36-.199-.135a2.024 2.024 0 0 0-2.03-.143c-.179.087-.364.164-.554.23a2.024 2.024 0 0 0-1.334 1.536l-.044.236h-.51l-.044-.236a2.024 2.024 0 0 0-1.334-1.536 4.952 4.952 0 0 1-.554-.23 2.024 2.024 0 0 0-2.03.143l-.199.136-.36-.361.135-.199a2.024 2.024 0 0 0 .143-2.03 4.958 4.958 0 0 1-.23-.554 2.024 2.024 0 0 0-1.536-1.334l-.236-.044v-.51l.236-.044a2.024 2.024 0 0 0 1.536-1.334 4.96 4.96 0 0 1 .23-.554 2.024 2.024 0 0 0-.143-2.03l-.136-.199.361-.36.199.135a2.024 2.024 0 0 0 2.03.143c.179-.087.364-.164.554-.23a2.024 2.024 0 0 0 1.334-1.536ZM8.5 2h3l.274 1.46c.034.185.17.333.348.394.248.086.49.186.722.3.17.082.37.074.526-.033l1.226-.839 2.122 2.122-.84 1.226a.524.524 0 0 0-.032.526c.114.233.214.474.3.722.061.177.21.314.394.348L18 8.5v3l-1.46.274a.524.524 0 0 0-.394.348 6.47 6.47 0 0 1-.3.722.524.524 0 0 0 .033.526l.839 1.226-2.122 2.122-1.226-.84a.524.524 0 0 0-.526-.032 6.477 6.477 0 0 1-.722.3.524.524 0 0 0-.348.394L11.5 18h-3l-.274-1.46a.524.524 0 0 0-.348-.394 6.477 6.477 0 0 1-.722-.3.524.524 0 0 0-.526.033l-1.226.839-2.122-2.122.84-1.226a.524.524 0 0 0 .032-.526 6.453 6.453 0 0 1-.3-.722.524.524 0 0 0-.394-.348L2 11.5v-3l1.46-.274a.524.524 0 0 0 .394-.348c.086-.248.186-.49.3-.722a.524.524 0 0 0-.033-.526l-.839-1.226 2.122-2.122 1.226.84a.524.524 0 0 0 .526.032 6.46 6.46 0 0 1 .722-.3.524.524 0 0 0 .348-.394L8.5 2Zm3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                clipRule: "evenodd"
            })
        });
    }
    function tz() {
        return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            children: (0, r.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "m.191 2.063.56.498 13.5 12 .561.498.997-1.121-.56-.498-1.81-1.608 2.88-3.342v-.98l-3.204-3.72C10.645.923 6.365.686 3.594 3.08L1.748 1.44 1.188.94.19 2.063ZM14.761 8l-2.442 2.836-1.65-1.466a3.001 3.001 0 0 0-4.342-3.86l-1.6-1.422a5.253 5.253 0 0 1 7.251.682L14.76 8ZM7.526 6.576l1.942 1.727a1.499 1.499 0 0 0-1.942-1.727Zm-7.845.935 1.722-2 1.137.979L1.24 8l2.782 3.23A5.25 5.25 0 0 0 9.9 12.703l.54 1.4a6.751 6.751 0 0 1-7.555-1.892L-.318 8.49v-.98Z",
                clipRule: "evenodd"
            })
        });
    }
    function tL() {
        return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            children: [
                (0, r.jsx)("g", {
                    clipPath: "url(#light_icon_clip_path)",
                    children: (0, r.jsx)("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M8.75.75V0h-1.5v2h1.5V.75ZM3.26 4.32l-.53-.53-.354-.353-.53-.53 1.06-1.061.53.53.354.354.53.53-1.06 1.06Zm8.42-1.06.53-.53.353-.354.53-.53 1.061 1.06-.53.53-.354.354-.53.53-1.06-1.06ZM8 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm0 1.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Zm6-5.5h2v1.5h-2v-1.5Zm-13.25 0H0v1.5h2v-1.5H.75Zm1.62 5.32-.53.53 1.06 1.06.53-.53.354-.353.53-.53-1.06-1.061-.53.53-.354.354Zm10.2 1.06.53.53 1.06-1.06-.53-.53-.354-.354-.53-.53-1.06 1.06.53.53.353.354ZM8.75 14v2h-1.5v-2h1.5Z",
                        clipRule: "evenodd"
                    })
                }),
                (0, r.jsx)("defs", {
                    children: (0, r.jsx)("clipPath", {
                        id: "light_icon_clip_path",
                        children: (0, r.jsx)("path", {
                            fill: "currentColor",
                            d: "M0 0h16v16H0z"
                        })
                    })
                })
            ]
        });
    }
    function tT() {
        return (0, r.jsx)("svg", {
            "data-testid": "geist-icon",
            height: "16",
            strokeLinejoin: "round",
            viewBox: "0 0 16 16",
            width: "16",
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z",
                fill: "currentColor"
            })
        });
    }
    function tD() {
        return (0, r.jsx)("svg", {
            width: "16",
            height: "16",
            strokeLinejoin: "round",
            children: (0, r.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H8.75v3h1.75V16h-5v-1.5h1.75v-3H1a1 1 0 0 1-1-1V2Zm1.5.5V10h13V2.5h-13Z",
                clipRule: "evenodd"
            })
        });
    }
    function tA(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    var tR = ("TURBOPACK compile-time value", "bottom-left") || "bottom-left", tI = {
        Small: 16 / 14,
        Medium: 1,
        Large: 16 / 18
    };
    function tM(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function tF(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function tH(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function tU(e, n) {
        if (null == e) return {};
        var t, r, o = function(e, n) {
            if (null == e) return {};
            var t, r, o = {}, a = Object.keys(e);
            for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        }(e, n);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
        }
        return o;
    }
    function tV(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return tM(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tM(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function tB() {
        var e, n, t = (e = [
            "\n  .preferences-container {\n    width: 100%;\n  }\n\n  @media (min-width: 576px) {\n    .preferences-container {\n      width: 480px;\n    }\n  }\n\n  .preference-section:first-child {\n    padding-top: 0;\n  }\n\n  .preference-section {\n    padding: 12px 0;\n    border-bottom: 1px solid var(--color-gray-400);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n  }\n\n  .preference-section:last-child {\n    border-bottom: none;\n  }\n\n  .preference-header {\n    margin-bottom: 0;\n    flex: 1;\n  }\n\n  .preference-header label {\n    font-size: var(--size-14);\n    font-weight: 500;\n    color: var(--color-gray-1000);\n    margin: 0;\n  }\n\n  .preference-description {\n    color: var(--color-gray-900);\n    font-size: var(--size-14);\n    margin: 0;\n  }\n\n  .select-button,\n  .action-button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-400);\n    border-radius: var(--rounded-lg);\n    font-weight: 400;\n    font-size: var(--size-14);\n    color: var(--color-gray-1000);\n    padding: 6px 8px;\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n  }\n\n  .select-button {\n    &:focus-within {\n      outline: var(--focus-ring);\n    }\n\n    select {\n      all: unset;\n    }\n\n    option {\n      color: var(--color-gray-1000);\n      background: var(--color-background-100);\n    }\n  }\n\n  :global(.icon) {\n    width: 18px;\n    height: 18px;\n    color: #666;\n  }\n"
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return tB = function() {
            return t;
        }, t;
    }
    function t$(e) {
        var n = e.setPosition, t = e.position, a = e.hide, l = e.scale, i = e.setScale, s = tU(e, [
            "setPosition",
            "position",
            "hide",
            "scale",
            "setScale"
        ]), c = tV((0, o.useState)(function() {
            if ("undefined" == typeof localStorage) return "system";
            var e = localStorage.getItem(E);
            return "dark" === e || "light" === e ? e : "system";
        }()), 2), u = c[0], d = c[1];
        function f() {
            var e = "/__nextjs_restart_dev";
            ("TURBOPACK compile-time value", false) && (e = "/__nextjs_restart_dev?invalidatePersistentCache"), fetch(e, {
                method: "POST"
            }).then(function() {});
        }
        return (0, r.jsxs)(tk, tH(tF({
            title: "Preferences"
        }, s), {
            children: [
                (0, r.jsx)("h2", {
                    className: "dev-tools-info-section-title",
                    children: "General"
                }),
                (0, r.jsxs)("div", {
                    className: "preferences-container",
                    children: [
                        (0, r.jsxs)("div", {
                            className: "preference-section",
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "preference-header",
                                    children: [
                                        (0, r.jsx)("label", {
                                            htmlFor: "theme",
                                            children: "Theme"
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "preference-description",
                                            children: "Select your theme preference."
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(tq, {
                                    id: "theme",
                                    name: "theme",
                                    prefix: (0, r.jsx)(tZ, {
                                        theme: u
                                    }),
                                    value: u,
                                    onChange: function(e) {
                                        var n = document.querySelector("nextjs-portal");
                                        if (n) {
                                            if (d(e.target.value), "system" === e.target.value) {
                                                n.classList.remove("dark"), n.classList.remove("light"), localStorage.removeItem(E);
                                                return;
                                            }
                                            "dark" === e.target.value ? (n.classList.add("dark"), n.classList.remove("light"), localStorage.setItem(E, "dark")) : (n.classList.remove("dark"), n.classList.add("light"), localStorage.setItem(E, "light"));
                                        }
                                    },
                                    children: [
                                        (0, r.jsx)("option", {
                                            value: "system",
                                            children: "System"
                                        }),
                                        (0, r.jsx)("option", {
                                            value: "light",
                                            children: "Light"
                                        }),
                                        (0, r.jsx)("option", {
                                            value: "dark",
                                            children: "Dark"
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className: "preference-section",
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "preference-header",
                                    children: [
                                        (0, r.jsx)("label", {
                                            htmlFor: "position",
                                            children: "Position"
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "preference-description",
                                            children: "Adjust the placement of your dev tools."
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(tq, {
                                    id: "position",
                                    name: "position",
                                    value: t,
                                    onChange: function(e) {
                                        n(e.target.value), localStorage.setItem(P, e.target.value);
                                    },
                                    children: [
                                        (0, r.jsx)("option", {
                                            value: "bottom-left",
                                            children: "Bottom Left"
                                        }),
                                        (0, r.jsx)("option", {
                                            value: "bottom-right",
                                            children: "Bottom Right"
                                        }),
                                        (0, r.jsx)("option", {
                                            value: "top-left",
                                            children: "Top Left"
                                        }),
                                        (0, r.jsx)("option", {
                                            value: "top-right",
                                            children: "Top Right"
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className: "preference-section",
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "preference-header",
                                    children: [
                                        (0, r.jsx)("label", {
                                            htmlFor: "size",
                                            children: "Size"
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "preference-description",
                                            children: "Adjust the size of your dev tools."
                                        })
                                    ]
                                }),
                                (0, r.jsx)(tq, {
                                    id: "size",
                                    name: "size",
                                    value: l,
                                    onChange: function(e) {
                                        i(Number(e.target.value));
                                    },
                                    children: Object.entries(tI).map(function(e) {
                                        var n = tV(e, 2), t = n[0], o = n[1];
                                        return (0, r.jsx)("option", {
                                            value: o,
                                            children: t
                                        }, t);
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className: "preference-section",
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "preference-header",
                                    children: [
                                        (0, r.jsx)("label", {
                                            id: "hide-dev-tools",
                                            children: "Hide Dev Tools for this session"
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "preference-description",
                                            children: "Hide Dev Tools until you restart your dev server, or 1 day."
                                        })
                                    ]
                                }),
                                (0, r.jsx)("div", {
                                    className: "preference-control",
                                    children: (0, r.jsxs)("button", {
                                        "aria-describedby": "hide-dev-tools",
                                        name: "hide-dev-tools",
                                        "data-hide-dev-tools": !0,
                                        className: "action-button",
                                        onClick: a,
                                        children: [
                                            (0, r.jsx)(tz, {}),
                                            (0, r.jsx)("span", {
                                                children: "Hide"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)("div", {
                            className: "preference-section",
                            children: (0, r.jsxs)("div", {
                                className: "preference-header",
                                children: [
                                    (0, r.jsx)("label", {
                                        children: "Disable Dev Tools for this project"
                                    }),
                                    (0, r.jsxs)("p", {
                                        className: "preference-description",
                                        children: [
                                            "To disable this UI completely, set",
                                            " ",
                                            (0, r.jsx)("code", {
                                                className: "dev-tools-info-code",
                                                children: "devIndicators: false"
                                            }),
                                            " ",
                                            "in your ",
                                            (0, r.jsx)("code", {
                                                className: "dev-tools-info-code",
                                                children: "next.config"
                                            }),
                                            " ",
                                            "file."
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)("h2", {
                    className: "dev-tools-info-section-title",
                    children: "Development Server"
                }),
                (0, r.jsx)("div", {
                    className: "preferences-container",
                    children: (0, r.jsxs)("div", {
                        className: "preference-section",
                        children: [
                            (0, r.jsxs)("div", {
                                className: "preference-header",
                                children: [
                                    (0, r.jsx)("label", {
                                        id: "restart-dev-server",
                                        children: "Restart Dev Server"
                                    }),
                                    (0, r.jsx)("p", {
                                        className: "preference-description",
                                        children: "Restarts the development server without needing to leave the browser."
                                    })
                                ]
                            }),
                            (0, r.jsx)("div", {
                                className: "preference-control",
                                children: (0, r.jsx)("button", {
                                    "aria-describedby": "restart-dev-server",
                                    title: "Restarts the development server without needing to leave the browser.",
                                    name: "restart-dev-server",
                                    "data-restart-dev-server": !0,
                                    className: "action-button",
                                    onClick: f,
                                    children: (0, r.jsx)("span", {
                                        children: "Restart"
                                    })
                                })
                            })
                        ]
                    })
                }),
                ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null
            ]
        }));
    }
    function tq(e) {
        var n = e.children, t = e.prefix, o = tU(e, [
            "children",
            "prefix"
        ]);
        return (0, r.jsxs)("div", {
            className: "select-button",
            children: [
                t,
                (0, r.jsx)("select", tH(tF({}, o), {
                    children: n
                })),
                (0, r.jsx)(tQ, {})
            ]
        });
    }
    function tZ(e) {
        switch(e.theme){
            case "system":
                return (0, r.jsx)(tD, {});
            case "dark":
                return (0, r.jsx)(tT, {});
            case "light":
                return (0, r.jsx)(tL, {});
            default:
                return null;
        }
    }
    var tW = R(tB());
    function tQ() {
        return (0, r.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            "aria-hidden": !0,
            children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z",
                fill: "currentColor"
            })
        });
    }
    var tX = "undefined" == typeof window ? void 0 : function(e) {
        var n = e.getKey, t = void 0 === n ? function(e) {
            return e;
        } : n, r = {
            value: void 0,
            children: {}
        };
        return {
            insert: function(e) {
                var n = r, o = t(e).split("/"), a = !0, l = !1, i = void 0;
                try {
                    for(var s, c = o[Symbol.iterator](); !(a = (s = c.next()).done); a = !0){
                        var u = s.value;
                        n.children[u] || (n.children[u] = {
                            children: {}
                        }), n = n.children[u];
                    }
                } catch (e) {
                    l = !0, i = e;
                } finally{
                    try {
                        a || null == c.return || c.return();
                    } finally{
                        if (l) throw i;
                    }
                }
                n.value = e;
            },
            getRoot: function() {
                return r;
            }
        };
    }({
        getKey: function(e) {
            return e.pagePath;
        }
    });
    function tG() {
        return "undefined" == typeof window ? {} : (window.__NEXT_DEVTOOLS_CLIENT_STATE || (window.__NEXT_DEVTOOLS_CLIENT_STATE = {
            tree: tX
        }), window.__NEXT_DEVTOOLS_CLIENT_STATE);
    }
    var tK = "undefined" == typeof window ? null : new Set, tY = "undefined" == typeof window ? {
        subscribe: function() {
            return function() {};
        },
        getSnapshot: function() {
            return {};
        },
        getServerSnapshot: function() {}
    } : {
        subscribe: function(e) {
            return null == tK || tK.add(e), function() {
                return null == tK ? void 0 : tK.delete(e);
            };
        },
        getSnapshot: function() {
            return tG();
        },
        getServerSnapshot: function() {}
    }, tJ = tY.subscribe, t0 = tY.getSnapshot, t1 = tY.getServerSnapshot;
    function t2(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function t3(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function t4() {
        var e, n, t = (e = [
            "\n  .segment-explorer-content {\n    overflow-y: auto;\n    padding: 0 12px;\n    font-size: var(--size-14);\n  }\n\n  .segment-explorer-item-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 2px 0;\n  }\n\n  [data-nextjs-devtool-segment-explorer-level].segment-explorer-segment-children {\n    padding-left: 20px;\n  }\n  [data-nextjs-devtool-segment-explorer-level='0'].segment-explorer-segment-children {\n    padding-left: 0px;\n  }\n\n  .segment-explorer-filename-path {\n    display: inline-block;\n  }\n\n  .segment-explorer-filename-path a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n\n  .segment-explorer-line {\n    white-space: pre;\n    cursor: default;\n  }\n\n  .segment-explorer-line-icon {\n    margin-right: 4px;\n  }\n  .segment-explorer-line-icon-page {\n    color: inherit;\n  }\n\n  .segment-explorer-line-text-page {\n    color: var(--color-gray-1000);\n    font-weight: 500;\n  }\n"
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return t4 = function() {
            return t;
        }, t;
    }
    var t5 = {
        layout: (0, r.jsx)(function(e) {
            return (0, r.jsx)("svg", t3(t2({}, e), {
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                    d: "M16 12.5L15.9873 12.7559C15.8677 13.9323 14.9323 14.8677 13.7559 14.9873L13.5 15H2.5L2.24414 14.9873C1.06772 14.8677 0.132274 13.9323 0.0126953 12.7559L0 12.5V1H16V12.5ZM1.5 6.25488V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H4.99512V6.25488H1.5ZM6.24512 6.25488V13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6.25488H6.24512ZM1.5 5.00488H14.5V2.5H1.5V5.00488Z",
                    fill: "currentColor"
                })
            }));
        }, {
            width: 16
        }),
        page: (0, r.jsx)(function(e) {
            return (0, r.jsx)("svg", t3(t2({}, e), {
                viewBox: "0 0 16 16",
                fill: "none",
                strokeLinejoin: "round",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.5 6.5V13.5C14.5 14.8807 13.3807 16 12 16H4C2.61929 16 1.5 14.8807 1.5 13.5V1.5V0H3H8H9.08579C9.351 0 9.60536 0.105357 9.79289 0.292893L14.2071 4.70711C14.3946 4.89464 14.5 5.149 14.5 5.41421V6.5ZM13 6.5V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V1.5H8V5V6.5H9.5H13ZM9.5 2.12132V5H12.3787L9.5 2.12132Z",
                    fill: "currentColor"
                })
            }));
        }, {
            width: 16
        })
    };
    function t6(e) {
        var n = e.tree;
        return n ? (0, r.jsx)("div", {
            className: "segment-explorer-content",
            "data-nextjs-devtool-segment-explorer": !0,
            children: (0, r.jsx)(t8, {
                tree: n,
                node: n.getRoot(),
                level: 0,
                segment: ""
            })
        }) : null;
    }
    function t8(e) {
        var n, t, o = e.tree, a = e.segment, l = e.node, i = e.level, s = (null == (n = l.value) ? void 0 : n.pagePath) || "", c = null == (t = l.value) ? void 0 : t.type, u = (s.split("/") || []).pop() || "", d = Object.keys(l.children).sort(function(e, n) {
            var t = e.includes("."), r = n.includes(".");
            return t && !r ? -1 : !t && r ? 1 : e.localeCompare(n);
        });
        return (0, r.jsxs)("div", {
            className: "segment-explorer-item",
            "data-nextjs-devtool-segment-explorer-segment": a,
            children: [
                u ? (0, r.jsx)("div", {
                    className: eC("segment-explorer-item-row"),
                    children: (0, r.jsx)("div", {
                        className: "segment-explorer-line",
                        children: (0, r.jsxs)("div", {
                            className: "segment-explorer-line-text-".concat(c),
                            children: [
                                (0, r.jsx)("span", {
                                    className: eC("segment-explorer-line-icon", "segment-explorer-line-icon-".concat(c)),
                                    children: "layout" === c ? t5.layout : t5.page
                                }),
                                (0, r.jsx)("span", {
                                    className: "segment-explorer-filename-path",
                                    children: u
                                })
                            ]
                        })
                    })
                }) : a ? (0, r.jsx)("div", {
                    className: "segment-explorer-item-row",
                    children: (0, r.jsx)("div", {
                        className: "segment-explorer-line",
                        children: (0, r.jsxs)("div", {
                            className: "segment-explorer-line-text-".concat(c),
                            children: [
                                (0, r.jsx)("span", {
                                    className: eC("segment-explorer-line-icon", "segment-explorer-line-icon-".concat(c))
                                }),
                                (0, r.jsx)("span", {
                                    className: "segment-explorer-filename-path",
                                    children: "".concat(a, "/")
                                })
                            ]
                        })
                    })
                }) : null,
                (0, r.jsx)("div", {
                    className: "segment-explorer-segment-children",
                    "data-nextjs-devtool-segment-explorer-level": i,
                    children: d.map(function(e) {
                        var n = l.children[e];
                        return n && (0, r.jsx)(t8, {
                            segment: e,
                            tree: o,
                            node: n,
                            level: i + 1
                        }, e);
                    })
                })
            ]
        });
    }
    function t9(e) {
        var n = (0, o.useSyncExternalStore)(tJ, t0, t1);
        return n ? (0, r.jsx)(tk, t3(t2({
            title: "Segment Explorer"
        }, e), {
            children: (0, r.jsx)(t6, {
                tree: n.tree
            })
        })) : null;
    }
    var t7 = R(t4());
    function re(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function rn(e) {
        return function(e) {
            if (Array.isArray(e)) return re(e);
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || rt(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function rt(e, n) {
        if (e) {
            if ("string" == typeof e) return re(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return re(e, n);
        }
    }
    function rr(e) {
        var n, t, a = e.children, l = e.padding, i = e.position, s = e.setPosition, c = function(e) {
            var n = (0, o.useRef)(null), t = (0, o.useRef)("idle"), r = (0, o.useRef)({
                x: 0,
                y: 0
            }), a = (0, o.useRef)({
                x: 0,
                y: 0
            }), l = (0, o.useRef)(0), i = (0, o.useRef)([]);
            function s(e) {
                n.current && (a.current = e, n.current.style.translate = "".concat(e.x, "px ").concat(e.y, "px"));
            }
            function c(e) {
                if ("drag-end" === t.current) {
                    var r;
                    e.preventDefault(), e.stopPropagation(), t.current = "idle", null == (r = n.current) || r.removeEventListener("click", c);
                }
            }
            function u(o) {
                if ("press" === t.current) {
                    var c, u, d, f, p = o.clientX - r.current.x, h = o.clientY - r.current.y;
                    Math.sqrt(p * p + h * h) >= e.threshold && (t.current = "drag", null == (u = n.current) || u.setPointerCapture(o.pointerId), null == (d = n.current) || d.classList.add("dev-tools-grabbing"), null == (f = e.onDragStart) || f.call(e));
                }
                if ("drag" === t.current) {
                    var m = {
                        x: o.clientX,
                        y: o.clientY
                    }, g = m.x - r.current.x, b = m.y - r.current.y;
                    r.current = m, s({
                        x: a.current.x + g,
                        y: a.current.y + b
                    });
                    var v = Date.now();
                    v - l.current >= 10 && (i.current = rn(i.current.slice(-5)).concat([
                        {
                            position: m,
                            timestamp: v
                        }
                    ])), l.current = v, null == (c = e.onDrag) || c.call(e, a.current);
                }
            }
            function d(r) {
                t.current = "drag" === t.current ? "drag-end" : "idle", window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", d);
                var o, l, s, c = function(e) {
                    if (e.length < 2) return {
                        x: 0,
                        y: 0
                    };
                    var n = e[0], t = e[e.length - 1], r = t.timestamp - n.timestamp;
                    return 0 === r ? {
                        x: 0,
                        y: 0
                    } : {
                        x: 1e3 * ((t.position.x - n.position.x) / r),
                        y: 1e3 * ((t.position.y - n.position.y) / r)
                    };
                }(i.current);
                i.current = [], null == (o = n.current) || o.classList.remove("dev-tools-grabbing"), null == (l = n.current) || l.releasePointerCapture(r.pointerId), null == (s = e.onDragEnd) || s.call(e, a.current, c);
            }
            return {
                ref: n,
                onPointerDown: function(e) {
                    var o;
                    0 === e.button && (r.current = {
                        x: e.clientX,
                        y: e.clientY
                    }, t.current = "press", window.addEventListener("pointermove", u), window.addEventListener("pointerup", d), null == (o = n.current) || o.addEventListener("click", c));
                },
                animate: function(t) {
                    var r = n.current;
                    null !== r && (r.style.transition = "translate 491.22ms var(--timing-bounce)", r.addEventListener("transitionend", function n(o) {
                        if ("translate" === o.propertyName) {
                            var l;
                            null == (l = e.onAnimationEnd) || l.call(e, t), a.current = {
                                x: 0,
                                y: 0
                            }, r.style.transition = "", r.removeEventListener("transitionend", n);
                        }
                    }), s(t.translation));
                }
            };
        }({
            threshold: 5,
            onDragStart: e.onDragStart,
            onDragEnd: function(e, n) {
                var t, r, o, a, s, c, f, p, h, m, g, b, v, y, x, w, j, k;
                d((v = (t = {
                    x: e.x + ro(n.x),
                    y: e.y + ro(n.y)
                }).x, y = t.y, w = Object.entries(x = (f = 2 * l, p = (null == (s = u.current) ? void 0 : s.offsetWidth) || 0, h = (null == (c = u.current) ? void 0 : c.offsetHeight) || 0, m = window.innerWidth - document.documentElement.clientWidth, {
                    "top-left": {
                        x: 0 - (g = (o = (r = i).includes("right"), a = r.includes("bottom"), {
                            x: o ? window.innerWidth - m - f - p : 0,
                            y: a ? window.innerHeight - f - h : 0
                        })).x,
                        y: 0 - g.y
                    },
                    "top-right": {
                        x: window.innerWidth - m - f - p - g.x,
                        y: 0 - g.y
                    },
                    "bottom-left": {
                        x: 0 - g.x,
                        y: window.innerHeight - f - h - g.y
                    },
                    "bottom-right": {
                        x: window.innerWidth - m - f - p - g.x,
                        y: window.innerHeight - f - h - g.y
                    }
                })).map(function(e) {
                    var n, t, r = (t = 2, function(e) {
                        if (Array.isArray(e)) return e;
                    }(n = e) || function(e, n) {
                        var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var a = [], l = !0, i = !1;
                            try {
                                for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                            } catch (e) {
                                i = !0, r = e;
                            } finally{
                                try {
                                    l || null == o.return || o.return();
                                } finally{
                                    if (i) throw r;
                                }
                            }
                            return a;
                        }
                    }(n, 2) || rt(n, t) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }()), o = r[0], a = r[1];
                    return {
                        key: o,
                        distance: Math.sqrt(Math.pow(v - a.x, 2) + Math.pow(y - a.y, 2))
                    };
                }), j = (b = Math).min.apply(b, rn(w.map(function(e) {
                    return e.distance;
                }))), (k = w.find(function(e) {
                    return e.distance === j;
                })) ? {
                    translation: x[k.key],
                    corner: k.key
                } : {
                    corner: i,
                    translation: x[i]
                }));
            },
            onAnimationEnd: function(e) {
                var n = e.corner;
                setTimeout(function() {
                    var e;
                    null == (e = u.current) || e.style.removeProperty("translate"), s(n);
                });
            }
        }), u = c.ref, d = c.animate, f = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
                if (null == e) return {};
                var t, r, o = {}, a = Object.keys(e);
                for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        }(c, [
            "ref",
            "animate"
        ]);
        return (0, r.jsx)("div", (n = function(e) {
            for(var n = 1; n < arguments.length; n++){
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.forEach(function(n) {
                    var r, o, a;
                    r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a;
                });
            }
            return e;
        }({
            ref: u
        }, f), t = t = {
            style: {
                touchAction: "none"
            },
            children: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function ro(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .999;
        return e / 1e3 * n / (1 - n);
    }
    function ra(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function rl(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e;
    }
    function ri(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                rl(e, n, t[n]);
            });
        }
        return e;
    }
    function rs(e, n) {
        if (null == e) return {};
        var t, r, o = function(e, n) {
            if (null == e) return {};
            var t, r, o = {}, a = Object.keys(e);
            for(r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        }(e, n);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for(r = 0; r < a.length; r++)t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
        }
        return o;
    }
    function rc(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return ra(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ra(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function ru(e) {
        var n = e.state, t = e.errorCount, a = e.isBuildError, l = rs(e, [
            "state",
            "errorCount",
            "isBuildError"
        ]), i = rc((0, o.useState)(!0), 2), s = i[0], c = i[1];
        return (0, r.jsx)(rp, ri({
            routerType: n.routerType,
            semver: n.versionInfo.installed,
            issueCount: t,
            isDevBuilding: n.buildingIndicator,
            isDevRendering: n.renderingIndicator,
            isStaticRoute: n.staticIndicator,
            hide: function() {
                c(!1), fetch("/__nextjs_disable_dev_indicator", {
                    method: "POST"
                });
            },
            isTurbopack: !1,
            disabled: n.disableDevIndicator || !s,
            isBuildError: a
        }, l));
    }
    var rd = (0, o.createContext)({}), rf = {
        Root: "root",
        Turbo: "turbo",
        Route: "route",
        Preferences: "preferences",
        SegmentExplorer: "segment-explorer"
    };
    function rp(e) {
        var n, t, a = e.routerType, l = e.disabled, i = e.issueCount, s = e.isDevBuilding, c = e.isDevRendering, u = e.isStaticRoute, d = e.isTurbopack, f = e.isBuildError, p = e.hide, h = e.dispatch, m = e.scale, g = e.setScale, b = (0, o.useRef)(null), v = (0, o.useRef)(null), y = rc((0, o.useState)(null), 2), x = y[0], j = y[1], O = rc((0, o.useState)("undefined" != typeof localStorage && localStorage.getItem(P) ? localStorage.getItem(P) : tR), 2), S = O[0], _ = O[1], C = rc((0, o.useState)(-1), 2), E = C[0], N = C[1], z = x === rf.Root, L = x === rf.Turbo, T = x === rf.Route, D = x === rf.Preferences, A = x === rf.SegmentExplorer, R = tj(z, {
            enterDelay: 0,
            exitDelay: 200
        }), I = R.mounted, M = R.rendered;
        function F(e) {
            if ("first" === e) return void setTimeout(function() {
                var e, n = null == (e = b.current) ? void 0 : e.querySelectorAll('[role="menuitem"]');
                n && F(Number(n[0].getAttribute("data-index")));
            });
            if ("last" === e) return void setTimeout(function() {
                var e, n = null == (e = b.current) ? void 0 : e.querySelectorAll('[role="menuitem"]');
                n && F(n.length - 1);
            });
            var n, t = null == (n = b.current) ? void 0 : n.querySelector('[data-index="'.concat(e, '"]'));
            t && (N(e), null == t || t.focus());
        }
        function H() {
            j(rf.Root), setTimeout(function() {
                F(E);
            }, 200);
        }
        function U() {
            j(function(e) {
                return e === rf.Root ? null : e;
            });
        }
        nL(b, v, z), nD(b, v, z, U), (0, o.useEffect)(function() {
            if (null === x) {
                var e = setTimeout(function() {
                    N(-1);
                }, 200);
                return function() {
                    return clearTimeout(e);
                };
            }
        }, [
            x
        ]);
        var V = rc(S.split("-", 2), 2), B = V[0], $ = V[1], q = (rl(n = {}, B, "calc(100% + 8px)"), rl(n, $, 0), n);
        return (0, r.jsxs)(nQ, {
            "data-nextjs-toast": !0,
            style: (rl(t = {
                "--animate-out-duration-ms": "".concat(200, "ms"),
                "--animate-out-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1.1)",
                boxShadow: "none",
                zIndex: 0x7fffffff
            }, B, "".concat(20, "px")), rl(t, $, "".concat(20, "px")), t),
            children: [
                (0, r.jsx)(rr, {
                    padding: 20,
                    onDragStart: function() {
                        return j(null);
                    },
                    position: S,
                    setPosition: function(e) {
                        localStorage.setItem(P, e), _(e);
                    },
                    children: (0, r.jsx)(tm, {
                        ref: v,
                        "aria-haspopup": "menu",
                        "aria-expanded": z,
                        "aria-controls": "nextjs-dev-tools-menu",
                        "aria-label": "".concat(z ? "Close" : "Open", " Next.js Dev Tools"),
                        "data-nextjs-dev-tools-button": !0,
                        disabled: l,
                        issueCount: i,
                        onTriggerClick: function() {
                            x === rf.Root ? j(null) : (j(rf.Root), setTimeout(function() {
                                F("first");
                            }));
                        },
                        toggleErrorOverlay: function() {
                            h({
                                type: k
                            });
                        },
                        isDevBuilding: s,
                        isDevRendering: c,
                        isBuildError: f,
                        scale: m
                    })
                }),
                (0, r.jsx)(tP, {
                    isOpen: T,
                    close: H,
                    triggerRef: v,
                    style: q,
                    routerType: a,
                    routeType: u ? "Static" : "Dynamic"
                }),
                (0, r.jsx)(tS, {
                    isOpen: L,
                    close: H,
                    triggerRef: v,
                    style: q
                }),
                (0, r.jsx)(t$, {
                    isOpen: D,
                    close: H,
                    triggerRef: v,
                    style: q,
                    hide: function() {
                        j(null), p();
                    },
                    setPosition: _,
                    position: S,
                    scale: m,
                    setScale: g
                }),
                ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
                I && (0, r.jsx)("div", {
                    ref: b,
                    id: "nextjs-dev-tools-menu",
                    role: "menu",
                    dir: "ltr",
                    "aria-orientation": "vertical",
                    "aria-label": "Next.js Dev Tools Items",
                    tabIndex: -1,
                    className: "dev-tools-indicator-menu",
                    onKeyDown: function(e) {
                        switch(e.preventDefault(), e.key){
                            case "ArrowDown":
                                F(E + 1);
                                break;
                            case "ArrowUp":
                                F(E - 1);
                                break;
                            case "Home":
                                F("first");
                                break;
                            case "End":
                                F("last");
                        }
                    },
                    "data-rendered": M,
                    style: q,
                    children: (0, r.jsxs)(rd.Provider, {
                        value: {
                            closeMenu: U,
                            selectedIndex: E,
                            setSelectedIndex: N
                        },
                        children: [
                            (0, r.jsxs)("div", {
                                className: "dev-tools-indicator-inner",
                                children: [
                                    i > 0 && (0, r.jsx)(rm, {
                                        title: "".concat(i, " ").concat(1 === i ? "issue" : "issues", " found. Click to view details in the dev overlay."),
                                        index: 0,
                                        label: "Issues",
                                        value: (0, r.jsx)(rg, {
                                            children: i
                                        }),
                                        onClick: function() {
                                            j(null), i > 0 && h({
                                                type: w
                                            });
                                        }
                                    }),
                                    (0, r.jsx)(rm, {
                                        title: "Current route is ".concat(u ? "static" : "dynamic", "."),
                                        label: "Route",
                                        index: 1,
                                        value: u ? "Static" : "Dynamic",
                                        onClick: function() {
                                            return j(rf.Route);
                                        },
                                        "data-nextjs-route-type": u ? "static" : "dynamic"
                                    }),
                                    d ? (0, r.jsx)(rm, {
                                        title: "Turbopack is enabled.",
                                        label: "Turbopack",
                                        value: "Enabled"
                                    }) : (0, r.jsx)(rm, {
                                        index: 2,
                                        title: "Learn about Turbopack and how to enable it in your application.",
                                        label: "Try Turbopack",
                                        value: (0, r.jsx)(rh, {}),
                                        onClick: function() {
                                            return j(rf.Turbo);
                                        }
                                    })
                                ]
                            }),
                            (0, r.jsxs)("div", {
                                className: "dev-tools-indicator-footer",
                                children: [
                                    (0, r.jsx)(rm, {
                                        "data-preferences": !0,
                                        label: "Preferences",
                                        value: (0, r.jsx)(tN, {}),
                                        onClick: function() {
                                            return j(rf.Preferences);
                                        },
                                        index: d ? 2 : 3
                                    }),
                                    ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
    function rh() {
        return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            children: (0, r.jsx)("path", {
                fill: "#666",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.50011 1.93945L6.03044 2.46978L10.8537 7.293C11.2442 7.68353 11.2442 8.31669 10.8537 8.70722L6.03044 13.5304L5.50011 14.0608L4.43945 13.0001L4.96978 12.4698L9.43945 8.00011L4.96978 3.53044L4.43945 3.00011L5.50011 1.93945Z"
            })
        });
    }
    function rm(e) {
        var n, t, a = e.index, l = e.label, i = e.value, s = e.onClick, c = e.href, u = rs(e, [
            "index",
            "label",
            "value",
            "onClick",
            "href"
        ]), d = "function" == typeof s || "string" == typeof c, f = (0, o.useContext)(rd), p = f.closeMenu, h = f.selectedIndex, m = f.setSelectedIndex, g = h === a;
        function b() {
            d && (null == s || s(), p(), c && window.open(c, "_blank", "noopener, noreferrer"));
        }
        return (0, r.jsxs)("div", (n = ri({
            className: "dev-tools-indicator-item",
            "data-index": a,
            "data-selected": g,
            onClick: b,
            onMouseMove: function() {
                d && void 0 !== a && h !== a && m(a);
            },
            onMouseLeave: function() {
                return m(-1);
            },
            onKeyDown: function(e) {
                ("Enter" === e.key || " " === e.key) && b();
            },
            role: d ? "menuitem" : void 0,
            tabIndex: g ? 0 : -1
        }, u), t = t = {
            children: [
                (0, r.jsx)("span", {
                    className: "dev-tools-indicator-label",
                    children: l
                }),
                (0, r.jsx)("span", {
                    className: "dev-tools-indicator-value",
                    children: i
                })
            ]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }), n));
    }
    function rg(e) {
        var n = e.children;
        return (0, r.jsxs)("span", {
            className: "dev-tools-indicator-issue-count",
            "data-has-issues": n > 0,
            children: [
                (0, r.jsx)("span", {
                    className: "dev-tools-indicator-issue-count-indicator"
                }),
                n
            ]
        });
    }
    function rb() {
        var e, n, t = (e = [
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n      "
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return rb = function() {
            return t;
        }, t;
    }
    function rv() {
        return (0, r.jsx)("style", {
            children: R(rb(), "\n  .nextjs-data-copy-button {\n    color: inherit;\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n  }\n  .nextjs-data-copy-button:disabled {\n    background-color: var(--color-gray-100);\n    cursor: not-allowed;\n  }\n  .nextjs-data-copy-button--initial:hover:not(:disabled) {\n    cursor: pointer;\n  }\n  .nextjs-data-copy-button--error:not(:disabled),\n  .nextjs-data-copy-button--error:hover:not(:disabled) {\n    color: var(--color-ansi-red);\n  }\n  .nextjs-data-copy-button--success:not(:disabled) {\n    color: var(--color-ansi-green);\n  }\n", '\n  [data-nextjs-call-stack-frame-no-source] {\n    padding: 6px 8px;\n    margin-bottom: 4px;\n\n    border-radius: var(--rounded-lg);\n  }\n\n  [data-nextjs-call-stack-frame-no-source]:last-child {\n    margin-bottom: 0;\n  }\n\n  [data-nextjs-call-stack-frame-ignored="true"] {\n    opacity: 0.6;\n  }\n\n  [data-nextjs-call-stack-frame] {\n    user-select: text;\n    display: block;\n    box-sizing: border-box;\n\n    user-select: text;\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    -ms-user-select: text;\n\n    padding: 6px 8px;\n\n    border-radius: var(--rounded-lg);\n  }\n\n  .call-stack-frame-method-name {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n\n    margin-bottom: 4px;\n    font-family: var(--font-stack-monospace);\n\n    color: var(--color-gray-1000);\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-20);\n\n    svg {\n      width: var(--size-16px);\n      height: var(--size-16px);\n    }\n  }\n\n  .open-in-editor-button, .source-mapping-error-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: var(--rounded-full);\n    padding: 4px;\n    color: var(--color-font);\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n\n    &:focus-visible {\n      outline: var(--focus-ring);\n      outline-offset: -2px;\n    }\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n  }\n\n  .call-stack-frame-file-source {\n    color: var(--color-gray-900);\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n  }\n', "\n  [data-nextjs-environment-name-label] {\n    padding: 2px 6px;\n    margin: 0;\n    border-radius: var(--rounded-md-2);\n    background: var(--color-gray-100);\n    font-weight: 600;\n    font-size: var(--size-12);\n    color: var(--color-gray-900);\n    font-family: var(--font-stack-monospace);\n    line-height: var(--size-20);\n  }\n", "\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--color-backdrop);\n    backdrop-filter: blur(10px);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n", "\n  .nextjs-toast {\n    position: fixed;\n    max-width: 420px;\n    z-index: 9000;\n    box-shadow: 0px 16px 32px\n      rgba(0, 0, 0, 0.25);\n  }\n\n  .nextjs-toast-errors-parent {\n    padding: 16px;\n    border-radius: var(--rounded-4xl);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n  }\n", "\n  [data-nextjs-dialog-root] {\n    --next-dialog-radius: var(--rounded-xl);\n    --next-dialog-max-width: 960px;\n    --next-dialog-row-padding: 16px;\n    --next-dialog-padding: 12px;\n    --next-dialog-notch-height: 42px;\n    --next-dialog-border-width: 1px;\n\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-height: calc(100% - 56px);\n    max-width: var(--next-dialog-max-width);\n    margin-right: auto;\n    margin-left: auto;\n    scale: 0.97;\n    opacity: 0;\n    transition-property: scale, opacity;\n    transition-duration: var(--transition-duration);\n    transition-timing-function: var(--timing-overlay);\n\n    &[data-rendered='true'] {\n      opacity: 1;\n      scale: 1;\n    }\n\n    [data-nextjs-scroll-fader][data-side=\"top\"] {\n      left: 1px;\n      top: calc(var(--next-dialog-notch-height) + var(--next-dialog-border-width));\n      width: calc(100% - var(--next-dialog-padding));\n      opacity: 0;\n    }\n  }\n\n  [data-nextjs-dialog] {\n    outline: 0;\n  }\n\n  [data-nextjs-dialog], [data-nextjs-dialog] * {\n    &::-webkit-scrollbar {\n      width: 6px;\n      height: 6px;\n      border-radius: 0 0 1rem 1rem;\n      margin-bottom: 1rem;\n    }\n\n    &::-webkit-scrollbar-button {\n      display: none;\n    }\n\n    &::-webkit-scrollbar-track {\n      border-radius: 0 0 1rem 1rem;\n      background-color: var(--color-background-100);\n    }\n      \n    &::-webkit-scrollbar-thumb {\n      border-radius: 1rem;\n      background-color: var(--color-gray-500);\n    }\n  }\n\n  /* Place overflow: hidden on this so we can break out from [data-nextjs-dialog] */\n  [data-nextjs-dialog-sizer] {\n    overflow: hidden;\n    border-radius: inherit;\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    opacity: 0;\n    transition: opacity var(--transition-duration) var(--timing-overlay);\n  }\n\n  [data-nextjs-dialog-overlay] {\n    margin: 8px;\n  }\n\n  [data-nextjs-dialog-overlay][data-rendered='true']\n    [data-nextjs-dialog-backdrop] {\n    opacity: 1;\n  }\n\n  [data-nextjs-dialog-content] {\n    border: none;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    padding: var(--next-dialog-padding);\n  }\n\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: 8px;\n  }\n\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog-root] {\n      --next-dialog-max-width: 540px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog-root] {\n      --next-dialog-max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog-root] {\n      --next-dialog-max-width: 960px;\n    }\n  }\n", n$, na, "\n  .error-overlay-bottom-stack-layer {\n    width: 100%;\n    height: var(--stack-layer-height);\n    position: relative;\n    border: 1px solid var(--color-gray-400);\n    border-radius: var(--rounded-xl);\n    background: var(--color-background-200);\n    transition:\n      translate 350ms var(--timing-swift),\n      box-shadow 350ms var(--timing-swift);\n  }\n\n  .error-overlay-bottom-stack-layer-1 {\n    width: calc(100% - var(--size-24));\n  }\n\n  .error-overlay-bottom-stack-layer-2 {\n    width: calc(100% - var(--size-48));\n    z-index: -1;\n  }\n\n  .error-overlay-bottom-stack {\n    width: 100%;\n    position: absolute;\n    bottom: -1px;\n    height: 0;\n    overflow: visible;\n  }\n\n  .error-overlay-bottom-stack-stack {\n    --stack-layer-height: 44px;\n    --stack-layer-height-half: calc(var(--stack-layer-height) / 2);\n    --stack-layer-trim: 13px;\n    --shadow: 0px 0.925px 0.925px 0px rgba(0, 0, 0, 0.02),\n      0px 3.7px 7.4px -3.7px rgba(0, 0, 0, 0.04),\n      0px 14.8px 22.2px -7.4px rgba(0, 0, 0, 0.06);\n\n    display: grid;\n    place-items: center center;\n    width: 100%;\n    position: fixed;\n    overflow: hidden;\n    z-index: -1;\n    max-width: var(--next-dialog-max-width);\n\n    .error-overlay-bottom-stack-layer {\n      grid-area: 1 / 1;\n      /* Hide */\n      translate: 0 calc(var(--stack-layer-height) * -1);\n    }\n\n    &[data-stack-count='1'],\n    &[data-stack-count='2'] {\n      .error-overlay-bottom-stack-layer-1 {\n        translate: 0\n          calc(var(--stack-layer-height-half) * -1 - var(--stack-layer-trim));\n      }\n    }\n\n    &[data-stack-count='2'] {\n      .error-overlay-bottom-stack-layer-2 {\n        translate: 0 calc(var(--stack-layer-trim) * -1 * 2);\n      }\n    }\n\n    /* Only the bottom stack should have the shadow */\n    &[data-stack-count='1'] .error-overlay-bottom-stack-layer-1 {\n      box-shadow: var(--shadow);\n    }\n\n    &[data-stack-count='2'] {\n      .error-overlay-bottom-stack-layer-2 {\n        box-shadow: var(--shadow);\n      }\n    }\n  }\n", "\n  .error-overlay-pagination {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    width: fit-content;\n  }\n\n  .error-overlay-pagination-count {\n    color: var(--color-gray-900);\n    text-align: center;\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-16);\n    font-variant-numeric: tabular-nums;\n  }\n\n  .error-overlay-pagination-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: var(--size-24);\n    height: var(--size-24);\n    background: var(--color-gray-300);\n    flex-shrink: 0;\n\n    border: none;\n    border-radius: var(--rounded-full);\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n\n    &:focus-visible {\n      outline: var(--focus-ring);\n    }\n\n    &:not(:disabled):active {\n      background: var(--color-gray-500);\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  .error-overlay-pagination-button-icon {\n    color: var(--color-gray-1000);\n  }\n", '\n  [data-nextjs-codeframe] {\n    --code-frame-padding: 12px;\n    --code-frame-line-height: var(--size-16);\n    background-color: var(--color-background-200);\n    overflow: hidden;\n    color: var(--color-gray-1000);\n    text-overflow: ellipsis;\n    border: 1px solid var(--color-gray-400);\n    border-radius: 8px;\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-12);\n    line-height: var(--code-frame-line-height);\n    margin: 8px 0;\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n  }\n\n  .code-frame-link,\n  .code-frame-pre {\n    padding: var(--code-frame-padding);\n  }\n\n  .code-frame-link svg {\n    flex-shrink: 0;\n  }\n\n  .code-frame-lines {\n    min-width: max-content;\n  }\n\n  .code-frame-link [data-text] {\n    display: inline-flex;\n    text-align: left;\n    margin: auto 6px;\n  }\n\n  .code-frame-header {\n    width: 100%;\n    transition: background 100ms ease-out;\n    border-radius: 8px 8px 0 0;\n    border-bottom: 1px solid var(--color-gray-400);\n  }\n\n  [data-with-open-in-editor-link-source-file] {\n    padding: 4px;\n    margin: -4px 0 -4px auto;\n    border-radius: var(--rounded-full);\n    margin-left: auto;\n\n    &:focus-visible {\n      outline: var(--focus-ring);\n      outline-offset: -2px;\n    }\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n  }\n\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n\n  [data-nextjs-codeframe] *:not(a) {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe-line][data-nextjs-codeframe-line--errored="true"] {\n    position: relative;\n    isolation: isolate;\n\n    > span { \n      position: relative;\n      z-index: 1;\n    }\n\n    &::after {\n      content: "";\n      width: calc(100% + var(--code-frame-padding) * 2);\n      height: var(--code-frame-line-height);\n      left: calc(-1 * var(--code-frame-padding));\n      background: var(--color-red-200);\n      box-shadow: 2px 0 0 0 var(--color-red-900) inset;\n      position: absolute;\n    }\n  }\n\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n  }\n\n  .code-frame-link {\n    display: flex;\n    margin: 0;\n    outline: 0;\n  }\n  .code-frame-link [data-icon=\'right\'] {\n    margin-left: auto;\n  }\n\n  [data-nextjs-codeframe] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n\n  [data-nextjs-codeframe] svg {\n    color: var(--color-gray-900);\n  }\n', "\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-terminal] > div > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    margin: 0;\n  }\n  [data-nextjs-terminal] > div > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-terminal] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n", "\n  [data-with-open-in-editor-link] svg {\n    width: auto;\n    height: var(--size-14);\n    margin-left: 8px;\n  }\n  [data-with-open-in-editor-link] {\n    cursor: pointer;\n  }\n  [data-with-open-in-editor-link]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-with-open-in-editor-link-import-trace] {\n    margin-left: 16px;\n  }\n", "", "\n  .nextjs-error-with-static {\n    bottom: calc(16px * 4.5);\n  }\n  p.nextjs__container_errors__link {\n    font-size: var(--size-14);\n  }\n  p.nextjs__container_errors__notes {\n    color: var(--color-stack-notes);\n    font-size: var(--size-14);\n    line-height: 1.5;\n  }\n  .nextjs-container-errors-body > h2:not(:first-child) {\n    margin-top: calc(16px + 8px);\n  }\n  .nextjs-container-errors-body > h2 {\n    color: var(--color-title-color);\n    margin-bottom: 8px;\n    font-size: var(--size-20);\n  }\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: 8px;\n  }\n  .nextjs-toast-hide-button {\n    margin-left: 24px;\n    border: none;\n    background: none;\n    color: var(--color-ansi-bright-white);\n    padding: 0;\n    transition: opacity 0.25s ease;\n    opacity: 0.7;\n  }\n  .nextjs-toast-hide-button:hover {\n    opacity: 1;\n  }\n  .nextjs__container_errors__error_title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 14px;\n  }\n  .error-overlay-notes-container {\n    margin: 8px 2px;\n  }\n  .error-overlay-notes-container p {\n    white-space: pre-wrap;\n  }\n", te, "\n  .nextjs-container-build-error-version-status {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n\n    height: var(--size-26);\n    padding: 6px 8px 6px 6px;\n    background: var(--color-background-100);\n    background-clip: padding-box;\n    border: 1px solid var(--color-gray-alpha-400);\n    box-shadow: var(--shadow-small);\n    border-radius: var(--rounded-full);\n\n    color: var(--color-gray-900);\n    font-size: var(--size-12);\n    font-weight: 500;\n    line-height: var(--size-16);\n  }\n\n  a.nextjs-container-build-error-version-status {\n    text-decoration: none;\n    color: var(--color-gray-900);\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n  }\n\n  .version-staleness-indicator.fresh {\n    fill: var(--color-green-800);\n    stroke: var(--color-green-300);\n  }\n  .version-staleness-indicator.stale {\n    fill: var(--color-amber-800);\n    stroke: var(--color-amber-300);\n  }\n  .version-staleness-indicator.outdated {\n    fill: var(--color-red-800);\n    stroke: var(--color-red-300);\n  }\n  .version-staleness-indicator.unknown {\n    fill: var(--color-gray-800);\n    stroke: var(--color-gray-300);\n  }\n\n  .nextjs-container-build-error-version-status > .turbopack-text {\n    background: linear-gradient(\n      to right,\n      var(--color-turbopack-text-red) 0%,\n      var(--color-turbopack-text-blue) 100%\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n", "\n  .restart-dev-server-button {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n\n    height: var(--size-26);\n    padding: 6px 8px 6px 6px;\n    background: var(--color-amber-100);\n    background-clip: padding-box;\n    border: 1px solid var(--color-gray-alpha-400);\n    box-shadow: var(--shadow-small);\n    border-radius: var(--rounded-full);\n\n    color: var(--color-amber-900);\n    font-size: var(--size-12);\n    font-weight: 500;\n    line-height: var(--size-16);\n  }\n", "\n  .dev-tools-indicator-menu {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    background-clip: padding-box;\n    box-shadow: var(--shadow-menu);\n    border-radius: var(--rounded-xl);\n    position: absolute;\n    font-family: var(--font-stack-sans);\n    z-index: 1000;\n    overflow: hidden;\n    opacity: 0;\n    outline: 0;\n    min-width: 248px;\n    transition: opacity var(--animate-out-duration-ms)\n      var(--animate-out-timing-function);\n\n    &[data-rendered='true'] {\n      opacity: 1;\n      scale: 1;\n    }\n  }\n\n  .dev-tools-indicator-inner {\n    padding: 6px;\n    width: 100%;\n  }\n\n  .dev-tools-indicator-item {\n    display: flex;\n    align-items: center;\n    padding: 8px 6px;\n    height: var(--size-36);\n    border-radius: 6px;\n    text-decoration: none !important;\n    user-select: none;\n    white-space: nowrap;\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n\n    &:focus-visible {\n      outline: 0;\n    }\n  }\n\n  .dev-tools-indicator-footer {\n    background: var(--color-background-200);\n    padding: 6px;\n    border-top: 1px solid var(--color-gray-400);\n    width: 100%;\n  }\n\n  .dev-tools-indicator-item[data-selected='true'] {\n    cursor: pointer;\n    background-color: var(--color-gray-200);\n  }\n\n  .dev-tools-indicator-label {\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    color: var(--color-gray-1000);\n  }\n\n  .dev-tools-indicator-value {\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    color: var(--color-gray-900);\n    margin-left: auto;\n  }\n\n  .dev-tools-indicator-issue-count {\n    --color-primary: var(--color-gray-800);\n    --color-secondary: var(--color-gray-100);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    min-width: var(--size-40);\n    height: var(--size-24);\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    background-clip: padding-box;\n    box-shadow: var(--shadow-small);\n    padding: 2px;\n    color: var(--color-gray-1000);\n    border-radius: 128px;\n    font-weight: 500;\n    font-size: var(--size-13);\n    font-variant-numeric: tabular-nums;\n\n    &[data-has-issues='true'] {\n      --color-primary: var(--color-red-800);\n      --color-secondary: var(--color-red-100);\n    }\n\n    .dev-tools-indicator-issue-count-indicator {\n      width: var(--size-8);\n      height: var(--size-8);\n      background: var(--color-primary);\n      box-shadow: 0 0 0 2px var(--color-secondary);\n      border-radius: 50%;\n    }\n  }\n\n  .dev-tools-indicator-shortcut {\n    display: flex;\n    gap: 4px;\n\n    kbd {\n      width: var(--size-20);\n      height: var(--size-20);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: var(--rounded-md);\n      border: 1px solid var(--color-gray-400);\n      font-family: var(--font-stack-sans);\n      background: var(--color-background-100);\n      color: var(--color-gray-1000);\n      text-align: center;\n      font-size: var(--size-12);\n      line-height: var(--size-16);\n    }\n  }\n\n  .dev-tools-grabbing {\n    cursor: grabbing;\n\n    > * {\n      pointer-events: none;\n    }\n  }\n", "\n  [data-info-popover] {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    background-clip: padding-box;\n    box-shadow: var(--shadow-menu);\n    border-radius: var(--rounded-xl);\n    position: absolute;\n    font-family: var(--font-stack-sans);\n    z-index: 1000;\n    overflow: hidden;\n    opacity: 0;\n    outline: 0;\n    min-width: 350px;\n    transition: opacity var(--animate-out-duration-ms)\n      var(--animate-out-timing-function);\n\n    &[data-rendered='true'] {\n      opacity: 1;\n      scale: 1;\n    }\n\n    button:focus-visible {\n      outline: var(--focus-ring);\n    }\n  }\n\n  .dev-tools-info-container {\n    width: 100%;\n  }\n\n  .dev-tools-info-body {\n    padding: 16px;\n  }\n\n  .dev-tools-info-header {\n    height: 48px;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 6px 8px;\n    border-bottom: 1px solid var(--color-gray-alpha-400);\n  }\n\n  .dev-tools-info-close-button {\n    all: unset;\n    width: 20px;\n    height: 20px;    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--color-gray-900);\n    transition: color 150ms ease;\n    translate: 0 1px;\n    border-radius: 3px;\n\n    &:hover {\n      color: var(--color-gray-1000);\n    }\n  }\n\n  .dev-tools-info-title {\n    color: var(--color-gray-1000);\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-20);\n    margin: 0;\n  }\n\n  .dev-tools-info-section-title {\n    padding: 8px 0px;\n    color: var(--color-gray-1000);\n    font-size: var(--size-16);\n    font-weight: 600;\n    line-height: var(--size-20);\n    margin: 0;\n  }\n\n  .dev-tools-info-article {\n    padding: 8px 6px;\n    color: var(--color-gray-1000);\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    margin: 0;\n  }\n  .dev-tools-info-paragraph {\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  .dev-tools-info-button-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .dev-tools-info-learn-more-button {\n    align-content: center;\n    padding: 0 8px;\n    height: var(--size-28);\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-20);\n    transition: background var(--duration-short) ease;\n    color: var(--color-background-100);\n    border-radius: var(--rounded-md-2);\n    background: var(--color-gray-1000);\n    margin-left: auto;\n  }\n\n  .dev-tools-info-learn-more-button:hover {\n    text-decoration: none;\n    color: var(--color-background-100);\n    opacity: 0.9;\n  }\n", "\n  .dev-tools-info-code {\n    background: var(--color-gray-400);\n    color: var(--color-gray-1000);\n    font-family: var(--font-stack-monospace);\n    padding: 2px 4px;\n    margin: 0;\n    font-size: var(--size-13);\n    white-space: break-spaces;\n    border-radius: var(--rounded-md-2);\n  }\n\n  .dev-tools-info-code-block-container {\n    padding: 6px;\n  }\n\n  .dev-tools-info-code-block {\n    position: relative;\n    background: var(--color-background-200);\n    border: 1px solid var(--color-gray-alpha-400);\n    border-radius: var(--rounded-md-2);\n    min-width: 326px;\n  }\n\n  .dev-tools-info-code-block-pre {\n    margin: 0;\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-12);\n  }\n\n  .dev-tools-info-copy-button {\n    position: absolute;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    right: 8px;\n    top: 8px;\n    padding: 4px;\n    height: var(--size-24);\n    width: var(--size-24);\n    border-radius: var(--rounded-md-2);\n    border: 1px solid var(--color-gray-alpha-400);\n    background: var(--color-background-100);\n  }\n\n  .dev-tools-info-code-block-line {\n    display: block;\n    line-height: 1.5;\n    padding: 0 16px;\n  }\n\n  .dev-tools-info-code-block-line.dev-tools-info-highlight {\n    border-left: 2px solid var(--color-blue-900);\n    background: var(--color-blue-400);\n  }\n\n  .dev-tools-info-code-block-json-key {\n    color: var(--color-syntax-keyword);\n  }\n\n  .dev-tools-info-code-block-json-value {\n    color: var(--color-syntax-link);\n  }\n", "", tW, t7, '\n  .nextjs-scroll-fader {\n    --blur: 1px;\n    --stop: 25%;\n    --height: 150px;\n    --color-bg: var(--color-background-100);\n    position: absolute;\n    pointer-events: none;\n    user-select: none;\n    width: 100%;\n    height: var(--height);\n    left: 0;\n    backdrop-filter: blur(var(--blur));\n\n    &[data-side="top"] {\n      top: 0;\n      background: linear-gradient(to top, transparent, var(--color-bg));\n      mask-image: linear-gradient(to bottom, var(--color-bg) var(--stop), transparent);\n    }\n  }\n')
        });
    }
    function ry() {
        var e, n, t = (e = [
            "\n        :host {\n          all: initial;\n\n          /* the direction property is not reset by 'all' */\n          direction: ltr;\n        }\n\n        /*!\n         * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n         * Copyright 2011-2019 The Bootstrap Authors\n         * Copyright 2011-2019 Twitter, Inc.\n         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n         * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n         */\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        :host {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        article,\n        aside,\n        figcaption,\n        figure,\n        footer,\n        header,\n        hgroup,\n        main,\n        nav,\n        section {\n          display: block;\n        }\n\n        :host {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n            'Noto Color Emoji';\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          color: var(--color-font);\n          text-align: left;\n        }\n\n        :host:not(button) {\n          background-color: #fff;\n        }\n\n        [tabindex='-1']:focus:not(:focus-visible) {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 0;\n          overflow: visible;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-top: 0;\n          margin-bottom: 8px;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 16px;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        dt {\n          font-weight: 700;\n        }\n\n        dd {\n          margin-bottom: 8px;\n          margin-left: 0;\n        }\n\n        blockquote {\n          margin: 0 0 16px;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -0.25em;\n        }\n\n        sup {\n          top: -0.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n        }\n\n        a:hover {\n          color: #0056b3;\n          text-decoration: underline;\n        }\n\n        a:not([href]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):hover {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n            'Liberation Mono', 'Courier New', monospace;\n          font-size: 1em;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 16px;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 16px;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 8px;\n        }\n\n        button {\n          border-radius: 0;\n          border: 0;\n          padding: 0;\n          margin: 0;\n          background: none;\n          appearance: none;\n          -webkit-appearance: none;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        button:focus:not(:focus-visible) {\n          outline: none;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type='button'],\n        [type='reset'],\n        [type='submit'] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type='button']:not(:disabled),\n        [type='reset']:not(:disabled),\n        [type='submit']:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type='button']::-moz-focus-inner,\n        [type='reset']::-moz-focus-inner,\n        [type='submit']::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type='radio'],\n        input[type='checkbox'] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type='date'],\n        input[type='time'],\n        input[type='datetime-local'],\n        input[type='month'] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: 8px;\n          font-size: 24px;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type='number']::-webkit-inner-spin-button,\n        [type='number']::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type='search'] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type='search']::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      "
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return ry = function() {
            return t;
        }, t;
    }
    function rx() {
        return (0, r.jsx)("style", {
            children: R(ry())
        });
    }
    function rw() {
        var e, n, t = (e = [
            '\n        :host {\n          /* \n           * CAUTION: THIS IS A WORKAROUND!\n           * For now, we use @babel/code-frame to parse the code frame which does not support option to change the color.\n           * x-ref: https://github.com/babel/babel/blob/efa52324ff835b794c48080f14877b6caf32cd15/packages/babel-code-frame/src/defs.ts#L40-L54\n           * So, we do a workaround mapping to change the color matching the theme.\n           *\n           * For example, in @babel/code-frame, the "keyword" is mapped to ANSI "cyan".\n           * We want the "keyword" to use the "syntax-keyword" color in the theme.\n           * So, we map the "cyan" to the "syntax-keyword" in the theme.\n           */\n          /* cyan: keyword */\n          --color-ansi-cyan: var(--color-syntax-keyword);\n          /* yellow: capitalized, jsxIdentifier, punctuation */\n          --color-ansi-yellow: var(--color-syntax-function);\n          /* magenta: number, regex */\n          --color-ansi-magenta: var(--color-syntax-keyword);\n          /* green: string */\n          --color-ansi-green: var(--color-syntax-string);\n          /* gray (bright black): comment, gutter */\n          --color-ansi-bright-black: var(--color-syntax-comment);\n\n          /* Ansi - Temporary */\n          --color-ansi-selection: var(--color-gray-alpha-300);\n          --color-ansi-bg: var(--color-background-200);\n          --color-ansi-fg: var(--color-gray-1000);\n\n          --color-ansi-white: var(--color-gray-700);\n          --color-ansi-black: var(--color-gray-200);\n          --color-ansi-blue: var(--color-blue-700);\n          --color-ansi-red: var(--color-red-700);\n          --color-ansi-bright-white: var(--color-gray-1000);\n          --color-ansi-bright-blue: var(--color-blue-800);\n          --color-ansi-bright-cyan: var(--color-blue-800);\n          --color-ansi-bright-green: var(--color-green-800);\n          --color-ansi-bright-magenta: var(--color-blue-800);\n          --color-ansi-bright-red: var(--color-red-800);\n          --color-ansi-bright-yellow: var(--color-amber-900);\n\n          /* Background Light */\n          --color-background-100: #ffffff;\n          --color-background-200: #fafafa;\n\n          /* Syntax Light */\n          --color-syntax-comment: #545454;\n          --color-syntax-constant: #171717;\n          --color-syntax-function: #0054ad;\n          --color-syntax-keyword: #a51850;\n          --color-syntax-link: #066056;\n          --color-syntax-parameter: #8f3e00;\n          --color-syntax-punctuation: #171717;\n          --color-syntax-string: #036157;\n          --color-syntax-string-expression: #066056;\n\n          /* Gray Scale Light */\n          --color-gray-100: #f2f2f2;\n          --color-gray-200: #ebebeb;\n          --color-gray-300: #e6e6e6;\n          --color-gray-400: #eaeaea;\n          --color-gray-500: #c9c9c9;\n          --color-gray-600: #a8a8a8;\n          --color-gray-700: #8f8f8f;\n          --color-gray-800: #7d7d7d;\n          --color-gray-900: #666666;\n          --color-gray-1000: #171717;\n\n          /* Gray Alpha Scale Light */\n          --color-gray-alpha-100: rgba(0, 0, 0, 0.05);\n          --color-gray-alpha-200: rgba(0, 0, 0, 0.081);\n          --color-gray-alpha-300: rgba(0, 0, 0, 0.1);\n          --color-gray-alpha-400: rgba(0, 0, 0, 0.08);\n          --color-gray-alpha-500: rgba(0, 0, 0, 0.21);\n          --color-gray-alpha-600: rgba(0, 0, 0, 0.34);\n          --color-gray-alpha-700: rgba(0, 0, 0, 0.44);\n          --color-gray-alpha-800: rgba(0, 0, 0, 0.51);\n          --color-gray-alpha-900: rgba(0, 0, 0, 0.605);\n          --color-gray-alpha-1000: rgba(0, 0, 0, 0.91);\n\n          /* Blue Scale Light */\n          --color-blue-100: #f0f7ff;\n          --color-blue-200: #edf6ff;\n          --color-blue-300: #e1f0ff;\n          --color-blue-400: #cde7ff;\n          --color-blue-500: #99ceff;\n          --color-blue-600: #52aeff;\n          --color-blue-700: #0070f3;\n          --color-blue-800: #0060d1;\n          --color-blue-900: #0067d6;\n          --color-blue-1000: #0025ad;\n\n          /* Red Scale Light */\n          --color-red-100: #fff0f0;\n          --color-red-200: #ffebeb;\n          --color-red-300: #ffe5e5;\n          --color-red-400: #fdd8d8;\n          --color-red-500: #f8baba;\n          --color-red-600: #f87274;\n          --color-red-700: #e5484d;\n          --color-red-800: #da3036;\n          --color-red-900: #ca2a30;\n          --color-red-1000: #381316;\n\n          /* Amber Scale Light */\n          --color-amber-100: #fff6e5;\n          --color-amber-200: #fff4d5;\n          --color-amber-300: #fef0cd;\n          --color-amber-400: #ffddbf;\n          --color-amber-500: #ffc96b;\n          --color-amber-600: #f5b047;\n          --color-amber-700: #ffb224;\n          --color-amber-800: #ff990a;\n          --color-amber-900: #a35200;\n          --color-amber-1000: #4e2009;\n\n          /* Green Scale Light */\n          --color-green-100: #effbef;\n          --color-green-200: #eafaea;\n          --color-green-300: #dcf6dc;\n          --color-green-400: #c8f1c9;\n          --color-green-500: #99e59f;\n          --color-green-600: #6cda76;\n          --color-green-700: #46a758;\n          --color-green-800: #388e4a;\n          --color-green-900: #297c3b;\n          --color-green-1000: #18311e;\n\n          /* Turbopack Light - Temporary */\n          --color-turbopack-text-red: #ff1e56;\n          --color-turbopack-text-blue: #0096ff;\n          --color-turbopack-border-red: #f0adbe;\n          --color-turbopack-border-blue: #adccea;\n          --color-turbopack-background-red: #fff7f9;\n          --color-turbopack-background-blue: #f6fbff;\n        }\n      '
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return rw = function() {
            return t;
        }, t;
    }
    function rj() {
        return (0, r.jsx)("style", {
            children: R(rw())
        });
    }
    function rk(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                var r, o, a;
                r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = a;
            });
        }
        return e;
    }
    function rO(e, n) {
        return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r);
            }
            return t;
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }), e;
    }
    function rS(e) {
        var n = e.state, t = e.dispatch, a = e.getSquashedHydrationErrorDetails, l = e.runtimeErrors, i = e.errorCount, s = tj(n.isErrorOverlayOpen, {
            exitDelay: 200
        }), c = s.mounted, u = {
            rendered: s.rendered,
            transitionDurationMs: 200,
            isTurbopack: !1,
            versionInfo: n.versionInfo,
            errorCount: i
        };
        return null !== n.buildError ? (0, r.jsx)(nG, rO(rk({}, u), {
            message: n.buildError,
            rendered: !0
        })) : l.length && c ? (0, r.jsx)(ti, rO(rk({}, u), {
            debugInfo: n.debugInfo,
            getSquashedHydrationErrorDetails: a,
            runtimeErrors: l,
            onClose: function() {
                t({
                    type: j
                });
            }
        })) : (0, r.jsx)(o.Suspense, {});
    }
    function r_(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function rC(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e;
    }
    function rE(e) {
        for(var n = 1; n < arguments.length; n++){
            var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }))), r.forEach(function(n) {
                rC(e, n, t[n]);
            });
        }
        return e;
    }
    function rP(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), !n || a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return r_(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r_(e, n);
            }
        }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    var rN = function(e) {
        return e.state.buildError ? (0, r.jsx)(rL, rE({}, e)) : (0, r.jsx)(rz, rE({}, e));
    }, rz = function(e) {
        var n = e.children, t = e.state, r = e.isAppDir, a = t.errors, l = rP((0, o.useState)({}), 2), i = l[0], s = l[1], c = rP((0, o.useMemo)(function() {
            for(var e = [], n = null, t = 0; t < a.length; ++t){
                var r = a[t], o = r.id;
                if (o in i) {
                    e.push(i[o]);
                    continue;
                }
                n = r;
                break;
            }
            return [
                e,
                n
            ];
        }, [
            a,
            i
        ]), 2), u = c[0], d = c[1];
        return (0, o.useEffect)(function() {
            if (null != d) {
                var e, n, t = !0;
                return (e = d, n = r, n4(function() {
                    var t, r, a, l, i;
                    return n8(this, function(s) {
                        switch(s.label){
                            case 0:
                                var c, u;
                                if (t = {
                                    id: e.id,
                                    runtime: !0,
                                    error: e.error,
                                    type: e.type
                                }, !("use" in o)) return [
                                    3,
                                    1
                                ];
                                return r = n6(n5({}, t), {
                                    frames: (u = (c = function() {
                                        return n4(function() {
                                            return n8(this, function(t) {
                                                switch(t.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            et(e.frames, n2(e.error), n)
                                                        ];
                                                    case 1:
                                                        return [
                                                            2,
                                                            t.sent()
                                                        ];
                                                }
                                            });
                                        })();
                                    })(), function() {
                                        return u;
                                    })
                                }), void 0 !== e.componentStackFrames && (r.componentStackFrames = e.componentStackFrames), [
                                    2,
                                    r
                                ];
                            case 1:
                                return l = [
                                    n5({}, t)
                                ], i = {}, [
                                    4,
                                    et(e.frames, n2(e.error), n)
                                ];
                            case 2:
                                return a = n6.apply(void 0, l.concat([
                                    (i.frames = s.sent(), i)
                                ])), void 0 !== e.componentStackFrames && (a.componentStackFrames = e.componentStackFrames), [
                                    2,
                                    a
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })()).then(function(e) {
                    t && s(function(n) {
                        var t, r;
                        return t = rE({}, n), r = null != (r = rC({}, e.id, e)) ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t.push.apply(t, r);
                            }
                            return t;
                        })(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                        }), t;
                    });
                }), function() {
                    t = !1;
                };
            }
        }, [
            d,
            r
        ]), n({
            runtimeErrors: u,
            totalErrorCount: a.length
        });
    }, rL = function(e) {
        return (0, e.children)({
            runtimeErrors: [],
            totalErrorCount: 1
        });
    };
    function rT() {
        var e, n, t = (e = [
            "\n      :host(.dark) {\n        ",
            "\n        ",
            "\n      }\n\n      @media (prefers-color-scheme: dark) {\n        :host(:not(.light)) {\n          ",
            "\n          ",
            "\n        }\n      }\n    "
        ], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        })));
        return rT = function() {
            return t;
        }, t;
    }
    var rD = "\n  /* Background Dark */\n  --color-background-100: #0a0a0a;\n  --color-background-200: #000000;\n\n  /* Syntax Dark */\n  --color-syntax-comment: #a0a0a0;\n  --color-syntax-constant: #ededed;\n  --color-syntax-function: #52a9ff;\n  --color-syntax-keyword: #f76e99;\n  --color-syntax-link: #0ac5b2;\n  --color-syntax-parameter: #f1a10d;\n  --color-syntax-punctuation: #ededed;\n  --color-syntax-string: #0ac5b2;\n  --color-syntax-string-expression: #0ac5b2;\n\n  /* Gray Scale Dark */\n  --color-gray-100: #1a1a1a;\n  --color-gray-200: #1f1f1f;\n  --color-gray-300: #292929;\n  --color-gray-400: #2e2e2e;\n  --color-gray-500: #454545;\n  --color-gray-600: #878787;\n  --color-gray-700: #8f8f8f;\n  --color-gray-800: #7d7d7d;\n  --color-gray-900: #a0a0a0;\n  --color-gray-1000: #ededed;\n\n  /* Gray Alpha Scale Dark */\n  --color-gray-alpha-100: rgba(255, 255, 255, 0.066);\n  --color-gray-alpha-200: rgba(255, 255, 255, 0.087);\n  --color-gray-alpha-300: rgba(255, 255, 255, 0.125);\n  --color-gray-alpha-400: rgba(255, 255, 255, 0.145);\n  --color-gray-alpha-500: rgba(255, 255, 255, 0.239);\n  --color-gray-alpha-600: rgba(255, 255, 255, 0.506);\n  --color-gray-alpha-700: rgba(255, 255, 255, 0.54);\n  --color-gray-alpha-800: rgba(255, 255, 255, 0.47);\n  --color-gray-alpha-900: rgba(255, 255, 255, 0.61);\n  --color-gray-alpha-1000: rgba(255, 255, 255, 0.923);\n\n  /* Blue Scale Dark */\n  --color-blue-100: #0f1b2d;\n  --color-blue-200: #10243e;\n  --color-blue-300: #0f3058;\n  --color-blue-400: #0d3868;\n  --color-blue-500: #0a4481;\n  --color-blue-600: #0091ff;\n  --color-blue-700: #0070f3;\n  --color-blue-800: #0060d1;\n  --color-blue-900: #52a9ff;\n  --color-blue-1000: #eaf6ff;\n\n  /* Red Scale Dark */\n  --color-red-100: #2a1314;\n  --color-red-200: #3d1719;\n  --color-red-300: #551a1e;\n  --color-red-400: #671e22;\n  --color-red-500: #822025;\n  --color-red-600: #e5484d;\n  --color-red-700: #e5484d;\n  --color-red-800: #da3036;\n  --color-red-900: #ff6369;\n  --color-red-1000: #ffecee;\n\n  /* Amber Scale Dark */\n  --color-amber-100: #271700;\n  --color-amber-200: #341c00;\n  --color-amber-300: #4a2900;\n  --color-amber-400: #573300;\n  --color-amber-500: #693f05;\n  --color-amber-600: #e79c13;\n  --color-amber-700: #ffb224;\n  --color-amber-800: #ff990a;\n  --color-amber-900: #f1a10d;\n  --color-amber-1000: #fef3dd;\n\n  /* Green Scale Dark */\n  --color-green-100: #0b2211;\n  --color-green-200: #0f2c17;\n  --color-green-300: #11351b;\n  --color-green-400: #0c461b;\n  --color-green-500: #126427;\n  --color-green-600: #1a9338;\n  --color-green-700: #46a758;\n  --color-green-800: #388e4a;\n  --color-green-900: #63c174;\n  --color-green-1000: #e5fbeb;\n\n  /* Turbopack Dark - Temporary */\n  --color-turbopack-text-red: #ff6d92;\n  --color-turbopack-text-blue: #45b2ff;\n  --color-turbopack-border-red: #6e293b;\n  --color-turbopack-border-blue: #284f80;\n  --color-turbopack-background-red: #250d12;\n  --color-turbopack-background-blue: #0a1723;\n", rA = "\n  --color-font: white;\n  --color-backdrop: rgba(0, 0, 0, 0.8);\n  --color-border-shadow: rgba(255, 255, 255, 0.145);\n\n  --color-title-color: #fafafa;\n  --color-stack-notes: #a9a9a9;\n";
    function rR() {
        return (0, r.jsx)("style", {
            children: R(rT(), rA, rD, rA, rD)
        });
    }
    function rI(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function rM(e) {
        var n, t, a, l, i, s, c, u = e.state, d = e.dispatch, f = e.getSquashedHydrationErrorDetails, p = (l = (n = (0, o.useState)("undefined" != typeof localStorage && localStorage.getItem(N) ? Number(localStorage.getItem(N)) : tI.Medium), t = 2, a = function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return tA(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tA(e, n);
            }
        }(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }())[0], i = a[1], c = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(s = [
            l,
            function(e) {
                i(e), localStorage.setItem(N, String(e));
            }
        ]) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(s, 2) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return rI(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rI(e, n);
            }
        }(s, c) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), h = p[0], m = p[1];
        return (0, r.jsxs)(U, {
            children: [
                (0, r.jsx)(rx, {}),
                (0, r.jsx)(B, {
                    scale: h
                }),
                (0, r.jsx)(rj, {}),
                (0, r.jsx)(rv, {}),
                (0, r.jsx)(rR, {}),
                (0, r.jsx)(rN, {
                    state: u,
                    isAppDir: !0,
                    children: function(e) {
                        var n = e.runtimeErrors, t = e.totalErrorCount, o = null !== u.buildError;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                u.showIndicator && (0, r.jsx)(ru, {
                                    scale: h,
                                    setScale: m,
                                    state: u,
                                    dispatch: d,
                                    errorCount: t,
                                    isBuildError: o
                                }),
                                (0, r.jsx)(rS, {
                                    state: u,
                                    dispatch: d,
                                    getSquashedHydrationErrorDetails: f,
                                    runtimeErrors: n,
                                    errorCount: t
                                })
                            ]
                        });
                    }
                })
            ]
        });
    }
    function rF(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for(var t = 0, r = Array(n); t < n; t++)r[t] = e[t];
        return r;
    }
    function rH(e) {
        return function(e) {
            if (Array.isArray(e)) return rF(e);
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || rU(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function rU(e, n) {
        if (e) {
            if ("string" == typeof e) return rF(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rF(e, n);
        }
    }
    var rV = null, rB = [];
    function r$(e) {
        return function() {
            for(var n = arguments.length, t = Array(n), r = 0; r < n; r++)t[r] = arguments[r];
            rV ? e.apply(void 0, [
                rV
            ].concat(rH(t))) : rB.push(function(n) {
                e.apply(void 0, [
                    n
                ].concat(rH(t)));
            });
        };
    }
    var rq = {
        onBuildOk: r$(function(e) {
            e({
                type: f
            });
        }),
        onBuildError: r$(function(e, n) {
            e({
                type: p,
                message: n
            });
        }),
        onBeforeRefresh: r$(function(e) {
            e({
                type: h
            });
        }),
        onRefresh: r$(function(e) {
            e({
                type: m
            });
        }),
        onVersionInfo: r$(function(e, n) {
            e({
                type: g,
                versionInfo: n
            });
        }),
        onStaticIndicator: r$(function(e, n) {
            e({
                type: d,
                staticIndicator: n
            });
        }),
        onDebugInfo: r$(function(e, n) {
            e({
                type: y,
                debugInfo: n
            });
        }),
        onDevIndicator: r$(function(e, n) {
            e({
                type: x,
                devIndicator: n
            });
        }),
        onUnhandledError: r$(function(e, n) {
            e({
                type: b,
                reason: n
            });
        }),
        onUnhandledRejection: r$(function(e, n) {
            e({
                type: v,
                reason: n
            });
        }),
        openErrorOverlay: r$(function(e) {
            e({
                type: w
            });
        }),
        closeErrorOverlay: r$(function(e) {
            e({
                type: j
            });
        }),
        toggleErrorOverlay: r$(function(e) {
            e({
                type: k
            });
        }),
        buildingIndicatorHide: r$(function(e) {
            e({
                type: S
            });
        }),
        buildingIndicatorShow: r$(function(e) {
            e({
                type: O
            });
        }),
        renderingIndicatorHide: r$(function(e) {
            e({
                type: C
            });
        }),
        renderingIndicatorShow: r$(function(e) {
            e({
                type: _
            });
        })
    };
    function rZ(e) {
        var n, t, E = e.getComponentStack, P = e.getOwnerStack, N = e.getSquashedHydrationErrorDetails, z = e.isRecoverableError, A = (n = function(e, n, t, r) {
            var E;
            function P(e, o, c) {
                var u, d, f = n(c), p = void 0 === f ? void 0 : function(e) {
                    var n = [], t = !0, r = !1, o = void 0;
                    try {
                        for(var l, i = e.trim().split("\n")[Symbol.iterator](); !(t = (l = i.next()).done); t = !0){
                            var s = l.value, c = /at ([^ ]+)( \((.*)\))?/.exec(s);
                            if (null == c ? void 0 : c[1]) {
                                var u = c[1], d = c[3];
                                if (!d) {
                                    n.push({
                                        canOpenInEditor: !1,
                                        component: u
                                    });
                                    continue;
                                }
                                if (null == d ? void 0 : d.includes("next/dist")) break;
                                var f = function(e) {
                                    var n, t, r, o, l = (r = e).startsWith("file://") ? "file" : r.includes("webpack-internal://") ? "webpack-internal" : r.startsWith("http://") || r.startsWith("https://") ? "http" : r.startsWith("//") ? "protocol-relative" : "unknown", i = null == e ? void 0 : e.replace(/^(webpack-internal:\/\/\/|file:\/\/)(\(.*\)\/)?/, ""), s = (n = null != (o = null == i ? void 0 : i.match(/^(.+):(\d+):(\d+)/)) ? o : [], t = 4, function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(n) || function(e, n) {
                                        var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != o) {
                                            var a = [], l = !0, i = !1;
                                            try {
                                                for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                                            } catch (e) {
                                                i = !0, r = e;
                                            } finally{
                                                try {
                                                    l || null == o.return || o.return();
                                                } finally{
                                                    if (i) throw r;
                                                }
                                            }
                                            return a;
                                        }
                                    }(n, 4) || function(e, n) {
                                        if (e) {
                                            if ("string" == typeof e) return a(e, n);
                                            var t = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, n);
                                        }
                                    }(n, t) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }()), c = s[1], u = s[2], d = s[3];
                                    switch(l){
                                        case "file":
                                        case "webpack-internal":
                                            return {
                                                canOpenInEditor: !0,
                                                file: c,
                                                lineNumber: u ? Number(u) : void 0,
                                                column: d ? Number(d) : void 0
                                            };
                                        default:
                                            return {
                                                canOpenInEditor: !1
                                            };
                                    }
                                }(d);
                                n.push(function(e) {
                                    for(var n = 1; n < arguments.length; n++){
                                        var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }))), r.forEach(function(n) {
                                            var r, o, a;
                                            r = e, o = n, a = t[n], o in r ? Object.defineProperty(r, o, {
                                                value: a,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : r[o] = a;
                                        });
                                    }
                                    return e;
                                }({
                                    component: u
                                }, f));
                            }
                        }
                    } catch (e) {
                        r = !0, o = e;
                    } finally{
                        try {
                            t || null == i.return || i.return();
                        } finally{
                            if (r) throw o;
                        }
                    }
                    return n;
                }(f), h = t(c), m = (u = (c.stack || "") + (h || "")) ? (u = u.split("\n").map(function(e) {
                    return e.includes("(eval ") && (e = e.replace(/eval code/g, "eval").replace(/\(eval at [^()]* \(/, "(file://").replace(/\),.*$/g, ")")), e;
                }).join("\n"), (0, l.parse)(u).map(function(e) {
                    try {
                        var n = new URL(e.file), t = i.exec(n.pathname);
                        if (t) {
                            var r, o, a = null == (o = ("TURBOPACK compile-time value", "C:\\source\\repos\\_Samples and Demos\\React\\NextJs\\nextjs-dashboard\\.next")) || null == (r = o.replace(/\\/g, "/")) ? void 0 : r.replace(/\/$/, "");
                            a && (e.file = "file://" + a.concat(t.pop()) + n.search);
                        }
                    } catch (e) {}
                    return e;
                })) : [], g = {
                    id: o,
                    error: c,
                    frames: m,
                    componentStackFrames: p,
                    type: r(c) ? "recoverable" : (d = c) && "NEXT_CONSOLE_ERROR" === d[s] ? "console" : "runtime"
                }, b = e.filter(function(e) {
                    return e.error.stack !== g.error.stack && L(e.error.stack) !== L(g.error.stack) || t(e.error) !== t(g.error);
                });
                return b.length === e.length ? (b.push(g), b) : e;
            }
            return (0, o.useReducer)(function(e, n) {
                switch(n.type){
                    case y:
                        return u(c({}, e), {
                            debugInfo: n.debugInfo
                        });
                    case d:
                        return u(c({}, e), {
                            staticIndicator: n.staticIndicator
                        });
                    case f:
                        return u(c({}, e), {
                            buildError: null
                        });
                    case p:
                        return u(c({}, e), {
                            buildError: n.message
                        });
                    case h:
                        return u(c({}, e), {
                            refreshState: {
                                type: "pending",
                                errors: []
                            }
                        });
                    case m:
                        return u(c({}, e), {
                            buildError: null,
                            errors: "pending" === e.refreshState.type ? e.refreshState.errors : [],
                            refreshState: {
                                type: "idle"
                            }
                        });
                    case b:
                    case v:
                        switch(e.refreshState.type){
                            case "idle":
                                return u(c({}, e), {
                                    nextId: e.nextId + 1,
                                    errors: P(e.errors, e.nextId, n.reason)
                                });
                            case "pending":
                                return u(c({}, e), {
                                    nextId: e.nextId + 1,
                                    refreshState: u(c({}, e.refreshState), {
                                        errors: P(e.errors, e.nextId, n.reason)
                                    })
                                });
                            default:
                                return e;
                        }
                    case g:
                        return u(c({}, e), {
                            versionInfo: n.versionInfo
                        });
                    case x:
                        return u(c({}, e), {
                            showIndicator: !0,
                            disableDevIndicator: T || !!n.devIndicator.disabledUntil
                        });
                    case w:
                        return u(c({}, e), {
                            isErrorOverlayOpen: !0
                        });
                    case j:
                        return u(c({}, e), {
                            isErrorOverlayOpen: !1
                        });
                    case k:
                        return u(c({}, e), {
                            isErrorOverlayOpen: !e.isErrorOverlayOpen
                        });
                    case O:
                        return u(c({}, e), {
                            buildingIndicator: !0
                        });
                    case S:
                        return u(c({}, e), {
                            buildingIndicator: !1
                        });
                    case _:
                        return u(c({}, e), {
                            renderingIndicator: !0
                        });
                    case C:
                        return u(c({}, e), {
                            renderingIndicator: !1
                        });
                    default:
                        return e;
                }
            }, (E = e, u(c({}, D), {
                isErrorOverlayOpen: "pages" === E,
                routerType: E
            })));
        }(e.routerType, E, P, z), t = 2, function(e) {
            if (Array.isArray(e)) return e;
        }(n) || function(e, n) {
            var t, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var a = [], l = !0, i = !1;
                try {
                    for(o = o.call(e); !(l = (t = o.next()).done) && (a.push(t.value), a.length !== n); l = !0);
                } catch (e) {
                    i = !0, r = e;
                } finally{
                    try {
                        l || null == o.return || o.return();
                    } finally{
                        if (i) throw r;
                    }
                }
                return a;
            }
        }(n, 2) || rU(n, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), R = A[0], I = A[1];
        return (0, o.useInsertionEffect)(function() {
            rV = I;
            var e = setTimeout(function() {
                !function(e) {
                    try {
                        var n = !0, t = !1, r = void 0;
                        try {
                            for(var o, a = rB[Symbol.iterator](); !(n = (o = a.next()).done); n = !0)(0, o.value)(e);
                        } catch (e) {
                            t = !0, r = e;
                        } finally{
                            try {
                                n || null == a.return || a.return();
                            } finally{
                                if (t) throw r;
                            }
                        }
                    } finally{
                        rB.length = 0;
                    }
                }(I);
            });
            return function() {
                rV = null, clearTimeout(e);
            };
        }, []), (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(M, {}),
                (0, r.jsx)(rM, {
                    state: R,
                    dispatch: I,
                    getSquashedHydrationErrorDetails: N
                })
            ]
        });
    }
    var rW = !1, rQ = !1;
    function rX() {
        return null;
    }
    function rG(e, n, t) {
        if (rW) throw Error("Next DevTools: Pages Dev Overlay is already mounted. This is a bug in Next.js");
        if (!rQ) {
            var a = document.createElement("script");
            a.style.display = "block", a.style.position = "absolute", a.setAttribute("data-nextjs-dev-overlay", "true");
            var l = document.createElement("nextjs-portal");
            a.appendChild(l), document.body.appendChild(a);
            var i = (0, A.createRoot)(l, {
                identifierPrefix: "ndt-"
            });
            (0, o.startTransition)(function() {
                i.render((0, r.jsx)(rZ, {
                    getComponentStack: e,
                    getOwnerStack: n,
                    getSquashedHydrationErrorDetails: rX,
                    isRecoverableError: t,
                    routerType: "app"
                }));
            }), rQ = !0;
        }
    }
    function rK(e, n, t, a) {
        if (rQ) throw Error("Next DevTools: App Dev Overlay is already mounted. This is a bug in Next.js");
        if (!rW) {
            var l = document.createElement("nextjs-portal");
            l.style.position = "absolute", new MutationObserver(function(e) {
                var n = !0, t = !1, r = void 0;
                try {
                    for(var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0){
                        var i = o.value;
                        if ("childList" === i.type) {
                            var s = !0, c = !1, u = void 0;
                            try {
                                for(var d, f = i.removedNodes[Symbol.iterator](); !(s = (d = f.next()).done); s = !0)d.value === l && document.body.appendChild(l);
                            } catch (e) {
                                c = !0, u = e;
                            } finally{
                                try {
                                    s || null == f.return || f.return();
                                } finally{
                                    if (c) throw u;
                                }
                            }
                        }
                    }
                } catch (e) {
                    t = !0, r = e;
                } finally{
                    try {
                        n || null == a.return || a.return();
                    } finally{
                        if (t) throw r;
                    }
                }
            }).observe(document.body, {
                childList: !0
            }), document.body.appendChild(l);
            var i = (0, A.createRoot)(l);
            (0, o.startTransition)(function() {
                i.render((0, r.jsx)(rZ, {
                    getComponentStack: e,
                    getOwnerStack: n,
                    getSquashedHydrationErrorDetails: t,
                    isRecoverableError: a,
                    routerType: "pages"
                }));
            }), rW = !0;
        }
    }
})(), exports.dispatcher = __webpack_exports__.dispatcher, exports.renderAppDevOverlay = __webpack_exports__.renderAppDevOverlay, exports.renderPagesDevOverlay = __webpack_exports__.renderPagesDevOverlay, __webpack_exports__)-1 === [
    "dispatcher",
    "renderAppDevOverlay",
    "renderPagesDevOverlay"
].indexOf(__webpack_i__) && (exports[__webpack_i__] = __webpack_exports__[__webpack_i__]);
Object.defineProperty(exports, "__esModule", {
    value: !0
}); //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=ce386_next_dist_compiled_next-devtools_index_c6715256.js.map