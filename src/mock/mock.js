// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 1; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }

    return {
        articles: articles
    }
    
}





const getData = function() {
    let getNewsData = [
        {'id': 1, 'quantity': 1, 'name': '苹果'},
        {'id': 2, 'quantity': 0, 'name': '香蕉'},
        {'id': 3, 'quantity': 5, 'name': '西瓜'},
        {'id': 4, 'quantity': 2, 'name': '桃子'},
    ]
    return getNewsData
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/product', 'get', getData);
Mock.mock('/news/index', 'post', produceNewsData);