import{j as e,B as m,C as N,S as v,a5 as r,T as u,aJ as P,aM as te,ar as W,Z as y,aP as $,aR as ue,D as q,g as k,aS as z,y as xe,aT as he,f as pe,aH as ge,aI as fe,_ as ye,r as F,ax as je,ay as ve,aw as C,aU as be,aV as we,aA as Ce,aB as ke,aW as ee,aX as Me,aY as L,aZ as V,a_ as Se,a$ as E,b0 as Re,b1 as Ne,aq as Ae,b2 as Te,s as Ie,q as Ue,b3 as Be,H as Fe}from"./index-HVmlIZYv.js";import{v as a}from"./fade-VV5890gg.js";import{M as $e}from"./motion-container-_qcWqx8Z.js";import{a as Pe}from"./format-number-Ze4u1bEl.js";import{M as _}from"./motion-viewport-xnS_cP-n.js";import{u as We,C as _e,a as He}from"./carousel-arrow-index-z2E4fUh6.js";import{F as Oe}from"./Fab-xJEJ9bYT.js";import{R as ze}from"./Rating-kdeHIuSB.js";import"./transition-eqIn2NYL.js";import"./visuallyHidden-DVicuktI.js";function Le(){return e.jsx(m,{sx:{height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)"},children:e.jsx(N,{component:$e,children:e.jsxs(m,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(D,{text:"Who",variants:a().inRight,sx:{color:"primary.main"}}),e.jsx("br",{}),e.jsxs(v,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[e.jsx(D,{text:"we"}),e.jsx(D,{text:"are?"})]}),e.jsx(r.div,{variants:a().inRight,children:e.jsxs(u,{variant:"h4",sx:{mt:3,color:"common.white",fontWeight:"fontWeightSemiBold"},children:["Let's work together and",e.jsx("br",{})," make awesome site easily"]})})]})})})}function D({text:t,variants:s,sx:i,...o}){return e.jsx(m,{component:r.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",...i},...o,children:t.split("").map((n,d)=>e.jsx(r.span,{variants:s||a().inUp,children:n},d))})}const Ve=[...Array(3)].map((t,s)=>({label:["Development","Design","Marketing"][s],value:[20,40,60][s]}));function Ee(){const t=P(),s=te("up","md"),i=t.palette.mode==="light",o=`-40px 40px 80px ${W(i?t.palette.grey[500]:t.palette.common.black,.24)}`;return e.jsx(N,{component:_,sx:{py:{xs:10,md:15},textAlign:{xs:"center",md:"unset"}},children:e.jsxs(y,{container:!0,columnSpacing:{md:3},alignItems:"flex-start",children:[s&&e.jsxs(y,{container:!0,xs:12,md:6,lg:7,alignItems:"center",sx:{pr:{md:7}},children:[e.jsx(y,{xs:6,children:e.jsx(r.div,{variants:a().inUp,children:e.jsx($,{alt:"our office 2",src:"/assets/images/about/what_2.png",ratio:"1/1",sx:{borderRadius:3,boxShadow:o}})})}),e.jsx(y,{xs:6,children:e.jsx(r.div,{variants:a().inUp,children:e.jsx($,{alt:"our office 1",src:"/assets/images/about/what_1.png",ratio:"3/4",sx:{borderRadius:3,boxShadow:o}})})})]}),e.jsxs(y,{xs:12,md:6,lg:5,children:[e.jsx(r.div,{variants:a().inRight,children:e.jsx(u,{variant:"h2",sx:{mb:3},children:"What is Minimal?"})}),e.jsx(r.div,{variants:a().inRight,children:e.jsx(u,{sx:{color:t.palette.mode==="light"?"text.secondary":"common.white"},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),e.jsx(v,{spacing:3,sx:{my:5},children:Ve.map((n,d)=>e.jsxs(m,{component:r.div,variants:a().inRight,children:[e.jsxs(v,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1,textAlign:"left"},children:n.label}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:Pe(n.value)})]}),e.jsx(ue,{color:d===0&&"primary"||d===1&&"warning"||"error",variant:"determinate",value:n.value})]},n.label))}),e.jsx(r.div,{variants:a().inRight,children:e.jsx(q,{variant:"outlined",color:"inherit",size:"large",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill"}),children:"Our Work"})})]})]})})}function De(){const t=We({infinite:!1,slidesToShow:4,responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]});return e.jsxs(N,{component:_,sx:{textAlign:"center",py:{xs:10,md:15}},children:[e.jsx(r.div,{variants:a().inDown,children:e.jsx(u,{variant:"overline",sx:{color:"text.disabled"},children:"Dream team"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{variant:"h2",sx:{my:3},children:"Great team is the key"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"},children:"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),e.jsx(m,{sx:{position:"relative"},children:e.jsx(_e,{filled:!0,shape:"rounded",onNext:t.onNext,onPrev:t.onPrev,leftButtonProps:{sx:{left:24,...z.length<5&&{display:"none"}}},rightButtonProps:{sx:{right:24,...z.length<5&&{display:"none"}}},children:e.jsx(He,{ref:t.carouselRef,...t.carouselSettings,children:z.map(s=>e.jsx(m,{component:r.div,variants:a().in,sx:{px:1.5,py:{xs:8,md:10}},children:e.jsx(qe,{member:s})},s.id))})})}),e.jsx(q,{size:"large",color:"inherit",variant:"outlined",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill",width:24}),sx:{mx:"auto"},children:"All Members"})]})}function qe({member:t}){const{name:s,role:i,avatarUrl:o}=t;return e.jsxs(xe,{children:[e.jsx(u,{variant:"subtitle1",sx:{mt:2.5,mb:.5},children:s}),e.jsx(u,{variant:"body2",sx:{mb:2.5,color:"text.secondary"},children:i}),e.jsx(m,{sx:{px:1},children:e.jsx($,{alt:s,src:o,ratio:"1/1",sx:{borderRadius:2}})}),e.jsx(v,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2},children:he.map(n=>e.jsx(pe,{sx:{color:n.color,"&:hover":{bgcolor:W(n.color,.08)}},children:e.jsx(k,{icon:n.icon})},n.name))})]},s)}function Ge(){const t=P(),s=e.jsx($,{src:"/assets/images/about/vision.jpg",alt:"about-vision",overlay:W(t.palette.grey[900],.48)}),i=e.jsx(v,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{width:1,zIndex:9,bottom:0,opacity:.48,position:"absolute",py:{xs:1.5,md:2.5}},children:["ibm","lya","spotify","netflix","hbo","amazon"].map(o=>e.jsx(m,{component:r.img,variants:a().in,alt:o,src:`/assets/icons/brands/ic_brand_${o}.svg`,sx:{m:{xs:1.5,md:2.5},height:{xs:20,md:32}}},o))});return e.jsx(m,{sx:{pb:10,position:"relative",bgcolor:"background.neutral","&:before":{top:0,left:0,width:1,content:"''",position:"absolute",height:{xs:80,md:120},bgcolor:"background.default"}},children:e.jsxs(N,{component:_,children:[e.jsxs(m,{sx:{mb:10,borderRadius:2,display:"flex",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center"},children:[s,i,e.jsx(Oe,{sx:{position:"absolute",zIndex:9},children:e.jsx(k,{icon:"solar:play-broken",width:24})})]}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})]})})}function Ze(t){return ge("MuiMasonry",t)}fe("MuiMasonry",["root"]);const Je=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],f=t=>Number(t.replace("px","")),Ke={flexBasis:"100%",width:0,margin:0,padding:0},Xe=t=>{const{classes:s}=t;return ke({root:["root"]},Ze,s)},Ye=({ownerState:t,theme:s})=>{let i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const o={};if(t.isSSR){const c={},l=f(s.spacing(t.defaultSpacing));for(let x=1;x<=t.defaultColumns;x+=1)c[`&:nth-of-type(${t.defaultColumns}n+${x%t.defaultColumns})`]={order:x};return o.height=t.defaultHeight,o.margin=-(l/2),o["& > *"]=C({},i["& > *"],c,{margin:l/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${l}px)`}),C({},i,o)}const n=ee({values:t.spacing,breakpoints:s.breakpoints.values}),d=Me(s);i=L(i,V({theme:s},n,c=>{let l;if(typeof c=="string"&&!Number.isNaN(Number(c))||typeof c=="number"){const x=Number(c);l=E(d,x)}else l=c;return C({margin:`calc(0px - (${l} / 2))`,"& > *":{margin:`calc(${l} / 2)`}},t.maxColumnHeight&&{height:typeof l=="number"?Math.ceil(t.maxColumnHeight+f(l)):`calc(${t.maxColumnHeight}px + ${l})`})}));const h=ee({values:t.columns,breakpoints:s.breakpoints.values});return i=L(i,V({theme:s},h,c=>{const x=`${(100/Number(c)).toFixed(2)}%`,S=typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number"?E(d,Number(n)):"0px";return{"& > *":{width:`calc(${x} - ${S})`}}})),typeof n=="object"&&(i=L(i,V({theme:s},n,(c,l)=>{if(l){const x=Number(c),S=Object.keys(h).pop(),g=E(d,x);return{"& > *":{width:`calc(${`${(100/(typeof h=="object"?h[l]||h[S]:h)).toFixed(2)}%`} - ${g})`}}}return null}))),i},Qe=ye("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,s)=>[s.root]})(Ye),et=F.forwardRef(function(s,i){const o=je({props:s,name:"MuiMasonry"}),{children:n,className:d,component:A="div",columns:h=4,spacing:M=1,defaultColumns:c,defaultHeight:l,defaultSpacing:x}=o,S=ve(o,Je),g=F.useRef(),[H,G]=F.useState(),Z=!H&&l&&c!==void 0&&x!==void 0,[se,ne]=F.useState(Z?c-1:0),J=C({},o,{spacing:M,columns:h,maxColumnHeight:H,defaultColumns:c,defaultHeight:l,defaultSpacing:x,isSSR:Z}),ie=Xe(J),oe=j=>{if(!g.current||!j||j.length===0)return;const p=g.current,T=g.current.firstChild,K=p.clientWidth,X=T.clientWidth;if(K===0||X===0)return;const Y=window.getComputedStyle(T),le=f(Y.marginLeft),ce=f(Y.marginRight),O=Math.round(K/(X+le+ce)),I=new Array(O).fill(0);let R=!1;p.childNodes.forEach(b=>{if(b.nodeType!==Node.ELEMENT_NODE||b.dataset.class==="line-break"||R)return;const U=window.getComputedStyle(b),de=f(U.marginTop),me=f(U.marginBottom),Q=f(U.height)?Math.ceil(f(U.height))+de+me:0;if(Q===0){R=!0;return}for(let w=0;w<b.childNodes.length;w+=1){const B=b.childNodes[w];if(B.tagName==="IMG"&&B.clientHeight===0){R=!0;break}}if(!R){const w=I.indexOf(Math.min(...I));I[w]+=Q;const B=w+1;b.style.order=B}}),R||Se.flushSync(()=>{G(Math.max(...I)),ne(O>0?O-1:0)})};be(()=>{if(typeof ResizeObserver>"u")return;let j;const p=new ResizeObserver(()=>{j=requestAnimationFrame(oe)});return g.current&&g.current.childNodes.forEach(T=>{p.observe(T)}),()=>{j&&window.cancelAnimationFrame(j),p&&p.disconnect()}},[h,M,n]);const re=we(i,g),ae=new Array(se).fill("").map((j,p)=>e.jsx("span",{"data-class":"line-break",style:C({},Ke,{order:p+1})},p));return e.jsxs(Qe,C({as:A,className:Ce(ie.root,d),ref:re,ownerState:J},S,{children:[n,ae]}))}),tt=et;function st(){const t=P(),s=te("up","md"),i=e.jsx(q,{color:"primary",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill"}),children:"Read more testimonials"}),o=e.jsxs(m,{sx:{maxWidth:{md:360},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{variant:"overline",sx:{color:"common.white",opacity:.48},children:"Testimonials"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsxs(u,{variant:"h2",sx:{my:3,color:"common.white"},children:["Who love ",e.jsx("br",{}),"my work"]})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!s&&e.jsx(m,{component:r.div,variants:a().inUp,sx:{mt:3,display:"flex",justifyContent:"center"},children:i})]}),n=e.jsx(m,{sx:{py:{md:10},height:{md:1},...s&&{...Re.y}},children:e.jsx(tt,{spacing:3,columns:{xs:1,md:2},sx:{ml:0},children:Ne.map(d=>e.jsx(r.div,{variants:a().inUp,children:e.jsx(nt,{testimonial:d})},d.name))})});return e.jsx(m,{sx:{...Ae({color:W(t.palette.grey[900],.9),imgUrl:"/assets/images/about/testimonials.jpg"}),overflow:"hidden",height:{md:840},py:{xs:10,md:0}},children:e.jsxs(N,{component:_,sx:{position:"relative",height:1},children:[e.jsxs(y,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[e.jsx(y,{xs:10,md:4,children:o}),e.jsx(y,{xs:12,md:7,lg:6,alignItems:"center",sx:{height:1},children:n})]}),s&&e.jsx(m,{component:r.div,variants:a().inUp,sx:{bottom:60,position:"absolute"},children:i})]})})}function nt({testimonial:t,sx:s,...i}){const o=P(),{name:n,ratingNumber:d,postedDate:A,content:h,avatarUrl:M}=t;return e.jsxs(v,{spacing:3,sx:{...Te({color:o.palette.common.white,opacity:.08}),p:3,borderRadius:2,color:"common.white",...s},...i,children:[e.jsx(k,{icon:"mingcute:quote-left-fill",width:40,sx:{opacity:.48}}),e.jsx(u,{variant:"body2",children:h}),e.jsx(ze,{value:d,readOnly:!0,size:"small"}),e.jsxs(v,{direction:"row",children:[e.jsx(Ie,{alt:n,src:M,sx:{mr:2}}),e.jsx(Ue,{primary:n,secondary:Be(A),primaryTypographyProps:{typography:"subtitle2",mb:.5},secondaryTypographyProps:{typography:"caption",color:"inherit",sx:{opacity:.64}}})]})]})}function it(){return e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx(Ee,{}),e.jsx(Ge,{}),e.jsx(De,{}),e.jsx(st,{})]})}function pt(){return e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:e.jsx("title",{children:" About us"})}),e.jsx(it,{})]})}export{pt as default};
