!function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return i(n||t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){(function(r){!function(i,o){"use strict";"function"==typeof r&&r.amd?r("error-stack-parser",["stackframe"],o):"object"==typeof n?e.exports=o(t("stackframe")):i.ErrorStackParser=o(i.StackFrame)}(this,function(t){"use strict";function e(t,e,n){if("function"==typeof Array.prototype.map)return t.map(e,n);for(var r=new Array(t.length),i=0;i<t.length;i++)r[i]=e.call(n,t[i]);return r}function n(t,e,n){if("function"==typeof Array.prototype.filter)return t.filter(e,n);for(var r=[],i=0;i<t.length;i++)e.call(n,t[i])&&r.push(t[i]);return r}var r=/(^|@)\S+\:\d+/,i=/^\s*at .*(\S+\:\d+|\(native\))/m,o=/^(eval@)?(\[native code\])?$/;return{parse:function(t){if(void 0!==t.stacktrace||void 0!==t["opera#sourceloc"])return this.parseOpera(t);if(t.stack&&t.stack.match(i))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(-1===t.indexOf(":"))return[t];var e=t.replace(/[\(\)\s]/g,"").split(":"),n=e.pop(),r=e[e.length-1];if(!isNaN(parseFloat(r))&&isFinite(r)){var i=e.pop();return[e.join(":"),i,n]}return[e.join(":"),n,void 0]},parseV8OrIE:function(r){return e(n(r.stack.split("\n"),function(t){return!!t.match(i)},this),function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var n=e.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),r=this.extractLocation(n.pop()),i=n.join(" ")||void 0,o=["eval","<anonymous>"].indexOf(r[0])>-1?void 0:r[0];return new t(i,void 0,o,r[1],r[2],e)},this)},parseFFOrSafari:function(r){return e(n(r.stack.split("\n"),function(t){return!t.match(o)},this),function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===e.indexOf("@")&&-1===e.indexOf(":"))return new t(e);var n=e.split("@"),r=this.extractLocation(n.pop()),i=n.join("@")||void 0;return new t(i,void 0,r[0],r[1],r[2],e)},this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf("\n")>-1&&t.message.split("\n").length>t.stacktrace.split("\n").length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=e.message.split("\n"),i=[],o=2,a=r.length;o<a;o+=2){var s=n.exec(r[o]);s&&i.push(new t(void 0,void 0,s[2],s[1],void 0,r[o]))}return i},parseOpera10:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=e.stacktrace.split("\n"),i=[],o=0,a=r.length;o<a;o+=2){var s=n.exec(r[o]);s&&i.push(new t(s[3]||void 0,void 0,s[2],s[1],void 0,r[o]))}return i},parseOpera11:function(i){return e(n(i.stack.split("\n"),function(t){return!!t.match(r)&&!t.match(/^Error created at/)},this),function(e){var n,r=e.split("@"),i=this.extractLocation(r.pop()),o=r.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;o.match(/\(([^\)]*)\)/)&&(n=o.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===n||"[arguments not available]"===n?void 0:n.split(",");return new t(a,s,i[0],i[1],i[2],e)},this)}}})}).call(this,void 0)},{stackframe:7}],2:[function(t,e,n){(function(n,r,i){(function(){"use strict";function o(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return"function"==typeof t}function s(t){return"object"==typeof t&&null!==t}function c(t){$=t}function u(t){G=t}function l(){return function(){V(p)}}function f(){return function(){setTimeout(p,1)}}function p(){for(var t=0;t<D;t+=2){(0,Q[t])(Q[t+1]),Q[t]=void 0,Q[t+1]=void 0}D=0}function h(){}function g(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(t){return nt.error=t,nt}}function m(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function y(t,e,n){G(function(t){var r=!1,i=m(n,e,function(n){r||(r=!0,e!==n?_(t,n):S(t,n))},function(e){r||(r=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,O(t,i))},t)}function b(t,e){e._state===tt?S(t,e._result):e._state===et?O(t,e._result):E(e,void 0,function(e){_(t,e)},function(e){O(t,e)})}function w(t,e){if(e.constructor===t.constructor)b(t,e);else{var n=v(e);n===nt?O(t,nt.error):void 0===n?S(t,e):a(n)?y(t,e,n):S(t,e)}}function _(t,e){t===e?O(t,g()):o(e)?w(t,e):S(t,e)}function x(t){t._onerror&&t._onerror(t._result),N(t)}function S(t,e){t._state===Z&&(t._result=e,t._state=tt,0!==t._subscribers.length&&G(N,t))}function O(t,e){t._state===Z&&(t._state=et,t._result=e,G(x,t))}function E(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+tt]=n,i[o+et]=r,0===o&&t._state&&G(N,t)}function N(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,i,o=t._result,a=0;a<e.length;a+=3)r=e[a],i=e[a+n],r?F(n,r,i,o):i(o);t._subscribers.length=0}}function k(){this.error=null}function T(t,e){try{return t(e)}catch(t){return rt.error=t,rt}}function F(t,e,n,r){var i,o,s,c,u=a(n);if(u){if(i=T(n,r),i===rt?(c=!0,o=i.error,i=null):s=!0,e===i)return void O(e,d())}else i=r,s=!0;e._state!==Z||(u&&s?_(e,i):c?O(e,o):t===tt?S(e,i):t===et&&O(e,i))}function C(t,e){try{e(function(e){_(t,e)},function(e){O(t,e)})}catch(e){O(t,e)}}function A(t,e){var n=this;n._instanceConstructor=t,n.promise=new t(h),n._validateInput(e)?(n._input=e,n.length=e.length,n._remaining=e.length,n._init(),0===n.length?S(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&S(n.promise,n._result))):O(n.promise,n._validationError())}function L(t){return new it(this,t).promise}function j(t){function e(t){_(i,t)}function n(t){O(i,t)}var r=this,i=new r(h);if(!z(t))return O(i,new TypeError("You must pass an array to race.")),i;for(var o=t.length,a=0;i._state===Z&&a<o;a++)E(r.resolve(t[a]),void 0,e,n);return i}function R(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(h);return _(n,t),n}function I(t){var e=this,n=new e(h);return O(n,t),n}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function P(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this._id=ut++,this._state=void 0,this._result=void 0,this._subscribers=[],h!==t&&(a(t)||M(),this instanceof U||P(),C(this,t))}function B(){var t;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;e&&"[object Promise]"===Object.prototype.toString.call(e.resolve())&&!e.cast||(t.Promise=lt)}var H;H=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var V,$,q,z=H,D=0,G=function(t,e){Q[D]=t,Q[D+1]=e,2===(D+=2)&&($?$(p):q())},W="undefined"!=typeof window?window:void 0,J=W||{},Y=J.MutationObserver||J.WebKitMutationObserver,K=void 0!==n&&"[object process]"==={}.toString.call(n),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3);q=K?function(){return function(){n.nextTick(p)}}():Y?function(){var t=0,e=new Y(p),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():X?function(){var t=new MessageChannel;return t.port1.onmessage=p,function(){t.port2.postMessage(0)}}():void 0===W&&"function"==typeof t?function(){try{var e=t,n=e("vertx");return V=n.runOnLoop||n.runOnContext,l()}catch(t){return f()}}():f();var Z=void 0,tt=1,et=2,nt=new k,rt=new k;A.prototype._validateInput=function(t){return z(t)},A.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},A.prototype._init=function(){this._result=new Array(this.length)};var it=A;A.prototype._enumerate=function(){for(var t=this,e=t.length,n=t.promise,r=t._input,i=0;n._state===Z&&i<e;i++)t._eachEntry(r[i],i)},A.prototype._eachEntry=function(t,e){var n=this,r=n._instanceConstructor;s(t)?t.constructor===r&&t._state!==Z?(t._onerror=null,n._settledAt(t._state,e,t._result)):n._willSettleAt(r.resolve(t),e):(n._remaining--,n._result[e]=t)},A.prototype._settledAt=function(t,e,n){var r=this,i=r.promise;i._state===Z&&(r._remaining--,t===et?O(i,n):r._result[e]=n),0===r._remaining&&S(i,r._result)},A.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(tt,e,t)},function(t){n._settledAt(et,e,t)})};var ot=L,at=j,st=R,ct=I,ut=0,lt=U;U.all=ot,U.race=at,U.resolve=st,U.reject=ct,U._setScheduler=c,U._setAsap=u,U._asap=G,U.prototype={constructor:U,then:function(t,e){var n=this,r=n._state;if(r===tt&&!t||r===et&&!e)return this;var i=new this.constructor(h),o=n._result;if(r){var a=arguments[r-1];G(function(){F(r,i,a,o)})}else E(n,i,t,e);return i},catch:function(t){return this.then(null,t)}};var ft=B,pt={Promise:lt,polyfill:ft};"function"==typeof i&&i.amd?i(function(){return pt}):void 0!==e&&e.exports?e.exports=pt:void 0!==this&&(this.ES6Promise=pt),ft()}).call(this)}).call(this,void 0,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},void 0)},{}],3:[function(t,e,n){(function(n){!function(r,i){"use strict";"object"==typeof e&&e.exports&&"function"==typeof t?e.exports=i():"function"==typeof n&&"object"==typeof n.amd?n(i):r.log=i()}(this,function(){"use strict";function t(t){return typeof console!==s&&(void 0!==console[t]?e(console,t):void 0!==console.log?e(console,"log"):a)}function e(t,e){var n=t[e];if("function"==typeof n.bind)return n.bind(t);try{return Function.prototype.bind.call(n,t)}catch(e){return function(){return Function.prototype.apply.apply(n,[t,arguments])}}}function n(t,e,n){return function(){typeof console!==s&&(r.call(this,e,n),this[t].apply(this,arguments))}}function r(t,e){for(var n=0;n<c.length;n++){var r=c[n];this[r]=n<t?a:this.methodFactory(r,t,e)}}function i(e,r,i){return t(e)||n.apply(this,arguments)}function o(t,e,n){function o(t){var e=(c[t]||"silent").toUpperCase();try{return void(window.localStorage[f]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(f)+"="+e+";"}catch(t){}}function a(){var t;try{t=window.localStorage[f]}catch(t){}if(typeof t===s)try{var e=window.document.cookie,n=e.indexOf(encodeURIComponent(f)+"=");n&&(t=/^([^;]+)/.exec(e.slice(n))[1])}catch(t){}return void 0===l.levels[t]&&(t=void 0),t}var u,l=this,f="loglevel";t&&(f+=":"+t),l.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},l.methodFactory=n||i,l.getLevel=function(){return u},l.setLevel=function(e,n){if("string"==typeof e&&void 0!==l.levels[e.toUpperCase()]&&(e=l.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=l.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(u=e,!1!==n&&o(e),r.call(l,e,t),typeof console===s&&e<l.levels.SILENT)return"No console available for logging"},l.setDefaultLevel=function(t){a()||l.setLevel(t,!1)},l.enableAll=function(t){l.setLevel(l.levels.TRACE,t)},l.disableAll=function(t){l.setLevel(l.levels.SILENT,t)};var p=a();null==p&&(p=null==e?"WARN":e),l.setLevel(p,!1)}var a=function(){},s="undefined",c=["trace","debug","info","warn","error"],u=new o,l={};u.getLogger=function(t){if("string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=l[t];return e||(e=l[t]=new o(t,u.getLevel(),u.methodFactory)),e};var f=typeof window!==s?window.log:void 0;return u.noConflict=function(){return typeof window!==s&&window.log===u&&(window.log=f),u},u})}).call(this,void 0)},{}],4:[function(t,e,n){e.exports=t("./lib/simple_lru.js")},{"./lib/simple_lru.js":5}],5:[function(t,e,n){"use strict";function r(t,e,n,r){this.before=t,this.next=e,this.key=n,this.value=r}function i(t){t||(t={}),this.maxSize=t.maxSize,this.reset()}r.prototype.setKey=function(t){this.key=t},r.prototype.setValue=function(t){this.value=t},i.prototype.reset=function(){this.size=0,this.cache={},this.tail=void 0,this.head=void 0},i.prototype.get=function(t,e){var n=this.cache[t];if(e=void 0==e||null==e||e,n&&e)return this.hit(n),n.value},i.prototype.set=function(t,e,n){var i=this.cache[t];if(n=void 0==n||null==n||n,i)i.value=e,n&&this.hit(i);else{var o;if(this.size>=this.maxSize){var a=this.tail.key;this.detach(this.tail),o=this.cache[a],delete this.cache[a],o.next=void 0,o.before=void 0,o.setKey(t),o.setValue(e)}o=o||new r(void 0,void 0,t,e),this.cache[t]=o,this.attach(o)}},i.prototype.del=function(t){var e=this.cache[t];e&&(this.detach(e),delete this.cache[t])},i.prototype.hit=function(t){this.detach(t),this.attach(t)},i.prototype.attach=function(t){t&&(t.before=void 0,t.next=this.head,this.head=t,t.next?t.next.before=t:this.tail=t,this.size++)},i.prototype.detach=function(t){if(t){var e=t.before,n=t.next;e?e.next=n:this.head=n,n?n.before=e:this.tail=e,this.size--}},i.prototype.forEach=function(t){var e=this;Object.keys(this.cache).forEach(function(n){var r=e.cache[n];t(r.value,n)})},e.exports=i},{}],6:[function(t,e,n){(function(r){!function(i,o){"use strict";"function"==typeof r&&r.amd?r("stack-generator",["stackframe"],o):"object"==typeof n?e.exports=o(t("stackframe")):i.StackGenerator=o(i.StackFrame)}(this,function(t){return{backtrace:function(e){var n=[],r=10;"object"==typeof e&&"number"==typeof e.maxStackSize&&(r=e.maxStackSize);for(var i=arguments.callee;i&&n.length<r;){for(var o=new Array(i.arguments.length),a=0;a<o.length;++a)o[a]=i.arguments[a];/function(?:\s+([\w$]+))+\s*\(/.test(i.toString())?n.push(new t(RegExp.$1||void 0,o)):n.push(new t(void 0,o));try{i=i.caller}catch(t){break}}return n}}})}).call(this,void 0)},{stackframe:7}],7:[function(t,e,n){(function(t){!function(r,i){"use strict";"function"==typeof t&&t.amd?t("stackframe",[],i):"object"==typeof n?e.exports=i():r.StackFrame=i()}(this,function(){"use strict";function t(t){return!isNaN(parseFloat(t))&&isFinite(t)}function e(t,e,n,r,i,o){void 0!==t&&this.setFunctionName(t),void 0!==e&&this.setArgs(e),void 0!==n&&this.setFileName(n),void 0!==r&&this.setLineNumber(r),void 0!==i&&this.setColumnNumber(i),void 0!==o&&this.setSource(o)}return e.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(t){this.functionName=String(t)},getArgs:function(){return this.args},setArgs:function(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new TypeError("Args must be an Array");this.args=t},getFileName:function(){return this.fileName},setFileName:function(t){this.fileName=String(t)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(e){if(!t(e))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(e)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(e){if(!t(e))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(e)},getSource:function(){return this.source},setSource:function(t){this.source=String(t)},toString:function(){return(this.getFunctionName()||"{anonymous}")+"("+(this.getArgs()||[]).join(",")+")"+(this.getFileName()?"@"+this.getFileName():"")+(t(this.getLineNumber())?":"+this.getLineNumber():"")+(t(this.getColumnNumber())?":"+this.getColumnNumber():"")}},e})}).call(this,void 0)},{}],8:[function(t,e,n){e.exports={createValidFrames:function(t){var e=[];return Array.isArray(t)&&(e=t.filter(function(t){return void 0!==t.filename&&void 0!==t.lineno})),e}}},{}],9:[function(t,e,n){function r(t,e,n){this._logger=e,this._transport=t,this._config=n}function i(t){var e=o(t,c);return Object.keys(e).map(function(t){var n=e[t][0],r=n._start;n.transaction?r-=n.transaction._start:r=0;var i={},o=u.createValidFrames(n.frames);return o.length>0&&(i._frames=o),{transaction:n.transaction.name,signature:n.signature,kind:n.type,timestamp:n.transaction._startStamp.toISOString(),parents:n.ancestors(),extra:i,_group:t}}).sort(function(t,e){return t.start_time-e.start_time})}function o(t,e){var n={};return t.forEach(function(t){var r=e(t);r in n?n[r].push(t):n[r]=[t],t._traceGroup=r}),n}function a(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes())}function s(t){return[a(t._startStamp).getTime(),t.name,t.result,t.type].join("-")}function c(t){var e=t.ancestors().map(function(t){return t.signature}).join(",");return[a(t.transaction._startStamp).getTime(),t.transaction.name,e,t.signature,t.type].join("-")}var u=t("./backend_utils");e.exports=r,r.prototype.sendError=function(t){this._config.isValid()?(t.stacktrace.frames=u.createValidFrames(t.stacktrace.frames),this._transport.sendError(t)):this._logger.debug("Config is not valid")},r.prototype.groupSmallContinuouslySimilarTraces=function(t,e){var n=t.duration(),r=[],i=1;return t.traces.forEach(function(o,a){if(0===r.length)r.push(o);else{var s=r[r.length-1],c=s.type===o.type&&s.signature===o.signature&&o.duration()/n<e&&(o._start-s._end)/n<e,u=t.traces.length===a+1;c&&(i++,s._end=o._end,s.calcDiff()),i>1&&(!c||u)&&(s.signature=i+"x "+s.signature,i=1),c||r.push(o)}}),r},r.prototype.checkBrowserResponsiveness=function(t,e,n){var r=t.browserResponsivenessCounter;if(void 0===e||void 0===r)return!0;var i=t._rootTrace.duration();return r+n>=Math.floor(i/e)},r.prototype.sendTransactions=function(t){var e=this;if(this._config.isValid()){t.forEach(function(t){if(t.traces.sort(function(t,e){return t._start-e._start}),e._config.get("performance.groupSimilarTraces")){var n=e._config.get("performance.similarTraceThreshold");t.traces=e.groupSmallContinuouslySimilarTraces(t,n)}});var n=t.filter(function(t){if(e._config.get("performance.checkBrowserResponsiveness")){var n=e._config.get("performance.browserResponsivenessInterval"),r=e._config.get("performance.browserResponsivenessBuffer"),i=t._rootTrace.duration();if(!e.checkBrowserResponsiveness(t,n,r))return e._logger.debug("Transaction was discarded! browser was not responsive enough during the transaction."," duration:",i," browserResponsivenessCounter:",t.browserResponsivenessCounter,"interval:",n),!1}return!0});if(n.length>0){var r=this._formatTransactions(n);return this._transport.sendTransaction(r)}}else this._logger.debug("Config is not valid")},r.prototype._formatTransactions=function(t){var e=this.groupTransactions(t),n=[].concat.apply([],t.map(function(t){return t.traces})),r=i(n),o=this.getRawGroupedTracesTimings(n,r);return r.forEach(function(t){delete t._group,"string"==typeof t.signature&&(t.signature=t.signature.substring(0,511))}),{transactions:e,traces:{groups:r,raw:o}}},r.prototype.groupTransactions=function(t){var e=o(t,s);return Object.keys(e).map(function(t){var n=e[t][0],r=e[t].map(function(t){return t.duration()});return{transaction:n.name,result:n.result,kind:n.type,timestamp:a(n._startStamp).toISOString(),durations:r}})},r.prototype.getRawGroupedTracesTimings=function(t,e){var n=function(t,e){var n=0,r=c(e);return t.forEach(function(t,e){t._group===r&&(n=e)}),n},r=this,i=o(t,function(t){return t.transaction.name+"|"+t.transaction._start});return Object.keys(i).map(function(t){var o=i[t],a=o[0].transaction,s=[a.duration()];return o.forEach(function(t){var i=n(e,t),o=t._start-a._start;o>a.duration()?r._logger.debug("%c -- opbeat.instrumentation.getRawGroupedTracesTimings.error.relativeTraceStartLargerThanTransactionDuration","color: #ff0000",o,a._start,a.duration(),{trace:t,transaction:a}):o<0?r._logger.debug("%c -- opbeat.instrumentation.getRawGroupedTracesTimings.error.negativeRelativeTraceStart!","color: #ff0000",o,t._start,a._start,t):t.duration()>a.duration()?r._logger.debug("%c -- opbeat.instrumentation.getRawGroupedTracesTimings.error.traceDurationLargerThanTranscationDuration","color: #ff0000",t.duration(),a.duration(),{trace:t,transaction:a}):s.push([i,o,t.duration()])}),s})}},{"./backend_utils":8}],10:[function(t,e,n){function r(){this.services={}}var i=t("../backend/opbeat_backend"),o=t("loglevel"),a=t("../lib/config"),s=t("../lib/utils"),c=t("../lib/transport"),u=t("../exceptions/exceptionHandler");r.prototype.getOpbeatBackend=function(){if(s.isUndefined(this.services.OpbeatBackend)){var t=this.getLogger(),e=this.getConfigService(),n=this.getTransport();this.services.OpbeatBackend=new i(n,t,e)}return this.services.OpbeatBackend},r.prototype.getTransport=function(){return s.isUndefined(this.services.Transport)&&(this.services.Transport=c),this.services.Transport},r.prototype.setLogLevel=function(t,e){!0===e.get("debug")&&"trace"!==e.config.logLevel?t.setLevel("debug",!1):t.setLevel(e.get("logLevel"),!1)},r.prototype.getLogger=function(){if(s.isUndefined(this.services.Logger)){var t=this.getConfigService(),e=this;e.setLogLevel(o,t),t.subscribeToChange(function(n){e.setLogLevel(o,t)}),this.services.Logger=o}return this.services.Logger},r.prototype.getConfigService=function(){return s.isUndefined(this.services.ConfigService)&&(a.init(),this.services.ConfigService=a),this.services.ConfigService},r.prototype.getExceptionHandler=function(){if(s.isUndefined(this.services.ExceptionHandler)){var t=this.getLogger(),e=this.getConfigService(),n=new u(this.getOpbeatBackend(),e,t);this.services.ExceptionHandler=n}return this.services.ExceptionHandler},e.exports=r},{"../backend/opbeat_backend":9,"../exceptions/exceptionHandler":13,"../lib/config":17,"../lib/transport":20,"../lib/utils":21,loglevel:3}],11:[function(t,e,n){function r(){this.subscriptions=[]}r.prototype.subscribe=function(t){var e=this;return this.subscriptions.push(t),function(){var n=e.subscriptions.indexOf(t);n>-1&&e.subscriptions.splice(n,1)}},r.prototype.applyAll=function(t,e){this.subscriptions.forEach(function(n){try{n.apply(t,e)}catch(t){console.log(t,t.stack)}},this)},e.exports=r},{}],12:[function(t,e,n){var r=t("es6-promise").Promise,i=t("../lib/utils"),o=t("../lib/fileFetcher");e.exports={_findSourceMappingURL:function(t){var e=/\/\/[#@] ?sourceMappingURL=([^\s'"]+)[\s]*$/.exec(t);return e&&e[1]?e[1]:null},getFileSourceMapUrl:function(t){var e,n=this;return t?(e=t.split("/").length>1?t.split("/").slice(0,-1).join("/")+"/":"/",new r(function(r,i){o.getFile(t).then(function(t){var o=n._findSourceMappingURL(t);o?(o=e+o,r(o)):i("no sourceMapUrl")},i)})):r.reject("no fileUrl")},getExceptionContexts:function(t,e){return t&&e?new r(function(n,r){o.getFile(t).then(function(t){e-=1;var o=t.split("\n"),a={preContext:[],contextLine:null,postContext:[]};if(o.length){if(!(t.indexOf("<html")>-1)&&this.isSourceMinified(t))return r();for(var s=Math.max(0,e-5-1),c=Math.min(o.length,e-1),u=s;u<=c;++u)i.isUndefined(o[u])||a.preContext.push(o[u]);a.contextLine=o[e];for(var l=Math.min(o.length,e+1),f=Math.min(o.length,e+5),p=l;p<=f;++p)i.isUndefined(o[p])||a.postContext.push(o[p])}a.contextLine.length>1e3&&r("aborting generating contexts, as line is over 1000 chars"),a.preContext.forEach(function(t){t.length>1e3&&r("aborting generating contexts, as preContext line is over 1000 chars")}),a.postContext.forEach(function(t){t.length>1e3&&r("aborting generating contexts, as postContext line is over 1000 chars")}),n(a)}.bind(this),r)}.bind(this)):r.reject("no line or url")},isSourceMinified:function(t){var e=0,n=0,r=0,i=0,o=!1;if(!t)return!1;for(t=t.replace(/\/\*[\S\s]*?\*\/|\/\/(.+|\n)/g,"");r++<50&&-1!==(e=t.indexOf("\n",n));){if(/^\s+/.test(t.slice(n,e))&&i++,e-n>250){o=!0;break}n=e+1}return i/r*100<5||o}}},{"../lib/fileFetcher":18,"../lib/utils":21,"es6-promise":2}],13:[function(t,e,n){var r=t("es6-promise").Promise,i=t("./stacktrace"),o=t("./frames"),a=function(t,e,n){this._opbeatBackend=t,this._config=e,this._logger=n};a.prototype.install=function(){window.onerror=function(t,e,n,r,i){this._processError(i,t,e,n,r)}.bind(this)},a.prototype.uninstall=function(){window.onerror=null},a.prototype.processError=function(t){return this._processError(t)},a.prototype._processError=function(t,e,n,a,s){if("Script error."!==e||n){var c={message:t?t.message:e,type:t?t.name:null,fileurl:n||null,lineno:a||null,colno:s||null};c.type||c.message.indexOf(":")>-1&&(c.type=c.message.split(":")[0]);var u;u=t?i.fromError(t):new r(function(t,e){t([{fileName:n,lineNumber:a,columnNumber:s}])});var l=this;return u.then(function(t){return c.stack=t||[],o.stackInfoToOpbeatException(c).then(function(t){var e=o.processOpbeatException(t,l._config.get("context.user"),l._config.get("context.extra"));l._opbeatBackend.sendError(e)})}).catch(function(t){l._logger.debug(t)})}},e.exports=a},{"./frames":14,"./stacktrace":15,"es6-promise":2}],14:[function(t,e,n){var r=t("es6-promise").Promise,i=t("../lib/logger"),o=t("../lib/config"),a=t("../lib/utils"),s=t("./context"),c=t("./stacktrace"),u=function(t){for(var e=r.resolve(),n=[],i=0;i<t.length;++i)n.push(e=e.then(t[i]));return r.all(n)};e.exports={getFramesForCurrent:function(){return c.get().then(function(t){var e=t.map(function(t){return this.buildOpbeatFrame.bind(this,t)}.bind(this));return u(e).then(function(t){return t})}.bind(this))},buildOpbeatFrame:function(t){return new r(function(e,n){if(!t.fileName&&!t.lineNumber)return e({});if(!t.columnNumber&&!t.lineNumber)return e({});var r=this.cleanFilePath(t.fileName),i=this.filePathToFileName(r);this.isFileInline(r)&&(i="(inline script)");var o={filename:i,lineno:t.lineNumber,colno:t.columnNumber,function:t.functionName||"<anonymous>",abs_path:t.fileName,in_app:this.isFileInApp(r)};s.getFileSourceMapUrl(r).then(function(t){o.sourcemap_url=t,e(o)},function(){var n=this.cleanFilePath(t.fileName);s.getExceptionContexts(n,t.lineNumber).then(function(t){o.pre_context=t.preContext,o.context_line=t.contextLine,o.post_context=t.postContext,e(o)}).catch(function(){e(o)})}.bind(this))}.bind(this))},stackInfoToOpbeatException:function(t){return new r(function(e,n){if(t.stack&&t.stack.length){var r=t.stack.map(function(t){return this.buildOpbeatFrame.bind(this,t)}.bind(this));u(r).then(function(n){t.frames=n,t.stack=null,e(t)})}else e(t)}.bind(this))},processOpbeatException:function(t,e,n){var r,o=t.type,s=String(t.message)||"Script error",c=this.cleanFilePath(t.fileurl),u=this.filePathToFileName(c),l=t.frames||[];l&&l.length?l.reverse():u&&l.push({filename:u,lineno:t.lineno});var f={frames:l};if(!u&&l.length){var p=l[l.length-1];u=p.filename?p.filename:"(inline script)"}r=this.isFileInline(c)?"(inline script)":u;var h={message:o+": "+s,culprit:r,exception:{type:o,value:s},http:{url:window.location.href},stacktrace:f,user:e,level:null,logger:null,machine:null};return h.extra=this.getBrowserSpecificMetadata(),n&&(h.extra=a.mergeObject(h.extra,n)),i.log("opbeat.exceptions.processOpbeatException",h),h},cleanFilePath:function(t){return t||(t=""),"<anonymous>"===t&&(t=""),t},filePathToFileName:function(t){var e=window.location.origin||window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");return t.indexOf(e)>-1&&(t=t.replace(e+"/","")),t},isFileInline:function(t){return!!t&&0===window.location.href.indexOf(t)},isFileInApp:function(t){var e=o.get("libraryPathPattern");return!RegExp(e).test(t)},getBrowserSpecificMetadata:function(){var t=a.getViewPortInfo();return{environment:{utcOffset:(new Date).getTimezoneOffset()/-60,browserWidth:t.width,browserHeight:t.height,screenWidth:window.screen.width,screenHeight:window.screen.height,language:navigator.language,userAgent:navigator.userAgent,platform:navigator.platform},page:{referer:document.referrer,host:document.domain,location:window.location.href}}}}},{"../lib/config":17,"../lib/logger":19,"../lib/utils":21,"./context":12,"./stacktrace":15,"es6-promise":2}],15:[function(t,e,n){function r(t){return t.stack||t["opera#sourceloc"]}function i(t){return t.map(function(t){return t.functionName&&(t.functionName=o(t.functionName)),t})}function o(t){var e=t.split("/");return t=e.length>1?["Object",e[e.length-1]].join("."):e[0],t=t.replace(/.<$/gi,".<anonymous>"),t=t.replace(/^Anonymous function$/,"<anonymous>"),e=t.split("."),t=e.length>1?e[e.length-1]:e[0]}var a=t("error-stack-parser"),s=t("stack-generator"),c=t("es6-promise").Promise,u=t("../lib/utils"),l={filter:function(t){return-1===(t.functionName||"").indexOf("StackTrace$$")&&-1===(t.functionName||"").indexOf("ErrorStackParser$$")&&-1===(t.functionName||"").indexOf("StackGenerator$$")&&-1===(t.functionName||"").indexOf("opbeatFunctionWrapper")&&-1===(t.fileName||"").indexOf("opbeat-angular.js")&&-1===(t.fileName||"").indexOf("opbeat-angular.min.js")&&-1===(t.fileName||"").indexOf("opbeat.js")&&-1===(t.fileName||"").indexOf("opbeat.min.js")}};e.exports={get:function(t){try{throw new Error}catch(e){return r(e)?this.fromError(e,t):this.generateArtificially(t)}},generateArtificially:function(t){t=u.mergeObject(l,t);var e=s.backtrace(t);return"function"==typeof t.filter&&(e=e.filter(t.filter)),e=i(e),c.resolve(e)},fromError:function(t,e){return e=u.mergeObject(l,e),new c(function(n){var r=a.parse(t);"function"==typeof e.filter&&(r=r.filter(e.filter)),r=i(r),n(c.all(r.map(function(t){return new c(function(e){e(t)})})))})}}},{"../lib/utils":21,"error-stack-parser":1,"es6-promise":2,"stack-generator":6}],16:[function(t,e,n){function r(t,e){if(this.q=[],this.opbeat=t,this.execute=i.functionBind(this.execute,this),this.push=i.functionBind(this.push,this),e)for(var n=0;n<e.length;n++){var r=e[n];this.push.apply(this,r)}}var i=t("./utils");r.prototype.execute=function(t,e){return this.opbeat[t].apply(this.opbeat,e)},r.prototype.push=function(){var t=Array.prototype.slice.call(arguments),e=t.slice(0,1)[0],n=t.slice(1);this.execute(e,n)},e.exports=r},{"./utils":21}],17:[function(t,e,n){function r(){this.config={},this.defaults={opbeatAgentName:"opbeat-js",VERSION:"v3.1.4",apiHost:"intake.opbeat.com",isInstalled:!1,debug:!1,logLevel:"warn",orgId:null,appId:null,angularAppName:null,performance:{browserResponsivenessInterval:500,browserResponsivenessBuffer:3,checkBrowserResponsiveness:!0,enable:!0,enableStackFrames:!1,groupSimilarTraces:!0,similarTraceThreshold:.05},libraryPathPattern:"(node_modules|bower_components|webpack)",context:{user:{},extra:null}},this._changeSubscription=new a}function i(t){var e={},n=/^data\-([\w\-]+)$/;if(t)for(var r=t.attributes,i=0;i<r.length;i++){var a=r[i];if(n.test(a.nodeName)){var s=a.nodeName.match(n)[1];s=o.arrayMap(s.split("-"),function(t,e){return e>0?t.charAt(0).toUpperCase()+t.substring(1):t}).join(""),e[s]=a.value||a.nodeValue}}return e}var o=t("./utils"),a=t("../common/subscription");r.prototype.init=function(){var t=s();this.setConfig(t)},r.prototype.get=function(t){return o.arrayReduce(t.split("."),function(t,e){return t[e]},this.config)},r.prototype.set=function(t,e){var n=t.split("."),r=n.length-1,i=this.config;o.arraySome(n,function(t,n){if(void 0===t)return!0;if(n===r)i[t]=e;else{var o=i[t]||{};i[t]=o,i=o}})},r.prototype.getAgentName=function(){var t=this.config.VERSION;return(!t||t.indexOf("%%VERSION")>=0)&&(t="dev"),this.get("opbeatAgentName")+"/"+t},r.prototype.setConfig=function(t){t=t||{},this.config=o.merge({},this.defaults,this.config,t),this._changeSubscription.applyAll(this,[this.config])},r.prototype.subscribeToChange=function(t){return this._changeSubscription.subscribe(t)},r.prototype.isValid=function(){var t=["appId","orgId"],e=o.arrayMap(t,o.functionBind(function(t){return null===this.config[t]||void 0===this.config[t]},this));return-1===o.arrayIndexOf(e,!0)};var s=function(){return i(o.getCurrentScript())};r.prototype.VERSION="v3.1.4",r.prototype.isPlatformSupported=function(){return"function"==typeof Array.prototype.forEach&&"function"==typeof JSON.stringify&&"function"==typeof Function.bind&&window.performance&&"function"==typeof window.performance.now&&o.isCORSSupported()},e.exports=new r},{
"../common/subscription":11,"./utils":21}],18:[function(t,e,n){var r=t("simple-lru-cache"),i=t("./transport"),o=new r({maxSize:1e3});e.exports={getFile:function(t){var e=o.get(t);if(void 0!==e)return e;var n=i.getFile(t);return o.set(t,n),n}}},{"./transport":20,"simple-lru-cache":4}],19:[function(t,e,n){var r=t("./config"),i=[];e.exports={getLogStack:function(){return i},error:function(t,e){return this.log("%c "+t,"color: red",e)},warning:function(t,e){return this.log("%c "+t,"background-color: ffff00",e)},log:function(t,e){for(var n=new Array(arguments.length),o=0,a=arguments.length;o<a;o++)n[o]=arguments[o];var s=!0===r.get("debug")||"true"===r.get("debug"),c=window.console;if(i.push({msg:t,data:n.slice(1)}),s&&c)return"function"==typeof Function.prototype.bind?window.console.log.apply(window.console,n):Function.prototype.apply.call(window.console.log,window.console,n)}}},{"./config":17}],20:[function(t,e,n){function r(t,e){return o.log("opbeat.transport.sendToOpbeat",e),i("https://"+a.get("apiHost")+"/api/v1/organizations/"+a.get("orgId")+"/apps/"+a.get("appId")+"/client-side/"+t+"/","POST","JSON",e,{"X-Opbeat-Client":a.getAgentName()})}function i(t,e,n,r,i){return new s(function(a,s){var c=new window.XMLHttpRequest;if(c.open(e,t,!0),c.timeout=1e4,"JSON"===n&&c.setRequestHeader("Content-Type","application/json"),i)for(var u in i)i.hasOwnProperty(u)&&c.setRequestHeader(u.toLowerCase(),i[u]);c.onreadystatechange=function(e){if(4===c.readyState){var n=c.status;if(0===n||n>399&&n<600){var r=new Error(t+" HTTP status: "+n);r.xhr=c,s(r),o.log("opbeat.transport.makeRequest.error",r)}else a(c.responseText),o.log("opbeat.transport.makeRequest.success")}},c.onerror=function(t){s(t),o.log("opbeat.transport.makeRequest.error",t)},"JSON"===n&&(r=JSON.stringify(r)),c.send(r)})}var o=t("./logger"),a=t("./config"),s=t("es6-promise").Promise;e.exports={sendError:function(t){return r("errors",t)},sendTransaction:function(t){return r("transactions",t)},getFile:function(t){return i(t,"GET","",{})}}},{"./config":17,"./logger":19,"es6-promise":2}],21:[function(t,e,n){function r(t){return null!==t&&"object"==typeof t}function i(t){return"function"==typeof t}var o=[].slice;e.exports={getViewPortInfo:function(){var t=document.documentElement,e=document.getElementsByTagName("body")[0];return{width:window.innerWidth||t.clientWidth||e.clientWidth,height:window.innerHeight||t.clientHeight||e.clientHeight}},mergeObject:function(t,e){var n,r={};for(n in t)r[n]=t[n];for(n in e)r[n]=e[n];return r},extend:function(t){return this.baseExtend(t,o.call(arguments,1),!1)},merge:function(t){return this.baseExtend(t,o.call(arguments,1),!0)},baseExtend:function t(e,n,o){for(var a=0,s=n.length;a<s;++a){var c=n[a];if(r(c)||i(c))for(var u=Object.keys(c),l=0,f=u.length;l<f;l++){var p=u[l],h=c[p];o&&r(h)?(r(e[p])||(e[p]=Array.isArray(h)?[]:{}),t(e[p],[h],!1)):e[p]=h}}return e},isObject:r,isFunction:i,arrayReduce:function(t,e,n){if(null==t)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var r=Object(t),i=r.length>>>0,o=0;if(!n){for(;o<i&&!(o in r);)o++;if(o>=i)throw new TypeError("Reduce of empty array with no initial value");n=r[o++]}for(;o<i;o++)o in r&&(n=e(n,r[o],o,r));return n},arraySome:function(t,e,n){if(null==t)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;var r=Object(t),i=r.length>>>0;n||(n=void 0);for(var o=0;o<i;o++)if(o in r&&e.call(n,r[o],o,r))return!0;return!1},arrayMap:function(t,e,n){var r,i,o;if(null==this)throw new TypeError(" this is null or not defined");var a=Object(t),s=a.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(r=n),i=new Array(s),o=0;o<s;){var c,u;o in a&&(c=a[o],u=e.call(r,c,o,a),i[o]=u),o++}return i},arrayIndexOf:function(t,e,n){var r;if(null==t)throw new TypeError('"arrayVal" is null or not defined');var i=Object(t),o=i.length>>>0;if(0===o)return-1;var a=+n||0;if(Math.abs(a)===1/0&&(a=0),a>=o)return-1;for(r=Math.max(a>=0?a:o-Math.abs(a),0);r<o;){if(r in i&&i[r]===e)return r;r++}return-1},functionBind:function(t,e){var n=Array.prototype.slice.call(arguments,2),r=function(){},i=function(){return t.apply(e,n.concat(Array.prototype.slice.call(arguments)))};return r.prototype=t.prototype,i.prototype=new r,i},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},isUndefined:function(t){return void 0===t},isCORSSupported:function(){return"withCredentials"in new window.XMLHttpRequest},getCurrentScript:function(){return document.currentScript||function(){var t=document.getElementsByTagName("script");return t[t.length-1]}()},generateUuid:function(){function t(t){var e=(Math.random().toString(16)+"000000000").substr(2,8);return t?"-"+e.substr(0,4)+"-"+e.substr(4,4):e}return t()+t(!0)+t(!0)+t()}}},{}],22:[function(t,e,n){function r(){this._serviceFactory=new a,this._config=this._serviceFactory.getConfigService();var t=[];window._opbeat&&(t=window._opbeat.q),this.api=new o(this,t),window._opbeat=this.api.push,this.install()}var i=t("./lib/logger"),o=t("./lib/api"),a=t("./common/serviceFactory");r.prototype.VERSION="v3.1.4",r.prototype.isPlatformSupported=function(){return this._config.isPlatformSupported()},r.prototype.config=function(t){return t&&this._config.setConfig(t),this.install(),this._config},r.prototype.install=function(){return this._config.isValid()?this.isPlatformSupported()?this._config.get("isInstalled")?(i.warning("opbeat.install.already.installed"),this):(this._exceptions=this._exceptionHandler=this._serviceFactory.getExceptionHandler(),this._exceptions.install(),this._config.set("isInstalled",!0),this):(i.warning("opbeat.install.platform.unsupported"),this):(i.warning("opbeat.install.config.invalid"),this)},r.prototype.uninstall=function(){return this._exceptions.uninstall(),this._config.set("isInstalled",!1),this},r.prototype.captureException=function(t,e){return this._config.get("isInstalled")?t instanceof Error?(this._exceptions.processError(t,e),this):(i.error("Can't capture exception. Passed exception needs to be an instanceof Error"),this):(i.error("Can't capture exception. Opbeat isn't intialized"),this)},r.prototype.setUserContext=function(t){return this._config.set("context.user",t),this},r.prototype.setExtraContext=function(t){return this._config.set("context.extra",t),this},e.exports=new r},{"./common/serviceFactory":10,"./lib/api":16,"./lib/logger":19}]},{},[22]);