(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(8),s=(c(36),c(37),c(3)),r=c(5),l=c(0),i=c(9),j=c(10),o=c.n(j),d=c(16),b=c(27);function u(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var h=c(1),O=["children","params"],m=function(e){var t=e.children,c=e.params,n=Object(b.a)(e,O),s=Object(a.d)(),l=Object(r.a)(s,1)[0];return Object(h.jsx)(a.b,Object(d.a)(Object(d.a)({to:{search:u(l,c)}},n),{},{children:t}))},x=function(){var e=Object(a.d)(),t=Object(r.a)(e,2),c=t[0],n=t[1],s=c.getAll("centuries"),l=c.get("sex"),j=function(e){return o()({"is-active":l===e||"all"===e&&null===l})},d=o()("button","is-success",{"is-outlined":s.length>0});return Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(h.jsx)(m,{className:j("all"),params:{sex:null},children:"All"}),Object(h.jsx)(m,{className:j("m"),params:{sex:"m"},children:"Male"}),Object(h.jsx)(m,{className:j("f"),params:{sex:"f"},children:"Female"})]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{"data-cy":"NameFilter",type:"text",className:"input",placeholder:"Search",onChange:function(e){var t=e.target.value;""===t?c.delete("query"):c.set("query",t),n(c)},value:c.get("query")||""}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(h.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(h.jsx)(m,{"data-cy":"century",className:(c=e,o()("button","mr-1",{"is-info":s.includes(c)})),params:{centuries:(t=e,s.includes(t)?s.filter((function(e){return e!==t})):[].concat(Object(i.a)(s),[t]))},children:e});var t,c}))}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(m,{"data-cy":"centuryALL",className:d,params:{centuries:null},children:"All"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(m,{className:"button is-link is-outlined is-fullwidth",params:{centuries:null,sex:null,query:null},children:"Reset all filters"})})]})},p=(c(39),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),f=function(e){var t=e.person,c=t.slug,n=t.name,s=t.sex,l=Object(a.d)(),i=Object(r.a)(l,1)[0],j=o()({"has-text-danger":"f"===s}),d="/people/".concat(c,"?").concat(i.toString());return Object(h.jsx)(a.b,{className:j,to:d,children:n})},v=function(e){var t=e.person,c=e.clickedPersonSlug,n=t.slug,a=t.sex,s=t.born,r=t.died,l=t.father,i=t.mother,j=t.motherName||"-",d=t.fatherName||"-",b=o()({"has-background-warning":n===c});return Object(h.jsxs)("tr",{"data-cy":"person",className:b,children:[Object(h.jsx)("td",{children:Object(h.jsx)(f,{person:t})}),Object(h.jsx)("td",{children:a}),Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:r}),Object(h.jsx)("td",{children:i?Object(h.jsx)(f,{person:i}):Object(h.jsx)(h.Fragment,{children:j})}),Object(h.jsx)("td",{children:l?Object(h.jsx)(f,{person:l}):Object(h.jsx)(h.Fragment,{children:d})})]})},g=function(e){var t,c=e.people,n=e.clickedPersonSlug,s=Object(a.d)(),l=Object(r.a)(s,1)[0],j=null===(t=l.get("query"))||void 0===t?void 0:t.toLowerCase(),b=l.getAll("centuries"),u=l.get("sex"),O=l.get("sort"),x=l.get("order"),p=Object(i.a)(c),f=function(e){return j&&(null===e||void 0===e?void 0:e.toLowerCase().includes(j))};j&&(p=p.filter((function(e){return f(e.name)||f(e.motherName)||f(e.fatherName)}))),b.length&&(p=p.filter((function(e){return b.includes((Math.floor(e.born/100)+1).toString())}))),u&&(p=p.filter((function(e){return e.sex===u}))),p.sort((function(e,t){var c=e,n=t;if("desc"===x){var a=[c,n];n=a[0],c=a[1]}switch(O){case"name":case"sex":return c[O].localeCompare(n[O]);case"born":case"died":return c[O]-n[O];default:return 0}}));return Object(h.jsx)(h.Fragment,{children:p.length?Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[["name","sex","born","died"].map((function(e){return Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e[0].toUpperCase()+e.slice(1),Object(h.jsx)(m,{className:"is-active",params:(c=e,O&&O===c?"desc"===x?{sort:null,order:null}:{order:"desc"}:{sort:c,order:null}),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:(t=e,o()("fas",{"fa-sort":O!==t},{"fa-sort-down":O===t&&"desc"===x},{"fa-sort-up":O===t&&null===x}))})})})]})});var t,c})),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:p.map((function(e){var t=Object(d.a)({},e);return t.father=c.find((function(e){return e.name===t.fatherName})),t.mother=c.find((function(e){return e.name===t.motherName})),Object(h.jsx)(v,{person:t,clickedPersonSlug:n},t.slug)}))})]}):Object(h.jsx)("p",{children:"There are no people matching the current search criteria"})})},N=c(4),y=c(7),w="https://mate-academy.github.io/react_people-table/api/people.json";function k(e){return new Promise((function(t){return setTimeout(t,e)}))}function S(){return(S=Object(y.a)(Object(N.a)().mark((function e(){return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(500).then((function(){return fetch(w)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e=Object(l.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),i=Object(r.a)(a,2),j=i[0],o=i[1],d=!c&&!j,b=!(null===c||void 0===c||!c.length);Object(l.useEffect)((function(){(function(){return S.apply(this,arguments)})().then(n).catch((function(){return o(!0)}))}),[]);var u=Object(s.q)().slug;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[b&&Object(h.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(h.jsx)(x,{})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("div",{className:"box table-container",children:[d&&Object(h.jsx)(p,{}),j&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),c&&!c.length&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),b&&Object(h.jsx)(g,{people:c,clickedPersonSlug:u})]})})]})})]})},F=function(){var e=Object(a.d)(),t=Object(r.a)(e,1)[0],c=function(e){return o()("navbar-item",{"has-background-grey-lighter":e.isActive})},n="people?".concat(t.toString());return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(a.c,{to:"/",className:c,children:"Home"}),Object(h.jsx)(a.c,{to:n,className:c,children:"People"})]})})})},A=(c(40),function(){return Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),L=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})},q=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(F,{}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"home",element:Object(h.jsx)(s.a,{to:"/",replace:!0})}),Object(h.jsx)(s.b,{path:"/",element:Object(h.jsx)(A,{})}),Object(h.jsxs)(s.b,{path:"people",children:[Object(h.jsx)(s.b,{index:!0,element:Object(h.jsx)(P,{})}),Object(h.jsx)(s.b,{path:":slug",element:Object(h.jsx)(P,{})})]}),Object(h.jsx)(s.b,{path:"*",element:Object(h.jsx)(L,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(h.jsx)(a.a,{children:Object(h.jsx)(q,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.d1dff538.chunk.js.map