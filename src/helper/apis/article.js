import $ajax from '../ajax'

function getContent(data) {
  return $ajax.post('/rest/article/get_article_content', data)
}

function getList(data) {
  return $ajax.post('/rest/article/search_all', data)
}

export default {
  getContent,
  getList
}
