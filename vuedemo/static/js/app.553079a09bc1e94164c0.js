webpackJsonp([5],{"4yu5":function(e,n){},IcnI:function(e,n,t){"use strict";var o=t("VCXJ"),r=t("9rMa"),a=t("rVsN"),c=t.n(a),u=t("aozt"),i=t.n(u),s=t("epGn"),l=t("TIfe"),d=i.a.create({baseURL:"https://easy-mock.com/mock/5a72c1ecc76727050336e0bc/mdm/",timeout:15e3});d.interceptors.request.use(function(e){return E.getters.token&&(e.headers["X-Token"]=Object(l.a)()),e},function(e){console.log(e),c.a.reject(e)}),d.interceptors.response.use(function(e){var n=e.data;return 2e4!==n.code?(Object(s.Message)({message:n.data,type:"error",duration:5e3}),50008!==n.code&&50012!==n.code&&50014!==n.code||s.MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){E.dispatch("FedLogOut").then(function(){location.reload()})}),c.a.reject("error")):e.data},function(e){return console.log("err"+e),Object(s.Message)({message:e.message,type:"error",duration:5e3}),c.a.reject(e)});var f=d;var m={state:{token:Object(l.a)(),name:"",avatar:"",roles:[]},mutations:{SET_TOKEN:function(e,n){e.token=n},SET_NAME:function(e,n){e.name=n},SET_AVATAR:function(e,n){e.avatar=n},SET_ROLES:function(e,n){e.roles=n}},actions:{Login:function(e,n){var t=e.commit,o=n.username.trim();return new c.a(function(e,r){(function(e,n){return f({url:"/user/login",method:"post",data:{username:e,password:n}})})(o,n.password).then(function(n){var o=n.data;Object(l.c)(o.token),t("SET_TOKEN",o.token),e()}).catch(function(e){r(e)})})},GetInfo:function(e){var n=e.commit,t=e.state;return new c.a(function(e,o){var r;(r=t.token,f({url:"/user/info",method:"get",params:{token:r}})).then(function(t){var o=t.data;n("SET_ROLES",o.roles),n("SET_NAME",o.name),n("SET_AVATAR",o.avatar),e(t)}).catch(function(e){o(e)})})},LogOut:function(e){var n=e.commit,t=e.state;return new c.a(function(e,o){(t.token,f({url:"/user/logout",method:"post"})).then(function(){n("SET_TOKEN",""),n("SET_ROLES",[]),Object(l.b)(),e()}).catch(function(e){o(e)})})},FedLogOut:function(e){var n=e.commit;return new c.a(function(e){n("SET_TOKEN",""),Object(l.b)(),e()})}}},p={token:function(e){return e.user.token},name:function(e){return e.user.name},avatar:function(e){return e.user.avatar},routers:function(e){return e.permission.routers},addRouters:function(e){return e.permission.addRouters},roles:function(e){return e.user.roles}},h=t("YaEn");var g={state:{routers:h.b,addRouters:[]},mutations:{SET_ROUTERS:function(e,n){e.addRouters=n,e.routers=h.b.concat(n),console.log("state.routers",e.routers)}},actions:{GenerateRoutes:function(e,n){var t=e.commit;return new c.a(function(e){var o=n.roles,r=void 0;o.indexOf("admin")>=0?(console.log("admin>=0"),r=h.a):(console.log("admin<0"),r=function e(n,t){return n.filter(function(n){return!!function(e,n){return!n.meta||!n.meta.roles||e.some(function(e){return n.meta.roles.indexOf(e)>=0})}(t,n)&&(n.children&&n.children.length&&(n.children=e(n.children,t)),!0)})}(h.a,o)),console.log("accessedRouters",r),t("SET_ROUTERS",r),e()})}}};o.default.use(r.a);var v=new r.a.Store({modules:{user:m,permission:g},getters:p}),E=n.a=v},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("VCXJ"),r=t("9rMa"),a={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var c=t("Z0/y")({name:"App"},a,!1,function(e){t("4yu5")},null,null).exports,u=t("YaEn"),i=t("IcnI"),s=t("epGn"),l=t.n(s),d=(t("qbEQ"),t("4YfN")),f=t.n(d),m=t("TIfe"),p=["/login","/authredirect"];u.c.beforeEach(function(e,n,t){Object(m.a)()?"/login"===e.path?t({path:"/"}):0===i.a.getters.roles.length?(console.log("roles====0"),i.a.dispatch("GetInfo").then(function(n){var o=n.data.roles;console.log("roles?",o),i.a.dispatch("GenerateRoutes",{roles:o}).then(function(){console.log("addrouters",i.a.getters.addRouters),u.c.addRoutes(i.a.getters.addRouters),t(f()({},e,{replace:!0}))})}).catch(function(){i.a.dispatch("FedLogOut").then(function(){s.Message.error("验证失败,请重新登录"),t({path:"/login"})})})):(console.log("====1"),t()):-1!==p.indexOf(e.path)?t():t("/login")}),o.default.use(r.a),o.default.use(l.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:u.c,store:i.a,components:{App:c},template:"<App/>"})},TIfe:function(e,n,t){"use strict";n.a=function(){return r.a.get(a)},n.c=function(e){return r.a.set(a,e)},n.b=function(){return r.a.remove(a)};var o=t("uAC3"),r=t.n(o),a="Admin-Token"},YaEn:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return c});var o=t("VCXJ"),r=t("zO6J");o.default.use(r.a);var a=[{path:"/",redirect:"/login",hidden:!0},{path:"/login",name:"登录页面",hidden:!0,component:function(e){return t.e(2).then(function(){var n=[t("ook+")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/Readme",index:"Readme",meta:{title:"Readme",icon:"el-icon-menu"},component:function(e){return t.e(0).then(function(){var n=[t("MpTN")];e.apply(null,n)}.bind(this)).catch(t.oe)},children:[{name:"Readme",path:"/",meta:{title:"Readme",icon:"el-icon-menu"},component:function(e){return t.e(3).then(function(){var n=[t("Kblq")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]}];n.c=new r.a({routes:a});var c=[{path:"/permission",meta:{title:"permission",icon:"el-icon-setting",roles:["admin"]},component:function(e){return t.e(0).then(function(){var n=[t("MpTN")];e.apply(null,n)}.bind(this)).catch(t.oe)},children:[{name:"permission",path:"/permission",meta:{title:"permission",icon:"el-icon-menu",roles:["admin"]},component:function(e){return t.e(1).then(function(){var n=[t("9jHE")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]},{path:"*",redirect:"/404",hidden:!0}]},qbEQ:function(e,n){}},["NHnr"]);