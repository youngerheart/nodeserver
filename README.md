# nodeserver

<a href="https://www.npmjs.com/package/web-node-server"><img src="https://img.shields.io/npm/v/web-node-server.svg?sanitize=true" alt="Version"></a>

Achieve node server's domain name resolution and web application's router

## What is realized

1.This is a simple node http server，achieve a mapping for server and domain name，than a mapping for the static file and API route

2.right response for get， post， put， delete method，then submit the params in route query string and form data to your node backend.

## Setup and run

### Global module

make sure you have global installed node.

### Initialization

```
$ sudo npm install web-node-server
```

### Configure

You should configure server in this directory, specific method is:

```js
// configure server constant
// config.js
exports.constant = {
  // default port
  port: 9999,
  // welcome page's configure
  host: {
    backend: path.join(__dirname, '/../default/'),
    frondend: path.join(__dirname, '/../default/'),
    baseTemp: 'welcome.html'
  }
};
// Binding to the domain name
exports.serv = {
  // sites' domain name
  'localhost1': {
    // sites' backend workspace
    backend: '/Users/pg/demo/nodeserver/default/',
    // sites' frondend workspace
    frondend: '/Users/pg/demo/nodeserver/default/',
    // sites' static file entrance
    baseTemp: 'demo.html'
  }
};
```

At backend workspace (previously defined workspace) create config.js. Write the site routing information

```js
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

var list = {
  get: function(send, res, routeParams, getParams) {
    res.status = 200;
    res.data = {
      message: 'yes! this is a response data with get method',
      routeParams: routeParams,
      getParams: getParams
    };
    return send(res); // return application/json
  },
  post: function(send, res, routeParams, getParams, formData) {
    res.status = 200;
    res.html = '<html></html>';
    return send(res); // return text/html
  },
  delete: function(send, res, routeParams, getParams, formData) {
    res.status = 302;
    res.url = '/article';
    return send(res); // return 302 to a url
  }
}

```
### run

```js
// In root directory
node web-node-server.js

// In project directory (run this directory only, with local config)
// you may add web-node-server into you package.json
config = {
  'localhost': {
    backend: __dirname + '/api/',
    frondend: __dirname + '/web/',
    baseTemp: 'index.html'
  }
}
var server = require('web-node-server');
server.start(config);

```

## Learn more

There are some example in welcome page about get， post， put， delete method's using. You can reference

you can give me your suggestion in github.

## The basic file directory structure

If any changes please update this section

```js
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
