import{Framework7 as h,DeviceModule as j,SupportModule as x,UtilsModule as E,ResizeModule as S,RequestModule as C,TouchModule as $,ClicksModule as I,RouterModule as N,HistoryModule as R,ServiceWorkerModule as T,StoreModule as P,Statusbar as z,View as D,Navbar as U,Toolbar as q,Subnavbar as F,TouchRipple as H,Modal$1 as K}from"./modal.9ea17b76.js";h.use([j,x,E,S,C,$,I,N,R,T,P,z,D,U,q,F,H,K]);function X(e){const t={};return Object.keys(e).forEach(o=>{typeof e[o]<"u"&&(t[o]=e[o])}),t}function Y(e){return typeof e=="string"&&e!==""}function a(e){return typeof e=="object"&&e!==null&&e.constructor&&e.constructor===Object}function g(){return Date.now()}function b(){let e=!0,t,o;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];typeof n[0]=="boolean"?([e,t]=n,n.splice(0,2),o=n):([t]=n,n.splice(0,1),o=n);for(let c=0;c<o.length;c+=1){const f=n[c];if(f!=null){const A=Object.keys(Object(f));for(let p=0,M=A.length;p<M;p+=1){const u=A[p],O=Object.getOwnPropertyDescriptor(f,u);O!==void 0&&O.enumerable&&(e?a(t[u])&&a(f[u])?b(t[u],f[u]):!a(t[u])&&a(f[u])?(t[u]={},b(t[u],f[u])):t[u]=f[u]:t[u]=f[u])}}}return t}function V(){const e=[];for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return o.forEach(n=>{Array.isArray(n)?e.push(...V(...n)):e.push(n)}),e}function Z(){const e=[];for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];o.forEach(i=>{typeof i=="object"&&i.constructor===Object?Object.keys(i).forEach(c=>{i[c]&&e.push(c)}):i&&e.push(i)});const n=[];return e.forEach(i=>{n.indexOf(i)<0&&n.push(i)}),n.join(" ")}function _(e){e===void 0&&(e={});const t={};if(!e)return t;const o=e.children;if(!o||o.length===0)return t;function r(n,i){t[n]||(t[n]=[]),t[n].push(i)}if(Array.isArray(o))o.forEach(n=>{if(!n)return;const i=n.props&&n.props.slot||"default";r(i,n)});else{let n="default";o.props&&o.props.slot&&(n=o.props.slot),r(n,o)}return t}function k(e,t){for(var o=arguments.length,r=new Array(o>2?o-2:0),n=2;n<o;n++)r[n-2]=arguments[n];!t||!t.trim().length||typeof t!="string"||t.trim().split(" ").forEach(i=>{let c=(i||"").trim();if(!c)return;c=c.charAt(0).toUpperCase()+c.slice(1);const f=`on${c}`;e[f]&&e[f](...r)})}function ee(e){e===void 0&&(e={});const t={};return Object.keys(e).forEach(o=>{(o.indexOf("data-")===0||o.indexOf("aria-")===0||o==="role")&&(t[o]=e[o])}),t}let v=0,w=0;function W(){v=0,w=0}function te(){return v+=1,`${g()}_${v}`}function ne(){return w+=1,`${g()}_${w}`}let s,d;const l={},m={views:[],tabs:[],modals:null},y=()=>{!s||(l.ios=s.theme==="ios",l.md=s.theme==="md",l.aurora=s.theme==="aurora")},B=()=>{W(),delete l.ios,delete l.md,delete l.aurora,m.views=[],m.tabs=[],m.modals=null},G=()=>{d=new h.Events},J=function(e,t,o){t===void 0&&(t={}),o===void 0&&(o=!0);const r=b({},t,{el:e,init:o});if(typeof t.store<"u"&&(r.store=t.store),r.routes||(r.routes=[]),r.userAgent&&(r.theme==="auto"||!r.theme)){const i=h.getDevice({userAgent:r.userAgent},!0);l.ios=!!i.ios,l.aurora=i.desktop&&i.electron,l.md=!l.ios&&!l.aurora}if(s&&typeof window<"u")return;typeof window>"u"&&B();const n=new h(r);s=n,y(),n.initialized?(s=n,d.emit("ready",s)):n.on("init",()=>{s=n,d.emit("ready",s)})},L=e=>{!e||(s&&s.initialized?e(s):d.once("ready",e))},oe=Object.freeze(Object.defineProperty({__proto__:null,get f7(){return s},theme:l,f7ready:L,get f7events(){return d},f7init:J,f7routers:m,f7initEvents:G,setTheme:y},Symbol.toStringTag,{value:"Module"}));export{Z as classNames,k as emit,b as extend,s as f7,oe as f7$1,d as f7events,J as f7init,G as f7initEvents,L as f7ready,m as f7routers,V as flattenArray,ne as getComponentId,ee as getExtraAttrs,te as getRouterId,_ as getSlots,Y as isStringProp,X as noUndefinedProps,y as setTheme,l as theme};
