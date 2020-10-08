const getList = (author, keyword) => {
    //先暂时返回假数据(为了测试格式为正确的)
    return [{
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1602131880073,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1602131973579,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return [{
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1602131880073,
        author: 'zhangsan'
    }]
}
const newBlog = (blogData = {}) => {
    console.log('new BLog...', blogData);
    return {
        id: 3
    }
}
module.exports = {
    getList,
    getDetail,
    newBlog,
}