(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(t,e,d){var content=d(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(18).default)("acd79478",content,!0,{sourceMap:!1})},211:function(t,e,d){"use strict";d.r(e);d(19);var o={data:function(){return{value:"",dropOpen:!1}},watch:{value:function(t,e){this.inputValidator(t,this.name)}},props:{type:String,width:String,placeholder:String,values:Array,inputValidator:Function,name:String,dropIconColor:String,block:Boolean,dropIconSize:String},methods:{selectValue:function(t){this.value=t,this.dropOpen=!1},opendropdown:function(){this.dropOpen?this.dropOpen=!1:this.dropOpen=!0}}},r=(d(212),d(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"inputfield"},["text"===t.type?d("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"inputfield__input",style:{width:t.width},attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}):t._e(),t._v(" "),"dropdown"===t.type?d("input",{staticClass:"inputfield__input inputfield__input--dropdown",style:{width:t.width},attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{click:function(e){return e.stopPropagation(),t.opendropdown(e)}}}):t._e(),t._v(" "),"dropdown"===t.type?d("div",{staticClass:"inputfield__dropicon"},[t.block?t._e():d("span",[d("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none"}},[d("g",{attrs:{opacity:"0.9"}},[d("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.61423 7.02866C5.34158 7.30132 5.3206 7.73035 5.55131 8.02707L5.61423 8.09832L9.39605 11.8801C9.66871 12.1528 10.0977 12.1738 10.3945 11.9431L10.4657 11.8801L14.2475 8.09832C14.5429 7.80294 14.5429 7.32404 14.2475 7.02866C13.9749 6.75601 13.5458 6.73503 13.2491 6.96574L13.1779 7.02866L9.93088 10.2751L6.68389 7.02866C6.41124 6.75601 5.9822 6.73503 5.68549 6.96574L5.61423 7.02866Z",fill:"#000000"}})])])]),t._v(" "),t.block?d("span",[d("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.dropIconSize,height:t.dropIconSize,viewBox:"0 0 24 24",fill:"none"}},[d("path",{attrs:{d:"M4 9L12 17L20 9H4Z",fill:"#2F3147"}})])]):t._e()]):t._e(),t._v(" "),t.dropOpen?d("div",{staticClass:"inputfield__dropdowns"},t._l(t.values,(function(e,o){return d("div",{key:o,staticClass:"inputfield__drop",on:{click:function(d){return t.selectValue(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,d){"use strict";d(210)},213:function(t,e,d){(e=d(17)(!1)).push([t.i,".inputfield{position:relative;height:100%}.inputfield__input{background:#fff;border:1px solid #f3f4f6;box-sizing:border-box;border-radius:.6rem;height:100%;padding:1.5rem 2rem}.inputfield__input:focus{outline:none;border:1px solid #159183}.inputfield__input::-webkit-input-placeholder{color:#838a96}.inputfield__dropdowns{position:absolute;width:100%;left:0;border:1px solid #f3f4f6;background:#fff;z-index:3;overflow:scroll;overflow-x:hidden;height:20rem;bottom:-20.1rem!important}.inputfield__dropicon{position:absolute;top:0;right:0;height:100%;display:flex;align-items:center;justify-content:center;padding-right:2rem}.inputfield__drop{position:relative;font-weight:500;font-size:1.4rem;color:#2f3147;background:#fff;border-bottom:1px solid #f3f4f6;letter-spacing:1.2px;padding:.5rem 2rem;z-index:3;cursor:pointer;height:4.2rem;display:flex;align-items:center;transition:all .5s ease}.inputfield__drop:hover{background:rgba(178,190,195,.1)}",""]),t.exports=e},229:function(t,e,d){var content=d(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(18).default)("b1172e94",content,!0,{sourceMap:!1})},258:function(t,e,d){t.exports=d.p+"img/upload.48192ac.png"},259:function(t,e,d){"use strict";d(229)},260:function(t,e,d){(e=d(17)(!1)).push([t.i,'.addproduct{padding-left:21rem}.addproduct__body{padding:15rem 4.5rem 0 10rem}.addproduct__nav{justify-content:space-between;background:#fff;border-radius:2.4rem;box-shadow:0 2px 10px transparent,0 3px 6px rgba(0,0,0,.1);height:18rem;padding:3rem 6rem}.addproduct__nav,.addproduct__nav--top{display:flex;align-items:center}.addproduct__nav--item{width:28rem}.addproduct__nav--item:nth-child(4){width:auto}.addproduct__nav--heading{color:#838a96;font-size:1.65rem;position:relative;margin-bottom:.5rem;font-weight:600;margin-right:3rem}.addproduct__nav--heading.active{color:#159183}.addproduct__nav--heading+span{width:15rem;height:2px;background:#e4e4e4;display:inline-block;border-radius:3rem;position:relative}.addproduct__nav--heading+span:before{content:"";position:absolute;top:0;left:0;width:0;height:100%;background:#159183;transition:all .5s ease-in}.addproduct__nav--heading+span.active:before{width:100%}.addproduct__nav--heading.last+span{display:none}.addproduct__nav--description{color:#838a96;font-size:1.56rem;font-weight:600}.addproduct__content{background:#fff;border-radius:2.4rem;box-shadow:0 2px 10px transparent,0 3px 6px rgba(0,0,0,.1);padding:3rem 6rem;margin-top:5.7rem}.addproduct__h1{font-weight:500;font-size:2rem;margin-top:1.8rem;margin-bottom:4rem}.addproduct__form--formarea{position:relative;display:flex;justify-content:space-between;margin-bottom:5rem}.addproduct__form--uploadinput{position:absolute;top:0;left:0;display:none}.addproduct__form--uploadlabel{width:100%}.addproduct__form--flexarea{flex-shrink:0}.addproduct__form--label{display:inline-block;margin-bottom:.5rem;font-size:1.2rem;color:#2f3147}.addproduct__form--input{height:4.2rem}.addproduct__form--width100{width:100%}.addproduct__form--descrip{border-radius:1.8rem;width:100%;position:relative;overflow:hidden;padding:2rem 3rem}.addproduct__form--descrip:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#8f92a1;opacity:.1}.addproduct__form--upload{height:29rem;width:100%;overflow:hidden;border-radius:1.5rem;cursor:pointer;display:flex;justify-content:center;align-items:center}.addproduct__form--upload img{height:auto!important}.addproduct__form--uploadset{border-radius:1.8rem;width:100%;height:24rem;position:relative;overflow:hidden}.addproduct__form--uploadset:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#8f92a1;opacity:.1}.addproduct__form--uploadsettop{display:flex;justify-content:space-between;padding:2rem 26rem 2.4rem;text-transform:uppercase;font-weight:600;font-size:1.5rem;color:#2f3147}.addproduct__form--uploadsetbottom{position:relative;margin:0 auto;background:#fff;border-radius:1.8rem;width:79rem;height:13rem;z-index:1}.addproduct__btns{display:flex;justify-content:space-between;margin:13rem 0 6rem}.addproduct__btn{background:rgba(223,230,233,.3);cursor:pointer;border:none;font-weight:600;color:#2f3147;height:4.6rem;min-width:17rem;font-size:1.3rem;border-radius:.5rem}.addproduct__btn:active,.addproduct__btn:focus{outline:none}.addproduct__btn--colored{background:#159183;color:#fff;width:25rem}.ql-editor{min-height:21rem!important;background:#fff}.ql-container.ql-snow,.ql-toolbar.ql-snow{border:none!important}',""]),t.exports=e},275:function(t,e,d){"use strict";d.r(e);d(19),d(41),d(40);var o=d(211),r=(d(38),{data:function(){return{header:"Add Product Information",productIcon:null,formData:{name:"",ticker:"",description:"",measurment:"",tax:"",unit_price:"",coverage:{state:"",city:""},shipping_fee:"",tags:["test"],image:null},content:"",editorOption:{},pageTracker:0,value:"",options:["Select option","options","selected","mulitple","label","searchable","clearOnSelect","hideSelected","maxHeight","allowEmpty","showLabels","onChange","touched"],nav:[{name:"Step One",description:"Product Information",header:"Add Product Information"},{name:"Step Two",description:"Add Images",header:"Upload Product Icon"},{name:"Step Three",description:"Product Pricing",header:"Pricing"},{name:"Step Four",description:"Coverage and Shipping",header:"Coverage"}]}},components:{InputField:o.default},methods:{handleImgUpload:function(t){var e=this;console.log(t,"trigger the image upload");var d=t.target.files,o=Array.from(d),r=o[0];console.log(o);var n=new FileReader;n.readAsDataURL(r),n.onloadend=function(){console.log(n.result),e.productIcon=n.result;var t=e.formData;t.image=r,e.formDate=t}},inputValidator:function(t,e){console.log(t,e);var d=this.formData;switch(e){case"Product Name":console.log(t,"this isa rea ts"),d.name=t,this.formData=d;break;case"Product Ticker":console.log(t,"this isa rea ts"),d.ticker=t,this.formData=d;break;case"Unit Price":d.unit_price=t,this.formData=d;break;case"Tax Rule":d.tax=t,this.formData=d;break;case"Shipping Fee":d.shipping_fee=t,this.formData=d;break;case"City":d.coverage.city=t,this.formData=d;break;case"State":d.coverage.state=t,this.formData=d}},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,html=t.html,text=t.text;console.log("editor change!",e,html,text),console.log("the change:",text);var d=this.formData;d.description=html,this.formData=d,console.log(this.formData),this.content=html},nextPage:function(){if(this.pageTracker!==this.nav.length-1){var t=this.pageTracker;t+=1,this.pageTracker=t,this.header=this.nav[this.pageTracker].header}else this.submitProduct()},prevPage:function(){if(0!==this.pageTracker){var t=this.pageTracker;t-=1,this.pageTracker=t,this.header=this.nav[this.pageTracker].header}},submitProduct:function(){this.formData;this.$store.dispatch("submitProduct",this.formData)}},mounted:function(){}}),n=(d(259),d(11)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addproduct"},[o("div",{staticClass:"addproduct__body"},[o("div",{staticClass:"addproduct__nav"},t._l(t.nav,(function(e,d){return o("div",{key:d,staticClass:"addproduct__nav--item"},[o("div",{staticClass:"addproduct__nav--top"},[o("div",{staticClass:"addproduct__nav--heading",class:{last:3===d,active:d<=t.pageTracker}},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),o("span",{class:{active:d<=t.pageTracker}})]),t._v(" "),o("div",{staticClass:"addproduct__nav--description"},[t._v(t._s(e.description))])])})),0),t._v(" "),o("div",{staticClass:"addproduct__content"},[o("h1",{staticClass:"addproduct__h1"},[t._v(t._s(t.header))]),t._v(" "),o("div",{staticClass:"addproduct__pages"},[o("div",{staticClass:"addproduct__form"},["Add Product Information"===t.header?o("form",{staticClass:"addproduct__form--information"},[o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Product Name")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Product Name",type:"text",width:"60rem"}})],1)]),t._v(" "),o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Product Ticker")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Product Ticker",block:!0,dropIconSize:"18",values:["Test","Test2","Test","Test2","Test","Test2"],type:"dropdown",width:"30rem",bottom:"-26rem"}})],1)])]),t._v(" "),o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea addproduct__form--width100"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Description")]),t._v(" "),o("div",{staticClass:"addproduct__form--descrip"},[o("div",{style:{height:"28rem"}},[o("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])])]),t._v(" "),o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Category")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Category",type:"text",width:"60rem"}})],1)]),t._v(" "),o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Tags")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Tags",type:"text",width:"38rem"}})],1)])])]):t._e(),t._v(" "),"Upload Product Icon"===t.header?o("form",{staticClass:"addproduct__form--information"},[o("div",{staticClass:"addproduct__form--formarea"},[o("input",{staticClass:"addproduct__form--uploadinput",attrs:{type:"file",id:"addproduct__form--imgupload",accept:"image/*"},on:{change:t.handleImgUpload}}),t._v(" "),o("label",{staticClass:"addproduct__form--uploadlabel",attrs:{for:"addproduct__form--imgupload"}},[o("figure",{staticClass:"addproduct__form--upload"},[t.productIcon?t._e():o("img",{attrs:{src:d(258),alt:""}}),t._v(" "),t.productIcon?o("img",{attrs:{src:t.productIcon,alt:""}}):t._e()])])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),"Pricing"===t.header?o("form",{staticClass:"addproduct__form--information"},[o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Unit Price")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Unit Price",type:"text",width:"60rem"}})],1)]),t._v(" "),o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Per")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Per",values:["Test","Test2","Test","Test2","Test","Test2"],type:"dropdown",width:"30rem",bottom:"-26rem"}})],1)])]),t._v(" "),o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Tax Rule")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Tax Rule",type:"text",width:"60rem"}})],1)])])]):t._e(),t._v(" "),"Coverage"===t.header?o("div",[o("form",{staticClass:"addproduct__form--information"},[o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("City")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"City",type:"text",width:"60rem"}})],1)]),t._v(" "),o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("State")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"State",type:"text",width:"30rem"}})],1)])]),t._v(" "),o("div",{style:{padding:".5rem 0"}}),t._v(" "),o("h1",{staticClass:"addproduct__h1"},[t._v(t._s("Shipping"))]),t._v(" "),o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Width")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Width",type:"text",width:"60rem"}})],1)]),t._v(" "),o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Height")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Height",type:"text",width:"30rem"}})],1)])]),t._v(" "),o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Depth")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Depth",type:"text",width:"60rem"}})],1)]),t._v(" "),o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Weight")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Weight",type:"text",width:"30rem"}})],1)])]),t._v(" "),o("div",{staticClass:"addproduct__form--formarea"},[o("div",{staticClass:"addproduct__form--flexarea"},[o("span",{staticClass:"addproduct__form--label"},[t._v("Shipping Fee")]),t._v(" "),o("div",{staticClass:"addproduct__form--input"},[o("InputField",{attrs:{inputValidator:t.inputValidator,name:"Shipping Fee",type:"text",width:"60rem"}})],1)])])])]):t._e()]),t._v(" "),o("div",{staticClass:"addproduct__btns"},[o("button",{staticClass:"addproduct__btn addproduct__btn--gray",on:{click:t.prevPage}},[t._v("\n            Cancel\n          ")]),t._v(" "),o("button",{staticClass:"addproduct__btn addproduct__btn--colored",on:{click:t.nextPage}},[t._v("\n            "+t._s("Coverage"===t.header?"Add New Product":"Save and Proceed")+"\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"addproduct__form--formarea"},[d("div",{staticClass:"addproduct__form--uploadset"},[d("div",{staticClass:"addproduct__form--uploadsettop"},[d("span",[t._v("image")]),t._v(" "),d("span",[t._v("position")]),t._v(" "),d("span",[t._v("cover")])]),t._v(" "),d("div",{staticClass:"addproduct__form--uploadsetbottom"},[d("span"),t._v(" "),d("span",[t._v("1")]),t._v(" "),d("span"),t._v(" "),d("span"),t._v(" "),d("span")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InputField:d(211).default})}}]);