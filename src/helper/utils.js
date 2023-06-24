const dayjs = require('dayjs')
const prompt = require('@system.prompt')
const router = require('@system.router')
const storage = require('@system.storage')
const device = require('@system.device')
const { reward_ad_type_key } = require('../helper/constants')
const hook2global = global.__proto__ || global

dayjs().format()

function queryString(url, query) {
  let str = []
  for (let key in query) {
    str.push(key + '=' + query[key])
  }
  let paramStr = str.join('&')
  return paramStr ? `${url}?${paramStr}` : url
}

function setStorage(key, value) {
  // 设置storage
  storage.set({
    key,
    value: JSON.stringify(value),
    fail(data, code) {
      console.log(`setStorage fail, code = ${code}`)
    }
  })
}

function removeStorage(key) {
  storage.delete({
    key,
    fail(data, code) {
      console.log(`setStorage fail, code = ${code}`)
    }
  })
}

function getStorage(key) {
  return new Promise((resolve, reject) => {
    // 获取storage
    storage.get({
      key,
      success(data) {
        if (data) {
          resolve(JSON.parse(data))
        } else {
          resolve('')
        }
      },
      fail(data, code) {
        console.log(`getStorage fail, code = ${code}`)
        reject({ data, code })
      }
    })
  })
}

function isEmptyObject(data) {
  if (Object.keys(data).length === 0) {
    return true
  }
  return false
}

function getRandomBooks(arr) {
  let result = []
  let ranNum = 5
  for (let i = 0; i < ranNum; i++) {
    let ran = Math.floor(Math.random() * (arr.length - i))
    result.push(arr[ran])
    arr[ran] = arr[arr.length - i - 1]
  }
  return result
}

function getCurrentDay() {
  return dayjs(new Date()).format('YYYY-MM-DD')
}

function apartDay(day1, day2) {
  return dayjs(day1).diff(day2, 'day')
}

function getAddWeekDays() {
  const day = new Date().getDate()
  const res = []

  for (let i = 0; i < day; i++) {
    res.push(
      dayjs(new Date())
        .subtract(day - i, 'day')
        .format('YYYY-MM-DD')
    )
  }
  for (let i = day; i < 7; i++) {
    res.push(
      dayjs(new Date())
        .add(i - day, 'day')
        .format('YYYY-MM-DD')
    )
  }
  return res
}

function analytics(type, appName) {
  device.getDeviceId({
    success: async function(data) {
      $apis.gold.reportAdInfo({
        deviceId: data.deviceId || '',
        appName,
        viewAds: 1,
        clickAds: 1 //1或0,1-点击
      })
      const rewardTypes = await getStorage(reward_ad_type_key)
      const rewardType = type === 'custom' ? 'ad_custom' : 'ad_video'
      $apis.gold.rewardGolds({
        deviceId: data.deviceId || '',
        rewardType,
        rewardNum: rewardTypes[rewardType].goldNum
      })
    }
  })
}

export default {
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
    if (!message) return
    prompt.showToast({
      message: message,
      duration
    })
  },
  route2theUrl(url, params, clear = false) {
    router.push({
      uri: url,
      params: params
    })
    if (clear) {
      router.clear()
    }
  },
  routeReplacetheUrl(url, params) {
    router.replace({
      uri: url,
      params: params
    })
  },
  routerBack() {
    router.back()
  },
  setShelfList(list, storage = false) {
    hook2global.$shelfList = list
    if (storage) {
      setStorage('bookshelf', JSON.stringify(list))
    }
  }
}
