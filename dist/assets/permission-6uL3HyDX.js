import{j as e,C as c,_ as o,T as d,aD as x,bE as h,q as p,r as u,s as j,p as g,B as v,v as f,J as b,H as C}from"./index-HNXcBFmK.js";import{v as l}from"./bounce-2wMPGPoA.js";import{M as y}from"./motion-container-FC1k2uqY.js";import{T as D,a as m}from"./ToggleButtonGroup--vKgMQBJ.js";import"./transition-eqIn2NYL.js";function P({hasContent:a,roles:i,children:n,sx:t}){const{user:r}=h(),s=r==null?void 0:r.role;return typeof i<"u"&&!i.includes(s)?a?e.jsxs(c,{component:y,sx:{textAlign:"center",...t},children:[e.jsx(o.div,{variants:l().in,children:e.jsx(d,{variant:"h3",sx:{mb:2},children:"Permission Denied"})}),e.jsx(o.div,{variants:l().in,children:e.jsx(d,{sx:{color:"text.secondary"},children:"You do not have permission to access this page"})}),e.jsx(o.div,{variants:l().in,children:e.jsx(x,{sx:{height:260,my:{xs:5,sm:10}}})})]}):null:e.jsxs(e.Fragment,{children:[" ",n," "]})}function B(){const a=p(),[i,n]=u.useState("admin"),t=u.useCallback((r,s)=>{s!==null&&n(s)},[]);return e.jsxs(c,{maxWidth:a.themeStretch?!1:"lg",children:[e.jsx(j,{heading:"Permission Denied",links:[{name:"Dashboard",href:g.dashboard.root},{name:"Permission Denied"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(D,{exclusive:!0,value:i,size:"small",onChange:t,sx:{mb:5},children:[e.jsx(m,{value:"admin","aria-label":"admin role",children:"isAdmin"}),e.jsx(m,{value:"user","aria-label":"user role",children:"isUser"})]}),e.jsx(P,{hasContent:!0,roles:[i],sx:{py:10},children:e.jsx(v,{gap:3,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[...Array(8)].map((r,s)=>e.jsxs(f,{children:[e.jsx(b,{title:`Card ${s+1}`,subheader:"Proin viverra ligula"}),e.jsx(d,{variant:"body2",sx:{px:3,py:2,color:"text.secondary"},children:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum fringilla pede sit amet augue."})]},s))})})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx("title",{children:" Dashboard: Permission Denied"})}),e.jsx(B,{})]})}export{E as default};
