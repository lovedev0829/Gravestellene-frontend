import{j as s,G as i,S as a,h as g,r as h,C as j,B as m}from"./index-tWxiFnGS.js";import{a as p}from"./graveyard-dPDcOkmn.js";import{S as e}from"./Skeleton-ZFpo9lRw.js";import{C as u}from"./Card-ZKq7ZSof.js";function f({...r}){return s.jsxs(i,{container:!0,spacing:8,...r,children:[s.jsx(i,{xs:12,md:6,lg:7,children:s.jsx(e,{sx:{paddingTop:"100%"}})}),s.jsx(i,{xs:12,md:6,lg:5,children:s.jsxs(a,{spacing:3,children:[s.jsx(e,{sx:{height:16,width:48}}),s.jsx(e,{sx:{height:16,width:80}}),s.jsx(e,{sx:{height:16,width:.5}}),s.jsx(e,{sx:{height:16,width:.75}}),s.jsx(e,{sx:{height:120}})]})}),s.jsx(i,{xs:12,children:s.jsx(a,{direction:"row",alignItems:"center",children:[...Array(3)].map((t,n)=>s.jsxs(a,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[s.jsx(e,{variant:"circular",sx:{width:80,height:80}}),s.jsx(e,{sx:{height:16,width:160}}),s.jsx(e,{sx:{height:16,width:80}})]},n))})})]})}function G({id:r}){const{product:t,productLoading:n}=p(r),d=g(),[x,o]=h.useState(!1);h.useEffect(()=>{t&&(o(t==null?void 0:t.approved),x&&console.log("==="))},[t,x]);const c=s.jsx(f,{}),l=t&&s.jsxs(s.Fragment,{children:[s.jsx(m,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:2}}),s.jsx(u,{})]});return s.jsxs(j,{maxWidth:d.themeStretch?!1:"lg",children:[n&&c,t&&l]})}export{G};
