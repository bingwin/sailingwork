webpackJsonp([106],{KZRD:function(t,a){},eA30:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("aFlX"),s=e("6nXL"),n=e("Xtis"),o=e("a2vD"),i={components:{BarComponent:r.default},data:function(){return{fromFirst:"",fromShopNumMax:1560,fromGrayBar:[1560,1560,1560,1560,1560,1560,1560,1560,1560],fromAgentShopNum:[894,89,75,15,235,257,789,1005,1334],fromAgentName:["来源2","来源3","来源4","来源5","来源6","来源7","来源8","来源9","来源10"],saleFirst:"",saleShopNumMax:1560,saleGrayBar:[1560,1560,1560,1560,1560,1560,1560,1560,1560],saleAgentShopNum:[894,89,75,15,235,257,789,1005,1334],saleAgentName:["销售2","销售3","销售4","销售5","销售6","销售7","销售8","销售9","销售10"]}},created:function(){this.getChartData()},methods:{getChartData:function(){var t=this,a={get_agent_son_data:1,agent_id:o.a.getAgentid()};Object(n.e)(a).then(function(a){if(0===a.ret){for(var e=a.data.from||[],r=e.map(function(t){return t.from_name}),n=e.map(function(t){return t.from_total}),o=0;o<11;o++){if(r.length<o){var i="来源"+o;r.push(i),n.push(0)}}var m=n[0];t.fromGrayBar=m?[m,m,m,m,m,m,m,m,m]:[1,1,1,1,1,1,1,1,1],t.fromFirst=r[0],t.fromShopNumMax=m,r.shift(),n.shift(),t.fromAgentName=r,t.fromAgentShopNum=n;for(var f=a.data.from_salesman||[],h=f.map(function(t){return t.from_name}),u=f.map(function(t){return t.from_total}),l=0;l<11;l++){if(h.length<l){var c="销售"+l;h.push(c),u.push(0)}}var g=u[0];t.saleGrayBar=g?[g,g,g,g,g,g,g,g,g]:[1,1,1,1,1,1,1,1,1],t.saleFirst=h[0],t.saleShopNumMax=g,h.shift(),u.shift(),t.saleAgentName=h,t.saleAgentShopNum=u}else t.$slnotify({message:s.w.toString(a.ret)})})}}},m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"agent-chart clearfix"},[a("div",{staticClass:"fl agent-content"},[a("div",{staticClass:"card-icon"},[this._v("排行")]),this._v(" "),a("bar-component",{attrs:{title:"来源总数排行前十",first:this.fromFirst,shopNumMax:this.fromShopNumMax,grayBar:this.fromGrayBar,agentShopNum:this.fromAgentShopNum,agentName:this.fromAgentName,color:"#49D38D"}})],1),this._v(" "),a("div",{staticClass:"fl agent-content"},[a("div",{staticClass:"card-icon"},[this._v("排行")]),this._v(" "),a("bar-component",{attrs:{title:"销售商户总数排行前十",first:this.saleFirst,shopNumMax:this.saleShopNumMax,grayBar:this.saleGrayBar,agentShopNum:this.saleAgentShopNum,agentName:this.saleAgentName}})],1)])},staticRenderFns:[]};var f=e("X4nt")(i,m,!1,function(t){e("KZRD")},"data-v-4a3b7efd",null);a.default=f.exports}});