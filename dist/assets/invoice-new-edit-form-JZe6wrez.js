import{bI as Z,d8 as K,r as S,dG as R,j as e,S as l,B as h,T as j,D as A,aZ as z,I as W,b3 as X,i as k,d as C,az as Y,b as q,c as B,_ as P,e as I,p as L}from"./index-0ZRfM3mG.js";import{c as _,f as $,g as ee,e as w,a as F,b as se}from"./index.esm-G9SoUoJo.js";import{a as v,c as te,C as O,u as ae,F as ie}from"./form-provider-7AhGD8Yg.js";import{R as b,o as le}from"./rhf-text-field-1O6oRn4Q.js";import"./image-PdFD2BG8.js";import"./mui-one-time-password-input.es-QlRnB43f.js";import"./styles-HNTfg28z.js";import{_ as oe}from"./_baseSum-gu02AyRp.js";import{f as D}from"./format-number-eXbYiZkA.js";import{R as H}from"./rhf-select-ps_eZ5Ob.js";import{A as V}from"./address-list-dialog-jbIjEamR.js";import{D as Q}from"./DatePicker-jyLseyPd.js";import{C as ne}from"./Card-pac-bk-l.js";import{L as G}from"./LoadingButton-rLhjB2ni.js";var re=oe,de=K;function me(s){return s&&s.length?re(s,de):0}var ce=me;const xe=Z(ce);function he(){const{control:s,setValue:o,watch:p,resetField:i}=v(),{fields:d,append:m,remove:c}=te({control:s,name:"items"}),t=p(),g=t.items.map(r=>r.quantity*r.price),y=xe(g),x=y-t.discount-t.shipping+t.taxes;S.useEffect(()=>{o("totalAmount",x)},[o,x]);const N=()=>{m({title:"",description:"",service:"",quantity:1,price:0,total:0})},f=r=>{c(r)},u=S.useCallback(r=>{i(`items[${r}].quantity`),i(`items[${r}].price`),i(`items[${r}].total`)},[i]),J=S.useCallback((r,a)=>{var n;o(`items[${r}].price`,(n=R.find(T=>T.name===a))==null?void 0:n.price),o(`items[${r}].total`,t.items.map(T=>T.quantity*T.price)[r])},[o,t.items]),M=S.useCallback((r,a)=>{o(`items[${a}].quantity`,Number(r.target.value)),o(`items[${a}].total`,t.items.map(n=>n.quantity*n.price)[a])},[o,t.items]),E=S.useCallback((r,a)=>{o(`items[${a}].price`,Number(r.target.value)),o(`items[${a}].total`,t.items.map(n=>n.quantity*n.price)[a])},[o,t.items]),U=e.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{mt:3,textAlign:"right",typography:"body2"},children:[e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(h,{sx:{width:160,typography:"subtitle2"},children:D(y)||"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(h,{sx:{width:160,...t.shipping&&{color:"error.main"}},children:t.shipping?`- ${D(t.shipping)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(h,{sx:{width:160,...t.discount&&{color:"error.main"}},children:t.discount?`- ${D(t.discount)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(h,{sx:{width:160},children:t.taxes?D(t.taxes):"-"})]}),e.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(h,{children:"Total"}),e.jsx(h,{sx:{width:160},children:D(x)||"-"})]})]});return e.jsxs(h,{sx:{p:3},children:[e.jsx(j,{variant:"h6",sx:{color:"text.disabled",mb:3},children:"Details:"}),e.jsx(l,{divider:e.jsx(A,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:d.map((r,a)=>e.jsxs(l,{alignItems:"flex-end",spacing:1.5,children:[e.jsxs(l,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:[e.jsx(b,{size:"small",name:`items[${a}].title`,label:"Title",InputLabelProps:{shrink:!0}}),e.jsx(b,{size:"small",name:`items[${a}].description`,label:"Description",InputLabelProps:{shrink:!0}}),e.jsxs(H,{name:`items[${a}].service`,size:"small",label:"Service",InputLabelProps:{shrink:!0},sx:{maxWidth:{md:160}},children:[e.jsx(z,{value:"",onClick:()=>u(a),sx:{fontStyle:"italic",color:"text.secondary"},children:"None"}),e.jsx(A,{sx:{borderStyle:"dashed"}}),R.map(n=>e.jsx(z,{value:n.name,onClick:()=>J(a,n.name),children:n.name},n.id))]}),e.jsx(b,{size:"small",type:"number",name:`items[${a}].quantity`,label:"Quantity",placeholder:"0",onChange:n=>M(n,a),InputLabelProps:{shrink:!0},sx:{maxWidth:{md:96}}}),e.jsx(b,{size:"small",type:"number",name:`items[${a}].price`,label:"Price",placeholder:"0.00",onChange:n=>E(n,a),InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(h,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})},sx:{maxWidth:{md:96}}}),e.jsx(b,{disabled:!0,size:"small",type:"number",name:`items[${a}].total`,label:"Total",placeholder:"0.00",value:t.items[a].total===0?"":t.items[a].total.toFixed(2),onChange:n=>E(n,a),InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(h,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})},sx:{maxWidth:{md:104},[`& .${X.input}`]:{textAlign:{md:"right"}}}})]}),e.jsx(k,{size:"small",color:"error",startIcon:e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),onClick:()=>f(a),children:"Remove"})]},r.id))}),e.jsx(A,{sx:{my:3,borderStyle:"dashed"}}),e.jsxs(l,{spacing:3,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[e.jsx(k,{size:"small",color:"primary",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),onClick:N,sx:{flexShrink:0},children:"Add Item"}),e.jsxs(l,{spacing:2,justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{width:1},children:[e.jsx(b,{size:"small",label:"Shipping($)",name:"shipping",type:"number",sx:{maxWidth:{md:120}}}),e.jsx(b,{size:"small",label:"Discount($)",name:"discount",type:"number",sx:{maxWidth:{md:120}}}),e.jsx(b,{size:"small",label:"Taxes(%)",name:"taxes",type:"number",sx:{maxWidth:{md:120}}})]})]}),U]})}function ue(){var y;const{watch:s,setValue:o,formState:{errors:p}}=v(),i=Y("up","md"),d=s(),{invoiceFrom:m,invoiceTo:c}=d,t=q(),g=q();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:{xs:3,md:5},direction:{xs:"column",md:"row"},divider:e.jsx(A,{flexItem:!0,orientation:i?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:[e.jsxs(l,{sx:{width:1},children:[e.jsxs(l,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(j,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"From:"}),e.jsx(B,{onClick:t.onTrue,children:e.jsx(C,{icon:"solar:pen-bold"})})]}),e.jsxs(l,{spacing:1,children:[e.jsx(j,{variant:"subtitle2",children:m.name}),e.jsx(j,{variant:"body2",children:m.fullAddress}),e.jsxs(j,{variant:"body2",children:[" ",m.phoneNumber]})]})]}),e.jsxs(l,{sx:{width:1},children:[e.jsxs(l,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(j,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"To:"}),e.jsx(B,{onClick:g.onTrue,children:e.jsx(C,{icon:c?"solar:pen-bold":"mingcute:add-line"})})]}),c?e.jsxs(l,{spacing:1,children:[e.jsx(j,{variant:"subtitle2",children:c.name}),e.jsx(j,{variant:"body2",children:c.fullAddress}),e.jsxs(j,{variant:"body2",children:[" ",c.phoneNumber]})]}):e.jsx(j,{typography:"caption",sx:{color:"error.main"},children:(y=p.invoiceTo)==null?void 0:y.message})]})]}),e.jsx(V,{title:"Customers",open:t.value,onClose:t.onFalse,selected:x=>(m==null?void 0:m.id)===x,onSelect:x=>o("invoiceFrom",x),list:P,action:e.jsx(k,{size:"small",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})}),e.jsx(V,{title:"Customers",open:g.value,onClose:g.onFalse,selected:x=>(c==null?void 0:c.id)===x,onSelect:x=>o("invoiceTo",x),list:P,action:e.jsx(k,{size:"small",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}function pe(){const{control:s,watch:o}=v(),p=o();return e.jsxs(l,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:[e.jsx(b,{disabled:!0,name:"invoiceNumber",label:"Invoice number",value:p.invoiceNumber}),e.jsx(H,{fullWidth:!0,name:"status",label:"Status",InputLabelProps:{shrink:!0},PaperPropsSx:{textTransform:"capitalize"},children:["paid","pending","overdue","draft"].map(i=>e.jsx(z,{value:i,children:i},i))}),e.jsx(O,{name:"createDate",control:s,render:({field:i,fieldState:{error:d}})=>e.jsx(Q,{label:"Date create",value:i.value,onChange:m=>{i.onChange(m)},slotProps:{textField:{fullWidth:!0,error:!!d,helperText:d==null?void 0:d.message}}})}),e.jsx(O,{name:"dueDate",control:s,render:({field:i,fieldState:{error:d}})=>e.jsx(Q,{label:"Due date",value:i.value,onChange:m=>{i.onChange(m)},slotProps:{textField:{fullWidth:!0,error:!!d,helperText:d==null?void 0:d.message}}})})]})}function qe({currentInvoice:s}){const o=I(),p=q(),i=q(),d=_().shape({invoiceTo:$().nullable().required("Invoice to is required"),createDate:$().nullable().required("Create date is required"),dueDate:$().required("Due date is required").test("date-min","Due date must be later than create date",(f,{parent:u})=>f.getTime()>u.createDate.getTime()),items:ee(()=>se().of(_({title:F().required("Title is required"),service:F().required("Service is required"),quantity:w().required("Quantity is required").min(1,"Quantity must be more than 0")}))),taxes:w(),status:F(),discount:w(),shipping:w(),invoiceFrom:$(),totalAmount:w(),invoiceNumber:F()}),m=S.useMemo(()=>({invoiceNumber:(s==null?void 0:s.invoiceNumber)||"INV-1990",createDate:(s==null?void 0:s.createDate)||new Date,dueDate:(s==null?void 0:s.dueDate)||null,taxes:(s==null?void 0:s.taxes)||0,shipping:(s==null?void 0:s.shipping)||0,status:(s==null?void 0:s.status)||"draft",discount:(s==null?void 0:s.discount)||0,invoiceFrom:(s==null?void 0:s.invoiceFrom)||P[0],invoiceTo:(s==null?void 0:s.invoiceTo)||null,items:(s==null?void 0:s.items)||[{title:"",description:"",service:"",quantity:1,price:0,total:0}],totalAmount:(s==null?void 0:s.totalAmount)||0}),[s]),c=ae({resolver:le(d),defaultValues:m}),{reset:t,handleSubmit:g,formState:{isSubmitting:y}}=c,x=g(async f=>{p.onTrue();try{await new Promise(u=>setTimeout(u,500)),t(),p.onFalse(),o.push(L.dashboard.invoice.root),console.info("DATA",JSON.stringify(f,null,2))}catch(u){console.error(u),p.onFalse()}}),N=g(async f=>{i.onTrue();try{await new Promise(u=>setTimeout(u,500)),t(),i.onFalse(),o.push(L.dashboard.invoice.root),console.info("DATA",JSON.stringify(f,null,2))}catch(u){console.error(u),i.onFalse()}});return e.jsxs(ie,{methods:c,children:[e.jsxs(ne,{children:[e.jsx(ue,{}),e.jsx(pe,{}),e.jsx(he,{})]}),e.jsxs(l,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:[e.jsx(G,{color:"inherit",size:"large",variant:"outlined",loading:p.value&&y,onClick:x,children:"Save as Draft"}),e.jsxs(G,{size:"large",variant:"contained",loading:i.value&&y,onClick:N,children:[s?"Update":"Create"," & Send"]})]})]})}export{qe as I};