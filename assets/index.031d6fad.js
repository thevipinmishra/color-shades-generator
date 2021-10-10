import{j as p,r as u,c,l as C,v as S,R as F,a as j}from"./vendor.75e97968.js";const w=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function d(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=d(r);fetch(r.href,t)}};w();var L="/color-shades-generator/assets/plate.ced9ba33.svg";const e=p.exports.jsx,s=p.exports.jsxs,k=p.exports.Fragment,O=()=>{const[o,n]=u.exports.useState(""),[d,i]=u.exports.useState([]),[r,t]=u.exports.useState(!1),l=a=>{i([]),n(a.target.value)},f=a=>/^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(a),g=(a,y)=>{a.preventDefault();const m=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1],x=m.map(h=>c(o).lighten(h).hex()),N=m.map(h=>c(o).darken(h).hex()),b=[...x,...N];i(b)},v=()=>{t(!0),setTimeout(()=>t(!1),500)};return s("div",{className:"app",children:[s("header",{className:"page-header",children:[e("h1",{className:"headline",children:"Color Shades Generator \u{1F355}"}),e("p",{className:"description",children:"Put any Hex Color Code (3 or 6 digit) and you'll get 20 different shades!"})]}),e("div",{className:"color-input",onSubmit:g,children:s("form",{children:[s("div",{className:"input-group",children:[e("input",{type:"text",value:o,placeholder:"#2c3e50",onChange:l,spellCheck:!1,autoFocus:!0}),e("input",{type:"submit",value:"Get Shades",disabled:!f(o)})]}),e("p",{className:"input-helper-text",children:"Only Hex Colors Allowed, eg. #ddd, #2c3e50 etc."})]})}),d.length>0?s(k,{children:[s("div",{className:"color-info wrapper",children:[s("div",{className:"color-type info-box",children:[e("h5",{children:"Color Type"}),e("p",{children:o&&c(o).isDark()?"Dark":"Light"})]}),s("div",{className:"color-luminosity info-box",children:[e("h5",{children:"HSL Value"}),e("p",{children:o&&c(o).hsl().string(0)})]}),s("div",{className:"color-contrast info-box",children:[e("h5",{children:"RBG Value"}),s("p",{children:[" ",o&&c(o).rgb().toString()]})]})]}),e("div",{className:"shades-grid wrapper",children:d.map(a=>e(C.CopyToClipboard,{text:a,onCopy:()=>v(),children:s("div",{className:"shade-item",children:[e("div",{className:"preview",style:{background:a}}),e("span",{className:"color-code",children:a})]})},S()))})]}):s("div",{className:"loading-placeholder wrapper",children:[e("img",{src:L,alt:"",width:"200",height:"200"}),e("h3",{children:"Waiting for a Color Input..."})]}),e("footer",{className:"site-footer",children:s("p",{children:["Made using \u2328\uFE0F and \u{1F42D} by"," ",e("a",{href:"https://github.com/thevipinmishra",children:"Vipin Mishra"})]})}),r&&e("p",{className:"copy-status",children:"\u{1F389} Copied"})]})};F.render(e(j.StrictMode,{children:e(O,{})}),document.getElementById("root"));
