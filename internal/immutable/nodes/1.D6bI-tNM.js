import{n as I,c as S}from"../chunks/scheduler.Bd7mgcTo.js";import{S as V,i as j,e as _,c as C,s as x,t as H,a as h,b as g,d as P,f as E,g as q,h as f,j as w,k as y,m as z,l as m,n as D,o as A,p as B,q as F}from"../chunks/index.OZdkVM2I.js";import{H as G,p as J}from"../chunks/Header.D9IGo_Gz.js";function k(i){let e,s=i[0].error.message+"",l;return{c(){e=_("p"),l=H(s)},l(t){e=h(t,"P",{});var n=g(e);l=q(n,s),n.forEach(f)},m(t,n){y(t,e,n),m(e,l)},p(t,n){n&1&&s!==(s=t[0].error.message+"")&&D(l,s)},d(t){t&&f(e)}}}function K(i){var $;let e,s,l,t,n,u=i[0].status+"",d,v,p;s=new G({});let a=(($=i[0].error)==null?void 0:$.message)&&k(i);return{c(){e=_("div"),C(s.$$.fragment),l=x(),t=_("div"),n=_("h3"),d=H(u),v=x(),a&&a.c(),this.h()},l(r){e=h(r,"DIV",{class:!0});var o=g(e);P(s.$$.fragment,o),l=E(o),t=h(o,"DIV",{class:!0});var c=g(t);n=h(c,"H3",{});var b=g(n);d=q(b,u),b.forEach(f),v=E(c),a&&a.l(c),c.forEach(f),o.forEach(f),this.h()},h(){w(t,"class","flex flex-grow flex-col w-full mx-4 sm:container sm:mx-auto mt-4 mb-16"),w(e,"class","flex flex-col w-full h-full")},m(r,o){y(r,e,o),z(s,e,null),m(e,l),m(e,t),m(t,n),m(n,d),m(t,v),a&&a.m(t,null),p=!0},p(r,[o]){var c;(!p||o&1)&&u!==(u=r[0].status+"")&&D(d,u),(c=r[0].error)!=null&&c.message?a?a.p(r,o):(a=k(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i(r){p||(A(s.$$.fragment,r),p=!0)},o(r){B(s.$$.fragment,r),p=!1},d(r){r&&f(e),F(s),a&&a.d()}}}function L(i,e,s){let l;return S(i,J,t=>s(0,l=t)),[l]}class Q extends V{constructor(e){super(),j(this,e,L,K,I,{})}}export{Q as component};