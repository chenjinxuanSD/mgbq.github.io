webpackJsonp([3],{eUuT:function(e,r){},"ook+":function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={data:function(){return{checked:!0,loginForm:{username:"admin",password:"admin"},rules:{username:[{required:!0,trigger:"blur",validator:function(e,r,n){""===r?n(new Error("请输入用户名")):n()}}],password:[{required:!0,trigger:"blur",validator:function(e,r,n){r.length<5?n(new Error("密码不能小于5位")):n()}}]},loading:!0}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(r){if(!r)return console.log("error submit!!"),!1;e.$store.dispatch("Login",e.loginForm).then(function(){e.loading=!1,localStorage.setItem("ms_username",e.loginForm.username),e.$router.push("/Readme")}).catch(function(){e.loading=!1})})}}},o={render:function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"login-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"ms-title"},[e._v("自动化装逼系统")]),e._v(" "),n("div",{staticClass:"ms-login"},[n("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,rules:e.rules,"label-width":"0px"}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"用户名"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(r){return"button"in r||!e._k(r.keyCode,"enter",13,r.key,"Enter")?e.handleLogin(r):null}},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),e._v(" "),n("div",{staticClass:"login-btn"},[n("el-button",{nativeOn:{click:function(r){return r.preventDefault(),e.handleLogin(r)}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"head-log"},[r("img",{staticClass:"company-log",attrs:{src:"",alt:"公司log"}})])}]};var s=n("Z0/y")(t,o,!1,function(e){n("eUuT")},null,null);r.default=s.exports}});