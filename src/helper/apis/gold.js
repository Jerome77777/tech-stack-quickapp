import $ajax from '../ajax'
// {
// 	"uid":"123456789",
// 	"createTimeStamp":"1666438931"
// }
// 获取用户积分数
function getUserGolds(data) {
  return $ajax.post('/rest/gold/user', data || {})
}

// {
// 	"uid":"123456789",
// 	"rewardType":"签到或大转盘或对应的广告类型",
// 	"rewardNum":"888",//奖励的积分数量，如果是大转盘的场景，为转到的实际数量，其他的场景可置为空
// 	"createTimeStamp":"1666438931"
// }
// 积分奖励
function rewardGolds(data) {
  return $ajax.post('/rest/gold/reward', data)
}

// 获取奖励清单：localhost:8081/rest/gold/reward_type
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
  return $ajax.post('/rest/gold/reward_type', data)
}

// {
// 	"uid":"123456789",
// 	"createTimeStamp":"1666438931"
// }
// 福利大转盘
function largeTurntable(data) {
  return $ajax.post('/rest/gold/large_turntable', data)
}

// 签到
function signIn(data) {
  return $ajax.post('/rest/user/sign_in', data || {})
}

// 获取签到 list
function getSignInList(data) {
  return $ajax.post('/rest/user/get_sign_in_list', data)
}

// 广告信息采集接口
function reportAdInfo(data) {
  return $ajax.post('/rest/device/ad_behavior', data)
}

export default {
  getRewardType,
  largeTurntable,
  rewardGolds,
  getUserGolds,
  signIn,
  getSignInList,
  reportAdInfo
}
