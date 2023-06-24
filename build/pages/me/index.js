(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/me/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/me/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.share"));

var _constants = __webpack_require__(/*! ../../helper/constants */ "./src/helper/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  data: {
    userIcon: '../../assets/images/user_info_icon/visitors.png',
    userName: '点击头像登录',
    desc: '登录查看更好的书籍',
    trends: [{
      type: '积分',
      count: 0
    }, {
      type: '收藏',
      count: 0
    }, {
      type: '喜欢',
      count: 0
    }],
    userCenter: [{
      type: '关于我们',
      icon: '../../assets/images/user_info_icon/message.png',
      list: []
    }, {
      type: '当前版本',
      icon: '../../assets/images/user_info_icon/collect.png',
      list: []
    }],
    helper: []
  },
  props: ['pageShow'],

  async handleLoginClick() {
    if (!(await $utils.getStorage(_constants.uid_key))) {
      _system.default.push({
        uri: 'pages/login'
      });
    } else {
      _system.default.push({
        uri: 'pages/user-info'
      });
    }
  },

  async onInit() {
    this.$watch('pageShow', 'watchPageshowChange');
  },

  async watchPageshowChange() {
    if (this.pageShow) {
      if (await $utils.getStorage(_constants.uid_key)) {
        const goldNums = await $apis.gold.getUserGolds();
        this.userName = goldNums.userName;
        this.trends[0].count = goldNums.goldAllNum || 0;
      }
    }
  },

  handleUserCenterClick(type) {
    switch (type) {
      case '关于我们':
        _system.default.push({
          uri: 'pages/about'
        });

        break;

      case '当前版本':
        _system.default.push({
          uri: 'pages/current-version'
        });

        break;

      default:
        break;
    }
  },

  handleShare() {
    _system2.default.share({
      type: 'text/html',
      data: 'https://www.classicbook.xyz/wechat.html',
      success: function (data) {
        console.log('handling success');
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
  },

  hanleHelperClick(type) {
    switch (type) {
      case '看个广告':
        _system.default.push({
          uri: 'pages/ad'
        });

        break;

      default:
        break;
    }
  }

};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/me/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/me/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page-wrapper": {
    "fontSize": "40px"
  },
  ".page-wrapper .wrapper-padding": {
    "paddingTop": "0px",
    "paddingRight": "48px",
    "paddingBottom": "0px",
    "paddingLeft": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page-wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper-padding"
        }
      ]
    }
  },
  ".page-wrapper .title": {
    "color": "#000000",
    "fontWeight": "bold",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page-wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".page-wrapper .desc": {
    "color": "#454545",
    "marginTop": "32px",
    "fontSize": "36px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page-wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  },
  ".page-wrapper .button": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#20a0ff",
    "borderRightColor": "#20a0ff",
    "borderBottomColor": "#20a0ff",
    "borderLeftColor": "#20a0ff",
    "backgroundColor": "#ffffff",
    "paddingTop": "16px",
    "paddingRight": "32px",
    "paddingBottom": "16px",
    "paddingLeft": "32px",
    "color": "#20a0ff",
    "fontSize": "36px",
    "borderRadius": "40px",
    "marginTop": "48px",
    "marginBottom": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page-wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "button"
        }
      ]
    }
  },
  ".external-link": {
    "color": "#20a0ff"
  },
  ".title-bar-button": {
    "alignSelf": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#ffffff",
    "borderRightColor": "#ffffff",
    "borderBottomColor": "#ffffff",
    "borderLeftColor": "#ffffff",
    "backgroundColor": "#ffffff",
    "width": "52.8px",
    "height": "52.8px",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "40px"
  },
  ".title-bar-button ": {
    "height:active": "56px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title-bar-button"
        }
      ]
    }
  },
  ".nice-list": {
    "backgroundColor": "#f4f6fa",
    "paddingTop": "0px",
    "paddingRight": "24px",
    "paddingBottom": "0px",
    "paddingLeft": "24px"
  },
  ".nice-list .load-more": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "16px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nice-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        }
      ]
    }
  },
  ".nice-list .load-more .progress": {
    "textAlign": "right",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nice-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "progress"
        }
      ]
    }
  },
  ".nice-list .load-more .loading-tip": {
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nice-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "loading-tip"
        }
      ]
    }
  },
  "@FONT-FACE": {
    "iconfont": {
      "fontFamily": "iconfont",
      "src": [
        "/assets/iconfont/iconfont.ttf"
      ],
      "fontName": "iconfont",
      "fontSrc": [
        "/assets/iconfont/iconfont.ttf"
      ]
    }
  },
  ".iconfont": {
    "fontFamily": "iconfont"
  },
  ".sentence-user-page": {
    "flexDirection": "column",
    "width": "100%",
    "flex": 1,
    "backgroundColor": "#f4f4f4"
  },
  ".sentence-user-page .user-plane": {
    "backgroundColor": "#ffffff",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px",
    "width": "100%",
    "height": "18%",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .user-icon": {
    "height": "55%",
    "borderRadius": "300px",
    "backgroundColor": "#c4c8d3",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-icon"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .user-icon image": {
    "borderRadius": "300px",
    "height": "100%",
    "objectFit": "contain",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-icon"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .user-info": {
    "flexDirection": "column",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-info"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .user-info .user-zone": {
    "marginTop": "10px",
    "color": "#cccccc",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-zone"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .user-info .user-name": {
    "fontSize": "40px",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-name"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .has-vip": {
    "width": "240px",
    "height": "70px",
    "backgroundColor": "#ffecc4",
    "position": "absolute",
    "borderRadius": "70px",
    "right": "-90px",
    "top": "100px",
    "alignItems": "center",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "has-vip"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .has-vip text": {
    "color": "#f08b35",
    "marginLeft": "5px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "has-vip"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".sentence-user-page .user-plane .has-vip .vip-icon": {
    "width": "40px",
    "height": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-plane"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "has-vip"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "vip-icon"
        }
      ]
    }
  },
  ".sentence-user-page .user-trends": {
    "width": "100%",
    "height": "10%",
    "backgroundColor": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-trends"
        }
      ]
    }
  },
  ".sentence-user-page .user-trends .trends-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-trends"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "trends-item"
        }
      ]
    }
  },
  ".sentence-user-page .user-trends .trends-item text": {
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-trends"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "trends-item"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".sentence-user-page .user-trends .trends-item .border": {
    "borderRightWidth": "1px",
    "borderRightStyle": "solid",
    "borderRightColor": "#ececec",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-trends"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "trends-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "border"
        }
      ]
    }
  },
  ".sentence-user-page .user-trends .trends-item .count": {
    "width": "100%",
    "fontSize": "36px",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-trends"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "trends-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "count"
        }
      ]
    }
  },
  ".sentence-user-page .user-trends .trends-item .type": {
    "paddingTop": "10px",
    "width": "100%",
    "color": "#aaaaaa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-trends"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "trends-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "type"
        }
      ]
    }
  },
  ".sentence-user-page .user-more": {
    "flexDirection": "column",
    "width": "100%",
    "marginTop": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-more"
        }
      ]
    }
  },
  ".sentence-user-page .user-more .user-item": {
    "paddingTop": "25px",
    "paddingRight": "25px",
    "paddingBottom": "25px",
    "paddingLeft": "25px",
    "backgroundColor": "#ffffff",
    "marginBottom": "2px",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-item"
        }
      ]
    }
  },
  ".sentence-user-page .user-more .user-item image": {
    "width": "50px",
    "height": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-item"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".sentence-user-page .user-more .user-item text": {
    "marginLeft": "20px",
    "fontSize": "34px",
    "color": "#333333",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-item"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".sentence-user-page .user-more .user-item .right": {
    "flex": 1,
    "justifyContent": "flex-end",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "right"
        }
      ]
    }
  },
  ".sentence-user-page .user-more .user-item .right text": {
    "textAlign": "right",
    "fontSize": "32px",
    "color": "#666666",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "right"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".sentence-user-page .user-more .user-item .right image": {
    "width": "30px",
    "height": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sentence-user-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "user-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "right"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/me/index.ux?uxType=page&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/me/index.ux?uxType=page& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "sentence-user-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "user-plane"
      ],
      "events": {
        "click": "handleLoginClick"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "user-icon",
            "dk12ujdh6"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.userIcon}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "user-info"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.userName}
              },
              "classList": [
                "user-name"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.desc}
              },
              "classList": [
                "user-zone"
              ],
              "shown": function () {return this.userName=='点击头像登录'}
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "has-vip"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/assets/images/icon/vip.png"
              },
              "classList": [
                "vip-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "会员"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "user-trends"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.trends},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "trends-item"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.count}
                  },
                  "classList": function () {return ['count', this.$idx===this.trends.length-1?'':'border']}
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.type}
                  },
                  "classList": function () {return ['type', this.$idx===this.trends.length-1?'':'border']}
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "user-more"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "user-item"
          ],
          "repeat": function () {return this.userCenter},
          "events": {
            "click": function (evt) { return this.handleUserCenterClick(this.$item.type,evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.icon}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.type}
              }
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "right"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.desc}
                  },
                  "classList": [
                    "desc"
                  ],
                  "shown": function () {return !!this.$item.desc}
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/images/user_info_icon/right.png"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "user-more"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "user-item"
          ],
          "events": {
            "click": "handleShare"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/assets/images/user_info_icon/setting.png"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "分享"
              }
            }
          ]
        }
      ]
    }
  ]
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./src/pages/me/index.ux?uxType=page ***!
  \*******************************************/

var $app_style$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/me/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/me/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/me/index.ux?uxType=page&")

     $app_module$.exports.style = $app_style$
})
$app_bootstrap$('@app-component/index',{ packagerVersion: "1.9.10" })
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();