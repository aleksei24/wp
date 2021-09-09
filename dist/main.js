!function(){"use strict";var n,r,e,t,o,i,a,c,u,s,l,d,f,p,m={838:function(n,r,e){var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,300italic,regular,italic,500,500italic,700,700italic);"]),o.push([n.id,"$minWidth: 200px;\r\n$mainFont: Ubuntu;\r\n$bgColour: #fff;\r\n$headlineColour: red;\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-width: $minWidth;\r\n    position: relative;\r\n    color: #151515;\r\n}\r\nbody {\r\n    font-size: 16px;\r\n    background-color: $bgColour;\r\n    font-family: $mainFont;\r\n    font-weight: normal;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    padding: 0;\r\n    border: 0;\r\n    margin: 0;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n    /* outline: 1px solid red; */\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    cursor: pointer;\r\n}\r\na:focus,\r\na:active {\r\n    outline: none;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n    font-family: $mainFont;\r\n}\r\nbutton {\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n.btn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-self: center;\r\n    color: grey;\r\n    background-color: orangered;\r\n}\r\n.wrapper {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    overflow: hidden;\r\n    max-width: 1920px;\r\n    margin: 0 auto;\r\n    background-color: $bgColour;\r\n}\r\n.container {\r\n    max-width: 1140px;\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\r\n}\r\n/* ========================================== */\r\n/* own styles */\r\n#main-headline {\r\n    font-size: 42px;\r\n    color: $headlineColour;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n",""]),r.Z=o},645:function(n){n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),r.push(u))}},r}},379:function(n){var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],s=t.base?u[0]+t.base:u[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var f=e(d),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(r[f].references++,r[f].updater(p)):r.push({identifier:d,updater:o(p,t),references:1}),a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var u=t(n,o),s=0;s<i.length;s++){var l=e(i[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=u}}},569:function(n){var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:function(n){n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:function(n,r,e){n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:function(n){n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:function(n){n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},h={};function g(n){var r=h[n];if(void 0!==r)return r.exports;var e=h[n]={id:n,exports:{}};return m[n](e,e.exports,g),e.exports}g.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return g.d(r,{a:r}),r},g.d=function(n,r){for(var e in r)g.o(r,e)&&!g.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},g.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},n=g(379),r=g.n(n),e=g(795),t=g.n(e),o=g(569),i=g.n(o),a=g(565),c=g.n(a),u=g(216),s=g.n(u),l=g(589),d=g.n(l),f=g(838),(p={}).styleTagTransform=d(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=s(),r()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,console.log("ran from index.js"),console.log("variables are displayed in console"),console.log("Agent 007"),console.log("Behemoth"),document.querySelector("#main-headline").innerText="Welcome"}();