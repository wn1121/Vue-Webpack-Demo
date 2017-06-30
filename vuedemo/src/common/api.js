/**
 * api
 */
import request from 'superagent';
import Utils from '../common/utils';
import Host from '../config/host';

const root = Host.test;

function apiBase(method, url, params, success, failure) {
  var r = request(method, url).type('text/plain')
  if (params) {
    params = Utils.filterNull(params);
    if (method === 'POST' || method === 'PUT') {
      if (Utils.toType(params) == 'object') {
        params = JSON.stringify(params);
      }
      r = r.send(params)
    } else if (method == 'GET' || method === 'DELETE') {
      r = r.query(params)
    }
  }
  r.end(function(err, res) {
    if (err) {
      alert('api error, HTTP CODE: ' + res.status);
      return;
    };
    if (res.body.success == true) {
      if (success) {
        success(res.body);
      }
    } else {
      if (failure) {
        failure(res.body);
      } else {
        alert('error: ' + JSON.stringify(res.body));
      }
    }
  });
}

export default {
  get (url, params, success, failure) {
    return apiBase('GET', root + '/' + url, params, success, failure)
  },
  post (url, params, success, failure) {
    return apiBase('POST', root + '/' + url, params, success, failure)
  },
  put (url, params, success, failure) {
    return apiBase('PUT', root + '/' + url, params, success, failure)
  },
  delete (url, params, success, failure) {
    return apiBase('DELETE', root + '/' + url, params, success, failure)
  }
}
