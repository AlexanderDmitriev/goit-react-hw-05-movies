"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[951],{9951:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,o,i=t(8152),u=t(2791),s=t(6871),l=t(5705),f=t(6488),h=t(5832),p=t(168),m=t(3081),d=t(3504),g=t(3339),v=(0,m.Z)(g.o)(r||(r=(0,p.Z)(["\ndisplay: inline;\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing(1)})),y=(0,m.Z)(l.gN)(a||(a=(0,p.Z)(["\n  width: 50%;\n  font-size: ",";\n  outline: none;\n  padding-left: ",";\n  padding-right: ",";\n  ::placeholder {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3.5)})),x=m.Z.li(c||(c=(0,p.Z)(["\n  list-style: none;\n  :not(:last-child) {\n    ",";\n  }\n"])),(function(n){return n.theme.spacing(1)})),k=(0,m.Z)(d.OL)(o||(o=(0,p.Z)(["\n  font-family: Raleway, sans-serif;\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.focusColor})),Z=t(184),_=function(){var n=(0,u.useState)(null),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(!1),c=(0,i.Z)(a,2),o=c[0],p=c[1],m=(0,s.TH)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.J9,{initialValues:{query:""},onSubmit:function(n,e){var t=e.resetForm;p(!0),f.XT(n.query).then((function(n){null!=n&&(r(n.data.results),p(!1))})),t()},children:(0,Z.jsxs)(l.l0,{children:[(0,Z.jsx)(y,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,Z.jsx)(v,{type:"submit",children:"Search"})]})}),o&&(0,Z.jsx)(h.$,{}),t&&(0,Z.jsx)("ul",{children:t.map((function(n){return(0,Z.jsx)(x,{children:(0,Z.jsxs)(k,{to:{pathname:"/movies/".concat(n.id),state:{from:m}},children:[n.title," (",n.release_date.slice(0,4),")"]})},n.id)}))})]})}},6488:function(n,e,t){t.d(e,{IQ:function(){return g},TP:function(){return p},XT:function(){return d},Jh:function(){return h},e2:function(){return m}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),u=t(577),s="https://api.themoviedb.org/",l="7a732289faaa021b300c67c80c35cad1",f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),u.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(n){var e="".concat(s,"3/movie/").concat(n,"/reviews?api_key=").concat(l,"&language=en-US&page=1");return f(e)},p=function(n){var e="".concat(s,"3/movie/").concat(n,"?api_key=").concat(l,"&language=en-US&page=1");return f(e)},m=function(){var n="".concat(s,"3/trending/all/day?api_key=").concat(l);return f(n)},d=function(n){var e="".concat(s,"3/search/movie?api_key=").concat(l,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return f(e)},g=function(n){var e="".concat(s,"3/movie/").concat(n,"/credits?api_key=").concat(l,"&language=en-US");return f(e)}}}]);
//# sourceMappingURL=951.0c1ca4e8.chunk.js.map