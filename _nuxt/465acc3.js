(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{198:function(e,t,n){"use strict";n.r(t);var r=n(25),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("br"),this._v(" "),t("br"),this._v(" "),t("hr"),this._v(" "),t("nuxt-link",{attrs:{to:"/"}},[this._v("\n    一覧に戻る\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},212:function(e,t,n){"use strict";n.r(t);var r=n(45);Object(r.d)({ja:{names:{name:"お名前"}}});var o={data:function(){return{name:"",email:""}}},l=n(25),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("\n    日本語化\n  ")]),e._v(" "),n("ValidationObserver",{ref:"myform"},[n("validation-provider",{attrs:{rules:"min_value:5"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{name:"name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(r[0]))])]}}])}),e._v(" "),n("validation-provider",{attrs:{rules:"email|required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{name:"メールアドレス",type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(r[0]))])]}}])})],1),e._v(" "),n("MyFooter")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MyFooter:n(198).default})}}]);