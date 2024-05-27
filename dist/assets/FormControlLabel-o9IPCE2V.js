import{aI as M,aH as S,_ as R,bs as $,aw as d,r as L,ax as E,ay as U,cA as w,cB as B,T as v,j as p,aA as F,S as D,aB as H}from"./index-HVmlIZYv.js";function I(e){return S("MuiFormControlLabel",e)}const W=M("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),t=W,z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],G=e=>{const{classes:o,disabled:r,labelPlacement:n,error:s,required:l}=e,m={root:["root",r&&"disabled",`labelPlacement${$(n)}`,s&&"error",l&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",s&&"error"]};return H(m,I,o)},J=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${$(r.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),K=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),O=L.forwardRef(function(o,r){var n,s;const l=E({props:o,name:"MuiFormControlLabel"}),{className:m,componentsProps:k={},control:i,disabled:P,disableTypography:q,label:j,labelPlacement:T="end",required:h,slotProps:N={}}=l,_=U(l,z),b=w(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof l[c]<"u"&&(x[c]=l[c])});const A=B({props:l,muiFormControl:b,states:["error"]}),f=d({},l,{disabled:y,labelPlacement:T,required:u,error:A.error}),C=G(f),g=(s=N.typography)!=null?s:k.typography;let a=j;return a!=null&&a.type!==v&&!q&&(a=p.jsx(v,d({component:"span"},g,{className:F(C.label,g==null?void 0:g.className),children:a}))),p.jsxs(J,d({className:F(C.root,m),ownerState:f,ref:r},_,{children:[L.cloneElement(i,x),u?p.jsxs(D,{display:"block",children:[a,p.jsxs(K,{ownerState:f,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):a]}))}),V=O;export{V as F,t as f};
