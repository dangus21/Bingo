(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{137:function(e,t,n){e.exports=n(265)},142:function(e,t,n){},143:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(16),o=n.n(r);n(142),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(129),l=n(24),s=n(86),d=(n(143),n(280)),u=n(41),m=n(120),g=n.n(m),E=n(3),b=n.n(E),f=n(279),C=n(33),p=n(277),h=n(281),v=n(34),k=n.n(v),y=function(e){var t=e.text,n=e.placeholder,a=e.id,r=e.allowEditing,o=e.isEditing,c=e.isChecked,l=e.uuid,s=e.setEdit,d=e.setNotification,m=e.remove;return i.a.createElement(f.a,null,i.a.createElement(f.a.Content,null,i.a.createElement(f.a.Meta,{className:k.a.bingoCardMeta},i.a.createElement("small",{onClick:function(){g()(l),d("Bingo card ID copied to clipboard")},className:k.a.cursorCopy},i.a.createElement("span",null,l)),i.a.createElement("span",{onClick:function(){return m(l)}},i.a.createElement(C.a,{name:"delete",color:"red"})),i.a.createElement("span",{onClick:function(){return s(a,{isEditing:!1,isChecked:!c,allowEditing:!r})}},i.a.createElement(C.a,{name:"check",color:c?"green":"grey"})))),i.a.createElement(f.a.Content,{onClick:function(){r&&!o&&s(a,{isEditing:!0,allowEditing:!0})}},i.a.createElement(p.a,{as:"div",className:b()(k.a.bingoCardContentSizing,Object(u.a)({},k.a.checked,c))},o?i.a.createElement(h.a,{placeholder:n,value:t,onChange:function(e){return s(a,{text:e.target.value,isEditing:!0})},onKeyDown:function(e){return 13===e.keyCode&&s(a,{isEditing:!1})}}):i.a.createElement("span",{className:b()(Object(u.a)({},k.a.editingTextPrevent,!r))},t||n))))},O=function(e){var t=e.children;return i.a.createElement(f.a.Group,{centered:!0,style:{padding:0,margin:0}},t)},j=n(85),w=n(282),_=n(84),x=(n(264),function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],o=function(e){return Object(j.b)(e)},u={text:"",placeholder:"Edit Me",id:n.toString(),isEditing:!1,isChecked:!1,allowEditing:!0,uuid:Object(d.a)()},m=(Array(8).fill({}).map((function(e){return Object(l.a)(Object(l.a)(Object(l.a)({},u),e),{},{uuid:Object(d.a)()})})).map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{id:t.toString()})})),Object(a.useState)([])),g=Object(s.a)(m,2),E=g[0],b=g[1],f=function(e){return b(E.filter((function(t){return t.uuid!==e})))},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b(E.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),t):n})))};return console.log(_.MUTButton),i.a.createElement(p.a,{as:"main",fluid:!0,style:{padding:"15px 0"}},i.a.createElement(j.a,{autoClose:2500,hideProgressBar:!0,closeOnClick:!0}),i.a.createElement(w.a,{stackable:!0,centered:!0,columns:"2",style:{margin:0}},i.a.createElement(w.a.Column,{width:"2",style:{maxWidth:"20vw",marginTop:12.25}},i.a.createElement(_.MUTButton,{border:!0,pointer:!0,onClick:function(){b([].concat(Object(c.a)(E),[u])),r(n+1)}},"Add Bingo Card")),i.a.createElement(w.a.Column,{width:"14",style:{maxWidth:"80vw"}},i.a.createElement(O,null,E.map((function(e){return i.a.createElement(y,Object.assign({key:e.id.toString(),setEdit:C,setNotification:o,remove:f},e))}))))))});o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){e.exports={bingoCardMeta:"styles_bingoCardMeta__1giF6",bingoCardContentSizing:"styles_bingoCardContentSizing__3C54X",checked:"styles_checked__11VvI",editingTextPrevent:"styles_editingTextPrevent__1bbcB",cursorCopy:"styles_cursorCopy__3QFkK"}}},[[137,1,2]]]);
//# sourceMappingURL=main.2132f11a.chunk.js.map