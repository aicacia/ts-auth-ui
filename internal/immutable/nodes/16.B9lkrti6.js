import{g as i}from"../chunks/user.DQOc7f90.js";import{r as o}from"../chunks/index.De_1-CT6.js";import{b as t}from"../chunks/paths.DexXX8xc.js";import{c as a}from"../chunks/notifications.Bl8Tb2ID.js";const c=!1,n=async e=>{await e.parent();const s=await i(),r=e.url.searchParams.get("code");s?(a("Authorized.","success"),o(302,`${t}/oauth2/authorize?code=${r}`)):(a("Sign in.","info"),o(302,`${t}/signin?code=${r}`))},m=Object.freeze(Object.defineProperty({__proto__:null,load:n,prerender:c},Symbol.toStringTag,{value:"Module"}));export{m as universal};