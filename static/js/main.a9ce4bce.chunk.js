(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(2),c=t.n(i),s=(t(19),t(5)),a=t(8),l=t(13),h=t(14),d=t(3),u=t(4),b=t(7),f=t(6),j=(t(10),t(1)),g=function(e){return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?size=200x200")}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{children:[" ",e.name," "]}),Object(j.jsxs)("p",{children:[" ",e.email," "]})]})]})},p=function(e){var n=e.robots;return Object(j.jsx)("div",{children:n.map((function(e,t){return Object(j.jsx)(g,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},v=function(e){e.searchfield;var n=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},O=(t(28),function(e){return Object(j.jsx)("div",{style:{overflow:"Scroll",border:"5px solid black",height:"800px"},children:e.children})}),w=function(e){Object(b.a)(t,e);var n=Object(f.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=n.call(this,e)).state={haserror:!1},o}return Object(u.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({haserror:!0})}},{key:"render",value:function(){return this.state.haserror?Object(j.jsx)("h1",{children:" Ooops.... That is not good"}):this.props.children}}]),t}(o.Component),m="CHANGE_SEARCH_FIELD",x="REQUEST_ROBOTS_PENDING",y="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILED",R=function(e){Object(b.a)(t,e);var n=Object(f.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,r=e.isPending,i=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r?Object(j.jsx)("h1",{className:"tc",children:"Loading"}):Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(j.jsx)(v,{searchChange:t}),Object(j.jsx)(O,{children:Object(j.jsx)(w,{children:Object(j.jsx)(p,{robots:i})})})]})}}]),t}(o.Component),k=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:m,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:x}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:y,payload:n})})).catch((function(n){return e({type:S,payload:n})}))}))}}}))(R),C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))},E={searchField:""},F={isPending:!1,robots:[],error:""},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=Object(l.createLogger)(),L=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===m?Object.assign({},e,{searchField:n.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case x:return Object.assign({},e,{isPending:!0});case y:return Object.assign({},e,{robots:n.payload,isPending:!1});case S:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),W=Object(a.c)(L,Object(a.a)(h.a,T));c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(s.a,{store:W,children:Object(j.jsx)(k,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends321",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends321","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(n,e)}))}}(),C()}},[[29,1,2]]]);
//# sourceMappingURL=main.a9ce4bce.chunk.js.map