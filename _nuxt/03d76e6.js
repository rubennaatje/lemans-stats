(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{297:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"pa3 pa5-ns"},[e("h1",{staticClass:"f3 f1-m f-headline-l"},[this._v("Title")]),this._v(" "),e("p",{staticClass:"measure lh-copy"},[this._v("\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n    amet.\n  ")]),this._v(" "),e("p",{staticClass:"measure lh-copy"},[this._v("\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n    amet.\n  ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Article:n(297).default})},313:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("083745fe",content,!0,{sourceMap:!1})},314:function(t,e,n){var content=n(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("1640f99a",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";n(313)},381:function(t,e,n){(e=n(53)(!1)).push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;box-sizing:border-box;line-height:1.5;font-size:1rem;max-width:30em}.toc{margin-top:25px}",""]),t.exports=e},382:function(t,e,n){"use strict";n(314)},383:function(t,e,n){(e=n(53)(!1)).push([t.i,".toc2[data-v-c3f2ff6c]{margin-left:10px;font-weight:400}.toc3[data-v-c3f2ff6c]{margin-left:20px;font-weight:lighter}.toc[data-v-c3f2ff6c],ul[data-v-c3f2ff6c]{list-style-type:none}.toc[data-v-c3f2ff6c],a[data-v-c3f2ff6c]{color:#000;text-decoration:none}",""]),t.exports=e},394:function(t,e,n){"use strict";n.r(e);var r={props:["toc"]},o=(n(382),n(55)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tableofcontent"},[n("h3",[t._v("Table of Content")]),t._v(" "),n("div",{attrs:{id:"toc"}},[n("ul",t._l(t.toc,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])])}),[],!1,null,"c3f2ff6c",null);e.default=component.exports},405:function(t,e,n){"use strict";n.r(e);n(38);var r=n(6),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(n(380),n(55)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["normal"===t.article.type?n("article",{staticClass:"mw7-ns center"},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("p",[t._v(t._s(t.article.description))]),t._v(" "),n("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),n("p",[t._v("Article last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1):t._e(),t._v(" "),"left-right"===t.article.type?n("article",{staticClass:"cf ph3 ph5-ns pv5"},[n("header",{staticClass:"fn fl-ns w-50-ns pr4-ns"},[n("h1",{staticClass:"f2 lh-title fw9 mb3 mt0 pt3 bt bw2"},[t._v(t._s(t.article.title))]),t._v(" "),n("h2",{staticClass:"f3 mid-gray lh-title"},[t._v("\n        "+t._s(t.article.description)+"\n      ")]),t._v(" "),n("time",{staticClass:"f6 ttu tracked gray"},[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),n("TableOfContent",{staticClass:"toc",attrs:{toc:t.article.toc}})],1),t._v(" "),n("div",{staticClass:"fn fl-ns w-50-ns"},[n("nuxt-content",{attrs:{document:t.article}})],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Article:n(297).default,TableOfContent:n(394).default})}}]);