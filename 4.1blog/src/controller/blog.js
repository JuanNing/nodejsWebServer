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
    //博客的主要属性为title和content
    return {
        id: 3
    }
}
const updateBlog = (id, blogData = {}) => {
    //博客的主要属性为title和content,有Id是为了找到对应更新的blog
    return true
}
const del = (id) => {
    //删除博客时，只需要一个id值即可
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    del,
}