var http = require('http');
var fs = require('fs');
var header = require('./tool/httpHeader').contentType;
var route = require('./router').response;
var conf = require('./config');

function responseTemp(response, head, file) {
  response.writeHead(200, head);
  response.write(file, 'binary');
  response.end();
};

function error(response, head) {
  response.writeHead(500, head);
  response.write('<h2>Server Error</h2><p>Error in api or template config about this domain</p>');
  response.end();
}

function start() {

  var host = conf.constant.host;
  function onRequest(request, response) {
    if(request.url === '/favicon.ico') return;
    for(var key in conf.serv) {
      if(request.headers.host.indexOf(key) !== -1) host = conf.serv[key];
    }

    if(!host) {
      error(response, httpHead);
      return;
    }

    var nowTemp = host.workspace + (request.url.replace('/', '') || host.baseTemp);
    var httpHead = header(nowTemp);
    
    conf.app = conf.getApp(host.workspace);

    // 直接定向到模板
    var defaultTemp = function() {
      fs.readFile(host.workspace + host.baseTemp, 'binary', function(err, file) {
        if(err) {
          error(response, httpHead);
          return;
        }
        responseTemp(response, httpHead, file);
      });
    };

    var send = function(res) {
      if(res) {
        // json格式
        response.writeHead(res.status, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(res));
        response.end();
      } else {
        fs.exists(nowTemp, function(exists) {
          if(!exists) {
            defaultTemp();
          } else {
            fs.readFile(nowTemp, 'binary', function(err, file) {
              if (err) {
                defaultTemp();
              } else {
                responseTemp(response, httpHead, file);
              }
            });
          }
        });
      }
    };

    route(conf.app.url, request, send);
  }

  http.createServer(onRequest).listen(conf.constant.port);
  console.log('server running at ' + conf.constant.port);
}

exports.start = start;
