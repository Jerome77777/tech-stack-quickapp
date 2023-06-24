import $ajax from '../ajax'

// { 参数
// 	"uid":"123456789",
// 	"searchAll":"true",
// 	"bookShelf":"",
// 	"searchType":"",
// 	"bookId":"",
// 	"requestTimeStamp":"1666438931"
// }
// 首页请求全部小说
function getAllBooks(data) {
  return $ajax.post('/rest/book/search_all', data)
}

// {
// 	"uid":"123456789",
// 	"searchAll":"false",
// 	"bookShelf":"",
// 	"searchType":"三国",
// 	"bookId":"",
// 	"requestTimeStamp":"1666438931"
// }
// 根据书籍类型获取书籍
function getBooksByType(data) {
  return $ajax.post('/rest/book/search_by_type', data)
}

// {
// 	"uid":"123456789",
// 	"searchAll":"false",
// 	"bookShelf":"true",
// 	"searchType":"",
// 	"bookId":"",
// 	"requestTimeStamp":"1666438931"
// }
//获取用户书架的书籍
function getUserBooksShelf(data) {
  return $ajax.post('/rest/book/book_shelf', data)
}

// {
// 	"uid":"123456789",
// 	"searchAll":"",
// 	"bookShelf":"",
// 	"searchType":"",
// 	"bookId":"73",
// 	"requestTimeStamp":"1666438931"
// }
// 获取书籍章节
function getBookChapter(data) {
  return $ajax.post('/rest/book/get_book_chapter', data)
}

function getBookChapterContent(data) {
  return $ajax.post('/rest/book/get_chapter_content', data)
}

function setUserBooksShelf(data) {
  return $ajax.post('/rest/book/add_book_shelf', data, true)
}

function removeUserBooksShelf(data) {
  return $ajax.post('/rest/book/remove_book_shelf', data, true)
}

function searchByName(data) {
  return $ajax.post('/rest/book/search_by_name', data)
}

export default {
  setUserBooksShelf,
  removeUserBooksShelf,
  getAllBooks,
  getUserBooksShelf,
  getBookChapter,
  getBooksByType,
  getBookChapterContent,
  searchByName
}
