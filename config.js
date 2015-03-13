
function app() {
  // 有配置文件去抓取，否则读取默认配置
  var res = require('./default/config').app;
  return res;
}

exports.app = app();

exports.constant = {
  port: 9999
};

exports.serv = {
  'localhost': {
    workspace: '/Users/pg/demo/nodeserver/default/',
    baseTemp: 'welcome.html'
  }
};
