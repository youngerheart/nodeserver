# nodeserver
Achieve node server's domain name resolution and web application's router

## 零、实现了什么

1.这是一个简单的 node http 服务器，实现了服务器对域名的映射，以及每一个站点后端静态文件与API路径的映射

2.对 get， post， put， delete 方法可以正确响应，并提交给站点后端处理方法在路径中的参数，与get，form data方式传递的参数

## 一、安装与运行

### 0. 全局模块

请确保已经全局安装了 node 

### 1. 初始化：

```php
$ git clone git@github.com:youngerheart/nodeserver.git
```

### 2. 配置：
1. 在全局安装之后，可以在本目录配置服务器，具体方法为:
```php
// 对服务器常量进行配置
// config.js
exports.constant = {
  // 默认端口
  port: 9999,
  // 欢迎页配置，无需修改
  host: {
    workspace: __dirname + '/default/',
    baseTemp: 'welcome.html'
  }
};
// 对服务器域名进行绑定
exports.serv = {
  // 站点域名
  'localhost1': {
    // 站点后端根目录
    workspace: '/Users/pg/demo/nodeserver/default/',
    // 站点静态文件入口
    baseTemp: 'demo.html'
  }
};
```

2. 在站点根目录 (之前定义的workspace) 中新建 config.js 文件，在其中写入站点路由信息

```php
// project_url/config.js
// 定义某个接口的url，所有的get接口放在app.url.get中，其中key为路由url，value为要触发的函数，类似的定义post, put, delete中的路由
exports.app = {
  url: {
    'get': {
      '/api': list.get
    },
    'post': {
      '/api': list.post
    },
    'put': {
      '/api': list.put
    },
    'delete': {
      '/api': list.remove
    }
  }
}
```
3.run

```php
// 安装目录
node index.js
```

## 二、还有想说的

欢迎页中有 get， post， put， delete 接口的定义方法示例，可以参考

会不断优化与更新代码。

## 三、基本目录文件结构

若有变化请更新本段

```php
.
├── config.js           ... 域名解析示例配置
├── index.js            ... 示例启动代码
├── nodeserver.js       ... 定义response回调，并启动服务
├── router.js           ... 区分不同的请求，做出不同的处理
├── tool                ... 自制的一些需要到的小工具
└── default             ... 一个在找不到初始化配置时的默认页面
    ├── config.js       ... web 路由示例配置
    ├── demo.html       ... 路由测试页面
    └── welcome.html    ... 欢迎页面，其中有各种功能演示


```