!function(){var e={726:function(){document.querySelectorAll(".menu__tab").forEach((e=>{e.addEventListener("click",(e=>{var t;t=e.target.getAttribute("data-id"),document.querySelectorAll(".menu__tab").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".menu__item").forEach((e=>{e.classList.remove("active")})),document.getElementById(t).classList.add("active"),document.querySelector("div[data-id='".concat(t,"']")).classList.add("active")}))})),document.getElementById("default-open").click()}},t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=r(726);r.n(e)()()}()}();