import $ajax from '../../helper/ajax'

const bookId2Url = {
  1: 'https://raw.githubusercontent.com/luoxuhai/chinese-novel/master/resources/%E4%B8%96%E6%80%81%E4%BA%BA%E6%83%85/%E7%BA%A2%E6%A5%BC%E6%A2%A6/xxx.html',
  2: 'https://raw.githubusercontent.com/luoxuhai/chinese-novel/master/resources/%E5%8E%86%E5%8F%B2%E6%BC%94%E4%B9%89/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89/xxx.html',
  3: 'https://raw.githubusercontent.com/luoxuhai/chinese-novel/master/resources/%E9%AC%BC%E6%80%AA%E7%A5%9E%E9%AD%94/%E8%A5%BF%E6%B8%B8%E8%AE%B0/xxx.html',
  4: 'https://raw.githubusercontent.com/luoxuhai/chinese-novel/master/resources/%E8%8B%B1%E9%9B%84%E4%BC%A0%E5%A5%87/%E6%B0%B4%E6%B5%92%E4%BC%A0/xxx.html',
  5: 'https://raw.githubusercontent.com/luoxuhai/chinese-novel/master/resources/%E4%B8%96%E6%80%81%E4%BA%BA%E6%83%85/%E9%87%91%E7%93%B6%E6%A2%85/xxx.html'
}

export async function getBookContent(bookId, chapterId) {
  const url = bookId2Url[bookId].replace(/xxx/, chapterId - 1)
  const data = (await $ajax.get(url)).data
  //替换掉返回数据中的<br>标签
  const content = data.replace(/<br>/g, '\n')
  return content
}
