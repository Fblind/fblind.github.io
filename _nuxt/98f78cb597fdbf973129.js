(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{219:function(t,e,n){var content=n(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("20a14262",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";var r=n(219);n.n(r).a},221:function(t,e,n){(e=n(44)(!1)).push([t.i,".banner{background-color:var(--white);background-size:cover;color:var(--white);padding:4rem 0 10rem;text-align:center;margin-bottom:3rem}",""]),t.exports=e},222:function(t,e,n){"use strict";var r={name:"Banner",props:{background:{type:String,default:""}},computed:{styles:function(){var t=this.background?n(155)("./".concat(this.background)):null;return t?{"background-image":"url(".concat(t,")")}:{}}}},o=(n(220),n(32)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"banner",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},223:function(t,e,n){"use strict";(function(t){var r=n(222),o=n(156),c=n.n(o);e.a={name:"About",components:{Banner:r.a},head:function(){return{htmlAttrs:{lang:this.$i18n.locale},meta:[{name:"author",content:"Facundo Soria Guerrero"},{name:"description",content:this.$t("about.description")},{property:"og:title",content:this.$t("about.title")},{property:"og:description",content:this.$t("about.description")},{property:"og:url",content:t.env.BASE_URL+this.$router.currentRoute.fullPath},{property:"og:image",content:t.env.BASE_URL+c.a},{name:"twitter:description",content:this.$t("about.description")},{name:"twitter:image",content:t.env.BASE_URL+c.a}]}}}}).call(this,n(119))},224:function(t,e,n){var content=n(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("504d216a",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";var r=n(224);n.n(r).a},280:function(t,e,n){(e=n(44)(!1)).push([t.i,".full-post{position:relative;top:-100px}.post-card-preview{box-shadow:0 10px 30px rgba(0,0,0,.05);background:var(--white);border-radius:5px;margin-bottom:1rem;border:none}.img-me{position:relative;z-index:99}.background-me,.img-me{height:20rem;border-radius:5px}.background-me{width:20rem;position:absolute;top:15%;left:25%}.main-about{background:linear-gradient(90deg,var(--blue) 50%,var(--light) 0) no-repeat}.about-content{padding:0 2rem 4rem}.about-content p{line-height:1.7rem}@media screen and (max-width:576px){.display-4{font-size:3rem}}",""]),t.exports=e},295:function(t,e,n){"use strict";n.r(e);var r=n(223).a,o=(n(279),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-about"},[r("banner",[r("div",{staticClass:"container text-left"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col text-dark"},[r("h4",[t._v(t._s(t.$t("hiIam")))]),t._v(" "),r("h1",{staticClass:"display-3"},[t._v("\n            Facundo Soria Guerrero\n          ")]),t._v(" "),r("h1",{domProps:{innerHTML:t._s(t.$t("developerDescription"))}}),t._v(" "),r("h4",[t._v(t._s(t.$t("moreExpiriencedInTheBackend")))])]),t._v(" "),r("div",{staticClass:"col d-none d-lg-block"},[r("img",{staticClass:"img-me",attrs:{src:n(156),alt:""}}),t._v(" "),r("p",{staticClass:"bg-primary background-me img-fluid"})])])])]),t._v(" "),r("main",{staticClass:"container main"},[r("article",{staticClass:"card post-card-preview full-post about-content"},[r("h1",{staticClass:"display-4"},[t._v("\n        "+t._s(t.$t("aboutMe"))),r("strong",{staticClass:"text-primary"},[t._v(".")])]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$t("aboutMeFirst"))}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$t("aboutMeSecond"))}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$t("aboutMeThird"))}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$t("aboutMeForth"))}}),t._v(" "),r("h1",{staticClass:"display-4"},[t._v("\n        "+t._s(t.$t("background"))),r("strong",{staticClass:"text-primary"},[t._v(".")])]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$t("backgroundFirst"))}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$t("backgroundSecond"))}}),t._v(" "),r("h1",{staticClass:"display-4"},[t._v("\n        "+t._s(t.$t("contactMe"))),r("strong",{staticClass:"text-primary"},[t._v(".")])]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$t("contactMeFirst"))}})])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);