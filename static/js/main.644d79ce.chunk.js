(this["webpackJsonpgithub-jobs-app"]=this["webpackJsonpgithub-jobs-app"]||[]).push([[0],{147:function(n,e,t){},148:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(37),c=t.n(o),i=(t(47),t(9)),l=t(7),u=t(13),s=t.n(u),f="make-request",p="get-data",d="error";var m=function(n,e){var t=Object(a.useReducer)((function(n,e){switch(e.type){case f:return{loading:!0,jobs:[]};case p:return Object(l.a)(Object(l.a)({},n),{},{loading:!1,jobs:e.payload.jobs});case d:return Object(l.a)(Object(l.a)({},n),{},{loading:!1,error:e.payload.error,jobs:[]});default:return n}}),{loading:!0,jobs:[]}),r=Object(i.a)(t,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){var t=s.a.CancelToken.source();return c({type:f}),s.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",{cancelToken:t.token,params:Object(l.a)({markdown:!0,page:e},n)}).then((function(n){c({type:p,payload:{jobs:n.data}})})).catch((function(n){s.a.isCancel(n)||c({type:d,payload:{error:n}})})),function(){t.cancel()}}),[n,e]),o},b=t(1),g=t(2);function v(){var n=Object(b.a)(["\n\tpadding:5px 7px;\n\tbackground:lightblue;\n\tcursor:pointer;\n"]);return v=function(){return n},n}function h(){var n=Object(b.a)(["\n\tpadding:5px 5px;\n\tbackground:#ccc;\n\tcursor:pointer;\n\n"]);return h=function(){return n},n}function j(){var n=Object(b.a)(["\n\tdisplay:flex;\n\twidth:70px;\n\tjustify-content:space-between;\n"]);return j=function(){return n},n}function E(){var n=Object(b.a)(["\n\tdisplay:flex;\n\talign-items:center;\n\tjustify-content:space-between;\n\twidth:130px;\n"]);return E=function(){return n},n}var y=g.a.div(E()),w=g.a.div(j()),x=g.a.span(h()),O=g.a.span(v());var k=function(){return r.a.createElement(y,null,r.a.createElement(x,null,"<"),r.a.createElement(w,null,r.a.createElement(O,null,"1"),r.a.createElement(O,null,"2"),r.a.createElement(O,null,"3")),r.a.createElement(x,null,">"))};function L(){var n=Object(b.a)(["\n\tmargin-left:5px;\n\tfont-size:.9em;\n"]);return L=function(){return n},n}function C(){var n=Object(b.a)(["\n\talign-self:center;\n"]);return C=function(){return n},n}function W(){var n=Object(b.a)(["\n\tdisplay:block;\n\tfont-size:.9em;\n\tmargin:5px 0;\n"]);return W=function(){return n},n}function S(){var n=Object(b.a)(["\n\t\n"]);return S=function(){return n},n}function z(){var n=Object(b.a)(["\n\tdisplay:flex;\n\tmargin:30px 0;\n"]);return z=function(){return n},n}var A=g.a.div(z()),D=g.a.div(S()),T=g.a.label(W()),J=g.a.div(C()),N=g.a.span(L());var R=function(n){var e=n.location,t=n.desc,a=n.setLocation,o=n.setDesc;return r.a.createElement(A,null,r.a.createElement(D,null,r.a.createElement(T,null,"Location"),r.a.createElement("input",{type:"text",value:e,onChange:function(n){return a(n.target.value)}})),r.a.createElement(D,{style:{marginLeft:"50px"}},r.a.createElement(T,null,"Description"),r.a.createElement("input",{type:"text",value:t,onChange:function(n){return o(n.target.value)}})),r.a.createElement(J,{style:{marginLeft:"20px"}},r.a.createElement("input",{type:"checkbox"}),r.a.createElement(N,null,"Only Full Time")))},_=t(41),G=t.n(_);function H(){var n=Object(b.a)(["\n\tfontWeight:400;\n\tfontSize:.9em;\n\tmargin:10px 0;\n\tword-break: break-all;\n"]);return H=function(){return n},n}function M(){var n=Object(b.a)(["\n\tbackground:lightblue;\n\tcolor:white;\n\tfont-size:.8em;\n\tpadding:7px 10px;\n\tdisplay:block;\n\tborder:none;\n\tborder-radius:5px;\n\tcursor:pointer;\n"]);return M=function(){return n},n}function P(){var n=Object(b.a)(["\n\tbackground:#555;\n\tcolor:white;\n\tpadding:2px 5px;\n\tfont-size:.7em;\n\tborder-radius:5px;\n\tcursor:default;\n"]);return P=function(){return n},n}function U(){var n=Object(b.a)(["\n\tfont-weight:300;\n\tfont-size:.8em;\n\tmargin:5px 0;\n\tcursor:default;\n"]);return U=function(){return n},n}function B(){var n=Object(b.a)(["\n\tfont-weight:200;\n\tcolor:#555;\n\tmargin-left:5px;\n"]);return B=function(){return n},n}function q(){var n=Object(b.a)(["\n"]);return q=function(){return n},n}function F(){var n=Object(b.a)(["\n"]);return F=function(){return n},n}function I(){var n=Object(b.a)(["\n\tborder:1px #ccc solid;\n\tpadding:20px;\n\tfont-size:.9em;\n\twidth:90%;\n\tmargin:0 auto;\n\tdisplay:flex;\n\tjustify-content:space-between;\n"]);return I=function(){return n},n}var V=g.a.div(I()),$=g.a.div(F()),K=g.a.h4(q()),Q=g.a.span(B()),X=g.a.p(U()),Y=g.a.span(P()),Z=g.a.button(M()),nn=g.a.div(H());var en=function(n){var e=n.job;return r.a.createElement(V,null,r.a.createElement($,null,r.a.createElement(K,null,e.title,r.a.createElement(Q,null," - ",e.company)),r.a.createElement(X,{style:{}},new Date(e.created_at).toLocaleDateString()),r.a.createElement(Y,null,e.type),r.a.createElement(Y,{style:{marginLeft:"5px"}},e.location),r.a.createElement(nn,null,r.a.createElement(G.a,{source:e.how_to_apply})),r.a.createElement(Z,null,"View Details")),r.a.createElement("img",{alt:e.company,src:e.company_logo,height:"40px"}))};function tn(){var n=Object(b.a)(["\n\ttext-align:center;\n\tfont-size:.8em;\n\tpadding:5px 0;\n"]);return tn=function(){return n},n}function an(){var n=Object(b.a)(["\n\tmargin:5px;\n\tborder:1px solid #333;\n"]);return an=function(){return n},n}var rn=g.a.div(an()),on=g.a.p(tn()),cn=function(){return r.a.createElement(rn,{className:"foot"},r.a.createElement(on,null,"Copyright @Mankind_ Project 2020"))};t(147);var ln=function(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),u=l[0],s=l[1],f=m(),p=f.loading,d=f.error,b=f.jobs.filter((function(n){return n.location.toLowerCase().includes(u.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:{margin:"20px 0",fontWeight:"500"}},"GitHub Jobs"),r.a.createElement(R,{location:u,setLocation:s,desc:t,setDesc:o}),r.a.createElement(k,null),p&&r.a.createElement("h3",{style:{margin:"15px"}},"Loading..."),d&&r.a.createElement("h3",{style:{margin:"15px"}},"Error, Try Refreshing..."),r.a.createElement("div",{style:{margin:"20px 0"}},0!==b.length?b.map((function(n){return r.a.createElement(en,{key:Math.random(),job:n})})):r.a.createElement("h3",null,"No result found.")),r.a.createElement(k,null),r.a.createElement(cn,null))},un=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function sn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ln,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/GitHub-Jobs-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/GitHub-Jobs-App","/service-worker.js");un?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):sn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):sn(e,n)}))}}()},42:function(n,e,t){n.exports=t(148)},47:function(n,e,t){}},[[42,1,2]]]);
//# sourceMappingURL=main.644d79ce.chunk.js.map