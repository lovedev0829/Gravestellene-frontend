import{s as n,q as o,cJ as l,m as u,n as i,r as c}from"./index-Ai7WBed9.js";const g=async r=>{const a=await n.post(o.graveyard.create,{graveyard:r});return{searchResults:(a==null?void 0:a.data)||[]}},v=async r=>{const a=await n.put(o.graveyard.update,{graveyard:r});return{searchResults:(a==null?void 0:a.data)||[]}},p=async r=>{const a=await n.put(o.graveyard.approve,{graveyard:{id:r,approved:!0}});return{searchResults:(a==null?void 0:a.data)||[]}},V=async r=>{var s,t;const a=new FormData;r.forEach(d=>{a.append("images",d)});const e=await n.post(o.graveyard.upload,a);return`${l}/${(t=(s=e.data)==null?void 0:s.result)==null?void 0:t.image_urls[0]}`};function z(r){const a=r?[`${o.graveyard.getById}/${r}`]:"",{data:e,isLoading:s,error:t,isValidating:d}=u(a,i);return c.useMemo(()=>({graveyard:e==null?void 0:e.result,graveyardLoading:s,graveyardError:t,graveyardValidating:d}),[e==null?void 0:e.result,t,s,d])}function G(){const r=o.graveyard.list,{data:a,isLoading:e,error:s,isValidating:t}=u(r,i);return c.useMemo(()=>({graveyards:a==null?void 0:a.result,graveyardsLoading:e,graveyardsError:s,graveyardsValidating:t}),[a==null?void 0:a.result,s,e,t])}async function f(r){const a={graveyardId:r};return(await n.delete(o.graveyard.delete,{data:a})).data}export{p as A,v as a,V as b,g as c,G as d,f as e,z as u};
