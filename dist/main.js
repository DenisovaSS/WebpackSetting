!function(){"use strict";var e={385:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},525:function(e,t,n){e.exports=n.p+"img/bone..png"},639:function(e,t,n){e.exports=n.p+"img/favicon..png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){var e=n(385),t=n.n(e),o=new URL(n(639),n.b),r=new URL(n(525),n.b),c=(t()(o),t()(r),n.p+"img/coffee-cup..svg");const i=(e,t)=>e+t,u=document.querySelector(".img"),a=new Image;a.src=c,a.width=200,u&&u.append(a),console.log(i(4,6)),console.log(i(10,6)),console.log("my favoryte"),function(e){const t=document.querySelector("p"),n=document.createElement("div");n.innerText="Hello My qeen",t&&t.append(n)}(),console.log("I am angry!!")}()}();