
var url = null,
  arg = [], 
  res = {status: 404, data: 'api not found'};

function getMethod(app, url) {
  // get
  for(var key in app.get) {
    if(url.indexOf(key) !== -1) {
      url = url.replace(key, '').split('?');
      // 解析之后的url参数
      arg[2] = url[0] ? url[0].replace('/', '').split('/') : null;
      // 继续解析带问号的部分,并使用一个对象返回
      if(url[1] && url[1].length) {
        var param = url[1].split('&');
        var paramObj = {};
        var parse = [];
        for(var i = 0; i < param.length; i ++) {
          parse = param[i].split('=');
          paramObj[parse[0]] = parse[1];
        }
      }
      arg[3] = paramObj;
      app.get[key].apply(this, arg);
      return;
    }
  }
  // 尝试获取静态文件
  arg[0]();
}

function postMethod(app, url) {
  // post
  for(var key in app.post) {
    if(url.indexOf('key' !== -1)) {}
  }
}

function response(app, request, send) {
  url = request.url;
  // 每个方法中的第一个参数为返回数据的调用函数，第一个为需要返回的数据信息
  arg = [send, res];
  switch(request.method) {
    case 'GET':
      getMethod(app, url);
      break;
    case 'POST':
      postMethod(app, url, request);
      break;
    default:
      getMethod(app, url);
  }
}

exports.response = response;
