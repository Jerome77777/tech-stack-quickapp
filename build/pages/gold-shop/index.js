(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/gold-shop/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/gold-shop/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

var _constant = __webpack_require__(/*! ../../assets/data/constant.js */ "./src/assets/data/constant.js");

var _constants = __webpack_require__(/*! ../../helper/constants */ "./src/helper/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  data: {
    signInGlods: [],
    signDaysFlag: [0, 0, 0, 0, 0, 0, 0],
    showRule: false,
    continuitySignDay: 0,
    signInfo: [],
    disabledSign: false,
    totalSignIn: [{
      text1: '连续签到 7 日',
      text2: '70书币',
      text3: '/7天',
      totalDay: 7
    }, {
      text1: '连续签到 14 日',
      text2: '100书币',
      text3: '/14天',
      totalDay: 14
    }, {
      text1: '连续签到 30 日',
      text2: '150书币',
      text3: '/30天',
      totalDay: 30
    }],
    customRender: ''
  },
  props: ['pageShow'],
  computed: {
    signText() {
      return this.disabledSign ? '已签到' : '点击签到';
    }

  },

  async onInit() {
    this.$watch('pageShow', 'watchPageshowChange');
  },

  async watchPageshowChange() {
    if (this.pageShow) {
      const rewardType = await $utils.getStorage(_constants.reward_sign_type_key);
      this.signInGlods = [];
      this.signDaysFlag = [];

      for (let key in rewardType) {
        this.signInGlods.push(rewardType[key].goldNum);
      }

      this.signInGlods.sort((a, b) => a - b);
      const res = await $apis.gold.getSignInList({});
      const signInList = JSON.parse(res.sign_in_list);
      let continuousList = [];

      for (let key in signInList) {
        if (signInList[key].sign_in === 0) {
          continuousList = [];
        } else {
          continuousList.push(signInList[key].sign_in);
        }
      }

      if (continuousList.length <= 7) {
        for (let i = 0; i < 7 - continuousList.length; i++) {
          continuousList.push(0);
        }
      } else {
        continuousList = [0, 0, 0, 0, 0, 0, 0];
      }

      this.signDaysFlag = continuousList;
      const currentDay = $utils.getCurrentDay();

      if (signInList[currentDay].sign_in === 1) {
        this.disabledSign = true;
      }

      const provider = _service.default.getProvider();

      if (provider) {
        this.customRender = _constant.adUnitIds[provider].leftPrightW;

        _service.default.preloadAd({
          adUnitId: this.customRender,
          type: 'custom'
        });
      }
    }
  },

  handleTurntableClick() {
    _system.default.push({
      uri: 'pages/turntable'
    });
  },

  handleRuleClick() {
    this.showRule = true;
  },

  handleMaskClick() {
    this.showRule = false;
  },

  async handleSignIn() {
    const uid = await $utils.getStorage(_constants.uid_key);

    if ($utils.isEmptyObject(uid)) {
      _system.default.push({
        uri: 'pages/login'
      });

      return;
    }

    if (!this.disabledSign) {
      _system2.default.showToast({
        message: '签到成功'
      });

      const rewardType = await $utils.getStorage(_constants.reward_sign_type_key);
      let index = this.signInGlods.findIndex(element => element === 0);
      index = index === -1 ? 0 : index;
      await $apis.gold.signIn({
        rewardType: `sign_in_${index + 1}`,
        rewardNum: rewardType[`sign_in_${index + 1}`].goldNum
      });
      this.disabledSign = true;
      this.watchPageshowChange();
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

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/qaui/src/components/progress/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/qaui/src/components/progress/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data() {
    return {
      strokeStyle: {},
      progressStyle: {},
      content: '',
      trailStyle: '',
      innerPercent: 50,
      ratio: 1
    };
  },

  props: {
    percentage: {
      type: Number,
      default: 50,
      validator: function (value) {
        if (value < 0 || value > 100) {
          return false;
        }

        return true;
      }
    },
    isContentShow: {
      type: Boolean,
      default: false
    },
    progressWidth: {
      type: String,
      default: '100%'
    },
    strokeHeight: {
      type: Number,
      default: 2
    },
    format: {
      type: Function,
      default: percent => percent + '%'
    },
    contentStyle: {
      type: Object,

      default() {
        return {};
      }

    },
    strokeColor: {
      type: String,
      default: ''
    },
    trailColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.12)'
    }
  },

  onInit() {
    const designWidth = this.$app.$def.manifest.config.designWidth || 750;
    this.ratio = designWidth / 360;
    this.$watch('percentage', 'watchPercentageChange');
    this.progressStyle = {
      width: this.progressWidth
    };
    this.trailStyle = {
      backgroundColor: this.trailColor
    };
    this.setProgress();
  },

  watchPercentageChange() {
    this.setProgress();
  },

  setProgress() {
    if (this.percentage < 0) {
      this.innerPercent = 0;
    } else if (this.percentage > 100) {
      this.innerPercent = 100;
    } else if (this.percentage >= 0 && this.percentage <= 100) {
      this.innerPercent = this.percentage;
    }

    const percent = Number(this.innerPercent.toFixed(1));

    if (this.strokeColor) {
      this.strokeStyle = {
        width: percent + '%',
        height: this.strokeHeight * this.ratio + 'px',
        backgroundColor: this.strokeColor
      };
    } else {
      this.strokeStyle = {
        width: percent + '%',
        height: this.strokeHeight * this.ratio + 'px'
      };
    }

    this.content = this.format(percent);
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/default.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/default.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    config: {
      type: Object,
      default: {
        enable: false
      }
    },
    styles: {
      type: Object
    }
  },
  data: {
    adData: null,
    visible: false
  },

  onInit() {
    this.$watch('adData', 'handleAdDataChange');
    this.$watch('config', 'handleConfigChange');

    if (this.config.adId) {
      this.handleConfigChange(this.config);
    }
  },

  onDestroy() {
    this.adDestroy();
  },

  handleConfigChange({
    enable,
    adSlotName,
    type: adType,
    displayTimes
  }) {
    if (!enable) return;

    if (adSlotName === 'webviewAd' && adType !== 'rewardedVideoAd') {
      displayTimes.forEach(time => {
        setTimeout(() => this.adRequest(), time * 1000);
      });
    } else {
      this.adRequest();
    }
  },

  handleAdDataChange(adData) {
    if (!adData) return;
    this.adExposure();
  },

  handleAdClick() {
    this.adClick();
    this.adClose();
  },

  handleCancelClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adClose();
    analytics('adClose', {
      adSlotName,
      adId,
      adType
    });
  },

  adRequest() {
    let tempAd = null;
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;

    if (adType === 'nativeAd') {
      tempAd = _service.default.createNativeAd({
        adUnitId: adId
      });
    } else if (adType === 'rewardedVideoAd') {
      tempAd = _service.default.createRewardedVideoAd({
        adUnitId: adId
      });
    } else if (adType === 'interstitialAd') {
      tempAd = _service.default.createInterstitialAd({
        adUnitId: adId
      });
    }

    analytics('adRequest', {
      adSlotName,
      adId,
      adType
    });

    if (tempAd && typeof tempAd !== 'object') {
      this.adClose();
      return;
    }

    tempAd.onError(error => {
      if (!this.ad) {
        this.$emit('error');
        this.adClose();
      }

      analytics('adError', {
        adSlotName,
        adId,
        adType,
        adData: {
          error
        }
      });
    });
    tempAd.onLoad(res => {
      if (adType === 'nativeAd' && res.adList && res.adList.length) {
        this.adDestroy();
        this.ad = tempAd;
        this.adData = res.adList[0];
      } else if (['interstitialAd', 'rewardedVideoAd'].includes(adType)) {
        this.ad = tempAd;
        this.adExposure();
      } else {
        this.adClose();
      }
    });

    if (tempAd.onClose) {
      tempAd.onClose(() => {
        this.adDestroy();
        this.adClose();
        analytics('adClose', {
          adSlotName,
          adId,
          adType
        });
      });
    }

    if (['nativeAd', 'rewardedVideoAd'].includes(adType)) {
      tempAd.load();
    }
  },

  adExposure() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;

    if (adType === 'nativeAd') {
      this.visible = true;
      this.$emit('show');
      this.ad.reportAdShow({
        adId: this.adData.adId
      });
      analytics('adExposure', {
        adSlotName,
        adId,
        adType,
        adData: this.adData
      });
    } else if (['interstitialAd', 'rewardedVideoAd'].includes(adType)) {
      this.ad.show();
      analytics('adExposure', {
        adSlotName,
        adId,
        adType
      });
    }
  },

  adClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;

    if (this.ad && this.ad.reportAdClick) {
      this.ad.reportAdClick({
        adId: this.adData.adId
      });
      analytics('adClick', {
        adSlotName,
        adId,
        adType,
        adData: this.adData
      });
    }
  },

  adClose() {
    this.visible = false;
    this.$emit('close');
  },

  adDestroy() {
    try {
      if (this.ad) this.ad.destroy();
      this.ad = null;
    } catch (error) {}
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/huawei.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/huawei.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

var _data = _interopRequireDefault(__webpack_require__(/*! ./data.js */ "./src/components/ad-part/ad/data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    config: {
      type: Object,
      default: {
        enable: false
      }
    },
    styles: {
      type: Object,
      default: _data.default
    }
  },
  data: {
    adData: null,
    visible: false,
    displayTimes: []
  },

  onInit() {
    if (!this.styles) this.styles = _data.default;
    this.$watch('adData', 'handleAdDataChange');
    this.$watch('config', 'handleConfigChange');

    if (this.config.adId) {
      this.handleConfigChange(this.config);
    }
  },

  onDestroy() {
    this.adDestroy();
  },

  handleConfigChange({
    enable,
    adSlotName,
    type: adType,
    displayTimes
  }) {
    if (!enable) return;

    if (adSlotName === 'webviewAd' && adType !== 'rewardedVideoAd') {
      this.displayTimes = displayTimes;
      this.renderMultipleAds();
    } else {
      this.adRequest();
    }
  },

  renderMultipleAds() {
    if (this.displayTimes.length === 0) return;
    setTimeout(() => this.adRequest(), this.displayTimes.shift() * 1000);
  },

  handleAdDataChange(adData) {
    if (!adData) return;
    this.adExposure();
  },

  handleAdClick() {
    this.adClick();
    this.adClose();
  },

  handleCancelClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adClose();
    analytics('adClose', {
      adSlotName,
      adId,
      adType
    });
  },

  adRequest() {
    let tempAd = null;
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;

    if (adType === 'nativeAd') {
      tempAd = _service.default.createNativeAd({
        adUnitId: adId
      });
    } else if (adType === 'rewardedVideoAd') {
      tempAd = _service.default.createRewardedVideoAd({
        adUnitId: adId
      });
    } else if (adType === 'interstitialAd') {
      tempAd = _service.default.createInterstitialAd({
        adUnitId: adId
      });
    }

    analytics('adRequest', {
      adSlotName,
      adId,
      adType
    });

    if (tempAd && typeof tempAd !== 'object') {
      this.adClose();
      return;
    }

    tempAd.onError(error => {
      if (!this.ad) this.adClose();
      analytics('adError', {
        adSlotName,
        adId,
        adType,
        adData: {
          error
        }
      });
    });
    tempAd.onLoad(res => {
      if (adType === 'nativeAd' && res.adList && res.adList.length) {
        this.adDestroy();
        this.ad = tempAd;
        this.adData = res.adList[0];
      } else if (['interstitialAd', 'rewardedVideoAd'].includes(adType)) {
        this.ad = tempAd;
        this.adExposure();
      } else {
        this.adClose();
      }
    });

    if (tempAd.onClose) {
      tempAd.onClose(() => {
        this.adDestroy();
        this.adClose();
        analytics('adClose', {
          adSlotName,
          adId,
          adType
        });
      });
    }

    if (['nativeAd', 'rewardedVideoAd'].includes(adType)) {
      tempAd.load();
    }
  },

  adExposure() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;

    if (adType === 'nativeAd') {
      this.visible = true;
      this.$emit('show');
      this.ad.reportAdShow({
        adId: this.adData.adId
      });
      analytics('adExposure', {
        adSlotName,
        adId,
        adType,
        adData: this.adData
      });
    } else if (['interstitialAd', 'rewardedVideoAd'].includes(adType)) {
      this.ad.show();
      analytics('adExposure', {
        adSlotName,
        adId,
        adType
      });
    }
  },

  adClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;

    if (this.ad && this.ad.reportAdClick) {
      this.ad.reportAdClick({
        adId: this.adData.adId
      });
      analytics('adClick', {
        adSlotName,
        adId,
        adType,
        adData: this.adData
      });
    }
  },

  adClose() {
    this.visible = false;
    this.$emit('close');
    if (this.displayTimes) this.renderMultipleAds();
  },

  adDestroy() {
    try {
      if (this.ad) this.ad.destroy();
      this.ad = null;
    } catch (error) {}
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    config: {
      type: Object,
      default: {
        enable: false
      }
    },
    styles: {
      type: Object
    }
  },
  data: {
    adId: '',
    adData: {}
  },

  onInit() {
    this.$watch('config', 'handleConfigChange');

    if (this.config.adId) {
      this.handleConfigChange(this.config);
    }
  },

  onDestroy() {
    this.adDestroy();
  },

  handleConfigChange(config) {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adId = adId;

    _service.default.preloadAd({
      adUnitId: adId,
      type: 'native',
      success: data => {
        console.log('data', data);
        this.adExposure(data.adList[0]);
      },
      fail: (data, code) => {
        if (code === 205) {
          console.log('data', data);
          this.adExposure(data.adList[0]);
        } else {
          this.handleAdError(data);
        }
      }
    });
  },

  handleAdClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    $utils.analytics('custom', this.adData.appInfo.appName || '');
    this.adClose();
  },

  handleCancelClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adClose();
  },

  handleAdLoaded(event) {
    try {
      const adData = JSON.parse(event.adData);
      this.adExposure(adData);
    } catch (error) {
      this.adClose();
    }
  },

  handleAdError(error) {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adClose();
    this.$emit('error');
  },

  adExposure(adData) {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adData = adData;
    this.$emit('show');
  },

  adClose() {
    this.adDestroy();
    this.$emit('close');
  },

  adDestroy() {
    this.adData = {};
    this.adId = '';
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/vivo.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/vivo.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    config: {
      type: Object,
      default: {
        enable: false
      }
    }
  },
  data: {
    adData: null
  },

  onInit() {
    this.$watch('config', 'handleConfigChange');

    if (this.config.adId) {
      this.handleConfigChange(this.config);
    }
  },

  onDestroy() {
    this.adDestroy();
  },

  handleConfigChange(config) {
    const {
      adId,
      adSlotName,
      displayTimes
    } = config;

    if (!adId) {
      this.adClose();
      return;
    }

    try {
      if (adSlotName === 'webviewAd') {
        displayTimes.forEach(time => {
          setTimeout(() => this.adRequest(), time * 1000);
        });
      } else {
        this.adRequest();
      }
    } catch (error) {
      this.adClose();
    }
  },

  handleAdClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    $utils.analytics('custom', this.adData.appInfo.appName || '');
    this.adClose();
  },

  handleCancelClick() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adClose();
  },

  handleAdError(error) {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    if (!this.adData) this.adClose();
    this.$emit('error');
  },

  adRequest() {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;

    _service.default.preloadAd({
      adUnitId: adId,
      type: 'native',
      success: data => {
        console.log('data', data);
        this.adExposure(data.adList[0]);
      },
      fail: (data, code) => {
        if (code === 205) {
          console.log('data', data);
          this.adExposure(data.adList[0]);
        } else {
          this.handleAdError(data);
        }
      }
    });
  },

  adExposure(adData) {
    const {
      adSlotName,
      adId,
      type: adType
    } = this.config;
    this.adData = adData;
    this.$emit('show');
  },

  adClose() {
    this.adDestroy();
    this.$emit('close');
  },

  adDestroy() {
    this.adData = null;
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.device"));

var _data = _interopRequireDefault(__webpack_require__(/*! ./ad/data.js */ "./src/components/ad-part/ad/data.js"));

var _constant = __webpack_require__(/*! ../../assets/data/constant.js */ "./src/assets/data/constant.js");

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    styles: {
      type: Object,
      default: _data.default
    }
  },
  data: {
    brand: '',
    show: false,
    config: {
      enable: false
    },
    customRender: ''
  },

  async onInit() {
    const provider = _service.default.getProvider();

    if (provider) {
      this.customRender = _constant.adUnitIds[provider].goldCustomRender;
      this.config = {
        adId: this.customRender,
        enable: true,
        type: 'nativeAd'
      };
    }

    if (!this.styles) this.styles = _data.default;
    let result = await _system.default.getInfo();
    const brand = result.data.brand.toLowerCase();

    if (brand === 'vivo') {
      this.brand = 'vivo';
    } else if (['huawei', 'honor'].includes(brand)) {
      this.brand = 'huawei';
    } else if (['oppo', 'realme', 'oneplus'].includes(brand)) {
      this.brand = 'oppo';
    } else {
      this.brand = 'default';
    }

    this.show = true;
  },

  handleShow() {
    this.$emit('show');
  },

  handleClose() {
    this.$emit('close');
  },

  handleError() {
    this.$emit('close');
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/ad-part/ad/default.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/ad-part/ad/default.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".native-ad": {
    "position": "fixed",
    "top": "0px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "animationName": "fadeIn",
    "animationDuration": "300ms"
  },
  ".dialog": {
    "position": "relative",
    "flexDirection": "column",
    "width": "100%",
    "marginTop": "0px",
    "marginRight": "40px",
    "marginBottom": "0px",
    "marginLeft": "40px",
    "backgroundColor": "#ffffff",
    "borderRadius": "20px"
  },
  ".dialog-title": {
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "0px",
    "textAlign": "center",
    "fontSize": "40px",
    "color": "#000000"
  },
  ".dialog-subtitle": {
    "marginBottom": "20px",
    "textAlign": "center",
    "fontSize": "34px",
    "color": "#000000"
  },
  ".dialog-image": {
    "position": "relative",
    "flexDirection": "column"
  },
  ".dialog-ad-image": {
    "width": "100%"
  },
  ".dialog-ad-text": {
    "position": "absolute",
    "right": "0px",
    "bottom": "0px",
    "width": "60px",
    "fontSize": "20px",
    "textAlign": "center",
    "color": "rgba(255,255,255,0.4)"
  },
  ".dialog-buttons": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginRight": "40px",
    "marginBottom": "40px",
    "marginLeft": "40px"
  },
  ".button": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "borderRadius": "44px"
  },
  ".button-primary": {
    "marginTop": "10px",
    "width": "100%",
    "height": "88px",
    "color": "#ffffff",
    "fontSize": "28px",
    "fontWeight": "bold",
    "textAlign": "center",
    "backgroundColor": "#4761f6",
    "opacity:active": 0.6
  },
  ".button-cancel": {
    "marginTop": "10px",
    "color": "#bbbbbb",
    "fontSize": "24px"
  },
  "@KEYFRAMES": {
    "fadeIn": [
      {
        "opacity": 0,
        "time": 0
      },
      {
        "opacity": 1,
        "time": 100
      }
    ]
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/ad-part/ad/huawei.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/ad-part/ad/huawei.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".native-ad": {
    "position": "fixed",
    "top": "0px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "animationName": "fadeIn",
    "animationDuration": "300ms"
  },
  ".dialog": {
    "position": "relative",
    "flexDirection": "column",
    "width": "100%",
    "marginTop": "0px",
    "marginRight": "40px",
    "marginBottom": "0px",
    "marginLeft": "40px",
    "backgroundColor": "#ffffff",
    "borderRadius": "20px"
  },
  ".dialog-title": {
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "0px",
    "textAlign": "center",
    "fontSize": "40px",
    "color": "#000000"
  },
  ".dialog-subtitle": {
    "marginBottom": "20px",
    "textAlign": "center",
    "fontSize": "34px",
    "color": "#000000"
  },
  ".dialog-image": {
    "position": "relative",
    "flexDirection": "column"
  },
  ".dialog-ad-image": {
    "width": "100%"
  },
  ".dialog-ad-text": {
    "position": "absolute",
    "right": "0px",
    "bottom": "0px",
    "width": "60px",
    "fontSize": "20px",
    "textAlign": "center",
    "color": "rgba(255,255,255,0.4)"
  },
  ".dialog-buttons": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginRight": "40px",
    "marginBottom": "40px",
    "marginLeft": "40px"
  },
  ".button": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "borderRadius": "44px"
  },
  ".button-primary": {
    "marginTop": "10px",
    "width": "100%",
    "height": "88px",
    "color": "#ffffff",
    "fontSize": "28px",
    "fontWeight": "bold",
    "textAlign": "center",
    "backgroundColor": "#4761f6",
    "opacity:active": 0.6
  },
  ".button-cancel": {
    "marginTop": "10px",
    "color": "#bbbbbb",
    "fontSize": "24px"
  },
  ".close": {
    "position": "absolute",
    "top": "30px",
    "right": "30px",
    "width": "40px",
    "height": "40px",
    "opacity": 0.3
  },
  "@KEYFRAMES": {
    "fadeIn": [
      {
        "opacity": 0,
        "time": 0
      },
      {
        "opacity": 1,
        "time": 100
      }
    ]
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/qaui/src/components/progress/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/qaui/src/components/progress/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".qaui-progress": {
    "flexDirection": "row",
    "alignItems": "center",
    "flexWrap": "nowrap"
  },
  ".qaui-progress-trail": {
    "flex": 1,
    "borderRadius": "16.66666667px"
  },
  ".qaui-progress-trail-stroke": {
    "borderRadius": "16.66666667px",
    "backgroundColor": "#456fff"
  },
  ".qaui-progress-text": {
    "height": "43.75px",
    "marginLeft": "20.83333333px",
    "fontSize": "25px",
    "color": "#b2b2b2",
    "lineHeight": "43.75px"
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/gold-shop/index.ux?uxType=page":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/gold-shop/index.ux?uxType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/less-loader/dist/cjs.js):\n\n\n  align-items: center;\n  background-color: @bg;\n                  ^\nVariable @bg is undefined\n      in /Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp/src/pages/gold-shop/index.ux?uxType=page (line 32, column 20)");

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/qaui/src/components/progress/index.ux?uxType=comp&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/qaui/src/components/progress/index.ux?uxType=comp& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "qaui-progress"
  ],
  "style": function () {return this.progressStyle},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "qaui-progress-trail"
      ],
      "style": function () {return this.trailStyle},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "qaui-progress-trail-stroke"
          ],
          "style": function () {return this.strokeStyle}
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.content}
      },
      "shown": function () {return this.isContentShow},
      "classList": [
        "qaui-progress-text"
      ],
      "style": function () {return this.contentStyle}
    }
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/default.ux?uxType=comp&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/default.ux?uxType=comp& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.config&&this.config.enable}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "shown": function () {return this.visible&&this.config.type==='nativeAd'},
          "classList": [
            "native-ad"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "dialog"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.styles['title'].text}
                  },
                  "shown": function () {return this.styles['title']},
                  "classList": [
                    "dialog-title"
                  ],
                  "style": function () {return this.styles['title'].style}
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.styles['subtitle'].text}
                  },
                  "shown": function () {return this.styles['subtitle']},
                  "classList": [
                    "dialog-subtitle"
                  ],
                  "style": function () {return this.styles['subtitle'].style}
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dialog-image"
                  ],
                  "events": {
                    "click": "handleAdClick"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.adData.imgUrlList?this.adData.imgUrlList[0]:this.adData.icon}
                      },
                      "classList": [
                        "dialog-ad-image"
                      ],
                      "style": function () {return this.styles.image&&this.styles.image.style}
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.adData.logoUrl}
                      },
                      "shown": function () {return this.adData.logoUrl},
                      "classList": [
                        "dialog-ad-text"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "广告"
                      },
                      "shown": function () {return !(this.adData.logoUrl)},
                      "classList": [
                        "dialog-ad-text"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dialog-buttons"
                  ],
                  "style": function () {return this.styles.buttons&&this.styles.buttons.style},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.styles['button-cancel']?this.styles['button-cancel'].text:'关闭'}
                      },
                      "classList": [
                        "button",
                        "button-cancel"
                      ],
                      "events": {
                        "click": "handleCancelClick"
                      },
                      "style": function () {return this.styles['button-cancel']&&this.styles['button-cancel'].style}
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.styles['button-primary']?this.styles['button-primary'].text:'好的'}
                      },
                      "classList": [
                        "button",
                        "button-primary"
                      ],
                      "events": {
                        "click": "handleAdClick"
                      },
                      "style": function () {return this.styles['button-primary']&&this.styles['button-primary'].style}
                    }
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

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/huawei.ux?uxType=comp&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/huawei.ux?uxType=comp& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.config.enable}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "shown": function () {return this.visible&&this.config.type==='nativeAd'},
          "classList": [
            "native-ad"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "dialog"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.styles['title'].text}
                  },
                  "shown": function () {return this.styles['title']},
                  "classList": [
                    "dialog-title"
                  ],
                  "style": function () {return this.styles['title'].style}
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.styles['subtitle'].text}
                  },
                  "shown": function () {return this.styles['subtitle']},
                  "classList": [
                    "dialog-subtitle"
                  ],
                  "style": function () {return this.styles['subtitle'].style}
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dialog-image"
                  ],
                  "events": {
                    "click": "handleAdClick"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.adData.imgUrlList?this.adData.imgUrlList[0]:this.adData.icon}
                      },
                      "classList": [
                        "dialog-ad-image"
                      ],
                      "style": function () {return this.styles.image&&this.styles.image.style}
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.adData.logoUrl}
                      },
                      "shown": function () {return this.adData.logoUrl},
                      "classList": [
                        "dialog-ad-text"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "广告"
                      },
                      "shown": function () {return !(this.adData.logoUrl)},
                      "classList": [
                        "dialog-ad-text"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dialog-buttons"
                  ],
                  "style": function () {return this.styles.buttons&&this.styles.buttons.style},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.styles['button-cancel']?this.styles['button-cancel'].text:'退出'}
                      },
                      "shown": function () {return this.config.adSlotName==='exitAd'},
                      "classList": [
                        "button",
                        "button-cancel"
                      ],
                      "events": {
                        "click": "handleCancelClick"
                      },
                      "style": function () {return this.styles['button-cancel']&&this.styles['button-cancel'].style}
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.styles['button-cancel']?this.styles['button-cancel'].text:'关闭'}
                      },
                      "shown": function () {return !(this.config.adSlotName==='exitAd')},
                      "classList": [
                        "button",
                        "button-cancel"
                      ],
                      "events": {
                        "click": "handleAdClick"
                      },
                      "style": function () {return this.styles['button-cancel']&&this.styles['button-cancel'].style}
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.styles['button-primary']?this.styles['button-primary'].text:'好的'}
                      },
                      "classList": [
                        "button",
                        "button-primary"
                      ],
                      "events": {
                        "click": "handleAdClick"
                      },
                      "style": function () {return this.styles['button-primary']&&this.styles['button-primary'].style}
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/components/ad-part/assets/x.svg"
                  },
                  "shown": function () {return this.config.adSlotName!=='exitAd'},
                  "classList": [
                    "close"
                  ],
                  "style": function () {return this.styles['close']&&this.styles['close'].style},
                  "events": {
                    "click": "handleCancelClick"
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

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.config.enable}
      },
      "children": [
        {
          "type": "ad",
          "attr": {
            "adunitid": function () {return this.adId},
            "type": "native"
          },
          "shown": function () {return this.adId&&this.config.type==='nativeAd'},
          "events": {
            "load": "handleAdLoaded",
            "error": "handleAdError"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "native-ad"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dialog"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "真的要退出吗？"
                      },
                      "shown": function () {return this.config.adSlotName==='exitAd'},
                      "classList": [
                        "dialog-title"
                      ],
                      "style": function () {return this.styles['title'].style}
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.styles['title'].text||'不感兴趣？'}
                      },
                      "shown": function () {return !(this.config.adSlotName==='exitAd')},
                      "classList": [
                        "dialog-title"
                      ],
                      "style": function () {return this.styles['title'].style}
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.adData.title||this.adData.desc}
                      },
                      "classList": [
                        "dialog-desc"
                      ]
                    },
                    {
                      "type": "ad-clickable-area",
                      "attr": {
                        "type": "click"
                      },
                      "classList": [
                        "dialog-image"
                      ],
                      "events": {
                        "click": "handleAdClick"
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.adData.imgUrlList?this.adData.imgUrlList[0]:this.adData.icon}
                          },
                          "classList": [
                            "dialog-ad-image"
                          ],
                          "style": function () {return this.styles.image&&this.styles.image.style}
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.adData.logoUrl}
                          },
                          "shown": function () {return this.adData.logoUrl},
                          "classList": [
                            "dialog-ad-text"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "广告"
                          },
                          "shown": function () {return !(this.adData.logoUrl)},
                          "classList": [
                            "dialog-ad-text"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "dialog-buttons"
                      ],
                      "style": function () {return this.styles.buttons&&this.styles.buttons.style},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "退出"
                          },
                          "shown": function () {return this.config.adSlotName==='exitAd'},
                          "classList": [
                            "button",
                            "button-cancel"
                          ],
                          "events": {
                            "click": "handleCancelClick"
                          },
                          "style": function () {return this.styles['button-cancel']&&this.styles['button-cancel'].style}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.styles['button-cancel']?this.styles['button-cancel'].text:'关闭'}
                          },
                          "shown": function () {return !(this.config.adSlotName==='exitAd')},
                          "classList": [
                            "button",
                            "button-cancel"
                          ],
                          "events": {
                            "click": "handleCancelClick"
                          },
                          "style": function () {return this.styles['button-cancel']&&this.styles['button-cancel'].style}
                        },
                        {
                          "type": "ad-clickable-area",
                          "attr": {
                            "type": "button"
                          },
                          "events": {
                            "click": "handleAdClick"
                          },
                          "classList": [
                            "button",
                            "button-primary"
                          ],
                          "style": function () {return this.styles['button-primary']&&this.styles['button-primary'].style},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.styles['button-primary']?this.styles['button-primary'].text:'查看并离开'}
                              },
                              "style": function () {return this.styles['button-primary']&&this.styles['button-primary'].style}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/assets/images/x.svg"
                      },
                      "classList": [
                        "close"
                      ],
                      "style": function () {return this.styles['close']&&this.styles['close'].style},
                      "events": {
                        "click": "handleCancelClick"
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
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/vivo.ux?uxType=comp&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/vivo.ux?uxType=comp& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.config.enable}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "shown": function () {return this.adData},
          "classList": function () {return ['part-ad', this.config.adSlotName==='exitAd'?'exit-ad':'']},
          "children": [
            {
              "type": "ad",
              "attr": {
                "adid": function () {return this.adData.adId}
              },
              "shown": function () {return this.adData&&this.config.type==='nativeAd'},
              "events": {
                "error": "handleAdError",
                "adclick": "handleAdClick"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dialog"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "真的要退出吗？"
                      },
                      "shown": function () {return this.config.adSlotName==='exitAd'},
                      "classList": [
                        "dialog-title"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "shown": function () {return !(this.config.adSlotName==='exitAd')},
                      "style": {
                        "flexDirection": "column"
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "不感兴趣？"
                          },
                          "classList": [
                            "dialog-title"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.adData.title||this.adData.desc}
                          },
                          "classList": [
                            "dialog-desc"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ad-clickable-area",
                      "attr": {
                        "type": "video-click"
                      },
                      "shown": function () {return this.adData.creativeType===4},
                      "classList": [
                        "dialog-image"
                      ]
                    },
                    {
                      "type": "ad-clickable-area",
                      "attr": {
                        "type": "click"
                      },
                      "shown": function () {return !(this.adData.creativeType===4)},
                      "classList": [
                        "dialog-image"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.adData.imgUrlList?this.adData.imgUrlList[0]:this.adData.icon}
                          },
                          "classList": [
                            "dialog-ad-image"
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.adData.logoUrl}
                          },
                          "shown": function () {return this.adData.logoUrl},
                          "classList": [
                            "dialog-ad-text"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "广告"
                          },
                          "shown": function () {return !(this.adData.logoUrl)},
                          "classList": [
                            "dialog-ad-text"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "dialog-buttons"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "退出"
                          },
                          "shown": function () {return this.config.adSlotName==='exitAd'},
                          "classList": [
                            "button",
                            "button-cancel"
                          ],
                          "events": {
                            "click": "handleCancelClick"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "关闭"
                          },
                          "shown": function () {return !(this.config.adSlotName==='exitAd')},
                          "classList": [
                            "button",
                            "button-cancel"
                          ],
                          "events": {
                            "click": "handleCancelClick"
                          }
                        },
                        {
                          "type": "ad-clickable-area",
                          "attr": {
                            "type": "button",
                            "value": "查看并离开"
                          },
                          "classList": [
                            "button",
                            "button-primary"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/assets/images/x.svg"
                      },
                      "classList": [
                        "close"
                      ],
                      "events": {
                        "click": "handleCancelClick"
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
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/index.ux?uxType=comp&importNames[]=rt-ad-default,importNames[]=rt-ad-huawei,importNames[]=rt-ad-oppo-beta,importNames[]=rt-ad-vivo":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/index.ux?uxType=comp&importNames[]=rt-ad-default,importNames[]=rt-ad-huawei,importNames[]=rt-ad-oppo-beta,importNames[]=rt-ad-vivo ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "block",
      "attr": {},
      "shown": function () {return this.config&&this.config.adId&&this.config.enable&&this.show},
      "children": [
        {
          "type": "rt-ad-huawei",
          "attr": {
            "config": function () {return this.config},
            "styles": function () {return this.styles}
          },
          "shown": function () {return this.brand==='huawei'},
          "events": {
            "show": "handleShow",
            "close": "handleClose",
            "error": "handleError"
          }
        },
        {
          "type": "rt-ad-vivo",
          "attr": {
            "config": function () {return this.config},
            "styles": function () {return this.styles}
          },
          "shown": function () {return (this.brand==='vivo')&&!(this.brand==='huawei')},
          "events": {
            "show": "handleShow",
            "close": "handleClose",
            "error": "handleError"
          }
        },
        {
          "type": "rt-ad-oppo-beta",
          "attr": {
            "config": function () {return this.config},
            "styles": function () {return this.styles}
          },
          "shown": function () {return (this.brand==='oppo')&&!(this.brand==='huawei')&&!(this.brand==='vivo')},
          "events": {
            "show": "handleShow",
            "close": "handleClose",
            "error": "handleError"
          }
        },
        {
          "type": "rt-ad-default",
          "attr": {
            "config": function () {return this.config},
            "styles": function () {return this.styles}
          },
          "shown": function () {return !(this.brand==='huawei')&&!(this.brand==='vivo')&&!(this.brand==='oppo')},
          "events": {
            "show": "handleShow",
            "close": "handleClose",
            "error": "handleError"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/gold-shop/index.ux?uxType=page&importNames[]=q-progress,importNames[]=ad-part":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/gold-shop/index.ux?uxType=page&importNames[]=q-progress,importNames[]=ad-part ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "sign-in"
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
                "value": "每天签到做任务，领取书币免费看"
              }
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "rules"
              ],
              "events": {
                "click": "handleRuleClick"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "规则"
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
            "content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "repeat": function () {return this.signInGlods},
              "classList": [
                "day-sign"
              ],
              "style": function () {return this.signDaysFlag[this.$idx]===1?'background-color: #f4f6fa;':'background-color: #ffe4c4;'},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item}
                  }
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/images/gold/currency.png"
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
            "footer"
          ],
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "button",
                "disabled": function () {return this.disabledSign},
                "value": function () {return this.signText}
              },
              "classList": [
                "sign-in-click"
              ],
              "style": function () {return this.disabledSign?'background-color: #f4f6fa;':''},
              "events": {
                "click": "handleSignIn"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "ad-part",
      "attr": {},
      "shown": function () {return this.pageShow}
    },
    {
      "type": "ad-custom",
      "attr": {
        "adunitid": function () {return this.customRender}
      },
      "shown": function () {return this.customRender&&this.pageShow}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "mask"
      ],
      "shown": function () {return this.showRule},
      "events": {
        "click": "handleMaskClick"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-wrap"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "签到规则"
                  },
                  "classList": [
                    "title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "1. 每日点击签到按钮即可完成一次签到"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "2. 签到可获取书币奖励"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "3.连续签到：自首日完成签到开始累计，连续七天签到为一个周期。签到中断，则重新开始计算"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "4. 本活动所有解释权由开发者所有，有任何疑问请联系应用内客服"
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

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./node_modules/qaui/src/components/progress/index.ux?uxType=comp&name=q-progress":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./node_modules/qaui/src/components/progress/index.ux?uxType=comp&name=q-progress ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/qaui/src/components/progress/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/qaui/src/components/progress/index.ux?uxType=comp")

$app_define$('@app-component/q-progress', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/qaui/src/components/progress/index.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/default.ux?uxType=comp&name=rt-ad-default":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/default.ux?uxType=comp&name=rt-ad-default ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./default.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/ad-part/ad/default.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./default.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/default.ux?uxType=comp")

$app_define$('@app-component/rt-ad-default', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./default.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/default.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/huawei.ux?uxType=comp&name=rt-ad-huawei":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/huawei.ux?uxType=comp&name=rt-ad-huawei ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./huawei.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/ad-part/ad/huawei.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./huawei.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/huawei.ux?uxType=comp")

$app_define$('@app-component/rt-ad-huawei', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./huawei.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/huawei.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp&name=rt-ad-oppo-beta":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp&name=rt-ad-oppo-beta ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./index.css?uxType=comp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./oppo-beta.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp")

$app_define$('@app-component/rt-ad-oppo-beta', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./oppo-beta.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/vivo.ux?uxType=comp&name=rt-ad-vivo":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/vivo.ux?uxType=comp&name=rt-ad-vivo ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./index.css?uxType=comp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./vivo.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/ad/vivo.ux?uxType=comp")

$app_define$('@app-component/rt-ad-vivo', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./vivo.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/ad/vivo.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/index.ux?uxType=comp&name=ad-part":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/index.ux?uxType=comp&name=ad-part ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./ad/default.ux?uxType=comp&name=rt-ad-default */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/default.ux?uxType=comp&name=rt-ad-default")
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./ad/huawei.ux?uxType=comp&name=rt-ad-huawei */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/huawei.ux?uxType=comp&name=rt-ad-huawei")
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./ad/oppo-beta.ux?uxType=comp&name=rt-ad-oppo-beta */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/oppo-beta.ux?uxType=comp&name=rt-ad-oppo-beta")
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./ad/vivo.ux?uxType=comp&name=rt-ad-vivo */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/ad/vivo.ux?uxType=comp&name=rt-ad-vivo")

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/ad-part/index.ux?uxType=comp")

$app_define$('@app-component/ad-part', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=rt-ad-default,importNames[]=rt-ad-huawei,importNames[]=rt-ad-oppo-beta,importNames[]=rt-ad-vivo */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/ad-part/index.ux?uxType=comp&importNames[]=rt-ad-default,importNames[]=rt-ad-huawei,importNames[]=rt-ad-oppo-beta,importNames[]=rt-ad-vivo")

})

/***/ }),

/***/ "./src/assets/data/constant.js":
/*!*************************************!*\
  !*** ./src/assets/data/constant.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tabList = exports.adUnitIds = void 0;
const tabList = [{
  title: '首页',
  icon: '\ue681'
}, {
  title: '找书',
  icon: '\ue602'
}, {
  title: '积分',
  icon: '\ue6cf'
}, {
  title: '我的',
  icon: '\ue605'
}];
exports.tabList = tabList;
const adUnitIds = {
  vivo: {
    bannerId: '6afd5ee590c94905948a4fc3ab5cdd3d',
    purePicture: 'f02dd0076e1343df94245d34e17d27b7',
    // 横版纯图
    leftPrightW: '9ff861d83a914824b8bd47fb6af8cca5',
    // 左图右文
    customRender: 'ef39f51be33f4c97b3ae656fd373ff75',
    // 自渲染
    goldCustomRender: 'b339b88dcf154246b5fb94bfd76a2476',
    rewardedVideo: '1d38ab5d7b9641149d8659fad5978845'
  },
  OPPO: {
    bannerId: '854368',
    purePicture: '854372',
    // 横版纯图
    leftPrightW: '854372',
    // 左图右文
    customRender: '854370',
    // 自渲染
    goldCustomRender: '854370',
    rewardedVideo: '854369'
  }
};
exports.adUnitIds = adUnitIds;

/***/ }),

/***/ "./src/components/ad-part/ad/data.js":
/*!*******************************************!*\
  !*** ./src/components/ad-part/ad/data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = {
  title: {
    text: '',
    style: ''
  },
  subtitle: {
    text: '',
    style: ''
  },
  image: {
    style: ''
  },
  buttons: {
    style: ''
  },
  'button-primary': {
    text: '好的',
    style: ''
  },
  'button-cancel': {
    text: '关闭',
    style: ''
  },
  close: {
    style: ''
  },
  'compliant-button': {
    text: '',
    style: ''
  }
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
/*!**************************************************!*\
  !*** ./src/pages/gold-shop/index.ux?uxType=page ***!
  \**************************************************/
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!../../../node_modules/qaui/src/components/progress/index.ux?uxType=comp&name=q-progress */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./node_modules/qaui/src/components/progress/index.ux?uxType=comp&name=q-progress")
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!../../components/ad-part/index.ux?uxType=comp&name=ad-part */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&type=import!./src/components/ad-part/index.ux?uxType=comp&name=ad-part")

var $app_style$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/gold-shop/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/chenjiangfeng/Documents/workspace/tech-stack-quickapp&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/gold-shop/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=q-progress,importNames[]=ad-part */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/gold-shop/index.ux?uxType=page&importNames[]=q-progress,importNames[]=ad-part")

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