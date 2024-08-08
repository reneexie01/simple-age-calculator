(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),a=n(314),c=n.n(a)()(o());c.push([e.id,"body {\n    max-width: 600px;\n    margin: auto;\n    height: 150vh;\n}\n\n.clear-button {\n    text-align: center;\n    padding-top: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\nh2 {\n    font-size: 1.5rem;\n}\n\n.label {\n    display: inline-block;\n    width: 120px;\n}\n\n.person-inputs, .year-inputs, .people-container {\n    padding-left: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.year-to-calculate {\n    padding-left: 1rem;\n}\n\n.inputs-name {\n    margin-bottom: 5px;\n}\n\n.person-submit, .year-submit, .clear-all, .delete {\n    padding: 5px 15px;\n}\n\n.submit-button, .delete-button {\n    text-align: right;\n    padding-right: 1rem;\n}\n\n.people-container, .people-age-output {\n    padding-left: 1rem;\n    padding-bottom: 0.5rem;\n}\n\n.error-year-submit-error, .error-person-submit-error {\n    color: red;\n    font-size: 0.75rem;\n}\n",""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],s=r.base?l[0]+r.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=n(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var l=r(e,o),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;const r=function(){let e=[];return{people:e,clearPeople:()=>{e.length=0},generateUniqueId:()=>"_"+Math.random().toString(36).substr(2,9)}}(),o=function(){let e={};return{newPerson:(t,n)=>(e={id:r.generateUniqueId(),name:t,year:n},e),clearPerson:()=>{e={}},addPerson:t=>{t.push(e)}}}(),a=function(){let e=[];const t=()=>{e=[]},n=()=>{document.querySelector(".age-library").innerHTML=""};return{getYear:function(r,o){return t(),r.forEach((t=>{let n,r,a;n=parseInt(o)-parseInt(t.year),r=t.name,a=((e,t)=>({name:e,age:t}))(r,n),e.push(a)})),(e=>{n(),e.forEach((e=>{const t=document.querySelector(".age-library"),n=document.createElement("div");n.classList.add("people-age-output");const r=document.createElement("div");r.classList.add("name");const o=document.createElement("div");o.innerHTML=`Name: ${e.name}`,r.appendChild(o),n.appendChild(r);const a=document.createElement("div");a.classList.add("age");const c=document.createElement("div");c.innerHTML=`Age: ${e.age}`,a.appendChild(c),n.appendChild(a),t.appendChild(n)}))})(e),e},calculatedAges:e,clearCalculatedAges:t,clearPeopleAgeOutput:n}}();var c=n(72),i=n.n(c),l=n(825),s=n.n(l),u=n(659),d=n.n(u),p=n(56),m=n.n(p),f=n(540),v=n.n(f),y=n(113),g=n.n(y),h=n(208),b={};b.styleTagTransform=g(),b.setAttributes=m(),b.insert=d().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=v(),i()(h.A,b),h.A&&h.A.locals&&h.A.locals;const S=function(){const e=()=>{const e=JSON.parse(localStorage.getItem("people"))||[];r.people=e},t=()=>{s(),r.people.forEach((e=>{const t=document.querySelector(".people-library"),n=document.createElement("div");n.classList.add("people-container");const r=document.createElement("div");r.classList.add("name-birthyear");const o=document.createElement("div");o.innerHTML=`\n            <div class="render-name">Name: ${e.name}</div> \n            <div class="render-birthyear">Birth Year: ${e.year}</div>\n            `,r.appendChild(o),n.appendChild(r);const a=document.createElement("div");a.classList.add("delete-button");const c=document.createElement("button");c.innerHTML="Delete",c.classList.add("delete"),c.setAttribute("unique-id",`${e.id}`),a.appendChild(c),n.appendChild(a),t.appendChild(n)})),l()},n=e=>{const t=document.querySelector(`.error-${e}`);if(t)t.remove();else{const t=document.querySelector(`.${e}`),n=document.createElement("div");n.classList.add(`error-${e}`),n.innerHTML="Missing values detected.",t.appendChild(n)}},c=e=>{const t=document.querySelector(`.error-${e}`);t&&t.remove()},i=()=>{const e=document.querySelector(".name"),t=document.querySelector(".birth-year");e.value="",t.value=""},l=()=>{document.querySelector(".people-library").addEventListener("click",(n=>{if(n.target.classList.contains("delete")){const r=n.target.getAttribute("unique-id");let o=JSON.parse(localStorage.getItem("people"))||[];o=o.filter((e=>e.id!==r)),localStorage.setItem("people",JSON.stringify(o)),e(),t()}}))},s=()=>{document.querySelector(".people-library").innerHTML=""};let u;const d=()=>{document.querySelector(".year-to-calculate").innerHTML="Year to calculate:"},p=()=>{document.querySelector(".year-calculate").value=""},m=()=>{r.clearPeople(),localStorage.clear()};return{personInput:function(){document.querySelector(".person-submit").addEventListener("click",(()=>{const a=document.querySelector(".name").value,l=document.querySelector(".birth-year").value;if(""==a||""==l)n("person-submit-error");else{(e=>{let t=JSON.parse(localStorage.getItem("people"))||[];t.push(e),localStorage.setItem("people",JSON.stringify(t))})(o.newPerson(a,l)),r.clearPeople(),e(),t(),i(),c("person-submit-error")}}))},yearInput:()=>{document.querySelector(".year-submit").addEventListener("click",(()=>{const e=document.querySelector(".year-calculate").value;""==e?n("year-submit-error"):(u=e,(e=>{d(),document.querySelector(".year-to-calculate").innerHTML=`Year to calculate: ${e}`})(u),a.getYear(r.people,u),p(),c("year-submit-error"))}))},clearAll:()=>{document.querySelector(".clear-all").addEventListener("click",(()=>{i(),s(),c("year-submit-error"),c("person-submit-error"),p(),d(),r.clearPeople(),o.clearPerson(),a.clearPeopleAgeOutput(),m()}))},renderExistingPeople:()=>{e(),t()}}}();S.personInput(),S.yearInput(),S.clearAll(),S.renderExistingPeople()})();