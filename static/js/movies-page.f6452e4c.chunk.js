"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{1359:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,o,i,c=t(5861),s=t(885),u=t(7757),p=t.n(u),l=t(2791),f=t(1398),d=t(501),x=t(8183),h=t(6871),g=t(4834),m=t(168),v=t(6444),b=v.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  // background-color: #faf5f5;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 25px;\n  margin-bottom: 25px;\n"]))),y=v.ZP.button(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),w=v.ZP.span(o||(o=(0,m.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),Z=v.ZP.input(i||(i=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),k=t(184),j=function(n){var e=n.onSubmit,t=(0,l.useState)(""),r=(0,s.Z)(t,2),a=r[0],o=r[1],i=function(){o("")};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g.x,{children:(0,k.jsxs)(b,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(e(a),i()):f.ZP.error("The search field is empty!")},children:[(0,k.jsx)(y,{type:"submit",children:(0,k.jsx)(w,{children:"Search"})}),(0,k.jsx)(Z,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"searchQuery",value:a,onChange:function(n){o(n.target.value.toLowerCase())}})]})}),(0,k.jsx)(l.Suspense,{children:(0,k.jsx)(h.j3,{})})]})},_=t(1228);function S(){var n,e=(0,d.lr)(),t=(0,s.Z)(e,2),r=t[0],a=t[1],o=(0,l.useState)(null),i=(0,s.Z)(o,2),u=i[0],h=i[1],g=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){function n(){return(n=(0,c.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.bI)(g);case 3:if((e=n.sent).results.length){n.next=6;break}throw new Error("No results found");case 6:h(e.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),f.ZP.error("No results found",{duration:3e3});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}g&&""!==g&&function(){n.apply(this,arguments)}()}),[g]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j,{onSubmit:function(n){a({query:"".concat(n)})}}),u&&(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(_.Z,{movies:u})})]})}},1228:function(n,e,t){t.d(e,{Z:function(){return F}});var r,a,o,i,c,s,u,p=t(5861),l=t(885),f=t(7757),d=t.n(f),x=t(2791),h=t(8183),g=t(168),m=t(6444),v=m.ZP.ul(r||(r=(0,g.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 50px;\n"]))),b=t(6871),y=t(2134),w=t(501),Z=(0,m.ZP)(w.rU)(a||(a=(0,g.Z)(["\n  text-decoration: none;\n"]))),k=m.ZP.li(o||(o=(0,g.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1) translateY(-5px);\n    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);\n  }\n"]))),j=m.ZP.img(i||(i=(0,g.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  object-fit: contain;\n  margin-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    border-radius: 2px;\n  }\n"]))),_=m.ZP.h2(c||(c=(0,g.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  color: #2a363b;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),S=m.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),P=m.ZP.p(u||(u=(0,g.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  color: #2196f3;\n  margin-bottom: 10px;\n"]))),z=t(4117),C=t(184);var U=function(n){var e=n.id,t=n.poster,r=n.title,a=n.date,o=n.rating,i=n.genres,c=(0,b.TH)();return(0,C.jsxs)(k,{children:[(0,C.jsx)(Z,{to:{pathname:"/movies/".concat(e),state:{from:c}},children:(0,C.jsx)(j,{src:t?"https://image.tmdb.org/t/p/original".concat(t):z,alt:r})}),(0,C.jsx)(_,{children:r}),(0,C.jsxs)(S,{children:[(0,C.jsx)(P,{children:"".concat(i," | ").concat(a.substring(0,4))}),(0,C.jsxs)(P,{children:[(0,C.jsx)(y.pHD,{})," ",o]})]})]})};var F=function(n){var e=n.movies,t=(0,x.useState)(null),r=(0,l.Z)(t,2),a=r[0],o=r[1];return(0,x.useEffect)((function(){function n(){return(n=(0,p.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.rc)();case 3:e=n.sent,o(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,C.jsx)(v,{children:a&&e.map((function(n){var e=n.id,t=n.poster_path,r=n.title,o=n.release_date,i=n.vote_average,c=n.genre_ids;return(0,C.jsx)(U,{id:e,poster:t,title:r,date:o||"(\u30c4)",rating:i,genres:a.filter((function(n){return c.includes(n.id)})).slice(0,3).map((function(n){return n.name}))},e)}))})}},8183:function(n,e,t){t.d(e,{Bt:function(){return m},DC:function(){return u},Se:function(){return d},bI:function(){return l},r8:function(){return h},rc:function(){return b}});var r=t(5861),a=t(7757),o=t.n(a),i=t(4569),c=t.n(i);c().defaults.baseURL="https://api.themoviedb.org/3";var s="e46b87edbe0418b9678f5579382a8e13";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/trending/movie/day?api_key=".concat(s),n.next=3,c().get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&include_adult=false"),n.next=3,c().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),n.next=3,c().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.next=3,c().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),n.next=3,c().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/genre/movie/list?api_key=".concat(s),n.next=3,c().get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r.genres);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c().defaults.params={api_key:s}},4117:function(n,e,t){n.exports=t.p+"static/media/defaultMovie.337d8096ddb69176ba58.png"}}]);
//# sourceMappingURL=movies-page.f6452e4c.chunk.js.map