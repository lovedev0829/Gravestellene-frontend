import{ec as o,ed as f,ee as d,b3 as n}from"./index-HVmlIZYv.js";function m(e,M){const r=new Date().getFullYear(),s=e?o(e):null,y=M?o(M):null,u=r===s&&r===y,c=e&&M?f(new Date(e),new Date(M)):!1,l=e&&M?d(new Date(e),new Date(M)):!1;return u?l?c?n(M,"dd MMM yy"):`${n(e,"dd")} - ${n(M,"dd MMM yy")}`:`${n(e,"dd MMM")} - ${n(M,"dd MMM yy")}`:`${n(e,"dd MMM yy")} - ${n(M,"dd MMM yy")}`}export{m as s};
