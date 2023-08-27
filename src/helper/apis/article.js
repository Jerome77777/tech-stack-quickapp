import $ajax from '../ajax'

function getContent(data) {
  return $ajax.post('/rest/article/get_article_content', data)
}

function getList(data) {
  return $ajax.post('/rest/article/search_all', data)
}

function getListByType(data) {
  return $ajax.post('/rest/article/search_by_type', data)
}

function getListByName(data) {
  return $ajax.post('/rest/article/search_by_name', data)
}

export default {
  getContent,
  getList,
  getListByType,
  getListByName
}
