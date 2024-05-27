import{j as e,z as I,q as i,S as l,L as m,B as g,s as O,a as G,i as L,v as T,r as t,g as s,C as A,x as M,p as N,y as E,D as x}from"./index-HVmlIZYv.js";import{u as F}from"./order--pk5BSuz.js";import{E as h}from"./empty-content-J0vuGcwT.js";import{C as B}from"./confirm-dialog-TRAlgkNB.js";import{b as p,D as P,G as W,a as V}from"./DataGrid-z0EVE2U0.js";function U({params:o}){return e.jsx(I,{variant:"soft",color:o.row.approved&&"info"||"default",children:o.row.approved?"Approved":""})}function z({params:o}){return e.jsx(i,{primary:o.row.location,secondary:o.row.location,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function H({params:o}){return e.jsx(l,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:e.jsx(i,{disableTypography:!0,primary:e.jsx(m,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:o.row.onViewRow,href:"/graveyard/i",sx:{cursor:"pointer"},children:o.row.graveyard}),secondary:e.jsx(g,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:o.row.category}),sx:{display:"flex",flexDirection:"column"}})})}function _({params:o}){return e.jsxs(l,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(O,{alt:o.row.name,src:o.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(i,{disableTypography:!0,primary:e.jsx(m,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:o.row.onViewRow,href:"/graveyard/i",sx:{cursor:"pointer"},children:o.row.name}),secondary:e.jsx(g,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:o.row.category}),sx:{display:"flex",flexDirection:"column"}})]})}const q=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],Q={category:!1},J=["category","actions"];function ee(){const o=G(),a=!1,d=L(),y=T(),{products:c,productsLoading:f}=F(),[w,b]=t.useState([]),[n,j]=t.useState([]),[C,v]=t.useState(Q);t.useEffect(()=>{c.length&&b([])},[c]);const S=t.useCallback(()=>{},[]),R=t.useCallback(r=>{},[d,a]),D=t.useCallback(r=>{},[d,a]),u=[{field:"user",headerName:"User",flex:1,minWidth:220,hideable:!1,renderCell:r=>e.jsx(_,{params:r})},{field:"graveyard",headerName:"Graveyard",minWidth:220,renderCell:r=>e.jsx(H,{params:r})},{field:"service",headerName:"Service",minWidth:220,renderCell:r=>e.jsx(z,{params:r})},{field:"approve",headerName:"Approved Status",width:150,type:"singleSelect",editable:!0,valueOptions:q,renderCell:r=>e.jsx(U,{params:r})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:r=>[e.jsx(p,{showInMenu:!0,icon:e.jsx(s,{icon:"solar:eye-bold"}),label:"Approve",onClick:()=>D(r.row.id)}),e.jsx(p,{showInMenu:!0,icon:e.jsx(s,{icon:"solar:pen-bold"}),label:"Reject",onClick:()=>R(r.row.id)})]}],k=()=>u.filter(r=>!J.includes(r.field)).map(r=>r.field);return e.jsxs(e.Fragment,{children:[e.jsxs(A,{maxWidth:y.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(M,{heading:"Ordered Services",links:[{name:"Fellesraad",href:N.dashboard.root},{name:"Orders"}],sx:{mb:{xs:3,md:5}}}),e.jsx(E,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:e.jsx(P,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:w,columns:u,loading:f,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:r=>{j(r)},columnVisibilityModel:C,onColumnVisibilityModelChange:r=>v(r),slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(W,{children:[e.jsx(V,{}),e.jsx(l,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!n.length&&e.jsxs(x,{size:"small",color:"error",startIcon:e.jsx(s,{icon:"solar:trash-bin-trash-bold"}),onClick:o.onTrue,children:["Reject (",n.length,")"]})})]})}),noRowsOverlay:()=>e.jsx(h,{title:"No Data"}),noResultsOverlay:()=>e.jsx(h,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:k}}})})]}),e.jsx(B,{open:o.value,onClose:o.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete"," ",e.jsxs("strong",{children:[" ",n.length," "]})," items?"]}),action:e.jsx(x,{variant:"contained",color:"error",onClick:()=>{S(),o.onFalse()},children:"Delete"})})]})}export{ee as O};
