(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basic"],{"0c52":function(e,t,i){"use strict";var l=i("bdba"),a=i.n(l);a.a},3274:function(e,t,i){"use strict";var l=i("8439"),a=i.n(l);a.a},"3fae":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"basic"},[i("el-form",[i("el-form-item",[i("div",{staticClass:"image-preview-wrapper"},[i("div",{staticClass:"image-preview",style:{"background-image":"url("+e.imageUrl+")"}}),i("div",{staticClass:"image-preview__actions"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:16}},[i("el-input",{attrs:{placeholder:"http://",clearable:""},on:{clear:e.onClearImageLink},model:{value:e.imageUrl,callback:function(t){e.imageUrl=t},expression:"imageUrl"}})],1),i("el-col",{attrs:{span:8}},[i("el-button",{on:{click:e.onAddLink}},[e._v("Add link")])],1)],1),i("div",{staticClass:"desc"},[i("p",[e._v("You can paste a different link from the public media files, or use the default.")])])],1)])]),i("el-row",{attrs:{gutter:20}},e._l(e.basic.fields,function(e,t){return i("el-col",{key:e.id,attrs:{span:12}},[i("field-item",{attrs:{"is-addon-field":t>5,index:t}})],1)})),i("el-form-item",[i("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.onAddField}},[e._v("Add custom field")])],1)],1),i("el-dialog",{attrs:{title:"Add new field",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[e.showAlert?i("el-alert",{attrs:{title:"Label is exist",type:"error",closable:!1}}):e._e(),i("el-form",{attrs:{"label-position":"top"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Label"}},[i("el-input",{ref:"fieldName",model:{value:e.fieldName,callback:function(t){e.fieldName="string"===typeof t?t.trim():t},expression:"fieldName"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Value"}},[i("el-input",{model:{value:e.filedValue,callback:function(t){e.filedValue="string"===typeof t?t.trim():t},expression:"filedValue"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Type"}},[i("el-select",{staticStyle:{width:"100%"},model:{value:e.filedType,callback:function(t){e.filedType=t},expression:"filedType"}},e._l(e.attributes.types,function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}))],1)],1)],1),i("el-form-item",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"primary"},on:{click:e.addField}},[e._v("Add field")])],1)],1)],1)],1)},a=[],s=(i("b54a"),i("be94")),n=i("2f62"),o=i("5600"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form-item",{attrs:{label:e.name||"No label"}},[i("el-popover",{attrs:{placement:"top",title:"Edit field",width:"350",trigger:"manual"},model:{value:e.popover,callback:function(t){e.popover=t},expression:"popover"}},[i("div",[i("el-form",{attrs:{size:"small"}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"Label"}},[i("el-input",{model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"Type"}},[i("el-select",{staticStyle:{width:"100%"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.attributes.types,function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}))],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"danger"},on:{click:e.onRemoveFiled}},[e._v("Remove")]),i("el-button",{on:{click:function(t){e.popover=!1}}},[e._v("Close")])],1)],1)],1)],1),i("div",{staticClass:"popover-pos",attrs:{slot:"reference"},slot:"reference"})]),e.isAddonField?i("i",{staticClass:"field-settings el-icon-setting",on:{click:e.onEdit}}):e._e(),i("el-input",{attrs:{tabindex:"1"},model:{value:e.value,callback:function(t){e.value="string"===typeof t?t.trim():t},expression:"value"}})],1)},d=[],c=(i("7f7f"),i("c5f6"),{name:"",props:{isAddonField:{type:Boolean,default:!1},index:{type:Number,default:0}},data:function(){return{popover:!1}},computed:Object(s["a"])({},Object(n["c"])(["basic","attributes"]),{value:{get:function(){return this.basic.fields[this.index].value},set:function(e){this.$store.dispatch("updateField",{index:this.index,data:{value:e}})}},name:{get:function(){return this.basic.fields[this.index].name},set:function(e){this.$store.dispatch("updateField",{index:this.index,data:{name:e}})}},type:{get:function(){return this.basic.fields[this.index].type},set:function(e){this.$store.dispatch("updateField",{index:this.index,data:{type:e}})}}}),methods:{onEdit:function(){this.popover=!this.popover},onRemoveFiled:function(){this.$store.dispatch("removeField",this.index)}}}),u=c,p=(i("0c52"),i("2877")),f=Object(p["a"])(u,r,d,!1,null,null,null),m=f.exports,h=i("d443"),b={name:"Basic",components:{FieldItem:m,Upload:h["a"]},data:function(){return{fieldName:"",filedValue:"",filedType:"text",imageLink:"",showDialog:!1,showAlert:!1}},computed:Object(s["a"])({},Object(n["c"])(["attributes","basic"]),{imageUrl:{get:function(){return this.basic.image.link},set:function(e){this.$store.dispatch("updateImage",{link:e})}}}),created:function(){this.$ga.page(this.$router)},methods:{addField:function(){var e={name:this.fieldName,value:this.filedValue,type:this.filedType,id:Object(o["a"])()};this.$store.dispatch("addField",e),this.fieldName="",this.filedValue="",this.showDialog=!1},onAddField:function(){var e=this;this.showDialog=!0,this.$nextTick(function(){e.$refs.fieldName.focus()})},onAddLink:function(){this.$store.dispatch("updateImage",{link:this.imageUrl})},onClearImageLink:function(){this.imageLink="",this.onAddLink()},onUpload:function(e){this.$store.dispatch("updateImage",{link:e})}}},v=b,g=(i("3274"),Object(p["a"])(v,l,a,!1,null,null,null));t["default"]=g.exports},8439:function(e,t,i){},bdba:function(e,t,i){}}]);
//# sourceMappingURL=basic.0ebbbee0.js.map