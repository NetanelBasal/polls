/*
 @product.name@ JS v@product.version@ (@product.date@)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
  @product.name@ JS v@product.version@ (@product.date@)
 Solid angular gauge module

 (c) 2010-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function() {
    function r(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }

    function y() {
        var a, b = arguments,
            c, d = {}, e = function(a, b) {
                var c, d;
                "object" !== typeof a && (a = {});
                for (d in b) b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]);
                return a
            };
        !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function u(a, b) {
        return parseInt(a,
            b || 10)
    }

    function $(a) {
        return "string" === typeof a
    }

    function P(a) {
        return "object" === typeof a
    }

    function ea(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function F(a) {
        return "number" === typeof a
    }

    function E(a) {
        return N.log(a) / N.LN10
    }

    function H(a) {
        return N.pow(10, a)
    }

    function B(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function v(a) {
        return a !== z && null !== a
    }

    function x(a, b, c) {
        var d, e;
        if ($(b)) v(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (v(b) && P(b))
            for (d in b) a.setAttribute(d,
                b[d]);
        return e
    }

    function D(a) {
        return ea(a) ? a : [a]
    }

    function l() {
        var a = arguments,
            b, c, d = a.length;
        for (b = 0; b < d; b++)
            if (c = a[b], "undefined" !== typeof c && null !== c) return c
    }

    function I(a, b) {
        ka && !V && b && b.opacity !== z && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        r(a.style, b)
    }

    function ta(a, b, c, d, e) {
        a = G.createElement(a);
        b && r(a, b);
        e && I(a, {
            padding: 0,
            border: W,
            margin: 0
        });
        c && I(a, c);
        d && d.appendChild(a);
        return a
    }

    function ia(a, b) {
        var c = function() {};
        c.prototype = new a;
        r(c.prototype, b);
        return c
    }

    function aa(a, b, c, d) {
        var e = L.lang;
        a = +a || 0;
        var f = -1 === b ? (a.toString().split(".")[1] || "").length : isNaN(b = fa(b)) ? 2 : b;
        b = void 0 === c ? e.decimalPoint : c;
        d = void 0 === d ? e.thousandsSep : d;
        e = 0 > a ? "-" : "";
        c = String(u(a = fa(a).toFixed(f)));
        var g = 3 < c.length ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + fa(a - c).toFixed(f).slice(2) : "")
    }

    function la(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function ma(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this,
                a)
        }
    }

    function Da(a, b) {
        for (var c = "{", d = !1, e, f, g, h, k, m = []; - 1 !== (c = a.indexOf(c));) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                k = g.length;
                e = b;
                for (h = 0; h < k; h++) e = e[g[h]];
                f.length && (f = f.join(":"), g = /\.([0-9])/, h = L.lang, k = void 0, /f$/.test(f) ? (k = (k = f.match(g)) ? k[1] : -1, null !== e && (e = aa(e, k, h.decimalPoint, -1 < f.indexOf(",") ? h.thousandsSep : ""))) : e = Ea(f, e))
            }
            m.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        m.push(a);
        return m.join("")
    }

    function pb(a, b, c, d) {
        var e;
        c = l(c, 1);
        e = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d && !1 ===
            d.allowDecimals && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c])));
        for (d = 0; d < b.length && !(a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2); d++);
        return a * c
    }

    function Wa() {
        this.symbol = this.color = 0
    }

    function Na(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++) delete a[e].ss_i
    }

    function ra(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function na(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function ua(a, b) {
        for (var c in a) a[c] &&
            a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function Fa(a) {
        Ga || (Ga = ta(Xa));
        a && Ga.appendChild(a);
        Ga.innerHTML = ""
    }

    function ba(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        K.console && console.log(c)
    }

    function ga(a) {
        return parseFloat(a.toPrecision(14))
    }

    function Ya() {
        var a = L.global.useUTC,
            b = a ? "getUTC" : "get";
        Za = 6E4 * (a && L.global.timezoneOffset || 0);
        $a = b + "Minutes";
        ab = b + "Hours";
        bb = b + "Day";
        cb = b + "Date";
        db = b + "Month";
        eb = b + "FullYear"
    }

    function O() {}

    function oa(a, b, c, d) {
        this.axis =
            a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || d || this.addLabel()
    }

    function va() {
        this.init.apply(this, arguments)
    }

    function Oa() {
        this.init.apply(this, arguments)
    }

    function fb(a, b, c) {
        this.init.call(this, a, b, c)
    }
    var z, G = document,
        K = window,
        N = Math,
        C = N.round,
        X = N.floor,
        sa = N.ceil,
        A = N.max,
        S = N.min,
        fa = N.abs,
        wa = N.cos,
        Ha = N.sin,
        gb = N.PI,
        hb = 2 * gb / 360,
        pa = navigator.userAgent,
        qb = K.opera,
        ka = /msie/i.test(pa) && !qb,
        ib = /AppleWebKit/.test(pa),
        Ia = /Firefox/.test(pa),
        jb = /(Mobile|Android|Windows Phone)/.test(pa),
        V = !! G.createElementNS && !! G.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        rb = Ia && 4 > parseInt(pa.split("Firefox/")[1], 10),
        ha = !V && !ka && !! G.createElement("canvas").getContext,
        kb = {}, Pa = 0,
        Ga, L, Ea, Y, Qa, xa = function() {}, ja = [],
        lb = 0,
        Xa = "div",
        W = "none",
        sb = /^[0-9]+$/,
        Za, $a, ab, bb, cb, db, eb, qa = {}, T = K.Highcharts = K.Highcharts ? ba(16, !0) : {};
    Ea = function(a, b, c) {
        if (!v(b) || isNaN(b)) return "Invalid date";
        a = l(a, "%Y-%m-%d %H:%M:%S");
        var d = new Date(b - Za),
            e, f = d[ab](),
            g = d[bb](),
            h = d[cb](),
            k = d[db](),
            m = d[eb](),
            p = L.lang,
            q = p.weekdays,
            d =
                r({
                    a: q[g].substr(0, 3),
                    A: q[g],
                    d: la(h),
                    e: h,
                    b: p.shortMonths[k],
                    B: p.months[k],
                    m: la(k + 1),
                    y: m.toString().substr(2, 2),
                    Y: m,
                    H: la(f),
                    I: la(f % 12 || 12),
                    l: f % 12 || 12,
                    M: la(d[$a]()),
                    p: 12 > f ? "AM" : "PM",
                    P: 12 > f ? "am" : "pm",
                    S: la(d.getSeconds()),
                    L: la(C(b % 1E3), 3)
                }, T.dateFormats);
        for (e in d)
            for (; - 1 !== a.indexOf("%" + e);) a = a.replace("%" + e, "function" === typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    Wa.prototype = {
        wrapColor: function(a) {
            this.color >= a && (this.color = 0)
        },
        wrapSymbol: function(a) {
            this.symbol >=
                a && (this.symbol = 0)
        }
    };
    (function() {
        for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++) d[b[a++]] = b[a];
        return d
    })("millisecond", 1, "second", 1E3, "minute", 6E4, "hour", 36E5, "day", 864E5, "week", 6048E5, "month", 26784E5, "year", 31556952E3);
    Qa = {
        init: function(a, b, c) {
            b = b || "";
            var d = a.shift,
                e = -1 < b.indexOf("C"),
                f = e ? 7 : 3,
                g;
            b = b.split(" ");
            c = [].concat(c);
            var h, k, m = function(a) {
                    for (g = a.length; g--;) "M" === a[g] && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
            e && (m(b), m(c));
            a.isArea && (h = b.splice(b.length - 6, 6), k = c.splice(c.length - 6,
                6));
            if (d <= c.length / f && b.length === c.length)
                for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(k));
            return [b, c]
        },
        step: function(a, b, c, d) {
            var e = [],
                f = a.length;
            if (1 === c) e = d;
            else if (f === b.length && 1 > c)
                for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
            else e = b;
            return e
        }
    };
    (function(a) {
        K.HighchartsAdapter = K.HighchartsAdapter || a && {
            init: function(b) {
                var c =
                    a.fx,
                    d = c.step,
                    e, f = a.Tween,
                    g = f && f.propHooks;
                e = a.cssHooks.opacity;
                a.extend(a.easing, {
                    easeOutQuad: function(a, b, c, d, e) {
                        return -d * (b /= e) * (b - 2) + c
                    }
                });
                a.each(["cur", "_default", "width", "height", "opacity"], function(a, b) {
                    var e = d,
                        p;
                    "cur" === b ? e = c.prototype : "_default" === b && f && (e = g[b], b = "set");
                    (p = e[b]) && (e[b] = function(c) {
                        var d;
                        c = a ? c : this;
                        if ("align" !== c.prop) return d = c.elem, d.attr ? d.attr(c.prop, "cur" === b ? z : c.now) : p.apply(this, arguments)
                    })
                });
                ma(e, "get", function(a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                });
                e = function(a) {
                    var c = a.elem,
                        d;
                    a.started || (d = b.init(c, c.d, c.toD), a.start = d[0], a.end = d[1], a.started = !0);
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                };
                f ? g.d = {
                    set: e
                } : d.d = e;
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                        if (!1 === b.call(a[c], a[c], c, a)) return c
                };
                a.fn.highcharts = function() {
                    var a = "Chart",
                        b = arguments,
                        c, d;
                    this[0] && ($(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1)), c = b[0], c !== z && (c.chart = c.chart || {}, c.chart.renderTo =
                        this[0], new T[a](c, b[1]), d = this), c === z && (d = ja[x(this[0], "data-highcharts-chart")]));
                    return d
                }
            },
            getScript: a.getScript,
            inArray: a.inArray,
            adapterRun: function(b, c) {
                return a(b)[c]()
            },
            grep: a.grep,
            map: function(a, c) {
                for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            },
            offset: function(b) {
                return a(b).offset()
            },
            addEvent: function(b, c, d) {
                a(b).bind(c, d)
            },
            removeEvent: function(b, c, d) {
                var e = G.removeEventListener ? "removeEventListener" : "detachEvent";
                G[e] && b && !b[e] && (b[e] = function() {});
                a(b).unbind(c,
                    d)
            },
            fireEvent: function(b, c, d, e) {
                var f = a.Event(c),
                    g = "detached" + c,
                    h;
                !ka && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                r(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f)
                        } catch (a) {
                            "preventDefault" === b && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                !e || f.isDefaultPrevented() || h || e(f)
            },
            washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                c.pageX === z && (c.pageX = a.pageX, c.pageY = a.pageY);
                return c
            },
            animate: function(b,
                c, d) {
                var e = a(b);
                b.style || (b.style = {});
                c.d && (b.toD = c.d, c.d = 1);
                e.stop();
                c.opacity !== z && b.attr && (c.opacity += "px");
                e.animate(c, d)
            },
            stop: function(b) {
                a(b).stop()
            }
        }
    })(K.jQuery);
    var Ja = K.HighchartsAdapter,
        ca = Ja || {};
    Ja && Ja.init.call(Ja, Qa);
    var Ka = ca.adapterRun,
        tb = ca.inArray,
        t = ca.each,
        mb = ca.grep,
        La = ca.map,
        Q = ca.addEvent,
        Z = ca.removeEvent,
        R = ca.fireEvent,
        nb = ca.animate,
        Ra = ca.stop,
        Sa = {
            enabled: !0,
            x: 0,
            y: 15,
            style: {
                color: "#606060",
                cursor: "default",
                fontSize: "11px"
            }
        };
    L = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #8085e8 #8d4653 #91e8e1".split(" "),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com@product.cdnpath@/@product.version@/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@/@product.version@/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: y(Sa, {
                    align: "center",
                    enabled: !1,
                    formatter: function() {
                        return null === this.y ? "" : aa(this.y, -1)
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                states: {
                    hover: {
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "1em"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: V,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: jb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var ya = L.plotOptions;
    Ya();
    var ub = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        vb = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
        wb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        za = function(a) {
            var b = [],
                c, d;
            (function(a) {
                a && a.stops ? d = La(a.stops, function(a) {
                    return za(a[1])
                }) : (c = ub.exec(a)) ? b = [u(c[1]), u(c[2]), u(c[3]), parseFloat(c[4], 10)] : (c = vb.exec(a)) ? b = [u(c[1], 16), u(c[2], 16), u(c[3], 16), 1] : (c = wb.exec(a)) && (b = [u(c[1]), u(c[2]), u(c[3]), 1])
            })(a);
            return {
                get: function(c) {
                    var f;
                    d ? (f = y(a), f.stops = [].concat(f.stops), t(d, function(a, b) {
                        f.stops[b] = [f.stops[b][0], a.get(c)]
                    })) : f = b && !isNaN(b[0]) ? "rgb" === c ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : "a" === c ? b[3] : "rgba(" + b.join(",") + ")" : a;
                    return f
                },
                brighten: function(a) {
                    if (d) t(d, function(b) {
                        b.brighten(a)
                    });
                    else if (F(a) && 0 !== a) {
                        var c;
                        for (c = 0; 3 > c; c++) b[c] += u(255 * a), 0 > b[c] && (b[c] = 0), 255 < b[c] && (b[c] = 255)
                    }
                    return this
                },
                rgba: b,
                setOpacity: function(a) {
                    b[3] = a;
                    return this
                }
            }
        };
    O.prototype = {
        init: function(a, b) {
            this.element = "span" === b ? ta(b) : G.createElementNS("http://www.w3.org/2000/svg",
                b);
            this.renderer = a
        },
        opacity: 1,
        animate: function(a, b, c) {
            b = l(b, Y, !0);
            Ra(this);
            b ? (b = y(b, {}), c && (b.complete = c), nb(this, a, b)) : (this.attr(a), c && c())
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, k, m, p, q, s, n, w = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                h = d.gradients;
                m = a.stops;
                s = c.radialReference;
                ea(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                "radialGradient" === f && s && !v(g.gradientUnits) && (g = y(g, {
                    cx: s[0] - s[2] / 2 + g.cx *
                        s[2],
                    cy: s[1] - s[2] / 2 + g.cy * s[2],
                    r: g.r * s[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (n in g) "id" !== n && w.push(n, g[n]);
                for (n in m) w.push(m[n]);
                w = w.join(",");
                h[w] ? a = h[w].attr("id") : (g.id = a = "highcharts-" + Pa++, h[w] = k = d.createElement(f).attr(g).add(d.defs), k.stops = [], t(m, function(a) {
                    0 === a[1].indexOf("rgba") ? (e = za(a[1]), p = e.get("rgb"), q = e.get("a")) : (p = a[1], q = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": p,
                        "stop-opacity": q
                    }).add(k);
                    k.stops.push(a)
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")")
            }
        },
        attr: function(a,
            b) {
            var c, d, e = this.element,
                f, g = this,
                h;
            "string" === typeof a && b !== z && (c = a, a = {}, a[c] = b);
            if ("string" === typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (c in a) d = a[c], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== c && "y" !== c || (this.doTransform = !0), h || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) &&
                    this.updateShadows(c, d);
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            return g
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, "height" === a ? A(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b)
        },
        addClass: function(a) {
            var b = this.element,
                c = x(b, "class") || ""; - 1 === c.indexOf(a) && x(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b = this;
            t("x y r start end width height innerR anchorX anchorY".split(" "), function(c) {
                b[c] = l(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x,
                    b.y, b.width, b.height, b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : W)
        },
        crisp: function(a) {
            var b, c = {}, d, e = a.strokeWidth || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            d = C(e) % 2 / 2;
            a.x = X(a.x || this.x || 0) + d;
            a.y = X(a.y || this.y || 0) + d;
            a.width = X((a.width || this.width || 0) - 2 * d);
            a.height = X((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {}, d = this.element,
                e, f, g = "";
            e = !b;
            a && a.color && (a.fill = a.color);
            if (b)
                for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && u(a.width);
                b && (a = r(b, c));
                this.styles = a;
                e && (ha || !V && this.renderer.forExport) && delete a.width;
                if (ka && !V) I(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    x(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            this.element["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            this.element.radialReference =
                a;
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (v(c) || v(d)) && a.push("scale(" + l(c, 1) + " " + l(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || $(c)) this.alignTo = d = c || "renderer", B(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = l(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x ||
                0);
            g = (c.y || 0) + (a.y || 0);
            if ("right" === d || "center" === d) f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = C(f);
            if ("bottom" === e || "middle" === e) g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1);
            h[b ? "translateY" : "y"] = C(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function() {
            var a = this.bBox,
                b = this.renderer,
                c, d, e = this.rotation;
            c = this.element;
            var f = this.styles,
                g = e * hb;
            d = this.textStr;
            var h;
            if ("" === d || sb.test(d)) h = "num." + d.toString().length +
                (f ? "|" + f.fontSize + "|" + f.fontFamily : "");
            h && (a = b.cache[h]);
            if (!a) {
                if ("http://www.w3.org/2000/svg" === c.namespaceURI || b.forExport) {
                    try {
                        a = c.getBBox ? r({}, c.getBBox()) : {
                            width: c.offsetWidth,
                            height: c.offsetHeight
                        }
                    } catch (k) {}
                    if (!a || 0 > a.width) a = {
                        width: 0,
                        height: 0
                    }
                } else a = this.htmlGetBBox();
                b.isSVG && (c = a.width, d = a.height, ka && f && "11px" === f.fontSize && "16.9" === d.toPrecision(3) && (a.height = d = 14), e && (a.width = fa(d * Ha(g)) + fa(c * wa(g)), a.height = fa(d * wa(g)) + fa(c * Ha(g))));
                this.bBox = a;
                h && (b.cache[h] = a)
            }
            return a
        },
        show: function(a) {
            return a &&
                "http://www.w3.org/2000/svg" === this.element.namespaceURI ? (this.element.removeAttribute("visibility"), this) : this.attr({
                    visibility: a ? "inherit" : "visible"
                })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.hide()
                }
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = a || b,
                d = c.element || b.box,
                e = this.element,
                f = this.zIndex,
                g, h;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            f && (c.handleZ = !0, f = u(f));
            if (c.handleZ)
                for (a = d.childNodes, g = 0; g < a.length; g++)
                    if (b = a[g], c = x(b, "zIndex"), b !== e && (u(c) > f || !v(f) && v(c))) {
                        d.insertBefore(e, b);
                        h = !0;
                        break
                    }
            h || d.appendChild(e);
            this.added = !0;
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {}, c = a.shadows,
                d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            Ra(a);
            a.clipPath &&
                (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && t(c, function(b) {
                a.safeRemoveChild(b)
            }); d && 0 === d.div.childNodes.length;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && B(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, k, m, p;
            if (a) {
                k = l(a.width, 3);
                m = (a.opacity || .15) / k;
                p = this.parentInverted ? "(-1,-1)" : "(" + l(a.offsetX,
                    1) + ", " + l(a.offsetY, 1) + ")";
                for (e = 1; e <= k; e++) f = g.cloneNode(0), h = 2 * k + 1 - 2 * e, x(f, {
                    isShadow: "true",
                    stroke: a.color || "black",
                    "stroke-opacity": m * e,
                    "stroke-width": h,
                    transform: "translate" + p,
                    fill: W
                }), c && (x(f, "height", A(x(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f);
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            "circle" === this.element.nodeName && (a = {
                x: "cx",
                y: "cy"
            }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = l(this[a], this.element ?
                this.element.getAttribute(a) : null, 0);
            /^[0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = u(a[b]) * this.element.getAttribute("stroke-width");
                a = a.join(",");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        "stroke-widthSetter": function(a, b, c) {
            0 === a && (a = 1E-5);
            this.strokeWidth = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = G.createElementNS("http://www.w3.org/2000/svg",
                "title"), this.element.appendChild(b));
            b.textContent = a
        },
        textSetter: function(a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
        },
        fillSetter: function(a, b, c) {
            "string" === typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        zIndexSetter: function(a, b, c) {
            c.setAttribute(b, a);
            this[b] = a
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    O.prototype.yGetter = O.prototype.xGetter;
    O.prototype.translateXSetter = O.prototype.translateYSetter = O.prototype.rotationSetter =
        O.prototype.verticalAlignSetter = O.prototype.scaleXSetter = O.prototype.scaleYSetter = function(a, b) {
            this[b] = a;
            this.doTransform = !0
    };
    O.prototype.strokeSetter = O.prototype.fillSetter;
    var Aa = function() {
        this.init.apply(this, arguments)
    };
    Aa.prototype = {
        Element: O,
        init: function(a, b, c, d, e) {
            var f = location,
                g;
            d = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g); - 1 === a.innerHTML.indexOf("xmlns") && x(g, "xmlns", "http://www.w3.org/2000/svg");
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper =
                d;
            this.alignedObjects = [];
            this.url = (Ia || ib) && G.getElementsByTagName("base").length ? f.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(G.createTextNode("Created with @product.name@ @product.version@"));
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var h;
            Ia && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                I(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                I(a, {
                    left: sa(h.left) - h.left + "px",
                    top: sa(h.top) - h.top + "px"
                })
            }, b(), Q(K, "resize", b))
        },
        getStyle: function(a) {
            return this.style = r({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            ua(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && Z(K, "resize", this.subPixelFix);
            return this.alignedObjects =
                null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = l(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, h, k, m = x(b, "x"), p = a.styles, q = a.textWidth, s = p && p.lineHeight, n = g.length, w = function(a) {
                    return s ? u(s) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : p && p.fontSize || c.style.fontSize || 12).h
                }; n--;) b.removeChild(g[n]);
            f || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/,
                k = /<.*href="(http[^"]+)".*>/, q && !a.added && this.box.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], "" === e[e.length - 1] && e.pop(), t(e, function(e, f) {
                    var g, n = 0;
                    e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                    g = e.split("|||");
                    t(g, function(e) {
                        if ("" !== e || 1 === g.length) {
                            var s = {}, l = G.createElementNS("http://www.w3.org/2000/svg",
                                    "tspan"),
                                t;
                            h.test(e) && (t = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), x(l, "style", t));
                            k.test(e) && !d && (x(l, "onclick", 'location.href="' + e.match(k)[1] + '"'), I(l, {
                                cursor: "pointer"
                            }));
                            e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                            if (" " !== e && (l.appendChild(G.createTextNode(e)), n ? s.dx = 0 : f && null !== m && (s.x = m), x(l, s), !n && f && (!V && d && I(l, {
                                display: "block"
                            }), x(l, "dy", w(l), ib && l.offsetHeight)), b.appendChild(l), n++, q)) {
                                e = e.replace(/([^\^])-/g, "$1- ").split(" ");
                                for (var s =
                                    1 < e.length && "nowrap" !== p.whiteSpace, v, J, M = a._clipHeight, r = [], z = w(), A = 1; s && (e.length || r.length);) delete a.bBox, v = a.getBBox(), J = v.width, !V && c.forExport && (J = c.measureSpanWidth(l.firstChild.data, a.styles)), (v = J > q) && 1 !== e.length ? (l.removeChild(l.firstChild), r.unshift(e.pop())) : (e = r, r = [], e.length && (A++, M && A * z > M ? (e = ["..."], a.attr("title", a.textStr)) : (l = G.createElementNS("http://www.w3.org/2000/svg", "tspan"), x(l, {
                                    dy: z,
                                    x: m
                                }), t && x(l, "style", t), b.appendChild(l), J > q && (q = J)))), e.length && l.appendChild(G.createTextNode(e.join(" ").replace(/- /g,
                                    "-")))
                            }
                        }
                    })
                })) : b.appendChild(G.createTextNode(e))
        },
        button: function(a, b, c, d, e, f, g, h, k) {
            var m = this.label(a, b, c, k, null, null, null, null, "button"),
                p = 0,
                q, s, n, l, t, v;
            a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            };
            e = y({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FEFEFE"],
                        [1, "#F6F6F6"]
                    ]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, e);
            n = e.style;
            delete e.style;
            f = y(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            l = f.style;
            delete f.style;
            g = y(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0,
                            "#9BD"
                        ],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            t = g.style;
            delete g.style;
            h = y(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            v = h.style;
            delete h.style;
            Q(m.element, ka ? "mouseover" : "mouseenter", function() {
                3 !== p && m.attr(f).css(l)
            });
            Q(m.element, ka ? "mouseout" : "mouseleave", function() {
                3 !== p && (q = [e, f, g][p], s = [n, l, t][p], m.attr(q).css(s))
            });
            m.setState = function(a) {
                (m.state = p = a) ? 2 === a ? m.attr(g).css(t) : 3 === a && m.attr(h).css(v) : m.attr(e).css(n)
            };
            return m.on("click", function() {
                3 !== p && d.call(m)
            }).attr(e).css(r({
                cursor: "default"
            }, n))
        },
        crispLine: function(a, b) {
            a[1] ===
                a[4] && (a[1] = a[4] = C(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = C(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: W
            };
            ea(a) ? b.d = a : P(a) && r(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = P(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            P(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0,
                c || 0, c || 0, {
                    innerR: d || 0,
                    start: e || 0,
                    end: f || 0
                });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            e = P(a) ? a.r : e;
            var g = this.createElement("rect");
            a = P(a) ? a : a === z ? {} : {
                x: a,
                y: b,
                width: A(c, 0),
                height: A(d, 0)
            };
            f !== z && (a.strokeWidth = f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a) {
                x(this.element, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[l(c, !0) ? "animate" : "attr"]({
                width: a,
                height: b
            }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return v(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: W
            };
            1 < arguments.length && r(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a, b, c, d, e, f) {
            var g, h = this.symbols[a],
                h = h && h(C(b), C(c), d, e, f),
                k = /^url\((.*?)\)$/,
                m, p;
            h ? (g = this.path(h), r(g, {
                    symbolName: a,
                    x: b,
                    y: c,
                    width: d,
                    height: e
                }), f &&
                r(g, f)) : k.test(a) && (p = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(C((d - b[0]) / 2), C((e - b[1]) / 2)))
            }, m = a.match(k)[1], a = kb[m], g = this.image(m).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? p(g, a) : (g.attr({
                width: 0,
                height: 0
            }), ta("img", {
                onload: function() {
                    p(g, kb[m] = [this.width, this.height])
                },
                src: m
            })));
            return g
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = .166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a,
                    b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start;
                c = e.r || c || d;
                var g = e.end - .001;
                d = e.innerR;
                var h = e.open,
                    k = wa(f),
                    m = Ha(f),
                    p = wa(g),
                    g = Ha(g);
                e = e.end - f < gb ? 0 : 1;
                return ["M", a + c * k, b + c * m, "A", c, c, 0, e, 1, a + c * p, b + c * g, h ? "M" : "L", a + d * p, b + d * g, "A", d, d, 0, e, 0, a + d * k, b + d * m, h ? "" :
                    "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = S(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX,
                    k = e && e.anchorY;
                e = C(e.strokeWidth || 0) % 2 / 2;
                a += e;
                b += e;
                e = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && k > b + g && k < b + d - g ? e.splice(13, 3, "L", a + c, k - 6, a + c + 6, k, a + c, k + 6, a + c, b + d - f) : h && 0 > h && k > b + g && k < b + d - g ? e.splice(33, 3, "L", a, k + 6, a - 6, k, a, k - 6, a, b + f) : k && k > d && h > a + g && h < a + c - g ? e.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) :
                    k && 0 > k && h > a + g && h < a + c - g && e.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return e
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + Pa++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        },
        text: function(a, b, c, d) {
            var e = ha || !V && this.forExport,
                f = {};
            if (d && !this.forExport) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            c && (f.y = Math.round(c));
            if (a || 0 === a) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            d || (a.xSetter =
                function(a, b, c) {
                    var d = c.childNodes,
                        e, f;
                    for (f = 1; f < d.length; f++) e = d[f], e.getAttribute("x") === c.getAttribute("x") && e.setAttribute("x", a);
                    c.setAttribute(b, a)
                });
            return a
        },
        fontMetrics: function(a) {
            a = a || this.style.fontSize;
            a = /px/.test(a) ? u(a) : /em/.test(a) ? 12 * parseFloat(a) : 12;
            a = 24 > a ? a + 4 : C(1.2 * a);
            var b = C(.8 * a);
            return {
                h: a,
                b: b
            }
        },
        label: function(a, b, c, d, e, f, g, h, k) {
            function m() {
                var a, b;
                a = w.element.style;
                da = (void 0 === x || void 0 === E || n.styles.textAlign) && w.textStr && w.getBBox();
                n.width = (x || da.width || 0) + 2 * U + F;
                n.height =
                    (E || da.height || 0) + 2 * U;
                Ta = U + l.fontMetrics(a && a.fontSize).b;
                D && (J || (a = C(-A * U), b = h ? -Ta : 0, n.box = J = d ? l.symbol(d, a, b, n.width, n.height, M) : l.rect(a, b, n.width, n.height, 0, M["stroke-width"]), J.attr("fill", W).add(n)), J.isImg || J.attr(r({
                    width: C(n.width),
                    height: C(n.height)
                }, M)), M = null)
            }

            function p() {
                var a = n.styles,
                    a = a && a.textAlign,
                    b = F + U * (1 - A),
                    c;
                c = h ? 0 : Ta;
                v(x) && da && ("center" === a || "right" === a) && (b += {
                    center: .5,
                    right: 1
                }[a] * (x - da.width));
                if (b !== w.x || c !== w.y) w.attr("x", b), c !== z && w.attr("y", c);
                w.x = b;
                w.y = c
            }

            function q(a,
                b) {
                J ? J.attr(a, b) : M[a] = b
            }
            var l = this,
                n = l.g(k),
                w = l.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                J, da, A = 0,
                U = 3,
                F = 0,
                x, E, B, u, H = 0,
                M = {}, Ta, D;
            n.onAdd = function() {
                w.add(n);
                n.attr({
                    text: a || "",
                    x: b,
                    y: c
                });
                J && v(e) && n.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            n.widthSetter = function(a) {
                x = a
            };
            n.heightSetter = function(a) {
                E = a
            };
            n.paddingSetter = function(a) {
                v(a) && a !== U && (U = a, p())
            };
            n.paddingLeftSetter = function(a) {
                v(a) && a !== F && (F = a, p())
            };
            n.alignSetter = function(a) {
                A = {
                    left: 0,
                    center: .5,
                    right: 1
                }[a]
            };
            n.textSetter = function(a) {
                a !== z && w.textSetter(a);
                m();
                p()
            };
            n["stroke-widthSetter"] = function(a, b) {
                a && (D = !0);
                H = a % 2 / 2;
                q(b, a)
            };
            n.strokeSetter = n.fillSetter = n.rSetter = function(a, b) {
                "fill" === b && a && (D = !0);
                q(b, a)
            };
            n.anchorXSetter = function(a, b) {
                e = a;
                q(b, a + H - B)
            };
            n.anchorYSetter = function(a, b) {
                f = a;
                q(b, a - u)
            };
            n.xSetter = function(a) {
                n.x = a;
                A && (a -= A * ((x || da.width) + U));
                B = C(a);
                n.attr("translateX", B)
            };
            n.ySetter = function(a) {
                u = n.y = C(a);
                n.attr("translateY", u)
            };
            var G = n.css;
            return r(n, {
                css: function(a) {
                    if (a) {
                        var b = {};
                        a = y(a);
                        t("fontSize fontWeight fontFamily color lineHeight width textDecoration textShadow".split(" "),
                            function(c) {
                                a[c] !== z && (b[c] = a[c], delete a[c])
                            });
                        w.css(b)
                    }
                    return G.call(n, a)
                },
                getBBox: function() {
                    return {
                        width: da.width + 2 * U,
                        height: da.height + 2 * U,
                        x: da.x - U,
                        y: da.y - U
                    }
                },
                shadow: function(a) {
                    J && J.shadow(a);
                    return n
                },
                destroy: function() {
                    Z(n.element, "mouseenter");
                    Z(n.element, "mouseleave");
                    w && (w = w.destroy());
                    J && (J = J.destroy());
                    O.prototype.destroy.call(n);
                    n = l = m = p = q = null
                }
            })
        }
    };
    oa.prototype = {
        addLabel: function() {
            var a = this.axis,
                b = a.options,
                c = a.chart,
                d = a.horiz,
                e = a.categories,
                f = a.names,
                g = this.pos,
                h = b.labels,
                k = a.tickPositions,
                d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / k.length || !d && (c.margin[3] || .33 * c.chartWidth),
                m = g === k[0],
                p = g === k[k.length - 1],
                q, f = e ? l(e[g], f[g], g) : g,
                e = this.label,
                s = k.info;
            a.isDatetimeAxis && s && (q = b.dateTimeLabelFormats[s.higherRanks[g] || s.unitName]);
            this.isFirst = m;
            this.isLast = p;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: m,
                isLast: p,
                dateTimeLabelFormat: q,
                value: a.isLog ? ga(H(f)) : f
            });
            g = d && {
                width: A(1, C(d - 2 * (h.padding || 10))) + "px"
            };
            g = r(g, h.style);
            v(e) ? e && e.attr({
                text: b
            }).css(g) : (q = {
                    align: a.labelAlign
                },
                F(h.rotation) && (q.rotation = h.rotation), d && h.ellipsis && (q._clipHeight = a.len / k.length), this.label = v(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(q).css(g).add(a.labelGroup) : null)
        },
        getLabelSize: function() {
            var a = this.label,
                b = this.axis;
            return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0
        },
        getLabelSides: function() {
            var a = this.label.getBBox(),
                b = this.axis,
                c = b.horiz,
                d = b.options.labels,
                a = c ? a.width : a.height,
                b = c ? d.x - a * {
                    left: 0,
                    center: .5,
                    right: 1
                }[b.labelAlign] : 0;
            return [b, c ? a + b : a]
        },
        handleOverflow: function(a, b) {
            var c = !0,
                d = this.axis,
                e = this.isFirst,
                f = this.isLast,
                g = d.horiz ? b.x : b.y,
                h = d.reversed,
                k = d.tickPositions,
                m = this.getLabelSides(),
                p = m[0],
                m = m[1],
                q, l, n, w = this.label.line || 0;
            q = d.labelEdge;
            l = d.justifyLabels && (e || f);
            q[w] === z || g + p > q[w] ? q[w] = g + m : l || (c = !1);
            if (l) {
                q = (l = d.justifyToPlot) ? d.pos : 0;
                l = l ? q + d.len : d.chart.chartWidth;
                do a += e ? 1 : -1, n = d.ticks[k[a]]; while (k[a] && (!n || n.label.line !== w));
                d = n && n.label.xy && n.label.xy.x + n.getLabelSides()[e ? 0 : 1];
                e && !h || f && h ? g + p < q && (g = q - p, n && g + m > d && (c = !1)) : g + m > l && (g = l - m, n && g + p < d && (c = !1));
                b.x =
                    g
            }
            return c
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var k = this.axis,
                m = k.transA,
                p = k.reversed,
                q = k.staggerLines,
                l = k.chart.renderer.fontMetrics(e.style.fontSize).b,
                n = e.rotation;
            a = a + e.x - (f &&
                d ? f * m * (p ? -1 : 1) : 0);
            b = b + e.y - (f && !d ? f * m * (p ? 1 : -1) : 0);
            n && 2 === k.side && (b -= l - l * wa(n * hb));
            v(e.y) || n || (b += l - c.getBBox().height / 2);
            q && (c.line = g / (h || 1) % q, b += k.labelOffset / q * c.line);
            return {
                x: a,
                y: b
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b, c) {
            var d = this.axis,
                e = d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                k = this.label,
                m = this.pos,
                p = e.labels,
                q = this.gridLine,
                s = h ? h + "Grid" : "grid",
                n = h ? h + "Tick" : "tick",
                w = e[s + "LineWidth"],
                t = e[s + "LineColor"],
                v =
                    e[s + "LineDashStyle"],
                r = e[n + "Length"],
                s = e[n + "Width"] || 0,
                A = e[n + "Color"],
                F = e[n + "Position"],
                n = this.mark,
                x = p.step,
                E = !0,
                B = d.tickmarkOffset,
                u = this.getPosition(g, m, B, b),
                H = u.x,
                u = u.y,
                M = g && H === d.pos + d.len || !g && u === d.pos ? -1 : 1;
            this.isActive = !0;
            if (w && (m = d.getPlotLinePath(m + B, w * M, b, !0), q === z && (q = {
                stroke: t,
                "stroke-width": w
            }, v && (q.dashstyle = v), h || (q.zIndex = 1), b && (q.opacity = 0), this.gridLine = q = w ? f.path(m).attr(q).add(d.gridGroup) : null), !b && q && m)) q[this.isNew ? "attr" : "animate"]({
                d: m,
                opacity: c
            });
            s && r && ("inside" === F && (r = -r), d.opposite && (r = -r), h = this.getMarkPath(H, u, r, s * M, g, f), n ? n.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: A,
                "stroke-width": s,
                opacity: c
            }).add(d.axisGroup));
            k && !isNaN(H) && (k.xy = u = this.getLabelPosition(H, u, k, g, p, B, a, x), this.isFirst && !this.isLast && !l(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !l(e.showLastLabel, 1) ? E = !1 : d.isRadial || p.step || p.rotation || b || 0 === c || (E = this.handleOverflow(a, u)), x && a % x && (E = !1), E && !isNaN(u.y) ? (u.opacity = c, k[this.isNew ? "attr" : "animate"](u), this.isNew = !1) : k.attr("y", -9999))
        },
        destroy: function() {
            ua(this, this.axis)
        }
    };
    T.PlotLineOrBand = function(a, b) {
        this.axis = a;
        b && (this.options = b, this.id = b.id)
    };
    T.PlotLineOrBand.prototype = {
        render: function() {
            var a = this,
                b = a.axis,
                c = b.horiz,
                d = (b.pointRange || 0) / 2,
                e = a.options,
                f = e.label,
                g = a.label,
                h = e.width,
                k = e.to,
                m = e.from,
                p = v(m) && v(k),
                q = e.value,
                s = e.dashStyle,
                n = a.svgElem,
                w = [],
                t, r = e.color,
                z = e.zIndex,
                x = e.events,
                u = {}, F = b.chart.renderer;
            b.isLog && (m = E(m), k = E(k), q = E(q));
            if (h) w = b.getPlotLinePath(q, h), u = {
                stroke: r,
                "stroke-width": h
            }, s && (u.dashstyle =
                s);
            else if (p) m = A(m, b.min - d), k = S(k, b.max + d), w = b.getPlotBandPath(m, k, e), r && (u.fill = r), e.borderWidth && (u.stroke = e.borderColor, u["stroke-width"] = e.borderWidth);
            else return;
            v(z) && (u.zIndex = z);
            if (n) w ? n.animate({
                d: w
            }, null, n.onGetPath) : (n.hide(), n.onGetPath = function() {
                n.show()
            }, g && (a.label = g = g.destroy()));
            else if (w && w.length && (a.svgElem = n = F.path(w).attr(u).add(), x))
                for (t in d = function(b) {
                    n.on(b, function(c) {
                        x[b].apply(a, [c])
                    })
                }, x) d(t);
            f && v(f.text) && w && w.length && 0 < b.width && 0 < b.height ? (f = y({
                align: c && p && "center",
                x: c ? !p && 4 : 10,
                verticalAlign: !c && p && "middle",
                y: c ? p ? 16 : 10 : p ? 6 : -4,
                rotation: c && !p && 90
            }, f), g || (u = {
                align: f.textAlign || f.align,
                rotation: f.rotation
            }, v(z) && (u.zIndex = z), a.label = g = F.text(f.text, 0, 0, f.useHTML).attr(u).css(f.style).add()), b = [w[1], w[4], l(w[6], w[1])], w = [w[2], w[5], l(w[7], w[2])], c = ra(b), p = ra(w), g.align(f, !1, {
                x: c,
                y: p,
                width: na(b) - c,
                height: na(w) - p
            }), g.show()) : g && g.hide();
            return a
        },
        destroy: function() {
            B(this.axis.plotLinesAndBands, this);
            delete this.axis;
            ua(this)
        }
    };
    va.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: Sa,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return aa(this.total, -1)
                },
                style: Sa.style
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                x: 0,
                y: 20
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.chart = a;
            this.reversed = d.reversed;
            this.zoomEnabled = !1 !== d.zoomEnabled;
            this.categories =
                d.categories || "category" === e;
            this.names = [];
            this.isLog = "logarithmic" === e;
            this.isDatetimeAxis = "datetime" === e;
            this.isLinked = v(d.linkedTo);
            this.tickmarkOffset = this.categories && "between" === d.tickmarkPlacement ? .5 : 0;
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.min = this.max = null;
            this.crosshair = l(d.crosshair,
                D(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events; - 1 === tb(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === z && (this.reversed = !0);
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) Q(this, f, d[f]);
            this.isLog && (this.val2lin = E, this.lin2val = H)
        },
        setOptions: function(a) {
            this.options = y(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], y(L[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = L.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = Da(h, this);
            else if (c) g = b;
            else if (d) g = Ea(d, b);
            else if (f && 1E3 <= a)
                for (; f-- && g === z;) c = Math.pow(1E3, f + 1), a >= c && null !== e[f] && (g = aa(b / c, -1) + e[f]);
            g === z && (g = 1E4 <=
                fa(b) ? aa(b, 0) : aa(b, -1, z, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = null;
            a.buildStacks && a.buildStacks();
            t(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d;
                    d = c.options.threshold;
                    var e;
                    a.hasVisibleSeries = !0;
                    a.isLog && 0 >= d && (d = null);
                    a.isXAxis ? (d = c.xData, d.length && (a.dataMin = S(l(a.dataMin, d[0]), ra(d)), a.dataMax = A(l(a.dataMax, d[0]), na(d)))) : (c.getExtremes(), e = c.dataMax, c = c.dataMin, v(c) && v(e) && (a.dataMin = S(l(a.dataMin,
                        c), c), a.dataMax = A(l(a.dataMax, e), e)), v(d) && (a.dataMin >= d ? (a.dataMin = d, a.ignoreMinPadding = !0) : a.dataMax < d && (a.dataMax = d, a.ignoreMaxPadding = !0)))
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = 1,
                h = 0,
                k = d ? this.oldTransA : this.transA;
            d = d ? this.oldMin : this.min;
            var m = this.minPixelPadding;
            e = (this.options.ordinal || this.isLog && e) && this.lin2val;
            k || (k = this.transA);
            c && (g *= -1, h = this.len);
            this.reversed && (g *= -1, h -= g * (this.sector || this.len));
            b ? (a = a * g + h - m, a = a / k + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), "between" ===
                f && (f = .5), a = g * (a - d) * k + h + g * m + (F(f) ? k * f * this.pointRange : 0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                k, m, p = c && f.oldChartHeight || f.chartHeight,
                q = c && f.oldChartWidth || f.chartWidth,
                s;
            k = this.transB;
            e = l(e, this.translate(a, null, null, c));
            a = c = C(e + k);
            k = m = C(p - e - k);
            if (isNaN(e)) s = !0;
            else if (this.horiz) {
                if (k =
                    h, m = p - this.bottom, a < g || a > g + this.width) s = !0
            } else if (a = g, c = q - this.right, k < h || k > h + this.height) s = !0;
            return s && !d ? null : f.renderer.crispLine(["M", a, k, "L", c, m], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = ga(X(b / a) * a),
                f = ga(sa(c / a) * a),
                g = [];
            if (b === c && F(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = ga(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e;
            if (this.isLog)
                for (e = b.length, a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c,
                    b[a - 1], b[a], !0));
            else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), d[0] < this.min && d.shift();
            else
                for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c) d.push(b);
            return d
        },
        adjustForMinRange: function() {
            var a = this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, k, m;
            this.isXAxis && this.minRange === z && !this.isLog && (v(a.min) || v(a.max) ? this.minRange = null : (t(this.series, function(a) {
                k =
                    a.xData;
                for (g = m = a.xIncrement ? 1 : k.length - 1; 0 < g; g--)
                    if (h = k[g] - k[g - 1], f === z || h < f) f = h
            }), this.minRange = S(5 * f, this.dataMax - this.dataMin)));
            if (c - b < this.minRange) {
                var p = this.minRange;
                d = (p - c + b) / 2;
                d = [b - d, l(a.min, b - d)];
                e && (d[2] = this.dataMin);
                b = na(d);
                c = [b + p, l(a.max, b + p)];
                e && (c[2] = this.dataMax);
                c = ra(c);
                c - b < p && (d[0] = c - p, d[1] = l(a.min, c - p), b = na(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max - b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                k = !! b.categories,
                m = b.transA;
            if (b.isXAxis ||
                k || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : t(b.series, function(a) {
                var h = k ? 1 : b.isXAxis ? a.pointRange : b.axisPointRange || 0,
                    m = a.options.pointPlacement,
                    n = a.closestPointRange;
                h > c && (h = 0);
                d = A(d, h);
                f = A(f, $(m) ? 0 : h / 2);
                g = A(g, "on" === m ? 0 : h);
                !a.noSharedTooltip && v(n) && (e = v(e) ? S(e, n) : n)
            }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = S(d, c), b.closestPointRange = e;
            a && (b.oldTransA = m);
            b.translationSlope = b.transA = m = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = m * f
        },
        setTickPositions: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = b.isLog,
                f = b.isDatetimeAxis,
                g = b.isXAxis,
                h = b.isLinked,
                k = b.options.tickPositioner,
                m = d.maxPadding,
                p = d.minPadding,
                q = d.tickInterval,
                s = d.minTickInterval,
                n = d.tickPixelInterval,
                w, r = b.categories;
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = l(c.min, c.dataMin), b.max = l(c.max, c.dataMax), d.type !== b.linkedParent.options.type && ba(11, 1)) : (b.min = l(b.userMin, d.min, b.dataMin), b.max = l(b.userMax, d.max,
                b.dataMax));
            e && (!a && 0 >= S(b.min, l(b.dataMin, b.min)) && ba(10, 1), b.min = ga(E(b.min)), b.max = ga(E(b.max)));
            b.range && v(b.max) && (b.userMin = b.min = A(b.min, b.max - b.range), b.userMax = b.max, b.range = null);
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            !(r || b.axisPointRange || b.usePercentage || h) && v(b.min) && v(b.max) && (c = b.max - b.min) && (v(d.min) || v(b.userMin) || !p || !(0 > b.dataMin) && b.ignoreMinPadding || (b.min -= c * p), v(d.max) || v(b.userMax) || !m || !(0 < b.dataMax) && b.ignoreMaxPadding || (b.max += c * m));
            F(d.floor) && (b.min =
                A(b.min, d.floor));
            F(d.ceiling) && (b.max = S(b.max, d.ceiling));
            b.min === b.max || void 0 === b.min || void 0 === b.max ? b.tickInterval = 1 : h && !q && n === b.linkedParent.options.tickPixelInterval ? b.tickInterval = b.linkedParent.tickInterval : (b.tickInterval = l(q, r ? 1 : (b.max - b.min) * n / A(b.len, n)), !v(q) && b.len < n && !this.isRadial && !this.isLog && !r && d.startOnTick && d.endOnTick && (w = !0, b.tickInterval /= 4));
            g && !a && t(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions &&
                b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && (b.tickInterval = A(b.pointRange, b.tickInterval));
            !q && b.tickInterval < s && (b.tickInterval = s);
            f || e || q || (b.tickInterval = pb(b.tickInterval, null, N.pow(10, X(N.log(b.tickInterval) / N.LN10)), d));
            b.minorTickInterval = "auto" === d.minorTickInterval && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;
            b.tickPositions = a = d.tickPositions ? [].concat(d.tickPositions) : k && k.apply(b, [b.min, b.max]);
            a || (!b.ordinalPositions && (b.max - b.min) / b.tickInterval > A(2 * b.len, 200) && ba(19, !0), a = f ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : e ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), w && a.splice(1, a.length - 2), b.tickPositions = a);
            h || (e = a[0], f = a[a.length - 1], h = b.minPointOffset || 0, d.startOnTick ? b.min = e : b.min - h > e && a.shift(), d.endOnTick ? b.max = f : b.max + h < f && a.pop(),
                1 === a.length && (d = 1E13 < fa(b.max) ? 1 : .001, b.min -= d, b.max += d))
        },
        setMaxTicks: function() {
            var a = this.chart,
                b = a.maxTicks || {}, c = this.tickPositions,
                d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");
            !this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && !1 !== this.options.alignTicks && (b[d] = c.length);
            a.maxTicks = b
        },
        adjustTickAmount: function() {
            var a = this._maxTicksKey,
                b = this.tickPositions,
                c = this.chart.maxTicks;
            if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && !1 !== this.options.alignTicks &&
                this.min !== z) {
                var d = this.tickAmount,
                    e = b.length;
                this.tickAmount = a = c[a];
                if (e < a) {
                    for (; b.length < a;) b.push(ga(b[b.length - 1] + this.tickInterval));
                    this.transA *= (e - 1) / (a - 1);
                    this.max = b[b.length - 1]
                }
                v(d) && a !== d && (this.isDirty = !0)
            }
        },
        setScale: function() {
            var a = this.stacks,
                b, c, d, e;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            t(this.series, function(a) {
                if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0
            });
            if (e || d || this.isLinked || this.forceRedraw ||
                this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis)
                    for (b in a)
                        for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickPositions();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)
            } else if (!this.isXAxis)
                for (b in this.oldStacks && (a = this.stacks = this.oldStacks), a)
                    for (c in a[b]) a[b][c].cum = a[b][c].total;
            this.setMaxTicks()
        },
        setExtremes: function(a,
            b, c, d, e) {
            var f = this,
                g = f.chart;
            c = l(c, !0);
            e = r(e, {
                min: a,
                max: b
            });
            R(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                f.isDirtyExtremes = !0;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options;
            this.allowZoomOutside || (v(c) && a <= S(c, l(e.min, c)) && (a = z), v(d) && b >= A(d, l(e.max, d)) && (b = z));
            this.displayBtn = a !== z || b !== z;
            this.setExtremes(a, b, !1, z, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = l(b.width,
                    a.plotWidth - c + (b.offsetRight || 0)),
                f = l(b.height, a.plotHeight),
                g = l(b.top, a.plotTop),
                b = l(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = parseInt(f, 10) / 100 * a.plotHeight);
            c.test(g) && (g = parseInt(g, 10) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = A(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? ga(H(this.min)) : this.min,
                max: a ? ga(H(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? H(this.min) : this.min,
                b = b ? H(this.max) : this.max;
            c > a || null === a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (l(a, 0) - 90 * this.side + 720) % 360;
            return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                k = b.inverted ? [1, 0, 3, 2][h] : h,
                m, p = 0,
                q, s = 0,
                n = d.title,
                w = d.labels,
                r = 0,
                u = b.axisOffset,
                x = b.clipOffset,
                F = [-1, 1, 1, -1][h],
                E, B = 1,
                H = l(w.maxStaggerLines, 5),
                C, y, D, M, G = 2 === h ? c.fontMetrics(w.style.fontSize).b : 0;
            a.hasData = m = a.hasVisibleSeries || v(a.min) && v(a.max) && !! e;
            a.showAxis = b = m || l(d.showEmpty, !0);
            a.staggerLines = a.horiz && w.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(), a.labelGroup = c.g("axis-labels").attr({
                zIndex: w.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add());
            if (m ||
                a.isLinked) {
                a.labelAlign = l(w.align || a.autoLabelAlign(w.rotation));
                t(e, function(b) {
                    f[b] ? f[b].addLabel() : f[b] = new oa(a, b)
                });
                if (a.horiz && !a.staggerLines && H && !w.rotation) {
                    for (E = a.reversed ? [].concat(e).reverse() : e; B < H;) {
                        m = [];
                        C = !1;
                        for (w = 0; w < E.length; w++) y = E[w], D = (D = f[y].label && f[y].label.getBBox()) ? D.width : 0, M = w % B, D && (y = a.translate(y), m[M] !== z && y < m[M] && (C = !0), m[M] = y + D);
                        if (C) B++;
                        else break
                    }
                    1 < B && (a.staggerLines = B)
                }
                t(e, function(b) {
                    if (0 === h || 2 === h || {
                        1: "left",
                        3: "right"
                    }[h] === a.labelAlign) r = A(f[b].getLabelSize(),
                        r)
                });
                a.staggerLines && (r *= a.staggerLines, a.labelOffset = r)
            } else
                for (E in f) f[E].destroy(), delete f[E];
            n && n.text && !1 !== n.enabled && (a.axisTitle || (a.axisTitle = c.text(n.text, 0, 0, n.useHTML).attr({
                zIndex: 7,
                rotation: n.rotation || 0,
                align: n.textAlign || {
                    low: "left",
                    middle: "center",
                    high: "right"
                }[n.align]
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(n.style).add(a.axisGroup), a.axisTitle.isNew = !0), b && (p = a.axisTitle.getBBox()[g ? "height" : "width"], s = l(n.margin, g ? 5 : 10), q = n.offset), a.axisTitle[b ? "show" :
                "hide"]());
            a.offset = F * l(d.offset, u[h]);
            a.axisTitleMargin = l(q, r + s + (r && F * d.labels[g ? "y" : "x"] - G));
            u[h] = A(u[h], a.axisTitleMargin + p + F * a.offset);
            x[k] = A(x[k], 2 * X(d.lineWidth / 2))
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function() {
            var a =
                this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                k = u(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? k : 0);
            return {
                x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
                y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)
            }
        },
        render: function() {
            var a = this,
                b = a.horiz,
                c = a.reversed,
                d = a.chart,
                e = d.renderer,
                f = a.options,
                g = a.isLog,
                h = a.isLinked,
                k = a.tickPositions,
                m, p = a.axisTitle,
                q = a.ticks,
                l = a.minorTicks,
                n = a.alternateBands,
                w = f.stackLabels,
                r = f.alternateGridColor,
                u = a.tickmarkOffset,
                x = f.lineWidth,
                F = d.hasRendered && v(a.oldMin) && !isNaN(a.oldMin),
                A = a.hasData,
                E = a.showAxis,
                B, y = f.labels.overflow,
                C = a.justifyLabels = b && !1 !== y,
                D;
            a.labelEdge.length = 0;
            a.justifyToPlot = "justify" === y;
            t([q, l, n], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (A || h) a.minorTickInterval && !a.categories && t(a.getMinorTickPositions(), function(b) {
                l[b] || (l[b] = new oa(a, b, "minor"));
                F && l[b].isNew && l[b].render(null, !0);
                l[b].render(null, !1, 1)
            }), k.length && (m = k.slice(), (b && c || !b && !c) && m.reverse(), C && (m = m.slice(1).concat([m[0]])), t(m, function(b, c) {
                C && (c = c === m.length - 1 ? 0 : c + 1);
                if (!h || b >= a.min && b <= a.max) q[b] || (q[b] = new oa(a, b)), F && q[b].isNew && q[b].render(c, !0, .1), q[b].render(c, !1, 1)
            }), u && 0 === a.min && (q[-1] || (q[-1] = new oa(a, -1, null, !0)), q[-1].render(-1))), r && t(k, function(b, c) {
                0 === c % 2 && b < a.max && (n[b] || (n[b] = new T.PlotLineOrBand(a)), B = b + u, D = k[c + 1] !== z ? k[c + 1] + u : a.max, n[b].options = {
                    from: g ? H(B) : B,
                    to: g ? H(D) : D,
                    color: r
                }, n[b].render(), n[b].isActive = !0)
            }), a._addedPlotLB || (t((f.plotLines || []).concat(f.plotBands || []), function(b) {
                a.addPlotBandOrLine(b)
            }), a._addedPlotLB = !0);
            t([q, l, n], function(a) {
                var b, c, e = [],
                    f = Y ? Y.duration || 500 : 0,
                    g = function() {
                        for (c = e.length; c--;) a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]])
                    };
                for (b in a) a[b].isActive || (a[b].render(b, !1, 0), a[b].isActive = !1, e.push(b));
                a !== n && d.hasRendered && f ? f && setTimeout(g, f) : g()
            });
            x && (b = a.getLinePath(x), a.axisLine ? a.axisLine.animate({
                d: b
            }) : a.axisLine = e.path(b).attr({
                stroke: f.lineColor,
                "stroke-width": x,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[E ? "show" : "hide"]());
            p && E && (p[p.isNew ? "attr" : "animate"](a.getTitlePosition()), p.isNew = !1);
            w && w.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            var a = this.chart.pointer;
            a && a.reset(!0);
            this.render();
            t(this.plotLinesAndBands, function(a) {
                a.render()
            });
            t(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || Z(b);
            for (d in c) ua(c[d]), c[d] = null;
            t([b.ticks, b.minorTicks, b.alternateBands],
                function(a) {
                    ua(a)
                });
            for (a = e.length; a--;) e[a].destroy();
            t("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function(a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            if (this.crosshair)
                if (!1 === (v(b) || !l(this.crosshair.snap, !0))) this.hideCrosshair();
                else {
                    var c, d = this.crosshair,
                        e = d.animation;
                    l(d.snap, !0) ? v(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos;
                    c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : l(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c);
                    if (null === c) this.hideCrosshair();
                    else if (this.cross) this.cross.attr({
                        visibility: "visible"
                    })[e ? "animate" : "attr"]({
                        d: c
                    }, e);
                    else e = {
                        "stroke-width": d.width || 1,
                        stroke: d.color || "#C0C0C0",
                        zIndex: d.zIndex || 2
                    }, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add()
                }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    };
    r(va.prototype, {
        getPlotBandPath: function(a,
            b) {
            var c = this.getPlotLinePath(b),
                d = this.getPlotLinePath(a);
            d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        },
        addPlotBand: function(a) {
            this.addPlotBandOrLine(a, "plotBands")
        },
        addPlotLine: function(a) {
            this.addPlotBandOrLine(a, "plotLines")
        },
        addPlotBandOrLine: function(a, b) {
            var c = (new T.PlotLineOrBand(this, a)).render(),
                d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        },
        removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions,
                    e = b.length; e--;) b[e].id === a && b[e].destroy();
            t([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
                for (e = b.length; e--;) b[e].id === a && B(b, b[e])
            })
        }
    });
    var Ua = T.Legend = function(a, b) {
        this.init(a, b)
    };
    Ua.prototype = {
        init: function(a, b) {
            var c = this,
                d = b.itemStyle,
                e = l(b.padding, 8),
                f = b.itemMarginTop || 0;
            this.options = b;
            b.enabled && (c.baseline = u(d.fontSize) + 3 + f, c.itemStyle = d, c.itemHiddenStyle = y(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth =
                0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = l(b.symbolWidth, 16), c.pages = [], c.render(), Q(c.chart, "endResize", function() {
                    c.positionCheckboxes()
                }))
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.legendColor || a.color || "#CCC" : g,
                g = a.options && a.options.marker,
                k = {
                    fill: h
                }, m;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker)
                    for (m in k.stroke = h, g = a.convertAttribs(g),
                        g) d = g[m], d !== z && (k[m] = d);
                f.attr(k)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            f && (f.x = e, f.y = d)
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            t(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Fa(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy())
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight;
            b && (c = b.translateY, t(this.allItems, function(e) {
                var f = e.checkbox,
                    g;
                f && (g = c + f.y + (a || 0) + 3, I(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : W
                }))
            }))
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                    zIndex: 1
                }).css(b.style).add(this.group)),
                a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
                    translateY: c
                }));
            this.titleHeight = c
        },
        renderItem: function(a) {
            var b = this.chart,
                c = b.renderer,
                d = this.options,
                e = "horizontal" === d.layout,
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                k = this.itemHiddenStyle,
                m = this.padding,
                p = e ? l(d.itemDistance, 20) : 0,
                q = !d.rtl,
                s = d.width,
                n = d.itemMarginBottom || 0,
                w = this.itemMarginTop,
                t = this.initialItemX,
                v = a.legendItem,
                r = a.series && a.series.drawLegendSymbol ? a.series : a,
                u = r.options,
                u = this.createCheckboxForItem &&
                    u && u.showCheckbox,
                x = d.useHTML;
            v || (a.legendGroup = c.g("legend-item").attr({
                zIndex: 1
            }).add(this.scrollGroup), r.drawLegendSymbol(this, a), a.legendItem = v = c.text(d.labelFormat ? Da(d.labelFormat, a) : d.labelFormatter.call(a), q ? f + g : -g, this.baseline, x).css(y(a.visible ? h : k)).attr({
                align: q ? "left" : "right",
                zIndex: 2
            }).add(a.legendGroup), this.setItemEvents && this.setItemEvents(a, v, x, h, k), this.colorizeItem(a, a.visible), u && this.createCheckboxForItem(a));
            c = v.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth ||
                f + g + c.width + p + (u ? 20 : 0);
            this.itemHeight = g = C(a.legendItemHeight || c.height);
            e && this.itemX - t + f > (s || b.chartWidth - 2 * m - t - d.x) && (this.itemX = t, this.itemY += w + this.lastLineHeight + n, this.lastLineHeight = 0);
            this.maxItemWidth = A(this.maxItemWidth, f);
            this.lastItemY = w + this.itemY + n;
            this.lastLineHeight = A(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += w + g + n, this.lastLineHeight = g);
            this.offsetWidth = s || A((e ? this.itemX - t - p : f) + m, this.offsetWidth)
        },
        getAllItems: function() {
            var a =
                [];
            t(this.chart.series, function(b) {
                var c = b.options;
                l(c.showInLegend, v(c.linkedTo) ? !1 : z, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
            });
            return a
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, k = a.box,
                m = a.options,
                p = a.padding,
                l = m.borderWidth,
                s = m.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            d || (a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup));
            a.renderTitle();
            e = a.getAllItems();
            Na(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            m.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !! e.length;
            t(e, function(b) {
                a.renderItem(b)
            });
            g = m.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            if (l || s) g += p, h += p, k ? 0 < g && 0 < h && (k[k.isNew ? "attr" : "animate"](k.crisp({
                width: g,
                height: h
            })), k.isNew = !1) : (a.box = k = c.rect(0, 0, g, h, m.borderRadius, l || 0).attr({
                stroke: m.borderColor,
                "stroke-width": l ||
                    0,
                fill: s || W
            }).add(d).shadow(m.shadow), k.isNew = !0), k[f ? "show" : "hide"]();
            a.legendWidth = g;
            a.legendHeight = h;
            t(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(r({
                width: g,
                height: h
            }, m), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding,
                g = e.maxHeight,
                h, k = this.clipRect,
                m = e.navigation,
                p = l(m.animation, !0),
                q = m.arrowSize || 12,
                s = this.nav,
                n = this.pages,
                w, v = this.allItems;
            "horizontal" === e.layout && (f /= 2);
            g && (f = S(f, g));
            n.length = 0;
            a > f && !e.useHTML ? (this.clipHeight = h = f - 20 - this.titleHeight - this.padding, this.currentPage = l(this.currentPage, 1), this.fullHeight = a, t(v, function(a, b) {
                var c = a._legendItemPos[1],
                    d = C(a.legendItem.getBBox().height),
                    e = n.length;
                if (!e || c - n[e - 1] > h && (w || c) !== n[e - 1]) n.push(w || c), e++;
                b === v.length - 1 && c + d - n[e - 1] > h && n.push(c);
                c !== w && (w = c)
            }), k || (k = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(k)), k.attr({
                height: h
            }), s || (this.nav = s = d.g().attr({
                    zIndex: 1
                }).add(this.group),
                this.up = d.symbol("triangle", 0, 0, q, q).on("click", function() {
                    b.scroll(-1, p)
                }).add(s), this.pager = d.text("", 15, 10).css(m.style).add(s), this.down = d.symbol("triangle-down", 0, 0, q, q).on("click", function() {
                    b.scroll(1, p)
                }).add(s)), b.scroll(0), a = f) : s && (k.attr({
                height: c.chartHeight
            }), s.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0);
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                k = this.pager,
                m = this.padding;
            e > d && (e = d);
            0 < e && (b !== z && (Y = l(b, this.chart.animation)), this.nav.attr({
                translateX: m,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: 1 === e ? g : h
            }).css({
                cursor: 1 === e ? "default" : "pointer"
            }), k.attr({
                text: e + "/" + d
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({
                cursor: e === d ? "default" : "pointer"
            }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: c
            }), this.currentPage = e, this.positionCheckboxes(c))
        }
    };
    var xb = T.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || 12;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b = this.options,
                c = b.marker,
                d;
            d = a.symbolWidth;
            var e = this.chart.renderer,
                f = this.legendGroup;
            a = a.baseline - C(.3 * e.fontMetrics(a.options.itemStyle.fontSize).b);
            var g;
            b.lineWidth && (g = {
                "stroke-width": b.lineWidth
            }, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine = e.path(["M",
                0, a, "L", d, a
            ]).attr(g).add(f));
            c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0)
        }
    };
    (/Trident\/7\.0/.test(pa) || Ia) && ma(Ua.prototype, "positionItem", function(a, b) {
        var c = this,
            d = function() {
                b._legendItemPos && a.call(c, b)
            };
        d();
        setTimeout(d)
    });
    Oa.prototype = {
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = y(L, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this,
                g;
            f.index = ja.length;
            ja.push(f);
            lb++;
            !1 !== d.reflow && Q(f, "load", function() {
                f.initReflow()
            });
            if (e)
                for (g in e) Q(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ha ? !1 : l(d.animation, !0);
            f.pointCount = 0;
            f.counters = new Wa;
            f.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = qa[a.type || b.type || b.defaultSeriesType]) || ba(17, !0);
            b = new b;
            b.init(this,
                a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        },
        adjustTickAmounts: function() {
            !1 !== this.options.chart.alignTicks && t(this.axes, function(a) {
                a.adjustTickAmount()
            });
            this.maxTicks = null
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, k = this.isDirtyBox,
                m = c.length,
                p = m,
                q = this.renderer,
                s = q.isHidden(),
                n = [];
            Y = l(a, this.animation);
            s && this.cloneRenderTo();
            for (this.layOutTitles(); p--;)
                if (a =
                    c[p], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (p = m; p--;) a = c[p], a.options.stacking && (a.isDirty = !0);
            t(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (f = !0)
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g && this.getStacks();
            this.hasCartesianSeries && (this.isResizing || (this.maxTicks = null, t(b, function(a) {
                a.setScale()
            })), this.adjustTickAmounts(), this.getMargins(), t(b, function(a) {
                a.isDirty && (k = !0)
            }), t(b, function(a) {
                a.isDirtyExtremes && (a.isDirtyExtremes = !1, n.push(function() {
                    R(a,
                        "afterSetExtremes", r(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                }));
                (k || g) && a.redraw()
            }));
            k && this.drawChartBox();
            t(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            q.draw();
            R(this, "redraw");
            s && this.cloneRenderTo(!0);
            t(n, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++)
                for (e = c[d].points || [],
                    b = 0; b < e.length; b++)
                    if (e[b].id === a) return e[b];
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = D(b.xAxis || {}),
                b = b.yAxis = D(b.yAxis || {});
            t(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            t(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            t(c, function(b) {
                new va(a, b)
            });
            a.adjustTickAmounts()
        },
        getSelectedPoints: function() {
            var a = [];
            t(this.series, function(b) {
                a = a.concat(mb(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return mb(this.series, function(a) {
                return a.selected
            })
        },
        getStacks: function() {
            var a = this;
            t(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            });
            t(a.series, function(b) {
                !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type + l(b.options.stack, ""))
            })
        },
        setTitle: function(a, b, c) {
            var d = this,
                e = d.options,
                f;
            f = e.title = y(e.title, a);
            e = e.subtitle = y(e.subtitle, b);
            t([
                ["title", a, f],
                ["subtitle", b, e]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1];
                a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text,
                    0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.spacingBox.width - 44;
            c && (c.css({
                width: (f.width || g) + "px"
            }).align(r({
                y: 15
            }, f), !1, "spacingBox"), f.floating || f.verticalAlign || (b = c.getBBox().height));
            d && (d.css({
                width: (e.width || g) + "px"
            }).align(r({
                y: b + f.margin
            }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = sa(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && l(a, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            v(b) || (this.containerWidth = Ka(c, "width"));
            v(a) || (this.containerHeight = Ka(c, "height"));
            this.chartWidth = A(0, b || this.containerWidth || 600);
            this.chartHeight = A(0, l(a, 19 < this.containerHeight ? this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Fa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), I(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), G.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options.chart,
                c, d, e;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + Pa++;
            $(a) && (this.renderTo = a = G.getElementById(a));
            a || ba(13, !0);
            c = u(x(a, "data-highcharts-chart"));
            !isNaN(c) && ja[c] && ja[c].hasRendered && ja[c].destroy();
            x(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            b.skipClone || a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = ta(Xa, {
                className: "highcharts-container" + (b.className ? " " + b.className : ""),
                id: e
            }, r({
                    position: "relative",
                    overflow: "hidden",
                    width: c + "px",
                    height: d + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                },
                b.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = b.forExport ? new Aa(a, c, d, b.style, !0) : new Aa(a, c, d, b.style);
            ha && this.renderer.create(this, a, c, d)
        },
        getMargins: function() {
            var a = this.spacing,
                b, c = this.legend,
                d = this.margin,
                e = this.options.legend,
                f = l(e.margin, 20),
                g = e.x,
                h = e.y,
                k = e.align,
                m = e.verticalAlign,
                p = this.titleOffset;
            this.resetMargins();
            b = this.axisOffset;
            p && !v(d[0]) && (this.plotTop = A(this.plotTop, p + this.options.title.margin + a[0]));
            c.display && !e.floating && ("right" === k ? v(d[1]) ||
                (this.marginRight = A(this.marginRight, c.legendWidth - g + f + a[1])) : "left" === k ? v(d[3]) || (this.plotLeft = A(this.plotLeft, c.legendWidth + g + f + a[3])) : "top" === m ? v(d[0]) || (this.plotTop = A(this.plotTop, c.legendHeight + h + f + a[0])) : "bottom" !== m || v(d[2]) || (this.marginBottom = A(this.marginBottom, c.legendHeight - h + f + a[2])));
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            this.hasCartesianSeries && t(this.axes, function(a) {
                a.getOffset()
            });
            v(d[3]) || (this.plotLeft +=
                b[3]);
            v(d[0]) || (this.plotTop += b[0]);
            v(d[2]) || (this.marginBottom += b[2]);
            v(d[1]) || (this.marginRight += b[1]);
            this.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || Ka(d, "width"),
                f = c.height || Ka(d, "height"),
                c = a ? a.target : K,
                d = function() {
                    b.container && (b.setSize(e, f, !1), b.hasUserSize = null)
                };
            if (!b.hasUserSize && e && f && (c === K || c === G)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight =
                    f
            }
        },
        initReflow: function() {
            var a = this,
                b = function(b) {
                    a.reflow(b)
                };
            Q(K, "resize", b);
            Q(a, "destroy", function() {
                Z(K, "resize", b)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g;
            d.isResizing += 1;
            g = function() {
                d && R(d, "endResize", null, function() {
                    d.isResizing -= 1
                })
            };
            Y = l(c, d.animation);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            v(a) && (d.chartWidth = e = A(0, C(a)), d.hasUserSize = !! e);
            v(b) && (d.chartHeight = f = A(0, C(b)));
            (Y ? nb : I)(d.container, {
                width: e + "px",
                height: f + "px"
            }, Y);
            d.setChartSize(!0);
            d.renderer.setSize(e,
                f, c);
            d.maxTicks = null;
            t(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            t(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            R(d, "resize");
            !1 === Y ? g() : setTimeout(g, Y && Y.duration || 500)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                k, m, p, l;
            this.plotLeft = k = C(this.plotLeft);
            this.plotTop = m = C(this.plotTop);
            this.plotWidth =
                p = A(0, C(d - k - this.marginRight));
            this.plotHeight = l = A(0, C(e - m - this.marginBottom));
            this.plotSizeX = b ? l : p;
            this.plotSizeY = b ? p : l;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: k,
                y: m,
                width: p,
                height: l
            };
            d = 2 * X(this.plotBorderWidth / 2);
            b = sa(A(d, h[3]) / 2);
            c = sa(A(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: X(this.plotSizeX - A(d, h[1]) / 2 - b),
                height: X(this.plotSizeY - A(d, h[2]) / 2 - c)
            };
            a || t(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a = this.spacing,
                b = this.margin;
            this.plotTop = l(b[0], a[0]);
            this.marginRight = l(b[1], a[1]);
            this.marginBottom = l(b[2], a[2]);
            this.plotLeft = l(b[3], a[3]);
            this.axisOffset = [0, 0, 0, 0];
            this.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                k = a.borderWidth || 0,
                m = a.backgroundColor,
                p = a.plotBackgroundColor,
                l = a.plotBackgroundImage,
                s = a.plotBorderWidth || 0,
                n, w = this.plotLeft,
                t = this.plotTop,
                v = this.plotWidth,
                r = this.plotHeight,
                u = this.plotBox,
                x = this.clipRect,
                F = this.clipBox;
            n = k + (a.shadow ? 8 : 0);
            if (k || m) e ? e.animate(e.crisp({
                width: c - n,
                height: d - n
            })) : (e = {
                fill: m || W
            }, k && (e.stroke = a.borderColor, e["stroke-width"] = k), this.chartBackground = b.rect(n / 2, n / 2, c - n, d - n, a.borderRadius, k).attr(e).addClass("highcharts-background").add().shadow(a.shadow));
            p && (f ? f.animate(u) : this.plotBackground = b.rect(w, t, v, r, 0).attr({
                fill: p
            }).add().shadow(a.plotShadow));
            l &&
                (h ? h.animate(u) : this.plotBGImage = b.image(l, w, t, v, r).add());
            x ? x.animate({
                width: F.width,
                height: F.height
            }) : this.clipRect = b.clipRect(F);
            s && (g ? g.animate(g.crisp({
                x: w,
                y: t,
                width: v,
                height: r
            })) : this.plotBorder = b.rect(w, t, v, r, 0, -s).attr({
                stroke: a.plotBorderColor,
                "stroke-width": s,
                fill: W,
                zIndex: 1
            }).add());
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            t(["inverted", "angular", "polar"], function(g) {
                c = qa[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = qa[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a = this,
                b = a.series;
            t(b, function(a) {
                a.linkedSeries.length = 0
            });
            t(b, function(b) {
                var d = b.options.linkedTo;
                $(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent = d)
            })
        },
        renderSeries: function() {
            t(this.series, function(a) {
                a.translate();
                a.setTooltipPoints && a.setTooltipPoints();
                a.render()
            })
        },
        render: function() {
            var a = this,
                b = a.axes,
                c = a.renderer,
                d = a.options,
                e = d.labels,
                f =
                    d.credits,
                g;
            a.setTitle();
            a.legend = new Ua(a, d.legend);
            a.getStacks();
            t(b, function(a) {
                a.setScale()
            });
            a.getMargins();
            a.maxTicks = null;
            t(b, function(a) {
                a.setTickPositions(!0);
                a.setMaxTicks()
            });
            a.adjustTickAmounts();
            a.getMargins();
            a.drawChartBox();
            a.hasCartesianSeries && t(b, function(a) {
                a.render()
            });
            a.seriesGroup || (a.seriesGroup = c.g("series-group").attr({
                zIndex: 3
            }).add());
            a.renderSeries();
            e.items && t(e.items, function(b) {
                var d = r(e.style, b.style),
                    f = u(d.left) + a.plotLeft,
                    g = u(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                c.text(b.html, f, g).attr({
                    zIndex: 2
                }).css(d).add()
            });
            f.enabled && !a.credits && (g = f.href, a.credits = c.text(f.text, 0, 0).on("click", function() {
                g && (location.href = g)
            }).attr({
                align: f.position.align,
                zIndex: 8
            }).css(f.style).add().align(f.position));
            a.hasRendered = !0
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            R(a, "destroy");
            ja[a.index] = z;
            lb--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            Z(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            t("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            d && (d.innerHTML = "", Z(d), f && Fa(d));
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !V && K == K.top && "complete" !== G.readyState || ha && !K.canvg ? (ha ? CanVGController.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : G.attachEvent("onreadystatechange",
                function() {
                    G.detachEvent("onreadystatechange", a.firstRender);
                    "complete" === G.readyState && a.firstRender()
                }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options,
                c = a.callback;
            a.isReadyToRender() && (a.getContainer(), R(a, "init"), a.resetMargins(), a.setChartSize(), a.propFromSeries(), a.getAxes(), t(b.series || [], function(b) {
                    a.initSeries(b)
                }), a.linkSeries(), R(a, "beforeRender"), T.Pointer && (a.pointer = new Pointer(a, b)), a.render(), a.renderer.draw(), c && c.apply(a, [a]), t(a.callbacks, function(b) {
                    b.apply(a, [a])
                }), a.cloneRenderTo(!0),
                R(a, "load"))
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = P(c) ? c : [c, c, c, c];
            return [l(b[a + "Top"], c[0]), l(b[a + "Right"], c[1]), l(b[a + "Bottom"], c[2]), l(b[a + "Left"], c[3])]
        }
    };
    Oa.prototype.callbacks = [];
    var yb = T.CenteredSeriesMixin = {
        getCenter: function() {
            var a = this.options,
                b = this.chart,
                c = 2 * (a.slicedOffset || 0),
                d, e = b.plotWidth - 2 * c,
                f = b.plotHeight - 2 * c,
                b = a.center,
                a = [l(b[0], "50%"), l(b[1], "50%"), a.size || "100%", a.innerSize || 0],
                g = S(e, f),
                h;
            return La(a, function(a, b) {
                h = /%$/.test(a);
                d = 2 > b || 2 === b && h;
                return (h ? [e, f, g, g][b] * u(a) /
                    100 : a) + (d ? c : 0)
            })
        }
    }, Ba = function() {};
    Ba.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0));
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = c.pointValKey;
            a = Ba.prototype.optionsToObject.call(this, a);
            r(this, a);
            this.options = this.options ? r(this.options, a) : a;
            d && (this.y = this[d]);
            this.x ===
                z && c && (this.x = b === z ? c.autoIncrement() : b);
            return this
        },
        optionsToObject: function(a) {
            var b = {}, c = this.series,
                d = c.pointArrayMap || ["y"],
                e = d.length,
                f = 0,
                g = 0;
            if ("number" === typeof a || null === a) b[d[0]] = a;
            else if (ea(a))
                for (a.length > e && (c = typeof a[0], "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]), f++); g < e;) b[d[g++]] = a[f++];
            else "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0));
            return b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            b && (this.setState(), B(b, this), b.length || (a.hoverPoints = null));
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) Z(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = "graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "), b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = l(c.valueDecimals, ""),
                e = c.valuePrefix || "",
                f = c.valueSuffix || "";
            t(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Da(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) &&
                this.importEvents();
            "click" === a && e.allowPointSelect && (c = function(a) {
                d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            R(this, a, b, c)
        }
    };
    var Ca = function() {};
    Ca.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Ba,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(a, b) {
            var c = this,
                d, e, f = a.series,
                g = function(a, b) {
                    return l(a.options.index, a._i) - l(b.options.index,
                        b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            r(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: !1 !== b.visible,
                selected: !0 === b.selected
            });
            ha && (b.animation = !1);
            e = b.events;
            for (d in e) Q(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            t(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            c.isCartesian && (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            Na(f, g);
            this.yAxis &&
                Na(this.yAxis.series, g);
            t(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            t(a.axisTypes || [], function(e) {
                t(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== z && b[e] === d.id || b[e] === z && 0 === d.index) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                a[e] || a.optionalAxis === e || ba(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments;
            t(c.parallelArrays, "number" === typeof b ? function(d) {
                var f = "y" === d && c.toYData ? c.toYData(a) : a[d];
                c[d +
                    "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                b = l(b, a.pointStart, 0);
            this.pointInterval = l(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        },
        getSegments: function() {
            var a = -1,
                b = [],
                c, d = this.points,
                e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--;) null === d[c].y && d.splice(c, 1);
                    d.length && (b = [d])
                } else t(d, function(c, g) {
                    null === c.y ? (g > a + 1 && b.push(d.slice(a +
                        1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                });
            this.segments = b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = y(e, c.series, a);
            this.tooltipOptions = y(L.tooltip, L.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            return c
        },
        getColor: function() {
            var a = this.options,
                b = this.userOptions,
                c = this.chart.options.colors,
                d = this.chart.counters,
                e;
            e = a.color || ya[this.type].color;
            e || a.colorByPoint || (v(b._colorIndex) ? a = b._colorIndex : (b._colorIndex = d.color, a = d.color++), e = c[a]);
            this.color = e;
            d.wrapColor(c.length)
        },
        getSymbol: function() {
            var a = this.userOptions,
                b = this.options.marker,
                c = this.chart,
                d = c.options.symbols,
                c = c.counters;
            this.symbol = b.symbol;
            this.symbol || (v(a._symbolIndex) ? a = a._symbolIndex : (a._symbolIndex = c.symbol, a = c.symbol++), this.symbol = d[a]);
            /^url/.test(this.symbol) && (b.radius = 0);
            c.wrapSymbol(d.length)
        },
        drawLegendSymbol: xb.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length || 0,
                h, k = e.options,
                m = e.chart,
                p = null,
                q = e.xAxis,
                s = q && !! q.categories,
                n = e.tooltipPoints,
                w = k.turboThreshold,
                v = this.xData,
                r = this.yData,
                u = (h = e.pointArrayMap) && h.length;
            a = a || [];
            h = a.length;
            b = l(b, !0);
            if (!1 === d || !h || g !== h || e.cropped || e.hasGroupedData) {
                e.xIncrement = null;
                e.pointRange = s ? 1 : k.pointRange;
                e.colorCounter = 0;
                t(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (w && h > w) {
                    for (c = 0; null === p && c < h;) p = a[c], c++;
                    if (F(p)) {
                        s = l(k.pointStart, 0);
                        k = l(k.pointInterval,
                            1);
                        for (c = 0; c < h; c++) v[c] = s, r[c] = a[c], s += k;
                        e.xIncrement = s
                    } else if (ea(p))
                        if (u)
                            for (c = 0; c < h; c++) k = a[c], v[c] = k[0], r[c] = k.slice(1, u + 1);
                        else
                            for (c = 0; c < h; c++) k = a[c], v[c] = k[0], r[c] = k[1];
                        else ba(12)
                } else
                    for (c = 0; c < h; c++) a[c] !== z && (k = {
                        series: e
                    }, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), s && k.name && (q.names[k.x] = k.name));
                $(r[0]) && ba(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy();
                n && (n.length = 0);
                q && (q.minRange = q.userMinRange);
                e.isDirty = e.isDirtyData =
                    m.isDirtyBox = !0;
                c = !1
            } else t(a, function(a, b) {
                f[b].update(a, !1)
            });
            b && m.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                k = this.options,
                m = k.cropThreshold,
                p = 0,
                l = this.isCartesian,
                s, n;
            if (l && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            if (l && this.sorted && (!m || d > m || this.forceCrop))
                if (s = h.min, n = h.max, b[d - 1] < s || b[0] > n) b = [], c = [];
                else
            if (b[0] < s || b[d - 1] > n) e = this.cropData(this.xData, this.yData, s, n), b = e.xData, c = e.yData, e = e.start, f = !0, p = b.length;
            for (d = b.length - 1; 0 <= d; d--) a = b[d] - b[d - 1], !f && b[d] > s && b[d] < n && p++, 0 < a && (g === z || a < g) ? g = a : 0 > a && this.requireSorting && ba(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.activePointCount = p;
            null === k.pointRange && (this.pointRange = g || 1);
            this.closestPointRange = g
        },
        cropData: function(a, b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = l(this.cropShoulder, 1),
                k;
            for (k = 0; k < e; k++)
                if (a[k] >= c) {
                    f = A(0, k - h);
                    break
                }
            for (; k < e; k++)
                if (a[k] > d) {
                    g = k + h;
                    break
                }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                k, m = this.hasGroupedData,
                l, q = [],
                s;
            b || m || (b = [], b.length = a.length, b = this.data = b);
            for (s = 0; s < g; s++) k = h + s, m ? q[s] = (new f).init(this, [d[s]].concat(D(e[s]))) : (b[k] ? l = b[k] : a[k] !== z && (b[k] = l = (new f).init(this, a[k], d[s])), q[s] = l);
            if (b && (g !== (c = b.length) || m))
                for (s = 0; s < c; s++) s !== h || m || (s += g), b[s] && (b[s].destroyElements(), b[s].plotX = z);
            this.data = b;
            this.points =
                q
        },
        getExtremes: function(a) {
            var b = this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                k, m, p, q;
            a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (q = 0; q < d; q++)
                if (m = c[q], p = a[q], k = null !== p && p !== z && (!b.isLog || p.length || 0 < p), m = this.getExtremesFromAll || this.cropped || (c[q + 1] || m) >= g && (c[q - 1] || m) <= h, k && m)
                    if (k = p.length)
                        for (; k--;) null !== p[k] && (e[f++] = p[k]);
                    else e[f++] = p;
            this.dataMin = l(void 0, ra(e));
            this.dataMax = l(void 0, na(e))
        },
        translate: function() {
            this.processedXData ||
                this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !! this.modifyValue, k = a.pointPlacement, m = "between" === k || F(k), p = a.threshold, a = 0; a < g; a++) {
                var q = f[a],
                    s = q.x,
                    n = q.y,
                    t = q.low,
                    r = b && e.stacks[(this.negStacks && n < p ? "-" : "") + this.stackKey];
                e.isLog && 0 >= n && (q.y = n = null);
                q.plotX = c.translate(s, 0, 0, 0, 1, k, "flags" === this.type);
                b && this.visible && r && r[s] && (r = r[s], n = r.points[this.index + "," + a], t = n[0], n = n[1], 0 === t && (t = l(p, e.min)),
                    e.isLog && 0 >= t && (t = null), q.total = q.stackTotal = r.total, q.percentage = r.total && q.y / r.total * 100, q.stackY = n, r.setOffset(this.pointXOffset || 0, this.barW || 0));
                q.yBottom = v(t) ? e.translate(t, 0, 1, 0, 1) : null;
                h && (n = this.modifyValue(n, q));
                q.plotY = "number" === typeof n && Infinity !== n ? e.translate(n, 0, 1, 0, 1) : z;
                q.clientX = m ? c.translate(s, 0, 0, 0, 1) : q.plotX;
                q.negative = q.y < (p || 0);
                q.category = d && d[q.x] !== z ? d[q.x] : q.x
            }
            this.getSegments()
        },
        animate: function(a) {
            var b = this.chart,
                c = b.renderer,
                d;
            d = this.options.animation;
            var e = this.clipBox ||
                b.clipBox,
                f = b.inverted,
                g;
            d && !P(d) && (d = ya[this.type].animation);
            g = ["_sharedClip", d.duration, d.easing, e.height].join();
            a ? (a = b[g], d = b[g + "m"], a || (b[g] = a = c.clipRect(r(e, {
                width: 0
            })), b[g + "m"] = d = c.clipRect(-99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), this.group.clip(a), this.markerGroup.clip(d), this.sharedClipKey = g) : ((a = b[g]) && a.animate({
                width: b.plotSizeX
            }, d), b[g + "m"] && b[g + "m"].animate({
                width: b.plotSizeX + 99
            }, d), this.animate = null)
        },
        afterAnimate: function() {
            var a = this.chart,
                b = this.sharedClipKey,
                c = this.group,
                d = this.clipBox;
            c && !1 !== this.options.clip && (b && d || c.clip(d ? a.renderer.clipRect(d) : a.clipRect), this.markerGroup.clip());
            R(this, "afterAnimate");
            setTimeout(function() {
                b && a[b] && (d || (a[b] = a[b].destroy()), a[b + "m"] && (a[b + "m"] = a[b + "m"].destroy()))
            }, 100)
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, k, m, p;
            d = this.options.marker;
            var q = this.pointAttr[""],
                s, n = this.markerGroup,
                t = l(d.enabled, this.activePointCount < .5 * this.xAxis.len / d.radius);
            if (!1 !== d.enabled || this._hasPointMarkers)
                for (f =
                    b.length; f--;) g = b[f], d = X(g.plotX), e = g.plotY, p = g.graphic, k = g.marker || {}, a = t && k.enabled === z || k.enabled, s = c.isInsidePlot(C(d), e, c.inverted), a && e !== z && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || q, h = a.r, k = l(k.symbol, this.symbol), m = 0 === k.indexOf("url"), p ? p[s ? "show" : "hide"](!0).animate(r({
                    x: d - h,
                    y: e - h
                }, p.symbolName ? {
                    width: 2 * h,
                    height: 2 * h
                } : {})) : s && (0 < h || m) && (g.graphic = c.renderer.symbol(k, d - h, e - h, 2 * h, 2 * h).attr(a).add(n))) : p && (g.graphic = p.destroy())
        },
        convertAttribs: function(a, b, c, d) {
            var e =
                this.pointAttrToOptions,
                f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) g = e[f], h[f] = l(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = ya[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color;
            f = {
                stroke: g,
                fill: g
            };
            var h = a.points || [],
                k, m = [],
                l, q = a.pointAttrToOptions;
            l = a.hasPointSpecificOptions;
            var s = b.negativeColor,
                n = c.lineColor,
                w = c.fillColor;
            k = b.turboThreshold;
            var u;
            b.marker ? (e.radius = e.radius || c.radius + 2, e.lineWidth = e.lineWidth || c.lineWidth + 1) : e.color = e.color ||
                za(e.color || g).brighten(e.brightness).get();
            m[""] = a.convertAttribs(c, f);
            t(["hover", "select"], function(b) {
                m[b] = a.convertAttribs(d[b], m[""])
            });
            a.pointAttr = m;
            g = h.length;
            if (!k || g < k || l)
                for (; g--;) {
                    k = h[g];
                    (c = k.options && k.options.marker || k.options) && !1 === c.enabled && (c.radius = 0);
                    k.negative && s && (k.color = k.fillColor = s);
                    l = b.colorByPoint || k.color;
                    if (k.options)
                        for (u in q) v(c[q[u]]) && (l = !0);
                    l ? (c = c || {}, l = [], d = c.states || {}, f = d.hover = d.hover || {}, b.marker || (f.color = f.color || !k.options.color && e.color || za(k.color).brighten(f.brightness ||
                        e.brightness).get()), f = {
                        color: k.color
                    }, w || (f.fillColor = k.color), n || (f.lineColor = k.color), l[""] = a.convertAttribs(r(f, c), m[""]), l.hover = a.convertAttribs(d.hover, m.hover, l[""]), l.select = a.convertAttribs(d.select, m.select, l[""])) : l = m;
                    k.pointAttr = l
                }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(pa),
                d, e, f = a.data || [],
                g, h, k;
            R(a, "destroy");
            Z(a);
            t(a.axisTypes || [], function(b) {
                if (k = a[b]) B(k.series, a), k.isDirty = k.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (e = f.length; e--;)(g =
                f[e]) && g.destroy && g.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            t("area graph dataLabelsGroup group markerGroup tracker graphNeg areaNeg posClip negClip".split(" "), function(b) {
                a[b] && (d = c && "group" === b ? "hide" : "destroy", a[b][d]())
            });
            b.hoverSeries === a && (b.hoverSeries = null);
            B(b.series, a);
            for (h in a) delete a[h]
        },
        getSegmentPath: function(a) {
            var b = this,
                c = [],
                d = b.options.step;
            t(a, function(e, f) {
                var g = e.plotX,
                    h = e.plotY,
                    k;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"),
                    d && f && (k = a[f - 1], "right" === d ? c.push(k.plotX, h) : "center" === d ? c.push((k.plotX + g) / 2, k.plotY, (k.plotX + g) / 2, h) : c.push(g, k.plotY)), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function() {
            var a = this,
                b = [],
                c, d = [];
            t(a.segments, function(e) {
                c = a.getSegmentPath(e);
                1 < e.length ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color]
                ],
                d = b.lineWidth,
                e = b.dashStyle,
                f = "square" !== b.linecap,
                g = this.getGraphPath(),
                h = b.negativeColor;
            h && c.push(["graphNeg", h]);
            t(c, function(c, h) {
                var l = c[0],
                    q = a[l];
                q ? (Ra(q), q.animate({
                    d: g
                })) : d && g.length && (q = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: W,
                    zIndex: 1
                }, e ? q.dashstyle = e : f && (q["stroke-linecap"] = q["stroke-linejoin"] = "round"), a[l] = a.chart.renderer.path(g).attr(q).add(a.group).shadow(!h && b.shadow))
            })
        },
        clipNeg: function() {
            var a = this.options,
                b = this.chart,
                c = b.renderer,
                d = a.negativeColor || a.negativeFillColor,
                e, f = this.graph,
                g = this.area,
                h = this.posClip,
                k = this.negClip;
            e = b.chartWidth;
            var l = b.chartHeight,
                p = A(e, l),
                q = this.yAxis;
            d && (f || g) && (d = C(q.toPixels(a.threshold || 0, !0)), 0 > d && (p -= d), a = {
                x: 0,
                y: 0,
                width: p,
                height: d
            }, p = {
                x: 0,
                y: d,
                width: p,
                height: p
            }, b.inverted && (a.height = p.y = b.plotWidth - d, c.isVML && (a = {
                x: b.plotWidth - d - b.plotLeft,
                y: 0,
                width: e,
                height: l
            }, p = {
                x: d + b.plotLeft - e,
                y: 0,
                width: b.plotLeft + d,
                height: e
            })), q.reversed ? (b = p, e = a) : (b = a, e = p), h ? (h.animate(b), k.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = k = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(k)), g && (g.clip(h), this.areaNeg.clip(k))))
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                t(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this,
                c = b.chart;
            b.xAxis && (Q(c, "resize", a), Q(b, "destroy", function() {
                Z(c, "resize", a)
            }), a(), b.invertGroups = a)
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                visibility: c,
                zIndex: d || .1
            }).add(e));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            a.inverted && (b = c, c = this.xAxis);
            return {
                translateX: b ?
                    b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = (c = d.animation) && !! a.animate && b.renderer.isSVG && l(c.duration, 500) || 0,
                f = a.visible ? "visible" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                k = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, k);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, k);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.clipNeg());
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            b.inverted && a.invertGroups();
            !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect);
            e && a.animate();
            h || (e ? a.animationTimeout = setTimeout(function() {
                a.afterAnimate()
            }, e) : a.afterAnimate());
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.group,
                d = this.xAxis,
                e = this.yAxis;
            c && (a.inverted && c.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), c.animate({
                translateX: l(d &&
                    d.left, a.plotLeft),
                translateY: l(e && e.top, a.plotTop)
            }));
            this.translate();
            this.setTooltipPoints && this.setTooltipPoints(!0);
            this.render();
            b && R(this, "updatedData")
        }
    };
    var zb = ia(Ca);
    qa.line = zb;
    r(fb.prototype, {
        init: function(a, b, c) {
            var d = this,
                e = d.defaultOptions;
            d.chart = b;
            b.angular && (e.background = {});
            d.options = a = y(e, a);
            (a = a.background) && t([].concat(D(a)).reverse(), function(a) {
                var b = a.backgroundColor;
                a = y(d.defaultBackgroundOptions, a);
                b && (a.backgroundColor = b);
                a.color = a.backgroundColor;
                c.options.plotBands.unshift(a)
            })
        },
        defaultOptions: {
            center: ["50%", "50%"],
            size: "85%",
            startAngle: 0
        },
        defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1,
            borderColor: "silver",
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "#FFF"],
                    [1, "#DDD"]
                ]
            },
            from: Number.MIN_VALUE,
            innerRadius: 0,
            to: Number.MAX_VALUE,
            outerRadius: "105%"
        }
    });
    var Ma = va.prototype,
        Va = oa.prototype,
        Ab = {
            getOffset: xa,
            redraw: function() {
                this.isDirty = !1
            },
            render: function() {
                this.isDirty = !1
            },
            setScale: xa,
            setCategories: xa,
            setTitle: xa
        }, ob = {
            isRadial: !0,
            defaultRadialGaugeOptions: {
                labels: {
                    align: "center",
                    x: 0,
                    y: null
                },
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {
                    rotation: 0
                },
                zIndex: 2
            },
            defaultRadialXOptions: {
                gridLineWidth: 1,
                labels: {
                    align: null,
                    distance: 15,
                    x: 0,
                    y: null
                },
                maxPadding: 0,
                minPadding: 0,
                showLastLabel: !1,
                tickLength: 0
            },
            defaultRadialYOptions: {
                gridLineInterpolation: "circle",
                labels: {
                    align: "right",
                    x: -3,
                    y: -2
                },
                showLastLabel: !1,
                title: {
                    x: 4,
                    text: null,
                    rotation: 90
                }
            },
            setOptions: function(a) {
                a =
                    this.options = y(this.defaultOptions, this.defaultRadialOptions, a);
                a.plotBands || (a.plotBands = [])
            },
            getOffset: function() {
                Ma.getOffset.call(this);
                this.chart.axisOffset[this.side] = 0;
                this.center = this.pane.center = yb.getCenter.call(this.pane)
            },
            getLinePath: function(a, b) {
                var c = this.center;
                b = l(b, c[2] / 2 - this.offset);
                return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, {
                    start: this.startAngleRad,
                    end: this.endAngleRad,
                    open: !0,
                    innerR: 0
                })
            },
            setAxisTranslation: function() {
                Ma.setAxisTranslation.call(this);
                this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
            },
            beforeSetTickPositions: function() {
                this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
            },
            setAxisSize: function() {
                Ma.setAxisSize.call(this);
                this.isRadial && (this.center = this.pane.center = T.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector =
                    this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * l(this.sector, 1) / 2)
            },
            getPosition: function(a, b) {
                return this.postTranslate(this.isCircular ? this.translate(a) : 0, l(this.isCircular ? b : this.translate(a), this.center[2] / 2) - this.offset)
            },
            postTranslate: function(a, b) {
                var c = this.chart,
                    d = this.center;
                a = this.startAngleRad + a;
                return {
                    x: c.plotLeft + d[0] + Math.cos(a) * b,
                    y: c.plotTop + d[1] + Math.sin(a) * b
                }
            },
            getPlotBandPath: function(a, b, c) {
                var d = this.center,
                    e = this.startAngleRad,
                    f = d[2] / 2,
                    g = [l(c.outerRadius,
                        "100%"), c.innerRadius, l(c.thickness, 10)],
                    h = /%$/,
                    k, m = this.isCircular;
                "polygon" === this.options.gridLineInterpolation ? d = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (m || (g[0] = this.translate(a), g[1] = this.translate(b)), g = La(g, function(a) {
                    h.test(a) && (a = u(a, 10) * f / 100);
                    return a
                }), "circle" !== c.shape && m ? (a = e + this.translate(a), b = e + this.translate(b)) : (a = -Math.PI / 2, b = 1.5 * Math.PI, k = !0), d = this.chart.renderer.symbols.arc(this.left + d[0], this.top + d[1], g[0], g[0], {
                    start: a,
                    end: b,
                    innerR: l(g[1], g[0] - g[2]),
                    open: k
                }));
                return d
            },
            getPlotLinePath: function(a, b) {
                var c = this,
                    d = c.center,
                    e = c.chart,
                    f = c.getPosition(a),
                    g, h, k;
                c.isCircular ? k = ["M", d[0] + e.plotLeft, d[1] + e.plotTop, "L", f.x, f.y] : "circle" === c.options.gridLineInterpolation ? (a = c.translate(a)) && (k = c.getLinePath(0, a)) : (t(e.xAxis, function(a) {
                    a.pane === c.pane && (g = a)
                }), k = [], a = c.translate(a), d = g.tickPositions, g.autoConnect && (d = d.concat([d[0]])), b && (d = [].concat(d).reverse()), t(d, function(b, c) {
                    h = g.getPosition(b, a);
                    k.push(c ? "L" : "M", h.x, h.y)
                }));
                return k
            },
            getTitlePosition: function() {
                var a =
                    this.center,
                    b = this.chart,
                    c = this.options.title;
                return {
                    x: b.plotLeft + a[0] + (c.x || 0),
                    y: b.plotTop + a[1] - {
                        high: .5,
                        middle: .25,
                        low: 0
                    }[c.align] * a[2] + (c.y || 0)
                }
            }
        };
    ma(Ma, "init", function(a, b, c) {
        var d = b.angular,
            e = b.polar,
            f = c.isX,
            g = d && f,
            h, k;
        k = b.options;
        var m = c.pane || 0;
        if (d) {
            if (r(this, g ? Ab : ob), h = !f) this.defaultRadialOptions = this.defaultRadialGaugeOptions
        } else e && (r(this, ob), this.defaultRadialOptions = (h = f) ? this.defaultRadialXOptions : y(this.defaultYAxisOptions, this.defaultRadialYOptions));
        a.call(this, b, c);
        g || !d && !e ||
            (a = this.options, b.panes || (b.panes = []), this.pane = m = b.panes[m] = b.panes[m] || new fb(D(k.pane)[m], b, this), m = m.options, b.inverted = !1, k.chart.zoomType = null, this.startAngleRad = b = (m.startAngle - 90) * Math.PI / 180, this.endAngleRad = k = (l(m.endAngle, m.startAngle + 360) - 90) * Math.PI / 180, this.offset = a.offset || 0, (this.isCircular = h) && c.max === z && k - b === 2 * Math.PI && (this.autoConnect = !0))
    });
    ma(Va, "getPosition", function(a, b, c, d, e) {
        var f = this.axis;
        return f.getPosition ? f.getPosition(c) : a.call(this, b, c, d, e)
    });
    ma(Va, "getLabelPosition",
        function(a, b, c, d, e, f, g, h, k) {
            var m = this.axis,
                p = f.y,
                q = f.align,
                s = (m.translate(this.pos) + m.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
            m.isRadial ? (a = m.getPosition(this.pos, m.center[2] / 2 + l(f.distance, -25)), "auto" === f.rotation ? d.attr({
                rotation: s
            }) : null === p && (p = m.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), null === q && (q = m.isCircular ? 20 < s && 160 > s ? "left" : 200 < s && 340 > s ? "right" : "center" : "center", d.attr({
                align: q
            })), a.x += f.x, a.y += p) : a = a.call(this, b, c, d, e, f, g, h, k);
            return a
        });
    ma(Va, "getMarkPath",
        function(a, b, c, d, e, f, g) {
            var h = this.axis;
            h.isRadial ? (a = h.getPosition(this.pos, h.center[2] / 2 + d), b = ["M", b, c, "L", a.x, a.y]) : b = a.call(this, b, c, d, e, f, g);
            return b
        });
    ya.gauge = y(ya.line, {
        dataLabels: {
            enabled: !0,
            defer: !1,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            crop: !1,
            style: {
                fontWeight: "bold"
            },
            verticalAlign: "top",
            zIndex: 2
        },
        dial: {},
        pivot: {},
        tooltip: {
            headerFormat: ""
        },
        showInLegend: !1
    });
    var Bb = {
        type: "gauge",
        pointClass: ia(Ba, {
            setState: function(a) {
                this.state = a
            }
        }),
        angular: !0,
        drawGraph: xa,
        fixedBox: !0,
        forceDL: !0,
        trackerGroups: ["group", "dataLabels"],
        translate: function() {
            var a = this.yAxis,
                b = this.options,
                c = a.center;
            this.generatePoints();
            t(this.points, function(d) {
                var e = y(b.dial, d.dial),
                    f = u(l(e.radius, 80)) * c[2] / 200,
                    g = u(l(e.baseLength, 70)) * f / 100,
                    h = u(l(e.rearLength, 10)) * f / 100,
                    k = e.baseWidth || 3,
                    m = e.topWidth || 1,
                    p = b.overshoot,
                    q = a.startAngleRad + a.translate(d.y, null, null, null, !0);
                p && "number" === typeof p ? (p = p / 180 * Math.PI, q = Math.max(a.startAngleRad - p, Math.min(a.endAngleRad + p, q))) : !1 === b.wrap && (q = Math.max(a.startAngleRad,
                    Math.min(a.endAngleRad, q)));
                q = 180 * q / Math.PI;
                d.shapeType = "path";
                d.shapeArgs = {
                    d: e.path || ["M", -h, -k / 2, "L", g, -k / 2, f, -m / 2, f, m / 2, g, k / 2, -h, k / 2, "z"],
                    translateX: c[0],
                    translateY: c[1],
                    rotation: q
                };
                d.plotX = c[0];
                d.plotY = c[1]
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.yAxis.center,
                c = a.pivot,
                d = a.options,
                e = d.pivot,
                f = a.chart.renderer;
            t(a.points, function(b) {
                var c = b.graphic,
                    e = b.shapeArgs,
                    l = e.d,
                    p = y(d.dial, b.dial);
                c ? (c.animate(e), e.d = l) : b.graphic = f[b.shapeType](e).attr({
                    stroke: p.borderColor || "none",
                    "stroke-width": p.borderWidth ||
                        0,
                    fill: p.backgroundColor || "black",
                    rotation: e.rotation
                }).add(a.group)
            });
            c ? c.animate({
                translateX: b[0],
                translateY: b[1]
            }) : a.pivot = f.circle(0, 0, l(e.radius, 5)).attr({
                "stroke-width": e.borderWidth || 0,
                stroke: e.borderColor || "silver",
                fill: e.backgroundColor || "black"
            }).translate(b[0], b[1]).add(a.group)
        },
        animate: function(a) {
            var b = this;
            a || (t(b.points, function(a) {
                var d = a.graphic;
                d && (d.attr({
                    rotation: 180 * b.yAxis.startAngleRad / Math.PI
                }), d.animate({
                    rotation: a.shapeArgs.rotation
                }, b.options.animation))
            }), b.animate = null)
        },
        render: function() {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
            Ca.prototype.render.call(this);
            this.group.clip(this.chart.clipRect)
        },
        setData: function(a, b) {
            Ca.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            l(b, !0) && this.chart.redraw()
        },
        drawTracker: TrackerMixin && TrackerMixin.drawTrackerPoint
    };
    qa.gauge = ia(qa.line, Bb);
    r(T, {
        Axis: va,
        Chart: Oa,
        Color: za,
        Point: Ba,
        Tick: oa,
        Renderer: Aa,
        Series: Ca,
        SVGElement: O,
        SVGRenderer: Aa,
        arrayMin: ra,
        arrayMax: na,
        charts: ja,
        dateFormat: Ea,
        format: Da,
        pathAnim: Qa,
        getOptions: function() {
            return L
        },
        hasBidiBug: rb,
        isTouchDevice: jb,
        numberFormat: aa,
        seriesTypes: qa,
        setOptions: function(a) {
            L = y(!0, L, a);
            Ya();
            return L
        },
        addEvent: Q,
        removeEvent: Z,
        createElement: ta,
        discardElement: Fa,
        css: I,
        each: t,
        extend: r,
        map: La,
        merge: y,
        pick: l,
        splat: D,
        extendClass: ia,
        pInt: u,
        wrap: ma,
        svg: V,
        canvas: ha,
        vml: !V && !ha,
        product: "@product.name@",
        version: "@product.version@"
    })
})();
(function(r) {
    var y = r.getOptions().plotOptions,
        u = r.pInt,
        $ = r.pick,
        P = r.each,
        ea;
    y.solidgauge = r.merge(y.gauge, {
        colorByPoint: !0
    });
    ea = {
        initDataClasses: function(u) {
            var E = this,
                y = this.chart,
                B, v = 0,
                x = this.options;
            this.dataClasses = B = [];
            P(u.dataClasses, function(D, l) {
                var I;
                D = r.merge(D);
                B.push(D);
                D.color || ("category" === x.dataClassColor ? (I = y.options.colors, D.color = I[v++], v === I.length && (v = 0)) : D.color = E.tweenColors(r.Color(x.minColor), r.Color(x.maxColor), l / (u.dataClasses.length - 1)))
            })
        },
        initStops: function(u) {
            this.stops =
                u.stops || [
                    [0, this.options.minColor],
                    [1, this.options.maxColor]
            ];
            P(this.stops, function(u) {
                u.color = r.Color(u[1])
            })
        },
        toColor: function(r, u) {
            var y, B = this.stops,
                v, x = this.dataClasses,
                D, l;
            if (x)
                for (l = x.length; l--;) {
                    if (D = x[l], v = D.from, B = D.to, (void 0 === v || r >= v) && (void 0 === B || r <= B)) {
                        y = D.color;
                        u && (u.dataClass = l);
                        break
                    }
                } else {
                    this.isLog && (r = this.val2lin(r));
                    y = 1 - (this.max - r) / (this.max - this.min);
                    for (l = B.length; l-- && !(y > B[l][0]););
                    v = B[l] || B[l + 1];
                    B = B[l + 1] || v;
                    y = 1 - (B[0] - y) / (B[0] - v[0] || 1);
                    y = this.tweenColors(v.color, B.color,
                        y)
                }
            return y
        },
        tweenColors: function(r, u, y) {
            var B = 1 !== u.rgba[3] || 1 !== r.rgba[3];
            return 0 === r.rgba.length || 0 === u.rgba.length ? "none" : (B ? "rgba(" : "rgb(") + Math.round(u.rgba[0] + (r.rgba[0] - u.rgba[0]) * (1 - y)) + "," + Math.round(u.rgba[1] + (r.rgba[1] - u.rgba[1]) * (1 - y)) + "," + Math.round(u.rgba[2] + (r.rgba[2] - u.rgba[2]) * (1 - y)) + (B ? "," + (u.rgba[3] + (r.rgba[3] - u.rgba[3]) * (1 - y)) : "") + ")"
        }
    };
    r.seriesTypes.solidgauge = r.extendClass(r.seriesTypes.gauge, {
        type: "solidgauge",
        bindAxes: function() {
            var u;
            r.seriesTypes.gauge.prototype.bindAxes.call(this);
            u = this.yAxis;
            r.extend(u, ea);
            u.options.dataClasses && u.initDataClasses(u.options);
            u.initStops(u.options)
        },
        drawPoints: function() {
            var y = this,
                E = y.yAxis,
                H = E.center,
                B = y.options,
                v = y.chart.renderer;
            r.each(y.points, function(x) {
                var D = x.graphic,
                    l = E.startAngleRad + E.translate(x.y, null, null, null, !0),
                    I = u($(B.radius, 100)) * H[2] / 200,
                    P = u($(B.innerRadius, 60)) * H[2] / 200,
                    ia = E.toColor(x.y, x),
                    aa;
                "none" !== ia && (aa = x.color, x.color = ia);
                !1 === B.wrap && (l = Math.max(E.startAngleRad, Math.min(E.endAngleRad, l)));
                l = 180 * l / Math.PI;
                l = {
                    x: H[0],
                    y: H[1],
                    r: I,
                    innerR: P,
                    start: E.startAngleRad,
                    end: l / (180 / Math.PI)
                };
                D ? (I = l.d, D.attr({
                    fill: x.color
                }).animate(l, {
                    step: function(l, u) {
                        D.attr("fill", ea.tweenColors(r.Color(aa), r.Color(ia), u.pos))
                    }
                }), l.d = I) : x.graphic = v.arc(l).attr({
                    stroke: B.borderColor || "none",
                    "stroke-width": B.borderWidth || 0,
                    fill: x.color
                }).add(y.group)
            })
        },
        animate: null
    })
})(Highcharts);