(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/home/index.ux?uxType=page":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/home/index.ux?uxType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mock = __webpack_require__(/*! ../../assets/data/mock */ "./src/assets/data/mock.js");

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _constants = __webpack_require__(/*! ../../helper/constants */ "./src/helper/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  data: {
    recommend: [],
    myBooks: [],
    moreBooks: [],
    activeTab: 0,
    hotclassify: _mock.hotclassify,
    moreclassify: _mock.moreclassify,
    showTips: false
  },

  async onInit() {
    this.$watch('pageShow', 'watchPageshowChange');
  },

  async watchPageshowChange() {
    const tip = await $utils.getStorage(_constants.private_agree_key);

    if (!tip) {
      this.showTips = true;
    }

    const data = await $apis.book.getAllBooks({
      searchAll: 'true',
      bookShelf: '',
      searchType: '',
      bookId: ''
    });
    this.myBooks = await $apis.book.getUserBooksShelf({
      searchAll: false,
      bookShelf: true
    });
    this.recommend = $utils.getRandomBooks(data);
    this.moreBooks = $utils.getRandomBooks(data);
  },

  changeTabactive(e) {
    this.activeTab = e.index;
  },

  handleClassifyClick(classify) {
    _system.default.push({
      uri: 'pages/book-list',
      params: {
        classify
      }
    });
  },

  handleAdClick(e) {
    console.log('click', e);
  },

  handleAdClose() {
    console.log('close');
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

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/home/index.ux?uxType=page":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/home/index.ux?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/less-loader/dist/cjs.js):\n\n\n  align-items: center;\n  background-color: @bg;\n                  ^\nVariable @bg is undefined\n      in /Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp/src/pages/home/index.ux?uxType=page (line 7, column 20)");

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/home/index.ux?uxType=page&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/home/index.ux?uxType=page& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "swiper",
      "attr": {},
      "classList": [
        "swiper"
      ],
      "children": [
        {
          "type": "book-introduction",
          "attr": {
            "bookInfo": function () {return this.$item},
            "lines": "6"
          },
          "classList": [
            "book-introduction"
          ],
          "repeat": function () {return this.recommend}
        }
      ]
    },
    {
      "type": "ad-component",
      "attr": {},
      "shown": function () {return this.activeTab===0&&!this.showTips}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "book-classify"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "我的书架"
          },
          "classList": [
            "title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "repeat": function () {return this.myBooks},
          "classList": [
            "mybook-introduction"
          ],
          "children": [
            {
              "type": "book-introduction",
              "attr": {
                "bookInfo": function () {return this.$item},
                "lines": "2"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "shown": function () {return this.myBooks.length===0},
          "classList": [
            "empty-data"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "暂无书籍"
              }
            }
          ]
        },
        {
          "type": "tabs",
          "attr": {
            "index": function () {return this.activeTab}
          },
          "classList": [
            "tabs"
          ],
          "events": {
            "change": "changeTabactive"
          },
          "children": [
            {
              "type": "tab-bar",
              "attr": {
                "mode": "fixed"
              },
              "classList": [
                "tab-bar"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "最热分类"
                  },
                  "classList": [
                    "tab-text"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "更多分类"
                  },
                  "classList": [
                    "tab-text"
                  ]
                }
              ]
            },
            {
              "type": "tab-content",
              "attr": {},
              "classList": [
                "tab-content"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "classify-wrap"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item}
                      },
                      "classList": [
                        "classify-item"
                      ],
                      "repeat": function () {return this.hotclassify},
                      "events": {
                        "click": function (evt) { return this.handleClassifyClick(this.$item,evt)}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "classify-wrap"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item}
                      },
                      "classList": [
                        "classify-item"
                      ],
                      "repeat": function () {return this.moreclassify},
                      "events": {
                        "click": function (evt) { return this.handleClassifyClick(this.$item,evt)}
                      }
                    }
                  ]
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
        "more-book"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "header"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "更多小说"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看更多"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "repeat": function () {return this.moreBooks},
              "classList": [
                "mybook-introduction"
              ],
              "children": [
                {
                  "type": "book-introduction",
                  "attr": {
                    "bookInfo": function () {return this.$item},
                    "lines": "2"
                  }
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

/***/ "./src/assets/data/mock.js":
/*!*********************************!*\
  !*** ./src/assets/data/mock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.moreclassify = exports.hotclassify = exports.directory = exports.chapter = void 0;
const hotclassify = ['东晋', '三国', '东汉', '西汉', '明代', '先秦'];
exports.hotclassify = hotclassify;
const moreclassify = ['近现代', '清代', '元代', '宋代', '唐代', '隋代', '南北朝', '西晋'];
exports.moreclassify = moreclassify;
const directory = [{
  chapterId: '12315',
  bookId: '73',
  bookName: '人物志',
  chapterName: '第一回',
  chapterContent: '《人物志》魏，刘劭（shào）撰述，《人物志》是我国一部辨析、评论人物的专著，一部系统品鉴人物才性的玄学著作，约成书于曹魏明帝统治时期（227 —239 ）。作者在自序中阐述撰著目的：“夫圣贤之所美，莫美乎聪明，聪明之所贵，莫贵乎知人，知人诚智，则众材得其序而庶绩之业兴矣。”魏时文帝曹丕接受陈群建议，用九品中正制选拔人材。该书即是在推行九品中正品评人物、选择人材的大背景下形成的专著，旨在为推行九品中正制在理论上提供依据，在实践上总结经验，以推动这一制度的发展和完善。十六国时刘昞 为之作注，重在“疏通大义，不沾沾于训诂，文词简括”。其后流传既久，传本颇多谬误。明万历甲申（1584）河间刘用霖用隆庆壬申（1572）本旧版合官私书校之，去其重复，成为定本。今有《汉魏丛书本》、《明万历刘氏刊本》、《四库全书本》、《四部丛刊本》等。其书自《隋书·经籍志》以后皆列于名家，《四库全书》则归入子部、杂家类一。',
  lastUpdateTime: '2022-07-20 12:30:20',
  createTime: '2022-07-19 12:30:20'
}, {
  chapterId: '12336',
  bookId: '73',
  bookName: '人物志',
  chapterName: '第二回',
  chapterContent: '《人物志》魏，刘劭（shào）撰述，《人物志》是我国一部辨析、评论人物的专著，一部系统品鉴人物才性的玄学著作，约成书于曹魏明帝统治时期（227 —239 ）。作者在自序中阐述撰著目的：“夫圣贤之所美，莫美乎聪明，聪明之所贵，莫贵乎知人，知人诚智，则众材得其序而庶绩之业兴矣。”魏时文帝曹丕接受陈群建议，用九品中正制选拔人材。该书即是在推行九品中正品评人物、选择人材的大背景下形成的专著，旨在为推行九品中正制在理论上提供依据，在实践上总结经验，以推动这一制度的发展和完善。十六国时刘昞 为之作注，重在“疏通大义，不沾沾于训诂，文词简括”。其后流传既久，传本颇多谬误。明万历甲申（1584）河间刘用霖用隆庆壬申（1572）本旧版合官私书校之，去其重复，成为定本。今有《汉魏丛书本》、《明万历刘氏刊本》、《四库全书本》、《四部丛刊本》等。其书自《隋书·经籍志》以后皆列于名家，《四库全书》则归入子部、杂家类一。',
  lastUpdateTime: '2022-07-20 12:30:20',
  createTime: '2022-07-19 12:30:20'
}];
exports.directory = directory;
const chapter = [{
  page: 1,
  content: '渣了邻家女孩，苏泽林悔不当初，好在一场意外让他梦回高考前夕，有了弥补遗憾的机会。<br>这一世，我再也不渣青梅竹马了！<br>渣男属性无法改变，忍不住再撩秦诗晴怎么办？<br>那就远离她！<br>这个时候的秦诗晴还没喜欢上我，透露点高考题目，让她稳上清北，而我则去临安，从此天南地北，各自安好吧！<br>计划很完美，然而两个月后，苏泽林却是看着青梅竹马录取通知书上醒目的“浙大”字样陷入了呆滞。<br>“秦诗晴，你是猪吗，这都没能上清北！”<br>渣男心态炸裂。<br>“不好意思，估错分了！”<br>明媚阳光下的少女抿嘴轻笑，红润的樱唇扬起一个俏皮的弧度。<br>“……”'
}, {
  page: 2,
  content: '渣了邻家女孩，苏泽林悔不当初，好在一场意外让他梦回高考前夕，有了弥补遗憾的机会。<br>这一世，我再也不渣青梅竹马了！<br>渣男属性无法改变，忍不住再撩秦诗晴怎么办？<br>那就远离她！<br>这个时候的秦诗晴还没喜欢上我，透露点高考题目，让她稳上清北，而我则去临安，从此天南地北，各自安好吧！<br>计划很完美，然而两个月后，苏泽林却是看着青梅竹马录取通知书上醒目的“浙大”字样陷入了呆滞。<br>“秦诗晴，你是猪吗，这都没能上清北！”<br>渣男心态炸裂。<br>“不好意思，估错分了！”<br>明媚阳光下的少女抿嘴轻笑，红润的樱唇扬起一个俏皮的弧度。<br>“……”'
}, {
  page: 3,
  content: '渣了邻家女孩，苏泽林悔不当初，好在一场意外让他梦回高考前夕，有了弥补遗憾的机会。<br>这一世，我再也不渣青梅竹马了！<br>渣男属性无法改变，忍不住再撩秦诗晴怎么办？<br>那就远离她！<br>这个时候的秦诗晴还没喜欢上我，透露点高考题目，让她稳上清北，而我则去临安，从此天南地北，各自安好吧！<br>计划很完美，然而两个月后，苏泽林却是看着青梅竹马录取通知书上醒目的“浙大”字样陷入了呆滞。<br>“秦诗晴，你是猪吗，这都没能上清北！”<br>渣男心态炸裂。<br>“不好意思，估错分了！”<br>明媚阳光下的少女抿嘴轻笑，红润的樱唇扬起一个俏皮的弧度。<br>“……”'
}, {
  page: 4,
  content: '渣了邻家女孩，苏泽林悔不当初，好在一场意外让他梦回高考前夕，有了弥补遗憾的机会。<br>这一世，我再也不渣青梅竹马了！<br>渣男属性无法改变，忍不住再撩秦诗晴怎么办？<br>那就远离她！<br>这个时候的秦诗晴还没喜欢上我，透露点高考题目，让她稳上清北，而我则去临安，从此天南地北，各自安好吧！<br>计划很完美，然而两个月后，苏泽林却是看着青梅竹马录取通知书上醒目的“浙大”字样陷入了呆滞。<br>“秦诗晴，你是猪吗，这都没能上清北！”<br>渣男心态炸裂。<br>“不好意思，估错分了！”<br>明媚阳光下的少女抿嘴轻笑，红润的樱唇扬起一个俏皮的弧度。<br>“……”'
}, {
  page: 5,
  content: '渣了邻家女孩，苏泽林悔不当初，好在一场意外让他梦回高考前夕，有了弥补遗憾的机会。<br>这一世，我再也不渣青梅竹马了！<br>渣男属性无法改变，忍不住再撩秦诗晴怎么办？<br>那就远离她！<br>这个时候的秦诗晴还没喜欢上我，透露点高考题目，让她稳上清北，而我则去临安，从此天南地北，各自安好吧！<br>计划很完美，然而两个月后，苏泽林却是看着青梅竹马录取通知书上醒目的“浙大”字样陷入了呆滞。<br>“秦诗晴，你是猪吗，这都没能上清北！”<br>渣男心态炸裂。<br>“不好意思，估错分了！”<br>明媚阳光下的少女抿嘴轻笑，红润的樱唇扬起一个俏皮的弧度。<br>“……”'
}];
exports.chapter = chapter;

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
/*!*********************************************!*\
  !*** ./src/pages/home/index.ux?uxType=page ***!
  \*********************************************/

var $app_style$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/home/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/home/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/home/index.ux?uxType=page&")

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