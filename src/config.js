const path = require('path')

exports.getApp = function(route) {
  // 有配置文件去抓取，否则读取默认配置
  var res = require(route + 'config').app;
  return res;
}

exports.constant = {
  port: 9999,
  host: {
    backend: path.join(__dirname, '/../default/'),
    frondend: path.join(__dirname, '/../default/'),
    baseTemp: 'welcome.html'
  }
};

// exports.serv = {
//   'localhost': {
//     backend: '/Users/pg/demo/ngblog/api/',
//     frondend: '/Users/pg/demo/ngblog/web/',
//     baseTemp: 'system/html/layout/layout.html'
//   }
// };
