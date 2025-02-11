(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    8679: function(t, n, e) {
        "use strict";
        var r = e(9864)
          , i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }
          , s = {};
        function l(t) {
            return r.isMemo(t) ? a : s[t.$$typeof] || i
        }
        s[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        s[r.Memo] = a;
        var c = Object.defineProperty
          , u = Object.getOwnPropertyNames
          , d = Object.getOwnPropertySymbols
          , f = Object.getOwnPropertyDescriptor
          , h = Object.getPrototypeOf
          , p = Object.prototype;
        t.exports = function t(n, e, r) {
            if ("string" !== typeof e) {
                if (p) {
                    var i = h(e);
                    i && i !== p && t(n, i, r)
                }
                var a = u(e);
                d && (a = a.concat(d(e)));
                for (var s = l(n), m = l(e), v = 0; v < a.length; ++v) {
                    var g = a[v];
                    if (!o[g] && (!r || !r[g]) && (!m || !m[g]) && (!s || !s[g])) {
                        var y = f(e, g);
                        try {
                            c(n, g, y)
                        } catch (b) {}
                    }
                }
            }
            return n
        }
    },
    6267: function(t, n, e) {
        "use strict";
        function r(t, n) {
            if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function o(t, n, e) {
            return n && i(t.prototype, n),
            e && i(t, e),
            t
        }
        function a(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e,
            t
        }
        function s(t, n) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                }
                ))),
                e.push.apply(e, r)
            }
            return e
        }
        function l(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {};
                n % 2 ? s(Object(e), !0).forEach((function(n) {
                    a(t, n, e[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : s(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }
                ))
            }
            return t
        }
        function c(t, n) {
            if ("function" !== typeof n && null !== n)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            n && d(t, n)
        }
        function u(t) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            u(t)
        }
        function d(t, n) {
            return d = Object.setPrototypeOf || function(t, n) {
                return t.__proto__ = n,
                t
            }
            ,
            d(t, n)
        }
        function f(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function h(t, n) {
            return !n || "object" !== typeof n && "function" !== typeof n ? f(t) : n
        }
        function p(t) {
            var n = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var e, r = u(t);
                if (n) {
                    var i = u(this).constructor;
                    e = Reflect.construct(r, arguments, i)
                } else
                    e = r.apply(this, arguments);
                return h(this, e)
            }
        }
        function m(t, n, e) {
            return m = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(t, n, e) {
                var r = function(t, n) {
                    for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = u(t)); )
                        ;
                    return t
                }(t, n);
                if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, n);
                    return i.get ? i.get.call(e) : i.value
                }
            }
            ,
            m(t, n, e || t)
        }
        function v(t, n) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, n) {
                if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t)))
                    return;
                var e = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (e.push(a.value),
                    !n || e.length !== n); r = !0)
                        ;
                } catch (l) {
                    i = !0,
                    o = l
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return e
            }(t, n) || y(t, n) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(t) {
            return function(t) {
                if (Array.isArray(t))
                    return b(t)
            }(t) || function(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || y(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(t, n) {
            if (t) {
                if ("string" === typeof t)
                    return b(t, n);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === e && t.constructor && (e = t.constructor.name),
                "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? b(t, n) : void 0
            }
        }
        function b(t, n) {
            (null == n || n > t.length) && (n = t.length);
            for (var e = 0, r = new Array(n); e < n; e++)
                r[e] = t[e];
            return r
        }
        e.r(n),
        e.d(n, {
            Native: function() {
                return mt
            },
            Smooth: function() {
                return pt
            }
        });
        var w = {
            el: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            initPosition: {
                x: 0,
                y: 0
            },
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !1,
            lerp: .1,
            class: "is-inview",
            scrollbarContainer: !1,
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            scrollFromAnywhere: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: !0,
            tablet: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical",
                breakpoint: 1024
            },
            smartphone: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical"
            }
        }
          , x = function() {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, t),
                Object.assign(this, w, n),
                this.smartphone = w.smartphone,
                n.smartphone && Object.assign(this.smartphone, n.smartphone),
                this.tablet = w.tablet,
                n.tablet && Object.assign(this.tablet, n.tablet),
                this.namespace = "locomotive",
                this.html = document.documentElement,
                this.windowHeight = window.innerHeight,
                this.windowWidth = window.innerWidth,
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                },
                this.els = {},
                this.currentElements = {},
                this.listeners = {},
                this.hasScrollTicking = !1,
                this.hasCallEventSet = !1,
                this.checkScroll = this.checkScroll.bind(this),
                this.checkResize = this.checkResize.bind(this),
                this.checkEvent = this.checkEvent.bind(this),
                this.instance = {
                    scroll: {
                        x: 0,
                        y: 0
                    },
                    limit: {
                        x: this.html.offsetWidth,
                        y: this.html.offsetHeight
                    },
                    currentElements: this.currentElements
                },
                this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                this.isMobile && (this.direction = this[this.context].direction),
                "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y",
                this.getDirection && (this.instance.direction = null),
                this.getDirection && (this.instance.speed = 0),
                this.html.classList.add(this.initClass),
                window.addEventListener("resize", this.checkResize, !1)
            }
            return o(t, [{
                key: "init",
                value: function() {
                    this.initEvents()
                }
            }, {
                key: "checkScroll",
                value: function() {
                    this.dispatchScroll()
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (this.resizeTick = !0,
                    requestAnimationFrame((function() {
                        t.resize(),
                        t.resizeTick = !1
                    }
                    )))
                }
            }, {
                key: "resize",
                value: function() {}
            }, {
                key: "checkContext",
                value: function() {
                    if (this.reloadOnContextChange) {
                        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint,
                        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                        var t = this.context;
                        if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                        t != this.context)
                            ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                    }
                }
            }, {
                key: "initEvents",
                value: function() {
                    var t = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                    this.setScrollTo = this.setScrollTo.bind(this),
                    this.scrollToEls.forEach((function(n) {
                        n.addEventListener("click", t.setScrollTo, !1)
                    }
                    ))
                }
            }, {
                key: "setScrollTo",
                value: function(t) {
                    t.preventDefault(),
                    this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                        offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                    })
                }
            }, {
                key: "addElements",
                value: function() {}
            }, {
                key: "detectElements",
                value: function(t) {
                    var n = this
                      , e = this.instance.scroll.y
                      , r = e + this.windowHeight
                      , i = this.instance.scroll.x
                      , o = i + this.windowWidth;
                    Object.entries(this.els).forEach((function(a) {
                        var s = v(a, 2)
                          , l = s[0]
                          , c = s[1];
                        if (!c || c.inView && !t || ("horizontal" === n.direction ? o >= c.left && i < c.right && n.setInView(c, l) : r >= c.top && e < c.bottom && n.setInView(c, l)),
                        c && c.inView)
                            if ("horizontal" === n.direction) {
                                var u = c.right - c.left;
                                c.progress = (n.instance.scroll.x - (c.left - n.windowWidth)) / (u + n.windowWidth),
                                (o < c.left || i > c.right) && n.setOutOfView(c, l)
                            } else {
                                var d = c.bottom - c.top;
                                c.progress = (n.instance.scroll.y - (c.top - n.windowHeight)) / (d + n.windowHeight),
                                (r < c.top || e > c.bottom) && n.setOutOfView(c, l)
                            }
                    }
                    )),
                    this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function(t, n) {
                    this.els[n].inView = !0,
                    t.el.classList.add(t.class),
                    this.currentElements[n] = t,
                    t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                    t.repeat || (this.els[n].call = !1))
                }
            }, {
                key: "setOutOfView",
                value: function(t, n) {
                    var e = this;
                    this.els[n].inView = !1,
                    Object.keys(this.currentElements).forEach((function(t) {
                        t === n && delete e.currentElements[t]
                    }
                    )),
                    t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                    t.repeat && t.el.classList.remove(t.class)
                }
            }, {
                key: "dispatchCall",
                value: function(t, n) {
                    this.callWay = n,
                    this.callValue = t.call.split(",").map((function(t) {
                        return t.trim()
                    }
                    )),
                    this.callObj = t,
                    1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    var e = new Event(this.namespace + "call");
                    this.el.dispatchEvent(e)
                }
            }, {
                key: "dispatchScroll",
                value: function() {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t)
                }
            }, {
                key: "setEvents",
                value: function(t, n) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var e = this.listeners[t];
                    e.push(n),
                    1 === e.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                    "call" === t && (this.hasCallEventSet = !0,
                    this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function(t, n) {
                    if (this.listeners[t]) {
                        var e = this.listeners[t]
                          , r = e.indexOf(n);
                        r < 0 || (e.splice(r, 1),
                        0 === e.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                    }
                }
            }, {
                key: "checkEvent",
                value: function(t) {
                    var n = this
                      , e = t.type.replace(this.namespace, "")
                      , r = this.listeners[e];
                    r && 0 !== r.length && r.forEach((function(t) {
                        switch (e) {
                        case "scroll":
                            return t(n.instance);
                        case "call":
                            return t(n.callValue, n.callWay, n.callObj);
                        default:
                            return t()
                        }
                    }
                    ))
                }
            }, {
                key: "startScroll",
                value: function() {}
            }, {
                key: "stopScroll",
                value: function() {}
            }, {
                key: "setScroll",
                value: function(t, n) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1),
                    Object.keys(this.listeners).forEach((function(n) {
                        t.el.removeEventListener(t.namespace + n, t.checkEvent, !1)
                    }
                    )),
                    this.listeners = {},
                    this.scrollToEls.forEach((function(n) {
                        n.removeEventListener("click", t.setScrollTo, !1)
                    }
                    )),
                    this.html.classList.remove(this.initClass)
                }
            }]),
            t
        }()
          , k = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof e.g ? e.g : "undefined" !== typeof self ? self : {};
        function S(t, n) {
            return t(n = {
                exports: {}
            }, n.exports),
            n.exports
        }
        var C = S((function(t, n) {
            t.exports = {
                polyfill: function() {
                    var t = window
                      , n = document;
                    if (!("scrollBehavior"in n.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                        var e, r = t.HTMLElement || t.Element, i = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: r.prototype.scroll || s,
                            scrollIntoView: r.prototype.scrollIntoView
                        }, o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, a = (e = t.navigator.userAgent,
                        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0);
                        t.scroll = t.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(t, n.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : i.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                        }
                        ,
                        t.scrollBy = function() {
                            void 0 !== arguments[0] && (l(arguments[0]) ? i.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, n.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                        }
                        ,
                        r.prototype.scroll = r.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== l(arguments[0])) {
                                    var t = arguments[0].left
                                      , n = arguments[0].top;
                                    p.call(this, this, "undefined" === typeof t ? this.scrollLeft : ~~t, "undefined" === typeof n ? this.scrollTop : ~~n)
                                } else {
                                    if ("number" === typeof arguments[0] && void 0 === arguments[1])
                                        throw new SyntaxError("Value could not be converted");
                                    i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }
                        ,
                        r.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }
                        ,
                        r.prototype.scrollIntoView = function() {
                            if (!0 !== l(arguments[0])) {
                                var e = f(this)
                                  , r = e.getBoundingClientRect()
                                  , o = this.getBoundingClientRect();
                                e !== n.body ? (p.call(this, e, e.scrollLeft + o.left - r.left, e.scrollTop + o.top - r.top),
                                "fixed" !== t.getComputedStyle(e).position && t.scrollBy({
                                    left: r.left,
                                    top: r.top,
                                    behavior: "smooth"
                                })) : t.scrollBy({
                                    left: o.left,
                                    top: o.top,
                                    behavior: "smooth"
                                })
                            } else
                                i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }
                    function s(t, n) {
                        this.scrollLeft = t,
                        this.scrollTop = n
                    }
                    function l(t) {
                        if (null === t || "object" !== typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                            return !0;
                        if ("object" === typeof t && "smooth" === t.behavior)
                            return !1;
                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }
                    function c(t, n) {
                        return "Y" === n ? t.clientHeight + a < t.scrollHeight : "X" === n ? t.clientWidth + a < t.scrollWidth : void 0
                    }
                    function u(n, e) {
                        var r = t.getComputedStyle(n, null)["overflow" + e];
                        return "auto" === r || "scroll" === r
                    }
                    function d(t) {
                        var n = c(t, "Y") && u(t, "Y")
                          , e = c(t, "X") && u(t, "X");
                        return n || e
                    }
                    function f(t) {
                        for (; t !== n.body && !1 === d(t); )
                            t = t.parentNode || t.host;
                        return t
                    }
                    function h(n) {
                        var e, r, i, a, s = (o() - n.startTime) / 468;
                        a = s = s > 1 ? 1 : s,
                        e = .5 * (1 - Math.cos(Math.PI * a)),
                        r = n.startX + (n.x - n.startX) * e,
                        i = n.startY + (n.y - n.startY) * e,
                        n.method.call(n.scrollable, r, i),
                        r === n.x && i === n.y || t.requestAnimationFrame(h.bind(t, n))
                    }
                    function p(e, r, a) {
                        var l, c, u, d, f = o();
                        e === n.body ? (l = t,
                        c = t.scrollX || t.pageXOffset,
                        u = t.scrollY || t.pageYOffset,
                        d = i.scroll) : (l = e,
                        c = e.scrollLeft,
                        u = e.scrollTop,
                        d = s),
                        h({
                            scrollable: l,
                            method: d,
                            startTime: f,
                            startX: c,
                            startY: u,
                            x: r,
                            y: a
                        })
                    }
                }
            }
        }
        ))
          , E = (C.polyfill,
        function(t) {
            c(e, t);
            var n = p(e);
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return r(this, e),
                (t = n.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0)),
                window.addEventListener("scroll", t.checkScroll, !1),
                void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = C,
                window.smoothscrollPolyfill.polyfill()),
                t
            }
            return o(e, [{
                key: "init",
                value: function() {
                    this.instance.scroll.y = window.pageYOffset,
                    this.addElements(),
                    this.detectElements(),
                    m(u(e.prototype), "init", this).call(this)
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this;
                    m(u(e.prototype), "checkScroll", this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                    this.speedTs = Date.now()),
                    this.instance.scroll.y = window.pageYOffset,
                    Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                        t.detectElements()
                    }
                    )),
                    this.hasScrollTicking = !0))
                }
            }, {
                key: "addDirection",
                value: function() {
                    window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "resize",
                value: function() {
                    Object.entries(this.els).length && (this.windowHeight = window.innerHeight,
                    this.updateElements())
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {},
                    this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(n, e) {
                        n.getBoundingClientRect();
                        var r, i, o, a = n.dataset[t.name + "Class"] || t.class, s = "string" === typeof n.dataset[t.name + "Id"] ? n.dataset[t.name + "Id"] : e, l = "string" === typeof n.dataset[t.name + "Offset"] ? n.dataset[t.name + "Offset"].split(",") : t.offset, c = n.dataset[t.name + "Repeat"], u = n.dataset[t.name + "Call"], d = n.dataset[t.name + "Target"], f = (o = void 0 !== d ? document.querySelector("".concat(d)) : n).getBoundingClientRect();
                        r = f.top + t.instance.scroll.y,
                        i = f.left + t.instance.scroll.x;
                        var h = r + o.offsetHeight
                          , p = i + o.offsetWidth;
                        c = "false" != c && (void 0 != c || t.repeat);
                        var m = t.getRelativeOffset(l)
                          , v = {
                            el: n,
                            targetEl: o,
                            id: s,
                            class: a,
                            top: r += m[0],
                            bottom: h -= m[1],
                            left: i,
                            right: p,
                            offset: l,
                            progress: 0,
                            repeat: c,
                            inView: !1,
                            call: u
                        };
                        t.els[s] = v,
                        n.classList.contains(a) && t.setInView(t.els[s], s)
                    }
                    ))
                }
            }, {
                key: "updateElements",
                value: function() {
                    var t = this;
                    Object.entries(this.els).forEach((function(n) {
                        var e = v(n, 2)
                          , r = e[0]
                          , i = e[1]
                          , o = i.targetEl.getBoundingClientRect().top + t.instance.scroll.y
                          , a = o + i.targetEl.offsetHeight
                          , s = t.getRelativeOffset(i.offset);
                        t.els[r].top = o + s[0],
                        t.els[r].bottom = a - s[1]
                    }
                    )),
                    this.hasScrollTicking = !1
                }
            }, {
                key: "getRelativeOffset",
                value: function(t) {
                    var n = [0, 0];
                    if (t)
                        for (var e = 0; e < t.length; e++)
                            "string" == typeof t[e] ? t[e].includes("%") ? n[e] = parseInt(t[e].replace("%", "") * this.windowHeight / 100) : n[e] = parseInt(t[e]) : n[e] = t[e];
                    return n
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , e = parseInt(n.offset) || 0
                      , r = !!n.callback && n.callback;
                    if ("string" === typeof t) {
                        if ("top" === t)
                            t = this.html;
                        else if ("bottom" === t)
                            t = this.html.offsetHeight - window.innerHeight;
                        else if (!(t = document.querySelector(t)))
                            return
                    } else if ("number" === typeof t)
                        t = parseInt(t);
                    else if (!t || !t.tagName)
                        return void console.warn("`target` parameter is not valid");
                    e = "number" !== typeof t ? t.getBoundingClientRect().top + e + this.instance.scroll.y : t + e;
                    var i = function() {
                        return parseInt(window.pageYOffset) === parseInt(e)
                    };
                    if (r) {
                        if (i())
                            return void r();
                        var o = function t() {
                            i() && (window.removeEventListener("scroll", t),
                            r())
                        };
                        window.addEventListener("scroll", o)
                    }
                    window.scrollTo({
                        top: e,
                        behavior: 0 === n.duration ? "auto" : "smooth"
                    })
                }
            }, {
                key: "update",
                value: function() {
                    this.addElements(),
                    this.detectElements()
                }
            }, {
                key: "destroy",
                value: function() {
                    m(u(e.prototype), "destroy", this).call(this),
                    window.removeEventListener("scroll", this.checkScroll, !1)
                }
            }]),
            e
        }(x))
          , A = Object.getOwnPropertySymbols
          , T = Object.prototype.hasOwnProperty
          , _ = Object.prototype.propertyIsEnumerable;
        function P(t) {
            if (null === t || void 0 === t)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        var j = function() {
            try {
                if (!Object.assign)
                    return !1;
                var t = new String("abc");
                if (t[5] = "de",
                "5" === Object.getOwnPropertyNames(t)[0])
                    return !1;
                for (var n = {}, e = 0; e < 10; e++)
                    n["_" + String.fromCharCode(e)] = e;
                if ("0123456789" !== Object.getOwnPropertyNames(n).map((function(t) {
                    return n[t]
                }
                )).join(""))
                    return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                    r[t] = t
                }
                )),
                "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (i) {
                return !1
            }
        }() ? Object.assign : function(t, n) {
            for (var e, r, i = P(t), o = 1; o < arguments.length; o++) {
                for (var a in e = Object(arguments[o]))
                    T.call(e, a) && (i[a] = e[a]);
                if (A) {
                    r = A(e);
                    for (var s = 0; s < r.length; s++)
                        _.call(e, r[s]) && (i[r[s]] = e[r[s]])
                }
            }
            return i
        }
        ;
        function O() {}
        O.prototype = {
            on: function(t, n, e) {
                var r = this.e || (this.e = {});
                return (r[t] || (r[t] = [])).push({
                    fn: n,
                    ctx: e
                }),
                this
            },
            once: function(t, n, e) {
                var r = this;
                function i() {
                    r.off(t, i),
                    n.apply(e, arguments)
                }
                return i._ = n,
                this.on(t, i, e)
            },
            emit: function(t) {
                for (var n = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, i = e.length; r < i; r++)
                    e[r].fn.apply(e[r].ctx, n);
                return this
            },
            off: function(t, n) {
                var e = this.e || (this.e = {})
                  , r = e[t]
                  , i = [];
                if (r && n)
                    for (var o = 0, a = r.length; o < a; o++)
                        r[o].fn !== n && r[o].fn._ !== n && i.push(r[o]);
                return i.length ? e[t] = i : delete e[t],
                this
            }
        };
        var I = O
          , M = S((function(t, n) {
            (function() {
                (null !== n ? n : this).Lethargy = function() {
                    function t(t, n, e, r) {
                        this.stability = null != t ? Math.abs(t) : 8,
                        this.sensitivity = null != n ? 1 + Math.abs(n) : 100,
                        this.tolerance = null != e ? 1 + Math.abs(e) : 1.1,
                        this.delay = null != r ? r : 150,
                        this.lastUpDeltas = function() {
                            var t, n, e;
                            for (e = [],
                            t = 1,
                            n = 2 * this.stability; 1 <= n ? t <= n : t >= n; 1 <= n ? t++ : t--)
                                e.push(null);
                            return e
                        }
                        .call(this),
                        this.lastDownDeltas = function() {
                            var t, n, e;
                            for (e = [],
                            t = 1,
                            n = 2 * this.stability; 1 <= n ? t <= n : t >= n; 1 <= n ? t++ : t--)
                                e.push(null);
                            return e
                        }
                        .call(this),
                        this.deltasTimestamp = function() {
                            var t, n, e;
                            for (e = [],
                            t = 1,
                            n = 2 * this.stability; 1 <= n ? t <= n : t >= n; 1 <= n ? t++ : t--)
                                e.push(null);
                            return e
                        }
                        .call(this)
                    }
                    return t.prototype.check = function(t) {
                        var n;
                        return null != (t = t.originalEvent || t).wheelDelta ? n = t.wheelDelta : null != t.deltaY ? n = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (n = -40 * t.detail),
                        this.deltasTimestamp.push(Date.now()),
                        this.deltasTimestamp.shift(),
                        n > 0 ? (this.lastUpDeltas.push(n),
                        this.lastUpDeltas.shift(),
                        this.isInertia(1)) : (this.lastDownDeltas.push(n),
                        this.lastDownDeltas.shift(),
                        this.isInertia(-1))
                    }
                    ,
                    t.prototype.isInertia = function(t) {
                        var n, e, r, i, o, a, s;
                        return null === (n = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && n[0] === n[2 * this.stability - 1]) && (r = n.slice(0, this.stability),
                        e = n.slice(this.stability, 2 * this.stability),
                        s = r.reduce((function(t, n) {
                            return t + n
                        }
                        )),
                        o = e.reduce((function(t, n) {
                            return t + n
                        }
                        )),
                        a = s / r.length,
                        i = o / e.length,
                        Math.abs(a) < Math.abs(i * this.tolerance) && this.sensitivity < Math.abs(i) && t)
                    }
                    ,
                    t.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }
                    ,
                    t.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }
                    ,
                    t
                }()
            }
            ).call(k)
        }
        ))
          , L = {
            hasWheelEvent: "onwheel"in document,
            hasMouseWheelEvent: "onmousewheel"in document,
            hasTouch: "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown"in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1
        }
          , R = Object.prototype.toString
          , z = Object.prototype.hasOwnProperty;
        function D(t, n) {
            return function() {
                return t.apply(n, arguments)
            }
        }
        var Z = M.Lethargy
          , V = "virtualscroll"
          , B = W
          , Y = 37
          , F = 38
          , H = 39
          , N = 40
          , U = 32;
        function W(t) {
            !function(t) {
                if (!t)
                    return console.warn("bindAll requires at least one argument.");
                var n = Array.prototype.slice.call(arguments, 1);
                if (0 === n.length)
                    for (var e in t)
                        z.call(t, e) && "function" == typeof t[e] && "[object Function]" == R.call(t[e]) && n.push(e);
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    t[i] = D(t[i], t)
                }
            }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
            this.el = window,
            t && t.el && (this.el = t.el,
            delete t.el),
            this.options = j({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, t),
            this.options.limitInertia && (this._lethargy = new Z),
            this._emitter = new I,
            this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            },
            this.touchStartX = null,
            this.touchStartY = null,
            this.bodyTouchAction = null,
            void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }
        function X(t, n, e) {
            return (1 - e) * t + e * n
        }
        function q(t) {
            var n = {};
            if (window.getComputedStyle) {
                var e = getComputedStyle(t)
                  , r = e.transform || e.webkitTransform || e.mozTransform
                  , i = r.match(/^matrix3d\((.+)\)$/);
                return i ? (n.x = i ? parseFloat(i[1].split(", ")[12]) : 0,
                n.y = i ? parseFloat(i[1].split(", ")[13]) : 0) : (i = r.match(/^matrix\((.+)\)$/),
                n.x = i ? parseFloat(i[1].split(", ")[4]) : 0,
                n.y = i ? parseFloat(i[1].split(", ")[5]) : 0),
                n
            }
        }
        function $(t) {
            for (var n = []; t && t !== document; t = t.parentNode)
                n.push(t);
            return n
        }
        W.prototype._notify = function(t) {
            var n = this._event;
            n.x += n.deltaX,
            n.y += n.deltaY,
            this._emitter.emit(V, {
                x: n.x,
                y: n.y,
                deltaX: n.deltaX,
                deltaY: n.deltaY,
                originalEvent: t
            })
        }
        ,
        W.prototype._onWheel = function(t) {
            var n = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX || -1 * t.deltaX,
                e.deltaY = t.wheelDeltaY || -1 * t.deltaY,
                L.isFirefox && 1 == t.deltaMode && (e.deltaX *= n.firefoxMultiplier,
                e.deltaY *= n.firefoxMultiplier),
                e.deltaX *= n.mouseMultiplier,
                e.deltaY *= n.mouseMultiplier,
                this._notify(t)
            }
        }
        ,
        W.prototype._onMouseWheel = function(t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var n = this._event;
                n.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
                n.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
                this._notify(t)
            }
        }
        ,
        W.prototype._onTouchStart = function(t) {
            var n = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = n.pageX,
            this.touchStartY = n.pageY
        }
        ,
        W.prototype._onTouchMove = function(t) {
            var n = this.options;
            n.preventTouch && !t.target.classList.contains(n.unpreventTouchClass) && t.preventDefault();
            var e = this._event
              , r = t.targetTouches ? t.targetTouches[0] : t;
            e.deltaX = (r.pageX - this.touchStartX) * n.touchMultiplier,
            e.deltaY = (r.pageY - this.touchStartY) * n.touchMultiplier,
            this.touchStartX = r.pageX,
            this.touchStartY = r.pageY,
            this._notify(t)
        }
        ,
        W.prototype._onKeyDown = function(t) {
            var n = this._event;
            n.deltaX = n.deltaY = 0;
            var e = window.innerHeight - 40;
            switch (t.keyCode) {
            case Y:
            case F:
                n.deltaY = this.options.keyStep;
                break;
            case H:
            case N:
                n.deltaY = -this.options.keyStep;
                break;
            case t.shiftKey:
                n.deltaY = e;
                break;
            case U:
                n.deltaY = -e;
                break;
            default:
                return
            }
            this._notify(t)
        }
        ,
        W.prototype._bind = function() {
            L.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
            L.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
            L.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
            this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
            L.hasPointer && L.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction,
            document.body.style.msTouchAction = "none",
            this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
            this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
            L.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }
        ,
        W.prototype._unbind = function() {
            L.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
            L.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
            L.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart),
            this.el.removeEventListener("touchmove", this._onTouchMove)),
            L.hasPointer && L.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction,
            this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
            this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
            L.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }
        ,
        W.prototype.on = function(t, n) {
            this._emitter.on(V, t, n);
            var e = this._emitter.e;
            e && e[V] && 1 === e[V].length && this._bind()
        }
        ,
        W.prototype.off = function(t, n) {
            this._emitter.off(V, t, n);
            var e = this._emitter.e;
            (!e[V] || e[V].length <= 0) && this._unbind()
        }
        ,
        W.prototype.reset = function() {
            var t = this._event;
            t.x = 0,
            t.y = 0
        }
        ,
        W.prototype.destroy = function() {
            this._emitter.off(),
            this._unbind()
        }
        ;
        var G = .1
          , K = "function" === typeof Float32Array;
        function J(t, n) {
            return 1 - 3 * n + 3 * t
        }
        function Q(t, n) {
            return 3 * n - 6 * t
        }
        function tt(t) {
            return 3 * t
        }
        function nt(t, n, e) {
            return ((J(n, e) * t + Q(n, e)) * t + tt(n)) * t
        }
        function et(t, n, e) {
            return 3 * J(n, e) * t * t + 2 * Q(n, e) * t + tt(n)
        }
        function rt(t) {
            return t
        }
        var it = function(t, n, e, r) {
            if (!(0 <= t && t <= 1 && 0 <= e && e <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            if (t === n && e === r)
                return rt;
            for (var i = K ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o)
                i[o] = nt(o * G, t, e);
            function a(n) {
                for (var r = 0, o = 1; 10 !== o && i[o] <= n; ++o)
                    r += G;
                --o;
                var a = r + (n - i[o]) / (i[o + 1] - i[o]) * G
                  , s = et(a, t, e);
                return s >= .001 ? function(t, n, e, r) {
                    for (var i = 0; i < 4; ++i) {
                        var o = et(n, e, r);
                        if (0 === o)
                            return n;
                        n -= (nt(n, e, r) - t) / o
                    }
                    return n
                }(n, a, t, e) : 0 === s ? a : function(t, n, e, r, i) {
                    var o, a, s = 0;
                    do {
                        (o = nt(a = n + (e - n) / 2, r, i) - t) > 0 ? e = a : n = a
                    } while (Math.abs(o) > 1e-7 && ++s < 10);
                    return a
                }(n, r, r + G, t, e)
            }
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : nt(a(t), n, r)
            }
        }
          , ot = 38
          , at = 40
          , st = 32
          , lt = 9
          , ct = 33
          , ut = 34
          , dt = 36
          , ft = 35
          , ht = function(t) {
            c(e, t);
            var n = p(e);
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return r(this, e),
                history.scrollRestoration && (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0),
                (t = n.call(this, i)).inertia && (t.lerp = .1 * t.inertia),
                t.isScrolling = !1,
                t.isDraggingScrollbar = !1,
                t.isTicking = !1,
                t.hasScrollTicking = !1,
                t.parallaxElements = {},
                t.stop = !1,
                t.scrollbarContainer = i.scrollbarContainer,
                t.checkKey = t.checkKey.bind(f(t)),
                window.addEventListener("keydown", t.checkKey, !1),
                t
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.html.classList.add(this.smoothClass),
                    this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                    this.instance = l({
                        delta: {
                            x: this.initPosition.x,
                            y: this.initPosition.y
                        },
                        scroll: {
                            x: this.initPosition.x,
                            y: this.initPosition.y
                        }
                    }, this.instance),
                    this.vs = new B({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0
                    }),
                    this.vs.on((function(n) {
                        t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                            t.updateDelta(n),
                            t.isScrolling || t.startScrolling()
                        }
                        ))
                    }
                    )),
                    this.setScrollLimit(),
                    this.initScrollBar(),
                    this.addSections(),
                    this.addElements(),
                    this.checkScroll(!0),
                    this.transformElements(!0, !0),
                    m(u(e.prototype), "init", this).call(this)
                }
            }, {
                key: "setScrollLimit",
                value: function() {
                    if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight,
                    "horizontal" === this.direction) {
                        for (var t = 0, n = this.el.children, e = 0; e < n.length; e++)
                            t += n[e].offsetWidth;
                        this.instance.limit.x = t - this.windowWidth
                    }
                }
            }, {
                key: "startScrolling",
                value: function() {
                    this.startScrollTs = Date.now(),
                    this.isScrolling = !0,
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass)
                }
            }, {
                key: "stopScrolling",
                value: function() {
                    cancelAnimationFrame(this.checkScrollRaf),
                    this.startScrollTs = void 0,
                    this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                    this.scrollToRaf = null),
                    this.isScrolling = !1,
                    this.instance.scroll.y = Math.round(this.instance.scroll.y),
                    this.html.classList.remove(this.scrollingClass)
                }
            }, {
                key: "checkKey",
                value: function(t) {
                    var n = this;
                    if (this.stop)
                        t.keyCode == lt && requestAnimationFrame((function() {
                            n.html.scrollTop = 0,
                            document.body.scrollTop = 0,
                            n.html.scrollLeft = 0,
                            document.body.scrollLeft = 0
                        }
                        ));
                    else {
                        switch (t.keyCode) {
                        case lt:
                            requestAnimationFrame((function() {
                                n.html.scrollTop = 0,
                                document.body.scrollTop = 0,
                                n.html.scrollLeft = 0,
                                document.body.scrollLeft = 0,
                                n.scrollTo(document.activeElement, {
                                    offset: -window.innerHeight / 2
                                })
                            }
                            ));
                            break;
                        case ot:
                            this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                            break;
                        case at:
                            this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                            break;
                        case ct:
                            this.instance.delta[this.directionAxis] -= window.innerHeight;
                            break;
                        case ut:
                            this.instance.delta[this.directionAxis] += window.innerHeight;
                            break;
                        case dt:
                            this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                            break;
                        case ft:
                            this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                            break;
                        case st:
                            this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                            break;
                        default:
                            return
                        }
                        this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                        this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                        this.stopScrolling(),
                        this.isScrolling = !0,
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass)
                    }
                }
            }, {
                key: "isActiveElementScrollSensitive",
                value: function() {
                    return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement)
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this
                      , n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (n || this.isScrolling || this.isDraggingScrollbar) {
                        this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                            return t.checkScroll()
                        }
                        )),
                        this.hasScrollTicking = !0),
                        this.updateScroll();
                        var r = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis])
                          , i = Date.now() - this.startScrollTs;
                        if (!this.animatingScroll && i > 100 && (r < .5 && 0 != this.instance.delta[this.directionAxis] || r < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(),
                        Object.entries(this.sections).forEach((function(e) {
                            var r = v(e, 2)
                              , i = (r[0],
                            r[1]);
                            i.persistent || t.instance.scroll[t.directionAxis] > i.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < i.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(i.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(i.el, 0, -t.instance.scroll[t.directionAxis]),
                            i.inView || (i.inView = !0,
                            i.el.style.opacity = 1,
                            i.el.style.pointerEvents = "all",
                            i.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((i.inView || n) && (i.inView = !1,
                            i.el.style.opacity = 0,
                            i.el.style.pointerEvents = "none",
                            i.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                            t.transform(i.el, 0, 0))
                        }
                        )),
                        this.getDirection && this.addDirection(),
                        this.getSpeed && (this.addSpeed(),
                        this.speedTs = Date.now()),
                        this.detectElements(),
                        this.transformElements(),
                        this.hasScrollbar) {
                            var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                            "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                        }
                        m(u(e.prototype), "checkScroll", this).call(this),
                        this.hasScrollTicking = !1
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    this.windowHeight = window.innerHeight,
                    this.windowWidth = window.innerWidth,
                    this.checkContext(),
                    this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    },
                    this.update()
                }
            }, {
                key: "updateDelta",
                value: function(t) {
                    var n, e = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                    n = "both" === e ? t.deltaX + t.deltaY : "vertical" === e ? t.deltaY : "horizontal" === e ? t.deltaX : t.deltaY,
                    this.instance.delta[this.directionAxis] -= n * this.multiplier,
                    this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                }
            }, {
                key: "updateScroll",
                value: function(t) {
                    this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = X(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                }
            }, {
                key: "addDirection",
                value: function() {
                    this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                    this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "initScrollBar",
                value: function() {
                    if (this.scrollbar = document.createElement("span"),
                    this.scrollbarThumb = document.createElement("span"),
                    this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                    this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                    this.scrollbar.append(this.scrollbarThumb),
                    this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                    this.getScrollBar = this.getScrollBar.bind(this),
                    this.releaseScrollBar = this.releaseScrollBar.bind(this),
                    this.moveScrollBar = this.moveScrollBar.bind(this),
                    this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                    window.addEventListener("mouseup", this.releaseScrollBar),
                    window.addEventListener("mousemove", this.moveScrollBar),
                    this.hasScrollbar = !1,
                    "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                            return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                        return;
                    this.hasScrollbar = !0,
                    this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                    this.scrollbarHeight = this.scrollbarBCR.height,
                    this.scrollbarWidth = this.scrollbarBCR.width,
                    "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                    this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                    this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    }
                }
            }, {
                key: "reinitScrollBar",
                value: function() {
                    if (this.hasScrollbar = !1,
                    "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                            return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                        return;
                    this.hasScrollbar = !0,
                    this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                    this.scrollbarHeight = this.scrollbarBCR.height,
                    this.scrollbarWidth = this.scrollbarBCR.width,
                    "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                    this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                    this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    }
                }
            }, {
                key: "destroyScrollBar",
                value: function() {
                    this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                    window.removeEventListener("mouseup", this.releaseScrollBar),
                    window.removeEventListener("mousemove", this.moveScrollBar),
                    this.scrollbar.remove()
                }
            }, {
                key: "getScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !0,
                    this.checkScroll(),
                    this.html.classList.remove(this.scrollingClass),
                    this.html.classList.add(this.draggingClass)
                }
            }, {
                key: "releaseScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !1,
                    this.isScrolling && this.html.classList.add(this.scrollingClass),
                    this.html.classList.remove(this.draggingClass)
                }
            }, {
                key: "moveScrollBar",
                value: function(t) {
                    var n = this;
                    this.isDraggingScrollbar && requestAnimationFrame((function() {
                        var e = 100 * (t.clientX - n.scrollbarBCR.left) / n.scrollbarWidth * n.instance.limit.x / 100
                          , r = 100 * (t.clientY - n.scrollbarBCR.top) / n.scrollbarHeight * n.instance.limit.y / 100;
                        r > 0 && r < n.instance.limit.y && (n.instance.delta.y = r),
                        e > 0 && e < n.instance.limit.x && (n.instance.delta.x = e)
                    }
                    ))
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {},
                    this.parallaxElements = {},
                    this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(n, e) {
                        var r, i, o, a = $(n), s = Object.entries(t.sections).map((function(t) {
                            var n = v(t, 2);
                            n[0];
                            return n[1]
                        }
                        )).find((function(t) {
                            return a.includes(t.el)
                        }
                        )), l = n.dataset[t.name + "Class"] || t.class, c = "string" === typeof n.dataset[t.name + "Id"] ? n.dataset[t.name + "Id"] : "el" + e, u = n.dataset[t.name + "Repeat"], d = n.dataset[t.name + "Call"], f = n.dataset[t.name + "Position"], h = n.dataset[t.name + "Delay"], p = n.dataset[t.name + "Direction"], m = "string" === typeof n.dataset[t.name + "Sticky"], g = !!n.dataset[t.name + "Speed"] && parseFloat(n.dataset[t.name + "Speed"]) / 10, y = "string" === typeof n.dataset[t.name + "Offset"] ? n.dataset[t.name + "Offset"].split(",") : t.offset, b = n.dataset[t.name + "Target"], w = (o = void 0 !== b ? document.querySelector("".concat(b)) : n).getBoundingClientRect();
                        null === s || s.inView ? (r = w.top + t.instance.scroll.y - q(o).y,
                        i = w.left + t.instance.scroll.x - q(o).x) : (r = w.top - q(s.el).y - q(o).y,
                        i = w.left - q(s.el).x - q(o).x);
                        var x = r + o.offsetHeight
                          , k = i + o.offsetWidth
                          , S = {
                            x: (k - i) / 2 + i,
                            y: (x - r) / 2 + r
                        };
                        if (m) {
                            var C = n.getBoundingClientRect()
                              , E = C.top
                              , A = C.left
                              , T = {
                                x: A - i,
                                y: E - r
                            };
                            r += window.innerHeight,
                            i += window.innerWidth,
                            x = E + o.offsetHeight - n.offsetHeight - T[t.directionAxis],
                            S = {
                                x: ((k = A + o.offsetWidth - n.offsetWidth - T[t.directionAxis]) - i) / 2 + i,
                                y: (x - r) / 2 + r
                            }
                        }
                        u = "false" != u && (void 0 != u || t.repeat);
                        var _ = [0, 0];
                        if (y)
                            if ("horizontal" === t.direction) {
                                for (var P = 0; P < y.length; P++)
                                    "string" == typeof y[P] ? y[P].includes("%") ? _[P] = parseInt(y[P].replace("%", "") * t.windowWidth / 100) : _[P] = parseInt(y[P]) : _[P] = y[P];
                                i += _[0],
                                k -= _[1]
                            } else {
                                for (P = 0; P < y.length; P++)
                                    "string" == typeof y[P] ? y[P].includes("%") ? _[P] = parseInt(y[P].replace("%", "") * t.windowHeight / 100) : _[P] = parseInt(y[P]) : _[P] = y[P];
                                r += _[0],
                                x -= _[1]
                            }
                        var j = {
                            el: n,
                            id: c,
                            class: l,
                            section: s,
                            top: r,
                            middle: S,
                            bottom: x,
                            left: i,
                            right: k,
                            offset: y,
                            progress: 0,
                            repeat: u,
                            inView: !1,
                            call: d,
                            speed: g,
                            delay: h,
                            position: f,
                            target: o,
                            direction: p,
                            sticky: m
                        };
                        t.els[c] = j,
                        n.classList.contains(l) && t.setInView(t.els[c], c),
                        (!1 !== g || m) && (t.parallaxElements[c] = j)
                    }
                    ))
                }
            }, {
                key: "addSections",
                value: function() {
                    var t = this;
                    this.sections = {};
                    var n = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                    0 === n.length && (n = [this.el]),
                    n.forEach((function(n, e) {
                        var r = "string" === typeof n.dataset[t.name + "Id"] ? n.dataset[t.name + "Id"] : "section" + e
                          , i = n.getBoundingClientRect()
                          , o = {
                            x: i.left - 1.5 * window.innerWidth - q(n).x,
                            y: i.top - 1.5 * window.innerHeight - q(n).y
                        }
                          , a = {
                            x: o.x + i.width + 2 * window.innerWidth,
                            y: o.y + i.height + 2 * window.innerHeight
                        }
                          , s = "string" === typeof n.dataset[t.name + "Persistent"];
                        n.setAttribute("data-scroll-section-id", r);
                        var l = {
                            el: n,
                            offset: o,
                            limit: a,
                            inView: !1,
                            persistent: s,
                            id: r
                        };
                        t.sections[r] = l
                    }
                    ))
                }
            }, {
                key: "transform",
                value: function(t, n, e, r) {
                    var i;
                    if (r) {
                        var o = q(t)
                          , a = X(o.x, n, r)
                          , s = X(o.y, e, r);
                        i = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(a, ",").concat(s, ",0,1)")
                    } else
                        i = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(n, ",").concat(e, ",0,1)");
                    t.style.webkitTransform = i,
                    t.style.msTransform = i,
                    t.style.transform = i
                }
            }, {
                key: "transformElements",
                value: function(t) {
                    var n = this
                      , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = this.instance.scroll.x + this.windowWidth
                      , i = this.instance.scroll.y + this.windowHeight
                      , o = {
                        x: this.instance.scroll.x + this.windowMiddle.x,
                        y: this.instance.scroll.y + this.windowMiddle.y
                    };
                    Object.entries(this.parallaxElements).forEach((function(a) {
                        var s = v(a, 2)
                          , l = (s[0],
                        s[1])
                          , c = !1;
                        if (t && (c = 0),
                        l.inView || e)
                            switch (l.position) {
                            case "top":
                            case "left":
                                c = n.instance.scroll[n.directionAxis] * -l.speed;
                                break;
                            case "elementTop":
                                c = (i - l.top) * -l.speed;
                                break;
                            case "bottom":
                                c = (n.instance.limit[n.directionAxis] - i + n.windowHeight) * l.speed;
                                break;
                            case "elementLeft":
                                c = (r - l.left) * -l.speed;
                                break;
                            case "right":
                                c = (n.instance.limit[n.directionAxis] - r + n.windowHeight) * l.speed;
                                break;
                            default:
                                c = (o[n.directionAxis] - l.middle[n.directionAxis]) * -l.speed
                            }
                        l.sticky && (c = l.inView ? "horizontal" === n.direction ? n.instance.scroll.x - l.left + window.innerWidth : n.instance.scroll.y - l.top + window.innerHeight : "horizontal" === n.direction ? n.instance.scroll.x < l.left - window.innerWidth && n.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : n.instance.scroll.x > l.right && n.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : n.instance.scroll.y < l.top - window.innerHeight && n.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : n.instance.scroll.y > l.bottom && n.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight),
                        !1 !== c && ("horizontal" === l.direction || "horizontal" === n.direction && "vertical" !== l.direction ? n.transform(l.el, c, 0, !t && l.delay) : n.transform(l.el, 0, c, !t && l.delay))
                    }
                    ))
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var n = this
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = parseInt(e.offset) || 0
                      , i = isNaN(parseInt(e.duration)) ? 1e3 : parseInt(e.duration)
                      , o = e.easing || [.25, 0, .35, 1]
                      , a = !!e.disableLerp
                      , s = !!e.callback && e.callback;
                    if (o = it.apply(void 0, g(o)),
                    "string" === typeof t) {
                        if ("top" === t)
                            t = 0;
                        else if ("bottom" === t)
                            t = this.instance.limit.y;
                        else if ("left" === t)
                            t = 0;
                        else if ("right" === t)
                            t = this.instance.limit.x;
                        else if (!(t = document.querySelector(t)))
                            return
                    } else if ("number" === typeof t)
                        t = parseInt(t);
                    else if (!t || !t.tagName)
                        return void console.warn("`target` parameter is not valid");
                    if ("number" !== typeof t) {
                        var l = $(t).includes(this.el);
                        if (!l)
                            return;
                        var c = t.getBoundingClientRect()
                          , u = c.top
                          , d = c.left
                          , f = $(t)
                          , h = f.find((function(t) {
                            return Object.entries(n.sections).map((function(t) {
                                var n = v(t, 2);
                                n[0];
                                return n[1]
                            }
                            )).find((function(n) {
                                return n.el == t
                            }
                            ))
                        }
                        ))
                          , p = 0;
                        p = h ? q(h)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                        r = "horizontal" === this.direction ? d + r - p : u + r - p
                    } else
                        r = t + r;
                    var m = parseFloat(this.instance.delta[this.directionAxis])
                      , y = Math.max(0, Math.min(r, this.instance.limit[this.directionAxis]))
                      , b = y - m
                      , w = function(t) {
                        a ? "horizontal" === n.direction ? n.setScroll(m + b * t, n.instance.delta.y) : n.setScroll(n.instance.delta.x, m + b * t) : n.instance.delta[n.directionAxis] = m + b * t
                    };
                    this.animatingScroll = !0,
                    this.stopScrolling(),
                    this.startScrolling();
                    var x = Date.now()
                      , k = function t() {
                        var e = (Date.now() - x) / i;
                        e > 1 ? (w(1),
                        n.animatingScroll = !1,
                        0 == i && n.update(),
                        s && s()) : (n.scrollToRaf = requestAnimationFrame(t),
                        w(o(e)))
                    };
                    k()
                }
            }, {
                key: "update",
                value: function() {
                    this.setScrollLimit(),
                    this.addSections(),
                    this.addElements(),
                    this.detectElements(),
                    this.updateScroll(),
                    this.transformElements(!0),
                    this.reinitScrollBar(),
                    this.checkScroll(!0)
                }
            }, {
                key: "startScroll",
                value: function() {
                    this.stop = !1
                }
            }, {
                key: "stopScroll",
                value: function() {
                    this.stop = !0
                }
            }, {
                key: "setScroll",
                value: function(t, n) {
                    this.instance = l(l({}, this.instance), {}, {
                        scroll: {
                            x: t,
                            y: n
                        },
                        delta: {
                            x: t,
                            y: n
                        },
                        speed: 0
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    m(u(e.prototype), "destroy", this).call(this),
                    this.stopScrolling(),
                    this.html.classList.remove(this.smoothClass),
                    this.vs.destroy(),
                    this.destroyScrollBar(),
                    window.removeEventListener("keydown", this.checkKey, !1)
                }
            }]),
            e
        }(x)
          , pt = function() {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, t),
                this.options = n,
                Object.assign(this, w, n),
                this.smartphone = w.smartphone,
                n.smartphone && Object.assign(this.smartphone, n.smartphone),
                this.tablet = w.tablet,
                n.tablet && Object.assign(this.tablet, n.tablet),
                this.smooth || "horizontal" != this.direction || console.warn("\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible"),
                this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
                this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
                this.init()
            }
            return o(t, [{
                key: "init",
                value: function() {
                    if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint,
                    this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint,
                    this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ht(this.options) : this.scroll = new E(this.options),
                    this.scroll.init(),
                    window.location.hash) {
                        var t = window.location.hash.slice(1, window.location.hash.length)
                          , n = document.getElementById(t);
                        n && this.scroll.scrollTo(n)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    this.scroll.update()
                }
            }, {
                key: "start",
                value: function() {
                    this.scroll.startScroll()
                }
            }, {
                key: "stop",
                value: function() {
                    this.scroll.stopScroll()
                }
            }, {
                key: "scrollTo",
                value: function(t, n) {
                    this.scroll.scrollTo(t, n)
                }
            }, {
                key: "setScroll",
                value: function(t, n) {
                    this.scroll.setScroll(t, n)
                }
            }, {
                key: "on",
                value: function(t, n) {
                    this.scroll.setEvents(t, n)
                }
            }, {
                key: "off",
                value: function(t, n) {
                    this.scroll.unsetEvents(t, n)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.scroll.destroy()
                }
            }]),
            t
        }()
          , mt = function() {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, t),
                this.options = n,
                Object.assign(this, w, n),
                this.smartphone = w.smartphone,
                n.smartphone && Object.assign(this.smartphone, n.smartphone),
                this.tablet = w.tablet,
                n.tablet && Object.assign(this.tablet, n.tablet),
                this.init()
            }
            return o(t, [{
                key: "init",
                value: function() {
                    if (this.scroll = new E(this.options),
                    this.scroll.init(),
                    window.location.hash) {
                        var t = window.location.hash.slice(1, window.location.hash.length)
                          , n = document.getElementById(t);
                        n && this.scroll.scrollTo(n)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    this.scroll.update()
                }
            }, {
                key: "start",
                value: function() {
                    this.scroll.startScroll()
                }
            }, {
                key: "stop",
                value: function() {
                    this.scroll.stopScroll()
                }
            }, {
                key: "scrollTo",
                value: function(t, n) {
                    this.scroll.scrollTo(t, n)
                }
            }, {
                key: "setScroll",
                value: function(t, n) {
                    this.scroll.setScroll(t, n)
                }
            }, {
                key: "on",
                value: function(t, n) {
                    this.scroll.setEvents(t, n)
                }
            }, {
                key: "off",
                value: function(t, n) {
                    this.scroll.unsetEvents(t, n)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.scroll.destroy()
                }
            }]),
            t
        }();
        n.default = pt
    },
    3454: function(t, n, e) {
        "use strict";
        var r, i;
        t.exports = (null == (r = e.g.process) ? void 0 : r.env) && "object" === typeof (null == (i = e.g.process) ? void 0 : i.env) ? e.g.process : e(7663)
    },
    1118: function(t, n, e) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return e(8699)
        }
        ])
    },
    1210: function(t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.getDomainLocale = function(t, n, e, r) {
            return !1
        }
        ;
        ("function" === typeof n.default || "object" === typeof n.default && null !== n.default) && "undefined" === typeof n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
            value: !0
        }),
        Object.assign(n.default, n),
        t.exports = n.default)
    },
    8418: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(4941).Z;
        e(5753).default;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var i = e(2648).Z
          , o = e(7273).Z
          , a = i(e(7294))
          , s = e(6273)
          , l = e(2725)
          , c = e(3462)
          , u = e(1018)
          , d = e(7190)
          , f = e(1210)
          , h = e(8684)
          , p = "undefined" !== typeof a.default.useTransition
          , m = {};
        function v(t, n, e, r) {
            if (t && s.isLocalURL(n)) {
                Promise.resolve(t.prefetch(n, e, r)).catch((function(t) {
                    0
                }
                ));
                var i = r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
                m[n + "%" + e + (i ? "%" + i : "")] = !0
            }
        }
        var g = a.default.forwardRef((function(t, n) {
            var e, i = t.href, g = t.as, y = t.children, b = t.prefetch, w = t.passHref, x = t.replace, k = t.shallow, S = t.scroll, C = t.locale, E = t.onClick, A = t.onMouseEnter, T = t.onTouchStart, _ = t.legacyBehavior, P = void 0 === _ ? !0 !== Boolean(!1) : _, j = o(t, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            e = y,
            !P || "string" !== typeof e && "number" !== typeof e || (e = a.default.createElement("a", null, e));
            var O = !1 !== b
              , I = r(p ? a.default.useTransition() : [], 2)[1]
              , M = a.default.useContext(c.RouterContext)
              , L = a.default.useContext(u.AppRouterContext);
            L && (M = L);
            var R, z = a.default.useMemo((function() {
                var t = r(s.resolveHref(M, i, !0), 2)
                  , n = t[0]
                  , e = t[1];
                return {
                    href: n,
                    as: g ? s.resolveHref(M, g) : e || n
                }
            }
            ), [M, i, g]), D = z.href, Z = z.as, V = a.default.useRef(D), B = a.default.useRef(Z);
            P && (R = a.default.Children.only(e));
            var Y = P ? R && "object" === typeof R && R.ref : n
              , F = r(d.useIntersection({
                rootMargin: "200px"
            }), 3)
              , H = F[0]
              , N = F[1]
              , U = F[2]
              , W = a.default.useCallback((function(t) {
                B.current === Z && V.current === D || (U(),
                B.current = Z,
                V.current = D),
                H(t),
                Y && ("function" === typeof Y ? Y(t) : "object" === typeof Y && (Y.current = t))
            }
            ), [Z, Y, D, U, H]);
            a.default.useEffect((function() {
                var t = N && O && s.isLocalURL(D)
                  , n = "undefined" !== typeof C ? C : M && M.locale
                  , e = m[D + "%" + Z + (n ? "%" + n : "")];
                t && !e && v(M, D, Z, {
                    locale: n
                })
            }
            ), [Z, D, N, C, O, M]);
            var X = {
                ref: W,
                onClick: function(t) {
                    P || "function" !== typeof E || E(t),
                    P && R.props && "function" === typeof R.props.onClick && R.props.onClick(t),
                    t.defaultPrevented || function(t, n, e, r, i, o, a, l, c, u) {
                        if ("A" !== t.currentTarget.nodeName.toUpperCase() || !function(t) {
                            var n = t.currentTarget.target;
                            return n && "_self" !== n || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) && s.isLocalURL(e)) {
                            t.preventDefault();
                            var d = function() {
                                "beforePopState"in n ? n[i ? "replace" : "push"](e, r, {
                                    shallow: o,
                                    locale: l,
                                    scroll: a
                                }) : n[i ? "replace" : "push"](e, {
                                    forceOptimisticNavigation: !u
                                })
                            };
                            c ? c(d) : d()
                        }
                    }(t, M, D, Z, x, k, S, C, L ? I : void 0, O)
                },
                onMouseEnter: function(t) {
                    P || "function" !== typeof A || A(t),
                    P && R.props && "function" === typeof R.props.onMouseEnter && R.props.onMouseEnter(t),
                    !O && L || s.isLocalURL(D) && v(M, D, Z, {
                        priority: !0
                    })
                },
                onTouchStart: function(t) {
                    P || "function" !== typeof T || T(t),
                    P && R.props && "function" === typeof R.props.onTouchStart && R.props.onTouchStart(t),
                    !O && L || s.isLocalURL(D) && v(M, D, Z, {
                        priority: !0
                    })
                }
            };
            if (!P || w || "a" === R.type && !("href"in R.props)) {
                var q = "undefined" !== typeof C ? C : M && M.locale
                  , $ = M && M.isLocaleDomain && f.getDomainLocale(Z, q, M.locales, M.domainLocales);
                X.href = $ || h.addBasePath(l.addLocale(Z, q, M && M.defaultLocale))
            }
            return P ? a.default.cloneElement(R, X) : a.default.createElement("a", Object.assign({}, j, X), e)
        }
        ));
        n.default = g,
        ("function" === typeof n.default || "object" === typeof n.default && null !== n.default) && "undefined" === typeof n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
            value: !0
        }),
        Object.assign(n.default, n),
        t.exports = n.default)
    },
    7190: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(4941).Z;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.useIntersection = function(t) {
            var n = t.rootRef
              , e = t.rootMargin
              , c = t.disabled || !a
              , u = r(i.useState(!1), 2)
              , d = u[0]
              , f = u[1]
              , h = r(i.useState(null), 2)
              , p = h[0]
              , m = h[1];
            i.useEffect((function() {
                if (a) {
                    if (c || d)
                        return;
                    if (p && p.tagName) {
                        var t = function(t, n, e) {
                            var r = function(t) {
                                var n, e = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }, r = l.find((function(t) {
                                    return t.root === e.root && t.margin === e.margin
                                }
                                ));
                                if (r && (n = s.get(r)))
                                    return n;
                                var i = new Map
                                  , o = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        var n = i.get(t.target)
                                          , e = t.isIntersecting || t.intersectionRatio > 0;
                                        n && e && n(e)
                                    }
                                    ))
                                }
                                ),t);
                                return n = {
                                    id: e,
                                    observer: o,
                                    elements: i
                                },
                                l.push(e),
                                s.set(e, n),
                                n
                            }(e)
                              , i = r.id
                              , o = r.observer
                              , a = r.elements;
                            return a.set(t, n),
                            o.observe(t),
                            function() {
                                if (a.delete(t),
                                o.unobserve(t),
                                0 === a.size) {
                                    o.disconnect(),
                                    s.delete(i);
                                    var n = l.findIndex((function(t) {
                                        return t.root === i.root && t.margin === i.margin
                                    }
                                    ));
                                    n > -1 && l.splice(n, 1)
                                }
                            }
                        }(p, (function(t) {
                            return t && f(t)
                        }
                        ), {
                            root: null == n ? void 0 : n.current,
                            rootMargin: e
                        });
                        return t
                    }
                } else if (!d) {
                    var r = o.requestIdleCallback((function() {
                        return f(!0)
                    }
                    ));
                    return function() {
                        return o.cancelIdleCallback(r)
                    }
                }
            }
            ), [p, c, e, n, d]);
            var v = i.useCallback((function() {
                f(!1)
            }
            ), []);
            return [m, d, v]
        }
        ;
        var i = e(7294)
          , o = e(9311)
          , a = "function" === typeof IntersectionObserver
          , s = new Map
          , l = [];
        ("function" === typeof n.default || "object" === typeof n.default && null !== n.default) && "undefined" === typeof n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
            value: !0
        }),
        Object.assign(n.default, n),
        t.exports = n.default)
    },
    1018: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.GlobalLayoutRouterContext = n.LayoutRouterContext = n.AppRouterContext = void 0;
        var r = (0,
        e(2648).Z)(e(7294))
          , i = r.default.createContext(null);
        n.AppRouterContext = i;
        var o = r.default.createContext(null);
        n.LayoutRouterContext = o;
        var a = r.default.createContext(null);
        n.GlobalLayoutRouterContext = a
    },
    4921: function(t, n, e) {
        "use strict";
        e.d(n, {
            Z: function() {
                return s
            },
            z: function() {
                return a
            }
        });
        var r = e(5893)
          , i = e(7294)
          , o = {
            cursorExpanded: function() {
                document.querySelector(".cursor").classList.add("cursorExpanded"),
                document.querySelector(".cursorBG").classList.add("cursorBGExpanded")
            },
            cursorNormal: function() {
                document.querySelector(".cursor").classList.remove("cursorExpanded"),
                document.querySelector(".cursorBG").classList.remove("cursorBGExpanded"),
                document.querySelector(".cursorBG").style.background = ""
            },
            removeCursor: function() {
                document.querySelector(".cursor").classList.add("removeCursor"),
                document.querySelector("body").style.cursor = "default"
            },
            showCursor: function() {
                document.querySelector(".cursor").classList.remove("removeCursor"),
                document.querySelector("body").style.cursor = "none"
            },
            cursorShowPreview: function(t, n) {
                document.querySelector(".cursorBG").style.background = 'url("/Images/CursorBG/'.concat(t, '.webp") no-repeat center center /contain'),
                n.target.children[0].classList.add("fontBold")
            },
            bigCursor: function() {
                document.querySelector(".cursor").classList.add("BigCursor")
            },
            removeBigCursor: function() {
                document.querySelector(".cursor").classList.remove("BigCursor")
            },
            fontRegular: function(t) {
                t.target.children[0].classList.remove("fontBold")
            }
        }
          , a = (0,
        i.createContext)(o);
        function s(t) {
            var n = t.children;
            return (0,
            r.jsx)(a.Provider, {
                value: o,
                children: n
            })
        }
    },
    5037: function(t, n, e) {
        "use strict";
        e.d(n, {
            IN: function() {
                return y
            },
            Mj: function() {
                return h
            },
            Os: function() {
                return v
            },
            P_: function() {
                return g
            },
            Rl: function() {
                return m
            },
            UI: function() {
                return f
            },
            yw: function() {
                return p
            }
        });
        var r = e(7297)
          , i = e(4141);
        function o() {
            var t = (0,
            r.Z)(['\n  width: 100%;\n  max-height: 700px;\n  height: 82vh;\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-items: flex-start;\n  margin-bottom: 8rem;\n\n  &::before {\n    content: "";\n    position: absolute;\n    width: 600px;\n    height: 600px;\n    border-radius: 50%;\n    z-index: 2;\n    background-color: transparent;\n    border: 1px solid rgba(91, 91, 91, 0.35);\n    transform: scale(0);\n    transition: transform 1.75s 2.5s ease-in-out;\n    will-change: transform;\n  }\n\n  &.is-inview::before {\n    top: 30%;\n    right: 0%;\n    transform: scale(1) translateY(-50px);\n    animation: rollBefore 8s 4.25s ease-in-out infinite alternate;\n\n    @keyframes rollBefore {\n      0% {\n        transform: rotateZ(0deg) translateX(0px) translateY(-50px);\n      }\n      100% {\n        transform: rotateZ(360deg) translateX(-20px) translateY(-10px) scale(1.2);\n      }\n    }\n  }\n\n  @media only ', " {\n    margin-bottom: 0rem;\n  }\n\n  @media only ", " {\n    max-height: 600px;\n  }\n\n  @media only ", " {\n    max-height: 500px;\n  }\n\n  @media only ", " {\n    max-height: 85vh;\n    height: 85vh;\n  }\n"]);
            return o = function() {
                return t
            }
            ,
            t
        }
        function a() {
            var t = (0,
            r.Z)(['\n  width: 100%;\n  height: auto;\n  position: relative;\n  z-index: 4;\n  margin-bottom: 75px;\n\n  &::after {\n    content: "";\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    top: -10%;\n    right: 30%;\n    z-index: -1;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 1px solid rgba(91, 91, 91, 0.35);\n    transform: scale(0);\n    transition: transform 1.75s 2.5s ease-in-out;\n    will-change: transform;\n  }\n\n  &.is-inview::after {\n    transform: scale(1);\n    animation: rollCenterIntro 10s 4.25s ease-in-out infinite alternate;\n\n    @keyframes rollCenterIntro {\n      0% {\n        transform: rotateZ(0deg) translateX(0px) scale(1);\n      }\n      100% {\n        transform: rotateZ(360deg) translateX(50px) scale(1.1);\n      }\n    }\n  }\n']);
            return a = function() {
                return t
            }
            ,
            t
        }
        function s() {
            var t = (0,
            r.Z)(["\n  width: fit-content;\n  overflow: hidden;\n"]);
            return s = function() {
                return t
            }
            ,
            t
        }
        function l() {
            var t = (0,
            r.Z)(["\n  font-size: ", ';\n  margin: 0;\n  font-weight: 450;\n  font-variation-settings: "wght" 450;\n  transform: translateY(100%) translateZ(0);\n  will-change: transform;\n  animation: revealIntro 1.25s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n  ', ";\n\n  @keyframes revealIntro {\n    to {\n      transform: translateY(0px) translateZ(0);\n    }\n  }\n"]);
            return l = function() {
                return t
            }
            ,
            t
        }
        function c() {
            var t = (0,
            r.Z)(["\n  max-width: 75%;\n  font-size: clamp(1.25rem, 4vw, 1.5rem);\n  margin-top: 1.5rem;\n  line-height: 1.28;\n  transform: translateY(100%) translateZ(0);\n  will-change: transform;\n  animation: revealIntro 0.9s 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n\n  @media only ", " {\n    max-width: 100%;\n  }\n"]);
            return c = function() {
                return t
            }
            ,
            t
        }
        function u() {
            var t = (0,
            r.Z)(["\n  width: fit-content;\n  display: flex;\n  overflow: hidden;\n  gap: 3rem;\n  margin-top: 3rem;\n\n  & .aboutMeLink {\n    display: block;\n    will-change: transform;\n    transform: translateY(105%) translateZ(0);\n    animation: revealIntro 1.25s 1.85s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n\n    .aboutMe {\n      width: 175px;\n      height: 55px;\n      border-radius: 4px;\n      display: block;\n      background-color: black;\n      color: white;\n      font-weight: 400;\n      display: grid;\n      place-items: center;\n\n      @media only ", " {\n        width: 150px;\n        height: 55px;\n        font-size: 18px;\n      }\n    }\n  }\n\n  @media only ", " {\n    gap: 2rem;\n  }\n"]);
            return u = function() {
                return t
            }
            ,
            t
        }
        function d() {
            var t = (0,
            r.Z)(["\n  width: 175px;\n  height: 55px;\n  border-radius: 4px;\n  border: 2px solid black;\n  color: black;\n  font-weight: 400;\n  background-color: transparent;\n  cursor: pointer;\n  display: none;\n  place-items: center;\n  will-change: transform;\n  transform: translateY(105%) translateZ(0);\n  animation: revealIntro 1.25s 2.35s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n\n  @media only ", " {\n    width: 150px;\n    height: 55px;\n    display: grid;\n    font-size: 18px;\n  }\n\n  & > span {\n    font-weight: 500;\n  }\n"]);
            return d = function() {
                return t
            }
            ,
            t
        }
        var f = i.default.div.withConfig({
            componentId: "sc-85ccdc44-0"
        })(o(), (function(t) {
            return t.theme.breakpoints.lgHover
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , h = i.default.div.withConfig({
            componentId: "sc-85ccdc44-1"
        })(a())
          , p = i.default.div.withConfig({
            componentId: "sc-85ccdc44-2"
        })(s())
          , m = i.default.h1.withConfig({
            componentId: "sc-85ccdc44-3"
        })(l(), (function(t) {
            return t.large ? "clamp(2.3rem, 9vw, 5rem)" : "clamp(2rem, 5.5vw, 3rem)"
        }
        ), (function(t) {
            return t.delay && "animation: revealIntro 1.25s 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n    "
        }
        ))
          , v = i.default.p.withConfig({
            componentId: "sc-85ccdc44-4"
        })(c(), (function(t) {
            return t.theme.breakpoints.ip
        }
        ))
          , g = i.default.div.withConfig({
            componentId: "sc-85ccdc44-5"
        })(u(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , y = i.default.div.withConfig({
            componentId: "sc-85ccdc44-6"
        })(d(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
    },
    8699: function(t, n, e) {
        "use strict";
        function r(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e,
            t
        }
        function i(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {}
                  , i = Object.keys(e);
                "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                )))),
                i.forEach((function(n) {
                    r(t, n, e[n])
                }
                ))
            }
            return t
        }
        e.r(n),
        e.d(n, {
            default: function() {
                return Dt
            }
        });
        var o = e(5893)
          , a = e(2023)
          , s = e(9008)
          , l = e.n(s)
          , c = e(7294)
          , u = e(8075)
          , d = e(7297)
          , f = e(4141);
        function h() {
            var t = (0,
            d.Z)(["\n  @media screen and (hover: hover) and (pointer: fine) {\n    z-index: 1000;\n    width: 30px;\n    height: 30px;\n    position: fixed;\n    border-radius: 50%;\n    background-color: white;\n    pointer-events: none;\n    opacity: 0;\n    transition: transform 0.1s cubic-bezier(0.23, 1, 0.32, 1),\n      background-color 0.5s cubic-bezier(0.23, 1, 0.32, 1),\n      width 0.3s cubic-bezier(0.23, 1, 0.32, 1),\n      height 0.3s cubic-bezier(0.23, 1, 0.32, 1),\n      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n    transform: translate3d(200px, 0px, 0);\n    will-change: transform;\n    mix-blend-mode: difference;\n\n    &.clicked {\n      width: 20px;\n      height: 20px;\n\n      .cursorBGExpanded {\n        width: 330px;\n        height: 165px;\n      }\n    }\n\n    &.addCursor {\n      opacity: 1;\n    }\n\n    &.removeCursor {\n      opacity: 0;\n    }\n\n    &.cursorExpanded {\n      z-index: -1;\n      background-color: transparent;\n      mix-blend-mode: normal;\n    }\n\n    .cursorBG {\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      transform: translate(-45%, -45%);\n      background-color: transparent;\n      transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n    }\n\n    .cursorBGExpanded {\n      width: 350px;\n      height: 175px;\n      border-radius: 0;\n    }\n\n    &.BigCursor {\n      width: 150px;\n      height: 150px;\n    }\n  }\n"]);
            return h = function() {
                return t
            }
            ,
            t
        }
        var p = f.default.div.withConfig({
            componentId: "sc-113a235e-0"
        })(h())
          , m = function() {
            return (0,
            c.useEffect)((function() {
                document.querySelector(".cursorBoundary").addEventListener("mousemove", (function(t) {
                    var n = t.clientX
                      , e = t.clientY;
                    document.querySelector(".cursor").style.transform = "translate(-50%, -50%) translate3d(".concat(n, "px, ").concat(e, "px, 0px) ")
                }
                )),
                document.addEventListener("mousedown", (function() {
                    document.querySelector(".cursor").classList.add("clicked")
                }
                )),
                document.addEventListener("mouseup", (function() {
                    document.querySelector(".cursor").classList.remove("clicked")
                }
                )),
                document.querySelector(".cursorBoundary").addEventListener("mousemove", (function() {
                    document.querySelector(".cursor").classList.add("addCursor")
                }
                )),
                document.querySelector(".cursorBoundary").addEventListener("mouseleave", (function() {
                    document.querySelector(".cursor").classList.remove("addCursor")
                }
                ))
            }
            ), []),
            (0,
            o.jsx)(p, {
                className: "cursor",
                children: (0,
                o.jsx)("div", {
                    className: "cursorBG"
                })
            })
        }
          , v = e(8225);
        function g() {
            var t = (0,
            d.Z)(["\n  padding: 4rem;\n  text-align: center;\n\n  @media only ", " {\n    padding: 4rem 3rem;\n  }\n\n  @media only ", " {\n    padding: 3rem 2rem;\n  }\n\n  @media only ", " {\n    padding: 2rem 1rem;\n  }\n"]);
            return g = function() {
                return t
            }
            ,
            t
        }
        function y() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 4rem;\n  border-bottom: 1px solid #ddd;\n\n  @media only ", " {\n    flex-direction: column;\n    gap: 2rem;\n    padding-bottom: 2rem;\n  }\n"]);
            return y = function() {
                return t
            }
            ,
            t
        }
        function b() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  padding-top: 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #555;\n\n  & span {\n    font-size: 1.25rem;\n    font-weight: 400;\n  }\n\n  @media only ", " {\n    flex-direction: column;\n    padding-top: 2rem;\n    gap: 2rem;\n\n    & span {\n      letter-spacing: 0.25px;\n    }\n  }\n"]);
            return b = function() {
                return t
            }
            ,
            t
        }
        function w() {
            var t = (0,
            d.Z)(["\n  font-size: clamp(2rem, 5.5vw, 2.5rem);\n  font-weight: 450;\n"]);
            return w = function() {
                return t
            }
            ,
            t
        }
        function x() {
            var t = (0,
            d.Z)(["\n  width: 200px;\n  height: 65px;\n  background: black;\n  display: grid;\n  place-items: center;\n  color: white;\n  border-radius: 4px;\n\n  & span {\n    font-weight: 400;\n  }\n"]);
            return x = function() {
                return t
            }
            ,
            t
        }
        var k = f.default.footer.withConfig({
            componentId: "sc-39cc55db-0"
        })(g(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , S = f.default.div.withConfig({
            componentId: "sc-39cc55db-1"
        })(y(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , C = f.default.div.withConfig({
            componentId: "sc-39cc55db-2"
        })(b(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , E = f.default.h2.withConfig({
            componentId: "sc-39cc55db-3"
        })(w())
          , A = f.default.div.withConfig({
            componentId: "sc-39cc55db-4"
        })(x())
          , T = function() {
            return (0,
            o.jsxs)(k, {
                "data-scroll-section": !0,
                children: [(0,
                o.jsx)(v.c6, {
                    "data-scroll": !0,
                    children: (0,
                    o.jsxs)(S, {
                        children: [(0,
                        o.jsx)(E, {
                            children: "Let's Work Together"
                        }), (0,
                        o.jsx)("a", {
                            href: "mailto:98mohitkumar@gmail.com",
                            "aria-label": "email",
                            children: (0,
                            o.jsx)(A, {
                                role: "button",
                                children: (0,
                                o.jsx)("span", {
                                    children: "Write an Email"
                                })
                            })
                        })]
                    })
                }), (0,
                o.jsx)(v.c6, {
                    "data-scroll": !0,
                    children: (0,
                    o.jsxs)(C, {
                        children: [(0,
                        o.jsx)("span", {
                            children: "Turning logic into pixels"
                        }), (0,
                        o.jsxs)("span", {
                            children: ["Designed and developed by ", (0,
                            o.jsx)("span", {
                                children: "me"
                            })]
                        })]
                    })
                })]
            })
        }
          , _ = e(7582)
          , P = e(4735)
          , j = e(5411);
        var O = e(240)
          , I = e(6681)
          , M = 0;
        function L() {
            var t = M;
            return M++,
            t
        }
        var R = function(t) {
            var n = t.children
              , e = t.initial
              , r = t.isPresent
              , i = t.onExitComplete
              , o = t.custom
              , a = t.presenceAffectsLayout
              , s = (0,
            I.h)(z)
              , l = (0,
            I.h)(L)
              , u = (0,
            c.useMemo)((function() {
                return {
                    id: l,
                    initial: e,
                    isPresent: r,
                    custom: o,
                    onExitComplete: function(t) {
                        var n, e;
                        s.set(t, !0);
                        try {
                            for (var r = (0,
                            _.__values)(s.values()), o = r.next(); !o.done; o = r.next()) {
                                if (!o.value)
                                    return
                            }
                        } catch (a) {
                            n = {
                                error: a
                            }
                        } finally {
                            try {
                                o && !o.done && (e = r.return) && e.call(r)
                            } finally {
                                if (n)
                                    throw n.error
                            }
                        }
                        null === i || void 0 === i || i()
                    },
                    register: function(t) {
                        return s.set(t, !1),
                        function() {
                            return s.delete(t)
                        }
                    }
                }
            }
            ), a ? void 0 : [r]);
            return (0,
            c.useMemo)((function() {
                s.forEach((function(t, n) {
                    return s.set(n, !1)
                }
                ))
            }
            ), [r]),
            c.useEffect((function() {
                !r && !s.size && (null === i || void 0 === i || i())
            }
            ), [r]),
            c.createElement(O.O.Provider, {
                value: u
            }, n)
        };
        function z() {
            return new Map
        }
        var D = e(5364);
        function Z(t) {
            return t.key || ""
        }
        var V = function(t) {
            var n = t.children
              , e = t.custom
              , r = t.initial
              , i = void 0 === r || r
              , o = t.onExitComplete
              , a = t.exitBeforeEnter
              , s = t.presenceAffectsLayout
              , l = void 0 === s || s
              , u = (0,
            _.__read)(function() {
                var t = (0,
                c.useRef)(!1)
                  , n = (0,
                _.__read)((0,
                c.useState)(0), 2)
                  , e = n[0]
                  , r = n[1];
                (0,
                j.z)((function() {
                    return t.current = !0
                }
                ));
                var i = (0,
                c.useCallback)((function() {
                    !t.current && r(e + 1)
                }
                ), [e]);
                return [(0,
                c.useCallback)((function() {
                    return P.ZP.postRender(i)
                }
                ), [i]), e]
            }(), 1)
              , d = u[0]
              , f = (0,
            c.useContext)(D.p).forceRender;
            f && (d = f);
            var h = (0,
            c.useRef)(!0)
              , p = (0,
            c.useRef)(!0);
            (0,
            c.useEffect)((function() {
                return function() {
                    p.current = !1
                }
            }
            ), []);
            var m = function(t) {
                var n = [];
                return c.Children.forEach(t, (function(t) {
                    (0,
                    c.isValidElement)(t) && n.push(t)
                }
                )),
                n
            }(n)
              , v = (0,
            c.useRef)(m)
              , g = (0,
            c.useRef)(new Map).current
              , y = (0,
            c.useRef)(new Set).current;
            if (function(t, n) {
                t.forEach((function(t) {
                    var e = Z(t);
                    n.set(e, t)
                }
                ))
            }(m, g),
            h.current)
                return h.current = !1,
                c.createElement(c.Fragment, null, m.map((function(t) {
                    return c.createElement(R, {
                        key: Z(t),
                        isPresent: !0,
                        initial: !!i && void 0,
                        presenceAffectsLayout: l
                    }, t)
                }
                )));
            for (var b = (0,
            _.__spreadArray)([], (0,
            _.__read)(m), !1), w = v.current.map(Z), x = m.map(Z), k = w.length, S = 0; S < k; S++) {
                var C = w[S];
                -1 === x.indexOf(C) ? y.add(C) : y.delete(C)
            }
            return a && y.size && (b = []),
            y.forEach((function(t) {
                if (-1 === x.indexOf(t)) {
                    var n = g.get(t);
                    if (n) {
                        var r = w.indexOf(t);
                        b.splice(r, 0, c.createElement(R, {
                            key: Z(n),
                            isPresent: !1,
                            onExitComplete: function() {
                                g.delete(t),
                                y.delete(t);
                                var n = v.current.findIndex((function(n) {
                                    return n.key === t
                                }
                                ));
                                if (v.current.splice(n, 1),
                                !y.size) {
                                    if (v.current = m,
                                    !1 === p.current)
                                        return;
                                    d(),
                                    o && o()
                                }
                            },
                            custom: e,
                            presenceAffectsLayout: l
                        }, n))
                    }
                }
            }
            )),
            b = b.map((function(t) {
                var n = t.key;
                return y.has(n) ? t : c.createElement(R, {
                    key: Z(t),
                    isPresent: !0,
                    presenceAffectsLayout: l
                }, t)
            }
            )),
            v.current = b,
            c.createElement(c.Fragment, null, y.size ? b : b.map((function(t) {
                return (0,
                c.cloneElement)(t)
            }
            )))
        }
          , B = e(1664)
          , Y = e.n(B)
          , F = e(1163)
          , H = e(3750)
          , N = e(8357);
        function U(t) {
            return (0,
            N.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    }
                }]
            })(t)
        }
        function W(t) {
            return (0,
            N.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"
                    }
                }]
            })(t)
        }
        function X(t) {
            return (0,
            N.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }
                }, {
                    tag: "path",
                    attr: {
                        d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    }
                }]
            })(t)
        }
        var q = e(4921)
          , $ = e(5037);
        function G() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  background-color: rgba(249, 242, 237, 0.75);\n  backdrop-filter: blur(4px);\n  z-index: 2;\n\n  @media only ", " {\n    padding: 0rem 2rem;\n  }\n\n  @media only ", " {\n    padding: 0rem 1rem;\n  }\n\n  @media only ", " {\n    padding: 0rem;\n  }\n"]);
            return G = function() {
                return t
            }
            ,
            t
        }
        function K() {
            var t = (0,
            d.Z)(["\n  width: 50px;\n  height: 50px;\n  display: grid;\n  margin: 1rem;\n  place-items: center;\n\n  @media only ", " {\n    margin: 1rem;\n  }\n"]);
            return K = function() {
                return t
            }
            ,
            t
        }
        function J() {
            var t = (0,
            d.Z)(["\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border: 2px solid #000;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 2;\n\n  @media only screen and (hover: hover) and (pointer: fine) {\n    &:hover {\n      &::after {\n        opacity: 1;\n      }\n    }\n  }\n\n  &::after {\n    content: '';\n    opacity: 0;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    border: 2px solid #000;\n    border-radius: 50%;\n    transition: opacity 0.09s cubic-bezier(0.39, 0.575, 0.565, 1);\n  }\n\n  @media screen and (hover: none) and (pointer: coarse) {\n    border: 6px solid #000;\n    transform: scale(1) !important;\n\n    ", ";\n\n    @keyframes LogoClicked {\n      0% {\n        transform: scale(1);\n      }\n\n      50% {\n        transform: scale(0.7);\n      }\n      100% {\n        transform: scale(1);\n      }\n    }\n\n    &::after {\n      display: none;\n    }\n  }\n"]);
            return J = function() {
                return t
            }
            ,
            t
        }
        function Q() {
            var t = (0,
            d.Z)(["\n  width: 40px;\n  height: 40px;\n  position: relative;\n  cursor: pointer;\n  z-index: 10;\n"]);
            return Q = function() {
                return t
            }
            ,
            t
        }
        function tt() {
            var t = (0,
            d.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #000;\n  top: 30%;\n\n  @media only ", " {\n    background-color: black;\n  }\n\n  @media only ", " {\n    height: 4px !important;\n  }\n"]);
            return tt = function() {
                return t
            }
            ,
            t
        }
        function nt() {
            var t = (0,
            d.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #000;\n  bottom: 30%;\n\n  @media only ", " {\n    background-color: black;\n  }\n\n  @media only ", " {\n    height: 4px !important;\n    width: 25px;\n    transition: transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95),\n      width 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    ", ";\n  }\n"]);
            return nt = function() {
                return t
            }
            ,
            t
        }
        function et() {
            var t = (0,
            d.Z)(["\n  width: min(1200px, 100vw);\n  margin: auto;\n  height: 100vh;\n  min-height: 600px;\n  top: 0;\n  z-index: 5;\n  position: fixed;\n  background-color: rgb(249, 242, 237);\n  transform-origin: top;\n  will-change: transform;\n\n  @media only ", " {\n    margin-left: -2rem;\n  }\n\n  @media only ", " {\n    margin-left: -1rem;\n  }\n\n  @media only ", " {\n    margin-left: 0rem;\n  }\n"]);
            return et = function() {
                return t
            }
            ,
            t
        }
        function rt() {
            var t = (0,
            d.Z)(["\n  font-size: 2.25rem;\n  cursor: pointer;\n  display: block;\n  width: max-content;\n  transition: letter-spacing 0.5s cubic-bezier(0, -0.04, 0, 0.96);\n  transform-origin: bottom;\n  font-weight: 475;\n  padding-bottom: 2px;\n  margin-bottom: 2px;\n  position: relative;\n  transform: translateY(100%);\n  opacity: 0;\n  animation: reveal-link 0.75s cubic-bezier(0.77, 0, 0.175, 1)\n    ", " forwards;\n\n  &:hover {\n    letter-spacing: 1px;\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 1.5px;\n    background: black;\n    bottom: 0;\n    left: 0;\n    transform: scaleX(0);\n    transform-origin: 100% 50%;\n    transition: transform 0.3s ease-in-out;\n  }\n\n  @media screen and (hover: hover) and (pointer: fine) {\n    &:hover::after {\n      transform: scaleX(1);\n      transform-origin: 0% 50%;\n    }\n  }\n\n  @keyframes reveal-link {\n    100% {\n      transform: translateY(0%);\n      opacity: 1;\n    }\n  }\n"]);
            return rt = function() {
                return t
            }
            ,
            t
        }
        function it() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media only ", " {\n    align-items: flex-end;\n  }\n"]);
            return it = function() {
                return t
            }
            ,
            t
        }
        function ot() {
            var t = (0,
            d.Z)(["\n  width: 75%;\n  gap: 5rem;\n  display: grid;\n  grid-template-columns: 1fr;\n\n  .navAnchor {\n    width: max-content;\n  }\n\n  @media only ", " {\n    gap: 3rem;\n    place-items: center;\n  }\n"]);
            return ot = function() {
                return t
            }
            ,
            t
        }
        function at() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  place-items: center;\n\n  @media only ", " {\n    grid-template-columns: 1fr;\n    grid-template-rows: 50%;\n    max-height: 100vh;\n    gap: 5rem;\n  }\n"]);
            return at = function() {
                return t
            }
            ,
            t
        }
        function st() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n  align-content: center;\n\n  @media only screen and (max-height: 820px) and (min-width: 1024px) {\n    margin-top: 2rem;\n  }\n\n  & div:nth-child(1) {\n    border-right: 1px solid white;\n  }\n\n  & div:nth-child(3) {\n    border-top: 0.5px solid white;\n    border-right: 1px solid white;\n  }\n\n  & div:nth-child(4) {\n    border-top: 0.5px solid white;\n  }\n\n  @media only ", " {\n    grid-template-columns: repeat(4, clamp(72px, 10vw, 110px));\n    place-items: center;\n    justify-content: center;\n    align-content: flex-start;\n    gap: clamp(0.75rem, 6vw, 6vw);\n  }\n"]);
            return st = function() {
                return t
            }
            ,
            t
        }
        function lt() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 4;\n"]);
            return lt = function() {
                return t
            }
            ,
            t
        }
        function ct() {
            var t = (0,
            d.Z)(["\n  width: 100%;\n  height: 40vh;\n  max-height: 400px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  transform: scale(0%);\n  transform-origin: ", ";\n  animation: popup 1s cubic-bezier(0.77, 0, 0.175, 1)\n    ", " forwards;\n\n  @media only ", " {\n    transform-origin: center;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    inset: 0;\n    margin: auto;\n    opacity: 1;\n    z-index: 20;\n    background-color: #000;\n    transition: opacity 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n\n  a {\n    display: block;\n    position: absolute;\n    inset: 0;\n  }\n\n  @media screen and (hover: hover) and (pointer: fine) {\n    &:hover::after {\n      opacity: 0;\n      pointer-events: none;\n    }\n  }\n\n  .Box1 {\n    background: url('/Images/Box1.jpeg') no-repeat center center / cover;\n  }\n\n  .Box2 {\n    background: url('/Images/Box2.jpeg') no-repeat center center / cover;\n  }\n\n  .Box3 {\n    background: url('/Images/Box3.jpeg') no-repeat center center / cover;\n  }\n\n  .Box4 {\n    background: url('/Images/Box4.jpeg') no-repeat center center / cover;\n  }\n\n  .Box1,\n  .Box2,\n  .Box3,\n  .Box4 {\n    transition: transform 3.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    @media screen and (hover: hover) and (pointer: fine) {\n      &:hover {\n        transform: scale(1.5) translateX(-40px) rotate(10deg);\n      }\n    }\n\n    @media only ", " {\n      &:hover {\n        transform: scale(1.2) rotate(45deg);\n      }\n    }\n\n    @media screen and (hover: none) and (pointer: coarse) {\n      display: none;\n    }\n  }\n\n  @media only ", " {\n    border-radius: 50%;\n    border: none !important;\n    width: clamp(70px, 10vw, 110px);\n    height: clamp(70px, 10vw, 110px);\n\n    & a {\n      width: 100%;\n      height: 100%;\n      position: static;\n      display: grid;\n      place-items: center;\n    }\n  }\n\n  @keyframes popup {\n    100% {\n      transform: scale(100%);\n    }\n  }\n"]);
            return ct = function() {
                return t
            }
            ,
            t
        }
        function ut() {
            var t = (0,
            d.Z)(["\n  width: max-content;\n  position: absolute;\n  z-index: 25;\n  bottom: 40px;\n  left: 50px;\n\n  & svg {\n    color: white;\n  }\n\n  @media only ", " {\n    position: static;\n    display: grid;\n    place-items: center;\n\n    & svg {\n      width: clamp(1.5rem, 4vw, 3rem);\n      height: clamp(1.5rem, 4vw, 3rem);\n    }\n  }\n"]);
            return ut = function() {
                return t
            }
            ,
            t
        }
        function dt() {
            var t = (0,
            d.Z)(["\n  font-size: 2rem;\n  color: white;\n  font-weight: 400;\n  margin-top: 0.75rem;\n  transition: letter-spacing 0.5s cubic-bezier(0, -0.04, 0, 0.96);\n\n  &:hover {\n    letter-spacing: 1.75px;\n  }\n\n  @media only ", " {\n    display: none;\n  }\n"]);
            return dt = function() {
                return t
            }
            ,
            t
        }
        var ft = f.default.nav.withConfig({
            componentId: "sc-fe9eeb0e-0"
        })(G(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , ht = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-1"
        })(K(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , pt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-2"
        })(J(), (function(t) {
            return t.animatelogo ? "animation: LogoClicked 400ms cubic-bezier(0.39, 0.575, 0.565, 1) forwards;" : null
        }
        ))
          , mt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-3"
        })(Q())
          , vt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-4"
        })(tt(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.lgHover
        }
        ))
          , gt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-5"
        })(nt(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.lgHover
        }
        ), (function(t) {
            return t.isOpen ? "width: 40px; transform: translateX(0px) rotate(45deg) !important" : "transform: translateX(15px) !important;"
        }
        ))
          , yt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-6"
        })(et(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , bt = f.default.span.withConfig({
            componentId: "sc-fe9eeb0e-7"
        })(rt(), (function(t) {
            var n = t.delay;
            return "".concat(n, "s")
        }
        ))
          , wt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-8"
        })(it(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , xt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-9"
        })(ot(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , kt = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-10"
        })(at(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , St = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-11"
        })(st(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , Ct = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-12"
        })(lt())
          , Et = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-13"
        })(ct(), (function(t) {
            var n = t.origin;
            return "".concat(n)
        }
        ), (function(t) {
            var n = t.delay;
            return "".concat(n, "s")
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , At = f.default.div.withConfig({
            componentId: "sc-fe9eeb0e-14"
        })(ut(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , Tt = f.default.h2.withConfig({
            componentId: "sc-fe9eeb0e-15"
        })(dt(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , _t = function() {
            var t = (0,
            c.useState)(!1)
              , n = t[0]
              , e = t[1]
              , r = (0,
            c.useState)(!1)
              , i = r[0]
              , s = r[1]
              , l = (0,
            F.useRouter)()
              , d = (0,
            u.lh)().scroll
              , f = function() {
                e(!1)
            };
            (0,
            c.useEffect)((function() {
                d && "/#gotoprojects" == l.asPath && d.scrollTo("#projects", {
                    offset: -110
                })
            }
            ), [l, d]),
            (0,
            c.useEffect)((function() {
                d && (n ? d.stop() : d.start())
            }
            ), [n, d]);
            var h = (0,
            c.useContext)(q.z)
              , p = h.removeCursor
              , m = h.showCursor;
            (0,
            c.useLayoutEffect)((function() {
                var t = document.querySelector("body");
                "default" == t.style.cursor && (t.style.cursor = "none")
            }
            ), []);
            var v = {
                hoverStart: {
                    width: 25,
                    x: 15,
                    height: 4
                },
                hoverStop: {
                    width: 40,
                    height: 4
                },
                clickStart: n && {
                    height: 4,
                    rotate: 45,
                    bottom: "44%",
                    transition: {
                        duration: .4
                    }
                },
                clickStop: {
                    height: 2,
                    rotate: 0,
                    bottom: "30%",
                    transition: {
                        duration: .4
                    }
                }
            };
            return (0,
            o.jsxs)(ft, {
                id: "top",
                as: a.E.div,
                initial: {
                    y: "-50",
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    type: "tween",
                    duration: 1,
                    ease: [.77, .2, .05, 1]
                },
                children: [(0,
                o.jsx)(ht, {
                    onClick: function() {
                        d.scrollTo("top")
                    },
                    children: (0,
                    o.jsx)(pt, {
                        onMouseEnter: p,
                        onMouseLeave: m,
                        as: a.E.div,
                        whileHover: {
                            border: "6px solid #000",
                            scale: 1.15
                        },
                        whileTap: {
                            scale: .7,
                            transition: {
                                duration: .4
                            }
                        },
                        onClick: function() {
                            s(!0),
                            setTimeout((function() {
                                s(!1)
                            }
                            ), 450)
                        },
                        animatelogo: i ? 1 : 0,
                        role: "button"
                    })
                }), (0,
                o.jsx)(ht, {
                    children: (0,
                    o.jsxs)(mt, {
                        onMouseEnter: p,
                        onMouseLeave: m,
                        as: a.E.div,
                        initial: "clickStop",
                        whileHover: n ? "hoverStop" : "hoverStart",
                        animate: n ? "clickStart" : "clickStop",
                        onClick: function() {
                            e(!n)
                        },
                        role: "button",
                        children: [(0,
                        o.jsx)(vt, {
                            as: a.E.div,
                            variants: {
                                hoverStart: {
                                    height: 4
                                },
                                hoverStop: {
                                    height: 4
                                },
                                clickStart: {
                                    height: 4,
                                    rotate: -45,
                                    top: "45%",
                                    transition: {
                                        duration: .4
                                    }
                                },
                                clickStop: {
                                    height: 2,
                                    rotate: 0,
                                    top: "30%",
                                    transition: {
                                        duration: .4
                                    }
                                }
                            },
                            isOpen: n
                        }), (0,
                        o.jsx)(gt, {
                            as: a.E.div,
                            variants: v,
                            isOpen: n
                        })]
                    })
                }), (0,
                o.jsx)(V, {
                    children: n && (0,
                    o.jsx)(yt, {
                        onMouseEnter: p,
                        onMouseLeave: m,
                        as: a.E.div,
                        initial: {
                            translateY: "-100vh"
                        },
                        animate: {
                            translateY: 0,
                            transition: {
                                type: "tween",
                                duration: 1,
                                ease: [.77, 0, .175, 1]
                            }
                        },
                        exit: {
                            translateY: "-100vh",
                            transition: {
                                type: "tween",
                                duration: 1.2,
                                ease: [.77, 0, .175, 1]
                            }
                        },
                        children: (0,
                        o.jsxs)(kt, {
                            children: [(0,
                            o.jsx)(wt, {
                                children: (0,
                                o.jsxs)(xt, {
                                    children: [(0,
                                    o.jsx)(Y(), {
                                        href: "/",
                                        passHref: !0,
                                        children: (0,
                                        o.jsx)("a", {
                                            className: "navAnchor",
                                            children: (0,
                                            o.jsx)($.yw, {
                                                children: (0,
                                                o.jsx)(bt, {
                                                    onClick: f,
                                                    delay: .25,
                                                    children: "Home"
                                                })
                                            })
                                        })
                                    }), (0,
                                    o.jsx)("a", {
                                        className: "navAnchor",
                                        children: (0,
                                        o.jsx)($.yw, {
                                            children: (0,
                                            o.jsx)(bt, {
                                                onClick: function() {
                                                    "/" == l.asPath ? window.innerHeight > 950 ? d.scrollTo("#projects", {
                                                        offset: -140
                                                    }) : d.scrollTo("#projects", {
                                                        offset: -110
                                                    }) : "/about" == l.asPath ? window.innerHeight > 800 ? d.scrollTo("#projects", {
                                                        offset: -110
                                                    }) : d.scrollTo("#projects", {
                                                        offset: -80
                                                    }) : l.push("/#gotoprojects"),
                                                    e(!1)
                                                },
                                                delay: .5,
                                                children: "Projects"
                                            })
                                        })
                                    }), (0,
                                    o.jsx)(Y(), {
                                        href: "/about",
                                        passHref: !0,
                                        children: (0,
                                        o.jsx)("a", {
                                            className: "navAnchor",
                                            children: (0,
                                            o.jsx)($.yw, {
                                                children: (0,
                                                o.jsx)(bt, {
                                                    onClick: f,
                                                    delay: .75,
                                                    children: "About Me"
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), (0,
                            o.jsxs)(St, {
                                children: [(0,
                                o.jsx)(Et, {
                                    delay: 1,
                                    origin: "bottom right",
                                    children: (0,
                                    o.jsxs)("a", {
                                        href: "https://github.com/98mohitkumar",
                                        target: "_blank",
                                        "aria-label": "github",
                                        rel: "noreferrer",
                                        children: [(0,
                                        o.jsx)(Ct, {
                                            className: "Box1"
                                        }), (0,
                                        o.jsxs)(At, {
                                            children: [(0,
                                            o.jsx)(H.rFR, {
                                                size: "2rem"
                                            }), (0,
                                            o.jsx)(Tt, {
                                                children: "Github"
                                            })]
                                        })]
                                    })
                                }), (0,
                                o.jsx)(Et, {
                                    delay: 1.2,
                                    origin: "bottom left",
                                    children: (0,
                                    o.jsxs)("a", {
                                        href: "mailto:98mohitkumar@gmail.com",
                                        "aria-label": "email",
                                        children: [(0,
                                        o.jsx)(Ct, {
                                            className: "Box2"
                                        }), (0,
                                        o.jsxs)(At, {
                                            children: [(0,
                                            o.jsx)(X, {
                                                size: "2rem"
                                            }), (0,
                                            o.jsx)(Tt, {
                                                children: "Email"
                                            })]
                                        })]
                                    })
                                }), (0,
                                o.jsx)(Et, {
                                    delay: 1.4,
                                    origin: "top right",
                                    children: (0,
                                    o.jsxs)("a", {
                                        href: "https://www.linkedin.com/in/98mohitkumar",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [(0,
                                        o.jsx)(Ct, {
                                            className: "Box3"
                                        }), (0,
                                        o.jsxs)(At, {
                                            children: [(0,
                                            o.jsx)(U, {
                                                size: "2rem"
                                            }), (0,
                                            o.jsx)(Tt, {
                                                children: "LinkedIn"
                                            })]
                                        })]
                                    })
                                }), (0,
                                o.jsx)(Et, {
                                    delay: 1.6,
                                    origin: "top left",
                                    children: (0,
                                    o.jsxs)("a", {
                                        href: "https://unsplash.com/98mohitkumar",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [(0,
                                        o.jsx)(Ct, {
                                            className: "Box4"
                                        }), (0,
                                        o.jsxs)(At, {
                                            children: [(0,
                                            o.jsx)(W, {
                                                size: "2rem"
                                            }), (0,
                                            o.jsx)(Tt, {
                                                children: "Unsplash"
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                })]
            })
        };
        function Pt() {
            var t = (0,
            d.Z)(["\n  max-width: 1700px;\n  height: auto;\n  margin: auto;\n"]);
            return Pt = function() {
                return t
            }
            ,
            t
        }
        var jt = f.default.div.withConfig({
            componentId: "sc-190c1fb6-0"
        })(Pt())
          , Ot = function(t) {
            var n = t.children
              , e = t.scrollRef;
            return (0,
            o.jsx)(jt, {
                "data-load-container": "",
                className: "cursorBoundary",
                children: (0,
                o.jsx)(jt, {
                    "data-scroll-container": !0,
                    ref: e,
                    children: (0,
                    o.jsxs)(v.im, {
                        children: [(0,
                        o.jsx)(_t, {}), n, (0,
                        o.jsx)(T, {})]
                    })
                })
            })
        }
          , It = {
            fonts: {
                main: "Inter, serif"
            },
            colors: {
                background: "rgb(249, 242, 237)"
            },
            breakpoints: {
                xs: "screen and (max-width: 451px)",
                sm: "screen and (max-width: 641px)",
                md: "screen and (max-width: 769px)",
                mdHover: "screen and (max-width: 769px) and (hover: none) and (pointer: coarse)",
                ip: "screen and (max-width: 821px)",
                ipHover: "screen and (max-width: 821px) and (hover: none) and (pointer: coarse)",
                lg: "screen and (max-width: 1025px)",
                lgHover: "screen and (max-width: 1025px) and (hover: none) and (pointer: coarse)",
                xl: "screen and (max-width: 1281px)",
                hover: "screen and (hover: hover) and (pointer: fine)",
                hoverNone: "screen and (hover: none) and (pointer: coarse)"
            }
        }
          , Mt = e(7704);
        function Lt() {
            var t = (0,
            d.Z)(["\n  ", ";\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  ::-webkit-scrollbar {\n  width: 8px;\n  }\n\n  ::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0);\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: #909090;\n    border-radius: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: #606060;\n  }\n\n  ::-moz-selection {\n    color: black;\n    background: #ccc;\n  }\n\n  ::selection {\n    color: black;\n    background: #ccc;\n  }\n\n  html {\n      scroll-behavior: smooth !important;\n      -webkit-tap-highlight-color: transparent; \n  }\n  \n  body {\n      font-family: ", ";\n      font-size: 1.25rem;\n      background: ", ";\n      color: #000;\n  \n      @media screen and (hover: hover) and (pointer: fine) {\n        cursor: none;\n      }\n  }\n  \n  h1,h2,h3,h4,h5,h6,button {\n      font-family: ", ';\n  }\n  \n  p{\n      font-size: 1rem;\n  }\n  \n  a {\n      text-decoration: none;\n      color: black;\n  }\n  \n  li{\n      list-style: none;\n  }\n  \n  /*! locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */\n    html.has-scroll-smooth {\n    overflow: hidden;  \n    }\n  \n    html.has-scroll-dragging {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; \n    }\n  \n    .has-scroll-smooth body {\n    overflow: hidden; \n    }\n  \n    [data-load-container] {\n  \tposition: fixed;\n  \ttop: 0;\n  \tright: 0;\n  \tbottom: 0;\n  \tleft: 0;\n  \twidth: 100vw;\n  }\n\n  .has-scroll-smooth [data-scroll-container] {\n  min-height: 100vh; \n  }\n\n  [data-scroll-direction="horizontal"] [data-scroll-container] {\n  height: 100vh;\n  display: inline-block;\n  white-space: nowrap; \n  }\n\n  [data-scroll-direction="horizontal"] [data-scroll-section] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 100%; \n  }\n\n  .c-scrollbar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 11px;\n  height: 100%;\n  transform-origin: center right;\n  transition: transform 0.3s, opacity 0.3s;\n  opacity: 0; \n  }\n\n  .c-scrollbar:hover {\n    transform: scaleX(1.45); \n  }\n\n  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {\n    opacity: 1; \n  }\n\n  [data-scroll-direction="horizontal"] .c-scrollbar {\n    width: 100%;\n    height: 10px;\n    top: auto;\n    bottom: 0;\n    transform: scaleY(1); \n  }\n\n  [data-scroll-direction="horizontal"] .c-scrollbar:hover {\n      transform: scaleY(1.3); \n  }\n\n  .c-scrollbar_thumb {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 4px;\n  border-radius: 4px;\n  margin: 2px;\n  cursor: -webkit-grab;\n  cursor: grab; \n  }\n  \n  .has-scroll-dragging .c-scrollbar_thumb {\n    cursor: -webkit-grabbing;\n    cursor: grabbing; \n  }\n\n  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {\n    right: auto;\n    bottom: 0; \n  }\n']);
            return Lt = function() {
                return t
            }
            ,
            t
        }
        var Rt = (0,
        f.createGlobalStyle)(Lt(), Mt.Fv, (function(t) {
            return t.theme.fonts.main
        }
        ), (function(t) {
            return t.theme.colors.background
        }
        ), (function(t) {
            return t.theme.fonts.main
        }
        ))
          , zt = function(t) {
            var n = t.children;
            return (0,
            o.jsxs)(f.ThemeProvider, {
                theme: It,
                children: [(0,
                o.jsx)(Rt, {}), n]
            })
        };
        var Dt = function(t) {
            var n = t.Component
              , e = t.pageProps
              , r = t.router
              , s = (0,
            c.useRef)(null)
              , d = (0,
            c.useState)(!0)
              , f = d[0]
              , h = d[1];
            return (0,
            c.useEffect)((function() {
                h(!0),
                setTimeout((function() {
                    h(!1)
                }
                ), 1750)
            }
            ), [r.asPath]),
            (0,
            o.jsxs)(c.Fragment, {
                children: [(0,
                o.jsx)(l(), {
                    children: (0,
                    o.jsx)("title", {
                        children: "Mohit Kumar"
                    })
                }), (0,
                o.jsx)(q.Z, {
                    children: (0,
                    o.jsx)(zt, {
                        children: f ? (0,
                        o.jsx)(v.aN, {
                            children: (0,
                            o.jsx)("div", {
                                className: "loadingAnimation"
                            })
                        }) : (0,
                        o.jsxs)(o.Fragment, {
                            children: [(0,
                            o.jsx)(m, {}), (0,
                            o.jsx)(a.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 1
                                },
                                children: (0,
                                o.jsx)(u.a5, {
                                    options: {
                                        smooth: !0,
                                        touchMultiplier: 3,
                                        smartphone: {
                                            smooth: !0
                                        },
                                        tablet: {
                                            smooth: !0
                                        }
                                    },
                                    watch: [r.asPath],
                                    scrollRef: s,
                                    children: (0,
                                    o.jsx)(Ot, {
                                        scrollRef: s,
                                        children: (0,
                                        o.jsx)(n, i({}, e))
                                    })
                                })
                            })]
                        })
                    })
                })]
            })
        }
    },
    8225: function(t, n, e) {
        "use strict";
        e.d(n, {
            $O: function() {
                return qt
            },
            $o: function() {
                return on
            },
            AX: function() {
                return rn
            },
            Ag: function() {
                return xn
            },
            As: function() {
                return Rt
            },
            Be: function() {
                return On
            },
            CV: function() {
                return tn
            },
            D$: function() {
                return Yt
            },
            DP: function() {
                return un
            },
            E2: function() {
                return qn
            },
            Eg: function() {
                return Pn
            },
            G: function() {
                return re
            },
            Gm: function() {
                return Jn
            },
            Go: function() {
                return En
            },
            I2: function() {
                return Sn
            },
            IB: function() {
                return Ut
            },
            IH: function() {
                return gn
            },
            Il: function() {
                return Dt
            },
            In: function() {
                return cn
            },
            It: function() {
                return te
            },
            Jy: function() {
                return Nt
            },
            KE: function() {
                return Qt
            },
            LR: function() {
                return Kt
            },
            LZ: function() {
                return zn
            },
            Lh: function() {
                return Wn
            },
            M7: function() {
                return Gn
            },
            MA: function() {
                return Vn
            },
            Mu: function() {
                return Lt
            },
            NU: function() {
                return $n
            },
            OC: function() {
                return $t
            },
            OU: function() {
                return Zt
            },
            Oj: function() {
                return Kn
            },
            Ox: function() {
                return Un
            },
            P$: function() {
                return jn
            },
            Ru: function() {
                return bn
            },
            Sb: function() {
                return hn
            },
            Tr: function() {
                return In
            },
            U3: function() {
                return Bt
            },
            W6: function() {
                return Fn
            },
            Wf: function() {
                return Mn
            },
            X6: function() {
                return An
            },
            XU: function() {
                return Dn
            },
            XZ: function() {
                return wn
            },
            Xg: function() {
                return Hn
            },
            Xw: function() {
                return pn
            },
            ZE: function() {
                return sn
            },
            ZO: function() {
                return _n
            },
            ZV: function() {
                return yn
            },
            Zg: function() {
                return kn
            },
            _M: function() {
                return Zn
            },
            _U: function() {
                return Cn
            },
            _w: function() {
                return ee
            },
            aN: function() {
                return Mt
            },
            aV: function() {
                return mn
            },
            bZ: function() {
                return Ft
            },
            bt: function() {
                return dn
            },
            c6: function() {
                return Ln
            },
            dI: function() {
                return Vt
            },
            dT: function() {
                return Xt
            },
            fg: function() {
                return fn
            },
            gM: function() {
                return Bn
            },
            h0: function() {
                return ie
            },
            hQ: function() {
                return an
            },
            iK: function() {
                return vn
            },
            im: function() {
                return zt
            },
            ir: function() {
                return Ht
            },
            iz: function() {
                return Rn
            },
            ld: function() {
                return nn
            },
            li: function() {
                return Gt
            },
            m2: function() {
                return Yn
            },
            nA: function() {
                return Wt
            },
            ob: function() {
                return oe
            },
            qL: function() {
                return Tn
            },
            qZ: function() {
                return Jt
            },
            qr: function() {
                return en
            },
            qv: function() {
                return Xn
            },
            t_: function() {
                return Nn
            },
            ur: function() {
                return ln
            },
            x$: function() {
                return Qn
            },
            y$: function() {
                return ne
            }
        });
        var r = e(7297)
          , i = e(4141);
        function o() {
            var t = (0,
            r.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  inset: 0;\n  background: rgb(249, 242, 237);\n  display: grid;\n  place-items: center;\n\n  & .loadingAnimation {\n    width: 100vw;\n    height: 100vh;\n    background: black;\n    transform: scaleY(0) translateZ(0);\n    animation: loader 1.5s 0.25s cubic-bezier(0.85, 0.01, 0.4, 1) forwards;\n\n    @keyframes loader {\n      0% {\n        transform-origin: bottom;\n        transform: scaleY(0) translateZ(0);\n      }\n\n      40% {\n        transform-origin: bottom;\n        transform: scaleY(1) translateZ(0);\n      }\n\n      60% {\n        transform-origin: top;\n        transform: scaleY(1) translateZ(0);\n      }\n\n      100% {\n        transform-origin: top;\n        transform: scaleY(0) translateZ(0);\n      }\n    }\n  }\n"]);
            return o = function() {
                return t
            }
            ,
            t
        }
        function a() {
            var t = (0,
            r.Z)(["\n  width: 30px;\n  height: 60px;\n  display: grid;\n  place-items: center;\n  background: transparent;\n  position: absolute;\n  z-index: 5;\n  align-self: flex-end;\n\n  @media only ", " {\n    display: none;\n  }\n"]);
            return a = function() {
                return t
            }
            ,
            t
        }
        function s() {
            var t = (0,
            r.Z)(['\n  width: 100%;\n  height: 85%;\n  border: 2px solid black;\n  border-radius: 20px;\n  overflow: hidden;\n  position: absolute;\n\n  &::after {\n    content: "";\n    width: 4px;\n    height: 2px;\n    inset: 0;\n    margin: auto;\n    border-radius: 10px;\n    background: black;\n    position: absolute;\n    animation: mouseScroll 1.25s ease-in-out infinite;\n\n    @keyframes mouseScroll {\n      0% {\n        transform: translateY(-20px);\n        height: 2px;\n        opacity: 0;\n      }\n\n      60% {\n        opacity: 1;\n        transform: translateY(0px);\n        height: 15px;\n      }\n\n      100% {\n        height: 0px;\n        transform: translateY(60px);\n      }\n    }\n  }\n']);
            return s = function() {
                return t
            }
            ,
            t
        }
        function l() {
            var t = (0,
            r.Z)(["\n  max-width: 1200px;\n  min-height: 100vh;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);
            return l = function() {
                return t
            }
            ,
            t
        }
        function c() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: auto;\n"]);
            return c = function() {
                return t
            }
            ,
            t
        }
        function u() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  min-height: 400px;\n  padding: 0rem 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", ";\n\n  @media only ", " {\n    padding: 0rem 3rem;\n  }\n\n  @media only ", " {\n    ", ";\n  }\n\n  @media only ", " {\n    padding: 0rem 2rem;\n  }\n  @media only ", " {\n    padding: 0rem 1rem;\n    ", ";\n  }\n"]);
            return u = function() {
                return t
            }
            ,
            t
        }
        function d() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: 1.261176 / 1;\n  position: relative;\n\n  @media only ", " {\n    position: static;\n    display: grid;\n    align-items: center;\n    justify-items: flex-start;\n    grid-template-columns: 1fr 1fr;\n    aspect-ratio: 0.55 / 1;\n\n    & .projectTitle {\n      position: static;\n      order: 2;\n      transform: translateX(0.001px) !important;\n    }\n  }\n\n  a {\n    position: absolute;\n    z-index: 4;\n    top: 40%;\n    margin-top: 8rem;\n    transform: translateY(50px) translateZ(0);\n    opacity: 0;\n    transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;\n\n    @media only ", " {\n      top: 45%;\n    }\n\n    @media only ", " {\n      position: static;\n      justify-self: flex-end;\n      margin-top: 42.5px;\n      order: 3;\n      grid-column: 2 / 3;\n    }\n  }\n\n  a.is-inview {\n    opacity: 1;\n    transform: translateY(-20px) translateZ(0);\n  }\n"]);
            return d = function() {
                return t
            }
            ,
            t
        }
        function f() {
            var t = (0,
            r.Z)(["\n  position: absolute;\n  width: max-content;\n  opacity: 0;\n  overflow: hidden;\n  z-index: 4;\n  top: 30%;\n  ", ";\n\n  @media only ", " {\n    top: 25%;\n    ", ";\n  }\n\n  &.is-inview {\n    animation: HeroCaptionHeavenly 0.75s forwards ease-in-out;\n\n    @keyframes HeroCaptionHeavenly {\n      to {\n        opacity: 1;\n      }\n    }\n  }\n"]);
            return f = function() {
                return t
            }
            ,
            t
        }
        function h() {
            var t = (0,
            r.Z)(["\n  width: 50%;\n  aspect-ratio: 0.68717948 / 1;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  top: 8%;\n\n  @media only ", " {\n    width: 100%;\n    grid-column: 1 / span 2;\n    position: static;\n  }\n"]);
            return h = function() {
                return t
            }
            ,
            t
        }
        function p() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: 0.645783 / 1;\n  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n  will-change: clip-path;\n  transition: clip-path 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &.is-inview {\n    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);\n  }\n"]);
            return p = function() {
                return t
            }
            ,
            t
        }
        function m() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  transform: scale(1.4) translateZ(0);\n  will-change: transform;\n  transition: transform 1.6s 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &.is-inview {\n    transform: scale(1) translateZ(0);\n  }\n"]);
            return m = function() {
                return t
            }
            ,
            t
        }
        function v() {
            var t = (0,
            r.Z)(["\n  width: 100px;\n  height: 100px;\n  display: grid;\n  place-items: center;\n  border: 2px solid black;\n  border-radius: 50%;\n  cursor: pointer;\n  transform: scale(1) translateZ(0);\n  transition: background-color 0.2s cubic-bezier(0.39, 0.575, 0.565, 1),\n    transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: elementsReveal 1s forwards;\n\n  @media only ", " {\n    width: 85px;\n    height: 85px;\n    background-color: black;\n    color: white;\n  }\n\n  @media only ", ' {\n    width: 75px;\n    height: 75px;\n  }\n\n  @keyframes elementsReveal {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 2px solid black;\n    border-radius: 50%;\n    transform: scale(1) translateZ(0);\n    opacity: 0;\n    transition: transform 0.75s cubic-bezier(0.39, 0.575, 0.565, 1),\n      opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: black;\n    border-radius: 50%;\n    transform: rotateZ(0deg) translateX(74px);\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  @media only ', " {\n    &:hover {\n      background-color: black;\n      transform: scale(0.95) translateZ(0);\n      color: rgb(249, 242, 237);\n    }\n\n    &:hover::before {\n      opacity: 1;\n      transform: scale(1.5);\n    }\n\n    &:hover::after {\n      opacity: 1;\n      animation: orbit 4s 0.75s linear infinite;\n\n      @keyframes orbit {\n        to {\n          transform: rotateZ(360deg) translateX(74px);\n        }\n      }\n    }\n  }\n\n  .exploreText {\n    font-size: 1.1rem;\n    font-weight: 450;\n    transition: color 0.325s cubic-bezier(0.39, 0.575, 0.565, 1);\n\n    @media only ", " {\n      font-size: 1rem;\n    }\n\n    @media only ", " {\n      font-size: 0.85rem;\n    }\n  }\n"]);
            return v = function() {
                return t
            }
            ,
            t
        }
        function g() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: 1.307317 / 1;\n  position: relative;\n\n  a {\n    position: absolute;\n    z-index: 4;\n    top: 55%;\n    right: 26%;\n    transform: translateY(50px) translateZ(0);\n    opacity: 0;\n    transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;\n  }\n\n  @media only ", " {\n    position: static;\n    display: grid;\n    align-items: center;\n    justify-items: flex-start;\n    grid-template-columns: 1fr 1fr;\n    aspect-ratio: 0.55 / 1;\n\n    & .projectTitle {\n      position: static;\n      transform: translateX(0.001px) !important;\n    }\n\n    a {\n      @media only ", " {\n        top: 35%;\n      }\n\n      @media only ", " {\n        position: static;\n        justify-self: flex-end;\n        margin-top: 42.5px;\n      }\n    }\n  }\n\n  a.is-inview {\n    opacity: 1;\n    transform: translateY(-20px) translateZ(0);\n  }\n"]);
            return g = function() {
                return t
            }
            ,
            t
        }
        function y() {
            var t = (0,
            r.Z)(["\n  width: 50%;\n  aspect-ratio: 0.6871794 / 1;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  bottom: 5%;\n  z-index: 2;\n\n  @media only ", " {\n    width: 100%;\n    grid-column: 1 / span 2;\n    position: static;\n  }\n"]);
            return y = function() {
                return t
            }
            ,
            t
        }
        function b() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: 0.67 / 1;\n  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n  will-change: clip-path;\n  transition: clip-path 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &.is-inview {\n    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);\n  }\n"]);
            return b = function() {
                return t
            }
            ,
            t
        }
        function w() {
            var t = (0,
            r.Z)(['\n  width: 100%;\n  height: 100%;\n  background: Url("/Images/Cinephiled/Cinephiled_Banner.webp") no-repeat center center / cover;\n  transform: scale(1.4) translateZ(0);\n  transition: transform 1.6s 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &.is-inview {\n    transform: scale(1) translateZ(0);\n  }\n']);
            return w = function() {
                return t
            }
            ,
            t
        }
        function x() {
            var t = (0,
            r.Z)(["\n  width: 100px;\n  height: 100px;\n  display: grid;\n  place-items: center;\n  border: 2px solid black;\n  border-radius: 50%;\n  cursor: pointer;\n  transform: scale(1) translateZ(0);\n  transition: background-color 0.325s cubic-bezier(0.39, 0.575, 0.565, 1),\n    transform 0.325s cubic-bezier(0.39, 0.575, 0.565, 1);\n\n  @media only ", " {\n    width: 85px;\n    height: 85px;\n    background-color: black;\n    color: white;\n  }\n\n  @media only ", ' {\n    width: 75px;\n    height: 75px;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 2px solid black;\n    border-radius: 50%;\n    transform: scale(1) translateZ(0);\n    opacity: 0;\n  }\n\n  @media only ', " {\n    &:hover {\n      background-color: black;\n      color: rgb(249, 242, 237);\n      transform: scale(0.95) translateZ(0);\n    }\n\n    &:hover::before {\n      opacity: 1;\n      animation: ripple 1.75s 0.2s linear infinite;\n\n      @keyframes ripple {\n        to {\n          transform: scale(1.5) translateZ(0);\n          opacity: 0;\n        }\n      }\n    }\n  }\n  .exploreText {\n    font-size: 1.1rem;\n    font-weight: 450;\n    transition: color 0.325s cubic-bezier(0.39, 0.575, 0.565, 1);\n\n    @media only ", " {\n      font-size: 1rem;\n    }\n\n    @media only ", " {\n      font-size: 0.85rem;\n    }\n  }\n"]);
            return x = function() {
                return t
            }
            ,
            t
        }
        function k() {
            var t = (0,
            r.Z)(["\n  position: absolute;\n  width: max-content;\n  margin-bottom: calc(4.5rem - 4.75vh);\n  z-index: 5;\n  opacity: 0;\n  overflow: hidden;\n  animation: HeroCaptionHeavenly 0.75s forwards ease-in-out;\n\n  @media only ", " {\n    margin: 0;\n    margin-top: 4rem;\n  }\n\n  @media only ", " {\n    margin-top: 1.5rem;\n  }\n\n  @keyframes HeroCaptionHeavenly {\n    to {\n      opacity: 1;\n    }\n  }\n"]);
            return k = function() {
                return t
            }
            ,
            t
        }
        function S() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(2.25rem, 7.5vw, 3.5rem);\n  font-weight: 400;\n  margin: 0;\n\n  & br {\n    display: none;\n\n    @media only ", " {\n      display: block;\n    }\n\n    @media only ", " {\n      display: none;\n    }\n\n    @media only screen and (max-width: 400px) {\n      display: block;\n\n      & ~ span.Span-9 {\n        margin-left: 5rem;\n      }\n    }\n  }\n\n  & > span {\n    display: inline-block;\n  }\n\n  &.captionAnimation {\n    font-size: clamp(3rem, 8.25vw, 4rem);\n    font-weight: 550;\n\n    @media only ", " {\n      .xsBlock {\n        display: block;\n        margin-left: 6.5rem;\n      }\n    }\n  }\n\n  &.captionAnimation,\n  &.is-inview {\n    & span {\n      transform: translateY(80px) translateZ(0);\n\n      @media only ", " {\n        transform: translateY(110px) translateZ(0);\n      }\n    }\n\n    .xsBlock {\n      transform: none;\n\n      & span {\n        display: inline-block;\n      }\n    }\n\n    .Span-1 {\n      animation: Span1 0.25s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span1 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-2 {\n      animation: Span2 0.3s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span2 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-3 {\n      animation: Span3 0.35s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span3 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-4 {\n      animation: Span4 0.4s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span4 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-5 {\n      animation: Span5 0.45s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span5 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-6 {\n      animation: Span6 0.5s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span6 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-7 {\n      animation: Span7 0.55s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span7 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-8 {\n      animation: Span8 0.6s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span8 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-9 {\n      animation: Span9 0.65s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span9 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-10 {\n      animation: Span10 0.7s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span10 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-11 {\n      animation: Span11 0.75s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span11 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-12 {\n      animation: Span12 0.8s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span12 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-13 {\n      animation: Span13 0.85s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span13 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n\n    .Span-14 {\n      animation: Span14 0.9s 0.25s forwards cubic-bezier(1, 0, 0, 1);\n\n      @keyframes Span14 {\n        to {\n          transform: translateY(0px) translateZ(0);\n        }\n      }\n    }\n  }\n"]);
            return S = function() {
                return t
            }
            ,
            t
        }
        function C() {
            var t = (0,
            r.Z)(['\n  width: 400px;\n  height: 400px;\n  outline: 2px solid black;\n  border-radius: 50%;\n  position: relative;\n  z-index: 2;\n  transform: rotateY(0deg) skew(288deg, 25deg) scale(0.2) translateZ(0);\n  transform-style: preserve-3d;\n  animation: orbitEnter 1s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;\n\n  @keyframes orbitEnter {\n    to {\n      transform: rotateY(60deg) skew(288deg, 25deg) scale(1) translateZ(0);\n    }\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: black;\n    border-radius: 50%;\n    left: 190px;\n    top: 190px;\n    transform: rotateZ(0deg) translateX(200px) rotateZ(-0deg) rotateY(-60deg) skew(58deg, 346deg);\n    animation: rotate 4s infinite linear;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotateZ(360deg) translateX(200px) rotateZ(-360deg) rotateY(-60deg)\n        skew(58deg, 346deg);\n    }\n  }\n\n  @media only ', " {\n    width: 350px;\n    height: 350px;\n\n    &::after {\n      left: 166.25px;\n      top: 166.25px;\n      transform: rotateZ(0deg) translateX(175px) rotateZ(-0deg) rotateY(-60deg) skew(58deg, 346deg);\n    }\n\n    @keyframes rotate {\n      100% {\n        transform: rotateZ(360deg) translateX(175px) rotateZ(-360deg) rotateY(-60deg)\n          skew(58deg, 346deg);\n      }\n    }\n  }\n\n  @media only ", " {\n    width: 225px;\n    height: 225px;\n\n    &::after {\n      left: 103px;\n      top: 103px;\n      transform: rotateZ(0deg) translateX(112px) rotateZ(-0deg) rotateY(-60deg) skew(58deg, 346deg);\n    }\n\n    @keyframes rotate {\n      100% {\n        transform: rotateZ(360deg) translateX(112px) rotateZ(-360deg) rotateY(-60deg)\n          skew(58deg, 346deg);\n      }\n    }\n  }\n"]);
            return C = function() {
                return t
            }
            ,
            t
        }
        function E() {
            var t = (0,
            r.Z)(["\n  position: relative;\n  width: 100%;\n  height: 590px;\n  display: grid;\n  place-items: center;\n\n  @media only ", " {\n    height: 475px;\n  }\n\n  @media only ", " {\n    height: 425px;\n  }\n\n  @media only ", " {\n    height: 350px;\n  }\n"]);
            return E = function() {
                return t
            }
            ,
            t
        }
        function A() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n  gap: 2rem;\n\n  @media only ", " {\n    grid-template-columns: 2fr 1fr;\n    ", ";\n  }\n\n  @media only ", " {\n    grid-template-columns: 1fr;\n  }\n"]);
            return A = function() {
                return t
            }
            ,
            t
        }
        function T() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: ", ";\n  overflow: hidden;\n  ", ";\n  position: relative;\n  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n  will-change: clip-path;\n  transition: clip-path 1s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &.is-inview {\n    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);\n  }\n\n  @media only ", " {\n    ", ";\n  }\n"]);
            return T = function() {
                return t
            }
            ,
            t
        }
        function _() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scale(1.4) translateZ(0);\n  transition: transform 1.4s 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &.is-inview {\n    transform: scale(1) translateZ(0);\n  }\n"]);
            return _ = function() {
                return t
            }
            ,
            t
        }
        function P() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: 100%;\n  background: ", ";\n\n  @media only ", " {\n    margin-top: -3rem;\n  }\n\n  @media only ", " {\n    margin-top: -1.75rem;\n  }\n"]);
            return P = function() {
                return t
            }
            ,
            t
        }
        function j() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  ", "\n\n  @media only ", " {\n    display: none;\n  }\n"]);
            return j = function() {
                return t
            }
            ,
            t
        }
        function O() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(5rem, 12vw, 10rem);\n  width: fit-content;\n  color: grey;\n  writing-mode: vertical-lr;\n  transform-origin: center;\n  font-weight: 600;\n  margin-right: 2rem;\n  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n  will-change: clip-path;\n  transition: clip-path 1s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  ", "\n\n  &.is-inview {\n    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);\n  }\n"]);
            return O = function() {
                return t
            }
            ,
            t
        }
        function I() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: max-content;\n  margin: 4rem 0rem 2rem;\n  padding: 0rem 4rem;\n\n  @media only ", " {\n    padding: 0rem 3rem;\n    margin: 2rem 0rem 2rem;\n    ", "\n  }\n\n  @media only ", " {\n    padding: 0rem 3rem;\n    margin: 1rem 0rem 1rem;\n    ", "\n  }\n\n  @media only ", " {\n    padding: 0rem 2rem;\n  }\n\n  @media only ", " {\n    padding: 0rem 1rem;\n  }\n"]);
            return I = function() {
                return t
            }
            ,
            t
        }
        function M() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: max-content;\n  margin-top: 4rem;\n"]);
            return M = function() {
                return t
            }
            ,
            t
        }
        function L() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(2rem, 6vw, 3rem);\n  font-weight: 450;\n\n  @media only ", " {\n    display: block;\n    ", ";\n  }\n"]);
            return L = function() {
                return t
            }
            ,
            t
        }
        function R() {
            var t = (0,
            r.Z)(["\n  width: max-content;\n  margin: 4rem auto 0rem;\n  display: grid;\n  ", ";\n  place-items: center;\n  gap: 3rem 5rem;\n\n  @media only ", " {\n    width: 100%;\n    margin: 4rem auto;\n    gap: 3rem 4rem;\n    grid-template-columns: repeat(auto-fit, minmax(100px, max-content));\n    justify-content: center;\n  }\n\n  @media only ", " {\n    &.typography {\n      grid-template-columns: repeat(auto-fit, minmax(100px, 225px));\n      text-align: center;\n    }\n  }\n\n  @media only ", " {\n    &.typography {\n      gap: 2rem;\n      margin: 3rem auto;\n    }\n  }\n"]);
            return R = function() {
                return t
            }
            ,
            t
        }
        function z() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(2rem, 4.5vw, 3rem);\n  font-family: ", ";\n  font-weight: ", ";\n"]);
            return z = function() {
                return t
            }
            ,
            t
        }
        function D() {
            var t = (0,
            r.Z)(["\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 400;\n  width: max-content;\n  margin: 3rem auto;\n\n  &.celestials {\n    margin-top: 6rem;\n  }\n"]);
            return D = function() {
                return t
            }
            ,
            t
        }
        function Z() {
            var t = (0,
            r.Z)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: ", ";\n  color: ", ';\n  font-size: 1rem;\n  font-family: "manrope", sans-serif;\n  display: grid;\n  place-items: center;\n  opacity: 0;\n  transform: translateY(50px) translateZ(0);\n  transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;\n\n  &.white {\n    color: white;\n  }\n\n  &.outline {\n    outline: 1px solid #ddd;\n  }\n\n  &.is-inview {\n    opacity: 1;\n    transform: translateY(0px) translateZ(0);\n  }\n']);
            return Z = function() {
                return t
            }
            ,
            t
        }
        function V() {
            var t = (0,
            r.Z)(["\n  width: 70px;\n  height: 70px;\n  background: ", ";\n  opacity: 0;\n  transform: translateY(50px) translateZ(0);\n  transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;\n\n  &.outline {\n    outline: 2px solid #ddd;\n    border-radius: 12px;\n  }\n\n  &.is-inview {\n    opacity: 1;\n    transform: translateY(0px) translateZ(0);\n  }\n"]);
            return V = function() {
                return t
            }
            ,
            t
        }
        function B() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  margin-top: 3rem;\n  aspect-ratio: ", ";\n  background: ", ";\n  opacity: 0;\n  transform: translateY(50px) translateZ(0);\n  transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;\n\n  @media only ", " {\n    margin-top: 2rem;\n  }\n\n  &.is-inview {\n    opacity: 1;\n    transform: translateY(0px) translateZ(0);\n  }\n"]);
            return B = function() {
                return t
            }
            ,
            t
        }
        function Y() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  margin: 2rem auto;\n"]);
            return Y = function() {
                return t
            }
            ,
            t
        }
        function F() {
            var t = (0,
            r.Z)(["\n  width: 80%;\n  aspect-ratio: 1.4 / 1;\n  margin: auto;\n  background-color: #000000;\n  transform-style: preserve-3d;\n  transition: transform 0.75s cubic-bezier(0.39, 0.575, 0.565, 1),\n    box-shadow 0.75s cubic-bezier(0.39, 0.575, 0.565, 1);\n  ", "\n  ", "\n\n  @media only ", " {\n    width: 100%;\n  }\n\n  @media only ", " {\n    ", "\n  }\n"]);
            return F = function() {
                return t
            }
            ,
            t
        }
        function H() {
            var t = (0,
            r.Z)(['\n  width: 100%;\n  aspect-ratio: 1.673 / 1;\n  background: url("Images/HeavenlyBodies/Jupiter_Hero.webp") no-repeat center center / cover;\n  position: relative;\n  transition: transform 1.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n  ', '\n\n  &::after {\n    content: "";\n    inset: 0;\n    height: 100%;\n    position: absolute;\n    background: linear-gradient(180deg, rgba(210, 136, 99, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%);\n    background: -webkit-linear-gradient(\n      270deg,\n      rgba(210, 136, 99, 0.5) 0%,\n      rgba(0, 0, 0, 0.6) 100%\n    );\n    z-index: 2;\n    mix-blend-mode: soft-light;\n    transition: opacity 0.2s cubic-bezier(0.39, 0.575, 0.565, 1),\n      height 0.2s cubic-bezier(0.39, 0.575, 0.565, 1),\n      transform 1.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n    ', "\n    ", '\n  }\n\n  &::before {\n    content: "";\n    inset: 0;\n    height: 100%;\n    position: absolute;\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%);\n    background: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0) 50%, #000000 100%);\n    z-index: 4;\n    transition: opacity 0.2s cubic-bezier(0.39, 0.575, 0.565, 1),\n      height 0.2s cubic-bezier(0.39, 0.575, 0.565, 1),\n      transform 1.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n    ', "\n    ", ";\n  }\n"]);
            return H = function() {
                return t
            }
            ,
            t
        }
        function N() {
            var t = (0,
            r.Z)(["\n  position: absolute;\n  width: 80%;\n  margin: auto;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem;\n  z-index: 6;\n  text-align: center;\n  transition: transform 1.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n  ", '\n\n  & .paragraph {\n    color: white;\n    font-size: clamp(0.75rem, 2vw, 1rem);\n    font-family: "Montserrat", sans-serif;\n  }\n\n  @media only ', " {\n    padding: 0.5rem;\n\n    ", "\n  }\n"]);
            return N = function() {
                return t
            }
            ,
            t
        }
        function U() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(1.5rem, 6vw, 4rem);\n  letter-spacing: 8px;\n  font-weight: 500;\n  color: white;\n"]);
            return U = function() {
                return t
            }
            ,
            t
        }
        function W() {
            var t = (0,
            r.Z)(["\n  padding: 1rem 0rem;\n  font-size: clamp(0.9rem, 2.25vw, 1.25rem);\n  letter-spacing: 10px;\n  color: #fff;\n  font-weight: 400;\n\n  @media only ", " {\n    padding: 0.25rem 0rem;\n  }\n"]);
            return W = function() {
                return t
            }
            ,
            t
        }
        function X() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  margin: 4.5rem auto 0.5rem auto;\n  display: grid;\n  grid-template-columns: repeat(3, 160px);\n  justify-content: center;\n  place-items: center;\n  gap: 0rem 8rem;\n\n  @media only ", " {\n    margin-top: 3.5rem;\n  }\n\n  @media only ", " {\n    gap: 0rem 7vw;\n  }\n\n  @media only ", " {\n    grid-template-columns: repeat(2, 160px);\n    gap: 1.5rem;\n  }\n\n  .buttonGrid {\n    display: grid;\n    place-items: center;\n  }\n"]);
            return X = function() {
                return t
            }
            ,
            t
        }
        function q() {
            var t = (0,
            r.Z)(['\n  width: 150px;\n  height: 60px;\n  color: black;\n  display: grid;\n  place-items: center;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  background-color: transparent;\n  border: 2px solid black;\n  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;\n  font-family: "Manrope", sans-serif;\n  font-weight: 500;\n\n  ', "\n"]);
            return q = function() {
                return t
            }
            ,
            t
        }
        function $() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(2.5rem, 6vw, 3rem);\n  font-weight: 450;\n  margin: 2rem 0rem 4rem 0rem;\n\n  @media only ", " {\n    margin: 3rem 0rem;\n  }\n"]);
            return $ = function() {
                return t
            }
            ,
            t
        }
        function G() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  padding: 1rem 0rem;\n  height: auto;\n"]);
            return G = function() {
                return t
            }
            ,
            t
        }
        function K() {
            var t = (0,
            r.Z)(['\n  font-size: 2rem;\n  font-family: "Manrope", sans-serif;\n  font-weight: 600;\n  width: 85%;\n  margin: auto;\n  margin-bottom: 2rem;\n\n  @media only ', " {\n    width: 100%;\n  }\n"]);
            return K = function() {
                return t
            }
            ,
            t
        }
        function J() {
            var t = (0,
            r.Z)(['\n  font-size: 1.2rem;\n  width: 85%;\n  margin: auto;\n  line-height: 1.5;\n  font-family: "Manrope", sans-serif;\n  font-weight: normal;\n\n  & .code {\n    font-family: "Space Mono", monospace;\n    text-decoration: underline;\n  }\n\n  @media only ', " {\n    width: 100%;\n  }\n\n  @media only ", " {\n    b {\n      font-size: 1.3rem;\n    }\n  }\n"]);
            return J = function() {
                return t
            }
            ,
            t
        }
        function Q() {
            var t = (0,
            r.Z)(['\n  width: 40%;\n  height: 70px;\n  position: relative;\n  display: grid;\n  place-items: center;\n  margin: 4rem auto;\n  cursor: pointer;\n  background-color: black;\n  color: white;\n\n  & svg {\n    transition: transform 300ms ease-in-out;\n  }\n\n  &:hover {\n    svg {\n      transform: translateX(20px);\n    }\n  }\n\n  & div {\n    display: flex;\n    gap: 2.5rem;\n    align-items: center;\n    padding: 1rem;\n  }\n\n  & h2 {\n    font-size: 1.75rem;\n    font-family: "Manrope", sans-serif;\n    font-weight: 500;\n    white-space: pre;\n  }\n']);
            return Q = function() {
                return t
            }
            ,
            t
        }
        function tt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: 700px;\n  position: relative;\n  display: grid;\n  place-items: center;\n\n  @media only ", ' {\n    height: 600px;\n  }\n\n  &::after {\n    content: "";\n    inset: 0;\n    height: 101%;\n    position: absolute;\n    z-index: 4;\n    opacity: 0;\n    background: linear-gradient(0deg, #f9f2ed, rgb(255 255 255 / 0));\n    animation: PosterGradient 0.75s 5s forwards ease-in-out;\n\n    @media only ', " {\n      animation-delay: 3.85s;\n    }\n\n    @media only ", " {\n      animation-delay: 3.8s;\n    }\n\n    @keyframes PosterGradient {\n      to {\n        opacity: 1;\n      }\n    }\n  }\n"]);
            return tt = function() {
                return t
            }
            ,
            t
        }
        function nt() {
            var t = (0,
            r.Z)(["\n  position: absolute;\n  z-index: 5;\n  opacity: 0;\n  overflow: hidden;\n  animation: HeroCaption 0.75s 4.9s forwards ease-in-out;\n\n  @keyframes HeroCaption {\n    to {\n      opacity: 1;\n    }\n  }\n\n  @media only ", " {\n    animation-delay: 3.9s;\n  }\n\n  @media only ", " {\n    animation-delay: 3.85s;\n  }\n"]);
            return nt = function() {
                return t
            }
            ,
            t
        }
        function et() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(3.65rem, 8.25vw, 5rem);\n  font-weight: 550;\n  text-align: center;\n  margin: 0;\n\n  & > span {\n    display: inline-block;\n  }\n\n  .Span-1,\n  .Span-2,\n  .Span-3,\n  .Span-4,\n  .Span-5,\n  .Span-6,\n  .Span-7,\n  .Span-8,\n  .Span-9,\n  .Span-10 {\n    transform: translateY(80px) translateZ(0);\n    animation: SpanEnter 0s 5.2s forwards cubic-bezier(1, 0, 0, 1);\n\n    @keyframes SpanEnter {\n      to {\n        transform: translateY(0px) translateZ(0);\n      }\n    }\n\n    @media only ", " {\n      animation-delay: 4.05s;\n    }\n\n    @media only ", " {\n      animation-delay: 4s;\n    }\n  }\n\n  .Span-1 {\n    animation-duration: 0.25s;\n  }\n\n  .Span-2 {\n    animation-duration: 0.3s;\n  }\n\n  .Span-3 {\n    animation-duration: 0.35s;\n  }\n\n  .Span-4 {\n    animation-duration: 0.4s;\n  }\n\n  .Span-5 {\n    animation-duration: 0.45s;\n  }\n\n  .Span-6 {\n    animation-duration: 0.5s;\n  }\n\n  .Span-7 {\n    animation-duration: 0.55s;\n  }\n\n  .Span-8 {\n    animation-duration: 0.6s;\n  }\n\n  .Span-9 {\n    animation-duration: 0.65s;\n  }\n\n  .Span-10 {\n    animation-duration: 0.7s;\n  }\n"]);
            return et = function() {
                return t
            }
            ,
            t
        }
        function rt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  position: absolute;\n  overflow: hidden;\n\n  .col-2,\n  .col-4,\n  .col-6 {\n    transform: translateY(112px) translateZ(0);\n    will-change: transform;\n    animation: heroLoadEven 0.5s 4.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;\n\n    @keyframes heroLoadEven {\n      to {\n        transform: translateY(16.5px) translateZ(0);\n      }\n    }\n  }\n\n  .col-1,\n  .col-3,\n  .col-5,\n  .col-7 {\n    animation: heroLoadOdd 0.5s 4.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;\n\n    @keyframes heroLoadOdd {\n      to {\n        transform: translateY(85px) translateZ(0);\n      }\n    }\n  }\n\n  @media only ", " {\n    .col-1,\n    .col-3,\n    .col-5,\n    .col-7 {\n      transform: translateY(95px) translateZ(0);\n\n      @keyframes heroLoadOdd {\n        to {\n          transform: translateY(190px) translateZ(0);\n        }\n      }\n    }\n\n    .col-2,\n    .col-4,\n    .col-6 {\n      transform: translateY(-10px) translateZ(0);\n\n      @keyframes heroLoadEven {\n        to {\n          transform: translateY(-105px) translateZ(0);\n        }\n      }\n    }\n  }\n\n  @media only ", " {\n    .col-1,\n    .col-7 {\n      display: none;\n    }\n\n    .col-3,\n    .col-5 {\n      transform: translateY(70px) translateZ(0);\n      animation-delay: 3.6s;\n\n      @keyframes heroLoadOdd {\n        to {\n          transform: translateY(162px) translateZ(0);\n        }\n      }\n    }\n\n    .col-2,\n    .col-4,\n    .col-6 {\n      transform: translateY(26px) translateZ(0);\n      animation-delay: 3.6s;\n\n      @keyframes heroLoadEven {\n        to {\n          transform: translateY(-70px) translateZ(0);\n        }\n      }\n    }\n  }\n\n  @media only ", " {\n    .col-3,\n    .col-5 {\n      transform: translateY(40px) translateZ(0);\n      animation-delay: 3.6s;\n\n      @keyframes heroLoadOdd {\n        to {\n          transform: translateY(138px) translateZ(0);\n        }\n      }\n    }\n\n    .col-2,\n    .col-4,\n    .col-6 {\n      transform: translateY(56px) translateZ(0);\n      animation-delay: 3.6s;\n\n      @keyframes heroLoadEven {\n        to {\n          transform: translateY(-35px) translateZ(0);\n        }\n      }\n    }\n  }\n\n  @media only ", " {\n    gap: 15px;\n\n    .col-2,\n    .col-4,\n    .col-6 {\n      transform: translateY(70px) translateZ(0);\n      animation-delay: 3.55s;\n\n      @keyframes heroLoadEven {\n        to {\n          transform: translateY(-25px) translateZ(0);\n        }\n      }\n    }\n\n    .col-3,\n    .col-5 {\n      animation-delay: 3.55s;\n\n      @keyframes heroLoadOdd {\n        to {\n          transform: translateY(110px) translateZ(0);\n        }\n      }\n    }\n  }\n\n  @media only ", " {\n    gap: 10px;\n\n    .col-2,\n    .col-6 {\n      display: none;\n    }\n\n    .col-4 {\n      transform: translateY(62px) translateZ(0);\n    }\n\n    .col-3,\n    .col-5 {\n      transform: translateY(25px) translateZ(0);\n\n      @keyframes heroLoadOdd {\n        to {\n          transform: translateY(100px) translateZ(0);\n        }\n      }\n    }\n  }\n"]);
            return rt = function() {
                return t
            }
            ,
            t
        }
        function it() {
            var t = (0,
            r.Z)(["\n  width: 136px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px 0px;\n\n  @media only ", " {\n    gap: 15px;\n  }\n\n  @media only ", " {\n    gap: 10px;\n  }\n"]);
            return it = function() {
                return t
            }
            ,
            t
        }
        function ot() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: 205px;\n  background: ", ";\n  opacity: 0;\n\n  &.Sherlock {\n    animation: Sherlock 0.75s 0.325s forwards ease-in-out;\n\n    @keyframes Sherlock {\n      to {\n        opacity: 1;\n      }\n    }\n  }\n\n  &.Joker,\n  &.Get_Out,\n  &.Breaking_Bad,\n  &.Black_Mirror,\n  &.Inception,\n  &.Blade_Runner {\n    animation: Circle1 0.75s 1.325s ease-in-out forwards;\n\n    @keyframes Circle1 {\n      to {\n        opacity: 1;\n      }\n    }\n  }\n\n  &.R_M,\n  &.Boys,\n  &.Dune,\n  &.Punisher,\n  &.Squid_Game,\n  &.You,\n  &.Hill_House,\n  &.Batman,\n  &.Bojack,\n  &.Nightcrawler {\n    animation: Circle2 0.75s 2.325s ease-in-out forwards;\n\n    @keyframes Circle2 {\n      to {\n        opacity: 1;\n      }\n    }\n  }\n\n  &.Daredevil,\n  &.Arcane,\n  &.Midsommar,\n  &.AHS,\n  &.Light_House,\n  &.Green_Knight,\n  &.Deadpool,\n  &.Robot,\n  &.Knives_Out,\n  &.Ozark,\n  &.Soho {\n    animation: Circle3 0.75s 3.325s ease-in-out forwards;\n\n    @keyframes Circle3 {\n      to {\n        opacity: 1;\n      }\n    }\n  }\n"]);
            return ot = function() {
                return t
            }
            ,
            t
        }
        function at() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  height: auto;\n  opacity: 0;\n  transform: translateY(50px) translateZ(0);\n  will-change: transform;\n  transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;\n\n  &.is-inview {\n    opacity: 1;\n    transform: translateY(0px) translateZ(0);\n  }\n"]);
            return at = function() {
                return t
            }
            ,
            t
        }
        function st() {
            var t = (0,
            r.Z)(["\n  border-bottom: 1px solid #ddd;\n"]);
            return st = function() {
                return t
            }
            ,
            t
        }
        function lt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  padding: 0rem 0rem 4rem;\n  margin-top: 8rem;\n\n  @media only ", " {\n    margin-top: 6rem;\n  }\n\n  @media only ", " {\n    padding: 0rem 0rem 3rem;\n  }\n\n  @media only ", " {\n    margin-top: 4rem;\n  }\n\n  &.whitespace {\n    margin-top: 6rem;\n\n    @media only ", " {\n      margin-top: 4rem;\n    }\n\n    @media only ", " {\n      padding: 0rem 0rem 2rem;\n    }\n\n    @media only ", " {\n      margin-top: 1.5rem;\n    }\n  }\n"]);
            return lt = function() {
                return t
            }
            ,
            t
        }
        function ct() {
            var t = (0,
            r.Z)(["\n  font-size: 2.25rem;\n  font-weight: 400;\n  line-height: 1.28;\n\n  @media only ", " {\n    font-size: 2rem;\n  }\n\n  @media only ", " {\n    font-size: 1.75rem;\n  }\n"]);
            return ct = function() {
                return t
            }
            ,
            t
        }
        function ut() {
            var t = (0,
            r.Z)(["\n  margin-top: 4rem;\n\n  &.flex {\n    display: flex;\n    align-items: center;\n    gap: 5rem;\n\n    @media only ", " {\n      flex-direction: column;\n      gap: 2rem;\n      align-items: flex-start;\n    }\n  }\n\n  a {\n    display: block;\n    max-width: max-content;\n  }\n"]);
            return ut = function() {
                return t
            }
            ,
            t
        }
        function dt() {
            var t = (0,
            r.Z)(["\n  font-size: 1.35rem;\n  width: max-content;\n  font-weight: 350;\n  margin-bottom: 1rem;\n"]);
            return dt = function() {
                return t
            }
            ,
            t
        }
        function ft() {
            var t = (0,
            r.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n\n  & svg {\n    transition: transform 0.325s ease-in-out;\n  }\n"]);
            return ft = function() {
                return t
            }
            ,
            t
        }
        function ht() {
            var t = (0,
            r.Z)(['\n  font-size: 2rem;\n  width: max-content;\n  font-weight: 550;\n  position: relative;\n\n  &.noAfter {\n    &::after {\n      display: none;\n    }\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 1.5px;\n    background: black;\n    bottom: 0;\n    left: 0;\n    transform: scaleX(0);\n    transform-origin: 100% 50%;\n    transition: transform 0.3s ease-in-out;\n  }\n\n  @media only ', " {\n    &:hover::after {\n      transform: scaleX(1);\n      transform-origin: 0% 50%;\n    }\n\n    &:hover ~ svg {\n      transform: translateX(10px) translateZ(0);\n    }\n  }\n"]);
            return ht = function() {
                return t
            }
            ,
            t
        }
        function pt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  margin-top: 4rem;\n\n  @media only ", " {\n    margin-top: 3rem;\n  }\n\n  @media only ", " {\n    margin-top: 2rem;\n  }\n"]);
            return pt = function() {
                return t
            }
            ,
            t
        }
        function mt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  margin-top: 4rem;\n  padding: 0rem;\n\n  @media only ", " {\n    margin-top: 3rem;\n  }\n\n  @media only ", " {\n    margin-top: 2rem;\n  }\n\n  @media only ", " {\n    margin-top: 1rem;\n  }\n"]);
            return mt = function() {
                return t
            }
            ,
            t
        }
        function vt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: ", ";\n  background: ", ";\n  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n  will-change: clip-path;\n  transition: clip-path 1s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &.bigImg {\n    clip-path: polygon(0 20%, 100% 20%, 100% 100%, 0% 100%);\n    transition: clip-path 1.75s cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  &.bigImgX {\n    clip-path: polygon(0 15%, 100% 15%, 100% 100%, 0% 100%);\n    transition: clip-path 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  &.is-inview {\n    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);\n  }\n"]);
            return vt = function() {
                return t
            }
            ,
            t
        }
        function gt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  padding: 0rem 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media only ", " {\n    padding: 0rem 3rem;\n  }\n  @media only ", " {\n    padding: 0rem 2rem;\n  }\n  @media only ", " {\n    padding: 0rem 1rem;\n  }\n"]);
            return gt = function() {
                return t
            }
            ,
            t
        }
        function yt() {
            var t = (0,
            r.Z)(['\n  width: 100%;\n  position: relative;\n  display: grid;\n  place-items: center;\n\n  &.gradient {\n    &::after {\n      content: "";\n      inset: 0;\n      height: 101%;\n      position: absolute;\n      z-index: 4;\n      opacity: 1;\n      background: linear-gradient(0deg, #f9f2ed, rgb(255 255 255 / 0));\n    }\n  }\n']);
            return yt = function() {
                return t
            }
            ,
            t
        }
        function bt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  aspect-ratio: ", ";\n  background: ", ";\n"]);
            return bt = function() {
                return t
            }
            ,
            t
        }
        function wt() {
            var t = (0,
            r.Z)(["\n  width: max-content;\n  overflow: hidden;\n  position: absolute;\n  z-index: 10;\n\n  @media only ", " {\n    margin-top: 4rem;\n  }\n"]);
            return wt = function() {
                return t
            }
            ,
            t
        }
        function xt() {
            var t = (0,
            r.Z)(['\n  font-size: clamp(4rem, 15vw, 10rem);\n  display: inline-block;\n  font-family: "Manrope", sans-serif;\n  animation: spanEnter 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n\n  &.M {\n    transform: translateY(60%) translateZ(0);\n  }\n\n  &.four {\n    transform: translateY(-60%) translateZ(0);\n  }\n\n  @keyframes spanEnter {\n    to {\n      transform: translateY(0) translateZ(0);\n    }\n  }\n']);
            return xt = function() {
                return t
            }
            ,
            t
        }
        function kt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  padding: 0rem 4rem;\n  margin-bottom: 6rem;\n\n  &.techStack {\n    margin: 6rem 0rem 8rem 0rem;\n\n    @media only ", " {\n      margin: 4rem 0rem 6rem 0rem;\n    }\n\n    @media only ", " {\n      margin: 3rem 0rem 5rem 0rem;\n    }\n  }\n\n  &.heroAbout {\n    margin-bottom: 8rem;\n\n    @media only ", " {\n      margin-bottom: 6rem;\n    }\n  }\n\n  @media only ", " {\n    padding: 0rem 3rem;\n  }\n  @media only ", " {\n    padding: 0rem 2rem;\n    margin-bottom: 4rem;\n  }\n  @media only ", " {\n    padding: 0rem 1rem;\n  }\n"]);
            return kt = function() {
                return t
            }
            ,
            t
        }
        function St() {
            var t = (0,
            r.Z)(["\n  width: fit-content;\n  overflow: hidden;\n  line-height: 1.28;\n\n  &.margin {\n    margin-top: clamp(3.5rem, 6vw, 6rem);\n    margin-bottom: clamp(4rem, 6vw, 6rem);\n  }\n"]);
            return St = function() {
                return t
            }
            ,
            t
        }
        function Ct() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(2rem, 14vw, 9rem);\n  font-weight: 400;\n  margin: 0;\n  transform: translateY(100%) translateZ(0);\n  animation: nameEnter 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n\n  @keyframes nameEnter {\n    to {\n      transform: translateY(0) translateZ(0);\n    }\n  }\n"]);
            return Ct = function() {
                return t
            }
            ,
            t
        }
        function Et() {
            var t = (0,
            r.Z)(["\n  font-size: clamp(1.5rem, 6vw, 2rem);\n  opacity: 0;\n  transform: translateY(50px) translateZ(0);\n  animation: paraEnter 0.55s 1s ease-out forwards;\n\n  @keyframes paraEnter {\n    to {\n      opacity: 1;\n      transform: translateY(0) translateZ(0);\n    }\n  }\n"]);
            return Et = function() {
                return t
            }
            ,
            t
        }
        function At() {
            var t = (0,
            r.Z)(['\n  margin-top: 2.5rem;\n  font-size: 20px;\n  opacity: 0;\n  transform: translateY(50px) translateZ(0);\n  animation: paraEnter 0.55s 1.25s ease-out forwards;\n\n  &.experience {\n    line-height: 1.6;\n    animation: paraEnter 0.55s 1.5s ease-out forwards;\n  }\n\n  &.stack {\n    line-height: 1.6;\n    animation: paraEnter 0.55s 1.75s ease-out forwards;\n  }\n\n  &.sPara {\n    .services {\n      line-height: 1.6;\n      font-size: 20px;\n      margin-top: 0.35rem;\n      display: block;\n    }\n\n    .p {\n      padding-left: 1.45rem;\n      position: relative;\n\n      &::before {\n        content: "";\n        width: 8px;\n        height: 8px;\n        background: black;\n        position: absolute;\n        border-radius: 50%;\n        left: 0;\n        top: calc(50% - 4px);\n      }\n    }\n    animation: paraEnter 0.55s 2s ease-out forwards;\n  }\n\n  .jamstack {\n    text-decoration: underline;\n  }\n']);
            return At = function() {
                return t
            }
            ,
            t
        }
        function Tt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));\n  gap: 3rem 6rem;\n\n  p {\n    font-size: 20px;\n    opacity: 0.75;\n    font-weight: 450;\n    line-height: 1.4;\n  }\n\n  @media only ", " {\n    gap: 2rem 5rem;\n  }\n\n  @media only ", " {\n    gap: 2rem 4.5rem;\n  }\n"]);
            return Tt = function() {
                return t
            }
            ,
            t
        }
        function _t() {
            var t = (0,
            r.Z)(["\n  font-size: 20px;\n  line-height: 1.6;\n  margin-bottom: clamp(3rem, 7.25vw, 4rem);\n\n  .video {\n    text-decoration: underline;\n  }\n"]);
            return _t = function() {
                return t
            }
            ,
            t
        }
        function Pt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem 5rem;\n  margin-bottom: 8rem;\n\n  @media only ", " {\n    grid-template-columns: 1fr;\n    gap: 4rem;\n  }\n"]);
            return Pt = function() {
                return t
            }
            ,
            t
        }
        function jt() {
            var t = (0,
            r.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  gap: 55px;\n  margin-bottom: 5rem;\n\n  & .interestsTitle {\n    min-width: 350px;\n    width: 350px;\n  }\n\n  &.marginTop {\n    padding-top: 1rem;\n  }\n\n  @media only ", " {\n    & .interestsTitle {\n      min-width: 255px;\n      width: 255px;\n    }\n  }\n\n  @media only ", " {\n    gap: 8.7vw;\n    & .interestsTitle {\n      min-width: 200px;\n      width: 200px;\n    }\n  }\n\n  @media only ", " {\n    flex-direction: column;\n    gap: 2rem;\n\n    & .interestsTitle {\n      min-width: 200px;\n      width: 200px;\n    }\n  }\n"]);
            return jt = function() {
                return t
            }
            ,
            t
        }
        function Ot() {
            var t = (0,
            r.Z)(["\n  font-size: 20px;\n  opacity: 0.75;\n  font-weight: 450;\n\n  @media only ", " {\n    padding-left: 1.25rem;\n  }\n"]);
            return Ot = function() {
                return t
            }
            ,
            t
        }
        function It() {
            var t = (0,
            r.Z)(["\n  width: fit-content;\n\n  & div p {\n    font-size: 20px;\n    font-weight: 450;\n\n    @media only ", ' {\n      padding-left: 1.25rem;\n\n      &::before {\n        content: "";\n        width: 6px;\n        height: 6px;\n        background: black;\n        position: absolute;\n        border-radius: 50%;\n        left: 0;\n        top: calc(50% - 3px);\n      }\n    }\n  }\n\n  & div:not(:last-child) {\n    margin-bottom: 1.5rem;\n  }\n\n  & .under {\n    text-decoration: underline;\n  }\n']);
            return It = function() {
                return t
            }
            ,
            t
        }
        var Mt = i.default.div.withConfig({
            componentId: "sc-68215208-0"
        })(o())
          , Lt = i.default.div.withConfig({
            componentId: "sc-68215208-1"
        })(a(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , Rt = i.default.div.withConfig({
            componentId: "sc-68215208-2"
        })(s())
          , zt = i.default.div.withConfig({
            componentId: "sc-68215208-3"
        })(l())
          , Dt = i.default.div.withConfig({
            componentId: "sc-68215208-4"
        })(c())
          , Zt = i.default.div.withConfig({
            componentId: "sc-68215208-5"
        })(u(), (function(t) {
            return t.mt && "margin-top: 12rem;"
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.mt && "margin-top: 8rem;"
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ), (function(t) {
            return t.mt && "margin-top: 0rem;"
        }
        ))
          , Vt = i.default.div.withConfig({
            componentId: "sc-68215208-6"
        })(d(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , Bt = i.default.div.withConfig({
            componentId: "sc-68215208-7"
        })(f(), (function(t) {
            return t.right ? "right:9.5%" : "left:0"
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.right ? "right:2.5vw" : "left:0"
        }
        ))
          , Yt = i.default.div.withConfig({
            componentId: "sc-68215208-8"
        })(h(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , Ft = i.default.div.withConfig({
            componentId: "sc-68215208-9"
        })(p())
          , Ht = i.default.div.withConfig({
            componentId: "sc-68215208-10"
        })(m(), (function(t) {
            var n = t.image;
            return "Url(".concat(n, ") no-repeat center center /\n    cover")
        }
        ))
          , Nt = i.default.div.withConfig({
            componentId: "sc-68215208-11"
        })(v(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ), (function(t) {
            return t.theme.breakpoints.hover
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Ut = i.default.div.withConfig({
            componentId: "sc-68215208-12"
        })(g(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , Wt = i.default.div.withConfig({
            componentId: "sc-68215208-13"
        })(y(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , Xt = i.default.div.withConfig({
            componentId: "sc-68215208-14"
        })(b())
          , qt = i.default.div.withConfig({
            componentId: "sc-68215208-15"
        })(w())
          , $t = i.default.div.withConfig({
            componentId: "sc-68215208-16"
        })(x(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ), (function(t) {
            return t.theme.breakpoints.hover
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Gt = i.default.div.withConfig({
            componentId: "sc-68215208-17"
        })(k(), (function(t) {
            return t.theme.breakpoints.lgHover
        }
        ), (function(t) {
            return t.theme.breakpoints.ipHover
        }
        ))
          , Kt = i.default.h1.withConfig({
            componentId: "sc-68215208-18"
        })(S(), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Jt = i.default.div.withConfig({
            componentId: "sc-68215208-19"
        })(C(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Qt = i.default.div.withConfig({
            componentId: "sc-68215208-20"
        })(E(), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , tn = i.default.div.withConfig({
            componentId: "sc-68215208-21"
        })(A(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.grow && "grid-template-columns: 1fr 2fr"
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , nn = i.default.div.withConfig({
            componentId: "sc-68215208-22"
        })(T(), (function(t) {
            return t.aspect
        }
        ), (function(t) {
            return t.shift && "grid-column: 2 / 3;"
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ), (function(t) {
            return t.shift && "grid-column: 1 / 1;"
        }
        ))
          , en = i.default.div.withConfig({
            componentId: "sc-68215208-23"
        })(_(), (function(t) {
            return t.aspect
        }
        ))
          , rn = i.default.div.withConfig({
            componentId: "sc-68215208-24"
        })(P(), (function(t) {
            var n = t.background;
            return "url(".concat(n, ") no-repeat center center /cover")
        }
        ), (function(t) {
            return t.theme.breakpoints.lgHover
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ))
          , on = i.default.div.withConfig({
            componentId: "sc-68215208-25"
        })(j(), (function(t) {
            return t.right ? "  justify-content: flex-end;\n" : "   justify-content: flex-start;\n"
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , an = i.default.div.withConfig({
            componentId: "sc-68215208-26"
        })(O(), (function(t) {
            return t.right && "margin-right: 0; margin-left: 2rem;"
        }
        ))
          , sn = i.default.div.withConfig({
            componentId: "sc-68215208-27"
        })(I(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.margin && "margin-top: 4rem;"
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.margin && "margin-top: 3rem; margin-bottom: 2rem;"
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , ln = i.default.div.withConfig({
            componentId: "sc-68215208-28"
        })(M())
          , cn = i.default.span.withConfig({
            componentId: "sc-68215208-29"
        })(L(), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.margin && "margin-top: 3rem; margin-bottom: 2rem;"
        }
        ))
          , un = i.default.div.withConfig({
            componentId: "sc-68215208-30"
        })(R(), (function(t) {
            var n = t.columns;
            return "grid-template-columns: repeat(".concat(null !== n && void 0 !== n ? n : "3", ", max-content)")
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , dn = i.default.span.withConfig({
            componentId: "sc-68215208-31"
        })(z(), (function(t) {
            return t.family
        }
        ), (function(t) {
            return t.weight
        }
        ))
          , fn = i.default.div.withConfig({
            componentId: "sc-68215208-32"
        })(D())
          , hn = i.default.div.withConfig({
            componentId: "sc-68215208-33"
        })(Z(), (function(t) {
            return t.color
        }
        ), (function(t) {
            var n = t.color;
            return "#000" == n || "#333333" == n || "#121212" == n || "#0d253f" == n ? "white" : "black"
        }
        ))
          , pn = i.default.div.withConfig({
            componentId: "sc-68215208-34"
        })(V(), (function(t) {
            var n = t.image;
            return "url(".concat(n, ") no-repeat center center /contain")
        }
        ))
          , mn = i.default.div.withConfig({
            componentId: "sc-68215208-35"
        })(B(), (function(t) {
            return t.aspect
        }
        ), (function(t) {
            var n = t.flow;
            return "Url(".concat(n, ") no-repeat center center /contain")
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , vn = i.default.div.withConfig({
            componentId: "sc-68215208-36"
        })(Y())
          , gn = i.default.div.withConfig({
            componentId: "sc-68215208-37"
        })(F(), (function(t) {
            return !t.isDestruct && "transition-delay: 1.25s;"
        }
        ), (function(t) {
            return t.isDestruct && "transform: rotateX(51deg) rotateY(0deg) rotateZ(43deg) translateZ(0px) scale(0.65) translateZ(-5rem);\n    box-shadow: 70px 70px 1.5rem rgba(0 0 0 /0.25);\n    "
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.isDestruct && "transform: rotateX(51deg) rotateY(0deg) rotateZ(43deg) translateZ(0px) scale(0.725) translateZ(-2.5rem);\n    box-shadow: 70px 70px 1.5rem rgba(0 0 0 /0.25);\n    "
        }
        ))
          , yn = i.default.div.withConfig({
            componentId: "sc-68215208-38"
        })(H(), (function(t) {
            return t.isDestruct && "transform: translateX(calc(clamp(3rem, 7vw ,5rem) * -1)) translateY(calc(clamp(3rem, 7vw ,5rem) * -1)) translateZ(0);\n    "
        }
        ), (function(t) {
            return t.isOverlay ? "opacity: 1; height: 101%;" : "opacity: 0;"
        }
        ), (function(t) {
            return t.isDestruct && "transform: translateX(calc(clamp(3rem, 7vw ,5rem) * -1)) translateY(calc(clamp(3rem, 7vw ,5rem) * -1))translateZ(0);\n      outline: 1px solid rgba(51 51 51 / 0.25);\n    "
        }
        ), (function(t) {
            return t.isBlend ? "opacity: 1; height: 102%;" : "opacity: 0;"
        }
        ), (function(t) {
            return t.isDestruct && "transform: translateX(calc(clamp(6rem, 15vw ,10.25rem) * -1)) translateY(calc(clamp(6rem, 15vw ,10.25rem) * -1)) translateZ(0);\n      outline: 1px solid rgba(51 51 51 / 0.25);\n\n    "
        }
        ))
          , bn = i.default.div.withConfig({
            componentId: "sc-68215208-39"
        })(N(), (function(t) {
            return t.isDestruct && "transform: translateX(calc(clamp(4rem, 22vw ,14.5rem) * -1)) translateY(calc(clamp(4rem, 22vw ,14.5rem) * -1)) translateZ(0);\n    "
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ), (function(t) {
            return t.isDestruct && "transform: translateX(calc(clamp(4rem, 22vw ,14.5rem) * -1)) translateY(calc(clamp(4rem, 30vw ,14.5rem) * -1)) translateZ(0);\n    "
        }
        ))
          , wn = i.default.h2.withConfig({
            componentId: "sc-68215208-40"
        })(U())
          , xn = i.default.h3.withConfig({
            componentId: "sc-68215208-41"
        })(W(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , kn = i.default.div.withConfig({
            componentId: "sc-68215208-42"
        })(X(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ))
          , Sn = i.default.button.withConfig({
            componentId: "sc-68215208-43"
        })(q(), (function(t) {
            return t.clicked && "background: black; color: white;"
        }
        ))
          , Cn = i.default.h3.withConfig({
            componentId: "sc-68215208-44"
        })($(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , En = i.default.div.withConfig({
            componentId: "sc-68215208-45"
        })(G())
          , An = i.default.h2.withConfig({
            componentId: "sc-68215208-46"
        })(K(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ))
          , Tn = i.default.p.withConfig({
            componentId: "sc-68215208-47"
        })(J(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , _n = (i.default.div.withConfig({
            componentId: "sc-68215208-48"
        })(Q()),
        i.default.div.withConfig({
            componentId: "sc-68215208-49"
        })(tt(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        )))
          , Pn = i.default.div.withConfig({
            componentId: "sc-68215208-50"
        })(nt(), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , jn = i.default.h1.withConfig({
            componentId: "sc-68215208-51"
        })(et(), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , On = i.default.div.withConfig({
            componentId: "sc-68215208-52"
        })(rt(), (function(t) {
            return t.theme.breakpoints.lgHover
        }
        ), (function(t) {
            return t.theme.breakpoints.ipHover
        }
        ), (function(t) {
            return t.theme.breakpoints.mdHover
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , In = i.default.div.withConfig({
            componentId: "sc-68215208-53"
        })(it(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Mn = i.default.div.withConfig({
            componentId: "sc-68215208-54"
        })(ot(), (function(t) {
            var n = t.poster;
            return "Url(".concat(n, ") no-repeat center center /cover")
        }
        ))
          , Ln = i.default.div.withConfig({
            componentId: "sc-68215208-55"
        })(at())
          , Rn = i.default.div.withConfig({
            componentId: "sc-68215208-56"
        })(st())
          , zn = i.default.div.withConfig({
            componentId: "sc-68215208-57"
        })(lt(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , Dn = i.default.p.withConfig({
            componentId: "sc-68215208-58"
        })(ct(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Zn = i.default.div.withConfig({
            componentId: "sc-68215208-59"
        })(ut(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Vn = i.default.p.withConfig({
            componentId: "sc-68215208-60"
        })(dt())
          , Bn = i.default.div.withConfig({
            componentId: "sc-68215208-61"
        })(ft())
          , Yn = i.default.p.withConfig({
            componentId: "sc-68215208-62"
        })(ht(), (function(t) {
            return t.theme.breakpoints.hover
        }
        ))
          , Fn = i.default.div.withConfig({
            componentId: "sc-68215208-63"
        })(pt(), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , Hn = i.default.div.withConfig({
            componentId: "sc-68215208-64"
        })(mt(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.ip
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , Nn = i.default.div.withConfig({
            componentId: "sc-68215208-65"
        })(vt(), (function(t) {
            return t.aspect
        }
        ), (function(t) {
            var n = t.screen;
            return "Url(".concat(n, ") no-repeat center center /contain")
        }
        ))
          , Un = i.default.div.withConfig({
            componentId: "sc-68215208-66"
        })(gt(), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Wn = i.default.div.withConfig({
            componentId: "sc-68215208-67"
        })(yt())
          , Xn = i.default.div.withConfig({
            componentId: "sc-68215208-68"
        })(bt(), (function(t) {
            return t.aspect
        }
        ), (function(t) {
            var n = t.bg;
            return "Url(".concat(n, ") no-repeat center center /contain")
        }
        ))
          , qn = i.default.div.withConfig({
            componentId: "sc-68215208-69"
        })(wt(), (function(t) {
            return t.theme.breakpoints.lgHover
        }
        ))
          , $n = i.default.span.withConfig({
            componentId: "sc-68215208-70"
        })(xt())
          , Gn = i.default.div.withConfig({
            componentId: "sc-68215208-71"
        })(kt(), (function(t) {
            return t.theme.breakpoints.md
        }
        ), (function(t) {
            return t.theme.breakpoints.md
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.lg
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , Kn = i.default.div.withConfig({
            componentId: "sc-68215208-72"
        })(St())
          , Jn = i.default.h1.withConfig({
            componentId: "sc-68215208-73"
        })(Ct())
          , Qn = i.default.p.withConfig({
            componentId: "sc-68215208-74"
        })(Et())
          , te = i.default.p.withConfig({
            componentId: "sc-68215208-75"
        })(At())
          , ne = i.default.div.withConfig({
            componentId: "sc-68215208-76"
        })(Tt(), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ))
          , ee = (i.default.p.withConfig({
            componentId: "sc-68215208-77"
        })(_t()),
        i.default.div.withConfig({
            componentId: "sc-68215208-78"
        })(Pt(), (function(t) {
            return t.theme.breakpoints.ip
        }
        )))
          , re = i.default.div.withConfig({
            componentId: "sc-68215208-79"
        })(jt(), (function(t) {
            return t.theme.breakpoints.md
        }
        ), (function(t) {
            return t.theme.breakpoints.sm
        }
        ), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , ie = i.default.span.withConfig({
            componentId: "sc-68215208-80"
        })(Ot(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
          , oe = i.default.div.withConfig({
            componentId: "sc-68215208-81"
        })(It(), (function(t) {
            return t.theme.breakpoints.xs
        }
        ))
    },
    7663: function(t) {
        !function() {
            var n = {
                229: function(t) {
                    var n, e, r = t.exports = {};
                    function i() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function o() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function a(t) {
                        if (n === setTimeout)
                            return setTimeout(t, 0);
                        if ((n === i || !n) && setTimeout)
                            return n = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return n(t, 0)
                        } catch (r) {
                            try {
                                return n.call(null, t, 0)
                            } catch (r) {
                                return n.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            n = "function" === typeof setTimeout ? setTimeout : i
                        } catch (t) {
                            n = i
                        }
                        try {
                            e = "function" === typeof clearTimeout ? clearTimeout : o
                        } catch (t) {
                            e = o
                        }
                    }();
                    var s, l = [], c = !1, u = -1;
                    function d() {
                        c && s && (c = !1,
                        s.length ? l = s.concat(l) : u = -1,
                        l.length && f())
                    }
                    function f() {
                        if (!c) {
                            var t = a(d);
                            c = !0;
                            for (var n = l.length; n; ) {
                                for (s = l,
                                l = []; ++u < n; )
                                    s && s[u].run();
                                u = -1,
                                n = l.length
                            }
                            s = null,
                            c = !1,
                            function(t) {
                                if (e === clearTimeout)
                                    return clearTimeout(t);
                                if ((e === o || !e) && clearTimeout)
                                    return e = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    e(t)
                                } catch (n) {
                                    try {
                                        return e.call(null, t)
                                    } catch (n) {
                                        return e.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function h(t, n) {
                        this.fun = t,
                        this.array = n
                    }
                    function p() {}
                    r.nextTick = function(t) {
                        var n = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var e = 1; e < arguments.length; e++)
                                n[e - 1] = arguments[e];
                        l.push(new h(t,n)),
                        1 !== l.length || c || a(f)
                    }
                    ,
                    h.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    r.title = "browser",
                    r.browser = !0,
                    r.env = {},
                    r.argv = [],
                    r.version = "",
                    r.versions = {},
                    r.on = p,
                    r.addListener = p,
                    r.once = p,
                    r.off = p,
                    r.removeListener = p,
                    r.removeAllListeners = p,
                    r.emit = p,
                    r.prependListener = p,
                    r.prependOnceListener = p,
                    r.listeners = function(t) {
                        return []
                    }
                    ,
                    r.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }
                    ,
                    r.cwd = function() {
                        return "/"
                    }
                    ,
                    r.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }
                    ,
                    r.umask = function() {
                        return 0
                    }
                }
            }
              , e = {};
            function r(t) {
                var i = e[t];
                if (void 0 !== i)
                    return i.exports;
                var o = e[t] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    n[t](o, o.exports, r),
                    a = !1
                } finally {
                    a && delete e[t]
                }
                return o.exports
            }
            r.ab = "//";
            var i = r(229);
            t.exports = i
        }()
    },
    9008: function(t, n, e) {
        t.exports = e(5443)
    },
    1664: function(t, n, e) {
        t.exports = e(8418)
    },
    1163: function(t, n, e) {
        t.exports = e(387)
    },
    3750: function(t, n, e) {
        "use strict";
        e.d(n, {
            lzl: function() {
                return i
            },
            rFR: function() {
                return o
            }
        });
        var r = e(8357);
        function i(t) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        fillRule: "evenodd",
                        d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    }
                }]
            })(t)
        }
        function o(t) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    }
                }]
            })(t)
        }
    },
    8357: function(t, n, e) {
        "use strict";
        e.d(n, {
            w_: function() {
                return c
            }
        });
        var r = e(7294)
          , i = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , o = r.createContext && r.createContext(i)
          , a = function() {
            return a = Object.assign || function(t) {
                for (var n, e = 1, r = arguments.length; e < r; e++)
                    for (var i in n = arguments[e])
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                return t
            }
            ,
            a.apply(this, arguments)
        }
          , s = function(t, n) {
            var e = {};
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                    n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (e[r[i]] = t[r[i]])
            }
            return e
        };
        function l(t) {
            return t && t.map((function(t, n) {
                return r.createElement(t.tag, a({
                    key: n
                }, t.attr), l(t.child))
            }
            ))
        }
        function c(t) {
            return function(n) {
                return r.createElement(u, a({
                    attr: a({}, t.attr)
                }, n), l(t.child))
            }
        }
        function u(t) {
            var n = function(n) {
                var e, i = t.attr, o = t.size, l = t.title, c = s(t, ["attr", "size", "title"]), u = o || n.size || "1em";
                return n.className && (e = n.className),
                t.className && (e = (e ? e + " " : "") + t.className),
                r.createElement("svg", a({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, n.attr, i, c, {
                    className: e,
                    style: a(a({
                        color: t.color || n.color
                    }, n.style), t.style),
                    height: u,
                    width: u,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && r.createElement("title", null, l), t.children)
            };
            return void 0 !== o ? r.createElement(o.Consumer, null, (function(t) {
                return n(t)
            }
            )) : n(i)
        }
    },
    9921: function(t, n) {
        "use strict";
        var e = "function" === typeof Symbol && Symbol.for
          , r = e ? Symbol.for("react.element") : 60103
          , i = e ? Symbol.for("react.portal") : 60106
          , o = e ? Symbol.for("react.fragment") : 60107
          , a = e ? Symbol.for("react.strict_mode") : 60108
          , s = e ? Symbol.for("react.profiler") : 60114
          , l = e ? Symbol.for("react.provider") : 60109
          , c = e ? Symbol.for("react.context") : 60110
          , u = e ? Symbol.for("react.async_mode") : 60111
          , d = e ? Symbol.for("react.concurrent_mode") : 60111
          , f = e ? Symbol.for("react.forward_ref") : 60112
          , h = e ? Symbol.for("react.suspense") : 60113
          , p = e ? Symbol.for("react.suspense_list") : 60120
          , m = e ? Symbol.for("react.memo") : 60115
          , v = e ? Symbol.for("react.lazy") : 60116
          , g = e ? Symbol.for("react.block") : 60121
          , y = e ? Symbol.for("react.fundamental") : 60117
          , b = e ? Symbol.for("react.responder") : 60118
          , w = e ? Symbol.for("react.scope") : 60119;
        function x(t) {
            if ("object" === typeof t && null !== t) {
                var n = t.$$typeof;
                switch (n) {
                case r:
                    switch (t = t.type) {
                    case u:
                    case d:
                    case o:
                    case s:
                    case a:
                    case h:
                        return t;
                    default:
                        switch (t = t && t.$$typeof) {
                        case c:
                        case f:
                        case v:
                        case m:
                        case l:
                            return t;
                        default:
                            return n
                        }
                    }
                case i:
                    return n
                }
            }
        }
        function k(t) {
            return x(t) === d
        }
        n.AsyncMode = u,
        n.ConcurrentMode = d,
        n.ContextConsumer = c,
        n.ContextProvider = l,
        n.Element = r,
        n.ForwardRef = f,
        n.Fragment = o,
        n.Lazy = v,
        n.Memo = m,
        n.Portal = i,
        n.Profiler = s,
        n.StrictMode = a,
        n.Suspense = h,
        n.isAsyncMode = function(t) {
            return k(t) || x(t) === u
        }
        ,
        n.isConcurrentMode = k,
        n.isContextConsumer = function(t) {
            return x(t) === c
        }
        ,
        n.isContextProvider = function(t) {
            return x(t) === l
        }
        ,
        n.isElement = function(t) {
            return "object" === typeof t && null !== t && t.$$typeof === r
        }
        ,
        n.isForwardRef = function(t) {
            return x(t) === f
        }
        ,
        n.isFragment = function(t) {
            return x(t) === o
        }
        ,
        n.isLazy = function(t) {
            return x(t) === v
        }
        ,
        n.isMemo = function(t) {
            return x(t) === m
        }
        ,
        n.isPortal = function(t) {
            return x(t) === i
        }
        ,
        n.isProfiler = function(t) {
            return x(t) === s
        }
        ,
        n.isStrictMode = function(t) {
            return x(t) === a
        }
        ,
        n.isSuspense = function(t) {
            return x(t) === h
        }
        ,
        n.isValidElementType = function(t) {
            return "string" === typeof t || "function" === typeof t || t === o || t === d || t === s || t === a || t === h || t === p || "object" === typeof t && null !== t && (t.$$typeof === v || t.$$typeof === m || t.$$typeof === l || t.$$typeof === c || t.$$typeof === f || t.$$typeof === y || t.$$typeof === b || t.$$typeof === w || t.$$typeof === g)
        }
        ,
        n.typeOf = x
    },
    9864: function(t, n, e) {
        "use strict";
        t.exports = e(9921)
    },
    8992: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.LocomotiveScrollProvider = n.LocomotiveScrollContext = void 0;
        const r = e(7582)
          , i = e(5893)
          , o = e(7294)
          , a = e(9428)
          , s = r.__importDefault(e(6388));
        function l({children: t, options: l, containerRef: c, watch: u, onUpdate: d, location: f, onLocationChange: h}) {
            const {height: p} = (0,
            s.default)({
                ref: c
            })
              , [m,v] = (0,
            o.useState)(!1)
              , g = (0,
            o.useRef)(null)
              , [y] = (0,
            a.useDebounce)(p, 100);
            return u || console.warn("react-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours if the instance is not updated when the route changes"),
            (0,
            o.useEffect)(( () => (( () => {
                r.__awaiter(this, void 0, void 0, (function*() {
                    try {
                        const t = (yield Promise.resolve().then(( () => r.__importStar(e(6267))))).default
                          , n = document.querySelector("[data-scroll-container]");
                        n || console.warn("react-locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work."),
                        g.current = new t(Object.assign({
                            el: null !== n && void 0 !== n ? n : void 0
                        }, l)),
                        v(!0)
                    } catch (t) {
                        throw Error(`react-locomotive-scroll: ${t}`)
                    }
                }
                ))
            }
            )(),
            () => {
                var t;
                null === (t = g.current) || void 0 === t || t.destroy(),
                v(!1)
            }
            )), []),
            (0,
            o.useEffect)(( () => {
                g.current && (g.current.update(),
                d && d(g.current))
            }
            ), u ? [...u, y] : [y]),
            (0,
            o.useEffect)(( () => {
                g.current && f && (g.current.update(),
                h && h(g.current))
            }
            ), [f]),
            (0,
            i.jsx)(n.LocomotiveScrollContext.Provider, Object.assign({
                value: {
                    scroll: g.current,
                    isReady: m
                }
            }, {
                children: t
            }))
        }
        n.LocomotiveScrollContext = (0,
        o.createContext)({
            scroll: null,
            isReady: !1
        }),
        n.LocomotiveScrollProvider = l,
        n.LocomotiveScrollContext.displayName = "LocomotiveScrollContext",
        l.displayName = "LocomotiveScrollProvider"
    },
    8075: function(t, n, e) {
        "use strict";
        n.lh = n.a5 = void 0;
        var r = e(8992);
        Object.defineProperty(n, "a5", {
            enumerable: !0,
            get: function() {
                return r.LocomotiveScrollProvider
            }
        });
        var i = e(6781);
        Object.defineProperty(n, "lh", {
            enumerable: !0,
            get: function() {
                return i.useLocomotiveScroll
            }
        })
    },
    6781: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.useLocomotiveScroll = void 0;
        const r = e(7294)
          , i = e(8992);
        function o() {
            const t = (0,
            r.useContext)(i.LocomotiveScrollContext);
            return void 0 === t && console.warn("react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider."),
            t
        }
        n.useLocomotiveScroll = o,
        o.displayName = "useLocomotiveScroll"
    },
    6774: function(t) {
        t.exports = function(t, n, e, r) {
            var i = e ? e.call(r, t, n) : void 0;
            if (void 0 !== i)
                return !!i;
            if (t === n)
                return !0;
            if ("object" !== typeof t || !t || "object" !== typeof n || !n)
                return !1;
            var o = Object.keys(t)
              , a = Object.keys(n);
            if (o.length !== a.length)
                return !1;
            for (var s = Object.prototype.hasOwnProperty.bind(n), l = 0; l < o.length; l++) {
                var c = o[l];
                if (!s(c))
                    return !1;
                var u = t[c]
                  , d = n[c];
                if (!1 === (i = e ? e.call(r, u, d, c) : void 0) || void 0 === i && u !== d)
                    return !1
            }
            return !0
        }
    },
    4141: function(t, n, e) {
        "use strict";
        e.r(n),
        e.d(n, {
            ServerStyleSheet: function() {
                return Ft
            },
            StyleSheetConsumer: function() {
                return at
            },
            StyleSheetContext: function() {
                return ot
            },
            StyleSheetManager: function() {
                return ft
            },
            ThemeConsumer: function() {
                return Lt
            },
            ThemeContext: function() {
                return Mt
            },
            ThemeProvider: function() {
                return Rt
            },
            __PRIVATE__: function() {
                return Ut
            },
            createGlobalStyle: function() {
                return Bt
            },
            css: function() {
                return kt
            },
            default: function() {
                return Wt
            },
            isStyledComponent: function() {
                return k
            },
            keyframes: function() {
                return Yt
            },
            useTheme: function() {
                return Nt
            },
            version: function() {
                return C
            },
            withTheme: function() {
                return Ht
            }
        });
        var r = e(9864)
          , i = e(7294)
          , o = e(6774)
          , a = e.n(o);
        var s = function(t) {
            function n(t, r, l, c, f) {
                for (var h, p, m, v, w, k = 0, S = 0, C = 0, E = 0, A = 0, I = 0, L = m = h = 0, z = 0, D = 0, Z = 0, V = 0, B = l.length, Y = B - 1, F = "", H = "", N = "", U = ""; z < B; ) {
                    if (p = l.charCodeAt(z),
                    z === Y && 0 !== S + E + C + k && (0 !== S && (p = 47 === S ? 10 : 47),
                    E = C = k = 0,
                    B++,
                    Y++),
                    0 === S + E + C + k) {
                        if (z === Y && (0 < D && (F = F.replace(d, "")),
                        0 < F.trim().length)) {
                            switch (p) {
                            case 32:
                            case 9:
                            case 59:
                            case 13:
                            case 10:
                                break;
                            default:
                                F += l.charAt(z)
                            }
                            p = 59
                        }
                        switch (p) {
                        case 123:
                            for (h = (F = F.trim()).charCodeAt(0),
                            m = 1,
                            V = ++z; z < B; ) {
                                switch (p = l.charCodeAt(z)) {
                                case 123:
                                    m++;
                                    break;
                                case 125:
                                    m--;
                                    break;
                                case 47:
                                    switch (p = l.charCodeAt(z + 1)) {
                                    case 42:
                                    case 47:
                                        t: {
                                            for (L = z + 1; L < Y; ++L)
                                                switch (l.charCodeAt(L)) {
                                                case 47:
                                                    if (42 === p && 42 === l.charCodeAt(L - 1) && z + 2 !== L) {
                                                        z = L + 1;
                                                        break t
                                                    }
                                                    break;
                                                case 10:
                                                    if (47 === p) {
                                                        z = L + 1;
                                                        break t
                                                    }
                                                }
                                            z = L
                                        }
                                    }
                                    break;
                                case 91:
                                    p++;
                                case 40:
                                    p++;
                                case 34:
                                case 39:
                                    for (; z++ < Y && l.charCodeAt(z) !== p; )
                                        ;
                                }
                                if (0 === m)
                                    break;
                                z++
                            }
                            if (m = l.substring(V, z),
                            0 === h && (h = (F = F.replace(u, "").trim()).charCodeAt(0)),
                            64 === h) {
                                switch (0 < D && (F = F.replace(d, "")),
                                p = F.charCodeAt(1)) {
                                case 100:
                                case 109:
                                case 115:
                                case 45:
                                    D = r;
                                    break;
                                default:
                                    D = O
                                }
                                if (V = (m = n(r, D, m, p, f + 1)).length,
                                0 < M && (w = s(3, m, D = e(O, F, Z), r, _, T, V, p, f, c),
                                F = D.join(""),
                                void 0 !== w && 0 === (V = (m = w.trim()).length) && (p = 0,
                                m = "")),
                                0 < V)
                                    switch (p) {
                                    case 115:
                                        F = F.replace(x, a);
                                    case 100:
                                    case 109:
                                    case 45:
                                        m = F + "{" + m + "}";
                                        break;
                                    case 107:
                                        m = (F = F.replace(g, "$1 $2")) + "{" + m + "}",
                                        m = 1 === j || 2 === j && o("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                        break;
                                    default:
                                        m = F + m,
                                        112 === c && (H += m,
                                        m = "")
                                    }
                                else
                                    m = ""
                            } else
                                m = n(r, e(r, F, Z), m, c, f + 1);
                            N += m,
                            m = Z = D = L = h = 0,
                            F = "",
                            p = l.charCodeAt(++z);
                            break;
                        case 125:
                        case 59:
                            if (1 < (V = (F = (0 < D ? F.replace(d, "") : F).trim()).length))
                                switch (0 === L && (h = F.charCodeAt(0),
                                45 === h || 96 < h && 123 > h) && (V = (F = F.replace(" ", ":")).length),
                                0 < M && void 0 !== (w = s(1, F, r, t, _, T, H.length, c, f, c)) && 0 === (V = (F = w.trim()).length) && (F = "\0\0"),
                                h = F.charCodeAt(0),
                                p = F.charCodeAt(1),
                                h) {
                                case 0:
                                    break;
                                case 64:
                                    if (105 === p || 99 === p) {
                                        U += F + l.charAt(z);
                                        break
                                    }
                                default:
                                    58 !== F.charCodeAt(V - 1) && (H += i(F, h, p, F.charCodeAt(2)))
                                }
                            Z = D = L = h = 0,
                            F = "",
                            p = l.charCodeAt(++z)
                        }
                    }
                    switch (p) {
                    case 13:
                    case 10:
                        47 === S ? S = 0 : 0 === 1 + h && 107 !== c && 0 < F.length && (D = 1,
                        F += "\0"),
                        0 < M * R && s(0, F, r, t, _, T, H.length, c, f, c),
                        T = 1,
                        _++;
                        break;
                    case 59:
                    case 125:
                        if (0 === S + E + C + k) {
                            T++;
                            break
                        }
                    default:
                        switch (T++,
                        v = l.charAt(z),
                        p) {
                        case 9:
                        case 32:
                            if (0 === E + k + S)
                                switch (A) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    v = "";
                                    break;
                                default:
                                    32 !== p && (v = " ")
                                }
                            break;
                        case 0:
                            v = "\\0";
                            break;
                        case 12:
                            v = "\\f";
                            break;
                        case 11:
                            v = "\\v";
                            break;
                        case 38:
                            0 === E + S + k && (D = Z = 1,
                            v = "\f" + v);
                            break;
                        case 108:
                            if (0 === E + S + k + P && 0 < L)
                                switch (z - L) {
                                case 2:
                                    112 === A && 58 === l.charCodeAt(z - 3) && (P = A);
                                case 8:
                                    111 === I && (P = I)
                                }
                            break;
                        case 58:
                            0 === E + S + k && (L = z);
                            break;
                        case 44:
                            0 === S + C + E + k && (D = 1,
                            v += "\r");
                            break;
                        case 34:
                        case 39:
                            0 === S && (E = E === p ? 0 : 0 === E ? p : E);
                            break;
                        case 91:
                            0 === E + S + C && k++;
                            break;
                        case 93:
                            0 === E + S + C && k--;
                            break;
                        case 41:
                            0 === E + S + k && C--;
                            break;
                        case 40:
                            if (0 === E + S + k) {
                                if (0 === h)
                                    if (2 * A + 3 * I === 533)
                                        ;
                                    else
                                        h = 1;
                                C++
                            }
                            break;
                        case 64:
                            0 === S + C + E + k + L + m && (m = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < E + k + C))
                                switch (S) {
                                case 0:
                                    switch (2 * p + 3 * l.charCodeAt(z + 1)) {
                                    case 235:
                                        S = 47;
                                        break;
                                    case 220:
                                        V = z,
                                        S = 42
                                    }
                                    break;
                                case 42:
                                    47 === p && 42 === A && V + 2 !== z && (33 === l.charCodeAt(V + 2) && (H += l.substring(V, z + 1)),
                                    v = "",
                                    S = 0)
                                }
                        }
                        0 === S && (F += v)
                    }
                    I = A,
                    A = p,
                    z++
                }
                if (0 < (V = H.length)) {
                    if (D = r,
                    0 < M && (void 0 !== (w = s(2, H, D, t, _, T, V, c, f, c)) && 0 === (H = w).length))
                        return U + H + N;
                    if (H = D.join(",") + "{" + H + "}",
                    0 !== j * P) {
                        switch (2 !== j || o(H, 2) || (P = 0),
                        P) {
                        case 111:
                            H = H.replace(b, ":-moz-$1") + H;
                            break;
                        case 112:
                            H = H.replace(y, "::-webkit-input-$1") + H.replace(y, "::-moz-$1") + H.replace(y, ":-ms-input-$1") + H
                        }
                        P = 0
                    }
                }
                return U + H + N
            }
            function e(t, n, e) {
                var i = n.trim().split(m);
                n = i;
                var o = i.length
                  , a = t.length;
                switch (a) {
                case 0:
                case 1:
                    var s = 0;
                    for (t = 0 === a ? "" : t[0] + " "; s < o; ++s)
                        n[s] = r(t, n[s], e).trim();
                    break;
                default:
                    var l = s = 0;
                    for (n = []; s < o; ++s)
                        for (var c = 0; c < a; ++c)
                            n[l++] = r(t[c] + " ", i[s], e).trim()
                }
                return n
            }
            function r(t, n, e) {
                var r = n.charCodeAt(0);
                switch (33 > r && (r = (n = n.trim()).charCodeAt(0)),
                r) {
                case 38:
                    return n.replace(v, "$1" + t.trim());
                case 58:
                    return t.trim() + n.replace(v, "$1" + t.trim());
                default:
                    if (0 < 1 * e && 0 < n.indexOf("\f"))
                        return n.replace(v, (58 === t.charCodeAt(0) ? "" : "$1") + t.trim())
                }
                return t + n
            }
            function i(t, n, e, r) {
                var a = t + ";"
                  , s = 2 * n + 3 * e + 4 * r;
                if (944 === s) {
                    t = a.indexOf(":", 9) + 1;
                    var l = a.substring(t, a.length - 1).trim();
                    return l = a.substring(0, t).trim() + l + ";",
                    1 === j || 2 === j && o(l, 1) ? "-webkit-" + l + l : l
                }
                if (0 === j || 2 === j && !o(a, 1))
                    return a;
                switch (s) {
                case 1015:
                    return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                case 951:
                    return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                case 963:
                    return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                case 1009:
                    if (100 !== a.charCodeAt(4))
                        break;
                case 969:
                case 942:
                    return "-webkit-" + a + a;
                case 978:
                    return "-webkit-" + a + "-moz-" + a + a;
                case 1019:
                case 983:
                    return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                case 883:
                    if (45 === a.charCodeAt(8))
                        return "-webkit-" + a + a;
                    if (0 < a.indexOf("image-set(", 11))
                        return a.replace(A, "$1-webkit-$2") + a;
                    break;
                case 932:
                    if (45 === a.charCodeAt(4))
                        switch (a.charCodeAt(5)) {
                        case 103:
                            return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                        case 115:
                            return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                        case 98:
                            return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                        }
                    return "-webkit-" + a + "-ms-" + a + a;
                case 964:
                    return "-webkit-" + a + "-ms-flex-" + a + a;
                case 1023:
                    if (99 !== a.charCodeAt(8))
                        break;
                    return "-webkit-box-pack" + (l = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + l + a;
                case 1005:
                    return h.test(a) ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a : a;
                case 1e3:
                    switch (n = (l = a.substring(13).trim()).indexOf("-") + 1,
                    l.charCodeAt(0) + l.charCodeAt(n)) {
                    case 226:
                        l = a.replace(w, "tb");
                        break;
                    case 232:
                        l = a.replace(w, "tb-rl");
                        break;
                    case 220:
                        l = a.replace(w, "lr");
                        break;
                    default:
                        return a
                    }
                    return "-webkit-" + a + "-ms-" + l + a;
                case 1017:
                    if (-1 === a.indexOf("sticky", 9))
                        break;
                case 975:
                    switch (n = (a = t).length - 10,
                    s = (l = (33 === a.charCodeAt(n) ? a.substring(0, n) : a).substring(t.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                    case 203:
                        if (111 > l.charCodeAt(8))
                            break;
                    case 115:
                        a = a.replace(l, "-webkit-" + l) + ";" + a;
                        break;
                    case 207:
                    case 102:
                        a = a.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + a.replace(l, "-webkit-" + l) + ";" + a.replace(l, "-ms-" + l + "box") + ";" + a
                    }
                    return a + ";";
                case 938:
                    if (45 === a.charCodeAt(5))
                        switch (a.charCodeAt(6)) {
                        case 105:
                            return l = a.replace("-items", ""),
                            "-webkit-" + a + "-webkit-box-" + l + "-ms-flex-" + l + a;
                        case 115:
                            return "-webkit-" + a + "-ms-flex-item-" + a.replace(S, "") + a;
                        default:
                            return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(S, "") + a
                        }
                    break;
                case 973:
                case 989:
                    if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
                        break;
                case 931:
                case 953:
                    if (!0 === E.test(t))
                        return 115 === (l = t.substring(t.indexOf(":") + 1)).charCodeAt(0) ? i(t.replace("stretch", "fill-available"), n, e, r).replace(":fill-available", ":stretch") : a.replace(l, "-webkit-" + l) + a.replace(l, "-moz-" + l.replace("fill-", "")) + a;
                    break;
                case 962:
                    if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a,
                    211 === e + r && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
                        return a.substring(0, a.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + a
                }
                return a
            }
            function o(t, n) {
                var e = t.indexOf(1 === n ? ":" : "{")
                  , r = t.substring(0, 3 !== n ? e : 10);
                return e = t.substring(e + 1, t.length - 1),
                L(2 !== n ? r : r.replace(C, "$1"), e, n)
            }
            function a(t, n) {
                var e = i(n, n.charCodeAt(0), n.charCodeAt(1), n.charCodeAt(2));
                return e !== n + ";" ? e.replace(k, " or ($1)").substring(4) : "(" + n + ")"
            }
            function s(t, n, e, r, i, o, a, s, l, u) {
                for (var d, f = 0, h = n; f < M; ++f)
                    switch (d = I[f].call(c, t, h, e, r, i, o, a, s, l, u)) {
                    case void 0:
                    case !1:
                    case !0:
                    case null:
                        break;
                    default:
                        h = d
                    }
                if (h !== n)
                    return h
            }
            function l(t) {
                return void 0 !== (t = t.prefix) && (L = null,
                t ? "function" !== typeof t ? j = 1 : (j = 2,
                L = t) : j = 0),
                l
            }
            function c(t, e) {
                var r = t;
                if (33 > r.charCodeAt(0) && (r = r.trim()),
                r = [r],
                0 < M) {
                    var i = s(-1, e, r, r, _, T, 0, 0, 0, 0);
                    void 0 !== i && "string" === typeof i && (e = i)
                }
                var o = n(O, r, e, 0, 0);
                return 0 < M && (void 0 !== (i = s(-2, o, r, r, _, T, o.length, 0, 0, 0)) && (o = i)),
                "",
                P = 0,
                T = _ = 1,
                o
            }
            var u = /^\0+/g
              , d = /[\0\r\f]/g
              , f = /: */g
              , h = /zoo|gra/
              , p = /([,: ])(transform)/g
              , m = /,\r+?/g
              , v = /([\t\r\n ])*\f?&/g
              , g = /@(k\w+)\s*(\S*)\s*/
              , y = /::(place)/g
              , b = /:(read-only)/g
              , w = /[svh]\w+-[tblr]{2}/
              , x = /\(\s*(.*)\s*\)/g
              , k = /([\s\S]*?);/g
              , S = /-self|flex-/g
              , C = /[^]*?(:[rp][el]a[\w-]+)[^]*/
              , E = /stretch|:\s*\w+\-(?:conte|avail)/
              , A = /([^-])(image-set\()/
              , T = 1
              , _ = 1
              , P = 0
              , j = 1
              , O = []
              , I = []
              , M = 0
              , L = null
              , R = 0;
            return c.use = function t(n) {
                switch (n) {
                case void 0:
                case null:
                    M = I.length = 0;
                    break;
                default:
                    if ("function" === typeof n)
                        I[M++] = n;
                    else if ("object" === typeof n)
                        for (var e = 0, r = n.length; e < r; ++e)
                            t(n[e]);
                    else
                        R = 0 | !!n
                }
                return t
            }
            ,
            c.set = l,
            void 0 !== t && l(t),
            c
        }
          , l = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        };
        function c(t) {
            var n = Object.create(null);
            return function(e) {
                return void 0 === n[e] && (n[e] = t(e)),
                n[e]
            }
        }
        var u = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
          , d = c((function(t) {
            return u.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91
        }
        ))
          , f = e(8679)
          , h = e.n(f)
          , p = e(3454);
        function m() {
            return (m = Object.assign || function(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var v = function(t, n) {
            for (var e = [t[0]], r = 0, i = n.length; r < i; r += 1)
                e.push(n[r], t[r + 1]);
            return e
        }
          , g = function(t) {
            return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0,
            r.typeOf)(t)
        }
          , y = Object.freeze([])
          , b = Object.freeze({});
        function w(t) {
            return "function" == typeof t
        }
        function x(t) {
            return t.displayName || t.name || "Component"
        }
        function k(t) {
            return t && "string" == typeof t.styledComponentId
        }
        var S = "undefined" != typeof p && void 0 !== p.env && (p.env.REACT_APP_SC_ATTR || p.env.SC_ATTR) || "data-styled"
          , C = "5.3.11"
          , E = "undefined" != typeof window && "HTMLElement"in window
          , A = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof p && void 0 !== p.env && (void 0 !== p.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== p.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== p.env.REACT_APP_SC_DISABLE_SPEEDY && p.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== p.env.SC_DISABLE_SPEEDY && "" !== p.env.SC_DISABLE_SPEEDY && ("false" !== p.env.SC_DISABLE_SPEEDY && p.env.SC_DISABLE_SPEEDY)))
          , T = {};
        function _(t) {
            for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                e[r - 1] = arguments[r];
            throw new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (e.length > 0 ? " Args: " + e.join(", ") : ""))
        }
        var P = function() {
            function t(t) {
                this.groupSizes = new Uint32Array(512),
                this.length = 512,
                this.tag = t
            }
            var n = t.prototype;
            return n.indexOfGroup = function(t) {
                for (var n = 0, e = 0; e < t; e++)
                    n += this.groupSizes[e];
                return n
            }
            ,
            n.insertRules = function(t, n) {
                if (t >= this.groupSizes.length) {
                    for (var e = this.groupSizes, r = e.length, i = r; t >= i; )
                        (i <<= 1) < 0 && _(16, "" + t);
                    this.groupSizes = new Uint32Array(i),
                    this.groupSizes.set(e),
                    this.length = i;
                    for (var o = r; o < i; o++)
                        this.groupSizes[o] = 0
                }
                for (var a = this.indexOfGroup(t + 1), s = 0, l = n.length; s < l; s++)
                    this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++,
                    a++)
            }
            ,
            n.clearGroup = function(t) {
                if (t < this.length) {
                    var n = this.groupSizes[t]
                      , e = this.indexOfGroup(t)
                      , r = e + n;
                    this.groupSizes[t] = 0;
                    for (var i = e; i < r; i++)
                        this.tag.deleteRule(e)
                }
            }
            ,
            n.getGroup = function(t) {
                var n = "";
                if (t >= this.length || 0 === this.groupSizes[t])
                    return n;
                for (var e = this.groupSizes[t], r = this.indexOfGroup(t), i = r + e, o = r; o < i; o++)
                    n += this.tag.getRule(o) + "/*!sc*/\n";
                return n
            }
            ,
            t
        }()
          , j = new Map
          , O = new Map
          , I = 1
          , M = function(t) {
            if (j.has(t))
                return j.get(t);
            for (; O.has(I); )
                I++;
            var n = I++;
            return j.set(t, n),
            O.set(n, t),
            n
        }
          , L = function(t) {
            return O.get(t)
        }
          , R = function(t, n) {
            n >= I && (I = n + 1),
            j.set(t, n),
            O.set(n, t)
        }
          , z = "style[" + S + '][data-styled-version="5.3.11"]'
          , D = new RegExp("^" + S + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
          , Z = function(t, n, e) {
            for (var r, i = e.split(","), o = 0, a = i.length; o < a; o++)
                (r = i[o]) && t.registerName(n, r)
        }
          , V = function(t, n) {
            for (var e = (n.textContent || "").split("/*!sc*/\n"), r = [], i = 0, o = e.length; i < o; i++) {
                var a = e[i].trim();
                if (a) {
                    var s = a.match(D);
                    if (s) {
                        var l = 0 | parseInt(s[1], 10)
                          , c = s[2];
                        0 !== l && (R(c, l),
                        Z(t, c, s[3]),
                        t.getTag().insertRules(l, r)),
                        r.length = 0
                    } else
                        r.push(a)
                }
            }
        }
          , B = function() {
            return e.nc
        }
          , Y = function(t) {
            var n = document.head
              , e = t || n
              , r = document.createElement("style")
              , i = function(t) {
                for (var n = t.childNodes, e = n.length; e >= 0; e--) {
                    var r = n[e];
                    if (r && 1 === r.nodeType && r.hasAttribute(S))
                        return r
                }
            }(e)
              , o = void 0 !== i ? i.nextSibling : null;
            r.setAttribute(S, "active"),
            r.setAttribute("data-styled-version", "5.3.11");
            var a = B();
            return a && r.setAttribute("nonce", a),
            e.insertBefore(r, o),
            r
        }
          , F = function() {
            function t(t) {
                var n = this.element = Y(t);
                n.appendChild(document.createTextNode("")),
                this.sheet = function(t) {
                    if (t.sheet)
                        return t.sheet;
                    for (var n = document.styleSheets, e = 0, r = n.length; e < r; e++) {
                        var i = n[e];
                        if (i.ownerNode === t)
                            return i
                    }
                    _(17)
                }(n),
                this.length = 0
            }
            var n = t.prototype;
            return n.insertRule = function(t, n) {
                try {
                    return this.sheet.insertRule(n, t),
                    this.length++,
                    !0
                } catch (t) {
                    return !1
                }
            }
            ,
            n.deleteRule = function(t) {
                this.sheet.deleteRule(t),
                this.length--
            }
            ,
            n.getRule = function(t) {
                var n = this.sheet.cssRules[t];
                return void 0 !== n && "string" == typeof n.cssText ? n.cssText : ""
            }
            ,
            t
        }()
          , H = function() {
            function t(t) {
                var n = this.element = Y(t);
                this.nodes = n.childNodes,
                this.length = 0
            }
            var n = t.prototype;
            return n.insertRule = function(t, n) {
                if (t <= this.length && t >= 0) {
                    var e = document.createTextNode(n)
                      , r = this.nodes[t];
                    return this.element.insertBefore(e, r || null),
                    this.length++,
                    !0
                }
                return !1
            }
            ,
            n.deleteRule = function(t) {
                this.element.removeChild(this.nodes[t]),
                this.length--
            }
            ,
            n.getRule = function(t) {
                return t < this.length ? this.nodes[t].textContent : ""
            }
            ,
            t
        }()
          , N = function() {
            function t(t) {
                this.rules = [],
                this.length = 0
            }
            var n = t.prototype;
            return n.insertRule = function(t, n) {
                return t <= this.length && (this.rules.splice(t, 0, n),
                this.length++,
                !0)
            }
            ,
            n.deleteRule = function(t) {
                this.rules.splice(t, 1),
                this.length--
            }
            ,
            n.getRule = function(t) {
                return t < this.length ? this.rules[t] : ""
            }
            ,
            t
        }()
          , U = E
          , W = {
            isServer: !E,
            useCSSOMInjection: !A
        }
          , X = function() {
            function t(t, n, e) {
                void 0 === t && (t = b),
                void 0 === n && (n = {}),
                this.options = m({}, W, {}, t),
                this.gs = n,
                this.names = new Map(e),
                this.server = !!t.isServer,
                !this.server && E && U && (U = !1,
                function(t) {
                    for (var n = document.querySelectorAll(z), e = 0, r = n.length; e < r; e++) {
                        var i = n[e];
                        i && "active" !== i.getAttribute(S) && (V(t, i),
                        i.parentNode && i.parentNode.removeChild(i))
                    }
                }(this))
            }
            t.registerId = function(t) {
                return M(t)
            }
            ;
            var n = t.prototype;
            return n.reconstructWithOptions = function(n, e) {
                return void 0 === e && (e = !0),
                new t(m({}, this.options, {}, n),this.gs,e && this.names || void 0)
            }
            ,
            n.allocateGSInstance = function(t) {
                return this.gs[t] = (this.gs[t] || 0) + 1
            }
            ,
            n.getTag = function() {
                return this.tag || (this.tag = (e = (n = this.options).isServer,
                r = n.useCSSOMInjection,
                i = n.target,
                t = e ? new N(i) : r ? new F(i) : new H(i),
                new P(t)));
                var t, n, e, r, i
            }
            ,
            n.hasNameForId = function(t, n) {
                return this.names.has(t) && this.names.get(t).has(n)
            }
            ,
            n.registerName = function(t, n) {
                if (M(t),
                this.names.has(t))
                    this.names.get(t).add(n);
                else {
                    var e = new Set;
                    e.add(n),
                    this.names.set(t, e)
                }
            }
            ,
            n.insertRules = function(t, n, e) {
                this.registerName(t, n),
                this.getTag().insertRules(M(t), e)
            }
            ,
            n.clearNames = function(t) {
                this.names.has(t) && this.names.get(t).clear()
            }
            ,
            n.clearRules = function(t) {
                this.getTag().clearGroup(M(t)),
                this.clearNames(t)
            }
            ,
            n.clearTag = function() {
                this.tag = void 0
            }
            ,
            n.toString = function() {
                return function(t) {
                    for (var n = t.getTag(), e = n.length, r = "", i = 0; i < e; i++) {
                        var o = L(i);
                        if (void 0 !== o) {
                            var a = t.names.get(o)
                              , s = n.getGroup(i);
                            if (a && s && a.size) {
                                var l = S + ".g" + i + '[id="' + o + '"]'
                                  , c = "";
                                void 0 !== a && a.forEach((function(t) {
                                    t.length > 0 && (c += t + ",")
                                }
                                )),
                                r += "" + s + l + '{content:"' + c + '"}/*!sc*/\n'
                            }
                        }
                    }
                    return r
                }(this)
            }
            ,
            t
        }()
          , q = /(a)(d)/gi
          , $ = function(t) {
            return String.fromCharCode(t + (t > 25 ? 39 : 97))
        };
        function G(t) {
            var n, e = "";
            for (n = Math.abs(t); n > 52; n = n / 52 | 0)
                e = $(n % 52) + e;
            return ($(n % 52) + e).replace(q, "$1-$2")
        }
        var K = function(t, n) {
            for (var e = n.length; e; )
                t = 33 * t ^ n.charCodeAt(--e);
            return t
        }
          , J = function(t) {
            return K(5381, t)
        };
        function Q(t) {
            for (var n = 0; n < t.length; n += 1) {
                var e = t[n];
                if (w(e) && !k(e))
                    return !1
            }
            return !0
        }
        var tt = J("5.3.11")
          , nt = function() {
            function t(t, n, e) {
                this.rules = t,
                this.staticRulesId = "",
                this.isStatic = (void 0 === e || e.isStatic) && Q(t),
                this.componentId = n,
                this.baseHash = K(tt, n),
                this.baseStyle = e,
                X.registerId(n)
            }
            return t.prototype.generateAndInjectStyles = function(t, n, e) {
                var r = this.componentId
                  , i = [];
                if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, e)),
                this.isStatic && !e.hash)
                    if (this.staticRulesId && n.hasNameForId(r, this.staticRulesId))
                        i.push(this.staticRulesId);
                    else {
                        var o = wt(this.rules, t, n, e).join("")
                          , a = G(K(this.baseHash, o) >>> 0);
                        if (!n.hasNameForId(r, a)) {
                            var s = e(o, "." + a, void 0, r);
                            n.insertRules(r, a, s)
                        }
                        i.push(a),
                        this.staticRulesId = a
                    }
                else {
                    for (var l = this.rules.length, c = K(this.baseHash, e.hash), u = "", d = 0; d < l; d++) {
                        var f = this.rules[d];
                        if ("string" == typeof f)
                            u += f;
                        else if (f) {
                            var h = wt(f, t, n, e)
                              , p = Array.isArray(h) ? h.join("") : h;
                            c = K(c, p + d),
                            u += p
                        }
                    }
                    if (u) {
                        var m = G(c >>> 0);
                        if (!n.hasNameForId(r, m)) {
                            var v = e(u, "." + m, void 0, r);
                            n.insertRules(r, m, v)
                        }
                        i.push(m)
                    }
                }
                return i.join(" ")
            }
            ,
            t
        }()
          , et = /^\s*\/\/.*$/gm
          , rt = [":", "[", ".", "#"];
        function it(t) {
            var n, e, r, i, o = void 0 === t ? b : t, a = o.options, l = void 0 === a ? b : a, c = o.plugins, u = void 0 === c ? y : c, d = new s(l), f = [], h = function(t) {
                function n(n) {
                    if (n)
                        try {
                            t(n + "}")
                        } catch (t) {}
                }
                return function(e, r, i, o, a, s, l, c, u, d) {
                    switch (e) {
                    case 1:
                        if (0 === u && 64 === r.charCodeAt(0))
                            return t(r + ";"),
                            "";
                        break;
                    case 2:
                        if (0 === c)
                            return r + "/*|*/";
                        break;
                    case 3:
                        switch (c) {
                        case 102:
                        case 112:
                            return t(i[0] + r),
                            "";
                        default:
                            return r + (0 === d ? "/*|*/" : "")
                        }
                    case -2:
                        r.split("/*|*/}").forEach(n)
                    }
                }
            }((function(t) {
                f.push(t)
            }
            )), p = function(t, r, o) {
                return 0 === r && -1 !== rt.indexOf(o[e.length]) || o.match(i) ? t : "." + n
            };
            function m(t, o, a, s) {
                void 0 === s && (s = "&");
                var l = t.replace(et, "")
                  , c = o && a ? a + " " + o + " { " + l + " }" : l;
                return n = s,
                e = o,
                r = new RegExp("\\" + e + "\\b","g"),
                i = new RegExp("(\\" + e + "\\b){2,}"),
                d(a || !o ? "" : o, c)
            }
            return d.use([].concat(u, [function(t, n, i) {
                2 === t && i.length && i[0].lastIndexOf(e) > 0 && (i[0] = i[0].replace(r, p))
            }
            , h, function(t) {
                if (-2 === t) {
                    var n = f;
                    return f = [],
                    n
                }
            }
            ])),
            m.hash = u.length ? u.reduce((function(t, n) {
                return n.name || _(15),
                K(t, n.name)
            }
            ), 5381).toString() : "",
            m
        }
        var ot = i.createContext()
          , at = ot.Consumer
          , st = i.createContext()
          , lt = (st.Consumer,
        new X)
          , ct = it();
        function ut() {
            return (0,
            i.useContext)(ot) || lt
        }
        function dt() {
            return (0,
            i.useContext)(st) || ct
        }
        function ft(t) {
            var n = (0,
            i.useState)(t.stylisPlugins)
              , e = n[0]
              , r = n[1]
              , o = ut()
              , s = (0,
            i.useMemo)((function() {
                var n = o;
                return t.sheet ? n = t.sheet : t.target && (n = n.reconstructWithOptions({
                    target: t.target
                }, !1)),
                t.disableCSSOMInjection && (n = n.reconstructWithOptions({
                    useCSSOMInjection: !1
                })),
                n
            }
            ), [t.disableCSSOMInjection, t.sheet, t.target])
              , l = (0,
            i.useMemo)((function() {
                return it({
                    options: {
                        prefix: !t.disableVendorPrefixes
                    },
                    plugins: e
                })
            }
            ), [t.disableVendorPrefixes, e]);
            return (0,
            i.useEffect)((function() {
                a()(e, t.stylisPlugins) || r(t.stylisPlugins)
            }
            ), [t.stylisPlugins]),
            i.createElement(ot.Provider, {
                value: s
            }, i.createElement(st.Provider, {
                value: l
            }, t.children))
        }
        var ht = function() {
            function t(t, n) {
                var e = this;
                this.inject = function(t, n) {
                    void 0 === n && (n = ct);
                    var r = e.name + n.hash;
                    t.hasNameForId(e.id, r) || t.insertRules(e.id, r, n(e.rules, r, "@keyframes"))
                }
                ,
                this.toString = function() {
                    return _(12, String(e.name))
                }
                ,
                this.name = t,
                this.id = "sc-keyframes-" + t,
                this.rules = n
            }
            return t.prototype.getName = function(t) {
                return void 0 === t && (t = ct),
                this.name + t.hash
            }
            ,
            t
        }()
          , pt = /([A-Z])/
          , mt = /([A-Z])/g
          , vt = /^ms-/
          , gt = function(t) {
            return "-" + t.toLowerCase()
        };
        function yt(t) {
            return pt.test(t) ? t.replace(mt, gt).replace(vt, "-ms-") : t
        }
        var bt = function(t) {
            return null == t || !1 === t || "" === t
        };
        function wt(t, n, e, r) {
            if (Array.isArray(t)) {
                for (var i, o = [], a = 0, s = t.length; a < s; a += 1)
                    "" !== (i = wt(t[a], n, e, r)) && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
                return o
            }
            return bt(t) ? "" : k(t) ? "." + t.styledComponentId : w(t) ? "function" != typeof (c = t) || c.prototype && c.prototype.isReactComponent || !n ? t : wt(t(n), n, e, r) : t instanceof ht ? e ? (t.inject(e, r),
            t.getName(r)) : t : g(t) ? function t(n, e) {
                var r, i, o = [];
                for (var a in n)
                    n.hasOwnProperty(a) && !bt(n[a]) && (Array.isArray(n[a]) && n[a].isCss || w(n[a]) ? o.push(yt(a) + ":", n[a], ";") : g(n[a]) ? o.push.apply(o, t(n[a], a)) : o.push(yt(a) + ": " + (r = a,
                    (null == (i = n[a]) || "boolean" == typeof i || "" === i ? "" : "number" != typeof i || 0 === i || r in l || r.startsWith("--") ? String(i).trim() : i + "px") + ";")));
                return e ? [e + " {"].concat(o, ["}"]) : o
            }(t) : t.toString();
            var c
        }
        var xt = function(t) {
            return Array.isArray(t) && (t.isCss = !0),
            t
        };
        function kt(t) {
            for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                e[r - 1] = arguments[r];
            return w(t) || g(t) ? xt(wt(v(y, [t].concat(e)))) : 0 === e.length && 1 === t.length && "string" == typeof t[0] ? t : xt(wt(v(t, e)))
        }
        new Set;
        var St = function(t, n, e) {
            return void 0 === e && (e = b),
            t.theme !== e.theme && t.theme || n || e.theme
        }
          , Ct = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
          , Et = /(^-|-$)/g;
        function At(t) {
            return t.replace(Ct, "-").replace(Et, "")
        }
        var Tt = function(t) {
            return G(J(t) >>> 0)
        };
        function _t(t) {
            return "string" == typeof t && !0
        }
        var Pt = function(t) {
            return "function" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)
        }
          , jt = function(t) {
            return "__proto__" !== t && "constructor" !== t && "prototype" !== t
        };
        function Ot(t, n, e) {
            var r = t[e];
            Pt(n) && Pt(r) ? It(r, n) : t[e] = n
        }
        function It(t) {
            for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                e[r - 1] = arguments[r];
            for (var i = 0, o = e; i < o.length; i++) {
                var a = o[i];
                if (Pt(a))
                    for (var s in a)
                        jt(s) && Ot(t, a[s], s)
            }
            return t
        }
        var Mt = i.createContext()
          , Lt = Mt.Consumer;
        function Rt(t) {
            var n = (0,
            i.useContext)(Mt)
              , e = (0,
            i.useMemo)((function() {
                return function(t, n) {
                    return t ? w(t) ? t(n) : Array.isArray(t) || "object" != typeof t ? _(8) : n ? m({}, n, {}, t) : t : _(14)
                }(t.theme, n)
            }
            ), [t.theme, n]);
            return t.children ? i.createElement(Mt.Provider, {
                value: e
            }, t.children) : null
        }
        var zt = {};
        function Dt(t, n, e) {
            var r = k(t)
              , o = !_t(t)
              , a = n.attrs
              , s = void 0 === a ? y : a
              , l = n.componentId
              , c = void 0 === l ? function(t, n) {
                var e = "string" != typeof t ? "sc" : At(t);
                zt[e] = (zt[e] || 0) + 1;
                var r = e + "-" + Tt("5.3.11" + e + zt[e]);
                return n ? n + "-" + r : r
            }(n.displayName, n.parentComponentId) : l
              , u = n.displayName
              , f = void 0 === u ? function(t) {
                return _t(t) ? "styled." + t : "Styled(" + x(t) + ")"
            }(t) : u
              , p = n.displayName && n.componentId ? At(n.displayName) + "-" + n.componentId : n.componentId || c
              , v = r && t.attrs ? Array.prototype.concat(t.attrs, s).filter(Boolean) : s
              , g = n.shouldForwardProp;
            r && t.shouldForwardProp && (g = n.shouldForwardProp ? function(e, r, i) {
                return t.shouldForwardProp(e, r, i) && n.shouldForwardProp(e, r, i)
            }
            : t.shouldForwardProp);
            var S, C = new nt(e,p,r ? t.componentStyle : void 0), E = C.isStatic && 0 === s.length, A = function(t, n) {
                return function(t, n, e, r) {
                    var o = t.attrs
                      , a = t.componentStyle
                      , s = t.defaultProps
                      , l = t.foldedComponentIds
                      , c = t.shouldForwardProp
                      , u = t.styledComponentId
                      , f = t.target
                      , h = function(t, n, e) {
                        void 0 === t && (t = b);
                        var r = m({}, n, {
                            theme: t
                        })
                          , i = {};
                        return e.forEach((function(t) {
                            var n, e, o, a = t;
                            for (n in w(a) && (a = a(r)),
                            a)
                                r[n] = i[n] = "className" === n ? (e = i[n],
                                o = a[n],
                                e && o ? e + " " + o : e || o) : a[n]
                        }
                        )),
                        [r, i]
                    }(St(n, (0,
                    i.useContext)(Mt), s) || b, n, o)
                      , p = h[0]
                      , v = h[1]
                      , g = function(t, n, e, r) {
                        var i = ut()
                          , o = dt();
                        return n ? t.generateAndInjectStyles(b, i, o) : t.generateAndInjectStyles(e, i, o)
                    }(a, r, p)
                      , y = e
                      , x = v.$as || n.$as || v.as || n.as || f
                      , k = _t(x)
                      , S = v !== n ? m({}, n, {}, v) : n
                      , C = {};
                    for (var E in S)
                        "$" !== E[0] && "as" !== E && ("forwardedAs" === E ? C.as = S[E] : (c ? c(E, d, x) : !k || d(E)) && (C[E] = S[E]));
                    return n.style && v.style !== n.style && (C.style = m({}, n.style, {}, v.style)),
                    C.className = Array.prototype.concat(l, u, g !== u ? g : null, n.className, v.className).filter(Boolean).join(" "),
                    C.ref = y,
                    (0,
                    i.createElement)(x, C)
                }(S, t, n, E)
            };
            return A.displayName = f,
            (S = i.forwardRef(A)).attrs = v,
            S.componentStyle = C,
            S.displayName = f,
            S.shouldForwardProp = g,
            S.foldedComponentIds = r ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : y,
            S.styledComponentId = p,
            S.target = r ? t.target : t,
            S.withComponent = function(t) {
                var r = n.componentId
                  , i = function(t, n) {
                    if (null == t)
                        return {};
                    var e, r, i = {}, o = Object.keys(t);
                    for (r = 0; r < o.length; r++)
                        e = o[r],
                        n.indexOf(e) >= 0 || (i[e] = t[e]);
                    return i
                }(n, ["componentId"])
                  , o = r && r + "-" + (_t(t) ? t : At(x(t)));
                return Dt(t, m({}, i, {
                    attrs: v,
                    componentId: o
                }), e)
            }
            ,
            Object.defineProperty(S, "defaultProps", {
                get: function() {
                    return this._foldedDefaultProps
                },
                set: function(n) {
                    this._foldedDefaultProps = r ? It({}, t.defaultProps, n) : n
                }
            }),
            Object.defineProperty(S, "toString", {
                value: function() {
                    return "." + S.styledComponentId
                }
            }),
            o && h()(S, t, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0
            }),
            S
        }
        var Zt = function(t) {
            return function t(n, e, i) {
                if (void 0 === i && (i = b),
                !(0,
                r.isValidElementType)(e))
                    return _(1, String(e));
                var o = function() {
                    return n(e, i, kt.apply(void 0, arguments))
                };
                return o.withConfig = function(r) {
                    return t(n, e, m({}, i, {}, r))
                }
                ,
                o.attrs = function(r) {
                    return t(n, e, m({}, i, {
                        attrs: Array.prototype.concat(i.attrs, r).filter(Boolean)
                    }))
                }
                ,
                o
            }(Dt, t)
        };
        ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(t) {
            Zt[t] = Zt(t)
        }
        ));
        var Vt = function() {
            function t(t, n) {
                this.rules = t,
                this.componentId = n,
                this.isStatic = Q(t),
                X.registerId(this.componentId + 1)
            }
            var n = t.prototype;
            return n.createStyles = function(t, n, e, r) {
                var i = r(wt(this.rules, n, e, r).join(""), "")
                  , o = this.componentId + t;
                e.insertRules(o, o, i)
            }
            ,
            n.removeStyles = function(t, n) {
                n.clearRules(this.componentId + t)
            }
            ,
            n.renderStyles = function(t, n, e, r) {
                t > 2 && X.registerId(this.componentId + t),
                this.removeStyles(t, e),
                this.createStyles(t, n, e, r)
            }
            ,
            t
        }();
        function Bt(t) {
            for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                e[r - 1] = arguments[r];
            var o = kt.apply(void 0, [t].concat(e))
              , a = "sc-global-" + Tt(JSON.stringify(o))
              , s = new Vt(o,a);
            function l(t) {
                var n = ut()
                  , e = dt()
                  , r = (0,
                i.useContext)(Mt)
                  , o = (0,
                i.useRef)(n.allocateGSInstance(a)).current;
                return n.server && c(o, t, n, r, e),
                (0,
                i.useLayoutEffect)((function() {
                    if (!n.server)
                        return c(o, t, n, r, e),
                        function() {
                            return s.removeStyles(o, n)
                        }
                }
                ), [o, t, n, r, e]),
                null
            }
            function c(t, n, e, r, i) {
                if (s.isStatic)
                    s.renderStyles(t, T, e, i);
                else {
                    var o = m({}, n, {
                        theme: St(n, r, l.defaultProps)
                    });
                    s.renderStyles(t, o, e, i)
                }
            }
            return i.memo(l)
        }
        function Yt(t) {
            for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                e[r - 1] = arguments[r];
            var i = kt.apply(void 0, [t].concat(e)).join("")
              , o = Tt(i);
            return new ht(o,i)
        }
        var Ft = function() {
            function t() {
                var t = this;
                this._emitSheetCSS = function() {
                    var n = t.instance.toString();
                    if (!n)
                        return "";
                    var e = B();
                    return "<style " + [e && 'nonce="' + e + '"', S + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + n + "</style>"
                }
                ,
                this.getStyleTags = function() {
                    return t.sealed ? _(2) : t._emitSheetCSS()
                }
                ,
                this.getStyleElement = function() {
                    var n;
                    if (t.sealed)
                        return _(2);
                    var e = ((n = {})[S] = "",
                    n["data-styled-version"] = "5.3.11",
                    n.dangerouslySetInnerHTML = {
                        __html: t.instance.toString()
                    },
                    n)
                      , r = B();
                    return r && (e.nonce = r),
                    [i.createElement("style", m({}, e, {
                        key: "sc-0-0"
                    }))]
                }
                ,
                this.seal = function() {
                    t.sealed = !0
                }
                ,
                this.instance = new X({
                    isServer: !0
                }),
                this.sealed = !1
            }
            var n = t.prototype;
            return n.collectStyles = function(t) {
                return this.sealed ? _(2) : i.createElement(ft, {
                    sheet: this.instance
                }, t)
            }
            ,
            n.interleaveWithNodeStream = function(t) {
                return _(3)
            }
            ,
            t
        }()
          , Ht = function(t) {
            var n = i.forwardRef((function(n, e) {
                var r = (0,
                i.useContext)(Mt)
                  , o = t.defaultProps
                  , a = St(n, r, o);
                return i.createElement(t, m({}, n, {
                    theme: a,
                    ref: e
                }))
            }
            ));
            return h()(n, t),
            n.displayName = "WithTheme(" + x(t) + ")",
            n
        }
          , Nt = function() {
            return (0,
            i.useContext)(Mt)
        }
          , Ut = {
            StyleSheet: X,
            masterSheet: lt
        }
          , Wt = Zt
    },
    7704: function(t, n, e) {
        "use strict";
        n.Fv = void 0;
        var r = e(4141)
          , i = (0,
        r.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);
        n.Fv = i,
        (0,
        r.createGlobalStyle)(i)
    },
    9428: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(8440);
        n.useDebounce = r.default;
        var i = e(3443);
        n.useDebouncedCallback = i.default;
        var o = e(8523);
        n.useThrottledCallback = o.default
    },
    8440: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(7294)
          , i = e(3443);
        function o(t, n) {
            return t === n
        }
        function a(t) {
            return "function" === typeof t ? function() {
                return t
            }
            : t
        }
        n.default = function(t, n, e) {
            var s = e && e.equalityFn || o
              , l = function(t) {
                var n = r.useState(a(t))
                  , e = n[0]
                  , i = n[1];
                return [e, r.useCallback((function(t) {
                    return i(a(t))
                }
                ), [])]
            }(t)
              , c = l[0]
              , u = l[1]
              , d = i.default(r.useCallback((function(t) {
                return u(t)
            }
            ), [u]), n, e)
              , f = r.useRef(t);
            return r.useEffect((function() {
                s(f.current, t) || (d(t),
                f.current = t)
            }
            ), [t, d, s]),
            [c, {
                cancel: d.cancel,
                isPending: d.isPending,
                flush: d.flush
            }]
        }
    },
    3443: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(7294);
        n.default = function(t, n, e) {
            var i = this
              , o = r.useRef(null)
              , a = r.useRef(0)
              , s = r.useRef(null)
              , l = r.useRef([])
              , c = r.useRef()
              , u = r.useRef()
              , d = r.useRef(t)
              , f = r.useRef(!0);
            d.current = t;
            var h = !n && 0 !== n && "undefined" !== typeof window;
            if ("function" !== typeof t)
                throw new TypeError("Expected a function");
            n = +n || 0;
            var p = !!(e = e || {}).leading
              , m = !("trailing"in e) || !!e.trailing
              , v = "maxWait"in e
              , g = v ? Math.max(+e.maxWait || 0, n) : null;
            r.useEffect((function() {
                return f.current = !0,
                function() {
                    f.current = !1
                }
            }
            ), []);
            var y = r.useMemo((function() {
                var t = function(t) {
                    var n = l.current
                      , e = c.current;
                    return l.current = c.current = null,
                    a.current = t,
                    u.current = d.current.apply(e, n)
                }
                  , e = function(t, n) {
                    h && cancelAnimationFrame(s.current),
                    s.current = h ? requestAnimationFrame(t) : setTimeout(t, n)
                }
                  , r = function(t) {
                    if (!f.current)
                        return !1;
                    var e = t - o.current
                      , r = t - a.current;
                    return !o.current || e >= n || e < 0 || v && r >= g
                }
                  , y = function(n) {
                    return s.current = null,
                    m && l.current ? t(n) : (l.current = c.current = null,
                    u.current)
                }
                  , b = function() {
                    var t = Date.now();
                    if (r(t))
                        return y(t);
                    if (f.current) {
                        var i = t - o.current
                          , s = t - a.current
                          , l = n - i
                          , c = v ? Math.min(l, g - s) : l;
                        e(b, c)
                    }
                }
                  , w = function() {
                    for (var d = [], h = 0; h < arguments.length; h++)
                        d[h] = arguments[h];
                    var m = Date.now()
                      , g = r(m);
                    if (l.current = d,
                    c.current = i,
                    o.current = m,
                    g) {
                        if (!s.current && f.current)
                            return a.current = o.current,
                            e(b, n),
                            p ? t(o.current) : u.current;
                        if (v)
                            return e(b, n),
                            t(o.current)
                    }
                    return s.current || e(b, n),
                    u.current
                };
                return w.cancel = function() {
                    s.current && (h ? cancelAnimationFrame(s.current) : clearTimeout(s.current)),
                    a.current = 0,
                    l.current = o.current = c.current = s.current = null
                }
                ,
                w.isPending = function() {
                    return !!s.current
                }
                ,
                w.flush = function() {
                    return s.current ? y(Date.now()) : u.current
                }
                ,
                w
            }
            ), [p, v, n, g, m, h]);
            return y
        }
    },
    8523: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(3443);
        n.default = function(t, n, e) {
            var i = void 0 === e ? {} : e
              , o = i.leading
              , a = void 0 === o || o
              , s = i.trailing
              , l = void 0 === s || s;
            return r.default(t, n, {
                maxWait: n,
                leading: a,
                trailing: l
            })
        }
    },
    6388: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e(7294);
        n.default = function(t) {
            void 0 === t && (t = {});
            var n = (0,
            r.useRef)(null)
              , e = t.onResize
              , i = (0,
            r.useRef)(void 0);
            i.current = e;
            var o = (0,
            r.useRef)()
              , a = t.ref || n
              , s = (0,
            r.useState)({
                width: void 0,
                height: void 0
            })
              , l = s[0]
              , c = s[1]
              , u = (0,
            r.useRef)({
                width: void 0,
                height: void 0
            });
            return (0,
            r.useEffect)((function() {
                o.current || (o.current = new ResizeObserver((function(t) {
                    if (Array.isArray(t) && t.length) {
                        var n = t[0]
                          , e = Math.round(n.contentRect.width)
                          , r = Math.round(n.contentRect.height);
                        if (u.current.width !== e || u.current.height !== r) {
                            var o = {
                                width: e,
                                height: r
                            };
                            i.current ? i.current(o) : (u.current.width = e,
                            u.current.height = r,
                            c(o))
                        }
                    }
                }
                )))
            }
            ), []),
            (0,
            r.useEffect)((function() {
                if ("object" === typeof a && null !== a && a.current instanceof Element) {
                    var t = a.current;
                    return o.current.observe(t),
                    function() {
                        return o.current.unobserve(t)
                    }
                }
            }
            ), [a]),
            (0,
            r.useMemo)((function() {
                return {
                    ref: a,
                    width: l.width,
                    height: l.height
                }
            }
            ), [a, l ? l.width : null, l ? l.height : null])
        }
    },
    7297: function(t, n, e) {
        "use strict";
        function r(t, n) {
            return n || (n = t.slice(0)),
            Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(n)
                }
            }))
        }
        e.d(n, {
            Z: function() {
                return r
            }
        })
    },
    5364: function(t, n, e) {
        "use strict";
        e.d(n, {
            p: function() {
                return r
            }
        });
        var r = (0,
        e(7294).createContext)({})
    },
    240: function(t, n, e) {
        "use strict";
        e.d(n, {
            O: function() {
                return r
            }
        });
        var r = (0,
        e(7294).createContext)(null)
    },
    2023: function(t, n, e) {
        "use strict";
        e.d(n, {
            E: function() {
                return ra
            }
        });
        var r = e(7582)
          , i = e(7294)
          , o = function(t) {
            return {
                isEnabled: function(n) {
                    return t.some((function(t) {
                        return !!n[t]
                    }
                    ))
                }
            }
        }
          , a = {
            measureLayout: o(["layout", "layoutId", "drag"]),
            animation: o(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: o(["exit"]),
            drag: o(["drag", "dragControls"]),
            focus: o(["whileFocus"]),
            hover: o(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: o(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: o(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: o(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
        var s = (0,
        i.createContext)({
            strict: !1
        })
          , l = Object.keys(a)
          , c = l.length;
        var u = (0,
        i.createContext)({
            transformPagePoint: function(t) {
                return t
            },
            isStatic: !1
        })
          , d = (0,
        i.createContext)({});
        var f = e(240)
          , h = "undefined" !== typeof window
          , p = h ? i.useLayoutEffect : i.useEffect;
        function m(t, n, e, r) {
            var o = (0,
            i.useContext)(s)
              , a = (0,
            i.useContext)(d).visualElement
              , l = (0,
            i.useContext)(f.O)
              , c = (0,
            i.useRef)(void 0);
            r || (r = o.renderer),
            !c.current && r && (c.current = r(t, {
                visualState: n,
                parent: a,
                props: e,
                presenceId: null === l || void 0 === l ? void 0 : l.id,
                blockInitialAnimation: !1 === (null === l || void 0 === l ? void 0 : l.initial)
            }));
            var u = c.current;
            return p((function() {
                null === u || void 0 === u || u.syncRender()
            }
            )),
            (0,
            i.useEffect)((function() {
                var t;
                null === (t = null === u || void 0 === u ? void 0 : u.animationState) || void 0 === t || t.animateChanges()
            }
            )),
            p((function() {
                return function() {
                    return null === u || void 0 === u ? void 0 : u.notifyUnmount()
                }
            }
            ), []),
            u
        }
        function v(t) {
            return "object" === typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function g(t) {
            return Array.isArray(t)
        }
        function y(t) {
            return "string" === typeof t || g(t)
        }
        function b(t, n, e, r, i) {
            var o;
            return void 0 === r && (r = {}),
            void 0 === i && (i = {}),
            "function" === typeof n && (n = n(null !== e && void 0 !== e ? e : t.custom, r, i)),
            "string" === typeof n && (n = null === (o = t.variants) || void 0 === o ? void 0 : o[n]),
            "function" === typeof n && (n = n(null !== e && void 0 !== e ? e : t.custom, r, i)),
            n
        }
        function w(t, n, e) {
            var r = t.getProps();
            return b(r, n, null !== e && void 0 !== e ? e : r.custom, function(t) {
                var n = {};
                return t.forEachValue((function(t, e) {
                    return n[e] = t.get()
                }
                )),
                n
            }(t), function(t) {
                var n = {};
                return t.forEachValue((function(t, e) {
                    return n[e] = t.getVelocity()
                }
                )),
                n
            }(t))
        }
        function x(t) {
            var n;
            return "function" === typeof (null === (n = t.animate) || void 0 === n ? void 0 : n.start) || y(t.initial) || y(t.animate) || y(t.whileHover) || y(t.whileDrag) || y(t.whileTap) || y(t.whileFocus) || y(t.exit)
        }
        function k(t) {
            return Boolean(x(t) || t.variants)
        }
        function S(t) {
            var n = function(t, n) {
                if (x(t)) {
                    var e = t.initial
                      , r = t.animate;
                    return {
                        initial: !1 === e || y(e) ? e : void 0,
                        animate: y(r) ? r : void 0
                    }
                }
                return !1 !== t.inherit ? n : {}
            }(t, (0,
            i.useContext)(d))
              , e = n.initial
              , r = n.animate;
            return (0,
            i.useMemo)((function() {
                return {
                    initial: e,
                    animate: r
                }
            }
            ), [C(e), C(r)])
        }
        function C(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var E = e(6681)
          , A = e(4735);
        const T = (t, n, e) => -e * t + e * n + t;
        function _(t, n) {
            return n ? t * (1e3 / n) : 0
        }
        function P(t, n) {
            -1 === t.indexOf(n) && t.push(n)
        }
        function j(t, n) {
            var e = t.indexOf(n);
            e > -1 && t.splice(e, 1)
        }
        var O = function() {
            function t() {
                this.subscriptions = []
            }
            return t.prototype.add = function(t) {
                var n = this;
                return P(this.subscriptions, t),
                function() {
                    return j(n.subscriptions, t)
                }
            }
            ,
            t.prototype.notify = function(t, n, e) {
                var r = this.subscriptions.length;
                if (r)
                    if (1 === r)
                        this.subscriptions[0](t, n, e);
                    else
                        for (var i = 0; i < r; i++) {
                            var o = this.subscriptions[i];
                            o && o(t, n, e)
                        }
            }
            ,
            t.prototype.getSize = function() {
                return this.subscriptions.length
            }
            ,
            t.prototype.clear = function() {
                this.subscriptions.length = 0
            }
            ,
            t
        }()
          , I = function() {
            function t(t) {
                var n, e = this;
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.updateSubscribers = new O,
                this.velocityUpdateSubscribers = new O,
                this.renderSubscribers = new O,
                this.canTrackVelocity = !1,
                this.updateAndNotify = function(t, n) {
                    void 0 === n && (n = !0),
                    e.prev = e.current,
                    e.current = t;
                    var r = (0,
                    A.$B)()
                      , i = r.delta
                      , o = r.timestamp;
                    e.lastUpdated !== o && (e.timeDelta = i,
                    e.lastUpdated = o,
                    A.ZP.postRender(e.scheduleVelocityCheck)),
                    e.prev !== e.current && e.updateSubscribers.notify(e.current),
                    e.velocityUpdateSubscribers.getSize() && e.velocityUpdateSubscribers.notify(e.getVelocity()),
                    n && e.renderSubscribers.notify(e.current)
                }
                ,
                this.scheduleVelocityCheck = function() {
                    return A.ZP.postRender(e.velocityCheck)
                }
                ,
                this.velocityCheck = function(t) {
                    t.timestamp !== e.lastUpdated && (e.prev = e.current,
                    e.velocityUpdateSubscribers.notify(e.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = (n = this.current,
                !isNaN(parseFloat(n)))
            }
            return t.prototype.onChange = function(t) {
                return this.updateSubscribers.add(t)
            }
            ,
            t.prototype.clearListeners = function() {
                this.updateSubscribers.clear()
            }
            ,
            t.prototype.onRenderRequest = function(t) {
                return t(this.get()),
                this.renderSubscribers.add(t)
            }
            ,
            t.prototype.attach = function(t) {
                this.passiveEffect = t
            }
            ,
            t.prototype.set = function(t, n) {
                void 0 === n && (n = !0),
                n && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, n)
            }
            ,
            t.prototype.get = function() {
                return this.current
            }
            ,
            t.prototype.getPrevious = function() {
                return this.prev
            }
            ,
            t.prototype.getVelocity = function() {
                return this.canTrackVelocity ? _(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            ,
            t.prototype.start = function(t) {
                var n = this;
                return this.stop(),
                new Promise((function(e) {
                    n.hasAnimated = !0,
                    n.stopAnimation = t(e)
                }
                )).then((function() {
                    return n.clearAnimation()
                }
                ))
            }
            ,
            t.prototype.stop = function() {
                this.stopAnimation && this.stopAnimation(),
                this.clearAnimation()
            }
            ,
            t.prototype.isAnimating = function() {
                return !!this.stopAnimation
            }
            ,
            t.prototype.clearAnimation = function() {
                this.stopAnimation = null
            }
            ,
            t.prototype.destroy = function() {
                this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }
            ,
            t
        }();
        function M(t) {
            return new I(t)
        }
        var L = function(t) {
            return Boolean(null !== t && "object" === typeof t && t.getVelocity)
        };
        const R = (t, n, e) => Math.min(Math.max(e, t), n)
          , z = .001;
        function D({duration: t=800, bounce: n=.25, velocity: e=0, mass: r=1}) {
            let i, o, a = 1 - n;
            a = R(.05, 1, a),
            t = R(.01, 10, t / 1e3),
            a < 1 ? (i = n => {
                const r = n * a
                  , i = r * t
                  , o = r - e
                  , s = Z(n, a)
                  , l = Math.exp(-i);
                return z - o / s * l
            }
            ,
            o = n => {
                const r = n * a * t
                  , o = r * e + e
                  , s = Math.pow(a, 2) * Math.pow(n, 2) * t
                  , l = Math.exp(-r)
                  , c = Z(Math.pow(n, 2), a);
                return (-i(n) + z > 0 ? -1 : 1) * ((o - s) * l) / c
            }
            ) : (i = n => Math.exp(-n * t) * ((n - e) * t + 1) - .001,
            o = n => Math.exp(-n * t) * (t * t * (e - n)));
            const s = function(t, n, e) {
                let r = e;
                for (let i = 1; i < 12; i++)
                    r -= t(r) / n(r);
                return r
            }(i, o, 5 / t);
            if (t *= 1e3,
            isNaN(s))
                return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                };
            {
                const n = Math.pow(s, 2) * r;
                return {
                    stiffness: n,
                    damping: 2 * a * Math.sqrt(r * n),
                    duration: t
                }
            }
        }
        function Z(t, n) {
            return t * Math.sqrt(1 - n * n)
        }
        const V = ["duration", "bounce"]
          , B = ["stiffness", "damping", "mass"];
        function Y(t, n) {
            return n.some((n => void 0 !== t[n]))
        }
        function F(t) {
            var {from: n=0, to: e=1, restSpeed: i=2, restDelta: o} = t
              , a = (0,
            r.__rest)(t, ["from", "to", "restSpeed", "restDelta"]);
            const s = {
                done: !1,
                value: n
            };
            let {stiffness: l, damping: c, mass: u, velocity: d, duration: f, isResolvedFromDuration: h} = function(t) {
                let n = Object.assign({
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1
                }, t);
                if (!Y(t, B) && Y(t, V)) {
                    const e = D(t);
                    n = Object.assign(Object.assign(Object.assign({}, n), e), {
                        velocity: 0,
                        mass: 1
                    }),
                    n.isResolvedFromDuration = !0
                }
                return n
            }(a)
              , p = H
              , m = H;
            function v() {
                const t = d ? -d / 1e3 : 0
                  , r = e - n
                  , i = c / (2 * Math.sqrt(l * u))
                  , a = Math.sqrt(l / u) / 1e3;
                if (void 0 === o && (o = Math.min(Math.abs(e - n) / 100, .4)),
                i < 1) {
                    const n = Z(a, i);
                    p = o => {
                        const s = Math.exp(-i * a * o);
                        return e - s * ((t + i * a * r) / n * Math.sin(n * o) + r * Math.cos(n * o))
                    }
                    ,
                    m = e => {
                        const o = Math.exp(-i * a * e);
                        return i * a * o * (Math.sin(n * e) * (t + i * a * r) / n + r * Math.cos(n * e)) - o * (Math.cos(n * e) * (t + i * a * r) - n * r * Math.sin(n * e))
                    }
                } else if (1 === i)
                    p = n => e - Math.exp(-a * n) * (r + (t + a * r) * n);
                else {
                    const n = a * Math.sqrt(i * i - 1);
                    p = o => {
                        const s = Math.exp(-i * a * o)
                          , l = Math.min(n * o, 300);
                        return e - s * ((t + i * a * r) * Math.sinh(l) + n * r * Math.cosh(l)) / n
                    }
                }
            }
            return v(),
            {
                next: t => {
                    const n = p(t);
                    if (h)
                        s.done = t >= f;
                    else {
                        const r = 1e3 * m(t)
                          , a = Math.abs(r) <= i
                          , l = Math.abs(e - n) <= o;
                        s.done = a && l
                    }
                    return s.value = s.done ? e : n,
                    s
                }
                ,
                flipTarget: () => {
                    d = -d,
                    [n,e] = [e, n],
                    v()
                }
            }
        }
        F.needsInterpolation = (t, n) => "string" === typeof t || "string" === typeof n;
        const H = t => 0
          , N = (t, n, e) => {
            const r = n - t;
            return 0 === r ? 1 : (e - t) / r
        }
          , U = (t, n) => e => Math.max(Math.min(e, n), t)
          , W = t => t % 1 ? Number(t.toFixed(5)) : t
          , X = /(-)?([\d]*\.?[\d])+/g
          , q = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi
          , $ = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
        function G(t) {
            return "string" === typeof t
        }
        const K = {
            test: t => "number" === typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , J = Object.assign(Object.assign({}, K), {
            transform: U(0, 1)
        })
          , Q = Object.assign(Object.assign({}, K), {
            default: 1
        })
          , tt = (t, n) => e => Boolean(G(e) && $.test(e) && e.startsWith(t) || n && Object.prototype.hasOwnProperty.call(e, n))
          , nt = (t, n, e) => r => {
            if (!G(r))
                return r;
            const [i,o,a,s] = r.match(X);
            return {
                [t]: parseFloat(i),
                [n]: parseFloat(o),
                [e]: parseFloat(a),
                alpha: void 0 !== s ? parseFloat(s) : 1
            }
        }
          , et = U(0, 255)
          , rt = Object.assign(Object.assign({}, K), {
            transform: t => Math.round(et(t))
        })
          , it = {
            test: tt("rgb", "red"),
            parse: nt("red", "green", "blue"),
            transform: ({red: t, green: n, blue: e, alpha: r=1}) => "rgba(" + rt.transform(t) + ", " + rt.transform(n) + ", " + rt.transform(e) + ", " + W(J.transform(r)) + ")"
        };
        const ot = {
            test: tt("#"),
            parse: function(t) {
                let n = ""
                  , e = ""
                  , r = ""
                  , i = "";
                return t.length > 5 ? (n = t.substr(1, 2),
                e = t.substr(3, 2),
                r = t.substr(5, 2),
                i = t.substr(7, 2)) : (n = t.substr(1, 1),
                e = t.substr(2, 1),
                r = t.substr(3, 1),
                i = t.substr(4, 1),
                n += n,
                e += e,
                r += r,
                i += i),
                {
                    red: parseInt(n, 16),
                    green: parseInt(e, 16),
                    blue: parseInt(r, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: it.transform
        }
          , at = t => ({
            test: n => G(n) && n.endsWith(t) && 1 === n.split(" ").length,
            parse: parseFloat,
            transform: n => `${n}${t}`
        })
          , st = at("deg")
          , lt = at("%")
          , ct = at("px")
          , ut = at("vh")
          , dt = at("vw")
          , ft = Object.assign(Object.assign({}, lt), {
            parse: t => lt.parse(t) / 100,
            transform: t => lt.transform(100 * t)
        })
          , ht = {
            test: tt("hsl", "hue"),
            parse: nt("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: n, lightness: e, alpha: r=1}) => "hsla(" + Math.round(t) + ", " + lt.transform(W(n)) + ", " + lt.transform(W(e)) + ", " + W(J.transform(r)) + ")"
        };
        function pt(t, n, e) {
            return e < 0 && (e += 1),
            e > 1 && (e -= 1),
            e < 1 / 6 ? t + 6 * (n - t) * e : e < .5 ? n : e < 2 / 3 ? t + (n - t) * (2 / 3 - e) * 6 : t
        }
        function mt({hue: t, saturation: n, lightness: e, alpha: r}) {
            t /= 360,
            e /= 100;
            let i = 0
              , o = 0
              , a = 0;
            if (n /= 100) {
                const r = e < .5 ? e * (1 + n) : e + n - e * n
                  , s = 2 * e - r;
                i = pt(s, r, t + 1 / 3),
                o = pt(s, r, t),
                a = pt(s, r, t - 1 / 3)
            } else
                i = o = a = e;
            return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r
            }
        }
        const vt = (t, n, e) => {
            const r = t * t
              , i = n * n;
            return Math.sqrt(Math.max(0, e * (i - r) + r))
        }
          , gt = [ot, it, ht]
          , yt = t => gt.find((n => n.test(t)))
          , bt = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`
          , wt = (t, n) => {
            let e = yt(t)
              , r = yt(n);
            bt(t),
            bt(n);
            let i = e.parse(t)
              , o = r.parse(n);
            e === ht && (i = mt(i),
            e = it),
            r === ht && (o = mt(o),
            r = it);
            const a = Object.assign({}, i);
            return t => {
                for (const n in a)
                    "alpha" !== n && (a[n] = vt(i[n], o[n], t));
                return a.alpha = T(i.alpha, o.alpha, t),
                e.transform(a)
            }
        }
          , xt = {
            test: t => it.test(t) || ot.test(t) || ht.test(t),
            parse: t => it.test(t) ? it.parse(t) : ht.test(t) ? ht.parse(t) : ot.parse(t),
            transform: t => G(t) ? t : t.hasOwnProperty("red") ? it.transform(t) : ht.transform(t)
        }
          , kt = "${c}"
          , St = "${n}";
        function Ct(t) {
            "number" === typeof t && (t = `${t}`);
            const n = [];
            let e = 0;
            const r = t.match(q);
            r && (e = r.length,
            t = t.replace(q, kt),
            n.push(...r.map(xt.parse)));
            const i = t.match(X);
            return i && (t = t.replace(X, St),
            n.push(...i.map(K.parse))),
            {
                values: n,
                numColors: e,
                tokenised: t
            }
        }
        function Et(t) {
            return Ct(t).values
        }
        function At(t) {
            const {values: n, numColors: e, tokenised: r} = Ct(t)
              , i = n.length;
            return t => {
                let n = r;
                for (let r = 0; r < i; r++)
                    n = n.replace(r < e ? kt : St, r < e ? xt.transform(t[r]) : W(t[r]));
                return n
            }
        }
        const Tt = t => "number" === typeof t ? 0 : t;
        const _t = {
            test: function(t) {
                var n, e, r, i;
                return isNaN(t) && G(t) && (null !== (e = null === (n = t.match(X)) || void 0 === n ? void 0 : n.length) && void 0 !== e ? e : 0) + (null !== (i = null === (r = t.match(q)) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) > 0
            },
            parse: Et,
            createTransformer: At,
            getAnimatableNone: function(t) {
                const n = Et(t);
                return At(t)(n.map(Tt))
            }
        }
          , Pt = t => "number" === typeof t
          , jt = (t, n) => e => n(t(e))
          , Ot = (...t) => t.reduce(jt);
        function It(t, n) {
            return Pt(t) ? e => T(t, n, e) : xt.test(t) ? wt(t, n) : zt(t, n)
        }
        const Mt = (t, n) => {
            const e = [...t]
              , r = e.length
              , i = t.map(( (t, e) => It(t, n[e])));
            return t => {
                for (let n = 0; n < r; n++)
                    e[n] = i[n](t);
                return e
            }
        }
          , Lt = (t, n) => {
            const e = Object.assign(Object.assign({}, t), n)
              , r = {};
            for (const i in e)
                void 0 !== t[i] && void 0 !== n[i] && (r[i] = It(t[i], n[i]));
            return t => {
                for (const n in r)
                    e[n] = r[n](t);
                return e
            }
        }
        ;
        function Rt(t) {
            const n = _t.parse(t)
              , e = n.length;
            let r = 0
              , i = 0
              , o = 0;
            for (let a = 0; a < e; a++)
                r || "number" === typeof n[a] ? r++ : void 0 !== n[a].hue ? o++ : i++;
            return {
                parsed: n,
                numNumbers: r,
                numRGB: i,
                numHSL: o
            }
        }
        const zt = (t, n) => {
            const e = _t.createTransformer(n)
              , r = Rt(t)
              , i = Rt(n);
            return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? Ot(Mt(r.parsed, i.parsed), e) : e => `${e > 0 ? n : t}`
        }
          , Dt = (t, n) => e => T(t, n, e);
        function Zt(t, n, e) {
            const r = []
              , i = e || ("number" === typeof (o = t[0]) ? Dt : "string" === typeof o ? xt.test(o) ? wt : zt : Array.isArray(o) ? Mt : "object" === typeof o ? Lt : void 0);
            var o;
            const a = t.length - 1;
            for (let s = 0; s < a; s++) {
                let e = i(t[s], t[s + 1]);
                if (n) {
                    const t = Array.isArray(n) ? n[s] : n;
                    e = Ot(t, e)
                }
                r.push(e)
            }
            return r
        }
        function Vt(t, n, {clamp: e=!0, ease: r, mixer: i}={}) {
            const o = t.length;
            n.length,
            !r || !Array.isArray(r) || r.length,
            t[0] > t[o - 1] && (t = [].concat(t),
            n = [].concat(n),
            t.reverse(),
            n.reverse());
            const a = Zt(n, r, i)
              , s = 2 === o ? function([t,n], [e]) {
                return r => e(N(t, n, r))
            }(t, a) : function(t, n) {
                const e = t.length
                  , r = e - 1;
                return i => {
                    let o = 0
                      , a = !1;
                    if (i <= t[0] ? a = !0 : i >= t[r] && (o = r - 1,
                    a = !0),
                    !a) {
                        let n = 1;
                        for (; n < e && !(t[n] > i || n === r); n++)
                            ;
                        o = n - 1
                    }
                    const s = N(t[o], t[o + 1], i);
                    return n[o](s)
                }
            }(t, a);
            return e ? n => s(R(t[0], t[o - 1], n)) : s
        }
        const Bt = t => n => 1 - t(1 - n)
          , Yt = t => n => n <= .5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2
          , Ft = t => n => n * n * ((t + 1) * n - t)
          , Ht = t => t
          , Nt = (Ut = 2,
        t => Math.pow(t, Ut));
        var Ut;
        const Wt = Bt(Nt)
          , Xt = Yt(Nt)
          , qt = t => 1 - Math.sin(Math.acos(t))
          , $t = Bt(qt)
          , Gt = Yt($t)
          , Kt = Ft(1.525)
          , Jt = Bt(Kt)
          , Qt = Yt(Kt)
          , tn = (t => {
            const n = Ft(t);
            return t => (t *= 2) < 1 ? .5 * n(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
        )(1.525)
          , nn = t => {
            if (1 === t || 0 === t)
                return t;
            const n = t * t;
            return t < .36363636363636365 ? 7.5625 * n : t < .7272727272727273 ? 9.075 * n - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * n - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
        }
          , en = Bt(nn);
        function rn(t, n) {
            return t.map(( () => n || Xt)).splice(0, t.length - 1)
        }
        function on({from: t=0, to: n=1, ease: e, offset: r, duration: i=300}) {
            const o = {
                done: !1,
                value: t
            }
              , a = Array.isArray(n) ? n : [t, n]
              , s = function(t, n) {
                return t.map((t => t * n))
            }(r && r.length === a.length ? r : function(t) {
                const n = t.length;
                return t.map(( (t, e) => 0 !== e ? e / (n - 1) : 0))
            }(a), i);
            function l() {
                return Vt(s, a, {
                    ease: Array.isArray(e) ? e : rn(a, e)
                })
            }
            let c = l();
            return {
                next: t => (o.value = c(t),
                o.done = t >= i,
                o),
                flipTarget: () => {
                    a.reverse(),
                    c = l()
                }
            }
        }
        const an = {
            keyframes: on,
            spring: F,
            decay: function({velocity: t=0, from: n=0, power: e=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
                const a = {
                    done: !1,
                    value: n
                };
                let s = e * t;
                const l = n + s
                  , c = void 0 === o ? l : o(l);
                return c !== l && (s = c - n),
                {
                    next: t => {
                        const n = -s * Math.exp(-t / r);
                        return a.done = !(n > i || n < -i),
                        a.value = a.done ? c : c + n,
                        a
                    }
                    ,
                    flipTarget: () => {}
                }
            }
        };
        function sn(t, n, e=0) {
            return t - n - e
        }
        const ln = t => {
            const n = ({delta: n}) => t(n);
            return {
                start: () => A.ZP.update(n, !0),
                stop: () => A.qY.update(n)
            }
        }
        ;
        function cn(t) {
            var n, e, {from: i, autoplay: o=!0, driver: a=ln, elapsed: s=0, repeat: l=0, repeatType: c="loop", repeatDelay: u=0, onPlay: d, onStop: f, onComplete: h, onRepeat: p, onUpdate: m} = t, v = (0,
            r.__rest)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
            let g, y, b, {to: w} = v, x = 0, k = v.duration, S = !1, C = !0;
            const E = function(t) {
                if (Array.isArray(t.to))
                    return on;
                if (an[t.type])
                    return an[t.type];
                const n = new Set(Object.keys(t));
                return n.has("ease") || n.has("duration") && !n.has("dampingRatio") ? on : n.has("dampingRatio") || n.has("stiffness") || n.has("mass") || n.has("damping") || n.has("restSpeed") || n.has("restDelta") ? F : on
            }(v);
            (null === (e = (n = E).needsInterpolation) || void 0 === e ? void 0 : e.call(n, i, w)) && (b = Vt([0, 100], [i, w], {
                clamp: !1
            }),
            i = 0,
            w = 100);
            const A = E(Object.assign(Object.assign({}, v), {
                from: i,
                to: w
            }));
            function T() {
                x++,
                "reverse" === c ? (C = x % 2 === 0,
                s = function(t, n, e=0, r=!0) {
                    return r ? sn(n + -t, n, e) : n - (t - n) + e
                }(s, k, u, C)) : (s = sn(s, k, u),
                "mirror" === c && A.flipTarget()),
                S = !1,
                p && p()
            }
            function _(t) {
                if (C || (t = -t),
                s += t,
                !S) {
                    const t = A.next(Math.max(0, s));
                    y = t.value,
                    b && (y = b(y)),
                    S = C ? t.done : s <= 0
                }
                null === m || void 0 === m || m(y),
                S && (0 === x && (null !== k && void 0 !== k || (k = s)),
                x < l ? function(t, n, e, r) {
                    return r ? t >= n + e : t <= -e
                }(s, k, u, C) && T() : (g.stop(),
                h && h()))
            }
            return o && (null === d || void 0 === d || d(),
            g = a(_),
            g.start()),
            {
                stop: () => {
                    null === f || void 0 === f || f(),
                    g.stop()
                }
            }
        }
        var un = function(t) {
            return 1e3 * t
        };
        const dn = (t, n) => 1 - 3 * n + 3 * t
          , fn = (t, n) => 3 * n - 6 * t
          , hn = t => 3 * t
          , pn = (t, n, e) => ((dn(n, e) * t + fn(n, e)) * t + hn(n)) * t
          , mn = (t, n, e) => 3 * dn(n, e) * t * t + 2 * fn(n, e) * t + hn(n);
        const vn = .1;
        function gn(t, n, e, r) {
            if (t === n && e === r)
                return Ht;
            const i = new Float32Array(11);
            for (let a = 0; a < 11; ++a)
                i[a] = pn(a * vn, t, e);
            function o(n) {
                let r = 0
                  , o = 1;
                for (; 10 !== o && i[o] <= n; ++o)
                    r += vn;
                --o;
                const a = r + (n - i[o]) / (i[o + 1] - i[o]) * vn
                  , s = mn(a, t, e);
                return s >= .001 ? function(t, n, e, r) {
                    for (let i = 0; i < 8; ++i) {
                        const i = mn(n, e, r);
                        if (0 === i)
                            return n;
                        n -= (pn(n, e, r) - t) / i
                    }
                    return n
                }(n, a, t, e) : 0 === s ? a : function(t, n, e, r, i) {
                    let o, a, s = 0;
                    do {
                        a = n + (e - n) / 2,
                        o = pn(a, r, i) - t,
                        o > 0 ? e = a : n = a
                    } while (Math.abs(o) > 1e-7 && ++s < 10);
                    return a
                }(n, r, r + vn, t, e)
            }
            return t => 0 === t || 1 === t ? t : pn(o(t), n, r)
        }
        var yn = {
            linear: Ht,
            easeIn: Nt,
            easeInOut: Xt,
            easeOut: Wt,
            circIn: qt,
            circInOut: Gt,
            circOut: $t,
            backIn: Kt,
            backInOut: Qt,
            backOut: Jt,
            anticipate: tn,
            bounceIn: en,
            bounceInOut: t => t < .5 ? .5 * (1 - nn(1 - 2 * t)) : .5 * nn(2 * t - 1) + .5,
            bounceOut: nn
        }
          , bn = function(t) {
            if (Array.isArray(t)) {
                t.length;
                var n = (0,
                r.__read)(t, 4);
                return gn(n[0], n[1], n[2], n[3])
            }
            return "string" === typeof t ? ("Invalid easing type '".concat(t, "'"),
            yn[t]) : t
        }
          , wn = function(t, n) {
            return "zIndex" !== t && (!("number" !== typeof n && !Array.isArray(n)) || !("string" !== typeof n || !_t.test(n) || n.startsWith("url(")))
        }
          , xn = function(t) {
            return Array.isArray(t)
        }
          , kn = function() {
            return {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
            }
        }
          , Sn = function(t) {
            return {
                type: "spring",
                stiffness: 550,
                damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            }
        }
          , Cn = function() {
            return {
                type: "keyframes",
                ease: "linear",
                duration: .3
            }
        }
          , En = function(t) {
            return {
                type: "keyframes",
                duration: .8,
                values: t
            }
        }
          , An = {
            x: kn,
            y: kn,
            z: kn,
            rotate: kn,
            rotateX: kn,
            rotateY: kn,
            rotateZ: kn,
            scaleX: Sn,
            scaleY: Sn,
            scale: Sn,
            opacity: Cn,
            backgroundColor: Cn,
            color: Cn,
            default: Sn
        };
        const Tn = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function _n(t) {
            let[n,e] = t.slice(0, -1).split("(");
            if ("drop-shadow" === n)
                return t;
            const [r] = e.match(X) || [];
            if (!r)
                return t;
            const i = e.replace(r, "");
            let o = Tn.has(n) ? 1 : 0;
            return r !== e && (o *= 100),
            n + "(" + o + i + ")"
        }
        const Pn = /([a-z-]*)\(.*?\)/g
          , jn = Object.assign(Object.assign({}, _t), {
            getAnimatableNone: t => {
                const n = t.match(Pn);
                return n ? n.map(_n).join(" ") : t
            }
        });
        var On = (0,
        r.__assign)((0,
        r.__assign)({}, K), {
            transform: Math.round
        })
          , In = {
            borderWidth: ct,
            borderTopWidth: ct,
            borderRightWidth: ct,
            borderBottomWidth: ct,
            borderLeftWidth: ct,
            borderRadius: ct,
            radius: ct,
            borderTopLeftRadius: ct,
            borderTopRightRadius: ct,
            borderBottomRightRadius: ct,
            borderBottomLeftRadius: ct,
            width: ct,
            maxWidth: ct,
            height: ct,
            maxHeight: ct,
            size: ct,
            top: ct,
            right: ct,
            bottom: ct,
            left: ct,
            padding: ct,
            paddingTop: ct,
            paddingRight: ct,
            paddingBottom: ct,
            paddingLeft: ct,
            margin: ct,
            marginTop: ct,
            marginRight: ct,
            marginBottom: ct,
            marginLeft: ct,
            rotate: st,
            rotateX: st,
            rotateY: st,
            rotateZ: st,
            scale: Q,
            scaleX: Q,
            scaleY: Q,
            scaleZ: Q,
            skew: st,
            skewX: st,
            skewY: st,
            distance: ct,
            translateX: ct,
            translateY: ct,
            translateZ: ct,
            x: ct,
            y: ct,
            z: ct,
            perspective: ct,
            transformPerspective: ct,
            opacity: J,
            originX: ft,
            originY: ft,
            originZ: ct,
            zIndex: On,
            fillOpacity: J,
            strokeOpacity: J,
            numOctaves: On
        }
          , Mn = (0,
        r.__assign)((0,
        r.__assign)({}, In), {
            color: xt,
            backgroundColor: xt,
            outlineColor: xt,
            fill: xt,
            stroke: xt,
            borderColor: xt,
            borderTopColor: xt,
            borderRightColor: xt,
            borderBottomColor: xt,
            borderLeftColor: xt,
            filter: jn,
            WebkitFilter: jn
        })
          , Ln = function(t) {
            return Mn[t]
        };
        function Rn(t, n) {
            var e, r = Ln(t);
            return r !== jn && (r = _t),
            null === (e = r.getAnimatableNone) || void 0 === e ? void 0 : e.call(r, n)
        }
        var zn = !1
          , Dn = function(t) {
            return xn(t) ? t[t.length - 1] || 0 : t
        };
        function Zn(t) {
            var n = t.ease
              , e = t.times
              , i = t.yoyo
              , o = t.flip
              , a = t.loop
              , s = (0,
            r.__rest)(t, ["ease", "times", "yoyo", "flip", "loop"])
              , l = (0,
            r.__assign)({}, s);
            return e && (l.offset = e),
            s.duration && (l.duration = un(s.duration)),
            s.repeatDelay && (l.repeatDelay = un(s.repeatDelay)),
            n && (l.ease = function(t) {
                return Array.isArray(t) && "number" !== typeof t[0]
            }(n) ? n.map(bn) : bn(n)),
            "tween" === s.type && (l.type = "keyframes"),
            (i || a || o) && (!0,
            i ? l.repeatType = "reverse" : a ? l.repeatType = "loop" : o && (l.repeatType = "mirror"),
            l.repeat = a || i || o || s.repeat),
            "spring" !== s.type && (l.type = "keyframes"),
            l
        }
        function Vn(t, n, e) {
            var i;
            return Array.isArray(n.to) && (null !== (i = t.duration) && void 0 !== i || (t.duration = .8)),
            function(t) {
                Array.isArray(t.to) && null === t.to[0] && (t.to = (0,
                r.__spreadArray)([], (0,
                r.__read)(t.to), !1),
                t.to[0] = t.from)
            }(n),
            function(t) {
                t.when,
                t.delay,
                t.delayChildren,
                t.staggerChildren,
                t.staggerDirection,
                t.repeat,
                t.repeatType,
                t.repeatDelay,
                t.from;
                var n = (0,
                r.__rest)(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                return !!Object.keys(n).length
            }(t) || (t = (0,
            r.__assign)((0,
            r.__assign)({}, t), function(t, n) {
                var e;
                return e = xn(n) ? En : An[t] || An.default,
                (0,
                r.__assign)({
                    to: n
                }, e(n))
            }(e, n.to))),
            (0,
            r.__assign)((0,
            r.__assign)({}, n), Zn(t))
        }
        function Bn(t, n, e, i, o) {
            var a, s = Hn(i, t), l = null !== (a = s.from) && void 0 !== a ? a : n.get(), c = wn(t, e);
            "none" === l && c && "string" === typeof e ? l = Rn(t, e) : Yn(l) && "string" === typeof e ? l = Fn(e) : !Array.isArray(e) && Yn(e) && "string" === typeof l && (e = Fn(l));
            var u = wn(t, l);
            return "You are trying to animate ".concat(t, ' from "').concat(l, '" to "').concat(e, '". ').concat(l, " is not an animatable value - to enable this animation set ").concat(l, " to a value animatable to ").concat(e, " via the `style` property."),
            u && c && !1 !== s.type ? function() {
                var i = {
                    from: l,
                    to: e,
                    velocity: n.getVelocity(),
                    onComplete: o,
                    onUpdate: function(t) {
                        return n.set(t)
                    }
                };
                return "inertia" === s.type || "decay" === s.type ? function({from: t=0, velocity: n=0, min: e, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: a=500, bounceDamping: s=10, restDelta: l=1, modifyTarget: c, driver: u, onUpdate: d, onComplete: f, onStop: h}) {
                    let p;
                    function m(t) {
                        return void 0 !== e && t < e || void 0 !== r && t > r
                    }
                    function v(t) {
                        return void 0 === e ? r : void 0 === r || Math.abs(e - t) < Math.abs(r - t) ? e : r
                    }
                    function g(t) {
                        null === p || void 0 === p || p.stop(),
                        p = cn(Object.assign(Object.assign({}, t), {
                            driver: u,
                            onUpdate: n => {
                                var e;
                                null === d || void 0 === d || d(n),
                                null === (e = t.onUpdate) || void 0 === e || e.call(t, n)
                            }
                            ,
                            onComplete: f,
                            onStop: h
                        }))
                    }
                    function y(t) {
                        g(Object.assign({
                            type: "spring",
                            stiffness: a,
                            damping: s,
                            restDelta: l
                        }, t))
                    }
                    if (m(t))
                        y({
                            from: t,
                            velocity: n,
                            to: v(t)
                        });
                    else {
                        let r = i * n + t;
                        "undefined" !== typeof c && (r = c(r));
                        const a = v(r)
                          , s = a === e ? -1 : 1;
                        let u, d;
                        const f = t => {
                            u = d,
                            d = t,
                            n = _(t - u, (0,
                            A.$B)().delta),
                            (1 === s && t > a || -1 === s && t < a) && y({
                                from: t,
                                to: a,
                                velocity: n
                            })
                        }
                        ;
                        g({
                            type: "decay",
                            from: t,
                            velocity: n,
                            timeConstant: o,
                            power: i,
                            restDelta: l,
                            modifyTarget: c,
                            onUpdate: m(r) ? f : void 0
                        })
                    }
                    return {
                        stop: () => null === p || void 0 === p ? void 0 : p.stop()
                    }
                }((0,
                r.__assign)((0,
                r.__assign)({}, i), s)) : cn((0,
                r.__assign)((0,
                r.__assign)({}, Vn(s, i, t)), {
                    onUpdate: function(t) {
                        var n;
                        i.onUpdate(t),
                        null === (n = s.onUpdate) || void 0 === n || n.call(s, t)
                    },
                    onComplete: function() {
                        var t;
                        i.onComplete(),
                        null === (t = s.onComplete) || void 0 === t || t.call(s)
                    }
                }))
            }
            : function() {
                var t, r, i = Dn(e);
                return n.set(i),
                o(),
                null === (t = null === s || void 0 === s ? void 0 : s.onUpdate) || void 0 === t || t.call(s, i),
                null === (r = null === s || void 0 === s ? void 0 : s.onComplete) || void 0 === r || r.call(s),
                {
                    stop: function() {}
                }
            }
        }
        function Yn(t) {
            return 0 === t || "string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
        }
        function Fn(t) {
            return "number" === typeof t ? 0 : Rn("", t)
        }
        function Hn(t, n) {
            return t[n] || t.default || t
        }
        function Nn(t, n, e, r) {
            return void 0 === r && (r = {}),
            zn && (r = {
                type: !1
            }),
            n.start((function(i) {
                var o, a, s = Bn(t, n, e, r, i), l = function(t, n) {
                    var e, r;
                    return null !== (r = null !== (e = (Hn(t, n) || {}).delay) && void 0 !== e ? e : t.delay) && void 0 !== r ? r : 0
                }(r, t), c = function() {
                    return a = s()
                };
                return l ? o = setTimeout(c, un(l)) : c(),
                function() {
                    clearTimeout(o),
                    null === a || void 0 === a || a.stop()
                }
            }
            ))
        }
        var Un = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , Wn = Un.length
          , Xn = function(t) {
            return "string" === typeof t ? parseFloat(t) : t
        }
          , qn = function(t) {
            return "number" === typeof t || ct.test(t)
        };
        function $n(t, n) {
            var e;
            return null !== (e = t[n]) && void 0 !== e ? e : t.borderRadius
        }
        var Gn = Jn(0, .5, $t)
          , Kn = Jn(.5, .95, Ht);
        function Jn(t, n, e) {
            return function(r) {
                return r < t ? 0 : r > n ? 1 : e(N(t, n, r))
            }
        }
        function Qn(t, n) {
            t.min = n.min,
            t.max = n.max
        }
        function te(t, n) {
            Qn(t.x, n.x),
            Qn(t.y, n.y)
        }
        function ne(t) {
            return void 0 === t || 1 === t
        }
        function ee(t) {
            var n = t.scale
              , e = t.scaleX
              , r = t.scaleY;
            return !ne(n) || !ne(e) || !ne(r)
        }
        function re(t) {
            return ee(t) || ie(t.x) || ie(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function ie(t) {
            return t && "0%" !== t
        }
        function oe(t, n, e) {
            return e + n * (t - e)
        }
        function ae(t, n, e, r, i) {
            return void 0 !== i && (t = oe(t, i, r)),
            oe(t, e, r) + n
        }
        function se(t, n, e, r, i) {
            void 0 === n && (n = 0),
            void 0 === e && (e = 1),
            t.min = ae(t.min, n, e, r, i),
            t.max = ae(t.max, n, e, r, i)
        }
        function le(t, n) {
            var e = n.x
              , r = n.y;
            se(t.x, e.translate, e.scale, e.originPoint),
            se(t.y, r.translate, r.scale, r.originPoint)
        }
        function ce(t, n) {
            t.min = t.min + n,
            t.max = t.max + n
        }
        function ue(t, n, e) {
            var i = (0,
            r.__read)(e, 3)
              , o = i[0]
              , a = i[1]
              , s = i[2]
              , l = void 0 !== n[s] ? n[s] : .5
              , c = T(t.min, t.max, l);
            se(t, n[o], n[a], c, n.scale)
        }
        var de = ["x", "scaleX", "originX"]
          , fe = ["y", "scaleY", "originY"];
        function he(t, n) {
            ue(t.x, n, de),
            ue(t.y, n, fe)
        }
        const pe = t => t.hasOwnProperty("x") && t.hasOwnProperty("y")
          , me = t => pe(t) && t.hasOwnProperty("z")
          , ve = (t, n) => Math.abs(t - n);
        function ge(t, n) {
            if (Pt(t) && Pt(n))
                return ve(t, n);
            if (pe(t) && pe(n)) {
                const e = ve(t.x, n.x)
                  , r = ve(t.y, n.y)
                  , i = me(t) && me(n) ? ve(t.z, n.z) : 0;
                return Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2) + Math.pow(i, 2))
            }
        }
        function ye(t) {
            return t.max - t.min
        }
        function be(t, n, e) {
            return void 0 === n && (n = 0),
            void 0 === e && (e = .01),
            ge(t, n) < e
        }
        function we(t, n, e, r) {
            void 0 === r && (r = .5),
            t.origin = r,
            t.originPoint = T(n.min, n.max, t.origin),
            t.scale = ye(e) / ye(n),
            (be(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = T(e.min, e.max, t.origin) - t.originPoint,
            (be(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function xe(t, n, e, r) {
            we(t.x, n.x, e.x, null === r || void 0 === r ? void 0 : r.originX),
            we(t.y, n.y, e.y, null === r || void 0 === r ? void 0 : r.originY)
        }
        function ke(t, n, e) {
            t.min = e.min + n.min,
            t.max = t.min + ye(n)
        }
        function Se(t, n, e) {
            t.min = n.min - e.min,
            t.max = t.min + ye(n)
        }
        function Ce(t, n, e) {
            Se(t.x, n.x, e.x),
            Se(t.y, n.y, e.y)
        }
        function Ee(t, n, e, r, i) {
            return t = oe(t -= n, 1 / e, r),
            void 0 !== i && (t = oe(t, 1 / i, r)),
            t
        }
        function Ae(t, n, e, i, o) {
            var a = (0,
            r.__read)(e, 3)
              , s = a[0]
              , l = a[1]
              , c = a[2];
            !function(t, n, e, r, i, o, a) {
                if (void 0 === n && (n = 0),
                void 0 === e && (e = 1),
                void 0 === r && (r = .5),
                void 0 === o && (o = t),
                void 0 === a && (a = t),
                lt.test(n) && (n = parseFloat(n),
                n = T(a.min, a.max, n / 100) - a.min),
                "number" === typeof n) {
                    var s = T(o.min, o.max, r);
                    t === o && (s -= n),
                    t.min = Ee(t.min, n, e, s, i),
                    t.max = Ee(t.max, n, e, s, i)
                }
            }(t, n[s], n[l], n[c], n.scale, i, o)
        }
        var Te = ["x", "scaleX", "originX"]
          , _e = ["y", "scaleY", "originY"];
        function Pe(t, n, e, r) {
            Ae(t.x, n, Te, null === e || void 0 === e ? void 0 : e.x, null === r || void 0 === r ? void 0 : r.x),
            Ae(t.y, n, _e, null === e || void 0 === e ? void 0 : e.y, null === r || void 0 === r ? void 0 : r.y)
        }
        function je(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function Oe(t) {
            return je(t.x) && je(t.y)
        }
        function Ie(t, n) {
            return t.x.min === n.x.min && t.x.max === n.x.max && t.y.min === n.y.min && t.y.max === n.y.max
        }
        var Me = function() {
            function t() {
                this.members = []
            }
            return t.prototype.add = function(t) {
                P(this.members, t),
                t.scheduleRender()
            }
            ,
            t.prototype.remove = function(t) {
                if (j(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    var n = this.members[this.members.length - 1];
                    n && this.promote(n)
                }
            }
            ,
            t.prototype.relegate = function(t) {
                var n, e = this.members.findIndex((function(n) {
                    return t === n
                }
                ));
                if (0 === e)
                    return !1;
                for (var r = e; r >= 0; r--) {
                    var i = this.members[r];
                    if (!1 !== i.isPresent) {
                        n = i;
                        break
                    }
                }
                return !!n && (this.promote(n),
                !0)
            }
            ,
            t.prototype.promote = function(t, n) {
                var e, r = this.lead;
                t !== r && (this.prevLead = r,
                this.lead = t,
                t.show(),
                r && (r.instance && r.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues,
                t.snapshot.isShared = !0),
                (null === (e = t.root) || void 0 === e ? void 0 : e.isUpdating) && (t.isLayoutDirty = !0),
                !1 === t.options.crossfade && r.hide()))
            }
            ,
            t.prototype.exitAnimationComplete = function() {
                this.members.forEach((function(t) {
                    var n, e, r, i, o;
                    null === (e = (n = t.options).onExitComplete) || void 0 === e || e.call(n),
                    null === (o = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
                }
                ))
            }
            ,
            t.prototype.scheduleRender = function() {
                this.members.forEach((function(t) {
                    t.instance && t.scheduleRender(!1)
                }
                ))
            }
            ,
            t.prototype.removeLeadSnapshot = function() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
            ,
            t
        }()
          , Le = {};
        function Re(t, n, e) {
            var r = t.x.translate / n.x
              , i = t.y.translate / n.y
              , o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
            if (e) {
                var a = e.rotate
                  , s = e.rotateX
                  , l = e.rotateY;
                a && (o += "rotate(".concat(a, "deg) ")),
                s && (o += "rotateX(".concat(s, "deg) ")),
                l && (o += "rotateY(".concat(l, "deg) "))
            }
            return "translate3d(0px, 0px, 0) scale(1, 1)" === (o += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")")) ? "none" : o
        }
        function ze(t) {
            return [t("x"), t("y")]
        }
        var De = ["", "X", "Y", "Z"]
          , Ze = ["transformPerspective", "x", "y", "z"];
        function Ve(t, n) {
            return Ze.indexOf(t) - Ze.indexOf(n)
        }
        ["translate", "scale", "rotate", "skew"].forEach((function(t) {
            return De.forEach((function(n) {
                return Ze.push(t + n)
            }
            ))
        }
        ));
        var Be = new Set(Ze);
        function Ye(t) {
            return Be.has(t)
        }
        var Fe = new Set(["originX", "originY", "originZ"]);
        function He(t) {
            return Fe.has(t)
        }
        var Ne = function(t, n) {
            return t.depth - n.depth
        }
          , Ue = function() {
            function t() {
                this.children = [],
                this.isDirty = !1
            }
            return t.prototype.add = function(t) {
                P(this.children, t),
                this.isDirty = !0
            }
            ,
            t.prototype.remove = function(t) {
                j(this.children, t),
                this.isDirty = !0
            }
            ,
            t.prototype.forEach = function(t) {
                this.isDirty && this.children.sort(Ne),
                this.isDirty = !1,
                this.children.forEach(t)
            }
            ,
            t
        }();
        function We(t) {
            var n, e = L(t) ? t.get() : t;
            return n = e,
            Boolean(n && "object" === typeof n && n.mix && n.toValue) ? e.toValue() : e
        }
        var Xe = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function qe(t) {
            var n = t.attachResizeListener
              , e = t.defaultParent
              , i = t.measureScroll
              , o = t.resetTransform;
            return function() {
                function t(t, n, i) {
                    var o = this;
                    void 0 === n && (n = {}),
                    void 0 === i && (i = null === e || void 0 === e ? void 0 : e()),
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = function() {
                        o.isUpdating && (o.isUpdating = !1,
                        o.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = function() {
                        o.nodes.forEach(nr),
                        o.nodes.forEach(er)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.id = t,
                    this.latestValues = n,
                    this.root = i ? i.root || i : this,
                    this.path = i ? (0,
                    r.__spreadArray)((0,
                    r.__spreadArray)([], (0,
                    r.__read)(i.path), !1), [i], !1) : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0,
                    t && this.root.registerPotentialNode(t, this);
                    for (var a = 0; a < this.path.length; a++)
                        this.path[a].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new Ue)
                }
                return t.prototype.addEventListener = function(t, n) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new O),
                    this.eventHandlers.get(t).add(n)
                }
                ,
                t.prototype.notifyListeners = function(t) {
                    for (var n = [], e = 1; e < arguments.length; e++)
                        n[e - 1] = arguments[e];
                    var i = this.eventHandlers.get(t);
                    null === i || void 0 === i || i.notify.apply(i, (0,
                    r.__spreadArray)([], (0,
                    r.__read)(n), !1))
                }
                ,
                t.prototype.hasListeners = function(t) {
                    return this.eventHandlers.has(t)
                }
                ,
                t.prototype.registerPotentialNode = function(t, n) {
                    this.potentialNodes.set(t, n)
                }
                ,
                t.prototype.mount = function(t, e) {
                    var i, o = this;
                    if (void 0 === e && (e = !1),
                    !this.instance) {
                        this.isSVG = t instanceof SVGElement && "svg" !== t.tagName,
                        this.instance = t;
                        var a = this.options
                          , s = a.layoutId
                          , l = a.layout
                          , c = a.visualElement;
                        if (c && !c.getInstance() && c.mount(t),
                        this.root.nodes.add(this),
                        null === (i = this.parent) || void 0 === i || i.children.add(this),
                        this.id && this.root.potentialNodes.delete(this.id),
                        e && (l || s) && (this.isLayoutDirty = !0),
                        n) {
                            var u, d = function() {
                                return o.root.updateBlockedByResize = !1
                            };
                            n(t, (function() {
                                o.root.updateBlockedByResize = !0,
                                clearTimeout(u),
                                u = setTimeout(d, 250),
                                Xe.hasAnimatedSinceResize && (Xe.hasAnimatedSinceResize = !1,
                                o.nodes.forEach(tr))
                            }
                            ))
                        }
                        s && this.root.registerSharedNode(s, this),
                        !1 !== this.options.animate && c && (s || l) && this.addEventListener("didUpdate", (function(t) {
                            var n, e, i, a, s, l = t.delta, u = t.hasLayoutChanged, d = t.hasRelativeTargetChanged, f = t.layout;
                            if (o.isTreeAnimationBlocked())
                                return o.target = void 0,
                                void (o.relativeTarget = void 0);
                            var h = null !== (e = null !== (n = o.options.transition) && void 0 !== n ? n : c.getDefaultTransition()) && void 0 !== e ? e : lr
                              , p = c.getProps().onLayoutAnimationComplete
                              , m = !o.targetLayout || !Ie(o.targetLayout, f) || d
                              , v = !u && d;
                            (null === (i = o.resumeFrom) || void 0 === i ? void 0 : i.instance) || v || u && (m || !o.currentAnimation) ? (o.resumeFrom && (o.resumingFrom = o.resumeFrom,
                            o.resumingFrom.resumingFrom = void 0),
                            o.setAnimationOrigin(l, v),
                            o.startAnimation((0,
                            r.__assign)((0,
                            r.__assign)({}, Hn(h, "layout")), {
                                onComplete: p
                            }))) : o.isLead() && (null === (s = (a = o.options).onExitComplete) || void 0 === s || s.call(a)),
                            o.targetLayout = f
                        }
                        ))
                    }
                }
                ,
                t.prototype.unmount = function() {
                    var t, n;
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (t = this.getStack()) || void 0 === t || t.remove(this),
                    null === (n = this.parent) || void 0 === n || n.children.delete(this),
                    this.instance = void 0,
                    A.qY.preRender(this.updateProjection)
                }
                ,
                t.prototype.blockUpdate = function() {
                    this.updateManuallyBlocked = !0
                }
                ,
                t.prototype.unblockUpdate = function() {
                    this.updateManuallyBlocked = !1
                }
                ,
                t.prototype.isUpdateBlocked = function() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                ,
                t.prototype.isTreeAnimationBlocked = function() {
                    var t;
                    return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                }
                ,
                t.prototype.startUpdate = function() {
                    var t;
                    this.isUpdateBlocked() || (this.isUpdating = !0,
                    null === (t = this.nodes) || void 0 === t || t.forEach(rr))
                }
                ,
                t.prototype.willUpdate = function(t) {
                    var n, e, r;
                    if (void 0 === t && (t = !0),
                    this.root.isUpdateBlocked())
                        null === (e = (n = this.options).onExitComplete) || void 0 === e || e.call(n);
                    else if (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty) {
                        this.isLayoutDirty = !0;
                        for (var i = 0; i < this.path.length; i++) {
                            var o = this.path[i];
                            o.shouldResetTransform = !0,
                            o.updateScroll()
                        }
                        var a = this.options
                          , s = a.layoutId
                          , l = a.layout;
                        if (void 0 !== s || l) {
                            var c = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                            this.prevTransformTemplateValue = null === c || void 0 === c ? void 0 : c(this.latestValues, ""),
                            this.updateSnapshot(),
                            t && this.notifyListeners("willUpdate")
                        }
                    }
                }
                ,
                t.prototype.didUpdate = function() {
                    if (this.isUpdateBlocked())
                        return this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        void this.nodes.forEach(Je);
                    this.isUpdating && (this.isUpdating = !1,
                    this.potentialNodes.size && (this.potentialNodes.forEach(cr),
                    this.potentialNodes.clear()),
                    this.nodes.forEach(Qe),
                    this.nodes.forEach($e),
                    this.nodes.forEach(Ge),
                    this.clearAllSnapshots(),
                    A.iW.update(),
                    A.iW.preRender(),
                    A.iW.render())
                }
                ,
                t.prototype.clearAllSnapshots = function() {
                    this.nodes.forEach(Ke),
                    this.sharedNodes.forEach(ir)
                }
                ,
                t.prototype.scheduleUpdateProjection = function() {
                    A.ZP.preRender(this.updateProjection, !1, !0)
                }
                ,
                t.prototype.scheduleCheckAfterUnmount = function() {
                    var t = this;
                    A.ZP.postRender((function() {
                        t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                    }
                    ))
                }
                ,
                t.prototype.updateSnapshot = function() {
                    if (!this.snapshot && this.instance) {
                        var t = this.measure()
                          , n = this.removeTransform(this.removeElementScroll(t));
                        dr(n),
                        this.snapshot = {
                            measured: t,
                            layout: n,
                            latestValues: {}
                        }
                    }
                }
                ,
                t.prototype.updateLayout = function() {
                    var t;
                    if (this.instance && (this.updateScroll(),
                    this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (var n = 0; n < this.path.length; n++) {
                                this.path[n].updateScroll()
                            }
                        var e = this.measure();
                        dr(e);
                        var r = this.layout;
                        this.layout = {
                            measured: e,
                            actual: this.removeElementScroll(e)
                        },
                        this.layoutCorrected = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.isLayoutDirty = !1,
                        this.projectionDelta = void 0,
                        this.notifyListeners("measure", this.layout.actual),
                        null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
                    }
                }
                ,
                t.prototype.updateScroll = function() {
                    this.options.layoutScroll && this.instance && (this.scroll = i(this.instance))
                }
                ,
                t.prototype.resetTransform = function() {
                    var t;
                    if (o) {
                        var n = this.isLayoutDirty || this.shouldResetTransform
                          , e = this.projectionDelta && !Oe(this.projectionDelta)
                          , r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate
                          , i = null === r || void 0 === r ? void 0 : r(this.latestValues, "")
                          , a = i !== this.prevTransformTemplateValue;
                        n && (e || re(this.latestValues) || a) && (o(this.instance, i),
                        this.shouldResetTransform = !1,
                        this.scheduleRender())
                    }
                }
                ,
                t.prototype.measure = function() {
                    var t = this.options.visualElement;
                    if (!t)
                        return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                    var n = t.measureViewportBox()
                      , e = this.root.scroll;
                    return e && (ce(n.x, e.x),
                    ce(n.y, e.y)),
                    n
                }
                ,
                t.prototype.removeElementScroll = function(t) {
                    var n = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    te(n, t);
                    for (var e = 0; e < this.path.length; e++) {
                        var r = this.path[e]
                          , i = r.scroll
                          , o = r.options;
                        r !== this.root && i && o.layoutScroll && (ce(n.x, i.x),
                        ce(n.y, i.y))
                    }
                    return n
                }
                ,
                t.prototype.applyTransform = function(t, n) {
                    void 0 === n && (n = !1);
                    var e = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    te(e, t);
                    for (var r = 0; r < this.path.length; r++) {
                        var i = this.path[r];
                        !n && i.options.layoutScroll && i.scroll && i !== i.root && he(e, {
                            x: -i.scroll.x,
                            y: -i.scroll.y
                        }),
                        re(i.latestValues) && he(e, i.latestValues)
                    }
                    return re(this.latestValues) && he(e, this.latestValues),
                    e
                }
                ,
                t.prototype.removeTransform = function(t) {
                    var n, e = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    te(e, t);
                    for (var r = 0; r < this.path.length; r++) {
                        var i = this.path[r];
                        if (i.instance && re(i.latestValues)) {
                            ee(i.latestValues) && i.updateSnapshot();
                            var o = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            te(o, i.measure()),
                            Pe(e, i.latestValues, null === (n = i.snapshot) || void 0 === n ? void 0 : n.layout, o)
                        }
                    }
                    return re(this.latestValues) && Pe(e, this.latestValues),
                    e
                }
                ,
                t.prototype.setTargetDelta = function(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection()
                }
                ,
                t.prototype.setOptions = function(t) {
                    var n;
                    this.options = (0,
                    r.__assign)((0,
                    r.__assign)((0,
                    r.__assign)({}, this.options), t), {
                        crossfade: null === (n = t.crossfade) || void 0 === n || n
                    })
                }
                ,
                t.prototype.clearMeasurements = function() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                ,
                t.prototype.resolveTargetDelta = function() {
                    var t, n, e, r, i = this.options, o = i.layout, a = i.layoutId;
                    this.layout && (o || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    Ce(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual),
                    te(this.relativeTarget, this.relativeTargetOrigin))),
                    (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.targetWithTransforms = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }),
                    this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (n = this.target,
                    e = this.relativeTarget,
                    r = this.relativeParent.target,
                    ke(n.x, e.x, r.x),
                    ke(n.y, e.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : te(this.target, this.layout.actual),
                    le(this.target, this.targetDelta)) : te(this.target, this.layout.actual),
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
                    this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    Ce(this.relativeTargetOrigin, this.target, this.relativeParent.target),
                    te(this.relativeTarget, this.relativeTargetOrigin)))))
                }
                ,
                t.prototype.getClosestProjectingParent = function() {
                    if (this.parent && !re(this.parent.latestValues))
                        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                }
                ,
                t.prototype.calcProjection = function() {
                    var t, n = this.options, e = n.layout, r = n.layoutId;
                    if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    this.layout && (e || r)) {
                        var i = this.getLead();
                        te(this.layoutCorrected, this.layout.actual),
                        function(t, n, e, r) {
                            var i, o;
                            void 0 === r && (r = !1);
                            var a = e.length;
                            if (a) {
                                var s, l;
                                n.x = n.y = 1;
                                for (var c = 0; c < a; c++)
                                    l = (s = e[c]).projectionDelta,
                                    "contents" !== (null === (o = null === (i = s.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && he(t, {
                                        x: -s.scroll.x,
                                        y: -s.scroll.y
                                    }),
                                    l && (n.x *= l.x.scale,
                                    n.y *= l.y.scale,
                                    le(t, l)),
                                    r && re(s.latestValues) && he(t, s.latestValues))
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== i);
                        var o = i.target;
                        if (o) {
                            this.projectionDelta || (this.projectionDelta = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            },
                            this.projectionDeltaWithTransform = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            });
                            var a = this.treeScale.x
                              , s = this.treeScale.y
                              , l = this.projectionTransform;
                            xe(this.projectionDelta, this.layoutCorrected, o, this.latestValues),
                            this.projectionTransform = Re(this.projectionDelta, this.treeScale),
                            this.projectionTransform === l && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0,
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", o))
                        }
                    }
                }
                ,
                t.prototype.hide = function() {
                    this.isVisible = !1
                }
                ,
                t.prototype.show = function() {
                    this.isVisible = !0
                }
                ,
                t.prototype.scheduleRender = function(t) {
                    var n, e, r;
                    void 0 === t && (t = !0),
                    null === (e = (n = this.options).scheduleRender) || void 0 === e || e.call(n),
                    t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()),
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                ,
                t.prototype.setAnimationOrigin = function(t, n) {
                    var e, i = this;
                    void 0 === n && (n = !1);
                    var o = this.snapshot
                      , a = (null === o || void 0 === o ? void 0 : o.latestValues) || {}
                      , s = (0,
                    r.__assign)({}, this.latestValues)
                      , l = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    this.relativeTarget = this.relativeTargetOrigin = void 0,
                    this.attemptToResolveRelativeTarget = !n;
                    var c = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }
                      , u = null === o || void 0 === o ? void 0 : o.isShared
                      , d = ((null === (e = this.getStack()) || void 0 === e ? void 0 : e.members.length) || 0) <= 1
                      , f = Boolean(u && !d && !0 === this.options.crossfade && !this.path.some(sr));
                    this.mixTargetDelta = function(n) {
                        var e, r, o, h, p, m = n / 1e3;
                        or(l.x, t.x, m),
                        or(l.y, t.y, m),
                        i.setTargetDelta(l),
                        i.relativeTarget && i.relativeTargetOrigin && i.layout && (null === (e = i.relativeParent) || void 0 === e ? void 0 : e.layout) && (Ce(c, i.layout.actual, i.relativeParent.layout.actual),
                        r = i.relativeTarget,
                        o = i.relativeTargetOrigin,
                        h = c,
                        p = m,
                        ar(r.x, o.x, h.x, p),
                        ar(r.y, o.y, h.y, p)),
                        u && (i.animationValues = s,
                        function(t, n, e, r, i, o) {
                            var a, s, l, c;
                            i ? (t.opacity = T(0, null !== (a = e.opacity) && void 0 !== a ? a : 1, Gn(r)),
                            t.opacityExit = T(null !== (s = n.opacity) && void 0 !== s ? s : 1, 0, Kn(r))) : o && (t.opacity = T(null !== (l = n.opacity) && void 0 !== l ? l : 1, null !== (c = e.opacity) && void 0 !== c ? c : 1, r));
                            for (var u = 0; u < Wn; u++) {
                                var d = "border".concat(Un[u], "Radius")
                                  , f = $n(n, d)
                                  , h = $n(e, d);
                                void 0 === f && void 0 === h || (f || (f = 0),
                                h || (h = 0),
                                0 === f || 0 === h || qn(f) === qn(h) ? (t[d] = Math.max(T(Xn(f), Xn(h), r), 0),
                                (lt.test(h) || lt.test(f)) && (t[d] += "%")) : t[d] = h)
                            }
                            (n.rotate || e.rotate) && (t.rotate = T(n.rotate || 0, e.rotate || 0, r))
                        }(s, a, i.latestValues, m, f, d)),
                        i.root.scheduleUpdateProjection(),
                        i.scheduleRender()
                    }
                    ,
                    this.mixTargetDelta(0)
                }
                ,
                t.prototype.startAnimation = function(t) {
                    var n, e, i = this;
                    null === (n = this.currentAnimation) || void 0 === n || n.stop(),
                    this.resumingFrom && (null === (e = this.resumingFrom.currentAnimation) || void 0 === e || e.stop()),
                    this.pendingAnimation && (A.qY.update(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = A.ZP.update((function() {
                        Xe.hasAnimatedSinceResize = !0,
                        i.currentAnimation = function(t, n, e) {
                            void 0 === e && (e = {});
                            var r = L(t) ? t : M(t);
                            return Nn("", r, n, e),
                            {
                                stop: function() {
                                    return r.stop()
                                },
                                isAnimating: function() {
                                    return r.isAnimating()
                                }
                            }
                        }(0, 1e3, (0,
                        r.__assign)((0,
                        r.__assign)({}, t), {
                            onUpdate: function(n) {
                                var e;
                                i.mixTargetDelta(n),
                                null === (e = t.onUpdate) || void 0 === e || e.call(t, n)
                            },
                            onComplete: function() {
                                var n;
                                null === (n = t.onComplete) || void 0 === n || n.call(t),
                                i.completeAnimation()
                            }
                        })),
                        i.resumingFrom && (i.resumingFrom.currentAnimation = i.currentAnimation),
                        i.pendingAnimation = void 0
                    }
                    ))
                }
                ,
                t.prototype.completeAnimation = function() {
                    var t;
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0),
                    null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                ,
                t.prototype.finishAnimation = function() {
                    var t;
                    this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                ,
                t.prototype.applyTransformsToTarget = function() {
                    var t = this.getLead()
                      , n = t.targetWithTransforms
                      , e = t.target
                      , r = t.layout
                      , i = t.latestValues;
                    n && e && r && (te(n, e),
                    he(n, i),
                    xe(this.projectionDeltaWithTransform, this.layoutCorrected, n, i))
                }
                ,
                t.prototype.registerSharedNode = function(t, n) {
                    var e, r, i;
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new Me),
                    this.sharedNodes.get(t).add(n),
                    n.promote({
                        transition: null === (e = n.options.initialPromotionConfig) || void 0 === e ? void 0 : e.transition,
                        preserveFollowOpacity: null === (i = null === (r = n.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, n)
                    })
                }
                ,
                t.prototype.isLead = function() {
                    var t = this.getStack();
                    return !t || t.lead === this
                }
                ,
                t.prototype.getLead = function() {
                    var t;
                    return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                ,
                t.prototype.getPrevLead = function() {
                    var t;
                    return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                ,
                t.prototype.getStack = function() {
                    var t = this.options.layoutId;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                ,
                t.prototype.promote = function(t) {
                    var n = void 0 === t ? {} : t
                      , e = n.needsReset
                      , r = n.transition
                      , i = n.preserveFollowOpacity
                      , o = this.getStack();
                    o && o.promote(this, i),
                    e && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    r && this.setOptions({
                        transition: r
                    })
                }
                ,
                t.prototype.relegate = function() {
                    var t = this.getStack();
                    return !!t && t.relegate(this)
                }
                ,
                t.prototype.resetRotation = function() {
                    var t = this.options.visualElement;
                    if (t) {
                        for (var n = !1, e = {}, r = 0; r < De.length; r++) {
                            var i = "rotate" + De[r];
                            t.getStaticValue(i) && (n = !0,
                            e[i] = t.getStaticValue(i),
                            t.setStaticValue(i, 0))
                        }
                        if (n) {
                            for (var i in null === t || void 0 === t || t.syncRender(),
                            e)
                                t.setStaticValue(i, e[i]);
                            t.scheduleRender()
                        }
                    }
                }
                ,
                t.prototype.getProjectionStyles = function(t) {
                    var n, e, r, i, o, a;
                    void 0 === t && (t = {});
                    var s = {};
                    if (!this.instance || this.isSVG)
                        return s;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    s.visibility = "";
                    var l = null === (n = this.options.visualElement) || void 0 === n ? void 0 : n.getProps().transformTemplate;
                    if (this.needsReset)
                        return this.needsReset = !1,
                        s.opacity = "",
                        s.pointerEvents = We(t.pointerEvents) || "",
                        s.transform = l ? l(this.latestValues, "") : "none",
                        s;
                    var c = this.getLead();
                    if (!this.projectionDelta || !this.layout || !c.target) {
                        var u = {};
                        return this.options.layoutId && (u.opacity = null !== (e = this.latestValues.opacity) && void 0 !== e ? e : 1,
                        u.pointerEvents = We(t.pointerEvents) || ""),
                        this.hasProjected && !re(this.latestValues) && (u.transform = l ? l({}, "") : "none",
                        this.hasProjected = !1),
                        u
                    }
                    var d = c.animationValues || c.latestValues;
                    this.applyTransformsToTarget(),
                    s.transform = Re(this.projectionDeltaWithTransform, this.treeScale, d),
                    l && (s.transform = l(d, s.transform));
                    var f = this.projectionDelta
                      , h = f.x
                      , p = f.y;
                    for (var m in s.transformOrigin = "".concat(100 * h.origin, "% ").concat(100 * p.origin, "% 0"),
                    c.animationValues ? s.opacity = c === this ? null !== (i = null !== (r = d.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : s.opacity = c === this ? null !== (o = d.opacity) && void 0 !== o ? o : "" : null !== (a = d.opacityExit) && void 0 !== a ? a : 0,
                    Le)
                        if (void 0 !== d[m]) {
                            var v = Le[m]
                              , g = v.correct
                              , y = v.applyTo
                              , b = g(d[m], c);
                            if (y)
                                for (var w = y.length, x = 0; x < w; x++)
                                    s[y[x]] = b;
                            else
                                s[m] = b
                        }
                    return this.options.layoutId && (s.pointerEvents = c === this ? We(t.pointerEvents) || "" : "none"),
                    s
                }
                ,
                t.prototype.clearSnapshot = function() {
                    this.resumeFrom = this.snapshot = void 0
                }
                ,
                t.prototype.resetTree = function() {
                    this.root.nodes.forEach((function(t) {
                        var n;
                        return null === (n = t.currentAnimation) || void 0 === n ? void 0 : n.stop()
                    }
                    )),
                    this.root.nodes.forEach(Je),
                    this.root.sharedNodes.clear()
                }
                ,
                t
            }()
        }
        function $e(t) {
            t.updateLayout()
        }
        function Ge(t) {
            var n, e, r, i, o = null !== (e = null === (n = t.resumeFrom) || void 0 === n ? void 0 : n.snapshot) && void 0 !== e ? e : t.snapshot;
            if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
                var a = t.layout
                  , s = a.actual
                  , l = a.measured;
                "size" === t.options.animationType ? ze((function(t) {
                    var n = o.isShared ? o.measured[t] : o.layout[t]
                      , e = ye(n);
                    n.min = s[t].min,
                    n.max = n.min + e
                }
                )) : "position" === t.options.animationType && ze((function(t) {
                    var n = o.isShared ? o.measured[t] : o.layout[t]
                      , e = ye(s[t]);
                    n.max = n.min + e
                }
                ));
                var c = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                };
                xe(c, s, o.layout);
                var u = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                };
                o.isShared ? xe(u, t.applyTransform(l, !0), o.measured) : xe(u, s, o.layout);
                var d = !Oe(c)
                  , f = !1;
                if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(),
                t.relativeParent && !t.relativeParent.resumeFrom)) {
                    var h = t.relativeParent
                      , p = h.snapshot
                      , m = h.layout;
                    if (p && m) {
                        var v = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Ce(v, o.layout, p.layout);
                        var g = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Ce(g, s, m.actual),
                        Ie(v, g) || (f = !0)
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: s,
                    snapshot: o,
                    delta: u,
                    layoutDelta: c,
                    hasLayoutChanged: d,
                    hasRelativeTargetChanged: f
                })
            } else
                t.isLead() && (null === (i = (r = t.options).onExitComplete) || void 0 === i || i.call(r));
            t.options.transition = void 0
        }
        function Ke(t) {
            t.clearSnapshot()
        }
        function Je(t) {
            t.clearMeasurements()
        }
        function Qe(t) {
            t.resetTransform()
        }
        function tr(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0
        }
        function nr(t) {
            t.resolveTargetDelta()
        }
        function er(t) {
            t.calcProjection()
        }
        function rr(t) {
            t.resetRotation()
        }
        function ir(t) {
            t.removeLeadSnapshot()
        }
        function or(t, n, e) {
            t.translate = T(n.translate, 0, e),
            t.scale = T(n.scale, 1, e),
            t.origin = n.origin,
            t.originPoint = n.originPoint
        }
        function ar(t, n, e, r) {
            t.min = T(n.min, e.min, r),
            t.max = T(n.max, e.max, r)
        }
        function sr(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        var lr = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function cr(t, n) {
            for (var e = t.root, r = t.path.length - 1; r >= 0; r--)
                if (Boolean(t.path[r].instance)) {
                    e = t.path[r];
                    break
                }
            var i = (e && e !== t.root ? e.instance : document).querySelector('[data-projection-id="'.concat(n, '"]'));
            i && t.mount(i, !0)
        }
        function ur(t) {
            t.min = Math.round(t.min),
            t.max = Math.round(t.max)
        }
        function dr(t) {
            ur(t.x),
            ur(t.y)
        }
        var fr = 1;
        var hr = e(5364)
          , pr = (0,
        i.createContext)({});
        var mr = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0,
            r.__extends)(n, t),
            n.prototype.getSnapshotBeforeUpdate = function() {
                return this.updateProps(),
                null
            }
            ,
            n.prototype.componentDidUpdate = function() {}
            ,
            n.prototype.updateProps = function() {
                var t = this.props
                  , n = t.visualElement
                  , e = t.props;
                n && n.setProps(e)
            }
            ,
            n.prototype.render = function() {
                return this.props.children
            }
            ,
            n
        }(i.Component);
        function vr(t) {
            var n = t.preloadedFeatures
              , e = t.createVisualElement
              , o = t.projectionNodeConstructor
              , f = t.useRender
              , p = t.useVisualState
              , g = t.Component;
            return n && function(t) {
                for (var n in t)
                    null !== t[n] && ("projectionNodeConstructor" === n ? a.projectionNodeConstructor = t[n] : a[n].Component = t[n])
            }(n),
            (0,
            i.forwardRef)((function(t, n) {
                var y = function(t) {
                    var n, e = t.layoutId, r = null === (n = (0,
                    i.useContext)(hr.p)) || void 0 === n ? void 0 : n.id;
                    return r && void 0 !== e ? r + "-" + e : e
                }(t);
                t = (0,
                r.__assign)((0,
                r.__assign)({}, t), {
                    layoutId: y
                });
                var b = (0,
                i.useContext)(u)
                  , w = null
                  , x = S(t)
                  , k = b.isStatic ? void 0 : (0,
                E.h)((function() {
                    if (Xe.hasEverUpdated)
                        return fr++
                }
                ))
                  , C = p(t, b.isStatic);
                return !b.isStatic && h && (x.visualElement = m(g, C, (0,
                r.__assign)((0,
                r.__assign)({}, b), t), e),
                function(t, n, e, r) {
                    var o, a = n.layoutId, s = n.layout, l = n.drag, c = n.dragConstraints, u = n.layoutScroll, d = (0,
                    i.useContext)(pr);
                    r && e && !(null === e || void 0 === e ? void 0 : e.projection) && (e.projection = new r(t,e.getLatestValues(),null === (o = e.parent) || void 0 === o ? void 0 : o.projection),
                    e.projection.setOptions({
                        layoutId: a,
                        layout: s,
                        alwaysMeasureLayout: Boolean(l) || c && v(c),
                        visualElement: e,
                        scheduleRender: function() {
                            return e.scheduleRender()
                        },
                        animationType: "string" === typeof s ? s : "both",
                        initialPromotionConfig: d,
                        layoutScroll: u
                    }))
                }(k, t, x.visualElement, o || a.projectionNodeConstructor),
                w = function(t, n, e) {
                    var o = [];
                    if ((0,
                    i.useContext)(s),
                    !n)
                        return null;
                    for (var u = 0; u < c; u++) {
                        var d = l[u]
                          , f = a[d]
                          , h = f.isEnabled
                          , p = f.Component;
                        h(t) && p && o.push(i.createElement(p, (0,
                        r.__assign)({
                            key: d
                        }, t, {
                            visualElement: n
                        })))
                    }
                    return o
                }(t, x.visualElement)),
                i.createElement(mr, {
                    visualElement: x.visualElement,
                    props: (0,
                    r.__assign)((0,
                    r.__assign)({}, b), t)
                }, w, i.createElement(d.Provider, {
                    value: x
                }, f(g, t, k, function(t, n, e) {
                    return (0,
                    i.useCallback)((function(r) {
                        var i;
                        r && (null === (i = t.mount) || void 0 === i || i.call(t, r)),
                        n && (r ? n.mount(r) : n.unmount()),
                        e && ("function" === typeof e ? e(r) : v(e) && (e.current = r))
                    }
                    ), [n])
                }(C, x.visualElement, n), C, b.isStatic, x.visualElement)))
            }
            ))
        }
        function gr(t) {
            function n(n, e) {
                return void 0 === e && (e = {}),
                vr(t(n, e))
            }
            if ("undefined" === typeof Proxy)
                return n;
            var e = new Map;
            return new Proxy(n,{
                get: function(t, r) {
                    return e.has(r) || e.set(r, n(r)),
                    e.get(r)
                }
            })
        }
        var yr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
        function br(t) {
            return "string" === typeof t && !t.includes("-") && !!(yr.indexOf(t) > -1 || /[A-Z]/.test(t))
        }
        function wr(t, n) {
            var e = n.layout
              , r = n.layoutId;
            return Ye(t) || He(t) || (e || void 0 !== r) && (!!Le[t] || "opacity" === t)
        }
        var xr = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        };
        function kr(t) {
            return t.startsWith("--")
        }
        var Sr = function(t, n) {
            return n && "number" === typeof t ? n.transform(t) : t
        };
        function Cr(t, n, e, r) {
            var i, o = t.style, a = t.vars, s = t.transform, l = t.transformKeys, c = t.transformOrigin;
            l.length = 0;
            var u = !1
              , d = !1
              , f = !0;
            for (var h in n) {
                var p = n[h];
                if (kr(h))
                    a[h] = p;
                else {
                    var m = In[h]
                      , v = Sr(p, m);
                    if (Ye(h)) {
                        if (u = !0,
                        s[h] = v,
                        l.push(h),
                        !f)
                            continue;
                        p !== (null !== (i = m.default) && void 0 !== i ? i : 0) && (f = !1)
                    } else
                        He(h) ? (c[h] = v,
                        d = !0) : o[h] = v
                }
            }
            u ? o.transform = function(t, n, e, r) {
                var i = t.transform
                  , o = t.transformKeys
                  , a = n.enableHardwareAcceleration
                  , s = void 0 === a || a
                  , l = n.allowTransformNone
                  , c = void 0 === l || l
                  , u = "";
                o.sort(Ve);
                for (var d = !1, f = o.length, h = 0; h < f; h++) {
                    var p = o[h];
                    u += "".concat(xr[p] || p, "(").concat(i[p], ") "),
                    "z" === p && (d = !0)
                }
                return !d && s ? u += "translateZ(0)" : u = u.trim(),
                r ? u = r(i, e ? "" : u) : c && e && (u = "none"),
                u
            }(t, e, f, r) : r ? o.transform = r({}, "") : !n.transform && o.transform && (o.transform = "none"),
            d && (o.transformOrigin = function(t) {
                var n = t.originX
                  , e = void 0 === n ? "50%" : n
                  , r = t.originY
                  , i = void 0 === r ? "50%" : r
                  , o = t.originZ
                  , a = void 0 === o ? 0 : o;
                return "".concat(e, " ").concat(i, " ").concat(a)
            }(c))
        }
        var Er = function() {
            return {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }
        };
        function Ar(t, n, e) {
            for (var r in n)
                L(n[r]) || wr(r, e) || (t[r] = n[r])
        }
        function Tr(t, n, e) {
            var o = {};
            return Ar(o, t.style || {}, t),
            Object.assign(o, function(t, n, e) {
                var o = t.transformTemplate;
                return (0,
                i.useMemo)((function() {
                    var t = {
                        style: {},
                        transform: {},
                        transformKeys: [],
                        transformOrigin: {},
                        vars: {}
                    };
                    Cr(t, n, {
                        enableHardwareAcceleration: !e
                    }, o);
                    var i = t.vars
                      , a = t.style;
                    return (0,
                    r.__assign)((0,
                    r.__assign)({}, i), a)
                }
                ), [n])
            }(t, n, e)),
            t.transformValues && (o = t.transformValues(o)),
            o
        }
        function _r(t, n, e) {
            var r = {}
              , i = Tr(t, n, e);
            return Boolean(t.drag) && !1 !== t.dragListener && (r.draggable = !1,
            i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
            i.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")),
            r.style = i,
            r
        }
        var Pr = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);
        function jr(t) {
            return Pr.has(t)
        }
        var Or, Ir = function(t) {
            return !jr(t)
        };
        try {
            (Or = require("@emotion/is-prop-valid").default) && (Ir = function(t) {
                return t.startsWith("on") ? !jr(t) : Or(t)
            }
            )
        } catch (ia) {}
        function Mr(t, n, e) {
            return "string" === typeof t ? t : ct.transform(n + e * t)
        }
        var Lr = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , Rr = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function zr(t, n, e, i) {
            var o = n.attrX
              , a = n.attrY
              , s = n.originX
              , l = n.originY
              , c = n.pathLength
              , u = n.pathSpacing
              , d = void 0 === u ? 1 : u
              , f = n.pathOffset
              , h = void 0 === f ? 0 : f;
            Cr(t, (0,
            r.__rest)(n, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), e, i),
            t.attrs = t.style,
            t.style = {};
            var p = t.attrs
              , m = t.style
              , v = t.dimensions;
            p.transform && (v && (m.transform = p.transform),
            delete p.transform),
            v && (void 0 !== s || void 0 !== l || m.transform) && (m.transformOrigin = function(t, n, e) {
                var r = Mr(n, t.x, t.width)
                  , i = Mr(e, t.y, t.height);
                return "".concat(r, " ").concat(i)
            }(v, void 0 !== s ? s : .5, void 0 !== l ? l : .5)),
            void 0 !== o && (p.x = o),
            void 0 !== a && (p.y = a),
            void 0 !== c && function(t, n, e, r, i) {
                void 0 === e && (e = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                t.pathLength = 1;
                var o = i ? Lr : Rr;
                t[o.offset] = ct.transform(-r);
                var a = ct.transform(n)
                  , s = ct.transform(e);
                t[o.array] = "".concat(a, " ").concat(s)
            }(p, c, d, h, !1)
        }
        var Dr = function() {
            return (0,
            r.__assign)((0,
            r.__assign)({}, {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }), {
                attrs: {}
            })
        };
        function Zr(t, n) {
            var e = (0,
            i.useMemo)((function() {
                var e = Dr();
                return zr(e, n, {
                    enableHardwareAcceleration: !1
                }, t.transformTemplate),
                (0,
                r.__assign)((0,
                r.__assign)({}, e.attrs), {
                    style: (0,
                    r.__assign)({}, e.style)
                })
            }
            ), [n]);
            if (t.style) {
                var o = {};
                Ar(o, t.style, t),
                e.style = (0,
                r.__assign)((0,
                r.__assign)({}, o), e.style)
            }
            return e
        }
        function Vr(t) {
            void 0 === t && (t = !1);
            return function(n, e, o, a, s, l) {
                var c = s.latestValues
                  , u = (br(n) ? Zr : _r)(e, c, l)
                  , d = function(t, n, e) {
                    var r = {};
                    for (var i in t)
                        (Ir(i) || !0 === e && jr(i) || !n && !jr(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
                    return r
                }(e, "string" === typeof n, t)
                  , f = (0,
                r.__assign)((0,
                r.__assign)((0,
                r.__assign)({}, d), u), {
                    ref: a
                });
                return o && (f["data-projection-id"] = o),
                (0,
                i.createElement)(n, f)
            }
        }
        var Br = /([a-z])([A-Z])/g
          , Yr = function(t) {
            return t.replace(Br, "$1-$2").toLowerCase()
        };
        function Fr(t, n, e, r) {
            var i = n.style
              , o = n.vars;
            for (var a in Object.assign(t.style, i, r && r.getProjectionStyles(e)),
            o)
                t.style.setProperty(a, o[a])
        }
        var Hr = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);
        function Nr(t, n) {
            for (var e in Fr(t, n),
            n.attrs)
                t.setAttribute(Hr.has(e) ? e : Yr(e), n.attrs[e])
        }
        function Ur(t) {
            var n = t.style
              , e = {};
            for (var r in n)
                (L(n[r]) || wr(r, t)) && (e[r] = n[r]);
            return e
        }
        function Wr(t) {
            var n = Ur(t);
            for (var e in t) {
                if (L(t[e]))
                    n["x" === e || "y" === e ? "attr" + e.toUpperCase() : e] = t[e]
            }
            return n
        }
        function Xr(t) {
            return "object" === typeof t && "function" === typeof t.start
        }
        function qr(t, n, e, r) {
            var i = t.scrapeMotionValuesFromProps
              , o = t.createRenderState
              , a = t.onMount
              , s = {
                latestValues: Gr(n, e, r, i),
                renderState: o()
            };
            return a && (s.mount = function(t) {
                return a(n, t, s)
            }
            ),
            s
        }
        var $r = function(t) {
            return function(n, e) {
                var r = (0,
                i.useContext)(d)
                  , o = (0,
                i.useContext)(f.O);
                return e ? qr(t, n, r, o) : (0,
                E.h)((function() {
                    return qr(t, n, r, o)
                }
                ))
            }
        };
        function Gr(t, n, e, i) {
            var o = {}
              , a = !1 === (null === e || void 0 === e ? void 0 : e.initial)
              , s = i(t);
            for (var l in s)
                o[l] = We(s[l]);
            var c = t.initial
              , u = t.animate
              , d = x(t)
              , f = k(t);
            n && f && !d && !1 !== t.inherit && (null !== c && void 0 !== c || (c = n.initial),
            null !== u && void 0 !== u || (u = n.animate));
            var h = a || !1 === c
              , p = h ? u : c;
            p && "boolean" !== typeof p && !Xr(p) && (Array.isArray(p) ? p : [p]).forEach((function(n) {
                var e = b(t, n);
                if (e) {
                    var i = e.transitionEnd;
                    e.transition;
                    var a = (0,
                    r.__rest)(e, ["transitionEnd", "transition"]);
                    for (var s in a) {
                        var l = a[s];
                        if (Array.isArray(l))
                            l = l[h ? l.length - 1 : 0];
                        null !== l && (o[s] = l)
                    }
                    for (var s in i)
                        o[s] = i[s]
                }
            }
            ));
            return o
        }
        var Kr, Jr = {
            useVisualState: $r({
                scrapeMotionValuesFromProps: Wr,
                createRenderState: Dr,
                onMount: function(t, n, e) {
                    var r = e.renderState
                      , i = e.latestValues;
                    try {
                        r.dimensions = "function" === typeof n.getBBox ? n.getBBox() : n.getBoundingClientRect()
                    } catch (o) {
                        r.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    zr(r, i, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate),
                    Nr(n, r)
                }
            })
        }, Qr = {
            useVisualState: $r({
                scrapeMotionValuesFromProps: Ur,
                createRenderState: Er
            })
        };
        function ti(t, n, e, r) {
            return t.addEventListener(n, e, r),
            function() {
                return t.removeEventListener(n, e, r)
            }
        }
        function ni(t, n, e, r) {
            (0,
            i.useEffect)((function() {
                var i = t.current;
                if (e && i)
                    return ti(i, n, e, r)
            }
            ), [t, n, e, r])
        }
        function ei(t) {
            return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
        }
        function ri(t) {
            return !!t.touches
        }
        !function(t) {
            t.Animate = "animate",
            t.Hover = "whileHover",
            t.Tap = "whileTap",
            t.Drag = "whileDrag",
            t.Focus = "whileFocus",
            t.InView = "whileInView",
            t.Exit = "exit"
        }(Kr || (Kr = {}));
        var ii = {
            pageX: 0,
            pageY: 0
        };
        function oi(t, n) {
            void 0 === n && (n = "page");
            var e = t.touches[0] || t.changedTouches[0] || ii;
            return {
                x: e[n + "X"],
                y: e[n + "Y"]
            }
        }
        function ai(t, n) {
            return void 0 === n && (n = "page"),
            {
                x: t[n + "X"],
                y: t[n + "Y"]
            }
        }
        function si(t, n) {
            return void 0 === n && (n = "page"),
            {
                point: ri(t) ? oi(t, n) : ai(t, n)
            }
        }
        var li = function(t, n) {
            void 0 === n && (n = !1);
            var e, r = function(n) {
                return t(n, si(n))
            };
            return n ? (e = r,
            function(t) {
                var n = t instanceof MouseEvent;
                (!n || n && 0 === t.button) && e(t)
            }
            ) : r
        }
          , ci = {
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointercancel: "mousecancel",
            pointerover: "mouseover",
            pointerout: "mouseout",
            pointerenter: "mouseenter",
            pointerleave: "mouseleave"
        }
          , ui = {
            pointerdown: "touchstart",
            pointermove: "touchmove",
            pointerup: "touchend",
            pointercancel: "touchcancel"
        };
        function di(t) {
            return h && null === window.onpointerdown ? t : h && null === window.ontouchstart ? ui[t] : h && null === window.onmousedown ? ci[t] : t
        }
        function fi(t, n, e, r) {
            return ti(t, di(n), li(e, "pointerdown" === n), r)
        }
        function hi(t, n, e, r) {
            return ni(t, di(n), e && li(e, "pointerdown" === n), r)
        }
        function pi(t) {
            var n = null;
            return function() {
                return null === n && (n = t,
                function() {
                    n = null
                }
                )
            }
        }
        var mi = pi("dragHorizontal")
          , vi = pi("dragVertical");
        function gi(t) {
            var n = !1;
            if ("y" === t)
                n = vi();
            else if ("x" === t)
                n = mi();
            else {
                var e = mi()
                  , r = vi();
                e && r ? n = function() {
                    e(),
                    r()
                }
                : (e && e(),
                r && r())
            }
            return n
        }
        function yi() {
            var t = gi(!0);
            return !t || (t(),
            !1)
        }
        function bi(t, n, e) {
            return function(r, i) {
                var o;
                ei(r) && !yi() && (null === (o = t.animationState) || void 0 === o || o.setActive(Kr.Hover, n),
                null === e || void 0 === e || e(r, i))
            }
        }
        var wi = function(t, n) {
            return !!n && (t === n || wi(t, n.parentElement))
        }
          , xi = e(5411);
        var ki = new WeakMap
          , Si = new WeakMap
          , Ci = function(t) {
            var n;
            null === (n = ki.get(t.target)) || void 0 === n || n(t)
        }
          , Ei = function(t) {
            t.forEach(Ci)
        };
        function Ai(t, n, e) {
            var i = function(t) {
                var n = t.root
                  , e = (0,
                r.__rest)(t, ["root"])
                  , i = n || document;
                Si.has(i) || Si.set(i, {});
                var o = Si.get(i)
                  , a = JSON.stringify(e);
                return o[a] || (o[a] = new IntersectionObserver(Ei,(0,
                r.__assign)({
                    root: n
                }, e))),
                o[a]
            }(n);
            return ki.set(t, e),
            i.observe(t),
            function() {
                ki.delete(t),
                i.unobserve(t)
            }
        }
        var Ti = {
            some: 0,
            all: 1
        };
        function _i(t, n, e, r) {
            var o = r.root
              , a = r.margin
              , s = r.amount
              , l = void 0 === s ? "some" : s
              , c = r.once;
            (0,
            i.useEffect)((function() {
                if (t) {
                    var r = {
                        root: null === o || void 0 === o ? void 0 : o.current,
                        rootMargin: a,
                        threshold: "number" === typeof l ? l : Ti[l]
                    };
                    return Ai(e.getInstance(), r, (function(t) {
                        var r, i = t.isIntersecting;
                        if (n.isInView !== i && (n.isInView = i,
                        !c || i || !n.hasEnteredView)) {
                            i && (n.hasEnteredView = !0),
                            null === (r = e.animationState) || void 0 === r || r.setActive(Kr.InView, i);
                            var o = e.getProps()
                              , a = i ? o.onViewportEnter : o.onViewportLeave;
                            null === a || void 0 === a || a(t)
                        }
                    }
                    ))
                }
            }
            ), [t, o, a, l])
        }
        function Pi(t, n, e) {
            (0,
            i.useEffect)((function() {
                t && requestAnimationFrame((function() {
                    var t;
                    n.hasEnteredView = !0;
                    var r = e.getProps().onViewportEnter;
                    null === r || void 0 === r || r(null),
                    null === (t = e.animationState) || void 0 === t || t.setActive(Kr.InView, !0)
                }
                ))
            }
            ), [t])
        }
        var ji = function(t) {
            return function(n) {
                return t(n),
                null
            }
        }
          , Oi = {
            inView: ji((function(t) {
                var n = t.visualElement
                  , e = t.whileInView
                  , r = t.onViewportEnter
                  , o = t.onViewportLeave
                  , a = t.viewport
                  , s = void 0 === a ? {} : a
                  , l = (0,
                i.useRef)({
                    hasEnteredView: !1,
                    isInView: !1
                })
                  , c = Boolean(e || r || o);
                s.once && l.current.hasEnteredView && (c = !1),
                ("undefined" === typeof IntersectionObserver ? Pi : _i)(c, l.current, n, s)
            }
            )),
            tap: ji((function(t) {
                var n = t.onTap
                  , e = t.onTapStart
                  , r = t.onTapCancel
                  , o = t.whileTap
                  , a = t.visualElement
                  , s = n || e || r || o
                  , l = (0,
                i.useRef)(!1)
                  , c = (0,
                i.useRef)(null);
                function u() {
                    var t;
                    null === (t = c.current) || void 0 === t || t.call(c),
                    c.current = null
                }
                function d() {
                    var t;
                    return u(),
                    l.current = !1,
                    null === (t = a.animationState) || void 0 === t || t.setActive(Kr.Tap, !1),
                    !yi()
                }
                function f(t, e) {
                    d() && (wi(a.getInstance(), t.target) ? null === n || void 0 === n || n(t, e) : null === r || void 0 === r || r(t, e))
                }
                function h(t, n) {
                    d() && (null === r || void 0 === r || r(t, n))
                }
                hi(a, "pointerdown", s ? function(t, n) {
                    var r;
                    u(),
                    l.current || (l.current = !0,
                    c.current = Ot(fi(window, "pointerup", f), fi(window, "pointercancel", h)),
                    null === (r = a.animationState) || void 0 === r || r.setActive(Kr.Tap, !0),
                    null === e || void 0 === e || e(t, n))
                }
                : void 0),
                (0,
                xi.z)(u)
            }
            )),
            focus: ji((function(t) {
                var n = t.whileFocus
                  , e = t.visualElement;
                ni(e, "focus", n ? function() {
                    var t;
                    null === (t = e.animationState) || void 0 === t || t.setActive(Kr.Focus, !0)
                }
                : void 0),
                ni(e, "blur", n ? function() {
                    var t;
                    null === (t = e.animationState) || void 0 === t || t.setActive(Kr.Focus, !1)
                }
                : void 0)
            }
            )),
            hover: ji((function(t) {
                var n = t.onHoverStart
                  , e = t.onHoverEnd
                  , r = t.whileHover
                  , i = t.visualElement;
                hi(i, "pointerenter", n || r ? bi(i, !0, n) : void 0),
                hi(i, "pointerleave", e || r ? bi(i, !1, e) : void 0)
            }
            ))
        };
        function Ii() {
            var t = (0,
            i.useContext)(f.O);
            if (null === t)
                return [!0, null];
            var n = t.isPresent
              , e = t.onExitComplete
              , r = t.register
              , o = Ri();
            (0,
            i.useEffect)((function() {
                return r(o)
            }
            ), []);
            return !n && e ? [!1, function() {
                return null === e || void 0 === e ? void 0 : e(o)
            }
            ] : [!0]
        }
        var Mi = 0
          , Li = function() {
            return Mi++
        }
          , Ri = function() {
            return (0,
            E.h)(Li)
        };
        function zi(t, n) {
            if (!Array.isArray(n))
                return !1;
            var e = n.length;
            if (e !== t.length)
                return !1;
            for (var r = 0; r < e; r++)
                if (n[r] !== t[r])
                    return !1;
            return !0
        }
        var Di = function(t) {
            return /^0[^.\s]+$/.test(t)
        }
          , Zi = function(t) {
            return function(n) {
                return n.test(t)
            }
        }
          , Vi = [K, ct, lt, st, dt, ut, {
            test: function(t) {
                return "auto" === t
            },
            parse: function(t) {
                return t
            }
        }]
          , Bi = function(t) {
            return Vi.find(Zi(t))
        }
          , Yi = (0,
        r.__spreadArray)((0,
        r.__spreadArray)([], (0,
        r.__read)(Vi), !1), [xt, _t], !1)
          , Fi = function(t) {
            return Yi.find(Zi(t))
        };
        function Hi(t, n, e) {
            t.hasValue(n) ? t.getValue(n).set(e) : t.addValue(n, M(e))
        }
        function Ni(t, n) {
            var e = w(t, n)
              , i = e ? t.makeTargetAnimatable(e, !1) : {}
              , o = i.transitionEnd
              , a = void 0 === o ? {} : o;
            i.transition;
            var s = (0,
            r.__rest)(i, ["transitionEnd", "transition"]);
            for (var l in s = (0,
            r.__assign)((0,
            r.__assign)({}, s), a)) {
                Hi(t, l, Dn(s[l]))
            }
        }
        function Ui(t, n) {
            if (n)
                return (n[t] || n.default || n).from
        }
        function Wi(t, n, e) {
            var i;
            void 0 === e && (e = {});
            var o = w(t, n, e.custom)
              , a = (o || {}).transition
              , s = void 0 === a ? t.getDefaultTransition() || {} : a;
            e.transitionOverride && (s = e.transitionOverride);
            var l = o ? function() {
                return Xi(t, o, e)
            }
            : function() {
                return Promise.resolve()
            }
              , c = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? function(i) {
                void 0 === i && (i = 0);
                var o = s.delayChildren
                  , a = void 0 === o ? 0 : o
                  , l = s.staggerChildren
                  , c = s.staggerDirection;
                return function(t, n, e, i, o, a) {
                    void 0 === e && (e = 0);
                    void 0 === i && (i = 0);
                    void 0 === o && (o = 1);
                    var s = []
                      , l = (t.variantChildren.size - 1) * i
                      , c = 1 === o ? function(t) {
                        return void 0 === t && (t = 0),
                        t * i
                    }
                    : function(t) {
                        return void 0 === t && (t = 0),
                        l - t * i
                    }
                    ;
                    return Array.from(t.variantChildren).sort(qi).forEach((function(t, i) {
                        s.push(Wi(t, n, (0,
                        r.__assign)((0,
                        r.__assign)({}, a), {
                            delay: e + c(i)
                        })).then((function() {
                            return t.notifyAnimationComplete(n)
                        }
                        )))
                    }
                    )),
                    Promise.all(s)
                }(t, n, a + i, l, c, e)
            }
            : function() {
                return Promise.resolve()
            }
              , u = s.when;
            if (u) {
                var d = (0,
                r.__read)("beforeChildren" === u ? [l, c] : [c, l], 2)
                  , f = d[0]
                  , h = d[1];
                return f().then(h)
            }
            return Promise.all([l(), c(e.delay)])
        }
        function Xi(t, n, e) {
            var i, o = void 0 === e ? {} : e, a = o.delay, s = void 0 === a ? 0 : a, l = o.transitionOverride, c = o.type, u = t.makeTargetAnimatable(n), d = u.transition, f = void 0 === d ? t.getDefaultTransition() : d, h = u.transitionEnd, p = (0,
            r.__rest)(u, ["transition", "transitionEnd"]);
            l && (f = l);
            var m = []
              , v = c && (null === (i = t.animationState) || void 0 === i ? void 0 : i.getState()[c]);
            for (var g in p) {
                var y = t.getValue(g)
                  , b = p[g];
                if (!(!y || void 0 === b || v && $i(v, g))) {
                    var w = Nn(g, y, b, (0,
                    r.__assign)({
                        delay: s
                    }, f));
                    m.push(w)
                }
            }
            return Promise.all(m).then((function() {
                h && Ni(t, h)
            }
            ))
        }
        function qi(t, n) {
            return t.sortNodePosition(n)
        }
        function $i(t, n) {
            var e = t.protectedKeys
              , r = t.needsAnimating
              , i = e.hasOwnProperty(n) && !0 !== r[n];
            return r[n] = !1,
            i
        }
        var Gi = [Kr.Animate, Kr.InView, Kr.Focus, Kr.Hover, Kr.Tap, Kr.Drag, Kr.Exit]
          , Ki = (0,
        r.__spreadArray)([], (0,
        r.__read)(Gi), !1).reverse()
          , Ji = Gi.length;
        function Qi(t) {
            return function(n) {
                return Promise.all(n.map((function(n) {
                    var e = n.animation
                      , r = n.options;
                    return function(t, n, e) {
                        var r;
                        if (void 0 === e && (e = {}),
                        t.notifyAnimationStart(n),
                        Array.isArray(n)) {
                            var i = n.map((function(n) {
                                return Wi(t, n, e)
                            }
                            ));
                            r = Promise.all(i)
                        } else if ("string" === typeof n)
                            r = Wi(t, n, e);
                        else {
                            var o = "function" === typeof n ? w(t, n, e.custom) : n;
                            r = Xi(t, o, e)
                        }
                        return r.then((function() {
                            return t.notifyAnimationComplete(n)
                        }
                        ))
                    }(t, e, r)
                }
                )))
            }
        }
        function to(t) {
            var n = Qi(t)
              , e = function() {
                var t;
                return (t = {})[Kr.Animate] = no(!0),
                t[Kr.InView] = no(),
                t[Kr.Hover] = no(),
                t[Kr.Tap] = no(),
                t[Kr.Drag] = no(),
                t[Kr.Focus] = no(),
                t[Kr.Exit] = no(),
                t
            }()
              , i = {}
              , o = !0
              , a = function(n, e) {
                var i = w(t, e);
                if (i) {
                    i.transition;
                    var o = i.transitionEnd
                      , a = (0,
                    r.__rest)(i, ["transition", "transitionEnd"]);
                    n = (0,
                    r.__assign)((0,
                    r.__assign)((0,
                    r.__assign)({}, n), a), o)
                }
                return n
            };
            function s(s, l) {
                for (var c, u = t.getProps(), d = t.getVariantContext(!0) || {}, f = [], h = new Set, p = {}, m = 1 / 0, v = function(n) {
                    var i = Ki[n]
                      , v = e[i]
                      , b = null !== (c = u[i]) && void 0 !== c ? c : d[i]
                      , w = y(b)
                      , x = i === l ? v.isActive : null;
                    !1 === x && (m = n);
                    var k = b === d[i] && b !== u[i] && w;
                    if (k && o && t.manuallyAnimateOnMount && (k = !1),
                    v.protectedKeys = (0,
                    r.__assign)({}, p),
                    !v.isActive && null === x || !b && !v.prevProp || Xr(b) || "boolean" === typeof b)
                        return "continue";
                    var S = function(t, n) {
                        if ("string" === typeof n)
                            return n !== t;
                        if (g(n))
                            return !zi(n, t);
                        return !1
                    }(v.prevProp, b)
                      , C = S || i === l && v.isActive && !k && w || n > m && w
                      , E = Array.isArray(b) ? b : [b]
                      , A = E.reduce(a, {});
                    !1 === x && (A = {});
                    var T = v.prevResolvedValues
                      , _ = void 0 === T ? {} : T
                      , P = (0,
                    r.__assign)((0,
                    r.__assign)({}, _), A)
                      , j = function(t) {
                        C = !0,
                        h.delete(t),
                        v.needsAnimating[t] = !0
                    };
                    for (var O in P) {
                        var I = A[O]
                          , M = _[O];
                        p.hasOwnProperty(O) || (I !== M ? xn(I) && xn(M) ? !zi(I, M) || S ? j(O) : v.protectedKeys[O] = !0 : void 0 !== I ? j(O) : h.add(O) : void 0 !== I && h.has(O) ? j(O) : v.protectedKeys[O] = !0)
                    }
                    v.prevProp = b,
                    v.prevResolvedValues = A,
                    v.isActive && (p = (0,
                    r.__assign)((0,
                    r.__assign)({}, p), A)),
                    o && t.blockInitialAnimation && (C = !1),
                    C && !k && f.push.apply(f, (0,
                    r.__spreadArray)([], (0,
                    r.__read)(E.map((function(t) {
                        return {
                            animation: t,
                            options: (0,
                            r.__assign)({
                                type: i
                            }, s)
                        }
                    }
                    ))), !1))
                }, b = 0; b < Ji; b++)
                    v(b);
                if (i = (0,
                r.__assign)({}, p),
                h.size) {
                    var w = {};
                    h.forEach((function(n) {
                        var e = t.getBaseTarget(n);
                        void 0 !== e && (w[n] = e)
                    }
                    )),
                    f.push({
                        animation: w
                    })
                }
                var x = Boolean(f.length);
                return o && !1 === u.initial && !t.manuallyAnimateOnMount && (x = !1),
                o = !1,
                x ? n(f) : Promise.resolve()
            }
            return {
                isAnimated: function(t) {
                    return void 0 !== i[t]
                },
                animateChanges: s,
                setActive: function(n, r, i) {
                    var o;
                    return e[n].isActive === r ? Promise.resolve() : (null === (o = t.variantChildren) || void 0 === o || o.forEach((function(t) {
                        var e;
                        return null === (e = t.animationState) || void 0 === e ? void 0 : e.setActive(n, r)
                    }
                    )),
                    e[n].isActive = r,
                    s(i, n))
                },
                setAnimateFunction: function(e) {
                    n = e(t)
                },
                getState: function() {
                    return e
                }
            }
        }
        function no(t) {
            return void 0 === t && (t = !1),
            {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        var eo = {
            animation: ji((function(t) {
                var n = t.visualElement
                  , e = t.animate;
                n.animationState || (n.animationState = to(n)),
                Xr(e) && (0,
                i.useEffect)((function() {
                    return e.subscribe(n)
                }
                ), [e])
            }
            )),
            exit: ji((function(t) {
                var n = t.custom
                  , e = t.visualElement
                  , o = (0,
                r.__read)(Ii(), 2)
                  , a = o[0]
                  , s = o[1]
                  , l = (0,
                i.useContext)(f.O);
                (0,
                i.useEffect)((function() {
                    var t, r;
                    e.isPresent = a;
                    var i = null === (t = e.animationState) || void 0 === t ? void 0 : t.setActive(Kr.Exit, !a, {
                        custom: null !== (r = null === l || void 0 === l ? void 0 : l.custom) && void 0 !== r ? r : n
                    });
                    !a && (null === i || void 0 === i || i.then(s))
                }
                ), [a])
            }
            ))
        }
          , ro = function() {
            function t(t, n, e) {
                var i = this
                  , o = (void 0 === e ? {} : e).transformPagePoint;
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = function() {
                    if (i.lastMoveEvent && i.lastMoveEventInfo) {
                        var t = ao(i.lastMoveEventInfo, i.history)
                          , n = null !== i.startEvent
                          , e = ge(t.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                        if (n || e) {
                            var o = t.point
                              , a = (0,
                            A.$B)().timestamp;
                            i.history.push((0,
                            r.__assign)((0,
                            r.__assign)({}, o), {
                                timestamp: a
                            }));
                            var s = i.handlers
                              , l = s.onStart
                              , c = s.onMove;
                            n || (l && l(i.lastMoveEvent, t),
                            i.startEvent = i.lastMoveEvent),
                            c && c(i.lastMoveEvent, t)
                        }
                    }
                }
                ,
                this.handlePointerMove = function(t, n) {
                    i.lastMoveEvent = t,
                    i.lastMoveEventInfo = io(n, i.transformPagePoint),
                    ei(t) && 0 === t.buttons ? i.handlePointerUp(t, n) : A.ZP.update(i.updatePoint, !0)
                }
                ,
                this.handlePointerUp = function(t, n) {
                    i.end();
                    var e = i.handlers
                      , r = e.onEnd
                      , o = e.onSessionEnd
                      , a = ao(io(n, i.transformPagePoint), i.history);
                    i.startEvent && r && r(t, a),
                    o && o(t, a)
                }
                ,
                !(ri(t) && t.touches.length > 1)) {
                    this.handlers = n,
                    this.transformPagePoint = o;
                    var a = io(si(t), this.transformPagePoint)
                      , s = a.point
                      , l = (0,
                    A.$B)().timestamp;
                    this.history = [(0,
                    r.__assign)((0,
                    r.__assign)({}, s), {
                        timestamp: l
                    })];
                    var c = n.onSessionStart;
                    c && c(t, ao(a, this.history)),
                    this.removeListeners = Ot(fi(window, "pointermove", this.handlePointerMove), fi(window, "pointerup", this.handlePointerUp), fi(window, "pointercancel", this.handlePointerUp))
                }
            }
            return t.prototype.updateHandlers = function(t) {
                this.handlers = t
            }
            ,
            t.prototype.end = function() {
                this.removeListeners && this.removeListeners(),
                A.qY.update(this.updatePoint)
            }
            ,
            t
        }();
        function io(t, n) {
            return n ? {
                point: n(t.point)
            } : t
        }
        function oo(t, n) {
            return {
                x: t.x - n.x,
                y: t.y - n.y
            }
        }
        function ao(t, n) {
            var e = t.point;
            return {
                point: e,
                delta: oo(e, lo(n)),
                offset: oo(e, so(n)),
                velocity: co(n, .1)
            }
        }
        function so(t) {
            return t[0]
        }
        function lo(t) {
            return t[t.length - 1]
        }
        function co(t, n) {
            if (t.length < 2)
                return {
                    x: 0,
                    y: 0
                };
            for (var e = t.length - 1, r = null, i = lo(t); e >= 0 && (r = t[e],
            !(i.timestamp - r.timestamp > un(n))); )
                e--;
            if (!r)
                return {
                    x: 0,
                    y: 0
                };
            var o = (i.timestamp - r.timestamp) / 1e3;
            if (0 === o)
                return {
                    x: 0,
                    y: 0
                };
            var a = {
                x: (i.x - r.x) / o,
                y: (i.y - r.y) / o
            };
            return a.x === 1 / 0 && (a.x = 0),
            a.y === 1 / 0 && (a.y = 0),
            a
        }
        function uo(t, n, e) {
            return {
                min: void 0 !== n ? t.min + n : void 0,
                max: void 0 !== e ? t.max + e - (t.max - t.min) : void 0
            }
        }
        function fo(t, n) {
            var e, i = n.min - t.min, o = n.max - t.max;
            return n.max - n.min < t.max - t.min && (i = (e = (0,
            r.__read)([o, i], 2))[0],
            o = e[1]),
            {
                min: i,
                max: o
            }
        }
        var ho = .35;
        function po(t, n, e) {
            return {
                min: mo(t, n),
                max: mo(t, e)
            }
        }
        function mo(t, n) {
            var e;
            return "number" === typeof t ? t : null !== (e = t[n]) && void 0 !== e ? e : 0
        }
        function vo(t) {
            var n = t.top;
            return {
                x: {
                    min: t.left,
                    max: t.right
                },
                y: {
                    min: n,
                    max: t.bottom
                }
            }
        }
        function go(t, n) {
            return vo(function(t, n) {
                if (!n)
                    return t;
                var e = n({
                    x: t.left,
                    y: t.top
                })
                  , r = n({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: e.y,
                    left: e.x,
                    bottom: r.y,
                    right: r.x
                }
            }(t.getBoundingClientRect(), n))
        }
        var yo = new WeakMap
          , bo = function() {
            function t(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                },
                this.visualElement = t
            }
            return t.prototype.start = function(t, n) {
                var e = this
                  , r = (void 0 === n ? {} : n).snapToCursor
                  , i = void 0 !== r && r;
                if (!1 !== this.visualElement.isPresent) {
                    this.panSession = new ro(t,{
                        onSessionStart: function(t) {
                            e.stopAnimation(),
                            i && e.snapToCursor(si(t, "page").point)
                        },
                        onStart: function(t, n) {
                            var r, i = e.getProps(), o = i.drag, a = i.dragPropagation, s = i.onDragStart;
                            (!o || a || (e.openGlobalLock && e.openGlobalLock(),
                            e.openGlobalLock = gi(o),
                            e.openGlobalLock)) && (e.isDragging = !0,
                            e.currentDirection = null,
                            e.resolveConstraints(),
                            e.visualElement.projection && (e.visualElement.projection.isAnimationBlocked = !0,
                            e.visualElement.projection.target = void 0),
                            ze((function(t) {
                                var n, r, i = e.getAxisMotionValue(t).get() || 0;
                                if (lt.test(i)) {
                                    var o = null === (r = null === (n = e.visualElement.projection) || void 0 === n ? void 0 : n.layout) || void 0 === r ? void 0 : r.actual[t];
                                    if (o)
                                        i = ye(o) * (parseFloat(i) / 100)
                                }
                                e.originPoint[t] = i
                            }
                            )),
                            null === s || void 0 === s || s(t, n),
                            null === (r = e.visualElement.animationState) || void 0 === r || r.setActive(Kr.Drag, !0))
                        },
                        onMove: function(t, n) {
                            var r = e.getProps()
                              , i = r.dragPropagation
                              , o = r.dragDirectionLock
                              , a = r.onDirectionLock
                              , s = r.onDrag;
                            if (i || e.openGlobalLock) {
                                var l = n.offset;
                                if (o && null === e.currentDirection)
                                    return e.currentDirection = function(t, n) {
                                        void 0 === n && (n = 10);
                                        var e = null;
                                        Math.abs(t.y) > n ? e = "y" : Math.abs(t.x) > n && (e = "x");
                                        return e
                                    }(l),
                                    void (null !== e.currentDirection && (null === a || void 0 === a || a(e.currentDirection)));
                                e.updateAxis("x", n.point, l),
                                e.updateAxis("y", n.point, l),
                                e.visualElement.syncRender(),
                                null === s || void 0 === s || s(t, n)
                            }
                        },
                        onSessionEnd: function(t, n) {
                            return e.stop(t, n)
                        }
                    },{
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
            }
            ,
            t.prototype.stop = function(t, n) {
                var e = this.isDragging;
                if (this.cancel(),
                e) {
                    var r = n.velocity;
                    this.startAnimation(r);
                    var i = this.getProps().onDragEnd;
                    null === i || void 0 === i || i(t, n)
                }
            }
            ,
            t.prototype.cancel = function() {
                var t, n;
                this.isDragging = !1,
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                this.panSession = void 0,
                !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(Kr.Drag, !1)
            }
            ,
            t.prototype.updateAxis = function(t, n, e) {
                var r = this.getProps().drag;
                if (e && wo(t, r, this.currentDirection)) {
                    var i = this.getAxisMotionValue(t)
                      , o = this.originPoint[t] + e[t];
                    this.constraints && this.constraints[t] && (o = function(t, n, e) {
                        var r = n.min
                          , i = n.max;
                        return void 0 !== r && t < r ? t = e ? T(r, t, e.min) : Math.max(t, r) : void 0 !== i && t > i && (t = e ? T(i, t, e.max) : Math.min(t, i)),
                        t
                    }(o, this.constraints[t], this.elastic[t])),
                    i.set(o)
                }
            }
            ,
            t.prototype.resolveConstraints = function() {
                var t = this
                  , n = this.getProps()
                  , e = n.dragConstraints
                  , r = n.dragElastic
                  , i = (this.visualElement.projection || {}).layout
                  , o = this.constraints;
                e && v(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !i) && function(t, n) {
                    var e = n.top
                      , r = n.left
                      , i = n.bottom
                      , o = n.right;
                    return {
                        x: uo(t.x, r, o),
                        y: uo(t.y, e, i)
                    }
                }(i.actual, e),
                this.elastic = function(t) {
                    return void 0 === t && (t = ho),
                    !1 === t ? t = 0 : !0 === t && (t = ho),
                    {
                        x: po(t, "left", "right"),
                        y: po(t, "top", "bottom")
                    }
                }(r),
                o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ze((function(n) {
                    t.getAxisMotionValue(n) && (t.constraints[n] = function(t, n) {
                        var e = {};
                        return void 0 !== n.min && (e.min = n.min - t.min),
                        void 0 !== n.max && (e.max = n.max - t.min),
                        e
                    }(i.actual[n], t.constraints[n]))
                }
                ))
            }
            ,
            t.prototype.resolveRefConstraints = function() {
                var t = this.getProps()
                  , n = t.dragConstraints
                  , e = t.onMeasureDragConstraints;
                if (!n || !v(n))
                    return !1;
                var r = n.current
                  , i = this.visualElement.projection;
                if (!i || !i.layout)
                    return !1;
                var o = function(t, n, e) {
                    var r = go(t, e)
                      , i = n.scroll;
                    return i && (ce(r.x, i.x),
                    ce(r.y, i.y)),
                    r
                }(r, i.root, this.visualElement.getTransformPagePoint())
                  , a = function(t, n) {
                    return {
                        x: fo(t.x, n.x),
                        y: fo(t.y, n.y)
                    }
                }(i.layout.actual, o);
                if (e) {
                    var s = e(function(t) {
                        var n = t.x
                          , e = t.y;
                        return {
                            top: e.min,
                            right: n.max,
                            bottom: e.max,
                            left: n.min
                        }
                    }(a));
                    this.hasMutatedConstraints = !!s,
                    s && (a = vo(s))
                }
                return a
            }
            ,
            t.prototype.startAnimation = function(t) {
                var n = this
                  , e = this.getProps()
                  , i = e.drag
                  , o = e.dragMomentum
                  , a = e.dragElastic
                  , s = e.dragTransition
                  , l = e.dragSnapToOrigin
                  , c = e.onDragTransitionEnd
                  , u = this.constraints || {}
                  , d = ze((function(e) {
                    var c;
                    if (wo(e, i, n.currentDirection)) {
                        var d = null !== (c = null === u || void 0 === u ? void 0 : u[e]) && void 0 !== c ? c : {};
                        l && (d = {
                            min: 0,
                            max: 0
                        });
                        var f = a ? 200 : 1e6
                          , h = a ? 40 : 1e7
                          , p = (0,
                        r.__assign)((0,
                        r.__assign)({
                            type: "inertia",
                            velocity: o ? t[e] : 0,
                            bounceStiffness: f,
                            bounceDamping: h,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10
                        }, s), d);
                        return n.startAxisValueAnimation(e, p)
                    }
                }
                ));
                return Promise.all(d).then(c)
            }
            ,
            t.prototype.startAxisValueAnimation = function(t, n) {
                return Nn(t, this.getAxisMotionValue(t), 0, n)
            }
            ,
            t.prototype.stopAnimation = function() {
                var t = this;
                ze((function(n) {
                    return t.getAxisMotionValue(n).stop()
                }
                ))
            }
            ,
            t.prototype.getAxisMotionValue = function(t) {
                var n, e, r = "_drag" + t.toUpperCase(), i = this.visualElement.getProps()[r];
                return i || this.visualElement.getValue(t, null !== (e = null === (n = this.visualElement.getProps().initial) || void 0 === n ? void 0 : n[t]) && void 0 !== e ? e : 0)
            }
            ,
            t.prototype.snapToCursor = function(t) {
                var n = this;
                ze((function(e) {
                    if (wo(e, n.getProps().drag, n.currentDirection)) {
                        var r = n.visualElement.projection
                          , i = n.getAxisMotionValue(e);
                        if (r && r.layout) {
                            var o = r.layout.actual[e]
                              , a = o.min
                              , s = o.max;
                            i.set(t[e] - T(a, s, .5))
                        }
                    }
                }
                ))
            }
            ,
            t.prototype.scalePositionWithinConstraints = function() {
                var t, n = this, e = this.getProps(), r = e.drag, i = e.dragConstraints, o = this.visualElement.projection;
                if (v(i) && o && this.constraints) {
                    this.stopAnimation();
                    var a = {
                        x: 0,
                        y: 0
                    };
                    ze((function(t) {
                        var e = n.getAxisMotionValue(t);
                        if (e) {
                            var r = e.get();
                            a[t] = function(t, n) {
                                var e = .5
                                  , r = ye(t)
                                  , i = ye(n);
                                return i > r ? e = N(n.min, n.max - r, t.min) : r > i && (e = N(t.min, t.max - i, n.min)),
                                R(0, 1, e)
                            }({
                                min: r,
                                max: r
                            }, n.constraints[t])
                        }
                    }
                    ));
                    var s = this.visualElement.getProps().transformTemplate;
                    this.visualElement.getInstance().style.transform = s ? s({}, "") : "none",
                    null === (t = o.root) || void 0 === t || t.updateScroll(),
                    o.updateLayout(),
                    this.resolveConstraints(),
                    ze((function(t) {
                        if (wo(t, r, null)) {
                            var e = n.getAxisMotionValue(t)
                              , i = n.constraints[t]
                              , o = i.min
                              , s = i.max;
                            e.set(T(o, s, a[t]))
                        }
                    }
                    ))
                }
            }
            ,
            t.prototype.addListeners = function() {
                var t, n = this;
                yo.set(this.visualElement, this);
                var e = fi(this.visualElement.getInstance(), "pointerdown", (function(t) {
                    var e = n.getProps()
                      , r = e.drag
                      , i = e.dragListener;
                    r && (void 0 === i || i) && n.start(t)
                }
                ))
                  , r = function() {
                    v(n.getProps().dragConstraints) && (n.constraints = n.resolveRefConstraints())
                }
                  , i = this.visualElement.projection
                  , o = i.addEventListener("measure", r);
                i && !i.layout && (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
                var a = ti(window, "resize", (function() {
                    n.scalePositionWithinConstraints()
                }
                ));
                return i.addEventListener("didUpdate", (function(t) {
                    var e = t.delta
                      , r = t.hasLayoutChanged;
                    n.isDragging && r && (ze((function(t) {
                        var r = n.getAxisMotionValue(t);
                        r && (n.originPoint[t] += e[t].translate,
                        r.set(r.get() + e[t].translate))
                    }
                    )),
                    n.visualElement.syncRender())
                }
                )),
                function() {
                    a(),
                    e(),
                    o()
                }
            }
            ,
            t.prototype.getProps = function() {
                var t = this.visualElement.getProps()
                  , n = t.drag
                  , e = void 0 !== n && n
                  , i = t.dragDirectionLock
                  , o = void 0 !== i && i
                  , a = t.dragPropagation
                  , s = void 0 !== a && a
                  , l = t.dragConstraints
                  , c = void 0 !== l && l
                  , u = t.dragElastic
                  , d = void 0 === u ? ho : u
                  , f = t.dragMomentum
                  , h = void 0 === f || f;
                return (0,
                r.__assign)((0,
                r.__assign)({}, t), {
                    drag: e,
                    dragDirectionLock: o,
                    dragPropagation: s,
                    dragConstraints: c,
                    dragElastic: d,
                    dragMomentum: h
                })
            }
            ,
            t
        }();
        function wo(t, n, e) {
            return (!0 === n || n === t) && (null === e || e === t)
        }
        var xo = {
            pan: ji((function(t) {
                var n = t.onPan
                  , e = t.onPanStart
                  , r = t.onPanEnd
                  , o = t.onPanSessionStart
                  , a = t.visualElement
                  , s = n || e || r || o
                  , l = (0,
                i.useRef)(null)
                  , c = (0,
                i.useContext)(u).transformPagePoint
                  , d = {
                    onSessionStart: o,
                    onStart: e,
                    onMove: n,
                    onEnd: function(t, n) {
                        l.current = null,
                        r && r(t, n)
                    }
                };
                (0,
                i.useEffect)((function() {
                    null !== l.current && l.current.updateHandlers(d)
                }
                )),
                hi(a, "pointerdown", s && function(t) {
                    l.current = new ro(t,d,{
                        transformPagePoint: c
                    })
                }
                ),
                (0,
                xi.z)((function() {
                    return l.current && l.current.end()
                }
                ))
            }
            )),
            drag: ji((function(t) {
                var n = t.dragControls
                  , e = t.visualElement
                  , r = (0,
                E.h)((function() {
                    return new bo(e)
                }
                ));
                (0,
                i.useEffect)((function() {
                    return n && n.subscribe(r)
                }
                ), [r, n]),
                (0,
                i.useEffect)((function() {
                    return r.addListeners()
                }
                ), [r])
            }
            ))
        }
          , ko = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
        var So = function(t) {
            var n = t.treeType
              , e = void 0 === n ? "" : n
              , i = t.build
              , o = t.getBaseTarget
              , a = t.makeTargetAnimatable
              , s = t.measureViewportBox
              , l = t.render
              , c = t.readValueFromInstance
              , u = t.removeValueFromRenderState
              , d = t.sortNodePosition
              , f = t.scrapeMotionValuesFromProps;
            return function(t, n) {
                var h = t.parent
                  , p = t.props
                  , m = t.presenceId
                  , v = t.blockInitialAnimation
                  , g = t.visualState;
                void 0 === n && (n = {});
                var b, w, S = !1, C = g.latestValues, E = g.renderState, T = function() {
                    var t = ko.map((function() {
                        return new O
                    }
                    ))
                      , n = {}
                      , e = {
                        clearAllListeners: function() {
                            return t.forEach((function(t) {
                                return t.clear()
                            }
                            ))
                        },
                        updatePropListeners: function(t) {
                            ko.forEach((function(r) {
                                var i, o = "on" + r, a = t[o];
                                null === (i = n[r]) || void 0 === i || i.call(n),
                                a && (n[r] = e[o](a))
                            }
                            ))
                        }
                    };
                    return t.forEach((function(t, n) {
                        e["on" + ko[n]] = function(n) {
                            return t.add(n)
                        }
                        ,
                        e["notify" + ko[n]] = function() {
                            for (var n = [], e = 0; e < arguments.length; e++)
                                n[e] = arguments[e];
                            t.notify.apply(t, (0,
                            r.__spreadArray)([], (0,
                            r.__read)(n), !1))
                        }
                    }
                    )),
                    e
                }(), _ = new Map, P = new Map, j = {}, I = (0,
                r.__assign)({}, C);
                function R() {
                    b && S && (z(),
                    l(b, E, p.style, H.projection))
                }
                function z() {
                    i(H, E, C, n, p)
                }
                function D() {
                    T.notifyUpdate(C)
                }
                var Z = f(p);
                for (var V in Z) {
                    var B = Z[V];
                    void 0 !== C[V] && L(B) && B.set(C[V], !1)
                }
                var Y = x(p)
                  , F = k(p)
                  , H = (0,
                r.__assign)((0,
                r.__assign)({
                    treeType: e,
                    current: null,
                    depth: h ? h.depth + 1 : 0,
                    parent: h,
                    children: new Set,
                    presenceId: m,
                    variantChildren: F ? new Set : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(null === h || void 0 === h ? void 0 : h.isMounted()),
                    blockInitialAnimation: v,
                    isMounted: function() {
                        return Boolean(b)
                    },
                    mount: function(t) {
                        S = !0,
                        b = H.current = t,
                        H.projection && H.projection.mount(t),
                        F && h && !Y && (w = null === h || void 0 === h ? void 0 : h.addVariantChild(H)),
                        null === h || void 0 === h || h.children.add(H),
                        H.setProps(p)
                    },
                    unmount: function() {
                        var t;
                        null === (t = H.projection) || void 0 === t || t.unmount(),
                        A.qY.update(D),
                        A.qY.render(R),
                        P.forEach((function(t) {
                            return t()
                        }
                        )),
                        null === w || void 0 === w || w(),
                        null === h || void 0 === h || h.children.delete(H),
                        T.clearAllListeners(),
                        b = void 0,
                        S = !1
                    },
                    addVariantChild: function(t) {
                        var n, e = H.getClosestVariantNode();
                        if (e)
                            return null === (n = e.variantChildren) || void 0 === n || n.add(t),
                            function() {
                                return e.variantChildren.delete(t)
                            }
                    },
                    sortNodePosition: function(t) {
                        return d && e === t.treeType ? d(H.getInstance(), t.getInstance()) : 0
                    },
                    getClosestVariantNode: function() {
                        return F ? H : null === h || void 0 === h ? void 0 : h.getClosestVariantNode()
                    },
                    getLayoutId: function() {
                        return p.layoutId
                    },
                    getInstance: function() {
                        return b
                    },
                    getStaticValue: function(t) {
                        return C[t]
                    },
                    setStaticValue: function(t, n) {
                        return C[t] = n
                    },
                    getLatestValues: function() {
                        return C
                    },
                    setVisibility: function(t) {
                        H.isVisible !== t && (H.isVisible = t,
                        H.scheduleRender())
                    },
                    makeTargetAnimatable: function(t, n) {
                        return void 0 === n && (n = !0),
                        a(H, t, p, n)
                    },
                    measureViewportBox: function() {
                        return s(b, p)
                    },
                    addValue: function(t, n) {
                        H.hasValue(t) && H.removeValue(t),
                        _.set(t, n),
                        C[t] = n.get(),
                        function(t, n) {
                            var e = n.onChange((function(n) {
                                C[t] = n,
                                p.onUpdate && A.ZP.update(D, !1, !0)
                            }
                            ))
                              , r = n.onRenderRequest(H.scheduleRender);
                            P.set(t, (function() {
                                e(),
                                r()
                            }
                            ))
                        }(t, n)
                    },
                    removeValue: function(t) {
                        var n;
                        _.delete(t),
                        null === (n = P.get(t)) || void 0 === n || n(),
                        P.delete(t),
                        delete C[t],
                        u(t, E)
                    },
                    hasValue: function(t) {
                        return _.has(t)
                    },
                    getValue: function(t, n) {
                        var e = _.get(t);
                        return void 0 === e && void 0 !== n && (e = M(n),
                        H.addValue(t, e)),
                        e
                    },
                    forEachValue: function(t) {
                        return _.forEach(t)
                    },
                    readValue: function(t) {
                        var e;
                        return null !== (e = C[t]) && void 0 !== e ? e : c(b, t, n)
                    },
                    setBaseTarget: function(t, n) {
                        I[t] = n
                    },
                    getBaseTarget: function(t) {
                        if (o) {
                            var n = o(p, t);
                            if (void 0 !== n && !L(n))
                                return n
                        }
                        return I[t]
                    }
                }, T), {
                    build: function() {
                        return z(),
                        E
                    },
                    scheduleRender: function() {
                        A.ZP.render(R, !1, !0)
                    },
                    syncRender: R,
                    setProps: function(t) {
                        (t.transformTemplate || p.transformTemplate) && H.scheduleRender(),
                        p = t,
                        T.updatePropListeners(t),
                        j = function(t, n, e) {
                            var r;
                            for (var i in n) {
                                var o = n[i]
                                  , a = e[i];
                                if (L(o))
                                    t.addValue(i, o);
                                else if (L(a))
                                    t.addValue(i, M(o));
                                else if (a !== o)
                                    if (t.hasValue(i)) {
                                        var s = t.getValue(i);
                                        !s.hasAnimated && s.set(o)
                                    } else
                                        t.addValue(i, M(null !== (r = t.getStaticValue(i)) && void 0 !== r ? r : o))
                            }
                            for (var i in e)
                                void 0 === n[i] && t.removeValue(i);
                            return n
                        }(H, f(p), j)
                    },
                    getProps: function() {
                        return p
                    },
                    getVariant: function(t) {
                        var n;
                        return null === (n = p.variants) || void 0 === n ? void 0 : n[t]
                    },
                    getDefaultTransition: function() {
                        return p.transition
                    },
                    getTransformPagePoint: function() {
                        return p.transformPagePoint
                    },
                    getVariantContext: function(t) {
                        if (void 0 === t && (t = !1),
                        t)
                            return null === h || void 0 === h ? void 0 : h.getVariantContext();
                        if (!Y) {
                            var n = (null === h || void 0 === h ? void 0 : h.getVariantContext()) || {};
                            return void 0 !== p.initial && (n.initial = p.initial),
                            n
                        }
                        for (var e = {}, r = 0; r < Eo; r++) {
                            var i = Co[r]
                              , o = p[i];
                            (y(o) || !1 === o) && (e[i] = o)
                        }
                        return e
                    }
                });
                return H
            }
        }
          , Co = (0,
        r.__spreadArray)(["initial"], (0,
        r.__read)(Gi), !1)
          , Eo = Co.length;
        function Ao(t) {
            return "string" === typeof t && t.startsWith("var(--")
        }
        var To = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function _o(t, n, e) {
            void 0 === e && (e = 1),
            'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.');
            var i = (0,
            r.__read)(function(t) {
                var n = To.exec(t);
                if (!n)
                    return [, ];
                var e = (0,
                r.__read)(n, 3);
                return [e[1], e[2]]
            }(t), 2)
              , o = i[0]
              , a = i[1];
            if (o) {
                var s = window.getComputedStyle(n).getPropertyValue(o);
                return s ? s.trim() : Ao(a) ? _o(a, n, e + 1) : a
            }
        }
        var Po, jo = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), Oo = function(t) {
            return jo.has(t)
        }, Io = function(t, n) {
            t.set(n, !1),
            t.set(n)
        }, Mo = function(t) {
            return t === K || t === ct
        };
        !function(t) {
            t.width = "width",
            t.height = "height",
            t.left = "left",
            t.right = "right",
            t.top = "top",
            t.bottom = "bottom"
        }(Po || (Po = {}));
        var Lo = function(t, n) {
            return parseFloat(t.split(", ")[n])
        }
          , Ro = function(t, n) {
            return function(e, r) {
                var i = r.transform;
                if ("none" === i || !i)
                    return 0;
                var o = i.match(/^matrix3d\((.+)\)$/);
                if (o)
                    return Lo(o[1], n);
                var a = i.match(/^matrix\((.+)\)$/);
                return a ? Lo(a[1], t) : 0
            }
        }
          , zo = new Set(["x", "y", "z"])
          , Do = Ze.filter((function(t) {
            return !zo.has(t)
        }
        ));
        var Zo = {
            width: function(t, n) {
                var e = t.x
                  , r = n.paddingLeft
                  , i = void 0 === r ? "0" : r
                  , o = n.paddingRight
                  , a = void 0 === o ? "0" : o;
                return e.max - e.min - parseFloat(i) - parseFloat(a)
            },
            height: function(t, n) {
                var e = t.y
                  , r = n.paddingTop
                  , i = void 0 === r ? "0" : r
                  , o = n.paddingBottom
                  , a = void 0 === o ? "0" : o;
                return e.max - e.min - parseFloat(i) - parseFloat(a)
            },
            top: function(t, n) {
                var e = n.top;
                return parseFloat(e)
            },
            left: function(t, n) {
                var e = n.left;
                return parseFloat(e)
            },
            bottom: function(t, n) {
                var e = t.y
                  , r = n.top;
                return parseFloat(r) + (e.max - e.min)
            },
            right: function(t, n) {
                var e = t.x
                  , r = n.left;
                return parseFloat(r) + (e.max - e.min)
            },
            x: Ro(4, 13),
            y: Ro(5, 14)
        }
          , Vo = function(t, n, e, i) {
            void 0 === e && (e = {}),
            void 0 === i && (i = {}),
            n = (0,
            r.__assign)({}, n),
            i = (0,
            r.__assign)({}, i);
            var o = Object.keys(n).filter(Oo)
              , a = []
              , s = !1
              , l = [];
            if (o.forEach((function(r) {
                var o = t.getValue(r);
                if (t.hasValue(r)) {
                    var c, u = e[r], d = Bi(u), f = n[r];
                    if (xn(f)) {
                        var h = f.length
                          , p = null === f[0] ? 1 : 0;
                        u = f[p],
                        d = Bi(u);
                        for (var m = p; m < h; m++)
                            c ? Bi(f[m]) : (c = Bi(f[m])) === d || Mo(d) && Mo(c)
                    } else
                        c = Bi(f);
                    if (d !== c)
                        if (Mo(d) && Mo(c)) {
                            var v = o.get();
                            "string" === typeof v && o.set(parseFloat(v)),
                            "string" === typeof f ? n[r] = parseFloat(f) : Array.isArray(f) && c === ct && (n[r] = f.map(parseFloat))
                        } else
                            (null === d || void 0 === d ? void 0 : d.transform) && (null === c || void 0 === c ? void 0 : c.transform) && (0 === u || 0 === f) ? 0 === u ? o.set(c.transform(u)) : n[r] = d.transform(f) : (s || (a = function(t) {
                                var n = [];
                                return Do.forEach((function(e) {
                                    var r = t.getValue(e);
                                    void 0 !== r && (n.push([e, r.get()]),
                                    r.set(e.startsWith("scale") ? 1 : 0))
                                }
                                )),
                                n.length && t.syncRender(),
                                n
                            }(t),
                            s = !0),
                            l.push(r),
                            i[r] = void 0 !== i[r] ? i[r] : n[r],
                            Io(o, f))
                }
            }
            )),
            l.length) {
                var c = function(t, n, e) {
                    var r = n.measureViewportBox()
                      , i = n.getInstance()
                      , o = getComputedStyle(i)
                      , a = o.display
                      , s = {};
                    "none" === a && n.setStaticValue("display", t.display || "block"),
                    e.forEach((function(t) {
                        s[t] = Zo[t](r, o)
                    }
                    )),
                    n.syncRender();
                    var l = n.measureViewportBox();
                    return e.forEach((function(e) {
                        var r = n.getValue(e);
                        Io(r, s[e]),
                        t[e] = Zo[e](l, o)
                    }
                    )),
                    t
                }(n, t, l);
                return a.length && a.forEach((function(n) {
                    var e = (0,
                    r.__read)(n, 2)
                      , i = e[0]
                      , o = e[1];
                    t.getValue(i).set(o)
                }
                )),
                t.syncRender(),
                {
                    target: c,
                    transitionEnd: i
                }
            }
            return {
                target: n,
                transitionEnd: i
            }
        };
        function Bo(t, n, e, r) {
            return function(t) {
                return Object.keys(t).some(Oo)
            }(n) ? Vo(t, n, e, r) : {
                target: n,
                transitionEnd: r
            }
        }
        var Yo = function(t, n, e, i) {
            var o = function(t, n, e) {
                var i, o = (0,
                r.__rest)(n, []), a = t.getInstance();
                if (!(a instanceof Element))
                    return {
                        target: o,
                        transitionEnd: e
                    };
                for (var s in e && (e = (0,
                r.__assign)({}, e)),
                t.forEachValue((function(t) {
                    var n = t.get();
                    if (Ao(n)) {
                        var e = _o(n, a);
                        e && t.set(e)
                    }
                }
                )),
                o) {
                    var l = o[s];
                    if (Ao(l)) {
                        var c = _o(l, a);
                        c && (o[s] = c,
                        e && (null !== (i = e[s]) && void 0 !== i || (e[s] = l)))
                    }
                }
                return {
                    target: o,
                    transitionEnd: e
                }
            }(t, n, i);
            return Bo(t, n = o.target, e, i = o.transitionEnd)
        };
        var Fo = {
            treeType: "dom",
            readValueFromInstance: function(t, n) {
                if (Ye(n)) {
                    var e = Ln(n);
                    return e && e.default || 0
                }
                var r, i = (r = t,
                window.getComputedStyle(r));
                return (kr(n) ? i.getPropertyValue(n) : i[n]) || 0
            },
            sortNodePosition: function(t, n) {
                return 2 & t.compareDocumentPosition(n) ? 1 : -1
            },
            getBaseTarget: function(t, n) {
                var e;
                return null === (e = t.style) || void 0 === e ? void 0 : e[n]
            },
            measureViewportBox: function(t, n) {
                return go(t, n.transformPagePoint)
            },
            resetTransform: function(t, n, e) {
                var r = e.transformTemplate;
                n.style.transform = r ? r({}, "") : "none",
                t.scheduleRender()
            },
            restoreTransform: function(t, n) {
                t.style.transform = n.style.transform
            },
            removeValueFromRenderState: function(t, n) {
                var e = n.vars
                  , r = n.style;
                delete e[t],
                delete r[t]
            },
            makeTargetAnimatable: function(t, n, e, i) {
                var o = e.transformValues;
                void 0 === i && (i = !0);
                var a = n.transition
                  , s = n.transitionEnd
                  , l = (0,
                r.__rest)(n, ["transition", "transitionEnd"])
                  , c = function(t, n, e) {
                    var r, i, o = {};
                    for (var a in t)
                        o[a] = null !== (r = Ui(a, n)) && void 0 !== r ? r : null === (i = e.getValue(a)) || void 0 === i ? void 0 : i.get();
                    return o
                }(l, a || {}, t);
                if (o && (s && (s = o(s)),
                l && (l = o(l)),
                c && (c = o(c))),
                i) {
                    !function(t, n, e) {
                        var r, i, o, a, s = Object.keys(n).filter((function(n) {
                            return !t.hasValue(n)
                        }
                        )), l = s.length;
                        if (l)
                            for (var c = 0; c < l; c++) {
                                var u = s[c]
                                  , d = n[u]
                                  , f = null;
                                Array.isArray(d) && (f = d[0]),
                                null === f && (f = null !== (i = null !== (r = e[u]) && void 0 !== r ? r : t.readValue(u)) && void 0 !== i ? i : n[u]),
                                void 0 !== f && null !== f && ("string" === typeof f && (/^\-?\d*\.?\d+$/.test(f) || Di(f)) ? f = parseFloat(f) : !Fi(f) && _t.test(d) && (f = Rn(u, d)),
                                t.addValue(u, M(f)),
                                null !== (o = (a = e)[u]) && void 0 !== o || (a[u] = f),
                                t.setBaseTarget(u, f))
                            }
                    }(t, l, c);
                    var u = Yo(t, l, c, s);
                    s = u.transitionEnd,
                    l = u.target
                }
                return (0,
                r.__assign)({
                    transition: a,
                    transitionEnd: s
                }, l)
            },
            scrapeMotionValuesFromProps: Ur,
            build: function(t, n, e, r, i) {
                void 0 !== t.isVisible && (n.style.visibility = t.isVisible ? "visible" : "hidden"),
                Cr(n, e, r, i.transformTemplate)
            },
            render: Fr
        }
          , Ho = So(Fo)
          , No = So((0,
        r.__assign)((0,
        r.__assign)({}, Fo), {
            getBaseTarget: function(t, n) {
                return t[n]
            },
            readValueFromInstance: function(t, n) {
                var e;
                return Ye(n) ? (null === (e = Ln(n)) || void 0 === e ? void 0 : e.default) || 0 : (n = Hr.has(n) ? n : Yr(n),
                t.getAttribute(n))
            },
            scrapeMotionValuesFromProps: Wr,
            build: function(t, n, e, r, i) {
                zr(n, e, r, i.transformTemplate)
            },
            render: Nr
        }))
          , Uo = function(t, n) {
            return br(t) ? No(n, {
                enableHardwareAcceleration: !1
            }) : Ho(n, {
                enableHardwareAcceleration: !0
            })
        };
        function Wo(t, n) {
            return n.max === n.min ? 0 : t / (n.max - n.min) * 100
        }
        var Xo = {
            correct: function(t, n) {
                if (!n.target)
                    return t;
                if ("string" === typeof t) {
                    if (!ct.test(t))
                        return t;
                    t = parseFloat(t)
                }
                var e = Wo(t, n.target.x)
                  , r = Wo(t, n.target.y);
                return "".concat(e, "% ").concat(r, "%")
            }
        }
          , qo = "_$css"
          , $o = {
            correct: function(t, n) {
                var e = n.treeScale
                  , r = n.projectionDelta
                  , i = t
                  , o = t.includes("var(")
                  , a = [];
                o && (t = t.replace(To, (function(t) {
                    return a.push(t),
                    qo
                }
                )));
                var s = _t.parse(t);
                if (s.length > 5)
                    return i;
                var l = _t.createTransformer(t)
                  , c = "number" !== typeof s[0] ? 1 : 0
                  , u = r.x.scale * e.x
                  , d = r.y.scale * e.y;
                s[0 + c] /= u,
                s[1 + c] /= d;
                var f = T(u, d, .5);
                "number" === typeof s[2 + c] && (s[2 + c] /= f),
                "number" === typeof s[3 + c] && (s[3 + c] /= f);
                var h = l(s);
                if (o) {
                    var p = 0;
                    h = h.replace(qo, (function() {
                        var t = a[p];
                        return p++,
                        t
                    }
                    ))
                }
                return h
            }
        }
          , Go = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0,
            r.__extends)(n, t),
            n.prototype.componentDidMount = function() {
                var t, n = this, e = this.props, i = e.visualElement, o = e.layoutGroup, a = e.switchLayoutGroup, s = e.layoutId, l = i.projection;
                t = Ko,
                Object.assign(Le, t),
                l && ((null === o || void 0 === o ? void 0 : o.group) && o.group.add(l),
                (null === a || void 0 === a ? void 0 : a.register) && s && a.register(l),
                l.root.didUpdate(),
                l.addEventListener("animationComplete", (function() {
                    n.safeToRemove()
                }
                )),
                l.setOptions((0,
                r.__assign)((0,
                r.__assign)({}, l.options), {
                    onExitComplete: function() {
                        return n.safeToRemove()
                    }
                }))),
                Xe.hasEverUpdated = !0
            }
            ,
            n.prototype.getSnapshotBeforeUpdate = function(t) {
                var n = this
                  , e = this.props
                  , r = e.layoutDependency
                  , i = e.visualElement
                  , o = e.drag
                  , a = e.isPresent
                  , s = i.projection;
                return s ? (s.isPresent = a,
                o || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(),
                t.isPresent !== a && (a ? s.promote() : s.relegate() || A.ZP.postRender((function() {
                    var t;
                    (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || n.safeToRemove()
                }
                ))),
                null) : null
            }
            ,
            n.prototype.componentDidUpdate = function() {
                var t = this.props.visualElement.projection;
                t && (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove())
            }
            ,
            n.prototype.componentWillUnmount = function() {
                var t = this.props
                  , n = t.visualElement
                  , e = t.layoutGroup
                  , r = t.switchLayoutGroup
                  , i = n.projection;
                i && (i.scheduleCheckAfterUnmount(),
                (null === e || void 0 === e ? void 0 : e.group) && e.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(i))
            }
            ,
            n.prototype.safeToRemove = function() {
                var t = this.props.safeToRemove;
                null === t || void 0 === t || t()
            }
            ,
            n.prototype.render = function() {
                return null
            }
            ,
            n
        }(i.Component);
        var Ko = {
            borderRadius: (0,
            r.__assign)((0,
            r.__assign)({}, Xo), {
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            }),
            borderTopLeftRadius: Xo,
            borderTopRightRadius: Xo,
            borderBottomLeftRadius: Xo,
            borderBottomRightRadius: Xo,
            boxShadow: $o
        }
          , Jo = {
            measureLayout: function(t) {
                var n = (0,
                r.__read)(Ii(), 2)
                  , e = n[0]
                  , o = n[1]
                  , a = (0,
                i.useContext)(hr.p);
                return i.createElement(Go, (0,
                r.__assign)({}, t, {
                    layoutGroup: a,
                    switchLayoutGroup: (0,
                    i.useContext)(pr),
                    isPresent: e,
                    safeToRemove: o
                }))
            }
        }
          , Qo = qe({
            attachResizeListener: function(t, n) {
                return t.addEventListener("resize", n, {
                    passive: !0
                }),
                function() {
                    return t.removeEventListener("resize", n)
                }
            },
            measureScroll: function() {
                return {
                    x: document.documentElement.scrollLeft || document.body.scrollLeft,
                    y: document.documentElement.scrollTop || document.body.scrollTop
                }
            }
        })
          , ta = {
            current: void 0
        }
          , na = qe({
            measureScroll: function(t) {
                return {
                    x: t.scrollLeft,
                    y: t.scrollTop
                }
            },
            defaultParent: function() {
                if (!ta.current) {
                    var t = new Qo(0,{});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    ta.current = t
                }
                return ta.current
            },
            resetTransform: function(t, n) {
                t.style.transform = null !== n && void 0 !== n ? n : "none"
            }
        })
          , ea = (0,
        r.__assign)((0,
        r.__assign)((0,
        r.__assign)((0,
        r.__assign)({}, eo), Oi), xo), Jo)
          , ra = gr((function(t, n) {
            return function(t, n, e, i, o) {
                var a = n.forwardMotionProps
                  , s = void 0 !== a && a
                  , l = br(t) ? Jr : Qr;
                return (0,
                r.__assign)((0,
                r.__assign)({}, l), {
                    preloadedFeatures: e,
                    useRender: Vr(s),
                    createVisualElement: i,
                    projectionNodeConstructor: o,
                    Component: t
                })
            }(t, n, ea, Uo, na)
        }
        ))
    },
    6681: function(t, n, e) {
        "use strict";
        e.d(n, {
            h: function() {
                return i
            }
        });
        var r = e(7294);
        function i(t) {
            var n = (0,
            r.useRef)(null);
            return null === n.current && (n.current = t()),
            n.current
        }
    },
    5411: function(t, n, e) {
        "use strict";
        e.d(n, {
            z: function() {
                return i
            }
        });
        var r = e(7294);
        function i(t) {
            return (0,
            r.useEffect)((function() {
                return function() {
                    return t()
                }
            }
            ), [])
        }
    },
    4735: function(t, n, e) {
        "use strict";
        e.d(n, {
            qY: function() {
                return h
            },
            ZP: function() {
                return b
            },
            iW: function() {
                return p
            },
            $B: function() {
                return y
            }
        });
        const r = 1 / 60 * 1e3
          , i = "undefined" !== typeof performance ? () => performance.now() : () => Date.now()
          , o = "undefined" !== typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout(( () => t(i())), r);
        let a = !0
          , s = !1
          , l = !1;
        const c = {
            delta: 0,
            timestamp: 0
        }
          , u = ["read", "update", "preRender", "render", "postRender"]
          , d = u.reduce(( (t, n) => (t[n] = function(t) {
            let n = []
              , e = []
              , r = 0
              , i = !1
              , o = !1;
            const a = new WeakSet
              , s = {
                schedule: (t, o=!1, s=!1) => {
                    const l = s && i
                      , c = l ? n : e;
                    return o && a.add(t),
                    -1 === c.indexOf(t) && (c.push(t),
                    l && i && (r = n.length)),
                    t
                }
                ,
                cancel: t => {
                    const n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1),
                    a.delete(t)
                }
                ,
                process: l => {
                    if (i)
                        o = !0;
                    else {
                        if (i = !0,
                        [n,e] = [e, n],
                        e.length = 0,
                        r = n.length,
                        r)
                            for (let e = 0; e < r; e++) {
                                const r = n[e];
                                r(l),
                                a.has(r) && (s.schedule(r),
                                t())
                            }
                        i = !1,
                        o && (o = !1,
                        s.process(l))
                    }
                }
            };
            return s
        }(( () => s = !0)),
        t)), {})
          , f = u.reduce(( (t, n) => {
            const e = d[n];
            return t[n] = (t, n=!1, r=!1) => (s || g(),
            e.schedule(t, n, r)),
            t
        }
        ), {})
          , h = u.reduce(( (t, n) => (t[n] = d[n].cancel,
        t)), {})
          , p = u.reduce(( (t, n) => (t[n] = () => d[n].process(c),
        t)), {})
          , m = t => d[t].process(c)
          , v = t => {
            s = !1,
            c.delta = a ? r : Math.max(Math.min(t - c.timestamp, 40), 1),
            c.timestamp = t,
            l = !0,
            u.forEach(m),
            l = !1,
            s && (a = !1,
            o(v))
        }
          , g = () => {
            s = !0,
            a = !0,
            l || o(v)
        }
          , y = () => c;
        var b = f
    }
}, function(t) {
    var n = function(n) {
        return t(t.s = n)
    };
    t.O(0, [774, 179], (function() {
        return n(1118),
        n(387)
    }
    ));
    var e = t.O();
    _N_E = e
}
]);
