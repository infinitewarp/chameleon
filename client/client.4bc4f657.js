function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function _(){return g("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function S(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?m(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function P(t){return b(t," ")}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function A(t,e,n){t.classList[n?"add":"remove"](e)}function L(t,e=document.body){return Array.from(e.querySelectorAll(t))}class k{constructor(t,e=null){this.e=d("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)f(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(p)}}let R;function C(t){R=t}function j(){if(!R)throw new Error("Function called outside component initialization");return R}function O(t){j().$$.on_mount.push(t)}const D=[],N=[],H=[],q=[],I=Promise.resolve();let U=!1;function V(t){H.push(t)}let M=!1;const T=new Set;function B(){if(!M){M=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];C(e),J(e.$$)}for(D.length=0;N.length;)N.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];T.has(e)||(T.add(e),e())}H.length=0}while(D.length);for(;q.length;)q.pop()();U=!1,M=!1,T.clear()}}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const K=new Set;let z;function G(){z={r:0,c:[],p:z}}function W(){z.r||s(z.c),z=z.p}function F(t,e){t&&t.i&&(K.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),z.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Y="undefined"!=typeof window?window:global;function Q(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function et(t,e){t&&t.l(e)}function nt(t,e,r){const{fragment:i,on_mount:a,on_destroy:c,after_update:l}=t.$$;i&&i.m(e,r),V(()=>{const e=a.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(V)}function rt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(D.push(t),U||(U=!0,I.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,o,i,a,c,l=[-1]){const u=R;C(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),h&&st(e,t)),n}):[],p.update(),h=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(w(n.target)):p.fragment&&p.fragment.c(),n.intro&&F(e.$$.fragment),nt(e,n.target,n.anchor),B()),C(u)}class it{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const at=[];function ct(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.push(c),1===s.length&&(r=n(o)||t),i(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const lt={},ut=()=>({});function ft(e){let n,r,s,o,i,a,c,l,h,m,_,v,E,x,L,k,R,C,j,O,D,N,H;return{c(){n=d("nav"),r=d("ul"),s=d("div"),o=d("li"),i=d("a"),a=d("img"),l=$(),h=d("div"),m=d("li"),_=d("a"),v=g("About"),x=$(),L=d("li"),k=d("a"),R=g("Wiki"),j=$(),O=d("li"),D=d("a"),N=g("Contact"),this.h()},l(t){n=S(t,"NAV",{class:!0});var e=w(n);r=S(e,"UL",{class:!0});var c=w(r);s=S(c,"DIV",{class:!0});var u=w(s);o=S(u,"LI",{class:!0});var f=w(o);i=S(f,"A",{href:!0});var d=w(i);a=S(d,"IMG",{class:!0,src:!0,alt:!0}),d.forEach(p),f.forEach(p),u.forEach(p),l=P(c),h=S(c,"DIV",{class:!0});var g=w(h);m=S(g,"LI",{class:!0});var $=w(m);_=S($,"A",{"aria-current":!0,href:!0});var E=w(_);v=b(E,"About"),E.forEach(p),$.forEach(p),x=P(g),L=S(g,"LI",{class:!0});var y=w(L);k=S(y,"A",{"aria-current":!0,href:!0});var A=w(k);R=b(A,"Wiki"),A.forEach(p),y.forEach(p),j=P(g),O=S(g,"LI",{class:!0});var C=w(O);D=S(C,"A",{"aria-current":!0,href:!0});var H=w(D);N=b(H,"Contact"),H.forEach(p),C.forEach(p),g.forEach(p),c.forEach(p),e.forEach(p),this.h()},h(){y(a,"class","h-6"),a.src!==(c="icon.svg")&&y(a,"src","icon.svg"),y(a,"alt","Chameleon Icon"),y(i,"href","./"),y(o,"class","svelte-1iyh25l"),y(s,"class","flex-0"),y(_,"aria-current",E="about"===e[0]?"page":void 0),y(_,"href","about"),y(m,"class","svelte-1iyh25l"),A(m,"active","about"===e[0]),y(k,"aria-current",C="wiki"===e[0]?"page":void 0),y(k,"href","wiki"),y(L,"class","svelte-1iyh25l"),A(L,"active","wiki"===e[0]),y(D,"aria-current",H="contact"===e[0]?"page":void 0),y(D,"href","contact"),y(O,"class","svelte-1iyh25l"),A(O,"active","contact"===e[0]),y(h,"class","flex-1 inline-flex justify-end"),y(r,"class","flex max-w-6xl w-full items-center"),y(n,"class","flex px-4 bg-dark-green lg: px-0 py-2 w-full text-lg text-white justify-center z-10")},m(t,e){f(t,n,e),u(n,r),u(r,s),u(s,o),u(o,i),u(i,a),u(r,l),u(r,h),u(h,m),u(m,_),u(_,v),u(h,x),u(h,L),u(L,k),u(k,R),u(h,j),u(h,O),u(O,D),u(D,N)},p(t,[e]){1&e&&E!==(E="about"===t[0]?"page":void 0)&&y(_,"aria-current",E),1&e&&A(m,"active","about"===t[0]),1&e&&C!==(C="wiki"===t[0]?"page":void 0)&&y(k,"aria-current",C),1&e&&A(L,"active","wiki"===t[0]),1&e&&H!==(H="contact"===t[0]?"page":void 0)&&y(D,"aria-current",H),1&e&&A(O,"active","contact"===t[0])},i:t,o:t,d(t){t&&p(n)}}}function pt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ht extends it{constructor(t){super(),ot(this,t,pt,ft,i,{segment:0})}}function dt(t){let e,n,r,s;const o=new ht({props:{segment:t[0]}}),i=t[2].default,h=a(i,t,t[1],null);return{c(){e=d("main"),n=d("div"),tt(o.$$.fragment),r=$(),h&&h.c(),this.h()},l(t){e=S(t,"MAIN",{});var s=w(e);n=S(s,"DIV",{class:!0});var i=w(n);et(o.$$.fragment,i),r=P(i),h&&h.l(i),i.forEach(p),s.forEach(p),this.h()},h(){y(n,"class","flex flex-col h-screen overflow-y-auto")},m(t,i){f(t,e,i),u(e,n),nt(o,n,null),u(n,r),h&&h.m(n,null),s=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),h&&h.p&&2&e&&h.p(c(i,t,t[1],null),l(i,t[1],e,null))},i(t){s||(F(o.$$.fragment,t),F(h,t),s=!0)},o(t){X(o.$$.fragment,t),X(h,t),s=!1},d(t){t&&p(e),rt(o),h&&h.d(t)}}}function mt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class gt extends it{constructor(t){super(),ot(this,t,mt,dt,i,{segment:0})}}function $t(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=g(r)},l(t){e=S(t,"PRE",{});var s=w(e);n=b(s,r),s.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&p(e)}}}function _t(e){let n,r,s,o,i,a,c,l,h,m=e[1].message+"";document.title=n=e[0];let v=e[2]&&e[1].stack&&$t(e);return{c(){r=$(),s=d("h1"),o=g(e[0]),i=$(),a=d("p"),c=g(m),l=$(),v&&v.c(),h=_(),this.h()},l(t){L('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=P(t),s=S(t,"H1",{class:!0});var n=w(s);o=b(n,e[0]),n.forEach(p),i=P(t),a=S(t,"P",{class:!0});var u=w(a);c=b(u,m),u.forEach(p),l=P(t),v&&v.l(t),h=_(),this.h()},h(){y(s,"class","svelte-iy9kc2"),y(a,"class","svelte-iy9kc2")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,i,e),f(t,a,e),u(a,c),f(t,l,e),v&&v.m(t,e),f(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(o,t[0]),2&e&&m!==(m=t[1].message+"")&&x(c,m),t[2]&&t[1].stack?v?v.p(t,e):(v=$t(t),v.c(),v.m(h.parentNode,h)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&p(r),t&&p(s),t&&p(i),t&&p(a),t&&p(l),v&&v.d(t),t&&p(h)}}}function vt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class Et extends it{constructor(t){super(),ot(this,t,vt,_t,i,{status:0,error:1})}}function yt(t){let n,r;const s=[{segment:t[2][1]},t[4].props];var o=t[4].component;function i(t){let n={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var a=new o(i(t));return{c(){a&&tt(a.$$.fragment),n=_()},l(t){a&&et(a.$$.fragment,t),n=_()},m(t,e){a&&nt(a,t,e),f(t,n,e),r=!0},p(t,e){const r=20&e?Q(s,[4&e&&{segment:t[2][1]},16&e&&Z(t[4].props)]):{};if(160&e&&(r.$$scope={dirty:e,ctx:t}),o!==(o=t[4].component)){if(a){G();const t=a;X(t.$$.fragment,1,0,()=>{rt(t,1)}),W()}o?(tt((a=new o(i(t))).$$.fragment),F(a.$$.fragment,1),nt(a,n.parentNode,n)):a=null}else o&&a.$set(r)},i(t){r||(a&&F(a.$$.fragment,t),r=!0)},o(t){a&&X(a.$$.fragment,t),r=!1},d(t){t&&p(n),a&&rt(a,t)}}}function wt(t){let e;const n=new Et({props:{error:t[0],status:t[1]}});return{c(){tt(n.$$.fragment)},l(t){et(n.$$.fragment,t)},m(t,r){nt(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){rt(n,t)}}}function St(t){let n,r;const s=[t[5].props];var o=t[5].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var a=new o(i());return{c(){a&&tt(a.$$.fragment),n=_()},l(t){a&&et(a.$$.fragment,t),n=_()},m(t,e){a&&nt(a,t,e),f(t,n,e),r=!0},p(t,e){const r=32&e?Q(s,[Z(t[5].props)]):{};if(o!==(o=t[5].component)){if(a){G();const t=a;X(t.$$.fragment,1,0,()=>{rt(t,1)}),W()}o?(tt((a=new o(i())).$$.fragment),F(a.$$.fragment,1),nt(a,n.parentNode,n)):a=null}else o&&a.$set(r)},i(t){r||(a&&F(a.$$.fragment,t),r=!0)},o(t){a&&X(a.$$.fragment,t),r=!1},d(t){t&&p(n),a&&rt(a,t)}}}function bt(t){let e,n,r=t[5]&&St(t);return{c(){r&&r.c(),e=_()},l(t){r&&r.l(t),e=_()},m(t,s){r&&r.m(t,s),f(t,e,s),n=!0},p(t,n){t[5]?r?(r.p(t,n),F(r,1)):(r=St(t),r.c(),F(r,1),r.m(e.parentNode,e)):r&&(G(),X(r,1,1,()=>{r=null}),W())},i(t){n||(F(r),n=!0)},o(t){X(r),n=!1},d(t){r&&r.d(t),t&&p(e)}}}function Pt(t){let e,n,r,s;const o=[wt,yt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=_()},l(t){n.l(t),r=_()},m(t,n){i[e].m(t,n),f(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(G(),X(i[c],1,1,()=>{i[c]=null}),W(),n=i[e],n||(n=i[e]=o[e](t),n.c()),F(n,1),n.m(r.parentNode,r))},i(t){s||(F(n),s=!0)},o(t){X(n),s=!1},d(t){i[e].d(t),t&&p(r)}}}function xt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Pt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new gt({props:s});return{c(){tt(o.$$.fragment)},l(t){et(o.$$.fragment,t)},m(t,e){nt(o,t,e),n=!0},p(t,[e]){const n=12&e?Q(r,[4&e&&{segment:t[2][0]},8&e&&Z(t[3].props)]):{};183&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(F(o.$$.fragment,t),n=!0)},o(t){X(o.$$.fragment,t),n=!1},d(t){rt(o,t)}}}function At(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{level2:l=null}=e;var u,f;return u=lt,f=r,j().$$.context.set(u,f),t.$set=t=>{"stores"in t&&n(6,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"level2"in t&&n(5,l=t.level2)},[s,o,i,a,c,l,r]}class Lt extends it{constructor(t){super(),ot(this,t,At,xt,i,{stores:6,error:0,status:1,segments:2,level0:3,level1:4,level2:5})}}const kt=[/^\/wiki\/defaultSettings\/?$/,/^\/wiki\/devsnippets\/?$/],Rt=[{js:()=>import("./index.5b6ace2b.js"),css:["index.5b6ace2b.css","client.4bc4f657.css"]},{js:()=>import("./contact.e8f004d0.js"),css:["contact.e8f004d0.css","client.4bc4f657.css"]},{js:()=>import("./about.c5de849c.js"),css:["client.4bc4f657.css"]},{js:()=>import("./_layout.2747e2f3.js"),css:["_layout.2747e2f3.css","client.4bc4f657.css"]},{js:()=>import("./index.f5d43fa9.js"),css:["client.4bc4f657.css"]},{js:()=>import("./recommended-extensions.f92e9fc3.js"),css:["client.4bc4f657.css"]},{js:()=>import("./developer-guide.c8291869.js"),css:["developer-guide.c8291869.css","client.4bc4f657.css"]},{js:()=>import("./getting-started.6e3531fa.js"),css:["client.4bc4f657.css"]},{js:()=>import("./permissions.952017fc.js"),css:["client.4bc4f657.css"]},{js:()=>import("./resources.23c1bf19.js"),css:["client.4bc4f657.css"]},{js:()=>import("./whitelist.0301469c.js"),css:["client.4bc4f657.css"]},{js:()=>import("./ip-rules.201d9f40.js"),css:["client.4bc4f657.css"]},{js:()=>import("./headers.1edb36c4.js"),css:["headers.1edb36c4.css","client.4bc4f657.css"]},{js:()=>import("./options.52692e9b.js"),css:["client.4bc4f657.css"]},{js:()=>import("./profile.2d880af9.js"),css:["client.4bc4f657.css"]},{js:()=>import("./debug.ad6fe4b4.js"),css:["client.4bc4f657.css"]}],Ct=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/wiki\/?$/,parts:[{i:3},{i:4}]},{pattern:/^\/wiki\/recommended-extensions\/?$/,parts:[{i:3},{i:5}]},{pattern:/^\/wiki\/developer-guide\/?$/,parts:[{i:3},{i:6}]},{pattern:/^\/wiki\/getting-started\/?$/,parts:[{i:3},{i:7}]},{pattern:/^\/wiki\/permissions\/?$/,parts:[{i:3},{i:8}]},{pattern:/^\/wiki\/resources\/?$/,parts:[{i:3},{i:9}]},{pattern:/^\/wiki\/whitelist\/?$/,parts:[{i:3},{i:10}]},{pattern:/^\/wiki\/ip-rules\/?$/,parts:[{i:3},{i:11}]},{pattern:/^\/wiki\/headers\/?$/,parts:[{i:3},{i:12}]},{pattern:/^\/wiki\/options\/?$/,parts:[{i:3},{i:13}]},{pattern:/^\/wiki\/profile\/?$/,parts:[{i:3},{i:14}]},{pattern:/^\/wiki\/debug\/?$/,parts:[{i:3},{i:15}]}];function jt(t,e={replaceState:!1}){const n=Xt(new URL(t,document.baseURI));return n?(Gt[e.replaceState?"replaceState":"pushState"]({id:Kt},"",t),Qt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Ot="undefined"!=typeof __SAPPER__&&__SAPPER__;let Dt,Nt,Ht,qt=!1,It=[],Ut="{}";const Vt={page:ct({}),preloading:ct(null),session:ct(Ot&&Ot.session)};let Mt,Tt;Vt.session.subscribe(async t=>{if(Mt=t,!qt)return;Tt=!0;const e=Xt(new URL(location.href)),n=Nt={},{redirect:r,props:s,branch:o}=await te(e);n===Nt&&await Zt(r,o,s,e.page)});let Bt,Jt=null;let Kt,zt=1;const Gt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Wt={};function Ft(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Xt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ot.baseUrl))return null;let e=t.pathname.slice(Ot.baseUrl.length);if(""===e&&(e="/"),!kt.some(t=>t.test(e)))for(let n=0;n<Ct.length;n+=1){const r=Ct[n],s=r.pattern.exec(e);if(s){const n=Ft(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function Yt(){return{x:pageXOffset,y:pageYOffset}}async function Qt(t,e,n,r){if(e)Kt=e;else{const t=Yt();Wt[Kt]=t,e=Kt=++zt,Wt[Kt]=n?t:{x:0,y:0}}Kt=e,Dt&&Vt.preloading.set(!0);const s=Jt&&Jt.href===t.href?Jt.promise:te(t);Jt=null;const o=Nt={},{redirect:i,props:a,branch:c}=await s;if(o===Nt&&(await Zt(i,c,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Wt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Wt[Kt]=t,t&&scrollTo(t.x,t.y)}}async function Zt(t,e,n,r){if(t)return jt(t.location,{replaceState:!0});if(Vt.page.set(r),Vt.preloading.set(!1),Dt)Dt.$set(n);else{n.stores={page:{subscribe:Vt.page.subscribe},preloading:{subscribe:Vt.preloading.subscribe},session:Vt.session},n.level0={props:await Ht};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ne(t.nextSibling);ne(t),ne(e)}Dt=new Lt({target:Bt,props:n,hydrate:!0})}It=e,Ut=JSON.stringify(r.query),qt=!0,Tt=!1}async function te(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let a;Ht||(Ht=Ot.preloaded[0]||ut.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Mt));let c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Ut)return!0;const s=It[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const p=c++;if(!Tt&&!u&&It[a]&&It[a].part===e.i)return It[a];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ee);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Rt[e.i]);let m;return m=qt||!Ot.preloaded[a+1]?d?await d.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Mt):{}:Ot.preloaded[a+1],o[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}function ee(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ne(t){t.parentNode.removeChild(t)}function re(t){const e=Xt(new URL(t,document.baseURI));if(e)return Jt&&t===Jt.href||function(t,e){Jt={href:t,promise:e}}(t,te(e)),Jt.promise}let se;function oe(t){clearTimeout(se),se=setTimeout(()=>{ie(t)},20)}function ie(t){const e=ce(t.target);e&&"prefetch"===e.rel&&re(e.href)}function ae(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Xt(s);if(o){Qt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Gt.pushState({id:Kt},"",s.href)}}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function le(t){if(Wt[Kt]=Yt(),t.state){const e=Xt(new URL(location.href));e?Qt(e,t.state.id):location.href=location.href}else zt=zt+1,function(t){Kt=t}(zt),Gt.replaceState({id:Kt},"",location.href)}var ue;ue={target:document.querySelector("#sapper")},"scrollRestoration"in Gt&&(Gt.scrollRestoration="manual"),function(t){Bt=t}(ue.target),addEventListener("click",ae),addEventListener("popstate",le),addEventListener("touchstart",ie),addEventListener("mousemove",oe),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Gt.replaceState({id:zt},"",e);const n=new URL(location.href);if(Ot.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:i,error:a}=Ot;Ht||(Ht=o&&o[0]),Zt(null,[],{error:a,status:i,session:s,level0:{props:Ht},level1:{props:{status:i,error:a},component:Et},segments:o},{host:e,path:n,query:Ft(r),params:{}})}();const r=Xt(n);return r?Qt(r,zt,!0,t):void 0});export{m as A,Y as B,E as C,x as D,_ as E,a as F,c as G,l as H,N as I,G as J,W as K,k as L,s as M,it as S,w as a,y as b,S as c,p as d,d as e,f,$ as g,P as h,ot as i,u as j,h as k,v as l,g as m,t as n,tt as o,b as p,L as q,et as r,i as s,A as t,nt as u,F as v,X as w,rt as x,O as y,jt as z};
