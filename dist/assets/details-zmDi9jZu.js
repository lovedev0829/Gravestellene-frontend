import{aY as S,j as e,S as r,i as O,R as y,d as o,B as D,a7 as w,c as x,aZ as R,a_ as E,T as m,aQ as T,g as I,n as A,A as L,G as f,ag as d,h as _,e4 as z,r as g,b6 as G,e5 as H,b7 as M,k as N,C as F,p as k,e6 as U,H as V}from"./index-tWxiFnGS.js";import{u as $}from"./use-params-59QOvwaZ.js";import"./_baseToString-x3HkMGK8.js";import"./mui-one-time-password-input.es-gTOf3O1q.js";import"./image-IKMP3f3C.js";import"./styles-XJdAXeAG.js";import{L as J}from"./LoadingButton-IJmnI-vK.js";import{f as Q}from"./format-number-JDM7uL47.js";import{M as W}from"./markdown-zmf8qjlj.js";import{C}from"./Card-ZKq7ZSof.js";import{C as P}from"./Chip-GwdZ9V2U.js";import"./TextField-uP2c0lAh.js";import"./CircularProgress-u_0a79Ly.js";import"./styles-FUtiznR6.js";function Y({publish:s,backLink:n,editLink:a,liveLink:h,publishOptions:j,onChangePublish:p,sx:b,...u}){const c=S();return e.jsxs(e.Fragment,{children:[e.jsxs(r,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...b},...u,children:[e.jsx(O,{component:y,href:n,startIcon:e.jsx(o,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(D,{sx:{flexGrow:1}}),s==="published"&&e.jsx(w,{title:"Go Live",children:e.jsx(x,{component:y,href:h,children:e.jsx(o,{icon:"eva:external-link-fill"})})}),e.jsx(w,{title:"Edit",children:e.jsx(x,{component:y,href:a,children:e.jsx(o,{icon:"solar:pen-bold"})})}),e.jsx(J,{color:"inherit",variant:"contained",loading:!s,loadingIndicator:"Loading…",endIcon:e.jsx(o,{icon:"eva:arrow-ios-downward-fill"}),onClick:c.onOpen,sx:{textTransform:"capitalize"},children:s})]}),e.jsx(R,{open:c.open,onClose:c.onClose,arrow:"top-right",sx:{width:140},children:j.map(l=>e.jsxs(E,{selected:l.value===s,onClick:()=>{c.onClose(),p(l.value)},children:[l.value==="published"&&e.jsx(o,{icon:"eva:cloud-upload-fill"}),l.value==="draft"&&e.jsx(o,{icon:"solar:file-text-bold"}),l.label]},l.value))})]})}function Z({job:s}){const{title:n,skills:a,salary:h,content:j,benefits:p,createdAt:b,experience:u,expiredDate:c,employmentTypes:l}=s,i=e.jsxs(r,{component:C,spacing:3,sx:{p:3},children:[e.jsx(m,{variant:"h4",children:n}),e.jsx(W,{children:j}),e.jsxs(r,{spacing:2,children:[e.jsx(m,{variant:"h6",children:"Skills"}),e.jsx(r,{direction:"row",alignItems:"center",spacing:1,children:a.map(t=>e.jsx(P,{label:t,variant:"soft"},t))})]}),e.jsxs(r,{spacing:2,children:[e.jsx(m,{variant:"h6",children:"Benefits"}),e.jsx(r,{direction:"row",alignItems:"center",spacing:1,children:p.map(t=>e.jsx(P,{label:t,variant:"soft"},t))})]})]}),v=e.jsx(r,{component:C,spacing:2,sx:{p:3},children:[{label:"Date Posted",value:T(b),icon:e.jsx(o,{icon:"solar:calendar-date-bold"})},{label:"Expiration date",value:T(c),icon:e.jsx(o,{icon:"solar:calendar-date-bold"})},{label:"Employment type",value:l,icon:e.jsx(o,{icon:"solar:clock-circle-bold"})},{label:"Offered salary",value:h.negotiable?"Negotiable":Q(h.price),icon:e.jsx(o,{icon:"solar:wad-of-money-bold"})},{label:"Experience",value:u,icon:e.jsx(o,{icon:"carbon:skill-level-basic"})}].map(t=>e.jsxs(r,{spacing:1.5,direction:"row",children:[t.icon,e.jsx(I,{primary:t.label,secondary:t.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{typography:"subtitle2",color:"text.primary",component:"span"}})]},t.label))}),B=e.jsxs(r,{component:A,variant:"outlined",spacing:2,direction:"row",sx:{p:3,borderRadius:2,mt:3},children:[e.jsx(L,{alt:s.company.name,src:s.company.logo,variant:"rounded",sx:{width:64,height:64}}),e.jsxs(r,{spacing:1,children:[e.jsx(m,{variant:"subtitle1",children:s.company.name}),e.jsx(m,{variant:"body2",children:s.company.fullAddress}),e.jsx(m,{variant:"body2",children:s.company.phoneNumber})]})]});return e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:8,children:i}),e.jsxs(f,{xs:12,md:4,children:[v,B]})]})}function q({candidates:s}){return e.jsx(D,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:s.map(n=>e.jsxs(r,{component:C,direction:"row",spacing:2,sx:{p:3},children:[e.jsx(x,{sx:{position:"absolute",top:8,right:8},children:e.jsx(o,{icon:"eva:more-vertical-fill"})}),e.jsx(L,{alt:n.name,src:n.avatarUrl,sx:{width:48,height:48}}),e.jsxs(r,{spacing:2,children:[e.jsx(I,{primary:n.name,secondary:n.role,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(r,{spacing:1,direction:"row",children:[e.jsx(x,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:a=>d(a.palette.error.main,.08),"&:hover":{bgcolor:a=>d(a.palette.error.main,.16)}},children:e.jsx(o,{width:18,icon:"solar:phone-bold"})}),e.jsx(x,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:a=>d(a.palette.info.main,.08),"&:hover":{bgcolor:a=>d(a.palette.info.main,.16)}},children:e.jsx(o,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(x,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:a=>d(a.palette.primary.main,.08),"&:hover":{bgcolor:a=>d(a.palette.primary.main,.16)}},children:e.jsx(o,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(w,{title:"Download CV",children:e.jsx(x,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:a=>d(a.palette.secondary.main,.08),"&:hover":{bgcolor:a=>d(a.palette.secondary.main,.16)}},children:e.jsx(o,{width:18,icon:"eva:cloud-download-fill"})})})]})]})]},n.id))})}function K({id:s}){const n=_(),a=z.filter(i=>i.id===s)[0],[h,j]=g.useState(a==null?void 0:a.publish),[p,b]=g.useState("content"),u=g.useCallback((i,v)=>{b(v)},[]),c=g.useCallback(i=>{j(i)},[]),l=e.jsx(G,{value:p,onChange:u,sx:{mb:{xs:3,md:5}},children:H.map(i=>e.jsx(M,{iconPosition:"end",value:i.value,label:i.label,icon:i.value==="candidates"?e.jsx(N,{variant:"filled",children:a==null?void 0:a.candidates.length}):""},i.value))});return e.jsxs(F,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(Y,{backLink:k.dashboard.job.root,editLink:k.dashboard.job.edit(`${a==null?void 0:a.id}`),liveLink:"#",publish:h||"",onChangePublish:c,publishOptions:U}),l,p==="content"&&e.jsx(Z,{job:a}),p==="candidates"&&e.jsx(q,{candidates:a==null?void 0:a.candidates})]})}function he(){const s=$(),{id:n}=s;return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("title",{children:" Dashboard: Job Details"})}),e.jsx(K,{id:`${n}`})]})}export{he as default};
