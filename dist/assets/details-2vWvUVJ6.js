import{j as t,C as i,E as u,R as b,p as c,g as l,x as P,S as r,T as n,s as g,a7 as v,V as C,H as k}from"./index-zFfPxWlY.js";import"./_baseToString-_058cDH1.js";import"./text-max-line-Ej7-2plH.js";import"./styles-pt_i9z85.js";import{b as L}from"./format-number-76EDHf4S.js";import{b as w,c as y}from"./blog-ywjIJT4g.js";import{M as F}from"./markdown-dJQS-jdR.js";import{E as B}from"./empty-content-EBAcp_-R.js";import{P as D}from"./post-list-_blnlaMw.js";import{P as H,a as A}from"./post-comment-form-DeBEyL_R.js";import{P as I}from"./post-details-hero-7nNBiPmV.js";import{P as S}from"./post-skeleton-9gugAgt_.js";import{C as W}from"./Chip-gh5rtDwp.js";import{F as $}from"./FormControlLabel-0KxDnSEW.js";import{C as E}from"./Checkbox-Ixvscv7Q.js";import{A as R}from"./AvatarGroup-5lLAtcfv.js";import"./CardContent-qzwh23vZ.js";import"./ListItem-vuk4xiXM.js";import"./Pagination--iJ2_o3G.js";import"./FirstPage-2a_eISws.js";import"./Fab-RWMLJn4I.js";import"./Skeleton-3Uorjo7W.js";import"./SwitchBase-UFqOjZj0.js";function G({title:o}){const{post:s,postError:a,postLoading:d}=w(o),{latestPosts:m,latestPostsLoading:x}=y(o),p=t.jsx(S,{}),h=t.jsx(i,{sx:{my:10},children:t.jsx(B,{filled:!0,title:`${a==null?void 0:a.message}`,action:t.jsx(u,{component:b,href:c.post.root,startIcon:t.jsx(l,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}})}),j=s&&t.jsxs(t.Fragment,{children:[t.jsx(I,{title:s.title,author:s.author,coverUrl:s.coverUrl,createdAt:s.createdAt}),t.jsx(i,{maxWidth:!1,sx:{py:3,mb:5,borderBottom:e=>`solid 1px ${e.palette.divider}`},children:t.jsx(P,{links:[{name:"Home",href:"/"},{name:"Blog",href:c.post.root},{name:s==null?void 0:s.title}],sx:{maxWidth:720,mx:"auto"}})}),t.jsx(i,{maxWidth:!1,children:t.jsxs(r,{sx:{maxWidth:720,mx:"auto"},children:[t.jsx(n,{variant:"subtitle1",sx:{mb:5},children:s.description}),t.jsx(F,{children:s.content}),t.jsxs(r,{spacing:3,sx:{py:3,borderTop:e=>`dashed 1px ${e.palette.divider}`,borderBottom:e=>`dashed 1px ${e.palette.divider}`},children:[t.jsx(r,{direction:"row",flexWrap:"wrap",spacing:1,children:s.tags.map(e=>t.jsx(W,{label:e,variant:"soft"},e))}),t.jsxs(r,{direction:"row",alignItems:"center",children:[t.jsx($,{control:t.jsx(E,{defaultChecked:!0,size:"small",color:"error",icon:t.jsx(l,{icon:"solar:heart-bold"}),checkedIcon:t.jsx(l,{icon:"solar:heart-bold"})}),label:L(s.totalFavorites),sx:{mr:1}}),t.jsx(R,{children:s.favoritePerson.map(e=>t.jsx(g,{alt:e.name,src:e.avatarUrl},e.name))})]})]}),t.jsxs(r,{direction:"row",sx:{mb:3,mt:5},children:[t.jsx(n,{variant:"h4",children:"Comments"}),t.jsxs(n,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",s.comments.length,")"]})]}),t.jsx(H,{}),t.jsx(v,{sx:{mt:5,mb:2}}),t.jsx(A,{comments:s.comments})]})})]}),f=t.jsxs(t.Fragment,{children:[t.jsx(n,{variant:"h4",sx:{mb:5},children:"Recent Posts"}),t.jsx(D,{posts:m.slice(m.length-4),loading:x,disabledIndex:!0})]});return t.jsxs(t.Fragment,{children:[d&&p,a&&h,s&&j,t.jsx(i,{sx:{pb:15},children:!!m.length&&f})]})}function mt(){const o=C(),{title:s}=o;return t.jsxs(t.Fragment,{children:[t.jsx(k,{children:t.jsx("title",{children:" Post: Details"})}),t.jsx(G,{title:`${s}`})]})}export{mt as default};