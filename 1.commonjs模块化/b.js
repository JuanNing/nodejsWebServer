const { add, mul } = require('./a');
//将从a接收到的内容对象，分别赋值给add和mul，可接收对象
//???:一定只能是使用const吗？vs推荐使用let,有点问题,用const是为了保证不变化吗？方法也可不变吗？
/*法二：
    const opt=require('./a');
    const add=opt.add;
    const mul=opt.mul;
    效果和第一句同 */
const sum = add(2, 2);
const result = mul(2, 4);
console.log(sum, result);
// nodemon -->热更新
//建议学一下基础的linux 和cmd
//cls====clear