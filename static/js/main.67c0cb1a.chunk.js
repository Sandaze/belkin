(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{17:function(e,t,a){e.exports={navbar:"Navbar_navbar__18ZBo",navbarM:"Navbar_navbarM__2bhQA"}},2:function(e,t,a){e.exports={auth:"Authorization_auth__39Hdj",inputBx:"Authorization_inputBx__2Am5h",buttonBx:"Authorization_buttonBx__AjwhD",errorBxIcon:"Authorization_errorBxIcon__36fvI",errorBx:"Authorization_errorBx__3plge",active:"Authorization_active__3wZ8u",errorBxMessage:"Authorization_errorBxMessage__1rSEo",confirm:"Authorization_confirm__1Ou5D",fadeIn:"Authorization_fadeIn__1iPFL"}},34:function(e,t,a){},35:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(26),r=a.n(n),s=(a(34),a.p,a(35),a(8)),o=a(2),i=a.n(o),j=a(3),b=a(27),x=(a.n(b).a.create({withCredentials:!0,headers:{"X-Api-Key":"d800239c-ade8-4890-85a0-04e021a8e2b1"},baseURL:"https://api.pokemontcg.io/v2/"}),function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<15;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}),d=a(0),l=function(e){var t=Object(c.useState)(x()),a=Object(s.a)(t,2),n=a[0],r=(a[1],Object(c.useState)("")),o=Object(s.a)(r,2),b=o[0],l=o[1],u=Object(c.useState)(!1),h=Object(s.a)(u,2),O=h[0],m=h[1],v=Object(c.useState)(!1),_=Object(s.a)(v,2),p=_[0],f=_[1];console.log("OTP: "+n);return O?Object(d.jsx)(j.a,{to:"/cards"}):Object(d.jsxs)("div",{className:i.a.auth+" "+i.a.confirm,children:[Object(d.jsx)("h1",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(d.jsxs)("div",{className:i.a.authBox,children:[Object(d.jsxs)("div",{className:i.a.inputBx,children:[Object(d.jsx)("input",{onChange:function(e){return l(e.currentTarget.value)},type:"text",value:b,placeholder:"Code from SMS"}),p&&Object(d.jsxs)("div",{className:"".concat(i.a.errorBx," ").concat(O?"":i.a.active),children:[Object(d.jsx)("div",{className:i.a.errorBxIcon,children:"!"}),Object(d.jsx)("div",{className:i.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d SMS"})]})]}),Object(d.jsx)("div",{className:i.a.buttonBx,children:Object(d.jsx)("button",{onClick:function(){f(!0),b===n&&m(!0)},children:"Confirm"})})]})]})},u=function(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),b=Object(s.a)(o,2),x=b[0],l=b[1],u=Object(c.useState)(!1),h=Object(s.a)(u,2),O=h[0],m=h[1],v=Object(c.useState)(!1),_=Object(s.a)(v,2),p=_[0],f=_[1],N="1",B="1";return O?Object(d.jsx)(j.a,{to:"/confirm"}):Object(d.jsxs)("div",{className:i.a.auth,children:[Object(d.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("div",{className:i.a.authBox,children:[Object(d.jsxs)("div",{className:i.a.inputBx,children:[Object(d.jsx)("input",{onChange:function(e){return function(e){r(e.currentTarget.value)}(e)},value:n,type:"text",placeholder:"Login"}),p&&Object(d.jsxs)("div",{className:"".concat(i.a.errorBx," ").concat(O?"":i.a.active),children:[Object(d.jsx)("div",{className:i.a.errorBxIcon,children:"!"}),Object(d.jsx)("div",{className:i.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(d.jsxs)("div",{className:i.a.inputBx,children:[Object(d.jsx)("input",{value:x,onChange:function(e){return function(e){l(e.currentTarget.value)}(e)},type:"password",placeholder:"Password"}),p&&Object(d.jsxs)("div",{className:"".concat(i.a.errorBx," ").concat(O?"":i.a.active),children:[Object(d.jsx)("div",{className:i.a.errorBxIcon,children:"!"}),Object(d.jsx)("div",{className:i.a.errorBxMessage,children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]}),Object(d.jsx)("div",{className:i.a.buttonBx,children:Object(d.jsx)("button",{onClick:function(e){f(!0),n!==N||x!==B?(m(!1),console.log(1)):m(!0)},children:"Login"})})]})]})},h=a(17),O=a.n(h),m=function(e){return Object(d.jsx)("div",{className:"".concat(O.a.navbar," ").concat(O.a.navbarM),children:Object(d.jsx)("button",{children:"Logout"})})},v=a(7),_=a.n(v),p=function(e){return Object(d.jsxs)("div",{className:_.a.boxItem,children:[Object(d.jsx)("img",{src:"https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg",alt:"",className:_.a.boxItemImg}),Object(d.jsx)("h1",{className:_.a.boxItemName,children:"Pokemon"}),Object(d.jsx)("p",{className:_.a.boxItemSubName,children:"Artist"})]})},f=function(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2);a[0],a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:_.a.wrapper,children:[Object(d.jsxs)("div",{className:_.a.sidebar,children:[Object(d.jsx)("div",{className:_.a.sidebarBx,children:Object(d.jsxs)("select",{name:"",id:"",children:[Object(d.jsx)("option",{value:"\u041f\u0435\u0440\u0432\u043e\u0435",children:"\u041f\u0435\u0440\u0432\u043e\u0435"}),Object(d.jsx)("option",{value:"\u0412\u0442\u043e\u0440\u043e\u0435",children:"\u0412\u0442\u043e\u0440\u043e\u0435"})]})}),Object(d.jsx)("div",{className:_.a.sidebarBx,children:Object(d.jsxs)("select",{name:"",id:"",children:[Object(d.jsx)("option",{value:"\u041f\u0435\u0440\u0432\u043e\u0435",children:"\u041f\u0435\u0440\u0432\u043e\u0435"}),Object(d.jsx)("option",{value:"\u0412\u0442\u043e\u0440\u043e\u0435",children:"\u0412\u0442\u043e\u0440\u043e\u0435"})]})})]}),Object(d.jsxs)("div",{className:_.a.boxCards,children:[Object(d.jsx)(p,{}),Object(d.jsx)(p,{}),Object(d.jsx)(p,{}),Object(d.jsx)(p,{})]})]})]})};var N=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(u,{})}}),Object(d.jsx)(j.b,{exact:!0,path:"/confirm",render:function(){return Object(d.jsx)(l,{})}}),Object(d.jsx)(j.b,{exact:!0,path:"/cards",render:function(){return Object(d.jsx)(f,{})}})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},g=a(12);r.a.render(Object(d.jsx)(g.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),B()},7:function(e,t,a){e.exports={wrapper:"PokemonCards_wrapper__1jyBz",sidebar:"PokemonCards_sidebar__2q8MJ",sidebarBx:"PokemonCards_sidebarBx__3wOa9",boxCards:"PokemonCards_boxCards__WFmhB",boxItemImg:"PokemonCards_boxItemImg__2iZBm",boxItemName:"PokemonCards_boxItemName__3LXzj",boxItemSubName:"PokemonCards_boxItemSubName__1i54D"}}},[[63,1,2]]]);
//# sourceMappingURL=main.67c0cb1a.chunk.js.map