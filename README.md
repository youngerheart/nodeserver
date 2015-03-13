# nodeserver
Achieve node server's domain name resolution and web application's router

## 一、安装与运行

### 0. 全局模块

请确保已经全局安装了 node 

### 1. 初始化：

```php
$ git clone git@github.com:youngerheart/nodeserver.git
```

### 2. Test & Run

测试：
```php
$ cd nodeserver && node index.js 
```

浏览器运行：http://127.0.0.1:9999

## 二、基本用法

请先参考 `config.js` 域名解析示例配置 与 `default/config.js` web 路由示例配置

基本功能完成后将进行更新

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
    └── welcome.html    ... 欢迎页面，其中有各种功能演示


```