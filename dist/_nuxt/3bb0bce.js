(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{231:function(t,e,r){var content=r(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("77bc32bd",content,!0,{sourceMap:!1})},273:function(t,e,r){t.exports=r.p+"img/icon-avatar-default.95d88e2.png"},274:function(t,e,r){"use strict";r(231)},275:function(t,e,r){(e=r(18)(!1)).push([t.i,".customerprofile{padding-left:21rem}.customerprofile__body{padding:15rem 4.5rem 0 10rem;display:flex;justify-content:space-between}.customerprofile__section{background:linear-gradient(180deg,hsla(0,0%,97.3%,.4),#fff);border-radius:1.5rem;box-shadow:-3px 0 20px rgba(0,0,0,.07);-webkit-box-shadow:-3px 0 20px rgba(0,0,0,.07);-moz-box-shadow:-3px 0 20px rgba(0,0,0,.07);padding:3rem}.customerprofile__names{text-align:center;padding:2rem 0 0;font-size:1.9rem;font-weight:400}.customerprofile__names h3{font-weight:500}.customerprofile__names span{color:#838a96}.customerprofile__btns{display:flex;justify-content:space-between;margin-top:3rem;margin-bottom:3.5rem}.customerprofile__btns button{background:#e5fffc;border:none;outline:none;cursor:pointer;color:#159183;font-weight:600;height:4rem;width:16rem;border-radius:.5rem;font-size:1.1rem}.customerprofile__btns button.active{background:#159183;color:#fff}.customerprofile__left{flex-basis:50rem}.customerprofile__leftitem{display:flex;flex-direction:column;line-height:2.2rem;margin-bottom:2.5rem}.customerprofile__leftitem span{display:inline-block;font-weight:500}.customerprofile__leftitem span:first-child{font-size:1.2rem;text-transform:uppercase;color:#838a96}.customerprofile__leftitem span:nth-child(2){font-size:1.3rem;font-weight:400}.customerprofile__leftitem span.colored{color:#6979f8}.customerprofile__avatar{height:10rem;width:10rem;margin:0 auto}.customerprofile__right{flex-basis:64rem;display:flex;flex-direction:column}.customerprofile__fuelcard{background:#fff;display:flex;justify-content:center;flex-direction:column;height:34rem;border-radius:1.5rem;box-shadow:-3px 0 20px rgba(0,0,0,.07);-webkit-box-shadow:-3px 0 20px rgba(0,0,0,.07);-moz-box-shadow:-3px 0 20px rgba(0,0,0,.07);padding:0 3rem}.customerprofile__fuelcard--top{display:flex;justify-content:space-between;align-items:center;color:#838a96;font-weight:500;font-size:1.8rem;text-transform:uppercase}.customerprofile__fuelcard--top span:nth-child(2) figure{height:8rem;width:8rem}.customerprofile__fuelcard--name{font-size:2.5rem;font-weight:500;margin:2rem 0}.customerprofile__fuelcard--validthrough{display:flex;flex-direction:column;font-size:1.4rem}.customerprofile__fuelcard--validthrough span:first-child{color:#838a96}.customerprofile__fuelcard--bottom{display:flex;justify-content:space-between;align-items:center}.customerprofile__fuelcard--logo span{display:inline-block;border-radius:100%;height:4rem;width:4rem;position:relative}.customerprofile__fuelcard--logo span:first-child{background:#d50000;transform:translateX(2rem);z-index:1}.customerprofile__fuelcard--logo span:nth-child(2){background:#ff9800;z-index:2;opacity:.6}",""]),t.exports=e},293:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"customerprofile__avatar"},[e("img",{attrs:{src:r(273),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__leftitem"},[e("span",[this._v("date of birth")]),this._v(" "),e("span",[this._v("31-July-1994")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__leftitem"},[e("span",[this._v("gender")]),this._v(" "),e("span",[this._v("Male")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__leftitem"},[e("span",[this._v("id card")]),this._v(" "),e("span",{staticClass:"colored"},[this._v("Screenshot 74737.png")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__leftitem"},[e("span",[this._v("utility bil")]),this._v(" "),e("span",{staticClass:"colored"},[this._v("IEIEKM.png")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__leftitem"},[e("span",[this._v("occupation")]),this._v(" "),e("span",[this._v("Product Designer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__leftitem"},[e("span",[this._v("bvn")]),this._v(" "),e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__fuelcard--top"},[e("span",[this._v("Fuel Card")]),this._v(" "),e("span",[e("figure",[e("img",{attrs:{src:r(127),alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customerprofile__fuelcard--bottom"},[e("div",{staticClass:"customerprofile__fuelcard--validthrough"},[e("span",[this._v("Valid Through")]),this._v(" "),e("span",[this._v("11/22")])]),this._v(" "),e("div",{staticClass:"customerprofile__fuelcard--logo"},[e("span"),this._v(" "),e("span")])])}],n={name:"CustomerProfile",data:function(){return{currentleft:!0}},computed:{customer:function(){var t=this;return this.$store.getters.customers.filter((function(t){return"admin"!==t.accountType})).filter((function(e){return e.id==t.$route.params.index}))[0]}},methods:{switchCurrentTrue:function(){this.currentleft=!0},switchCurrentFalse:function(){this.currentleft=!1}}},c=(r(274),r(11)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"customerprofile"},[r("div",{staticClass:"customerprofile__body"},[r("div",{staticClass:"customerprofile__left customerprofile__section"},[t._m(0),t._v(" "),r("div",{staticClass:"customerprofile__names"},[r("h3",[t._v(t._s(t.customer?t.customer.name:""))]),t._v(" "),r("span",[t._v(t._s(t.customer?t.customer.accountType:"")+" Member")])]),t._v(" "),r("div",{staticClass:"customerprofile__btns"},[r("button",{class:{active:t.currentleft},on:{click:t.switchCurrentTrue}},[t._v("\n          View Profile\n        ")]),t._v(" "),r("button",{class:{active:!t.currentleft},on:{click:t.switchCurrentFalse}},[t._v("\n          View KYC Details\n        ")])]),t._v(" "),r("div",{staticClass:"customerprofile__leftcontainer"},[t.currentleft&&t.customer?r("div",[r("div",{staticClass:"customerprofile__leftitem"},[r("span",[t._v("email")]),t._v(" "),r("span",[t._v(t._s(t.customer.email))])]),t._v(" "),r("div",{staticClass:"customerprofile__leftitem"},[r("span",[t._v("username")]),t._v(" "),r("span",[t._v(t._s(t.customer.name))])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"customerprofile__leftitem"},[r("span",[t._v("phone number")]),t._v(" "),r("span",[t._v(t._s(t.customer.phoneNumber))])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"customerprofile__leftitem"},[r("span",[t._v("status")]),t._v(" "),r("span",[t._v(t._s(t.customer.status))])])]):t._e(),t._v(" "),!t.currentleft&&t.customer?r("div",[r("div",{staticClass:"customerprofile__leftitem"},[r("span",[t._v("residential address")]),t._v(" "),r("span",[t._v(t._s(t.customer.email))])]),t._v(" "),r("div",{staticClass:"customerprofile__leftitem"},[r("span",[t._v("office address")]),t._v(" "),r("span",[t._v(t._s(t.customer.name))])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)]):t._e()])]),t._v(" "),r("div",{staticClass:"customerprofile__right customerprofile__section"},[r("div",{staticClass:"customerprofile__fuelcard"},[t._m(7),t._v(" "),r("div",{staticClass:"customerprofile__fuelcard--scanner"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"55",height:"42",viewBox:"0 0 55 42",fill:"none"}},[r("g",{attrs:{opacity:"0.6"}},[r("rect",{attrs:{x:"54.5103",y:"0.457031",width:"41.0705",height:"53.9553",rx:"4.02652",transform:"rotate(90 54.5103 0.457031)",fill:"#ECECEC",stroke:"#397026","stroke-width":"0.805303"}}),t._v(" "),r("rect",{attrs:{x:"32.7671",y:"6.09399",width:"28.1856",height:"11.2742",rx:"4.02652",transform:"rotate(90 32.7671 6.09399)",stroke:"#397026","stroke-width":"0.805303"}}),t._v(" "),r("path",{attrs:{d:"M0.445312 8.50977L22.9723 8.50977",stroke:"#397026","stroke-width":"0.805303"}}),t._v(" "),r("path",{attrs:{d:"M31.895 8.50977L54.422 8.50977",stroke:"#397026","stroke-width":"0.805303"}}),t._v(" "),r("path",{attrs:{d:"M0.445312 20.6062L21.7296 20.6062",stroke:"#397026","stroke-width":"0.805303"}}),t._v(" "),r("path",{attrs:{d:"M33.105 20.6062L54.3892 20.6062",stroke:"#397026","stroke-width":"0.805303"}}),t._v(" "),r("path",{attrs:{d:"M0.445312 32.7021L22.9723 32.7021",stroke:"#397026","stroke-width":"0.805303"}}),t._v(" "),r("path",{attrs:{d:"M31.895 32.7021L54.422 32.7021",stroke:"#397026","stroke-width":"0.805303"}})])])]),t._v(" "),r("div",{staticClass:"customerprofile__fuelcard--name"},[r("p",[t._v(t._s(t.customer?t.customer.name:""))])]),t._v(" "),t._m(8)]),t._v(" "),r("div",{staticClass:"customerprofile__history"})])])])}),o,!1,null,null,null);e.default=component.exports}}]);