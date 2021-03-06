/*!
 * jQuery Form Plugin
 * version: 2.80 (25-MAY-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(b) {
    b.fn.ajaxSubmit = function(t) {
        if (!this.length) {
            a("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        if (typeof t == "function") {
            t = {success:t}
        }
        var h = this.attr("action");
        var d = (typeof h === "string") ? b.trim(h) : "";
        d = d || window.location.href || "";
        if (d) {
            d = (d.match(/^([^#]+)/) || [])[1]
        }
        t = b.extend(true, {url:d,success:b.ajaxSettings.success,type:this[0].getAttribute("method") || "GET",iframeSrc:/^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, t);
        var u = {};
        this.trigger("form-pre-serialize", [this,t,u]);
        if (u.veto) {
            a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (t.beforeSerialize && t.beforeSerialize(this, t) === false) {
            a("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var f,p,m = this.formToArray(t.semantic);
        if (t.data) {
            t.extraData = t.data;
            for (f in t.data) {
                if (t.data[f] instanceof Array) {
                    for (var i in t.data[f]) {
                        m.push({name:f,value:t.data[f][i]})
                    }
                } else {
                    p = t.data[f];
                    p = b.isFunction(p) ? p() : p;
                    m.push({name:f,value:p})
                }
            }
        }
        if (t.beforeSubmit && t.beforeSubmit(m, this, t) === false) {
            a("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [m,this,t,u]);
        if (u.veto) {
            a("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var c = b.param(m);
        if (t.type.toUpperCase() == "GET") {
            t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + c;
            t.data = null
        } else {
            t.data = c
        }
        var s = this,l = [];
        if (t.resetForm) {
            l.push(function() {
                s.resetForm()
            })
        }
        if (t.clearForm) {
            l.push(function() {
                s.clearForm()
            })
        }
        if (!t.dataType && t.target) {
            var r = t.success || function() {
            };
            l.push(function(n) {
                var k = t.replaceTarget ? "replaceWith" : "html";
                b(t.target)[k](n).each(r, arguments)
            })
        } else {
            if (t.success) {
                l.push(t.success)
            }
        }
        t.success = function(w, n, x) {
            var v = t.context || t;
            for (var q = 0,k = l.length; q < k; q++) {
                l[q].apply(v, [w,n,x || s,s])
            }
        };
        var g = b("input:file", this).length > 0;
        var e = "multipart/form-data";
        var j = (s.attr("enctype") == e || s.attr("encoding") == e);
        if (t.iframe !== false && (g || t.iframe || j)) {
            if (t.closeKeepAlive) {
                b.get(t.closeKeepAlive, function() {
                    o(m)
                })
            } else {
                o(m)
            }
        } else {
            b.ajax(t)
        }
        this.trigger("form-submit-notify", [this,t]);
        return this;
        function o(M) {
            var v = s[0],I,C,K,F,x,A,y,z,G,J,B;
            if (M) {
                for (I = 0; I < M.length; I++) {
                    b(v[M[I].name]).attr("disabled", false)
                }
            }
            if (b(":input[name=submit],:input[id=submit]", v).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                return
            }
            C = b.extend(true, {}, b.ajaxSettings, t);
            C.context = C.context || C;
            F = "jqFormIO" + (new Date().getTime());
            if (C.iframeTarget) {
                x = b(C.iframeTarget);
                G = x.attr("name");
                if (G == null) {
                    x.attr("name", F)
                } else {
                    F = G
                }
            } else {
                x = b('<iframe name="' + F + '" src="' + C.iframeSrc + '" />');
                x.css({position:"absolute",top:"-1000px",left:"-1000px"})
            }
            A = x[0];
            y = {aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function() {
            },getResponseHeader:function() {
            },setRequestHeader:function() {
            },abort:function(n) {
                var P = (n === "timeout" ? "timeout" : "aborted");
                a("aborting upload... " + P);
                this.aborted = 1;
                x.attr("src", C.iframeSrc);
                y.error = P;
                C.error && C.error.call(C.context, y, P, P);
                K && b.event.trigger("ajaxError", [y,C,P]);
                C.complete && C.complete.call(C.context, y, P)
            }};
            K = C.global;
            if (K && !b.active++) {
                b.event.trigger("ajaxStart")
            }
            if (K) {
                b.event.trigger("ajaxSend", [y,C])
            }
            if (C.beforeSend && C.beforeSend.call(C.context, y, C) === false) {
                if (C.global) {
                    b.active--
                }
                return
            }
            if (y.aborted) {
                return
            }
            z = v.clk;
            if (z) {
                G = z.name;
                if (G && !z.disabled) {
                    C.extraData = C.extraData || {};
                    C.extraData[G] = z.value;
                    if (z.type == "image") {
                        C.extraData[G + ".x"] = v.clk_x;
                        C.extraData[G + ".y"] = v.clk_y
                    }
                }
            }
            function H() {
                var R = s.attr("target"),P = s.attr("action");
                v.setAttribute("target", F);
                if (v.getAttribute("method") != "POST") {
                    v.setAttribute("method", "POST")
                }
                if (v.getAttribute("action") != C.url) {
                    v.setAttribute("action", C.url)
                }
                if (!C.skipEncodingOverride) {
                    s.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})
                }
                if (C.timeout) {
                    B = setTimeout(function() {
                        J = true;
                        E(true)
                    }, C.timeout)
                }
                var Q = [];
                try {
                    if (C.extraData) {
                        for (var S in C.extraData) {
                            Q.push(b('<input type="hidden" name="' + S + '" value="' + C.extraData[S] + '" />').appendTo(v)[0])
                        }
                    }
                    if (!C.iframeTarget) {
                        x.appendTo("body");
                        A.attachEvent ? A.attachEvent("onload", E) : A.addEventListener("load", E, false)
                    }
                    v.submit()
                } finally {
                    v.setAttribute("action", P);
                    if (R) {
                        v.setAttribute("target", R)
                    } else {
                        s.removeAttr("target")
                    }
                    b(Q).remove()
                }
            }

            if (C.forceSync) {
                H()
            } else {
                setTimeout(H, 10)
            }
            var N,O,L = 50,w;

            function E(T) {
                if (y.aborted || w) {
                    return
                }
                if (T === true && y) {
                    y.abort("timeout");
                    return
                }
                var Y = A.contentWindow ? A.contentWindow.document : A.contentDocument ? A.contentDocument : A.document;
                if (!Y || Y.location.href == C.iframeSrc) {
                    if (!J) {
                        return
                    }
                }
                A.detachEvent ? A.detachEvent("onload", E) : A.removeEventListener("load", E, false);
                var R = "success",V;
                try {
                    if (J) {
                        throw"timeout"
                    }
                    var Q = C.dataType == "xml" || Y.XMLDocument || b.isXMLDoc(Y);
                    a("isXml=" + Q);
                    if (!Q && window.opera && (Y.body == null || Y.body.innerHTML == "")) {
                        if (--L) {
                            a("requeing onLoad callback, DOM not available");
                            setTimeout(E, 250);
                            return
                        }
                    }
                    var W = Y.body ? Y.body : Y.documentElement;
                    y.responseText = W ? W.innerHTML : null;
                    y.responseXML = Y.XMLDocument ? Y.XMLDocument : Y;
                    if (Q) {
                        C.dataType = "xml"
                    }
                    y.getResponseHeader = function(aa) {
                        var Z = {"content-type":C.dataType};
                        return Z[aa]
                    };
                    if (W) {
                        y.status = Number(W.getAttribute("status")) || y.status;
                        y.statusText = W.getAttribute("statusText") || y.statusText
                    }
                    var n = C.dataType || "";
                    var U = /(json|script|text)/.test(n.toLowerCase());
                    if (U || C.textarea) {
                        var S = Y.getElementsByTagName("textarea")[0];
                        if (S) {
                            y.responseText = S.value;
                            y.status = Number(S.getAttribute("status")) || y.status;
                            y.statusText = S.getAttribute("statusText") || y.statusText
                        } else {
                            if (U) {
                                var P = Y.getElementsByTagName("pre")[0];
                                var X = Y.getElementsByTagName("body")[0];
                                if (P) {
                                    y.responseText = P.textContent ? P.textContent : P.innerHTML
                                } else {
                                    if (X) {
                                        y.responseText = X.innerHTML
                                    }
                                }
                            }
                        }
                    } else {
                        if (C.dataType == "xml" && !y.responseXML && y.responseText != null) {
                            y.responseXML = D(y.responseText)
                        }
                    }
                    try {
                        N = k(y, C.dataType, C)
                    } catch(T) {
                        R = "parsererror";
                        y.error = V = (T || R)
                    }
                } catch(T) {
                    a("error caught", T);
                    R = "error";
                    y.error = V = (T || R)
                }
                if (y.aborted) {
                    a("upload aborted");
                    R = null
                }
                if (y.status) {
                    R = (y.status >= 200 && y.status < 300 || y.status === 304) ? "success" : "error"
                }
                if (R === "success") {
                    C.success && C.success.call(C.context, N, "success", y);
                    K && b.event.trigger("ajaxSuccess", [y,C])
                } else {
                    if (R) {
                        if (V == undefined) {
                            V = y.statusText
                        }
                        C.error && C.error.call(C.context, y, R, V);
                        K && b.event.trigger("ajaxError", [y,C,V])
                    }
                }
                K && b.event.trigger("ajaxComplete", [y,C]);
                if (K && !--b.active) {
                    b.event.trigger("ajaxStop")
                }
                C.complete && C.complete.call(C.context, y, R);
                w = true;
                if (C.timeout) {
                    clearTimeout(B)
                }
                setTimeout(function() {
                    if (!C.iframeTarget) {
                        x.remove()
                    }
                    y.responseXML = null
                }, 100)
            }

            var D = b.parseXML || function(n, P) {
                if (window.ActiveXObject) {
                    P = new ActiveXObject("Microsoft.XMLDOM");
                    P.async = "false";
                    P.loadXML(n)
                } else {
                    P = (new DOMParser()).parseFromString(n, "text/xml")
                }
                return(P && P.documentElement && P.documentElement.nodeName != "parsererror") ? P : null
            };
            var q = b.parseJSON || function(n) {
                return window["eval"]("(" + n + ")")
            };
            var k = function(T, R, Q) {
                var P = T.getResponseHeader("content-type") || "",n = R === "xml" || !R && P.indexOf("xml") >= 0,S = n ? T.responseXML : T.responseText;
                if (n && S.documentElement.nodeName === "parsererror") {
                    b.error && b.error("parsererror")
                }
                if (Q && Q.dataFilter) {
                    S = Q.dataFilter(S, R)
                }
                if (typeof S === "string") {
                    if (R === "json" || !R && P.indexOf("json") >= 0) {
                        S = q(S)
                    } else {
                        if (R === "script" || !R && P.indexOf("javascript") >= 0) {
                            b.globalEval(S)
                        }
                    }
                }
                return S
            }
        }
    };
    b.fn.ajaxForm = function(c) {
        if (this.length === 0) {
            var d = {s:this.selector,c:this.context};
            if (!b.isReady && d.s) {
                a("DOM not ready, queuing ajaxForm");
                b(function() {
                    b(d.s, d.c).ajaxForm(c)
                });
                return this
            }
            a("terminating; zero elements found by selector" + (b.isReady ? "" : " (DOM not ready)"));
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin",
            function(f) {
                if (!f.isDefaultPrevented()) {
                    f.preventDefault();
                    b(this).ajaxSubmit(c)
                }
            }).bind("click.form-plugin", function(j) {
            var i = j.target;
            var g = b(i);
            if (!(g.is(":submit,input:image"))) {
                var f = g.closest(":submit");
                if (f.length == 0) {
                    return
                }
                i = f[0]
            }
            var h = this;
            h.clk = i;
            if (i.type == "image") {
                if (j.offsetX != undefined) {
                    h.clk_x = j.offsetX;
                    h.clk_y = j.offsetY
                } else {
                    if (typeof b.fn.offset == "function") {
                        var k = g.offset();
                        h.clk_x = j.pageX - k.left;
                        h.clk_y = j.pageY - k.top
                    } else {
                        h.clk_x = j.pageX - i.offsetLeft;
                        h.clk_y = j.pageY - i.offsetTop
                    }
                }
            }
            setTimeout(function() {
                h.clk = h.clk_x = h.clk_y = null
            }, 100)
        })
    };
    b.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    b.fn.formToArray = function(q) {
        var p = [];
        if (this.length === 0) {
            return p
        }
        var d = this[0];
        var g = q ? d.getElementsByTagName("*") : d.elements;
        if (!g) {
            return p
        }
        var k,h,f,r,e,m,c;
        for (k = 0,m = g.length; k < m; k++) {
            e = g[k];
            f = e.name;
            if (!f) {
                continue
            }
            if (q && d.clk && e.type == "image") {
                if (!e.disabled && d.clk == e) {
                    p.push({name:f,value:b(e).val()});
                    p.push({name:f + ".x",value:d.clk_x}, {name:f + ".y",value:d.clk_y})
                }
                continue
            }
            r = b.fieldValue(e, true);
            if (r && r.constructor == Array) {
                for (h = 0,c = r.length; h < c; h++) {
                    p.push({name:f,value:r[h]})
                }
            } else {
                if (r !== null && typeof r != "undefined") {
                    p.push({name:f,value:r})
                }
            }
        }
        if (!q && d.clk) {
            var l = b(d.clk),o = l[0];
            f = o.name;
            if (f && !o.disabled && o.type == "image") {
                p.push({name:f,value:l.val()});
                p.push({name:f + ".x",value:d.clk_x}, {name:f + ".y",value:d.clk_y})
            }
        }
        return p
    };
    b.fn.formSerialize = function(c) {
        return b.param(this.formToArray(c))
    };
    b.fn.fieldSerialize = function(d) {
        var c = [];
        this.each(function() {
            var h = this.name;
            if (!h) {
                return
            }
            var f = b.fieldValue(this, d);
            if (f && f.constructor == Array) {
                for (var g = 0,e = f.length; g < e; g++) {
                    c.push({name:h,value:f[g]})
                }
            } else {
                if (f !== null && typeof f != "undefined") {
                    c.push({name:this.name,value:f})
                }
            }
        });
        return b.param(c)
    };
    b.fn.fieldValue = function(h) {
        for (var g = [],e = 0,c = this.length; e < c; e++) {
            var f = this[e];
            var d = b.fieldValue(f, h);
            if (d === null || typeof d == "undefined" || (d.constructor == Array && !d.length)) {
                continue
            }
            d.constructor == Array ? b.merge(g, d) : g.push(d)
        }
        return g
    };
    b.fieldValue = function(c, j) {
        var e = c.name,p = c.type,q = c.tagName.toLowerCase();
        if (j === undefined) {
            j = true
        }
        if (j && (!e || c.disabled || p == "reset" || p == "button" || (p == "checkbox" || p == "radio") && !c.checked || (p == "submit" || p == "image") && c.form && c.form.clk != c || q == "select" && c.selectedIndex == -1)) {
            return null
        }
        if (q == "select") {
            var k = c.selectedIndex;
            if (k < 0) {
                return null
            }
            var m = [],d = c.options;
            var g = (p == "select-one");
            var l = (g ? k + 1 : d.length);
            for (var f = (g ? k : 0); f < l; f++) {
                var h = d[f];
                if (h.selected) {
                    var o = h.value;
                    if (!o) {
                        o = (h.attributes && h.attributes.value && !(h.attributes.value.specified)) ? h.text : h.value
                    }
                    if (g) {
                        return o
                    }
                    m.push(o)
                }
            }
            return m
        }
        return b(c).val()
    };
    b.fn.clearForm = function() {
        return this.each(function() {
            b("input,select,textarea", this).clearFields()
        })
    };
    b.fn.clearFields = b.fn.clearInputs = function() {
        return this.each(function() {
            var d = this.type,c = this.tagName.toLowerCase();
            if (d == "text" || d == "password" || c == "textarea") {
                this.value = ""
            } else {
                if (d == "checkbox" || d == "radio") {
                    this.checked = false
                } else {
                    if (c == "select") {
                        this.selectedIndex = -1
                    }
                }
            }
        })
    };
    b.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    b.fn.enable = function(c) {
        if (c === undefined) {
            c = true
        }
        return this.each(function() {
            this.disabled = !c
        })
    };
    b.fn.selected = function(c) {
        if (c === undefined) {
            c = true
        }
        return this.each(function() {
            var d = this.type;
            if (d == "checkbox" || d == "radio") {
                this.checked = c
            } else {
                if (this.tagName.toLowerCase() == "option") {
                    var e = b(this).parent("select");
                    if (c && e[0] && e[0].type == "select-one") {
                        e.find("option").selected(false)
                    }
                    this.selected = c
                }
            }
        })
    };
    function a() {
        var c = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        if (window.console && window.console.log) {
            window.console.log(c)
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(c)
            }
        }
    }
})(jQuery);