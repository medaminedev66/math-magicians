(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(5),l=n.n(o),r=(n(15),n(6)),u=n(7),i=n(10),s=n(8),b=n(9),j=n(1),x=n(4),h=n.n(x);function p(t,e,n){var a=h()(t),c=h()(e);if("+"===n)return a.plus(c).toString();if("-"===n)return a.minus(c).toString();if("x"===n)return a.times(c).toString();try{if("\xf7"===n)return a.div(c).toString();if("%"===n)return a.mod(c).toString()}catch(o){return"error"}throw Error("Unknown operation '".concat(n,"'"))}var O=n(0),m=function(){var t=Object(a.useState)({total:0,next:null,operation:null}),e=Object(b.a)(t,2),n=e[0],c=e[1],o=function(t){c(function(t,e){return"AC"===e||Number.isNaN(Number(t.total))?{total:0,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?Object(j.a)(Object(j.a)({},t),{},{next:t.next+e}):Object(j.a)(Object(j.a)({},t),{},{next:e}):t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?Object(j.a)({},t):Object(j.a)(Object(j.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===e?t.next&&t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:null}:{next:t.next}:"+/-"===e?t.next?Object(j.a)(Object(j.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(j.a)(Object(j.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(j.a)(Object(j.a)({},t),{},{operation:e}):{total:p(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}:Object(j.a)(Object(j.a)({},t),{},{operation:e})}(n,t.target.value))},l=n.total,r=n.operation,u=n.next;return r||(r=""),u||(u=""),l||0===l||(l=""),Object(O.jsxs)("div",{className:"Calculator",children:[Object(O.jsx)("span",{className:"input",children:"".concat(l," ").concat(r," ").concat(u)}),Object(O.jsx)("button",{type:"button",value:"AC",className:"char",onClick:o,children:"AC"}),Object(O.jsx)("button",{value:"+/-",type:"button",className:"char",onClick:o,children:"+/-"}),Object(O.jsx)("button",{value:"%",type:"button",className:"char",onClick:o,children:"%"}),Object(O.jsx)("button",{value:"\xf7",type:"button",className:"char orange",onClick:o,children:"\xf7"}),Object(O.jsx)("button",{type:"button",value:"7",className:"char",onClick:o,children:"7"}),Object(O.jsx)("button",{value:"8",type:"button",className:"char",onClick:o,children:"8"}),Object(O.jsx)("button",{value:"9",type:"button",className:"char",onClick:o,children:"9"}),Object(O.jsx)("button",{value:"x",type:"button",className:"char orange",onClick:o,children:"x"}),Object(O.jsx)("button",{value:"4",type:"button",className:"char",onClick:o,children:"4"}),Object(O.jsx)("button",{value:"5",type:"button",className:"char",onClick:o,children:"5"}),Object(O.jsx)("button",{value:"6",type:"button",className:"char",onClick:o,children:"6"}),Object(O.jsx)("button",{value:"-",type:"button",className:"char orange",onClick:o,children:"-"}),Object(O.jsx)("button",{value:"1",type:"button",className:"char",onClick:o,children:"1"}),Object(O.jsx)("button",{value:"2",type:"button",className:"char",onClick:o,children:"2"}),Object(O.jsx)("button",{value:"3",type:"button",className:"char",onClick:o,children:"3"}),Object(O.jsx)("button",{value:"+",type:"button",className:"char orange",onClick:o,children:"+"}),Object(O.jsx)("button",{value:"0",type:"button",className:"zero",onClick:o,children:"0"}),Object(O.jsx)("button",{value:".",type:"button",className:"char",onClick:o,children:"."}),Object(O.jsx)("button",{value:"=",type:"button",className:"char orange",onClick:o,children:"="})]})},d=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m,{})})}}]),n}(c.a.Component);l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.059b4e9d.chunk.js.map