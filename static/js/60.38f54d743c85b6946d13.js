webpackJsonp([60],{"/Dt0":function(t,e,a){e=t.exports=a("BkJT")(!0),e.push([t.i,'.left[data-v-62ed9707]{float:left}.right[data-v-62ed9707]{float:right}.clearfix[data-v-62ed9707]:after{content:"";display:block;clear:both}#staff-table .table-title[data-v-62ed9707]{width:100%;height:40px;font-size:14px;color:#666;line-height:40px;background-color:#f6f8fc;padding-left:14px}#staff-table .lf[data-v-62ed9707]{padding:20px 0 0 14px}#staff-table .rf[data-v-62ed9707]{padding-top:20px}#staff-table .crt[data-v-62ed9707]{width:100px;height:34px;border:1px solid #4877e7;color:#4877e7;border-radius:0;font-size:14px;background:#fff}#staff-table .del[data-v-62ed9707]{width:100px;height:34px;border:1px solid #e7487e;border-radius:0;font-size:14px;background:#fff;color:#e7487e;margin:0 14px 0 20px}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/shop/view/staff/staffTable.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,2CACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,WAAe,AACf,iBAAkB,AAClB,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,kCACE,qBAAuB,CACxB,AACD,kCACE,gBAAkB,CACnB,AACD,mCACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,eAAiB,CAClB,AACD,mCACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,oBAAsB,CACvB",file:"staffTable.vue",sourcesContent:["\n.left[data-v-62ed9707] {\n  float: left;\n}\n.right[data-v-62ed9707] {\n  float: right;\n}\n.clearfix[data-v-62ed9707]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n#staff-table .table-title[data-v-62ed9707] {\n  width: 100%;\n  height: 40px;\n  font-size: 14px;\n  color: #666666;\n  line-height: 40px;\n  background-color: #F6F8FC;\n  padding-left: 14px;\n}\n#staff-table .lf[data-v-62ed9707] {\n  padding: 20px 0 0 14px;\n}\n#staff-table .rf[data-v-62ed9707] {\n  padding-top: 20px;\n}\n#staff-table .crt[data-v-62ed9707] {\n  width: 100px;\n  height: 34px;\n  border: 1px solid #4877E7;\n  color: #4877E7;\n  border-radius: 0;\n  font-size: 14px;\n  background: #fff;\n}\n#staff-table .del[data-v-62ed9707] {\n  width: 100px;\n  height: 34px;\n  border: 1px solid #E7487E;\n  border-radius: 0;\n  font-size: 14px;\n  background: #fff;\n  color: #E7487E;\n  margin: 0 14px 0 20px;\n}\n"],sourceRoot:""}])},"7vit":function(t,e,a){"use strict";function n(t){a("GW0d"),a("nlHJ")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("CN8y"),i=a("aEF1"),A=a("46Yf"),o=n,r=A(l.a,i.a,!1,o,"data-v-62ed9707",null);e.default=r.exports},CN8y:function(t,e,a){"use strict";e.a={data:function(){return{form:{name:"",telephone:""}}},methods:{onSearch:function(){alert(1)}}}},GW0d:function(t,e,a){var n=a("/Dt0");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("d56da5a2",n,!0)},aEF1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"staff-table"}},[a("div",{staticClass:"table-title"},[t._v("详情列表")]),t._v(" "),a("div",{staticClass:"search-content clearfix"},[a("div",{staticClass:"lf left"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{model:{value:t.form.telephone,callback:function(e){t.$set(t.form,"telephone",e)},expression:"form.telephone"}})],1),t._v(" "),a("el-form-item",[a("button",{staticClass:"crt",on:{click:t.onSearch}},[t._v("搜索")])])],1)],1),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"table-info"},[a("el-table",[a("el-table-column",{attrs:{type:"selection",align:"center",width:"38"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"员工ID",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"工号",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"职务"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"部门"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"手机号码"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"微信绑定"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"状态",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"操作"}})],1)],1)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rf right"},[a("button",{staticClass:"crt"},[t._v("创建")]),t._v(" "),a("button",{staticClass:"del"},[t._v("删除")])])}],i={render:n,staticRenderFns:l};e.a=i},bWeC:function(t,e,a){e=t.exports=a("BkJT")(!0),e.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}#staff-table .search-content{font-size:0}#staff-table .search-content .el-input{font-size:14px;width:inherit}#staff-table .search-content .el-input input{width:180px;height:34px;border-radius:0}#staff-table .search-content .el-form-item__label{color:#333}#staff-table .el-form--inline .el-form-item{margin-right:20px}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/shop/view/staff/staffTable.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,uCACI,eAAgB,AAChB,aAAe,CAClB,AACD,6CACM,YAAa,AACb,YAAa,AACb,eAAiB,CACtB,AACD,kDACI,UAAY,CACf,AACD,4CACE,iBAAmB,CACpB",file:"staffTable.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n#staff-table .search-content {\n  font-size: 0;\n}\n#staff-table .search-content .el-input {\n    font-size: 14px;\n    width: inherit;\n}\n#staff-table .search-content .el-input input {\n      width: 180px;\n      height: 34px;\n      border-radius: 0;\n}\n#staff-table .search-content .el-form-item__label {\n    color: #333;\n}\n#staff-table .el-form--inline .el-form-item {\n  margin-right: 20px;\n}\n"],sourceRoot:""}])},nlHJ:function(t,e,a){var n=a("bWeC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("9879a8c2",n,!0)}});
//# sourceMappingURL=60.38f54d743c85b6946d13.js.map