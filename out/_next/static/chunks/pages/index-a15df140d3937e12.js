(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4793)}])},4793:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(4051),a=n.n(s),r=n(5893),i=(n(9008),n(7294)),c=n(5988),o=n.n(c);function l(){return(0,r.jsxs)("div",{className:"jsx-7ad31802396e81e0",children:[(0,r.jsx)("span",{className:"jsx-7ad31802396e81e0",children:"Bota hen\xfcz giri\u015f yap\u0131lamad\u0131 l\xfctfen sayfay\u0131 yenileyin..."}),(0,r.jsx)(o(),{id:"7ad31802396e81e0",children:"span.jsx-7ad31802396e81e0{text-align:center;font-size:100px;color:white}"})]})}function f(){return(0,r.jsx)("div",{children:"L\xfctfen bekleyin"})}function d(e,t,n,s,a,r,i){try{var c=e[r](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(s,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var r=e.apply(t,n);function i(e){d(r,s,a,i,c,"next",e)}function c(e){d(r,s,a,i,c,"throw",e)}i(void 0)}))}}function x(){var e=(0,i.useState)(),t=e[0],n=e[1],s=(0,i.useState)(!1),c=s[0],l=s[1];function d(){return(d=u(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5555/getInfo",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,n(t.info);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=u(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("http://localhost:5555/changeKufurEngel",{method:"GET"});case 3:e.sent,(s=t).kufurEngel=!s.kufurEngel,n(s),l(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=u(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("http://localhost:5555/changeReklamEngel",{method:"GET"});case 3:e.sent,(s=t).reklamEngel=!s.reklamEngel,n(s),l(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=u(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("http://localhost:5555/changeKanalKoruma",{method:"GET"});case 3:e.sent,(s=t).kanalKoruma=!s.kanalKoruma,n(s),l(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=u(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("http://localhost:5555/changeRolKoruma",{method:"GET"});case 3:e.sent,(s=t).rolKoruma=!s.rolKoruma,n(s),l(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=u(a().mark((function e(){var t,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.querySelector("#slowModeTime").value,n=document.querySelector("#slowModeChannel").value,t&&""!=t){e.next=6;break}alert("Bir s\xfcre girin ! "),e.next=28;break;case 6:if(!isNaN(t)){e.next=10;break}alert("S\xfcreyi say\u0131 olarak girin ! "),e.next=28;break;case 10:if(!(parseInt(t)<1||parseInt(t)>21599)){e.next=14;break}alert("S\xfcre 1 ile 21600 aras\u0131 olmal\u0131 ! "),e.next=28;break;case 14:if(n&&""!=n){e.next=18;break}alert("Bir kanal se\xe7in ! "),e.next=28;break;case 18:return l(!0),e.next=21,fetch("http://localhost:5555/setSlowMode",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({channel:n,time:t})});case 21:return s=e.sent,e.next=24,s.json();case 24:s=e.sent,alert(s.status),s.err&&console.log("Olu\u015fan Hata : "+s.err.message),l(!1);case 28:case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=u(a().mark((function e(){var n,s,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelector("#timeOutUser").value,s=document.querySelector("#timeOutTime").value,n&&""!=n){e.next=6;break}alert("Bir ID girin ! "),e.next=33;break;case 6:if(t.members.map((function(e){return e.userId})).includes(n)){e.next=10;break}alert("Bu ID sunucuda yok ! "),e.next=33;break;case 10:if(s&&""!=s){e.next=14;break}alert("Bir s\xfcre girin ! "),e.next=33;break;case 14:if(!isNaN(s)){e.next=18;break}alert("S\xfcreyi say\u0131 olarak girin ! "),e.next=33;break;case 18:if(!(parseInt(s)<1||parseInt(s)>21599)){e.next=22;break}alert("S\xfcre 1 ile 21600 aras\u0131 olmal\u0131 ! "),e.next=33;break;case 22:return l(!0),s*=1e3,e.next=26,fetch("http://localhost:5555/setTimeOut",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:n,time:s})});case 26:return r=e.sent,e.next=29,r.json();case 29:r=e.sent,alert(r.status),r.err&&console.log("Olu\u015fan Hata : "+r.err.message),l(!1);case 33:case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){d.apply(this,arguments)}(),setTimeout((function(){document.querySelector(".logs").scrollTop=document.querySelector(".logs").scrollHeight}),500)}),[]),(0,i.useEffect)((function(){c||setTimeout((function(){document.querySelector(".logs").scrollTop=document.querySelector(".logs").scrollHeight}),500)}),[c]),(0,r.jsxs)("div",{className:"jsx-de616710c122f80f container",children:[0==c&&(0,r.jsxs)("div",{className:"jsx-de616710c122f80f boxContainer",children:[(0,r.jsxs)("div",{className:"jsx-de616710c122f80f box",children:[(0,r.jsx)("span",{className:"jsx-de616710c122f80f boxText",children:"K\xfcf\xfcr engel "}),(0,r.jsxs)("label",{className:"jsx-de616710c122f80f switch",children:[(0,r.jsx)("input",{type:"checkbox",onChange:function(){!function(){x.apply(this,arguments)}()},checked:null===t||void 0===t?void 0:t.kufurEngel,className:"jsx-de616710c122f80f"}),(0,r.jsx)("span",{className:"jsx-de616710c122f80f slider round"})]})]}),(0,r.jsxs)("div",{className:"jsx-de616710c122f80f box",children:[(0,r.jsx)("span",{className:"jsx-de616710c122f80f boxText",children:"Reklam engel "}),(0,r.jsxs)("label",{className:"jsx-de616710c122f80f switch",children:[(0,r.jsx)("input",{type:"checkbox",onChange:function(){!function(){p.apply(this,arguments)}()},checked:null===t||void 0===t?void 0:t.reklamEngel,className:"jsx-de616710c122f80f"}),(0,r.jsx)("span",{className:"jsx-de616710c122f80f slider round"})]})]}),(0,r.jsxs)("div",{className:"jsx-de616710c122f80f box",children:[(0,r.jsx)("span",{className:"jsx-de616710c122f80f boxText",children:"Kanal Koruma "}),(0,r.jsxs)("label",{className:"jsx-de616710c122f80f switch",children:[(0,r.jsx)("input",{type:"checkbox",onChange:function(){!function(){h.apply(this,arguments)}()},checked:null===t||void 0===t?void 0:t.kanalKoruma,className:"jsx-de616710c122f80f"}),(0,r.jsx)("span",{className:"jsx-de616710c122f80f slider round"})]})]}),(0,r.jsxs)("div",{className:"jsx-de616710c122f80f box",children:[(0,r.jsx)("span",{className:"jsx-de616710c122f80f boxText",children:"Rol Koruma "}),(0,r.jsxs)("label",{className:"jsx-de616710c122f80f switch",children:[(0,r.jsx)("input",{type:"checkbox",onChange:function(){!function(){m.apply(this,arguments)}()},checked:null===t||void 0===t?void 0:t.rolKoruma,className:"jsx-de616710c122f80f"}),(0,r.jsx)("span",{className:"jsx-de616710c122f80f slider round"})]})]}),(0,r.jsxs)("div",{className:"jsx-de616710c122f80f box",children:[(0,r.jsx)("span",{className:"jsx-de616710c122f80f boxText",children:"Yava\u015f Mod Ayarla "}),(0,r.jsx)("select",{id:"slowModeChannel",className:"jsx-de616710c122f80f",children:null===t||void 0===t?void 0:t.channels.map((function(e,t){return(0,r.jsxs)("option",{value:e.id,className:"jsx-de616710c122f80f",children:[" ",e.name," "]},t)}))}),(0,r.jsx)("input",{placeholder:"S\xfcre (Saniye)",id:"slowModeTime",className:"jsx-de616710c122f80f"}),(0,r.jsx)("button",{onClick:function(){!function(){j.apply(this,arguments)}()},className:"jsx-de616710c122f80f",children:"Ayarla"})]}),(0,r.jsxs)("div",{className:"jsx-de616710c122f80f box",children:[(0,r.jsx)("span",{className:"jsx-de616710c122f80f boxText",children:"Zaman a\u015f\u0131m\u0131 "}),(0,r.jsx)("input",{placeholder:"Ki\u015fi ID",id:"timeOutUser",className:"jsx-de616710c122f80f"}),(0,r.jsx)("input",{placeholder:"S\xfcre (Saniye)",id:"timeOutTime",className:"jsx-de616710c122f80f"}),(0,r.jsx)("button",{onClick:function(){!function(){b.apply(this,arguments)}()},className:"jsx-de616710c122f80f",children:"At"})]}),(0,r.jsx)("div",{className:"jsx-de616710c122f80f logs",children:null===t||void 0===t?void 0:t.logs.map((function(e,t){return(0,r.jsxs)("span",{className:"jsx-de616710c122f80f log",children:[e," ",(0,r.jsx)("br",{className:"jsx-de616710c122f80f"})]},t)}))})]}),1==c&&(0,r.jsx)(f,{}),(0,r.jsx)(o(),{id:"de616710c122f80f",children:'.container.jsx-de616710c122f80f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.boxContainer.jsx-de616710c122f80f{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.box.jsx-de616710c122f80f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:20vw;height:auto;min-height:16vh;text-align:center;border:2px dashed white;margin-top:5vh}.boxText.jsx-de616710c122f80f{color:white;font-family:Impact;font-size:150%}.logs.jsx-de616710c122f80f{margin-top:20vh;text-align:center;font-size:150%;width:80vw;height:25vh;background-color:white;overflow:auto}.switch.jsx-de616710c122f80f{position:relative;display:inline-block;width:60px;height:34px}.switch.jsx-de616710c122f80f input.jsx-de616710c122f80f{opacity:0;width:0;height:0}.slider.jsx-de616710c122f80f{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s}.slider.jsx-de616710c122f80f:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s}input.jsx-de616710c122f80f:checked+.slider.jsx-de616710c122f80f{background-color:#2196f3}input.jsx-de616710c122f80f:focus+.slider.jsx-de616710c122f80f{-webkit-box-shadow:0 0 1px#2196f3;-moz-box-shadow:0 0 1px#2196f3;box-shadow:0 0 1px#2196f3}input.jsx-de616710c122f80f:checked+.slider.jsx-de616710c122f80f:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);-webkit-transform:translateX(26px);-moz-transform:translateX(26px);-ms-transform:translateX(26px);-o-transform:translateX(26px);transform:translateX(26px)}.slider.round.jsx-de616710c122f80f{-webkit-border-radius:34px;-moz-border-radius:34px;border-radius:34px}.slider.round.jsx-de616710c122f80f:before{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}'})]})}function p(e,t,n,s,a,r,i){try{var c=e[r](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(s,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var r=e.apply(t,n);function i(e){p(r,s,a,i,c,"next",e)}function c(e){p(r,s,a,i,c,"throw",e)}i(void 0)}))}}function m(){var e=(0,i.useState)("False"),t=e[0],n=e[1];function s(){return(s=h(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5555/isBotLogined",{methot:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,n(t.status);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),(0,r.jsxs)("div",{children:[0==t&&(0,r.jsx)(l,{}),1==t&&(0,r.jsx)(x,{})]})}}},function(e){e.O(0,[12,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);