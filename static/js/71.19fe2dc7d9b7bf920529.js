webpackJsonp([71],{"57UB":function(t,i,a){var e=a("aJzo");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("8bSs")("536ee47e",e,!0)},ITa1:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"refund-info"},[a("div",{staticClass:"title"},[t._v("退款信息")]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"item"},[t._m(0),t._v(" "),a("div",{staticClass:"item-right"},[a("span",[t._v(t._s(t.statusinfo.name))])])]),t._v(" "),a("div",{staticClass:"item"},[t._m(1),t._v(" "),a("div",{staticClass:"item-right"},[a("span",[t._v(t._s(t.statusinfo.time_sq))])])]),t._v(" "),a("div",{staticClass:"item"},[t._m(2),t._v(" "),a("div",{staticClass:"item-right"},[a("span",[t._v("¥ "+t._s(t.statusinfo.price))])])]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"item"},[t._m(4),t._v(" "),a("div",{staticClass:"item-right"},[a("span",[t._v(t._s(t.statusinfo.time))])])]),t._v(" "),a("div",{staticClass:"item"},[t._m(5),t._v(" "),a("div",{staticClass:"item-right"},[a("span",[t._v(t._s(t.statusinfo.reason_sq))])])]),t._v(" "),a("div",{staticClass:"item"},[t._m(6),t._v(" "),a("div",{staticClass:"item-right"},[a("span",[t._v(t._s(t.statusinfo.reason))])])])])])},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item-left"},[a("span",[t._v("操作人")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item-left"},[a("span",[t._v("申请退款时间")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item-left"},[a("span",[t._v("申请退款金额")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"item-left"},[a("span",[t._v("退款状态")])]),t._v(" "),a("div",{staticClass:"item-right"},[a("span",[t._v("退款失败")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item-left"},[a("span",[t._v("拒绝退款时间")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item-left reason"},[a("span",[t._v("申请退款原因")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item-left reason"},[a("span",[t._v("退款失败原因")])])}],n={render:e,staticRenderFns:s};i.a=n},aJzo:function(t,i,a){i=t.exports=a("BkJT")(!0),i.push([t.i,'.left[data-v-577287b4]{float:left}.right[data-v-577287b4]{float:right}.clearfix[data-v-577287b4]:after{content:"";display:block;clear:both}.title[data-v-577287b4]{font-size:14px;color:#666;margin:20px 0;font-weight:700}.content[data-v-577287b4]{border:1px solid #d8d8d8;padding-top:20px;width:100%}.item[data-v-577287b4]{margin-bottom:20px}.item .item-left[data-v-577287b4]{font-size:14px;color:#000;display:inline-block;width:106px;opacity:.5708;text-align:right}.item .item-right[data-v-577287b4]{font-size:14px;color:#333;display:inline-block;padding-left:14px;max-width:80%}.item .reason[data-v-577287b4]{vertical-align:top}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/statisticalform/components/orderfailRefund.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,wBACE,eAAgB,AAChB,WAAY,AACZ,cAAe,AACf,eAAkB,CACnB,AACD,0BACE,yBAA0B,AAC1B,iBAAkB,AAClB,UAAY,CACb,AACD,uBACE,kBAAoB,CACrB,AACD,kCACI,eAAgB,AAChB,WAAY,AACZ,qBAAsB,AACtB,YAAa,AACb,cAAgB,AAChB,gBAAkB,CACrB,AACD,mCACI,eAAgB,AAChB,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,aAAe,CAClB,AACD,+BACI,kBAAoB,CACvB",file:"orderfailRefund.vue",sourcesContent:["\n.left[data-v-577287b4] {\n  float: left;\n}\n.right[data-v-577287b4] {\n  float: right;\n}\n.clearfix[data-v-577287b4]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.title[data-v-577287b4] {\n  font-size: 14px;\n  color: #666;\n  margin: 20px 0;\n  font-weight: bold;\n}\n.content[data-v-577287b4] {\n  border: 1px solid #d8d8d8;\n  padding-top: 20px;\n  width: 100%;\n}\n.item[data-v-577287b4] {\n  margin-bottom: 20px;\n}\n.item .item-left[data-v-577287b4] {\n    font-size: 14px;\n    color: #000;\n    display: inline-block;\n    width: 106px;\n    opacity: 0.5708;\n    text-align: right;\n}\n.item .item-right[data-v-577287b4] {\n    font-size: 14px;\n    color: #333;\n    display: inline-block;\n    padding-left: 14px;\n    max-width: 80%;\n}\n.item .reason[data-v-577287b4] {\n    vertical-align: top;\n}\n"],sourceRoot:""}])},iAm3:function(t,i,a){"use strict";function e(t){a("57UB")}Object.defineProperty(i,"__esModule",{value:!0});var s=a("ssjf"),n=a("ITa1"),A=a("46Yf"),l=e,o=A(s.a,n.a,!1,l,"data-v-577287b4",null);i.default=o.exports},ssjf:function(t,i,a){"use strict";i.a={props:{statusinfo:{type:Object}},data:function(){return{}}}}});
//# sourceMappingURL=71.19fe2dc7d9b7bf920529.js.map