webpackJsonp([51],{"4+KF":function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"a",function(){return i});var a=e("EuEE"),r=function(t,n){a.a.DataEncSubmit("category_get.php",t,function(t){n&&"function"==typeof n&&n(t)})},i=function(t,n){a.a.DataEncSubmit("print_001.php",t,function(t){n&&"function"==typeof n&&n(t)})}},EoSw:function(t,n,e){n=t.exports=e("BkJT")(!0),n.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}#printer .el-table tbody tr{height:80px}#printer .el-table .cell,#printer .el-table th>div{padding:0 8px}#printer .pagination-container{text-align:center;padding:50px 14px 6px}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/printer/view/index.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,4BACE,WAAa,CACd,AACD,mDACE,aAAqB,CACtB,AACD,+BACE,kBAAmB,AACnB,qBAAuB,CACxB",file:"index.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n#printer .el-table tbody tr {\n  height: 80px;\n}\n#printer .el-table .cell, #printer .el-table th > div {\n  padding: 0 8px 0 8px;\n}\n#printer .pagination-container {\n  text-align: center;\n  padding: 50px 14px 6px;\n}\n"],sourceRoot:""}])},JKhP:function(t,n,e){var a=e("ej2x");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("f79d6f00",a,!0)},"XNm+":function(t,n,e){"use strict";var a=e("6nXL"),r=e("4+KF");n.a={data:function(){return{printList:[],docType:"",total:null,listQuery:{page:1,limit:10,importance:void 0,title:void 0}}},created:function(){this.getData()},computed:{documentsType:function(){return a.y}},methods:{getData:function(){var t=this;e.i(r.a)({},function(n){t.printList=n.data.printer,t.docType=a.y.code})},handleSizeChange:function(t){this.listQuery.limit=t,this.getData()},handleCurrentChange:function(t){this.listQuery.page=t,this.getData()}}}},ej2x:function(t,n,e){n=t.exports=e("BkJT")(!0),n.push([t.i,'.left[data-v-47745154]{float:left}.right[data-v-47745154]{float:right}.clearfix[data-v-47745154]:after{content:"";display:block;clear:both}.btn-group[data-v-47745154]{padding:20px 0;background:#fff;text-align:right}.btn-group button[data-v-47745154]{cursor:pointer}.btn-group .add[data-v-47745154]{width:100px;height:34px;font-size:14px;color:#4877e7;background:#fff;border:1px solid #4877e7;margin-right:9px}.btn-group .del[data-v-47745154]{width:100px;height:34px;font-size:14px;color:#e7487e;border:1px solid #e7487e;background:#fff}.blue[data-v-47745154]{font-size:14px;color:#4877e7;margin-right:6px}.red[data-v-47745154]{font-size:14px;color:#e7487e}.printer-table[data-v-47745154]{background:#fff;height:100%}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/printer/view/index.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,4BACE,eAAgB,AAChB,gBAAiB,AACjB,gBAAkB,CACnB,AACD,mCACI,cAAgB,CACnB,AACD,iCACI,YAAa,AACb,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,gBAAiB,AACjB,yBAA0B,AAC1B,gBAAkB,CACrB,AACD,iCACI,YAAa,AACb,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,yBAA0B,AAC1B,eAAiB,CACpB,AACD,uBACE,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACnB,AACD,sBACE,eAAgB,AAChB,aAAe,CAChB,AACD,gCACE,gBAAiB,AACjB,WAAa,CACd",file:"index.vue",sourcesContent:["\n.left[data-v-47745154] {\n  float: left;\n}\n.right[data-v-47745154] {\n  float: right;\n}\n.clearfix[data-v-47745154]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.btn-group[data-v-47745154] {\n  padding: 20px 0;\n  background: #fff;\n  text-align: right;\n}\n.btn-group button[data-v-47745154] {\n    cursor: pointer;\n}\n.btn-group .add[data-v-47745154] {\n    width: 100px;\n    height: 34px;\n    font-size: 14px;\n    color: #4877E7;\n    background: #fff;\n    border: 1px solid #4877e7;\n    margin-right: 9px;\n}\n.btn-group .del[data-v-47745154] {\n    width: 100px;\n    height: 34px;\n    font-size: 14px;\n    color: #E7487E;\n    border: 1px solid #E7487E;\n    background: #fff;\n}\n.blue[data-v-47745154] {\n  font-size: 14px;\n  color: #4877E7;\n  margin-right: 6px;\n}\n.red[data-v-47745154] {\n  font-size: 14px;\n  color: #E7487E;\n}\n.printer-table[data-v-47745154] {\n  background: #fff;\n  height: 100%;\n}\n"],sourceRoot:""}])},lMkF:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"printer"}},[e("div",{staticClass:"btn-group"},[e("router-link",{attrs:{to:{path:"/printer/edit"}}},[e("button",{staticClass:"add",attrs:{type:"button"}},[t._v("添加")])]),t._v(" "),e("button",{staticClass:"del",attrs:{type:"button"}},[t._v("删除")])],1),t._v(" "),e("div",{staticClass:"printer-table"},[e("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:t.printList}},[e("el-table-column",{attrs:{type:"selection","min-width":"52"}}),t._v(" "),e("el-table-column",{attrs:{label:"打印机ID",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.printer_id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"名称",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.printer_name))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"支持单据",align:"justify","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(n){return t._l(n.row.documents_type,function(a,r){return e("span",[t._v(t._s(t.docType[a])),r<n.row.documents_type.length-1?e("i",[t._v(" / ")]):t._e()])})}}])}),t._v(" "),e("el-table-column",{attrs:{label:"打印商品分类",align:"center","min-width":"250"}}),t._v(" "),e("el-table-column",{attrs:{label:"规格",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.printer_spec)+"mm")])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"型号",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.printer_model))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"备注",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.remark))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作","min-width":"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("router-link",{attrs:{to:{path:"/printer/edit",query:{id:n.row.printer_id}}}},[e("span",{staticClass:"blue",attrs:{size:"small",type:"text"}},[t._v("编辑\n\t\t\t\t\t\t\t")])]),t._v(" "),e("span",{staticClass:"red",attrs:{size:"small",type:"text"}},[t._v("删除\n\t\t\t\t\t\t")])]}}])})],1),t._v(" "),e("div",{staticClass:"pagination-container"},[e("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,40],"page-size":t.listQuery.limit,layout:"sizes, jumper, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(n){t.$set(t.listQuery,"page",n)}}})],1)],1)])},r=[],i={render:a,staticRenderFns:r};n.a=i},sju2:function(t,n,e){var a=e("EoSw");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("7241cb06",a,!0)},w0Wh:function(t,n,e){"use strict";function a(t){e("JKhP"),e("sju2")}Object.defineProperty(n,"__esModule",{value:!0});var r=e("XNm+"),i=e("lMkF"),o=e("46Yf"),l=a,A=o(r.a,i.a,!1,l,"data-v-47745154",null);n.default=A.exports}});
//# sourceMappingURL=51.7e426b8ada427dffed5a.js.map