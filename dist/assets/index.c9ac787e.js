import{j as p,r as a,a as h,R as y,b as g}from"./vendor.ab77013a.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};x();const s=p.exports.jsx,l=p.exports.jsxs,f=p.exports.Fragment;function v(){const[c,n]=a.exports.useState(""),[o,i]=a.exports.useState("pikachu"),[e,t]=a.exports.useState(""),[r,m]=a.exports.useState("");return a.exports.useEffect(()=>{async function d(){let u=await h.get(`https://pokeapi.co/api/v2/pokemon/${o}`);console.log(u),t(u.data.sprites.front_default),m(u.data.types[0].type.name)}d()},[o]),s(f,{children:l("div",{className:"card",children:[l("div",{class:"inline-block relative text-gray-600 focus-within:text-gray-400",children:[s("span",{class:"absolute inset-y-0 left-0 flex items-center pr-2",children:s("button",{onClick:()=>{c!==""&&i(c),n("")},class:"p-1 focus:outline-none focus:shadow-outline",children:s("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",class:"w-6 h-6",children:s("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),s("input",{type:"text",onChange:d=>{n(d.target.value)},value:c,class:"shadow py-2 text-sm text-black rounded-md pl-10 focus:outline-none ",placeholder:"Search..."})]}),s("div",{className:"back",children:l("div",{className:"card",children:[s("img",{src:`${e}`,alt:""}),s("div",{className:"name",children:o}),l("div",{className:"type",children:["type: ",r]})]})})]})})}function k(){return s(f,{children:s(v,{})})}y.render(s(g.StrictMode,{children:s(k,{})}),document.getElementById("root"));