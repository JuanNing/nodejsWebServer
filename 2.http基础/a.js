const http = require('http');
const
const server = http.createServer((req, res) => {
    res.end('hello world!'); //end方法是固定的吗?
})
server.listen(8000); //不知道为啥是8000，8000为端口号，监听有啥用？浏览器访问 http://localhost:8000/
//输出结果，拒绝了访问？不知道为啥，