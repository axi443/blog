import{k as E,U as H,_ as $,f as N,H as z,g as D,V as R,l as v,W as V,p as q,X as A,o as l,h as c,w as m,b as L,d as j,y as O,z as U,i as t,j as P,I as S,s as I,T as M,C as X,L as Y,B as G}from"./app.3281df6d.js";import{A as J,P as K}from"./Page.45bb89ec.js";import{P as Q}from"./Pager.61910012.js";import{u as Z}from"./useBlog.710824c1.js";import"./resolveTime.439cd54d.js";const k=({headers:x,activeLink:r})=>{const n=E();return H("ul",{class:{catalog:!0}},x.map(a=>H("li",{class:{active:r===a.slug,[`level-${a.level}`]:!0,[`toc-link-${a.slug}`]:!0},key:a.title,onClick:()=>{n.currentRoute.value.hash!==`#${a.slug}`&&n.push(`#${a.slug}`)}},a.title)))};k.displayName="Catalog";k.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const ee=N({setup(x){const r=Y();z();const n=D(),a=E(),T=G(),b=T.resolve,F=T.pending,i=R(),W=v(()=>i.value?r.value.headers:[]),w=o=>o.children.length>0?[o].concat(...o.children.map(w)):o,u=v(()=>[].concat(...W.value.map(w))),e=V({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),p=40,y=80,d=()=>{for(let s=u.value.length-1;s>=0;s--){const B=u.value[s].slug,C=document.querySelector(`#${B}`);if((C?C.getBoundingClientRect().top:0)<=100){e.activeLink=B;break}}window.pageYOffset>e.headerHeight+p-y?(e.isFixed=!0,e.catalogTop=y):(e.isFixed=!1,e.catalogTop=e.headerHeight+p),e.screenWidth<=719&&(e.catalogTop=-15)},g=()=>{const o=document.querySelector(".post-header");e.headerHeight=o?o.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.screenWidth<=719?e.catalogTop=-15:e.catalogTop=e.headerHeight+p};let _;q(()=>{window.addEventListener("scroll",d),g(),window.onresize=()=>(()=>{g(),d()})(),_=a.afterEach(()=>{g()})}),A(()=>{window.removeEventListener("scroll",d),_()});const{post:h}=Z(),f=v(()=>{if(!h.value)return{};const o=h.value.next;o&&(o.text=n.value.postNext);const s=h.value.prev;return s&&(s.text=n.value.postPrev),{next:o,prev:s}});return(o,s)=>(l(),c(X,null,{page:m(()=>[L(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t(b),onBeforeLeave:t(F)},{default:m(()=>[j("div",{class:S(["post-wrapper",{"show-catalog":t(i)}])},[O(L(J,{class:"post-header"},null,512),[[U,t(r).title]]),(l(),c(K,{key:t(r).path,class:"post-content"},{bottom:m(()=>[t(f).next||t(f).prev?(l(),c(Q,{key:0,data:t(f)},null,8,["data"])):P("",!0)]),_:1})),t(i)?(l(),c(t(k),{key:0,headers:t(u),"active-link":t(e).activeLink,class:S({fixed:t(e).isFixed}),style:I({top:`${t(e).catalogTop}px`})},null,8,["headers","active-link","class","style"])):P("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});var le=$(ee,[["__file","Post.vue"]]);export{le as default};
