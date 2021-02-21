(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{205:function(t,e,r){var content=r(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("00c10764",content,!0,{sourceMap:!1})},206:function(t,e,r){var content=r(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("acd79478",content,!0,{sourceMap:!1})},207:function(t,e,r){"use strict";r.r(e);var n={name:"ProductCard",props:{background:String,borderRadius:String,deactivate:Boolean,top_color:String,under_color:String}},o=(r(209),r(11)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"productcard",style:{background:this.background,borderRadius:this.borderRadius}},[e("div",{staticClass:"productcard__under productcard__body"},[e("div",{staticClass:"productcard__under--design",class:{deactivate:this.deactivate}})]),this._v(" "),e("div",{staticClass:"productcard__top productcard__body"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,r){"use strict";r.r(e);r(19);var n={data:function(){return{value:"",dropOpen:!1}},watch:{value:function(t,e){this.inputValidator(t,this.name)}},props:{type:String,width:String,placeholder:String,values:Array,inputValidator:Function,name:String,dropIconColor:String,block:Boolean,dropIconSize:String},methods:{selectValue:function(t){this.value=t,this.dropOpen=!1},opendropdown:function(){this.dropOpen?this.dropOpen=!1:this.dropOpen=!0}}},o=(r(211),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inputfield"},["text"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"inputfield__input",style:{width:t.width},attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}):t._e(),t._v(" "),"dropdown"===t.type?r("input",{staticClass:"inputfield__input inputfield__input--dropdown",style:{width:t.width},attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{click:function(e){return e.stopPropagation(),t.opendropdown(e)}}}):t._e(),t._v(" "),"dropdown"===t.type?r("div",{staticClass:"inputfield__dropicon"},[t.block?t._e():r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none"}},[r("g",{attrs:{opacity:"0.9"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.61423 7.02866C5.34158 7.30132 5.3206 7.73035 5.55131 8.02707L5.61423 8.09832L9.39605 11.8801C9.66871 12.1528 10.0977 12.1738 10.3945 11.9431L10.4657 11.8801L14.2475 8.09832C14.5429 7.80294 14.5429 7.32404 14.2475 7.02866C13.9749 6.75601 13.5458 6.73503 13.2491 6.96574L13.1779 7.02866L9.93088 10.2751L6.68389 7.02866C6.41124 6.75601 5.9822 6.73503 5.68549 6.96574L5.61423 7.02866Z",fill:"#000000"}})])])]),t._v(" "),t.block?r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.dropIconSize,height:t.dropIconSize,viewBox:"0 0 24 24",fill:"none"}},[r("path",{attrs:{d:"M4 9L12 17L20 9H4Z",fill:"#2F3147"}})])]):t._e()]):t._e(),t._v(" "),t.dropOpen?r("div",{staticClass:"inputfield__dropdowns"},t._l(t.values,(function(e,n){return r("div",{key:n,staticClass:"inputfield__drop",on:{click:function(r){return t.selectValue(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,r){"use strict";r(205)},210:function(t,e,r){(e=r(17)(!1)).push([t.i,".productcard{height:100%;width:100%;position:relative;flex-shrink:0}.productcard__body{border-radius:2.4rem;background:inherit;position:absolute;top:0;left:0;width:100%;height:100%}.productcard__top{z-index:2}.productcard__under{z-index:1;opacity:.4;display:flex;justify-content:center;border-radius:inherit}.productcard__under--design{background:inherit;transform:translateY(7px);width:96%;height:100%;border-radius:inherit}.productcard__under--design.deactivate{background:transparent}",""]),t.exports=e},211:function(t,e,r){"use strict";r(206)},212:function(t,e,r){(e=r(17)(!1)).push([t.i,".inputfield{position:relative;height:100%}.inputfield__input{background:#fff;border:1px solid #f3f4f6;box-sizing:border-box;border-radius:.6rem;height:100%;padding:1.5rem 2rem}.inputfield__input:focus{outline:none;border:1px solid #159183}.inputfield__input::-webkit-input-placeholder{color:#838a96}.inputfield__dropdowns{position:absolute;width:100%;left:0;border:1px solid #f3f4f6;background:#fff;z-index:3;overflow:scroll;overflow-x:hidden;height:20rem;bottom:-20.1rem!important}.inputfield__dropicon{position:absolute;top:0;right:0;height:100%;display:flex;align-items:center;justify-content:center;padding-right:2rem}.inputfield__drop{position:relative;font-weight:500;font-size:1.4rem;color:#2f3147;background:#fff;border-bottom:1px solid #f3f4f6;letter-spacing:1.2px;padding:.5rem 2rem;z-index:3;cursor:pointer;height:4.2rem;display:flex;align-items:center;transition:all .5s ease}.inputfield__drop:hover{background:rgba(178,190,195,.1)}",""]),t.exports=e},221:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("f501332e",content,!0,{sourceMap:!1})},234:function(t,e,r){"use strict";r(221)},235:function(t,e,r){(e=r(17)(!1)).push([t.i,".transactions{padding-left:21rem}.transactions__body{padding:15rem 4.5rem 0 10rem}.transactions__topleft{height:30rem;width:61rem;box-shadow:4px 22px 20px 3px #e3e6ec}.transactions__bottomleft{height:80rem;width:61rem;background:#fff;border-radius:2.5rem;margin-top:5.7rem}.transactions__bottomleft--header{display:flex;align-items:center;justify-content:space-between;padding:1rem 3rem;background:red}",""]),t.exports=e},248:function(t,e,r){"use strict";r.r(e);var n=r(207),o=r(208),d={name:"Transactions",components:{ProductCard:n.default,InputField:o.default},methods:{inputValidator:function(t,e){}}},l=(r(234),r(11)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"transactions"},[e("div",{staticClass:"transactions__body"},[e("div",{staticClass:"transactions__left"},[e("div",{staticClass:"transactions__topleft"},[e("ProductCard",{attrs:{background:"#fff",borderRadius:"2.5rem"}})],1),this._v(" "),e("div",{staticClass:"transactions__bottomleft"},[e("div",{staticClass:"transactions__bottomleft--header"},[this._m(0),this._v(" "),e("div",{staticClass:"transactions__"},[e("InputField",{attrs:{inputValidator:this.inputValidator,name:"Per",values:["Test","Test2","Test","Test2","Test","Test2"],type:"dropdown",width:"100%"}})],1)])])]),this._v(" "),e("div",{staticClass:"transactions__right"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"transactions__search"},[e("input",{attrs:{placeholder:"Search ID Number",type:"text"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductCard:r(207).default,InputField:r(208).default})}}]);