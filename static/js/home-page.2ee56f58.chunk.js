"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{9848:function(n,t,e){e.r(t);var r,a=e(168),c=e(5861),o=e(885),i=e(7757),u=e.n(i),s=e(2791),p=e(8183),f=e(1228),l=e(6444),d=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.DC)();case 3:t=n.sent,e=t.results,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{children:"Trending Today"}),e&&(0,d.jsx)(f.Z,{movies:e})]})};var x=l.ZP.h2(r||(r=(0,a.Z)(["\n  margin: ","px;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}))},1228:function(n,t,e){e.d(t,{Z:function(){return D}});var r,a,c,o,i,u,s,p=e(5861),f=e(885),l=e(7757),d=e.n(l),x=e(2791),h=e(8183),m=e(168),g=e(6444),v=g.ZP.ul(r||(r=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 50px;\n"]))),b=e(6871),y=e(2134),Z=e(501),w=(0,g.ZP)(Z.rU)(a||(a=(0,m.Z)(["\n  text-decoration: none;\n"]))),k=g.ZP.li(c||(c=(0,m.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1) translateY(-5px);\n    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);\n  }\n"]))),_=g.ZP.img(o||(o=(0,m.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  object-fit: contain;\n  margin-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    border-radius: 2px;\n  }\n"]))),j=g.ZP.h2(i||(i=(0,m.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  color: #2a363b;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),P=g.ZP.div(u||(u=(0,m.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),S=g.ZP.p(s||(s=(0,m.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  color: #2196f3;\n  margin-bottom: 10px;\n"]))),U=e(4117),z=e(184);var C=function(n){var t=n.id,e=n.poster,r=n.title,a=n.date,c=n.rating,o=n.genres,i=(0,b.TH)();return(0,z.jsxs)(k,{children:[(0,z.jsx)(w,{to:{pathname:"/movies/".concat(t),state:{from:i}},children:(0,z.jsx)(_,{src:e?"https://image.tmdb.org/t/p/original".concat(e):U,alt:r})}),(0,z.jsx)(j,{children:r}),(0,z.jsxs)(P,{children:[(0,z.jsx)(S,{children:"".concat(o," | ").concat(a.substring(0,4))}),(0,z.jsxs)(S,{children:[(0,z.jsx)(y.pHD,{})," ",c]})]})]})};var D=function(n){var t=n.movies,e=(0,x.useState)(null),r=(0,f.Z)(e,2),a=r[0],c=r[1];return(0,x.useEffect)((function(){function n(){return(n=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.rc)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,z.jsx)(v,{children:a&&t.map((function(n){var t=n.id,e=n.poster_path,r=n.title,c=n.release_date,o=n.vote_average,i=n.genre_ids;return(0,z.jsx)(C,{id:t,poster:e,title:r,date:c||"(\u30c4)",rating:o,genres:a.filter((function(n){return i.includes(n.id)})).slice(0,3).map((function(n){return n.name}))},t)}))})}},8183:function(n,t,e){e.d(t,{Bt:function(){return g},DC:function(){return s},Se:function(){return d},bI:function(){return f},r8:function(){return h},rc:function(){return b}});var r=e(5861),a=e(7757),c=e.n(a),o=e(4569),i=e.n(o);i().defaults.baseURL="https://api.themoviedb.org/3";var u="e46b87edbe0418b9678f5579382a8e13";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/trending/movie/day?api_key=".concat(u),n.next=3,i().get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&include_adult=false"),n.next=3,i().get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"),n.next=3,i().get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"),n.next=3,i().get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),n.next=3,i().get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/genre/movie/list?api_key=".concat(u),n.next=3,i().get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r.genres);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i().defaults.params={api_key:u}},4117:function(n,t,e){n.exports=e.p+"static/media/defaultMovie.337d8096ddb69176ba58.png"}}]);
//# sourceMappingURL=home-page.2ee56f58.chunk.js.map