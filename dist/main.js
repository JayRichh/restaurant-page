/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e,t,n={},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,a),o.exports}function o(){const e=document.querySelector("main");let t=e.childNodes;for(;t.length>0;)e.removeChild(t[0])}a.m=n,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".main.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="restaurant-page:",a.l=(n,r,o,d)=>{if(e[n])e[n].push(r);else{var c,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){c=u;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",t+o),c.src=n),e[n]=[r];var m=(t,r)=>{c.onerror=c.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),i&&document.head.appendChild(c)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=o);var d=a.p+a.u(t),c=new Error;a.l(d,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",c.name="ChunkLoadError",c.type=o,c.request=d,r[1](c)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[d,c,i]=n,s=0;if(d.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);i&&i(a)}for(t&&t(n);s<d.length;s++)o=d[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();const d=()=>{!function(){const e=document.createElement("header"),t=document.createElement("main"),n=document.createElement("footer"),r=document.createElement("a");r.setAttribute("href","#"),r.classList.add("home"),r.textContent="Blaze Pizza.";const a=document.createElement("button");a.classList.add("hamburger"),a.classList.add("hamburger--spring"),a.setAttribute("type","button");const o=document.createElement("span");o.classList.add("hamburger-box");const d=document.createElement("span");d.classList.add("hamburger-inner"),o.appendChild(d),a.appendChild(o);const c=document.createElement("div");c.classList.add("nav-overlay");const i=document.createElement("div");i.classList.add("nav-overlay-content");const s=document.createElement("a");s.setAttribute("href","#"),s.textContent="MENU.";const l=document.createElement("a");l.setAttribute("href","#"),l.textContent="LOCATIONS.";const u=document.createElement("a");u.setAttribute("href","#"),u.textContent="ABOUT.";const m=document.createElement("a");m.setAttribute("href","#"),m.textContent="CONTACT.",i.appendChild(s),i.appendChild(l),i.appendChild(u),i.appendChild(m),c.appendChild(i),e.appendChild(r),e.appendChild(a);const p=document.createElement("div");p.classList.add("hero-content");const h=document.createElement("div");h.classList.add("background");const b=document.createElement("div");b.classList.add("main-content-text");const v=document.createElement("h1");v.textContent="Traditional wood fired pizza, made to order.",b.appendChild(v);const C=document.createElement("a");C.setAttribute("href","#"),C.classList.add("main-button"),C.classList.add("order"),C.textContent="MENU.",p.appendChild(h),p.appendChild(b),p.appendChild(C);const f=document.createElement("div");f.classList.add("google-maps"),f.appendChild((()=>{const e=document.createElement("iframe");return e.setAttribute("src","https://www.google.com/maps/embed/v1/view?zoom=17&center=24.8357%2C46.6817&key=AIzaSyBuG8B1ZVjxm3tin2ZYMZFdZ0wONikG6l8"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e.setAttribute("frameborder","0"),e.setAttribute("style","border:0"),e.setAttribute("allowfullscreen",""),e.setAttribute("loading","lazy"),e})());const g=document.createElement("div");g.classList.add("delivery-banner");const E=document.createElement("div");E.classList.add("delivery-banner-text");const A=document.createElement("h1");A.textContent="YOU CAN ORDER DELIVERY OR TAKE AWAY",E.appendChild(A);const y=document.createElement("a");y.setAttribute("href","#"),y.classList.add("main-button"),y.classList.add("order"),y.textContent="Order Now",g.appendChild(E),g.appendChild(y);const L=document.createElement("div");L.classList.add("input-container");const w=document.createElement("div");w.classList.add("input-wrapper");const k=document.createElement("div");k.classList.add("img-wrapper");const x=document.createElement("h1");x.textContent="Subscribe to our newsletter for updates and offers";const O=document.createElement("input");O.setAttribute("type","text"),O.setAttribute("placeholder","Enter your email address"),O.setAttribute("name","email"),O.setAttribute("id","email"),O.setAttribute("required","");const S=document.createElement("button");S.setAttribute("type","submit"),S.setAttribute("class","main-button"),S.textContent="Subscribe";const T=document.createElement("img");T.setAttribute("width","100%"),T.setAttribute("height","100%"),k.appendChild(T),w.appendChild(x),w.appendChild(O),w.appendChild(S),L.appendChild(w),L.appendChild(k),t.appendChild(p),t.appendChild(f),t.appendChild(g),t.appendChild(L);const N=document.createElement("p");N.textContent="Blaze Pizza © 2021",n.appendChild(N),content.appendChild(e),content.appendChild(c),content.appendChild(t),content.appendChild(n)}();const e=document.querySelectorAll(".order"),t=document.querySelector(".home"),n=document.querySelector(".hamburger"),r=document.querySelector(".nav-overlay"),c=document.querySelectorAll(".nav-overlay-content a"),i=()=>{r.classList.toggle("active"),n.classList.toggle("is-active"),r.addEventListener("click",(()=>{r.classList.remove("active"),n.classList.remove("is-active")}))},s=e=>{(e=>{switch(e){case"MENU.":Promise.all([a.e(539),a.e(83)]).then(a.bind(a,83)).then((e=>{o(),e.menuPage()}));break;case"LOCATIONS.":a.e(174).then(a.bind(a,174)).then((e=>{o(),e.locationsPage()}));break;case"ABOUT.":a.e(54).then(a.bind(a,54)).then((e=>{o(),e.aboutPage()}));break;case"CONTACT.":a.e(637).then(a.bind(a,637)).then((e=>{o(),e.contactPage()}))}})(e.target.textContent)};t.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");let t=e.childNodes;for(;t.length>0;)e.removeChild(t[0])}(),d()})),n.addEventListener("click",i),e.forEach((e=>{e.addEventListener("click",s)})),c.forEach((e=>{e.addEventListener("click",i),e.addEventListener("click",s)}))};d()})();