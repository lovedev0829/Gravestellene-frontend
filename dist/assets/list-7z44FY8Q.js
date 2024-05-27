import{bb as q,j as e,y as Q,f as N,g as u,S as b,s as Z,q as ee,L as se,R as V,p as w,b3 as ne,a7 as H,B as S,T as C,bc as M,O as R,i as G,r as m,D as B,bd as oe,a3 as D,I as le,bf as te,bg as re,aj as _,ak as ie,X as ae,al as ce,a1 as de,v as pe,a as xe,ap as he,ex as A,dE as me,er as be,eA as ue,eB as je,eC as ye,eD as fe,C as ge,x as Ce,H as ke}from"./index-HVmlIZYv.js";import{o as F}from"./orderBy-bhQxECAu.js";import{E as ve}from"./empty-content-J0vuGcwT.js";import{f as Te}from"./format-number-Ze4u1bEl.js";import{P as we,p as Se}from"./Pagination-01k09KMB.js";import{A as K}from"./Autocomplete-WNTy16pS.js";import{C as Ee}from"./country-select-m5ltz8dc.js";import{F as J}from"./FormControlLabel-o9IPCE2V.js";import{C as z}from"./Checkbox-m4MeutVJ.js";import{R as Oe}from"./Radio-kLZnYzlb.js";import{C as O}from"./Chip-yi7Wa9Nd.js";import"./styles-u9RQnHLQ.js";import"./_baseToString-G8v26nOH.js";import"./_baseIteratee-Jn6cT4R7.js";import"./_baseEach-pH3hA_pj.js";import"./FirstPage-lXeDo4YM.js";import"./SwitchBase-hsBiV9_9.js";function Ie({job:s,onView:i,onEdit:d,onDelete:l}){const o=q(),{id:a,title:j,company:c,createdAt:r,candidates:p,experience:g,employmentTypes:t,salary:x,role:y}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx(N,{onClick:o.onOpen,sx:{position:"absolute",top:8,right:8},children:e.jsx(u,{icon:"eva:more-vertical-fill"})}),e.jsxs(b,{sx:{p:3,pb:2},children:[e.jsx(Z,{alt:c.name,src:c.logo,variant:"rounded",sx:{width:48,height:48,mb:2}}),e.jsx(ee,{sx:{mb:1},primary:e.jsx(se,{component:V,href:w.dashboard.job.details(a),color:"inherit",children:j}),secondary:`Posted date: ${ne(r)}`,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{mt:1,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(b,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"primary.main",typography:"caption"},children:[e.jsx(u,{width:16,icon:"solar:users-group-rounded-bold"}),p.length," Candidates"]})]}),e.jsx(H,{sx:{borderStyle:"dashed"}}),e.jsx(S,{rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:[{label:g,icon:e.jsx(u,{width:16,icon:"carbon:skill-level-basic",sx:{flexShrink:0}})},{label:t.join(", "),icon:e.jsx(u,{width:16,icon:"solar:clock-circle-bold",sx:{flexShrink:0}})},{label:x.negotiable?"Negotiable":Te(x.price),icon:e.jsx(u,{width:16,icon:"solar:wad-of-money-bold",sx:{flexShrink:0}})},{label:y,icon:e.jsx(u,{width:16,icon:"solar:user-rounded-bold",sx:{flexShrink:0}})}].map(k=>e.jsxs(b,{spacing:.5,flexShrink:0,direction:"row",alignItems:"center",sx:{color:"text.disabled",minWidth:0},children:[k.icon,e.jsx(C,{variant:"caption",noWrap:!0,children:k.label})]},k.label))})]}),e.jsxs(M,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(R,{onClick:()=>{o.onClose(),i()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(R,{onClick:()=>{o.onClose(),d()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(R,{onClick:()=>{o.onClose(),l()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function Re({jobs:s}){const i=G(),d=m.useCallback(a=>{i.push(w.dashboard.job.details(a))},[i]),l=m.useCallback(a=>{i.push(w.dashboard.job.edit(a))},[i]),o=m.useCallback(a=>{console.info("DELETE",a)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(a=>e.jsx(Ie,{job:a,onView:()=>d(a.id),onEdit:()=>l(a.id),onDelete:()=>o(a.id)},a.id))}),s.length>8&&e.jsx(we,{count:8,sx:{mt:8,[`& .${Se.ul}`]:{justifyContent:"center"}}})]})}function Be({sort:s,onSort:i,sortOptions:d}){const l=q();return e.jsxs(e.Fragment,{children:[e.jsxs(B,{disableRipple:!0,color:"inherit",onClick:l.onOpen,endIcon:e.jsx(u,{icon:l.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(S,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx(M,{open:l.open,onClose:l.onClose,sx:{width:140},children:d.map(o=>e.jsx(R,{selected:o.value===s,onClick:()=>{l.onClose(),i(o.value)},children:o.label},o.value))})]})}function Le({query:s,results:i,onSearch:d,hrefItem:l}){const o=G(),a=c=>{o.push(l(c))},j=c=>{if(s&&c.key==="Enter"){const r=i.filter(p=>p.title===s)[0];a(r.id)}};return e.jsx(K,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:i,onInputChange:(c,r)=>d(r),getOptionLabel:c=>c.title,noOptionsText:e.jsx(oe,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(c,r)=>c.id===r.id,renderInput:c=>e.jsx(D,{...c,placeholder:"Search...",onKeyUp:j,InputProps:{...c.InputProps,startAdornment:e.jsx(le,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(c,r,{inputValue:p})=>{const g=te(r.title,p),t=re(r.title,g);return m.createElement(S,{component:"li",...c,onClick:()=>a(r.id),key:r.id},e.jsx("div",{children:t.map((x,y)=>e.jsx(C,{component:"span",color:x.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:x.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:x.text},y))}))}})}function Pe({open:s,onOpen:i,onClose:d,filters:l,onFilters:o,canReset:a,onResetFilters:j,roleOptions:c,locationOptions:r,benefitOptions:p,experienceOptions:g,employmentTypeOptions:t}){const x=m.useCallback(n=>{const f=l.employmentTypes.includes(n)?l.employmentTypes.filter(E=>E!==n):[...l.employmentTypes,n];o("employmentTypes",f)},[l.employmentTypes,o]),y=m.useCallback(n=>{o("experience",n)},[o]),k=m.useCallback(n=>{o("roles",n)},[o]),L=m.useCallback(n=>{o("locations",n)},[o]),P=m.useCallback(n=>{const f=l.benefits.includes(n)?l.benefits.filter(E=>E!==n):[...l.benefits,n];o("benefits",f)},[l.benefits,o]),h=e.jsxs(b,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(C,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(ce,{title:"Reset",children:e.jsx(N,{onClick:j,children:e.jsx(_,{color:"error",variant:"dot",invisible:!a,children:e.jsx(u,{icon:"solar:restart-bold"})})})}),e.jsx(N,{onClick:d,children:e.jsx(u,{icon:"mingcute:close-line"})})]}),v=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Employment Types"}),t.map(n=>e.jsx(J,{control:e.jsx(z,{checked:l.employmentTypes.includes(n),onClick:()=>x(n)}),label:n},n))]}),T=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Experience"}),g.map(n=>e.jsx(J,{control:e.jsx(Oe,{checked:n===l.experience,onClick:()=>y(n)}),label:n,sx:{...n==="all"&&{textTransform:"capitalize"}}},n))]}),U=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1.5},children:"Roles"}),e.jsx(K,{multiple:!0,disableCloseOnSelect:!0,options:c.map(n=>n),getOptionLabel:n=>n,value:l.roles,onChange:(n,f)=>k(f),renderInput:n=>e.jsx(D,{placeholder:"Select Roles",...n}),renderOption:(n,f)=>m.createElement("li",{...n,key:f},f),renderTags:(n,f)=>n.map((E,$)=>m.createElement(O,{...f({index:$}),key:E,label:E,size:"small",variant:"soft"}))})]}),X=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1.5},children:"Locations"}),e.jsx(Ee,{placeholder:l.locations.length?"+ Locations":"Select Locations",fullWidth:!0,multiple:!0,value:l.locations,onChange:(n,f)=>L(f),options:r,getOptionLabel:n=>n})]}),Y=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Benefits"}),p.map(n=>e.jsx(J,{control:e.jsx(z,{checked:l.benefits.includes(n),onClick:()=>P(n)}),label:n},n))]});return e.jsxs(e.Fragment,{children:[e.jsx(B,{disableRipple:!0,color:"inherit",endIcon:e.jsx(_,{color:"error",variant:"dot",invisible:!a,children:e.jsx(u,{icon:"ic:round-filter-list"})}),onClick:i,children:"Filters"}),e.jsxs(ie,{anchor:"right",open:s,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[h,e.jsx(H,{}),e.jsx(ae,{sx:{px:2.5,py:3},children:e.jsxs(b,{spacing:3,children:[v,T,U,X,Y]})})]})]})}function Fe({filters:s,onFilters:i,canReset:d,onResetFilters:l,results:o,...a}){const j=t=>{const x=s.employmentTypes.filter(y=>y!==t);i("employmentTypes",x)},c=()=>{i("experience","all")},r=t=>{const x=s.roles.filter(y=>y!==t);i("role",x)},p=t=>{const x=s.locations.filter(y=>y!==t);i("locations",x)},g=t=>{const x=s.benefits.filter(y=>y!==t);i("benefits",x)};return e.jsxs(b,{spacing:1.5,...a,children:[e.jsxs(S,{sx:{typography:"body2"},children:[e.jsx("strong",{children:o}),e.jsx(S,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(b,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.employmentTypes.length&&e.jsx(I,{label:"Employment Types:",children:s.employmentTypes.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>j(t)},t))}),s.experience!=="all"&&e.jsx(I,{label:"Experience:",children:e.jsx(O,{size:"small",label:s.experience,onDelete:c})}),!!s.roles.length&&e.jsx(I,{label:"Roles:",children:s.roles.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>r(t)},t))}),!!s.locations.length&&e.jsx(I,{label:"Locations:",children:s.locations.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>p(t)},t))}),!!s.benefits.length&&e.jsx(I,{label:"Benefits:",children:s.benefits.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>g(t)},t))}),d&&e.jsx(B,{color:"error",onClick:l,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function I({label:s,children:i,sx:d,...l}){return e.jsxs(b,{component:de,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...d},...l,children:[e.jsx(S,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(b,{spacing:1,direction:"row",flexWrap:"wrap",children:i})]})}const W={roles:[],locations:[],benefits:[],experience:"all",employmentTypes:[]};function Je(){const s=pe(),i=xe(),[d,l]=m.useState("latest"),[o,a]=m.useState({query:"",results:[]}),[j,c]=m.useState(W),r=We({inputData:A,filters:j,sortBy:d}),p=!he(W,j),g=!r.length&&p,t=m.useCallback((h,v)=>{c(T=>({...T,[h]:v}))},[]),x=m.useCallback(()=>{c(W)},[]),y=m.useCallback(h=>{l(h)},[]),k=m.useCallback(h=>{if(a(v=>({...v,query:h})),h){const v=A.filter(T=>T.title.toLowerCase().indexOf(o.query.toLowerCase())!==-1);a(T=>({...T,results:v}))}},[o.query]),L=e.jsxs(b,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(Le,{query:o.query,results:o.results,onSearch:k,hrefItem:h=>w.dashboard.job.details(h)}),e.jsxs(b,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(Pe,{open:i.value,onOpen:i.onTrue,onClose:i.onFalse,filters:j,onFilters:t,canReset:p,onResetFilters:x,locationOptions:me.map(h=>h.label),roleOptions:be,benefitOptions:ue.map(h=>h.label),experienceOptions:["all",...je.map(h=>h.label)],employmentTypeOptions:ye.map(h=>h.label)}),e.jsx(Be,{sort:d,onSort:y,sortOptions:fe})]})]}),P=e.jsx(Fe,{filters:j,onResetFilters:x,canReset:p,onFilters:t,results:r.length});return e.jsxs(ge,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(Ce,{heading:"List",links:[{name:"Dashboard",href:w.dashboard.root},{name:"Job",href:w.dashboard.job.root},{name:"List"}],action:e.jsx(B,{component:V,href:w.dashboard.job.new,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"New Job"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[L,p&&P]}),g&&e.jsx(ve,{filled:!0,title:"No Data",sx:{py:10}}),e.jsx(Re,{jobs:r})]})}const We=({inputData:s,filters:i,sortBy:d})=>{const{employmentTypes:l,experience:o,roles:a,locations:j,benefits:c}=i;return d==="latest"&&(s=F(s,["createdAt"],["desc"])),d==="oldest"&&(s=F(s,["createdAt"],["asc"])),d==="popular"&&(s=F(s,["totalViews"],["desc"])),l.length&&(s=s.filter(r=>r.employmentTypes.some(p=>l.includes(p)))),o!=="all"&&(s=s.filter(r=>r.experience===o)),a.length&&(s=s.filter(r=>a.includes(r.role))),j.length&&(s=s.filter(r=>r.locations.some(p=>j.includes(p)))),c.length&&(s=s.filter(r=>r.benefits.some(p=>c.includes(p)))),s};function es(){return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:" Dashboard: Job List"})}),e.jsx(Je,{})]})}export{es as default};
