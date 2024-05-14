import{aY as R,e as A,aA as z,j as s,S as a,k,B as P,aQ as O,L as H,R as L,p as h,c as Q,d as l,A as V,aZ as _,a_ as w,h as E,r as d,C as G,i as N,b6 as U,b7 as M,H as W}from"./index-lMmDPpwH.js";import{o as S}from"./orderBy-KrByqkCe.js";import{u as q}from"./use-debounce-1wQQdBSV.js";import{P as Y}from"./_blog-GspOuDqg.js";import{u as Z,a as $}from"./blog-1gokIaMj.js";import{C as J}from"./custom-breadcrumbs-qEEEK2Dp.js";import{P as K,a as X}from"./post-search-1cpizY5S.js";import{a as D}from"./post-skeleton-jKoT8S_S.js";import{b as y}from"./format-number-cAaVNM2P.js";import{I as ss}from"./image-BILO_BCm.js";import{T as I}from"./text-max-line-g9A6FLNw.js";import{C as es}from"./Card-i_M7QnNo.js";import{P as ts,p as os}from"./Pagination-HjHLlGHq.js";import"./index-VDNoSuDP.js";import"./index.esm-V-50jqn-.js";import"./mui-one-time-password-input.es-I6hoYgDw.js";import"./styles-stj5iCp_.js";import"./styles-wKt_Ziqz.js";import"./_baseToString-M1LHTUqF.js";import"./_baseIteratee-QVgYnO4v.js";import"./_baseEach-cNbCSneo.js";import"./Autocomplete-tUtEKOFz.js";import"./TextField-L8IfDKvJ.js";import"./Close-KqYWU_Vs.js";import"./Chip-obpKpu2y.js";import"./Skeleton-kAHCgQBf.js";import"./FirstPage-gb0hC87K.js";function rs({post:t}){const o=R(),i=A(),n=z("up","sm"),{title:r,author:m,publish:x,coverUrl:u,createdAt:p,totalViews:f,totalShares:j,totalComments:b,description:g}=t;return s.jsxs(s.Fragment,{children:[s.jsxs(a,{component:es,direction:"row",children:[s.jsxs(a,{sx:{p:C=>C.spacing(3,3,2,3)},children:[s.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[s.jsx(k,{variant:"soft",color:x==="published"&&"info"||"default",children:x}),s.jsx(P,{component:"span",sx:{typography:"caption",color:"text.disabled"},children:O(p)})]}),s.jsxs(a,{spacing:1,flexGrow:1,children:[s.jsx(H,{color:"inherit",component:L,href:h.dashboard.post.details(r),children:s.jsx(I,{variant:"subtitle2",line:2,children:r})}),s.jsx(I,{variant:"body2",sx:{color:"text.secondary"},children:g})]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(Q,{color:o.open?"inherit":"default",onClick:o.onOpen,children:s.jsx(l,{icon:"eva:more-horizontal-fill"})}),s.jsxs(a,{spacing:1.5,flexGrow:1,direction:"row",flexWrap:"wrap",justifyContent:"flex-end",sx:{typography:"caption",color:"text.disabled"},children:[s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"eva:message-circle-fill",width:16,sx:{mr:.5}}),y(b)]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"solar:eye-bold",width:16,sx:{mr:.5}}),y(f)]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"solar:share-bold",width:16,sx:{mr:.5}}),y(j)]})]})]})]}),n&&s.jsxs(P,{sx:{width:180,height:240,position:"relative",flexShrink:0,p:1},children:[s.jsx(V,{alt:m.name,src:m.avatarUrl,sx:{position:"absolute",top:16,right:16,zIndex:9}}),s.jsx(ss,{alt:r,src:u,sx:{height:1,borderRadius:1.5}})]})]}),s.jsxs(_,{open:o.open,onClose:o.onClose,arrow:"bottom-center",sx:{width:140},children:[s.jsxs(w,{onClick:()=>{o.onClose(),i.push(h.dashboard.post.details(r))},children:[s.jsx(l,{icon:"solar:eye-bold"}),"View"]}),s.jsxs(w,{onClick:()=>{o.onClose(),i.push(h.dashboard.post.edit(r))},children:[s.jsx(l,{icon:"solar:pen-bold"}),"Edit"]}),s.jsxs(w,{onClick:()=>{o.onClose()},sx:{color:"error.main"},children:[s.jsx(l,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function is({posts:t,loading:o}){const i=s.jsx(s.Fragment,{children:[...Array(16)].map((r,m)=>s.jsx(D,{variant:"horizontal"},m))}),n=s.jsx(s.Fragment,{children:t.map(r=>s.jsx(rs,{post:r},r.id))});return s.jsxs(s.Fragment,{children:[s.jsx(P,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:o?i:n}),t.length>8&&s.jsx(ts,{count:8,sx:{mt:8,[`& .${os.ul}`]:{justifyContent:"center"}}})]})}const ns={publish:"all"};function as(){const t=E(),[o,i]=d.useState("latest"),[n,r]=d.useState(ns),[m,x]=d.useState(""),u=q(m),{posts:p,postsLoading:f}=Z(),{searchResults:j,searchLoading:b}=$(u),g=ls({inputData:p,filters:n,sortBy:o}),C=d.useCallback(e=>{i(e)},[]),v=d.useCallback((e,c)=>{r(B=>({...B,[e]:c}))},[]),F=d.useCallback(e=>{x(e)},[]),T=d.useCallback((e,c)=>{v("publish",c)},[v]);return s.jsxs(G,{maxWidth:t.themeStretch?!1:"lg",children:[s.jsx(J,{heading:"List",links:[{name:"Dashboard",href:h.dashboard.root},{name:"Blog",href:h.dashboard.post.root},{name:"List"}],action:s.jsx(N,{component:L,href:h.dashboard.post.new,variant:"contained",startIcon:s.jsx(l,{icon:"mingcute:add-line"}),children:"New Post"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(a,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(K,{query:u,results:j,onSearch:F,loading:b,hrefItem:e=>h.dashboard.post.details(e)}),s.jsx(X,{sort:o,onSort:C,sortOptions:Y})]}),s.jsx(U,{value:n.publish,onChange:T,sx:{mb:{xs:3,md:5}},children:["all","published","draft"].map(e=>s.jsx(M,{iconPosition:"end",value:e,label:e,icon:s.jsxs(k,{variant:(e==="all"||e===n.publish)&&"filled"||"soft",color:e==="published"&&"info"||"default",children:[e==="all"&&p.length,e==="published"&&p.filter(c=>c.publish==="published").length,e==="draft"&&p.filter(c=>c.publish==="draft").length]}),sx:{textTransform:"capitalize"}},e))}),s.jsx(is,{posts:g,loading:f})]})}const ls=({inputData:t,filters:o,sortBy:i})=>{const{publish:n}=o;return i==="latest"&&(t=S(t,["createdAt"],["desc"])),i==="oldest"&&(t=S(t,["createdAt"],["asc"])),i==="popular"&&(t=S(t,["totalViews"],["desc"])),n!=="all"&&(t=t.filter(r=>r.publish===n)),t};function Hs(){return s.jsxs(s.Fragment,{children:[s.jsx(W,{children:s.jsx("title",{children:" Dashboard: Post List"})}),s.jsx(as,{})]})}export{Hs as default};