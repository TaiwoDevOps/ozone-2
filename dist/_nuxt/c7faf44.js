(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(t,e,o){var content=o(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("2065e928",content,!0,{sourceMap:!1})},266:function(t,e,o){"use strict";o(232)},267:function(t,e,o){(e=o(18)(!1)).push([t.i,".auth{background:#e5e5e5;z-index:9;width:100vw;height:100vh;display:flex;position:fixed;top:0;left:0}.auth__side{flex-shrink:0}.auth__left,.auth__side{display:flex;align-items:center}.auth__left{background:#159183;flex-basis:62%;-webkit-clip-path:polygon(0 0,84% 0,63% 100%,0 100%);clip-path:polygon(0 0,84% 0,63% 100%,0 100%);color:#fff;flex-direction:column;text-align:center;justify-content:center;padding:3rem 29rem 0 0;font-size:1.5rem}.auth__left h2{font-weight:400;font-size:2.5rem}.auth__left button{font-weight:400;background:#fff;color:#159183;display:flex;align-items:center;justify-content:center;outline:0;cursor:pointer;border:none;font-size:1.6rem;height:5.5rem;width:20rem;margin-top:2rem}.auth__right{flex-basis:50%}.auth__right h2{font-weight:400;font-size:2rem;margin-bottom:5rem}.auth__form{transform:translateX(-5rem)}.auth__input{display:flex;flex-direction:column;width:47rem;margin-bottom:3rem}.auth__input label{font-size:1.2rem;margin-bottom:1.2rem;color:#000;display:block}.auth__input label:nth-child(2){color:red}.auth__input input{width:100%;height:4.8rem;border:1.4px solid rgba(0,0,0,.1);border-radius:.5rem;background:transparent;outline:none;font-size:1.4rem;font-weight:500;padding:0 2rem}.auth__input input::-moz-placeholder{font-weight:500;font-size:1.3rem}.auth__input input:-ms-input-placeholder{font-weight:500;font-size:1.3rem}.auth__input input::placeholder{font-weight:500;font-size:1.3rem}.auth__submit button{font-weight:400;background:#159183;color:#fff;outline:none;cursor:pointer;border:none;font-size:1.5rem;height:5.5rem;width:100%}",""]),t.exports=e},281:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{email:"",password:"",phoneNumber:"",fullName:"",confirmPassword:"",accountType:"admin",passwordError:!1,loading:!1}},mounted:function(){null!==this.adminToken&&this.$router.push("/overview")},methods:{signup:function(){var t=this;if(this.confirmPassword!==this.password||!this.password.length)return this.passwordError=!0;this.passwordError=!1,this.loading=!0,this.$store.dispatch("authSignUp",{email:this.email,password:this.password,phoneNumber:this.phoneNumber,fullName:this.fullName,accountType:"admin"}).then((function(e){t.$store.dispatch("authSignIn",{email:t.email,password:t.password})})).catch((function(t){console.log(t,"this is a err")}))}},watch:{adminToken:function(t){this.$router.push("/overview")},confirmPassword:function(t){t===this.password&&(this.passwordError=!1)}},computed:{adminToken:function(){return this.$store.getters.adminToken}}},n=(o(266),o(11)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"auth"},[t._m(0),t._v(" "),o("div",{staticClass:"auth__right auth__side"},[o("div",{staticClass:"auth__right auth__form"},[o("h2",[t._v("Sign Up as an Admin")]),t._v(" "),o("div",{staticClass:"auth__input"},[o("label",{attrs:{for:""}},[t._v("Full Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],attrs:{type:"text",placeholder:"Enter Your fullname",name:""},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"auth__input"},[o("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter Your email",name:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"auth__input"},[o("label",{attrs:{for:""}},[t._v("Phone number")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{type:"number",placeholder:"Phone number",name:""},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"auth__input"},[o("div",[o("label",{attrs:{for:""}},[t._v("Password")]),t.passwordError?o("label",{attrs:{for:""}},[t._v("passwords should be the same")]):t._e()]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter a strong password",name:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"auth__input"},[o("div",[o("label",{attrs:{for:""}},[t._v("Confirm Password")]),t._v(" "),t.passwordError?o("label",{attrs:{for:""}},[t._v("passwords should be the same")]):t._e()]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",placeholder:"Confirm new password",name:""},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"auth__submit"},[o("button",{on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v("\n          "+t._s(t.loading?"SIGNING UP...":"SIGN UP")+"\n        ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"auth__left auth__side"},[e("h2",[this._v("Already have an admin account?")]),this._v(" "),e("button",[this._v("LOG IN")])])}],!1,null,null,null);e.default=component.exports}}]);