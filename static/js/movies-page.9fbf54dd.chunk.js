"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493,903],{1359:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,s=t(1413),c=t(5861),u=t(885),p=t(7757),l=t.n(p),f=t(2791),d=t(4037),h=t(6871),x=t(8183),g=t(4834),m=t(168),b=t(6444),v=b.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  // background-color: #faf5f5;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 25px;\n  margin-bottom: 25px;\n"]))),y=b.ZP.button(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),k=b.ZP.span(i||(i=(0,m.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),w=b.ZP.input(o||(o=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=t(184),j=function(n){var e=n.onSubmit,t=(0,f.useState)(""),r=(0,u.Z)(t,2),a=r[0],i=r[1],o=function(){i("")};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(g.x,{children:(0,Z.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(e(a),o()):d.ZP.error("The search field is empty!")},children:[(0,Z.jsx)(y,{type:"submit",children:(0,Z.jsx)(k,{children:"Search"})}),(0,Z.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"searchQuery",value:a,onChange:function(n){i(n.target.value.toLowerCase())}})]})}),(0,Z.jsx)(f.Suspense,{children:(0,Z.jsx)(h.j3,{})})]})},C=t(1228),P=t(9593),L=t(1204);function _(){var n=(0,f.useState)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(null),i=(0,u.Z)(a,2),o=i[0],p=i[1],g=(0,h.s0)(),m=(0,h.TH)(),b=new URLSearchParams(m.search).get("query"),v=Number(new URLSearchParams(m.search).get("page"))||1;(0,f.useEffect)((function(){function n(){return(n=(0,c.Z)(l().mark((function n(){var e,t,a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.bI)(b,v);case 3:e=n.sent,console.log("data",e),t=e.results,a=e.total_pages,t.length||(0,L.default)(),r(t),p(a),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),d.ZP.error("No results found",{duration:3e3});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}b&&(!function(){n.apply(this,arguments)}(),window.scrollTo({top:240,behavior:"smooth"}))}),[b,v]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j,{onSubmit:function(n){b!==n&&(r([]),g((0,s.Z)((0,s.Z)({},m),{},{search:"query=".concat(n,"&page=1")})))}}),t&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(C.Z,{movies:t}),(0,Z.jsx)(P.Z,{pageCount:o,onClick:function(n){var e=n.selected;g((0,s.Z)((0,s.Z)({},m),{},{search:"query=".concat(b,"&page=").concat(e+1)}))}})]})]})}},1204:function(n,e,t){t.r(e);t(2791);var r=t(184);e.default=function(){return(0,r.jsx)("h1",{children:"404 - page not found"})}},1228:function(n,e,t){t.d(e,{Z:function(){return D}});var r,a,i,o,s,c,u,p,l=t(5861),f=t(885),d=t(7757),h=t.n(d),x=t(2791),g=t(8183),m=t(168),b=t(6444),v=b.ZP.ul(r||(r=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 50px;\n"]))),y=t(6871),k=t(2134),w=t(3504),Z=(0,b.ZP)(w.rU)(a||(a=(0,m.Z)(["\n  text-decoration: none;\n"]))),j=b.ZP.li(i||(i=(0,m.Z)(["\n  border-radius: 2px;\n  /* display: flex; */\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    /* display: grid;\n    grid-template-columns: minmax(10px, 1fr) 3fr;\n    grid-gap: 25px; */\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1) translateY(-5px);\n    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);\n  }\n"]))),C=b.ZP.img(o||(o=(0,m.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  object-fit: contain;\n  margin-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    border-radius: 2px;\n  }\n"]))),P=b.ZP.h2(s||(s=(0,m.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  color: #2a363b;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),L=b.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),_=b.ZP.p(u||(u=(0,m.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  color: #2196f3;\n  margin-bottom: 10px;\n"]))),S=b.ZP.div(p||(p=(0,m.Z)(["\ndisplay: flex;\n/* flex-direction: column; */\n"]))),N=t(4117),z=t(184);var U=function(n){var e=n.id,t=n.poster,r=n.title,a=n.date,i=n.rating,o=n.genres,s=(0,y.TH)();return(0,z.jsx)(S,{children:(0,z.jsxs)(j,{children:[(0,z.jsx)(Z,{to:{pathname:"/movies/".concat(e),state:{from:s}},children:(0,z.jsx)(C,{src:t?"https://image.tmdb.org/t/p/original".concat(t):N,alt:r})}),(0,z.jsx)(P,{children:r}),(0,z.jsxs)(L,{children:[(0,z.jsx)(_,{children:"".concat(o," | ").concat(a.substring(0,4))}),(0,z.jsxs)(_,{children:[(0,z.jsx)(k.pHD,{})," ",i]})]})]})})};var D=function(n){var e=n.movies,t=(0,x.useState)(null),r=(0,f.Z)(t,2),a=r[0],i=r[1];return(0,x.useEffect)((function(){function n(){return(n=(0,l.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.rc)();case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,z.jsx)(v,{children:a&&e.map((function(n){var e=n.id,t=n.poster_path,r=n.title,i=n.release_date,o=n.vote_average,s=n.genre_ids;return(0,z.jsx)(U,{id:e,poster:t,title:r,date:i||"(\u30c4)",rating:o,genres:a.filter((function(n){return s.includes(n.id)})).slice(0,3).map((function(n){return n.name}))},e)}))})}},9593:function(n,e,t){t.d(e,{Z:function(){return p}});t(2791);var r,a=t(6048),i=t.n(a),o=t(2134),s=t(168),c=t(6444).ZP.div(r||(r=(0,s.Z)(["\n  .container {\n    display: flex;\n    justify-content: center;\n  }\n  .item {\n    width: 40px;\n    height: 40px;\n    margin-right: 8px;\n    transform: scale(1.1);\n  }\n  .activeItem {\n    background-color: #2196f3;\n    border-radius: 4px;\n    color: #fff;\n    font-weight: 600;\n  }\n  .previous {\n    width: 40px;\n    height: 40px;\n    transform: scale(1.1);\n    margin-right: 8px;\n  }\n  .next {\n    width: 40px;\n    height: 40px;\n    transform: scale(1.1);\n    margin-left: 8px;\n  }\n  .break-me {\n    width: 50px;\n    height: 50px;\n  }\n  .link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n\n    width: 100%;\n    height: 100%;\n    &:hover {\n      background-color: #2196f3;\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .previousLink {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    &:hover {\n      background-color: #2196f3;\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .nextLink {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    &:hover {\n      background-color: #2196f3;\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .breakLink {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n  }\n"]))),u=t(184);function p(n){var e=n.pageCount,t=n.onClick;return(0,u.jsx)(c,{children:(0,u.jsx)(i(),{pageCount:e,onPageChange:t,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"container",pageClassName:"item",activeClassName:"activeItem",pageLinkClassName:"link",previousClassName:"previous",previousLinkClassName:"previousLink",previousLabel:(0,u.jsx)(o.kyg,{}),nextClassName:"next",nextLinkClassName:"nextLink",nextLabel:(0,u.jsx)(o.mGl,{}),breakClassName:"break-me",breakLabel:"...",breakLinkClassName:"breakLink"})})}},8183:function(n,e,t){t.d(e,{Bt:function(){return m},DC:function(){return u},Se:function(){return d},bI:function(){return l},r8:function(){return x},rc:function(){return v}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),s=t.n(o),c="e46b87edbe0418b9678f5579382a8e13";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/trending/movie/day?api_key=".concat(c,"&page=").concat(e||1),n.next=3,s().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e,t){var r,a,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t,"&language=en-US&include_adult=false"),n.next=3,s().get(r);case 3:return a=n.sent,o=a.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"?api_key=").concat(c),n.next=3,s().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/credits?api_key=").concat(c),n.next=3,s().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"),n.next=3,s().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/genre/movie/list?api_key=".concat(c),n.next=3,s().get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r.genres);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3"},4117:function(n,e,t){n.exports=t.p+"static/media/defaultMovie.337d8096ddb69176ba58.png"}}]);
//# sourceMappingURL=movies-page.9fbf54dd.chunk.js.map