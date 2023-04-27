(()=>{var e={28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    background-color: #015958;\n    color: #C7FFED;\n}\n\n#navbar {\n    max-height: 100px;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    align-items: center;\n    background-color: #023535;\n    padding: 1rem;\n}\n\n#name-logo {\n    display: flex;\n    gap: 20px;\n    justify-content: baseline;\n    align-items: center;\n}\n\n#logo-img {\n    max-width: 60px;\n}\n\n#links {\n    display: flex;\n    justify-content: space-evenly;\n    font-size: 1.5rem;\n}\n\n#description {\n    width: 50%;\n    background-color: rgba(216, 255, 219, 0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: baseline;\n    align-items: center;\n    margin: 3rem auto;\n    padding: 2rem 1rem;\n}\n\n#description h1 {\n    padding: 1rem;\n    border-bottom: 1px solid #023535;\n}\n\n#description h2, p {\n    padding: 1rem;\n}\n\n#description p {\n    font-size: larger;\n}\n\n.menu-item {\n    margin: 0 15%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-bottom: 1px solid #023535;\n    padding-bottom: 1rem;\n}\n\n.menu-item:last-child {\n    border-bottom: none;\n}\n\n.menu-img {\n    max-width: 200px;\n}\n\n.selected {\n    color: red;\n}\n\n.contact-window {\n    margin-top: 2rem;\n    width: 80%;\n    border: 1px solid #023535;\n    border-radius: 10px;\n}\n\n.contact-info-body {\n    display: flex;\n    align-items: center;\n    margin-bottom: 2rem;\n}\n\n.contact-info-body-text {\n    width: 60%;\n}\n\n.contact-image {\n    max-width: 200px;\n    border: 3px solid #023535;\n    border-radius: 20px;\n}",""]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},254:e=>{e.exports=[{name:"The Chef",description:"The Chef is a very good cook. He is always on time and always available.",phone:"Phone: +1 (123) 456-7890",email:"Email: thechef@unrealcooks.com",image:"../src/thechef.jpg"},{name:"The Accountant",description:"Our accountant ensures that our finances are in order.",phone:"Phone: +1 (134) 455-7890",email:"Email: theaccountant@unrealcooks.com",image:"../src/theaccountant.jpg"}]},77:e=>{e.exports=[{name:"Charred Spring Onions & Romesco",description:"It is a vegetarian dish appropriate for a dinner party. It takes 20 mins to prepare, and the sauce can be made ahead of time."},{name:"Cheesy Sprout Fondue",description:"Transform your leftover cheese into a versatile starter recipe, served perfect with crusty bread."},{name:"Welsh Rabbit",description:"Melted cheese poured over toast or crackers. The name may have originated among the English as a dig against their neighbors, the Welsh. Rabbit was a much more expensive dish than cheese and toast, but if you were Welsh, that's probably what you made do with."},{name:"Waldorf Salad",description:"A salad featuring apples, celery, grapes, and chopped walnuts over a bed of greens, named after the Waldorf-Astoria Hotel in New York City."}]},50:e=>{e.exports=[{name:"Home",id:"navbar-home"},{name:"Menu",id:"navbar-menu"},{name:"Contact Us",id:"navbar-contact"}]},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(28),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=n(50),v=n.n(f);const b=n.p+"61b0c19146a86906141c1b1e420ffab0.png";var g=n(77),y=n.n(g);const x=n.p+"6507395ce29d44d83ba486b1a956af1e.jpg",C=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","description");const n=document.createElement("h1");n.textContent="The Menu",t.appendChild(n);const r=document.createElement("div");r.setAttribute("id","menu-items"),t.appendChild(r);for(let e of y()){console.log(e);let t=document.createElement("div");t.setAttribute("class","menu-item");let n=document.createElement("h2");n.textContent=e.name;let o=document.createElement("img");o.setAttribute("class","menu-img"),o.src=x;let a=document.createElement("p");a.textContent=e.description,t.appendChild(n),t.appendChild(o),t.appendChild(a),r.appendChild(t)}e.appendChild(t)};var E=n(254),w=n.n(E);(function(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","navbar");const n=document.createElement("div");n.setAttribute("id","name-logo");const r=document.createElement("div");r.setAttribute("id","links");const o=document.createElement("h1");o.textContent="The Unreal Gourmet";const a=document.createElement("img");a.setAttribute("id","logo-img"),a.src=b,n.appendChild(o),n.appendChild(a);for(let e of v()){let t=document.createElement("p");t.textContent=e.name,t.setAttribute("id",e.id),t.setAttribute("class","navbar-link"),r.appendChild(t)}t.appendChild(n),t.appendChild(r),e.appendChild(t)})(),C();const A=document.querySelector("#navbar-home"),T=document.querySelector("#navbar-menu"),S=document.querySelector("#navbar-contact");document.querySelectorAll(".navbar-link").forEach((e=>{e.addEventListener("click",(()=>{!function(){const e=document.getElementById("content"),t=document.getElementById("navbar");for(;e.lastChild!==t;)e.removeChild(e.lastChild)}(),document.querySelectorAll(".selected").forEach((e=>{e.classList.remove("selected")})),e.classList.add("selected")}))})),A.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","description");const n=document.createElement("h1");n.textContent="Explore the wonders of The Unreal Gourmet",t.appendChild(n);const r=document.createElement("h2");r.textContent="Indulge in a visually stunning dining experience at The Unreal Gourmet, where every dish is a work of art.",t.appendChild(r);const o=document.createElement("p");o.textContent="At The Unreal Gourmet, creativity reigns supreme as each dish is meticulously crafted to be both visually stunning and delicious. The restaurant boasts an exquisite taste experience, with a menu featuring a fusion of diverse flavors that challenge traditional culinary standards. With its daring and innovative approach to cuisine, The Unreal Gourmet is sure to leave a lasting impression on your taste buds.",t.appendChild(o),e.appendChild(t)}()})),T.addEventListener("click",(()=>{C()})),S.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","description");const n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);for(let e of w()){const n=document.createElement("div");n.setAttribute("class","contact-window"),t.appendChild(n);const r=document.createElement("h2");r.textContent=e.name,r.setAttribute("class","contact-info-header"),n.appendChild(r);const o=document.createElement("div");o.setAttribute("class","contact-info-body");const a=document.createElement("div");a.setAttribute("class","contact-info-body-text");const i=document.createElement("p");i.textContent=e.description,i.setAttribute("class","contact-info-description");const c=document.createElement("p");c.textContent=e.phone,c.setAttribute("class","contact-info-phone");const s=document.createElement("p");s.textContent=e.email,s.setAttribute("class","contact-info-email"),a.appendChild(i),a.appendChild(c),a.appendChild(s),o.appendChild(a);const d=document.createElement("img");d.setAttribute("class","contact-image"),d.src=e.image,o.appendChild(d),n.appendChild(o)}e.append(t)}()}))})()})();