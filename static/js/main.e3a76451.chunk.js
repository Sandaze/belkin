(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{10:function(e,t,a){e.exports={card:"ViewCard_card__35kvx",cardBoxImg:"ViewCard_cardBoxImg__2pxyW",cardBox:"ViewCard_cardBox__3PI9Y"}},13:function(e,t,a){e.exports={pagination:"Pagination_pagination__T2Hx-",currentPage:"Pagination_currentPage__1czMh",paginationButton:"Pagination_paginationButton__2sMx2",prev:"Pagination_prev__2Mc8J"}},3:function(e,t,a){e.exports={auth:"Authorization_auth__39Hdj",inputBx:"Authorization_inputBx__2Am5h",buttonBx:"Authorization_buttonBx__AjwhD",errorBxIcon:"Authorization_errorBxIcon__36fvI",errorBx:"Authorization_errorBx__3plge",active:"Authorization_active__3wZ8u",errorBxMessage:"Authorization_errorBxMessage__1rSEo",confirm:"Authorization_confirm__1Ou5D",fadeIn:"Authorization_fadeIn__1iPFL"}},33:function(e,t,a){e.exports={navbar:"Navbar_navbar__18ZBo",navbarM:"Navbar_navbarM__2bhQA"}},34:function(e,t,a){},45:function(e,t,a){e.exports={preloader:"Preloader_preloader__2H2cz",fadeIn:"Preloader_fadeIn__2L1Zh"}},52:function(e,t,a){},8:function(e,t,a){e.exports={wrapper:"PokemonCards_wrapper__1jyBz",sidebar:"PokemonCards_sidebar__2q8MJ",sidebarBx:"PokemonCards_sidebarBx__3wOa9",boxCards:"PokemonCards_boxCards__WFmhB",boxItem:"PokemonCards_boxItem__1Wb-F",boxItemImg:"PokemonCards_boxItemImg__2iZBm",boxItemName:"PokemonCards_boxItemName__3LXzj",boxItemSubName:"PokemonCards_boxItemSubName__1i54D"}},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),s=a.n(c),o=(a(52),a(34),a(9)),i=a(3),u=a.n(i),p=a(4),d=a(43),b=a.n(d).a.create({headers:{"X-Api-Key":"d800239c-ade8-4890-85a0-04e021a8e2b1"},baseURL:"https://api.pokemontcg.io/v2/"}),j=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<15;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},l=function(e,t,a){return b.get("cards?q=types:".concat(a.types,' subtypes:"').concat(a.subtypes,'"&page=').concat(e,"&pageSize=").concat(t)).then((function(e){return e.data}))},x=function(){return b.get("types").then((function(e){return e.data}))},O=function(){return b.get("subtypes").then((function(e){return e.data}))},h=a(0),m=function(e){var t=Object(n.useState)(j()),a=Object(o.a)(t,2),r=a[0],c=(a[1],Object(n.useState)("")),s=Object(o.a)(c,2),i=s[0],d=s[1],b=Object(n.useState)(!1),l=Object(o.a)(b,2),x=l[0],O=l[1],m=Object(n.useState)(!1),g=Object(o.a)(m,2),_=g[0],f=g[1];console.log("OTP: "+r);return x?Object(h.jsx)(p.a,{to:"/cards"}):Object(h.jsxs)("div",{className:u.a.auth+" "+u.a.confirm,children:[Object(h.jsx)("h1",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(h.jsxs)("div",{className:u.a.authBox,children:[Object(h.jsxs)("div",{className:u.a.inputBx,children:[Object(h.jsx)("input",{onChange:function(e){return d(e.currentTarget.value)},type:"text",value:i,placeholder:"Code from SMS"}),_&&Object(h.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(x?"":u.a.active),children:[Object(h.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(h.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d SMS"})]})]}),Object(h.jsx)("div",{className:u.a.buttonBx,children:Object(h.jsx)("button",{onClick:function(){f(!0),i===r&&O(!0)},children:"Confirm"})})]})]})},g=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),d=i[0],b=i[1],j=Object(n.useState)(!1),l=Object(o.a)(j,2),x=l[0],O=l[1],m=Object(n.useState)(!1),g=Object(o.a)(m,2),_=g[0],f=g[1],y="1",v="1";return x?Object(h.jsx)(p.a,{to:"/confirm"}):Object(h.jsxs)("div",{className:u.a.auth,children:[Object(h.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(h.jsxs)("div",{className:u.a.authBox,children:[Object(h.jsxs)("div",{className:u.a.inputBx,children:[Object(h.jsx)("input",{onChange:function(e){return function(e){c(e.currentTarget.value)}(e)},value:r,type:"text",placeholder:"Login"}),_&&Object(h.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(x?"":u.a.active),children:[Object(h.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(h.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(h.jsxs)("div",{className:u.a.inputBx,children:[Object(h.jsx)("input",{value:d,onChange:function(e){return function(e){b(e.currentTarget.value)}(e)},type:"password",placeholder:"Password"}),_&&Object(h.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(x?"":u.a.active),children:[Object(h.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(h.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(h.jsx)("div",{className:u.a.buttonBx,children:Object(h.jsx)("button",{onClick:function(e){f(!0),r!==y||d!==v?(O(!1),console.log(1)):O(!0)},children:"Login"})})]})]})},_=a(2),f=a(25),y=a(26),v=a(28),C=a(27),S=a(33),k=a.n(S),B=function(e){return Object(h.jsxs)("div",{className:"".concat(k.a.navbar," ").concat(k.a.navbarM),children:[e.children,Object(h.jsx)("button",{children:"Logout"})]})},N=a(8),P=a.n(N),T=function(e){return Object(h.jsxs)("div",{onClick:e.urlCard,className:P.a.boxItem,children:[Object(h.jsx)("img",{src:e.src_img,alt:"",className:P.a.boxItemImg}),Object(h.jsx)("h1",{className:P.a.boxItemName,children:e.name}),Object(h.jsx)("p",{className:P.a.boxItemSubName,children:e.subname})]})},I=a(45),w=a.n(I),z=function(e){return Object(h.jsx)("div",{className:w.a.preloader,children:Object(h.jsx)("img",{src:"",alt:""})})},E=a(13),L=a.n(E),A=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),a=[],r=1;r<=t;r++)a.push(r);var c=Math.ceil(t/e.pageSize),s=Object(n.useState)(1),i=Object(o.a)(s,2),u=i[0],p=i[1],d=u*e.pageSize,b=u*e.pageSize-e.pageSize;return Object(h.jsxs)("div",{className:L.a.pagination,children:[Object(h.jsx)("div",{className:L.a.paginationButton,children:u>1&&Object(h.jsx)("button",{onClick:function(){p(u-1)},className:L.a.prev,children:"Prev"})}),a.filter((function(e){return e>b&&e<=d})).map((function(t){return Object(h.jsx)("span",{onClick:function(){return e.changePage(t)},className:t===e.currentPage&&L.a.currentPage,children:t})})),Object(h.jsx)("div",{className:L.a.paginationButton,children:u<c&&Object(h.jsx)("button",{onClick:function(){p(u+1)},className:L.a.next,children:"Next"})})]})},M=r.a.memo((function(e){var t=Object(p.f)();return Object(h.jsxs)(h.Fragment,{children:[e.isLoading&&Object(h.jsx)(z,{}),Object(h.jsx)(B,{}),Object(h.jsxs)("div",{className:P.a.wrapper,children:[Object(h.jsxs)("div",{className:P.a.sidebar,children:[Object(h.jsx)("div",{className:P.a.sidebarBx,children:Object(h.jsx)("select",{onChange:function(t){e.getCardsByType(t.currentTarget.value)},name:"",id:"",children:e.types.map((function(e){return Object(h.jsx)("option",{value:e.toLowerCase(),children:e})}))})}),Object(h.jsx)("div",{className:P.a.sidebarBx,children:Object(h.jsx)("select",{onChange:function(t){e.getCardsBySubtype(t.currentTarget.value)},name:"",id:"",children:e.subtypes.map((function(e){return Object(h.jsx)("option",{value:e.toLowerCase(),children:e})}))})}),Object(h.jsx)(A,{totalCount:e.totalCount,pageSize:e.pageSize,changePage:e.changePage,currentPage:e.currentPage})]}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:P.a.boxCards,children:e.cards.map((function(e){return Object(h.jsx)(T,{name:e.name,src_img:e.images.small,subname:e.artist,urlCard:function(){return t.push("/card/".concat(e.id))}},e.id)}))})})]})]})})),D=a(11),F=a(12),R=a.n(F),U=a(18),Y=a(19),G="SET_CARDS",J="SET_SELECTED_TYPE",V="SET_SELECTED_SUBTYPE",X="TOGGLE_LOADING",Z="SET_TOTAL_CARDS_COUNT",H="SET_CURRENT_PAGE",W={selectedType:"colorless",selectedSubtype:"break",page:1,pageSize:6,isLoading:!1,totalCount:null,currentPage:1,cards:[]},q=function(){return{type:X}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(_.a)(Object(_.a)({},e),{},{cards:Object(Y.a)(t.cards)});case J:return Object(_.a)(Object(_.a)({},e),{},{selectedType:t.selectedType});case V:return Object(_.a)(Object(_.a)({},e),{},{selectedSubtype:t.selectedSubtype});case X:return Object(_.a)(Object(_.a)({},e),{},{isLoading:!e.isLoading});case Z:return Object(_.a)(Object(_.a)({},e),{},{totalCount:t.totalCount});case H:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});default:return e}},Q=function(e){Object(v.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getCardsByType=function(t){e.props.getPokemonCards(e.props.page,e.props.pageSize,{types:t,subtypes:e.props.selectedSubtype})},e.getCardsBySubtype=function(t){e.props.getPokemonCards(e.props.page,e.props.pageSize,{types:e.props.selectedType,subtypes:t})},e.changePage=function(t){e.props.setCurrentPage(t),e.props.getPokemonCards(t,e.props.pageSize,{types:e.props.selectedType,subtypes:e.props.selectedSubtype})},e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.getPokemonCards(this.props.page,this.props.pageSize,{types:this.props.selectedType,subtypes:this.props.selectedSubtype})}},{key:"render",value:function(){return Object(h.jsx)(M,Object(_.a)(Object(_.a)({},this.props),{},{getCardsByType:this.getCardsByType,getCardsBySubtype:this.getCardsBySubtype,changePage:this.changePage}))}}]),a}(r.a.Component),$=Object(D.b)((function(e){return{page:e.pokemonCards.page,pageSize:e.pokemonCards.pageSize,totalCount:e.pokemonCards.totalCount,currentPage:e.pokemonCards.currentPage,cards:e.pokemonCards.cards,selectedType:e.pokemonCards.selectedType,selectedSubtype:e.pokemonCards.selectedSubtype,isLoading:e.pokemonCards.isLoading,types:e.initialData.pokemon_types,subtypes:e.initialData.subtypes_pokemon}}),{getPokemonCards:function(e,t,a){return function(){var n=Object(U.a)(R.a.mark((function n(r){var c;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(q()),n.next=3,l(e,t,a);case 3:c=n.sent,console.log(c),r((u=c.data,{type:G,cards:u})),r((i=a.types,{type:J,selectedType:i})),r((o=a.subtypes,{type:V,selectedSubtype:o})),r((s=c.totalCount,{type:Z,totalCount:s})),r(q());case 10:case"end":return n.stop()}var s,o,i,u}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:H,currentPage:e}}})(Q),ee=a(10),te=a.n(ee),ae=function(e){var t=Object(p.g)().id,a=Object(D.c)((function(e){return e.pokemonCards.cards.filter((function(e){return e.id===t}))}))[0],n=Object(p.f)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(B,{children:Object(h.jsx)("button",{onClick:function(){n.push("/cards")},children:"Back"})}),Object(h.jsxs)("div",{className:te.a.card,children:[Object(h.jsxs)("div",{className:te.a.cardBox,children:[Object(h.jsx)("img",{src:a.images.large,alt:"",className:te.a.cardBoxImg}),Object(h.jsx)("p",{className:te.a.cardBoxDesc,children:a.rules[0]})]}),Object(h.jsxs)("div",{className:te.a.cardBox,children:[Object(h.jsx)("p",{className:te.a.cardBoxName,children:a.name}),Object(h.jsxs)("p",{className:te.a.cardBoxTypes,children:[Object(h.jsx)("span",{children:"type:"}),a.types.map((function(e){return e}))]}),Object(h.jsxs)("p",{className:te.a.cardBoxSubtypes,children:[Object(h.jsx)("span",{children:"subtype:"}),a.subtypes.map((function(e){return e}))]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"damage:"}),a.attacks[0].damage]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"cost:"}),a.attacks[0].convertedEnergyCost]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"hp:"}),a.hp]})]})]})]})};var ne=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(g,{})}}),Object(h.jsx)(p.b,{exact:!0,path:"/confirm",render:function(){return Object(h.jsx)(m,{})}}),Object(h.jsx)(p.b,{exact:!0,path:"/cards",render:function(){return Object(h.jsx)($,{})}}),Object(h.jsx)(p.b,{exact:!0,path:"/card/:id",render:function(){return Object(h.jsx)(ae,{})}})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},ce=a(14),se=a(20),oe=a(47),ie="SET_TYPES",ue="SET_SUBTYPES",pe={pokemon_types:[],subtypes_pokemon:[]},de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c,be=Object(se.b)({pokemonCards:K,initialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return console.log(t.pokemon_types),Object(_.a)(Object(_.a)({},e),{},{pokemon_types:Object(Y.a)(t.pokemon_types)});case ue:return Object(_.a)(Object(_.a)({},e),{},{subtypes_pokemon:Object(Y.a)(t.subtypes_pokemon)});default:return e}}}),je=Object(se.d)(be,de(Object(se.a)(oe.a)));window.store=je;var le=function(e){Object(v.a)(a,e);var t=Object(C.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.getTypesPokemon(),this.props.getSubtypesPokemon()}},{key:"render",value:function(){return Object(h.jsx)(ne,{})}}]),a}(r.a.Component),xe=Object(D.b)(null,{getTypesPokemon:function(){return function(){var e=Object(U.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:a=e.sent,t((n=a.data,{type:ie,pokemon_types:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},getSubtypesPokemon:function(){return function(){var e=Object(U.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:a=e.sent,t((n=a.data,{type:ue,subtypes_pokemon:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()}})(le);s.a.render(Object(h.jsx)(D.a,{store:je,children:Object(h.jsx)(ce.a,{basename:"/belkin",children:Object(h.jsx)(xe,{})})}),document.getElementById("root")),re()}},[[82,1,2]]]);
//# sourceMappingURL=main.e3a76451.chunk.js.map