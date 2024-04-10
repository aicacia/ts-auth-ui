import{_ as ie}from"../chunks/preload-helper.D6kgxu3v.js";import{l as le,a as Y,d as ce,s as fe}from"../chunks/i18n-svelte.BQ-05D1a.js";import{f as V,m as ue,h as me,j as de,s as z,d as y,e as O,a as j,u as q,g as A,b as F,n as Q,c as _e,v as ge}from"../chunks/scheduler.DfWX43tP.js";import{d as ne,w as pe}from"../chunks/index.By0m1wDQ.js";import{M as he,N as $e,O as be,P as ve,S as T,i as B,c as k,d as w,m as N,o as g,p,q as L,e as I,s as U,t as ye,a as D,b as S,h as v,f as G,g as ke,j as R,B as C,k as P,l as E,v as we,x as re,y as se,n as Ne,Q as Le,R as Ce}from"../chunks/index.yw1ujjTK.js";import{l as Me}from"../chunks/localstorageWritable.Doa7Mqqg.js";import{e as Z,u as Ee,f as Ie}from"../chunks/each.BMLb9Nez.js";import{c as De,a as x}from"../chunks/index.BBqnKowN.js";import{r as Se,n as Oe}from"../chunks/notifications.DAgDia_a.js";import{I as H,g as J,a as K}from"../chunks/Icon.BqYKNaj_.js";import{C as Te}from"../chunks/circle-check.DPLRMjG-.js";function Be(o,e,n,t){if(!e)return V;const r=o.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return V;const{delay:s=0,duration:a=300,easing:f=ue,start:c=he()+s,end:i=c+a,tick:l=V,css:m}=n(o,{from:e,to:r},t);let $=!0,d=!1,b;function u(){m&&(b=be(o,0,1,a,s,f,m)),s||(d=!0)}function _(){m&&ve(o,b),$=!1}return $e(h=>{if(!d&&h>=c&&(d=!0),d&&h>=i&&(l(1,0),_()),!$)return!1;if(d){const M=h-c,X=0+1*f(M/a);l(X,1-X)}return!0}),u(),l(0,1),_}function Re(o){const e=getComputedStyle(o);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:t}=e,r=o.getBoundingClientRect();o.style.position="absolute",o.style.width=n,o.style.height=t,oe(o,r)}}function oe(o,e){const n=o.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const t=getComputedStyle(o),r=t.transform==="none"?"":t.transform;o.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}const Ve=o=>({}),je={en:()=>ie(()=>import("../chunks/index.Wn62H1aO.js"),[],import.meta.url)},qe=(o,e)=>Y[o]={...Y[o],...e},Ae=async o=>(await je[o]()).default,Fe=async o=>{qe(o,await Ae(o)),Pe(o)},Pe=o=>void(le[o]=Ve()),ae=pe(navigator.language),We=ne(ae,o=>o);function ze(o){ae.set(o)}window.addEventListener("languagechange",()=>{ze(navigator.language)});const Qe=!0,Ue=!0,Ge=async o=>{const e=ce(()=>[me(We)]);await Fe(e),fe(e)},Dt=Object.freeze(Object.defineProperty({__proto__:null,load:Ge,prerender:Qe,ssr:Ue},Symbol.toStringTag,{value:"Module"})),W=Me("theme",null),He=ne(W,o=>o);He.subscribe(e=>{const n=document.documentElement.classList;e==="light"?(n.remove("dark"),n.add("light")):(e==="dark"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(n.remove("light"),n.add("dark"))}),localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?W.set("dark"):W.set("light"));function Je(o,{from:e,to:n},t={}){const r=getComputedStyle(o),s=r.transform==="none"?"":r.transform,[a,f]=r.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*a/n.width-(n.left+a),i=e.top+e.height*f/n.height-(n.top+f),{delay:l=0,duration:m=d=>Math.sqrt(d)*120,easing:$=De}=t;return{delay:l,duration:de(m)?m(Math.sqrt(c*c+i*i)):m,easing:$,css:(d,b)=>{const u=b*c,_=b*i,h=d+b*e.width/n.width,M=d+b*e.height/n.height;return`transform: ${s} translate(${u}px, ${_}px) scale(${h}, ${M});`}}}function Ke(o){let e;const n=o[2].default,t=j(n,o,o[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&8)&&q(t,n,r,r[3],e?F(n,r[3],s,null):A(r[3]),null)},i(r){e||(g(t,r),e=!0)},o(r){p(t,r),e=!1},d(r){t&&t.d(r)}}}function Xe(o){let e,n;const t=[{name:"circle-x"},o[1],{iconNode:o[0]}];let r={$$slots:{default:[Ke]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)r=y(r,t[s]);return e=new H({props:r}),{c(){k(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){N(e,s,a),n=!0},p(s,[a]){const f=a&3?J(t,[t[0],a&2&&K(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){p(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function Ye(o,e,n){let{$$slots:t={},$$scope:r}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];return o.$$set=a=>{n(1,e=y(y({},e),O(a))),"$$scope"in a&&n(3,r=a.$$scope)},e=O(e),[s,e,t,r]}class Ze extends T{constructor(e){super(),B(this,e,Ye,Xe,z,{})}}function xe(o){let e;const n=o[2].default,t=j(n,o,o[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&8)&&q(t,n,r,r[3],e?F(n,r[3],s,null):A(r[3]),null)},i(r){e||(g(t,r),e=!0)},o(r){p(t,r),e=!1},d(r){t&&t.d(r)}}}function et(o){let e,n;const t=[{name:"info"},o[1],{iconNode:o[0]}];let r={$$slots:{default:[xe]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)r=y(r,t[s]);return e=new H({props:r}),{c(){k(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){N(e,s,a),n=!0},p(s,[a]){const f=a&3?J(t,[t[0],a&2&&K(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){p(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function tt(o,e,n){let{$$slots:t={},$$scope:r}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];return o.$$set=a=>{n(1,e=y(y({},e),O(a))),"$$scope"in a&&n(3,r=a.$$scope)},e=O(e),[s,e,t,r]}class nt extends T{constructor(e){super(),B(this,e,tt,et,z,{})}}function rt(o){let e;const n=o[2].default,t=j(n,o,o[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&8)&&q(t,n,r,r[3],e?F(n,r[3],s,null):A(r[3]),null)},i(r){e||(g(t,r),e=!0)},o(r){p(t,r),e=!1},d(r){t&&t.d(r)}}}function st(o){let e,n;const t=[{name:"triangle-alert"},o[1],{iconNode:o[0]}];let r={$$slots:{default:[rt]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)r=y(r,t[s]);return e=new H({props:r}),{c(){k(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){N(e,s,a),n=!0},p(s,[a]){const f=a&3?J(t,[t[0],a&2&&K(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){p(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function ot(o,e,n){let{$$slots:t={},$$scope:r}=e;const s=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];return o.$$set=a=>{n(1,e=y(y({},e),O(a))),"$$scope"in a&&n(3,r=a.$$scope)},e=O(e),[s,e,t,r]}class at extends T{constructor(e){super(),B(this,e,ot,st,z,{})}}function it(o){let e,n;return e=new at({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){N(e,t,r),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function lt(o){let e,n;return e=new nt({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){N(e,t,r),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function ct(o){let e,n;return e=new Te({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){N(e,t,r),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function ft(o){let e,n;return e=new Ze({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){N(e,t,r),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function ut(o){let e,n,t,r,s,a,f=o[0].message+"",c,i,l,m;const $=[ft,ct,lt,it],d=[];function b(u,_){return u[0].type==="error"?0:u[0].type==="success"?1:u[0].type==="info"?2:u[0].type==="warning"?3:-1}return~(t=b(o))&&(r=d[t]=$[t](o)),{c(){e=I("button"),n=I("div"),r&&r.c(),s=U(),a=I("div"),c=ye(f),this.h()},l(u){e=D(u,"BUTTON",{class:!0});var _=S(e);n=D(_,"DIV",{class:!0});var h=S(n);r&&r.l(h),h.forEach(v),s=G(_),a=D(_,"DIV",{class:!0});var M=S(a);c=ke(M,f),M.forEach(v),_.forEach(v),this.h()},h(){R(n,"class","w-6 h-6 mr-2 text-white"),R(a,"class","text-white flex-grow text-left"),R(e,"class","flex flex-row flex-grow items-center py-2 px-3 m-1 cursor-pointer shadow"),C(e,"bg-green-600",o[0].type==="success"),C(e,"bg-red-600",o[0].type==="error"),C(e,"bg-blue-600",o[0].type==="info"),C(e,"bg-yellow-600",o[0].type==="warning")},m(u,_){P(u,e,_),E(e,n),~t&&d[t].m(n,null),E(e,s),E(e,a),E(a,c),i=!0,l||(m=we(e,"click",o[1]),l=!0)},p(u,[_]){let h=t;t=b(u),t!==h&&(r&&(re(),p(d[h],1,1,()=>{d[h]=null}),se()),~t?(r=d[t],r||(r=d[t]=$[t](u),r.c()),g(r,1),r.m(n,null)):r=null),(!i||_&1)&&f!==(f=u[0].message+"")&&Ne(c,f),(!i||_&1)&&C(e,"bg-green-600",u[0].type==="success"),(!i||_&1)&&C(e,"bg-red-600",u[0].type==="error"),(!i||_&1)&&C(e,"bg-blue-600",u[0].type==="info"),(!i||_&1)&&C(e,"bg-yellow-600",u[0].type==="warning")},i(u){i||(g(r),i=!0)},o(u){p(r),i=!1},d(u){u&&v(e),~t&&d[t].d(),l=!1,m()}}}function mt(o,e,n){let{notification:t}=e;function r(){Se(t.id)}return o.$$set=s=>{"notification"in s&&n(0,t=s.notification)},[t,r]}class dt extends T{constructor(e){super(),B(this,e,mt,ut,Q,{notification:0})}}function ee(o,e,n){const t=o.slice();return t[1]=e[n],t}function te(o,e){let n,t,r,s,a,f,c=V,i;return t=new dt({props:{notification:e[1]}}),{key:o,first:null,c(){n=I("div"),k(t.$$.fragment),r=U(),this.h()},l(l){n=D(l,"DIV",{});var m=S(n);w(t.$$.fragment,m),r=G(m),m.forEach(v),this.h()},h(){this.first=n},m(l,m){P(l,n,m),N(t,n,null),E(n,r),i=!0},p(l,m){e=l;const $={};m&1&&($.notification=e[1]),t.$set($)},r(){f=n.getBoundingClientRect()},f(){Re(n),c(),oe(n,f)},a(){c(),c=Be(n,f,Je,{})},i(l){i||(g(t.$$.fragment,l),l&&ge(()=>{i&&(a&&a.end(1),s=Le(n,x,{y:-64,duration:300}),s.start())}),i=!0)},o(l){p(t.$$.fragment,l),s&&s.invalidate(),l&&(a=Ce(n,x,{y:-64,duration:300})),i=!1},d(l){l&&v(n),L(t),l&&a&&a.end()}}}function _t(o){let e,n,t=[],r=new Map,s,a=Z(o[0]);const f=c=>c[1].id;for(let c=0;c<a.length;c+=1){let i=ee(o,a,c),l=f(i);r.set(l,t[c]=te(l,i))}return{c(){e=I("div"),n=I("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=D(c,"DIV",{class:!0});var i=S(e);n=D(i,"DIV",{class:!0});var l=S(n);for(let m=0;m<t.length;m+=1)t[m].l(l);l.forEach(v),i.forEach(v),this.h()},h(){R(n,"class","flex flex-col"),R(e,"class","fixed left-1/2 top-0 z-[100000] -translate-x-1/2")},m(c,i){P(c,e,i),E(e,n);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,null);s=!0},p(c,[i]){if(i&1){a=Z(c[0]),re();for(let l=0;l<t.length;l+=1)t[l].r();t=Ee(t,i,f,1,c,a,r,n,Ie,te,null,ee);for(let l=0;l<t.length;l+=1)t[l].a();se()}},i(c){if(!s){for(let i=0;i<a.length;i+=1)g(t[i]);s=!0}},o(c){for(let i=0;i<t.length;i+=1)p(t[i]);s=!1},d(c){c&&v(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function gt(o,e,n){let t;return _e(o,Oe,r=>n(0,t=r)),[t]}class pt extends T{constructor(e){super(),B(this,e,gt,_t,Q,{})}}function ht(o){let e,n,t;const r=o[1].default,s=j(r,o,o[0],null);return n=new pt({}),{c(){s&&s.c(),e=U(),k(n.$$.fragment)},l(a){s&&s.l(a),e=G(a),w(n.$$.fragment,a)},m(a,f){s&&s.m(a,f),P(a,e,f),N(n,a,f),t=!0},p(a,[f]){s&&s.p&&(!t||f&1)&&q(s,r,a,a[0],t?F(r,a[0],f,null):A(a[0]),null)},i(a){t||(g(s,a),g(n.$$.fragment,a),t=!0)},o(a){p(s,a),p(n.$$.fragment,a),t=!1},d(a){a&&v(e),s&&s.d(a),L(n,a)}}}function $t(o,e,n){let{$$slots:t={},$$scope:r}=e;return o.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,t]}class St extends T{constructor(e){super(),B(this,e,$t,ht,Q,{})}}export{St as component,Dt as universal};
