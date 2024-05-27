import{j as e,z as P,q as R,i as S,S as D,s as B,B as H,p as c,u as z,r,w as U,a as W,v as _,C as V,x as q,D as g,R as Q,g as n,y as $,H as J}from"./index-HVmlIZYv.js";import{b as K,a as X}from"./role-check-016q34qw.js";import{u as Y,e as Z,A as ee}from"./graveyard-DQg60Nxy.js";import{E as C}from"./empty-content-J0vuGcwT.js";import{C as te}from"./confirm-dialog-TRAlgkNB.js";import{D as oe,G as re,a as se,b}from"./DataGrid-z0EVE2U0.js";import"./graveyard-details-carousel-ltiSnrT8.js";import"./styles-u9RQnHLQ.js";import"./DialogTitle-PcjpiKfL.js";import"./dialogTitleClasses-9HrkLq5U.js";import"./DialogContent-ZuSZSHxo.js";import"./DialogActions-qajuu6WV.js";import"./index-WptKgvAm.js";import"./Autocomplete-WNTy16pS.js";import"./Chip-yi7Wa9Nd.js";import"./ClickAwayListener-_jfQIiHS.js";import"./Checkbox-m4MeutVJ.js";import"./SwitchBase-hsBiV9_9.js";import"./Switch-f6XRvqtI.js";import"./Skeleton-R_VnUK7w.js";import"./TablePagination-qo-oKBHm.js";import"./FirstPage-lXeDo4YM.js";import"./TableCell-DndY-2IM.js";import"./FormControlLabel-o9IPCE2V.js";import"./use-light-box-U6xyQPqp.js";import"./carousel-arrow-index-z2E4fUh6.js";function ae({params:o}){return e.jsx(P,{variant:"soft",color:o.row.approved&&"info"||"default",children:o.row.approved?"Approved":"Draft"})}function ne({params:o}){return e.jsx(R,{primary:o.row.location,secondary:o.row.location,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function ie({params:o}){const i=S(),d=u=>{i.push(c.fellesraad.graveyard.details(u))};return e.jsxs(D,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(B,{alt:o.row.name,src:o.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(R,{disableTypography:!0,onClick:()=>d(`${o==null?void 0:o.id}`),secondary:e.jsx(H,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:o.row.name}),sx:{display:"flex",flexDirection:"column",cursor:"pointer"}})]})}const le=[{value:"approved",label:"Approved"},{value:"draft",label:"Draft"}],ce={category:!1},de=["category","actions"];function ue(){const{user:o}=z(),[i,d]=r.useState(!1),[u,G]=r.useState(!1),{enqueueSnackbar:v}=U(),l=W(),j=S(),k=_(),{graveyards:p,graveyardsLoading:m}=Y(),[h,x]=r.useState([]),[f,A]=r.useState([]),[I,L]=r.useState(ce);r.useEffect(()=>{o!=null&&o.role&&(d(K(o==null?void 0:o.role)),G(X(o==null?void 0:o.role)))},[o==null?void 0:o.role]),r.useMemo(()=>{m||x(p)},[p,m]);const M=async t=>{try{if((await Z(t)).success){const y=h.filter(a=>a.id!==t);v("Delete success!"),x(y)}}catch(s){console.error(s)}},T=r.useCallback(()=>{console.log("delete id")},[]),F=r.useCallback(t=>{j.push(c.fellesraad.graveyard.edit(t))},[j]),E=async t=>{const s=await ee(t);if(s.searchResults.success){const y=h.map(a=>a.id===s.searchResults.result.id?{...a,approved:s.searchResults.result.approved}:a);x(y),v("Approve success!")}else console.error("Approve not success!")},N=t=>u?[e.jsx(b,{showInMenu:!0,icon:e.jsx(n,{icon:"eva:checkmark-circle-2-fill"}),label:"Approve",onClick:()=>E(t.row.id)})]:i?[e.jsx(b,{showInMenu:!0,icon:e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>M(t.row.id)}),e.jsx(b,{showInMenu:!0,icon:e.jsx(n,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>F(t.row.id)})]:[],w=[{field:"name",headerName:"Graveyard",flex:1,minWidth:280,hideable:!1,renderCell:t=>e.jsx(ie,{params:t})},{field:"location",headerName:"location",minWidth:280,renderCell:t=>e.jsx(ne,{params:t})},{field:"publish",headerName:"Publish",width:110,type:"singleSelect",editable:!0,valueOptions:le,renderCell:t=>e.jsx(ae,{params:t})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>N(t)}],O=()=>w.filter(t=>!de.includes(t.field)).map(t=>t.field);return e.jsxs(e.Fragment,{children:[e.jsxs(V,{maxWidth:k.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(q,{heading:"List",links:[{name:"Graveyard",href:c.dashboard.root},{name:"List"}],action:i&&e.jsx(g,{component:Q,href:c.fellesraad.graveyard.create,variant:"contained",startIcon:e.jsx(n,{icon:"mingcute:add-line"}),children:"New Graveyard"}),sx:{mb:{xs:3,md:5}}}),e.jsx($,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:p&&e.jsx(oe,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:h,columns:w,loading:m,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:t=>{A(t)},columnVisibilityModel:I,onColumnVisibilityModelChange:t=>L(t),slots:{toolbar:()=>e.jsxs(re,{children:[e.jsx(se,{}),e.jsx(D,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!f.length&&e.jsxs(g,{size:"small",color:"error",startIcon:e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),onClick:l.onTrue,children:["Delete (",f.length,")"]})})]}),noRowsOverlay:()=>e.jsx(C,{title:"No Data"}),noResultsOverlay:()=>e.jsx(C,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:O}}})})]}),e.jsx(te,{open:l.value,onClose:l.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete"," ",e.jsxs("strong",{children:[" ",f.length," "]})," items?"]}),action:e.jsx(g,{variant:"contained",color:"error",onClick:()=>{T(),l.onFalse()},children:"Delete"})})]})}function Pe(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("title",{children:" Graveyard: List of the Graveyard"})}),e.jsx(ue,{})]})}export{Pe as default};
