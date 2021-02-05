(this["webpackJsonpneighbouring-cells-game"]=this["webpackJsonpneighbouring-cells-game"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),c=n.n(r),o=n(11),i=n.n(o),l=(n(90),n(12)),s=(n(91),n(146)),u=n(144),j=new Map([["teal","#19FA8C"],["blue","#4C32FA"],["yellow","#FADA0C"],["red","#FA1E00"]]),b=new Map([["teal","#FFA966"],["blue","#CE4DFF"],["yellow","#C3FF38"],["red","#40E8FF"]]),d=new Map([["black","#80682E"],["poo","#FFE6A8"],["purple","#B0CC49"],["brown","#CCA749"]]),h=Array.from(j.keys()),O=21,f=18,x="Default",g=new Map([["Default",j],["Kaki",d],["Shmlasha",b]]),m=[18,24,32],p=n(25),v=n(72),y=n(138),C=n(131),k=n(60),S=n(49),w=n(50),A=function(){function e(){Object(S.a)(this,e)}return Object(w.a)(e,null,[{key:"getRandomItem",value:function(e){return e[Math.floor(Math.random()*e.length)]}}]),e}(),F=new(function(){function e(t){Object(S.a)(this,e),this.defaultCellColors=t.colors}return Object(w.a)(e,[{key:"generateRandomBoard",value:function(e,t){for(var n=Array.from(t.keys()),a=[],r=0;r<e;++r){for(var c=[],o=0;o<e;++o)c.push(A.getRandomItem(n||this.defaultCellColors));a.push(c)}return a}},{key:"repaint",value:function(e,t){var n,a=this,r=t.slice(),c=["0|0"],o=r[0][0],i=function e(t){var n=a.getNeighbours(r.length-1,r,o,t,c);if(n.length>0){var i,l=Object(k.a)(n);try{for(l.s();!(i=l.n()).done;){var s=i.value;c.push(a.cellToString(s)),e(s)}}catch(u){l.e(u)}finally{l.f()}}return a.cellStringsToArr(c)}([0,0]),s=Object(k.a)(i);try{for(s.s();!(n=s.n()).done;){var u=Object(l.a)(n.value,2),j=u[0],b=u[1];r[j][b]=e}}catch(d){s.e(d)}finally{s.f()}return r}},{key:"cellToString",value:function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return"".concat(n,"|").concat(a)}},{key:"cellStringsToArr",value:function(e){return e.map((function(e){var t=e.split("|"),n=Object(l.a)(t,2),a=n[0],r=n[1];return[parseInt(a),parseInt(r)]}))}},{key:"getNeighbours",value:function(e,t,n,a,r){var c=this,o=Object(l.a)(a,2),i=o[0],s=o[1];return[i<e?[i+1,s]:[],0!==i?[i-1,s]:[],0!==s?[i,s-1]:[],s<e?[i,s+1]:[]].filter((function(e){return e.length>0&&t[e[0]][e[1]]===n&&!r.includes(c.cellToString(e))}))}},{key:"isHomogeneous",value:function(e){var t=e[0][0];return 0===e.filter((function(e){return e.filter((function(e){return!(e===t)})).length>0})).length}}]),e}())({colors:h}),z=Object(C.a)((function(e){return{btn:{border:"none",cursor:"pointer",width:24,height:24},root:Object(p.a)({display:"flex",justifyContent:"center"},e.breakpoints.down("xs"),{justifyContent:"space-around"})}}));function T(e){var t=e.onColorSelect,n=e.colorMap,c=void 0===n?j:n,o=Object(r.useRef)(t).current,i=z(),l=Array.from(c.keys());return Object(r.useEffect)((function(){function e(e){if(!(e.code.indexOf("Digit")<0)){var t=parseInt(e.code.split("Digit")[1]);t>4||o(l[t-1])}}return document.addEventListener("keydown",e),function(){console.log("I clean now..."),document.removeEventListener("keydown",e)}}),[l,o]),Object(a.jsx)(s.a,{className:i.root,children:l.map((function(e){return Object(a.jsx)("button",{title:e,onClick:function(){return t(e)},style:{backgroundColor:c.get(e)},className:i.btn},e)}))})}var I=n(150),M=n(135),E=n(136),N=n(137),B=Object(C.a)((function(e){return{root:{textAlign:"center","& .MuiDialog-paperWidthFalse":{width:"80%"}}}}));function D(e){var t=e.text,n=e.title,r=e.open,c=e.action,o=B();return Object(a.jsxs)(I.a,{open:r,maxWidth:!1,onClose:c,disableBackdropClick:!0,className:o.root,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(M.a,{children:n}),Object(a.jsx)(E.a,{children:Object(a.jsx)(v.a,{children:t})}),Object(a.jsx)(N.a,{children:Object(a.jsx)(s.a,{textAlign:"center",width:"100%",mb:1.5,children:Object(a.jsx)(y.a,{onClick:c,variant:"contained",children:"Restart"})})})]})}var R=Object(C.a)((function(e){var t;return{cell:(t={width:"100%",margin:1,transition:"background-color .25s"},Object(p.a)(t,e.breakpoints.up("sm"),{width:function(e){return e.cellWidth}}),Object(p.a)(t,"&:after",{content:"''",display:"block",paddingTop:"100%"}),t)}}));function W(e){var t=e.boardData,n=e.onColorSelect,r=e.size,c=e.gameControlsHeight,o=e.colorMap,i=void 0===o?j:o,l=(window.innerHeight-(c||0)-240)/r,u=R({size:r,cellWidth:l});return Object(a.jsx)(a.Fragment,{children:t.map((function(e,t){return Object(a.jsx)(s.a,{display:"flex",children:e.map((function(e,r){return Object(a.jsx)("div",{role:"button",onClick:function(){return n(e)},className:"".concat(u.cell),style:{backgroundColor:i.get(e)}},"".concat(t,"-").concat(r))}))},t)}))})}var H=Object(C.a)((function(e){return{board:Object(p.a)({},e.breakpoints.up("sm"),{display:"inline-block"})}}));function L(e){var t=e.size,n=e.rounds,c=e.colorMap,o=H(),i=Object(r.useState)(F.generateRandomBoard(t,c)),u=Object(l.a)(i,2),j=u[0],b=u[1],d=Object(r.useState)(1),h=Object(l.a)(d,2),O=h[0],f=h[1],x=Object(r.useState)(!1),g=Object(l.a)(x,2),m=g[0],p=g[1],C=Object(r.useState)(),k=Object(l.a)(C,2),S=k[0],w=k[1];function A(e){var t=F.repaint(e,j);F.isHomogeneous(t)&&p(!0),b(t),f(O+1)}function z(){f(1),p(!1),b(F.generateRandomBoard(t,c))}var I="game-controls";return Object(r.useEffect)((function(){var e=document.getElementById(I);b(F.generateRandomBoard(t,c)),w(e&&e.offsetHeight)}),[t,c]),Object(a.jsxs)(s.a,{width:"100%",textAlign:"center",children:[Object(a.jsx)(s.a,{className:o.board,children:Object(a.jsx)(W,{size:t,colorMap:c,boardData:j,onColorSelect:A,gameControlsHeight:S})}),Object(a.jsxs)(s.a,{id:I,mt:2,className:o.controls,children:[Object(a.jsx)(s.a,{textAlign:"center",children:Object(a.jsxs)(v.a,{variant:"body1",children:["Round ",O,"/",n]})}),Object(a.jsx)(s.a,{my:4,children:Object(a.jsx)(T,{onColorSelect:A,colorMap:c})}),Object(a.jsx)(s.a,{mt:3,textAlign:"center",children:Object(a.jsx)(y.a,{variant:"contained",onClick:z,children:"Restart"})})]}),Object(a.jsx)(D,{title:"The game beat you",text:"Want a revenge?",action:z,open:O>n}),Object(a.jsx)(D,{title:"Congratulations!",text:"You beat the game",action:z,open:m})]})}var G=n(139),J=n(140),P=n(151),Y=n(141),K=n(149),q=n(145);function Q(e){var t=e.settings,n=e.setSettings,c=e.setTab,o=Object(r.useState)(t.size),i=Object(l.a)(o,2),u=i[0],j=i[1],b=Object(r.useState)(t.rounds),d=Object(l.a)(b,2),h=d[0],O=d[1],f=Object(r.useState)(t.theme),x=Object(l.a)(f,2),p=x[0],v=x[1];return Object(a.jsx)(s.a,{children:Object(a.jsxs)("form",{children:[Object(a.jsxs)(G.a,{component:"fieldset",fullWidth:!0,children:[Object(a.jsx)(J.a,{component:"legend",children:"Board size"}),Object(a.jsx)(P.a,{"aria-label":"board-size",name:"board-size",value:u,onChange:function(e){return j(parseInt(e.target.value))},children:m.map((function(e){return Object(a.jsx)(Y.a,{value:e,control:Object(a.jsx)(K.a,{}),label:"".concat(e)},e)}))})]}),Object(a.jsx)(s.a,{mt:4,children:Object(a.jsxs)(G.a,{component:"fieldset",fullWidth:!0,children:[Object(a.jsx)(J.a,{component:"legend",children:"Theme"}),Object(a.jsx)(P.a,{"aria-label":"board-size",name:"board-size",value:p,onChange:function(e){return v(e.target.value)},children:Array.from(g.keys()).map((function(e){return Object(a.jsx)(Y.a,{value:e,control:Object(a.jsx)(K.a,{}),label:e},e)}))})]})}),Object(a.jsx)(s.a,{mt:4,children:Object(a.jsx)(G.a,{fullWidth:!0,children:Object(a.jsx)(q.a,{id:"rounds",label:"Number of rounds",size:"small",value:h||"",variant:"outlined",onChange:function(e){return O(parseInt(e.target.value))}})})}),Object(a.jsx)(s.a,{mt:4,children:Object(a.jsx)(y.a,{variant:"contained",onClick:function(){n({size:u,rounds:h,theme:p}),c(0)},children:"Save & Start"})})]})})}var U=n(41),V=n(147),X=n(143);function Z(e){var t=e.setTab,n=e.tab,r=c.a.useState(n),o=Object(l.a)(r,2),i=o[0],u=o[1];function j(e){return{id:"tab-".concat(e),"aria-controls":"tabpanel-".concat(e)}}return c.a.useEffect((function(){u(n)}),[n]),Object(a.jsx)(s.a,{children:Object(a.jsxs)(V.a,{value:i,onChange:function(e,n){u(n),t(n)},variant:"fullWidth",textColor:"primary",indicatorColor:"primary",children:[Object(a.jsx)(X.a,Object(U.a)({label:"Game"},j(0))),Object(a.jsx)(X.a,Object(U.a)({label:"Settings"},j(1)))]})})}var $=n(70);function _(e){var t=e.children,n=e.value,r=e.index,c=Object($.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(U.a)(Object(U.a)({role:"tabpanel",hidden:n!==r,id:"tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},c),{},{children:n===r&&Object(a.jsx)(a.Fragment,{children:t})}))}var ee=n(142),te=n(69),ne=n.n(te),ae=Object(C.a)((function(e){return{tooltipIcon:{top:"50%",right:"0",position:"absolute",transform:"translateY(-50%)"}}}));function re(){var e=ae(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.jsxs)(s.a,{textAlign:"center",children:[Object(a.jsx)(s.a,{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(v.a,{variant:"h5",children:"Neighbouring Cells"}),Object(a.jsx)(s.a,{className:e.tooltipIcon,children:Object(a.jsx)(ee.a,{onClick:function(){return o(!0)},children:Object(a.jsx)(ne.a,{fontSize:"small"})})})]})}),Object(a.jsxs)(I.a,{open:c,maxWidth:"md",onClose:function(){return o(!1)},children:[Object(a.jsx)(M.a,{children:"How to play"}),Object(a.jsx)(E.a,{children:"\n    The goal is to paint all board cells the same color.\n    At the beginning of each round, the color of the top left (initial) cell is selected.\n    The newly selected color will spread to other cells which have the same color as the initial one and are adjacent to each other (have a common top, right, bottom or left border). \n"}),Object(a.jsx)(N.a,{children:Object(a.jsx)(y.a,{onClick:function(){return o(!1)},children:"Got it"})})]})]})}var ce=function(){var e=c.a.useState(0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=c.a.useState({size:f,theme:x,rounds:O}),i=Object(l.a)(o,2),j=i[0],b=i[1];return Object(a.jsxs)("main",{children:[Object(a.jsx)(u.a,{}),Object(a.jsxs)(s.a,{px:2,py:2,children:[Object(a.jsx)(s.a,{mb:2,children:Object(a.jsx)(re,{})}),Object(a.jsx)(Z,{setTab:r,tab:n}),Object(a.jsxs)("div",{children:[Object(a.jsx)(_,{value:n,index:0,children:Object(a.jsx)(s.a,{id:"game-tab-content",display:"flex",justifyContent:"center",py:3,children:Object(a.jsx)(L,{size:j.size,rounds:j.rounds,colorMap:g.get(j.theme)})})}),Object(a.jsx)(_,{value:n,index:1,children:Object(a.jsx)(s.a,{id:"settings-tab-content",py:3,children:Object(a.jsx)(Q,{settings:j,setSettings:b,setTab:r})})})]})]})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ce,{})}),document.getElementById("root")),oe()},90:function(e,t,n){},91:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.d03f175b.chunk.js.map