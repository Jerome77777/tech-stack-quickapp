import $ajax from '../ajax'

// {
// 	"phoneNumber":"123456789",
// 	"userName":"qyycenter",
// 	"passwd":"123456yyc",
// 	"createTimeStamp":"1666438931"
// }
// 用户注册

function userRegister(data) {
  return $ajax.post('/rest/user/register', data)
}

// {
// 	"uid":"123456789",
// 	"passwd":"123456yyc",
// 	"createTimeStamp":"1666438931"
// }
function userLogin(data) {
  return $ajax.post('/rest/user/login', data)
}

// {
// 	"uid":"123456789",
// 	"imei":"86594133722",
// 	"phoneModel":"vivo x27",
// 	"otherDeviceInfo":{"system":"android 8","ip":127.0.0.1","mac":"a4:89:ce:66:33:7c","coreVersion":"5.4.147-qgky-66c244"}//这里面的命名只是距离，根据实际情况上报设备的其他信息
// 	"createTimeStamp":"1666438931"
// }
function sendUserInfoToServer(data) {
  return $ajax.post('/rest/device/enter', data)
}

export default {
  userRegister,
  userLogin,
  sendUserInfoToServer
}
