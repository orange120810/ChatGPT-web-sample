"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/const _amdLoaderGlobal=this,_commonjsGlobal=typeof global=="object"?global:{};var AMDLoader;(function(a){a.global=_amdLoaderGlobal;class _{get isWindows(){return this._detect(),this._isWindows}get isNode(){return this._detect(),this._isNode}get isElectronRenderer(){return this._detect(),this._isElectronRenderer}get isWebWorker(){return this._detect(),this._isWebWorker}get isElectronNodeIntegrationWebWorker(){return this._detect(),this._isElectronNodeIntegrationWebWorker}constructor(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1,this._isElectronNodeIntegrationWebWorker=!1}_detect(){this._detected||(this._detected=!0,this._isWindows=_._isWindows(),this._isNode=typeof module<"u"&&!!module.exports,this._isElectronRenderer=typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.electron<"u"&&process.type==="renderer",this._isWebWorker=typeof a.global.importScripts=="function",this._isElectronNodeIntegrationWebWorker=this._isWebWorker&&typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.electron<"u"&&process.type==="worker")}static _isWindows(){return typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0?!0:typeof process<"u"?process.platform==="win32":!1}}a.Environment=_})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(a){class _{constructor(n,h,c){this.type=n,this.detail=h,this.timestamp=c}}a.LoaderEvent=_;class m{constructor(n){this._events=[new _(1,"",n)]}record(n,h){this._events.push(new _(n,h,a.Utilities.getHighPerformanceTimestamp()))}getEvents(){return this._events}}a.LoaderEventRecorder=m;class y{record(n,h){}getEvents(){return[]}}y.INSTANCE=new y,a.NullLoaderEventRecorder=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(a){class _{static fileUriToFilePath(y,f){if(f=decodeURI(f).replace(/%23/g,"#"),y){if(/^file:\/\/\//.test(f))return f.substr(8);if(/^file:\/\//.test(f))return f.substr(5)}else if(/^file:\/\//.test(f))return f.substr(7);return f}static startsWith(y,f){return y.length>=f.length&&y.substr(0,f.length)===f}static endsWith(y,f){return y.length>=f.length&&y.substr(y.length-f.length)===f}static containsQueryString(y){return/^[^\#]*\?/gi.test(y)}static isAbsolutePath(y){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(y)}static forEachProperty(y,f){if(y){let n;for(n in y)y.hasOwnProperty(n)&&f(n,y[n])}}static isEmpty(y){let f=!0;return _.forEachProperty(y,()=>{f=!1}),f}static recursiveClone(y){if(!y||typeof y!="object"||y instanceof RegExp||!Array.isArray(y)&&Object.getPrototypeOf(y)!==Object.prototype)return y;let f=Array.isArray(y)?[]:{};return _.forEachProperty(y,(n,h)=>{h&&typeof h=="object"?f[n]=_.recursiveClone(h):f[n]=h}),f}static generateAnonymousModule(){return"===anonymous"+_.NEXT_ANONYMOUS_ID+++"==="}static isAnonymousModule(y){return _.startsWith(y,"===anonymous")}static getHighPerformanceTimestamp(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=a.global.performance&&typeof a.global.performance.now=="function"),this.HAS_PERFORMANCE_NOW?a.global.performance.now():Date.now()}}_.NEXT_ANONYMOUS_ID=1,_.PERFORMANCE_NOW_PROBED=!1,_.HAS_PERFORMANCE_NOW=!1,a.Utilities=_})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(a){function _(f){if(f instanceof Error)return f;const n=new Error(f.message||String(f)||"Unknown Error");return f.stack&&(n.stack=f.stack),n}a.ensureError=_;class m{static validateConfigurationOptions(n){function h(c){if(c.phase==="loading"){console.error('Loading "'+c.moduleId+'" failed'),console.error(c),console.error("Here are the modules that depend on it:"),console.error(c.neededBy);return}if(c.phase==="factory"){console.error('The factory function of "'+c.moduleId+'" has thrown an exception'),console.error(c),console.error("Here are the modules that depend on it:"),console.error(c.neededBy);return}}if(n=n||{},typeof n.baseUrl!="string"&&(n.baseUrl=""),typeof n.isBuild!="boolean"&&(n.isBuild=!1),typeof n.paths!="object"&&(n.paths={}),typeof n.config!="object"&&(n.config={}),typeof n.catchError>"u"&&(n.catchError=!1),typeof n.recordStats>"u"&&(n.recordStats=!1),typeof n.urlArgs!="string"&&(n.urlArgs=""),typeof n.onError!="function"&&(n.onError=h),Array.isArray(n.ignoreDuplicateModules)||(n.ignoreDuplicateModules=[]),n.baseUrl.length>0&&(a.Utilities.endsWith(n.baseUrl,"/")||(n.baseUrl+="/")),typeof n.cspNonce!="string"&&(n.cspNonce=""),typeof n.preferScriptTags>"u"&&(n.preferScriptTags=!1),n.nodeCachedData&&typeof n.nodeCachedData=="object"&&(typeof n.nodeCachedData.seed!="string"&&(n.nodeCachedData.seed="seed"),(typeof n.nodeCachedData.writeDelay!="number"||n.nodeCachedData.writeDelay<0)&&(n.nodeCachedData.writeDelay=1e3*7),!n.nodeCachedData.path||typeof n.nodeCachedData.path!="string")){const c=_(new Error("INVALID cached data configuration, 'path' MUST be set"));c.phase="configuration",n.onError(c),n.nodeCachedData=void 0}return n}static mergeConfigurationOptions(n=null,h=null){let c=a.Utilities.recursiveClone(h||{});return a.Utilities.forEachProperty(n,(t,e)=>{t==="ignoreDuplicateModules"&&typeof c.ignoreDuplicateModules<"u"?c.ignoreDuplicateModules=c.ignoreDuplicateModules.concat(e):t==="paths"&&typeof c.paths<"u"?a.Utilities.forEachProperty(e,(i,s)=>c.paths[i]=s):t==="config"&&typeof c.config<"u"?a.Utilities.forEachProperty(e,(i,s)=>c.config[i]=s):c[t]=a.Utilities.recursiveClone(e)}),m.validateConfigurationOptions(c)}}a.ConfigurationOptionsUtil=m;class y{constructor(n,h){if(this._env=n,this.options=m.mergeConfigurationOptions(h),this._createIgnoreDuplicateModulesMap(),this._createSortedPathsRules(),this.options.baseUrl===""&&this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){let c=this.options.nodeRequire.main.filename,t=Math.max(c.lastIndexOf("/"),c.lastIndexOf("\\"));this.options.baseUrl=c.substring(0,t+1)}}_createIgnoreDuplicateModulesMap(){this.ignoreDuplicateModulesMap={};for(let n=0;n<this.options.ignoreDuplicateModules.length;n++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[n]]=!0}_createSortedPathsRules(){this.sortedPathsRules=[],a.Utilities.forEachProperty(this.options.paths,(n,h)=>{Array.isArray(h)?this.sortedPathsRules.push({from:n,to:h}):this.sortedPathsRules.push({from:n,to:[h]})}),this.sortedPathsRules.sort((n,h)=>h.from.length-n.from.length)}cloneAndMerge(n){return new y(this._env,m.mergeConfigurationOptions(n,this.options))}getOptionsLiteral(){return this.options}_applyPaths(n){let h;for(let c=0,t=this.sortedPathsRules.length;c<t;c++)if(h=this.sortedPathsRules[c],a.Utilities.startsWith(n,h.from)){let e=[];for(let i=0,s=h.to.length;i<s;i++)e.push(h.to[i]+n.substr(h.from.length));return e}return[n]}_addUrlArgsToUrl(n){return a.Utilities.containsQueryString(n)?n+"&"+this.options.urlArgs:n+"?"+this.options.urlArgs}_addUrlArgsIfNecessaryToUrl(n){return this.options.urlArgs?this._addUrlArgsToUrl(n):n}_addUrlArgsIfNecessaryToUrls(n){if(this.options.urlArgs)for(let h=0,c=n.length;h<c;h++)n[h]=this._addUrlArgsToUrl(n[h]);return n}moduleIdToPaths(n){if(this._env.isNode&&this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(n))return this.isBuild()?["empty:"]:["node|"+n];let h=n,c;if(!a.Utilities.endsWith(h,".js")&&!a.Utilities.isAbsolutePath(h)){c=this._applyPaths(h);for(let t=0,e=c.length;t<e;t++)this.isBuild()&&c[t]==="empty:"||(a.Utilities.isAbsolutePath(c[t])||(c[t]=this.options.baseUrl+c[t]),!a.Utilities.endsWith(c[t],".js")&&!a.Utilities.containsQueryString(c[t])&&(c[t]=c[t]+".js"))}else!a.Utilities.endsWith(h,".js")&&!a.Utilities.containsQueryString(h)&&(h=h+".js"),c=[h];return this._addUrlArgsIfNecessaryToUrls(c)}requireToUrl(n){let h=n;return a.Utilities.isAbsolutePath(h)||(h=this._applyPaths(h)[0],a.Utilities.isAbsolutePath(h)||(h=this.options.baseUrl+h)),this._addUrlArgsIfNecessaryToUrl(h)}isBuild(){return this.options.isBuild}shouldInvokeFactory(n){return!!(!this.options.isBuild||a.Utilities.isAnonymousModule(n)||this.options.buildForceInvokeFactory&&this.options.buildForceInvokeFactory[n])}isDuplicateMessageIgnoredFor(n){return this.ignoreDuplicateModulesMap.hasOwnProperty(n)}getConfigForModule(n){if(this.options.config)return this.options.config[n]}shouldCatchError(){return this.options.catchError}shouldRecordStats(){return this.options.recordStats}onError(n){this.options.onError(n)}}a.Configuration=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(a){class _{constructor(e){this._env=e,this._scriptLoader=null,this._callbackMap={}}load(e,i,s,r){if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new f;else if(this._env.isElectronRenderer){const{preferScriptTags:l}=e.getConfig().getOptionsLiteral();l?this._scriptLoader=new m:this._scriptLoader=new n(this._env)}else this._env.isNode?this._scriptLoader=new n(this._env):this._scriptLoader=new m;let u={callback:s,errorback:r};if(this._callbackMap.hasOwnProperty(i)){this._callbackMap[i].push(u);return}this._callbackMap[i]=[u],this._scriptLoader.load(e,i,()=>this.triggerCallback(i),l=>this.triggerErrorback(i,l))}triggerCallback(e){let i=this._callbackMap[e];delete this._callbackMap[e];for(let s=0;s<i.length;s++)i[s].callback()}triggerErrorback(e,i){let s=this._callbackMap[e];delete this._callbackMap[e];for(let r=0;r<s.length;r++)s[r].errorback(i)}}class m{attachListeners(e,i,s){let r=()=>{e.removeEventListener("load",u),e.removeEventListener("error",l)},u=o=>{r(),i()},l=o=>{r(),s(o)};e.addEventListener("load",u),e.addEventListener("error",l)}load(e,i,s,r){if(/^node\|/.test(i)){let u=e.getConfig().getOptionsLiteral(),l=h(e.getRecorder(),u.nodeRequire||a.global.nodeRequire),o=i.split("|"),d=null;try{d=l(o[1])}catch(g){r(g);return}e.enqueueDefineAnonymousModule([],()=>d),s()}else{let u=document.createElement("script");u.setAttribute("async","async"),u.setAttribute("type","text/javascript"),this.attachListeners(u,s,r);const{trustedTypesPolicy:l}=e.getConfig().getOptionsLiteral();l&&(i=l.createScriptURL(i)),u.setAttribute("src",i);const{cspNonce:o}=e.getConfig().getOptionsLiteral();o&&u.setAttribute("nonce",o),document.getElementsByTagName("head")[0].appendChild(u)}}}function y(t){const{trustedTypesPolicy:e}=t.getConfig().getOptionsLiteral();try{return(e?self.eval(e.createScript("","true")):new Function("true")).call(self),!0}catch{return!1}}class f{constructor(){this._cachedCanUseEval=null}_canUseEval(e){return this._cachedCanUseEval===null&&(this._cachedCanUseEval=y(e)),this._cachedCanUseEval}load(e,i,s,r){if(/^node\|/.test(i)){const u=e.getConfig().getOptionsLiteral(),l=h(e.getRecorder(),u.nodeRequire||a.global.nodeRequire),o=i.split("|");let d=null;try{d=l(o[1])}catch(g){r(g);return}e.enqueueDefineAnonymousModule([],function(){return d}),s()}else{const{trustedTypesPolicy:u}=e.getConfig().getOptionsLiteral();if(!(/^((http:)|(https:)|(file:))/.test(i)&&i.substring(0,self.origin.length)!==self.origin)&&this._canUseEval(e)){fetch(i).then(o=>{if(o.status!==200)throw new Error(o.statusText);return o.text()}).then(o=>{o=`${o}
//# sourceURL=${i}`,(u?self.eval(u.createScript("",o)):new Function(o)).call(self),s()}).then(void 0,r);return}try{u&&(i=u.createScriptURL(i)),importScripts(i),s()}catch(o){r(o)}}}}class n{constructor(e){this._env=e,this._didInitialize=!1,this._didPatchNodeRequire=!1}_init(e){this._didInitialize||(this._didInitialize=!0,this._fs=e("fs"),this._vm=e("vm"),this._path=e("path"),this._crypto=e("crypto"))}_initNodeRequire(e,i){const{nodeCachedData:s}=i.getConfig().getOptionsLiteral();if(!s||this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;const r=this,u=e("module");function l(o){const d=o.constructor;let g=function(v){try{return o.require(v)}finally{}};return g.resolve=function(v,E){return d._resolveFilename(v,o,!1,E)},g.resolve.paths=function(v){return d._resolveLookupPaths(v,o)},g.main=process.mainModule,g.extensions=d._extensions,g.cache=d._cache,g}u.prototype._compile=function(o,d){const g=u.wrap(o.replace(/^#!.*/,"")),p=i.getRecorder(),v=r._getCachedDataPath(s,d),E={filename:d};let b;try{const D=r._fs.readFileSync(v);b=D.slice(0,16),E.cachedData=D.slice(16),p.record(60,v)}catch{p.record(61,v)}const R=new r._vm.Script(g,E),C=R.runInThisContext(E),P=r._path.dirname(d),I=l(this),U=[this.exports,I,this,d,P,process,_commonjsGlobal,Buffer],w=C.apply(this.exports,U);return r._handleCachedData(R,g,v,!E.cachedData,i),r._verifyCachedData(R,g,v,b,i),w}}load(e,i,s,r){const u=e.getConfig().getOptionsLiteral(),l=h(e.getRecorder(),u.nodeRequire||a.global.nodeRequire),o=u.nodeInstrumenter||function(g){return g};this._init(l),this._initNodeRequire(l,e);let d=e.getRecorder();if(/^node\|/.test(i)){let g=i.split("|"),p=null;try{p=l(g[1])}catch(v){r(v);return}e.enqueueDefineAnonymousModule([],()=>p),s()}else{i=a.Utilities.fileUriToFilePath(this._env.isWindows,i);const g=this._path.normalize(i),p=this._getElectronRendererScriptPathOrUri(g),v=!!u.nodeCachedData,E=v?this._getCachedDataPath(u.nodeCachedData,i):void 0;this._readSourceAndCachedData(g,E,d,(b,R,C,P)=>{if(b){r(b);return}let I;R.charCodeAt(0)===n._BOM?I=n._PREFIX+R.substring(1)+n._SUFFIX:I=n._PREFIX+R+n._SUFFIX,I=o(I,g);const U={filename:p,cachedData:C},w=this._createAndEvalScript(e,I,U,s,r);this._handleCachedData(w,I,E,v&&!C,e),this._verifyCachedData(w,I,E,P,e)})}}_createAndEvalScript(e,i,s,r,u){const l=e.getRecorder();l.record(31,s.filename);const o=new this._vm.Script(i,s),d=o.runInThisContext(s),g=e.getGlobalAMDDefineFunc();let p=!1;const v=function(){return p=!0,g.apply(null,arguments)};return v.amd=g.amd,d.call(a.global,e.getGlobalAMDRequireFunc(),v,s.filename,this._path.dirname(s.filename)),l.record(32,s.filename),p?r():u(new Error(`Didn't receive define call in ${s.filename}!`)),o}_getElectronRendererScriptPathOrUri(e){if(!this._env.isElectronRenderer)return e;let i=e.match(/^([a-z])\:(.*)/i);return i?`file:///${(i[1].toUpperCase()+":"+i[2]).replace(/\\/g,"/")}`:`file://${e}`}_getCachedDataPath(e,i){const s=this._crypto.createHash("md5").update(i,"utf8").update(e.seed,"utf8").update(process.arch,"").digest("hex"),r=this._path.basename(i).replace(/\.js$/,"");return this._path.join(e.path,`${r}-${s}.code`)}_handleCachedData(e,i,s,r,u){e.cachedDataRejected?this._fs.unlink(s,l=>{u.getRecorder().record(62,s),this._createAndWriteCachedData(e,i,s,u),l&&u.getConfig().onError(l)}):r&&this._createAndWriteCachedData(e,i,s,u)}_createAndWriteCachedData(e,i,s,r){let u=Math.ceil(r.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),l=-1,o=0,d;const g=()=>{setTimeout(()=>{d||(d=this._crypto.createHash("md5").update(i,"utf8").digest());const p=e.createCachedData();if(!(p.length===0||p.length===l||o>=5)){if(p.length<l){g();return}l=p.length,this._fs.writeFile(s,Buffer.concat([d,p]),v=>{v&&r.getConfig().onError(v),r.getRecorder().record(63,s),g()})}},u*Math.pow(4,o++))};g()}_readSourceAndCachedData(e,i,s,r){if(!i)this._fs.readFile(e,{encoding:"utf8"},r);else{let u,l,o,d=2;const g=p=>{p?r(p):--d===0&&r(void 0,u,l,o)};this._fs.readFile(e,{encoding:"utf8"},(p,v)=>{u=v,g(p)}),this._fs.readFile(i,(p,v)=>{!p&&v&&v.length>0?(o=v.slice(0,16),l=v.slice(16),s.record(60,i)):s.record(61,i),g()})}}_verifyCachedData(e,i,s,r,u){r&&(e.cachedDataRejected||setTimeout(()=>{const l=this._crypto.createHash("md5").update(i,"utf8").digest();r.equals(l)||(u.getConfig().onError(new Error(`FAILED TO VERIFY CACHED DATA, deleting stale '${s}' now, but a RESTART IS REQUIRED`)),this._fs.unlink(s,o=>{o&&u.getConfig().onError(o)}))},Math.ceil(5e3*(1+Math.random()))))}}n._BOM=65279,n._PREFIX="(function (require, define, __filename, __dirname) { ",n._SUFFIX=`
});`;function h(t,e){if(e.__$__isRecorded)return e;const i=function(r){t.record(33,r);try{return e(r)}finally{t.record(34,r)}};return i.__$__isRecorded=!0,i}a.ensureRecordedNodeRequire=h;function c(t){return new _(t)}a.createScriptLoader=c})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(a){class _{constructor(t){let e=t.lastIndexOf("/");e!==-1?this.fromModulePath=t.substr(0,e+1):this.fromModulePath=""}static _normalizeModuleId(t){let e=t,i;for(i=/\/\.\//;i.test(e);)e=e.replace(i,"/");for(e=e.replace(/^\.\//g,""),i=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;i.test(e);)e=e.replace(i,"/");return e=e.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,""),e}resolveModule(t){let e=t;return a.Utilities.isAbsolutePath(e)||(a.Utilities.startsWith(e,"./")||a.Utilities.startsWith(e,"../"))&&(e=_._normalizeModuleId(this.fromModulePath+e)),e}}_.ROOT=new _(""),a.ModuleIdResolver=_;class m{constructor(t,e,i,s,r,u){this.id=t,this.strId=e,this.dependencies=i,this._callback=s,this._errorback=r,this.moduleIdResolver=u,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}static _safeInvokeFunction(t,e){try{return{returnedValue:t.apply(a.global,e),producedError:null}}catch(i){return{returnedValue:null,producedError:i}}}static _invokeFactory(t,e,i,s){return t.shouldInvokeFactory(e)?t.shouldCatchError()?this._safeInvokeFunction(i,s):{returnedValue:i.apply(a.global,s),producedError:null}:{returnedValue:null,producedError:null}}complete(t,e,i,s){this._isComplete=!0;let r=null;if(this._callback)if(typeof this._callback=="function"){t.record(21,this.strId);let u=m._invokeFactory(e,this.strId,this._callback,i);r=u.producedError,t.record(22,this.strId),!r&&typeof u.returnedValue<"u"&&(!this.exportsPassedIn||a.Utilities.isEmpty(this.exports))&&(this.exports=u.returnedValue)}else this.exports=this._callback;if(r){let u=a.ensureError(r);u.phase="factory",u.moduleId=this.strId,u.neededBy=s(this.id),this.error=u,e.onError(u)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null}onDependencyError(t){return this._isComplete=!0,this.error=t,this._errorback?(this._errorback(t),!0):!1}isComplete(){return this._isComplete}}a.Module=m;class y{constructor(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}getMaxModuleId(){return this._nextId}getModuleId(t){let e=this._strModuleIdToIntModuleId.get(t);return typeof e>"u"&&(e=this._nextId++,this._strModuleIdToIntModuleId.set(t,e),this._intModuleIdToStrModuleId[e]=t),e}getStrModuleId(t){return this._intModuleIdToStrModuleId[t]}}class f{constructor(t){this.id=t}}f.EXPORTS=new f(0),f.MODULE=new f(1),f.REQUIRE=new f(2),a.RegularDependency=f;class n{constructor(t,e,i){this.id=t,this.pluginId=e,this.pluginParam=i}}a.PluginDependency=n;class h{constructor(t,e,i,s,r=0){this._env=t,this._scriptLoader=e,this._loaderAvailableTimestamp=r,this._defineFunc=i,this._requireFunc=s,this._moduleIdProvider=new y,this._config=new a.Configuration(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}reset(){return new h(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)}getGlobalAMDDefineFunc(){return this._defineFunc}getGlobalAMDRequireFunc(){return this._requireFunc}static _findRelevantLocationInStack(t,e){let i=u=>u.replace(/\\/g,"/"),s=i(t),r=e.split(/\n/);for(let u=0;u<r.length;u++){let l=r[u].match(/(.*):(\d+):(\d+)\)?$/);if(l){let o=l[1],d=l[2],g=l[3],p=Math.max(o.lastIndexOf(" ")+1,o.lastIndexOf("(")+1);if(o=o.substr(p),o=i(o),o===s){let v={line:parseInt(d,10),col:parseInt(g,10)};return v.line===1&&(v.col-=53),v}}}throw new Error("Could not correlate define call site for needle "+t)}getBuildInfo(){if(!this._config.isBuild())return null;let t=[],e=0;for(let i=0,s=this._modules2.length;i<s;i++){let r=this._modules2[i];if(!r)continue;let u=this._buildInfoPath[r.id]||null,l=this._buildInfoDefineStack[r.id]||null,o=this._buildInfoDependencies[r.id];t[e++]={id:r.strId,path:u,defineLocation:u&&l?h._findRelevantLocationInStack(u,l):null,dependencies:o,shim:null,exports:r.exports}}return t}getRecorder(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new a.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=a.NullLoaderEventRecorder.INSTANCE),this._recorder}getLoaderEvents(){return this.getRecorder().getEvents()}enqueueDefineAnonymousModule(t,e){if(this._currentAnonymousDefineCall!==null)throw new Error("Can only have one anonymous define call per script file");let i=null;this._config.isBuild()&&(i=new Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:i,dependencies:t,callback:e}}defineModule(t,e,i,s,r,u=new _(t)){let l=this._moduleIdProvider.getModuleId(t);if(this._modules2[l]){this._config.isDuplicateMessageIgnoredFor(t)||console.warn("Duplicate definition of module '"+t+"'");return}let o=new m(l,t,this._normalizeDependencies(e,u),i,s,u);this._modules2[l]=o,this._config.isBuild()&&(this._buildInfoDefineStack[l]=r,this._buildInfoDependencies[l]=(o.dependencies||[]).map(d=>this._moduleIdProvider.getStrModuleId(d.id))),this._resolve(o)}_normalizeDependency(t,e){if(t==="exports")return f.EXPORTS;if(t==="module")return f.MODULE;if(t==="require")return f.REQUIRE;let i=t.indexOf("!");if(i>=0){let s=e.resolveModule(t.substr(0,i)),r=e.resolveModule(t.substr(i+1)),u=this._moduleIdProvider.getModuleId(s+"!"+r),l=this._moduleIdProvider.getModuleId(s);return new n(u,l,r)}return new f(this._moduleIdProvider.getModuleId(e.resolveModule(t)))}_normalizeDependencies(t,e){let i=[],s=0;for(let r=0,u=t.length;r<u;r++)i[s++]=this._normalizeDependency(t[r],e);return i}_relativeRequire(t,e,i,s){if(typeof e=="string")return this.synchronousRequire(e,t);this.defineModule(a.Utilities.generateAnonymousModule(),e,i,s,null,t)}synchronousRequire(t,e=new _(t)){let i=this._normalizeDependency(t,e),s=this._modules2[i.id];if(!s)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+t+"'. This is the first mention of this module!");if(!s.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+t+"'. This module has not been resolved completely yet.");if(s.error)throw s.error;return s.exports}configure(t,e){let i=this._config.shouldRecordStats();e?this._config=new a.Configuration(this._env,t):this._config=this._config.cloneAndMerge(t),this._config.shouldRecordStats()&&!i&&(this._recorder=null)}getConfig(){return this._config}_onLoad(t){if(this._currentAnonymousDefineCall!==null){let e=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(t),e.dependencies,e.callback,null,e.stack)}}_createLoadError(t,e){let i=this._moduleIdProvider.getStrModuleId(t),s=(this._inverseDependencies2[t]||[]).map(u=>this._moduleIdProvider.getStrModuleId(u));const r=a.ensureError(e);return r.phase="loading",r.moduleId=i,r.neededBy=s,r}_onLoadError(t,e){const i=this._createLoadError(t,e);this._modules2[t]||(this._modules2[t]=new m(t,this._moduleIdProvider.getStrModuleId(t),[],()=>{},null,null));let s=[];for(let l=0,o=this._moduleIdProvider.getMaxModuleId();l<o;l++)s[l]=!1;let r=!1,u=[];for(u.push(t),s[t]=!0;u.length>0;){let l=u.shift(),o=this._modules2[l];o&&(r=o.onDependencyError(i)||r);let d=this._inverseDependencies2[l];if(d)for(let g=0,p=d.length;g<p;g++){let v=d[g];s[v]||(u.push(v),s[v]=!0)}}r||this._config.onError(i)}_hasDependencyPath(t,e){let i=this._modules2[t];if(!i)return!1;let s=[];for(let u=0,l=this._moduleIdProvider.getMaxModuleId();u<l;u++)s[u]=!1;let r=[];for(r.push(i),s[t]=!0;r.length>0;){let l=r.shift().dependencies;if(l)for(let o=0,d=l.length;o<d;o++){let g=l[o];if(g.id===e)return!0;let p=this._modules2[g.id];p&&!s[g.id]&&(s[g.id]=!0,r.push(p))}}return!1}_findCyclePath(t,e,i){if(t===e||i===50)return[t];let s=this._modules2[t];if(!s)return null;let r=s.dependencies;if(r)for(let u=0,l=r.length;u<l;u++){let o=this._findCyclePath(r[u].id,e,i+1);if(o!==null)return o.push(t),o}return null}_createRequire(t){let e=(i,s,r)=>this._relativeRequire(t,i,s,r);return e.toUrl=i=>this._config.requireToUrl(t.resolveModule(i)),e.getStats=()=>this.getLoaderEvents(),e.hasDependencyCycle=()=>this._hasDependencyCycle,e.config=(i,s=!1)=>{this.configure(i,s)},e.__$__nodeRequire=a.global.nodeRequire,e}_loadModule(t){if(this._modules2[t]||this._knownModules2[t])return;this._knownModules2[t]=!0;let e=this._moduleIdProvider.getStrModuleId(t),i=this._config.moduleIdToPaths(e),s=/^@[^\/]+\/[^\/]+$/;this._env.isNode&&(e.indexOf("/")===-1||s.test(e))&&i.push("node|"+e);let r=-1,u=l=>{if(r++,r>=i.length)this._onLoadError(t,l);else{let o=i[r],d=this.getRecorder();if(this._config.isBuild()&&o==="empty:"){this._buildInfoPath[t]=o,this.defineModule(this._moduleIdProvider.getStrModuleId(t),[],null,null,null),this._onLoad(t);return}d.record(10,o),this._scriptLoader.load(this,o,()=>{this._config.isBuild()&&(this._buildInfoPath[t]=o),d.record(11,o),this._onLoad(t)},g=>{d.record(12,o),u(g)})}};u(null)}_loadPluginDependency(t,e){if(this._modules2[e.id]||this._knownModules2[e.id])return;this._knownModules2[e.id]=!0;let i=s=>{this.defineModule(this._moduleIdProvider.getStrModuleId(e.id),[],s,null,null)};i.error=s=>{this._config.onError(this._createLoadError(e.id,s))},t.load(e.pluginParam,this._createRequire(_.ROOT),i,this._config.getOptionsLiteral())}_resolve(t){let e=t.dependencies;if(e)for(let i=0,s=e.length;i<s;i++){let r=e[i];if(r===f.EXPORTS){t.exportsPassedIn=!0,t.unresolvedDependenciesCount--;continue}if(r===f.MODULE){t.unresolvedDependenciesCount--;continue}if(r===f.REQUIRE){t.unresolvedDependenciesCount--;continue}let u=this._modules2[r.id];if(u&&u.isComplete()){if(u.error){t.onDependencyError(u.error);return}t.unresolvedDependenciesCount--;continue}if(this._hasDependencyPath(r.id,t.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(r.id)+"' and '"+this._moduleIdProvider.getStrModuleId(t.id)+"'. The cyclic path follows:");let l=this._findCyclePath(r.id,t.id,0)||[];l.reverse(),l.push(r.id),console.warn(l.map(o=>this._moduleIdProvider.getStrModuleId(o)).join(` => 
`)),t.unresolvedDependenciesCount--;continue}if(this._inverseDependencies2[r.id]=this._inverseDependencies2[r.id]||[],this._inverseDependencies2[r.id].push(t.id),r instanceof n){let l=this._modules2[r.pluginId];if(l&&l.isComplete()){this._loadPluginDependency(l.exports,r);continue}let o=this._inversePluginDependencies2.get(r.pluginId);o||(o=[],this._inversePluginDependencies2.set(r.pluginId,o)),o.push(r),this._loadModule(r.pluginId);continue}this._loadModule(r.id)}t.unresolvedDependenciesCount===0&&this._onModuleComplete(t)}_onModuleComplete(t){let e=this.getRecorder();if(t.isComplete())return;let i=t.dependencies,s=[];if(i)for(let o=0,d=i.length;o<d;o++){let g=i[o];if(g===f.EXPORTS){s[o]=t.exports;continue}if(g===f.MODULE){s[o]={id:t.strId,config:()=>this._config.getConfigForModule(t.strId)};continue}if(g===f.REQUIRE){s[o]=this._createRequire(t.moduleIdResolver);continue}let p=this._modules2[g.id];if(p){s[o]=p.exports;continue}s[o]=null}const r=o=>(this._inverseDependencies2[o]||[]).map(d=>this._moduleIdProvider.getStrModuleId(d));t.complete(e,this._config,s,r);let u=this._inverseDependencies2[t.id];if(this._inverseDependencies2[t.id]=null,u)for(let o=0,d=u.length;o<d;o++){let g=u[o],p=this._modules2[g];p.unresolvedDependenciesCount--,p.unresolvedDependenciesCount===0&&this._onModuleComplete(p)}let l=this._inversePluginDependencies2.get(t.id);if(l){this._inversePluginDependencies2.delete(t.id);for(let o=0,d=l.length;o<d;o++)this._loadPluginDependency(t.exports,l[o])}}}a.ModuleManager=h})(AMDLoader||(AMDLoader={}));var define,AMDLoader;(function(a){const _=new a.Environment;let m=null;const y=function(c,t,e){typeof c!="string"&&(e=t,t=c,c=null),(typeof t!="object"||!Array.isArray(t))&&(e=t,t=null),t||(t=["require","exports","module"]),c?m.defineModule(c,t,e,null,null):m.enqueueDefineAnonymousModule(t,e)};y.amd={jQuery:!0};const f=function(c,t=!1){m.configure(c,t)},n=function(){if(arguments.length===1){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0])){f(arguments[0]);return}if(typeof arguments[0]=="string")return m.synchronousRequire(arguments[0])}if((arguments.length===2||arguments.length===3)&&Array.isArray(arguments[0])){m.defineModule(a.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null);return}throw new Error("Unrecognized require call")};n.config=f,n.getConfig=function(){return m.getConfig().getOptionsLiteral()},n.reset=function(){m=m.reset()},n.getBuildInfo=function(){return m.getBuildInfo()},n.getStats=function(){return m.getLoaderEvents()},n.define=y;function h(){if(typeof a.global.require<"u"||typeof require<"u"){const c=a.global.require||require;if(typeof c=="function"&&typeof c.resolve=="function"){const t=a.ensureRecordedNodeRequire(m.getRecorder(),c);a.global.nodeRequire=t,n.nodeRequire=t,n.__$__nodeRequire=t}}_.isNode&&!_.isElectronRenderer&&!_.isElectronNodeIntegrationWebWorker?module.exports=n:(_.isElectronRenderer||(a.global.define=y),a.global.require=n)}a.init=h,(typeof a.global.define!="function"||!a.global.define.amd)&&(m=new a.ModuleManager(_,a.createScriptLoader(_),y,n,a.Utilities.getHighPerformanceTimestamp()),typeof a.global.require<"u"&&typeof a.global.require!="function"&&n.config(a.global.require),define=function(){return y.apply(null,arguments)},define.amd=y.amd,typeof doNotInitLoader>"u"&&h())})(AMDLoader||(AMDLoader={})),define("vs/css",["require","exports"],function(a,_){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.load=void 0;function m(c,t,e,i){if(i=i||{},(i["vs/css"]||{}).disabled){e({});return}const r=t.toUrl(c+".css");y(c,r,()=>{e({})},u=>{typeof e.error=="function"&&e.error("Could not find "+r+".")})}_.load=m;function y(c,t,e,i){if(f(c,t)){e();return}n(c,t,e,i)}function f(c,t){const e=document.getElementsByTagName("link");for(let i=0,s=e.length;i<s;i++){const r=e[i].getAttribute("data-name"),u=e[i].getAttribute("href");if(r===c||u===t)return!0}return!1}function n(c,t,e,i){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("data-name",c),h(c,s,e,i),s.setAttribute("href",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(s)}function h(c,t,e,i){const s=()=>{t.removeEventListener("load",r),t.removeEventListener("error",u)},r=l=>{s(),e()},u=l=>{s(),i(l)};t.addEventListener("load",r),t.addEventListener("error",u)}}),define("vs/nls",["require","exports"],function(a,_){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.load=_.create=_.setPseudoTranslation=_.getConfiguredDefaultLocale=_.localize=void 0;let m=typeof document<"u"&&document.location&&document.location.hash.indexOf("pseudo=true")>=0;const y="i-default";function f(l,o){let d;return o.length===0?d=l:d=l.replace(/\{(\d+)\}/g,(g,p)=>{const v=p[0],E=o[v];let b=g;return typeof E=="string"?b=E:(typeof E=="number"||typeof E=="boolean"||E===void 0||E===null)&&(b=String(E)),b}),m&&(d="\uFF3B"+d.replace(/[aouei]/g,"$&$&")+"\uFF3D"),d}function n(l,o){let d=l[o];return d||(d=l["*"],d)?d:null}function h(l){return l.charAt(l.length-1)==="/"?l:l+"/"}async function c(l,o,d){const g=h(l)+h(o)+"vscode/"+h(d),p=await fetch(g);if(p.ok)return await p.json();throw new Error(`${p.status} - ${p.statusText}`)}function t(l){return function(o,d){const g=Array.prototype.slice.call(arguments,2);return f(l[o],g)}}function e(l,o,...d){return f(o,d)}_.localize=e;function i(l){}_.getConfiguredDefaultLocale=i;function s(l){m=l}_.setPseudoTranslation=s;function r(l,o){return{localize:t(o[l]),getConfiguredDefaultLocale:o.getConfiguredDefaultLocale??(d=>{})}}_.create=r;function u(l,o,d,g){const p=g["vs/nls"]??{};if(!l||l.length===0)return d({localize:e,getConfiguredDefaultLocale:()=>p.availableLanguages?.["*"]});const v=p.availableLanguages?n(p.availableLanguages,l):null,E=v===null||v===y;let b=".nls";E||(b=b+"."+v);const R=C=>{Array.isArray(C)?C.localize=t(C):C.localize=t(C[l]),C.getConfiguredDefaultLocale=()=>p.availableLanguages?.["*"],d(C)};typeof p.loadBundle=="function"?p.loadBundle(l,v,(C,P)=>{C?o([l+".nls"],R):R(P)}):p.translationServiceUrl&&!E?(async()=>{try{const C=await c(p.translationServiceUrl,v,l);return R(C)}catch(C){if(!v.includes("-"))return console.error(C),o([l+".nls"],R);try{const P=v.split("-")[0],I=await c(p.translationServiceUrl,P,l);return p.availableLanguages??={},p.availableLanguages["*"]=P,R(I)}catch(P){return console.error(P),o([l+".nls"],R)}}})():o([l+b],R,C=>{if(b===".nls"){console.error("Failed trying to load default language strings",C);return}console.error(`Failed to load message bundle for language ${v}. Falling back to the default language:`,C),o([l+".nls"],R)})}_.load=u});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2ccd690cbff1569e4a83d7c43d45101f817401dc/core/vs/loader.js.map
