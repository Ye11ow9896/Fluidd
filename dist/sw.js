if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const c=s=>i(s,o),a={module:{uri:o},exports:l,require:c};e[o]=Promise.all(n.map((s=>a[s]||c(s)))).then((s=>(r(...s),l)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ar.0464ab0a.js",revision:null},{url:"assets/cs.ccd8604a.js",revision:null},{url:"assets/css.0f39058b.js",revision:null},{url:"assets/cssMode.6e764548.js",revision:null},{url:"assets/de.cadce41e.js",revision:null},{url:"assets/es.ca1ec895.js",revision:null},{url:"assets/fr.84ca00d1.js",revision:null},{url:"assets/gcode.tmLanguage.f58138d5.js",revision:null},{url:"assets/hu.af606173.js",revision:null},{url:"assets/index.49e64f62.js",revision:null},{url:"assets/index.fe5e193a.css",revision:null},{url:"assets/it.1443f1ab.js",revision:null},{url:"assets/ja.8f48624e.js",revision:null},{url:"assets/jsonMode.59c7cd66.js",revision:null},{url:"assets/klipper-config.tmLanguage.d6886338.js",revision:null},{url:"assets/ko.fc72b299.js",revision:null},{url:"assets/log.tmLanguage.79dcd44e.js",revision:null},{url:"assets/markdown.0bd269fb.js",revision:null},{url:"assets/nl.647fc3f7.js",revision:null},{url:"assets/parseGcode.worker.7456cd75.js",revision:null},{url:"assets/pt.ec3c2313.js",revision:null},{url:"assets/ru.7111c4a2.js",revision:null},{url:"assets/setupMonaco.e58b0eb9.css",revision:null},{url:"assets/uk.e681c0af.js",revision:null},{url:"assets/vue-echarts-chunk.de657bed.js",revision:null},{url:"assets/zh-CN.f980c51c.js",revision:null},{url:"assets/zh-HK.67c870f9.js",revision:null},{url:"index.html",revision:"887918f410b46b033b3df28403c3d047"},{url:"monacoeditorwork/css.worker.bundle.js",revision:"8b705fec18730e91c415e0a0f8ad3d33"},{url:"monacoeditorwork/editor.worker.bundle.js",revision:"65929aaced5694d5a7445d0f8eac7b88"},{url:"monacoeditorwork/json.worker.bundle.js",revision:"a05282cd55ce5e53524c3db471793c33"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/android-chrome-192x192.png",revision:"6ea1e9fde2682dd8d0d1ea08f6624e9f"},{url:"img/icons/android-chrome-512x512.png",revision:"db3b74c0e8a1fec2025f202d28f612f9"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"b355fe6957e72037f1bc6fb3bad3a78d"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"a351c8d619180fe28d1b9ae02b3d9066"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"ec48f367f52f03862cee7cec3d01ad07"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"bc8f75876a747950735260adc634a81b"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"23e6410e45ff58896d23b4f4ef4514bd"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"27ab6d467f78011d71362fb060a98cf9"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"4af08cd1f1e8ad8b510a8b79847d1b5a"},{url:"img/icons/apple-touch-icon.png",revision:"23e6410e45ff58896d23b4f4ef4514bd"},{url:"img/icons/favicon-16x16.png",revision:"d5ad46f18f3207b4073c1f8e734302d7"},{url:"img/icons/favicon-32x32.png",revision:"3de1cf2d2204e73c6c5a622749f0f2f4"},{url:"img/icons/msapplication-icon-144x144.png",revision:"4cc0223d744bd99a649837825b82c06e"},{url:"img/icons/mstile-150x150.png",revision:"98c08c8393ca7732e4916440e52ae08f"},{url:"img/icons/safari-pinned-tab.svg",revision:"09e24fa9d09e7a4f8d5f7425dab22a4b"},{url:"manifest.webmanifest",revision:"9ca82c0cdaa703ce6b05cb1e81a4a5a9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
