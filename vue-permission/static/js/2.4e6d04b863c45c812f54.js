webpackJsonp([2],{"/vB0":function(e,t){},"T+/8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("4YfN"),o=n.n(i),s=n("E4LH"),r={name:"userlogin",data:function(){var e=this;return{loginForm:{username:"admin",password:"admin"},checked:!1,code:{src:"",value:"",len:4,type:"text"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,t,n){Object(s.a)(t)?n():n(new Error("请输入正确的用户名"))}}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,message:"密码长度最少为6位",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:4,message:"验证码长度为4位",trigger:"blur"},{required:!0,trigger:"blur",validator:function(t,n,i){e.code.value!==n?(e.loginForm.code="",e.refreshCode(),i(new Error("请输入正确的验证码"))):i()}}]},passwordType:"password"}},created:function(){},mounted:function(){},computed:{},props:[],methods:{showPassword:function(){""===this.passwordType?this.passwordType="password":this.passwordType=""},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){t&&e.$store.dispatch("Login",e.loginForm).then(function(t){e.$router.push({path:"/wel"})})})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{"status-icon":"",rules:e.loginRules,model:e.loginForm,"label-width":"0"}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入用户名"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[n("i",{staticClass:"icon-yonghu",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{size:"small",type:e.passwordType,"auto-complete":"off",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("i",{staticClass:"el-icon-view el-input__icon",attrs:{slot:"suffix"},on:{click:e.showPassword},slot:"suffix"}),e._v(" "),n("i",{staticClass:"icon-mima",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),n("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住账号")]),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"login-submit",attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)},staticRenderFns:[]};var a=n("vSla")(r,l,!1,function(e){n("/vB0")},null,null).exports,c={name:"codelogin",data:function(){return{msgText:"发送验证码",msgTime:60,msgKey:!1,loginForm:{phone:"17547400800",code:""},loginRules:{phone:[{required:!0,trigger:"blur",validator:function(e,t,n){Object(s.b)(t)[0]?n(new Error(Object(s.b)(t)[1])):n()}}],code:[{required:!0,trigger:"blur",validator:function(e,t,n){4!==t.length?n(new Error("请输入4位数的验证码")):n()}}]}}},created:function(){},mounted:function(){},computed:{},props:[],methods:{handleSend:function(){var e=this;if(!this.msgKey){this.msgText="${time}秒后重发".replace("${time}",this.msgTime),this.msgKey=!0;var t=setInterval(function(){e.msgTime--,e.msgText="${time}秒后重发".replace("${time}",e.msgTime),0===e.msgTime&&(e.msgTime=60,e.msgText="发送验证码",e.msgKey=!1,clearInterval(t))},1e3)}},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){t&&e.$store.dispatch("Login",e.loginForm).then(function(t){e.$router.push({path:"/wel"})})})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{"status-icon":"",rules:e.loginRules,model:e.loginForm,"label-width":"0"}},[n("el-form-item",{attrs:{prop:"phone"}},[n("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入手机号码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}},[n("i",{staticClass:"icon-shouji",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),n("el-form-item",{attrs:{prop:"code"}},[n("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入验证码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}},[n("i",{staticClass:"icon-yanzhengma yanzhengma",attrs:{slot:"prefix"},slot:"prefix"}),e._v(" "),n("template",{slot:"append"},[n("span",{staticClass:"msg-text",class:[{display:e.msgKey}],on:{click:e.handleSend}},[e._v(e._s(e.msgText))])])],2)],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"login-submit",attrs:{size:"small",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)},staticRenderFns:[]};var m=n("vSla")(c,u,!1,function(e){n("ew3v")},null,null).exports,d=n("9rMa"),p={name:"login",components:{userLogin:a,codeLogin:m},data:function(){return{activeName:"user"}},created:function(){},mounted:function(){},computed:o()({},Object(d.b)(["website"])),props:[],methods:{}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container pull-height",nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}}},[n("div",{staticClass:"login-info text-white animated fadeInLeft"},[e._m(0),e._v(" "),n("h2",{staticClass:"login-info-title"},[e._v(e._s(e.website.info.title))]),e._v(" "),n("ul",{staticClass:"login-info-list"},e._l(e.website.info.list,function(t){return n("li",{staticClass:"login-info-item"},[n("i",{staticClass:"el-icon-check"}),e._v(" "+e._s(t)+"\n      ")])}))]),e._v(" "),n("div",{staticClass:"login-border  animated fadeInRight"},[n("div",{staticClass:"login-main"},[n("h4",{staticClass:"login-title"},[e._v("登录"+e._s(e.website.title)+"\n      ")]),e._v(" "),n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"用户密码",name:"user"}},[n("userLogin")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"短信验证码",name:"code"}},[n("codeLogin")],1)],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo",staticStyle:{"margin-top":"-426px"}},[t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:n("vJvE"),width:"160px",height:"160px",alt:"logo"}})])}]};var f=n("vSla")(p,g,!1,function(e){n("wNL9")},null,null);t.default=f.exports},ew3v:function(e,t){},vJvE:function(e,t,n){e.exports=n.p+"static/img/logo.4f8910c.png"},wNL9:function(e,t){}});