webpackJsonp([72],{CGq7:function(t,a,e){a=t.exports=e("BkJT")(!0),a.push([t.i,'.left[data-v-69f7927c]{float:left}.right[data-v-69f7927c]{float:right}.clearfix[data-v-69f7927c]:after{content:"";display:block;clear:both}.title[data-v-69f7927c]{font-size:14px;color:#666;margin:20px 0;font-weight:700}.table[data-v-69f7927c]{font-size:14px;color:#333;border-top:1px solid #d8d8d8;border-left:1px solid #d8d8d8;border-collapse:collapse;width:100%}.table th[data-v-69f7927c]{border-bottom:1px solid #d8d8d8;font-weight:400;height:50px}.table td[data-v-69f7927c],.table th[data-v-69f7927c]:last-child{border-right:1px solid #d8d8d8}.table td[data-v-69f7927c]{border-bottom:1px solid #d8d8d8;text-align:center;height:50px}.table tr.last td[data-v-69f7927c]{text-align:left;padding:20px 40px}.table tr.last td div[data-v-69f7927c]{height:100%}.table tr.last td div.td-title[data-v-69f7927c]{padding-right:5px}.table tr.last td div.remark-content[data-v-69f7927c]{max-width:90%}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/statisticalform/components/orderShopinfo.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,wBACE,eAAgB,AAChB,WAAY,AACZ,cAAe,AACf,eAAkB,CACnB,AACD,wBACE,eAAgB,AAChB,WAAY,AACZ,6BAA8B,AAC9B,8BAA+B,AAC/B,yBAA0B,AAC1B,UAAY,CACb,AACD,2BACI,gCAAiC,AACjC,gBAAoB,AACpB,WAAa,CAChB,AAID,iEAFI,8BAAgC,CAOnC,AALD,2BAEI,gCAAiC,AACjC,kBAAmB,AACnB,WAAa,CAChB,AACD,mCACI,gBAAiB,AACjB,iBAAmB,CACtB,AACD,uCACM,WAAa,CAClB,AACD,gDACM,iBAAmB,CACxB,AACD,sDACM,aAAe,CACpB",file:"orderShopinfo.vue",sourcesContent:["\n.left[data-v-69f7927c] {\n  float: left;\n}\n.right[data-v-69f7927c] {\n  float: right;\n}\n.clearfix[data-v-69f7927c]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.title[data-v-69f7927c] {\n  font-size: 14px;\n  color: #666;\n  margin: 20px 0;\n  font-weight: bold;\n}\n.table[data-v-69f7927c] {\n  font-size: 14px;\n  color: #333;\n  border-top: 1px solid #d8d8d8;\n  border-left: 1px solid #d8d8d8;\n  border-collapse: collapse;\n  width: 100%;\n}\n.table th[data-v-69f7927c] {\n    border-bottom: 1px solid #d8d8d8;\n    font-weight: normal;\n    height: 50px;\n}\n.table th[data-v-69f7927c]:last-child {\n    border-right: 1px solid #d8d8d8;\n}\n.table td[data-v-69f7927c] {\n    border-right: 1px solid #d8d8d8;\n    border-bottom: 1px solid #d8d8d8;\n    text-align: center;\n    height: 50px;\n}\n.table tr.last td[data-v-69f7927c] {\n    text-align: left;\n    padding: 20px 40px;\n}\n.table tr.last td div[data-v-69f7927c] {\n      height: 100%;\n}\n.table tr.last td div.td-title[data-v-69f7927c] {\n      padding-right: 5px;\n}\n.table tr.last td div.remark-content[data-v-69f7927c] {\n      max-width: 90%;\n}\n"],sourceRoot:""}])},Sx8N:function(t,a,e){var d=e("CGq7");"string"==typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);e("8bSs")("2e480ede",d,!0)},p08S:function(t,a,e){"use strict";var d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"order-shopinfo"},[e("div",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),0!==t.shopinfo.list.length?e("div",{staticClass:"table-content"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.shopinfo.list,function(a,d){return e("tr",{key:a.food_id},[e("td",[t._v(t._s(a.food_name))]),t._v(" "),e("td",[t._v("¥ "+t._s(a.food_price))]),t._v(" "),e("td",[t._v(t._s(a.food_num))]),t._v(" "),e("td",[t._v("¥ "+t._s(a.food_price_sum))])])}),t._v(" "),e("tr",[e("td",{attrs:{colspan:"3"}},[t._v("\n                  商品总数: "+t._s(t.shopinfo.listNum)+"\n              ")]),t._v(" "),e("td",[t._v("\n                  总计: ¥ "+t._s(t.shopinfo.listTotalPrice)+"\n              ")])]),t._v(" "),e("tr",{staticClass:"last"},[e("td",{staticClass:"clearfix",attrs:{colspan:"4"}},[e("div",{staticClass:"td-title left"},[t._v("备注:")]),t._v(" "),e("div",{staticClass:"remark-content left"},[t._v(t._s(t.shopinfo.remark))])])])],2)]):t._e()])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",{staticStyle:{width:"37%"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{width:"21%"}},[t._v("单价")]),t._v(" "),e("th",{staticStyle:{width:"21%"}},[t._v("数量")]),t._v(" "),e("th",{staticStyle:{width:"21%"}},[t._v("价格")])])}],i={render:d,staticRenderFns:n};a.a=i},r7Qt:function(t,a,e){"use strict";a.a={props:{shopinfo:{type:Object}},data:function(){return{}}}},zjPp:function(t,a,e){"use strict";function d(t){e("Sx8N")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("r7Qt"),i=e("p08S"),o=e("46Yf"),A=d,l=o(n.a,i.a,!1,A,"data-v-69f7927c",null);a.default=l.exports}});
//# sourceMappingURL=72.4a9b2d8e6f07e4e2ccf0.js.map