import{e7 as o,e8 as f,e9 as i,ba as n}from"./index-HNXcBFmK.js";function d(e,M){const r=new Date().getFullYear(),s=e?o(e):null,y=M?o(M):null,u=r===s&&r===y,l=e&&M?f(new Date(e),new Date(M)):!1,c=e&&M?i(new Date(e),new Date(M)):!1;return u?c?l?n(M,"dd MMM yy"):`${n(e,"dd")} - ${n(M,"dd MMM yy")}`:`${n(e,"dd MMM")} - ${n(M,"dd MMM yy")}`:`${n(e,"dd MMM yy")} - ${n(M,"dd MMM yy")}`}export{d as s};
