"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{7947:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,a,i,c,o,s,u=t(5861),p=t(885),l=t(7757),f=t.n(l),d=t(2791),h=t(6871),x=t(4037),v=t(8183),g=t(2606),m=t(4836),b=t(168),w=t(6444),y=w.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  /* flex-direction: column; */\n  /* flex-wrap: wrap; */\n  /* justify-content: center; */\n  max-width: 1170px;\n  padding: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 25px;\n  box-shadow: 4px 4px 4px 0px #b9bfc4;\n  background-color: #bdc0c7;\n"]))),k=w.ZP.img(a||(a=(0,b.Z)(["\n  display: block;\n  max-width: 320px;\n  height: 100%;\n  object-fit: cover;\n  margin-right: 45px;\n"]))),j=w.ZP.div(i||(i=(0,b.Z)(["\n/* display: grid; */\n"]))),Z=w.ZP.h1(c||(c=(0,b.Z)(["\n  text-align: center;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  line-height: 1.16;\n  text-transform: uppercase;\n  // text-decoration: underline;\n"]))),_=w.ZP.h2(o||(o=(0,b.Z)(["\n  font-weight: 600;\n  color: #2a363b;\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),P=w.ZP.p(s||(s=(0,b.Z)(["\n  margin-bottom: 15px;\n  color: #464d5e;\n"]))),U=t(4117),S=t(4834),C=t(184);function D(e){var n,t,r=e.poster,a=e.title,i=e.overview,c=e.releaseDate,o=e.popularity,s=e.vote,u=e.genres,p=null!==(n=null===(t=(0,h.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,C.jsxs)(S.x,{children:[(0,C.jsxs)(y,{children:[(0,C.jsx)(k,{src:r?"https://image.tmdb.org/t/p/original".concat(r):U,alt:a}),(0,C.jsxs)(j,{children:[(0,C.jsx)(Z,{children:"".concat(a," (").concat(c.substring(0,4),")")}),(0,C.jsx)(_,{children:"User score:"}),(0,C.jsxs)(P,{children:[Math.round(10*s),"%"]}),(0,C.jsx)(_,{children:"Popularity"}),(0,C.jsx)(P,{children:o}),(0,C.jsx)(_,{children:"Overview"}),(0,C.jsx)(P,{children:i}),(0,C.jsx)(_,{children:"Genres"}),(0,C.jsx)(P,{children:u}),(0,C.jsx)(m.rU,{to:"cast",state:{from:p},children:"Cast"}),(0,C.jsx)(m.rU,{to:"reviews",state:{from:p},children:"Reviews"})]})]}),(0,C.jsx)(d.Suspense,{children:(0,C.jsx)(h.j3,{})})]})}var z=function(){var e=(0,h.TH)(),n=(0,h.s0)(),t=(0,h.UO)().movieId,r=(0,d.useState)(null),a=(0,p.Z)(r,2),i=a[0],c=a[1];(0,d.useEffect)((function(){function e(){return(e=(0,u.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Se)(t);case 3:if(n=e.sent){e.next=6;break}throw new Error("Page not found");case 6:c(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),x.ZP.error("Page not found",{duration:3e3});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.z,{type:"button",onClick:function(){var t;n((null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.from)||"/")},children:"Go back"}),i&&(0,C.jsx)(D,{title:i.title,poster:i.poster_path,overview:i.overview,releaseDate:i.release_date||"\u30c4",popularity:i.popularity,vote:i.vote_average,genres:i.genres.map((function(e){return e.name})).join(", ")||"\u2015"})]})}},8183:function(e,n,t){t.d(n,{Bt:function(){return g},DC:function(){return u},Se:function(){return d},bI:function(){return l},r8:function(){return x},rc:function(){return b}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),o=t.n(c),s="e46b87edbe0418b9678f5579382a8e13";function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/trending/movie/week?api_key=".concat(s,"&page=").concat(n),e.next=3,o().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(n,t){var r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/search/movie?api_key=".concat(s,"&query=").concat(n,"&page=").concat(t,"&language=en-US&include_adult=false"),e.next=3,o().get(r);case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"?api_key=").concat(s),e.next=3,o().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"/credits?api_key=").concat(s),e.next=3,o().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"),e.next=3,o().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/genre/movie/list?api_key=".concat(s),e.next=3,o().get(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r.genres);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:s}},4117:function(e,n,t){e.exports=t.p+"static/media/defaultMovie.337d8096ddb69176ba58.png"}}]);
//# sourceMappingURL=movie-details-page.f0375612.chunk.js.map