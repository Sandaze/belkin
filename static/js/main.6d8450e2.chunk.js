(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{2:function(e,t,n){e.exports={auth:"Authorization_auth__39Hdj",inputBx:"Authorization_inputBx__2Am5h",buttonBx:"Authorization_buttonBx__AjwhD",errorBxIcon:"Authorization_errorBxIcon__36fvI",errorBx:"Authorization_errorBx__3plge",active:"Authorization_active__3wZ8u",errorBxMessage:"Authorization_errorBxMessage__1rSEo",confirm:"Authorization_confirm__1Ou5D",fadeIn:"Authorization_fadeIn__1iPFL"}},31:function(e,t,n){e.exports={navbar:"Navbar_navbar__18ZBo",navbarM:"Navbar_navbarM__2bhQA"}},32:function(e,t,n){},49:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),s=n.n(c),o=(n(49),n(32),n(10)),i=n(2),u=n.n(i),b=n(3),j=n(41),d=n.n(j).a.create({headers:{"X-Api-Key":"d800239c-ade8-4890-85a0-04e021a8e2b1"},baseURL:"https://api.pokemontcg.io/v2/"}),p=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<15;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},l=function(e,t){return d.get("cards?page=".concat(e,"&pageSize=").concat(t)).then((function(e){return e.data}))},m=function(){return d.get("types").then((function(e){return e.data}))},x=function(){return d.get("subtypes").then((function(e){return e.data}))},O=n(1),h=function(e){var t=Object(a.useState)(p()),n=Object(o.a)(t,2),r=n[0],c=(n[1],Object(a.useState)("")),s=Object(o.a)(c,2),i=s[0],j=s[1],d=Object(a.useState)(!1),l=Object(o.a)(d,2),m=l[0],x=l[1],h=Object(a.useState)(!1),v=Object(o.a)(h,2),f=v[0],_=v[1];console.log("OTP: "+r);return m?Object(O.jsx)(b.a,{to:"/cards"}):Object(O.jsxs)("div",{className:u.a.auth+" "+u.a.confirm,children:[Object(O.jsx)("h1",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(O.jsxs)("div",{className:u.a.authBox,children:[Object(O.jsxs)("div",{className:u.a.inputBx,children:[Object(O.jsx)("input",{onChange:function(e){return j(e.currentTarget.value)},type:"text",value:i,placeholder:"Code from SMS"}),f&&Object(O.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(m?"":u.a.active),children:[Object(O.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(O.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d SMS"})]})]}),Object(O.jsx)("div",{className:u.a.buttonBx,children:Object(O.jsx)("button",{onClick:function(){_(!0),i===r&&x(!0)},children:"Confirm"})})]})]})},v=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),j=i[0],d=i[1],p=Object(a.useState)(!1),l=Object(o.a)(p,2),m=l[0],x=l[1],h=Object(a.useState)(!1),v=Object(o.a)(h,2),f=v[0],_=v[1],g="1",y="1";return m?Object(O.jsx)(b.a,{to:"/confirm"}):Object(O.jsxs)("div",{className:u.a.auth,children:[Object(O.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(O.jsxs)("div",{className:u.a.authBox,children:[Object(O.jsxs)("div",{className:u.a.inputBx,children:[Object(O.jsx)("input",{onChange:function(e){return function(e){c(e.currentTarget.value)}(e)},value:r,type:"text",placeholder:"Login"}),f&&Object(O.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(m?"":u.a.active),children:[Object(O.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(O.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(O.jsxs)("div",{className:u.a.inputBx,children:[Object(O.jsx)("input",{value:j,onChange:function(e){return function(e){d(e.currentTarget.value)}(e)},type:"password",placeholder:"Password"}),f&&Object(O.jsxs)("div",{className:"".concat(u.a.errorBx," ").concat(m?"":u.a.active),children:[Object(O.jsx)("div",{className:u.a.errorBxIcon,children:"!"}),Object(O.jsx)("div",{className:u.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(O.jsx)("div",{className:u.a.buttonBx,children:Object(O.jsx)("button",{onClick:function(e){_(!0),r!==g||j!==y?(x(!1),console.log(1)):x(!0)},children:"Login"})})]})]})},f=n(4),_=n(23),g=n(24),y=n(26),k=n(25),N=n(31),B=n.n(N),S=function(e){return Object(O.jsx)("div",{className:"".concat(B.a.navbar," ").concat(B.a.navbarM),children:Object(O.jsx)("button",{children:"Logout"})})},C=n(8),w=n.n(C),I=function(e){return Object(O.jsxs)("div",{className:w.a.boxItem,children:[Object(O.jsx)("img",{src:e.src_img,alt:"",className:w.a.boxItemImg}),Object(O.jsx)("h1",{className:w.a.boxItemName,children:e.name}),Object(O.jsx)("p",{className:w.a.boxItemSubName,children:e.subname})]})},P=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{}),Object(O.jsxs)("div",{className:w.a.wrapper,children:[Object(O.jsxs)("div",{className:w.a.sidebar,children:[Object(O.jsx)("div",{className:w.a.sidebarBx,children:Object(O.jsx)("select",{name:"",id:"",children:e.types.map((function(t){return Object(O.jsx)("option",Object(f.a)(Object(f.a)({},e.selectedType===t.toLowerCase()?"selected":""),{},{value:t.toLowerCase(),children:t}))}))})}),Object(O.jsx)("div",{className:w.a.sidebarBx,children:Object(O.jsx)("select",{name:"",id:"",children:e.subtypes.map((function(e){return Object(O.jsx)("option",{value:e.toLowerCase(),children:e})}))})})]}),Object(O.jsx)("div",{className:w.a.boxCards,children:e.cards.map((function(e){return Object(O.jsx)(I,{name:e.name,src_img:e.images.small,subname:e.artist},e.id)}))})]})]})},T=n(12),z=n(9),A=n.n(z),M=n(13),D=n(16),E="SET_CARDS",L={selectedType:"colorless",selectedSubtype:"break",page:1,pageSize:4,cards:[]},F=function(e){return{type:E,cards:e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return t.type===E?Object(f.a)(Object(f.a)({},e),{},{cards:Object(D.a)(t.cards)}):e},J=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.getPokemonCards(this.props.page,this.props.pageSize)}},{key:"render",value:function(){return Object(O.jsx)(P,Object(f.a)({},this.props))}}]),n}(r.a.Component),R=Object(T.b)((function(e){return{page:e.pokemonCards.page,pageSize:e.pokemonCards.pageSize,cards:e.pokemonCards.cards,selectedType:e.pokemonCards.selectedType,selectedSubtype:e.pokemonCards.selectedSubtype,types:e.initialData.pokemon_types,subtypes:e.initialData.subtypes_pokemon}}),{getPokemonCards:function(e,t){return function(){var n=Object(M.a)(A.a.mark((function n(a){var r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(e,t);case 2:r=n.sent,console.log(r),a(F(r.data));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(J);var U=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(v,{})}}),Object(O.jsx)(b.b,{exact:!0,path:"/confirm",render:function(){return Object(O.jsx)(h,{})}}),Object(O.jsx)(b.b,{exact:!0,path:"/cards",render:function(){return Object(O.jsx)(R,{})}})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Y=n(21),q=n(17),H=n(44),K="SET_TYPES",Q="SET_SUBTYPES",V={pokemon_types:[],subtypes_pokemon:[]},W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.c,G=Object(q.b)({pokemonCards:X,initialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return console.log(t.pokemon_types),Object(f.a)(Object(f.a)({},e),{},{pokemon_types:Object(D.a)(t.pokemon_types)});case Q:return Object(f.a)(Object(f.a)({},e),{},{subtypes_pokemon:Object(D.a)(t.subtypes_pokemon)});default:return e}}}),$=Object(q.d)(G,W(Object(q.a)(H.a)));window.store=$;var ee=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.getTypesPokemon(),this.props.getSubtypesPokemon()}},{key:"render",value:function(){return Object(O.jsx)(U,{})}}]),n}(r.a.Component),te=Object(T.b)(null,{getTypesPokemon:function(){return function(){var e=Object(M.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:n=e.sent,t((a=n.data,{type:K,pokemon_types:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},getSubtypesPokemon:function(){return function(){var e=Object(M.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,console.log(n.data),t((a=n.data,{type:Q,subtypes_pokemon:a}));case 5:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ee);s.a.render(Object(O.jsx)(T.a,{store:$,children:Object(O.jsx)(Y.a,{basename:"/belkin",children:Object(O.jsx)(te,{})})}),document.getElementById("root")),Z()},8:function(e,t,n){e.exports={wrapper:"PokemonCards_wrapper__1jyBz",sidebar:"PokemonCards_sidebar__2q8MJ",sidebarBx:"PokemonCards_sidebarBx__3wOa9",boxCards:"PokemonCards_boxCards__WFmhB",boxItemImg:"PokemonCards_boxItemImg__2iZBm",boxItemName:"PokemonCards_boxItemName__3LXzj",boxItemSubName:"PokemonCards_boxItemSubName__1i54D"}}},[[79,1,2]]]);
//# sourceMappingURL=main.6d8450e2.chunk.js.map