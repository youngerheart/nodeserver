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
$ sudo npm install -g web-node-server
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
├── config.js           ... server's domain example configure
├── index.js            ... example startup code
├── nodeserver.js       ... define response callback，than start server
├── router.js           ... distinguish different request， make different treatment
├── tool                ... gadgets
└── default             ... default welcome page
    ├── config.js       ... example route configure
    ├── demo.html       ... demo page about a demo configure
    └── welcome.html    ... welcome page，the function demonstration


```