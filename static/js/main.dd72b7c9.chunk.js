(this.webpackJsonpreact_myapp=this.webpackJsonpreact_myapp||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(14),r=n.n(i),c=(n(25),n(5)),o=n.n(c),l=n(15),m=n(16),d=n(17),u=n(20),j=n(19),v=(n(27),n(18)),g=n.n(v),h=n(3),p=n.n(h),b=(n(48),n(0));function O(e){e.id;var t=e.year,n=e.title,s=e.summary,a=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:a,alt:n,title:n}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:n}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(b.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})]})}O.PropType={id:p.a.number.isRequired,year:p.a.number.isRequired,title:p.a.string.isRequired,summary:p.a.string.isRequired,poster:p.a.string.isRequired,genres:p.a.arrayOf(p.a.string).isRequired};var x=O,y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.isLoading,n=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:n.map((function(e){return console.log(e),Object(b.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component);var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)("div",{children:Object(b.jsx)(y,{})})}),document.getElementById("root")),f()}},[[50,1,2]]]);
//# sourceMappingURL=main.dd72b7c9.chunk.js.map