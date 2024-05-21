import{j as e,B as m,C as N,S as j,a2 as r,T as h,aE as W,aH as te,am as $,X as y,aK as P,aM as he,J as G,h as k,aN as z,D as ue,aO as xe,g as pe,aC as ge,aD as fe,Y as ye,r as F,as as ve,at as je,ar as C,aP as be,aQ as we,av as Ce,aw as ke,aR as ee,aS as Me,aT as L,aU as E,aV as Se,aW as V,aX as Re,aY as Ne,al as Te,aZ as Ae,v as Ue,t as Ie,a_ as Be,H as Fe}from"./index-Ai7WBed9.js";import{v as a}from"./fade-VV5890gg.js";import{M as Pe}from"./motion-container-lzryyYl-.js";import{a as We}from"./format-number-MVByUr1X.js";import{M as H}from"./motion-viewport-Gtj0HJ7s.js";import{u as $e,C as He,a as Oe}from"./carousel-arrow-index-QaIkDpES.js";import{F as _e}from"./Fab-S4knpy8b.js";import{R as ze}from"./Rating-yrW5KK1c.js";import"./transition-eqIn2NYL.js";import"./visuallyHidden-DVicuktI.js";function Le(){return e.jsx(m,{sx:{height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)"},children:e.jsx(N,{component:Pe,children:e.jsxs(m,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(D,{text:"Who",variants:a().inRight,sx:{color:"primary.main"}}),e.jsx("br",{}),e.jsxs(j,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[e.jsx(D,{text:"we"}),e.jsx(D,{text:"are?"})]}),e.jsx(r.div,{variants:a().inRight,children:e.jsxs(h,{variant:"h4",sx:{mt:3,color:"common.white",fontWeight:"fontWeightSemiBold"},children:["Let's work together and",e.jsx("br",{})," make awesome site easily"]})})]})})})}function D({text:t,variants:s,sx:i,...o}){return e.jsx(m,{component:r.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",...i},...o,children:t.split("").map((n,d)=>e.jsx(r.span,{variants:s||a().inUp,children:n},d))})}const Ee=[...Array(3)].map((t,s)=>({label:["Development","Design","Marketing"][s],value:[20,40,60][s]}));function Ve(){const t=W(),s=te("up","md"),i=t.palette.mode==="light",o=`-40px 40px 80px ${$(i?t.palette.grey[500]:t.palette.common.black,.24)}`;return e.jsx(N,{component:H,sx:{py:{xs:10,md:15},textAlign:{xs:"center",md:"unset"}},children:e.jsxs(y,{container:!0,columnSpacing:{md:3},alignItems:"flex-start",children:[s&&e.jsxs(y,{container:!0,xs:12,md:6,lg:7,alignItems:"center",sx:{pr:{md:7}},children:[e.jsx(y,{xs:6,children:e.jsx(r.div,{variants:a().inUp,children:e.jsx(P,{alt:"our office 2",src:"/assets/images/about/what_2.png",ratio:"1/1",sx:{borderRadius:3,boxShadow:o}})})}),e.jsx(y,{xs:6,children:e.jsx(r.div,{variants:a().inUp,children:e.jsx(P,{alt:"our office 1",src:"/assets/images/about/what_1.png",ratio:"3/4",sx:{borderRadius:3,boxShadow:o}})})})]}),e.jsxs(y,{xs:12,md:6,lg:5,children:[e.jsx(r.div,{variants:a().inRight,children:e.jsx(h,{variant:"h2",sx:{mb:3},children:"What is Minimal?"})}),e.jsx(r.div,{variants:a().inRight,children:e.jsx(h,{sx:{color:t.palette.mode==="light"?"text.secondary":"common.white"},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),e.jsx(j,{spacing:3,sx:{my:5},children:Ee.map((n,d)=>e.jsxs(m,{component:r.div,variants:a().inRight,children:[e.jsxs(j,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(h,{variant:"subtitle2",sx:{flexGrow:1,textAlign:"left"},children:n.label}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:We(n.value)})]}),e.jsx(he,{color:d===0&&"primary"||d===1&&"warning"||"error",variant:"determinate",value:n.value})]},n.label))}),e.jsx(r.div,{variants:a().inRight,children:e.jsx(G,{variant:"outlined",color:"inherit",size:"large",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill"}),children:"Our Work"})})]})]})})}function De(){const t=$e({infinite:!1,slidesToShow:4,responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]});return e.jsxs(N,{component:H,sx:{textAlign:"center",py:{xs:10,md:15}},children:[e.jsx(r.div,{variants:a().inDown,children:e.jsx(h,{variant:"overline",sx:{color:"text.disabled"},children:"Dream team"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(h,{variant:"h2",sx:{my:3},children:"Great team is the key"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(h,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"},children:"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),e.jsx(m,{sx:{position:"relative"},children:e.jsx(He,{filled:!0,shape:"rounded",onNext:t.onNext,onPrev:t.onPrev,leftButtonProps:{sx:{left:24,...z.length<5&&{display:"none"}}},rightButtonProps:{sx:{right:24,...z.length<5&&{display:"none"}}},children:e.jsx(Oe,{ref:t.carouselRef,...t.carouselSettings,children:z.map(s=>e.jsx(m,{component:r.div,variants:a().in,sx:{px:1.5,py:{xs:8,md:10}},children:e.jsx(Ge,{member:s})},s.id))})})}),e.jsx(G,{size:"large",color:"inherit",variant:"outlined",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill",width:24}),sx:{mx:"auto"},children:"All Members"})]})}function Ge({member:t}){const{name:s,role:i,avatarUrl:o}=t;return e.jsxs(ue,{children:[e.jsx(h,{variant:"subtitle1",sx:{mt:2.5,mb:.5},children:s}),e.jsx(h,{variant:"body2",sx:{mb:2.5,color:"text.secondary"},children:i}),e.jsx(m,{sx:{px:1},children:e.jsx(P,{alt:s,src:o,ratio:"1/1",sx:{borderRadius:2}})}),e.jsx(j,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2},children:xe.map(n=>e.jsx(pe,{sx:{color:n.color,"&:hover":{bgcolor:$(n.color,.08)}},children:e.jsx(k,{icon:n.icon})},n.name))})]},s)}function qe(){const t=W(),s=e.jsx(P,{src:"/assets/images/about/vision.jpg",alt:"about-vision",overlay:$(t.palette.grey[900],.48)}),i=e.jsx(j,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{width:1,zIndex:9,bottom:0,opacity:.48,position:"absolute",py:{xs:1.5,md:2.5}},children:["ibm","lya","spotify","netflix","hbo","amazon"].map(o=>e.jsx(m,{component:r.img,variants:a().in,alt:o,src:`/assets/icons/brands/ic_brand_${o}.svg`,sx:{m:{xs:1.5,md:2.5},height:{xs:20,md:32}}},o))});return e.jsx(m,{sx:{pb:10,position:"relative",bgcolor:"background.neutral","&:before":{top:0,left:0,width:1,content:"''",position:"absolute",height:{xs:80,md:120},bgcolor:"background.default"}},children:e.jsxs(N,{component:H,children:[e.jsxs(m,{sx:{mb:10,borderRadius:2,display:"flex",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center"},children:[s,i,e.jsx(_e,{sx:{position:"absolute",zIndex:9},children:e.jsx(k,{icon:"solar:play-broken",width:24})})]}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(h,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})]})})}function Ke(t){return ge("MuiMasonry",t)}fe("MuiMasonry",["root"]);const Xe=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],f=t=>Number(t.replace("px","")),Ye={flexBasis:"100%",width:0,margin:0,padding:0},Je=t=>{const{classes:s}=t;return ke({root:["root"]},Ke,s)},Qe=({ownerState:t,theme:s})=>{let i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const o={};if(t.isSSR){const c={},l=f(s.spacing(t.defaultSpacing));for(let u=1;u<=t.defaultColumns;u+=1)c[`&:nth-of-type(${t.defaultColumns}n+${u%t.defaultColumns})`]={order:u};return o.height=t.defaultHeight,o.margin=-(l/2),o["& > *"]=C({},i["& > *"],c,{margin:l/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${l}px)`}),C({},i,o)}const n=ee({values:t.spacing,breakpoints:s.breakpoints.values}),d=Me(s);i=L(i,E({theme:s},n,c=>{let l;if(typeof c=="string"&&!Number.isNaN(Number(c))||typeof c=="number"){const u=Number(c);l=V(d,u)}else l=c;return C({margin:`calc(0px - (${l} / 2))`,"& > *":{margin:`calc(${l} / 2)`}},t.maxColumnHeight&&{height:typeof l=="number"?Math.ceil(t.maxColumnHeight+f(l)):`calc(${t.maxColumnHeight}px + ${l})`})}));const x=ee({values:t.columns,breakpoints:s.breakpoints.values});return i=L(i,E({theme:s},x,c=>{const u=`${(100/Number(c)).toFixed(2)}%`,S=typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number"?V(d,Number(n)):"0px";return{"& > *":{width:`calc(${u} - ${S})`}}})),typeof n=="object"&&(i=L(i,E({theme:s},n,(c,l)=>{if(l){const u=Number(c),S=Object.keys(x).pop(),g=V(d,u);return{"& > *":{width:`calc(${`${(100/(typeof x=="object"?x[l]||x[S]:x)).toFixed(2)}%`} - ${g})`}}}return null}))),i},Ze=ye("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,s)=>[s.root]})(Qe),et=F.forwardRef(function(s,i){const o=ve({props:s,name:"MuiMasonry"}),{children:n,className:d,component:T="div",columns:x=4,spacing:M=1,defaultColumns:c,defaultHeight:l,defaultSpacing:u}=o,S=je(o,Xe),g=F.useRef(),[O,q]=F.useState(),K=!O&&l&&c!==void 0&&u!==void 0,[se,ne]=F.useState(K?c-1:0),X=C({},o,{spacing:M,columns:x,maxColumnHeight:O,defaultColumns:c,defaultHeight:l,defaultSpacing:u,isSSR:K}),ie=Je(X),oe=v=>{if(!g.current||!v||v.length===0)return;const p=g.current,A=g.current.firstChild,Y=p.clientWidth,J=A.clientWidth;if(Y===0||J===0)return;const Q=window.getComputedStyle(A),le=f(Q.marginLeft),ce=f(Q.marginRight),_=Math.round(Y/(J+le+ce)),U=new Array(_).fill(0);let R=!1;p.childNodes.forEach(b=>{if(b.nodeType!==Node.ELEMENT_NODE||b.dataset.class==="line-break"||R)return;const I=window.getComputedStyle(b),de=f(I.marginTop),me=f(I.marginBottom),Z=f(I.height)?Math.ceil(f(I.height))+de+me:0;if(Z===0){R=!0;return}for(let w=0;w<b.childNodes.length;w+=1){const B=b.childNodes[w];if(B.tagName==="IMG"&&B.clientHeight===0){R=!0;break}}if(!R){const w=U.indexOf(Math.min(...U));U[w]+=Z;const B=w+1;b.style.order=B}}),R||Se.flushSync(()=>{q(Math.max(...U)),ne(_>0?_-1:0)})};be(()=>{if(typeof ResizeObserver>"u")return;let v;const p=new ResizeObserver(()=>{v=requestAnimationFrame(oe)});return g.current&&g.current.childNodes.forEach(A=>{p.observe(A)}),()=>{v&&window.cancelAnimationFrame(v),p&&p.disconnect()}},[x,M,n]);const re=we(i,g),ae=new Array(se).fill("").map((v,p)=>e.jsx("span",{"data-class":"line-break",style:C({},Ye,{order:p+1})},p));return e.jsxs(Ze,C({as:T,className:Ce(ie.root,d),ref:re,ownerState:X},S,{children:[n,ae]}))}),tt=et;function st(){const t=W(),s=te("up","md"),i=e.jsx(G,{color:"primary",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill"}),children:"Read more testimonials"}),o=e.jsxs(m,{sx:{maxWidth:{md:360},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(r.div,{variants:a().inUp,children:e.jsx(h,{variant:"overline",sx:{color:"common.white",opacity:.48},children:"Testimonials"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsxs(h,{variant:"h2",sx:{my:3,color:"common.white"},children:["Who love ",e.jsx("br",{}),"my work"]})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(h,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!s&&e.jsx(m,{component:r.div,variants:a().inUp,sx:{mt:3,display:"flex",justifyContent:"center"},children:i})]}),n=e.jsx(m,{sx:{py:{md:10},height:{md:1},...s&&{...Re.y}},children:e.jsx(tt,{spacing:3,columns:{xs:1,md:2},sx:{ml:0},children:Ne.map(d=>e.jsx(r.div,{variants:a().inUp,children:e.jsx(nt,{testimonial:d})},d.name))})});return e.jsx(m,{sx:{...Te({color:$(t.palette.grey[900],.9),imgUrl:"/assets/images/about/testimonials.jpg"}),overflow:"hidden",height:{md:840},py:{xs:10,md:0}},children:e.jsxs(N,{component:H,sx:{position:"relative",height:1},children:[e.jsxs(y,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[e.jsx(y,{xs:10,md:4,children:o}),e.jsx(y,{xs:12,md:7,lg:6,alignItems:"center",sx:{height:1},children:n})]}),s&&e.jsx(m,{component:r.div,variants:a().inUp,sx:{bottom:60,position:"absolute"},children:i})]})})}function nt({testimonial:t,sx:s,...i}){const o=W(),{name:n,ratingNumber:d,postedDate:T,content:x,avatarUrl:M}=t;return e.jsxs(j,{spacing:3,sx:{...Ae({color:o.palette.common.white,opacity:.08}),p:3,borderRadius:2,color:"common.white",...s},...i,children:[e.jsx(k,{icon:"mingcute:quote-left-fill",width:40,sx:{opacity:.48}}),e.jsx(h,{variant:"body2",children:x}),e.jsx(ze,{value:d,readOnly:!0,size:"small"}),e.jsxs(j,{direction:"row",children:[e.jsx(Ue,{alt:n,src:M,sx:{mr:2}}),e.jsx(Ie,{primary:n,secondary:Be(T),primaryTypographyProps:{typography:"subtitle2",mb:.5},secondaryTypographyProps:{typography:"caption",color:"inherit",sx:{opacity:.64}}})]})]})}function it(){return e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx(Ve,{}),e.jsx(qe,{}),e.jsx(De,{}),e.jsx(st,{})]})}function pt(){return e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:e.jsx("title",{children:" About us"})}),e.jsx(it,{})]})}export{pt as default};
