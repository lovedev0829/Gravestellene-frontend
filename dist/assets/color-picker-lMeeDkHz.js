import{r as x,j as n,S as u,as as g,ag as o,d as w}from"./index-lMmDPpwH.js";const j=x.forwardRef(({colors:p,selected:s,onSelectColor:r,limit:d="auto",sx:h,...l},f)=>{const e=typeof s=="string",c=x.useCallback(t=>{if(e)t!==s&&r(t);else{const a=s.includes(t)?s.filter(i=>i!==t):[...s,t];r(a)}},[r,s,e]);return n.jsx(u,{ref:f,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...d!=="auto"&&{width:d*36,justifyContent:"flex-end"},...h},...l,children:p.map(t=>{const a=e?s===t:s.includes(t);return n.jsx(g,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{c(t)},children:n.jsx(u,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:t,borderRadius:"50%",border:i=>`solid 1px ${o(i.palette.grey[500],.16)}`,...a&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${o(t,.48)}`,outline:`solid 2px ${o(t,.08)}`,transition:i=>i.transitions.create("all",{duration:i.transitions.duration.shortest})}},children:n.jsx(w,{width:a?12:0,icon:"eva:checkmark-fill",sx:{color:i=>i.palette.getContrastText(t),transition:i=>i.transitions.create("all",{duration:i.transitions.duration.shortest})}})})},t)})})}),b=j;export{b as C};