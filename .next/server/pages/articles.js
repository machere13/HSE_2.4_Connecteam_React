"use strict";(()=>{var e={};e.id=977,e.ids=[220,977],e.modules={237:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},1413:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2015:e=>{e.exports=require("react")},3405:(e,t,r)=>{r.r(t),r.d(t,{config:()=>v,default:()=>g,getServerSideProps:()=>_,getStaticPaths:()=>b,getStaticProps:()=>S,reportWebVitals:()=>h,routeModule:()=>y,unstable_getServerProps:()=>A,unstable_getServerSideProps:()=>x,unstable_getStaticParams:()=>m,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>M});var a={};r.r(a),r.d(a,{default:()=>f,getStaticProps:()=>P});var n=r(3885),s=r(237),i=r(1413),o=r(9616),u=r.n(o),l=r(5504),c=r.n(l),d=r(8732),p=r(4292);let P=async()=>{try{return{props:{articles:await (0,p.G)()},revalidate:60}}catch(e){return console.error("Error:",e),{props:{articles:[]}}}};function f({articles:e}){return(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Все статьи"}),(0,d.jsx)("ul",{children:e.map(e=>(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:`/articles/${e.slug}`,children:e.title})},e.id))})]})}let g=(0,i.M)(a,"default"),S=(0,i.M)(a,"getStaticProps"),b=(0,i.M)(a,"getStaticPaths"),_=(0,i.M)(a,"getServerSideProps"),v=(0,i.M)(a,"config"),h=(0,i.M)(a,"reportWebVitals"),M=(0,i.M)(a,"unstable_getStaticProps"),j=(0,i.M)(a,"unstable_getStaticPaths"),m=(0,i.M)(a,"unstable_getStaticParams"),A=(0,i.M)(a,"unstable_getServerProps"),x=(0,i.M)(a,"unstable_getServerSideProps"),y=new n.PagesRouteModule({definition:{kind:s.A.PAGES,page:"/articles",pathname:"/articles",bundlePath:"",filename:""},components:{App:c(),Document:u()},userland:a})},3873:e=>{e.exports=require("path")},4292:(e,t,r)=>{r.d(t,{G:()=>o});var a=r(3873),n=r.n(a),s=r(9748),i=r.n(s);let o=async()=>{let e=n().join(process.cwd(),"public","data","articles.json");return JSON.parse(await i().readFile(e,"utf8"))}},5504:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let a=r(7020),n=r(8732),s=a._(r(2015)),i=r(4718);async function o(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class u extends s.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}u.origGetInitialProps=o,u.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8732:e=>{e.exports=require("react/jsx-runtime")},9748:e=>{e.exports=require("fs/promises")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[616],()=>r(3405));module.exports=a})();