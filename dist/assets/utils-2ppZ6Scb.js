import{dN as e,dO as c,dP as f,aP as r}from"./index-0ZRfM3mG.js";function a(n,M){const o=new Date().getFullYear(),s=n?e(n):null,y=M?e(M):null,u=o===s&&o===y,d=n&&M?c(new Date(n),new Date(M)):!1,l=n&&M?f(new Date(n),new Date(M)):!1;return u?l?d?r(M,"dd MMM yy"):`${r(n,"dd")} - ${r(M,"dd MMM yy")}`:`${r(n,"dd MMM")} - ${r(M,"dd MMM yy")}`:`${r(n,"dd MMM yy")} - ${r(M,"dd MMM yy")}`}export{a as s};