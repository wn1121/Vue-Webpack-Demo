
export default {

  /**
   * 获得主机名
   * 如果当前完整url是：http://pintuan.test.odianyun.com/my-center/home.html?p=1
   * 返回：http://pintuan.test.odianyun.com
   */
  getHost () {
    var url = location.protocol + "//" + location.host;
    return url;
  },

  /**
   * 获得相对url
   * 如果当前完整url是：http://pintuan.test.odianyun.com/my-center/home.html?p=1
   * 返回：/my-center/home.html?p=1
   */
  getRelatedUrl () {
    return location.pathname + (location.search || "") + (location.hash || "");
  },

  /**
   * url参数格式化
   * 例：?param=1
   * 参数得到方式：paramsObj.param
   */
  paramsFormat (url) {
    var qInd = url.indexOf('?');
    var sharpInd = url.indexOf('#'); //路由
    var search = "";
    var paramsList = [];
    var paramsObj = {};

    if (qInd >= 0) {
      if (sharpInd > 0) {
        search = url.substring(qInd + 1, sharpInd);
      } else {
        search = url.substring(qInd + 1);
      }
      paramsList = search.split('&');
      for (var ind in paramsList) {
        var param = paramsList[ind];
        if(param) {
          var pind = param.indexOf("=");
          if (pind >= 0) {
            paramsObj[param.substring(0, pind)] = param.substr(pind + 1);
          } else {
            paramsObj[param] = "";
          }
        }

      }
    }
    return paramsObj;
  },

  /**
   * 获取url hash的值
   * 例：/details.html?itemid=1#sort=asc&price=100
   * 返回: {sort: "asc", price: 100 }
   */
  hashFormat (url) {
    var hashObj = {};
    var sind = url.indexOf('#');
    if (sind >= 0) {
      var hstr = url.substring(sind+1);
      var paramsList = hstr.split("&");
      for(var i=0; i<paramsList.length; i++) {
        var param = paramsList[i];
        var pind = param.indexOf("=");
        if (pind>=0) {
          hashObj[param.substring(0, pind)] = param.substr(pind + 1);
        } else {
          hashObj[param] = "";
        }
      }
    }

    return hashObj;
  },

  /**
   * 返回时间的天、时、分、秒
   * param : 秒
   */
  getHhmmss (time) {
    time = parseInt(time);
    if(time <= 0) time = 0;
    var s = time >= 60 ? time%60 : time;
    var m = parseInt((time>=3600?time%3600:time)/60);
    var h = parseInt((time>=86400?time%86400:time)/3600);
    var d = parseInt(time/86400);
    h = h<10 ? '0'+h : h;
    m = m<10 ? '0'+m : m;
    s = s<10 ? '0'+s : s;

    return {
      d: d,
      h: h,
      m: m,
      s: s
    }
  },

  /**
   * 比较版本号大小
   */
  compareVersionSize (oldv, newv) {
    var oldArr = oldv.split('.');
    var newArr = newv.split('.');

    for(var i=0; i<newArr.length; i++) {
      var oldnum = parseInt(oldArr[i]);
      var newnum = parseInt(newArr[i]);
      if(oldnum > newnum) {
        return false;
      }
    }
    return true;
  },

  /**
   * 对象合并
   */
  mergeObj (...sources) {
    return Object.assign({}, ...sources);
  },

  /**
   * 过滤函数
   */
  filterNull (o) {
    for (var key in o) {
      if (o[key] == null) {
        delete o[key]
      }
      if (toType(o[key]) == 'string') {
        o[key] = o[key].trim()
        if (o[key].length == 0) {
          delete o[key]
        }
      }
    }
    return o
  },

  /**
   * 自定义判断元素类型
   */
  toType (obj){
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
}
