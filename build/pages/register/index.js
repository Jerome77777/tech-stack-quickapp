(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/register/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/register/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _constants = __webpack_require__(/*! ../../helper/constants */ "./src/helper/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  data: {
    btnDisabled: true,
    passwordValue: '',
    phoneValue: '',
    usernameValue: ''
  },

  onInit() {},

  setPasswordValue: function (e) {
    this.passwordValue = e.text;
    this.setBtnStatus();
  },
  setPhoneValue: function (e) {
    this.phoneValue = e.text;
    this.setBtnStatus();
  },
  setUserNameValue: function (e) {
    this.usernameValue = e.text;
    this.setBtnStatus();
  },
  setBtnStatus: function () {
    if (this.phoneValue.length === 11 && this.passwordValue.length > 6) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  },
  goUser: async function () {
    const res = await $apis.user.userRegister({
      phoneNumber: this.phoneValue,
      userName: this.usernameValue,
      passwd: this.passwordValue
    });

    if (res.uid) {
      $utils.setStorage(_constants.uid_key, res.uid);
      $utils.setStorage(_constants.username_key, this.usernameValue);
    }

    _system.default.replace({
      uri: 'pages/main'
    });

    _system.default.clear();
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

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/register/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/register/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page": {
    "backgroundColor": "#f4f5f7",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  ".go-back": {
    "justifyContent": "flex-end",
    "paddingRight": "40px"
  },
  ".go-back image": {
    "marginTop": "60px",
    "width": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "go-back"
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
  ".tip-box": {
    "justifyContent": "center",
    "marginTop": "30px",
    "height": "200px",
    "alignItems": "center"
  },
  ".tip-box text": {
    "fontSize": "40px",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tip-box"
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
  ".login-wrap": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".input-box": {
    "width": "84%",
    "backgroundColor": "#ffffff",
    "height": "100px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#e6e6e6",
    "borderRightColor": "#e6e6e6",
    "borderBottomColor": "#e6e6e6",
    "borderLeftColor": "#e6e6e6",
    "borderRadius": "50px",
    "paddingTop": "0px",
    "paddingRight": "50px",
    "paddingBottom": "0px",
    "paddingLeft": "50px"
  },
  ".input-box input": {
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "input-box"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "input"
        }
      ]
    }
  },
  ".btn-box": {
    "width": "84%",
    "height": "100px",
    "marginTop": "40px",
    "justifyContent": "center",
    "backgroundColor": "#c44944",
    "borderRadius": "50px"
  },
  ".btn-box text": {
    "color": "#ffffff",
    "fontSize": "38px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn-box"
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
  ".disabled": {
    "backgroundColor": "#efacab"
  },
  ".register": {
    "marginBottom": "20px"
  },
  ".protocol-box": {
    "marginTop": "30px",
    "justifyContent": "center"
  },
  ".protocol-box text": {
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "protocol-box"
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
  ".protocol-box text .blue": {
    "color": "#5c76a0",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "protocol-box"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "blue"
        }
      ]
    }
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/register/index.ux?uxType=page&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/register/index.ux?uxType=page& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "tip-box"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "注册收集积分，加入书架"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "login-wrap"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "input-box"
          ],
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "number",
                "placeholder": "请输入手机号",
                "value": function () {return this.phoneValue},
                "maxlength": "11"
              },
              "events": {
                "change": "setPhoneValue"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "input-box"
          ],
          "style": {
            "marginTop": "70px",
            "marginRight": "0px",
            "marginBottom": "0px",
            "marginLeft": "0px"
          },
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "text",
                "placeholder": "用户名",
                "value": function () {return this.usernameValue},
                "maxlength": "10"
              },
              "events": {
                "change": "setUserNameValue"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "input-box"
          ],
          "style": {
            "marginTop": "70px",
            "marginRight": "0px",
            "marginBottom": "0px",
            "marginLeft": "0px"
          },
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "password",
                "placeholder": "请输入密码(大于6位)",
                "value": function () {return this.passwordValue}
              },
              "events": {
                "change": "setPasswordValue"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {
            "disabled": function () {return this.btnDisabled}
          },
          "classList": function () {return ['btn-box', this.btnDisabled?'disabled':'']},
          "events": {
            "click": "goUser"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "注册并登录"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "protocol-box"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "点击查看"
                  }
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "“用户协议”"
                  },
                  "classList": [
                    "blue"
                  ]
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "和"
                  }
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "“隐私协议”"
                  },
                  "classList": [
                    "blue"
                  ]
                }
              ]
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
/*!*************************************************!*\
  !*** ./src/pages/register/index.ux?uxType=page ***!
  \*************************************************/

var $app_style$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/register/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/register/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/register/index.ux?uxType=page&")

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