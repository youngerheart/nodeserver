
var list = {
  get: function(send, res, routeParams, getParams) {
    res.status = 200;
    res.data = {
      message: 'yes! this is a response data with get method',
      routeParams: routeParams,
      getParams: getParams
    };
    return send(res);
  },
  post: function(send, res) {
    return send(res);
  },
  put: function(send, res) {
    return send(res);
  },
  delete: function(send, res) {
    return send(res);
  }
};

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

