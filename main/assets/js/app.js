(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        "/n1Z": function (e, t, i) {
            (e.exports = i("I1BE")(!1)).push([
                e.i,
                '.embedvideo {\n  position: relative;\n  padding-bottom: 56.25%;\n  /* Use 75% for 4:3 videos */\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n  background: #000;\n}\n.embedvideo:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: none;\n}\n.embedvideo__overlay {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.embedvideo__overlay:after {\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1;\n}\n.embedvideo__player {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background: transparent;\n}\n.embedvideo__img {\n  display: block;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border: none;\n  z-index: 0;\n}\n.embedvideo__play {\n  z-index: 2;\n  pointer-events: none;\n  color: #fff;\n  width: 8%;\n}',
                "",
            ]);
        },
        0: function (e, t, i) {
            i("kOmT"), (e.exports = i("Mc1x"));
        },
        FTmx: function (e, t, i) {
            var n = i("/n1Z");
            "string" == typeof n && (n = [[e.i, n, ""]]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            i("aET+")(n, o);
            n.locals && (e.exports = n.locals);
        },
        Mc1x: function (e, t) { },
        RGLk: function (e, t, i) {
            "use strict";
            var n = i("FTmx");
            i.n(n).a;
        },
        kOmT: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i("s+lh"),
                o = i.n(n),
                r = (i("e69u"), i("7sg0"), i("Diiq"), i("thk6")),
                s = i("hNNL"),
                a = i.n(s),
                l = i("z/o8");
            function u() {
                return (
                    1 ==
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    )
                );
            }
            function c(e, t, i) {
                var n;
                return function () {
                    var o = this,
                        r = arguments,
                        s = i && !n;
                    clearTimeout(n),
                        (n = setTimeout(function () {
                            (n = null), i || e.apply(o, r);
                        }, t)),
                        s && e.apply(o, r);
                };
            }
            function d(e, t, i) {
                for (var n = 0; n < e.length; n++) t.call(i, n, e[n]);
            }
            function h() {
                return Math.max(
                    window.pageYOffset,
                    document.documentElement.scrollTop,
                    document.body.scrollTop
                );
            }
            function p() {
                var e = window,
                    t = document,
                    i = t.documentElement,
                    n = t.getElementsByTagName("body")[0];
                return e.innerWidth || i.clientWidth || n.clientWidth;
            }
            function f() {
                var e = window,
                    t = document,
                    i = t.documentElement,
                    n = t.getElementsByTagName("body")[0];
                return e.innerHeight || i.clientHeight || n.clientHeight;
            }
            function v(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var m = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.hero = document.querySelector(".js-hero")),
                        (this.heroImage = document.querySelector(".js-hero-zoom")),
                        (this.isInitialised = !1),
                        this.hero && this.heroImage && this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.update = function () {
                                    e._update();
                                }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                var e = this.hero.getBoundingClientRect(),
                                    t = ((-1 * e.top) / e.height) * 100;
                                (t = t > 100 ? 100 : t) > 100 ||
                                    l.b.to(this.heroImage, {
                                        duration: 0.1,
                                        scale: 1 + t / 500,
                                        ease: "power2.Out",
                                    });
                            },
                        },
                    ]) && v(t.prototype, i),
                    n && v(t, n),
                    e
                );
            })();
            function g(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var y = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._hero = document.querySelector(".js-hero")),
                        (this._heroOverlay = document.querySelector(".js-hero-overlay")),
                        (this._heroTitle = document.querySelector(
                            ".js-hero-underlay-title"
                        )),
                        (this._introTitle = document.querySelector(".js-home-intro-title")),
                        (this.isInitialised = !1),
                        this._hero &&
                        this._heroOverlay &&
                        this._heroTitle &&
                        this._introTitle &&
                        this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.update = function () {
                                    e._update();
                                }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                var e = this._hero.getBoundingClientRect(),
                                    t = ((-1 * e.top) / e.height) * 100;
                                if (!((t = t > 100 ? 100 : t) > 100)) {
                                    l.b.set(this._heroOverlay, {
                                        webkitClipPath: "inset(0% 0% " + t + "% 0%)",
                                        clipPath: "inset(0% 0% " + t + "% 0%)",
                                    });
                                    var i =
                                        this._introTitle.getBoundingClientRect().top <=
                                        this._heroTitle.getBoundingClientRect().top;
                                    this._heroTitle.classList.toggle("is-hidden", i),
                                        this._introTitle.classList.toggle("is-hidden", !i);
                                }
                            },
                        },
                    ]) && g(t.prototype, i),
                    n && g(t, n),
                    e
                );
            })();
            function _(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var b = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.scrollDownIndicator =
                            document.querySelector(".js-scroll-down")),
                        this.scrollDownIndicator &&
                        ((this.scrollTicking = !1),
                            this._initialise(),
                            this._setListeners());
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                this._setScrollDownVisibility();
                            },
                        },
                        {
                            key: "_setListeners",
                            value: function () {
                                window.addEventListener("scroll", this._onScroll.bind(this));
                            },
                        },
                        {
                            key: "_onScroll",
                            value: function () {
                                var e = this;
                                this.scrollTicking ||
                                    (window.requestAnimationFrame(function () {
                                        e._setScrollDownVisibility(), (e.scrollTicking = !1);
                                    }),
                                        (this.scrollTicking = !0));
                            },
                        },
                        {
                            key: "_setScrollDownVisibility",
                            value: function () {
                                var e = f() / 3;
                                this.scrollDownIndicator.classList.toggle("is-hidden", h() > e);
                            },
                        },
                    ]) && _(t.prototype, i),
                    n && _(t, n),
                    e
                );
            })();
            function w(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var k = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._targets = t.targets || null),
                        (this._hitAreas = t.hitAreas || null),
                        (this.isInitialised = !1),
                        this._targets && this._hitAreas && this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.hitDetection = function () {
                                    e._hitDetection();
                                }),
                                    this._hitDetection(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_hitDetection",
                            value: function () {
                                var e = this;
                                d(this._targets, function (t, i) {
                                    var n =
                                        i.getBoundingClientRect().top +
                                        i.getBoundingClientRect().height / 2,
                                        o = i.getBoundingClientRect().left,
                                        r = !1;
                                    d(e._hitAreas, function (e, t) {
                                        var s = t.getBoundingClientRect();
                                        s.top < n &&
                                            s.bottom > n &&
                                            o > s.left &&
                                            o < s.left + s.width &&
                                            (i.classList.toggle(
                                                "is-mode--dark",
                                                "dark" === t.getAttribute("data-color-mode")
                                            ),
                                                i.classList.toggle(
                                                    "is-mode--light",
                                                    "light" === t.getAttribute("data-color-mode")
                                                ),
                                                (r = !0));
                                    }),
                                        r ||
                                        (i.classList.toggle("is-mode--light", !0),
                                            i.classList.toggle("is-mode--dark", !1));
                                });
                            },
                        },
                    ]) && w(t.prototype, i),
                    n && w(t, n),
                    e
                );
            })();
            function S(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var j = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._targets = t.targets || null),
                        (this._hitAreas = t.hitAreas || null),
                        (this.isInitialised = !1),
                        this._targets && this._hitAreas && this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.hitDetection = function () {
                                    e._hitDetection();
                                }),
                                    this._hitDetection(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_hitDetection",
                            value: function () {
                                var e = this;
                                d(this._targets, function (t, i) {
                                    var n =
                                        i.getBoundingClientRect().top +
                                        i.getBoundingClientRect().height / 2,
                                        o = !1;
                                    d(e._hitAreas, function (e, t) {
                                        var r = t.getBoundingClientRect();
                                        r.top < n &&
                                            r.bottom > n &&
                                            ((i.innerHTML = t.getAttribute("data-sidebar-title")),
                                                (o = !0));
                                    }),
                                        o ||
                                        (i.innerHTML = i.getAttribute(
                                            "data-sidebar-title-default"
                                        ));
                                });
                            },
                        },
                    ]) && S(t.prototype, i),
                    n && S(t, n),
                    e
                );
            })();
            function A(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var L = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._containers = t.containers || null),
                        (this.isInitialised = !1),
                        this._containers &&
                        (this._initialise(),
                            window.addEventListener(
                                "resize",
                                c(this._initialise.bind(this), 100)
                            ));
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.update = function () {
                                    e._update();
                                }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                var e = this;
                                d(this._containers, function (t, i) {
                                    var n = i.getBoundingClientRect(),
                                        o = (-1 * (n.top - f())) / f();
                                    p() < f() && (o = (-1 * (n.top - f() / 3 - f())) / f()),
                                        o > 1 ? (o = 1) : o < 0 && (o = 0),
                                        (e._doors = i.querySelectorAll(
                                            ".js-door-left, .js-door-right"
                                        )),
                                        l.b.killTweensOf(e._doors),
                                        l.b.to(e._doors, {
                                            duration: 0.1,
                                            scaleX: 1 - o,
                                            ease: "power2.Out",
                                        });
                                });
                            },
                        },
                    ]) && A(t.prototype, i),
                    n && A(t, n),
                    e
                );
            })(),
                T = function () {
                    d(document.querySelectorAll(".js-form-input"), function (e, t) {
                        t.addEventListener("focus", function () {
                            "" === t.value &&
                                (t
                                    .closest(".s-form__field")
                                    .querySelector(".s-form__label")
                                    .classList.add("is-focus"),
                                    t.parentNode.classList.add("is-focus"));
                        }),
                            t.addEventListener("blur", function () {
                                "" === t.value &&
                                    (t
                                        .closest(".s-form__field")
                                        .querySelector(".s-form__label")
                                        .classList.remove("is-focus"),
                                        t.parentNode.classList.remove("is-focus"));
                            });
                    });
                };
            function E(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var q = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.items = t.items || null),
                        (this.triggerSelector =
                            t.triggerSelector || ".js-expand-collapse-trigger"),
                        (this.targetSelector =
                            t.targetSelector || ".js-expand-collapse-target"),
                        (this.expandedClass = t.expandedClass || "is-expanded"),
                        !this.items ||
                        this.items.length <= 0 ||
                        (this._initialise(), this._setListeners());
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                d(this.items, function (t, i) {
                                    if (!i.classList.contains(e.expandedClass)) {
                                        var n = i.querySelector(e.targetSelector);
                                        l.b.set(n, { height: 0, opacity: 0, overflow: "hidden" });
                                    }
                                });
                            },
                        },
                        {
                            key: "_setListeners",
                            value: function () {
                                var e = this;
                                d(this.items, function (t, i) {
                                    i.querySelector(e.triggerSelector).addEventListener(
                                        "click",
                                        function () {
                                            e._toggleItem(i);
                                        }
                                    );
                                });
                            },
                        },
                        {
                            key: "_toggleItem",
                            value: function (e) {
                                e.classList.contains(this.expandedClass)
                                    ? this._collapseItem(e)
                                    : this._expandItem(e);
                            },
                        },
                        {
                            key: "_expandItem",
                            value: function (e) {
                                var t = this,
                                    i = e.querySelector(this.targetSelector);
                                l.b.killTweensOf(i),
                                    l.b.to(i, {
                                        duration: 0.3,
                                        height: "auto",
                                        opacity: 1,
                                        ease: "power4.Out",
                                        onStart: function () {
                                            e.classList.add(t.expandedClass);
                                        },
                                    });
                            },
                        },
                        {
                            key: "_collapseItem",
                            value: function (e) {
                                var t = this,
                                    i = e.querySelector(this.targetSelector);
                                l.b.killTweensOf(i),
                                    l.b.to(i, {
                                        duration: 0.3,
                                        height: 0,
                                        opacity: 0,
                                        overflow: "hidden",
                                        ease: "power4.Out",
                                        onStart: function () {
                                            e.classList.remove(t.expandedClass);
                                        },
                                    });
                            },
                        },
                    ]) && E(t.prototype, i),
                    n && E(t, n),
                    e
                );
            })();
            function C(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var O = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._containers = t.containers || null),
                        (this._sectionSelector =
                            t.sectionSelector || ".js-overlapping-section"),
                        (this.isInitialised = !1),
                        this._containers && this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.update = function () {
                                    e._update();
                                }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                var e = this;
                                d(this._containers, function (t, i) {
                                    var n = i.getBoundingClientRect(),
                                        o = i.querySelector(e._sectionSelector);
                                    if (o) {
                                        var r = !1;
                                        n.top <= 25 && n.top > -n.height && (r = !0),
                                            o.classList.toggle("is-fixed", r);
                                    }
                                });
                            },
                        },
                    ]) && C(t.prototype, i),
                    n && C(t, n),
                    e
                );
            })();
            function x(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var I = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._container = t.container || null),
                        (this._image =
                            null != this._container
                                ? this._container.querySelector("img, video")
                                : null),
                        (this._frameleftright =
                            null != this._container
                                ? this._container.querySelectorAll(
                                    ".js-frame-left, .js-frame-right"
                                )
                                : null),
                        (this._frametopbottom =
                            null != this._container
                                ? this._container.querySelectorAll(
                                    ".js-frame-top, .js-frame-bottom"
                                )
                                : null),
                        (this.isInitialised = !1),
                        this._container &&
                        this._image &&
                        this._frameleftright &&
                        this._frametopbottom &&
                        (this._initialise(),
                            window.addEventListener(
                                "resize",
                                c(this._initialise.bind(this), 100)
                            ));
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.update = function () {
                                    e._update();
                                }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                var e = this._container.getBoundingClientRect(),
                                    t = (-1 * e.top + 0.1 * e.height) / (e.height / 2);
                                t < 0 ? (t = 0) : t > 1 && (t = 1),
                                    l.b.to(this._frameleftright, {
                                        duration: 0.1,
                                        scaleX: 1 - t,
                                        ease: "power2.Out",
                                    }),
                                    l.b.to(this._frametopbottom, {
                                        duration: 0.1,
                                        scaleY: 1 - t,
                                        ease: "power2.Out",
                                    });
                            },
                        },
                    ]) && x(t.prototype, i),
                    n && x(t, n),
                    e
                );
            })();
            function P(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var B = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._targets = t.targets || null),
                        (this.isInitialised = !1),
                        this._targets && this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.update = function () {
                                    e._update();
                                }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                var e = f(),
                                    t = p(),
                                    i = 0.03 * p();
                                d(this._targets, function (n, o) {
                                    if (t < 1200) l.b.set(o, { clearProps: "y" });
                                    else {
                                        var r = o.getBoundingClientRect(),
                                            s = (r.top - e / 2 + r.height / 2) / (e / 2);
                                        "up" === o.getAttribute("data-parallax-direction") &&
                                            (s *= -1),
                                            (s >= 0 || s <= 1) &&
                                            (l.b.killTweensOf(o),
                                                l.b.to(o, {
                                                    duration: 0.3,
                                                    y: s * i,
                                                    ease: "power2.Out",
                                                }));
                                    }
                                });
                            },
                        },
                    ]) && P(t.prototype, i),
                    n && P(t, n),
                    e
                );
            })();
            function M(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var H = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.isTransitioning = !1),
                                    (this.openButtons = document.querySelectorAll(
                                        ".js-menu-open-button"
                                    )),
                                    (this.closeButtons = document.querySelectorAll(
                                        ".js-menu-close-button"
                                    )),
                                    (this.overlay = document.querySelector(".js-menu-overlay")),
                                    (this.rectangle =
                                        document.querySelector(".js-menu-rectangle")),
                                    (this.menulinks = document.querySelector(".js-menu-links")),
                                    (this.background = document.querySelector(
                                        ".js-menu-background"
                                    )),
                                    (this.image = document.querySelector(".js-menu-image")),
                                    (this.footer = document.querySelector(".js-menu-footer")),
                                    setTimeout(function () {
                                        o.a.loader.unveil(e.image);
                                    }, 2e3),
                                    this._initMenuTimeline(),
                                    this._setHamburgerEvents(),
                                    this._setCloseEvents(),
                                    (this.close = function () {
                                        e._close();
                                    });
                            },
                        },
                        {
                            key: "_initMenuTimeline",
                            value: function () {
                                var e = this;
                                this.timelineOverlay = l.b.timeline({
                                    paused: !0,
                                    onComplete: function () {
                                        e.isAnimating = !1;
                                    },
                                });
                            },
                        },
                        {
                            key: "_setHamburgerEvents",
                            value: function () {
                                var e = this;
                                d(this.openButtons, function (t, i) {
                                    i.addEventListener("click", function (t) {
                                        t.preventDefault(), e._open();
                                    });
                                });
                            },
                        },
                        {
                            key: "_setCloseEvents",
                            value: function () {
                                var e = this;
                                d(this.closeButtons, function (t, i) {
                                    i.addEventListener("click", function (t) {
                                        t.preventDefault(), e._close();
                                    });
                                });
                            },
                        },
                        {
                            key: "_open",
                            value: function () {
                                var e = this;
                                e.isAnimating ||
                                    (e.overlay.classList.remove("is-hidden"),
                                        l.b.set(e.menulinks, { opacity: 1 }),
                                        l.b.set(e.footer, { opacity: 1 }),
                                        l.b.set(e.rectangle, { opacity: 1 }),
                                        e.timelineOverlay
                                            .addLabel("start")
                                            .add(function () {
                                                e.timelineOverlay.reversed() &&
                                                    e.timelineOverlay.timeScale(-1);
                                            })
                                            .from(
                                                e.rectangle,
                                                0.3,
                                                { opacity: 0, ease: "power4.inOut" },
                                                "start"
                                            )
                                            .addLabel("items")
                                            .add(function () {
                                                e.timelineOverlay.reversed() &&
                                                    e.timelineOverlay.timeScale(-2);
                                            })
                                            .from(e.menulinks, 0.4, { opacity: 0 }, "start+=0.2")
                                            .from(
                                                e.footer,
                                                0.4,
                                                { opacity: 0, ease: "0.215, 0.61, 0.355, 1" },
                                                "start+=0.3"
                                            )
                                            .play(),
                                        (e.isAnimating = !0));
                            },
                        },
                        {
                            key: "_close",
                            value: function () {
                                this.isAnimating ||
                                    (l.b.set(this.rectangle, { opacity: 0 }),
                                        this.overlay.classList.add("is-hidden"),
                                        (this.isAnimating = !1));
                            },
                        },
                    ]) && M(t.prototype, i),
                    n && M(t, n),
                    e
                );
            })(),
                V = i("qFE6"),
                D = i.n(V);
            function R(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var z = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.isTransitioning = !1),
                                    (this.openButtons = document.querySelectorAll(
                                        ".js-projects-open-button"
                                    )),
                                    (this.closeButtons = document.querySelectorAll(
                                        ".js-projects-close-button"
                                    )),
                                    (this.overlay = document.querySelector(
                                        ".js-projects-overlay"
                                    )),
                                    (this.rectangle = document.querySelector(
                                        ".js-projects-rectangle"
                                    )),
                                    (this.menulinksContainer =
                                        document.querySelector(".js-projects-links")),
                                    (this.background = document.querySelector(
                                        ".js-projects-background"
                                    )),
                                    (this.menulinks = document.querySelectorAll(
                                        ".js-projects-overlay-link"
                                    )),
                                    (this.visualSelector = ".js-projects-overlay-visual"),
                                    (this.visuals = document.querySelectorAll(
                                        this.visualSelector
                                    )),
                                    (this.projectLogoSelector =
                                        ".js-project-overlay-logo-animation"),
                                    (this.anims = []),
                                    d(this.visuals, function (e, t) {
                                        var i = t.querySelector("img");
                                        setTimeout(function () {
                                            o.a.loader.unveil(i);
                                        }, 2e3),
                                            l.b.set(t, { zIndex: 0 == e ? 1 : 0 });
                                    }),
                                    this._initMenuTimeline(),
                                    this._initAnimations(),
                                    u() || this._setLinkEvents(),
                                    this._setHamburgerEvents(),
                                    this._setCloseEvents(),
                                    (this.close = function () {
                                        e._close();
                                    });
                            },
                        },
                        {
                            key: "_initMenuTimeline",
                            value: function () {
                                var e = this;
                                e.timelineOverlay = l.b.timeline({
                                    paused: !0,
                                    onComplete: function () {
                                        e.isAnimating = !1;
                                    },
                                });
                            },
                        },
                        {
                            key: "_initAnimations",
                            value: function () {
                                var e = this;
                                d(this.visuals, function (t, i) {
                                    var n = i.querySelector(e.projectLogoSelector);
                                    if (n) {
                                        var o = n.getAttribute("data-json-path"),
                                            r = D.a.loadAnimation({
                                                container: n,
                                                renderer: "svg",
                                                loop: !1,
                                                autoplay: !1,
                                                path: o,
                                            });
                                        r.addEventListener("data_ready", function () {
                                            var e = n.querySelector("svg");
                                            e.removeAttribute("width"), e.removeAttribute("height");
                                        }),
                                            (e.anims[t] = r);
                                    }
                                }),
                                    d(
                                        document.querySelectorAll(
                                            ".js-projects-mobile-menu-logo-animation"
                                        ),
                                        function (e, t) {
                                            var i = t.getAttribute("data-json-path");
                                            D.a
                                                .loadAnimation({
                                                    container: t,
                                                    renderer: "svg",
                                                    loop: !1,
                                                    autoplay: !0,
                                                    path: i,
                                                })
                                                .addEventListener("data_ready", function () {
                                                    var e = t.querySelector("svg");
                                                    e.removeAttribute("width"),
                                                        e.removeAttribute("height");
                                                });
                                        }
                                    );
                            },
                        },
                        {
                            key: "_setLinkEvents",
                            value: function () {
                                var e = this,
                                    t = 0;
                                d(this.menulinks, function (i, n) {
                                    n.addEventListener("mouseenter", function (i) {
                                        var n = i.currentTarget.getAttribute("data-index"),
                                            o = document.querySelector(
                                                e.visualSelector + "[data-index='" + n + "']"
                                            );
                                        t++,
                                            l.b.set(o, { zIndex: t, opacity: 0, scale: 1.05 }),
                                            l.b.to(o, {
                                                duration: 0.4,
                                                opacity: 1,
                                                scale: 1,
                                                ease: "power2.Out",
                                            }),
                                            e.anims[n] && e.anims[n].goToAndPlay(0, !0);
                                    });
                                });
                            },
                        },
                        {
                            key: "_setHamburgerEvents",
                            value: function () {
                                var e = this;
                                d(this.openButtons, function (t, i) {
                                    i.addEventListener("click", function (t) {
                                        t.preventDefault(), e._open();
                                    });
                                });
                            },
                        },
                        {
                            key: "_setCloseEvents",
                            value: function () {
                                var e = this;
                                d(this.closeButtons, function (t, i) {
                                    i.addEventListener("click", function (t) {
                                        t.preventDefault(), e._close();
                                    });
                                });
                            },
                        },
                        {
                            key: "_open",
                            value: function () {
                                var e = this;
                                e.isAnimating ||
                                    (e.overlay.classList.remove("is-hidden"),
                                        document.body.classList.add("is-projects-menu-open"),
                                        l.b.set(e.menulinksContainer, { opacity: 1 }),
                                        l.b.set(e.rectangle, { opacity: 1 }),
                                        e.timelineOverlay
                                            .addLabel("start")
                                            .add(function () {
                                                e.timelineOverlay.reversed() &&
                                                    e.timelineOverlay.timeScale(-1);
                                            })
                                            .from(
                                                e.rectangle,
                                                0.3,
                                                { opacity: 0, ease: "power4.inOut" },
                                                "start"
                                            )
                                            .addLabel("items")
                                            .add(function () {
                                                e.timelineOverlay.reversed() &&
                                                    e.timelineOverlay.timeScale(-2);
                                            })
                                            .from(
                                                e.menulinksContainer,
                                                0.4,
                                                { opacity: 0 },
                                                "start+=0.3"
                                            )
                                            .play(),
                                        (this.isAnimating = !0));
                            },
                        },
                        {
                            key: "_close",
                            value: function () {
                                this.isAnimating ||
                                    (l.b.set(this.rectangle, { opacity: 0 }),
                                        this.overlay.classList.add("is-hidden"),
                                        document.body.classList.remove("is-projects-menu-open"),
                                        (this.isAnimating = !1));
                            },
                        },
                    ]) && R(t.prototype, i),
                    n && R(t, n),
                    e
                );
            })();
            function W(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var F = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._buttons = t.buttons || null),
                        (this._circleSelector =
                            t.circleSelector || ".js-link-button-circle"),
                        (this._activeCircle = null),
                        (this.isInitialised = !1),
                        this._buttons && this._setEventHandlers();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_setEventHandlers",
                            value: function () {
                                var e = this,
                                    t = this;
                                d(t._buttons, function (e, i) {
                                    i.addEventListener("mouseenter", t._handleMouseEnter.bind(t)),
                                        i.addEventListener(
                                            "mouseleave",
                                            t._handleMouseLeave.bind(t)
                                        );
                                }),
                                    document.addEventListener("mousemove", function (t) {
                                        e._activeCircle &&
                                            ((e.clientX = t.clientX),
                                                (e.clientY = t.clientY),
                                                l.b.to(e._activeCircle, {
                                                    duration: 0.2,
                                                    position: "fixed",
                                                    top: "0",
                                                    left: "0",
                                                    x: e.clientX,
                                                    y: e.clientY,
                                                    width: "5rem",
                                                    height: "5rem",
                                                }));
                                    });
                            },
                        },
                        {
                            key: "_handleMouseEnter",
                            value: function (e) {
                                var t =
                                    e && e.currentTarget
                                        ? e.currentTarget.querySelector(this._circleSelector)
                                        : null;
                                l.b.killTweensOf(t),
                                    l.b.set(t, { clearProps: "position,top,left,x,y" });
                                var i = t.getBoundingClientRect();
                                t.setAttribute("data-original-x", i.x),
                                    t.setAttribute("data-original-y", i.y),
                                    l.b.set(t, {
                                        position: "fixed",
                                        top: "0",
                                        left: "0",
                                        x: i.x,
                                        y: i.y,
                                    }),
                                    (this._activeCircle = t);
                            },
                        },
                        {
                            key: "_handleMouseLeave",
                            value: function (e) {
                                this._activeCircle = null;
                                var t =
                                    e && e.currentTarget
                                        ? e.currentTarget.querySelector(this._circleSelector)
                                        : null;
                                l.b.killTweensOf(t),
                                    l.b.to(t, {
                                        duration: 0.3,
                                        x: t.getAttribute("data-original-x"),
                                        y: t.getAttribute("data-original-y"),
                                        width: "3rem",
                                        height: "3rem",
                                        onComplete: function () {
                                            l.b.set(t, { clearProps: "position,top,left,x,y" });
                                        },
                                    });
                            },
                        },
                    ]) && W(t.prototype, i),
                    n && W(t, n),
                    e
                );
            })();
            function U(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var N = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._hoverAreas = t.hoverAreas || null),
                        (this._cursor = t.cursor || null),
                        (this._cursorBg = t.cursorBg || null),
                        (this._isHovering = !1),
                        (this.isInitialised = !1),
                        this._hoverAreas &&
                        this._cursor &&
                        this._cursorBg &&
                        (this._setEventHandlers(), this._initialise());
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                (this.update = function () {
                                    e._update();
                                }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_setEventHandlers",
                            value: function () {
                                var e = this,
                                    t = this;
                                d(t._hoverAreas, function (e, i) {
                                    i.addEventListener("mouseenter", t._handleMouseEnter.bind(t)),
                                        i.addEventListener(
                                            "mouseleave",
                                            t._handleMouseLeave.bind(t)
                                        );
                                }),
                                    document.addEventListener("mousemove", function (t) {
                                        (e.clientX = t.clientX), (e.clientY = t.clientY);
                                    }),
                                    document.addEventListener("mousedown", function () {
                                        l.b.to(e._cursorBg, { duration: 0.1, scale: 0.9 });
                                    }),
                                    document.addEventListener("mouseup", function () {
                                        l.b.to(e._cursorBg, { duration: 0.1, scale: 1 });
                                    });
                            },
                        },
                        {
                            key: "_handleMouseEnter",
                            value: function (e) {
                                (this._isHovering = !0),
                                    l.b.set(this._cursor, { scale: 0.8 }),
                                    l.b.to(this._cursor, {
                                        duration: 0.3,
                                        scale: 1,
                                        ease: "back.out(1.7)",
                                    });
                                var t =
                                    e.currentTarget &&
                                        e.currentTarget.getAttribute("data-cursor-direction")
                                        ? e.currentTarget.getAttribute("data-cursor-direction")
                                        : "right";
                                this._cursor.classList.toggle("is-left", "left" === t),
                                    this._cursor.classList.toggle("is-right", "right" === t);
                            },
                        },
                        {
                            key: "_handleMouseLeave",
                            value: function () {
                                this._isHovering = !1;
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                this._isHovering
                                    ? (l.b.set(document.body, { cursor: "none" }),
                                        l.b.set(this._cursor, {
                                            clearProps: "display",
                                            x: this.clientX,
                                            y: this.clientY,
                                        }))
                                    : (l.b.set(document.body, { clearProps: "cursor" }),
                                        l.b.set(this._cursor, { display: "none" }));
                            },
                        },
                    ]) && U(t.prototype, i),
                    n && U(t, n),
                    e
                );
            })();
            function X(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var Y = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._projectLogos = t.projectLogos || null),
                        (this._anims = []),
                        (this.isInitialised = !1),
                        this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                d(this._projectLogos, function (t, i) {
                                    var n = i.getAttribute("data-json-path"),
                                        o = D.a.loadAnimation({
                                            container: i,
                                            renderer: "svg",
                                            loop: !1,
                                            autoplay: !1,
                                            path: n,
                                        });
                                    o.addEventListener("data_ready", function () {
                                        var e = i.querySelector("svg");
                                        e.removeAttribute("width"), e.removeAttribute("height");
                                    }),
                                        e._anims.push(o);
                                }),
                                    (this.hitDetection = function () {
                                        e._hitDetection();
                                    }),
                                    this._hitDetection(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_hitDetection",
                            value: function () {
                                var e = this,
                                    t = f();
                                d(this._anims, function (i, n) {
                                    var o = n.wrapper.getBoundingClientRect();
                                    o.top > 0 &&
                                        o.top < t &&
                                        (n.play(), e._anims.splice(e._anims.indexOf(n), 1));
                                });
                            },
                        },
                    ]) && X(t.prototype, i),
                    n && X(t, n),
                    e
                );
            })();
            function Z(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var G = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._overlay = t.overlay || null),
                        (this._onComplete = t.onComplete || null),
                        (this.isInitialised = !1),
                        this._overlay && this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this,
                                    t = this._overlay.querySelector(
                                        ".js-page-loader-animation"
                                    ),
                                    i = t.getAttribute("data-json-path"),
                                    n = D.a.loadAnimation({
                                        container: t,
                                        renderer: "svg",
                                        loop: !1,
                                        autoplay: !0,
                                        path: i,
                                    });
                                n.addEventListener("data_ready", function () {
                                    var e = t.querySelector("svg");
                                    e.removeAttribute("width"), e.removeAttribute("height");
                                }),
                                    n.addEventListener("complete", function () {
                                        e._onComplete(),
                                            l.b.to(e._overlay, {
                                                duration: 0.6,
                                                webkitClipPath: "inset(0% 0% 0% 100%)",
                                                clipPath: "inset(0% 0% 0% 100%)",
                                                ease: "power2.iOut",
                                            });
                                    }),
                                    (this.isInitialised = !0);
                            },
                        },
                    ]) && Z(t.prototype, i),
                    n && Z(t, n),
                    e
                );
            })(),
                J = i("Haw6");
            function K() {
                return (
                    1 ==
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    )
                );
            }
            function $() {
                return K() ? document.documentElement.clientWidth : window.innerWidth;
            }
            function Q() {
                return K() ? document.documentElement.clientHeight : window.innerHeight;
            }
            function ee(e, t, i) {
                var n;
                return function () {
                    var o = this,
                        r = arguments,
                        s = i && !n;
                    clearTimeout(n),
                        (n = setTimeout(function () {
                            (n = null), i || e.apply(o, r);
                        }, t)),
                        s && e.apply(o, r);
                };
            }
            function te(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            l.a.registerPlugin(J.b);
            var ie = (function () {
                function e() {
                    var t = this,
                        i =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                    if (
                        ((function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                            i.element &&
                            ((this._element = i.element || null),
                                (this._videoUrl = this._element.getAttribute("data-url")),
                                (this._videoMobileUrl =
                                    this._element.getAttribute("data-mobile-url")),
                                (this._triggerOnScroll =
                                    "true" ==
                                    this._element.getAttribute("data-trigger-on-scroll")),
                                (this._mobileBreakpoint = this._element.getAttribute(
                                    "data-mobile-breakpoint"
                                )),
                                (this._start = i.scrollTriggerStart || "top-=50px bottom"),
                                (this._end = i.scrollTriggerEnd || "bottom+=100% top"),
                                (this._videoPlaying = !1),
                                (this._onVideoStarted = i.onVideoStarted || null),
                                this._initialise(),
                                window.innerWidth <= 768))
                    ) {
                        var n = function () {
                            return (
                                t._element.currentTime > 0 &&
                                !t._element.paused &&
                                t._element.readyState > 2
                            );
                        };
                        this._element.addEventListener("playing", function () {
                            n() && (t._element.style.display = "block");
                        }),
                            setTimeout(function () {
                                n() || (t._element.style.display = "none");
                            }, 2e3);
                    }
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                this._setSource(),
                                    this._triggerOnScroll
                                        ? J.b.create({
                                            trigger: this._element,
                                            start: this._start,
                                            end: this._end,
                                            scrub: !0,
                                            onEnter: function () {
                                                return e._playVideo(e._element);
                                            },
                                            onLeave: function () {
                                                return e._pauseVideo(e._element);
                                            },
                                            onEnterBack: function () {
                                                return e._playVideo(e._element);
                                            },
                                            onLeaveBack: function () {
                                                return e._pauseVideo(e._element);
                                            },
                                        })
                                        : this._preloadVideo(this._element);
                            },
                        },
                        {
                            key: "_updateSource",
                            value: function () {
                                var e = "",
                                    t =
                                        (e =
                                            "orientation" == this._mobileBreakpoint
                                                ? Q() > $() &&
                                                    this._videoMobileUrl &&
                                                    "" != this._videoMobileUrl
                                                    ? this._videoMobileUrl
                                                    : this._videoUrl
                                                : $() < 768 &&
                                                    this._videoMobileUrl &&
                                                    "" != this._videoMobileUrl
                                                    ? this._videoMobileUrl
                                                    : this._videoUrl) != this._element.src;
                                return (
                                    t &&
                                    (this._element.setAttribute("src", e),
                                        this._element.load()),
                                    t
                                );
                            },
                        },
                        {
                            key: "_setSource",
                            value: function () {
                                var e = this;
                                (this._currentWidth = $()),
                                    window.addEventListener(
                                        "resize",
                                        ee(function () {
                                            e._currentWidth != $() && e._updateSource();
                                        }, 200)
                                    ),
                                    this._updateSource();
                            },
                        },
                        {
                            key: "_preloadVideo",
                            value: function () {
                                var e = this;
                                setTimeout(function () {
                                    e._playVideo();
                                }, 2e3),
                                    K() ||
                                    this._element.addEventListener(
                                        "canplaythrough",
                                        function () {
                                            e._playVideo();
                                        }
                                    );
                            },
                        },
                        {
                            key: "_playVideo",
                            value: function () {
                                if (!this._videoPlaying) {
                                    this._videoPlaying = !0;
                                    var e = this,
                                        t = e._element.play();
                                    void 0 !== t
                                        ? t
                                            .then(function () {
                                                e._onVideoStarted && e._onVideoStarted();
                                            })
                                            .catch(function (t) {
                                                e._onVideoStarted && e._onVideoStarted();
                                            })
                                        : e._onVideoStarted && e._onVideoStarted();
                                }
                            },
                        },
                        {
                            key: "_pauseVideo",
                            value: function () {
                                (this._videoPlaying = !1), this._element.pause();
                            },
                        },
                    ]) && te(t.prototype, i),
                    n && te(t, n),
                    e
                );
            })(),
                ne = i("XuX8"),
                oe = i.n(ne),
                re = {
                    props: {
                        type: { type: String, default: "normal" },
                        video: { type: String, required: !0 },
                        poster: { type: String },
                        options: {
                            type: Object,
                            default: function () {
                                return {};
                            },
                        },
                    },
                    data: function () {
                        return { isPlaying: !1, id: null, providerName: null };
                    },
                    mounted: function () {
                        this.init();
                    },
                    methods: {
                        init: function () {
                            this.prepareData();
                        },
                        prepareData: function () {
                            if (-1 !== this.video.indexOf("youtu.be/")) {
                                this.providerName = "youtube";
                                var e = this.video.match(
                                    /(https:|http:|)(\/\/www\.|\/\/|)(.*?)\/(.{11})/i
                                );
                                this.id = e[4];
                            } else if (-1 !== this.video.indexOf("youtube")) {
                                this.providerName = "youtube";
                                var t = this.video.match(
                                    /(https:|http:|):(\/\/www\.|\/\/|)(.*?)\/(embed\/|watch.*?v=|)([a-z_A-Z0-9\-]{11})/i
                                );
                                this.id = t[5];
                            } else if (-1 !== this.video.indexOf("vimeo.com")) {
                                this.providerName = "vimeo";
                                var i = this.video.match(
                                    /(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
                                );
                                this.id = i[5];
                            }
                        },
                        getIframeUrl: function () {
                            return (
                                "lazy" == this.type && null == this.options.autoplay
                                    ? (this.options.autoplay = !0)
                                    : "iframe" == this.type &&
                                    null == this.options.autoplay &&
                                    (this.options.autoplay = !1),
                                "youtube" === this.providerName
                                    ? "https://www.youtube.com/embed/"
                                        .concat(this.id, "?autoplay=")
                                        .concat(
                                            this.booleanToBinary(this.options.autoplay),
                                            "&allowfullscreen=1&rel=0&theme=dark"
                                        )
                                    : "vimeo" === this.providerName
                                        ? "https://player.vimeo.com/video/"
                                            .concat(this.id, "?autoplay=")
                                            .concat(
                                                this.booleanToBinary(this.options.autoplay),
                                                "&allowfullscreen=1&rel=0&theme=dark"
                                            )
                                        : null
                            );
                        },
                        playVideo: function () {
                            this.isPlaying = !0;
                        },
                        booleanToBinary: function (e) {
                            return !0 === e ? "1" : "0";
                        },
                    },
                },
                se = (i("RGLk"), i("KHd+")),
                ae = Object(se.a)(
                    re,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            i = e._self._c || t;
                        return i("div", { class: "embedvideo embedvideo--" + e.type }, [
                            "normal" === e.type
                                ? i("div", [
                                    i("iframe", {
                                        staticClass: "embedvideo__player",
                                        attrs: {
                                            src: e.getIframeUrl(),
                                            width: "480",
                                            height: "270",
                                            frameborder: "0",
                                            allow:
                                                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                            allowfullscreen: "",
                                        },
                                    }),
                                ])
                                : e._e(),
                            e._v(" "),
                            "lazy" === e.type
                                ? i("div", [
                                    e.isPlaying
                                        ? e._e()
                                        : i(
                                            "div",
                                            {
                                                staticClass: "embedvideo__overlay",
                                                on: { click: e.playVideo },
                                            },
                                            [
                                                e.poster
                                                    ? i("img", {
                                                        staticClass: "embedvideo__img",
                                                        attrs: { src: e.poster },
                                                    })
                                                    : e._e(),
                                                e._v(" "),
                                                i("div", { staticClass: "embedvideo__play" }, [
                                                    i(
                                                        "svg",
                                                        {
                                                            staticClass: "svg-inline--fa fa-play fa-w-14",
                                                            attrs: {
                                                                "aria-hidden": "true",
                                                                focusable: "false",
                                                                "data-prefix": "fas",
                                                                "data-icon": "play",
                                                                role: "img",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                viewBox: "0 0 448 512",
                                                            },
                                                        },
                                                        [
                                                            i("path", {
                                                                attrs: {
                                                                    fill: "currentColor",
                                                                    d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",
                                                                },
                                                            }),
                                                        ]
                                                    ),
                                                ]),
                                            ]
                                        ),
                                    e._v(" "),
                                    e.isPlaying
                                        ? i("iframe", {
                                            staticClass: "embedvideo__player",
                                            attrs: {
                                                src: e.getIframeUrl(),
                                                width: "480",
                                                height: "270",
                                                frameborder: "0",
                                                allow:
                                                    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                                allowfullscreen: "1",
                                            },
                                        })
                                        : e._e(),
                                ])
                                : e._e(),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ).exports;
            function le(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            (window.Vue = oe.a),
                oe.a.component("EmbedVideo", ae),
                new oe.a({ el: "#app" });
            var ue = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this._header = t.header || null),
                        (this._isOpen = !1),
                        (this.isInitialised = !1),
                        this._header && this._initialise();
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "_initialise",
                            value: function () {
                                var e = this;
                                l.b.set(this._header, { y: "-100%" }),
                                    (this.update = function () {
                                        e._update();
                                    }),
                                    this._update(),
                                    (this.isInitialised = !0);
                            },
                        },
                        {
                            key: "_update",
                            value: function () {
                                if (h() > f()) {
                                    if (this._isOpen) return;
                                    l.b.killTweensOf(this._header),
                                        l.b.to(this._header, {
                                            duration: 0.3,
                                            y: "0%",
                                            ease: "power2.Out",
                                        }),
                                        (this._isOpen = !0);
                                } else {
                                    if (!this._isOpen) return;
                                    l.b.killTweensOf(this._header),
                                        l.b.to(this._header, {
                                            duration: 0.2,
                                            y: "-100%",
                                            ease: "power2.In",
                                        }),
                                        (this._isOpen = !1);
                                }
                            },
                        },
                    ]) && le(t.prototype, i),
                    n && le(t, n),
                    e
                );
            })();
            function ce(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            l.a.registerPlugin(J.a);
            var de = (function () {
                function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.el = t.el || null),
                        this.el &&
                        ((this.elements = {
                            inner: this.el.querySelector(".popup__inner"),
                            content: this.el.querySelector(".popup__content"),
                            formThanks: this.el.querySelector(".popup__thanks"),
                            form: this.el.querySelector(".popup-form form"),
                            toggles: this.el.querySelectorAll(".js-popup-toggle"),
                        }),
                            (this.classes = {
                                popupHidden: "popup--hidden",
                                popupToggled: "popup--toggled",
                            }),
                            (this.popupId = this.el.dataset.id),
                            (this.popupState = sessionStorage.getItem(this.popupId)),
                            this.init(),
                            this.setHandlers());
                }
                var t, i, n;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                if ("dismissed" == this.popupState) return !1;
                                this.animatePopup(),
                                    this.elements.formThanks &&
                                    l.a.set(this.elements.formThanks, {
                                        autoAlpha: 0,
                                        height: 0,
                                    });
                            },
                        },
                        {
                            key: "setHandlers",
                            value: function () {
                                var e = this;
                                this.elements.form &&
                                    this.elements.form.addEventListener(
                                        "freeform-ready",
                                        function (t) {
                                            var i = t.target.freeform,
                                                n = e.elements.content,
                                                o = e.elements.formThanks;
                                            i.addOnSuccessfulAjaxSubmit(function () {
                                                l.a.set(n, { autoAlpha: 0, height: 0 }),
                                                    l.a.set(o, { autoAlpha: 1, height: "auto" });
                                            });
                                        }
                                    );
                                this.elements.toggles &&
                                    this.elements.toggles.forEach(function (t) {
                                        t.addEventListener("click", function () {
                                            e.hidePopup();
                                        });
                                    });
                            },
                        },
                        {
                            key: "animatePopup",
                            value: function () {
                                var e = this;
                                this.popup = J.a.create({
                                    trigger: document.body,
                                    start: "".concat(window.innerHeight / 2, "px top"),
                                    onEnter: function () {
                                        e.el.classList.remove(e.classes.popupHidden),
                                            e.el.classList.add(e.classes.popupToggled);
                                    },
                                });
                            },
                        },
                        {
                            key: "hidePopup",
                            value: function () {
                                this.el.remove(),
                                    sessionStorage.setItem(this.popupId, "dismissed");
                            },
                        },
                    ]) && ce(t.prototype, i),
                    n && ce(t, n),
                    e
                );
            })(),
                he = {
                    init: function () {
                        this.setScrollbarWidth(),
                            this.prepareVideo(document.querySelector(".js-hero-video")),
                            (this.menu = new H()),
                            (this.projects = new z()),
                            new b(),
                            (this.homeHeroMask = new y()),
                            (this.heroZoom = new m()),
                            (this.colorMode = new k({
                                hitAreas: document.querySelectorAll("[data-color-mode]"),
                                targets: document.querySelectorAll(".js-color-target"),
                            })),
                            (this.sidebarTitle = new j({
                                hitAreas: document.querySelectorAll("[data-sidebar-title]"),
                                targets: document.querySelectorAll(".js-sidebar-title"),
                            })),
                            (this.openDoors = new L({
                                containers: document.querySelectorAll(".js-doors"),
                            })),
                            (this.overlapping = new O({
                                containers: document.querySelectorAll(
                                    ".js-overlapping-container"
                                ),
                            })),
                            (this.openFrame = new I({
                                container: document.querySelector(".js-frame"),
                            })),
                            (this.parallax = new B({
                                targets: document.querySelectorAll(".js-parallax"),
                            })),
                            (this.previousWidth = window.innerWidth),
                            window.addEventListener(
                                "resize",
                                c(this.afterResize.bind(this), 100)
                            ),
                            this.setFixedFooter(),
                            new r.a(".swiper-container", {
                                slidesPerView: "auto",
                                centeredSlides: !0,
                                speed: 800,
                                allowTouchMove: u(),
                                navigation: {
                                    nextEl: ".js-swiper-next",
                                    prevEl: ".js-swiper-prev",
                                },
                                on: {
                                    touchStart: function () {
                                        for (var e = 0; e < this.slides.length; e++)
                                            this.slides[e].style.transition = "";
                                    },
                                    setTransition: function (e) {
                                        for (var t = 0; t < this.slides.length; t++)
                                            this.slides[t].style.transition =
                                                e + "ms cubic-bezier(0.65,0.05,0.36,1);";
                                    },
                                },
                            }),
                            this.initRealisationsGrid(),
                            this.initHoverZoom(),
                            this.initProjectsGrid(),
                            new q({ items: document.querySelectorAll(".js-project-floor") }),
                            T(),
                            new F({ buttons: document.querySelectorAll(".js-link-button") }),
                            (this.galleryCursor = new N({
                                hoverAreas: document.querySelectorAll(".js-gallery-area"),
                                cursor: document.querySelector(".js-gallery-cursor"),
                                cursorBg: document.querySelector(
                                    ".js-gallery-cursor .js-background"
                                ),
                            })),
                            (this.logoAnimations = new Y({
                                projectLogos: document.querySelectorAll(
                                    ".js-project-logo-animation"
                                ),
                            })),
                            (this.revealHeader = new ue({
                                header: document.querySelector(".js-header-mobile-sticky"),
                            }));
                        var e = function () {
                            var e = document.querySelector(".js-hero-video");
                            e && e.play();
                        };
                        (this.pageLoader = new G({
                            overlay: document.querySelector(".js-page-loader-overlay"),
                            onComplete: function () {
                                e();
                            },
                        })),
                            this.pageLoader.isInitialised || e(),
                            this.initVideos(),
                            (this.popup = new de({
                                el: document.querySelector(".js-popup"),
                            }));
                    },
                    initVideos: function () {
                        var e = document.querySelectorAll(".js-video");
                        e.length &&
                            d(e, function (e, t) {
                                new ie({ element: t });
                            });
                    },
                    prepareVideo: function (e) {
                        if (e) {
                            for (
                                var t = e.getAttribute("data-mobile-src"),
                                i = e.getAttribute("data-src");
                                e.firstChild;

                            )
                                e.removeChild(e.firstChild);
                            var n = document.createElement("source");
                            if (
                                (window.innerWidth > 768
                                    ? n.setAttribute("src", i)
                                    : t && "" != t
                                        ? n.setAttribute("src", t)
                                        : n.setAttribute("src", i),
                                    n.setAttribute("type", "video/mp4"),
                                    e.appendChild(n),
                                    window.innerWidth <= 768)
                            ) {
                                var o = function () {
                                    return e.currentTime > 0 && !e.paused && e.readyState > 2;
                                };
                                e.addEventListener("playing", function () {
                                    o() && (e.style.display = "block");
                                }),
                                    setTimeout(function () {
                                        o() || (e.style.display = "none");
                                    }, 2e3);
                            }
                            e.load();
                            e.addEventListener('canplay', function () {
                                if (e.readyState >= 2) {  // readyState 2 means the media has enough data to play
                                    e.play();
                                }
                            });
                        }
                    },
                    setScrollbarWidth: function () {
                        document.documentElement.style.setProperty(
                            "--scrollbar-width",
                            window.innerWidth - document.documentElement.clientWidth + "px"
                        );
                    },
                    afterResize: function () {
                        this.setFixedFooter(),
                            this.previousWidth !== window.innerWidth &&
                            (this.prepareVideo(document.querySelector(".js-hero-video")),
                                (this.previousWidth = window.innerWidth));
                    },
                    setFixedFooter: function () {
                        var e = document
                            .querySelector(".js-site-footer")
                            .getBoundingClientRect().height;
                        document.body.classList.toggle("is-footer-fixed", e < f());
                    },
                    initRealisationsGrid: function () {
                        d(
                            document.querySelectorAll(".js-realisations-grid"),
                            function (e, t) {
                                new a.a(t, {
                                    columnWidth: ".js-grid-sizer",
                                    gutter: ".js-gutter-sizer",
                                    itemSelector: ".js-grid-item",
                                    percentPosition: !0,
                                });
                            }
                        );
                    },
                    initProjectsGrid: function () {
                        var e = document.querySelector(".js-projects-grid");
                        if (e) {
                            var t = new a.a(e, {
                                isInitLayout: !1,
                                columnWidth: ".js-grid-sizer",
                                gutter: ".js-gutter-sizer",
                                itemSelector: ".js-grid-item",
                                percentPosition: !0,
                            });
                            t.on("layoutComplete", function (e) {
                                d(e, function (e, t) {
                                    0 === t.position.x
                                        ? t.element.classList.add("is-projects-grid-item--left")
                                        : t.element.classList.add("is-projects-grid-item--right");
                                });
                            }),
                                t.layout();
                        }
                    },
                    initHoverZoom: function () {
                        d(document.querySelectorAll(".js-hover-zoom"), function (e, t) {
                            t.addEventListener("mouseenter", function (e) {
                                var t = e.target.querySelector("img");
                                t.classList.remove("fade-in"),
                                    l.b.to(t, { duration: 2, scale: 1.2, ease: "power4.Out" });
                            }),
                                t.addEventListener("mouseleave", function () {
                                    var e = event.target.querySelector("img");
                                    l.b.killTweensOf(e),
                                        l.b.to(e, { duration: 0.6, scale: 1, ease: "power2.Out" });
                                });
                        });
                    },
                };
            
            he.init();
            var pe =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                function (e) {
                    window.setTimeout(e, 1e3 / 60);
                };
            !(function e() {
                if (he.lastScrollTop === window.pageYOffset)
                    return (
                        (he.didScroll = !1),
                        document.body.classList.toggle("is-scrolling", !1),
                        pe(e),
                        !1
                    );
                (he.lastScrollTop = window.pageYOffset),
                    (he.didScroll = !0),
                    document.body.classList.toggle("is-scrolling", !0),
                    he.colorMode.isInitialised && he.colorMode.hitDetection(),
                    he.sidebarTitle.isInitialised && he.sidebarTitle.hitDetection(),
                    he.homeHeroMask.isInitialised && he.homeHeroMask.update(),
                    he.heroZoom.isInitialised && he.heroZoom.update(),
                    he.openDoors.isInitialised && he.openDoors.update(),
                    he.overlapping.isInitialised && he.overlapping.update(),
                    he.openFrame.isInitialised && he.openFrame.update(),
                    he.parallax.isInitialised && he.parallax.update(),
                    he.logoAnimations.isInitialised && he.logoAnimations.hitDetection(),
                    he.revealHeader.isInitialised && he.revealHeader.update(),
                    pe(e);
            })(),
                (function e() {
                    he.galleryCursor.isInitialised && he.galleryCursor.update(), pe(e);
                })();
        },
    },
    [[0, 1, 2]],
]);