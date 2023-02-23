(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(8),r=c(2),i=c(10),o=c(6),d=c.n(o),j=c(1),u=(c(16),c(17),c(9)),b=c.n(u),h=c(0),m=function(e){var t=e.todos,c=e.currentTodo,s=e.onClick;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.userId,e)},children:Object(h.jsx)("span",{className:"icon",children:c===e?Object(h.jsx)("i",{className:"far fa-eye-slash"}):Object(h.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var O=function(e){var t=e.query,c=e.setQuery,a=e.filter,n=e.setFilter;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return n(e.target.value)},children:[Object(h.jsx)("option",{value:s.ALL,children:"All"}),Object(h.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(h.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},x=(c(19),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),f=function(e){var t=e.user,c=e.todo,s=e.onCloseBtn,a=c.id,n=c.title,l=c.completed;return Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),t?Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:s})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:n}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[l?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(t),children:null===t||void 0===t?void 0:t.name})]})]})]}):Object(h.jsx)(x,{})]})};function p(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var N=function(e){return p("/users/".concat(e))},v=function(){var e=Object(j.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(j.useState)(!1),o=Object(r.a)(n,2),u=o[0],b=o[1],v=Object(j.useState)(null),y=Object(r.a)(v,2),g=y[0],C=y[1],k=Object(j.useState)(null),L=Object(r.a)(k,2),E=L[0],T=L[1],w=Object(j.useState)(""),S=Object(r.a)(w,2),A=S[0],I=S[1],B=Object(j.useState)(s.ALL),P=Object(r.a)(B,2),_=P[0],D=P[1],F=function(e,t,c){var a=Object(i.a)(e);if(t){var n=t.toLowerCase().trim();a=a.filter((function(e){return e.title.toLowerCase().includes(n)}))}switch(c){case s.ACTIVE:a=a.filter((function(e){return!e.completed}));break;case s.COMPLETED:a=a.filter((function(e){return e.completed}));case s.ALL:}return a}(c,A,_),M=function(){var e=Object(l.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:c=e.sent,C(c),b(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){p("/todos").then((function(e){return b(!0),a(e)})).catch((function(){alert("Sorry, there is no todos")}))}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(O,{query:A,setQuery:I,filter:_,setFilter:D})}),Object(h.jsxs)("div",{className:"block",children:[!u&&Object(h.jsx)(x,{}),Object(h.jsx)(m,{todos:F,currentTodo:E,onClick:function(e,t){T(t),M(e)}})]})]})})}),E&&Object(h.jsx)(f,{user:g,todo:E,onCloseBtn:function(){C(null),T(null)}})]})};n.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.072e260a.chunk.js.map