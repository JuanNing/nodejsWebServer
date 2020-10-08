//获取原生nodejs的http和querystring模块
const http = require('http');
const querystring = require('querystring');

//1.nodejs处理get请求
// //返回的对象
// const server = http.createServer((req, res) => {
//     //为什么要按照下面这个顺序写呢？逻辑，流程和实际情况的联系是啥
//     console.log('method:', req.method);//结果应该为GET
//     const url = req.url;
//     console.log('url:', url);
//     //将url，a.html?a=100&b=200,以逗号为分割拆分，所得为string类型
//     req.query = querystring.parse(url.split('?')[1])
//     console.log('query:', req.query);
//     //res要求返回为对象，需将string 转化为对象格式
//     res.end(JSON.stringify(req.query)); //结束用语，返回
// })

//2.nodejs处理post请求
const server = http.createServer((req, res) => {
    if (req.method === 'POST') { //req数据格式
        //req的一大堆头部headers的内容
        console.log('req content-type', req.headers['content-type']);
        //接受数据
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString() //chunk原本数据为二进制，需用toString转化为字符串类型
        })
        req.on('end', () => {
            console.log('postData:', postData);
            res.end('hello world') //一开始，这里写成了log,一直没有结束,之后写成了req,应该最后的res返回结束
        })
    }
})

server.listen(8000);
console.log('OK');