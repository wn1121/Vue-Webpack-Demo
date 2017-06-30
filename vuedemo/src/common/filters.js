/**
 * 自定义过滤器
 */
import Vue from "vue";

Vue.filter("reverseArray",function(value,ignore){
    "use strict";
    if(ignore) return value;
    if(value&&value instanceof Array){
        return value.reverse();
    }
    return value;
})

Vue.filter('cut',function(input,left){
    var _in;
    if(_in=(input||0)-0){
        _in=_in.toFixed(2);
        return left?_in.split('.')[0]:_in.split('.')[1];
    }
    return '0';
});

Vue.filter('afterSaleType', function (value) {
    switch(value) {
        case 1:
            return "退款";
        case 2:
            return "退款退货";
        case 4:
            return "换货";
        default:
            return "";
    }
});
// 根据0.88 0.80返回这类折扣数 ; 0.88返回8.8 ; 0.80返回8
Vue.filter('discount', function (value) {
    var strs = returnFloat(value);
    var arr = strs.split(".");
    var endValue = 0;
    // 取小数点后的数
    var value = arr[arr.length - 1];

    if(value%10 == 0){
        endValue = parseInt(value/10);
        return endValue;
    }else{
        endValue = parseInt(value/10) + '.' + value%10;
        return endValue;
    }

});
// 去掉数据的前后空格
Vue.filter('selectItrim',function (value) {
    var str = trim(value);
    return str
});
function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
}
// 保留两位小数 不足补0
function returnFloat(value){
    var value=Math.round(parseFloat(value)*100)/100;
    var xsd=value.toString().split(".");
    if(xsd.length==1){
        value=value.toString()+".00";
        return value;
    }
    if(xsd.length>1){
        if(xsd[1].length<2){
            value=value.toString()+"0";
        }
        return value;
    }
}
/**
 * 去支付的链接，主要针对微信支付
 */
Vue.filter('gopay', function (value, param) {
    param = param || '';
    return Vue.utils.getPayUrl(value, param);
});

/**
 * 格式化商品的系列属性
 * 例子：X 粉色
 */
Vue.filter('fmtProductAttrs', function (attrs) {
    if (!attrs || attrs.length==0) {
        return  "";
    }

    var arr = [];
    for (var i = 0; i < attrs.length; i++) {
        arr.push(attrs[i].value);
    }

    return arr.join(" ");
});
//过滤数组
Vue.filter('filterIgnore',function(attrs,ig,property){
    "use strict";
    if(!(attrs instanceof Array)||attrs instanceof Array &&attrs.length==0) return '';
    var attr=[];
    attrs.forEach(function(v){
        if(property) {
            if (v[property] != ig)
                attr.push(v);
        }else {
            if (v != ig)
                attr.push(v);
        }
    })
    return attr;

});
//1、退款2、退货4、换货
Vue.filter('afterSaleDetailsType',function(type){
    if (type == 1) {
        return "退款";
    } else if (type == 2) {
        return "退货";
    } else if (type == 4) {
        return "换货";
    }
    return type ;
});
//自定义日期时间过滤器
/**
 * yyyy/MM/dd hh:mm:ss
 * yyyy年MM月dd日 hh时mm分ss秒 w
 */
Vue.filter('datetime',function(date,format){
    "use strict";
    var weeks=['周日','周一','周二','周三','周四','周五','周六'];
    if(!date) return '';
    else if((format||'').length==0)
        return Vue.filter('date')(date);
    else{
        var t=new Date(date);
        var y=t.getYear()+1900,
            M=t.getMonth()+1,
            d=t.getDate(),
            w=t.getDay(),
            h=t.getHours(),
            m=t.getMinutes(),
            s=t.getSeconds();
        return format.replace(/(yyyy|YYYY)/,y)
            .replace(/MM/,M>9?M:'0'+M)
            .replace(/(dd|DD)/,d>9?d:'0'+d)
            .replace(/hh/,h>9?h:'0'+h)
            .replace(/mm/,m>9?m:'0'+m)
            .replace(/ss/,s>9?s:'0'+s)
            .replace(/M/,M)
            .replace(/(w|W)/,weeks[w])
            .replace(/h/,h)
            .replace(/m/,m)
            .replace(/s/,s);
    }
});
