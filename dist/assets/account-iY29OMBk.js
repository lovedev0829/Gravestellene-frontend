import{z as T,c as U,d as y,eb as K,cT as Q,e as I,o as B,r as j,j as e,F as q,Q as x,v as C,T as F,t as w,B as P,f,cU as X,S as h,i as N,bE as Y,bi as z,X as O,h as i,w as _,g as A,bj as H,bk as v,Z as ee,M as se,I as k,bl as ne,b as S,J as D,K as $,m as G,ba as oe,L as re,W as te,en as ae,q as ie,C as le,s as ce,p as L,bs as de,bt as xe,eo as me,ep as pe,eq as ue,er as he,ed as je,H as be}from"./index-HNXcBFmK.js";import{d as ge,f as ye}from"./format-number-CyLv55jy.js";import{a as fe}from"./rhf-upload-gig_X0_x.js";import{R as we}from"./rhf-switch-2_ewxqlY.js";import{R as Ce}from"./rhf-autocomplete-wFIFSb62.js";import{P as ve,a as Se,b as Pe}from"./new-password-icon-1-nCAx0_.js";import{A as Ae}from"./address-list-dialog-XIc4LLgJ.js";import{P as ke}from"./payment-new-card-dialog-u88tTh30.js";import{A as Te,a as Ie}from"./address-new-form-lq22GI9b.js";import{F as qe}from"./FormControlLabel-lt5zSUTX.js";import{S as Fe}from"./Switch-q0S7btkt.js";import"./upload-cFP1HCuD.js";import"./preview-multi-file-9P5csR_D.js";import"./index-D8YE_QsH.js";import"./tslib.es6-ADzvKRL9.js";import"./fade-VV5890gg.js";import"./transition-eqIn2NYL.js";import"./index-OmRGj2RI.js";import"./Autocomplete-GN7x_yCw.js";import"./Chip-3avuppyl.js";import"./DialogTitle-WOjgF7_D.js";import"./dialogTitleClasses-6FDEkIU1.js";import"./DialogContent-TegZmxqz.js";import"./DialogActions-LK-BktfY.js";import"./rhf-checkbox-JZf0apXg.js";import"./Checkbox-Ym_NGexD.js";import"./SwitchBase-jg6lkq6c.js";import"./rhf-radio-group-9VMZL7V0.js";import"./Radio-usAzyCwv.js";function Ne(){const{enqueueSnackbar:n}=T(),{user:s}=Y(),r=U().shape({displayName:y().required("Name is required"),email:y().required("Email is required").email("Email must be a valid email address"),photoURL:K().nullable().required("Avatar is required"),phoneNumber:y().required("Phone number is required"),country:y().required("Country is required"),address:y().required("Address is required"),state:y().required("State is required"),city:y().required("City is required"),zipCode:y().required("Zip code is required"),about:y().required("About is required"),isPublic:Q()}),t={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",photoURL:(s==null?void 0:s.photoURL)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},c=I({resolver:B(r),defaultValues:t}),{setValue:u,handleSubmit:b,formState:{isSubmitting:l}}=c,p=b(async a=>{try{await new Promise(m=>setTimeout(m,500)),n("Update success!"),console.info("DATA",a)}catch(m){console.error(m)}}),o=j.useCallback(a=>{const m=a[0],g=Object.assign(m,{preview:URL.createObjectURL(m)});m&&u("photoURL",g,{shouldValidate:!0})},[u]);return e.jsx(q,{methods:c,onSubmit:p,children:e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(x,{xs:12,md:4,children:e.jsxs(C,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(fe,{name:"photoURL",maxSize:3145728,onDrop:o,helperText:e.jsxs(F,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",ge(3145728)]})}),e.jsx(we,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}}),e.jsx(w,{variant:"soft",color:"error",sx:{mt:3},children:"Delete User"})]})}),e.jsx(x,{xs:12,md:8,children:e.jsxs(C,{sx:{p:3},children:[e.jsxs(P,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(f,{name:"displayName",label:"Name"}),e.jsx(f,{name:"email",label:"Email Address"}),e.jsx(f,{name:"phoneNumber",label:"Phone Number"}),e.jsx(f,{name:"address",label:"Address"}),e.jsx(Ce,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",options:X.map(a=>a.label),getOptionLabel:a=>a}),e.jsx(f,{name:"state",label:"State/Region"}),e.jsx(f,{name:"city",label:"City"}),e.jsx(f,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(h,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(f,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(N,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})]})]})})]})})}function M({card:n,sx:s,...r}){const t=z();return e.jsxs(e.Fragment,{children:[e.jsxs(h,{spacing:1,component:O,variant:"outlined",sx:{p:2.5,width:1,position:"relative",...s},...r,children:[e.jsxs(h,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{icon:n.cardType==="visa"&&"logos:visa"||"logos:mastercard",width:36}),n.primary&&e.jsx(_,{color:"info",children:"Default"})]}),e.jsx(F,{variant:"subtitle2",children:n.cardNumber}),e.jsx(A,{onClick:t.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(H,{open:t.open,onClose:t.onClose,children:[e.jsxs(v,{onClick:t.onClose,children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(v,{onClick:t.onClose,children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(v,{onClick:t.onClose,sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function De({open:n,list:s,onClose:r,selected:t,onSelect:c}){const[u,b]=j.useState(""),p=!Re({inputData:s,query:u}).length&&!!u,o=j.useCallback(g=>{b(g.target.value)},[]),a=j.useCallback(g=>{c(g),b(""),r()},[r,c]),m=e.jsx(h,{spacing:2.5,sx:{p:3},children:s.map(g=>e.jsx(M,{card:g,onClick:()=>a(g),sx:{cursor:"pointer",...t(g.id)&&{boxShadow:R=>`0 0 0 2px ${R.palette.text.primary}`}}},g.id))});return e.jsxs(ee,{fullWidth:!0,maxWidth:"xs",open:n,onClose:r,children:[e.jsxs(h,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(F,{variant:"h6",children:" Cards "}),e.jsx(w,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(h,{sx:{px:3},children:e.jsx(se,{value:u,onChange:o,placeholder:"Search...",InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),p?e.jsx(ne,{query:u,sx:{px:3,pt:5,pb:10}}):m]})}function Re({inputData:n,query:s}){return s?n.filter(r=>r.cardNumber.toLowerCase().indexOf(s.toLowerCase())!==-1):n}function Ee({cardList:n,addressBook:s,plans:r}){const t=S(),c=S(),u=s.filter(d=>d.primary)[0],b=n.filter(d=>d.primary)[0],[l,p]=j.useState(""),[o,a]=j.useState(u),[m,g]=j.useState(b),R=j.useCallback(d=>{r.filter(J=>J.primary)[0].subscription!==d&&p(d)},[r]),W=j.useCallback(d=>{a(d)},[]),V=j.useCallback(d=>{g(d)},[]),Z=r.map(d=>e.jsx(x,{xs:12,md:4,children:e.jsxs(h,{component:O,variant:"outlined",onClick:()=>R(d.subscription),sx:{p:2.5,position:"relative",cursor:"pointer",...d.primary&&{opacity:.48,cursor:"default"},...d.subscription===l&&{boxShadow:E=>`0 0 0 2px ${E.palette.text.primary}`}},children:[d.primary&&e.jsx(_,{color:"info",startIcon:e.jsx(i,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),e.jsxs(P,{sx:{width:48,height:48},children:[d.subscription==="basic"&&e.jsx(ve,{}),d.subscription==="starter"&&e.jsx(Se,{}),d.subscription==="premium"&&e.jsx(Pe,{})]}),e.jsx(P,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:d.subscription}),e.jsxs(h,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[d.price||"Free",!!d.price&&e.jsx(P,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},d.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx(D,{title:"Plan"}),e.jsx(x,{container:!0,spacing:2,sx:{p:3},children:Z}),e.jsxs(h,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(x,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:l||"-"})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(x,{xs:12,md:8,children:e.jsx(w,{onClick:t.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:o==null?void 0:o.name})})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(x,{xs:12,md:8,sx:{color:"text.secondary"},children:o==null?void 0:o.fullAddress})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(x,{xs:12,md:8,sx:{color:"text.secondary"},children:o==null?void 0:o.phoneNumber})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(x,{xs:12,md:8,children:e.jsx(w,{onClick:c.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:m==null?void 0:m.cardNumber})})]})]}),e.jsx($,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(w,{variant:"outlined",children:"Cancel Plan"}),e.jsx(w,{variant:"contained",children:"Upgrade Plan"})]})]}),e.jsx(De,{list:n,open:c.value,onClose:c.onFalse,selected:d=>(m==null?void 0:m.id)===d,onSelect:V}),e.jsx(Ae,{list:s,open:t.value,onClose:t.onFalse,selected:d=>(o==null?void 0:o.id)===d,onSelect:W,action:e.jsx(w,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}function Le({cards:n}){const s=S();return e.jsxs(e.Fragment,{children:[e.jsxs(C,{sx:{my:3},children:[e.jsx(D,{title:"Payment Method",action:e.jsx(w,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:s.onTrue,children:"New Card"})}),e.jsx(P,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:n.map(r=>e.jsx(M,{card:r},r.id))})]}),e.jsx(ke,{open:s.value,onClose:s.onFalse})]})}function Ue({invoices:n}){const s=S();return e.jsxs(C,{children:[e.jsx(D,{title:"Invoice History"}),e.jsxs(h,{spacing:1.5,sx:{px:3,pt:3},children:[(s.value?n:n.slice(0,8)).map(r=>e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsx(G,{primary:r.invoiceNumber,secondary:oe(r.createdAt),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsx(F,{variant:"body2",sx:{textAlign:"right",mr:5},children:ye(r.price)}),e.jsx(re,{color:"inherit",underline:"always",variant:"body2",href:"#",children:"PDF"})]},r.id)),e.jsx($,{sx:{borderStyle:"dashed"}})]}),e.jsx(h,{alignItems:"flex-start",sx:{p:2},children:e.jsx(w,{size:"small",color:"inherit",startIcon:e.jsx(i,{icon:s.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),onClick:s.onToggle,children:s.value?"Show Less":"Show More"})})]})}function Be({addressBook:n}){const[s,r]=j.useState(""),t=z(),c=S(),u=j.useCallback(p=>{console.info("ADDRESS",p)},[]),b=j.useCallback((p,o)=>{t.onOpen(p),r(o)},[t]),l=j.useCallback(()=>{t.onClose(),r("")},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx(D,{title:"Address Book",action:e.jsx(w,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:c.onTrue,children:"Address"})}),e.jsx(h,{spacing:2.5,sx:{p:3},children:n.map(p=>e.jsx(Te,{variant:"outlined",address:p,action:e.jsx(A,{onClick:o=>{b(o,`${p.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(i,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},p.id))})]}),e.jsxs(H,{open:t.open,onClose:l,children:[e.jsxs(v,{onClick:()=>{l(),console.info("SET AS PRIMARY",s)},children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(v,{onClick:()=>{l(),console.info("EDIT",s)},children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(v,{onClick:()=>{l(),console.info("DELETE",s)},sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Ie,{open:c.value,onClose:c.onFalse,onCreate:u})]})}function ze({cards:n,plans:s,invoices:r,addressBook:t}){return e.jsxs(x,{container:!0,spacing:5,disableEqualOverflow:!0,children:[e.jsxs(x,{xs:12,md:8,children:[e.jsx(Ee,{plans:s,cardList:n,addressBook:t}),e.jsx(Le,{cards:n}),e.jsx(Be,{addressBook:t})]}),e.jsx(x,{xs:12,md:4,children:e.jsx(Ue,{invoices:r})})]})}function Oe({socialLinks:n}){const{enqueueSnackbar:s}=T(),r={facebook:n.facebook,instagram:n.instagram,linkedin:n.linkedin,twitter:n.twitter},t=I({defaultValues:r}),{handleSubmit:c,formState:{isSubmitting:u}}=t,b=c(async l=>{try{await new Promise(p=>setTimeout(p,500)),s("Update success!"),console.info("DATA",l)}catch(p){console.error(p)}});return e.jsx(q,{methods:t,onSubmit:b,children:e.jsxs(h,{component:C,spacing:3,sx:{p:3},children:[Object.keys(n).map(l=>e.jsx(f,{name:l,InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(i,{width:24,icon:l==="facebook"&&"eva:facebook-fill"||l==="instagram"&&"ant-design:instagram-filled"||l==="linkedin"&&"eva:linkedin-fill"||l==="twitter"&&"eva:twitter-fill"||"",color:l==="facebook"&&"#1877F2"||l==="instagram"&&"#DF3E30"||l==="linkedin"&&"#006097"||l==="twitter"&&"#1C9CEA"||""})})}},l)),e.jsx(N,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}const _e=[{subheader:"Activity",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"activity_comments",label:"Email me when someone comments onmy article"},{id:"activity_answers",label:"Email me when someone answers on my form"},{id:"activityFollows",label:"Email me hen someone follows me"}]},{subheader:"Application",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"application_news",label:"News and announcements"},{id:"application_product",label:"Weekly product updates"},{id:"application_blog",label:"Weekly blog digest"}]}];function He(){const{enqueueSnackbar:n}=T(),s=I({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:r,control:t,handleSubmit:c,formState:{isSubmitting:u}}=s,b=r(),l=c(async o=>{try{await new Promise(a=>setTimeout(a,500)),n("Update success!"),console.info("DATA",o)}catch(a){console.error(a)}}),p=(o,a)=>o.includes(a)?o.filter(m=>m!==a):[...o,a];return e.jsx(q,{methods:s,onSubmit:l,children:e.jsxs(h,{component:C,spacing:3,sx:{p:3},children:[_e.map(o=>e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(x,{xs:12,md:4,children:e.jsx(G,{primary:o.subheader,secondary:o.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(x,{xs:12,md:8,children:e.jsx(h,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(te,{name:"selected",control:t,render:({field:a})=>e.jsx(e.Fragment,{children:o.items.map(m=>e.jsx(qe,{label:m.label,labelPlacement:"start",control:e.jsx(Fe,{checked:a.value.includes(m.id),onChange:()=>a.onChange(p(b.selected,m.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},m.id))})})})})]},o.subheader)),e.jsx(N,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}function $e(){const{enqueueSnackbar:n}=T(),s=S(),r=U().shape({oldPassword:y().required("Old Password is required"),newPassword:y().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(o,{parent:a})=>o!==a.oldPassword),confirmNewPassword:y().oneOf([ae("newPassword")],"Passwords must match")}),t={oldPassword:"",newPassword:"",confirmNewPassword:""},c=I({resolver:B(r),defaultValues:t}),{reset:u,handleSubmit:b,formState:{isSubmitting:l}}=c,p=b(async o=>{try{await new Promise(a=>setTimeout(a,500)),u(),n("Update success!"),console.info("DATA",o)}catch(a){console.error(a)}});return e.jsx(q,{methods:c,onSubmit:p,children:e.jsxs(h,{component:C,spacing:3,sx:{p:3},children:[e.jsx(f,{name:"oldPassword",type:s.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(A,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(f,{name:"newPassword",label:"New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(A,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(h,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(i,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(f,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(A,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(N,{type:"submit",variant:"contained",loading:l,sx:{ml:"auto"},children:"Save Changes"})]})})}const Ge=[{value:"general",label:"General",icon:e.jsx(i,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Billing",icon:e.jsx(i,{icon:"solar:bill-list-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(i,{icon:"solar:bell-bing-bold",width:24})},{value:"social",label:"Social links",icon:e.jsx(i,{icon:"solar:share-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(i,{icon:"ic:round-vpn-key",width:24})}];function Me(){const n=ie(),[s,r]=j.useState("general"),t=j.useCallback((c,u)=>{r(u)},[]);return e.jsxs(le,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(ce,{heading:"Account",links:[{name:"Dashboard",href:L.dashboard.root},{name:"User",href:L.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(de,{value:s,onChange:t,sx:{mb:{xs:3,md:5}},children:Ge.map(c=>e.jsx(xe,{label:c.label,icon:c.icon,value:c.value},c.value))}),s==="general"&&e.jsx(Ne,{}),s==="billing"&&e.jsx(ze,{plans:me,cards:pe,invoices:ue,addressBook:he}),s==="notifications"&&e.jsx(He,{}),s==="social"&&e.jsx(Oe,{socialLinks:je.socialLinks}),s==="security"&&e.jsx($e,{})]})}function ws(){return e.jsxs(e.Fragment,{children:[e.jsx(be,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx(Me,{})]})}export{ws as default};
