(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-353f10be","chunk-35ed7bf5","chunk-63a58b94","chunk-2d0aeed9"],{"0bc4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("div",{style:t.style},[n("p",{staticStyle:{color:"#aaa","font-size":"14px"}},[t._v("Banner")])])])},a=[],i={name:"BannerPlaceholder",data:function(){return{style:{display:"flex",height:"100px",backgroundColor:"#eee",alignItems:"center",justifyContent:"center"}}}},o=i,s=n("2877"),l=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports},"11e9":function(t,e,n){var r=n("52a7"),a=n("4630"),i=n("6821"),o=n("6a99"),s=n("69a8"),l=n("c69a"),c=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?c:function(t,e){if(t=i(t),e=o(e,!0),l)try{return c(t,e)}catch(n){}if(s(t,e))return a(!r.f.call(t,e),t[e])}},1217:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticStyle:{"font-size":"0","line-height":"1.5"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[n("td",{staticStyle:{"vertical-align":"top"}},[n("avatar",{attrs:{"show-avatar":t.showAvatar,src:t.image,size:t.options.avatar.size,roundness:t.options.avatar.roundness}})],1),n("td",{staticStyle:{"vertical-align":"top"}},[n("table",{staticStyle:{"font-size":"0"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[n("td",[n("span",{style:[t.fontBase,{fontSize:t.options.font.size+2+"px",color:t.options.color.mainPreview||t.options.color.main,fontWeight:700}]},[t._v(t._s(t.mainFields[0].value))])])]),n("tr",[n("td",[n("span",{style:t.fontBase},[t._v(t._s(t.mainFields[1].value))]),t.mainFields[2].value&&"br"!==t.options.separator?n("span",[n("span",{style:t.fontBase},[t._v(" "+t._s(t.options.separator)+" ")]),n("span",{style:t.fontBase},[t._v(t._s(t.mainFields[2].value))])]):t._e()])]),"br"===t.options.separator?n("tr",[n("td",[n("span",{style:t.fontBase},[t._v(t._s(t.mainFields[2].value))])])]):t._e(),n("tr",[n("td",[n("table",{staticStyle:{"margin-top":"5px","font-size":"0"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[t._l(t.otherFields,function(e){return[e.value?n("tr",{key:e.name},[n("td",[n("span",{style:[t.fontBase,{color:t.options.color.secondaryPreview||t.options.color.secondary,fontWeight:600}]},[t._v(t._s(e.name)+": ")]),"link"===e.type?n("a",{staticStyle:{"text-decoration":"none",color:"inherit"},style:t.fontBase,attrs:{href:t.formatLink(e.value)}},[t._v(t._s(e.value))]):t._e(),"email"===e.type?n("a",{staticStyle:{"text-decoration":"none",color:"inherit"},style:t.fontBase,attrs:{href:"mailto:"+e.value}},[t._v(t._s(e.value))]):t._e(),"text"===e.type?n("span",{style:t.fontBase},[t._v(t._s(e.value))]):t._e()])]):t._e()]})],2)])]),t.socials.installed.length?n("tr",[n("td",[n("table",{staticStyle:{"margin-top":"5px","margin-left":"-2px","font-size":"0"},attrs:{cellspacing:"2",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",t._l(t.socials.installed,function(e){return n("td",{key:e.name,staticStyle:{width:"20px",height:"20px","border-radius":"3px"},style:{backgroundColor:t.options.color.mainPreview||t.options.color.main},attrs:{align:"center"}},[n("a",{attrs:{href:t.formatLink(e.link)}},[n("img",{staticStyle:{display:"table-cell","vertical-align":"middle"},attrs:{width:"12px",src:t.s3url+"/icons/"+e.icon+".png",alt:"social-icon-"+e.icon}})])])}))])])])]):t._e()])])])])])]),t.isAdded("mobileApp")?n("table",{staticStyle:{"margin-top":"10px","font-size":"0"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[t.addons.mobileApp.appStore.link?n("td",[n("a",{attrs:{href:t.addons.mobileApp.appStore.link}},[n("img",{staticStyle:{height:"35px","margin-right":"5px"},attrs:{src:t.addons.mobileApp.appStore.img,alt:"app store badge"}})])]):t._e(),t.addons.mobileApp.googlePlay.link?n("td",[n("a",{attrs:{href:t.addons.mobileApp.googlePlay.link}},[n("img",{staticStyle:{height:"35px"},attrs:{src:t.addons.mobileApp.googlePlay.img,alt:"google play badge"}})])]):t._e()])])]):t._e(),t.isAdded("banner")?n("table",{staticStyle:{"font-size":"0","margin-top":"10px",width:"100%"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[t.addons.banner.image?n("tr",[n("td",[t.addons.banner.link?n("a",{attrs:{href:t.formatLink(t.addons.banner.link)}},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.addons.banner.image,alt:"banner"}})]):n("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.addons.banner.image,alt:"banner"}})])]):n("banner-placeholder")],1)]):t._e(),t.isAdded("disclaimer")?n("table",{staticStyle:{"font-size":"0",color:"#888","margin-top":"10px"},attrs:{cellspacing:"0",cellpadding:"0",border:"0",role:"presentation"}},[n("tbody",[n("tr",[n("td",[n("span",{style:t.fontBase},[t._v(t._s(t.addons.disclaimer))])])])])]):t._e()])},a=[],i=n("f86e"),o=n("8595"),s=n("0bc4"),l={components:{Avatar:o["default"],BannerPlaceholder:s["default"]},extends:i["default"]},c=l,d=n("2877"),u=Object(d["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),a=n("d2c8"),i="includes";r(r.P+r.F*n("5147")(i),"String",{includes:function(t){return!!~a(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"386b":function(t,e,n){var r=n("5ca1"),a=n("79e5"),i=n("be13"),o=/"/g,s=function(t,e,n,r){var a=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(a){}}return!0}},"5dbc":function(t,e,n){var r=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(t,i),t}},6762:function(t,e,n){"use strict";var r=n("5ca1"),a=n("c366")(!0);r(r.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},8595:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showAvatar?n("div",{staticStyle:{"margin-right":"10px"},style:t.computedStyle},[t.src?n("img",{style:{width:t.size+"px","border-radius":t.roundness+"px"},attrs:{src:t.src,alt:"avatar"}}):t._e()]):t._e()},a=[],i=(n("b54a"),n("be94")),o=(n("c5f6"),n("2f62")),s={name:"Avatar",props:{showAvatar:{type:Boolean,required:!0},src:{type:String,required:!0},size:{type:Number,required:!0},roundness:{type:Number,required:!0}},computed:Object(i["a"])({},Object(o["c"])(["basic"]),{computedStyle:function(){var t={width:this.size+"px",borderRadius:this.roundness+"px"};return this.basic.image.link||(t.height=this.size+"px",t.background="#eee"),t}})},l=s,c=n("2877"),d=Object(c["a"])(l,r,a,!1,null,null,null);e["default"]=d.exports},"8b97":function(t,e,n){var r=n("d3f4"),a=n("cb7c"),i=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},aa77:function(t,e,n){var r=n("5ca1"),a=n("be13"),i=n("79e5"),o=n("fdef"),s="["+o+"]",l="​",c=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),u=function(t,e,n){var a={},s=i(function(){return!!o[t]()||l[t]()!=l}),c=a[t]=s?e(p):o[t];n&&(a[n]=c),r(r.P+r.F*s,"String",a)},p=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},aae3:function(t,e,n){var r=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},b54a:function(t,e,n){"use strict";n("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c5f6:function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("2d95"),o=n("5dbc"),s=n("6a99"),l=n("79e5"),c=n("9093").f,d=n("11e9").f,u=n("86cc").f,p=n("aa77").trim,f="Number",b=r[f],h=b,g=b.prototype,m=i(n("2aeb")(g))==f,y="trim"in String.prototype,v=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,r,a,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,l=e.slice(2),c=0,d=l.length;c<d;c++)if(o=l.charCodeAt(c),o<48||o>a)return NaN;return parseInt(l,r)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof b&&(m?l(function(){g.valueOf.call(n)}):i(n)!=f)?o(new h(v(e)),n,b):v(e)};for(var _,x=n("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)a(h,_=x[S])&&!a(b,_)&&u(b,_,d(h,_));b.prototype=g,g.constructor=b,n("2aba")(r,f,b)}},d2c8:function(t,e,n){var r=n("aae3"),a=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},f86e:function(t,e,n){"use strict";n.r(e);n("20d6"),n("7f7f"),n("6762"),n("2fdb"),n("b54a");var r=n("be94"),a=n("d135"),i=n("2f62");e["default"]={data:function(){return{filterFields:["Full name","Job title","Company"],s3url:Object({NODE_ENV:"production",BASE_URL:"/everhome-email-signature/"}).VUE_APP_AWS_S3_URL}},computed:Object(r["a"])({},Object(i["c"])(["basic","options","addons","socials","template"]),{image:function(){return this.basic.image.link},isEmpty:function(){return this.basic.fields.every(function(t){return 0===t.value.length})},mainFields:function(){var t=this;return this.isEmpty?a["a"].basicPlaceholder.filter(function(e){return t.filterFields.includes(e.name)}):this.basic.fields.filter(function(e){return t.filterFields.includes(e.name)})},otherFields:function(){var t=this;return this.isEmpty?a["a"].basicPlaceholder.filter(function(e){return!t.filterFields.includes(e.name)}):this.basic.fields.filter(function(e){return!t.filterFields.includes(e.name)})},showAvatar:function(){return this.options.avatar.show},fontBase:function(){return{fontSize:"".concat(this.options.font.size,"px"),fontFamily:this.options.font.family}}}),methods:{formatLink:function(t){return/^https?/.test(t)?t:"http://".concat(t)},isAdded:function(t){return this.addons.installed.findIndex(function(e){return e.name===t})>-1}}}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-353f10be.2c2d141d.js.map