(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(5),o=c(1),r=c(3),i=c.n(r),l=(c(10),c(11),c(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var e=Object(o.useState)("Jam"),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("main",{className:"section container",children:[Object(l.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c.length>0?"".concat(c," is selected"):"No goods selected",c.length>0&&Object(l.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){n("")}})]}),Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("tbody",{children:d.map((function(e){var t=c===e;return Object(l.jsxs)("tr",{"data-cy":"Good",className:i()("",{"has-background-success-light":t}),children:[Object(l.jsx)("td",{children:Object(l.jsx)("button",{"data-cy":t?"RemoveButton":"AddButton",type:"button",className:i()("button",{"is-info":t}),onClick:t?function(){return n("")}:function(){return n(e)},children:t?"-":"+"})}),Object(l.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e.toString())}))})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.fc9afa7c.chunk.js.map