import $ajax from '../ajax'

function pushDeviceInfo(data) {
  return $ajax.post('/rest/device/enter', data || {})
}

export default {
  getPositionByLocation(data) {
    return $ajax.get('https://apis.map.qq.com/ws/geocoder/v1/', data)
  },
  pushDeviceInfo
}
