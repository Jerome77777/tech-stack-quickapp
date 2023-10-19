import $fetch from '@system.fetch'
import router from '@system.router'
import $utils from './utils'
import { server_address, uid_key } from './constants'

function requestHandle(params) {
  console.log(`🤖 当前正在发起请求的 Url 是： ${params.url}`)
  return new Promise((resolve, reject) => {
    $fetch.fetch({
      url: server_address + params.url,
      method: params.method,
      data: params.data,
      header: {
        'Content-Type': 'application/json'
      },
      success: data => {
        if (data.code == 200) {
          resolve(JSON.parse(data.data).data)
        } else {
          resolve(JSON.parse(data.data))
        }
      },
      fail: (data, code) => {
        console.log(`🐛 request fail, code = ${code} `, data)
        reject(data)
      },
      complete: data => {
        reject(data)
      }
    })
  })
}

export default {
  post: async function(url, params, jumptoLogin = false) {
    params.requestTimeStamp = new Date().getTime()
    const uid = (await $utils.getStorage(uid_key)) || '1'
    if (!$utils.isEmptyObject(uid)) {
      params.uid = uid
    }

    if (!uid && jumptoLogin) {
      router.push({
        uri: 'pages/login'
      })
      reject()
    }

    return requestHandle({
      method: 'post',
      url,
      data: params
    })
  },
  get: function(url, params = {}, op) {
    return requestHandle({
      method: 'get',
      url: $utils.queryString(url, params)
    })
  }
}
