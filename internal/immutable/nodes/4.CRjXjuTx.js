import{b as f}from"../chunks/paths.C24qRk1J.js";import{E as u,i as p}from"../chunks/user.D_r2oU66.js";import{r as c}from"../chunks/index.De_1-CT6.js";import{h as m}from"../chunks/errors.8vFLI_ic.js";import{w as _}from"../chunks/index.S6EU6auF.js";import{d as g,w as d}from"../chunks/index.6SKR3riS.js";import{e as w,f as C,a as I,u as D,g as b,b as $}from"../chunks/scheduler.Co-indjX.js";import{S as v,i as y,o as h,p as S}from"../chunks/index.DgSvAhbJ.js";const a=d(null),s=new u;let l=!1;const E=g(a,t=>t);function O(){return l?Promise.resolve(w(E)):new Promise(t=>s.once("openIDConfiguration",t))}async function P(){try{const t=await _.openidConfiguration();a.set(t),l=!0,s.emit("openIDConfiguration",t)}catch(t){await m(t)}}P();const j=async t=>{if(await t.parent(),p())c(302,`${f}/`);else return{openIDConfiguration:await O()}},B=Object.freeze(Object.defineProperty({__proto__:null,load:j},Symbol.toStringTag,{value:"Module"}));function L(t){let n;const r=t[1].default,o=I(r,t,t[0],null);return{c(){o&&o.c()},l(e){o&&o.l(e)},m(e,i){o&&o.m(e,i),n=!0},p(e,[i]){o&&o.p&&(!n||i&1)&&D(o,r,e,e[0],n?$(r,e[0],i,null):b(e[0]),null)},i(e){n||(h(o,e),n=!0)},o(e){S(o,e),n=!1},d(e){o&&o.d(e)}}}function q(t,n,r){let{$$slots:o={},$$scope:e}=n;return t.$$set=i=>{"$$scope"in i&&r(0,e=i.$$scope)},[e,o]}class G extends v{constructor(n){super(),y(this,n,q,L,C,{})}}export{G as component,B as universal};