import{k as H,aV as q,z as b,c as f,d as p,dS as x,eb as A,dz as $,cT as z,r as n,em as u,e as M,o as W,p as G,j as e,Q as o,T as l,v as S,J as C,S as t,ex as U,ew as K,ez as V,eA as X,cU as Y,W as E,B as v,h as O,X as Q,aN as Z,f as T,I as J,ev as ee,F as se,i as ae}from"./index-HNXcBFmK.js";import{a as k}from"./rhf-checkbox-JZf0apXg.js";import{R as ie}from"./rhf-switch-2_ewxqlY.js";import{R as le}from"./rhf-editor-NyTipjcO.js";import{R as te}from"./rhf-radio-group-9VMZL7V0.js";import{R as c}from"./rhf-autocomplete-wFIFSb62.js";import{C as P}from"./Chip-3avuppyl.js";import{D as ne}from"./DatePicker-8wVTWTxc.js";import{F as oe}from"./FormControlLabel-lt5zSUTX.js";import{S as re}from"./Switch-q0S7btkt.js";function ue({currentJob:s}){const R=H(),r=q("up","md"),{enqueueSnackbar:w}=b(),F=f().shape({title:p().required("Title is required"),content:p().required("Content is required"),employmentTypes:x().min(1,"Choose at least one option"),role:p().required("Role is required"),skills:x().min(1,"Choose at least one option"),workingSchedule:x().min(1,"Choose at least one option"),benefits:x().min(1,"Choose at least one option"),locations:x().min(1,"Choose at least one option"),expiredDate:A().nullable().required("Expired date is required"),salary:f().shape({type:p(),price:$().min(1,"Price is required"),negotiable:z()}),experience:p()}),m=n.useMemo(()=>({title:(s==null?void 0:s.title)||"",content:(s==null?void 0:s.content)||"",employmentTypes:(s==null?void 0:s.employmentTypes)||[],experience:(s==null?void 0:s.experience)||"1 year exp",role:(s==null?void 0:s.role)||u[1],skills:(s==null?void 0:s.skills)||[],workingSchedule:(s==null?void 0:s.workingSchedule)||[],locations:(s==null?void 0:s.locations)||[],benefits:(s==null?void 0:s.benefits)||[],expiredDate:(s==null?void 0:s.expiredDate)||null,salary:(s==null?void 0:s.salary)||{type:"Hourly",price:0,negotiable:!1}}),[s]),y=M({resolver:W(F),defaultValues:m}),{reset:h,control:g,handleSubmit:I,formState:{isSubmitting:_}}=y;n.useEffect(()=>{s&&h(m)},[s,m,h]);const B=I(async a=>{try{await new Promise(i=>setTimeout(i,500)),h(),w(s?"Update success!":"Create success!"),R.push(G.dashboard.job.root),console.info("DATA",a)}catch(i){console.error(i)}}),D=e.jsxs(e.Fragment,{children:[r&&e.jsxs(o,{md:4,children:[e.jsx(l,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(o,{xs:12,md:8,children:e.jsxs(S,{children:[!r&&e.jsx(C,{title:"Details"}),e.jsxs(t,{spacing:3,sx:{p:3},children:[e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Title"}),e.jsx(T,{name:"title",placeholder:"Ex: Software Engineer..."})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Content"}),e.jsx(le,{simple:!0,name:"content"})]})]})]})})]}),L=e.jsxs(e.Fragment,{children:[r&&e.jsxs(o,{md:4,children:[e.jsx(l,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(o,{xs:12,md:8,children:e.jsxs(S,{children:[!r&&e.jsx(C,{title:"Properties"}),e.jsxs(t,{spacing:3,sx:{p:3},children:[e.jsxs(t,{spacing:1,children:[e.jsx(l,{variant:"subtitle2",children:"Employment type"}),e.jsx(k,{row:!0,spacing:4,name:"employmentTypes",options:U})]}),e.jsxs(t,{spacing:1,children:[e.jsx(l,{variant:"subtitle2",children:"Experience"}),e.jsx(te,{row:!0,spacing:4,name:"experience",options:K})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Role"}),e.jsx(c,{name:"role",autoHighlight:!0,options:u.map(a=>a),getOptionLabel:a=>a,renderOption:(a,i)=>n.createElement("li",{...a,key:i},i)})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Skills"}),e.jsx(c,{name:"skills",placeholder:"+ Skills",multiple:!0,disableCloseOnSelect:!0,options:V.map(a=>a),getOptionLabel:a=>a,renderOption:(a,i)=>n.createElement("li",{...a,key:i},i),renderTags:(a,i)=>a.map((d,j)=>n.createElement(P,{...i({index:j}),key:d,label:d,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Working schedule"}),e.jsx(c,{name:"workingSchedule",placeholder:"+ Schedule",multiple:!0,disableCloseOnSelect:!0,options:X.map(a=>a),getOptionLabel:a=>a,renderOption:(a,i)=>n.createElement("li",{...a,key:i},i),renderTags:(a,i)=>a.map((d,j)=>n.createElement(P,{...i({index:j}),key:d,label:d,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Locations"}),e.jsx(c,{name:"locations",type:"country",placeholder:"+ Locations",multiple:!0,options:Y.map(a=>a.label),getOptionLabel:a=>a})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Expired"}),e.jsx(E,{name:"expiredDate",control:g,render:({field:a,fieldState:{error:i}})=>e.jsx(ne,{...a,format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!i,helperText:i==null?void 0:i.message}}})})]}),e.jsxs(t,{spacing:2,children:[e.jsx(l,{variant:"subtitle2",children:"Salary"}),e.jsx(E,{name:"salary.type",control:g,render:({field:a})=>e.jsx(v,{gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[{label:"Hourly",icon:e.jsx(O,{icon:"solar:clock-circle-bold",width:32,sx:{mb:2}})},{label:"Custom",icon:e.jsx(O,{icon:"solar:wad-of-money-bold",width:32,sx:{mb:2}})}].map(i=>e.jsxs(Q,{component:Z,variant:"outlined",onClick:()=>a.onChange(i.label),sx:{p:2.5,borderRadius:1,typography:"subtitle2",flexDirection:"column",...i.label===a.value&&{borderWidth:2,borderColor:"text.primary"}},children:[i.icon,i.label]},i.label))})}),e.jsx(T,{name:"salary.price",placeholder:"0.00",type:"number",InputProps:{startAdornment:e.jsx(J,{position:"start",children:e.jsx(v,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})}}),e.jsx(ie,{name:"salary.negotiable",label:"Salary is negotiable"})]}),e.jsxs(t,{spacing:1,children:[e.jsx(l,{variant:"subtitle2",children:"Benefits"}),e.jsx(k,{name:"benefits",options:ee,sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}})]})]})]})})]}),N=e.jsxs(e.Fragment,{children:[r&&e.jsx(o,{md:4}),e.jsxs(o,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(oe,{control:e.jsx(re,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(ae,{type:"submit",variant:"contained",size:"large",loading:_,sx:{ml:2},children:s?"Save Changes":"Create Job"})]})]});return e.jsx(se,{methods:y,onSubmit:B,children:e.jsxs(o,{container:!0,spacing:3,children:[D,L,N]})})}export{ue as J};
