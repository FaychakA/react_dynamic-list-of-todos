(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),u=n(4),s=n(5),l=n.n(s),i=n(6),b=n(9),m=n(1),d=(n(16),function(e){return fetch("https://jsonplaceholder.typicode.com"+e).then((function(e){return e.json()}))}),p=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(m.a)(o,2),p=s[0],f=s[1],O=Object(a.useState)(!1),j=Object(m.a)(O,2),E=j[0],y=j[1],v=Object(a.useState)(!1),h=Object(m.a)(v,2),k=h[0],N=h[1],S=Object(a.useState)(""),C=Object(m.a)(S,2),g=C[0],w=C[1],x=Object(a.useState)(!1),R=Object(m.a)(x,2),L=R[0],I=R[1],D=Object(a.useState)(!1),F=Object(m.a)(D,2),J=F[0],T=F[1],_=Object(a.useState)(!1),B=Object(m.a)(_,2),U=B[0],q=B[1],z=function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,d("/users");case 4:return t=e.sent,e.next=7,d("/todos");case 7:n=e.sent,a=n.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:t.find((function(t){return t.id===e.userId}))})})),r(a),f(a),N(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w("Loading error");case 17:y(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){z()}),[]);return c.a.createElement("div",{className:"main"},c.a.createElement("h1",null,"Dinamic list of TODOs"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){f(n),I(!1),T(!1),q(!1)}},"Reset"),c.a.createElement("button",{type:"button",className:"button",onClick:function(){var e=Object(u.a)(n).sort((function(e,t){return e.title.localeCompare(t.title)}));L?(f(e.reverse()),I(!1)):(f(e),I(!0)),T(!1),q(!1)}},"Sort by title"),c.a.createElement("button",{type:"button",className:"button",onClick:function(){var e=Object(u.a)(n).sort((function(e,t){return Number(t.completed)-Number(e.completed)}));J?(f(e.reverse()),T(!1)):(f(e),T(!0)),I(!1),q(!1)}},"Sort by completed"),c.a.createElement("button",{type:"button",className:"button",onClick:function(){var e=Object(u.a)(n).sort((function(e,t){if(void 0===e.user||void 0===t.user)throw new TypeError("ERROR");return e.user.name.localeCompare(t.user.name)}));U?(f(e.reverse()),q(!1)):(f(e),q(!0)),I(!1),T(!1)}},"Sort by user")),k?n.length>0?c.a.createElement("ul",{className:"list"},p.map((function(e){return c.a.createElement("li",{key:e.id,className:e.completed?"completed":"notCompleted"},c.a.createElement("input",{type:"checkbox",checked:e.completed,disabled:!0}),e.title+" ","(",e.user?e.user.name:"Unknown",")")}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",onClick:z,disabled:E},E?"Loading...":"Reload"),"No todos yet"):c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",onClick:z,disabled:E},E?"Loading...":"Load Information"),g&&c.a.createElement("p",null,g)))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f358b392.chunk.js.map