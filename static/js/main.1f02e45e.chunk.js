(this.webpackJsonpreact_myapp=this.webpackJsonpreact_myapp||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(28),i=n.n(r),c=(n(36),n(9)),o=n(2),j=n(17),l=n.n(j),u=n(29),d=n(11),m=n(12),b=n(14),h=n(13),p=(n(38),n(30)),v=n.n(p),O=n(5),x=n.n(O),g=(n(59),n(1));function f(e){var t=e.id,n=e.year,s=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(g.jsx)("div",{className:"movie",children:Object(g.jsxs)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,genres:i}},children:[Object(g.jsx)("img",{src:r,alt:s,title:s}),Object(g.jsxs)("div",{className:"movie__data",children:[Object(g.jsx)("h3",{className:"movie__title",children:s}),Object(g.jsx)("h5",{className:"movie__year",children:n}),Object(g.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(g.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(g.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})}f.PropType={id:x.a.number.isRequired,year:x.a.number.isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};var y=f,_=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts.mx/api/v2/list_movies.json");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.isLoading,n=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(g.jsx)("div",{className:"movies",children:n.map((function(e){return console.log(e),Object(g.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component);var N=function(){return Object(g.jsx)("span",{children:"About this page"})},k=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;console.log(this.props),void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.match.params;return t.state?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:["id : ",n.id]}),Object(g.jsx)("span",{children:t.state.title})]}):null}}]),n}(a.a.Component);var q=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(c.b,{to:"/",children:"Home"}),Object(g.jsx)("br",{}),Object(g.jsx)(c.b,{to:"/about",children:"About"}),Object(g.jsx)("br",{})]})};var L=function(){return Object(g.jsxs)(c.a,{children:[Object(g.jsx)(q,{}),Object(g.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(g.jsx)(o.a,{path:"/about",component:N}),Object(g.jsx)(o.a,{path:"/movie/:id",component:k})]})};var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)("div",{children:Object(g.jsx)(L,{})})}),document.getElementById("root")),R()}},[[67,1,2]]]);
//# sourceMappingURL=main.1f02e45e.chunk.js.map