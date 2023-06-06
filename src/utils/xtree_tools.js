import $ from "jquery";

import '@/assets/js/tree.js'

var data = [{
  "title": "江西",
  "id": 1,
  "children": [{
      "title": "南昌",
      "id": 1000,
      "children": [{
          "title": "<a onclick=openWin('https://baike.baidu.com/item/233/18862861')>青山湖区</a>",
          "id": 10001
      }, {
          "title": "高新区",
          "id": 10002
      }]
  }, {
      "title": "九江",
      "id": 1001
  }, {
      "title": "赣州",
      "id": 1002
  }]
}, {
  "title": "广西",
  "id": 2,
  "children": [{
      "title": "南宁",
      "id": 2000
  }, {
      "title": "桂林",
      "id": 2001
  }]
}, {
  "title": "陕西",
  "id": 3,
  "children": [{
      "title": "西安",
      "id": 3000
  }, {
      "title": "延安",
      "id": 3001
  }]
}]

$.ajax({
   type: "get",
   url: "loaddata",
   dataType: "json",
   async: false,
   success: function (response) {
       data = response ;
       console.log(data);
   }
});

ZUI.tree({
  data: data,
  title: 'title',
  id: 'id',
  elem: '#treediv',
  children: 'children',
  iconfont: 'iconfont|icon-add_circle|icon-iconset0187|icon-file',
  callBack: function (con) {
      console.log("==="+con);
  }
})

// 验证中文名称
function openWin(url) {
console.log(url);
//window.open(url);
$('iframe').attr('src',url);
}