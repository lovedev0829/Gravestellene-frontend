import{aR as ue,aQ as me,U as se,aN as ge,r as d,aH as je,aI as Ce,j as e,aG as be,aJ as Y,aK as fe,aS as ae,z as G,b as w,bi as _,aB as E,cV as ve,cx as U,S as k,dJ as K,T as N,m as ye,ba as we,bO as ke,dE as re,n as le,h as x,g as z,bj as q,bk as M,K as J,t as R,B as S,as as Z,M as Te,I as De,w as Re,bG as Se,X as ie,eH as Fe,aM as ee,q as Ie,eI as Ae,d$ as Pe,eJ as Le,C as Me,dM as Ee,e1 as Be,H as Ne}from"./index-HNXcBFmK.js";import{E as ze}from"./empty-content-U1gD0OQx.js";import{C as Q}from"./confirm-dialog-14eb_6bw.js";import{T as Oe,a as $e,b as He,u as We,g as Ue}from"./table-pagination-custom-Y951z4wP.js";import{T as Ve}from"./table-head-custom-g_-ErHLu.js";import{u as ce,F as de,a as X,b as oe,c as Ge,d as V}from"./file-manager-folder-item-vLJ7INVA.js";import{d as he}from"./format-number-CyLv55jy.js";import{T as _e,a as Ke,b as qe,c as Je}from"./TableHead-7gICP-vi.js";import{T as L}from"./TableCell-RPFSynTU.js";import{C as B}from"./Checkbox-Ym_NGexD.js";import{A as pe}from"./AvatarGroup--8OhxlC-.js";import{t as Qe}from"./TablePagination-UIBZQDsN.js";import{s as xe}from"./utils-GRjn_MD6.js";import{C as Xe}from"./custom-date-range-picker-GKxVxUDe.js";import{T as Ye}from"./text-max-line-h08lUWkW.js";import{C as $}from"./Chip-3avuppyl.js";import{T as Ze,a as ne}from"./ToggleButtonGroup--vKgMQBJ.js";import"./DialogTitle-WOjgF7_D.js";import"./dialogTitleClasses-6FDEkIU1.js";import"./DialogContent-TegZmxqz.js";import"./DialogActions-LK-BktfY.js";import"./FormControlLabel-lt5zSUTX.js";import"./Switch-q0S7btkt.js";import"./SwitchBase-jg6lkq6c.js";import"./ListItem-cpog5qFZ.js";import"./Autocomplete-GN7x_yCw.js";import"./upload-cFP1HCuD.js";import"./preview-multi-file-9P5csR_D.js";import"./index-D8YE_QsH.js";import"./tslib.es6-ADzvKRL9.js";import"./fade-VV5890gg.js";import"./transition-eqIn2NYL.js";import"./index-OmRGj2RI.js";import"./FirstPage-YanvF_fQ.js";import"./DatePicker-8wVTWTxc.js";function eo(o){return me("MuiCardActionArea",o)}const oo=ue("MuiCardActionArea",["root","focusVisible","focusHighlight"]),H=oo,no=["children","className","focusVisibleClassName"],to=o=>{const{classes:n}=o;return fe({root:["root"],focusHighlight:["focusHighlight"]},eo,n)},so=se(ge,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,n)=>n.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${H.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${H.focusVisible} .${H.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),ao=se("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,n)=>n.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),ro=d.forwardRef(function(n,h){const t=je({props:n,name:"MuiCardActionArea"}),{children:s,className:c,focusVisibleClassName:j}=t,r=Ce(t,no),u=t,i=to(u);return e.jsxs(so,be({className:Y(i.root,c),focusVisibleClassName:Y(j,i.focusVisible),ref:h,ownerState:u},r,{children:[s,e.jsx(ao,{className:i.focusHighlight,ownerState:u})]}))}),lo=ro;function io({click:o,doubleClick:n,timeout:h=250}){const t=d.useRef(),s=()=>{t&&(clearTimeout(t.current),t.current=null)};return d.useCallback(c=>{s(),o&&c.detail===1&&(t.current=setTimeout(()=>{o(c)},h)),c.detail%2===0&&n(c)},[o,n,h])}function co({row:o,selected:n,onSelectRow:h,onDeleteRow:t}){const s=ae(),{name:c,size:j,type:r,modifiedAt:u,shared:i,isFavorited:l}=o,{enqueueSnackbar:b}=G(),{copy:v}=ce(),[m,f]=d.useState(""),C=w(l),y=w(),p=w(),g=w(),a=_(),I=d.useCallback(D=>{f(D.target.value)},[]),F=io({click:()=>{y.onTrue()},doubleClick:()=>console.info("DOUBLE CLICK")}),A=d.useCallback(()=>{b("Copied!"),v(o.url)},[v,b,o.url]),T={borderTop:`solid 1px ${E(s.palette.grey[500],.16)}`,borderBottom:`solid 1px ${E(s.palette.grey[500],.16)}`,"&:first-of-type":{borderTopLeftRadius:16,borderBottomLeftRadius:16,borderLeft:`solid 1px ${E(s.palette.grey[500],.16)}`},"&:last-of-type":{borderTopRightRadius:16,borderBottomRightRadius:16,borderRight:`solid 1px ${E(s.palette.grey[500],.16)}`}};return e.jsxs(e.Fragment,{children:[e.jsxs(_e,{selected:n,sx:{borderRadius:2,[`&.${ve.selected}, &:hover`]:{backgroundColor:"background.paper",boxShadow:s.customShadows.z20,transition:s.transitions.create(["background-color","box-shadow"],{duration:s.transitions.duration.shortest}),"&:hover":{backgroundColor:"background.paper",boxShadow:s.customShadows.z20}},[`& .${U.root}`]:{...T},...y.value&&{[`& .${U.root}`]:{...T}}},children:[e.jsx(L,{padding:"checkbox",children:e.jsx(B,{checked:n,onDoubleClick:()=>console.info("ON DOUBLE CLICK"),onClick:h})}),e.jsx(L,{onClick:F,children:e.jsxs(k,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(K,{file:r,sx:{width:36,height:36}}),e.jsx(N,{noWrap:!0,variant:"inherit",sx:{maxWidth:360,cursor:"pointer",...y.value&&{fontWeight:"fontWeightBold"}},children:c})]})}),e.jsx(L,{onClick:F,sx:{whiteSpace:"nowrap"},children:he(j)}),e.jsx(L,{onClick:F,sx:{whiteSpace:"nowrap"},children:r}),e.jsx(L,{onClick:F,sx:{whiteSpace:"nowrap"},children:e.jsx(ye,{primary:we(u),secondary:ke(u),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(L,{align:"right",onClick:F,children:e.jsx(pe,{max:4,sx:{display:"inline-flex",[`& .${re.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:i&&i.map(D=>e.jsx(le,{alt:D.name,src:D.avatarUrl},D.id))})}),e.jsxs(L,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(B,{color:"warning",icon:e.jsx(x,{icon:"eva:star-outline"}),checkedIcon:e.jsx(x,{icon:"eva:star-fill"}),checked:C.value,onChange:C.onToggle,sx:{p:.75}}),e.jsx(z,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(q,{open:a.open,onClose:a.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(M,{onClick:()=>{a.onClose(),A()},children:[e.jsx(x,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(M,{onClick:()=>{a.onClose(),p.onTrue()},children:[e.jsx(x,{icon:"solar:share-bold"}),"Share"]}),e.jsx(J,{sx:{borderStyle:"dashed"}}),e.jsxs(M,{onClick:()=>{g.onTrue(),a.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(de,{item:o,favorited:C.value,onFavorite:C.onToggle,onCopyLink:A,open:y.value,onClose:y.onFalse,onDelete:t}),e.jsx(X,{open:p.value,shared:i,inviteEmail:m,onChangeInvite:I,onCopyLink:A,onClose:()=>{p.onFalse(),f("")}}),e.jsx(Q,{open:g.value,onClose:g.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:t,children:"Delete"})})]})}const ho=[{id:"name",label:"Name"},{id:"size",label:"Size",width:120},{id:"type",label:"Type",width:120},{id:"modifiedAt",label:"Modified",width:140},{id:"shared",label:"Shared",align:"right",width:140},{id:"",width:88}];function po({table:o,notFound:n,onDeleteRow:h,dataFiltered:t,onOpenConfirm:s}){const c=ae(),{dense:j,page:r,order:u,orderBy:i,rowsPerPage:l,selected:b,onSelectRow:v,onSelectAllRows:m,onSort:f,onChangeDense:C,onChangePage:y,onChangeRowsPerPage:p}=o;return e.jsxs(e.Fragment,{children:[e.jsxs(S,{sx:{position:"relative",m:c.spacing(-2,-3,-3,-3)},children:[e.jsx(Oe,{dense:j,numSelected:b.length,rowCount:t.length,onSelectAllRows:g=>m(g,t.map(a=>a.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(Z,{title:"Share",children:e.jsx(z,{color:"primary",children:e.jsx(x,{icon:"solar:share-bold"})})}),e.jsx(Z,{title:"Delete",children:e.jsx(z,{color:"primary",onClick:s,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})]}),sx:{pl:1,pr:2,top:16,left:24,right:24,width:"auto",borderRadius:1.5}}),e.jsx(Ke,{sx:{p:c.spacing(0,3,3,3)},children:e.jsxs(qe,{size:j?"small":"medium",sx:{minWidth:960,borderCollapse:"separate",borderSpacing:"0 16px"},children:[e.jsx(Ve,{order:u,orderBy:i,headLabel:ho,rowCount:t.length,numSelected:b.length,onSort:f,onSelectAllRows:g=>m(g,t.map(a=>a.id)),sx:{[`& .${U.head}`]:{"&:first-of-type":{borderTopLeftRadius:12,borderBottomLeftRadius:12},"&:last-of-type":{borderTopRightRadius:12,borderBottomRightRadius:12}}}}),e.jsxs(Je,{children:[t.slice(r*l,r*l+l).map(g=>e.jsx(co,{row:g,selected:b.includes(g.id),onSelectRow:()=>v(g.id),onDeleteRow:()=>h(g.id)},g.id)),e.jsx($e,{notFound:n,sx:{m:-2,borderRadius:1.5,border:`dashed 1px ${c.palette.divider}`}})]})]})})]}),e.jsx(He,{count:t.length,page:r,rowsPerPage:l,onPageChange:y,onRowsPerPageChange:p,dense:j,onChangeDense:C,sx:{[`& .${Qe.toolbar}`]:{borderTopColor:"transparent"}}})]})}function xo({openDateRange:o,onCloseDateRange:n,onOpenDateRange:h,filters:t,onFilters:s,dateError:c,typeOptions:j}){const r=_(),u=t.type.length?t.type.slice(0,2).join(","):"All type",i=d.useCallback(p=>{s("name",p.target.value)},[s]),l=d.useCallback(p=>{s("startDate",p)},[s]),b=d.useCallback(p=>{s("endDate",p)},[s]),v=d.useCallback(p=>{const g=t.type.includes(p)?t.type.filter(a=>a!==p):[...t.type,p];s("type",g)},[t.type,s]),m=d.useCallback(()=>{r.onClose(),s("type",[])},[s,r]),f=e.jsx(Te,{value:t.name,onChange:i,placeholder:"Search...",InputProps:{startAdornment:e.jsx(De,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,md:260}}}),C=e.jsxs(e.Fragment,{children:[e.jsxs(R,{color:"inherit",onClick:r.onOpen,endIcon:e.jsx(x,{icon:r.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:[u,t.type.length>2&&e.jsxs(Re,{color:"info",sx:{ml:1},children:["+",t.type.length-2]})]}),e.jsx(q,{open:r.open,onClose:r.onClose,sx:{p:2.5},children:e.jsxs(k,{spacing:2.5,children:[e.jsx(S,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},children:j.map(p=>{const g=t.type.includes(p);return e.jsx(lo,{onClick:()=>v(p),sx:{p:1,borderRadius:1,cursor:"pointer",border:a=>`solid 1px ${E(a.palette.grey[500],.08)}`,...g&&{bgcolor:"action.selected"}},children:e.jsxs(k,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(K,{file:p}),e.jsx(N,{variant:g?"subtitle2":"body2",children:p})]})},p)})}),e.jsxs(k,{spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(R,{variant:"outlined",color:"inherit",onClick:m,children:"Clear"}),e.jsx(R,{variant:"contained",onClick:r.onClose,children:"Apply"})]})]})})]}),y=e.jsxs(e.Fragment,{children:[e.jsx(R,{color:"inherit",onClick:h,endIcon:e.jsx(x,{icon:o?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:t.startDate&&t.endDate?xe(t.startDate,t.endDate):"Select Date"}),e.jsx(Xe,{variant:"calendar",startDate:t.startDate,endDate:t.endDate,onChangeStartDate:l,onChangeEndDate:b,open:o,onClose:n,selected:!!t.startDate&&!!t.endDate,error:c})]});return e.jsxs(k,{spacing:1,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},sx:{width:1},children:[f,e.jsxs(k,{spacing:1,direction:"row",alignItems:"center",justifyContent:"flex-end",flexGrow:1,children:[y,C]})]})}function uo({file:o,selected:n,onSelect:h,onDelete:t,sx:s,...c}){var A;const{enqueueSnackbar:j}=G(),{copy:r}=ce(),[u,i]=d.useState(""),l=w(),b=w(),v=w(),m=w(),f=w(o.isFavorited),C=_(),y=d.useCallback(T=>{i(T.target.value)},[]),p=d.useCallback(()=>{j("Copied!"),r(o.url)},[r,j,o.url]),g=(l.value||n)&&h?e.jsx(B,{size:"medium",checked:n,onClick:h,icon:e.jsx(x,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(x,{icon:"eva:checkmark-circle-2-fill"}),sx:{p:.75}}):e.jsx(K,{file:o.type,sx:{width:36,height:36}}),a=e.jsxs(k,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[e.jsx(B,{color:"warning",icon:e.jsx(x,{icon:"eva:star-outline"}),checkedIcon:e.jsx(x,{icon:"eva:star-fill"}),checked:f.value,onChange:f.onToggle}),e.jsx(z,{color:C.open?"inherit":"default",onClick:C.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]}),I=e.jsxs(e.Fragment,{children:[e.jsx(Ye,{persistent:!0,variant:"subtitle2",onClick:m.onTrue,sx:{width:1,mt:2,mb:.5},children:o.name}),e.jsxs(k,{direction:"row",alignItems:"center",sx:{maxWidth:.99,whiteSpace:"nowrap",typography:"caption",color:"text.disabled"},children:[he(o.size),e.jsx(S,{component:"span",sx:{mx:.75,width:2,height:2,flexShrink:0,borderRadius:"50%",bgcolor:"currentColor"}}),e.jsx(N,{noWrap:!0,component:"span",variant:"caption",children:Se(o.modifiedAt)})]})]}),F=e.jsx(pe,{max:3,sx:{mt:1,[`& .${re.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(A=o.shared)==null?void 0:A.map(T=>e.jsx(le,{alt:T.name,src:T.avatarUrl},T.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(k,{component:ie,variant:"outlined",alignItems:"flex-start",sx:{p:2.5,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",...(l.value||n)&&{bgcolor:"background.paper",boxShadow:T=>T.customShadows.z20},...s},...c,children:[e.jsx(S,{onMouseEnter:l.onTrue,onMouseLeave:l.onFalse,children:g}),I,F,a]}),e.jsxs(q,{open:C.open,onClose:C.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(M,{onClick:()=>{C.onClose(),p()},children:[e.jsx(x,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(M,{onClick:()=>{C.onClose(),b.onTrue()},children:[e.jsx(x,{icon:"solar:share-bold"}),"Share"]}),e.jsx(J,{sx:{borderStyle:"dashed"}}),e.jsxs(M,{onClick:()=>{v.onTrue(),C.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(de,{item:o,favorited:f.value,onFavorite:f.onToggle,onCopyLink:p,open:m.value,onClose:m.onFalse,onDelete:()=>{m.onFalse(),t()}}),e.jsx(X,{open:b.value,shared:o.shared,inviteEmail:u,onChangeInvite:y,onCopyLink:p,onClose:()=>{b.onFalse(),i("")}}),e.jsx(Q,{open:v.value,onClose:v.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:t,children:"Delete"})})]})}function mo({action:o,selected:n,rowCount:h,numSelected:t,onSelectAllItems:s,sx:c,...j}){return e.jsx(Fe,{children:e.jsxs(S,{sx:{right:0,zIndex:9,bottom:0,display:"flex",borderRadius:1.5,position:"fixed",alignItems:"center",bgcolor:"text.primary",p:r=>r.spacing(1.5,2,1.5,1),boxShadow:r=>r.customShadows.z20,m:{xs:2,md:3},...c},...j,children:[e.jsx(B,{indeterminate:!!t&&t<h,checked:!!h&&t===h,onChange:r=>s(r.target.checked),icon:e.jsx(x,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(x,{icon:"eva:checkmark-circle-2-fill"}),indeterminateIcon:e.jsx(x,{icon:"eva:minus-circle-fill"})}),n&&e.jsxs(N,{variant:"subtitle2",sx:{mr:2,color:r=>r.palette.mode==="light"?"common.white":"grey.800"},children:[n.length," Items selected"]}),o&&o]})})}function go({table:o,dataFiltered:n,onDeleteItem:h,onOpenConfirm:t}){const{selected:s,onSelectRow:c,onSelectAllRows:j}=o,r=d.useRef(null),[u,i]=d.useState(""),[l,b]=d.useState(""),v=w(),m=w(),f=w(),C=w(),y=w(),p=d.useCallback(a=>{b(a.target.value)},[]),g=d.useCallback(a=>{i(a.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(S,{ref:r,children:[e.jsx(oe,{title:"Folders",subTitle:`${n.filter(a=>a.type==="folder").length} folders`,onOpen:m.onTrue,collapse:y.value,onCollapse:y.onToggle}),e.jsx(ee,{in:!y.value,unmountOnExit:!0,children:e.jsx(S,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},children:n.filter(a=>a.type==="folder").map(a=>e.jsx(Ge,{folder:a,selected:s.includes(a.id),onSelect:()=>c(a.id),onDelete:()=>h(a.id),sx:{maxWidth:"auto"}},a.id))})}),e.jsx(J,{sx:{my:5,borderStyle:"dashed"}}),e.jsx(oe,{title:"Files",subTitle:`${n.filter(a=>a.type!=="folder").length} files`,onOpen:f.onTrue,collapse:C.value,onCollapse:C.onToggle}),e.jsx(ee,{in:!C.value,unmountOnExit:!0,children:e.jsx(S,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},gap:3,children:n.filter(a=>a.type!=="folder").map(a=>e.jsx(uo,{file:a,selected:s.includes(a.id),onSelect:()=>c(a.id),onDelete:()=>h(a.id),sx:{maxWidth:"auto"}},a.id))})}),!!(s!=null&&s.length)&&e.jsx(mo,{numSelected:s.length,rowCount:n.length,selected:s,onSelectAllItems:a=>j(a,n.map(I=>I.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(R,{size:"small",color:"error",variant:"contained",startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),onClick:t,sx:{mr:1},children:"Delete"}),e.jsx(R,{color:"primary",size:"small",variant:"contained",startIcon:e.jsx(x,{icon:"solar:share-bold"}),onClick:v.onTrue,children:"Share"})]})})]}),e.jsx(X,{open:v.value,inviteEmail:l,onChangeInvite:p,onClose:()=>{v.onFalse(),b("")}}),e.jsx(V,{open:f.value,onClose:f.onFalse}),e.jsx(V,{open:m.value,onClose:m.onFalse,title:"New Folder",onCreate:()=>{m.onFalse(),i(""),console.info("CREATE NEW FOLDER",u)},folderName:u,onChangeFolderName:g})]})}function jo({filters:o,onFilters:n,canReset:h,onResetFilters:t,results:s,...c}){const j=xe(o.startDate,o.endDate),r=d.useCallback(()=>{n("name","")},[n]),u=d.useCallback(l=>{const b=o.type.filter(v=>v!==l);n("type",b)},[o.type,n]),i=d.useCallback(()=>{n("startDate",null),n("endDate",null)},[n]);return e.jsxs(k,{spacing:1.5,...c,children:[e.jsxs(S,{sx:{typography:"body2"},children:[e.jsx("strong",{children:s}),e.jsx(S,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(k,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!o.type.length&&e.jsx(W,{label:"Types:",children:o.type.map(l=>e.jsx($,{label:l,size:"small",onDelete:()=>u(l)},l))}),o.startDate&&o.endDate&&e.jsx(W,{label:"Date:",children:e.jsx($,{size:"small",label:j,onDelete:i})}),!!o.name&&e.jsx(W,{label:"Keyword:",children:e.jsx($,{label:o.name,size:"small",onDelete:r})}),h&&e.jsx(R,{color:"error",onClick:t,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function W({label:o,children:n,sx:h,...t}){return e.jsxs(k,{component:ie,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...h},...t,children:[e.jsx(S,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(k,{spacing:1,direction:"row",flexWrap:"wrap",children:n})]})}const te={name:"",type:[],startDate:null,endDate:null};function Co(){const{enqueueSnackbar:o}=G(),n=We({defaultRowsPerPage:10}),h=Ie(),t=w(),s=w(),c=w(),[j,r]=d.useState("list"),[u,i]=d.useState(Ae),[l,b]=d.useState(te),v=Pe(l.startDate,l.endDate),m=bo({inputData:u,comparator:Ue(n.order,n.orderBy),filters:l,dateError:v}),f=m.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage),C=!!l.name||!!l.type.length||!!l.startDate&&!!l.endDate,y=!m.length&&C||!m.length,p=d.useCallback((D,P)=>{P!==null&&r(P)},[]),g=d.useCallback((D,P)=>{n.onResetPage(),b(O=>({...O,[D]:P}))},[n]),a=d.useCallback(()=>{b(te)},[]),I=d.useCallback(D=>{const P=u.filter(O=>O.id!==D);o("Delete success!"),i(P),n.onUpdatePageDeleteRow(f.length)},[f.length,o,n,u]),F=d.useCallback(()=>{const D=u.filter(P=>!n.selected.includes(P.id));o("Delete success!"),i(D),n.onUpdatePageDeleteRows({totalRowsInPage:f.length,totalRowsFiltered:m.length})},[m.length,f.length,o,n,u]),A=e.jsxs(k,{spacing:2,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[e.jsx(xo,{openDateRange:t.value,onCloseDateRange:t.onFalse,onOpenDateRange:t.onTrue,filters:l,onFilters:g,dateError:v,typeOptions:Le}),e.jsxs(Ze,{size:"small",value:j,exclusive:!0,onChange:p,children:[e.jsx(ne,{value:"list",children:e.jsx(x,{icon:"solar:list-bold"})}),e.jsx(ne,{value:"grid",children:e.jsx(x,{icon:"mingcute:dot-grid-fill"})})]})]}),T=e.jsx(jo,{filters:l,onResetFilters:a,canReset:C,onFilters:g,results:m.length});return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{maxWidth:h.themeStretch?!1:"lg",children:[e.jsxs(k,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(N,{variant:"h4",children:"File Manager"}),e.jsx(R,{variant:"contained",startIcon:e.jsx(x,{icon:"eva:cloud-upload-fill"}),onClick:c.onTrue,children:"Upload"})]}),e.jsxs(k,{spacing:2.5,sx:{my:{xs:3,md:5}},children:[A,C&&T]}),y?e.jsx(ze,{filled:!0,title:"No Data",sx:{py:10}}):e.jsx(e.Fragment,{children:j==="list"?e.jsx(po,{table:n,dataFiltered:m,onDeleteRow:I,notFound:y,onOpenConfirm:s.onTrue}):e.jsx(go,{table:n,dataFiltered:m,onDeleteItem:I,onOpenConfirm:s.onTrue})})]}),e.jsx(V,{open:c.value,onClose:c.onFalse}),e.jsx(Q,{open:s.value,onClose:s.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",n.selected.length," "]})," items?"]}),action:e.jsx(R,{variant:"contained",color:"error",onClick:()=>{F(),s.onFalse()},children:"Delete"})})]})}function bo({inputData:o,comparator:n,filters:h,dateError:t}){const{name:s,type:c,startDate:j,endDate:r}=h,u=o.map((i,l)=>[i,l]);return u.sort((i,l)=>{const b=n(i[0],l[0]);return b!==0?b:i[1]-l[1]}),o=u.map(i=>i[0]),s&&(o=o.filter(i=>i.name.toLowerCase().indexOf(s.toLowerCase())!==-1)),c.length&&(o=o.filter(i=>c.includes(Ee(i.type)))),t||j&&r&&(o=o.filter(i=>Be(i.createdAt,j,r))),o}function on(){return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{children:e.jsx("title",{children:" Dashboard: File Manager"})}),e.jsx(Co,{})]})}export{on as default};
