webpackJsonp([68],{"+A80":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("O7/W"),i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"staff-list-area"}},[s("div",{staticClass:"staff-tree change-tree-default"},[s("div",{staticClass:"change-tree-default"},[s("el-tree",{ref:"tree",style:{height:e.height},attrs:{data:e.staffTree,props:e.defaultProps,"highlight-current":e.isHighlight,"default-expand-all":"","node-key":"label","expand-on-click-node":!0,"render-content":e.renderContent},on:{"current-change":e.currentChange,"node-click":e.handleNodeClick,"node-expand":e.nodeExpand,"node-collapse":e.nodeExpand}}),e._v(" "),s("span",{staticClass:"tree-add",on:{click:e.addNewPosition}})],1)]),e._v(" "),s("div",{staticClass:"staff-table",style:{height:e.height}},[s("div",{staticClass:"search-content"},[s("span",[e._v("姓名")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}}),e._v(" "),s("span",[e._v("状态")]),e._v(" "),s("el-select",{model:{value:e.searchStatus,callback:function(t){e.searchStatus=t},expression:"searchStatus"}},e._l(e.statusArr,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),s("div",{staticClass:"search-btn",on:{click:e.searchMethods}},[e._v("搜索")])],1),e._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{border:"",height:e.tableHeight,data:e.staffList,stripe:""},on:{"sort-change":e.sort}},[s("el-table-column",{attrs:{prop:"ag_employee_id",label:"员工编号",align:"center","min-width":"10%",sortable:"true"}}),e._v(" "),s("el-table-column",{attrs:{prop:"real_name",label:"姓名",align:"center","min-width":"10%","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"phone",label:"登录手机号",align:"center","min-width":"11%"}}),e._v(" "),s("el-table-column",{attrs:{prop:"ag_department_name",label:"部门",align:"center","min-width":"8%","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"ag_position_name",label:"职位",align:"center","min-width":"8%","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center","min-width":"20%","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.remark?s("span",{attrs:{size:"small","min-width":"20%"}},[e._v(e._s(t.row.remark)+"\n          ")]):s("span",{attrs:{size:"small"}},[e._v("--\n          ")])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"is_freeze",label:"状态",align:"center","min-width":"7%",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.is_freeze===e.isNoFreezed?s("span",{attrs:{size:"small"}},[e._v("启用\n          ")]):s("span",{attrs:{size:"small"}},[e._v("冻结\n          ")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"25%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.is_freeze===e.isNoFreezed?s("span",{staticClass:"text-red",attrs:{size:"small",type:"info"},on:{click:function(a){e.handleModifyStatus(t.row,1)}}},[e._v("冻结\n          ")]):s("span",{staticClass:"text-green",attrs:{size:"small",type:"success"},on:{click:function(a){e.handleModifyStatus(t.row,0)}}},[e._v("启用\n          ")]),e._v(" "),s("router-link",{attrs:{to:{path:"/areaOrganziteList/cantEditStaffDetail",query:{ag_employee_id:t.row.ag_employee_id,activIndex:"1",choosed_depart_id:e.choosedDepartId,choosed_depart_name:e.choosedDepartName}}}},[s("span",{staticClass:"text-blue",attrs:{size:"small",type:"text"}},[e._v("查看\n            ")])]),e._v(" "),s("router-link",{attrs:{to:{path:"/areaOrganziteList/staffDetail",query:{ag_employee_id:t.row.ag_employee_id,activIndex:"1",choosed_depart_id:e.choosedDepartId,choosed_depart_name:e.choosedDepartName}}}},[s("span",{staticClass:"text-blue",attrs:{size:"small",type:"text"}},[e._v("编辑\n            ")])]),e._v(" "),s("span",{staticClass:"text-red",attrs:{size:"small",type:"text"},on:{click:function(a){e.handleDeleteBtn(t.row)}}},[e._v("删除\n          ")])]}}])})],1),e._v(" "),s("div",{staticClass:"page"},[s("div",{staticClass:"pagination-content"},[s("el-pagination",{staticClass:"page-el",attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,40],"page-size":e.listQuery.limit,layout:"sizes, jumper, prev, pager, next",total:e.total},on:{"update:currentPage":function(t){e.$set(e.listQuery,"page",t)},"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)]),e._v(" "),e.isListEmpty?s("div",{staticClass:"data-empty"},[0==e.searchNone?s("div",{staticClass:"img"},[s("img",{attrs:{src:a("TAt3")}}),e._v(" "),s("div",{staticClass:"text-center"},[e._v("暂无数据...")])]):e._e(),e._v(" "),1==e.searchNone?s("div",{staticClass:"img"},[s("img",{attrs:{src:a("5+gT")}}),e._v(" "),s("div",{staticClass:"text-center"},[e._v("暂无搜索数据...")])]):e._e()]):e._e()],1),e._v(" "),e.isOperate?s("operate-dialog",{attrs:{operateText:e.operateText,operateSuccessTxt:e.operateSuccessTxt,isShowRedBtn:e.isShowRedBtn,operateFailTxt:e.operateFailTxt},on:{dialogClose:e.dialogClose,confimOper:e.confimOper}}):e._e(),e._v(" "),e.isDetailDialog?s("detail-dialog",{attrs:{departmentName:e.departmentName,suOrfa:e.suOrfa,tipsText:e.tipsText,repeat:e.repeat},on:{confirmAdd:e.confirmAdd,handleClose:e.dialogClose}}):e._e()],1)},staticRenderFns:[]},r=function(e){a("g+gi"),a("7+5N")},n=a("8AGX")(s.a,i,!1,r,"data-v-5e8595cd",null);t.default=n.exports},"7+5N":function(e,t){},"O7/W":function(e,t,a){"use strict";(function(e){var s=a("+vDi"),i=a("pMNc"),r=a("nMBb"),n=a("6nXL"),o=a("Xtis"),h=a("a2vD"),d=a("p77j");t.a={data:function(){return{agentId:"",newName:"",newDpaId:"",isOperate:!1,isListEmpty:!1,searchNone:!1,isDetailDialog:!1,isShowRedBtn:!1,isFreezeMethods:!1,isDeleDepart:!1,isSearch:!1,suOrfa:!0,repeat:!1,isHighlight:!1,isSort:!1,sortLabel:"",sortOrder:1,height:0,tableHeight:0,tipsText:"",searchStatus:"",searchName:"",operateSuccessTxt:"",operateFailTxt:"",operateText:"",departmentName:"",departmentId:"",operateStatus:"",depart_id:"",treeNodeKey:"",operateData:{},total:0,listQuery:{page:1,limit:10},staffList:[],staffTree:[{label:"部门管理",children:[]}],statusArr:[{label:"全部",value:""},{label:n.m.toString(n.m.NO),value:n.m.NO},{label:n.m.toString(n.m.YES),value:n.m.YES}],treeDataArr:[],choosedDepartId:"",choosedDepartName:"",defaultProps:{label:"label",children:"children"}}},created:function(){var t=this;this.tableHeight=document.documentElement.clientHeight-274,this.height=document.documentElement.clientHeight-159+"px",e(window).resize(function(){t.height=document.documentElement.clientHeight-159+"px",t.tableHeight=document.documentElement.clientHeight-274}),this.agentId=h.a.getAgentid(),this.getStaffTree(),void 0!==this.$route.query.choosedDepartId&&""!==this.$route.query.choosedDepartId?(this.choosedDepartId=this.$route.query.choosedDepartId,this.choosedDepartName=this.$route.query.choosedDepartName,this.getDepartStaff(this.$route.query.choosedDepartId)):(this.$nextTick(function(){t.newName=t.staffTree[0].label,t.$refs.tree.setCurrentKey(t.newName),t.isHighlight=!0}),this.getStaffList())},watch:{treeDataArr:function(e){var t=this;this.$nextTick(function(){t.$route.query.choosedDepartName&&(t.newName=t.$route.query.choosedDepartName,t.$refs.tree.setCurrentKey(t.newName),t.isHighlight=!0)})}},computed:{isNoFreezed:function(){return n.m.NO}},components:{operateDialog:s.a,detailDialog:r.a},methods:{getStaffList:function(){var e=this;this.searchStatus!==n.m.NO&&this.searchStatus!==n.m.YES&&(this.searchStatus="");var t={get_ag_employee_list:1,agent_id:this.agentId,page_size:this.listQuery.limit,page_no:this.listQuery.page};this.searchName&&(t.real_name=this.searchName),(this.searchStatus||0===this.searchStatus)&&(t.is_freeze=this.searchStatus),this.isSort&&(t.sort_name=this.sortLabel,t.desc=this.sortOrder),this.depart_id&&(t.ag_department_id=this.depart_id),Object(o.a)(t).then(function(t){0===t.ret&&(t.data.ag_employee_list&&t.data.ag_employee_list.length>0?(e.staffList=t.data.ag_employee_list,e.isListEmpty=!1,e.total=t.data.total):(e.staffList=[],e.isListEmpty=!0,!0===e.isSearch?e.searchNone=!0:e.searchNone=!1))})},getStaffTree:function(){this.staffTree[0].children=Object(d.b)(),this.treeDataArr=this.staffTree[0].children},getDepartStaff:function(e){var t=this;this.searchName="",this.searchStatus="";var a={get_department_agent:1,ag_department_id:e};Object(o.g)(a).then(function(e){0===e.ret&&(e.data.ag_employee_list&&e.data.ag_employee_list.length>0?(t.staffList=e.data.ag_employee_list,t.isListEmpty=!1):(t.staffList=[],t.isListEmpty=!0,!0===t.isSearch?t.searchNone=!0:t.searchNone=!1),t.isSearch=!1)})},sort:function(e){this.sortLabel=e.prop,"descending"===e.order?(this.isSort=!0,this.sortOrder=-1):"ascending"===e.order?(this.isSort=!0,this.sortOrder=1):this.isSort=!1,this.getStaffList()},FreezeStaffMethods:function(){var e=this,t={ag_employee_freeze:1,agent_id:this.agentId,ag_employee_id:this.operateData.ag_employee_id,is_freeze:this.operateStatus};Object(o.b)(t).then(function(t){0===t.ret&&(e.operateStatus!==e.isNoFreezed?e.operateSuccessTxt="冻结成功":e.operateSuccessTxt="启用成功",e.getStaffList(),e.isFreezeMethods=!1)})},deleteStaffMethods:function(){var e=this,t={ag_employee_del:1,ag_employee_id:this.operateData.ag_employee_id,agent_id:this.agentId};Object(o.b)(t).then(function(t){0===t.ret&&(e.operateSuccessTxt="删除成功",e.getStaffList())})},deleteDepartMethods:function(){var e=this,t={ag_department_del:1,ag_department_id:this.operateData.ag_department_id};Object(o.h)(t).then(function(t){0===t.ret?(e.operateSuccessTxt="删除成功",e.suOrfa=!1,e.newName="",e.depart_id="",e.getStaffTree()):-30033===t.ret&&(e.operateFailTxt="该条目下包含数据，不能被删除",e.getStaffTree(),e.newName=e.treeNodeKey,e.getDepartStaff(e.depart_id)),e.isDeleDepart=!0})},handleSelect:function(e){this.activeIndex=e},nodeExpand:function(e,t){this.isHighlight=!1;var a=t.key;this.$refs.tree.setCurrentKey(a),this.isSearch=!1,this.listQuery.page=1,this.depart_id=t.data.ag_department_id,t.childNodes&&0===t.childNodes.length?this.getDepartStaff(t.data.ag_department_id):(this.searchName="",this.searchStatus="",this.getStaffList())},handleNodeClick:function(e,t){this.isSearch=!1,this.listQuery.page=1,this.depart_id=t.data.ag_department_id,this.treeNodeKey=t.key,t.expanded=!0,t.childNodes&&0===t.childNodes.length?(this.getDepartStaff(t.data.ag_department_id),this.choosedDepartId=e.ag_department_id,this.choosedDepartName=t.key):(this.$router.replace("/areaagent/organize"),this.choosedDepartId="",this.choosedDepartName="",this.searchName="",this.searchStatus="",this.getStaffList())},searchMethods:function(){this.isSearch=!0,this.listQuery.page=1,this.getStaffList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getStaffList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getStaffList()},handleModifyStatus:function(e,t){this.isFreezeMethods=!0,t!==this.isNoFreezed?(this.operateText="确定执行冻结操作？",this.isShowRedBtn=!0):(this.operateText="确定执行启用操作？",this.isShowRedBtn=!1),this.isOperate=!this.isOperate,this.operateStatus=t,this.operateData=e,this.isDeleDepart=!1},currentChange:function(){this.isHighlight=!0},addNewPosition:function(){this.isDetailDialog=!this.isDetailDialog},confirmAdd:function(e){var t=this;this.tipsText="新建成功!";var a={ag_department_save:1,agent_id:this.agentId,ag_department_name:e};this.departmentId&&""!==this.departmentId&&(a.ag_department_id=this.departmentId,this.tipsText="修改成功!"),this.newName=e,Object(o.h)(a).then(function(e){0===e.ret?(t.newDpaId=e.data.ag_department_id,t.depart_id=t.newDpaId,t.suOrfa=!1,t.repeat=!1,t.getStaffTree()):-20034===e.ret&&(t.suOrfa=!0,t.repeat=!0)})},dialogClose:function(){this.operateText="",this.operateSuccessTxt="",this.operateFailTxt="",this.isOperate=!1,this.isDetailDialog=!1,this.depart_id?this.getDepartStaff(this.depart_id):(this.newName=this.staffTree[0].label,this.searchName="",this.searchStatus="",this.getStaffList()),this.$refs.tree.setCurrentKey(this.newName),this.isHighlight=!0},confimOper:function(){this.isFreezeMethods&&!this.isDeleDepart?this.FreezeStaffMethods():this.isFreezeMethods||this.isDeleDepart?this.isDeleDepart&&(this.deleteDepartMethods(),this.isDeleDepart=!1):this.deleteStaffMethods()},handleDeleteBtn:function(e){this.operateData=e,this.operateText="确定删除此数据？",this.isShowRedBtn=!0,this.isOperate=!this.isOperate,this.isDeleDepart=!1},renderContent:function(e,t){var a=t.node,s=t.data,r=t.store,n=this;return e(i.a,{props:{DATA:s,NODE:a,STORE:r},on:{nodeAdd:function(e,t,a){return n.handleAdd(e,t,a)},nodeEdit:function(e,t,a){return n.handleEdit(e,t,a)},nodeDel:function(e,t,a){return n.handleDelete(e,t,a)}}})},handleAdd:function(e,t,a){this.suOrfa=!0,this.repeat=!1,a.data.ag_department_id?this.$router.push("/areaOrganziteList/staffDetail"):(this.departmentName="",this.departmentId="",a.expanded||(a.expanded=!0),this.depart_id="",this.isDetailDialog=!this.isDetailDialog)},handleEdit:function(e,t,a){this.suOrfa=!0,this.departmentName=a.data.label,this.departmentId=a.data.ag_department_id,this.isDetailDialog=!this.isDetailDialog,this.treeNodeKey=a.data.label},handleDelete:function(e,t,a){this.suOrfa=!0,this.treeNodeKey=a.data.label,this.operateData=a.data,this.operateText="确定删除此部门？",this.isShowRedBtn=!0,this.isOperate=!this.isOperate,this.isDeleDepart=!0}}}}).call(t,a("tra3"))},"g+gi":function(e,t){}});