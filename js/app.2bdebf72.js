(function(t){function e(e){for(var n,r,s=e[0],l=e[1],u=e[2],g=0,p=[];g<s.length;g++)r=s[g],i[r]&&p.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={1:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/sign-language-browser/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([5,0]),a()})({5:function(t,e,a){t.exports=a("Vtdi")},"6otg":function(t,e,a){},"7IGO":function(t,e,a){},"C/Gf":function(t,e,a){"use strict";var n=a("n2ww"),i=a.n(n);i.a},EDI0:function(t,e,a){},TIYb:function(t,e,a){"use strict";var n=a("6otg"),i=a.n(n);i.a},VEDv:function(t,e,a){"use strict";var n=a("X1Bh"),i=a.n(n);e["default"]=i.a},Vtdi:function(t,e,a){"use strict";a.r(e);a("VRzm");var n=a("Kw5r"),i=a("lDeg"),o=a.n(i),r=a("vDqi"),s=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},u=[],c=(a("ZL7j"),a("KHd+")),g={},p=Object(c["a"])(g,l,u,!1,null,null,null),m=p.exports,f=a("jE9Z"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t.languages?a("ul",t._l(t.languages.results.bindings,function(t){return a("LanguageItem",{key:t.langQ.value,attrs:{language:t}})})):a("Spinner",{attrs:{size:"huge",message:"Loading...",lineBgColor:"#ff7873",textFgColor:"#fff",lineFgColor:"#fff"}}),a("Footer")],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Languages"),a("span",[t._v("List of available languages")])])}],v=a("W364"),b=a.n(v),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"item"},[a("span",{attrs:{role:"link","aria-expanded":t.open.toString()},on:{click:function(e){t.toggle()}}},[a("a",[t._v(t._s(t.language.langLabel.value)+" "),a("span",[t._v(t._s(t.language.count.value))])])]),t.open?a("section",[a("router-link",{staticClass:"btn",attrs:{to:"lang/"+t.language.langQ.value}},[t._v("Browse")]),a("router-link",{staticClass:"btn",attrs:{to:"lang/"+t.language.langQ.value+"/cards"}},[t._v("Flashcards")])],1):t._e()])},_=[],C=new n["a"],k={name:"LanguageItem",data:function(){return{open:!1}},props:{language:Object},methods:{toggle:function(){C.$emit("LanguageItemToggle",this.language.langQ.value),this.open=!this.open}},mounted:function(){var t=this;C.$on("LanguageItemToggle",function(e){e!==t.language.langQ.value&&(t.open=!1)})}},y=k,E=(a("C/Gf"),Object(c["a"])(y,w,_,!1,null,"5ad2d31a",null)),L=E.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("a",{attrs:{href:"https://www.wikidata.org/wiki/Wikidata:Main_Page"}},[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/41/Wikidata_Stamp_Rec_Light.svg",alt:"This application is powered by Wikidata."}})]),a("p",[t._v("User: "),a("a",{attrs:{href:"https://meta.wikimedia.org/wiki/User:Abbe98"}},[t._v("Abbe98")]),t._v(" • "),a("a",{attrs:{href:"https://github.com/Abbe98/wikidata-sign-language-browser"}},[t._v("Source code")])])])}],F={name:"Footer"},S=F,O=a("VEDv");function $(t){this["$style"]=O["default"].locals||O["default"]}var R=Object(c["a"])(S,P,I,!1,$,null,null),j=R.exports,x=encodeURI('SELECT (COUNT(?lang) as ?count) ?langLabel (REPLACE(STR(?lang), "http://www.wikidata.org/entity/", "") as ?langQ)\nWHERE  {\n  ?item wdt:P2919 ?file .\n  ?item p:P2919 ?statement .\n  ?statement pq:P407 ?lang .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" . }\n}\nGROUP BY ?langLabel ?lang\nORDER BY DESC(?count)');function D(t){return encodeURI('SELECT (REPLACE(STR(?item), "http://www.wikidata.org/entity/", "") as ?itemQ)\n  ?itemLabel\n  (REPLACE(STR(?file), "http://commons.wikimedia.org/wiki/Special:FilePath/", "") as ?fileName)\n  ?itemDescription\n\n  WHERE {\n    ?item wdt:P2919 ?file .\n    ?item p:P2919 ?statement .\n    ?statement pq:P407 wd:'.concat(t,' .\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" . }\n  }\n  ORDER BY ASC(UCASE(str(?itemLabel)))'))}var q={name:"Home",components:{Spinner:b.a,LanguageItem:L,Footer:j},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}},asyncComputed:{languages:{get:function(){return this.$http.wdqs.get("sparql?query=".concat(x)).then(function(t){return t.data})},default:!1}},created:function(){document.title="Sign Language Browser"}},T=q,U=Object(c["a"])(T,d,h,!1,null,null,null),A=U.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(t._s(t.language)),a("span",[t._v("List of available words")])]),t.items?a("ul",t._l(t.items.results.bindings,function(t){return a("Item",{key:t.itemQ.value,attrs:{item:t}})})):a("Spinner",{attrs:{size:"huge",message:"Loading...",lineBgColor:"#ff7873",textFgColor:"#fff",lineFgColor:"#fff"}}),a("Footer")],1)},B=[],G=(a("OG14"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"item"},[a("span",{attrs:{role:"link","aria-expanded":t.open.toString()},on:{click:function(e){t.toggle()}}},[t._v("\n    "+t._s(t.item.itemLabel.value)+" "),a("br"),t.item.itemDescription?a("small",[t._v(t._s(t.item.itemDescription.value))]):t._e()]),t.open?a("section",[t.data&&t.isVideo(t.data.original.source)?a("video",{attrs:{muted:"",controls:"",poster:t.data.thumbnail.source,src:t.data.original.source},domProps:{muted:!0}}):t.data?a("img",{attrs:{src:t.data.original.source}}):t._e(),t.data?a("a",{staticClass:"btn",attrs:{href:"https://commons.wikimedia.org/?curid="+t.data.pageid}},[t._v("View License (Wikimedia Commons)")]):a("Spinner",{attrs:{message:"Loading...",lineBgColor:"#ff7873",textFgColor:"#fff",lineFgColor:"#fff"}})],1):t._e()])}),Q=[];a("rGqo"),a("yt8O"),a("RW0V"),a("rvZc");function W(t){var e=["ogg","ogv","webm"];return e.some(function(e){return t.endsWith(e)})}var M={name:"Item",components:{Spinner:b.a},data:function(){return{open:!1,data:!1}},props:{item:Object},methods:{isVideo:W,toggle:function(){this.data||this.getData(),this.open=!this.open,C.$emit("ItemToggle",this.item.itemQ.value)},getData:function(){var t=this;this.$http.commons.get("w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=File:".concat(this.item.fileName.value,"&converttitles=1&piprop=thumbnail|name|original&pithumbsize=400")).then(function(e){var a=e.data.query.pages;t.data=a[Object.keys(a)[0]]})}},mounted:function(){var t=this;C.$on("ItemToggle",function(e){e!==t.item.itemQ.value&&(t.open=!1)})}},N=M,z=(a("TIYb"),Object(c["a"])(N,G,Q,!1,null,"41b1f600",null)),H=z.exports,Y={name:"Language",components:{Spinner:b.a,Item:H,Footer:j},data:function(){return{language:!1}},asyncComputed:{items:{get:function(){return this.$http.wdqs.get("sparql?query=".concat(D(this.$route.params.id))).then(function(t){return t.data})},default:!1}},created:function(){var t=this;this.$http.wikidata.get("w/api.php?action=wbsearchentities&search=".concat(this.$route.params.id,"&language=en&origin=*&format=json")).then(function(e){t.language=e.data.search[0].label,document.title=e.data.search[0].label})}},Z=Y,J=Object(c["a"])(Z,V,B,!1,null,null,null),K=J.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Flashcards"),a("span",[t._v(t._s(t.language)+" flashcards")])]),t.items?a("div",{staticClass:"card",class:{flipped:t.isFlipped}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.flippingIsDone,expression:"!flippingIsDone"}],staticClass:"front"},[t.activePage&&t.isVideo(t.activePage.original.source)?a("video",{attrs:{muted:"muted",controls:"controls",poster:t.activePage.thumbnail.source,src:t.activePage.original.source},domProps:{muted:!0}}):t.activePage?a("img",{attrs:{src:t.activePage.original.source}}):t._e(),t.activePage?a("a",{staticClass:"btn",attrs:{href:"https://commons.wikimedia.org/?curid="+t.activePage.pageid}},[t._v("View License (Wikimedia Commons)")]):t._e(),t.activePage?a("button",{staticClass:"btn flip",on:{click:t.flip}},[t._v("Flip")]):a("Spinner",{attrs:{message:"Loading...",lineBgColor:"#ff7873",textFgColor:"#fff",lineFgColor:"#fff"}})],1),a("div",{staticClass:"back"},[t.activeItem&&t.isFlipped?a("h2",[t._v(t._s(t.activeItem.itemLabel.value)),a("small",[t._v(t._s(t.activeItem.itemDescription.value))])]):t._e(),a("button",{staticClass:"btn flip",on:{click:t.flip}},[t._v("Flip")])])]):a("Spinner",{attrs:{size:"huge",message:"Loading...",lineBgColor:"#ff7873",textFgColor:"#fff",lineFgColor:"#fff"}}),a("Footer")],1)},tt=[],et={name:"Cards",components:{Spinner:b.a,Footer:j},data:function(){return{language:!1,isFlipped:!1,flippingIsDone:!1,activeItem:!1,activePage:!1}},created:function(){var t=this;this.$http.wikidata.get("w/api.php?action=wbsearchentities&search=".concat(this.$route.params.id,"&language=en&origin=*&format=json")).then(function(e){t.language=e.data.search[0].label,document.title=t.language+" Flashcards"})},asyncComputed:{items:{get:function(){return this.$http.wdqs.get("sparql?query=".concat(D(this.$route.params.id))).then(function(t){return t.data})},default:!1}},watch:{items:function(t){t&&this.setRandomItem()}},methods:{isVideo:W,flip:function(){var t=this;this.isFlipped=!this.isFlipped,this.flippingIsDone=!1,this.isFlipped?setTimeout(function(){t.flippingIsDone=!0},500):this.setRandomItem()},setRandomItem:function(){var t=this,e=this.items.results.bindings;this.activeItem=e[Math.floor(Math.random()*e.length)],this.$http.commons.get("w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=File:".concat(this.activeItem.fileName.value,"&converttitles=1&piprop=thumbnail|name|original&pithumbsize=400")).then(function(e){var a=e.data.query.pages;t.activePage=a[Object.keys(a)[0]]})}}},at=et,nt=(a("fHPR"),Object(c["a"])(at,X,tt,!1,null,"18d0eee2",null)),it=nt.exports;n["a"].use(f["a"]);var ot=new f["a"]({routes:[{path:"/",name:"home",component:A},{path:"/lang/:id",name:"lang",component:K},{path:"/lang/:id/cards",name:"cards",component:it}]}),rt=a("L2JU");n["a"].use(rt["a"]);var st=new rt["a"].Store({state:{},mutations:{},actions:{}});n["a"].use(o.a),n["a"].config.productionTip=!1,n["a"].prototype.$http={},n["a"].prototype.$http.wdqs=s.a.create({baseURL:"https://query.wikidata.org"}),n["a"].prototype.$http.commons=s.a.create({baseURL:"https://commons.wikimedia.org"}),n["a"].prototype.$http.wikidata=s.a.create({baseURL:"https://www.wikidata.org"}),new n["a"]({router:ot,store:st,render:function(t){return t(m)}}).$mount("#app")},X1Bh:function(t,e,a){},ZL7j:function(t,e,a){"use strict";var n=a("EDI0"),i=a.n(n);i.a},fHPR:function(t,e,a){"use strict";var n=a("7IGO"),i=a.n(n);i.a},n2ww:function(t,e,a){}});
//# sourceMappingURL=app.2bdebf72.js.map