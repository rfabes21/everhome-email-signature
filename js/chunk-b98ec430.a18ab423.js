(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b98ec430","chunk-35ed7bf5","chunk-63a58b94","chunk-2d0b3a47"],{"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),a=n("6821"),o=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=a(t),e=o(e,!0),c)try{return l(t,e)}catch(n){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},"28f1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticStyle:{"font-size":"0","margin-top":"10px"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[n("td",[n("span",{staticStyle:{"font-size":"10px",color:"#888","border-top":"1px solid #eee","padding-top":"5px"}},[t._v("Email signature by "),n("a",{attrs:{href:"https://mysigmail.com?ref=email"}},[t._v("mysigmail.com")])])])])])])}],a={name:"PromoteSignature",data:function(){return{}}},o=a,s=n("2877"),c=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),a="includes";r(r.P+r.F*n("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"386b":function(t,e,n){var r=n("5ca1"),i=n("79e5"),a=n("be13"),o=/"/g,s=function(t,e,n,r){var i=String(a(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var a,o=e.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&r(a)&&i&&i(t,a),t}},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},8595:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showAvatar?n("div",{staticStyle:{"margin-right":"10px"},style:t.computedStyle},[t.src?n("img",{style:{width:t.size+"px","border-radius":t.roundness+"px"},attrs:{src:t.src,alt:"avatar"}}):t._e()]):t._e()},i=[],a=(n("b54a"),n("be94")),o=(n("c5f6"),n("2f62")),s={name:"Avatar",props:{showAvatar:{type:Boolean,required:!0},src:{type:String,required:!0},size:{type:Number,required:!0},roundness:{type:Number,required:!0}},computed:Object(a["a"])({},Object(o["c"])(["basic"]),{computedStyle:function(){var t={width:this.size+"px",borderRadius:this.roundness+"px"};return this.basic.image.link||(t.height=this.size+"px",t.background="#eee"),t}})},c=s,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),a=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(t,e,n){var i={},s=a(function(){return!!o[t]()||c[t]()!=c}),l=i[t]=s?e(d):o[t];n&&(i[n]=l),r(r.P+r.F*s,"String",i)},d=p.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},b54a:function(t,e,n){"use strict";n("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c566:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticStyle:{"font-size":"0","line-height":"1.5"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[n("td",{staticStyle:{"vertical-align":"top"}},[n("avatar",{attrs:{"show-avatar":t.showAvatar,src:t.image,size:t.options.avatar.size,roundness:t.options.avatar.roundness}})],1),n("td",{staticStyle:{"vertical-align":"top"}},[n("table",{staticStyle:{"font-size":"0"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[n("td",[n("span",{style:[t.fontBase,{fontSize:t.options.font.size+2+"px",color:t.options.color.mainPreview||t.options.color.main,fontWeight:700}]},[t._v(t._s(t.mainFields[0].value))])])]),n("tr",[n("td",[n("span",{style:t.fontBase},[t._v(t._s(t.mainFields[1].value))]),t.mainFields[2].value&&"br"!==t.options.separator?n("span",[n("span",{style:t.fontBase},[t._v(" "+t._s(t.options.separator)+" ")]),n("span",{style:t.fontBase},[t._v(t._s(t.mainFields[2].value))])]):t._e()])]),"br"===t.options.separator?n("tr",[n("td",[n("span",{style:t.fontBase},[t._v(t._s(t.mainFields[2].value))])])]):t._e(),n("tr",[n("td",[n("table",{staticStyle:{"margin-top":"5px","font-size":"0"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[t._l(t.otherFields,function(e){return[e.value?n("tr",{key:e.name},[n("td",[n("span",{style:[t.fontBase,{color:t.options.color.secondaryPreview||t.options.color.secondary,fontWeight:600}]},[t._v(t._s(e.name)+": ")]),"link"===e.type?n("a",{staticStyle:{"text-decoration":"none",color:"inherit"},style:t.fontBase,attrs:{href:t.formatLink(e.value)}},[t._v(t._s(e.value))]):t._e(),"email"===e.type?n("a",{staticStyle:{"text-decoration":"none",color:"inherit"},style:t.fontBase,attrs:{href:"mailto:"+e.value}},[t._v(t._s(e.value))]):t._e(),"text"===e.type?n("span",{style:t.fontBase},[t._v(t._s(e.value))]):t._e()])]):t._e()]})],2)])]),t.socials.installed.length?n("tr",[n("td",[n("table",{staticStyle:{"margin-top":"5px","margin-left":"-2px","font-size":"0"},attrs:{cellspacing:"2",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",t._l(t.socials.installed,function(e){return n("td",{key:e.name,staticStyle:{width:"20px",height:"20px","border-radius":"3px"},style:{backgroundColor:t.options.color.mainPreview||t.options.color.main},attrs:{align:"center"}},[n("a",{attrs:{href:t.formatLink(e.link)}},[n("img",{staticStyle:{display:"table-cell","vertical-align":"middle"},attrs:{width:"12px",src:t.s3url+"/icons/"+e.icon+".png",alt:"social-icon-"+e.icon}})])])}))])])])]):t._e()])])])])])]),t.isAdded("mobileApp")?n("table",{staticStyle:{"margin-top":"10px","font-size":"0"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[t.addons.mobileApp.appStore.link?n("td",[n("a",{attrs:{href:t.addons.mobileApp.appStore.link}},[n("img",{staticStyle:{height:"35px","margin-right":"5px"},attrs:{src:t.addons.mobileApp.appStore.img,alt:"app store badge"}})])]):t._e(),t.addons.mobileApp.googlePlay.link?n("td",[n("a",{attrs:{href:t.addons.mobileApp.googlePlay.link}},[n("img",{staticStyle:{height:"35px"},attrs:{src:t.addons.mobileApp.googlePlay.img,alt:"google play badge"}})])]):t._e()])])]):t._e(),t.isAdded("disclaimer")?n("table",{staticStyle:{"font-size":"0",color:"#888","margin-top":"10px"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[n("td",[n("span",{style:t.fontBase},[t._v(t._s(t.addons.disclaimer))])])])])]):t._e(),t.template.promoteSignature?n("promote-signature"):t._e()],1)},i=[],a=n("f86e"),o=n("28f1"),s=n("8595"),c={components:{Avatar:s["default"],PromoteSignature:o["default"]},extends:a["default"]},l=c,u=n("2877"),p=Object(u["a"])(l,r,i,!1,null,null,null);e["default"]=p.exports},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,p=n("86cc").f,d=n("aa77").trim,f="Number",g=r[f],m=g,b=g.prototype,h=a(n("2aeb")(b))==f,v="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():d(e,3);var n,r,i,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>i)return NaN;return parseInt(c,r)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(h?c(function(){b.valueOf.call(n)}):a(n)!=f)?o(new m(y(e)),n,g):y(e)};for(var _,x=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)i(m,_=x[S])&&!i(g,_)&&p(g,_,u(m,_));g.prototype=b,b.constructor=g,n("2aba")(r,f,g)}},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},f86e:function(t,e,n){"use strict";n.r(e);n("20d6"),n("7f7f"),n("6762"),n("2fdb"),n("b54a");var r=n("be94"),i=n("d135"),a=n("2f62");e["default"]={data:function(){return{filterFields:["Full name","Job title","Company"],s3url:Object({NODE_ENV:"production",BASE_URL:"/everhome-email-signature/"}).VUE_APP_AWS_S3_URL}},computed:Object(r["a"])({},Object(a["c"])(["basic","options","addons","socials","template"]),{image:function(){return this.basic.image.link},isEmpty:function(){return this.basic.fields.every(function(t){return 0===t.value.length})},mainFields:function(){var t=this;return this.isEmpty?i["a"].basicPlaceholder.filter(function(e){return t.filterFields.includes(e.name)}):this.basic.fields.filter(function(e){return t.filterFields.includes(e.name)})},otherFields:function(){var t=this;return this.isEmpty?i["a"].basicPlaceholder.filter(function(e){return!t.filterFields.includes(e.name)}):this.basic.fields.filter(function(e){return!t.filterFields.includes(e.name)})},showAvatar:function(){return this.options.avatar.show},fontBase:function(){return{fontSize:"".concat(this.options.font.size,"px"),fontFamily:this.options.font.family}}}),methods:{formatLink:function(t){return/^https?/.test(t)?t:"http://".concat(t)},isAdded:function(t){return this.addons.installed.findIndex(function(e){return e.name===t})>-1}}}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-b98ec430.a18ab423.js.map