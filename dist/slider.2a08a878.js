parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xStd":[function(require,module,exports) {
function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){l=!0,c=t},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw c}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r=document.querySelector(".slider"),o=document.querySelectorAll(".slider__item"),i=document.querySelector(".slider__btn-left"),c=document.querySelector(".slider__btn-right"),a=document.querySelectorAll(".dots__item"),l=0,u=null,s=null,f=function(e){var n,r=t(o);try{for(r.s();!(n=r.n()).done;)slide=n.value,slide.classList.remove("active")}catch(i){r.e(i)}finally{r.f()}o[e].classList.add("active")},d=function(e){var n,r=t(a);try{for(r.s();!(n=r.n()).done;)dot=n.value,dot.classList.remove("active")}catch(o){r.e(o)}finally{r.f()}a[e].classList.add("active")},v=function(t){f(t),d(t)},y=function(){l===o.length-1?v(l=0):v(++l)},h=function(){0===l?(l=o.length-1,v(l)):v(--l)};function m(t){var e=t.touches[0];u=e.clientX,s=e.clientY}function b(t){if(!u||!s)return!1;var e=t.touches[0].clientX,n=t.touches[0].clientY;Math.abs(e)>Math.abs(n)&&(e>0?y():h()),n>0?y():h()}a.forEach(function(t,e){t.addEventListener("click",function(){v(l=e)})}),c.addEventListener("click",y),i.addEventListener("click",h),r.addEventListener("touchstart",m,!1),r.addEventListener("touchmove",b,!1),setInterval(y,8e3);
},{}]},{},["xStd"], null)