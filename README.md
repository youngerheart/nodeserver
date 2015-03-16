# nodeserver
Achieve node server's domain name resolution and web application's router

## Zero、What is realized

1.This is a simple node http server，achieve a mapping for server and domain name，than a mapping for the static file and API route

2.right response for get， post， put， delete method，than submit the params in route query string and form data to your node backend.

## First、Setup and run

### 0. Global module

make sure you have global installed node.

### 1. Initialization

```php
$ git clone git@github.com:youngerheart/nodeserver.git
```

### 2. Configure

You should configure server in this directory, specific method is:

```php
// configure server constant
// config.js
exports.constant = {
  // default port
  port: 9999,
  // welcome page's configure
  host: {
    workspace: __dirname + '/default/',
    baseTemp: 'welcome.html'
  }
};
// Binding to the domain name
exports.serv = {
  // sites' domain name
  'localhost1': {
    // sites' backend workspace
    workspace: '/Users/pg/demo/nodeserver/default/',
    // sites' static file entrance
    baseTemp: 'demo.html'
  }
};
```

At backend workspace (Ppreviously defined workspace) create config.js. Write the site routing information

```php
// project_url/config.js
// Define a API's url，all get method's API are in app.url.get object，the key is route url，value is a function which will be running. Than define post, put, delete route.
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
// In this directory
node index.js
```

## Second、Learn more

There are some example in welcome page about get， post， put， delete method's using. You can reference

you can give me your suggestion in github.

## Third、The basic file directory structure

If any changes please update this section

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