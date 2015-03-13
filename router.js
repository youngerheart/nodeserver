
var url = null,
  arg = [], 
  res = {status: 404, data: 'api not found'};

function getMethod(app, url) {
  // get
  for(var key in app.get) {
    if(url.indexOf(key) !== -1) {
      url = url.replace(key + '/', '');
      if(url) {
        arg = arg.concat(url.split('/'));
      }
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
      postMethod(app, url);
      break;
    default:
      getMethod(app, url);
  }
}

exports.response = response;
