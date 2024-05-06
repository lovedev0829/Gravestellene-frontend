import{j as e,n as U,ag as i,cB as A,B as s,T as h,S as x,cC as E,c as M,d as u,i as j}from"./index-GLB0-COv.js";import{u as W,M as T}from"./preview-multi-file-_oZf9tQz.js";import{d as $}from"./format-number-shkRvLbp.js";import{I as q}from"./image-sa1WTJbO.js";function G({fileRejections:t}){return t.length?e.jsx(U,{variant:"outlined",sx:{py:1,px:2,mt:3,textAlign:"left",borderStyle:"dashed",borderColor:"error.main",bgcolor:n=>i(n.palette.error.main,.08)},children:t.map(({file:n,errors:l})=>{const{path:a,size:o}=A(n);return e.jsxs(s,{sx:{my:1},children:[e.jsxs(h,{variant:"subtitle2",noWrap:!0,children:[a," - ",o?$(o):""]}),l.map(c=>e.jsxs(s,{component:"span",sx:{typography:"caption"},children:["- ",c.message]},c.code))]},a)})}):null}function H({imgUrl:t=""}){return e.jsx(s,{sx:{p:1,top:0,left:0,width:1,height:1,position:"absolute"},children:e.jsx(q,{alt:"file preview",src:t,sx:{width:1,height:1,borderRadius:1}})})}function O({disabled:t,multiple:n=!1,error:l,helperText:a,file:o,onDelete:c,files:p,thumbnail:y,onUpload:g,onRemove:v,onRemoveAll:m,sx:w,...b}){const{getRootProps:f,getInputProps:I,isDragActive:P,isDragReject:C,fileRejections:D}=W({multiple:n,disabled:t,...b}),d=!!o&&!n,R=!!p&&n&&!!p.length,S=C||!!l,z=e.jsxs(x,{spacing:3,alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:[e.jsx(E,{sx:{width:1,maxWidth:200}}),e.jsxs(x,{spacing:1,sx:{textAlign:"center"},children:[e.jsx(h,{variant:"h6",children:"Drop or Select file"}),e.jsxs(h,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click",e.jsx(s,{component:"span",sx:{mx:.5,color:"primary.main",textDecoration:"underline"},children:"browse"}),"thorough your machine"]})]})]}),F=e.jsx(H,{imgUrl:typeof o=="string"?o:o==null?void 0:o.preview}),k=d&&c&&e.jsx(M,{size:"small",onClick:c,sx:{top:16,right:16,zIndex:9,position:"absolute",color:r=>i(r.palette.common.white,.8),bgcolor:r=>i(r.palette.grey[900],.72),"&:hover":{bgcolor:r=>i(r.palette.grey[900],.48)}},children:e.jsx(u,{icon:"mingcute:close-line",width:18})}),B=R&&e.jsxs(e.Fragment,{children:[e.jsx(s,{sx:{my:3},children:e.jsx(T,{files:p,thumbnail:y,onRemove:v})}),e.jsxs(x,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[m&&e.jsx(j,{color:"inherit",variant:"outlined",size:"small",onClick:m,children:"Remove All"}),g&&e.jsx(j,{size:"small",variant:"contained",onClick:g,startIcon:e.jsx(u,{icon:"eva:cloud-upload-fill"}),children:"Upload"})]})]});return e.jsxs(s,{sx:{width:1,position:"relative",...w},children:[e.jsxs(s,{...f(),sx:{p:5,outline:"none",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",bgcolor:r=>i(r.palette.grey[500],.08),border:r=>`1px dashed ${i(r.palette.grey[500],.2)}`,transition:r=>r.transitions.create(["opacity","padding"]),"&:hover":{opacity:.72},...P&&{opacity:.72},...t&&{opacity:.48,pointerEvents:"none"},...S&&{color:"error.main",borderColor:"error.main",bgcolor:r=>i(r.palette.error.main,.08)},...d&&{padding:"24% 0"}},children:[e.jsx("input",{...I()}),d?F:z]}),k,a&&a,e.jsx(G,{fileRejections:D}),B]})}export{G as R,O as U};