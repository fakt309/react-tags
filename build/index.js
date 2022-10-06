(()=>{"use strict";var e={424:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(81),a=t.n(n),o=t(645),i=t.n(o)()(a());i.push([e.id,".wrap-tags {\r\n  display: block;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  justify-content: flex-start;\r\n  position: relative;\r\n  font-family: monospace, Arial;\r\n}\r\n.wrap-tags > .tags {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  border: 1px solid #eaeaea;\r\n  border-radius: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n.wrap-tags > .tags > .tag {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  margin: 5px;\r\n  border-radius: 100px;\r\n  background-color: #eaeaea;\r\n}\r\n.wrap-tags > .tags > .tag > .tag__text {\r\n  margin: 5px 10px;\r\n  color: #666666;\r\n  font-size: 14px;\r\n}\r\n.wrap-tags > .tags > .tag > .tag__remove {\r\n  margin: 5px 10px;\r\n  margin-left: 0px;\r\n  margin-right: 5px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-position: center;\r\n  background-size: 70%;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n  background-color: #999;\r\n  border-radius: 100px;\r\n  opacity: 0.7;\r\n  transition: opacity ease 0.2s;\r\n}\r\n.wrap-tags > .tags > .tag > .tag__remove:hover {\r\n  opacity: 1;\r\n}\r\n.wrap-tags > .tags > .input {\r\n  padding: 15px 10px;\r\n  min-width: 200px;\r\n  border: none;\r\n  background: unset;\r\n  outline: none;\r\n  align-self: stretch;\r\n  flex: 1;\r\n  font-family: monospace, Arial;\r\n  color: #666666;\r\n  font-size: 14px;\r\n}\r\n.wrap-tags > .list {\r\n  position: absolute;\r\n  top: calc(100% + 10px);\r\n  width: 100%;\r\n  border-radius: 0px;\r\n  background-color: #eaeaea;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  justify-content: flex-start;\r\n  z-index: 1;\r\n  box-shadow: 0px 0px 5px #999999;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  transition: max-height ease 0.2s;\r\n}\r\n.wrap-tags > .list > .option {\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  color: #666666;\r\n  background-color: #dddddd00;\r\n  transition: background-color ease 0.2s;\r\n}\r\n.wrap-tags > .list > .option:hover {\r\n  background-color: #dddddd;\r\n}\r\n.wrap-tags > .list > .option.active {\r\n  background-color: #cccccc;\r\n}\r\n.wrap-tags > .list::-webkit-scrollbar {\r\n  width: 5px;\r\n  border-radius: 100px;\r\n}\r\n.wrap-tags > .list::-webkit-scrollbar-track {\r\n  background: unset;\r\n}\r\n.wrap-tags > .list::-webkit-scrollbar-thumb {\r\n  background: #bbbbbb;\r\n}\r\n.wrap-tags > .list.hide {\r\n  max-height: 0px;\r\n}\r\n",""]);const l=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},i=[],l=0;l<e.length;l++){var c=e[l],s=n.base?c[0]+n.base:c[0],u=o[s]||0,d="".concat(s," ").concat(u);o[s]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var g=a(f,n);n.byIndex=l,r.splice(l,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=t(o[i]);r[l].references--}for(var c=n(e,a),s=0;s<o.length;s++){var u=t(o[s]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}o=c}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var n={};(()=>{t.r(n),t.d(n,{default:()=>I});const e=require("react");var r=t.n(e),a=t(379),o=t.n(a),i=t(795),l=t.n(i),c=t(569),s=t.n(c),u=t(565),d=t.n(u),p=t(216),f=t.n(p),g=t(589),v=t.n(g),m=t(424),y={};function h(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,r)||x(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,r){if(e){if("string"==typeof e)return w(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,r):void 0}}function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}y.styleTagTransform=v(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),o()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const I=function(t){var n,a,o,i,l=b((0,e.useState)(!1),2),c=l[0],s=l[1],u=b((0,e.useState)(null!=t&&t.list?t.list:[]),2),d=u[0],p=u[1],f=b((0,e.useState)(null),2),g=f[0],v=f[1];return r().createElement("div",(a={className:"wrap-tags"},o="className",i="".concat(t.className?t.className+" ":"","wrap-tags"),o in a?Object.defineProperty(a,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[o]=i,a),r().createElement("div",{className:"tags"},null===(n=t.value)||void 0===n?void 0:n.map((function(e,n){return r().createElement("div",{key:"tag".concat(n),className:"tag"},r().createElement("div",{className:"tag__text"},e),r().createElement("div",{className:"tag__remove",style:{backgroundImage:"url(".concat("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGxpbmUgeDE9IjUiIHkxPSI1IiB4Mj0iMjUiIHkyPSIyNSIgc3Ryb2tlLXdpZHRoPSIycHgiIHN0cm9rZT0iI2ZmZmZmZiIgLz4KICA8bGluZSB4MT0iMjUiIHkxPSI1IiB4Mj0iNSIgeTI9IjI1IiBzdHJva2Utd2lkdGg9IjJweCIgc3Ryb2tlPSIjZmZmZmZmIiAvPgo8L3N2Zz4K",")")},onClick:function(e){t.onChange(t.value.filter((function(r){return r!==e.target.parentNode.querySelector(".tag__text").innerHTML})))}}))})),r().createElement("input",{className:"input",type:"text",onKeyDown:function(e){var r=e.target.value,n=!0;if(t.value.forEach((function(e){e===r&&(n=!1)})),13===e.keyCode&&""!==r&&n&&null===g)if(null!=t&&t.onlyFromList){var a=!1;null==t||t.list.forEach((function(e){e===r&&(a=!0)})),a&&(e.target.value="",t.onChange([].concat(h(t.value),[r])),s(!1),v(g=null))}else e.target.value="",t.onChange([].concat(h(t.value),[r])),s(!1),v(g=null);if(13===e.keyCode&&null!==g){var o=e.target.parentNode.parentNode.querySelector(".list").querySelectorAll(".option")[g];null==t||t.value.push(o.innerHTML),e.target.value="",s(!1),v(g=null)}if(8===e.keyCode&&""===r&&t.onChange(t.value.slice(0,-1)),(38===e.keyCode||40===e.keyCode)&&d.length){var i=e.target.parentNode.parentNode.querySelector(".list"),l=i.getBoundingClientRect(),c=i.querySelector(".option").getBoundingClientRect(),u=i.scrollTop;null===g&&(g=-1),38===e.keyCode&&g--,40===e.keyCode&&g++,g<0&&(g=d.length-1,i.scrollTo(0,(d.length-1)*c.height)),g>d.length-1&&(g=0,i.scrollTo(0,0)),v(g),38===e.keyCode&&u>g*c.height&&i.scrollTo(0,g*c.height),40===e.keyCode&&u+l.height<(g+1)*c.height&&i.scrollTo(0,(g+1)*c.height-l.height),e.preventDefault()}},onClick:function(){var e,r=[];null==t||null===(e=t.list)||void 0===e||e.forEach((function(e){var n,a=!0;null==t||null===(n=t.value)||void 0===n||n.forEach((function(r){r===e&&(a=!1)})),a&&r.push(e)})),d=r,p(r),s(!0)},onInput:function(e){var r,n=e.target.value;n.length&&s(!0);var a=[];null==t||null===(r=t.list)||void 0===r||r.forEach((function(e){var r,o=!0;null==t||null===(r=t.value)||void 0===r||r.forEach((function(r){r===e&&(o=!1)}));var i=new RegExp("^.*".concat(n.toLowerCase(),".*$"),"g");o&&i.test(e.toLowerCase())&&a.push(e)})),d=a,p(a)},onBlur:function(){setTimeout((function(){s(!1),v(g=null)}),200)}})),r().createElement("div",{className:c?"list":"list hide"},d.map((function(e,n){return r().createElement("div",{key:"listTag".concat(n),className:n===g?"option active":"option",onClick:function(r){null==t||t.value.push(e),r.target.parentNode.parentNode.querySelector(".tags .input").value="",s(!1),v(g=null)}},e)}))))}})(),module.exports=n})();