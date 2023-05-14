// 引入 EXpress.js 框架文件
const express = require('express');
// 创建一个 Express 应用实例
const app = express();
// 设置当前 Web 服务的访问端口 
const port = 3000;

//设置模板引擎为EJS
app.set('view engine','ejs') ;  
//设置项目根路径下的views目录为模板文件存放目录
app.set('views', __dirname + '/views') ;

// 响应客户端对于“/”目录的HTTP GET请求
app.get('/', (req, res) => {
    // 设置模板变量的值
    const myName = 'Express';
    
    // 根据模板变量的值动态生成<h1>标签
    // res.send('<h1>Hello '+myName+'!</h1>');
    // 调用模板引擎的渲染方法，该方法需传递两个参数：
    // 第一个参数用于指定存储在vfews目录中的模板文件名
    // 第二个参数是一个JSON格式的对象，用于设置模板变量
    res.render('index',{
        name: myName+' EJS', // 传递模板变量的值
        messages : ['owlman', '2022-3-30']
    }) ;
})

// 设置当前服务启动时要监听的端口以及要执行的动作
app.listen(port, () => {
    console.log(`请访问http://localhost:${port}/，按Ctrl+C终止服务！`);
})
