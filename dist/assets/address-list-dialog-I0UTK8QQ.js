import{r as l,j as e,S as o,aQ as b,db as y,T as i,z as A,B as w,a4 as C,a3 as L,I as v,g as I,bd as S}from"./index-HVmlIZYv.js";function F({title:r="Address Book",list:s,action:n,open:h,onClose:c,selected:u,onSelect:x}){const[a,d]=l.useState(""),p=k({inputData:s,query:a}),m=!p.length&&!!a,f=l.useCallback(t=>{d(t.target.value)},[]),j=l.useCallback(t=>{x(t),d(""),c()},[c,x]),g=e.jsx(o,{spacing:.5,sx:{p:.5,maxHeight:80*8,overflowX:"hidden"},children:p.map(t=>e.jsxs(o,{spacing:.5,component:b,selected:u(`${t.id}`),onClick:()=>j(t),sx:{py:1,px:1.5,borderRadius:1,flexDirection:"column",alignItems:"flex-start",[`&.${y.selected}`]:{bgcolor:"action.selected","&:hover":{bgcolor:"action.selected"}}},children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{variant:"subtitle2",children:t.name}),t.primary&&e.jsx(A,{color:"info",children:"Default"})]}),t.company&&e.jsx(w,{sx:{color:"primary.main",typography:"caption"},children:t.company}),e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:t.fullAddress}),t.phoneNumber&&e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:t.phoneNumber})]},t.id))});return e.jsxs(C,{fullWidth:!0,maxWidth:"xs",open:h,onClose:c,children:[e.jsxs(o,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsxs(i,{variant:"h6",children:[" ",r," "]}),n&&n]}),e.jsx(o,{sx:{p:2,pt:0},children:e.jsx(L,{value:a,onChange:f,placeholder:"Search...",InputProps:{startAdornment:e.jsx(v,{position:"start",children:e.jsx(I,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),m?e.jsx(S,{query:a,sx:{px:3,pt:5,pb:10}}):g]})}function k({inputData:r,query:s}){return s?r.filter(n=>n.name.toLowerCase().indexOf(s.toLowerCase())!==-1||n.fullAddress.toLowerCase().indexOf(s.toLowerCase())!==-1||`${n.company}`.toLowerCase().indexOf(s.toLowerCase())!==-1):r}export{F as A};
