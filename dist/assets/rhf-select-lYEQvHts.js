import{j as e,a_ as b,B as o}from"./index-lMmDPpwH.js";import{a as f,C as j}from"./form-provider-f1RDglyc.js";import{T as C,a as F,b as S,S as v,F as R}from"./TextField-L8IfDKvJ.js";import{C as g}from"./Checkbox-vWtJNdsN.js";import{C as y}from"./Chip-obpKpu2y.js";function M({name:a,native:i,maxHeight:n=220,helperText:c,children:d,PaperPropsSx:u,...r}){const{control:m}=f();return e.jsx(j,{name:a,control:m,render:({field:p,fieldState:{error:t}})=>e.jsx(C,{...p,select:!0,fullWidth:!0,SelectProps:{native:i,MenuProps:{PaperProps:{sx:{...!i&&{maxHeight:typeof n=="number"?n:"unset"},...u}}},sx:{textTransform:"capitalize"}},error:!!t,helperText:t?t==null?void 0:t.message:c,...r,children:d})})}function k({name:a,chip:i,label:n,options:c,checkbox:d,placeholder:u,helperText:r,...m}){const{control:p}=f(),t=x=>{const s=c.filter(l=>x.includes(l.value));return!s.length&&u?e.jsx(o,{sx:{color:"text.disabled"},children:u}):i?e.jsx(o,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:s.map(l=>e.jsx(y,{size:"small",label:l.label},l.value))}):s.map(l=>l.label).join(", ")};return e.jsx(j,{name:a,control:p,render:({field:x,fieldState:{error:s}})=>e.jsxs(F,{error:!!s,...m,children:[n&&e.jsxs(S,{id:a,children:[" ",n," "]}),e.jsx(v,{...x,multiple:!0,displayEmpty:!!u,id:`multiple-${a}`,labelId:a,label:n,renderValue:t,children:c.map(l=>{const h=x.value.includes(l.value);return e.jsxs(b,{value:l.value,children:[d&&e.jsx(g,{size:"small",disableRipple:!0,checked:h}),l.label]},l.value)})}),(!!s||r)&&e.jsx(R,{error:!!s,children:s?s==null?void 0:s.message:r})]})})}export{M as R,k as a};