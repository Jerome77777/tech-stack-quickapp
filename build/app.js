(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.chuangke.diandugushihui","name":"典阅故事汇","versionName":"2.0.1","versionCode":12,"minPlatformVersion":1095,"icon":"/assets/logo.png","features":[{"name":"system.device"},{"name":"system.share"},{"name":"service.ad"},{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.webview"},{"name":"service.share"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"service.texttoaudio"}],"permissions":[{"origin":"*"}],"template/official":"book","config":{"logLevel":"debug","designWidth":800},"router":{"entry":"pages/main","pages":{"pages/main":{"component":"index"},"pages/me":{"component":"index"},"pages/gold-shop":{"component":"index"},"pages/home":{"component":"index"},"pages/login":{"component":"index"},"pages/about":{"component":"index"},"pages/user-agreement":{"component":"index"},"pages/privacy-policy":{"component":"index"},"pages/current-version":{"component":"index"},"pages/turntable":{"component":"index"},"pages/register":{"component":"index"},"pages/user-info":{"component":"index"},"pages/article-content":{"component":"index"}}},"display":{"titleBar":true,"titleBarBackgroundColor":"#f4f6fa","titleBarTextColor":"#333333","menu":true,"pages":{"pages/main":{"titleBarText":"阅读"},"pages/me":{"titleBarText":""},"pages/gold-shop":{"titleBarText":""},"pages/home":{"titleBarText":""},"pages/login":{"titleBarText":""},"pages/about":{"titleBarText":"关于我们"},"pages/user-agreement":{"titleBarText":"用户协议"},"pages/privacy-policy":{"titleBarText":"隐私政策"},"pages/current-version":{"titleBarText":"当前版本"},"pages/turntable":{"titleBarText":""},"pages/register":{"titleBarText":""},"pages/user-info":{"titleBarText":""},"pages/article-content":{"titleBarText":""}}}}
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp/src!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp/src!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helper = __webpack_require__(/*! ./helper */ "./src/helper/index.js");

const hook2global = __webpack_require__.g.__proto__ || __webpack_require__.g;
hook2global.$apis = _helper.$apis;
hook2global.$utils = _helper.$utils;
hook2global.$shelfList = [];
var _default = {
  $apis: _helper.$apis,
  $utils: _helper.$utils,
  $shelfList: hook2global.$shelfList
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


!function (t, e) {
   true ? module.exports = e() : 0;
}(void 0, function () {
  "use strict";

  var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      l = "Invalid Date",
      $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    ordinal: function (t) {
      var e = ["th", "st", "nd", "rd"],
          n = t % 100;
      return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
    }
  },
      m = function (t, e, n) {
    var r = String(t);
    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  },
      v = {
    s: m,
    z: function (t) {
      var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
      return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
    },
    m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);
      var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, f),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), f);
      return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
    },
    a: function (t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    },
    p: function (t) {
      return {
        M: f,
        y: c,
        w: o,
        d: a,
        D: d,
        h: u,
        m: s,
        s: i,
        ms: r,
        Q: h
      }[t] || String(t || "").toLowerCase().replace(/s$/, "");
    },
    u: function (t) {
      return void 0 === t;
    }
  },
      g = "en",
      D = {};

  D[g] = M;

  var p = function (t) {
    return t instanceof _;
  },
      S = function t(e, n, r) {
    var i;
    if (!e) return g;

    if ("string" == typeof e) {
      var s = e.toLowerCase();
      D[s] && (i = s), n && (D[s] = n, i = s);
      var u = e.split("-");
      if (!i && u.length > 1) return t(u[0]);
    } else {
      var a = e.name;
      D[a] = e, i = a;
    }

    return !r && i && (g = i), i || !r && g;
  },
      w = function (t, e) {
    if (p(t)) return t.clone();
    var n = "object" == typeof e ? e : {};
    return n.date = t, n.args = arguments, new _(n);
  },
      O = v;

  O.l = S, O.i = p, O.w = function (t, e) {
    return w(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };

  var _ = function () {
    function M(t) {
      this.$L = S(t.locale, null, !0), this.parse(t);
    }

    var m = M.prototype;
    return m.parse = function (t) {
      this.$d = function (t) {
        var e = t.date,
            n = t.utc;
        if (null === e) return new Date(NaN);
        if (O.u(e)) return new Date();
        if (e instanceof Date) return new Date(e);

        if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match($);

          if (r) {
            var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
          }
        }

        return new Date(e);
      }(t), this.$x = t.x || {}, this.init();
    }, m.init = function () {
      var t = this.$d;
      this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, m.$utils = function () {
      return O;
    }, m.isValid = function () {
      return !(this.$d.toString() === l);
    }, m.isSame = function (t, e) {
      var n = w(t);
      return this.startOf(e) <= n && n <= this.endOf(e);
    }, m.isAfter = function (t, e) {
      return w(t) < this.startOf(e);
    }, m.isBefore = function (t, e) {
      return this.endOf(e) < w(t);
    }, m.$g = function (t, e, n) {
      return O.u(t) ? this[e] : this.set(n, t);
    }, m.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, m.valueOf = function () {
      return this.$d.getTime();
    }, m.startOf = function (t, e) {
      var n = this,
          r = !!O.u(e) || e,
          h = O.p(t),
          l = function (t, e) {
        var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
        return r ? i : i.endOf(a);
      },
          $ = function (t, e) {
        return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
      },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");

      switch (h) {
        case c:
          return r ? l(1, 0) : l(31, 11);

        case f:
          return r ? l(1, M) : l(0, M + 1);

        case o:
          var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
          return l(r ? m - D : m + (6 - D), M);

        case a:
        case d:
          return $(v + "Hours", 0);

        case u:
          return $(v + "Minutes", 1);

        case s:
          return $(v + "Seconds", 2);

        case i:
          return $(v + "Milliseconds", 3);

        default:
          return this.clone();
      }
    }, m.endOf = function (t) {
      return this.startOf(t, !1);
    }, m.$set = function (t, e) {
      var n,
          o = O.p(t),
          h = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;

      if (o === f || o === c) {
        var y = this.clone().set(d, 1);
        y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
      } else l && this.$d[l]($);

      return this.init(), this;
    }, m.set = function (t, e) {
      return this.clone().$set(t, e);
    }, m.get = function (t) {
      return this[O.p(t)]();
    }, m.add = function (r, h) {
      var d,
          l = this;
      r = Number(r);

      var $ = O.p(h),
          y = function (t) {
        var e = w(l);
        return O.w(e.date(e.date() + Math.round(t * r)), l);
      };

      if ($ === f) return this.set(f, this.$M + r);
      if ($ === c) return this.set(c, this.$y + r);
      if ($ === a) return y(1);
      if ($ === o) return y(7);
      var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
      return O.w(m, this);
    }, m.subtract = function (t, e) {
      return this.add(-1 * t, e);
    }, m.format = function (t) {
      var e = this,
          n = this.$locale();
      if (!this.isValid()) return n.invalidDate || l;

      var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = O.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          f = n.months,
          h = function (t, n, i, s) {
        return t && (t[n] || t(e, r)) || i[n].slice(0, s);
      },
          c = function (t) {
        return O.s(s % 12 || 12, t, "0");
      },
          d = n.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";
        return n ? r.toLowerCase() : r;
      },
          $ = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: a + 1,
        MM: O.s(a + 1, 2, "0"),
        MMM: h(n.monthsShort, a, f, 3),
        MMMM: h(f, a),
        D: this.$D,
        DD: O.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: h(n.weekdaysMin, this.$W, o, 2),
        ddd: h(n.weekdaysShort, this.$W, o, 3),
        dddd: o[this.$W],
        H: String(s),
        HH: O.s(s, 2, "0"),
        h: c(1),
        hh: c(2),
        a: d(s, u, !0),
        A: d(s, u, !1),
        m: String(u),
        mm: O.s(u, 2, "0"),
        s: String(this.$s),
        ss: O.s(this.$s, 2, "0"),
        SSS: O.s(this.$ms, 3, "0"),
        Z: i
      };

      return r.replace(y, function (t, e) {
        return e || $[t] || i.replace(":", "");
      });
    }, m.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, m.diff = function (r, d, l) {
      var $,
          y = O.p(d),
          M = w(r),
          m = (M.utcOffset() - this.utcOffset()) * e,
          v = this - M,
          g = O.m(this, M);
      return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
    }, m.daysInMonth = function () {
      return this.endOf(f).$D;
    }, m.$locale = function () {
      return D[this.$L];
    }, m.locale = function (t, e) {
      if (!t) return this.$L;
      var n = this.clone(),
          r = S(t, e, !0);
      return r && (n.$L = r), n;
    }, m.clone = function () {
      return O.w(this.$d, this);
    }, m.toDate = function () {
      return new Date(this.valueOf());
    }, m.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, m.toISOString = function () {
      return this.$d.toISOString();
    }, m.toString = function () {
      return this.$d.toUTCString();
    }, M;
  }(),
      T = _.prototype;

  return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
    T[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), w.extend = function (t, e) {
    return t.$i || (t(e, _, w), t.$i = !0), w;
  }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
    return w(1e3 * t);
  }, w.en = D[g], w.Ls = D, w.p = {}, w;
});

/***/ }),

/***/ "./src/helper/ajax.js":
/*!****************************!*\
  !*** ./src/helper/ajax.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/helper/utils.js"));

var _constants = __webpack_require__(/*! ./constants */ "./src/helper/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestHandle(params) {
  console.log(`🤖 当前正在发起请求的 Url 是： ${params.url}`);
  return new Promise((resolve, reject) => {
    _system.default.fetch({
      url: _constants.server_address + params.url,
      method: params.method,
      data: params.data,
      header: {
        'Content-Type': 'application/json'
      },
      success: data => {
        if (data.code == 200) {
          resolve(JSON.parse(data.data).data);
        } else {
          resolve(JSON.parse(data.data));
        }
      },
      fail: (data, code) => {
        console.log(`🐛 request fail, code = ${code} `, data);
        reject(data);
      },
      complete: data => {
        reject(data);
      }
    });
  });
}

var _default = {
  post: async function (url, params, jumptoLogin = false) {
    params.requestTimeStamp = new Date().getTime();
    const uid = await _utils.default.getStorage(_constants.uid_key);

    if (!_utils.default.isEmptyObject(uid)) {
      params.uid = uid;
    }

    if (!uid && jumptoLogin) {
      _system2.default.push({
        uri: 'pages/login'
      });

      reject();
    }

    return requestHandle({
      method: 'post',
      url,
      data: params
    });
  },
  get: function (url, params = {}, op) {
    return requestHandle({
      method: 'get',
      url: _utils.default.queryString(url, params)
    });
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/apis/article.js":
/*!************************************!*\
  !*** ./src/helper/apis/article.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContent(data) {
  return _ajax.default.post('/rest/article/get_article_content', data);
}

function getList(data) {
  return _ajax.default.post('/rest/article/search_all', data);
}

var _default = {
  getContent,
  getList
};
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/apis/book.js":
/*!*********************************!*\
  !*** ./src/helper/apis/book.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// { 参数
// 	"uid":"123456789",
// 	"searchAll":"true",
// 	"bookShelf":"",
// 	"searchType":"",
// 	"bookId":"",
// 	"requestTimeStamp":"1666438931"
// }
// 首页请求全部小说
function getAllBooks(data) {
  return _ajax.default.post('/rest/book/search_all', data);
} // {
// 	"uid":"123456789",
// 	"searchAll":"false",
// 	"bookShelf":"",
// 	"searchType":"三国",
// 	"bookId":"",
// 	"requestTimeStamp":"1666438931"
// }
// 根据书籍类型获取书籍


function getBooksByType(data) {
  return _ajax.default.post('/rest/book/search_by_type', data);
} // {
// 	"uid":"123456789",
// 	"searchAll":"false",
// 	"bookShelf":"true",
// 	"searchType":"",
// 	"bookId":"",
// 	"requestTimeStamp":"1666438931"
// }
//获取用户书架的书籍


function getUserBooksShelf(data) {
  return _ajax.default.post('/rest/book/book_shelf', data);
} // {
// 	"uid":"123456789",
// 	"searchAll":"",
// 	"bookShelf":"",
// 	"searchType":"",
// 	"bookId":"73",
// 	"requestTimeStamp":"1666438931"
// }
// 获取书籍章节


function getBookChapter(data) {
  return _ajax.default.post('/rest/book/get_book_chapter', data);
}

function getBookChapterContent(data) {
  return _ajax.default.post('/rest/book/get_chapter_content', data);
}

function setUserBooksShelf(data) {
  return _ajax.default.post('/rest/book/add_book_shelf', data, true);
}

function removeUserBooksShelf(data) {
  return _ajax.default.post('/rest/book/remove_book_shelf', data, true);
}

function searchByName(data) {
  return _ajax.default.post('/rest/book/search_by_name', data);
}

var _default = {
  setUserBooksShelf,
  removeUserBooksShelf,
  getAllBooks,
  getUserBooksShelf,
  getBookChapter,
  getBooksByType,
  getBookChapterContent,
  searchByName
};
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/apis/common.js":
/*!***********************************!*\
  !*** ./src/helper/apis/common.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pushDeviceInfo(data) {
  return _ajax.default.post('/rest/device/enter', data || {});
}

var _default = {
  getPositionByLocation(data) {
    return _ajax.default.get('https://apis.map.qq.com/ws/geocoder/v1/', data);
  },

  pushDeviceInfo
};
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/apis/gold.js":
/*!*********************************!*\
  !*** ./src/helper/apis/gold.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// {
// 	"uid":"123456789",
// 	"createTimeStamp":"1666438931"
// }
// 获取用户积分数
function getUserGolds(data) {
  return _ajax.default.post('/rest/gold/user', data || {});
} // {
// 	"uid":"123456789",
// 	"rewardType":"签到或大转盘或对应的广告类型",
// 	"rewardNum":"888",//奖励的积分数量，如果是大转盘的场景，为转到的实际数量，其他的场景可置为空
// 	"createTimeStamp":"1666438931"
// }
// 积分奖励


function rewardGolds(data) {
  return _ajax.default.post('/rest/gold/reward', data);
} // 获取奖励清单：localhost:8081/rest/gold/reward_type
//统一用该接口，从服务端获取签到、各种广告的奖励
// 请求的数据1：
// {
// 	"uid":"16659498310",
// 	"rewardType":"sign_in"
// }
// 返回数据格式1：
// {
//     "status_code": 200,
//     "message": "success",
//     "data": {
//         "uid": "16659498310",
//         "reward_type": "{\"sign_in_4\":{\"createTime\":1680702097000,\"goldNum\":50,\"id\":5,\"rewardType\":\"sign_in_4\"},\"sign_in_5\":{\"createTime\":1680702100000,\"goldNum\":50,\"id\":6,\"rewardType\":\"sign_in_5\"},\"sign_in_6\":{\"createTime\":1680702103000,\"goldNum\":50,\"id\":7,\"rewardType\":\"sign_in_6\"},\"sign_in_7\":{\"createTime\":1680702106000,\"goldNum\":50,\"id\":8,\"rewardType\":\"sign_in_7\"},\"sign_in_1\":{\"createTime\":1680702089000,\"goldNum\":50,\"id\":2,\"rewardType\":\"sign_in_1\"},\"sign_in_2\":{\"createTime\":1680702092000,\"goldNum\":50,\"id\":3,\"rewardType\":\"sign_in_2\"},\"sign_in_3\":{\"createTime\":1680702094000,\"goldNum\":50,\"id\":4,\"rewardType\":\"sign_in_3\"}}",
//         "errorMsg": ""
//     }
// }
// 请求的数据2：
// {
// 	"uid":"16659498310",
// 	"rewardType":"ad"
// }
// 返回数据格式2：
// {
//     "status_code": 200,
//     "message": "success",
//     "data": {
//         "uid": "16659498310",
//         "reward_type": "{\"ad_1\":{\"createTime\":1680702127000,\"goldNum\":100,\"id\":9,\"rewardType\":\"ad_1\"}}",
//         "errorMsg": ""
//     }
// }


function getRewardType(data) {
  return _ajax.default.post('/rest/gold/reward_type', data);
} // {
// 	"uid":"123456789",
// 	"createTimeStamp":"1666438931"
// }
// 福利大转盘


function largeTurntable(data) {
  return _ajax.default.post('/rest/gold/large_turntable', data);
} // 签到


function signIn(data) {
  return _ajax.default.post('/rest/user/sign_in', data || {});
} // 获取签到 list


function getSignInList(data) {
  return _ajax.default.post('/rest/user/get_sign_in_list', data);
} // 广告信息采集接口


function reportAdInfo(data) {
  return _ajax.default.post('/rest/device/ad_behavior', data);
}

var _default = {
  getRewardType,
  largeTurntable,
  rewardGolds,
  getUserGolds,
  signIn,
  getSignInList,
  reportAdInfo
};
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/apis/index.js":
/*!**********************************!*\
  !*** ./src/helper/apis/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

const files = __webpack_require__("./src/helper/apis sync recursive \\.js");

const modules = {};
files.keys().forEach(key => {
  if (key === './index.js') {
    return;
  }

  modules[key.replace(/(^\.\/|\.js$)/g, '')] = files(key).default;
});
var _default = modules;
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/apis/user.js":
/*!*********************************!*\
  !*** ./src/helper/apis/user.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// {
// 	"phoneNumber":"123456789",
// 	"userName":"qyycenter",
// 	"passwd":"123456yyc",
// 	"createTimeStamp":"1666438931"
// }
// 用户注册
function userRegister(data) {
  return _ajax.default.post('/rest/user/register', data);
} // {
// 	"uid":"123456789",
// 	"passwd":"123456yyc",
// 	"createTimeStamp":"1666438931"
// }


function userLogin(data) {
  return _ajax.default.post('/rest/user/login', data);
} // {
// 	"uid":"123456789",
// 	"imei":"86594133722",
// 	"phoneModel":"vivo x27",
// 	"otherDeviceInfo":{"system":"android 8","ip":127.0.0.1","mac":"a4:89:ce:66:33:7c","coreVersion":"5.4.147-qgky-66c244"}//这里面的命名只是距离，根据实际情况上报设备的其他信息
// 	"createTimeStamp":"1666438931"
// }


function sendUserInfoToServer(data) {
  return _ajax.default.post('/rest/device/enter', data);
}

var _default = {
  userRegister,
  userLogin,
  sendUserInfoToServer
};
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/constants.js":
/*!*********************************!*\
  !*** ./src/helper/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.username_key = exports.uid_key = exports.tab_index = exports.signin_key = exports.server_address = exports.reward_sign_type_key = exports.reward_ad_type_key = exports.private_agree_key = exports.lastsignday_key = exports.glodnums_key = exports.firstsignday_key = void 0;
const server_address = 'http://122.224.50.45:8081';
exports.server_address = server_address;
const uid_key = 'x-auth-uid';
exports.uid_key = uid_key;
const username_key = 'x-auth-username';
exports.username_key = username_key;
const glodnums_key = 'x-auth-glodnums';
exports.glodnums_key = glodnums_key;
const signin_key = 'x-auth-signin';
exports.signin_key = signin_key;
const firstsignday_key = 'x-auth-firstsignday';
exports.firstsignday_key = firstsignday_key;
const lastsignday_key = 'x-auth-lastsignday';
exports.lastsignday_key = lastsignday_key;
const private_agree_key = 'x-auth-private_agree_1';
exports.private_agree_key = private_agree_key;
const tab_index = 'x-auth-tab_index';
exports.tab_index = tab_index;
const reward_sign_type_key = 'x-auth-reward_sign_type_key';
exports.reward_sign_type_key = reward_sign_type_key;
const reward_ad_type_key = 'x-auth-reward_ad_type_key';
exports.reward_ad_type_key = reward_ad_type_key;

/***/ }),

/***/ "./src/helper/index.js":
/*!*****************************!*\
  !*** ./src/helper/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$utils = exports.$apis = exports.$ajax = void 0;

const $utils = (__webpack_require__(/*! ./utils */ "./src/helper/utils.js")["default"]);

exports.$utils = $utils;

const $ajax = (__webpack_require__(/*! ./ajax */ "./src/helper/ajax.js")["default"]);

exports.$ajax = $ajax;

const $apis = (__webpack_require__(/*! ./apis */ "./src/helper/apis/index.js")["default"]);

exports.$apis = $apis;

/***/ }),

/***/ "./src/helper/utils.js":
/*!*****************************!*\
  !*** ./src/helper/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

const dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

const prompt = $app_require$('@app-module/system.prompt');

const router = $app_require$('@app-module/system.router');

const storage = $app_require$('@app-module/system.storage');

const device = $app_require$('@app-module/system.device');

const {
  reward_ad_type_key
} = __webpack_require__(/*! ../helper/constants */ "./src/helper/constants.js");

const hook2global = __webpack_require__.g.__proto__ || __webpack_require__.g;
dayjs().format();

function queryString(url, query) {
  let str = [];

  for (let key in query) {
    str.push(key + '=' + query[key]);
  }

  let paramStr = str.join('&');
  return paramStr ? `${url}?${paramStr}` : url;
}

function setStorage(key, value) {
  // 设置storage
  storage.set({
    key,
    value: JSON.stringify(value),

    fail(data, code) {
      console.log(`setStorage fail, code = ${code}`);
    }

  });
}

function removeStorage(key) {
  storage.delete({
    key,

    fail(data, code) {
      console.log(`setStorage fail, code = ${code}`);
    }

  });
}

function getStorage(key) {
  return new Promise((resolve, reject) => {
    // 获取storage
    storage.get({
      key,

      success(data) {
        if (data) {
          resolve(JSON.parse(data));
        } else {
          resolve('');
        }
      },

      fail(data, code) {
        console.log(`getStorage fail, code = ${code}`);
        reject({
          data,
          code
        });
      }

    });
  });
}

function isEmptyObject(data) {
  if (Object.keys(data).length === 0) {
    return true;
  }

  return false;
}

function getRandomBooks(arr) {
  let result = [];
  let ranNum = 5;

  for (let i = 0; i < ranNum; i++) {
    let ran = Math.floor(Math.random() * (arr.length - i));
    result.push(arr[ran]);
    arr[ran] = arr[arr.length - i - 1];
  }

  return result;
}

function getCurrentDay() {
  return dayjs(new Date()).format('YYYY-MM-DD');
}

function apartDay(day1, day2) {
  return dayjs(day1).diff(day2, 'day');
}

function getAddWeekDays() {
  const day = new Date().getDate();
  const res = [];

  for (let i = 0; i < day; i++) {
    res.push(dayjs(new Date()).subtract(day - i, 'day').format('YYYY-MM-DD'));
  }

  for (let i = day; i < 7; i++) {
    res.push(dayjs(new Date()).add(i - day, 'day').format('YYYY-MM-DD'));
  }

  return res;
}

function analytics(type, appName) {
  device.getDeviceId({
    success: async function (data) {
      $apis.gold.reportAdInfo({
        deviceId: data.deviceId || '',
        appName,
        viewAds: 1,
        clickAds: 1 //1或0,1-点击

      });
      const rewardTypes = await getStorage(reward_ad_type_key);
      const rewardType = type === 'custom' ? 'ad_custom' : 'ad_video';
      $apis.gold.rewardGolds({
        deviceId: data.deviceId || '',
        rewardType,
        rewardNum: rewardTypes[rewardType].goldNum
      });
    }
  });
}

var _default = {
  analytics,
  removeStorage,
  getAddWeekDays,
  apartDay,
  getCurrentDay,
  getRandomBooks,
  isEmptyObject,
  queryString,
  setStorage,
  getStorage,

  showToast(message = '', duration = 0) {
    if (!message) return;
    prompt.showToast({
      message: message,
      duration
    });
  },

  route2theUrl(url, params, clear = false) {
    router.push({
      uri: url,
      params: params
    });

    if (clear) {
      router.clear();
    }
  },

  routeReplacetheUrl(url, params) {
    router.replace({
      uri: url,
      params: params
    });
  },

  routerBack() {
    router.back();
  },

  setShelfList(list, storage = false) {
    hook2global.$shelfList = list;

    if (storage) {
      setStorage('bookshelf', JSON.stringify(list));
    }
  }

};
exports["default"] = _default;

/***/ }),

/***/ "./src/helper/apis sync recursive \\.js":
/*!************************************!*\
  !*** ./src/helper/apis/ sync \.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./article.js": "./src/helper/apis/article.js",
	"./book.js": "./src/helper/apis/book.js",
	"./common.js": "./src/helper/apis/common.js",
	"./gold.js": "./src/helper/apis/gold.js",
	"./index.js": "./src/helper/apis/index.js",
	"./user.js": "./src/helper/apis/user.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/helper/apis sync recursive \\.js";

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.chuangke.diandugushihui","name":"典阅故事汇","versionName":"2.0.1","versionCode":12,"minPlatformVersion":1095,"icon":"/assets/logo.png","features":[{"name":"system.device"},{"name":"system.share"},{"name":"service.ad"},{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.webview"},{"name":"service.share"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"service.texttoaudio"}],"permissions":[{"origin":"*"}],"template/official":"book","config":{"logLevel":"debug","designWidth":800},"router":{"entry":"pages/main","pages":{"pages/main":{"component":"index"},"pages/me":{"component":"index"},"pages/gold-shop":{"component":"index"},"pages/home":{"component":"index"},"pages/login":{"component":"index"},"pages/about":{"component":"index"},"pages/user-agreement":{"component":"index"},"pages/privacy-policy":{"component":"index"},"pages/current-version":{"component":"index"},"pages/turntable":{"component":"index"},"pages/register":{"component":"index"},"pages/user-info":{"component":"index"},"pages/article-content":{"component":"index"}}},"display":{"titleBar":true,"titleBarBackgroundColor":"#f4f6fa","titleBarTextColor":"#333333","menu":true,"pages":{"pages/main":{"titleBarText":"阅读"},"pages/me":{"titleBarText":""},"pages/gold-shop":{"titleBarText":""},"pages/home":{"titleBarText":""},"pages/login":{"titleBarText":""},"pages/about":{"titleBarText":"关于我们"},"pages/user-agreement":{"titleBarText":"用户协议"},"pages/privacy-policy":{"titleBarText":"隐私政策"},"pages/current-version":{"titleBarText":"当前版本"},"pages/turntable":{"titleBarText":""},"pages/register":{"titleBarText":""},"pages/user-info":{"titleBarText":""},"pages/article-content":{"titleBarText":""}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp/src!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp/src!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "1.9.10" })

})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();