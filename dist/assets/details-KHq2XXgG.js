import{j as t,C as a,i as u,R as b,p as c,d as l,S as o,T as m,A as P,D as g,H as v}from"./index-tWxiFnGS.js";import{u as C}from"./use-params-59QOvwaZ.js";import"./_baseToString-x3HkMGK8.js";import"./index-BmPCeV31.js";import"./image-IKMP3f3C.js";import"./text-max-line-KSZ8FdRd.js";import"./mui-one-time-password-input.es-gTOf3O1q.js";import"./styles-XJdAXeAG.js";import"./styles-FUtiznR6.js";import{b as k}from"./format-number-JDM7uL47.js";import{b as L,c as w}from"./blog-lruuPbR6.js";import{M as y}from"./markdown-zmf8qjlj.js";import{E as F}from"./empty-content-EWjBl_hc.js";import{C as D}from"./custom-breadcrumbs-KrZlwwmW.js";import{P as A}from"./post-list-j_aNkgYZ.js";import{P as B,a as H}from"./post-comment-form-T2HulSSt.js";import{P as I}from"./post-details-hero-jJyW0ow7.js";import{P as S}from"./post-skeleton-X4-oGN3D.js";import{C as W}from"./Chip-GwdZ9V2U.js";import{F as $}from"./FormControlLabel-9P3vQTjQ.js";import{C as R}from"./Checkbox-2uRAcbWW.js";import{A as E}from"./AvatarGroup-jYSMjHGP.js";import"./TextField-uP2c0lAh.js";import"./Card-ZKq7ZSof.js";import"./CardContent-dY_bu6OV.js";import"./ListItem-oUX2xa2O.js";import"./Pagination-wsAaGHv3.js";import"./FirstPage-bDiu-5dM.js";import"./rhf-text-field-aVwXywRy.js";import"./LoadingButton-IJmnI-vK.js";import"./CircularProgress-u_0a79Ly.js";import"./Fab-E_KialRR.js";import"./Skeleton-ZFpo9lRw.js";import"./SwitchBase-AaRA2h92.js";function G({title:e}){const{post:s,postError:i,postLoading:d}=L(e),{latestPosts:n,latestPostsLoading:x}=w(e),p=t.jsx(S,{}),h=t.jsx(a,{sx:{my:10},children:t.jsx(F,{filled:!0,title:`${i==null?void 0:i.message}`,action:t.jsx(u,{component:b,href:c.post.root,startIcon:t.jsx(l,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}})}),j=s&&t.jsxs(t.Fragment,{children:[t.jsx(I,{title:s.title,author:s.author,coverUrl:s.coverUrl,createdAt:s.createdAt}),t.jsx(a,{maxWidth:!1,sx:{py:3,mb:5,borderBottom:r=>`solid 1px ${r.palette.divider}`},children:t.jsx(D,{links:[{name:"Home",href:"/"},{name:"Blog",href:c.post.root},{name:s==null?void 0:s.title}],sx:{maxWidth:720,mx:"auto"}})}),t.jsx(a,{maxWidth:!1,children:t.jsxs(o,{sx:{maxWidth:720,mx:"auto"},children:[t.jsx(m,{variant:"subtitle1",sx:{mb:5},children:s.description}),t.jsx(y,{children:s.content}),t.jsxs(o,{spacing:3,sx:{py:3,borderTop:r=>`dashed 1px ${r.palette.divider}`,borderBottom:r=>`dashed 1px ${r.palette.divider}`},children:[t.jsx(o,{direction:"row",flexWrap:"wrap",spacing:1,children:s.tags.map(r=>t.jsx(W,{label:r,variant:"soft"},r))}),t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx($,{control:t.jsx(R,{defaultChecked:!0,size:"small",color:"error",icon:t.jsx(l,{icon:"solar:heart-bold"}),checkedIcon:t.jsx(l,{icon:"solar:heart-bold"})}),label:k(s.totalFavorites),sx:{mr:1}}),t.jsx(E,{children:s.favoritePerson.map(r=>t.jsx(P,{alt:r.name,src:r.avatarUrl},r.name))})]})]}),t.jsxs(o,{direction:"row",sx:{mb:3,mt:5},children:[t.jsx(m,{variant:"h4",children:"Comments"}),t.jsxs(m,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",s.comments.length,")"]})]}),t.jsx(B,{}),t.jsx(g,{sx:{mt:5,mb:2}}),t.jsx(H,{comments:s.comments})]})})]}),f=t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"h4",sx:{mb:5},children:"Recent Posts"}),t.jsx(A,{posts:n.slice(n.length-4),loading:x,disabledIndex:!0})]});return t.jsxs(t.Fragment,{children:[d&&p,i&&h,s&&j,t.jsx(a,{sx:{pb:15},children:!!n.length&&f})]})}function Pt(){const e=C(),{title:s}=e;return t.jsxs(t.Fragment,{children:[t.jsx(v,{children:t.jsx("title",{children:" Post: Details"})}),t.jsx(G,{title:`${s}`})]})}export{Pt as default};