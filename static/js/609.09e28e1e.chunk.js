"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[609],{6609:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,c,i,a,s,u,l=t(8152),f=t(2791),h=t(6488),m=t(168),d=t(3081),g=t(3504),p=d.Z.p(r||(r=(0,m.Z)(["\n  font-family: Raleway, sans-serif;\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.spacing(2)})),v=d.Z.h3(o||(o=(0,m.Z)(["\n  font-family: Raleway, sans-serif;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.titleColor}),(function(n){return n.theme.spacing(1)})),x=d.Z.img(c||(c=(0,m.Z)(["\n  width: ",";\n"])),(function(n){return n.theme.spacing(64)})),j=d.Z.span(i||(i=(0,m.Z)(["\n  :not(:last-child) {\n    padding-right: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)})),w=d.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(3)})),y=d.Z.div(s||(s=(0,m.Z)(["\n  padding: ",";\n"])),(function(n){return n.theme.spacing(4)})),Z=(0,d.Z)(g.OL)(u||(u=(0,m.Z)(["\n  display: block;\n  font-family: Raleway, sans-serif;\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.2;\n  text-decoration: none;\n  color: ",";\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.focusColor})),k=t(5832),_=t(6871),b=t(184),C=function(){var n=(0,_.UO)().movieId,e=(0,f.useState)(null),t=(0,l.Z)(e,2),r=t[0],o=t[1],c=(0,_.s0)(),i=(0,_.TH)();return console.log(i),(0,f.useEffect)((function(){h.TP(n).then((function(n){i.state={from:"".concat(i.pathname)},n?o(n.data):setTimeout((function(){c("/")}),3e3)}))}),[i,n,c]),(0,b.jsxs)(b.Fragment,{children:[r?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(w,{children:[(0,b.jsx)(x,{src:"https://image.tmdb.org/t/p/original".concat(r.poster_path),alt:r.title}),(0,b.jsxs)(y,{children:[(0,b.jsxs)("h2",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,b.jsxs)(p,{children:["User score ",r.vote_average]}),(0,b.jsx)(v,{children:"Overview"}),(0,b.jsx)(p,{children:r.overview}),(0,b.jsx)(v,{children:"Genres"}),(0,b.jsx)(p,{children:r.genres.map((function(n){return(0,b.jsx)(j,{children:n.name},n.id)}))})]})]}),(0,b.jsx)(p,{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)(Z,{to:"/movies/".concat(n,"/cast"),children:"Cast"}),(0,b.jsx)(Z,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})]})]}):(0,b.jsx)(k.$,{}),(0,b.jsx)(_.j3,{})]})},S=function(){return(0,b.jsx)("div",{children:(0,b.jsx)(C,{})})}},6488:function(n,e,t){t.d(e,{IQ:function(){return p},TP:function(){return m},XT:function(){return g},Jh:function(){return h},e2:function(){return d}});var r=t(5861),o=t(7757),c=t.n(o),i=t(4569),a=t.n(i),s=t(8479),u="https://api.themoviedb.org/",l="7a732289faaa021b300c67c80c35cad1",f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a().get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Sorry, We don`t have this film`s information");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(n){var e="".concat(u,"3/movie/").concat(n,"/reviews?api_key=").concat(l,"&language=en-US&page=1");return f(e)},m=function(n){var e="".concat(u,"3/movie/").concat(n,"?api_key=").concat(l,"&language=en-US&page=1");return f(e)},d=function(){var n="".concat(u,"3/trending/all/day?api_key=").concat(l);return f(n)},g=function(n){var e="".concat(u,"3/search/movie?api_key=").concat(l,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return f(e)},p=function(n){var e="".concat(u,"3/movie/").concat(n,"/credits?api_key=").concat(l,"&language=en-US");return f(e)}}}]);
//# sourceMappingURL=609.09e28e1e.chunk.js.map