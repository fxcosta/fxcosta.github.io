webpackJsonp([0xd2a57dc1d883],{228:function(n,o,e){"use strict";function t(n,o,e){var t=r.map(function(e){if(e.plugin[n]){var t=e.plugin[n](o,e.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:e?[e]:[]}function a(n,o,e){return r.reduce(function(e,t){return t.plugin[n]?e.then(function(){return t.plugin[n](o,t.options)}):e},Promise.resolve())}o.__esModule=!0,o.apiRunner=t,o.apiRunnerAsync=a;var r=[{plugin:e(390),options:{plugins:[]}},{plugin:e(391),options:{plugins:[],trackingId:"UA-85050778-1"}},{plugin:e(235),options:{plugins:[]}}]},229:function(n,o,e){"use strict";var t;o.components={"component---src-templates-post-js":e(362),"component---src-templates-tags-js":e(363),"component---src-pages-404-js":e(358),"component---src-pages-blog-js":e(359),"component---src-pages-index-js":e(360),"component---src-pages-projects-js":e(361)},o.json=(t={"layout-index.json":e(7),"blog-diferenca-entre-api-e-web-service-de-maneira-simples.json":e(367)},t["layout-index.json"]=e(7),t["blog-iniciando-com-tdd-1-minha-motivacao-e-primeiro-contato.json"]=e(369),t["layout-index.json"]=e(7),t["blog-dual-boot-w-8-ponto-1-e-mint-em-um-acer-aspire-e-14.json"]=e(368),t["layout-index.json"]=e(7),t["blog-por-que-devemos-preferir-composicao-ao-inves-de-heranca.json"]=e(370),t["layout-index.json"]=e(7),t["blog-tags-api.json"]=e(371),t["layout-index.json"]=e(7),t["blog-tags-desenvolvimento-web.json"]=e(373),t["layout-index.json"]=e(7),t["blog-tags-rest.json"]=e(381),t["layout-index.json"]=e(7),t["blog-tags-web.json"]=e(385),t["layout-index.json"]=e(7),t["blog-tags-webservices.json"]=e(386),t["layout-index.json"]=e(7),t["blog-tags-tdd.json"]=e(383),t["layout-index.json"]=e(7),t["blog-tags-phpba.json"]=e(379),t["layout-index.json"]=e(7),t["blog-tags-php.json"]=e(378),t["layout-index.json"]=e(7),t["blog-tags-dualboot.json"]=e(374),t["layout-index.json"]=e(7),t["blog-tags-linux.json"]=e(376),t["layout-index.json"]=e(7),t["blog-tags-refind.json"]=e(380),t["layout-index.json"]=e(7),t["blog-tags-uefi.json"]=e(384),t["layout-index.json"]=e(7),t["blog-tags-windows.json"]=e(387),t["layout-index.json"]=e(7),t["blog-tags-orientacao-a-objetos.json"]=e(377),t["layout-index.json"]=e(7),t["blog-tags-heranca.json"]=e(375),t["layout-index.json"]=e(7),t["blog-tags-composicao.json"]=e(372),t["layout-index.json"]=e(7),t["blog-tags-solid.json"]=e(382),t["layout-index.json"]=e(7),t["404.json"]=e(364),t["layout-index.json"]=e(7),t["blog.json"]=e(366),t["layout-index.json"]=e(7),t["index.json"]=e(388),t["layout-index.json"]=e(7),t["projects.json"]=e(389),t["layout-index.json"]=e(7),t["404-html.json"]=e(365),t),o.layouts={"component---src-layouts-index-js":e(357)}},230:function(n,o,e){(function(t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function r(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function u(n,o){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?n:o}function s(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(n,o):n.__proto__=o)}o.__esModule=!0;var i=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},c=e(2),l=a(c),p=e(8),f=a(p),d=e(142),m=a(d),g=e(62),h=a(g),y=function(n){var o=n.children;return t.createElement("div",null,o())},j=function(n){function o(e){r(this,o);var t=u(this,n.call(this));return t.state={location:e.location,pageResources:m.default.getResourcesForPathname(e.location.pathname)},t}return s(o,n),o.prototype.componentWillReceiveProps=function(n){var o=this;if(this.state.location.pathname!==n.location.pathname){var e=m.default.getResourcesForPathname(n.location.pathname);e?this.setState({location:n.location,pageResources:e}):m.default.getResourcesForPathname(n.location.pathname,function(e){o.setState({location:n.location,pageResources:e})})}},o.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(o){o.page.path===m.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(n,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path))))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(l.default.Component);j.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},o.default=j,n.exports=o.default}).call(o,e(10))},62:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=e(546),r=t(a),u=(0,r.default)();n.exports=u},231:function(n,o,e){"use strict";var t=e(88),a={};n.exports=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(e){var r=decodeURIComponent(e),u=r.slice(o.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),a[u])return a[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(u,{path:n.path})||(0,t.matchPath)(u,{path:n.matchPath}))return s=n,a[u]=n,!0}else{if((0,t.matchPath)(u,{path:n.path,exact:!0}))return s=n,a[u]=n,!0;if((0,t.matchPath)(u,{path:n.path+"index.html"}))return s=n,a[u]=n,!0}return!1}),s}}},365:function(n,o,e){e(3),n.exports=function(n){return e.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(421)})})}},364:function(n,o,e){e(3),n.exports=function(n){return e.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(422)})})}},367:function(n,o,e){e(3),n.exports=function(n){return e.e(0xa74f628c4228,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(423)})})}},368:function(n,o,e){e(3),n.exports=function(n){return e.e(0xa55f8b49f85c,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(424)})})}},369:function(n,o,e){e(3),n.exports=function(n){return e.e(0x94860de0f52,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(425)})})}},370:function(n,o,e){e(3),n.exports=function(n){return e.e(0x5f8ee6f8ef86,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(426)})})}},371:function(n,o,e){e(3),n.exports=function(n){return e.e(66114281736e3,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(427)})})}},372:function(n,o,e){e(3),n.exports=function(n){return e.e(0xcf88a0d9ba6b,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(428)})})}},373:function(n,o,e){e(3),n.exports=function(n){return e.e(0xe2221b9b5ee,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(429)})})}},374:function(n,o,e){e(3),n.exports=function(n){return e.e(0xba98d1d48175,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(430)})})}},375:function(n,o,e){e(3),n.exports=function(n){return e.e(44869005965510,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(431)})})}},376:function(n,o,e){e(3),n.exports=function(n){return e.e(0x9a9714da291f,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(432)})})}},377:function(n,o,e){e(3),n.exports=function(n){return e.e(66241602986110,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(433)})})}},378:function(n,o,e){e(3),n.exports=function(n){return e.e(0xe5586f29c7e5,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(434)})})}},379:function(n,o,e){e(3),n.exports=function(n){return e.e(0xd1f390cf2254,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(435)})})}},380:function(n,o,e){e(3),n.exports=function(n){return e.e(0xad2768d52637,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(436)})})}},381:function(n,o,e){e(3),n.exports=function(n){return e.e(58807503137645,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(437)})})}},382:function(n,o,e){e(3),n.exports=function(n){return e.e(0xe925d768b7a2,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(438)})})}},383:function(n,o,e){e(3),n.exports=function(n){return e.e(83248582335362,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(439)})})}},384:function(n,o,e){e(3),n.exports=function(n){return e.e(0x9d1c8e14cfb6,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(440)})})}},385:function(n,o,e){e(3),n.exports=function(n){return e.e(0xf5e06c1f217b,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(441)})})}},386:function(n,o,e){e(3),n.exports=function(n){return e.e(0x8ed77697c4f6,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(442)})})}},387:function(n,o,e){e(3),n.exports=function(n){return e.e(39407279367295,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(443)})})}},366:function(n,o,e){e(3),n.exports=function(n){return e.e(49683490770531,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(444)})})}},388:function(n,o,e){e(3),n.exports=function(n){return e.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(445)})})}},7:function(n,o,e){e(3),n.exports=function(n){return e.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(113)})})}},389:function(n,o,e){e(3),n.exports=function(n){return e.e(97786326051841,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(446)})})}},357:function(n,o,e){e(3),n.exports=function(n){return e.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(232)})})}},142:function(n,o,e){(function(o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=e(2),r=(t(a),e(231)),u=t(r),s=e(62),i=t(s),c=void 0,l={},p={},f={},d={},m={},g=[],h=[],y={},j=[],b={},x=function(n){return n&&n.default||n},v=void 0,C=!0;v=e(233)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(n){w(n,function(){j=j.filter(function(o){return o!==n}),v.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){v.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){v.onPostLoadPageResources(n)});var N=function(n,o){return b[n]>b[o]?1:b[n]<b[o]?-1:0},R=function(n,o){return y[n]>y[o]?1:y[n]<y[o]?-1:0},w=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])o.nextTick(function(){e(null,d[n])});else{var t="component---"===n.slice(0,12)?p.components[n]||p.layouts[n]:p.json[n];t(function(o,t){d[n]=t,e(o,t)})}},k=function(n,e){m[n]?o.nextTick(function(){e(null,m[n])}):w(n,function(o,t){if(o)e(o);else{var a=x(t());m[n]=a,e(o,a)}})},_=1,P={empty:function(){h=[],y={},b={},j=[],g=[]},addPagesArray:function(n){g=n;var o="";o="",c=(0,u.default)(n,o)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return h.pop()},enqueue:function(n){if(!g.some(function(o){return o.path===n}))return!1;var o=1/_;_+=1,y[n]?y[n]+=1:y[n]=1,P.has(n)||h.unshift(n),h.sort(R);var e=c(n);return e.jsonName&&(b[e.jsonName]?b[e.jsonName]+=1+o:b[e.jsonName]=1+o,j.indexOf(e.jsonName)!==-1||d[e.jsonName]||j.unshift(e.jsonName)),e.componentChunkName&&(b[e.componentChunkName]?b[e.componentChunkName]+=1+o:b[e.componentChunkName]=1+o,j.indexOf(e.componentChunkName)!==-1||d[e.jsonName]||j.unshift(e.componentChunkName)),j.sort(N),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:b}},getPages:function(){return{pathArray:h,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return h.some(function(o){return o===n})},getResourcesForPathname:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(n)||navigator.serviceWorker.getRegistrations().then(function(n){for(var o=n,e=Array.isArray(o),t=0,o=e?o:o[Symbol.iterator]();;){var a;if(e){if(t>=o.length)break;a=o[t++]}else{if(t=o.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()})),C=!1;var t=c(n);if(!t)return void console.log("A page wasn't found for \""+n+'"');if(n=t.path,f[n])return o.nextTick(function(){e(f[n]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:f[n]})}),f[n];i.default.emit("onPreLoadPageResources",{path:n});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!t.layoutComponentChunkName||u)){f[n]={component:a,json:r,layout:u,page:t};var o={component:a,json:r,layout:u,page:t};e(o),i.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return k(t.componentChunkName,function(n,o){n&&console.log("Loading the component for "+t.path+" failed"),a=o,s()}),k(t.jsonName,function(n,o){n&&console.log("Loading the JSON for "+t.path+" failed"),r=o,s()}),void(t.layoutComponentChunkName&&k(t.layoutComponentChunkName,function(n,o){n&&console.log("Loading the Layout for "+t.path+" failed"),u=o,s()}))},peek:function(n){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(n){return h.length-h.indexOf(n)-1}};n.exports=P}).call(o,e(122))},447:function(n,o){n.exports=[{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-diferenca-entre-api-e-web-service-de-maneira-simples.json",path:"/blog/diferenca-entre-api-e-web-service-de-maneira-simples/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-iniciando-com-tdd-1-minha-motivacao-e-primeiro-contato.json",path:"/blog/iniciando-com-tdd-1-minha-motivacao-e-primeiro-contato/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-dual-boot-w-8-ponto-1-e-mint-em-um-acer-aspire-e-14.json",path:"/blog/dual-boot-w8ponto1-e-mint-em-um-acer-aspire-e14/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-por-que-devemos-preferir-composicao-ao-inves-de-heranca.json",path:"/blog/por-que-devemos-preferir-composicao-ao-inves-de-heranca/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-api.json",path:"/blog/tags/api/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-desenvolvimento-web.json",path:"/blog/tags/desenvolvimento-web/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-rest.json",path:"/blog/tags/rest/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-web.json",path:"/blog/tags/web/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-webservices.json",path:"/blog/tags/webservices/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-tdd.json",path:"/blog/tags/tdd/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-phpba.json",path:"/blog/tags/phpba/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-php.json",path:"/blog/tags/php/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-dualboot.json",path:"/blog/tags/dualboot/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-linux.json",path:"/blog/tags/linux/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-refind.json",path:"/blog/tags/refind/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-uefi.json",path:"/blog/tags/uefi/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-windows.json",path:"/blog/tags/windows/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-orientacao-a-objetos.json",path:"/blog/tags/orientacao-a-objetos/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-heranca.json",path:"/blog/tags/heranca/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-composicao.json",path:"/blog/tags/composicao/"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-tags-solid.json",path:"/blog/tags/solid/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-blog-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-projects-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},233:function(n,o){"use strict";n.exports=function(n){var o=n.getNextQueuedResources,e=n.createResourceDownload,t=[],a=[],r=function(){var n=o();n&&(a.push(n),e(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(o){return o!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,o,e){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var t=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},a=e(228),r=e(2),u=(o(r),e(196)),s=o(u),i=e(88),c=e(395),l=e(111),p=o(l),f=e(337),d=o(f),m=e(62),g=o(m),h=e(447),y=o(h),j=e(448),b=o(j),x=e(230),v=o(x),C=e(229),N=o(C),R=e(142),w=o(R);e(314),window.___emitter=g.default,w.default.addPagesArray(y.default),w.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=w.default,window.matchPath=i.matchPath;var k=(0,p.default)(),_=b.default.reduce(function(n,o){return n[o.fromPath]=o,n},{}),P=function(n){var o=_[n];return null!=o&&(k.replace(o.toPath),!0)};P(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function o(n){window.___history||(window.___history=n,n.listen(function(n,o){P(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:o})}))}function u(n,o){var e=o.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:e});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===e)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&e(234);var l=function(n){function o(e){e.page.path===w.default.getPage(n).path&&(g.default.off("onPostLoadPageResources",o),clearTimeout(t),window.___history.push(n))}var e=_[n];if(e&&(n=e.toPath),window.location.pathname!==n){var t=setTimeout(function(){g.default.off("onPostLoadPageResources",o),g.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);w.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):g.default.on("onPostLoadPageResources",o)}};window.___navigateTo=l,(0,a.apiRunner)("onRouteUpdate",{location:k.location,action:k.action});var p=(0,a.apiRunner)("replaceRouterComponent",{history:k})[0],f=function(o){var e=o.children;return n.createElement(i.Router,{history:k},e)},m=(0,i.withRouter)(v.default);w.default.getResourcesForPathname(window.location.pathname,function(){var e=function(){return(0,r.createElement)(p?p:f,null,(0,r.createElement)(c.ScrollContext,{shouldUpdateScroll:u},(0,r.createElement)(m,{layout:!0,children:function(n){return(0,r.createElement)(i.Route,{render:function(e){o(e.history);var a=n?n:e;return w.default.getPage(a.location.pathname)?(0,r.createElement)(v.default,t({page:!0},a)):(0,r.createElement)(v.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},l=(0,a.apiRunner)("wrapRootComponent",{Root:e},e)[0];(0,d.default)(function(){return s.default.render(n.createElement(l,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})}).call(o,e(10))},448:function(n,o){n.exports=[]},234:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=e(62),r=t(a),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var o=n.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},235:function(n,o){"use strict"},337:function(n,o,e){!function(o,e){n.exports=e()}("domready",function(){var n,o=[],e=document,t=e.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(e.readyState);return r||e.addEventListener(a,n=function(){for(e.removeEventListener(a,n),r=1;n=o.shift();)n()}),function(n){r?setTimeout(n,0):o.push(n)}})},3:function(n,o,e){"use strict";function t(){function n(n){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(n,0)})}var o,t=document.querySelector("head"),a=e.e,r=e.s;e.e=function(t,u){var s=!1,i=!0,c=function(n){u&&(u(e,n),u=null)};return!r&&o&&o[t]?void c(!0):(a(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[t]=void 0:(o||(o={}),o[t]=!0),c(!0))}))))}}t()},390:function(n,o,e){"use strict";var t=e(174);o.onClientEntry=function(){window._glamor&&(0,t.rehydrate)(window._glamor)}},391:function(n,o,e){"use strict";o.onRouteUpdate=function(n){var o=n.location;"function"==typeof ga&&(window.ga("set","page",(o||{}).pathname),window.ga("send","pageview"))}},546:function(n,o){function e(n){return n=n||Object.create(null),{on:function(o,e){(n[o]||(n[o]=[])).push(e)},off:function(o,e){n[o]&&n[o].splice(n[o].indexOf(e)>>>0,1)},emit:function(o,e){(n[o]||[]).map(function(n){n(e)}),(n["*"]||[]).map(function(n){n(o,e)})}}}n.exports=e},122:function(n,o){function e(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===e||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(o){try{return l.call(null,n,0)}catch(o){return l.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(o){try{return p.call(null,n)}catch(o){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=a(u);g=!0;for(var o=m.length;o;){for(d=m,m=[];++h<o;)d&&d[h].run();h=-1,o=m.length}d=null,g=!1,r(n)}}function i(n,o){this.fun=n,this.array=o}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:e}catch(n){l=e}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var o=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)o[e-1]=arguments[e];m.push(new i(n,o)),1!==m.length||g||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},358:function(n,o,e){e(3),n.exports=function(n){return e.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(240)})})}},359:function(n,o,e){e(3),n.exports=function(n){return e.e(0xc19374f83753,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(241)})})}},360:function(n,o,e){e(3),n.exports=function(n){return e.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(242)})})}},361:function(n,o,e){e(3),n.exports=function(n){return e.e(0xc260c743ec7c,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(243)})})}},362:function(n,o,e){e(3),n.exports=function(n){return e.e(0xb1abc741118f,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(244)})})}},363:function(n,o,e){e(3),n.exports=function(n){return e.e(50739212244294,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(245)})})}}});
//# sourceMappingURL=app-cdfafa2d483a96528049.js.map