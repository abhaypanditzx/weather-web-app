if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),l={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-5dcacc88.css",revision:null},{url:"assets/index-f14cc52d.js",revision:null},{url:"index.html",revision:"09a104ef838ff27c7191cad1585c06a2"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"weather-192x192.png",revision:"c3f4ece07bb490980e8ca6ed051334ac"},{url:"weather.png",revision:"3846ba65aa5ac1c3134d62227795e0b1"},{url:"manifest.webmanifest",revision:"baab62430fd15826c179417832a1e321"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
