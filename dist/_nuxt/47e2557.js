(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{214:function(t,e,o){var content=o(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("76a687cc",content,!0,{sourceMap:!1})},215:function(t,e,o){"use strict";o.r(e);var r={name:"BarGraph",props:{colors:Array,numberOfBarsPerArea:Array,YScale:Array,XScale:Array,barBodyWidth:String,barWidth:String}},n=(o(219),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bargraph"},[o("div",{staticClass:"bargraph__bodyone"},[o("div",{staticClass:"bargraph__area bargraph__left"},t._l(t.YScale,(function(e,r){return o("div",{key:r},[o("span",[t._v(t._s(e))])])})),0),t._v(" "),o("div",{staticClass:"bargraph__area bargraph__right"},[o("div",{staticClass:"bargraph__barcontent"},t._l(t.numberOfBarsPerArea,(function(e,r){return o("div",{key:r,staticClass:"bargraph__barbody",style:{width:t.barBodyWidth}},[o("div",{staticClass:"bargraph__bars"},t._l(e,(function(e,r){return o("div",{key:r,staticClass:"bargraph__bar",style:{width:t.barWidth}},[o("div",{staticClass:"bargraph__barbox",style:{background:t.colors[r],height:e}})])})),0),t._v(" "),o("div",{staticClass:"bargraph__barlabel"},[o("label",{attrs:{for:""}},[t._v(t._s(t.XScale[r]))])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,o){var content=o(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("00c10764",content,!0,{sourceMap:!1})},217:function(t,e,o){"use strict";o.r(e);var r={name:"ProductCard",props:{background:String,borderRadius:String,deactivate:Boolean,top_color:String,under_color:String}},n=(o(221),o(12)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"productcard",style:{background:this.background,borderRadius:this.borderRadius}},[e("div",{staticClass:"productcard__under productcard__body"},[e("div",{staticClass:"productcard__under--design",class:{deactivate:this.deactivate}})]),this._v(" "),e("div",{staticClass:"productcard__top productcard__body"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,o){"use strict";o(214)},220:function(t,e,o){(e=o(19)(!1)).push([t.i,".bargraph,.bargraph__bodyone{width:100%;height:100%;position:relative}.bargraph__bodyone{display:flex;font-size:1.3rem;color:#000;font-weight:500}.bargraph__area{height:100%;display:flex;flex-direction:column;justify-content:space-between}.bargraph__left{opacity:.5;padding-bottom:2.5rem}.bargraph__right{padding:0 1rem;width:98%}.bargraph__barbody,.bargraph__barcontent{height:100%;justify-content:space-between;display:flex}.bargraph__barbody{flex-direction:column}.bargraph__bars{display:flex;width:100%;height:100%;justify-content:space-between}.bargraph__bar{position:relative;border-radius:.3rem;height:100%}.bargraph__barbox{border-radius:.3rem;position:absolute;bottom:0;left:0;width:100%}.bargraph__barlabel{display:flex;justify-content:space-between;opacity:.5;margin-top:1rem}",""]),t.exports=e},221:function(t,e,o){"use strict";o(216)},222:function(t,e,o){(e=o(19)(!1)).push([t.i,".productcard{height:100%;width:100%;position:relative;flex-shrink:0}.productcard__body{border-radius:2.4rem;background:inherit;position:absolute;top:0;left:0;width:100%;height:100%}.productcard__top{z-index:2}.productcard__under{z-index:1;opacity:.4;display:flex;justify-content:center;border-radius:inherit}.productcard__under--design{background:inherit;transform:translateY(7px);width:96%;height:100%;border-radius:inherit}.productcard__under--design.deactivate{background:transparent}",""]),t.exports=e},358:function(t,e,o){!function(e,o){"use strict";t.exports=o}(0,(function(t){function e(){!0!==k&&(A=0,p((function(t){t.value=Number(t.value||0),A+=t.value}))),j=0,0!==A&&p((function(t,e){t.percent=Math.round(100*t.value/A),j+=t.percent,_(e)&&!1===k&&(t.percent+=100-j)})),m("onUpdateStart"),!0===P?function(){var e=-M/2,i=t.definition.length;!function e(r,n,i){var c=t.definition[i],a=0,u=0,s=function(){l(c)&&(a+=function(t,e){var o=t.percent,i=z;return e+z>o&&(i=o-e),e+i===100&&(i-=1e-4),i}(c,a),u=o(c.$path,r,a)),a<c.percent?setTimeout(s,S):n-1>i?(a=0,e(u+=r,n,i+=1)):m("onUpdateEnd")};setTimeout(s,S)}(e,i,0)}():(function(){var t=-M/2;p((function(e){l(e)&&(t+=o(e.$path,t,e.percent))}))}(),m("onUpdateEnd"))}function o(t,e,o){var i=o/100*(2*M),r=e+i,n=(r-e)%(2*M)>M?1:0,c=x+B(e)*x,l=x+q(e)*x,a=x+B(r)*x,u=x+q(r)*x,s=["M",c,l,"A",x,x,0,n,1,a,u,"L",x,x,"Z"];return t.setAttribute("d",s.join(" ")),i}function u(){p(s)}function s(t){var e=c("path");d(t.cls)&&e.setAttributeNS(null,"class",t.cls),(d(t.color)||D)&&e.setAttributeNS(null,"style",(d(t.color)?"fill: "+t.color+";":"")+" "+(!0===D?"cursor: pointer;":"")),D&&e.addEventListener("click",r.bind(t)),f.appendChild(e),t.$path=e}function r(e){var o;D&&(o=function(){var t=document.documentElement;return{left:(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0),top:(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}}(),v.textContent=this.label+" : "+this.value,v.style.left=e.x+o.left-v.offsetWidth/2+"px",v.style.top=e.y+o.top-20+"px",t.tooltipClass?v.classList.toggle("circle-chart-tooltip-is-visible"):(v.style.visibility="visible",v.style.opacity="1",v.style["z-index"]="auto",v.style.transition="visibility 0s .6s, z-index 0s .6s, opacity .6s ease;",v.style.position="absolute")),m("onPathClick",e)}function p(e){for(var o=0,i=t.definition,r=i.length;r>o;o+=1)e.call(w,i[o],o)}function b(){if(0==!!t.isPie){var e=g(x,y*L);d(t.middleCircleColor)?e.setAttributeNS(null,"style","fill: "+t.middleCircleColor):e.setAttributeNS(null,"class","circle-chart-background-empty"),f.appendChild(e)}}function n(){v.style.cssText="position: fixed; visibility: hidden; opacity: 0; z-index: -1; color: #fff; padding: 10px; background-color: rgba(0,0,0,0.6); transition: opacity .6s ease;"}function g(t,e){var o=c("circle");return o.setAttributeNS(null,"cx",t),o.setAttributeNS(null,"cy",t),o.setAttributeNS(null,"r",e),o}function c(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function l(t){return t.value>0&&t.percent>0}function d(t){return void 0!==t}function _(e){return e+1===t.definition.length}function m(e,o){var i=t[e];"function"==typeof i&&i.call(w,{$chart:f,chart:w,total:A,event:o,$tooltip:v})}function h(t){var e=t.target;!1===C.contains(e)&&n()}var f,v,w=this,C=t.$container,y=t.size||C.offsetWidth,x=y/2,k=!!d(t.staticTotal)&&t.staticTotal,A=k&&t.total||0,j=0,L=t.ringProportion||.35,z=t.speed||1,S=t.durration||10,M=Math.PI,B=Math.cos,q=Math.sin,P=!d(t.animated)||t.animated,N=!d(t.drawAtStart)||t.drawAtStart,D=!!d(t.tooltips)&&!!t.tooltips,T=!!d(t.tooltips)&&t.addPiePathsAtLast;(f=c("svg:svg")).setAttribute("width",y),f.setAttribute("height",y),f.setAttribute("viewBox","0 0 "+y+" "+y),function(){var e=g(x,x);d(t.background)?e.setAttributeNS(null,"style","fill: "+t.background):e.setAttributeNS(null,"class","circle-chart-background"),f.appendChild(e)}(),T?(b(),u()):(u(),b()),D&&(v=document.createElement("div"),t.tooltipClass&&(v.className=t.tooltipClass),n(),C.appendChild(v),document.body.addEventListener("click",h)),t.$container.appendChild(f),m("onAfterRender"),N&&e(),w.update=function(t){p((function(e){(function(t,e){d(e)&&(t.value=parseInt(e))})(e,t[e.name]),function(t){t.removeAttribute("d")}(e.$path)})),e()},w.setTotal=function(t){A=Number(t)}}))},373:function(t,e,o){var content=o(414);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3e508a32",content,!0,{sourceMap:!1})},413:function(t,e,o){"use strict";o(373)},414:function(t,e,o){(e=o(19)(!1)).push([t.i,'.customer{padding-left:21rem;min-height:200rem}.customer__body{padding:15rem 4.5rem 0 10rem}.customer__top{display:flex;justify-content:space-between}.customer__topleft{width:80rem;flex-shrink:0}.customer__topright{width:32rem;flex-shrink:0;position:relative}.customer__topright--body{position:relative;height:100%;padding:3rem;display:flex;align-items:center;flex-direction:column}.customer__topright--body h2{text-align:center}.customer__topright--circlegraph{height:27.5rem;margin-top:3rem;margin-bottom:1rem;width:100%}.customer__topright--numbers{font-size:8rem;font-weight:500}.customer__topright--indicator{display:flex;align-items:center}.customer__topright--indicator span{font-weight:500;font-size:1.3rem;display:inline-block}.customer__topright--indicator span:first-child{height:1.5rem;width:1.5rem;border-radius:.4rem;cursor:pointer;background:#6c5dd3}.customer__topright--indicator span:nth-child(2){margin-left:1rem}.customer__topright--indicator:nth-child(2) span:first-child{background:#ffa2c0}.customer__topright--indicators{font-weight:500;display:flex;justify-content:space-between;width:80%;font-size:1.3rem;position:absolute;bottom:4rem}.customer__toplefttop{height:36rem;width:100%;position:relative}.customer__toplefttop--body{padding:3rem}.customer__toplefttop--top{display:flex;justify-content:space-between}.customer__toplefttop--indicators{display:flex}.customer__toplefttop--indicator{margin-left:5rem;display:flex;align-items:center}.customer__toplefttop--indicator span{font-weight:500;font-size:1.3rem;display:inline-block}.customer__toplefttop--indicator span:first-child{height:1.5rem;width:1.5rem;border-radius:.4rem;cursor:pointer;background:#159183}.customer__toplefttop--indicator span:nth-child(2){margin-left:1rem}.customer__toplefttop--indicator:nth-child(2) span:first-child{background:#0049c6}.customer__toplefttop--graph{width:100%;height:20rem;margin-top:7rem}.customer__topleftbottom{margin-top:4rem;height:22rem;width:100%;position:relative}.customer__topleftbottom--body{padding:3rem}.customer__topleftbottom--sections{display:flex;margin-top:2rem;justify-content:space-between;align-items:center}.customer__topleftbottom--section{border-radius:1.2rem;padding:2rem;width:18rem;height:12rem;justify-content:space-between;display:flex;flex-direction:column}.customer__topleftbottom--section.others{box-shadow:7px 14px 20px rgba(0,0,0,.2);-webkit-box-shadow:7px 14px 20px rgba(0,0,0,.2);-moz-box-shadow:7px 14px 20px rgba(0,0,0,.2)}.customer__topleftbottom--section.middle{position:relative;width:33rem;border:1px solid #a8a8a8;background:#fff}.customer__topleftbottom--section.middle:before{content:"";position:absolute;height:100%;width:98%;top:0;left:.3rem;border-radius:1.2rem;z-index:-1;border:1px solid #a8a8a8;transform:translateY(.7rem)}.customer__topleftbottom--middlegraph{position:absolute;bottom:0;left:0;border-radius:1.2rem;border:none;height:78%;width:100%;display:flex;justify-content:center;align-items:center;background:transparent}.customer__topleftbottom--sectionarea{display:flex;justify-content:space-between;align-items:center}.customer__topleftbottom--sectionarea span{display:inline-block}.customer__topleftbottom--sectionarea span.iconfigure{display:flex;align-items:center;font-size:1.5rem;font-weight:500}.customer__topleftbottom--sectionarea span.coloredicon{transform:translateY(.2rem)}.customer__topleftbottom--sectionarea span.accounttype{color:#808191;font-size:1.4rem}.customer__topleftbottom--sectionarea span.date{color:#808191;opacity:.7;font-weight:500}.customer__topleftbottom--sectionarea p.number{font-size:2rem;font-weight:500}.customer__bottom{margin-top:4rem;width:100%}.customer__bottom--body{padding:3rem;background:linear-gradient(180deg,hsla(0,0%,97.3%,.3),#fff);border-radius:1.5rem}.customer__bottom--heading{display:flex;align-items:center;justify-content:space-between;color:rgba(128,129,145,.9);font-size:1.4rem;font-weight:500;margin-top:1rem;padding:3rem 0 2rem}.customer__bottom--heading span{display:inline-block;flex-shrink:0}.customer__bottom--heading span:nth-child(2){width:20rem}.customer__bottom--heading span:nth-child(3){width:16rem}.customer__bottom--heading span:nth-child(4){width:17rem}.customer__bottom--heading span:nth-child(5){width:23rem}.customer__bottom--heading span:nth-child(6){width:13rem}.customer__bottom--tile{position:relative;display:flex;align-items:center;justify-content:space-between;font-size:1.4rem;font-weight:400;cursor:pointer;padding:2rem 0;margin-top:1rem;border-top:.2px solid rgba(47,54,64,.2)}.customer__bottom--tile span{display:inline-block;flex-shrink:0}.customer__bottom--tile span:nth-child(2){width:20rem}.customer__bottom--tile span:nth-child(3){width:16rem}.customer__bottom--tile span:nth-child(4){width:17rem}.customer__bottom--tile span:nth-child(5){width:26rem}.customer__bottom--tile span:nth-child(6){width:10rem;height:3rem;color:#fff;background:#0049c6;border-radius:1rem;display:flex;justify-content:center;align-items:center;cursor:pointer}.customer__bottom--tile span:nth-child(6):hover+.customer__bottom--manage{display:block;z-index:10}.customer__bottom--btn{width:100%;padding:5rem 0;border-top:.2px solid rgba(47,54,64,.2)}.customer__bottom--btn,.customer__bottom--btn button{display:flex;justify-content:center;align-items:center}.customer__bottom--btn button{font-weight:600;background:#1b1d21;color:#fff;outline:none;cursor:pointer;border:none;font-size:1.3rem;border-radius:1.2rem;height:4.5rem;width:14rem}.customer__bottom--name{width:20rem;flex-shrink:0}.customer__bottom--manage{position:absolute;right:0;top:5rem;background:#fff;width:23rem;height:24rem;border-radius:.5rem;padding:4rem 2rem 3rem;box-shadow:13px 27px 100px rgba(0,0,0,.2);-webkit-box-shadow:13px 27px 100px rgba(0,0,0,.2);-moz-box-shadow:13px 27px 100px rgba(0,0,0,.2);display:none;z-index:-1}.customer__bottom--manage:hover{display:block;z-index:10}.customer__bottom--optionactions{color:#808191;font-size:1.3rem;font-weight:400;margin-bottom:1rem}.customer__bottom--option{border-bottom:.1px solid rgba(0,0,0,.2);padding:1rem 0 0;cursor:pointer;position:relative;font-weight:600!important}.customer__bottom--option:nth-child(2){color:#159183}.customer__bottom--option:nth-child(3){color:#0049c6}.customer__bottom--option:nth-child(4){border:none;color:#ff647c}h2{width:100%;font-size:1.7rem;font-weight:500}',""]),t.exports=e},548:function(t,e,o){"use strict";o.r(e);var r=o(217),n=o(358),c=o.n(n),l=o(215),d={component:{ProductCard:r.default,CircleChart:c.a,BarGraph:l.default},data:function(){return{}},mounted:function(){new c.a({$container:document.getElementById("gender-graph"),ringProportion:.42,tooltips:!0,staticTotal:!0,total:100,middleCircleColor:"#fff",background:"#6C5DD3",definition:[{label:"Temperature",name:"temp",color:"#FFA2C0",value:43.98}]})},middleware:"auth",methods:{viewprofile:function(t){this.$router.push("customer/profile/"+t.id)}},computed:{customers:function(){var t=this.$store.getters.customers.filter((function(t){return"admin"!==t.accountType&&"merchant"!==t.accountType}));return t}}},_=(o(413),o(12)),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customer"},[o("div",{staticClass:"customer__body"},[o("div",{staticClass:"customer__top"},[o("div",{staticClass:"customer__topleft"},[o("div",{staticClass:"customer__toplefttop"},[o("ProductCard",{attrs:{background:"linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)",borderRadius:"1.5rem"}},[o("div",{staticClass:"customer__toplefttop--body"},[o("div",{staticClass:"customer__toplefttop--top"},[o("h2",[t._v("Customer Purchase Report")]),t._v(" "),o("div",{staticClass:"customer__toplefttop--indicators"},[o("div",{staticClass:"customer__toplefttop--indicator"},[o("span"),t._v(" "),o("span",[t._v("LNG")])]),t._v(" "),o("div",{staticClass:"customer__toplefttop--indicator"},[o("span"),t._v(" "),o("span",[t._v("Diesel")])])])]),t._v(" "),o("div",{staticClass:"customer__toplefttop--graph"},[o("BarGraph",{attrs:{colors:["#159183","#0049c6"],numberOfBarsPerArea:[["100%","40%"],["20%","30%"],["45%","30%"],["67%","100%"],["70%","56%"],["50%","56%"],["100%","56%"]],YScale:[60,40,20,0],XScale:["Jan","Feb","Mar","Apr","May","Jun","Jul"],barBodyWidth:"7rem",barWidth:"3rem"}})],1)])])],1),t._v(" "),o("div",{staticClass:"customer__topleftbottom"},[o("ProductCard",{attrs:{background:"linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)",borderRadius:"1.5rem"}},[o("div",{staticClass:"customer__topleftbottom--body"},[o("h2",[t._v("O-Zone Customers")]),t._v(" "),o("span"),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sections"},[o("div",{staticClass:"customer__topleftbottom--section others"},[o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("span",{staticClass:"accounttype"},[t._v("Lite")]),t._v(" "),o("span",{staticClass:"iconfigure"},[o("span",{staticClass:"coloredsvg"},[o("span",{staticClass:"coloredicon"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"}},[o("circle",{attrs:{cx:"6.73806",cy:"6.73684",r:"6.73684",fill:"#6979F8"}}),t._v(" "),o("path",{attrs:{d:"M4.49243 7.85986L6.73805 5.61425L8.98366 7.85986",stroke:"white","stroke-width":"1.68421","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("span",{staticClass:"percent"},[t._v("8%")])])])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("p",{staticClass:"number"},[t._v("8000")])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("span",{staticClass:"date"},[t._v("02-Nov-2020")]),t._v(" "),o("span",{staticClass:"blackrighticon"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M14 8L18 12L14 16",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),o("path",{attrs:{d:"M18 12L7.6709 12",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--section middle"},[o("div",{staticClass:"customer__topleftbottom--middlegraph"},[o("span",[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"40",viewBox:"0 0 90 40",fill:"none"}},[o("g",{attrs:{"clip-path":"url(#clip0)"}},[o("path",{attrs:{d:"M0.5 40C0.5 40 4.42012 28.2514 14.8349 28.2514C25.2498 28.2514 22.2408 40 29.1699 40C36.099 40 40.6658 21 51.6448 21C59.9067 21 62.9208 34.5349 74.8009 34.5349C84.6674 34.5349 82.5962 22.477 89.5 22.477",stroke:"#A0D7E7","stroke-width":"2","stroke-linecap":"round"}}),t._v(" "),o("path",{attrs:{d:"M0.5 40C0.5 40 6.43749 25.344 14.1923 25.344C21.9471 25.344 21.0996 34.2017 29.0189 34.2017C36.9382 34.2017 40.3688 0 51.6448 0C62.9208 0 65.3426 31.5915 74.8009 31.5915C82.1693 31.5915 84.0539 20 89.5 20",stroke:"#6C5DD3","stroke-width":"2","stroke-linecap":"round"}})]),t._v(" "),o("defs",[o("clipPath",{attrs:{id:"clip0"}},[o("rect",{attrs:{width:"89",height:"40",fill:"white",transform:"translate(0.5)"}})])])])])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("span",{staticClass:"accounttype"},[t._v("Family")]),t._v(" "),o("span",{staticClass:"iconfigure"},[o("span",{staticClass:"coloredsvg"},[o("span",{staticClass:"coloredicon"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"}},[o("circle",{attrs:{cx:"6.73806",cy:"6.73684",r:"6.73684",fill:"#6979F8"}}),t._v(" "),o("path",{attrs:{d:"M4.49243 7.85986L6.73805 5.61425L8.98366 7.85986",stroke:"white","stroke-width":"1.68421","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("span",{staticClass:"percent"},[t._v("8%")])])])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("p",{staticClass:"number"},[t._v("8000")])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("span",{staticClass:"date"},[t._v("02-Nov-2020")]),t._v(" "),o("span",{staticClass:"blackrighticon"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M14 8L18 12L14 16",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),o("path",{attrs:{d:"M18 12L7.6709 12",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--section others"},[o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("span",{staticClass:"accounttype"},[t._v("Pro")]),t._v(" "),o("span",{staticClass:"iconfigure"},[o("span",{staticClass:"coloredsvg"},[o("span",{staticClass:"coloredicon"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"}},[o("circle",{attrs:{cx:"6.73806",cy:"6.73684",r:"6.73684",fill:"#6979F8"}}),t._v(" "),o("path",{attrs:{d:"M4.49243 7.85986L6.73805 5.61425L8.98366 7.85986",stroke:"white","stroke-width":"1.68421","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("span",{staticClass:"percent"},[t._v("8%")])])])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("p",{staticClass:"number"},[t._v("8000")])]),t._v(" "),o("div",{staticClass:"customer__topleftbottom--sectionarea"},[o("span",{staticClass:"date"},[t._v("02-Nov-2020")]),t._v(" "),o("span",{staticClass:"blackrighticon"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M14 8L18 12L14 16",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),o("path",{attrs:{d:"M18 12L7.6709 12",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])])])],1)]),t._v(" "),o("div",{staticClass:"customer__topright"},[o("ProductCard",{attrs:{background:"linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)",borderRadius:"1.5rem"}},[o("div",{staticClass:"customer__topright--body"},[o("div",{staticClass:"customer__topright--circlegraph"},[o("div",{attrs:{id:"gender-graph"}})]),t._v(" "),o("h2",[t._v("Gender Representation")]),t._v(" "),o("div",{staticClass:"customer__topright--numbers"},[t._v("479.4")]),t._v(" "),o("div",{staticClass:"customer__topright--indicators"},[o("div",{staticClass:"customer__topright--indicator"},[o("span"),t._v(" "),o("span",[t._v("4,000 Male")])]),t._v(" "),o("div",{staticClass:"customer__topright--indicator"},[o("span"),t._v(" "),o("span",[t._v("3,800 Female")])])])])])],1)]),t._v(" "),o("div",{staticClass:"customer__bottom"},[o("ProductCard",{attrs:{background:"linear-gradient(to bottom, rgba(248, 248, 248, 0.3), white)",borderRadius:"1.5rem"}},[o("div",{staticClass:"customer__bottom--body"},[o("div",{staticClass:"customer__bottom--top"},[o("h2",[t._v("Customer Database")])]),t._v(" "),o("div",{staticClass:"customer__bottom--heading"},[o("div",{staticClass:"customer__bottom--name"},[o("div"),t._v(" "),o("div",[t._v("Name")])]),t._v(" "),o("span",[t._v("Username")]),t._v(" "),o("span",[t._v("Account Type")]),t._v(" "),o("span",[t._v("Location")]),t._v(" "),o("span",[t._v("Email")]),t._v(" "),o("span",[t._v("Action")])]),t._v(" "),o("div",{staticClass:"customer__bottom--container"},t._l(t.customers,(function(e,r){return o("div",{key:r,staticClass:"customer__bottom--tile"},[o("div",{staticClass:"customer__bottom--name"},[o("div"),t._v(" "),o("div",[t._v(t._s(e.name))])]),t._v(" "),o("span",[t._v(t._s(e.name))]),t._v(" "),o("span",[t._v(t._s(e.accountType))]),t._v(" "),o("span",[t._v("Lagos, Ikoyi")]),t._v(" "),o("span",[t._v(t._s(e.email))]),t._v(" "),o("span",[t._v("Manage")]),t._v(" "),o("div",{staticClass:"customer__bottom--manage"},[o("div",{staticClass:"customer__bottom--optionactions"},[t._v("Actions")]),t._v(" "),o("div",{staticClass:"customer__bottom--option",on:{click:function(o){return t.viewprofile(e)}}},[o("span",[t._v("View Account")]),o("span")]),t._v(" "),o("div",{staticClass:"customer__bottom--option"},[o("span",[t._v("Freeze Account")]),o("span")]),t._v(" "),o("div",{staticClass:"customer__bottom--option"},[o("span",[t._v("Delete Account")]),o("span")])])])})),0),t._v(" "),o("div",{staticClass:"customer__bottom--btn"},[o("button",[t._v("Load More")])])])])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BarGraph:o(215).default,ProductCard:o(217).default})}}]);