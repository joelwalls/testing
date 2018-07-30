function Quizlib(d, f) {
    var a = this;
    a.fVx = null;
    a.fVt = 0;
    a.fVq = 1;
    a.fVp = 2;
    a.r78 = !1;
    a.dY9 = null;
    a.jE4 = 0;
    a.y78 = !1;
    a.uE1 = !1;
    a.fbk = [];
    a.ok = 0;
    a.pace = 0;
    a.y52 = a.y52 || "Choose a test";
    a.y71 = 450;
    a.zJ5 = 300;
    a.Vm = function() {
        return a.bo || (a.bo = q9("bo"))
    };
    a.qF = function() {
        return a.q92m || (a.q92m = q9("canvas"))
    };
    a.FV = function() {
        return this.cpan || (this.cpan = q9("centerpanel"))
    };
    a.bbhtm = function(b) {
        return a.Vm().innerHTML = b
    };
    a.Yd = function() {
        var b = q9("PACE");
        b && (a.pace = parseInt(b.value))
    };
    a.qwo = function() {
        return new TQHistory
    };
    a.w63 = function(b) {
        a.g90c = map(nJ(b || uA8), a.qwo)
    };
    a.w63();
    a.XK = 0;
    a.u6i = zV4 || fV9 ? "<div class='g6e3'>&#x2713</div>" : "<div class='g6e4'></div>";
    a.bZ = function() {
        a.squeeze = 320;
        a.y71 = Quizlib.g66g;
        a.zJ5 = Quizlib.g66e
    };
    zV3 && a.bZ();
    a.xY3 = function() {
        var a = Quizlib.g6i9(),
            c = /[&-].*/;
        if (this.urlOpts) return this.urlOpts.replace(c, "") + a;
        var e = document.location,
            a = qR4(e.search, [
                [c, ""],
                [/^\?/, ""]
            ]) + a;
        return -1 < e.pathname.indexOf("-") ? e.href.split("/").slice(0, 4).join("/") + "/?" + a : e.href.split("?").shift() + "?" + a
    };
    a.Bf9 =
        function(b) {
            var c = this.xY3(),
                e = q9("footer"),
                c = a.gX3("<a id='fZK' href='" + c + "' title='URL for this test configuration' >" + c + "</a>");
            e && (e.innerHTML = "<center><div class='JX' style='margin:15px;'>" + c + "</div></center>");
            a.XK = 1;
            e && b && n78("fZK")
        };
    a.zZ9 = function() {
        Quizlib.zZ9(quiz.urlOpts || document.location.search)
    };
    a.QH = function(b) {
        var c, e = {
            g907: Hz,
            g908: g6bz,
            q916: g6by,
            gfdl: aYj,
            r8k: TQ_HA,
            g909: aYL,
            g906: g6c1,
            g90a: g6c0,
            g90b: HX,
            jE1: fJ9
        };
        for (c in e) a[c] = e[c] & (b || 0);
        a.g909 && (a.r8k = 1);
        a.g90b >>= EH3;
        a.jE1 >>= Dd3
    };
    a.qE8 = function(b) {
        a.tdf = b ? b.split("~") : []
    };
    a.qE8(d);
    a.QH(f);
    a.uD5 = function() {
        var b = 0 < a.q91j && a.q91j < fV6 ? jH(a.q91j - a.q91r, 0) : a.q91r,
            c = a.u6o || (a.u6o = q9("q919")),
            b = a.zZ0(b);
        c.value = b;
        7 < b.length ? q8j(c, "g6gi") : 6 < b.length && q8j(c, "q911")
    };
    a.Dd7 = function() {
        var b = a.g906 || a.r78,
            c = q9("q917"),
            e = q9("q91a"),
            g = q9("q915");
        b && c && (c.value = a.g6f9());
        b && e && (e.value = a.g6fa());
        g && (g.value = a.fVw());
        a.q91k()
    };
    a.g6f9 = function() {
        var a = 0;
        map(this.g90c, function(c) {
            a += c.g6f9()
        });
        return a
    };
    a.g6fa = function() {
        var a = 0;
        map(this.g90c,
            function(c) {
                a += c.g6fa()
            });
        return a
    };
    a.g90f = function() {
        if (a.r8v) {
            var b = a.g90c[jH(a.idx - 1, 0)].incorrects;
            a.g90e = a.g90e ? a.g90e.concat(b) : b.slice();
            return a.g90e
        }
        var c = [];
        map(a.g90c, function(a) {
            c = c.concat(a.incorrects)
        });
        return c
    };
    a.u6m = function() {
        return a.q91r >= a.q91j
    };
    a.qZ6 = function() {
        a.q91r = mrnd((g6gy() - a.jE4) / 1E3);
        a.q91r & 1 && a.g6h0(a.q91r);
        a.uD5();
        a.u6m() && a.bZ4(!0)
    };
    a.jE3 = function() {
        a.y78 && clearInterval(a.dY9);
        a.y78 = !1
    };
    a.q95 = function() {
        a.q91q || (a.jE3(), a.jE4 = g6gy() - 1E3 * (a.q91r || 0), a.dY9 = setInterval("quiz.qZ6()",
            1E3), a.y78 = !0)
    };
    a.zZ0 = function(a) {
        var c = Math.floor(a / 3600),
            e = c ? String(c) + ":" : "",
            a = a % 3600,
            g = Math.floor(a / 60),
            a = a % 60;
        return e + ((c && 10 > g ? "0" : "") + g + ":") + ((10 > a ? "0" : "") + a)
    };
    a.begin = function() {
        a.y78 || (quiz.q95(), a.r78 || quiz.uM4(), self.status = "Testing")
    };
    a.q91f = function() {
        return !a.open && a.tdf.length <= a.idx
    };
    a.iG8 = function() {
        if (a.q91f()) return null;
        var b = a.tdf[a.idx % a.tdf.length];
        a.s9q = a.s95(b);
        return a.qdef = a.xY6(b)
    };
    a.g6et = function() {
        return a.tdf.srcIdx ? a.tdf.srcIdx[a.idx] : a.idx
    };
    a.hj = function(b) {
        for (var c =
                "", e = a.g6et(); 0 <= b;) c += sfcc(65 + b % 26), (b = Math.floor(b / 26)) || b--;
        return String(e + 1).concat(c)
    };
    a.s98 = function(b) {
        b = g6ey(b) && b < a.g90c.length ? b : a.idx;
        return a.g90c[b] || (a.g90c[b] = a.qwo())
    };
    a.u71 = function() {
        var b = a.s98();
        b.answered && (b.g6f6(0), b.g6f5(0), b.incorrects = []);
        b.answered = !1
    };
    a.u79 = function(b) {
        var c = b.answered ? b.g6f9() + b.g6fa() : 0,
            e = 0;
        0 < c ? e += (b.s9q || 0) * b.g6f9() / c : b.answered && (b.s9q && !a.YD([b.qdef])) && (e += b.s9q);
        return e
    };
    a.Dd0 = function() {
        var b = 0;
        map(a.g90c, function(a) {
            b += this.u79(a)
        }, this, []);
        return mrnd(b)
    };
    a.uD6 = function(b) {
        var c, e = 0;
        for (c = 0; c < b.length; c++) e += a.s95(b[c]);
        return e
    };
    a.qZ0 = function(a) {
        a = a.replace(/(<a[^>]+) href=('[^']+'|"[^"]+"|[^\s>]+)/gi, "$1 href='javascript:;'");
        a = a.replace(/(<[^>]+)cursor\:\s*pointer/gi, "$1cursor:default");
        return a = a.replace(/ on(focus|click|mouse|key|touch)/gi, " on&#8203;$1")
    };
    a.mJ4 = function(b, c) {
        return filter((b || a.Vm()).getElementsByTagName(c || "INPUT"))
    };
    a.xZ4 = function(b, c) {
        b || (b = a.Vm());
        var e = a.mJ4(b),
            g = a.mJ4(b, "SELECT"),
            d = c ? a.mJ4(b, "BUTTON") : [];
        return e.concat(g, d)
    };
    a.q91m = function(b) {
        var c = a.s98(),
            e = a.qF(),
            g = a.qc || {},
            d = c.g6f9(),
            f = c.g6fa();
        c.qdef = a.qdef;
        c.s9q = a.s9q;
        c.points = a.u79(c);
        b && (c.sec = a.q91r, c.answered = !0);
        var h = g.Bj8 ? e : a.Vm(),
            b = a.mJ4(h),
            e = a.mJ4(0, "SELECT"),
            h = a.mJ4(h, "TEXTAREA"),
            i = a.g6et();
        c.ah = new AnswerHistory(b, e, h, i);
        c.ah.g6hi(d, f);
        g.g6eu && (g = g.g6eu()) && c.g6f4(g);
        c.recording = 0;
        c.recorded = 0
    };
    a.z22 = function(a) {
        a.style.color = a.disabled ? "#999" : "#000"
    };
    a.hjo = function() {
        return 0 == a.tdf.length
    };
    a.q91k = function() {
        var b = a.pbar || (a.pbar =
                q9("pbar")),
            c = a.idx || 0,
            e = a.tdf.length,
            g = filter(a.g90c, function(a) {
                return a && a.answered
            }).length,
            d = q9("nbtr");
        if (b && d) {
            var f = offw(b) - ("pbar" == b.id ? 2 : 0),
                h = q9("NAVBK"),
                i = q9("NAVFW"),
                k = q9("v5d"),
                p = q9("v5b"),
                m = g && a.tdf && !a.hjo() && !a.uE1 && !a.r8k;
            a.g90a && (ocn(d, m ? "normal" : "nbhid"), h.disabled = !0, i.disabled = !0);
            if (!a.g90a || m) ocn(d, "normal"), h.disabled = a.zH7 || 0 == c, p.disabled = i.disabled = a.zH7 || c >= g, k.disabled = !a.uE1 || c >= g, k.innerHTML = a.zH7 ? "Cancel change" : "Change answer";
            Cc3 && map([h, p, i, k], a.z22);
            d = a.open ? 0 :
                mrnd(f * g / e);
            f = a.open ? 0 : mrnd(f * jA(e, c) / e);
            h = "<div style='position:absolute;height:9px;width:" + d + "px;background-color:#94A9A5;font-size:0px;cursor:" + (h.disabled && i.disabled ? "default" : "pointer") + ";'>";
            g && c < e && (h += "<div style='position:absolute;height:9px;left:" + f + "px;background-color:" + vq9 + ";font-size:0px;width:2px;'></div>");
            b.innerHTML = h + "</div>"
        }
    };
    a.qwp = function(b) {
        return b.offsetLeft + (b.offsetParent ? a.qwp(b.offsetParent) : 0)
    };
    a.u7a = function(b) {
        b || (b = window.event);
        if (!(a.zH7 || q9("NAVBK").disabled &&
                q9("NAVFW").disabled)) {
            var c = Qb(b),
                b = q9("pbar"),
                e = a.qwp(b) + 2,
                c = c - e,
                b = offw(b);
            a.idx = jH(0, jA(a.q91i, mrnd(c / b * (a.tdf.length + 1))));
            a.v9()
        }
    };
    a.kJ3 = function() {
        for (var b = a.g90c, c = 0; c < b.length; c++)
            if (b[c].g6fa()) return c;
        return -1
    };
    a.zX4 = function() {
        var b = a.kJ3();
        0 <= b ? (a.idx = b, a.y86(!0)) : (a.idx = a.tdf.length, a.bZ4(), a.zH7 = !1, a.q91k(), a.Uo("All Mistakes Corrected<br/>" + (a.g6ds || "")))
    };
    a.v95 = function() {
        a.q91q = 1;
        a.y79();
        a.zX4()
    };
    a.uD = function(b) {
        a.idx = b;
        a.q91o(0)
    };
    a.q91o = function(b, c) {
        a.idx = jA(jH(c ? a.q91i : a.idx +
            b, 0), a.tdf.length);
        a.v9()
    };
    a.u6j = function(a, c) {
        return "<div class='q940 q941'><span style='position:absolute;left:-46px;color:" + c + "'>" + a + "</span></div>"
    };
    a.u63 = function(a) {
        a.disabled = "disabled";
        a.readonly = !0;
        aev(a, "focus", function(a) {
            estp(a);
            return !1
        })
    };
    a.u64 = function(b) {
        b = b.Bj8 ? a.qF() : a.Vm();
        map(a.xZ4(b, !0), a.u63);
        map(b.getElementsByTagName("A"), getf("style.cursor='default'"))
    };
    a.pZ4 = function() {
        var b = Gg("DIV", {
                position: "absolute",
                zIndex: "100000",
                top: "6px"
            }),
            c = a.Vm();
        b.innerHTML = "<a id='caLink' class='tqhome' href='javascript:quiz.DQ0()' style='background-color:#f5f7f7;padding:6px 1ex 8px;'>See correct answer</a>";
        c.insertBefore(b, c.firstChild)
    };
    a.g6g6 = function(b) {
        var c = a.s98(),
            e = c && c.qdef && a.Ft(c.qdef);
        if (c && e) {
            var g = e.Bj8 ? a.qF() : a.Vm();
            c.ah.g6ez(g, b);
            e.g6ep && (b = c.g6f3()) && e.g6ep(b)
        }
    };
    a.view = function() {
        var b = a.s98(),
            c, e, g = a.Vm(),
            d = q9("cxm"),
            f = b && a.Ft(b.qdef);
        f && b.answered && (a.qc = f, a.g6fh(), f.show(b.qdef), a.g6g6(!0), e = a.mJ4(void 0).concat(a.mJ4(void 0, "BUTTON")), map(e, a.u63), map(a.mJ4(g, "A"), getf("style.cursor='default'")), d && csdb(d, c = !a.r8k && !a.uE1), c && (b = b.g6fa(), d.innerHTML = a.u6j(b ? "&#215;" : a.u6i, b ? "#908C7E" :
            "#7E908C"), b && (a.pZ4(), f.Ft4 && f.Ft4()), a.u7e && a.u7e()))
    };
    a.hjq = function(b) {
        (a.s98().ah || new AnswerHistory).g6ez(b)
    };
    a.i83 = function(b, c, e) {
        a.u71();
        var g = a.s98(),
            b = new g90g(a.hj(e), b, c, a.idx, a.tdf[a.idx]);
        g.g6f6(g.g6fa() + 1);
        g.incorrects.push(b);
        a.q91q || a.fbk.push(b.g90o(!1))
    };
    a.kJ6 = function() {
        a.u71();
        var b = a.s98();
        b.g6f5(b.g6f9() + 1);
        a.ok = 1
    };
    a.k60 = function() {
        a.kJ6();
        a.Pg()
    };
    a.hJ3 = function(b, c, e) {
        a.i83(b, c, e);
        a.Pg()
    };
    a.Pg = function() {
        a.begin();
        a.q91m(!0);
        if (a.q91q) return a.zX4();
        a.idx += a.zH7 ? 0 : 1;
        a.zH7 &&
            a.q91i < a.tdf.length ? a.q91o(0, 1) : a.v9();
        a.q91l && a.uE1 && this.g6f0()
    };
    a.y86 = function(b) {
        a.v9(b || !a.zH7)
    };
    a.y79 = function() {
        var b = q9("fbt");
        a.z24 = "";
        ocn(a.Vm(), "bo");
        b && b.parentNode.removeChild(b)
    };
    a.fz0 = function() {
        ocn(a.FV(), "normal");
        a.bbhtm("<div style='height:100px;'>&nbsp;</div>")
    };
    a.YD = function(a) {
        var c = function(a) {
            return !fV0.test(a)
        };
        a || (a = this.tdf || [], this.jE1 && (a = a.slice(0, this.jE1)));
        var a = map(a, this.xY6),
            e, g = a.length,
            d = filter(a, getf("substr(0,2)=='ZA'")),
            f = filter(a, getf("substr(0,2)=='ZF'")),
            h = filter(a, getf("substr(0,3)=='MAP'")),
            i = jX5(/<input[^>]+(alt=["']?(\w+)['"]?[^>]+)?value=([^>]+alt=["']?(\w+)['"]?)?/gi),
            k = jX5(/alt=["']?(\w+)['"]/),
            p = jX5(/<div[^>]+id=["']?X\d+['"]?[^>]+a=["']?[23]['"]?|<div[^>]+a=["']?[23]['"]?[^>]+id=["']?X\d+["']?/gi),
            m = jX5(/<div[^>]+id=["']?X\d+['"]?[^>]+a=["']?4['"]?|<div[^>]+a=["']?4['"]?[^>]+id=["']?X\d+["']?/gi);
        for (e = 0; e < d.length; e++) g += (filter(Xv(d[e].substr(2)), c).length - 3) / 2;
        map(h, function(a) {
            var b = /[2-9]\[/g;
            for (g--; b.exec(a);) g++
        });
        for (var h = d = c = e =
                0, r; e < f.length; e++) {
            var j, l = {};
            i.lastIndex = 0;
            k.lastIndex = 0;
            p.lastIndex = 0;
            m.lastIndex = 0;
            for (r = DomJs.decode(f[e].substr(2)); j = i.exec(r);)
                if (c++, j = k.exec(j[0])) l[j[1]] ? c-- : l[j[1]] = 1;
            for (; m.exec(r);) d++;
            p.test(r) && h++
        }
        isNaN(g) && (this.q91t("isNaN l:" + g + " td.length:" + a.length), g = a.length);
        return g - (f.length || 0) + (c || 0) + (d || 0) + (h || 0)
    };
    a.jX8 = /^\!(\d+)\!(.+)$/;
    a.xY8 = function(b) {
        return b.length && "!" == b.charAt(0) ? b.match(a.jX8) : null
    };
    a.s95 = function(b) {
        var c = a.xY8(b);
        return c ? parseInt(c[1]) : a.YD([b])
    };
    a.q78 = function(b) {
        for (var c =
                0, e = b.length; c < e; c++)
            if (a.xY8(b[c])) return !0;
        return !1
    };
    a.xY6 = function(b) {
        var c;
        return !b.length || "!" != b.charAt(0) || !(c = b.match(a.jX8)) ? b : c[2]
    };
    a.y95 = function() {
        function b(a, b, d) {
            aev(q9(a), d || "click", new Function("quiz.q91o(" + b + ")"))
        }
        a.g90d || (a.g90d = !0, b("NAVBK", "-1"), b("NAVFW", "1"), b("v5b", "0,1"), J5 && (b("NAVBK", "-1", "dblclick"), b("NAVFW", "1", "dblclick")), aev(q9("v5d"), "mousedown", function() {
            q9("v5d").disabled || quiz.y86()
        }))
    };
    a.q91p = function() {
        g6fi();
        var a = parseInt(q9("TIMELIMIT").value);
        this.q91q =
            0;
        this.jqd = !1;
        this.jE3();
        this.idx = this.q91i = this.q91r = 0;
        this.q91j = a || fV6;
        this.r8v = (this.open = gln() == this.fVx) && this.q91j == fV6;
        this.Vm();
        this.qF();
        this.w63();
        this.uD5();
        this.Dd7();
        this.Yd();
        this.o07();
        this.y79();
        this.g662(a);
        this.bz0o && clearInterval(this.bz0o);
        this.XK && this.Bf9();
        if (this.r78 && !this.singleTestdef) this.qE8(bJ0().join("~"));
        else {
            a = (this.u6n || (this.u6n = this.tdf)).slice();
            if (this.g6fc()) {
                this.g6hy();
                return
            }
            this.g6en(a) || (this.jE1 ? this.q5f(y96(a), this.jE1) : this.g6ew(a))
        }
        this.uE1 = (this.r78 ||
            this.sid) && !this.hjo();
        zJ8(q9("quizinfo"));
        this.uE1 ? this.ist && !this.idx ? this.q91g() : this.v9() : this.fz0();
        this.r78 && this.hjo() && this.hjp();
        this.y95()
    };
    a.g662 = function(a) {
        ocn(q9("g663"), a ? "" : "g624")
    };
    a.q5f = function(b, c) {
        a.tdf = b.slice(0, c);
        a.tdf.srcIdx = b.srcIdx;
        a.u62 && a.u62()
    };
    a.hjp = function() {
        a.s81();
        a.H7("<span class='message'><b>" + a.qwa() + "</b></span>")
    };
    a.q91g = function() {
        var b = a.ist.replace(/\t/g, "<br/>").replace(/(^|\W)(https?\:\/\/[^\s'"\)\(<>]+)/g, "$1<a href=$2 rel='nofollow' target='_blank'>$2</a>");
        a.bbhtm("<div class='g66c jfa' style='padding:40px'>" + b + "</div><center><button onclick='quiz.begin();quiz.v9();' >Start testing</button></center>")
    };
    a.H7 = function(b) {
        a.bbhtm("<div style='padding-top:40px;min-height:100px;overflow:visible;'>" + b + "</div>")
    };
    a.Uo = function(b) {
        var c = window.clib;
        a.s9f && (b = (b || "") + a.s9f);
        b || (b = a.r78 && !a.g909 && a.g6fa() ? "<a style='width:320px;display:inline-block;' href='javascript:quiz.v95();'>Click Here To Correct Mistakes</a>" : "");
        a.squeeze || (b += "<br/>");
        a.z24 && (b += "<br/>" +
            a.z24);
        b = "<center><div style='width:450px'><div style='width:50px;float:left;'>" + (a.aYC ? "" : a.g6dv("<div id='fe' class='fel'></div>")) + "</div></div>" + b + "</center>";
        a.squeeze || (b += "<br/>");
        if (a.r78 && c && c.uV8 && !Yj1.NOAD && !a.NOAD) var c = c.uV8(),
            e = g90((a.nonmath ? "" : "Math") + " " + c),
            b = b + ("<div>Get help with: <a href='https://www.google.com/cse?q=" + e + "&ie=UTF-8&cx=partner-pub-6006964880095217:50etf52a5j1' target='_blank'>" + c + "</a>&nbsp;<span class='aYM'></span></div>");
        else a.aYC || (b += "<div>" + a.g6dv("ThatQuiz Home") +
            "</div>");
        a.z24 ? (a.bbhtm(b), ocn(a.Vm(), "")) : a.H7(b)
    };
    a.g6dv = function(b) {
        return "<a href='" + a.bz1w() + "' target='_top'>" + b + "</a>"
    };
    a.bz1w = function() {
        return a.u7c || (Yj1.n ? "/tq/" : "/")
    };
    a.bZ4 = function(b) {
        try {
            try {
                b && (a.qc && a.qc.s8h) && a.qc.s8h()
            } catch (c) {
                a.q91t("finish-up:" + a.sid, c)
            }
            ocn(a.FV(), "normal");
            a.Dd7();
            a.jE3();
            a.s81();
            a.bbhtm("");
            a.q91r = jH(a.q91r, 1);
            a.uD5();
            a.q91q ? a.uE8(b) : (a.aRd(), a.bz0t ? a.bz0t(0) : a.uE8(b));
            a.uE1 = !1
        } catch (e) {
            a.r78 || a.q91t("end-test:" + a.sid, e)
        }
        a.q91k()
    };
    a.fJJ = function(a) {
        var c = q9("fJK");
        c && ocn(c, a ? "normal" : "hidden")
    };
    a.uQ0 = function() {
        q9("quizinfo").innerHTML = a.g909 ? "" : a.g6f9() + "&nbsp;Right<br/>" + a.g6fa() + "&nbsp;Wrong"
    };
    a.gX3 = function(b, c) {
        var e = b;
        if (a.r78 && window.clib && clib.uV8 && Yj1.sh && !g6cs()) {
            var e = Df(c),
                e = g90(clib.uV8().replace(/&/g, "") + (e ? " : Score " + c + " " : "")),
                d = a.xY3(),
                f = zV4 || fV9 ? "" : ' target="_blank"'; - 1 == d.search("http") && (d = "http://www.thatquiz.org");
            d = g90(d);
            e = '<table cellpadding=0 cellspacing=0><tr><td class="nw vam i9b" style="padding:0 6px 0 0;">' + b + '</td><td class="nw vam i9b" style="padding:0 6px 0 0;"><a class="aYN" href="http://www.facebook.com/sharer.php?s=100&p[url]=' +
                d + "&p[title]=" + e + '"' + f + ' title="Share on Facebook"></a></td><td class="nw vam i9b" style="padding:0 6px 0 0;"><a class="aYO" href="http://twitter.com/home?status=' + e + "++" + d + '"' + f + ' title="Share on Twitter"></a></td><td class="nw vam i9b" style="padding:0 6px 0 0;"></td></tr></table>'
        }
        return e
    };
    a.aZC = function(b, c, e, d, f, n) {
        return d && n ? 100 * f / n : b && a.open ? 100 * c / b : e ? 100 * c / e : 100
    };
    a.fVw = function() {
        return a.g6f9() + a.g6fa()
    };
    a.aRd = function(b) {
        var c = a.YD(),
            e = this.g90f(),
            d = "";
        if (b) d = map(b, function(a) {
            var b = parseInt(a.qor),
                a = a.icr.replace(/~/g, "<br/>");
            return g90g.g90m(b, a)
        }, this).join("<br/>");
        else var f = a.r8v,
            d = map(e, function(a) {
                return f ? a.g90o() : a.g90n()
            }).join("<br/>");
        var b = a.fVw(),
            e = jH(0, c - b),
            n = a.q78(a.u6n || a.tdf),
            h = n ? a.Dd0() : 0,
            i = a.uD6(a.tdf),
            k = a.g6f9(),
            p = a.g6fa(),
            c = a.aZC(b, k, c, n, h, i),
            m = 0 < b ? mrnd(a.q91r / b, 100) : a.q91r;
        a.z24 = a.aRC(c, h, i, n, b, e, k, p, a.q91r, m, d);
        a.aRb = {
            preciseScore: c,
            completed: b,
            unanswered: e,
            secs: a.q91r,
            avgtime: m,
            points: n ? h : k,
            uD6: i
        }
    };
    a.aRC = function(b, c, e, d, f, n, h, i, k, p, m) {
        if (this.g909) return "Testing finished";
        var r = 0,
            j = [],
            l = a.q5 || 100,
            t = q90i(l),
            s = a.gLbl,
            q = function(a, b) {
                return "<tr class='" + (r++ % 2 ? "oddtr" : "eventr") + "'><td>" + a + "</td><td>" + b + "</td></tr>"
            }; - 1 == d && (d = a.q78(a.u6n || a.tdf));
        e || (d = !1);
        var u = scalerf(l),
            v = u(b),
            l = q907(l) ? 10 : 1,
            l = o06(mrnd(b, l)) + "%",
            b = a.r78 && a.gX3("Score" + s8, mrnd(b) + "%") || (t ? "Score" : "Percentage");
        this.g6ds = "Original percentage : " + l;
        s && s.length && (r++, j.push("<tr class='oddtr'><th colspan='2'>", g6ie(v, g6id(s, u)), "</th></tr>"));
        t || j.push(q("Score", o06(v)));
        j.push(q(b, l));
        d && j.push(q("Points",
            c + "/" + e));
        j.push(q("Completed", f));
        a.open || j.push(q("Unanswered", n));
        j.push(q("Right", h), q("Wrong", i));
        j.push(q("Time", a.zZ0(k)), q("Seconds per problem", o06(p)));
        c = "<table id='fbt' class='jfa' style='margin:0px 8px;'><tr><td><span id='results' class='fJM'><table class='brd' cellspacing=0 cellpadding=2 style='border-width:1px' border=1><tbody id='scoredresult'>" + j.join("") + "</tbody></table></span></td><td class='feedback'><div id='feedback' style='max-height:250px;overflow:auto;padding-left:25px;'>";
        !a.r8k && 0 < i && (c += "<b>Missed problems<br/>(Your answer in parenthesis)</b><div class='yJ4'>" + m + "</div>");
        return c + "</div></td></tr></table>"
    };
    a.uE8 = function(b) {
        a.r78 && !a.g906 && a.uQ0();
        a.r8v ? q9("hju").innerHTML = a.z24 : (a.Uo(b || a.u6m() ? "Time Expired" : null), a.r78 && a.fJJ(!0))
    };
    a.q91t = function(a, c) {
        c && (a += ":" + c.name + ":" + c.message + ":" + (c.stack || c.stacktrace || ""));
        if (Bj6()) {
            var e = a.replace(/\s/g, " ").substr(0, 1E3),
                d = q9("canvas");
            d && (document.cookie = "g66f=cnvo." + d.offsetWidth + "." + d.offsetHeight + ".cnvs." + d.style.width +
                "." + d.style.height + ";path=/");
            z98("/tq/jserror?m=" + encodeURIComponent(e), !0)
        }
    };
    a.jq1 = function() {
        a.fbk = [];
        a.ok = 0
    };
    a.q91d = "<button id='q91e' onclick='quiz.v9()'>&nbsp;Continue&nbsp;<span class='uni'>&gt;&gt;</span>&nbsp;</button>";
    a.jH6 = function() {
        var b = jX5(/^(Q\).+)(\s+)(A\).*)(\s+)(\(.*\))$/),
            b = map(a.fbk, qR4, a, [
                [
                    [b, "<div class='calm' style='padding:0 5px'>$1<br/>$3<br/>$5</div>"]
                ]
            ]),
            c = a.pace < fV6,
            e = ["<div class='s9p' style='border:3px solid " + vq9 + ";width:400px;'><div style='background-color:#6F7F7C;color:#f5f7f7;padding:5px;' >Incorrect answer<br/>(Your answer in parenthesis)</div>"];
        e.push("<div class='g66c' style='font-size:140%;padding:5px 0 7px'>" + b.join("<br/>").replace(/<(\/)?b>/g, "<$1i>") + "</div>");
        c || e.push("<div style='padding-bottom:6px;'><button id='revbutton' onclick='quiz.idx-=1;quiz.DQ0(true);quiz.idx+=1;'><span class='uni'>&nbsp;&lt;&lt;</span>&nbsp;Solution&nbsp;</button>&nbsp;&nbsp;" + a.q91d + "</div>");
        e.push("</div>");
        a.s81();
        a.bbhtm(e.join(""));
        a.jq1();
        c && setTimeout("quiz.v9()", a.pace)
    };
    a.KJ = function() {
        a.fz0();
        a.s81();
        a.H7(a.u6i);
        a.jq1();
        setTimeout("quiz.v9()",
            jA(a.pace >> 1, 1500))
    };
    a.y36 = function() {
        a.H7("<button id='g902' class='u82' onclick='quiz.bZ4()'>Finish</button>");
        y98 || n78("g902")
    };
    a.Ft = function(a) {
        for (var c = window.car, e = 0; a && e < c.length; e++)
            if (c[e].re.test(a)) return c[e];
        return null
    };
    a.v9 = function(b, c) {
        ocn(a.FV(), "normal");
        ocn(a.Vm(), "bo");
        a.zH7 = b;
        a.q91i = jH(a.q91i, a.idx);
        a.Dd7();
        if (a.pace && !a.q91q) {
            if (a.fbk.length) {
                a.jH6();
                return
            }
            if (a.ok) {
                a.KJ();
                return
            }
        }
        sdn(q9("cxm"));
        a.jq1();
        a.s81();
        a.o07();
        a.w8w() ? (a.bbhtm(""), setTimeout(a.q9i.bind(a, b, c), 0)) :
            Bj6() ? a.q9i(b, c) : a.g6i6()
    };
    a.w8w = function() {
        return (10 <= J5 || J511UP) && a.q9i.bind && !a.gradereview
    };
    a.q9i = function(b, c) {
        if (a.q91f() || a.u6m() && a.idx == a.q91i) !a.uE1 && a.jqd ? a.uE8() : a.g906 || a.g90a || !a.uE1 ? a.bZ4() : a.y36();
        else {
            a.r8v && a.idx && (a.aRd(), a.uE8());
            var e = a.iG8();
            a.g6fh();
            if (a.q91s = !b && !!a.s98().answered) a.view(0), a.qwl && a.qwl(!1);
            else if (a.qc = a.Ft(e)) {
                if (c) a.DQ0();
                else try {
                    a.qc.show(e), a.qc.g6g7 && a.g6g6()
                } catch (d) {
                    a.jqb("qc-show-" + e.substr(0, 80), d);
                    return
                }
                q9("quizinfo").innerHTML = a.qc.info || "";
                a.qwl &&
                    a.qwl(!0)
            } else a.qc = {}, a.jqb("NoQuizFoundFor_" + escape(!a.r78 || a.singleTestdef ? document.URL : a.xY3()) + "_" + g90(e))
        }
    };
    a.jqb = function(b, c) {
        Bj6() ? (a.q91t(b, c), a.fVw() ? a.k60() : a.g6i6(!0)) : a.g6i6(!1)
    };
    a.g6i6 = function(b) {
        var c = function(a, b) {
                return "<button class='g667' onclick='" + a + "'><img class='g668' src='/images/misc/" + b + "'></button>"
            },
            e = "<div class='g669 jfa'>" + (b ? "An error occurred. Please refresh or try again later." : "Your browser may not be compatible with ThatQuiz.") + "</div>";
        b && (e += c("window.location.reload(true)",
            "refresh40.png"));
        !g65s && !zV3 ? e += c('window.open("http://www.google.com/chrome/")', "chrome40.png") : !s9k && !zV3 && (e += c('window.open("http://www.mozilla.org/products/firefox/")', "ffox40.png"));
        a.H7(e);
        a.s81()
    };
    a.zD0 = function(a) {
        return !a.getAttribute("readonly") && !a.disabled
    };
    a.v5l = function(a) {
        return (Quizlib.v5g * qJ6(1E3) + (a ? 1 : 3)).toString(32)
    };
    a.v5k = function(a) {
        a = Df(a) ? a : a.getAttribute("value");
        return 1 == parseInt(a || "0", 32) % Quizlib.v5g
    };
    a.Fh5 = function() {
        var b = a.Vm(),
            c = a.v5k,
            e = function(a) {
                return !c(a)
            },
            d = filter(a.mJ4(b), function(a) {
                return ("radio" == a.type || "checkbox" == a.type) && c(a)
            });
        map(d, getf("checked=true"));
        d.length && map(filter(quiz.mJ4(b, "LABEL"), e), getf("style.color='#aaa'"))
    };
    a.s9m = function(a) {
        return "text" == a.type || "number" == a.type
    };
    a.Eb6 = function(b) {
        aY3(b) || (b = [b]);
        for (var c, e, d = filter(a.mJ4(), a.s9m);
            (c = d.pop()) && (e = b.pop());) c.value = o06(e, !0)
    };
    a.DQ0 = function(b) {
        a.g6fh();
        a.bbhtm("");
        a.qc.DQ0 ? a.qc.DQ0(a.qdef) : (a.qc.show(a.qdef), a.qc.ca && a.Eb6(a.qc.ca));
        a.u64(a.qc);
        if (b) {
            var b = a.Vm(),
                c = tofft(b),
                c = a.squeeze ? c + (offh(b) >> 1) + "px" : c + offh(b) - 25 + "px";
            g9a && (c = "10px");
            c = Gg("DIV", {
                top: c,
                left: toffl(b) + offw(b) - 100 + "px",
                position: "absolute",
                zIndex: "1000000"
            });
            c.innerHTML = a.q91d;
            b.appendChild(c);
            n78("q91e")
        }
    };
    a.jq3 = function(b, c) {
        var e = s97(b),
            d = zE2(b);
        13 == e && (d && d.value) && (c ? a[c]() : a.qc.v86());
        return 13 != e
    };
    a.n70 = function(b, c, e) {
        b || (b = "jgc");
        var d = a.qF(),
            f = window,
            f = filter([f.vmlGraphics, f.cnvGraphics, f.wzGraphics]),
            f = "wzGraphics" == b ? f.pop() : f.shift();
        a.g6dw();
        osw(d, jH(c || a.y71 || 0, Quizlib.g66g));
        osh(d, jH(e ||
            a.zJ5 || 0, Quizlib.g66e));
        if (!f && !a.g66d) throw a.g66d = o0(jsFile(QO()), !1), aev(a.g66d, "load", function() {
            window.quiz.v9()
        }), {
            name: "NoJsLib-Retrying",
            message: QO()
        };
        return f ? a.qwr = a[b] || (a[b] = new f("canvas")) : null
    };
    a.o07 = function() {
        var b;
        if (b = a.qwr) b.clear(), b.jT6();
        a.qF().innerHTML = ""
    };
    a.xY9 = function() {
        return a.n70("jgm", null, 200)
    };
    a.g6cv = function() {
        var b = jA(Math.floor(jH(0.9 * a.FV().offsetWidth, Quizlib.g66g)), Quizlib.g6cx);
        return a.n70(Quizlib.g6cy, b)
    };
    a.g6dw = function() {
        q8j(a.qF(), "g6d3")
    };
    a.s81 = function() {
        q8c(a.qF(),
            "g6d3")
    };
    a.g6ew = function(b) {
        a.tdf = a.g907 ? y96(b) : b
    };
    a.g6fh = function() {
        for (var b = a.iG8() || "", c = a.g6et() || 0, b = b.substring(0, 100).split(""), b = map(b, function(a) {
                return a.charCodeAt(0)
            }); b.length;) c += b.length * b.pop();
        g6fi(c)
    }
}
Quizlib.g6cy = "maxwcnv";
Quizlib.g66g = 300;
Quizlib.g66e = 200;
Quizlib.g6cx = 600;
Quizlib.v5g = 1021;
Quizlib.g90r = {
    l: "LEVEL",
    m: "TIMELIMIT",
    n: "TESTLENGTH",
    p: "PACE"
};
Quizlib.g6i9 = function() {
    var d = Quizlib.g90r,
        f = 0,
        a, b = "";
    for (a in d) {
        var c = q9(d[a]);
        c && l60(c.value) && (b += "-" + a + parseInt(c.value).toString(32))
    }
    b = b.replace(/-m2kc0|-na/g, "");
    for (d = 0; 32 > d; d++)
        if ((a = q9("j" + d)) && a.checked) f |= 1 << d;
    f && (b = "-j" + f.toString(32) + b);
    return b
};
Quizlib.zZ9 = function(d) {
    var f = Quizlib.g90r,
        a, b, c, e;
    for (b in f)
        if (a = jX5("[&-]" + b + "=?(\\w+)").exec(d))
            if (e = parseInt(a[1], 32), "p" == b && 86400 == e && (e = 864E6), q9(f[b]).value = e, "l" == b && (c = window.clib)) map(c.levels || [], function(a) {
                a[2] = a[0] == e ? "selected" : null
            });
    if (a = /[&-]j=?(\w+)/.exec(d)) {
        e = parseInt(a[1], 32);
        for (d = 0; 32 > d; d++)
            if (b = q9("j" + d)) b.checked = e & 1 << d
    }
};
Quizlib.prototype.g6en = function() {
    return !1
};
Quizlib.prototype.g6fc = function() {
    return !1
};
Quizlib.prototype.g6eq = function() {
    return []
};
Quizlib.prototype.g6h0 = function() {};
Quizlib.prototype.g6f0 = function() {};
Quizlib.prototype.g6hy = function() {};
Quizlib.prototype.qwa = function() {
    return this.y52
};

function AnswerHistory(d, f, a, b) {
    b = this.r7v = {
        n: b
    };
    d.length && (b.i = filter(map(d, this.g6f2)));
    f.length && (b.s = filter(map(f, this.g6f2)));
    a.length && (b.t = filter(map(a, this.g6f2)));
    this.g6hi(0, 0)
}
AnswerHistory.empty = function() {
    return new AnswerHistory([], [], [], -1)
};
AnswerHistory.prototype.r7v = {};
AnswerHistory.prototype.g6f2 = function(d) {
    var f = d.type && d.type.toLowerCase() || "";
    if (!d.id || "button" == f || "radio" == f && !d.checked) return null;
    f = {
        d: d.id
    };
    d.checked ? f.c = 1 : g6ey(d.selectedIndex) ? f.l = d.selectedIndex : d.value && (f.v = d.value);
    return f
};
AnswerHistory.prototype.g6ez = function(d, f) {
    var a = function(a, b) {
            var d = filter(b, function(b) {
                return b.id === a.d
            }).shift();
            d && (a.c && (d.checked = !0), a.v && (d.value = a.v), g6ey(a.l) && (d.selectedIndex = a.l), f && bZH(d, f))
        },
        b = this.r7v;
    b.i && map(b.i, a, {}, [d.getElementsByTagName("INPUT")]);
    b.s && map(b.s, a, {}, [d.getElementsByTagName("SELECT")]);
    b.t && map(b.t, a, {}, [d.getElementsByTagName("TEXTAREA")])
};
AnswerHistory.r7t = function(d) {
    var f = AnswerHistory.empty();
    g6ey(d.n) && 0 <= d.n && (f.r7v = d);
    return f
};
AnswerHistory.prototype.r7w = function() {
    return JSON.stringify(this.r7v)
};
AnswerHistory.prototype.g6hk = 317;
AnswerHistory.prototype.g6f5 = function(d) {
    this.g6hi(d, this.g6fa())
};
AnswerHistory.prototype.g6f6 = function(d) {
    this.g6hi(this.g6f9(), d)
};
AnswerHistory.prototype.g6hi = function(d, f) {
    var a = this.g6hk * w85(1, 103) + d,
        b = this.g6hk * w85(1, 103) + f;
    this.r7v.k = ((a << 16) + b).toString(32)
};
AnswerHistory.prototype.g6fa = function() {
    return (this.q90r() & 65535) % this.g6hk
};
AnswerHistory.prototype.g6f9 = function() {
    return (this.q90r() >> 16) % this.g6hk
};
AnswerHistory.prototype.q90r = function() {
    return parseInt(this.r7v.k, 32)
};
AnswerHistory.prototype.g6f4 = function(d) {
    this.r7v.e = d
};
AnswerHistory.prototype.g6f3 = function() {
    return this.r7v.e
};
AnswerHistory.prototype.r7p = function() {
    return this.r7v.t || []
};
AnswerHistory.prototype.r7r = function() {
    return this.r7v.i || []
};
AnswerHistory.prototype.r7q = function() {
    return this.r7v.s || []
};
AnswerHistory.prototype.r7u = function() {
    var d = this.r7v.n;
    return g6ey(d) ? d : -1
};
AnswerHistory.prototype.g6hq = function() {
    return this.aid
};
AnswerHistory.prototype.g6hr = function(d) {
    this.aid = d
};

function TQHistory() {
    this.qdef = null;
    this.points = 0;
    this.answered = !1;
    this.incorrects = [];
    this.ah = AnswerHistory.empty();
    this.recorded = this.recording = 0
}
TQHistory.prototype.g6f3 = function() {
    return this.ah.g6f3()
};
TQHistory.prototype.g6f4 = function(d) {
    return this.ah.g6f4(d)
};
TQHistory.prototype.g6f9 = function() {
    return this.ah.g6f9()
};
TQHistory.prototype.g6fa = function() {
    return this.ah.g6fa()
};
TQHistory.prototype.g6f5 = function(d) {
    return this.ah.g6f5(d)
};
TQHistory.prototype.g6f6 = function(d) {
    return this.ah.g6f6(d)
};
TQHistory.prototype.q90d = function(d) {
    return map(this.incorrects, function(f) {
        return f.g90o(d)
    })
};

function g90g(d, f, a, b, c) {
    this.g90h = d;
    this.g90i = f;
    this.g90j = a;
    this.g90k = b;
    this.g90l = c
}
g90g.prototype.g90o = function(d) {
    var d = d ? this.g90h + ". " : "",
        f = String(this.g90i).replace(/\~/g, htmcc),
        a = " (" + String(this.g90j).replace(/[\(\)\~]/g, htmcc) + ")";
    return d + f + a
};
g90g.prototype.g90n = function() {
    return g90g.g90m(this.g90k, this.g90o(!1))
};
g90g.g90m = function(d, f) {
    return "<a href='javascript:;'><span onmousedown='quiz.uD(" + d + ")'>" + f + "</span></a>"
};
g90g.sort = function(d, f) {
    return parseInt(d.g90h) - parseInt(f.g90h) || fZP(d.g90h, f.g90h)
};
aWy(["#bz1s, #bz1x {margin-left:auto;margin-right:auto;}", ".Z3 {margin:5px auto;width:120px}", "#g902 {font-size:20px;min-width:96px;}", "#v5b:disabled .v5a {opacity:0.5;filter:alpha(opacity=0.5)}", ".v5a {background:#444;width:3px;height:10.5px;margin:auto;}", ".v5c {height:30px;padding:1px;}", ".bz1u {padding-left:0}", ".bz1t {padding-right:0}", ".o96 {font:bold 15px Arial;height:28px;width:100%;padding:0 1px;vertical-align:middle}", s9k && Wd ? ".o96 {line-height:28px}" : "", ".nbhid .o96 {display:none;}", "#fJK {display:block;margin: 2px auto 10px;padding: 1px 5px;}",
    "#fJK.hidden {visibility:hidden}", "#v5d {width:120px;overflow-x:hidden;padding:0;line-height:28px;box-sizing:content-box}", "#pbar {height:11px;font-size:0;padding:1px;vertical-align:top;background:#f5f7f7;text-align:left;box-sizing:border-box;}", ".g6e4 {width:46px;height:46px;background: url(" + cdns("/images/misc/gcheck.gif") + ")}", ".g6e3 {font-size:46px;color:#6F7F7C;}", ".fs, .fsl {height:3px;border:1px solid #000;font-size:0;background:#000}", ".fs {width:62px}", ".fsl {width:94px}", ".v8j {width:45px;margin:auto;}",
    ".v8k {position:absolute;margin:-65px 0;}", ".g669 {float:left;width:60%;font-size:120%;line-height:135%}", ".g667 {margin-right:15px}", ".g668 {margin:5px;width:40px;height:40px}", ".q911 {font-size:65%;}", ".g6gi {font-size:55%;}"
]);