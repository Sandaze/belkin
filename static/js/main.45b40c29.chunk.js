(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{12:function(e,t,a){e.exports={card:"ViewCard_card__35kvx",cardBoxImg:"ViewCard_cardBoxImg__2pxyW",cardBox:"ViewCard_cardBox__3PI9Y"}},14:function(e,t,a){e.exports={pagination:"Pagination_pagination__T2Hx-",currentPage:"Pagination_currentPage__1czMh",paginationButton:"Pagination_paginationButton__2sMx2",prev:"Pagination_prev__2Mc8J"}},3:function(e,t,a){e.exports={auth:"Authorization_auth__39Hdj",inputBx:"Authorization_inputBx__2Am5h",buttonBx:"Authorization_buttonBx__AjwhD",errorBxIcon:"Authorization_errorBxIcon__36fvI",errorBx:"Authorization_errorBx__3plge",active:"Authorization_active__3wZ8u",errorBxMessage:"Authorization_errorBxMessage__1rSEo",confirm:"Authorization_confirm__1Ou5D",fadeIn:"Authorization_fadeIn__1iPFL"}},33:function(e,t,a){e.exports={navbar:"Navbar_navbar__18ZBo",navbarM:"Navbar_navbarM__2bhQA"}},34:function(e,t,a){},46:function(e,t,a){e.exports={preloader:"Preloader_preloader__2H2cz",fadeIn:"Preloader_fadeIn__2L1Zh"}},52:function(e,t,a){},8:function(e,t,a){e.exports={wrapper:"PokemonCards_wrapper__1jyBz",sidebar:"PokemonCards_sidebar__2q8MJ",sidebarBx:"PokemonCards_sidebarBx__3wOa9",boxCards:"PokemonCards_boxCards__WFmhB",boxItem:"PokemonCards_boxItem__1Wb-F",boxItemImg:"PokemonCards_boxItemImg__2iZBm",boxItemName:"PokemonCards_boxItemName__3LXzj",boxItemSubName:"PokemonCards_boxItemSubName__1i54D"}},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),s=a.n(c),o=(a(52),a(34),a(9)),i=a(3),u=a.n(i),p=a(43),d=a.n(p).a.create({headers:{"X-Api-Key":"d800239c-ade8-4890-85a0-04e021a8e2b1"},baseURL:"https://api.pokemontcg.io/v2/"}),j=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<15;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},b=function(e,t,a){return d.get("cards?q=types:".concat(a.types,' subtypes:"').concat(a.subtypes,'"&page=').concat(e,"&pageSize=").concat(t)).then((function(e){return e.data}))},l=function(){return d.get("types").then((function(e){return e.data}))},x=function(){return d.get("subtypes").then((function(e){return e.data}))},O=a(10),h=a(4),m=a(0),g=function(e){var t=Object(n.useState)(j()),a=Object(o.a)(t,2),r=a[0],c=(a[1],Object(n.useState)("")),s=Object(o.a)(c,2),i=s[0],p=s[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),l=b[0],x=b[1],O=Object(n.useState)(!1),g=Object(o.a)(O,2),_=g[0],f=g[1],v=Object(h.e)();console.log("OTP: "+r);return l||"true"==localStorage.isLogin?(v.push("/cards"),localStorage.setItem("isLogin","true"),!1):Object(m.jsxs)("div",{className:u.a.auth+" "+u.a.confirm,children:[Object(m.jsx)("h1",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(m.jsxs)("div",{className:u.a.authBox,children:[Object(m.jsxs)("div",{className:u.a.inputBx,children:[Object(m.jsx)("input",{onChange:function(e){return p(e.currentTarget.value)},type:"text",value:i,placeholder:"Code from SMS"}),_&&Object(m.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(l?"":u.a.active),children:[Object(m.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(m.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d SMS"})]})]}),Object(m.jsx)("div",{className:u.a.buttonBx,children:Object(m.jsx)("button",{onClick:function(){f(!0),i===r&&x(!0)},children:"Confirm"})})]})]})},_=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),p=i[0],d=i[1],j=Object(n.useState)(!1),b=Object(o.a)(j,2),l=b[0],x=b[1],g=Object(n.useState)(!1),_=Object(o.a)(g,2),f=_[0],v=_[1],y=Object(h.e)(),C=Object(O.c)((function(e){return{login:e.initialData.login,password:e.initialData.password}}));return l?(y.push("/confirm"),Object(m.jsx)(m.Fragment,{})):("true"==localStorage.getItem("isLogin")&&y.push("/cards"),Object(m.jsxs)("div",{className:u.a.auth,children:[Object(m.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("div",{className:u.a.authBox,children:[Object(m.jsxs)("div",{className:u.a.inputBx,children:[Object(m.jsx)("input",{onChange:function(e){return function(e){c(e.currentTarget.value)}(e)},value:r,type:"text",placeholder:"Login"}),f&&Object(m.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(l?"":u.a.active),children:[Object(m.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(m.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(m.jsxs)("div",{className:u.a.inputBx,children:[Object(m.jsx)("input",{value:p,onChange:function(e){return function(e){d(e.currentTarget.value)}(e)},type:"password",placeholder:"Password"}),f&&Object(m.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(l?"":u.a.active),children:[Object(m.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(m.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(m.jsx)("div",{className:u.a.buttonBx,children:Object(m.jsx)("button",{onClick:function(e){v(!0),r!==C.login||p!==C.password?x(!1):x(!0)},children:"Login"})})]})]}))},f=a(2),v=a(25),y=a(26),C=a(28),S=a(27),k=a(33),B=a.n(k),N=function(e){var t=Object(h.e)();return Object(m.jsxs)("div",{className:"".concat(B.a.navbar," ").concat(B.a.navbarM),children:[e.children,Object(m.jsx)("button",{onClick:function(){localStorage.isLogin="false",t.push("/")},children:"Logout"})]})},P=a(8),T=a.n(P),I=function(e){return Object(m.jsxs)("div",{onClick:e.urlCard,className:T.a.boxItem,children:[Object(m.jsx)("img",{src:e.src_img,alt:"",className:T.a.boxItemImg}),Object(m.jsx)("h1",{className:T.a.boxItemName,children:e.name}),Object(m.jsx)("p",{className:T.a.boxItemSubName,children:e.subname})]})},w=a(46),L=a.n(w),z=function(e){return Object(m.jsx)("div",{className:L.a.preloader,children:Object(m.jsx)("img",{src:"",alt:""})})},E=a(14),A=a.n(E),M=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),a=[],r=1;r<=t;r++)a.push(r);var c=Math.ceil(t/e.pageSize),s=Object(n.useState)(1),i=Object(o.a)(s,2),u=i[0],p=i[1],d=u*e.pageSize,j=u*e.pageSize-e.pageSize;return Object(m.jsxs)("div",{className:A.a.pagination,children:[Object(m.jsx)("div",{className:A.a.paginationButton,children:u>1&&Object(m.jsx)("button",{onClick:function(){p(u-1)},className:A.a.prev,children:"Prev"})}),a.filter((function(e){return e>j&&e<=d})).map((function(t){return Object(m.jsx)("span",{onClick:function(){return e.changePage(t)},className:t===e.currentPage&&A.a.currentPage,children:t})})),Object(m.jsx)("div",{className:A.a.paginationButton,children:u<c&&Object(m.jsx)("button",{onClick:function(){p(u+1)},className:A.a.next,children:"Next"})})]})},D=r.a.memo((function(e){var t=Object(h.e)();return"false"==localStorage.isLogin&&t.push("/"),Object(m.jsxs)(m.Fragment,{children:[e.isLoading&&Object(m.jsx)(z,{}),Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:T.a.wrapper,children:[Object(m.jsxs)("div",{className:T.a.sidebar,children:[Object(m.jsx)("div",{className:T.a.sidebarBx,children:Object(m.jsx)("select",{onChange:function(t){e.getCardsByType(t.currentTarget.value)},name:"",id:"",children:e.types.map((function(e){return Object(m.jsx)("option",{value:e.toLowerCase(),children:e})}))})}),Object(m.jsx)("div",{className:T.a.sidebarBx,children:Object(m.jsx)("select",{onChange:function(t){e.getCardsBySubtype(t.currentTarget.value)},name:"",id:"",children:e.subtypes.map((function(e){return Object(m.jsx)("option",{value:e.toLowerCase(),children:e})}))})}),Object(m.jsx)(M,{totalCount:e.totalCount,pageSize:e.pageSize,changePage:e.changePage,currentPage:e.currentPage})]}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:T.a.boxCards,children:e.cards.map((function(e){return Object(m.jsx)(I,{name:e.name,src_img:e.images.small,subname:e.artist,urlCard:function(){return t.push("/card/".concat(e.id))}},e.id)}))})})]})]})})),F=a(13),R=a.n(F),U=a(18),Y=a(19),G="SET_CARDS",J="SET_SELECTED_TYPE",V="SET_SELECTED_SUBTYPE",X="TOGGLE_LOADING",Z="SET_TOTAL_CARDS_COUNT",H="SET_CURRENT_PAGE",W={selectedType:"colorless",selectedSubtype:"break",page:1,pageSize:6,isLoading:!1,totalCount:null,currentPage:1,cards:[]},q=function(){return{type:X}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(f.a)(Object(f.a)({},e),{},{cards:Object(Y.a)(t.cards)});case J:return Object(f.a)(Object(f.a)({},e),{},{selectedType:t.selectedType});case V:return Object(f.a)(Object(f.a)({},e),{},{selectedSubtype:t.selectedSubtype});case X:return Object(f.a)(Object(f.a)({},e),{},{isLoading:!e.isLoading});case Z:return Object(f.a)(Object(f.a)({},e),{},{totalCount:t.totalCount});case H:return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});default:return e}},Q=function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getCardsByType=function(t){e.props.getPokemonCards(e.props.page,e.props.pageSize,{types:t,subtypes:e.props.selectedSubtype})},e.getCardsBySubtype=function(t){e.props.getPokemonCards(e.props.page,e.props.pageSize,{types:e.props.selectedType,subtypes:t})},e.changePage=function(t){e.props.setCurrentPage(t),e.props.getPokemonCards(t,e.props.pageSize,{types:e.props.selectedType,subtypes:e.props.selectedSubtype})},e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.getPokemonCards(this.props.page,this.props.pageSize,{types:this.props.selectedType,subtypes:this.props.selectedSubtype})}},{key:"render",value:function(){return Object(m.jsx)(D,Object(f.a)(Object(f.a)({},this.props),{},{getCardsByType:this.getCardsByType,getCardsBySubtype:this.getCardsBySubtype,changePage:this.changePage}))}}]),a}(r.a.Component),$=Object(O.b)((function(e){return{page:e.pokemonCards.page,pageSize:e.pokemonCards.pageSize,totalCount:e.pokemonCards.totalCount,currentPage:e.pokemonCards.currentPage,cards:e.pokemonCards.cards,selectedType:e.pokemonCards.selectedType,selectedSubtype:e.pokemonCards.selectedSubtype,isLoading:e.pokemonCards.isLoading,types:e.initialData.pokemon_types,subtypes:e.initialData.subtypes_pokemon}}),{getPokemonCards:function(e,t,a){return function(){var n=Object(U.a)(R.a.mark((function n(r){var c;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(q()),n.next=3,b(e,t,a);case 3:c=n.sent,console.log(c),r((u=c.data,{type:G,cards:u})),r((i=a.types,{type:J,selectedType:i})),r((o=a.subtypes,{type:V,selectedSubtype:o})),r((s=c.totalCount,{type:Z,totalCount:s})),r(q());case 10:case"end":return n.stop()}var s,o,i,u}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:H,currentPage:e}}})(Q),ee=a(11),te=a(12),ae=a.n(te),ne=function(e){var t=Object(h.f)().id,a=Object(O.c)((function(e){return e.pokemonCards.cards.filter((function(e){return e.id===t}))}))[0];Object(h.e)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{children:Object(m.jsx)(ee.b,{to:"/cards",children:Object(m.jsx)("button",{children:"Back"})})}),Object(m.jsxs)("div",{className:ae.a.card,children:[Object(m.jsxs)("div",{className:ae.a.cardBox,children:[Object(m.jsx)("img",{src:a.images.large,alt:"",className:ae.a.cardBoxImg}),Object(m.jsx)("p",{className:ae.a.cardBoxDesc})]}),Object(m.jsxs)("div",{className:ae.a.cardBox,children:[Object(m.jsx)("p",{className:ae.a.cardBoxName,children:a.name}),Object(m.jsxs)("p",{className:ae.a.cardBoxTypes,children:[Object(m.jsx)("span",{children:"type:"}),a.types.map((function(e){return e}))]}),Object(m.jsxs)("p",{className:ae.a.cardBoxSubtypes,children:[Object(m.jsx)("span",{children:"subtype:"}),a.subtypes.map((function(e){return e}))]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"damage:"}),a.attacks[0].damage]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"cost:"}),a.attacks[0].convertedEnergyCost]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"hp:"}),a.hp]})]})]})]})};var re=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h.a,{exact:!0,path:"/",render:function(){return Object(m.jsx)(_,{})}}),Object(m.jsx)(h.a,{exact:!0,path:"/confirm",render:function(){return Object(m.jsx)(g,{})}}),Object(m.jsx)(h.a,{exact:!0,path:"/cards",render:function(){return Object(m.jsx)($,{})}}),Object(m.jsx)(h.a,{exact:!0,path:"/card/:id",render:function(){return Object(m.jsx)(ne,{})}})]})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},se=a(20),oe=a(47),ie="SET_TYPES",ue="SET_SUBTYPES",pe={pokemon_types:[],subtypes_pokemon:[],login:"1",password:"1",userIsLogged:!1},de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c,je=Object(se.b)({pokemonCards:K,initialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return console.log(t.pokemon_types),Object(f.a)(Object(f.a)({},e),{},{pokemon_types:Object(Y.a)(t.pokemon_types)});case ue:return Object(f.a)(Object(f.a)({},e),{},{subtypes_pokemon:Object(Y.a)(t.subtypes_pokemon)});default:return e}}}),be=Object(se.d)(je,de(Object(se.a)(oe.a)));window.store=be;var le=function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.getTypesPokemon(),this.props.getSubtypesPokemon()}},{key:"render",value:function(){return Object(m.jsx)(re,{})}}]),a}(r.a.Component),xe=Object(O.b)(null,{getTypesPokemon:function(){return function(){var e=Object(U.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:a=e.sent,t((n=a.data,{type:ie,pokemon_types:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},getSubtypesPokemon:function(){return function(){var e=Object(U.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:a=e.sent,t((n=a.data,{type:ue,subtypes_pokemon:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()}})(le);s.a.render(Object(m.jsx)(O.a,{store:be,children:Object(m.jsx)(ee.a,{basename:"/belkin",children:Object(m.jsx)(xe,{})})}),document.getElementById("root")),ce()}},[[82,1,2]]]);
//# sourceMappingURL=main.45b40c29.chunk.js.map