(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b7d1cd6"],{"18c2":function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("router-link",{staticClass:"item",attrs:{to:"/detail/"+t.data.id,tag:"div"}},[n("img",{attrs:{src:t.data.images.small,alt:""}}),n("div",{staticClass:"right"},[n("p",{staticClass:"name"},[t._v(t._s(t.data.title))]),n("div",{staticClass:"at"},[n("span",[t._v("主演:")]),t._l(t.data.casts,(function(a){return n("div",{key:a.id},[n("span",[t._v(t._s(a.name))])])}))],2),n("div",{staticClass:"at"},[n("span",[t._v("上映日期：")]),n("span",[t._v(t._s(t.data.mainland_pubdate))])])])])},e=[],c={name:"Item",props:{data:{type:Object}}},i=c,o=(n("2980"),n("2877")),u=Object(o["a"])(i,s,e,!1,null,"b3a43e9e",null);a["a"]=u.exports},2980:function(t,a,n){"use strict";var s=n("cee47"),e=n.n(s);e.a},"5d51":function(t,a,n){"use strict";var s=n("98cf"),e=n.n(s);e.a},"98cf":function(t,a,n){},cee47:function(t,a,n){},dcca:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"coming-soon"},t._l(t.subjects,(function(t){return n("item",{key:t.id,attrs:{data:t}})})),1)},e=[],c=n("18c2"),i={name:"comingSoon",data:function(){return{subjects:[]}},components:{Item:c["a"]},mounted:function(){var t=this;this.axios.get("https://douban.uieee.com/v2/movie/coming_soon").then((function(a){t.subjects=a.data.subjects}))}},o=i,u=(n("5d51"),n("2877")),r=Object(u["a"])(o,s,e,!1,null,"403b155a",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-1b7d1cd6.9ff83deb.js.map