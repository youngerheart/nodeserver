var http = require('http');
var fs = require('fs');
var header = require('./tool/httpHeader').contentType;
var route = require('./router').response;
var conf = require('./config');

var responseTemp = function(response, head, file) {
  response.writeHead(200, head);
  response.write(file, 'binary');
  response.end();
};

function start() {
  var host = conf.serv['localhost'];

  function onRequest(request, response) {
    if(request.url === '/favicon.ico') return;
    var nowTemp = host.workspace + request.url.pathname;
    var httpHead = header(nowTemp);

    // 直接定向到模板
    var defaultTemp = function() {
      fs.readFile(host.workspace + host.baseTemp, 'binary', function(err, file) {
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

    route(conf.app, request, send);
  }

  http.createServer(onRequest).listen(conf.constant.port);
  console.log('server running at ' + conf.constant.port);
}

function config(data) {

  if(data && data.url){
    conf.app = data;
  } else {
    throw 'APP CONFIG ERROR!';
  }
}

exports.start = start;
exports.config = config;
