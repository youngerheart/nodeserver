
exports.getApp = function(route) {
  // 有配置文件去抓取，否则读取默认配置
  var res = require(route + 'config').app;
  return res;
}

exports.constant = {
  port: 9999,
  host: {
    workspace: __dirname + '/default/',
    baseTemp: 'welcome.html'
  }
};

exports.serv = {
  'localhost1': {
    workspace: '/Users/pg/demo/nodeserver/default/',
    baseTemp: 'demo.html'
  }
};
