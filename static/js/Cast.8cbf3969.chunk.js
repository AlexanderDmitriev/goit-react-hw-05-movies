(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[709],{9965:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var r,a,c,o,i=t(8152),u=t(2791),s=t(6871),p=t(2007),f=t.n(p),h=t(6488),l=t(9128),g=t(168),m=t(3081),d=m.Z.li(r||(r=(0,g.Z)(["\n  width: ",";\n  list-style: none;\n  padding: ",";\n  border-radius: ",";\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.spacing(64)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)})),x=m.Z.p(a||(a=(0,g.Z)(["\n  font-family: Raleway, sans-serif;\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.2;\n  color: grey;\n"])),(function(n){return n.theme.spacing(3)})),y=m.Z.img(c||(c=(0,g.Z)(["\n  width: ",";\n"])),(function(n){return n.theme.spacing(32)})),v=m.Z.ul(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),b=t(184),_=function(n){var e=n.photo,t=n.name,r=n.character;return(0,b.jsxs)(d,{children:[e?(0,b.jsx)(y,{src:"https://image.tmdb.org/t/p/original".concat(e),alt:t,width:"128"}):(0,b.jsx)(l.UUf,{size:"128px"}),(0,b.jsx)(x,{children:t}),(0,b.jsx)(x,{children:r})]})},w=t(5832);_.propTypes={photo:f().string,name:f().string,character:f().string};var k=function(){var n=(0,u.useState)(null),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(!1),c=(0,i.Z)(a,2),o=c[0],p=c[1],f=(0,s.UO)().movieId;return(0,u.useEffect)((function(){h.IQ(f).then((function(n){p(!0),null!=n&&(r(n.data.cast),p(!1))}))}),[f]),(0,b.jsxs)(b.Fragment,{children:[t?(0,b.jsx)(v,{children:t.map((function(n){return(0,b.jsx)(_,{photo:n.profile_path,name:n.name,character:n.character},n.id)}))}):(0,b.jsx)(w.$,{}),o&&(0,b.jsx)(x,{children:"Sorry, we don't have any cast information for this movie"})]})}},6488:function(n,e,t){"use strict";t.d(e,{IQ:function(){return d},TP:function(){return l},XT:function(){return m},Jh:function(){return h},e2:function(){return g}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),u=t(577),s="https://api.themoviedb.org/",p="7a732289faaa021b300c67c80c35cad1",f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),u.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(n){var e="".concat(s,"3/movie/").concat(n,"/reviews?api_key=").concat(p,"&language=en-US&page=1");return f(e)},l=function(n){var e="".concat(s,"3/movie/").concat(n,"?api_key=").concat(p,"&language=en-US&page=1");return f(e)},g=function(){var n="".concat(s,"3/trending/all/day?api_key=").concat(p);return f(n)},m=function(n){var e="".concat(s,"3/search/movie?api_key=").concat(p,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return f(e)},d=function(n){var e="".concat(s,"3/movie/").concat(n,"/credits?api_key=").concat(p,"&language=en-US");return f(e)}},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function c(){}c.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,c,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=Cast.8cbf3969.chunk.js.map