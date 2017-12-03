"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/fonts/rene-bieder/renebieder-rbno2.1a-black.svg","3e5ac5dc7e7273d11810a8506cb1f710"],["/fonts/rene-bieder/renebieder-rbno2.1a-medium.svg","b65f21fc0a4991a0848c36fa5c941b29"],["/images/android-chrome-192x192.png","a127e2cb67f02860f6ecd0e576a91767"],["/images/android-chrome-512x512.png","963fee82d9a2f4c6924319de525d4db6"],["/images/apple-touch-icon.png","7ada6464926a0ccc70ef8c25d9f6ed44"],["/images/favicon-16x16.png","bd322020af5644d668404de982e029ed"],["/images/favicon-32x32.png","4d35a83ccffaef8633ed09f73bc7d08e"],["/images/favicon.png","55eda78ca557e2792e4a963282f2b8a8"],["/images/iphone.png","54dcbffd2fdeda7fc3488e9d2dfcd6de"],["/images/logo.png","55eda78ca557e2792e4a963282f2b8a8"],["/images/screen-0.png","e4db6f823289ff194fc6652905d5caea"],["/images/screen-1.png","a21aa36946d8da687897fe1a7d1f1ec3"],["/images/screen-2.png","b67b5c30bb49ecc64c8da22e682b1de7"],["/images/screen-3.png","301751e6d78b5efe9c1d2caf9f4a9bf2"],["/images/screen-4.png","28ec2ff26b0e6e7ac29c17b1138999ae"],["/images/screen-5.png","a2b7cd4dba350469ac5e172c5e7d320d"],["/images/screen-6.png","43e80bbabe81b36a48e277f5df17a887"],["/images/screen-7.png","83b7db714a1b2b628cc866060e394637"],["/images/screen-8.png","22c5ce872b760055604746f1c5f20b3d"],["/images/screen-9.png","3104f1d004f306a6303470ca558f8b5e"],["/images/thumbnail.png","bab915fb90524cd397055e36c107766f"],["/index.html","700e85a491ba2164700e73929da9afa7"],["/main.css","b9032af0a1680e5014f221d9e9984ba5"],["/main.js","4ba35e305868abe04d61543930089f7e"],["/vendor.css","16e671d6b27e8e520ea13e83270e6da3"],["/vendor.js","87ecefeb52f47fde00a16a1370b40aef"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,r){var t=new URL(e);return r&&t.pathname.match(r)||(t.search+=(t.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],r=new URL(n,self.location),t=createCacheKey(r,hashParamName,a,!1);return[r.toString(),t]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(a);n||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});