const hr = "https://api.moguding.net:9000", pr = "/session/user/v3/login", vr = "/usercenter/user/v1/logout", mr = "/practice/plan/v3/getPlanByStu", Er = "/practice/plan/v2/info", yr = "/attendence/clock/v2/save", Rr = "23DbtQHR2UMbH6mJ", Je = "3478cbbc33f84bd00d75d7dfa69e0daa";
var L = {
  ADNROID: "android",
  IOS: "ios"
};
function br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var We = { exports: {} }, le = { exports: {} }, Ve = function(r, t) {
  return function() {
    for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
      n[a] = arguments[a];
    return r.apply(t, n);
  };
}, Or = Ve, ce = Object.prototype.toString, de = function(e) {
  return function(r) {
    var t = ce.call(r);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function w(e) {
  return e = e.toLowerCase(), function(t) {
    return de(t) === e;
  };
}
function he(e) {
  return Array.isArray(e);
}
function $(e) {
  return typeof e > "u";
}
function Ar(e) {
  return e !== null && !$(e) && e.constructor !== null && !$(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Ke = w("ArrayBuffer");
function wr(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Ke(e.buffer), r;
}
function Sr(e) {
  return typeof e == "string";
}
function Cr(e) {
  return typeof e == "number";
}
function Xe(e) {
  return e !== null && typeof e == "object";
}
function I(e) {
  if (de(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var xr = w("Date"), Tr = w("File"), Pr = w("Blob"), Nr = w("FileList");
function pe(e) {
  return ce.call(e) === "[object Function]";
}
function Dr(e) {
  return Xe(e) && pe(e.pipe);
}
function Ur(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ce.call(e) === r || pe(e.toString) && e.toString() === r);
}
var gr = w("URLSearchParams");
function _r(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Br() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ve(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), he(e))
      for (var t = 0, i = e.length; t < i; t++)
        r.call(null, e[t], t, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && r.call(null, e[n], n, e);
}
function fe() {
  var e = {};
  function r(n, a) {
    I(e[a]) && I(n) ? e[a] = fe(e[a], n) : I(n) ? e[a] = fe({}, n) : he(n) ? e[a] = n.slice() : e[a] = n;
  }
  for (var t = 0, i = arguments.length; t < i; t++)
    ve(arguments[t], r);
  return e;
}
function Lr(e, r, t) {
  return ve(r, function(n, a) {
    t && typeof n == "function" ? e[a] = Or(n, t) : e[a] = n;
  }), e;
}
function qr(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Ir(e, r, t, i) {
  e.prototype = Object.create(r.prototype, i), e.prototype.constructor = e, t && Object.assign(e.prototype, t);
}
function Fr(e, r, t) {
  var i, n, a, s = {};
  r = r || {};
  do {
    for (i = Object.getOwnPropertyNames(e), n = i.length; n-- > 0; )
      a = i[n], s[a] || (r[a] = e[a], s[a] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}
function $r(e, r, t) {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  var i = e.indexOf(r, t);
  return i !== -1 && i === t;
}
function jr(e) {
  if (!e)
    return null;
  var r = e.length;
  if ($(r))
    return null;
  for (var t = new Array(r); r-- > 0; )
    t[r] = e[r];
  return t;
}
var kr = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), v = {
  isArray: he,
  isArrayBuffer: Ke,
  isBuffer: Ar,
  isFormData: Ur,
  isArrayBufferView: wr,
  isString: Sr,
  isNumber: Cr,
  isObject: Xe,
  isPlainObject: I,
  isUndefined: $,
  isDate: xr,
  isFile: Tr,
  isBlob: Pr,
  isFunction: pe,
  isStream: Dr,
  isURLSearchParams: gr,
  isStandardBrowserEnv: Br,
  forEach: ve,
  merge: fe,
  extend: Lr,
  trim: _r,
  stripBOM: qr,
  inherits: Ir,
  toFlatObject: Fr,
  kindOf: de,
  kindOfTest: w,
  endsWith: $r,
  toArray: jr,
  isTypedArray: kr,
  isFileList: Nr
}, T = v;
function Ae(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Qe = function(r, t, i) {
  if (!t)
    return r;
  var n;
  if (i)
    n = i(t);
  else if (T.isURLSearchParams(t))
    n = t.toString();
  else {
    var a = [];
    T.forEach(t, function(f, d) {
      f === null || typeof f > "u" || (T.isArray(f) ? d = d + "[]" : f = [f], T.forEach(f, function(h) {
        T.isDate(h) ? h = h.toISOString() : T.isObject(h) && (h = JSON.stringify(h)), a.push(Ae(d) + "=" + Ae(h));
      }));
    }), n = a.join("&");
  }
  if (n) {
    var s = r.indexOf("#");
    s !== -1 && (r = r.slice(0, s)), r += (r.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return r;
}, Hr = v;
function j() {
  this.handlers = [];
}
j.prototype.use = function(r, t, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: t,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
j.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
j.prototype.forEach = function(r) {
  Hr.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var Mr = j, zr = v, Jr = function(r, t) {
  zr.forEach(r, function(n, a) {
    a !== t && a.toUpperCase() === t.toUpperCase() && (r[t] = n, delete r[a]);
  });
}, Ge = v;
function N(e, r, t, i, n) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), i && (this.request = i), n && (this.response = n);
}
Ge.inherits(N, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Ye = N.prototype, Ze = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(e) {
  Ze[e] = { value: e };
});
Object.defineProperties(N, Ze);
Object.defineProperty(Ye, "isAxiosError", { value: !0 });
N.from = function(e, r, t, i, n, a) {
  var s = Object.create(Ye);
  return Ge.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }), N.call(s, e.message, r, t, i, n), s.name = e.name, a && Object.assign(s, a), s;
};
var U = N, er = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, b = v;
function Wr(e, r) {
  r = r || new FormData();
  var t = [];
  function i(a) {
    return a === null ? "" : b.isDate(a) ? a.toISOString() : b.isArrayBuffer(a) || b.isTypedArray(a) ? typeof Blob == "function" ? new Blob([a]) : Buffer.from(a) : a;
  }
  function n(a, s) {
    if (b.isPlainObject(a) || b.isArray(a)) {
      if (t.indexOf(a) !== -1)
        throw Error("Circular reference detected in " + s);
      t.push(a), b.forEach(a, function(f, d) {
        if (!b.isUndefined(f)) {
          var c = s ? s + "." + d : d, h;
          if (f && !s && typeof f == "object") {
            if (b.endsWith(d, "{}"))
              f = JSON.stringify(f);
            else if (b.endsWith(d, "[]") && (h = b.toArray(f))) {
              h.forEach(function(u) {
                !b.isUndefined(u) && r.append(c, i(u));
              });
              return;
            }
          }
          n(f, c);
        }
      }), t.pop();
    } else
      r.append(s, i(a));
  }
  return n(e), r;
}
var rr = Wr, V, we;
function Vr() {
  if (we)
    return V;
  we = 1;
  var e = U;
  return V = function(t, i, n) {
    var a = n.config.validateStatus;
    !n.status || !a || a(n.status) ? t(n) : i(new e(
      "Request failed with status code " + n.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    ));
  }, V;
}
var K, Se;
function Kr() {
  if (Se)
    return K;
  Se = 1;
  var e = v;
  return K = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(i, n, a, s, o, f) {
        var d = [];
        d.push(i + "=" + encodeURIComponent(n)), e.isNumber(a) && d.push("expires=" + new Date(a).toGMTString()), e.isString(s) && d.push("path=" + s), e.isString(o) && d.push("domain=" + o), f === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(i) {
        var n = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(i) {
        this.write(i, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), K;
}
var Xr = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, Qr = function(r, t) {
  return t ? r.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : r;
}, Gr = Xr, Yr = Qr, tr = function(r, t) {
  return r && !Gr(t) ? Yr(r, t) : t;
}, X, Ce;
function Zr() {
  if (Ce)
    return X;
  Ce = 1;
  var e = v, r = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return X = function(i) {
    var n = {}, a, s, o;
    return i && e.forEach(i.split(`
`), function(d) {
      if (o = d.indexOf(":"), a = e.trim(d.substr(0, o)).toLowerCase(), s = e.trim(d.substr(o + 1)), a) {
        if (n[a] && r.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? n[a] = (n[a] ? n[a] : []).concat([s]) : n[a] = n[a] ? n[a] + ", " + s : s;
      }
    }), n;
  }, X;
}
var Q, xe;
function et() {
  if (xe)
    return Q;
  xe = 1;
  var e = v;
  return Q = e.isStandardBrowserEnv() ? function() {
    var t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), n;
    function a(s) {
      var o = s;
      return t && (i.setAttribute("href", o), o = i.href), i.setAttribute("href", o), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return n = a(window.location.href), function(o) {
      var f = e.isString(o) ? a(o) : o;
      return f.protocol === n.protocol && f.host === n.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Q;
}
var G, Te;
function k() {
  if (Te)
    return G;
  Te = 1;
  var e = U, r = v;
  function t(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(t, e, {
    __CANCEL__: !0
  }), G = t, G;
}
var Y, Pe;
function rt() {
  return Pe || (Pe = 1, Y = function(r) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return t && t[1] || "";
  }), Y;
}
var Z, Ne;
function De() {
  if (Ne)
    return Z;
  Ne = 1;
  var e = v, r = Vr(), t = Kr(), i = Qe, n = tr, a = Zr(), s = et(), o = er, f = U, d = k(), c = rt();
  return Z = function(u) {
    return new Promise(function(fr, S) {
      var g = u.data, _ = u.headers, B = u.responseType, C;
      function Re() {
        u.cancelToken && u.cancelToken.unsubscribe(C), u.signal && u.signal.removeEventListener("abort", C);
      }
      e.isFormData(g) && e.isStandardBrowserEnv() && delete _["Content-Type"];
      var l = new XMLHttpRequest();
      if (u.auth) {
        var lr = u.auth.username || "", cr = u.auth.password ? unescape(encodeURIComponent(u.auth.password)) : "";
        _.Authorization = "Basic " + btoa(lr + ":" + cr);
      }
      var z = n(u.baseURL, u.url);
      l.open(u.method.toUpperCase(), i(z, u.params, u.paramsSerializer), !0), l.timeout = u.timeout;
      function be() {
        if (!!l) {
          var R = "getAllResponseHeaders" in l ? a(l.getAllResponseHeaders()) : null, x = !B || B === "text" || B === "json" ? l.responseText : l.response, A = {
            data: x,
            status: l.status,
            statusText: l.statusText,
            headers: R,
            config: u,
            request: l
          };
          r(function(W) {
            fr(W), Re();
          }, function(W) {
            S(W), Re();
          }, A), l = null;
        }
      }
      if ("onloadend" in l ? l.onloadend = be : l.onreadystatechange = function() {
        !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(be);
      }, l.onabort = function() {
        !l || (S(new f("Request aborted", f.ECONNABORTED, u, l)), l = null);
      }, l.onerror = function() {
        S(new f("Network Error", f.ERR_NETWORK, u, l, l)), l = null;
      }, l.ontimeout = function() {
        var x = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded", A = u.transitional || o;
        u.timeoutErrorMessage && (x = u.timeoutErrorMessage), S(new f(
          x,
          A.clarifyTimeoutError ? f.ETIMEDOUT : f.ECONNABORTED,
          u,
          l
        )), l = null;
      }, e.isStandardBrowserEnv()) {
        var Oe = (u.withCredentials || s(z)) && u.xsrfCookieName ? t.read(u.xsrfCookieName) : void 0;
        Oe && (_[u.xsrfHeaderName] = Oe);
      }
      "setRequestHeader" in l && e.forEach(_, function(x, A) {
        typeof g > "u" && A.toLowerCase() === "content-type" ? delete _[A] : l.setRequestHeader(A, x);
      }), e.isUndefined(u.withCredentials) || (l.withCredentials = !!u.withCredentials), B && B !== "json" && (l.responseType = u.responseType), typeof u.onDownloadProgress == "function" && l.addEventListener("progress", u.onDownloadProgress), typeof u.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", u.onUploadProgress), (u.cancelToken || u.signal) && (C = function(R) {
        !l || (S(!R || R && R.type ? new d() : R), l.abort(), l = null);
      }, u.cancelToken && u.cancelToken.subscribe(C), u.signal && (u.signal.aborted ? C() : u.signal.addEventListener("abort", C))), g || (g = null);
      var J = c(z);
      if (J && ["http", "https", "file"].indexOf(J) === -1) {
        S(new f("Unsupported protocol " + J + ":", f.ERR_BAD_REQUEST, u));
        return;
      }
      l.send(g);
    });
  }, Z;
}
var ee, Ue;
function tt() {
  return Ue || (Ue = 1, ee = null), ee;
}
var p = v, ge = Jr, _e = U, nt = er, it = rr, at = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Be(e, r) {
  !p.isUndefined(e) && p.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function st() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = De()), e;
}
function ot(e, r, t) {
  if (p.isString(e))
    try {
      return (r || JSON.parse)(e), p.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (t || JSON.stringify)(e);
}
var H = {
  transitional: nt,
  adapter: st(),
  transformRequest: [function(r, t) {
    if (ge(t, "Accept"), ge(t, "Content-Type"), p.isFormData(r) || p.isArrayBuffer(r) || p.isBuffer(r) || p.isStream(r) || p.isFile(r) || p.isBlob(r))
      return r;
    if (p.isArrayBufferView(r))
      return r.buffer;
    if (p.isURLSearchParams(r))
      return Be(t, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var i = p.isObject(r), n = t && t["Content-Type"], a;
    if ((a = p.isFileList(r)) || i && n === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return it(a ? { "files[]": r } : r, s && new s());
    } else if (i || n === "application/json")
      return Be(t, "application/json"), ot(r);
    return r;
  }],
  transformResponse: [function(r) {
    var t = this.transitional || H.transitional, i = t && t.silentJSONParsing, n = t && t.forcedJSONParsing, a = !i && this.responseType === "json";
    if (a || n && p.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? _e.from(s, _e.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: tt()
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
p.forEach(["delete", "get", "head"], function(r) {
  H.headers[r] = {};
});
p.forEach(["post", "put", "patch"], function(r) {
  H.headers[r] = p.merge(at);
});
var me = H, ut = v, ft = me, lt = function(r, t, i) {
  var n = this || ft;
  return ut.forEach(i, function(s) {
    r = s.call(n, r, t);
  }), r;
}, re, Le;
function nr() {
  return Le || (Le = 1, re = function(r) {
    return !!(r && r.__CANCEL__);
  }), re;
}
var qe = v, te = lt, ct = nr(), dt = me, ht = k();
function ne(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ht();
}
var pt = function(r) {
  ne(r), r.headers = r.headers || {}, r.data = te.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = qe.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), qe.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(n) {
      delete r.headers[n];
    }
  );
  var t = r.adapter || dt.adapter;
  return t(r).then(function(n) {
    return ne(r), n.data = te.call(
      r,
      n.data,
      n.headers,
      r.transformResponse
    ), n;
  }, function(n) {
    return ct(n) || (ne(r), n && n.response && (n.response.data = te.call(
      r,
      n.response.data,
      n.response.headers,
      r.transformResponse
    ))), Promise.reject(n);
  });
}, E = v, ir = function(r, t) {
  t = t || {};
  var i = {};
  function n(c, h) {
    return E.isPlainObject(c) && E.isPlainObject(h) ? E.merge(c, h) : E.isPlainObject(h) ? E.merge({}, h) : E.isArray(h) ? h.slice() : h;
  }
  function a(c) {
    if (E.isUndefined(t[c])) {
      if (!E.isUndefined(r[c]))
        return n(void 0, r[c]);
    } else
      return n(r[c], t[c]);
  }
  function s(c) {
    if (!E.isUndefined(t[c]))
      return n(void 0, t[c]);
  }
  function o(c) {
    if (E.isUndefined(t[c])) {
      if (!E.isUndefined(r[c]))
        return n(void 0, r[c]);
    } else
      return n(void 0, t[c]);
  }
  function f(c) {
    if (c in t)
      return n(r[c], t[c]);
    if (c in r)
      return n(void 0, r[c]);
  }
  var d = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: f
  };
  return E.forEach(Object.keys(r).concat(Object.keys(t)), function(h) {
    var u = d[h] || a, y = u(h);
    E.isUndefined(y) && u !== f || (i[h] = y);
  }), i;
}, ie, Ie;
function ar() {
  return Ie || (Ie = 1, ie = {
    version: "0.27.2"
  }), ie;
}
var vt = ar().version, O = U, Ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Ee[e] = function(i) {
    return typeof i === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var Fe = {};
Ee.transitional = function(r, t, i) {
  function n(a, s) {
    return "[Axios v" + vt + "] Transitional option '" + a + "'" + s + (i ? ". " + i : "");
  }
  return function(a, s, o) {
    if (r === !1)
      throw new O(
        n(s, " has been removed" + (t ? " in " + t : "")),
        O.ERR_DEPRECATED
      );
    return t && !Fe[s] && (Fe[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(a, s, o) : !0;
  };
};
function mt(e, r, t) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), n = i.length; n-- > 0; ) {
    var a = i[n], s = r[a];
    if (s) {
      var o = e[a], f = o === void 0 || s(o, a, e);
      if (f !== !0)
        throw new O("option " + a + " must be " + f, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new O("Unknown option " + a, O.ERR_BAD_OPTION);
  }
}
var Et = {
  assertOptions: mt,
  validators: Ee
}, sr = v, yt = Qe, $e = Mr, je = pt, M = ir, Rt = tr, or = Et, P = or.validators;
function D(e) {
  this.defaults = e, this.interceptors = {
    request: new $e(),
    response: new $e()
  };
}
D.prototype.request = function(r, t) {
  typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = M(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var i = t.transitional;
  i !== void 0 && or.assertOptions(i, {
    silentJSONParsing: P.transitional(P.boolean),
    forcedJSONParsing: P.transitional(P.boolean),
    clarifyTimeoutError: P.transitional(P.boolean)
  }, !1);
  var n = [], a = !0;
  this.interceptors.request.forEach(function(y) {
    typeof y.runWhen == "function" && y.runWhen(t) === !1 || (a = a && y.synchronous, n.unshift(y.fulfilled, y.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(y) {
    s.push(y.fulfilled, y.rejected);
  });
  var o;
  if (!a) {
    var f = [je, void 0];
    for (Array.prototype.unshift.apply(f, n), f = f.concat(s), o = Promise.resolve(t); f.length; )
      o = o.then(f.shift(), f.shift());
    return o;
  }
  for (var d = t; n.length; ) {
    var c = n.shift(), h = n.shift();
    try {
      d = c(d);
    } catch (u) {
      h(u);
      break;
    }
  }
  try {
    o = je(d);
  } catch (u) {
    return Promise.reject(u);
  }
  for (; s.length; )
    o = o.then(s.shift(), s.shift());
  return o;
};
D.prototype.getUri = function(r) {
  r = M(this.defaults, r);
  var t = Rt(r.baseURL, r.url);
  return yt(t, r.params, r.paramsSerializer);
};
sr.forEach(["delete", "get", "head", "options"], function(r) {
  D.prototype[r] = function(t, i) {
    return this.request(M(i || {}, {
      method: r,
      url: t,
      data: (i || {}).data
    }));
  };
});
sr.forEach(["post", "put", "patch"], function(r) {
  function t(i) {
    return function(a, s, o) {
      return this.request(M(o || {}, {
        method: r,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  D.prototype[r] = t(), D.prototype[r + "Form"] = t(!0);
});
var bt = D, ae, ke;
function Ot() {
  if (ke)
    return ae;
  ke = 1;
  var e = k();
  function r(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function(s) {
      i = s;
    });
    var n = this;
    this.promise.then(function(a) {
      if (!!n._listeners) {
        var s, o = n._listeners.length;
        for (s = 0; s < o; s++)
          n._listeners[s](a);
        n._listeners = null;
      }
    }), this.promise.then = function(a) {
      var s, o = new Promise(function(f) {
        n.subscribe(f), s = f;
      }).then(a);
      return o.cancel = function() {
        n.unsubscribe(s);
      }, o;
    }, t(function(s) {
      n.reason || (n.reason = new e(s), i(n.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.prototype.subscribe = function(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }, r.prototype.unsubscribe = function(i) {
    if (!!this._listeners) {
      var n = this._listeners.indexOf(i);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }, r.source = function() {
    var i, n = new r(function(s) {
      i = s;
    });
    return {
      token: n,
      cancel: i
    };
  }, ae = r, ae;
}
var se, He;
function At() {
  return He || (He = 1, se = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), se;
}
var oe, Me;
function wt() {
  if (Me)
    return oe;
  Me = 1;
  var e = v;
  return oe = function(t) {
    return e.isObject(t) && t.isAxiosError === !0;
  }, oe;
}
var ze = v, St = Ve, F = bt, Ct = ir, xt = me;
function ur(e) {
  var r = new F(e), t = St(F.prototype.request, r);
  return ze.extend(t, F.prototype, r), ze.extend(t, r), t.create = function(n) {
    return ur(Ct(e, n));
  }, t;
}
var m = ur(xt);
m.Axios = F;
m.CanceledError = k();
m.CancelToken = Ot();
m.isCancel = nr();
m.VERSION = ar().version;
m.toFormData = rr;
m.AxiosError = U;
m.Cancel = m.CanceledError;
m.all = function(r) {
  return Promise.all(r);
};
m.spread = At();
m.isAxiosError = wt();
le.exports = m;
le.exports.default = m;
(function(e) {
  e.exports = le.exports;
})(We);
const Tt = /* @__PURE__ */ br(We.exports);
function q(e, r) {
  let t = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; NOH-AL00 Build/HUAWEINOH-AL00) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
  return r == L.IOS && (t = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4"), Tt.create({
    baseURL: hr,
    headers: {
      "User-Agent": t,
      "Content-Type": "application/json; charset=UTF-8"
    }
  })(e);
}
const ye = {};
function ue(e) {
  const r = ye.createCipheriv("aes-128-ecb", Rr, "");
  return r.update(e), r.final("hex");
}
function Pt(e, r) {
  const t = ye.createHash("md5");
  return t.update(e + r + Je), t.digest("hex");
}
function Nt(e, r, t, i, n) {
  const a = ye.createHash("md5");
  return a.update(e + r + t + i + n + Je), a.digest("hex");
}
function Dt(e, r, t = L.ADNROID) {
  return q(
    {
      url: pr,
      method: "post",
      data: {
        password: ue(r),
        t: ue(Date.now().toString()),
        phone: ue(e),
        loginType: t,
        uuid: ""
      }
    },
    t
  );
}
function Ut(e, r = "student", t = L.ADNROID) {
  return q(
    {
      url: vr,
      method: "post",
      headers: {
        Authorization: e,
        roleKey: r
      }
    },
    t
  );
}
function gt(e, r, t = "student", i = L.ADNROID) {
  return q(
    {
      url: mr,
      method: "post",
      headers: {
        Authorization: e,
        roleKey: t,
        sign: Pt(r, t)
      },
      data: {
        state: ""
      }
    },
    i
  );
}
function _t(e, r, t = "student", i = L.ADNROID) {
  return q(
    {
      url: Er,
      method: "post",
      headers: {
        Authorization: r,
        roleKey: t
      },
      data: {
        planId: e
      }
    },
    i
  );
}
function Bt(e, r, t = "student", i, n = "\u4E2D\u56FD", a, s, o, f, d, c, h, u = "Android") {
  return q(
    {
      url: yr,
      method: "post",
      headers: {
        Authorization: r,
        roleKey: t,
        sign: Nt(u, h, i, e, o)
      },
      data: {
        country: n,
        address: o,
        province: a,
        city: s,
        latitude: d,
        description: c,
        planId: i,
        type: h,
        device: u,
        longitude: f
      }
    },
    u
  );
}
export {
  Dt as login,
  Ut as logout,
  gt as planByStu,
  _t as planInfo,
  Bt as punchTheClock
};
