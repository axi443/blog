import{_ as k,f as g,g as h,H as v,l as B,o as t,h as L,w,b as x,i as c,d as e,a as o,m as u,F as _,C,t as r}from"./app.3281df6d.js";import{P as y}from"./PageHeader.030293a5.js";const F={class:"links-wrapper"},P={class:"link-group"},$={class:"content"},b=["href"],D=["src"],H={class:"sitename"},N={class:"desc"},T=g({setup(V){const a=h(),d=v(),p=B(()=>{var l;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(l=a.value.pageText)==null?void 0:l.links),s});return(s,l)=>(t(),L(C,null,{page:w(()=>[x(y,{"page-info":c(p)},null,8,["page-info"]),e("div",F,[(t(!0),o(_,null,u(c(d).links,(i,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,r(i.title),1),e("div",P,[(t(!0),o(_,null,u(i.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",$,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,D),e("span",H,r(n.sitename),1),e("div",N,r(n.desc),1)],8,b)])]))),128))])]))),128))])]),_:1}))}});var S=k(T,[["__file","Links.vue"]]);export{S as default};
