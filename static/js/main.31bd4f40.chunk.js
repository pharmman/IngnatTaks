(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={header:"Header_header__AYaqd",header_active:"Header_header_active__iCjak",header__logo:"Header_header__logo__XLvb4",header__body:"Header_header__body__16Js6",header__menu_items:"Header_header__menu_items__jXM-i"}},function(e,a,t){e.exports={message:"Message_message__2mtD-",avatar:"Message_avatar__KoWLR",message_item:"Message_message_item__30EHS",time:"Message_time__1eg7i",name:"Message_name__mA6OA",text:"Message_text__1Gwox"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2hcUI",errorInput:"SuperInputText_errorInput__tMDzc",error:"SuperInputText_error__3s6La"}},,function(e,a,t){e.exports={page:"Error404_page__38Qjt",page__img:"Error404_page__img__6wkeD","page__title-text":"Error404_page__title-text__kaYlk"}},,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__3bpN0",error:"Greeting_error__1V-ID"}},function(e,a,t){e.exports={default:"SuperButton_default__3zWKI",red:"SuperButton_red__EnBCn"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__308c3",spanClassName:"SuperCheckbox_spanClassName__I3cDQ"}},,,,function(e,a,t){e.exports={App:"App_App__2Vk4q"}},,function(e,a,t){e.exports={blue:"HW4_blue__3FgLg",column:"HW4_column__1YfBz"}},,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(33),t(24)),i=t.n(o),s=t(2),u=t(6),m=t.n(u),_=t(5);var d=function(e){var a=Object(n.useState)(m.a.header),t=Object(s.a)(a,2),l=t[0],c=t[1];return setTimeout((function(){c(m.a.header_active)}),3e3),r.a.createElement("div",null,r.a.createElement("header",{className:l},r.a.createElement("div",{className:m.a.header__body},r.a.createElement("a",{className:m.a.header__logo,href:"https://it-incubator.by/"},r.a.createElement("img",{src:"https://it-incubator.by/images/tild3364-3938-4962-b634-303637346334__logo-big-blue.png",alt:""})),r.a.createElement("nav",{className:m.a.header__menu},r.a.createElement("ul",{className:m.a.header__menu_items},e.path.map((function(e){return r.a.createElement("li",null,r.a.createElement(_.b,{to:e.link},e.title))})))))))},p=t(1),E=t(7),h=t.n(E);var f=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.message},r.a.createElement("div",{className:h.a.avatar},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:h.a.message_item},r.a.createElement("p",{className:h.a.name},e.name),r.a.createElement("p",{className:h.a.text},e.message),r.a.createElement("div",{className:h.a.time},e.time))))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",v="some text",k="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,{avatar:g,name:b,message:v,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(e){return r.a.createElement("div",null,r.a.createElement("li",null,e.affair.name," ",e.affair.priority," ",r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(x),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(e,a){return"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(27),w=t(18),S=t.n(w),A=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=""===l?S.a.someClass:S.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),_=m[0],d=m[1],p=a.length;return r.a.createElement(A,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){""===o?d("Enter your name!"):(d(""),t(o),alert("Hello ".concat(o," !")),i(""))},error:_,totalUsers:p})},T=t(41);var H=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(T.a)(),name:e};l([a].concat(Object(O.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(8),W=t(11),B=t.n(W),F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,s=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(B.a.error," ").concat(c?B.a.error:i),m="".concat(o," ").concat(c?B.a.errorInput:B.a.superInput,";");return r.a.createElement("form",null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},J=t(26),U=t.n(J),L=t(19),P=t.n(L),D=function(e){var a=e.red,t=e.className,n=Object(M.a)(e,["red","className"]),l="".concat(a?P.a.default:P.a.red," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(20),G=t.n(K),X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),u=Object(s.a)(i,2),m=u[0],_=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:U.a.column},r.a.createElement(F,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(D,{red:!0,onClick:o},"delete "),r.a.createElement(X,{checked:m,onChangeChecked:_},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){return _(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var q=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(y,null),r.a.createElement(H,null),r.a.createElement(Y,null))},z=t(13),V=t.n(z);var Q=function(){return r.a.createElement("div",{className:V.a.page},r.a.createElement("div",{className:V.a.page__title},r.a.createElement("h1",{className:"classes.page__title-text"},"Looks like you got lost."),r.a.createElement(_.b,{to:"/pre-junior"},"To home")),r.a.createElement("div",{className:V.a.page__img},r.a.createElement("img",{src:"https://i.gifer.com/7VE.gif",alt:""})))},R="/pre-junior",Z="/junior",$="/junior_plus";var ee=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:R})}}),r.a.createElement(p.b,{path:R,render:function(){return r.a.createElement(q,null)}}),r.a.createElement(p.b,{path:Z}),r.a.createElement(p.b,{path:$}),r.a.createElement(p.b,{render:function(){return r.a.createElement(Q,null)}})))},ae=[{link:"/pre-junior",title:"Pre-Junior"},{link:"/junior",title:"Junior"},{link:"/junior_plus",title:"Junior-Plus"}];var te=function(){return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(d,{path:ae}),r.a.createElement(ee,null)))};var ne=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.31bd4f40.chunk.js.map