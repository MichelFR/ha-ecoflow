var Mo=Object.create;var ya=Object.defineProperty;var Fo=Object.getOwnPropertyDescriptor;var Io=Object.getOwnPropertyNames;var Lo=Object.getPrototypeOf,zo=Object.prototype.hasOwnProperty;var Oo=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports);var Ro=(c,i,r,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let h of Io(i))!zo.call(c,h)&&h!==r&&ya(c,h,{get:()=>i[h],enumerable:!(n=Fo(i,h))||n.enumerable});return c};var Do=(c,i,r)=>(r=c!=null?Mo(Lo(c)):{},Ro(i||!c||!c.__esModule?ya(r,"default",{value:c,enumerable:!0}):r,c));var hn=Oo((Xi,Os)=>{typeof document<"u"&&typeof navigator<"u"&&(function(c,i){typeof Xi=="object"&&typeof Os<"u"?Os.exports=i():typeof define=="function"&&define.amd?define(i):(c=typeof globalThis<"u"?globalThis:c||self,c.lottie=i())})(Xi,(function(){"use strict";var c="http://www.w3.org/2000/svg",i="",r=!1,n=-999999,h=function(e){r=!!e},u=function(){return r},w=function(e){i=e},z=function(){return i};function U(t){return document.createElement(t)}function B(t,e){var s,a=t.length,l;for(s=0;s<a;s+=1){l=t[s].prototype;for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e.prototype[o]=l[o])}}function Y(t,e){return Object.getOwnPropertyDescriptor(t,e)}function X(t){function e(){}return e.prototype=t,e}var rt=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(s){this.audios.push(s)},pause:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].pause()},resume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].resume()},setRate:function(s){var a,l=this.audios.length;for(a=0;a<l;a+=1)this.audios[a].setRate(s)},createAudio:function(s){return this.audioFactory?this.audioFactory(s):window.Howl?new window.Howl({src:[s]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(s){this.audioFactory=s},setVolume:function(s){this._volume=s,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),ot=(function(){function t(s,a){var l=0,o=[],p;switch(s){case"int16":case"uint8c":p=1;break;default:p=1.1;break}for(l=0;l<a;l+=1)o.push(p);return o}function e(s,a){return s==="float32"?new Float32Array(a):s==="int16"?new Int16Array(a):s==="uint8c"?new Uint8ClampedArray(a):t(s,a)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function ct(t){return Array.apply(null,{length:t})}function pe(t){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(t)}var Nt=!0,Qt=null,se=null,Ht="",Zi=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),wi=!1,Lt=Math.pow,ii=Math.sqrt,re=Math.floor,Hs=Math.max,Ve=Math.min,si={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,s=t.length;for(e=0;e<s;e+=1)si[t[e]]=Math[t[e]]})();function Er(){return{}}si.random=Math.random,si.abs=function(t){var e=pe(t);if(e==="object"&&t.length){var s=ct(t.length),a,l=t.length;for(a=0;a<l;a+=1)s[a]=Math.abs(t[a]);return s}return Math.abs(t)};var Ji=150,gt=Math.PI/180,J=.5519;function $t(t){wi=!!t}function Se(t){return wi?Math.round(t):t}function Ue(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function Be(t,e,s,a){this.type=t,this.currentTime=e,this.totalTime=s,this.direction=a<0?-1:1}function Ne(t,e){this.type=t,this.direction=e<0?-1:1}function je(t,e,s,a){this.type=t,this.currentLoop=s,this.totalLoops=e,this.direction=a<0?-1:1}function ri(t,e,s){this.type=t,this.firstFrame=e,this.totalFrames=s}function Pr(t,e){this.type=t,this.target=e}function Cn(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function Mn(t){this.type="configError",this.nativeError=t}function Dl(t,e){this.type=t,this.nativeError=e}var Rt=(function(){var t=0;return function(){return t+=1,Ht+"__lottie_element_"+t}})();function Ws(t,e,s){var a,l,o,p,_,f,k,A;switch(p=Math.floor(t*6),_=t*6-p,f=s*(1-e),k=s*(1-_*e),A=s*(1-(1-_)*e),p%6){case 0:a=s,l=A,o=f;break;case 1:a=k,l=s,o=f;break;case 2:a=f,l=s,o=A;break;case 3:a=f,l=k,o=s;break;case 4:a=A,l=f,o=s;break;case 5:a=s,l=f,o=k;break;default:break}return[a,l,o]}function Gs(t,e,s){var a=Math.max(t,e,s),l=Math.min(t,e,s),o=a-l,p,_=a===0?0:o/a,f=a/255;switch(a){case l:p=0;break;case t:p=e-s+o*(e<s?6:0),p/=6*o;break;case e:p=s-t+o*2,p/=6*o;break;case s:p=t-e+o*4,p/=6*o;break;default:break}return[p,_,f]}function Tr(t,e){var s=Gs(t[0]*255,t[1]*255,t[2]*255);return s[1]+=e,s[1]>1?s[1]=1:s[1]<=0&&(s[1]=0),Ws(s[0],s[1],s[2])}function Cr(t,e){var s=Gs(t[0]*255,t[1]*255,t[2]*255);return s[2]+=e,s[2]>1?s[2]=1:s[2]<0&&(s[2]=0),Ws(s[0],s[1],s[2])}function Mr(t,e){var s=Gs(t[0]*255,t[1]*255,t[2]*255);return s[0]+=e/360,s[0]>1?s[0]-=1:s[0]<0&&(s[0]+=1),Ws(s[0],s[1],s[2])}var Vl=(function(){var t=[],e,s;for(e=0;e<256;e+=1)s=e.toString(16),t[e]=s.length===1?"0"+s:s;return function(a,l,o){return a<0&&(a=0),l<0&&(l=0),o<0&&(o=0),"#"+t[a]+t[l]+t[o]}})(),Fn=function(e){Nt=!!e},In=function(){return Nt},Ln=function(e){Qt=e},Qi=function(){return Qt},Ul=function(e){se=e},Fr=function(){return se},ts=function(e){Ji=e},ki=function(){return Ji},zn=function(e){Ht=e},Bl=function(){return Ht};function at(t){return document.createElementNS(c,t)}function qs(t){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qs(t)}var Si=(function(){var t=1,e=[],s,a,l={onmessage:function(){},postMessage:function(E){s({data:E})}},o={postMessage:function(E){l.onmessage({data:E})}};function p(v){if(window.Worker&&window.Blob&&u()){var E=new Blob(["var _workerSelf = self; self.onmessage = ",v.toString()],{type:"text/javascript"}),C=URL.createObjectURL(E);return new Worker(C)}return s=v,l}function _(){a||(a=p(function(E){function C(){function L(N,b){var T,d,m=N.length,D,I,G,et;for(d=0;d<m;d+=1)if(T=N[d],"ks"in T&&!T.completed){if(T.completed=!0,T.hasMask){var st=T.masksProperties;for(I=st.length,D=0;D<I;D+=1)if(st[D].pt.k.i)S(st[D].pt.k);else for(et=st[D].pt.k.length,G=0;G<et;G+=1)st[D].pt.k[G].s&&S(st[D].pt.k[G].s[0]),st[D].pt.k[G].e&&S(st[D].pt.k[G].e[0])}T.ty===0?(T.layers=g(T.refId,b),L(T.layers,b)):T.ty===4?y(T.shapes):T.ty===5&&nt(T)}}function $(N,b){if(N){var T=0,d=N.length;for(T=0;T<d;T+=1)N[T].t===1&&(N[T].data.layers=g(N[T].data.refId,b),L(N[T].data.layers,b))}}function x(N,b){for(var T=0,d=b.length;T<d;){if(b[T].id===N)return b[T];T+=1}return null}function g(N,b){var T=x(N,b);return T?T.layers.__used?JSON.parse(JSON.stringify(T.layers)):(T.layers.__used=!0,T.layers):null}function y(N){var b,T=N.length,d,m;for(b=T-1;b>=0;b-=1)if(N[b].ty==="sh")if(N[b].ks.k.i)S(N[b].ks.k);else for(m=N[b].ks.k.length,d=0;d<m;d+=1)N[b].ks.k[d].s&&S(N[b].ks.k[d].s[0]),N[b].ks.k[d].e&&S(N[b].ks.k[d].e[0]);else N[b].ty==="gr"&&y(N[b].it)}function S(N){var b,T=N.i.length;for(b=0;b<T;b+=1)N.i[b][0]+=N.v[b][0],N.i[b][1]+=N.v[b][1],N.o[b][0]+=N.v[b][0],N.o[b][1]+=N.v[b][1]}function M(N,b){var T=b?b.split("."):[100,100,100];return N[0]>T[0]?!0:T[0]>N[0]?!1:N[1]>T[1]?!0:T[1]>N[1]?!1:N[2]>T[2]?!0:T[2]>N[2]?!1:null}var O=(function(){var N=[4,4,14];function b(d){var m=d.t.d;d.t.d={k:[{s:m,t:0}]}}function T(d){var m,D=d.length;for(m=0;m<D;m+=1)d[m].ty===5&&b(d[m])}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})(),V=(function(){var N=[4,7,99];return function(b){if(b.chars&&!M(N,b.v)){var T,d=b.chars.length;for(T=0;T<d;T+=1){var m=b.chars[T];m.data&&m.data.shapes&&(y(m.data.shapes),m.data.ip=0,m.data.op=99999,m.data.st=0,m.data.sr=1,m.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},b.chars[T].t||(m.data.shapes.push({ty:"no"}),m.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),j=(function(){var N=[5,7,15];function b(d){var m=d.t.p;typeof m.a=="number"&&(m.a={a:0,k:m.a}),typeof m.p=="number"&&(m.p={a:0,k:m.p}),typeof m.r=="number"&&(m.r={a:0,k:m.r})}function T(d){var m,D=d.length;for(m=0;m<D;m+=1)d[m].ty===5&&b(d[m])}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})(),it=(function(){var N=[4,1,9];function b(d){var m,D=d.length,I,G;for(m=0;m<D;m+=1)if(d[m].ty==="gr")b(d[m].it);else if(d[m].ty==="fl"||d[m].ty==="st")if(d[m].c.k&&d[m].c.k[0].i)for(G=d[m].c.k.length,I=0;I<G;I+=1)d[m].c.k[I].s&&(d[m].c.k[I].s[0]/=255,d[m].c.k[I].s[1]/=255,d[m].c.k[I].s[2]/=255,d[m].c.k[I].s[3]/=255),d[m].c.k[I].e&&(d[m].c.k[I].e[0]/=255,d[m].c.k[I].e[1]/=255,d[m].c.k[I].e[2]/=255,d[m].c.k[I].e[3]/=255);else d[m].c.k[0]/=255,d[m].c.k[1]/=255,d[m].c.k[2]/=255,d[m].c.k[3]/=255}function T(d){var m,D=d.length;for(m=0;m<D;m+=1)d[m].ty===4&&b(d[m].shapes)}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})(),Z=(function(){var N=[4,4,18];function b(d){var m,D=d.length,I,G;for(m=D-1;m>=0;m-=1)if(d[m].ty==="sh")if(d[m].ks.k.i)d[m].ks.k.c=d[m].closed;else for(G=d[m].ks.k.length,I=0;I<G;I+=1)d[m].ks.k[I].s&&(d[m].ks.k[I].s[0].c=d[m].closed),d[m].ks.k[I].e&&(d[m].ks.k[I].e[0].c=d[m].closed);else d[m].ty==="gr"&&b(d[m].it)}function T(d){var m,D,I=d.length,G,et,st,dt;for(D=0;D<I;D+=1){if(m=d[D],m.hasMask){var pt=m.masksProperties;for(et=pt.length,G=0;G<et;G+=1)if(pt[G].pt.k.i)pt[G].pt.k.c=pt[G].cl;else for(dt=pt[G].pt.k.length,st=0;st<dt;st+=1)pt[G].pt.k[st].s&&(pt[G].pt.k[st].s[0].c=pt[G].cl),pt[G].pt.k[st].e&&(pt[G].pt.k[st].e[0].c=pt[G].cl)}m.ty===4&&b(m.shapes)}}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})();function H(N){N.__complete||(it(N),O(N),V(N),j(N),Z(N),L(N.layers,N.assets),$(N.chars,N.assets),N.__complete=!0)}function nt(N){N.t.a.length===0&&"m"in N.t.p}var q={};return q.completeData=H,q.checkColors=it,q.checkChars=V,q.checkPathProperties=j,q.checkShapes=Z,q.completeLayers=L,q}if(o.dataManager||(o.dataManager=C()),o.assetLoader||(o.assetLoader=(function(){function L(x){var g=x.getResponseHeader("content-type");return g&&x.responseType==="json"&&g.indexOf("json")!==-1||x.response&&qs(x.response)==="object"?x.response:x.response&&typeof x.response=="string"?JSON.parse(x.response):x.responseText?JSON.parse(x.responseText):null}function $(x,g,y,S){var M,O=new XMLHttpRequest;try{O.responseType="json"}catch{}O.onreadystatechange=function(){if(O.readyState===4)if(O.status===200)M=L(O),y(M);else try{M=L(O),y(M)}catch(V){S&&S(V)}};try{O.open(["G","E","T"].join(""),x,!0)}catch{O.open(["G","E","T"].join(""),g+"/"+x,!0)}O.send()}return{load:$}})()),E.data.type==="loadAnimation")o.assetLoader.load(E.data.path,E.data.fullPath,function(L){o.dataManager.completeData(L),o.postMessage({id:E.data.id,payload:L,status:"success"})},function(){o.postMessage({id:E.data.id,status:"error"})});else if(E.data.type==="complete"){var P=E.data.animation;o.dataManager.completeData(P),o.postMessage({id:E.data.id,payload:P,status:"success"})}else E.data.type==="loadData"&&o.assetLoader.load(E.data.path,E.data.fullPath,function(L){o.postMessage({id:E.data.id,payload:L,status:"success"})},function(){o.postMessage({id:E.data.id,status:"error"})})}),a.onmessage=function(v){var E=v.data,C=E.id,P=e[C];e[C]=null,E.status==="success"?P.onComplete(E.payload):P.onError&&P.onError()})}function f(v,E){t+=1;var C="processId_"+t;return e[C]={onComplete:v,onError:E},C}function k(v,E,C){_();var P=f(E,C);a.postMessage({type:"loadAnimation",path:v,fullPath:window.location.origin+window.location.pathname,id:P})}function A(v,E,C){_();var P=f(E,C);a.postMessage({type:"loadData",path:v,fullPath:window.location.origin+window.location.pathname,id:P})}function R(v,E,C){_();var P=f(E,C);a.postMessage({type:"complete",animation:v,id:P})}return{loadAnimation:k,loadData:A,completeAnimation:R}})(),On=(function(){var t=(function(){var $=U("canvas");$.width=1,$.height=1;var x=$.getContext("2d");return x.fillStyle="rgba(0,0,0,0)",x.fillRect(0,0,1,1),$})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function a($,x,g){var y="";if($.e)y=$.p;else if(x){var S=$.p;S.indexOf("images/")!==-1&&(S=S.split("/")[1]),y=x+S}else y=g,y+=$.u?$.u:"",y+=$.p;return y}function l($){var x=0,g=setInterval(function(){var y=$.getBBox();(y.width||x>500)&&(this._imageLoaded(),clearInterval(g)),x+=1}.bind(this),50)}function o($){var x=a($,this.assetsPath,this.path),g=at("image");Zi?this.testImageLoaded(g):g.addEventListener("load",this._imageLoaded,!1),g.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),g.setAttributeNS("http://www.w3.org/1999/xlink","href",x),this._elementHelper.append?this._elementHelper.append(g):this._elementHelper.appendChild(g);var y={img:g,assetData:$};return y}function p($){var x=a($,this.assetsPath,this.path),g=U("img");g.crossOrigin="anonymous",g.addEventListener("load",this._imageLoaded,!1),g.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),g.src=x;var y={img:g,assetData:$};return y}function _($){var x={assetData:$},g=a($,this.assetsPath,this.path);return Si.loadData(g,function(y){x.img=y,this._footageLoaded()}.bind(this),function(){x.img={},this._footageLoaded()}.bind(this)),x}function f($,x){this.imagesLoadedCb=x;var g,y=$.length;for(g=0;g<y;g+=1)$[g].layers||(!$[g].t||$[g].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData($[g]))):$[g].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData($[g]))))}function k($){this.path=$||""}function A($){this.assetsPath=$||""}function R($){for(var x=0,g=this.images.length;x<g;){if(this.images[x].assetData===$)return this.images[x].img;x+=1}return null}function v(){this.imagesLoadedCb=null,this.images.length=0}function E(){return this.totalImages===this.loadedAssets}function C(){return this.totalFootages===this.loadedFootagesCount}function P($,x){$==="svg"?(this._elementHelper=x,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function L(){this._imageLoaded=e.bind(this),this._footageLoaded=s.bind(this),this.testImageLoaded=l.bind(this),this.createFootageData=_.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return L.prototype={loadAssets:f,setAssetsPath:A,setPath:k,loadedImages:E,loadedFootages:C,destroy:v,getAsset:R,createImgData:p,createImageData:o,imageLoaded:e,footageLoaded:s,setCacheType:P},L})();function Ir(){}Ir.prototype={triggerEvent:function(e,s){if(this._cbs[e])for(var a=this._cbs[e],l=0;l<a.length;l+=1)a[l](s)},addEventListener:function(e,s){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(s),function(){this.removeEventListener(e,s)}.bind(this)},removeEventListener:function(e,s){if(!s)this._cbs[e]=null;else if(this._cbs[e]){for(var a=0,l=this._cbs[e].length;a<l;)this._cbs[e][a]===s&&(this._cbs[e].splice(a,1),a-=1,l-=1),a+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var Rn=(function(){function t(e){for(var s=e.split(`\r
`),a={},l,o=0,p=0;p<s.length;p+=1)l=s[p].split(":"),l.length===2&&(a[l[0]]=l[1].trim(),o+=1);if(o===0)throw new Error;return a}return function(e){for(var s=[],a=0;a<e.length;a+=1){var l=e[a],o={time:l.tm,duration:l.dr};try{o.payload=JSON.parse(e[a].cm)}catch{try{o.payload=t(e[a].cm)}catch{o.payload={name:e[a].cm}}}s.push(o)}return s}})(),Dn=(function(){function t(e){this.compositions.push(e)}return function(){function e(s){for(var a=0,l=this.compositions.length;a<l;){if(this.compositions[a].data&&this.compositions[a].data.nm===s)return this.compositions[a].prepareFrame&&this.compositions[a].data.xt&&this.compositions[a].prepareFrame(this.currentFrame),this.compositions[a].compInterface;a+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}})(),$i={},Vn=function(e,s){$i[e]=s};function Un(t){return $i[t]}function Bn(){if($i.canvas)return"canvas";for(var t in $i)if($i[t])return t;return""}function es(t){"@babel/helpers - typeof";return es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},es(t)}var Q=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Rt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=In(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=Dn(),this.imagePreloader=new On,this.audioController=rt(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new Be("drawnFrame",0,0,0),this.expressionsPlugin=Qi()};B([Ir],Q),Q.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var s=Un(e);this.renderer=new s(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),Si.loadAnimation(t.path,this.configAnimation,this.onSetupError))},Q.prototype.onSetupError=function(){this.trigger("data_failed")},Q.prototype.setupAnimation=function(t){Si.completeAnimation(t,this.configAnimation)},Q.prototype.setData=function(t,e){e&&es(e)!=="object"&&(e=JSON.parse(e));var s={wrapper:t,animationData:e},a=t.attributes;s.path=a.getNamedItem("data-animation-path")?a.getNamedItem("data-animation-path").value:a.getNamedItem("data-bm-path")?a.getNamedItem("data-bm-path").value:a.getNamedItem("bm-path")?a.getNamedItem("bm-path").value:"",s.animType=a.getNamedItem("data-anim-type")?a.getNamedItem("data-anim-type").value:a.getNamedItem("data-bm-type")?a.getNamedItem("data-bm-type").value:a.getNamedItem("bm-type")?a.getNamedItem("bm-type").value:a.getNamedItem("data-bm-renderer")?a.getNamedItem("data-bm-renderer").value:a.getNamedItem("bm-renderer")?a.getNamedItem("bm-renderer").value:Bn()||"canvas";var l=a.getNamedItem("data-anim-loop")?a.getNamedItem("data-anim-loop").value:a.getNamedItem("data-bm-loop")?a.getNamedItem("data-bm-loop").value:a.getNamedItem("bm-loop")?a.getNamedItem("bm-loop").value:"";l==="false"?s.loop=!1:l==="true"?s.loop=!0:l!==""&&(s.loop=parseInt(l,10));var o=a.getNamedItem("data-anim-autoplay")?a.getNamedItem("data-anim-autoplay").value:a.getNamedItem("data-bm-autoplay")?a.getNamedItem("data-bm-autoplay").value:a.getNamedItem("bm-autoplay")?a.getNamedItem("bm-autoplay").value:!0;s.autoplay=o!=="false",s.name=a.getNamedItem("data-name")?a.getNamedItem("data-name").value:a.getNamedItem("data-bm-name")?a.getNamedItem("data-bm-name").value:a.getNamedItem("bm-name")?a.getNamedItem("bm-name").value:"";var p=a.getNamedItem("data-anim-prerender")?a.getNamedItem("data-anim-prerender").value:a.getNamedItem("data-bm-prerender")?a.getNamedItem("data-bm-prerender").value:a.getNamedItem("bm-prerender")?a.getNamedItem("bm-prerender").value:"";p==="false"&&(s.prerender=!1),s.path?this.setParams(s):this.trigger("destroy")},Q.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,s,a=e.length,l=t.layers,o,p=l.length;for(o=0;o<p;o+=1)for(s=0;s<a;){if(e[s].id===l[o].id){e[s]=l[o];break}s+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(a=t.assets.length,s=0;s<a;s+=1)this.animationData.assets.push(t.assets[s]);this.animationData.__complete=!1,Si.completeAnimation(this.animationData,this.onSegmentComplete)},Q.prototype.onSegmentComplete=function(t){this.animationData=t;var e=Qi();e&&e.initExpressions(this),this.loadNextSegment()},Q.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var s=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,Si.loadData(s,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},Q.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},Q.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},Q.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},Q.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=Rn(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},Q.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},Q.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=Qi();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},Q.prototype.resize=function(t,e){var s=typeof t=="number"?t:void 0,a=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(s,a)},Q.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},Q.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},Q.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},Q.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},Q.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},Q.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},Q.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},Q.prototype.getMarkerData=function(t){for(var e,s=0;s<this.markers.length;s+=1)if(e=this.markers[s],e.payload&&e.payload.name===t)return e;return null},Q.prototype.goToAndStop=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var l=this.getMarkerData(t);l&&this.goToAndStop(l.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},Q.prototype.goToAndPlay=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var l=this.getMarkerData(t);l&&(l.duration?this.playSegments([l.time,l.time+l.duration],!0):this.goToAndStop(l.time,!0))}else this.goToAndStop(a,e,s);this.play()}},Q.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,s=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(s=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(s=!0,e=0)):this.setCurrentRawFrameValue(e),s&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},Q.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},Q.prototype.setSegment=function(t,e){var s=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?s=t:this.currentRawFrame+this.firstFrame>e&&(s=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,s!==-1&&this.goToAndStop(s,!0)},Q.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),es(t[0])==="object"){var s,a=t.length;for(s=0;s<a;s+=1)this.segments.push(t[s])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},Q.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},Q.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},Q.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},Q.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},Q.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},Q.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},Q.prototype.setLoop=function(t){this.loop=t},Q.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},Q.prototype.getVolume=function(){return this.audioController.getVolume()},Q.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},Q.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},Q.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},Q.prototype.getPath=function(){return this.path},Q.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var s=t.p;s.indexOf("images/")!==-1&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},Q.prototype.getAssetData=function(t){for(var e=0,s=this.assets.length;e<s;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},Q.prototype.hide=function(){this.renderer.hide()},Q.prototype.show=function(){this.renderer.show()},Q.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},Q.prototype.updateDocumentData=function(t,e,s){try{var a=this.renderer.getElementByPath(t);a.updateDocumentData(e,s)}catch{}},Q.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new Be(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new je(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new Ne(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new ri(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new Pr(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Be(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new je(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new Ne(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new ri(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new Pr(t,this))},Q.prototype.triggerRenderFrameError=function(t){var e=new Cn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},Q.prototype.triggerConfigError=function(t){var e=new Mn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var bt=(function(){var t={},e=[],s=0,a=0,l=0,o=!0,p=!1;function _(b){for(var T=0,d=b.target;T<a;)e[T].animation===d&&(e.splice(T,1),T-=1,a-=1,d.isPaused||R()),T+=1}function f(b,T){if(!b)return null;for(var d=0;d<a;){if(e[d].elem===b&&e[d].elem!==null)return e[d].animation;d+=1}var m=new Q;return v(m,b),m.setData(b,T),m}function k(){var b,T=e.length,d=[];for(b=0;b<T;b+=1)d.push(e[b].animation);return d}function A(){l+=1,it()}function R(){l-=1}function v(b,T){b.addEventListener("destroy",_),b.addEventListener("_active",A),b.addEventListener("_idle",R),e.push({elem:T,animation:b}),a+=1}function E(b){var T=new Q;return v(T,null),T.setParams(b),T}function C(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setSpeed(b,T)}function P(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setDirection(b,T)}function L(b){var T;for(T=0;T<a;T+=1)e[T].animation.play(b)}function $(b){var T=b-s,d;for(d=0;d<a;d+=1)e[d].animation.advanceTime(T);s=b,l&&!p?window.requestAnimationFrame($):o=!0}function x(b){s=b,window.requestAnimationFrame($)}function g(b){var T;for(T=0;T<a;T+=1)e[T].animation.pause(b)}function y(b,T,d){var m;for(m=0;m<a;m+=1)e[m].animation.goToAndStop(b,T,d)}function S(b){var T;for(T=0;T<a;T+=1)e[T].animation.stop(b)}function M(b){var T;for(T=0;T<a;T+=1)e[T].animation.togglePause(b)}function O(b){var T;for(T=a-1;T>=0;T-=1)e[T].animation.destroy(b)}function V(b,T,d){var m=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),D,I=m.length;for(D=0;D<I;D+=1)d&&m[D].setAttribute("data-bm-type",d),f(m[D],b);if(T&&I===0){d||(d="svg");var G=document.getElementsByTagName("body")[0];G.innerText="";var et=U("div");et.style.width="100%",et.style.height="100%",et.setAttribute("data-bm-type",d),G.appendChild(et),f(et,b)}}function j(){var b;for(b=0;b<a;b+=1)e[b].animation.resize()}function it(){!p&&l&&o&&(window.requestAnimationFrame(x),o=!1)}function Z(){p=!0}function H(){p=!1,it()}function nt(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setVolume(b,T)}function q(b){var T;for(T=0;T<a;T+=1)e[T].animation.mute(b)}function N(b){var T;for(T=0;T<a;T+=1)e[T].animation.unmute(b)}return t.registerAnimation=f,t.loadAnimation=E,t.setSpeed=C,t.setDirection=P,t.play=L,t.pause=g,t.stop=S,t.togglePause=M,t.searchAnimations=V,t.resize=j,t.goToAndStop=y,t.destroy=O,t.freeze=Z,t.unfreeze=H,t.setVolume=nt,t.mute=q,t.unmute=N,t.getRegisteredAnimations=k,t})(),Ai=(function(){var t={};t.getBezierEasing=s;var e={};function s(x,g,y,S,M){var O=M||("bez_"+x+"_"+g+"_"+y+"_"+S).replace(/\./g,"p");if(e[O])return e[O];var V=new $([x,g,y,S]);return e[O]=V,V}var a=4,l=.001,o=1e-7,p=10,_=11,f=1/(_-1),k=typeof Float32Array=="function";function A(x,g){return 1-3*g+3*x}function R(x,g){return 3*g-6*x}function v(x){return 3*x}function E(x,g,y){return((A(g,y)*x+R(g,y))*x+v(g))*x}function C(x,g,y){return 3*A(g,y)*x*x+2*R(g,y)*x+v(g)}function P(x,g,y,S,M){var O,V,j=0;do V=g+(y-g)/2,O=E(V,S,M)-x,O>0?y=V:g=V;while(Math.abs(O)>o&&++j<p);return V}function L(x,g,y,S){for(var M=0;M<a;++M){var O=C(g,y,S);if(O===0)return g;var V=E(g,y,S)-x;g-=V/O}return g}function $(x){this._p=x,this._mSampleValues=k?new Float32Array(_):new Array(_),this._precomputed=!1,this.get=this.get.bind(this)}return $.prototype={get:function(g){var y=this._p[0],S=this._p[1],M=this._p[2],O=this._p[3];return this._precomputed||this._precompute(),y===S&&M===O?g:g===0?0:g===1?1:E(this._getTForX(g),S,O)},_precompute:function(){var g=this._p[0],y=this._p[1],S=this._p[2],M=this._p[3];this._precomputed=!0,(g!==y||S!==M)&&this._calcSampleValues()},_calcSampleValues:function(){for(var g=this._p[0],y=this._p[2],S=0;S<_;++S)this._mSampleValues[S]=E(S*f,g,y)},_getTForX:function(g){for(var y=this._p[0],S=this._p[2],M=this._mSampleValues,O=0,V=1,j=_-1;V!==j&&M[V]<=g;++V)O+=f;--V;var it=(g-M[V])/(M[V+1]-M[V]),Z=O+it*f,H=C(Z,y,S);return H>=l?L(g,Z,y,S):H===0?Z:P(g,O,O+f,y,S)}},t})(),Lr=(function(){function t(e){return e.concat(ct(e.length))}return{double:t}})(),is=(function(){return function(t,e,s){var a=0,l=t,o=ct(l),p={newElement:_,release:f};function _(){var k;return a?(a-=1,k=o[a]):k=e(),k}function f(k){a===l&&(o=Lr.double(o),l*=2),s&&s(k),o[a]=k,a+=1}return p}})(),zr=(function(){function t(){return{addedLength:0,percents:ot("float32",ki()),lengths:ot("float32",ki())}}return is(8,t)})(),Or=(function(){function t(){return{lengths:[],totalLength:0}}function e(s){var a,l=s.lengths.length;for(a=0;a<l;a+=1)zr.release(s.lengths[a]);s.lengths.length=0}return is(8,t,e)})();function Nn(){var t=Math;function e(v,E,C,P,L,$){var x=v*P+E*L+C*$-L*P-$*v-C*E;return x>-.001&&x<.001}function s(v,E,C,P,L,$,x,g,y){if(C===0&&$===0&&y===0)return e(v,E,P,L,x,g);var S=t.sqrt(t.pow(P-v,2)+t.pow(L-E,2)+t.pow($-C,2)),M=t.sqrt(t.pow(x-v,2)+t.pow(g-E,2)+t.pow(y-C,2)),O=t.sqrt(t.pow(x-P,2)+t.pow(g-L,2)+t.pow(y-$,2)),V;return S>M?S>O?V=S-M-O:V=O-M-S:O>M?V=O-M-S:V=M-S-O,V>-1e-4&&V<1e-4}var a=(function(){return function(v,E,C,P){var L=ki(),$,x,g,y,S,M=0,O,V=[],j=[],it=zr.newElement();for(g=C.length,$=0;$<L;$+=1){for(S=$/(L-1),O=0,x=0;x<g;x+=1)y=Lt(1-S,3)*v[x]+3*Lt(1-S,2)*S*C[x]+3*(1-S)*Lt(S,2)*P[x]+Lt(S,3)*E[x],V[x]=y,j[x]!==null&&(O+=Lt(V[x]-j[x],2)),j[x]=V[x];O&&(O=ii(O),M+=O),it.percents[$]=S,it.lengths[$]=M}return it.addedLength=M,it}})();function l(v){var E=Or.newElement(),C=v.c,P=v.v,L=v.o,$=v.i,x,g=v._length,y=E.lengths,S=0;for(x=0;x<g-1;x+=1)y[x]=a(P[x],P[x+1],L[x],$[x+1]),S+=y[x].addedLength;return C&&g&&(y[x]=a(P[x],P[0],L[x],$[0]),S+=y[x].addedLength),E.totalLength=S,E}function o(v){this.segmentLength=0,this.points=new Array(v)}function p(v,E){this.partialLength=v,this.point=E}var _=(function(){var v={};return function(E,C,P,L){var $=(E[0]+"_"+E[1]+"_"+C[0]+"_"+C[1]+"_"+P[0]+"_"+P[1]+"_"+L[0]+"_"+L[1]).replace(/\./g,"p");if(!v[$]){var x=ki(),g,y,S,M,O,V=0,j,it,Z=null;E.length===2&&(E[0]!==C[0]||E[1]!==C[1])&&e(E[0],E[1],C[0],C[1],E[0]+P[0],E[1]+P[1])&&e(E[0],E[1],C[0],C[1],C[0]+L[0],C[1]+L[1])&&(x=2);var H=new o(x);for(S=P.length,g=0;g<x;g+=1){for(it=ct(S),O=g/(x-1),j=0,y=0;y<S;y+=1)M=Lt(1-O,3)*E[y]+3*Lt(1-O,2)*O*(E[y]+P[y])+3*(1-O)*Lt(O,2)*(C[y]+L[y])+Lt(O,3)*C[y],it[y]=M,Z!==null&&(j+=Lt(it[y]-Z[y],2));j=ii(j),V+=j,H.points[g]=new p(j,it),Z=it}H.segmentLength=V,v[$]=H}return v[$]}})();function f(v,E){var C=E.percents,P=E.lengths,L=C.length,$=re((L-1)*v),x=v*E.addedLength,g=0;if($===L-1||$===0||x===P[$])return C[$];for(var y=P[$]>x?-1:1,S=!0;S;)if(P[$]<=x&&P[$+1]>x?(g=(x-P[$])/(P[$+1]-P[$]),S=!1):$+=y,$<0||$>=L-1){if($===L-1)return C[$];S=!1}return C[$]+(C[$+1]-C[$])*g}function k(v,E,C,P,L,$){var x=f(L,$),g=1-x,y=t.round((g*g*g*v[0]+(x*g*g+g*x*g+g*g*x)*C[0]+(x*x*g+g*x*x+x*g*x)*P[0]+x*x*x*E[0])*1e3)/1e3,S=t.round((g*g*g*v[1]+(x*g*g+g*x*g+g*g*x)*C[1]+(x*x*g+g*x*x+x*g*x)*P[1]+x*x*x*E[1])*1e3)/1e3;return[y,S]}var A=ot("float32",8);function R(v,E,C,P,L,$,x){L<0?L=0:L>1&&(L=1);var g=f(L,x);$=$>1?1:$;var y=f($,x),S,M=v.length,O=1-g,V=1-y,j=O*O*O,it=g*O*O*3,Z=g*g*O*3,H=g*g*g,nt=O*O*V,q=g*O*V+O*g*V+O*O*y,N=g*g*V+O*g*y+g*O*y,b=g*g*y,T=O*V*V,d=g*V*V+O*y*V+O*V*y,m=g*y*V+O*y*y+g*V*y,D=g*y*y,I=V*V*V,G=y*V*V+V*y*V+V*V*y,et=y*y*V+V*y*y+y*V*y,st=y*y*y;for(S=0;S<M;S+=1)A[S*4]=t.round((j*v[S]+it*C[S]+Z*P[S]+H*E[S])*1e3)/1e3,A[S*4+1]=t.round((nt*v[S]+q*C[S]+N*P[S]+b*E[S])*1e3)/1e3,A[S*4+2]=t.round((T*v[S]+d*C[S]+m*P[S]+D*E[S])*1e3)/1e3,A[S*4+3]=t.round((I*v[S]+G*C[S]+et*P[S]+st*E[S])*1e3)/1e3;return A}return{getSegmentsLength:l,getNewSegment:R,getPointInSegment:k,buildBezierData:_,pointOnLine2D:e,pointOnLine3D:s}}var ae=Nn(),He=n,Rr=Math.abs;function Dr(t,e){var s=this.offsetTime,a;this.propType==="multidimensional"&&(a=ot("float32",this.pv.length));for(var l=e.lastIndex,o=l,p=this.keyframes.length-1,_=!0,f,k,A;_;){if(f=this.keyframes[o],k=this.keyframes[o+1],o===p-1&&t>=k.t-s){f.h&&(f=k),l=0;break}if(k.t-s>t){l=o;break}o<p-1?o+=1:(l=0,_=!1)}A=this.keyframesMetadata[o]||{};var R,v,E,C,P,L,$=k.t-s,x=f.t-s,g;if(f.to){A.bezierData||(A.bezierData=ae.buildBezierData(f.s,k.s||f.e,f.to,f.ti));var y=A.bezierData;if(t>=$||t<x){var S=t>=$?y.points.length-1:0;for(v=y.points[S].point.length,R=0;R<v;R+=1)a[R]=y.points[S].point[R]}else{A.__fnct?L=A.__fnct:(L=Ai.getBezierEasing(f.o.x,f.o.y,f.i.x,f.i.y,f.n).get,A.__fnct=L),E=L((t-x)/($-x));var M=y.segmentLength*E,O,V=e.lastFrame<t&&e._lastKeyframeIndex===o?e._lastAddedLength:0;for(P=e.lastFrame<t&&e._lastKeyframeIndex===o?e._lastPoint:0,_=!0,C=y.points.length;_;){if(V+=y.points[P].partialLength,M===0||E===0||P===y.points.length-1){for(v=y.points[P].point.length,R=0;R<v;R+=1)a[R]=y.points[P].point[R];break}else if(M>=V&&M<V+y.points[P+1].partialLength){for(O=(M-V)/y.points[P+1].partialLength,v=y.points[P].point.length,R=0;R<v;R+=1)a[R]=y.points[P].point[R]+(y.points[P+1].point[R]-y.points[P].point[R])*O;break}P<C-1?P+=1:_=!1}e._lastPoint=P,e._lastAddedLength=V-y.points[P].partialLength,e._lastKeyframeIndex=o}}else{var j,it,Z,H,nt;if(p=f.s.length,g=k.s||f.e,this.sh&&f.h!==1)if(t>=$)a[0]=g[0],a[1]=g[1],a[2]=g[2];else if(t<=x)a[0]=f.s[0],a[1]=f.s[1],a[2]=f.s[2];else{var q=Vr(f.s),N=Vr(g),b=(t-x)/($-x);Hn(a,jn(q,N,b))}else for(o=0;o<p;o+=1)f.h!==1&&(t>=$?E=1:t<x?E=0:(f.o.x.constructor===Array?(A.__fnct||(A.__fnct=[]),A.__fnct[o]?L=A.__fnct[o]:(j=f.o.x[o]===void 0?f.o.x[0]:f.o.x[o],it=f.o.y[o]===void 0?f.o.y[0]:f.o.y[o],Z=f.i.x[o]===void 0?f.i.x[0]:f.i.x[o],H=f.i.y[o]===void 0?f.i.y[0]:f.i.y[o],L=Ai.getBezierEasing(j,it,Z,H).get,A.__fnct[o]=L)):A.__fnct?L=A.__fnct:(j=f.o.x,it=f.o.y,Z=f.i.x,H=f.i.y,L=Ai.getBezierEasing(j,it,Z,H).get,f.keyframeMetadata=L),E=L((t-x)/($-x)))),g=k.s||f.e,nt=f.h===1?f.s[o]:f.s[o]+(g[o]-f.s[o])*E,this.propType==="multidimensional"?a[o]=nt:a=nt}return e.lastIndex=l,a}function jn(t,e,s){var a=[],l=t[0],o=t[1],p=t[2],_=t[3],f=e[0],k=e[1],A=e[2],R=e[3],v,E,C,P,L;return E=l*f+o*k+p*A+_*R,E<0&&(E=-E,f=-f,k=-k,A=-A,R=-R),1-E>1e-6?(v=Math.acos(E),C=Math.sin(v),P=Math.sin((1-s)*v)/C,L=Math.sin(s*v)/C):(P=1-s,L=s),a[0]=P*l+L*f,a[1]=P*o+L*k,a[2]=P*p+L*A,a[3]=P*_+L*R,a}function Hn(t,e){var s=e[0],a=e[1],l=e[2],o=e[3],p=Math.atan2(2*a*o-2*s*l,1-2*a*a-2*l*l),_=Math.asin(2*s*a+2*l*o),f=Math.atan2(2*s*o-2*a*l,1-2*s*s-2*l*l);t[0]=p/gt,t[1]=_/gt,t[2]=f/gt}function Vr(t){var e=t[0]*gt,s=t[1]*gt,a=t[2]*gt,l=Math.cos(e/2),o=Math.cos(s/2),p=Math.cos(a/2),_=Math.sin(e/2),f=Math.sin(s/2),k=Math.sin(a/2),A=l*o*p-_*f*k,R=_*f*p+l*o*k,v=_*o*p+l*f*k,E=l*f*p-_*o*k;return[R,v,E,A]}function Ur(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==He&&(this._caching.lastFrame>=s&&t>=s||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var a=this.interpolateValue(t,this._caching);this.pv=a}return this._caching.lastFrame=t,this.pv}function ss(t){var e;if(this.propType==="unidimensional")e=t*this.mult,Rr(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var s=0,a=this.v.length;s<a;)e=t[s]*this.mult,Rr(this.v[s]-e)>1e-5&&(this.v[s]=e,this._mdf=!0),s+=1}function rs(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,s=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)s=this.effectsSequence[t](s);this.setVValue(s),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function as(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function Wn(t,e,s,a){this.propType="unidimensional",this.mult=s||1,this.data=e,this.v=s?e.k*s:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=rs,this.setVValue=ss,this.addEffect=as}function Gn(t,e,s,a){this.propType="multidimensional",this.mult=s||1,this.data=e,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var l,o=e.k.length;for(this.v=ot("float32",o),this.pv=ot("float32",o),this.vel=ot("float32",o),l=0;l<o;l+=1)this.v[l]=e.k[l]*this.mult,this.pv[l]=e.k[l];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=rs,this.setVValue=ss,this.addEffect=as}function qn(t,e,s,a){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:He,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.v=He,this.pv=He,this._isFirstFrame=!0,this.getValue=rs,this.setVValue=ss,this.interpolateValue=Dr,this.effectsSequence=[Ur.bind(this)],this.addEffect=as}function Yn(t,e,s,a){this.propType="multidimensional";var l,o=e.k.length,p,_,f,k;for(l=0;l<o-1;l+=1)e.k[l].to&&e.k[l].s&&e.k[l+1]&&e.k[l+1].s&&(p=e.k[l].s,_=e.k[l+1].s,f=e.k[l].to,k=e.k[l].ti,(p.length===2&&!(p[0]===_[0]&&p[1]===_[1])&&ae.pointOnLine2D(p[0],p[1],_[0],_[1],p[0]+f[0],p[1]+f[1])&&ae.pointOnLine2D(p[0],p[1],_[0],_[1],_[0]+k[0],_[1]+k[1])||p.length===3&&!(p[0]===_[0]&&p[1]===_[1]&&p[2]===_[2])&&ae.pointOnLine3D(p[0],p[1],p[2],_[0],_[1],_[2],p[0]+f[0],p[1]+f[1],p[2]+f[2])&&ae.pointOnLine3D(p[0],p[1],p[2],_[0],_[1],_[2],_[0]+k[0],_[1]+k[1],_[2]+k[2]))&&(e.k[l].to=null,e.k[l].ti=null),p[0]===_[0]&&p[1]===_[1]&&f[0]===0&&f[1]===0&&k[0]===0&&k[1]===0&&(p.length===2||p[2]===_[2]&&f[2]===0&&k[2]===0)&&(e.k[l].to=null,e.k[l].ti=null));this.effectsSequence=[Ur.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.getValue=rs,this.setVValue=ss,this.interpolateValue=Dr,this.frameId=-1;var A=e.k[0].s.length;for(this.v=ot("float32",A),this.pv=ot("float32",A),l=0;l<A;l+=1)this.v[l]=He,this.pv[l]=He;this._caching={lastFrame:He,lastIndex:0,value:ot("float32",A)},this.addEffect=as}var W=(function(){function t(s,a,l,o,p){a.sid&&(a=s.globalData.slotManager.getProp(a));var _;if(!a.k.length)_=new Wn(s,a,o,p);else if(typeof a.k[0]=="number")_=new Gn(s,a,o,p);else switch(l){case 0:_=new qn(s,a,o,p);break;case 1:_=new Yn(s,a,o,p);break;default:break}return _.effectsSequence.length&&p.addDynamicProperty(_),_}var e={getProp:t};return e})();function At(){}At.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,s=this.dynamicProperties.length;for(e=0;e<s;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var We=(function(){function t(){return ot("float32",2)}return is(8,t)})();function fe(){this.c=!1,this._length=0,this._maxLength=8,this.v=ct(this._maxLength),this.o=ct(this._maxLength),this.i=ct(this._maxLength)}fe.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var s=0;s<e;)this.v[s]=We.newElement(),this.o[s]=We.newElement(),this.i[s]=We.newElement(),s+=1},fe.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},fe.prototype.doubleArrayLength=function(){this.v=this.v.concat(ct(this._maxLength)),this.i=this.i.concat(ct(this._maxLength)),this.o=this.o.concat(ct(this._maxLength)),this._maxLength*=2},fe.prototype.setXYAt=function(t,e,s,a,l){var o;switch(this._length=Math.max(this._length,a+1),this._length>=this._maxLength&&this.doubleArrayLength(),s){case"v":o=this.v;break;case"i":o=this.i;break;case"o":o=this.o;break;default:o=[];break}(!o[a]||o[a]&&!l)&&(o[a]=We.newElement()),o[a][0]=t,o[a][1]=e},fe.prototype.setTripleAt=function(t,e,s,a,l,o,p,_){this.setXYAt(t,e,"v",p,_),this.setXYAt(s,a,"o",p,_),this.setXYAt(l,o,"i",p,_)},fe.prototype.reverse=function(){var t=new fe;t.setPathData(this.c,this._length);var e=this.v,s=this.o,a=this.i,l=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],a[0][0],a[0][1],s[0][0],s[0][1],0,!1),l=1);var o=this._length-1,p=this._length,_;for(_=l;_<p;_+=1)t.setTripleAt(e[o][0],e[o][1],a[o][0],a[o][1],s[o][0],s[o][1],_,!1),o-=1;return t},fe.prototype.length=function(){return this._length};var Tt=(function(){function t(){return new fe}function e(l){var o=l._length,p;for(p=0;p<o;p+=1)We.release(l.v[p]),We.release(l.i[p]),We.release(l.o[p]),l.v[p]=null,l.i[p]=null,l.o[p]=null;l._length=0,l.c=!1}function s(l){var o=a.newElement(),p,_=l._length===void 0?l.v.length:l._length;for(o.setLength(_),o.c=l.c,p=0;p<_;p+=1)o.setTripleAt(l.v[p][0],l.v[p][1],l.o[p][0],l.o[p][1],l.i[p][0],l.i[p][1],p);return o}var a=is(4,t,e);return a.clone=s,a})();function Ys(){this._length=0,this._maxLength=4,this.shapes=ct(this._maxLength)}Ys.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(ct(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},Ys.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)Tt.release(this.shapes[t]);this._length=0};var ai=(function(){var t={newShapeCollection:l,release:o},e=0,s=4,a=ct(s);function l(){var p;return e?(e-=1,p=a[e]):p=new Ys,p}function o(p){var _,f=p._length;for(_=0;_<f;_+=1)Tt.release(p.shapes[_]);p._length=0,e===s&&(a=Lr.double(a),s*=2),a[e]=p,e+=1}return t})(),ns=(function(){var t=-999999;function e($,x,g){var y=g.lastIndex,S,M,O,V,j,it,Z,H,nt,q=this.keyframes;if($<q[0].t-this.offsetTime)S=q[0].s[0],O=!0,y=0;else if($>=q[q.length-1].t-this.offsetTime)S=q[q.length-1].s?q[q.length-1].s[0]:q[q.length-2].e[0],O=!0;else{for(var N=y,b=q.length-1,T=!0,d,m,D;T&&(d=q[N],m=q[N+1],!(m.t-this.offsetTime>$));)N<b-1?N+=1:T=!1;if(D=this.keyframesMetadata[N]||{},O=d.h===1,y=N,!O){if($>=m.t-this.offsetTime)H=1;else if($<d.t-this.offsetTime)H=0;else{var I;D.__fnct?I=D.__fnct:(I=Ai.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,D.__fnct=I),H=I(($-(d.t-this.offsetTime))/(m.t-this.offsetTime-(d.t-this.offsetTime)))}M=m.s?m.s[0]:d.e[0]}S=d.s[0]}for(it=x._length,Z=S.i[0].length,g.lastIndex=y,V=0;V<it;V+=1)for(j=0;j<Z;j+=1)nt=O?S.i[V][j]:S.i[V][j]+(M.i[V][j]-S.i[V][j])*H,x.i[V][j]=nt,nt=O?S.o[V][j]:S.o[V][j]+(M.o[V][j]-S.o[V][j])*H,x.o[V][j]=nt,nt=O?S.v[V][j]:S.v[V][j]+(M.v[V][j]-S.v[V][j])*H,x.v[V][j]=nt}function s(){var $=this.comp.renderedFrame-this.offsetTime,x=this.keyframes[0].t-this.offsetTime,g=this.keyframes[this.keyframes.length-1].t-this.offsetTime,y=this._caching.lastFrame;return y!==t&&(y<x&&$<x||y>g&&$>g)||(this._caching.lastIndex=y<$?this._caching.lastIndex:0,this.interpolateShape($,this.pv,this._caching)),this._caching.lastFrame=$,this.pv}function a(){this.paths=this.localShapeCollection}function l($,x){if($._length!==x._length||$.c!==x.c)return!1;var g,y=$._length;for(g=0;g<y;g+=1)if($.v[g][0]!==x.v[g][0]||$.v[g][1]!==x.v[g][1]||$.o[g][0]!==x.o[g][0]||$.o[g][1]!==x.o[g][1]||$.i[g][0]!==x.i[g][0]||$.i[g][1]!==x.i[g][1])return!1;return!0}function o($){l(this.v,$)||(this.v=Tt.clone($),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function p(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var $;this.kf?$=this.pv:this.data.ks?$=this.data.ks.k:$=this.data.pt.k;var x,g=this.effectsSequence.length;for(x=0;x<g;x+=1)$=this.effectsSequence[x]($);this.setVValue($),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function _($,x,g){this.propType="shape",this.comp=$.comp,this.container=$,this.elem=$,this.data=x,this.k=!1,this.kf=!1,this._mdf=!1;var y=g===3?x.pt.k:x.ks.k;this.v=Tt.clone(y),this.pv=Tt.clone(this.v),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=a,this.effectsSequence=[]}function f($){this.effectsSequence.push($),this.container.addDynamicProperty(this)}_.prototype.interpolateShape=e,_.prototype.getValue=p,_.prototype.setVValue=o,_.prototype.addEffect=f;function k($,x,g){this.propType="shape",this.comp=$.comp,this.elem=$,this.container=$,this.offsetTime=$.data.st,this.keyframes=g===3?x.pt.k:x.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var y=this.keyframes[0].s[0].i.length;this.v=Tt.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,y),this.pv=Tt.clone(this.v),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=a,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[s.bind(this)]}k.prototype.getValue=p,k.prototype.interpolateShape=e,k.prototype.setVValue=o,k.prototype.addEffect=f;var A=(function(){var $=J;function x(g,y){this.v=Tt.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=y.d,this.elem=g,this.comp=g.comp,this.frameId=-1,this.initDynamicPropertyContainer(g),this.p=W.getProp(g,y.p,1,0,this),this.s=W.getProp(g,y.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return x.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var y=this.p.v[0],S=this.p.v[1],M=this.s.v[0]/2,O=this.s.v[1]/2,V=this.d!==3,j=this.v;j.v[0][0]=y,j.v[0][1]=S-O,j.v[1][0]=V?y+M:y-M,j.v[1][1]=S,j.v[2][0]=y,j.v[2][1]=S+O,j.v[3][0]=V?y-M:y+M,j.v[3][1]=S,j.i[0][0]=V?y-M*$:y+M*$,j.i[0][1]=S-O,j.i[1][0]=V?y+M:y-M,j.i[1][1]=S-O*$,j.i[2][0]=V?y+M*$:y-M*$,j.i[2][1]=S+O,j.i[3][0]=V?y-M:y+M,j.i[3][1]=S+O*$,j.o[0][0]=V?y+M*$:y-M*$,j.o[0][1]=S-O,j.o[1][0]=V?y+M:y-M,j.o[1][1]=S+O*$,j.o[2][0]=V?y-M*$:y+M*$,j.o[2][1]=S+O,j.o[3][0]=V?y-M:y+M,j.o[3][1]=S-O*$}},B([At],x),x})(),R=(function(){function $(x,g){this.v=Tt.newElement(),this.v.setPathData(!0,0),this.elem=x,this.comp=x.comp,this.data=g,this.frameId=-1,this.d=g.d,this.initDynamicPropertyContainer(x),g.sy===1?(this.ir=W.getProp(x,g.ir,0,0,this),this.is=W.getProp(x,g.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=W.getProp(x,g.pt,0,0,this),this.p=W.getProp(x,g.p,1,0,this),this.r=W.getProp(x,g.r,0,gt,this),this.or=W.getProp(x,g.or,0,0,this),this.os=W.getProp(x,g.os,0,.01,this),this.localShapeCollection=ai.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return $.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var g=Math.floor(this.pt.v)*2,y=Math.PI*2/g,S=!0,M=this.or.v,O=this.ir.v,V=this.os.v,j=this.is.v,it=2*Math.PI*M/(g*2),Z=2*Math.PI*O/(g*2),H,nt,q,N,b=-Math.PI/2;b+=this.r.v;var T=this.data.d===3?-1:1;for(this.v._length=0,H=0;H<g;H+=1){nt=S?M:O,q=S?V:j,N=S?it:Z;var d=nt*Math.cos(b),m=nt*Math.sin(b),D=d===0&&m===0?0:m/Math.sqrt(d*d+m*m),I=d===0&&m===0?0:-d/Math.sqrt(d*d+m*m);d+=+this.p.v[0],m+=+this.p.v[1],this.v.setTripleAt(d,m,d-D*N*q*T,m-I*N*q*T,d+D*N*q*T,m+I*N*q*T,H,!0),S=!S,b+=y*T}},convertPolygonToPath:function(){var g=Math.floor(this.pt.v),y=Math.PI*2/g,S=this.or.v,M=this.os.v,O=2*Math.PI*S/(g*4),V,j=-Math.PI*.5,it=this.data.d===3?-1:1;for(j+=this.r.v,this.v._length=0,V=0;V<g;V+=1){var Z=S*Math.cos(j),H=S*Math.sin(j),nt=Z===0&&H===0?0:H/Math.sqrt(Z*Z+H*H),q=Z===0&&H===0?0:-Z/Math.sqrt(Z*Z+H*H);Z+=+this.p.v[0],H+=+this.p.v[1],this.v.setTripleAt(Z,H,Z-nt*O*M*it,H-q*O*M*it,Z+nt*O*M*it,H+q*O*M*it,V,!0),j+=y*it}this.paths.length=0,this.paths[0]=this.v}},B([At],$),$})(),v=(function(){function $(x,g){this.v=Tt.newElement(),this.v.c=!0,this.localShapeCollection=ai.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=x,this.comp=x.comp,this.frameId=-1,this.d=g.d,this.initDynamicPropertyContainer(x),this.p=W.getProp(x,g.p,1,0,this),this.s=W.getProp(x,g.s,1,0,this),this.r=W.getProp(x,g.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return $.prototype={convertRectToPath:function(){var g=this.p.v[0],y=this.p.v[1],S=this.s.v[0]/2,M=this.s.v[1]/2,O=Ve(S,M,this.r.v),V=O*(1-J);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(g+S,y-M+O,g+S,y-M+O,g+S,y-M+V,0,!0),this.v.setTripleAt(g+S,y+M-O,g+S,y+M-V,g+S,y+M-O,1,!0),O!==0?(this.v.setTripleAt(g+S-O,y+M,g+S-O,y+M,g+S-V,y+M,2,!0),this.v.setTripleAt(g-S+O,y+M,g-S+V,y+M,g-S+O,y+M,3,!0),this.v.setTripleAt(g-S,y+M-O,g-S,y+M-O,g-S,y+M-V,4,!0),this.v.setTripleAt(g-S,y-M+O,g-S,y-M+V,g-S,y-M+O,5,!0),this.v.setTripleAt(g-S+O,y-M,g-S+O,y-M,g-S+V,y-M,6,!0),this.v.setTripleAt(g+S-O,y-M,g+S-V,y-M,g+S-O,y-M,7,!0)):(this.v.setTripleAt(g-S,y+M,g-S+V,y+M,g-S,y+M,2),this.v.setTripleAt(g-S,y-M,g-S,y-M+V,g-S,y-M,3))):(this.v.setTripleAt(g+S,y-M+O,g+S,y-M+V,g+S,y-M+O,0,!0),O!==0?(this.v.setTripleAt(g+S-O,y-M,g+S-O,y-M,g+S-V,y-M,1,!0),this.v.setTripleAt(g-S+O,y-M,g-S+V,y-M,g-S+O,y-M,2,!0),this.v.setTripleAt(g-S,y-M+O,g-S,y-M+O,g-S,y-M+V,3,!0),this.v.setTripleAt(g-S,y+M-O,g-S,y+M-V,g-S,y+M-O,4,!0),this.v.setTripleAt(g-S+O,y+M,g-S+O,y+M,g-S+V,y+M,5,!0),this.v.setTripleAt(g+S-O,y+M,g+S-V,y+M,g+S-O,y+M,6,!0),this.v.setTripleAt(g+S,y+M-O,g+S,y+M-O,g+S,y+M-V,7,!0)):(this.v.setTripleAt(g-S,y-M,g-S+V,y-M,g-S,y-M,1,!0),this.v.setTripleAt(g-S,y+M,g-S,y+M-V,g-S,y+M,2,!0),this.v.setTripleAt(g+S,y+M,g+S-V,y+M,g+S,y+M,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:a},B([At],$),$})();function E($,x,g){var y;if(g===3||g===4){var S=g===3?x.pt:x.ks,M=S.k;M.length?y=new k($,x,g):y=new _($,x,g)}else g===5?y=new v($,x):g===6?y=new A($,x):g===7&&(y=new R($,x));return y.k&&$.addDynamicProperty(y),y}function C(){return _}function P(){return k}var L={};return L.getShapeProp=E,L.getConstructorFunction=C,L.getKeyframedConstructorFunction=P,L})();var Ct=(function(){var t=Math.cos,e=Math.sin,s=Math.tan,a=Math.round;function l(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function o(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(m,-D,0,0,D,m,0,0,0,0,1,0,0,0,0,1)}function p(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(1,0,0,0,0,m,-D,0,0,D,m,0,0,0,0,1)}function _(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(m,0,D,0,0,1,0,0,-D,0,m,0,0,0,0,1)}function f(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(m,-D,0,0,D,m,0,0,0,0,1,0,0,0,0,1)}function k(d,m){return this._t(1,m,d,1,0,0)}function A(d,m){return this.shear(s(d),s(m))}function R(d,m){var D=t(m),I=e(m);return this._t(D,I,0,0,-I,D,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,s(d),1,0,0,0,0,1,0,0,0,0,1)._t(D,-I,0,0,I,D,0,0,0,0,1,0,0,0,0,1)}function v(d,m,D){return!D&&D!==0&&(D=1),d===1&&m===1&&D===1?this:this._t(d,0,0,0,0,m,0,0,0,0,D,0,0,0,0,1)}function E(d,m,D,I,G,et,st,dt,pt,xt,Vt,oe,Ut,Et,jt,ut){return this.props[0]=d,this.props[1]=m,this.props[2]=D,this.props[3]=I,this.props[4]=G,this.props[5]=et,this.props[6]=st,this.props[7]=dt,this.props[8]=pt,this.props[9]=xt,this.props[10]=Vt,this.props[11]=oe,this.props[12]=Ut,this.props[13]=Et,this.props[14]=jt,this.props[15]=ut,this}function C(d,m,D){return D=D||0,d!==0||m!==0||D!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,d,m,D,1):this}function P(d,m,D,I,G,et,st,dt,pt,xt,Vt,oe,Ut,Et,jt,ut){var K=this.props;if(d===1&&m===0&&D===0&&I===0&&G===0&&et===1&&st===0&&dt===0&&pt===0&&xt===0&&Vt===1&&oe===0)return K[12]=K[12]*d+K[15]*Ut,K[13]=K[13]*et+K[15]*Et,K[14]=K[14]*Vt+K[15]*jt,K[15]*=ut,this._identityCalculated=!1,this;var ge=K[0],Me=K[1],ve=K[2],le=K[3],_e=K[4],ye=K[5],Bt=K[6],Fe=K[7],Ie=K[8],ee=K[9],Le=K[10],ie=K[11],Ke=K[12],us=K[13],ms=K[14],gs=K[15];return K[0]=ge*d+Me*G+ve*pt+le*Ut,K[1]=ge*m+Me*et+ve*xt+le*Et,K[2]=ge*D+Me*st+ve*Vt+le*jt,K[3]=ge*I+Me*dt+ve*oe+le*ut,K[4]=_e*d+ye*G+Bt*pt+Fe*Ut,K[5]=_e*m+ye*et+Bt*xt+Fe*Et,K[6]=_e*D+ye*st+Bt*Vt+Fe*jt,K[7]=_e*I+ye*dt+Bt*oe+Fe*ut,K[8]=Ie*d+ee*G+Le*pt+ie*Ut,K[9]=Ie*m+ee*et+Le*xt+ie*Et,K[10]=Ie*D+ee*st+Le*Vt+ie*jt,K[11]=Ie*I+ee*dt+Le*oe+ie*ut,K[12]=Ke*d+us*G+ms*pt+gs*Ut,K[13]=Ke*m+us*et+ms*xt+gs*Et,K[14]=Ke*D+us*st+ms*Vt+gs*jt,K[15]=Ke*I+us*dt+ms*oe+gs*ut,this._identityCalculated=!1,this}function L(d){var m=d.props;return this.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15])}function $(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function x(d){for(var m=0;m<16;){if(d.props[m]!==this.props[m])return!1;m+=1}return!0}function g(d){var m;for(m=0;m<16;m+=1)d.props[m]=this.props[m];return d}function y(d){var m;for(m=0;m<16;m+=1)this.props[m]=d[m]}function S(d,m,D){return{x:d*this.props[0]+m*this.props[4]+D*this.props[8]+this.props[12],y:d*this.props[1]+m*this.props[5]+D*this.props[9]+this.props[13],z:d*this.props[2]+m*this.props[6]+D*this.props[10]+this.props[14]}}function M(d,m,D){return d*this.props[0]+m*this.props[4]+D*this.props[8]+this.props[12]}function O(d,m,D){return d*this.props[1]+m*this.props[5]+D*this.props[9]+this.props[13]}function V(d,m,D){return d*this.props[2]+m*this.props[6]+D*this.props[10]+this.props[14]}function j(){var d=this.props[0]*this.props[5]-this.props[1]*this.props[4],m=this.props[5]/d,D=-this.props[1]/d,I=-this.props[4]/d,G=this.props[0]/d,et=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/d,st=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/d,dt=new Ct;return dt.props[0]=m,dt.props[1]=D,dt.props[4]=I,dt.props[5]=G,dt.props[12]=et,dt.props[13]=st,dt}function it(d){var m=this.getInverseMatrix();return m.applyToPointArray(d[0],d[1],d[2]||0)}function Z(d){var m,D=d.length,I=[];for(m=0;m<D;m+=1)I[m]=it(d[m]);return I}function H(d,m,D){var I=ot("float32",6);if(this.isIdentity())I[0]=d[0],I[1]=d[1],I[2]=m[0],I[3]=m[1],I[4]=D[0],I[5]=D[1];else{var G=this.props[0],et=this.props[1],st=this.props[4],dt=this.props[5],pt=this.props[12],xt=this.props[13];I[0]=d[0]*G+d[1]*st+pt,I[1]=d[0]*et+d[1]*dt+xt,I[2]=m[0]*G+m[1]*st+pt,I[3]=m[0]*et+m[1]*dt+xt,I[4]=D[0]*G+D[1]*st+pt,I[5]=D[0]*et+D[1]*dt+xt}return I}function nt(d,m,D){var I;return this.isIdentity()?I=[d,m,D]:I=[d*this.props[0]+m*this.props[4]+D*this.props[8]+this.props[12],d*this.props[1]+m*this.props[5]+D*this.props[9]+this.props[13],d*this.props[2]+m*this.props[6]+D*this.props[10]+this.props[14]],I}function q(d,m){if(this.isIdentity())return d+","+m;var D=this.props;return Math.round((d*D[0]+m*D[4]+D[12])*100)/100+","+Math.round((d*D[1]+m*D[5]+D[13])*100)/100}function N(){for(var d=0,m=this.props,D="matrix3d(",I=1e4;d<16;)D+=a(m[d]*I)/I,D+=d===15?")":",",d+=1;return D}function b(d){var m=1e4;return d<1e-6&&d>0||d>-1e-6&&d<0?a(d*m)/m:d}function T(){var d=this.props,m=b(d[0]),D=b(d[1]),I=b(d[4]),G=b(d[5]),et=b(d[12]),st=b(d[13]);return"matrix("+m+","+D+","+I+","+G+","+et+","+st+")"}return function(){this.reset=l,this.rotate=o,this.rotateX=p,this.rotateY=_,this.rotateZ=f,this.skew=A,this.skewFromAxis=R,this.shear=k,this.scale=v,this.setTransform=E,this.translate=C,this.transform=P,this.multiply=L,this.applyToPoint=S,this.applyToX=M,this.applyToY=O,this.applyToZ=V,this.applyToPointArray=nt,this.applyToTriplePoints=H,this.applyToPointStringified=q,this.toCSS=N,this.to2dCSS=T,this.clone=g,this.cloneFromProps=y,this.equals=x,this.inversePoints=Z,this.inversePoint=it,this.getInverseMatrix=j,this._t=this.transform,this.isIdentity=$,this._identity=!0,this._identityCalculated=!1,this.props=ot("float32",16),this.reset()}})();function Ks(t){"@babel/helpers - typeof";return Ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ks(t)}var ft={},os="__[STANDALONE]__",Br="__[ANIMATIONDATA]__",Nr="";function Kn(t){w(t)}function jr(){os===!0?bt.searchAnimations(Br,os,Nr):bt.searchAnimations()}function Xn(t){Fn(t)}function Zn(t){zn(t)}function Jn(t){return os===!0&&(t.animationData=JSON.parse(Br)),bt.loadAnimation(t)}function Qn(t){if(typeof t=="string")switch(t){case"high":ts(200);break;default:case"medium":ts(50);break;case"low":ts(10);break}else!isNaN(t)&&t>1&&ts(t);ki()>=50?$t(!1):$t(!0)}function to(){return typeof navigator<"u"}function eo(t,e){t==="expressions"&&Ln(e)}function io(t){switch(t){case"propertyFactory":return W;case"shapePropertyFactory":return ns;case"matrix":return Ct;default:return null}}ft.play=bt.play,ft.pause=bt.pause,ft.setLocationHref=Kn,ft.togglePause=bt.togglePause,ft.setSpeed=bt.setSpeed,ft.setDirection=bt.setDirection,ft.stop=bt.stop,ft.searchAnimations=jr,ft.registerAnimation=bt.registerAnimation,ft.loadAnimation=Jn,ft.setSubframeRendering=Xn,ft.resize=bt.resize,ft.goToAndStop=bt.goToAndStop,ft.destroy=bt.destroy,ft.setQuality=Qn,ft.inBrowser=to,ft.installPlugin=eo,ft.freeze=bt.freeze,ft.unfreeze=bt.unfreeze,ft.setVolume=bt.setVolume,ft.mute=bt.mute,ft.unmute=bt.unmute,ft.getRegisteredAnimations=bt.getRegisteredAnimations,ft.useWebWorker=h,ft.setIDPrefix=Zn,ft.__getFactory=io,ft.version="5.13.0";function so(){document.readyState==="complete"&&(clearInterval(no),jr())}function ro(t){for(var e=Hr.split("&"),s=0;s<e.length;s+=1){var a=e[s].split("=");if(decodeURIComponent(a[0])==t)return decodeURIComponent(a[1])}return null}var Hr="";if(os){var Wr=document.getElementsByTagName("script"),ao=Wr.length-1,Gr=Wr[ao]||{src:""};Hr=Gr.src?Gr.src.replace(/^[^\?]+\??/,""):"",Nr=ro("renderer")}var no=setInterval(so,100);try{!((typeof Xi>"u"?"undefined":Ks(Xi))==="object"&&typeof Os<"u")&&!(typeof define=="function"&&define.amd)&&(window.bodymovin=ft)}catch{}var $e=(function(){var t={},e={};t.registerModifier=s,t.getModifier=a;function s(l,o){e[l]||(e[l]=o)}function a(l,o,p){return new e[l](o,p)}return t})();function Wt(){}Wt.prototype.initModifierProperties=function(){},Wt.prototype.addShapeToModifier=function(){},Wt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:ai.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},Wt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=n,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},Wt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},B([At],Wt);function te(){}B([Wt],te),te.prototype.initModifierProperties=function(t,e){this.s=W.getProp(t,e.s,0,.01,this),this.e=W.getProp(t,e.e,0,.01,this),this.o=W.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},te.prototype.addShapeToModifier=function(t){t.pathsData=[]},te.prototype.calculateShapeEdges=function(t,e,s,a,l){var o=[];e<=1?o.push({s:t,e}):t>=1?o.push({s:t-1,e:e-1}):(o.push({s:t,e:1}),o.push({s:0,e:e-1}));var p=[],_,f=o.length,k;for(_=0;_<f;_+=1)if(k=o[_],!(k.e*l<a||k.s*l>a+s)){var A,R;k.s*l<=a?A=0:A=(k.s*l-a)/s,k.e*l>=a+s?R=1:R=(k.e*l-a)/s,p.push([A,R])}return p.length||p.push([0,0]),p},te.prototype.releasePathsData=function(t){var e,s=t.length;for(e=0;e<s;e+=1)Or.release(t[e]);return t.length=0,t},te.prototype.processShapes=function(t){var e,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),this.s.v>1?e=1+a:this.s.v<0?e=0+a:e=this.s.v+a,this.e.v>1?s=1+a:this.e.v<0?s=0+a:s=this.e.v+a,e>s){var l=e;e=s,s=l}e=Math.round(e*1e4)*1e-4,s=Math.round(s*1e4)*1e-4,this.sValue=e,this.eValue=s}else e=this.sValue,s=this.eValue;var o,p,_=this.shapes.length,f,k,A,R,v,E=0;if(s===e)for(p=0;p<_;p+=1)this.shapes[p].localShapeCollection.releaseShapes(),this.shapes[p].shape._mdf=!0,this.shapes[p].shape.paths=this.shapes[p].localShapeCollection,this._mdf&&(this.shapes[p].pathsData.length=0);else if(s===1&&e===0||s===0&&e===1){if(this._mdf)for(p=0;p<_;p+=1)this.shapes[p].pathsData.length=0,this.shapes[p].shape._mdf=!0}else{var C=[],P,L;for(p=0;p<_;p+=1)if(P=this.shapes[p],!P.shape._mdf&&!this._mdf&&!t&&this.m!==2)P.shape.paths=P.localShapeCollection;else{if(o=P.shape.paths,k=o._length,v=0,!P.shape._mdf&&P.pathsData.length)v=P.totalShapeLength;else{for(A=this.releasePathsData(P.pathsData),f=0;f<k;f+=1)R=ae.getSegmentsLength(o.shapes[f]),A.push(R),v+=R.totalLength;P.totalShapeLength=v,P.pathsData=A}E+=v,P.shape._mdf=!0}var $=e,x=s,g=0,y;for(p=_-1;p>=0;p-=1)if(P=this.shapes[p],P.shape._mdf){for(L=P.localShapeCollection,L.releaseShapes(),this.m===2&&_>1?(y=this.calculateShapeEdges(e,s,P.totalShapeLength,g,E),g+=P.totalShapeLength):y=[[$,x]],k=y.length,f=0;f<k;f+=1){$=y[f][0],x=y[f][1],C.length=0,x<=1?C.push({s:P.totalShapeLength*$,e:P.totalShapeLength*x}):$>=1?C.push({s:P.totalShapeLength*($-1),e:P.totalShapeLength*(x-1)}):(C.push({s:P.totalShapeLength*$,e:P.totalShapeLength}),C.push({s:0,e:P.totalShapeLength*(x-1)}));var S=this.addShapes(P,C[0]);if(C[0].s!==C[0].e){if(C.length>1){var M=P.shape.paths.shapes[P.shape.paths._length-1];if(M.c){var O=S.pop();this.addPaths(S,L),S=this.addShapes(P,C[1],O)}else this.addPaths(S,L),S=this.addShapes(P,C[1])}this.addPaths(S,L)}}P.shape.paths=L}}},te.prototype.addPaths=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)e.addShape(t[s])},te.prototype.addSegment=function(t,e,s,a,l,o,p){l.setXYAt(e[0],e[1],"o",o),l.setXYAt(s[0],s[1],"i",o+1),p&&l.setXYAt(t[0],t[1],"v",o),l.setXYAt(a[0],a[1],"v",o+1)},te.prototype.addSegmentFromArray=function(t,e,s,a){e.setXYAt(t[1],t[5],"o",s),e.setXYAt(t[2],t[6],"i",s+1),a&&e.setXYAt(t[0],t[4],"v",s),e.setXYAt(t[3],t[7],"v",s+1)},te.prototype.addShapes=function(t,e,s){var a=t.pathsData,l=t.shape.paths.shapes,o,p=t.shape.paths._length,_,f,k=0,A,R,v,E,C=[],P,L=!0;for(s?(R=s._length,P=s._length):(s=Tt.newElement(),R=0,P=0),C.push(s),o=0;o<p;o+=1){for(v=a[o].lengths,s.c=l[o].c,f=l[o].c?v.length:v.length+1,_=1;_<f;_+=1)if(A=v[_-1],k+A.addedLength<e.s)k+=A.addedLength,s.c=!1;else if(k>e.e){s.c=!1;break}else e.s<=k&&e.e>=k+A.addedLength?(this.addSegment(l[o].v[_-1],l[o].o[_-1],l[o].i[_],l[o].v[_],s,R,L),L=!1):(E=ae.getNewSegment(l[o].v[_-1],l[o].v[_],l[o].o[_-1],l[o].i[_],(e.s-k)/A.addedLength,(e.e-k)/A.addedLength,v[_-1]),this.addSegmentFromArray(E,s,R,L),L=!1,s.c=!1),k+=A.addedLength,R+=1;if(l[o].c&&v.length){if(A=v[_-1],k<=e.e){var $=v[_-1].addedLength;e.s<=k&&e.e>=k+$?(this.addSegment(l[o].v[_-1],l[o].o[_-1],l[o].i[0],l[o].v[0],s,R,L),L=!1):(E=ae.getNewSegment(l[o].v[_-1],l[o].v[0],l[o].o[_-1],l[o].i[0],(e.s-k)/$,(e.e-k)/$,v[_-1]),this.addSegmentFromArray(E,s,R,L),L=!1,s.c=!1)}else s.c=!1;k+=A.addedLength,R+=1}if(s._length&&(s.setXYAt(s.v[P][0],s.v[P][1],"i",P),s.setXYAt(s.v[s._length-1][0],s.v[s._length-1][1],"o",s._length-1)),k>e.e)break;o<p-1&&(s=Tt.newElement(),L=!0,C.push(s),R=0)}return C};function Ei(){}B([Wt],Ei),Ei.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},Ei.prototype.processPath=function(t,e){var s=e/100,a=[0,0],l=t._length,o=0;for(o=0;o<l;o+=1)a[0]+=t.v[o][0],a[1]+=t.v[o][1];a[0]/=l,a[1]/=l;var p=Tt.newElement();p.c=t.c;var _,f,k,A,R,v;for(o=0;o<l;o+=1)_=t.v[o][0]+(a[0]-t.v[o][0])*s,f=t.v[o][1]+(a[1]-t.v[o][1])*s,k=t.o[o][0]+(a[0]-t.o[o][0])*-s,A=t.o[o][1]+(a[1]-t.o[o][1])*-s,R=t.i[o][0]+(a[0]-t.i[o][0])*-s,v=t.i[o][1]+(a[1]-t.i[o][1])*-s,p.setTripleAt(_,f,k,A,R,v,o);return p},Ei.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amount.v;if(p!==0){var _,f;for(s=0;s<a;s+=1){if(_=this.shapes[s],f=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),_.shape._mdf=!0,e=_.shape.paths.shapes,o=_.shape.paths._length,l=0;l<o;l+=1)f.addShape(this.processPath(e[l],p));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var Xs=(function(){var t=[0,0];function e(f){var k=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||k,this.a&&f.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&f.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&f.skewFromAxis(-this.sk.v,this.sa.v),this.r?f.rotate(-this.r.v):f.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?f.translate(this.px.v,this.py.v,-this.pz.v):f.translate(this.px.v,this.py.v,0):f.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function s(f){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||f){var k;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var A,R;if(k=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(A=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/k,0),R=this.p.getValueAtTime(this.p.keyframes[0].t/k,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(A=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/k,0),R=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/k,0)):(A=this.p.pv,R=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/k,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){A=[],R=[];var v=this.px,E=this.py;v._caching.lastFrame+v.offsetTime<=v.keyframes[0].t?(A[0]=v.getValueAtTime((v.keyframes[0].t+.01)/k,0),A[1]=E.getValueAtTime((E.keyframes[0].t+.01)/k,0),R[0]=v.getValueAtTime(v.keyframes[0].t/k,0),R[1]=E.getValueAtTime(E.keyframes[0].t/k,0)):v._caching.lastFrame+v.offsetTime>=v.keyframes[v.keyframes.length-1].t?(A[0]=v.getValueAtTime(v.keyframes[v.keyframes.length-1].t/k,0),A[1]=E.getValueAtTime(E.keyframes[E.keyframes.length-1].t/k,0),R[0]=v.getValueAtTime((v.keyframes[v.keyframes.length-1].t-.01)/k,0),R[1]=E.getValueAtTime((E.keyframes[E.keyframes.length-1].t-.01)/k,0)):(A=[v.pv,E.pv],R[0]=v.getValueAtTime((v._caching.lastFrame+v.offsetTime-.01)/k,v.offsetTime),R[1]=E.getValueAtTime((E._caching.lastFrame+E.offsetTime-.01)/k,E.offsetTime))}else R=t,A=R;this.v.rotate(-Math.atan2(A[1]-R[1],A[0]-R[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function a(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function l(){}function o(f){this._addDynamicProperty(f),this.elem.addDynamicProperty(f),this._isDirty=!0}function p(f,k,A){if(this.elem=f,this.frameId=-1,this.propType="transform",this.data=k,this.v=new Ct,this.pre=new Ct,this.appliedTransformations=0,this.initDynamicPropertyContainer(A||f),k.p&&k.p.s?(this.px=W.getProp(f,k.p.x,0,0,this),this.py=W.getProp(f,k.p.y,0,0,this),k.p.z&&(this.pz=W.getProp(f,k.p.z,0,0,this))):this.p=W.getProp(f,k.p||{k:[0,0,0]},1,0,this),k.rx){if(this.rx=W.getProp(f,k.rx,0,gt,this),this.ry=W.getProp(f,k.ry,0,gt,this),this.rz=W.getProp(f,k.rz,0,gt,this),k.or.k[0].ti){var R,v=k.or.k.length;for(R=0;R<v;R+=1)k.or.k[R].to=null,k.or.k[R].ti=null}this.or=W.getProp(f,k.or,1,gt,this),this.or.sh=!0}else this.r=W.getProp(f,k.r||{k:0},0,gt,this);k.sk&&(this.sk=W.getProp(f,k.sk,0,gt,this),this.sa=W.getProp(f,k.sa,0,gt,this)),this.a=W.getProp(f,k.a||{k:[0,0,0]},1,0,this),this.s=W.getProp(f,k.s||{k:[100,100,100]},1,.01,this),k.o?this.o=W.getProp(f,k.o,0,.01,f):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}p.prototype={applyToMatrix:e,getValue:s,precalculateMatrix:a,autoOrient:l},B([At],p),p.prototype.addDynamicProperty=o,p.prototype._addDynamicProperty=At.prototype.addDynamicProperty;function _(f,k,A){return new p(f,k,A)}return{getTransformProperty:_}})();function ne(){}B([Wt],ne),ne.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=W.getProp(t,e.c,0,null,this),this.o=W.getProp(t,e.o,0,null,this),this.tr=Xs.getTransformProperty(t,e.tr,this),this.so=W.getProp(t,e.tr.so,0,.01,this),this.eo=W.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Ct,this.rMatrix=new Ct,this.sMatrix=new Ct,this.tMatrix=new Ct,this.matrix=new Ct},ne.prototype.applyTransforms=function(t,e,s,a,l,o){var p=o?-1:1,_=a.s.v[0]+(1-a.s.v[0])*(1-l),f=a.s.v[1]+(1-a.s.v[1])*(1-l);t.translate(a.p.v[0]*p*l,a.p.v[1]*p*l,a.p.v[2]),e.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),e.rotate(-a.r.v*p*l),e.translate(a.a.v[0],a.a.v[1],a.a.v[2]),s.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),s.scale(o?1/_:_,o?1/f:f),s.translate(a.a.v[0],a.a.v[1],a.a.v[2])},ne.prototype.init=function(t,e,s,a){for(this.elem=t,this.arr=e,this.pos=s,this.elemsData=a,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[s]);s>0;)s-=1,this._elements.unshift(e[s]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ne.prototype.resetElements=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},ne.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},ne.prototype.changeGroupRender=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)t[s]._render=e,t[s].ty==="gr"&&this.changeGroupRender(t[s].it,e)},ne.prototype.processShapes=function(t){var e,s,a,l,o,p=!1;if(this._mdf||t){var _=Math.ceil(this.c.v);if(this._groups.length<_){for(;this._groups.length<_;){var f={it:this.cloneElements(this._elements),ty:"gr"};f.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,f),this._groups.splice(0,0,f),this._currentCopies+=1}this.elem.reloadShapes(),p=!0}o=0;var k;for(a=0;a<=this._groups.length-1;a+=1){if(k=o<_,this._groups[a]._render=k,this.changeGroupRender(this._groups[a].it,k),!k){var A=this.elemsData[a].it,R=A[A.length-1];R.transform.op.v!==0?(R.transform.op._mdf=!0,R.transform.op.v=0):R.transform.op._mdf=!1}o+=1}this._currentCopies=_;var v=this.o.v,E=v%1,C=v>0?Math.floor(v):Math.ceil(v),P=this.pMatrix.props,L=this.rMatrix.props,$=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var x=0;if(v>0){for(;x<C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),x+=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,E,!1),x+=E)}else if(v<0){for(;x>C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),x-=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-E,!0),x-=E)}a=this.data.m===1?0:this._currentCopies-1,l=this.data.m===1?1:-1,o=this._currentCopies;for(var g,y;o;){if(e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,y=s.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(a/(this._currentCopies-1)),x!==0){for((a!==0&&l===1||a!==this._currentCopies-1&&l===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]),this.matrix.transform($[0],$[1],$[2],$[3],$[4],$[5],$[6],$[7],$[8],$[9],$[10],$[11],$[12],$[13],$[14],$[15]),this.matrix.transform(P[0],P[1],P[2],P[3],P[4],P[5],P[6],P[7],P[8],P[9],P[10],P[11],P[12],P[13],P[14],P[15]),g=0;g<y;g+=1)s[g]=this.matrix.props[g];this.matrix.reset()}else for(this.matrix.reset(),g=0;g<y;g+=1)s[g]=this.matrix.props[g];x+=1,o-=1,a+=l}}else for(o=this._currentCopies,a=0,l=1;o;)e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,o-=1,a+=l;return p},ne.prototype.addShape=function(){};function Pi(){}B([Wt],Pi),Pi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=W.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},Pi.prototype.processPath=function(t,e){var s=Tt.newElement();s.c=t.c;var a,l=t._length,o,p,_,f,k,A,R=0,v,E,C,P,L,$;for(a=0;a<l;a+=1)o=t.v[a],_=t.o[a],p=t.i[a],o[0]===_[0]&&o[1]===_[1]&&o[0]===p[0]&&o[1]===p[1]?(a===0||a===l-1)&&!t.c?(s.setTripleAt(o[0],o[1],_[0],_[1],p[0],p[1],R),R+=1):(a===0?f=t.v[l-1]:f=t.v[a-1],k=Math.sqrt(Math.pow(o[0]-f[0],2)+Math.pow(o[1]-f[1],2)),A=k?Math.min(k/2,e)/k:0,L=o[0]+(f[0]-o[0])*A,v=L,$=o[1]-(o[1]-f[1])*A,E=$,C=v-(v-o[0])*J,P=E-(E-o[1])*J,s.setTripleAt(v,E,C,P,L,$,R),R+=1,a===l-1?f=t.v[0]:f=t.v[a+1],k=Math.sqrt(Math.pow(o[0]-f[0],2)+Math.pow(o[1]-f[1],2)),A=k?Math.min(k/2,e)/k:0,C=o[0]+(f[0]-o[0])*A,v=C,P=o[1]+(f[1]-o[1])*A,E=P,L=v-(v-o[0])*J,$=E-(E-o[1])*J,s.setTripleAt(v,E,C,P,L,$,R),R+=1):(s.setTripleAt(t.v[a][0],t.v[a][1],t.o[a][0],t.o[a][1],t.i[a][0],t.i[a][1],R),R+=1);return s},Pi.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.rd.v;if(p!==0){var _,f;for(s=0;s<a;s+=1){if(_=this.shapes[s],f=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),_.shape._mdf=!0,e=_.shape.paths.shapes,o=_.shape.paths._length,l=0;l<o;l+=1)f.addShape(this.processPath(e[l],p));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function ls(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function Zs(t){return Math.abs(t)<=1e-5}function qr(t,e,s){return t*(1-s)+e*s}function Ae(t,e,s){return[qr(t[0],e[0],s),qr(t[1],e[1],s)]}function oo(t,e,s){if(t===0)return[];var a=e*e-4*t*s;if(a<0)return[];var l=-e/(2*t);if(a===0)return[l];var o=Math.sqrt(a)/(2*t);return[l-o,l+o]}function Yr(t,e,s,a){return[-t+3*e-3*s+a,3*t-6*e+3*s,-3*t+3*e,t]}function Kr(t){return new _t(t,t,t,t,!1)}function _t(t,e,s,a,l){l&&oi(t,e)&&(e=Ae(t,a,1/3)),l&&oi(s,a)&&(s=Ae(t,a,2/3));var o=Yr(t[0],e[0],s[0],a[0]),p=Yr(t[1],e[1],s[1],a[1]);this.a=[o[0],p[0]],this.b=[o[1],p[1]],this.c=[o[2],p[2]],this.d=[o[3],p[3]],this.points=[t,e,s,a]}_t.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},_t.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},_t.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},_t.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},_t.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(Zs(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,s=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(s<0)return[];var a=Math.sqrt(s);return Zs(a)?a>0&&a<1?[e]:[]:[e-a,e+a].filter(function(l){return l>0&&l<1})},_t.prototype.split=function(t){if(t<=0)return[Kr(this.points[0]),this];if(t>=1)return[this,Kr(this.points[this.points.length-1])];var e=Ae(this.points[0],this.points[1],t),s=Ae(this.points[1],this.points[2],t),a=Ae(this.points[2],this.points[3],t),l=Ae(e,s,t),o=Ae(s,a,t),p=Ae(l,o,t);return[new _t(this.points[0],e,l,p,!0),new _t(p,o,a,this.points[3],!0)]};function Xr(t,e){var s=t.points[0][e],a=t.points[t.points.length-1][e];if(s>a){var l=a;a=s,s=l}for(var o=oo(3*t.a[e],2*t.b[e],t.c[e]),p=0;p<o.length;p+=1)if(o[p]>0&&o[p]<1){var _=t.point(o[p])[e];_<s?s=_:_>a&&(a=_)}return{min:s,max:a}}_t.prototype.bounds=function(){return{x:Xr(this,0),y:Xr(this,1)}},_t.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function hs(t,e,s){var a=t.boundingBox();return{cx:a.cx,cy:a.cy,width:a.width,height:a.height,bez:t,t:(e+s)/2,t1:e,t2:s}}function Zr(t){var e=t.bez.split(.5);return[hs(e[0],t.t1,t.t),hs(e[1],t.t,t.t2)]}function lo(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function Ti(t,e,s,a,l,o){if(lo(t,e)){if(s>=o||t.width<=a&&t.height<=a&&e.width<=a&&e.height<=a){l.push([t.t,e.t]);return}var p=Zr(t),_=Zr(e);Ti(p[0],_[0],s+1,a,l,o),Ti(p[0],_[1],s+1,a,l,o),Ti(p[1],_[0],s+1,a,l,o),Ti(p[1],_[1],s+1,a,l,o)}}_t.prototype.intersections=function(t,e,s){e===void 0&&(e=2),s===void 0&&(s=7);var a=[];return Ti(hs(this,0,1),hs(t,0,1),0,e,a,s),a},_t.shapeSegment=function(t,e){var s=(e+1)%t.length();return new _t(t.v[e],t.o[e],t.i[s],t.v[s],!0)},_t.shapeSegmentInverted=function(t,e){var s=(e+1)%t.length();return new _t(t.v[s],t.i[s],t.o[e],t.v[e],!0)};function Js(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function cs(t,e,s,a){var l=[t[0],t[1],1],o=[e[0],e[1],1],p=[s[0],s[1],1],_=[a[0],a[1],1],f=Js(Js(l,o),Js(p,_));return Zs(f[2])?null:[f[0]/f[2],f[1]/f[2]]}function ni(t,e,s){return[t[0]+Math.cos(e)*s,t[1]-Math.sin(e)*s]}function Qs(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function oi(t,e){return ls(t[0],e[0])&&ls(t[1],e[1])}function Ci(){}B([Wt],Ci),Ci.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=W.getProp(t,e.s,0,null,this),this.frequency=W.getProp(t,e.r,0,null,this),this.pointsType=W.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function Jr(t,e,s,a,l,o,p){var _=s-Math.PI/2,f=s+Math.PI/2,k=e[0]+Math.cos(s)*a*l,A=e[1]-Math.sin(s)*a*l;t.setTripleAt(k,A,k+Math.cos(_)*o,A-Math.sin(_)*o,k+Math.cos(f)*p,A-Math.sin(f)*p,t.length())}function ho(t,e){var s=[e[0]-t[0],e[1]-t[1]],a=-Math.PI*.5,l=[Math.cos(a)*s[0]-Math.sin(a)*s[1],Math.sin(a)*s[0]+Math.cos(a)*s[1]];return l}function co(t,e){var s=e===0?t.length()-1:e-1,a=(e+1)%t.length(),l=t.v[s],o=t.v[a],p=ho(l,o);return Math.atan2(0,1)-Math.atan2(p[1],p[0])}function Qr(t,e,s,a,l,o,p){var _=co(e,s),f=e.v[s%e._length],k=e.v[s===0?e._length-1:s-1],A=e.v[(s+1)%e._length],R=o===2?Math.sqrt(Math.pow(f[0]-k[0],2)+Math.pow(f[1]-k[1],2)):0,v=o===2?Math.sqrt(Math.pow(f[0]-A[0],2)+Math.pow(f[1]-A[1],2)):0;Jr(t,e.v[s%e._length],_,p,a,v/((l+1)*2),R/((l+1)*2),o)}function po(t,e,s,a,l,o){for(var p=0;p<a;p+=1){var _=(p+1)/(a+1),f=l===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,k=e.normalAngle(_),A=e.point(_);Jr(t,A,k,o,s,f/((a+1)*2),f/((a+1)*2),l),o=-o}return o}Ci.prototype.processPath=function(t,e,s,a){var l=t._length,o=Tt.newElement();if(o.c=t.c,t.c||(l-=1),l===0)return o;var p=-1,_=_t.shapeSegment(t,0);Qr(o,t,0,e,s,a,p);for(var f=0;f<l;f+=1)p=po(o,_,e,s,a,-p),f===l-1&&!t.c?_=null:_=_t.shapeSegment(t,(f+1)%l),Qr(o,t,f+1,e,s,a,p);return o},Ci.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amplitude.v,_=Math.max(0,Math.round(this.frequency.v)),f=this.pointsType.v;if(p!==0){var k,A;for(s=0;s<a;s+=1){if(k=this.shapes[s],A=k.localShapeCollection,!(!k.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),k.shape._mdf=!0,e=k.shape.paths.shapes,o=k.shape.paths._length,l=0;l<o;l+=1)A.addShape(this.processPath(e[l],p,_,f));k.shape.paths=k.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function tr(t,e,s){var a=Math.atan2(e[0]-t[0],e[1]-t[1]);return[ni(t,a,s),ni(e,a,s)]}function li(t,e){var s,a,l,o,p,_,f;f=tr(t.points[0],t.points[1],e),s=f[0],a=f[1],f=tr(t.points[1],t.points[2],e),l=f[0],o=f[1],f=tr(t.points[2],t.points[3],e),p=f[0],_=f[1];var k=cs(s,a,l,o);k===null&&(k=a);var A=cs(p,_,l,o);return A===null&&(A=p),new _t(s,k,A,_)}function ta(t,e,s,a,l){var o=e.points[3],p=s.points[0];if(a===3||oi(o,p))return o;if(a===2){var _=-e.tangentAngle(1),f=-s.tangentAngle(0)+Math.PI,k=cs(o,ni(o,_+Math.PI/2,100),p,ni(p,_+Math.PI/2,100)),A=k?Qs(k,o):Qs(o,p)/2,R=ni(o,_,2*A*J);return t.setXYAt(R[0],R[1],"o",t.length()-1),R=ni(p,f,2*A*J),t.setTripleAt(p[0],p[1],p[0],p[1],R[0],R[1],t.length()),p}var v=oi(o,e.points[2])?e.points[0]:e.points[2],E=oi(p,s.points[1])?s.points[3]:s.points[1],C=cs(v,o,p,E);return C&&Qs(C,o)<l?(t.setTripleAt(C[0],C[1],C[0],C[1],C[0],C[1],t.length()),C):o}function ea(t,e){var s=t.intersections(e);return s.length&&ls(s[0][0],1)&&s.shift(),s.length?s[0]:null}function ia(t,e){var s=t.slice(),a=e.slice(),l=ea(t[t.length-1],e[0]);return l&&(s[t.length-1]=t[t.length-1].split(l[0])[0],a[0]=e[0].split(l[1])[1]),t.length>1&&e.length>1&&(l=ea(t[0],e[e.length-1]),l)?[[t[0].split(l[0])[0]],[e[e.length-1].split(l[1])[1]]]:[s,a]}function fo(t){for(var e,s=1;s<t.length;s+=1)e=ia(t[s-1],t[s]),t[s-1]=e[0],t[s]=e[1];return t.length>1&&(e=ia(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function sa(t,e){var s=t.inflectionPoints(),a,l,o,p;if(s.length===0)return[li(t,e)];if(s.length===1||ls(s[1],1))return o=t.split(s[0]),a=o[0],l=o[1],[li(a,e),li(l,e)];o=t.split(s[0]),a=o[0];var _=(s[1]-s[0])/(1-s[0]);return o=o[1].split(_),p=o[0],l=o[1],[li(a,e),li(p,e),li(l,e)]}function Mi(){}B([Wt],Mi),Mi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this.miterLimit=W.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},Mi.prototype.processPath=function(t,e,s,a){var l=Tt.newElement();l.c=t.c;var o=t.length();t.c||(o-=1);var p,_,f,k=[];for(p=0;p<o;p+=1)f=_t.shapeSegment(t,p),k.push(sa(f,e));if(!t.c)for(p=o-1;p>=0;p-=1)f=_t.shapeSegmentInverted(t,p),k.push(sa(f,e));k=fo(k);var A=null,R=null;for(p=0;p<k.length;p+=1){var v=k[p];for(R&&(A=ta(l,R,v[0],s,a)),R=v[v.length-1],_=0;_<v.length;_+=1)f=v[_],A&&oi(f.points[0],A)?l.setXYAt(f.points[1][0],f.points[1][1],"o",l.length()-1):l.setTripleAt(f.points[0][0],f.points[0][1],f.points[1][0],f.points[1][1],f.points[0][0],f.points[0][1],l.length()),l.setTripleAt(f.points[3][0],f.points[3][1],f.points[3][0],f.points[3][1],f.points[2][0],f.points[2][1],l.length()),A=f.points[3]}return k.length&&ta(l,R,k[0][0],s,a),l},Mi.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amount.v,_=this.miterLimit.v,f=this.lineJoin;if(p!==0){var k,A;for(s=0;s<a;s+=1){if(k=this.shapes[s],A=k.localShapeCollection,!(!k.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),k.shape._mdf=!0,e=k.shape.paths.shapes,o=k.shape.paths._length,l=0;l<o;l+=1)A.addShape(this.processPath(e[l],p,f,_));k.shape.paths=k.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function ra(t){for(var e=t.fStyle?t.fStyle.split(" "):[],s="normal",a="normal",l=e.length,o,p=0;p<l;p+=1)switch(o=e[p].toLowerCase(),o){case"italic":a="italic";break;case"bold":s="700";break;case"black":s="900";break;case"medium":s="500";break;case"regular":case"normal":s="400";break;case"light":case"thin":s="200";break;default:break}return{style:a,weight:t.fWeight||s}}var Ge=(function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},s=[];s=s.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var a=127988,l=917631,o=917601,p=917626,_=65039,f=8205,k=127462,A=127487,R=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function v(b){var T=b.split(","),d,m=T.length,D=[];for(d=0;d<m;d+=1)T[d]!=="sans-serif"&&T[d]!=="monospace"&&D.push(T[d]);return D.join(",")}function E(b,T){var d=U("span");d.setAttribute("aria-hidden",!0),d.style.fontFamily=T;var m=U("span");m.innerText="giItT1WQy@!-/#",d.style.position="absolute",d.style.left="-10000px",d.style.top="-10000px",d.style.fontSize="300px",d.style.fontVariant="normal",d.style.fontStyle="normal",d.style.fontWeight="normal",d.style.letterSpacing="0",d.appendChild(m),document.body.appendChild(d);var D=m.offsetWidth;return m.style.fontFamily=v(b)+", "+T,{node:m,w:D,parent:d}}function C(){var b,T=this.fonts.length,d,m,D=T;for(b=0;b<T;b+=1)this.fonts[b].loaded?D-=1:this.fonts[b].fOrigin==="n"||this.fonts[b].origin===0?this.fonts[b].loaded=!0:(d=this.fonts[b].monoCase.node,m=this.fonts[b].monoCase.w,d.offsetWidth!==m?(D-=1,this.fonts[b].loaded=!0):(d=this.fonts[b].sansCase.node,m=this.fonts[b].sansCase.w,d.offsetWidth!==m&&(D-=1,this.fonts[b].loaded=!0)),this.fonts[b].loaded&&(this.fonts[b].sansCase.parent.parentNode.removeChild(this.fonts[b].sansCase.parent),this.fonts[b].monoCase.parent.parentNode.removeChild(this.fonts[b].monoCase.parent)));D!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function P(b,T){var d=document.body&&T?"svg":"canvas",m,D=ra(b);if(d==="svg"){var I=at("text");I.style.fontSize="100px",I.setAttribute("font-family",b.fFamily),I.setAttribute("font-style",D.style),I.setAttribute("font-weight",D.weight),I.textContent="1",b.fClass?(I.style.fontFamily="inherit",I.setAttribute("class",b.fClass)):I.style.fontFamily=b.fFamily,T.appendChild(I),m=I}else{var G=new OffscreenCanvas(500,500).getContext("2d");G.font=D.style+" "+D.weight+" 100px "+b.fFamily,m=G}function et(st){return d==="svg"?(m.textContent=st,m.getComputedTextLength()):m.measureText(st).width}return{measureText:et}}function L(b,T){if(!b){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=b.list;return}if(!document.body){this.isLoaded=!0,b.list.forEach(function(Vt){Vt.helper=P(Vt),Vt.cache={}}),this.fonts=b.list;return}var d=b.list,m,D=d.length,I=D;for(m=0;m<D;m+=1){var G=!0,et,st;if(d[m].loaded=!1,d[m].monoCase=E(d[m].fFamily,"monospace"),d[m].sansCase=E(d[m].fFamily,"sans-serif"),!d[m].fPath)d[m].loaded=!0,I-=1;else if(d[m].fOrigin==="p"||d[m].origin===3){if(et=document.querySelectorAll('style[f-forigin="p"][f-family="'+d[m].fFamily+'"], style[f-origin="3"][f-family="'+d[m].fFamily+'"]'),et.length>0&&(G=!1),G){var dt=U("style");dt.setAttribute("f-forigin",d[m].fOrigin),dt.setAttribute("f-origin",d[m].origin),dt.setAttribute("f-family",d[m].fFamily),dt.type="text/css",dt.innerText="@font-face {font-family: "+d[m].fFamily+"; font-style: normal; src: url('"+d[m].fPath+"');}",T.appendChild(dt)}}else if(d[m].fOrigin==="g"||d[m].origin===1){for(et=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),st=0;st<et.length;st+=1)et[st].href.indexOf(d[m].fPath)!==-1&&(G=!1);if(G){var pt=U("link");pt.setAttribute("f-forigin",d[m].fOrigin),pt.setAttribute("f-origin",d[m].origin),pt.type="text/css",pt.rel="stylesheet",pt.href=d[m].fPath,document.body.appendChild(pt)}}else if(d[m].fOrigin==="t"||d[m].origin===2){for(et=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),st=0;st<et.length;st+=1)d[m].fPath===et[st].src&&(G=!1);if(G){var xt=U("link");xt.setAttribute("f-forigin",d[m].fOrigin),xt.setAttribute("f-origin",d[m].origin),xt.setAttribute("rel","stylesheet"),xt.setAttribute("href",d[m].fPath),T.appendChild(xt)}}d[m].helper=P(d[m],T),d[m].cache={},this.fonts.push(d[m])}I===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function $(b){if(b){this.chars||(this.chars=[]);var T,d=b.length,m,D=this.chars.length,I;for(T=0;T<d;T+=1){for(m=0,I=!1;m<D;)this.chars[m].style===b[T].style&&this.chars[m].fFamily===b[T].fFamily&&this.chars[m].ch===b[T].ch&&(I=!0),m+=1;I||(this.chars.push(b[T]),D+=1)}}}function x(b,T,d){for(var m=0,D=this.chars.length;m<D;){if(this.chars[m].ch===b&&this.chars[m].style===T&&this.chars[m].fFamily===d)return this.chars[m];m+=1}return(typeof b=="string"&&b.charCodeAt(0)!==13||!b)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",b,T,d)),e}function g(b,T,d){var m=this.getFontByName(T),D=b;if(!m.cache[D]){var I=m.helper;if(b===" "){var G=I.measureText("|"+b+"|"),et=I.measureText("||");m.cache[D]=(G-et)/100}else m.cache[D]=I.measureText(b)/100}return m.cache[D]*d}function y(b){for(var T=0,d=this.fonts.length;T<d;){if(this.fonts[T].fName===b)return this.fonts[T];T+=1}return this.fonts[0]}function S(b){var T=0,d=b.charCodeAt(0);if(d>=55296&&d<=56319){var m=b.charCodeAt(1);m>=56320&&m<=57343&&(T=(d-55296)*1024+m-56320+65536)}return T}function M(b,T){var d=b.toString(16)+T.toString(16);return R.indexOf(d)!==-1}function O(b){return b===f}function V(b){return b===_}function j(b){var T=S(b);return T>=k&&T<=A}function it(b){return j(b.substr(0,2))&&j(b.substr(2,2))}function Z(b){return s.indexOf(b)!==-1}function H(b,T){var d=S(b.substr(T,2));if(d!==a)return!1;var m=0;for(T+=2;m<5;){if(d=S(b.substr(T,2)),d<o||d>p)return!1;m+=1,T+=2}return S(b.substr(T,2))===l}function nt(){this.isLoaded=!0}var q=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};q.isModifier=M,q.isZeroWidthJoiner=O,q.isFlagEmoji=it,q.isRegionalCode=j,q.isCombinedCharacter=Z,q.isRegionalFlag=H,q.isVariationSelector=V,q.BLACK_FLAG_CODE_POINT=a;var N={addChars:$,addFonts:L,getCharData:x,getFontByName:y,measureText:g,checkLoadedFonts:C,setIsLoaded:nt};return q.prototype=N,q})();function aa(t){this.animationData=t}aa.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function uo(t){return new aa(t)}function ds(){}ds.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,s=this.renderableComponents.length;for(e=0;e<s;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var er=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})();function mo(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function go(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function vo(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function _o(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function yo(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function bo(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function xo(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function wo(){this.p={}}function na(t,e){var s=t.ef||[];this.effectElements=[];var a,l=s.length,o;for(a=0;a<l;a+=1)o=new Fi(s[a],e),this.effectElements.push(o)}function Fi(t,e){this.init(t,e)}B([At],Fi),Fi.prototype.getValue=Fi.prototype.iterateDynamicProperties,Fi.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var s,a=this.data.ef.length,l,o=this.data.ef;for(s=0;s<a;s+=1){switch(l=null,o[s].ty){case 0:l=new mo(o[s],e,this);break;case 1:l=new go(o[s],e,this);break;case 2:l=new vo(o[s],e,this);break;case 3:l=new _o(o[s],e,this);break;case 4:case 7:l=new xo(o[s],e,this);break;case 10:l=new yo(o[s],e,this);break;case 11:l=new bo(o[s],e,this);break;case 5:l=new na(o[s],e,this);break;default:l=new wo(o[s],e,this);break}l&&this.effectElements.push(l)}};function Ee(){}Ee.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,s=this.data.masksProperties.length;e<s;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=Fr();if(e){var s=e("layer"),a=e("effects"),l=e("shape"),o=e("text"),p=e("comp");this.layerInterface=s(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var _=a.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(_),this.data.ty===0||this.data.xt?this.compInterface=p(this):this.data.ty===4?(this.layerInterface.shapeInterface=l(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=o(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=er(this.data.bm),s=this.baseElement||this.layerElement;s.style["mix-blend-mode"]=e},initBaseData:function(e,s,a){this.globalData=s,this.comp=a,this.data=e,this.layerId=Rt(),this.data.sr||(this.data.sr=1),this.effectsManager=new na(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function Pe(){}Pe.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,s){var a,l=this.dynamicProperties.length;for(a=0;a<l;a+=1)(s||this._isParent&&this.dynamicProperties[a].propType==="transform")&&(this.dynamicProperties[a].getValue(),this.dynamicProperties[a]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function Te(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,s)}Te.prototype.prepareFrame=function(){},B([ds,Ee,Pe],Te),Te.prototype.getBaseElement=function(){return null},Te.prototype.renderFrame=function(){},Te.prototype.destroy=function(){},Te.prototype.initExpressions=function(){var t=Fr();if(t){var e=t("footage");this.layerInterface=e(this)}},Te.prototype.getFootageData=function(){return this.footageData};function Dt(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,s),this._isPlaying=!1,this._canPlay=!1;var a=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(a),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=W.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}Dt.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var s=this._volume*this._volumeMultiplier;this._previousVolume!==s&&(this._previousVolume=s,this.audio.volume(s))},B([ds,Ee,Pe],Dt),Dt.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},Dt.prototype.show=function(){},Dt.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},Dt.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},Dt.prototype.resume=function(){this._canPlay=!0},Dt.prototype.setRate=function(t){this.audio.rate(t)},Dt.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},Dt.prototype.getBaseElement=function(){return null},Dt.prototype.destroy=function(){},Dt.prototype.sourceRectAtTime=function(){},Dt.prototype.initExpressions=function(){};function Mt(){}Mt.prototype.checkLayers=function(t){var e,s=this.layers.length,a;for(this.completeLayers=!0,e=s-1;e>=0;e-=1)this.elements[e]||(a=this.layers[e],a.ip-a.st<=t-this.layers[e].st&&a.op-a.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Mt.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Mt.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Mt.prototype.createAudio=function(t){return new Dt(t,this.globalData,this)},Mt.prototype.createFootage=function(t){return new Te(t,this.globalData,this)},Mt.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Mt.prototype.includeLayers=function(t){this.completeLayers=!1;var e,s=t.length,a,l=this.layers.length;for(e=0;e<s;e+=1)for(a=0;a<l;){if(this.layers[a].id===t[e].id){this.layers[a]=t[e];break}a+=1}},Mt.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Mt.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Mt.prototype.buildElementParenting=function(t,e,s){for(var a=this.elements,l=this.layers,o=0,p=l.length;o<p;)l[o].ind==e&&(!a[o]||a[o]===!0?(this.buildItem(o),this.addPendingElement(t)):(s.push(a[o]),a[o].setAsParent(),l[o].parent!==void 0?this.buildElementParenting(t,l[o].parent,s):t.setHierarchy(s))),o+=1},Mt.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Mt.prototype.searchExtraCompositions=function(t){var e,s=t.length;for(e=0;e<s;e+=1)if(t[e].xt){var a=this.createComp(t[e]);a.initExpressions(),this.globalData.projectInterface.registerComposition(a)}},Mt.prototype.getElementById=function(t){var e,s=this.elements.length;for(e=0;e<s;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},Mt.prototype.getElementByPath=function(t){var e=t.shift(),s;if(typeof e=="number")s=this.elements[e];else{var a,l=this.elements.length;for(a=0;a<l;a+=1)if(this.elements[a].data.nm===e){s=this.elements[a];break}}return t.length===0?s:s.getElementByPath(t)},Mt.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new Ge,this.globalData.slotManager=uo(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var ko={TRANSFORM_EFFECT:"transformEFfect"};function hi(){}hi.prototype={initTransform:function(){var e=new Ct;this.finalTransform={mProp:this.data.ks?Xs.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,s=this.finalTransform.mat,a=0,l=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;a<l;){if(this.hierarchy[a].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}a+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),a=0;a<l;a+=1)s.multiply(this.hierarchy[a].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,s=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<s;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var a=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(a),e=1;e<s;e+=1){var l=this.localTransforms[e].matrix;a.multiply(l)}a.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var o=this.finalTransform.localOpacity;for(e=0;e<s;e+=1)o*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=o}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(ko.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new Ct;var s=0,a=e.length;for(s=0;s<a;s+=1)this.localTransforms.push(e[s])}}},globalToLocal:function(e){var s=[];s.push(this.finalTransform);for(var a=!0,l=this.comp;a;)l.finalTransform?(l.data.hasMask&&s.splice(0,0,l.finalTransform),l=l.comp):a=!1;var o,p=s.length,_;for(o=0;o<p;o+=1)_=s[o].mat.applyToPointArray(0,0,0),e=[e[0]-_[0],e[1]-_[1],0];return e},mHelper:new Ct};function qe(t,e,s){this.data=t,this.element=e,this.globalData=s,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var a=this.globalData.defs,l,o=this.masksProperties?this.masksProperties.length:0;this.viewData=ct(o),this.solidPath="";var p,_=this.masksProperties,f=0,k=[],A,R,v=Rt(),E,C,P,L,$="clipPath",x="clip-path";for(l=0;l<o;l+=1)if((_[l].mode!=="a"&&_[l].mode!=="n"||_[l].inv||_[l].o.k!==100||_[l].o.x)&&($="mask",x="mask"),(_[l].mode==="s"||_[l].mode==="i")&&f===0?(E=at("rect"),E.setAttribute("fill","#ffffff"),E.setAttribute("width",this.element.comp.data.w||0),E.setAttribute("height",this.element.comp.data.h||0),k.push(E)):E=null,p=at("path"),_[l].mode==="n")this.viewData[l]={op:W.getProp(this.element,_[l].o,0,.01,this.element),prop:ns.getShapeProp(this.element,_[l],3),elem:p,lastPath:""},a.appendChild(p);else{f+=1,p.setAttribute("fill",_[l].mode==="s"?"#000000":"#ffffff"),p.setAttribute("clip-rule","nonzero");var g;if(_[l].x.k!==0?($="mask",x="mask",L=W.getProp(this.element,_[l].x,0,null,this.element),g=Rt(),C=at("filter"),C.setAttribute("id",g),P=at("feMorphology"),P.setAttribute("operator","erode"),P.setAttribute("in","SourceGraphic"),P.setAttribute("radius","0"),C.appendChild(P),a.appendChild(C),p.setAttribute("stroke",_[l].mode==="s"?"#000000":"#ffffff")):(P=null,L=null),this.storedData[l]={elem:p,x:L,expan:P,lastPath:"",lastOperator:"",filterId:g,lastRadius:0},_[l].mode==="i"){R=k.length;var y=at("g");for(A=0;A<R;A+=1)y.appendChild(k[A]);var S=at("mask");S.setAttribute("mask-type","alpha"),S.setAttribute("id",v+"_"+f),S.appendChild(p),a.appendChild(S),y.setAttribute("mask","url("+z()+"#"+v+"_"+f+")"),k.length=0,k.push(y)}else k.push(p);_[l].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[l]={elem:p,lastPath:"",op:W.getProp(this.element,_[l].o,0,.01,this.element),prop:ns.getShapeProp(this.element,_[l],3),invRect:E},this.viewData[l].prop.k||this.drawPath(_[l],this.viewData[l].prop.v,this.viewData[l])}for(this.maskElement=at($),o=k.length,l=0;l<o;l+=1)this.maskElement.appendChild(k[l]);f>0&&(this.maskElement.setAttribute("id",v),this.element.maskedElement.setAttribute(x,"url("+z()+"#"+v+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}qe.prototype.getMaskProperty=function(t){return this.viewData[t].prop},qe.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,s,a=this.masksProperties.length;for(s=0;s<a;s+=1)if((this.viewData[s].prop._mdf||t)&&this.drawPath(this.masksProperties[s],this.viewData[s].prop.v,this.viewData[s]),(this.viewData[s].op._mdf||t)&&this.viewData[s].elem.setAttribute("fill-opacity",this.viewData[s].op.v),this.masksProperties[s].mode!=="n"&&(this.viewData[s].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[s].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[s].x&&(this.storedData[s].x._mdf||t))){var l=this.storedData[s].expan;this.storedData[s].x.v<0?(this.storedData[s].lastOperator!=="erode"&&(this.storedData[s].lastOperator="erode",this.storedData[s].elem.setAttribute("filter","url("+z()+"#"+this.storedData[s].filterId+")")),l.setAttribute("radius",-this.storedData[s].x.v)):(this.storedData[s].lastOperator!=="dilate"&&(this.storedData[s].lastOperator="dilate",this.storedData[s].elem.setAttribute("filter",null)),this.storedData[s].elem.setAttribute("stroke-width",this.storedData[s].x.v*2))}},qe.prototype.getMaskelement=function(){return this.maskElement},qe.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},qe.prototype.drawPath=function(t,e,s){var a=" M"+e.v[0][0]+","+e.v[0][1],l,o;for(o=e._length,l=1;l<o;l+=1)a+=" C"+e.o[l-1][0]+","+e.o[l-1][1]+" "+e.i[l][0]+","+e.i[l][1]+" "+e.v[l][0]+","+e.v[l][1];if(e.c&&o>1&&(a+=" C"+e.o[l-1][0]+","+e.o[l-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),s.lastPath!==a){var p="";s.elem&&(e.c&&(p=t.inv?this.solidPath+a:a),s.elem.setAttribute("d",p)),s.lastPath=a}},qe.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var Ii=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=s;function e(a,l){var o=at("filter");return o.setAttribute("id",a),l!==!0&&(o.setAttribute("filterUnits","objectBoundingBox"),o.setAttribute("x","0%"),o.setAttribute("y","0%"),o.setAttribute("width","100%"),o.setAttribute("height","100%")),o}function s(){var a=at("feColorMatrix");return a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),a}return t})(),oa=(function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t})(),ps={},la="filter_result_";function ir(t){var e,s="SourceGraphic",a=t.data.ef?t.data.ef.length:0,l=Rt(),o=Ii.createFilter(l,!0),p=0;this.filters=[];var _;for(e=0;e<a;e+=1){_=null;var f=t.data.ef[e].ty;if(ps[f]){var k=ps[f].effect;_=new k(o,t.effectsManager.effectElements[e],t,la+p,s),s=la+p,ps[f].countsAsEffect&&(p+=1)}_&&this.filters.push(_)}p&&(t.globalData.defs.appendChild(o),t.layerElement.setAttribute("filter","url("+z()+"#"+l+")")),this.filters.length&&t.addRenderableComponent(this)}ir.prototype.renderFrame=function(t){var e,s=this.filters.length;for(e=0;e<s;e+=1)this.filters[e].renderFrame(t)},ir.prototype.getEffects=function(t){var e,s=this.filters.length,a=[];for(e=0;e<s;e+=1)this.filters[e].type===t&&a.push(this.filters[e]);return a};function Nl(t,e,s){ps[t]={effect:e,countsAsEffect:s}}function Li(){}Li.prototype={initRendererElement:function(){this.layerElement=at("g")},createContainerElements:function(){this.matteElement=at("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var s=at("g");s.setAttribute("id",this.layerId),s.appendChild(this.layerElement),e=s,this.globalData.defs.appendChild(s)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var a=at("clipPath"),l=at("path");l.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var o=Rt();if(a.setAttribute("id",o),a.appendChild(l),this.globalData.defs.appendChild(a),this.checkMasks()){var p=at("g");p.setAttribute("clip-path","url("+z()+"#"+o+")"),p.appendChild(this.layerElement),this.transformedElement=p,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+z()+"#"+o+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new qe(this.data,this,this.globalData),this.renderableEffectsManager=new ir(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var s=this.layerId+"_"+e,a,l,o,p;if(e===1||e===3){var _=at("mask");_.setAttribute("id",s),_.setAttribute("mask-type",e===3?"luminance":"alpha"),o=at("use"),o.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),_.appendChild(o),this.globalData.defs.appendChild(_),!oa.maskType&&e===1&&(_.setAttribute("mask-type","luminance"),a=Rt(),l=Ii.createFilter(a),this.globalData.defs.appendChild(l),l.appendChild(Ii.createAlphaToLuminanceFilter()),p=at("g"),p.appendChild(o),_.appendChild(p),p.setAttribute("filter","url("+z()+"#"+a+")"))}else if(e===2){var f=at("mask");f.setAttribute("id",s),f.setAttribute("mask-type","alpha");var k=at("g");f.appendChild(k),a=Rt(),l=Ii.createFilter(a);var A=at("feComponentTransfer");A.setAttribute("in","SourceGraphic"),l.appendChild(A);var R=at("feFuncA");R.setAttribute("type","table"),R.setAttribute("tableValues","1.0 0.0"),A.appendChild(R),this.globalData.defs.appendChild(l);var v=at("rect");v.setAttribute("width",this.comp.data.w),v.setAttribute("height",this.comp.data.h),v.setAttribute("x","0"),v.setAttribute("y","0"),v.setAttribute("fill","#ffffff"),v.setAttribute("opacity","0"),k.setAttribute("filter","url("+z()+"#"+a+")"),k.appendChild(v),o=at("use"),o.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),k.appendChild(o),oa.maskType||(f.setAttribute("mask-type","luminance"),l.appendChild(Ii.createAlphaToLuminanceFilter()),p=at("g"),k.appendChild(v),p.appendChild(this.layerElement),k.appendChild(p)),this.globalData.defs.appendChild(f)}this.matteMasks[e]=s}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+z()+"#"+e+")")}};function ci(){}ci.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function zi(){}(function(){var t={initElement:function(s,a,l){this.initFrame(),this.initBaseData(s,a,l),this.initTransform(s,a,l),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var s=this.baseElement||this.layerElement;s.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var s=this.baseElement||this.layerElement;s.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(s){this._mdf=!1,this.prepareRenderableFrame(s),this.prepareProperties(s,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};B([ds,X(t)],zi)})();function Oi(t,e,s){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,s),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}B([Ee,hi,Li,ci,Pe,zi],Oi),Oi.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=at("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},Oi.prototype.sourceRectAtTime=function(){return this.sourceRect};function So(t,e){this.elem=t,this.pos=e}function ha(){}ha.prototype={addShapeToModifiers:function(e){var s,a=this.shapeModifiers.length;for(s=0;s<a;s+=1)this.shapeModifiers[s].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var s=0,a=this.shapeModifiers.length;s<a;)if(this.shapeModifiers[s].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,s=this.shapes.length;for(e=0;e<s;e+=1)this.shapes[e].sh.reset();s=this.shapeModifiers.length;var a;for(e=s-1;e>=0&&(a=this.shapeModifiers[e].processShapes(this._isFirstFrame),!a);e-=1);}},searchProcessedElement:function(e){for(var s=this.processedElements,a=0,l=s.length;a<l;){if(s[a].elem===e)return s[a].pos;a+=1}return 0},addProcessedElement:function(e,s){for(var a=this.processedElements,l=a.length;l;)if(l-=1,a[l].elem===e){a[l].pos=s;return}a.push(new So(e,s))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var ca={1:"butt",2:"round",3:"square"},da={1:"miter",2:"round",3:"bevel"};function pa(t,e,s){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=s,this.lvl=e,this._isAnimated=!!s.k;for(var a=0,l=t.length;a<l;){if(t[a].mProps.dynamicProperties.length){this._isAnimated=!0;break}a+=1}}pa.prototype.setAsAnimated=function(){this._isAnimated=!0};function fa(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=at("path"),this.msElem=null}fa.prototype.reset=function(){this.d="",this._mdf=!1};function fs(t,e,s,a){this.elem=t,this.frameId=-1,this.dataProps=ct(e.length),this.renderer=s,this.k=!1,this.dashStr="",this.dashArray=ot("float32",e.length?e.length-1:0),this.dashoffset=ot("float32",1),this.initDynamicPropertyContainer(a);var l,o=e.length||0,p;for(l=0;l<o;l+=1)p=W.getProp(t,e[l].v,0,0,this),this.k=p.k||this.k,this.dataProps[l]={n:e[l].n,p};this.k||this.getValue(!0),this._isAnimated=this.k}fs.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,s=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<s;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},B([At],fs);function ua(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.w=W.getProp(t,e.w,0,null,this),this.d=new fs(t,e.d||{},"svg",this),this.c=W.getProp(t,e.c,1,255,this),this.style=s,this._isAnimated=!!this._isAnimated}B([At],ua);function ma(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.c=W.getProp(t,e.c,1,255,this),this.style=s}B([At],ma);function ga(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=s}B([At],ga);function Ri(t,e,s){this.data=e,this.c=ot("uint8c",e.p*4);var a=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=ot("float32",a),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=a,this.initDynamicPropertyContainer(s),this.prop=W.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Ri.prototype.comparePoints=function(t,e){for(var s=0,a=this.o.length/2,l;s<a;){if(l=Math.abs(t[s*4]-t[e*4+s*2]),l>.01)return!1;s+=1}return!0},Ri.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Ri.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,s=this.data.p*4,a,l;for(e=0;e<s;e+=1)a=e%4===0?100:255,l=Math.round(this.prop.v[e]*a),this.c[e]!==l&&(this.c[e]=l,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=this.data.p*4;e<s;e+=1)a=e%2===0?100:1,l=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==l&&(this.o[e-this.data.p*4]=l,this._omdf=!t);this._mdf=!t}},B([At],Ri);function di(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,s)}di.prototype.initGradientData=function(t,e,s){this.o=W.getProp(t,e.o,0,.01,this),this.s=W.getProp(t,e.s,1,null,this),this.e=W.getProp(t,e.e,1,null,this),this.h=W.getProp(t,e.h||{k:0},0,.01,this),this.a=W.getProp(t,e.a||{k:0},0,gt,this),this.g=new Ri(t,e.g,this),this.style=s,this.stops=[],this.setGradientData(s.pElem,e),this.setGradientOpacity(e,s),this._isAnimated=!!this._isAnimated},di.prototype.setGradientData=function(t,e){var s=Rt(),a=at(e.t===1?"linearGradient":"radialGradient");a.setAttribute("id",s),a.setAttribute("spreadMethod","pad"),a.setAttribute("gradientUnits","userSpaceOnUse");var l=[],o,p,_;for(_=e.g.p*4,p=0;p<_;p+=4)o=at("stop"),a.appendChild(o),l.push(o);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+z()+"#"+s+")"),this.gf=a,this.cst=l},di.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var s,a,l,o=at("mask"),p=at("path");o.appendChild(p);var _=Rt(),f=Rt();o.setAttribute("id",f);var k=at(t.t===1?"linearGradient":"radialGradient");k.setAttribute("id",_),k.setAttribute("spreadMethod","pad"),k.setAttribute("gradientUnits","userSpaceOnUse"),l=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var A=this.stops;for(a=t.g.p*4;a<l;a+=2)s=at("stop"),s.setAttribute("stop-color","rgb(255,255,255)"),k.appendChild(s),A.push(s);p.setAttribute(t.ty==="gf"?"fill":"stroke","url("+z()+"#"+_+")"),t.ty==="gs"&&(p.setAttribute("stroke-linecap",ca[t.lc||2]),p.setAttribute("stroke-linejoin",da[t.lj||2]),t.lj===1&&p.setAttribute("stroke-miterlimit",t.ml)),this.of=k,this.ms=o,this.ost=A,this.maskId=f,e.msElem=p}},B([At],di);function va(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=W.getProp(t,e.w,0,null,this),this.d=new fs(t,e.d||{},"svg",this),this.initGradientData(t,e,s),this._isAnimated=!!this._isAnimated}B([di,At],va);function $o(){this.it=[],this.prevViewData=[],this.gr=at("g")}function Ao(t,e,s){this.transform={mProps:t,op:e,container:s},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var _a=function(e,s,a,l){if(s===0)return"";var o=e.o,p=e.i,_=e.v,f,k=" M"+l.applyToPointStringified(_[0][0],_[0][1]);for(f=1;f<s;f+=1)k+=" C"+l.applyToPointStringified(o[f-1][0],o[f-1][1])+" "+l.applyToPointStringified(p[f][0],p[f][1])+" "+l.applyToPointStringified(_[f][0],_[f][1]);return a&&s&&(k+=" C"+l.applyToPointStringified(o[f-1][0],o[f-1][1])+" "+l.applyToPointStringified(p[0][0],p[0][1])+" "+l.applyToPointStringified(_[0][0],_[0][1]),k+="z"),k},Eo=(function(){var t=new Ct,e=new Ct,s={createRenderFunction:a};function a(R){switch(R.ty){case"fl":return _;case"gf":return k;case"gs":return f;case"st":return A;case"sh":case"el":case"rc":case"sr":return p;case"tr":return l;case"no":return o;default:return null}}function l(R,v,E){(E||v.transform.op._mdf)&&v.transform.container.setAttribute("opacity",v.transform.op.v),(E||v.transform.mProps._mdf)&&v.transform.container.setAttribute("transform",v.transform.mProps.v.to2dCSS())}function o(){}function p(R,v,E){var C,P,L,$,x,g,y=v.styles.length,S=v.lvl,M,O,V,j;for(g=0;g<y;g+=1){if($=v.sh._mdf||E,v.styles[g].lvl<S){for(O=e.reset(),V=S-v.styles[g].lvl,j=v.transformers.length-1;!$&&V>0;)$=v.transformers[j].mProps._mdf||$,V-=1,j-=1;if($)for(V=S-v.styles[g].lvl,j=v.transformers.length-1;V>0;)O.multiply(v.transformers[j].mProps.v),V-=1,j-=1}else O=t;if(M=v.sh.paths,P=M._length,$){for(L="",C=0;C<P;C+=1)x=M.shapes[C],x&&x._length&&(L+=_a(x,x._length,x.c,O));v.caches[g]=L}else L=v.caches[g];v.styles[g].d+=R.hd===!0?"":L,v.styles[g]._mdf=$||v.styles[g]._mdf}}function _(R,v,E){var C=v.style;(v.c._mdf||E)&&C.pElem.setAttribute("fill","rgb("+re(v.c.v[0])+","+re(v.c.v[1])+","+re(v.c.v[2])+")"),(v.o._mdf||E)&&C.pElem.setAttribute("fill-opacity",v.o.v)}function f(R,v,E){k(R,v,E),A(R,v,E)}function k(R,v,E){var C=v.gf,P=v.g._hasOpacity,L=v.s.v,$=v.e.v;if(v.o._mdf||E){var x=R.ty==="gf"?"fill-opacity":"stroke-opacity";v.style.pElem.setAttribute(x,v.o.v)}if(v.s._mdf||E){var g=R.t===1?"x1":"cx",y=g==="x1"?"y1":"cy";C.setAttribute(g,L[0]),C.setAttribute(y,L[1]),P&&!v.g._collapsable&&(v.of.setAttribute(g,L[0]),v.of.setAttribute(y,L[1]))}var S,M,O,V;if(v.g._cmdf||E){S=v.cst;var j=v.g.c;for(O=S.length,M=0;M<O;M+=1)V=S[M],V.setAttribute("offset",j[M*4]+"%"),V.setAttribute("stop-color","rgb("+j[M*4+1]+","+j[M*4+2]+","+j[M*4+3]+")")}if(P&&(v.g._omdf||E)){var it=v.g.o;for(v.g._collapsable?S=v.cst:S=v.ost,O=S.length,M=0;M<O;M+=1)V=S[M],v.g._collapsable||V.setAttribute("offset",it[M*2]+"%"),V.setAttribute("stop-opacity",it[M*2+1])}if(R.t===1)(v.e._mdf||E)&&(C.setAttribute("x2",$[0]),C.setAttribute("y2",$[1]),P&&!v.g._collapsable&&(v.of.setAttribute("x2",$[0]),v.of.setAttribute("y2",$[1])));else{var Z;if((v.s._mdf||v.e._mdf||E)&&(Z=Math.sqrt(Math.pow(L[0]-$[0],2)+Math.pow(L[1]-$[1],2)),C.setAttribute("r",Z),P&&!v.g._collapsable&&v.of.setAttribute("r",Z)),v.s._mdf||v.e._mdf||v.h._mdf||v.a._mdf||E){Z||(Z=Math.sqrt(Math.pow(L[0]-$[0],2)+Math.pow(L[1]-$[1],2)));var H=Math.atan2($[1]-L[1],$[0]-L[0]),nt=v.h.v;nt>=1?nt=.99:nt<=-1&&(nt=-.99);var q=Z*nt,N=Math.cos(H+v.a.v)*q+L[0],b=Math.sin(H+v.a.v)*q+L[1];C.setAttribute("fx",N),C.setAttribute("fy",b),P&&!v.g._collapsable&&(v.of.setAttribute("fx",N),v.of.setAttribute("fy",b))}}}function A(R,v,E){var C=v.style,P=v.d;P&&(P._mdf||E)&&P.dashStr&&(C.pElem.setAttribute("stroke-dasharray",P.dashStr),C.pElem.setAttribute("stroke-dashoffset",P.dashoffset[0])),v.c&&(v.c._mdf||E)&&C.pElem.setAttribute("stroke","rgb("+re(v.c.v[0])+","+re(v.c.v[1])+","+re(v.c.v[2])+")"),(v.o._mdf||E)&&C.pElem.setAttribute("stroke-opacity",v.o.v),(v.w._mdf||E)&&(C.pElem.setAttribute("stroke-width",v.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",v.w.v))}return s})();function yt(t,e,s){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,s),this.prevViewData=[]}B([Ee,hi,Li,ha,ci,Pe,zi],yt),yt.prototype.initSecondaryElement=function(){},yt.prototype.identityMatrix=new Ct,yt.prototype.buildExpressionInterface=function(){},yt.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},yt.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,s,a,l=this.stylesList.length,o,p=[],_=!1;for(a=0;a<l;a+=1){for(o=this.stylesList[a],_=!1,p.length=0,t=0;t<e;t+=1)s=this.shapes[t],s.styles.indexOf(o)!==-1&&(p.push(s),_=s._isAnimated||_);p.length>1&&_&&this.setShapesAsAnimated(p)}},yt.prototype.setShapesAsAnimated=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e].setAsAnimated()},yt.prototype.createStyleElement=function(t,e){var s,a=new fa(t,e),l=a.pElem;if(t.ty==="st")s=new ua(this,t,a);else if(t.ty==="fl")s=new ma(this,t,a);else if(t.ty==="gf"||t.ty==="gs"){var o=t.ty==="gf"?di:va;s=new o(this,t,a),this.globalData.defs.appendChild(s.gf),s.maskId&&(this.globalData.defs.appendChild(s.ms),this.globalData.defs.appendChild(s.of),l.setAttribute("mask","url("+z()+"#"+s.maskId+")"))}else t.ty==="no"&&(s=new ga(this,t,a));return(t.ty==="st"||t.ty==="gs")&&(l.setAttribute("stroke-linecap",ca[t.lc||2]),l.setAttribute("stroke-linejoin",da[t.lj||2]),l.setAttribute("fill-opacity","0"),t.lj===1&&l.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&l.setAttribute("fill-rule","evenodd"),t.ln&&l.setAttribute("id",t.ln),t.cl&&l.setAttribute("class",t.cl),t.bm&&(l.style["mix-blend-mode"]=er(t.bm)),this.stylesList.push(a),this.addToAnimatedContents(t,s),s},yt.prototype.createGroupElement=function(t){var e=new $o;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=er(t.bm)),e},yt.prototype.createTransformElement=function(t,e){var s=Xs.getTransformProperty(this,t,this),a=new Ao(s,s.o,e);return this.addToAnimatedContents(t,a),a},yt.prototype.createShapeElement=function(t,e,s){var a=4;t.ty==="rc"?a=5:t.ty==="el"?a=6:t.ty==="sr"&&(a=7);var l=ns.getShapeProp(this,t,a,this),o=new pa(e,s,l);return this.shapes.push(o),this.addShapeToModifiers(o),this.addToAnimatedContents(t,o),o},yt.prototype.addToAnimatedContents=function(t,e){for(var s=0,a=this.animatedContents.length;s<a;){if(this.animatedContents[s].element===e)return;s+=1}this.animatedContents.push({fn:Eo.createRenderFunction(t),element:e,data:t})},yt.prototype.setElementStyles=function(t){var e=t.styles,s,a=this.stylesList.length;for(s=0;s<a;s+=1)e.indexOf(this.stylesList[s])===-1&&!this.stylesList[s].closed&&e.push(this.stylesList[s])},yt.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},yt.prototype.searchShapes=function(t,e,s,a,l,o,p){var _=[].concat(o),f,k=t.length-1,A,R,v=[],E=[],C,P,L;for(f=k;f>=0;f-=1){if(L=this.searchProcessedElement(t[f]),L?e[f]=s[L-1]:t[f]._render=p,t[f].ty==="fl"||t[f].ty==="st"||t[f].ty==="gf"||t[f].ty==="gs"||t[f].ty==="no")L?e[f].style.closed=t[f].hd:e[f]=this.createStyleElement(t[f],l),t[f]._render&&e[f].style.pElem.parentNode!==a&&a.appendChild(e[f].style.pElem),v.push(e[f].style);else if(t[f].ty==="gr"){if(!L)e[f]=this.createGroupElement(t[f]);else for(R=e[f].it.length,A=0;A<R;A+=1)e[f].prevViewData[A]=e[f].it[A];this.searchShapes(t[f].it,e[f].it,e[f].prevViewData,e[f].gr,l+1,_,p),t[f]._render&&e[f].gr.parentNode!==a&&a.appendChild(e[f].gr)}else t[f].ty==="tr"?(L||(e[f]=this.createTransformElement(t[f],a)),C=e[f].transform,_.push(C)):t[f].ty==="sh"||t[f].ty==="rc"||t[f].ty==="el"||t[f].ty==="sr"?(L||(e[f]=this.createShapeElement(t[f],_,l)),this.setElementStyles(e[f])):t[f].ty==="tm"||t[f].ty==="rd"||t[f].ty==="ms"||t[f].ty==="pb"||t[f].ty==="zz"||t[f].ty==="op"?(L?(P=e[f],P.closed=!1):(P=$e.getModifier(t[f].ty),P.init(this,t[f]),e[f]=P,this.shapeModifiers.push(P)),E.push(P)):t[f].ty==="rp"&&(L?(P=e[f],P.closed=!0):(P=$e.getModifier(t[f].ty),e[f]=P,P.init(this,t,f,e),this.shapeModifiers.push(P),p=!1),E.push(P));this.addProcessedElement(t[f],f+1)}for(k=v.length,f=0;f<k;f+=1)v[f].closed=!0;for(k=E.length,f=0;f<k;f+=1)E[f].closed=!0},yt.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},yt.prototype.renderShape=function(){var t,e=this.animatedContents.length,s;for(t=0;t<e;t+=1)s=this.animatedContents[t],(this._isFirstFrame||s.element._isAnimated)&&s.data!==!0&&s.fn(s.data,s.element,this._isFirstFrame)},yt.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function sr(t,e,s,a,l,o){this.o=t,this.sw=e,this.sc=s,this.fc=a,this.m=l,this.p=o,this._mdf={o:!0,sw:!!e,sc:!!s,fc:!!a,m:!0,p:!0}}sr.prototype.update=function(t,e,s,a,l,o){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var p=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,p=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,p=!0),this.sc!==s&&(this.sc=s,this._mdf.sc=!0,p=!0),this.fc!==a&&(this.fc=a,this._mdf.fc=!0,p=!0),this.m!==l&&(this.m=l,this._mdf.m=!0,p=!0),o.length&&(this.p[0]!==o[0]||this.p[1]!==o[1]||this.p[4]!==o[4]||this.p[5]!==o[5]||this.p[12]!==o[12]||this.p[13]!==o[13])&&(this.p=o,this._mdf.p=!0,p=!0),p};function zt(t,e){this._frameId=n,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}zt.prototype.defaultBoxWidth=[0,0],zt.prototype.copyData=function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},zt.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},zt.prototype.searchProperty=function(){return this.searchKeyframes()},zt.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},zt.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},zt.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,s=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var a,l=this.effectsSequence.length,o=t||this.data.d.k[this.keysIndex].s;for(a=0;a<l;a+=1)s!==this.keysIndex?o=this.effectsSequence[a](o,o.t):o=this.effectsSequence[a](this.currentData,o.t);e!==o&&this.setCurrentData(o),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},zt.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,s=0,a=t.length;s<=a-1&&!(s===a-1||t[s+1].t>e);)s+=1;return this.keysIndex!==s&&(this.keysIndex=s),this.data.d.k[this.keysIndex].s},zt.prototype.buildFinalText=function(t){for(var e=[],s=0,a=t.length,l,o,p=!1,_=!1,f="";s<a;)p=_,_=!1,l=t.charCodeAt(s),f=t.charAt(s),Ge.isCombinedCharacter(l)?p=!0:l>=55296&&l<=56319?Ge.isRegionalFlag(t,s)?f=t.substr(s,14):(o=t.charCodeAt(s+1),o>=56320&&o<=57343&&(Ge.isModifier(l,o)?(f=t.substr(s,2),p=!0):Ge.isFlagEmoji(t.substr(s,4))?f=t.substr(s,4):f=t.substr(s,2))):l>56319?(o=t.charCodeAt(s+1),Ge.isVariationSelector(l)&&(p=!0)):Ge.isZeroWidthJoiner(l)&&(p=!0,_=!0),p?(e[e.length-1]+=f,p=!1):e.push(f),s+=f.length;return e},zt.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,s=this.data,a=[],l,o,p,_=0,f,k=s.m.g,A=0,R=0,v=0,E=[],C=0,P=0,L,$,x=e.getFontByName(t.f),g,y=0,S=ra(x);t.fWeight=S.weight,t.fStyle=S.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),o=t.finalText.length,t.finalLineHeight=t.lh;var M=t.tr/1e3*t.finalSize,O;if(t.sz)for(var V=!0,j=t.sz[0],it=t.sz[1],Z,H;V;){H=this.buildFinalText(t.t),Z=0,C=0,o=H.length,M=t.tr/1e3*t.finalSize;var nt=-1;for(l=0;l<o;l+=1)O=H[l].charCodeAt(0),p=!1,H[l]===" "?nt=l:(O===13||O===3)&&(C=0,p=!0,Z+=t.finalLineHeight||t.finalSize*1.2),e.chars?(g=e.getCharData(H[l],x.fStyle,x.fFamily),y=p?0:g.w*t.finalSize/100):y=e.measureText(H[l],t.f,t.finalSize),C+y>j&&H[l]!==" "?(nt===-1?o+=1:l=nt,Z+=t.finalLineHeight||t.finalSize*1.2,H.splice(l,nt===l?1:0,"\r"),nt=-1,C=0):(C+=y,C+=M);Z+=x.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&it<Z?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=H,o=t.finalText.length,V=!1)}C=-M,y=0;var q=0,N;for(l=0;l<o;l+=1)if(p=!1,N=t.finalText[l],O=N.charCodeAt(0),O===13||O===3?(q=0,E.push(C),P=C>P?C:P,C=-2*M,f="",p=!0,v+=1):f=N,e.chars?(g=e.getCharData(N,x.fStyle,e.getFontByName(t.f).fFamily),y=p?0:g.w*t.finalSize/100):y=e.measureText(f,t.f,t.finalSize),N===" "?q+=y+M:(C+=y+M+q,q=0),a.push({l:y,an:y,add:A,n:p,anIndexes:[],val:f,line:v,animatorJustifyOffset:0}),k==2){if(A+=y,f===""||f===" "||l===o-1){for((f===""||f===" ")&&(A-=y);R<=l;)a[R].an=A,a[R].ind=_,a[R].extra=y,R+=1;_+=1,A=0}}else if(k==3){if(A+=y,f===""||l===o-1){for(f===""&&(A-=y);R<=l;)a[R].an=A,a[R].ind=_,a[R].extra=y,R+=1;A=0,_+=1}}else a[_].ind=_,a[_].extra=0,_+=1;if(t.l=a,P=C>P?C:P,E.push(C),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=P,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=E;var b=s.a,T,d;$=b.length;var m,D,I=[];for(L=0;L<$;L+=1){for(T=b[L],T.a.sc&&(t.strokeColorAnim=!0),T.a.sw&&(t.strokeWidthAnim=!0),(T.a.fc||T.a.fh||T.a.fs||T.a.fb)&&(t.fillColorAnim=!0),D=0,m=T.s.b,l=0;l<o;l+=1)d=a[l],d.anIndexes[L]=D,(m==1&&d.val!==""||m==2&&d.val!==""&&d.val!==" "||m==3&&(d.n||d.val==" "||l==o-1)||m==4&&(d.n||l==o-1))&&(T.s.rn===1&&I.push(D),D+=1);s.a[L].s.totalChars=D;var G=-1,et;if(T.s.rn===1)for(l=0;l<o;l+=1)d=a[l],G!=d.anIndexes[L]&&(G=d.anIndexes[L],et=I.splice(Math.floor(Math.random()*I.length),1)[0]),d.anIndexes[L]=et}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=x.ascent*t.finalSize/100},zt.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var s=this.copyData({},this.data.d.k[e].s);s=this.copyData(s,t),this.data.d.k[e].s=s,this.recalculate(e),this.setCurrentData(s),this.elem.addDynamicProperty(this)},zt.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},zt.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},zt.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Po=(function(){var t=Math.max,e=Math.min,s=Math.floor;function a(o,p){this._currentTextLength=-1,this.k=!1,this.data=p,this.elem=o,this.comp=o.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(o),this.s=W.getProp(o,p.s||{k:0},0,0,this),"e"in p?this.e=W.getProp(o,p.e,0,0,this):this.e={v:100},this.o=W.getProp(o,p.o||{k:0},0,0,this),this.xe=W.getProp(o,p.xe||{k:0},0,0,this),this.ne=W.getProp(o,p.ne||{k:0},0,0,this),this.sm=W.getProp(o,p.sm||{k:100},0,0,this),this.a=W.getProp(o,p.a,0,.01,this),this.dynamicProperties.length||this.getValue()}a.prototype={getMult:function(p){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var _=0,f=0,k=1,A=1;this.ne.v>0?_=this.ne.v/100:f=-this.ne.v/100,this.xe.v>0?k=1-this.xe.v/100:A=1+this.xe.v/100;var R=Ai.getBezierEasing(_,f,k,A).get,v=0,E=this.finalS,C=this.finalE,P=this.data.sh;if(P===2)C===E?v=p>=C?1:0:v=t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v=R(v);else if(P===3)C===E?v=p>=C?0:1:v=1-t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v=R(v);else if(P===4)C===E?v=0:(v=t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v<.5?v*=2:v=1-2*(v-.5)),v=R(v);else if(P===5){if(C===E)v=0;else{var L=C-E;p=e(t(0,p+.5-E),C-E);var $=-L/2+p,x=L/2;v=Math.sqrt(1-$*$/(x*x))}v=R(v)}else P===6?(C===E?v=0:(p=e(t(0,p+.5-E),C-E),v=(1+Math.cos(Math.PI+Math.PI*2*p/(C-E)))/2),v=R(v)):(p>=s(E)&&(p-E<0?v=t(0,e(e(C,1)-(E-p),1)):v=t(0,e(C-p,1))),v=R(v));if(this.sm.v!==100){var g=this.sm.v*.01;g===0&&(g=1e-8);var y=.5-g*.5;v<y?v=0:(v=(v-y)/g,v>1&&(v=1))}return v*this.a.v},getValue:function(p){this.iterateDynamicProperties(),this._mdf=p||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,p&&this.data.r===2&&(this.e.v=this._currentTextLength);var _=this.data.r===2?1:100/this.data.totalChars,f=this.o.v/_,k=this.s.v/_+f,A=this.e.v/_+f;if(k>A){var R=k;k=A,A=R}this.finalS=k,this.finalE=A}},B([At],a);function l(o,p,_){return new a(o,p,_)}return{getTextSelectorProp:l}})();function To(t,e,s){var a={propType:!1},l=W.getProp,o=e.a;this.a={r:o.r?l(t,o.r,0,gt,s):a,rx:o.rx?l(t,o.rx,0,gt,s):a,ry:o.ry?l(t,o.ry,0,gt,s):a,sk:o.sk?l(t,o.sk,0,gt,s):a,sa:o.sa?l(t,o.sa,0,gt,s):a,s:o.s?l(t,o.s,1,.01,s):a,a:o.a?l(t,o.a,1,0,s):a,o:o.o?l(t,o.o,0,.01,s):a,p:o.p?l(t,o.p,1,0,s):a,sw:o.sw?l(t,o.sw,0,0,s):a,sc:o.sc?l(t,o.sc,1,0,s):a,fc:o.fc?l(t,o.fc,1,0,s):a,fh:o.fh?l(t,o.fh,0,0,s):a,fs:o.fs?l(t,o.fs,0,.01,s):a,fb:o.fb?l(t,o.fb,0,.01,s):a,t:o.t?l(t,o.t,0,0,s):a},this.s=Po.getTextSelectorProp(t,e.s,s),this.s.t=e.s.t}function Ye(t,e,s){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=s,this._animatorsData=ct(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(s)}Ye.prototype.searchProperties=function(){var t,e=this._textData.a.length,s,a=W.getProp;for(t=0;t<e;t+=1)s=this._textData.a[t],this._animatorsData[t]=new To(this._elem,s,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:a(this._elem,this._textData.p.a,0,0,this),f:a(this._elem,this._textData.p.f,0,0,this),l:a(this._elem,this._textData.p.l,0,0,this),r:a(this._elem,this._textData.p.r,0,0,this),p:a(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=a(this._elem,this._textData.m.a,1,0,this)},Ye.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var s=this._moreOptions.alignment.v,a=this._animatorsData,l=this._textData,o=this.mHelper,p=this._renderType,_=this.renderedLetters.length,f,k,A,R,v=t.l,E,C,P,L,$,x,g,y,S,M,O,V,j,it,Z;if(this._hasMaskedPath){if(Z=this._pathData.m,!this._pathData.n||this._pathData._mdf){var H=Z.v;this._pathData.r.v&&(H=H.reverse()),E={tLength:0,segments:[]},R=H._length-1;var nt;for(V=0,A=0;A<R;A+=1)nt=ae.buildBezierData(H.v[A],H.v[A+1],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[A+1][0]-H.v[A+1][0],H.i[A+1][1]-H.v[A+1][1]]),E.tLength+=nt.segmentLength,E.segments.push(nt),V+=nt.segmentLength;A=R,Z.v.c&&(nt=ae.buildBezierData(H.v[A],H.v[0],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[0][0]-H.v[0][0],H.i[0][1]-H.v[0][1]]),E.tLength+=nt.segmentLength,E.segments.push(nt),V+=nt.segmentLength),this._pathData.pi=E}if(E=this._pathData.pi,C=this._pathData.f.v,g=0,x=1,L=0,$=!0,M=E.segments,C<0&&Z.v.c)for(E.tLength<Math.abs(C)&&(C=-Math.abs(C)%E.tLength),g=M.length-1,S=M[g].points,x=S.length-1;C<0;)C+=S[x].partialLength,x-=1,x<0&&(g-=1,S=M[g].points,x=S.length-1);S=M[g].points,y=S[x-1],P=S[x],O=P.partialLength}R=v.length,f=0,k=0;var q=t.finalSize*1.2*.714,N=!0,b,T,d,m,D;m=a.length;var I,G=-1,et,st,dt,pt=C,xt=g,Vt=x,oe=-1,Ut,Et,jt,ut,K,ge,Me,ve,le="",_e=this.defaultPropsArray,ye;if(t.j===2||t.j===1){var Bt=0,Fe=0,Ie=t.j===2?-.5:-1,ee=0,Le=!0;for(A=0;A<R;A+=1)if(v[A].n){for(Bt&&(Bt+=Fe);ee<A;)v[ee].animatorJustifyOffset=Bt,ee+=1;Bt=0,Le=!0}else{for(d=0;d<m;d+=1)b=a[d].a,b.t.propType&&(Le&&t.j===2&&(Fe+=b.t.v*Ie),T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?Bt+=b.t.v*I[0]*Ie:Bt+=b.t.v*I*Ie);Le=!1}for(Bt&&(Bt+=Fe);ee<A;)v[ee].animatorJustifyOffset=Bt,ee+=1}for(A=0;A<R;A+=1){if(o.reset(),Ut=1,v[A].n)f=0,k+=t.yOffset,k+=N?1:0,C=pt,N=!1,this._hasMaskedPath&&(g=xt,x=Vt,S=M[g].points,y=S[x-1],P=S[x],O=P.partialLength,L=0),le="",ve="",ge="",ye="",_e=this.defaultPropsArray;else{if(this._hasMaskedPath){if(oe!==v[A].line){switch(t.j){case 1:C+=V-t.lineWidths[v[A].line];break;case 2:C+=(V-t.lineWidths[v[A].line])/2;break;default:break}oe=v[A].line}G!==v[A].ind&&(v[G]&&(C+=v[G].extra),C+=v[A].an/2,G=v[A].ind),C+=s[0]*v[A].an*.005;var ie=0;for(d=0;d<m;d+=1)b=a[d].a,b.p.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?ie+=b.p.v[0]*I[0]:ie+=b.p.v[0]*I),b.a.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?ie+=b.a.v[0]*I[0]:ie+=b.a.v[0]*I);for($=!0,this._pathData.a.v&&(C=v[0].an*.5+(V-this._pathData.f.v-v[0].an*.5-v[v.length-1].an*.5)*G/(R-1),C+=this._pathData.f.v);$;)L+O>=C+ie||!S?(j=(C+ie-L)/P.partialLength,st=y.point[0]+(P.point[0]-y.point[0])*j,dt=y.point[1]+(P.point[1]-y.point[1])*j,o.translate(-s[0]*v[A].an*.005,-(s[1]*q)*.01),$=!1):S&&(L+=P.partialLength,x+=1,x>=S.length&&(x=0,g+=1,M[g]?S=M[g].points:Z.v.c?(x=0,g=0,S=M[g].points):(L-=P.partialLength,S=null)),S&&(y=P,P=S[x],O=P.partialLength));et=v[A].an/2-v[A].add,o.translate(-et,0,0)}else et=v[A].an/2-v[A].add,o.translate(-et,0,0),o.translate(-s[0]*v[A].an*.005,-s[1]*q*.01,0);for(d=0;d<m;d+=1)b=a[d].a,b.t.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),(f!==0||t.j!==0)&&(this._hasMaskedPath?I.length?C+=b.t.v*I[0]:C+=b.t.v*I:I.length?f+=b.t.v*I[0]:f+=b.t.v*I));for(t.strokeWidthAnim&&(jt=t.sw||0),t.strokeColorAnim&&(t.sc?Et=[t.sc[0],t.sc[1],t.sc[2]]:Et=[0,0,0]),t.fillColorAnim&&t.fc&&(ut=[t.fc[0],t.fc[1],t.fc[2]]),d=0;d<m;d+=1)b=a[d].a,b.a.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?o.translate(-b.a.v[0]*I[0],-b.a.v[1]*I[1],b.a.v[2]*I[2]):o.translate(-b.a.v[0]*I,-b.a.v[1]*I,b.a.v[2]*I));for(d=0;d<m;d+=1)b=a[d].a,b.s.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?o.scale(1+(b.s.v[0]-1)*I[0],1+(b.s.v[1]-1)*I[1],1):o.scale(1+(b.s.v[0]-1)*I,1+(b.s.v[1]-1)*I,1));for(d=0;d<m;d+=1){if(b=a[d].a,T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),b.sk.propType&&(I.length?o.skewFromAxis(-b.sk.v*I[0],b.sa.v*I[1]):o.skewFromAxis(-b.sk.v*I,b.sa.v*I)),b.r.propType&&(I.length?o.rotateZ(-b.r.v*I[2]):o.rotateZ(-b.r.v*I)),b.ry.propType&&(I.length?o.rotateY(b.ry.v*I[1]):o.rotateY(b.ry.v*I)),b.rx.propType&&(I.length?o.rotateX(b.rx.v*I[0]):o.rotateX(b.rx.v*I)),b.o.propType&&(I.length?Ut+=(b.o.v*I[0]-Ut)*I[0]:Ut+=(b.o.v*I-Ut)*I),t.strokeWidthAnim&&b.sw.propType&&(I.length?jt+=b.sw.v*I[0]:jt+=b.sw.v*I),t.strokeColorAnim&&b.sc.propType)for(K=0;K<3;K+=1)I.length?Et[K]+=(b.sc.v[K]-Et[K])*I[0]:Et[K]+=(b.sc.v[K]-Et[K])*I;if(t.fillColorAnim&&t.fc){if(b.fc.propType)for(K=0;K<3;K+=1)I.length?ut[K]+=(b.fc.v[K]-ut[K])*I[0]:ut[K]+=(b.fc.v[K]-ut[K])*I;b.fh.propType&&(I.length?ut=Mr(ut,b.fh.v*I[0]):ut=Mr(ut,b.fh.v*I)),b.fs.propType&&(I.length?ut=Tr(ut,b.fs.v*I[0]):ut=Tr(ut,b.fs.v*I)),b.fb.propType&&(I.length?ut=Cr(ut,b.fb.v*I[0]):ut=Cr(ut,b.fb.v*I))}}for(d=0;d<m;d+=1)b=a[d].a,b.p.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),this._hasMaskedPath?I.length?o.translate(0,b.p.v[1]*I[0],-b.p.v[2]*I[1]):o.translate(0,b.p.v[1]*I,-b.p.v[2]*I):I.length?o.translate(b.p.v[0]*I[0],b.p.v[1]*I[1],-b.p.v[2]*I[2]):o.translate(b.p.v[0]*I,b.p.v[1]*I,-b.p.v[2]*I));if(t.strokeWidthAnim&&(ge=jt<0?0:jt),t.strokeColorAnim&&(Me="rgb("+Math.round(Et[0]*255)+","+Math.round(Et[1]*255)+","+Math.round(Et[2]*255)+")"),t.fillColorAnim&&t.fc&&(ve="rgb("+Math.round(ut[0]*255)+","+Math.round(ut[1]*255)+","+Math.round(ut[2]*255)+")"),this._hasMaskedPath){if(o.translate(0,-t.ls),o.translate(0,s[1]*q*.01+k,0),this._pathData.p.v){it=(P.point[1]-y.point[1])/(P.point[0]-y.point[0]);var Ke=Math.atan(it)*180/Math.PI;P.point[0]<y.point[0]&&(Ke+=180),o.rotate(-Ke*Math.PI/180)}o.translate(st,dt,0),C-=s[0]*v[A].an*.005,v[A+1]&&G!==v[A+1].ind&&(C+=v[A].an/2,C+=t.tr*.001*t.finalSize)}else{switch(o.translate(f,k,0),t.ps&&o.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:o.translate(v[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[v[A].line]),0,0);break;case 2:o.translate(v[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[v[A].line])/2,0,0);break;default:break}o.translate(0,-t.ls),o.translate(et,0,0),o.translate(s[0]*v[A].an*.005,s[1]*q*.01,0),f+=v[A].l+t.tr*.001*t.finalSize}p==="html"?le=o.toCSS():p==="svg"?le=o.to2dCSS():_e=[o.props[0],o.props[1],o.props[2],o.props[3],o.props[4],o.props[5],o.props[6],o.props[7],o.props[8],o.props[9],o.props[10],o.props[11],o.props[12],o.props[13],o.props[14],o.props[15]],ye=Ut}_<=A?(D=new sr(ye,ge,Me,ve,le,_e),this.renderedLetters.push(D),_+=1,this.lettersChangedFlag=!0):(D=this.renderedLetters[A],this.lettersChangedFlag=D.update(ye,ge,Me,ve,le,_e)||this.lettersChangedFlag)}}},Ye.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Ye.prototype.mHelper=new Ct,Ye.prototype.defaultPropsArray=[],B([At],Ye);function Gt(){}Gt.prototype.initElement=function(t,e,s){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,s),this.textProperty=new zt(this,t.t,this.dynamicProperties),this.textAnimator=new Ye(t.t,this.renderType,this),this.initTransform(t,e,s),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Gt.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},Gt.prototype.createPathShape=function(t,e){var s,a=e.length,l,o="";for(s=0;s<a;s+=1)e[s].ty==="sh"&&(l=e[s].ks.k,o+=_a(l,l.i.length,!0,t));return o},Gt.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},Gt.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},Gt.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},Gt.prototype.applyTextPropertiesToMatrix=function(t,e,s,a,l){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s])/2,0,0);break;default:break}e.translate(a,l,0)},Gt.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},Gt.prototype.emptyProp=new sr,Gt.prototype.destroy=function(){},Gt.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var Co={shapes:[]};function ue(t,e,s){this.textSpans=[],this.renderType="svg",this.initElement(t,e,s)}B([Ee,hi,Li,ci,Pe,zi,Gt],ue),ue.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=at("text"))},ue.prototype.buildTextContents=function(t){for(var e=0,s=t.length,a=[],l="";e<s;)t[e]==="\r"||t[e]===""?(a.push(l),l=""):l+=t[e],e+=1;return a.push(l),a},ue.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var s=t.shapes[0];if(s.it){var a=s.it[s.it.length-1];a.s&&(a.s.k[0]=e,a.s.k[1]=e)}}return t},ue.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,s=this.textProperty.currentData;this.renderedLetters=ct(s?s.l.length:0),s.fc?this.layerElement.setAttribute("fill",this.buildColor(s.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),s.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(s.sc)),this.layerElement.setAttribute("stroke-width",s.sw)),this.layerElement.setAttribute("font-size",s.finalSize);var a=this.globalData.fontManager.getFontByName(s.f);if(a.fClass)this.layerElement.setAttribute("class",a.fClass);else{this.layerElement.setAttribute("font-family",a.fFamily);var l=s.fWeight,o=s.fStyle;this.layerElement.setAttribute("font-style",o),this.layerElement.setAttribute("font-weight",l)}this.layerElement.setAttribute("aria-label",s.t);var p=s.l||[],_=!!this.globalData.fontManager.chars;e=p.length;var f,k=this.mHelper,A="",R=this.data.singleShape,v=0,E=0,C=!0,P=s.tr*.001*s.finalSize;if(R&&!_&&!s.sz){var L=this.textContainer,$="start";switch(s.j){case 1:$="end";break;case 2:$="middle";break;default:$="start";break}L.setAttribute("text-anchor",$),L.setAttribute("letter-spacing",P);var x=this.buildTextContents(s.finalText);for(e=x.length,E=s.ps?s.ps[1]+s.ascent:0,t=0;t<e;t+=1)f=this.textSpans[t].span||at("tspan"),f.textContent=x[t],f.setAttribute("x",0),f.setAttribute("y",E),f.style.display="inherit",L.appendChild(f),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=f,E+=s.finalLineHeight;this.layerElement.appendChild(L)}else{var g=this.textSpans.length,y;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!_||!R||t===0){if(f=g>t?this.textSpans[t].span:at(_?"g":"text"),g<=t){if(f.setAttribute("stroke-linecap","butt"),f.setAttribute("stroke-linejoin","round"),f.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=f,_){var S=at("g");f.appendChild(S),this.textSpans[t].childSpan=S}this.textSpans[t].span=f,this.layerElement.appendChild(f)}f.style.display="inherit"}if(k.reset(),R&&(p[t].n&&(v=-P,E+=s.yOffset,E+=C?1:0,C=!1),this.applyTextPropertiesToMatrix(s,k,p[t].line,v,E),v+=p[t].l||0,v+=P),_){y=this.globalData.fontManager.getCharData(s.finalText[t],a.fStyle,this.globalData.fontManager.getFontByName(s.f).fFamily);var M;if(y.t===1)M=new Di(y.data,this.globalData,this);else{var O=Co;y.data&&y.data.shapes&&(O=this.buildShapeData(y.data,s.finalSize)),M=new yt(O,this.globalData,this)}if(this.textSpans[t].glyph){var V=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(V.layerElement),V.destroy()}this.textSpans[t].glyph=M,M._debug=!0,M.prepareFrame(0),M.renderFrame(),this.textSpans[t].childSpan.appendChild(M.layerElement),y.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+s.finalSize/100+","+s.finalSize/100+")")}else R&&f.setAttribute("transform","translate("+k.props[12]+","+k.props[13]+")"),f.textContent=p[t].val,f.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}R&&f&&f.setAttribute("d",A)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},ue.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},ue.prototype.getValue=function(){var t,e=this.textSpans.length,s;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)s=this.textSpans[t].glyph,s&&(s.prepareFrame(this.comp.renderedFrame-this.data.st),s._mdf&&(this._mdf=!0))},ue.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;e=a.length;var l,o,p;for(t=0;t<e;t+=1)a[t].n||(l=s[t],o=this.textSpans[t].span,p=this.textSpans[t].glyph,p&&p.renderFrame(),l._mdf.m&&o.setAttribute("transform",l.m),l._mdf.o&&o.setAttribute("opacity",l.o),l._mdf.sw&&o.setAttribute("stroke-width",l.sw),l._mdf.sc&&o.setAttribute("stroke",l.sc),l._mdf.fc&&o.setAttribute("fill",l.fc))}};function rr(t,e,s){this.initElement(t,e,s)}B([Oi],rr),rr.prototype.createContent=function(){var t=at("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function Ce(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initFrame(),this.initTransform(t,e,s),this.initHierarchy()}Ce.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},Ce.prototype.renderFrame=function(){},Ce.prototype.getBaseElement=function(){return null},Ce.prototype.destroy=function(){},Ce.prototype.sourceRectAtTime=function(){},Ce.prototype.hide=function(){},B([Ee,hi,ci,Pe],Ce);function wt(){}B([Mt],wt),wt.prototype.createNull=function(t){return new Ce(t,this.globalData,this)},wt.prototype.createShape=function(t){return new yt(t,this.globalData,this)},wt.prototype.createText=function(t){return new ue(t,this.globalData,this)},wt.prototype.createImage=function(t){return new Oi(t,this.globalData,this)},wt.prototype.createSolid=function(t){return new rr(t,this.globalData,this)},wt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var s=at("clipPath"),a=at("rect");a.setAttribute("width",t.w),a.setAttribute("height",t.h),a.setAttribute("x",0),a.setAttribute("y",0);var l=Rt();s.setAttribute("id",l),s.appendChild(a),this.layerElement.setAttribute("clip-path","url("+z()+"#"+l+")"),e.appendChild(s),this.layers=t.layers,this.elements=ct(t.layers.length)},wt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},wt.prototype.updateContainerSize=function(){},wt.prototype.findIndexByInd=function(t){var e=0,s=this.layers.length;for(e=0;e<s;e+=1)if(this.layers[e].ind===t)return e;return-1},wt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var s=this.createItem(this.layers[t]);if(e[t]=s,Qi()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(s),s.initExpressions()),this.appendElementInPos(s,t),this.layers[t].tt){var a="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(a===-1)return;if(!this.elements[a]||this.elements[a]===!0)this.buildItem(a),this.addPendingElement(s);else{var l=e[a],o=l.getMatte(this.layers[t].tt);s.setMatte(o)}}}},wt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,s=this.elements.length;e<s;){if(this.elements[e]===t){var a="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,l=this.elements[a],o=l.getMatte(this.layers[e].tt);t.setMatte(o);break}e+=1}}},wt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<s;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},wt.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){for(var a=0,l;a<e;)this.elements[a]&&this.elements[a]!==!0&&this.elements[a].getBaseElement()&&(l=this.elements[a].getBaseElement()),a+=1;l?this.layerElement.insertBefore(s,l):this.layerElement.appendChild(s)}},wt.prototype.hide=function(){this.layerElement.style.display="none"},wt.prototype.show=function(){this.layerElement.style.display="block"};function me(){}B([Ee,hi,ci,Pe,zi],me),me.prototype.initElement=function(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initTransform(t,e,s),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},me.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var s,a=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),s=a-1;s>=0;s-=1)(this.completeLayers||this.elements[s])&&(this.elements[s].prepareFrame(this.renderedFrame-this.layers[s].st),this.elements[s]._mdf&&(this._mdf=!0))}},me.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},me.prototype.setElements=function(t){this.elements=t},me.prototype.getElements=function(){return this.elements},me.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},me.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Di(t,e,s){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?ct(this.layers.length):[],this.initElement(t,e,s),this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}B([wt,me,Li],Di),Di.prototype.createComp=function(t){return new Di(t,this.globalData,this)};function ar(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=at("svg");var s="";if(e&&e.title){var a=at("title"),l=Rt();a.setAttribute("id",l),a.textContent=e.title,this.svgElement.appendChild(a),s+=l}if(e&&e.description){var o=at("desc"),p=Rt();o.setAttribute("id",p),o.textContent=e.description,this.svgElement.appendChild(o),s+=" "+p}s&&this.svgElement.setAttribute("aria-labelledby",s);var _=at("defs");this.svgElement.appendChild(_);var f=at("g");this.svgElement.appendChild(f),this.layerElement=f,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:_,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return B([wt],ar),ar.prototype.createComp=function(t){return new Di(t,this.globalData,this)},Vn("svg",ar),$e.registerModifier("tm",te),$e.registerModifier("pb",Ei),$e.registerModifier("rp",ne),$e.registerModifier("rd",Pi),$e.registerModifier("zz",Ci),$e.registerModifier("op",Mi),ft}))});var Ft="ecoflow-energy-card",qt="ecoflow-house-card",Yt="ecoflow-space-card",ze="ecoflow_iot",be="/ecoflow_iot";function xe(c,i){return c&&(i?.hassUrl?i.hassUrl(c):c)}var vs=globalThis,_s=vs.ShadowRoot&&(vs.ShadyCSS===void 0||vs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nr=Symbol(),ba=new WeakMap,Vi=class{constructor(i,r,n){if(this._$cssResult$=!0,n!==nr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=r}get styleSheet(){let i=this.o,r=this.t;if(_s&&i===void 0){let n=r!==void 0&&r.length===1;n&&(i=ba.get(r)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),n&&ba.set(r,i))}return i}toString(){return this.cssText}},xa=c=>new Vi(typeof c=="string"?c:c+"",void 0,nr),Ot=(c,...i)=>{let r=c.length===1?c[0]:i.reduce((n,h,u)=>n+(w=>{if(w._$cssResult$===!0)return w.cssText;if(typeof w=="number")return w;throw Error("Value passed to 'css' function must be a 'css' function result: "+w+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(h)+c[u+1],c[0]);return new Vi(r,c,nr)},wa=(c,i)=>{if(_s)c.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of i){let n=document.createElement("style"),h=vs.litNonce;h!==void 0&&n.setAttribute("nonce",h),n.textContent=r.cssText,c.appendChild(n)}},or=_s?c=>c:c=>c instanceof CSSStyleSheet?(i=>{let r="";for(let n of i.cssRules)r+=n.cssText;return xa(r)})(c):c;var{is:Vo,defineProperty:Uo,getOwnPropertyDescriptor:Bo,getOwnPropertyNames:No,getOwnPropertySymbols:jo,getPrototypeOf:Ho}=Object,ys=globalThis,ka=ys.trustedTypes,Wo=ka?ka.emptyScript:"",Go=ys.reactiveElementPolyfillSupport,Ui=(c,i)=>c,lr={toAttribute(c,i){switch(i){case Boolean:c=c?Wo:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c)}return c},fromAttribute(c,i){let r=c;switch(i){case Boolean:r=c!==null;break;case Number:r=c===null?null:Number(c);break;case Object:case Array:try{r=JSON.parse(c)}catch{r=null}}return r}},$a=(c,i)=>!Vo(c,i),Sa={attribute:!0,type:String,converter:lr,reflect:!1,useDefault:!1,hasChanged:$a};Symbol.metadata??=Symbol("metadata"),ys.litPropertyMetadata??=new WeakMap;var we=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,r=Sa){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(i,r),!r.noAccessor){let n=Symbol(),h=this.getPropertyDescriptor(i,n,r);h!==void 0&&Uo(this.prototype,i,h)}}static getPropertyDescriptor(i,r,n){let{get:h,set:u}=Bo(this.prototype,i)??{get(){return this[r]},set(w){this[r]=w}};return{get:h,set(w){let z=h?.call(this);u?.call(this,w),this.requestUpdate(i,z,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Sa}static _$Ei(){if(this.hasOwnProperty(Ui("elementProperties")))return;let i=Ho(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Ui("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ui("properties"))){let r=this.properties,n=[...No(r),...jo(r)];for(let h of n)this.createProperty(h,r[h])}let i=this[Symbol.metadata];if(i!==null){let r=litPropertyMetadata.get(i);if(r!==void 0)for(let[n,h]of r)this.elementProperties.set(n,h)}this._$Eh=new Map;for(let[r,n]of this.elementProperties){let h=this._$Eu(r,n);h!==void 0&&this._$Eh.set(h,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let r=[];if(Array.isArray(i)){let n=new Set(i.flat(1/0).reverse());for(let h of n)r.unshift(or(h))}else i!==void 0&&r.push(or(i));return r}static _$Eu(i,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,r=this.constructor.elementProperties;for(let n of r.keys())this.hasOwnProperty(n)&&(i.set(n,this[n]),delete this[n]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wa(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,r,n){this._$AK(i,n)}_$ET(i,r){let n=this.constructor.elementProperties.get(i),h=this.constructor._$Eu(i,n);if(h!==void 0&&n.reflect===!0){let u=(n.converter?.toAttribute!==void 0?n.converter:lr).toAttribute(r,n.type);this._$Em=i,u==null?this.removeAttribute(h):this.setAttribute(h,u),this._$Em=null}}_$AK(i,r){let n=this.constructor,h=n._$Eh.get(i);if(h!==void 0&&this._$Em!==h){let u=n.getPropertyOptions(h),w=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:lr;this._$Em=h;let z=w.fromAttribute(r,u.type);this[h]=z??this._$Ej?.get(h)??z,this._$Em=null}}requestUpdate(i,r,n,h=!1,u){if(i!==void 0){let w=this.constructor;if(h===!1&&(u=this[i]),n??=w.getPropertyOptions(i),!((n.hasChanged??$a)(u,r)||n.useDefault&&n.reflect&&u===this._$Ej?.get(i)&&!this.hasAttribute(w._$Eu(i,n))))return;this.C(i,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,r,{useDefault:n,reflect:h,wrapped:u},w){n&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,w??r??this[i]),u!==!0||w!==void 0)||(this._$AL.has(i)||(this.hasUpdated||n||(r=void 0),this._$AL.set(i,r)),h===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[h,u]of this._$Ep)this[h]=u;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[h,u]of n){let{wrapped:w}=u,z=this[h];w!==!0||this._$AL.has(h)||z===void 0||this.C(h,void 0,u,z)}}let i=!1,r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw i=!1,this._$EM(),n}i&&this._$AE(r)}willUpdate(i){}_$AE(i){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(i){}firstUpdated(i){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[Ui("elementProperties")]=new Map,we[Ui("finalized")]=new Map,Go?.({ReactiveElement:we}),(ys.reactiveElementVersions??=[]).push("2.1.2");var mr=globalThis,Aa=c=>c,bs=mr.trustedTypes,Ea=bs?bs.createPolicy("lit-html",{createHTML:c=>c}):void 0,Ia="$lit$",Oe=`lit$${Math.random().toFixed(9).slice(2)}$`,La="?"+Oe,qo=`<${La}>`,Je=document,Ni=()=>Je.createComment(""),ji=c=>c===null||typeof c!="object"&&typeof c!="function",gr=Array.isArray,Yo=c=>gr(c)||typeof c?.[Symbol.iterator]=="function",hr=`[ 	
\f\r]`,Bi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pa=/-->/g,Ta=/>/g,Xe=RegExp(`>|${hr}(?:([^\\s"'>=/]+)(${hr}*=${hr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ca=/'/g,Ma=/"/g,za=/^(?:script|style|textarea|title)$/i,vr=c=>(i,...r)=>({_$litType$:c,strings:i,values:r}),F=vr(1),Kt=vr(2),Kl=vr(3),Qe=Symbol.for("lit-noChange"),kt=Symbol.for("lit-nothing"),Fa=new WeakMap,Ze=Je.createTreeWalker(Je,129);function Oa(c,i){if(!gr(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ea!==void 0?Ea.createHTML(i):i}var Ko=(c,i)=>{let r=c.length-1,n=[],h,u=i===2?"<svg>":i===3?"<math>":"",w=Bi;for(let z=0;z<r;z++){let U=c[z],B,Y,X=-1,rt=0;for(;rt<U.length&&(w.lastIndex=rt,Y=w.exec(U),Y!==null);)rt=w.lastIndex,w===Bi?Y[1]==="!--"?w=Pa:Y[1]!==void 0?w=Ta:Y[2]!==void 0?(za.test(Y[2])&&(h=RegExp("</"+Y[2],"g")),w=Xe):Y[3]!==void 0&&(w=Xe):w===Xe?Y[0]===">"?(w=h??Bi,X=-1):Y[1]===void 0?X=-2:(X=w.lastIndex-Y[2].length,B=Y[1],w=Y[3]===void 0?Xe:Y[3]==='"'?Ma:Ca):w===Ma||w===Ca?w=Xe:w===Pa||w===Ta?w=Bi:(w=Xe,h=void 0);let ot=w===Xe&&c[z+1].startsWith("/>")?" ":"";u+=w===Bi?U+qo:X>=0?(n.push(B),U.slice(0,X)+Ia+U.slice(X)+Oe+ot):U+Oe+(X===-2?z:ot)}return[Oa(c,u+(c[r]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),n]},Hi=class c{constructor({strings:i,_$litType$:r},n){let h;this.parts=[];let u=0,w=0,z=i.length-1,U=this.parts,[B,Y]=Ko(i,r);if(this.el=c.createElement(B,n),Ze.currentNode=this.el.content,r===2||r===3){let X=this.el.content.firstChild;X.replaceWith(...X.childNodes)}for(;(h=Ze.nextNode())!==null&&U.length<z;){if(h.nodeType===1){if(h.hasAttributes())for(let X of h.getAttributeNames())if(X.endsWith(Ia)){let rt=Y[w++],ot=h.getAttribute(X).split(Oe),ct=/([.?@])?(.*)/.exec(rt);U.push({type:1,index:u,name:ct[2],strings:ot,ctor:ct[1]==="."?dr:ct[1]==="?"?pr:ct[1]==="@"?fr:fi}),h.removeAttribute(X)}else X.startsWith(Oe)&&(U.push({type:6,index:u}),h.removeAttribute(X));if(za.test(h.tagName)){let X=h.textContent.split(Oe),rt=X.length-1;if(rt>0){h.textContent=bs?bs.emptyScript:"";for(let ot=0;ot<rt;ot++)h.append(X[ot],Ni()),Ze.nextNode(),U.push({type:2,index:++u});h.append(X[rt],Ni())}}}else if(h.nodeType===8)if(h.data===La)U.push({type:2,index:u});else{let X=-1;for(;(X=h.data.indexOf(Oe,X+1))!==-1;)U.push({type:7,index:u}),X+=Oe.length-1}u++}}static createElement(i,r){let n=Je.createElement("template");return n.innerHTML=i,n}};function pi(c,i,r=c,n){if(i===Qe)return i;let h=n!==void 0?r._$Co?.[n]:r._$Cl,u=ji(i)?void 0:i._$litDirective$;return h?.constructor!==u&&(h?._$AO?.(!1),u===void 0?h=void 0:(h=new u(c),h._$AT(c,r,n)),n!==void 0?(r._$Co??=[])[n]=h:r._$Cl=h),h!==void 0&&(i=pi(c,h._$AS(c,i.values),h,n)),i}var cr=class{constructor(i,r){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:r},parts:n}=this._$AD,h=(i?.creationScope??Je).importNode(r,!0);Ze.currentNode=h;let u=Ze.nextNode(),w=0,z=0,U=n[0];for(;U!==void 0;){if(w===U.index){let B;U.type===2?B=new Wi(u,u.nextSibling,this,i):U.type===1?B=new U.ctor(u,U.name,U.strings,this,i):U.type===6&&(B=new ur(u,this,i)),this._$AV.push(B),U=n[++z]}w!==U?.index&&(u=Ze.nextNode(),w++)}return Ze.currentNode=Je,h}p(i){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(i,n,r),r+=n.strings.length-2):n._$AI(i[r])),r++}},Wi=class c{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,r,n,h){this.type=2,this._$AH=kt,this._$AN=void 0,this._$AA=i,this._$AB=r,this._$AM=n,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,r=this._$AM;return r!==void 0&&i?.nodeType===11&&(i=r.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,r=this){i=pi(this,i,r),ji(i)?i===kt||i==null||i===""?(this._$AH!==kt&&this._$AR(),this._$AH=kt):i!==this._$AH&&i!==Qe&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Yo(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==kt&&ji(this._$AH)?this._$AA.nextSibling.data=i:this.T(Je.createTextNode(i)),this._$AH=i}$(i){let{values:r,_$litType$:n}=i,h=typeof n=="number"?this._$AC(i):(n.el===void 0&&(n.el=Hi.createElement(Oa(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===h)this._$AH.p(r);else{let u=new cr(h,this),w=u.u(this.options);u.p(r),this.T(w),this._$AH=u}}_$AC(i){let r=Fa.get(i.strings);return r===void 0&&Fa.set(i.strings,r=new Hi(i)),r}k(i){gr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,h=0;for(let u of i)h===r.length?r.push(n=new c(this.O(Ni()),this.O(Ni()),this,this.options)):n=r[h],n._$AI(u),h++;h<r.length&&(this._$AR(n&&n._$AB.nextSibling,h),r.length=h)}_$AR(i=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);i!==this._$AB;){let n=Aa(i).nextSibling;Aa(i).remove(),i=n}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},fi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,r,n,h,u){this.type=1,this._$AH=kt,this._$AN=void 0,this.element=i,this.name=r,this._$AM=h,this.options=u,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=kt}_$AI(i,r=this,n,h){let u=this.strings,w=!1;if(u===void 0)i=pi(this,i,r,0),w=!ji(i)||i!==this._$AH&&i!==Qe,w&&(this._$AH=i);else{let z=i,U,B;for(i=u[0],U=0;U<u.length-1;U++)B=pi(this,z[n+U],r,U),B===Qe&&(B=this._$AH[U]),w||=!ji(B)||B!==this._$AH[U],B===kt?i=kt:i!==kt&&(i+=(B??"")+u[U+1]),this._$AH[U]=B}w&&!h&&this.j(i)}j(i){i===kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},dr=class extends fi{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===kt?void 0:i}},pr=class extends fi{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==kt)}},fr=class extends fi{constructor(i,r,n,h,u){super(i,r,n,h,u),this.type=5}_$AI(i,r=this){if((i=pi(this,i,r,0)??kt)===Qe)return;let n=this._$AH,h=i===kt&&n!==kt||i.capture!==n.capture||i.once!==n.once||i.passive!==n.passive,u=i!==kt&&(n===kt||h);h&&this.element.removeEventListener(this.name,this,n),u&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},ur=class{constructor(i,r,n){this.element=i,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(i){pi(this,i)}};var Xo=mr.litHtmlPolyfillSupport;Xo?.(Hi,Wi),(mr.litHtmlVersions??=[]).push("3.3.3");var Ra=(c,i,r)=>{let n=r?.renderBefore??i,h=n._$litPart$;if(h===void 0){let u=r?.renderBefore??null;n._$litPart$=h=new Wi(i.insertBefore(Ni(),u),u,void 0,r??{})}return h._$AI(c),h};var _r=globalThis,St=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Ra(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qe}};St._$litElement$=!0,St.finalized=!0,_r.litElementHydrateSupport?.({LitElement:St});var Zo=_r.litElementPolyfillSupport;Zo?.({LitElement:St});(_r.litElementVersions??=[]).push("4.2.2");var xs=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function ui(c){return xs.some(i=>i.key===c)?`${be}/devices/${c}.png`:null}function ti(c){return typeof c=="string"&&c.includes(`${be}/`)&&c.endsWith(".png")?`${c.slice(0,-4)}.webp`:null}function Da(c){let i=Jo(c);return i?ui(i):null}function Jo(c){if(!c)return null;let i=xs.find(r=>r.match&&r.match.test(c));return i?i.key:null}var Qo={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","sys_load","sys_grid_power","load_from_pv","load_from_grid","load_from_bat","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function tl(c){return Object.values(c.entities||{}).filter(i=>i.platform===ze)}function el(c){if(c.translation_key)return c.translation_key;let i=c.entity_id.split(".")[1],r=i.lastIndexOf("_");return r>=0?i.slice(r+1):i}var Va=new WeakMap;function Xt(c){let i=c.entities;if(!i)return[];let r=Va.get(i);if(r&&r.devReg===c.devices)return r.devices;let n=new Map;for(let u of tl(c))u.device_id&&(n.has(u.device_id)||n.set(u.device_id,[]),n.get(u.device_id).push(u));let h=[];for(let[u,w]of n)w.some(z=>el(z)==="pv_total")&&h.push({deviceId:u,device:c.devices?.[u],ents:w});return Va.set(i,{devReg:c.devices,devices:h}),h}function mi(c,i,r){if(!c||!i||c.entities!==i.entities||c.devices!==i.devices||c.locale!==i.locale||c.language!==i.language)return!0;for(let n of r)if(n&&c.states[n]!==i.states[n])return!0;return!1}var Ua=new WeakMap;function Zt(c,i){let r=Ua.get(i);if(r)return r;let n={};for(let h of i){let[u]=h.entity_id.split("."),w=h.translation_key;w&&(Qo[u]||[]).includes(w)&&(n[`${u}.${w}`]=h.entity_id)}if(!n["sensor.cms_batt_soc"])for(let h of i){if(!h.entity_id.startsWith("sensor."))continue;let u=c.states?.[h.entity_id];if(u?.attributes?.device_class==="battery"&&u?.attributes?.unit_of_measurement==="%"){n["sensor.cms_batt_soc"]=h.entity_id;break}}return Ua.set(i,n),n}async function qi(c){if(!c?.callWS)return{};try{return await c.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function Ba(c){let i=await qi(c),r=Object.keys(i);if(!r.length)return[];let n=[];try{n=await c.callWS({type:"config_entries/get"})||[]}catch{n=[]}let h=new Map(n.map(u=>[u.entry_id,u]));return r.map(u=>({id:u,title:h.get(u)?.title||h.get(u)?.domain||u,domain:h.get(u)?.domain||""}))}function ws(c,i){let r=i===void 0?Object.keys(c||{}):i,n={};for(let h of r){let u=c?.[h]?.wh_hours;if(u)for(let[w,z]of Object.entries(u)){let U=Number(z);Number.isFinite(U)&&(n[w]=(n[w]||0)+U)}}return n}function Yi(c,i=new Date){let r=i.getFullYear(),n=i.getMonth(),h=i.getDate(),u={};for(let[w,z]of Object.entries(c||{})){let U=new Date(w);Number.isNaN(U.getTime())||U.getFullYear()===r&&U.getMonth()===n&&U.getDate()===h&&(u[U.getHours()]=(u[U.getHours()]||0)+z)}return u}function Ki(c,i=new Date){let r=Yi(c,i),n=Object.keys(r);return n.length?n.reduce((h,u)=>h+r[u],0):null}async function il(c){if(!c?.callWS)return null;try{return await c.callWS({type:"energy/get_prefs"})||null}catch{return null}}function sl(c){let i={solar:[],gridFrom:[],gridTo:[],batIn:[],batOut:[]};for(let r of c?.energy_sources||[])if(r.type==="solar"&&r.stat_energy_from&&i.solar.push(r.stat_energy_from),r.type==="battery"&&(r.stat_energy_to&&i.batIn.push(r.stat_energy_to),r.stat_energy_from&&i.batOut.push(r.stat_energy_from)),r.type==="grid"){for(let n of r.flow_from||[])n.stat_energy_from&&i.gridFrom.push(n.stat_energy_from);for(let n of r.flow_to||[])n.stat_energy_to&&i.gridTo.push(n.stat_energy_to)}return i}async function rl(c){try{let i=await c.callWS({type:"recorder/list_statistic_ids"})||[],r={};for(let n of i)r[n.statistic_id]=n.statistics_unit_of_measurement||n.unit_of_measurement||n.display_unit_of_measurement||"";return r}catch{return{}}}function al(c,i){let r=(i||"").toLowerCase();return r==="wh"?c/1e3:r==="mwh"?c*1e3:c}async function Gi(c,i,r){if(!c?.callWS||!i.length)return 0;let n=new Date,h=new Date(n.getFullYear(),n.getMonth(),n.getDate());try{let u=await c.callWS({type:"recorder/statistics_during_period",start_time:h.toISOString(),statistic_ids:i,period:"hour",types:["change"]}),w=0;for(let z of i){let U=0;for(let B of u?.[z]||[]){let Y=Number(B.change);Number.isFinite(Y)&&(U+=Y)}w+=al(U,r[z])}return w}catch{return 0}}async function Na(c){let i=await il(c);if(!i)return null;let r=sl(i),n=await rl(c),[h,u,w,z,U]=await Promise.all([Gi(c,r.solar,n),Gi(c,r.gridFrom,n),Gi(c,r.gridTo,n),Gi(c,r.batIn,n),Gi(c,r.batOut,n)]),B=h+u+U-w-z,Y=B>0?Math.max(0,Math.min(100,Math.round((1-u/B)*100))):null;return{solar:h,gridImport:u,gridExport:w,batIn:z,batOut:U,consumption:B,independence:Y}}async function ks(c,i,r,n){if(!c?.callWS||!i)return null;let h=new Date,w={type:"recorder/statistics_during_period",start_time:(r instanceof Date?r:new Date(h.getFullYear(),h.getMonth(),h.getDate())).toISOString(),statistic_ids:[i],period:"hour",types:["change"]};n instanceof Date&&(w.end_time=n.toISOString());try{let U=(await c.callWS(w))?.[i];if(!Array.isArray(U))return null;let B={};for(let Y of U){let X=new Date(Y.start),rt=Number(Y.change);Number.isNaN(X.getTime())||!Number.isFinite(rt)||(B[X.getHours()]=(B[X.getHours()]||0)+rt)}return B}catch{return null}}function ht(c){return typeof c=="string"&&/\{[{%]/.test(c)}function mt(c){return typeof c=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(c)}function lt(c){let i=Number(c?.state);return Number.isFinite(i)?i:null}function he(c){return c==null||!Number.isFinite(c)?null:Math.abs(c)>=1e3?`${(c/1e3).toFixed(2)} kW`:`${Math.round(c)} W`}function ce(c){return c==null||!Number.isFinite(c)?{n:"\u2013",u:"W"}:Math.abs(c)>=1e3?{n:(c/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(c)),u:"W"}}function Ss(c){return{n:c!=null&&Number.isFinite(c)?c.toFixed(1):"\u2013",u:"kWh"}}function yr(c,i=1){return c==null||!Number.isFinite(c)?null:Math.abs(c)>=1e3?`${(c/1e3).toFixed(i)} kWh`:`${Math.round(c)} Wh`}function ja(c){if(c==null||!Number.isFinite(c))return null;let i=Math.round(c);if(i<60)return`${i} min`;let r=Math.floor(i/60);if(r<24){let u=i%60;return u?`${r} h ${u} min`:`${r} h`}let n=Math.floor(r/24),h=r%24;return h?`${n} d ${h} h`:`${n} d`}var Ha=!1;async function Jt(){if(!Ha){Ha=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var Wa={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?"},house:{home:"Home",grid:"Grid",from_grid:"From grid",to_grid:"To grid",idle:"Idle",not_setup:"Card not set up \u2014 add the EcoFlow IoT integration",page:{appearance:"Appearance",display:"What to show",battery:"Battery",entities:"Entities",panels:"Solar panels"},short:{show_flows:"Flows",show_grid:"Grid",show_solar:"Solar",show_home:"Home",show_battery:"Battery"},mode:{auto:"Automatic",day:"Day",night:"Night"},toggle:{show_flows:"Animate energy flows",show_grid:"Show grid power",show_solar:"Show solar power",show_home:"Show home consumption",show_battery:"Show battery"},editor:{style:"House style",style_n:"House {n}",mode:"Day / night",battery:"Battery",battery_hint:"Pick the device render that matches your setup. Shown in front of the house.",custom:"Custom house image",custom_light:"Light / day image",custom_dark:"Dark / night image",custom_remove:"Remove",uploading:"Uploading\u2026",custom_hint:"Upload your own house render to use instead of the built-in styles. The dark image is shown at night (auto/night mode); upload only the light one to use it for both. For a perfect fit, match the built-in 2340\xD71680 layout \u2014 download the full set below to trace over.",download_zip:"Download all house images (.zip)",preparing:"Preparing download\u2026",entities:"Entities",entities_hint:"Override the auto-detected sensors that drive the scene. Leave empty to use the integration's defaults."},battery:{bk621:"Stream Ultra",bk620:"Stream AC / Microinverter",re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + gateway",re305_or_re306_battery:"PowerOcean battery",re305_or_re306_device:"PowerOcean + inverter",re305_device:"PowerOcean (E7 battery)",re306_dpu_combo:"Delta Pro Ultra (DPU)",re306_device:"PowerOcean DPU",re306_dpu_battery:"PowerOcean DPU (stacked)",po_space_re305_battery:"Battery stack",po_space_battery:"Battery + inverter",po_space_battery_system_battery:"Single battery",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Battery (JT303)",jt321_space_battery:"Battery (JT321)",dc303_space_battery:"Battery (DC303)"}},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_max:"Max output",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_hint_max:"Rename a panel, set its maximum output (scales its bar in the solar dialog), or hide it from the breakdown.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",sys_grid_power:"Grid power (whole system)",sys_load:"Home consumption",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}},space:{page:{appearance:"Appearance",weather:"Weather",overlays:"Floating overlays",tiles:"Bottom tiles",tabs:"Sidebar tabs",panels:"Solar panels"},n_items:"{n} configured",weather_hint:"Pick a weather entity to show the temperature and humidity in the top bar. Leave empty to hide it.",weather_entity:"Weather entity",overlays_hint:"Floating values over the house. Drag a chip on the preview to position it, or fine-tune with X/Y below. Bind each to an auto-detected sensor, any entity, or a template.",add_overlay:"Add overlay",tiles_hint:"The cards along the bottom. Each shows a value from a sensor, entity, or template.",add_tile:"Add tile",tabs_hint:"The sidebar buttons. The first is always Home (the scene above); each other tab embeds an existing Lovelace view by its path.",rail_labels:"Show labels under icons",rail_align:"Align items",f_rail_size:"Sidebar size (\xD7)",align:{start:"Top",center:"Center",end:"Bottom"},add_tab:"Add tab",home_tab:"Home",path_hint:"Lovelace view path, e.g. solar or dashboard-name/solar",f_label:"Label",f_icon:"Icon (mdi:\u2026)",f_unit:"Unit",f_anchor:"Anchor",f_color:"Value color (optional)",f_icon_color:"Icon color (optional)",f_dot:"Status dot color (optional)",f_low:"Night low (text, entity or template)",f_slot:"Sensor",f_secondary:"Secondary line (text, entity or template)",f_path:"View path",f_co2_value:"CO\u2082 saved (text, entity or template)",f_co2_trees:"Trees equivalent (optional)",co2_title:"CO\u2082 chip",co2_hint:"An optional chip in the centre of the top bar, as in the app.",f_preset:"Preset",f_size:"Size (\xD7)",f_weather_size:"Weather size (\xD7)",f_clock_size:"Clock size (\xD7)",f_tiles_size:"Tile size (\xD7)",clock_title:"Clock",clock_show:"Show clock (top center)",clock_date:"Show date",preset_none:"None (custom)",preset_hint:"Auto-bound and styled. Set Preset to \u201CNone (custom)\u201D to choose your own entity or template.",today:"Today",preset:{solar:"Solar power",grid:"Grid power",battery:"Battery power",solar_today:"Solar produced today",usage:"Consumption today",energy_independence:"Energy independence"},src_auto:"Auto",src_entity:"Entity",src_template:"Template",anchor:{center:"Center","top-left":"Top left","top-center":"Top center","top-right":"Top right","bottom-left":"Bottom left","bottom-center":"Bottom center","bottom-right":"Bottom right"},remove:"Remove",embed_missing:"Lovelace view not found \u2014 check the path in the editor.",embed_empty:"No view path set for this tab.",clear_color:"Clear colour"}};var Ga={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?"},house:{home:"Hausnetz",grid:"Netz",from_grid:"Vom Netz",to_grid:"Ins Netz",idle:"Bereit",not_setup:"Karte nicht eingerichtet \u2013 richten Sie die EcoFlow IoT-Integration ein",page:{appearance:"Darstellung",display:"Anzeige",battery:"Batterie",entities:"Entit\xE4ten",panels:"Solarmodule"},short:{show_flows:"Fl\xFCsse",show_grid:"Netz",show_solar:"Solar",show_home:"Haus",show_battery:"Batterie"},mode:{auto:"Automatisch",day:"Tag",night:"Nacht"},toggle:{show_flows:"Energiefl\xFCsse animieren",show_grid:"Netzleistung anzeigen",show_solar:"Solarleistung anzeigen",show_home:"Hausverbrauch anzeigen",show_battery:"Batterie anzeigen"},editor:{style:"Haus-Stil",style_n:"Haus {n}",mode:"Tag / Nacht",battery:"Batterie",battery_hint:"W\xE4hle das Ger\xE4te-Render, das zu deinem Aufbau passt. Es wird vor dem Haus angezeigt.",custom:"Eigenes Hausbild",custom_light:"Helles / Tag-Bild",custom_dark:"Dunkles / Nacht-Bild",custom_remove:"Entfernen",uploading:"Wird hochgeladen \u2026",custom_hint:"Lade dein eigenes Haus-Render hoch, um es statt der mitgelieferten Stile zu verwenden. Das dunkle Bild wird nachts angezeigt (Auto-/Nacht-Modus); lade nur das helle hoch, um es f\xFCr beide zu nutzen. F\xFCr eine perfekte Passung das mitgelieferte Format 2340\xD71680 \xFCbernehmen \u2013 lade unten den kompletten Satz zum Nachzeichnen herunter.",download_zip:"Alle Hausbilder herunterladen (.zip)",preparing:"Download wird vorbereitet \u2026",entities:"Entit\xE4ten",entities_hint:"\xDCberschreiben Sie die automatisch erkannten Sensoren, die die Darstellung steuern. Leer lassen, um die Standardwerte der Integration zu verwenden."},battery:{bk621:"Stream Ultra",bk620:"Stream AC / Microinverter",re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + Gateway",re305_or_re306_battery:"PowerOcean Batterie",re305_or_re306_device:"PowerOcean + Wechselrichter",re305_device:"PowerOcean (E7-Batterie)",re306_dpu_combo:"Delta Pro Ultra (DPU)",re306_device:"PowerOcean DPU",re306_dpu_battery:"PowerOcean DPU (gestapelt)",po_space_re305_battery:"Batteriestapel",po_space_battery:"Batterie + Wechselrichter",po_space_battery_system_battery:"Einzelbatterie",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Batterie (JT303)",jt321_space_battery:"Batterie (JT321)",dc303_space_battery:"Batterie (DC303)"}},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_max:"Maximale Leistung",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_hint_max:"Modul umbenennen, die maximale Leistung setzen (skaliert den Balken im Solar-Dialog) oder aus der Aufschl\xFCsselung ausblenden.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",sys_grid_power:"Netzleistung (Gesamtsystem)",sys_load:"Hausverbrauch",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}},space:{page:{appearance:"Darstellung",weather:"Wetter",overlays:"Schwebende Overlays",tiles:"Kacheln unten",tabs:"Seitenleisten-Tabs",panels:"Solarmodule"},n_items:"{n} konfiguriert",weather_hint:"W\xE4hle eine Wetter-Entit\xE4t, um Temperatur und Luftfeuchte in der Kopfzeile zu zeigen. Leer lassen zum Ausblenden.",weather_entity:"Wetter-Entit\xE4t",overlays_hint:"Schwebende Werte \xFCber dem Haus. Ziehe einen Chip in der Vorschau zum Positionieren oder nutze X/Y unten. Binde jeden an einen erkannten Sensor, eine Entit\xE4t oder ein Template.",add_overlay:"Overlay hinzuf\xFCgen",tiles_hint:"Die Kacheln am unteren Rand. Jede zeigt einen Wert aus Sensor, Entit\xE4t oder Template.",add_tile:"Kachel hinzuf\xFCgen",tabs_hint:"Die Seitenleisten-Buttons. Der erste ist immer Home (die Szene oben); jeder weitere Tab bettet eine vorhandene Lovelace-Ansicht per Pfad ein.",rail_labels:"Beschriftungen unter Symbolen anzeigen",rail_align:"Ausrichtung",f_rail_size:"Seitenleisten-Gr\xF6\xDFe (\xD7)",align:{start:"Oben",center:"Mitte",end:"Unten"},add_tab:"Tab hinzuf\xFCgen",home_tab:"Home",path_hint:"Lovelace-Ansichtspfad, z. B. solar oder dashboard-name/solar",f_label:"Bezeichnung",f_icon:"Symbol (mdi:\u2026)",f_unit:"Einheit",f_anchor:"Anker",f_color:"Wertfarbe (optional)",f_icon_color:"Symbolfarbe (optional)",f_dot:"Statuspunkt-Farbe (optional)",f_low:"Nacht-Tiefstwert (Text, Entit\xE4t oder Template)",f_slot:"Sensor",f_secondary:"Zweite Zeile (Text, Entit\xE4t oder Template)",f_path:"Ansichtspfad",f_co2_value:"CO\u2082 eingespart (Text, Entit\xE4t oder Template)",f_co2_trees:"Baum-\xC4quivalent (optional)",co2_title:"CO\u2082-Chip",co2_hint:"Ein optionaler Chip in der Mitte der Kopfzeile, wie in der App.",f_preset:"Vorlage",f_size:"Gr\xF6\xDFe (\xD7)",f_weather_size:"Wetter-Gr\xF6\xDFe (\xD7)",f_clock_size:"Uhr-Gr\xF6\xDFe (\xD7)",f_tiles_size:"Kachel-Gr\xF6\xDFe (\xD7)",clock_title:"Uhr",clock_show:"Uhr anzeigen (oben mittig)",clock_date:"Datum anzeigen",preset_none:"Keine (benutzerdefiniert)",preset_hint:"Automatisch verkn\xFCpft und gestylt. Setze die Vorlage auf \u201EKeine\u201C, um eine eigene Entit\xE4t oder ein Template zu w\xE4hlen.",today:"Heute",preset:{solar:"Solarleistung",grid:"Netzleistung",battery:"Batterieleistung",solar_today:"Heute erzeugter Solarstrom",usage:"Verbrauch heute",energy_independence:"Energieunabh\xE4ngigkeit"},src_auto:"Auto",src_entity:"Entit\xE4t",src_template:"Template",anchor:{center:"Mitte","top-left":"Oben links","top-center":"Oben mittig","top-right":"Oben rechts","bottom-left":"Unten links","bottom-center":"Unten mittig","bottom-right":"Unten rechts"},remove:"Entfernen",embed_missing:"Lovelace-Ansicht nicht gefunden \u2014 Pfad im Editor pr\xFCfen.",embed_empty:"F\xFCr diesen Tab ist kein Ansichtspfad gesetzt.",clear_color:"Farbe entfernen"}};var br={en:Wa,de:Ga};function ll(c){return(c?.locale?.language||c?.language||"en").split("-")[0]}function qa(c,i){let r=i.split(".").reduce((n,h)=>n?.[h],c);return typeof r=="string"?r:void 0}function vt(c,i,r={}){let n=br[ll(c)]||br.en,h=qa(n,i)??qa(br.en,i)??i;for(let[u,w]of Object.entries(r))h=h.replace(`{${u}}`,w);return h}var Ya=Ot`
  ha-card {
    padding: 20px;
  }
  .empty {
    padding: 8px;
    color: var(--secondary-text-color);
  }
  .clickable {
    cursor: pointer;
  }
  /* <picture> wrappers shouldn't affect layout; the inner <img> is the box. */
  picture {
    display: contents;
  }

  /* header: name + AC on the left, battery/device circle on the right */
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }
  .head-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
  }
  .name {
    font-size: 1.4em;
    font-weight: 700;
    line-height: 1.15;
  }
  .subtitle {
    color: var(--secondary-text-color);
    font-size: 0.95em;
  }
  /* battery / device circle (right of the header, vertically centred) */
  .batt-circle {
    position: relative;
    width: 152px;
    height: 152px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--secondary-background-color);
  }
  /* energy-flow particles: small dots that stream inward (absorbed into the
     device) while charging and outward while discharging — replaces the old
     pulsing glow. Lives behind the device image so particles visually merge
     into / emerge from the device near the centre.

     State changes are animated, never an instant swap: the whole layer fades
     via opacity (.show), the dot colour transitions between charge/discharge,
     and going idle pauses the animation in place (instead of snapping the dots
     to the centre) so they fade out gracefully. */
  .batt-particles {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.55s ease;
  }
  .batt-particles.show {
    opacity: 1;
  }
  .batt-particles .particle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    margin: -2.5px 0 0 -2.5px;
    border-radius: 50%;
    opacity: 0;
    will-change: transform, opacity;
    transition: background-color 0.55s ease, box-shadow 0.55s ease;
  }
  .batt-particles.charge .particle {
    background-color: var(--state-sensor-battery-high-color, #43a047);
    box-shadow: 0 0 5px color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 70%, transparent);
    animation: particle-charge 1.6s linear infinite;
  }
  .batt-particles.discharge .particle {
    background-color: var(--info-color, #2196f3);
    box-shadow: 0 0 5px color-mix(in srgb, var(--info-color, #2196f3) 70%, transparent);
    animation: particle-discharge 1.6s linear infinite;
  }
  /* while fading out (idle) keep the dots frozen where they are rather than
     letting the animation reset them to the centre. */
  .batt-particles:not(.show) .particle {
    animation-play-state: paused;
  }
  @keyframes particle-charge {
    0% {
      transform: rotate(var(--angle)) translateY(-64px) scale(1);
      opacity: 0;
    }
    15%,
    80% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateY(-22px) scale(0.3);
      opacity: 0;
    }
  }
  @keyframes particle-discharge {
    0% {
      transform: rotate(var(--angle)) translateY(-22px) scale(0.3);
      opacity: 0;
    }
    15%,
    80% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateY(-64px) scale(1);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .batt-particles .particle,
    .ring-spin {
      animation: none !important;
    }
  }
  .batt-ring {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .ring-track {
    fill: none;
    stroke: var(--divider-color);
    stroke-width: 5;
  }
  .ring-fill {
    fill: none;
    stroke: var(--state-sensor-battery-high-color, #43a047);
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease, stroke 0.55s ease;
  }
  .ring-fill.low {
    stroke: var(--error-color, #db4437);
  }
  .ring-fill.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-fill.discharge {
    stroke: var(--info-color, #2196f3);
  }
  /* a spark that travels around the ring while charging / discharging; fades
     in/out (.show) and transitions colour rather than popping on state change.
     Its own overlay <svg> is what rotates: animating the HTML-level element
     runs on the compositor, while rotating a circle inside the ring SVG would
     repaint the whole SVG every frame on mobile. */
  .ring-spin {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.55s ease;
    will-change: transform;
  }
  .ring-spin circle {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke 0.55s ease;
  }
  .ring-spin.show {
    opacity: 1;
  }
  .ring-spin.charge {
    animation: ring-spin 1.5s linear infinite;
  }
  .ring-spin.charge circle {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-spin.discharge {
    animation: ring-spin 1.9s linear infinite reverse;
  }
  .ring-spin.discharge circle {
    stroke: var(--info-color, #2196f3);
  }
  .ring-spin:not(.show) {
    animation-play-state: paused;
  }
  @keyframes ring-spin {
    to {
      transform: rotate(360deg);
    }
  }
  /* charge / discharge / reserve limit ticks on the ring */
  .ring-tick {
    stroke-width: 2.4;
    stroke-linecap: round;
  }
  .ring-tick.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-tick.discharge {
    stroke: var(--error-color, #db4437);
  }
  .ring-tick.reserve {
    stroke: var(--primary-text-color);
  }
  .batt-circle .device-img {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 58%;
    max-height: 58%;
    object-fit: contain;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
  }
  .batt-icon {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    --mdc-icon-size: 56px;
    color: var(--state-icon-color, var(--primary-text-color));
  }
  .batt-badge {
    position: absolute;
    left: 50%;
    bottom: -3px;
    transform: translateX(-50%);
    background: var(--card-background-color, var(--ha-card-background));
    border: 1px solid var(--divider-color);
    border-radius: 13px;
    padding: 1px 11px;
    font-weight: 800;
    font-size: 1.05em;
    color: var(--primary-text-color);
  }
  .batt-speed {
    position: absolute;
    left: 50%;
    top: -3px;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 3px;
    border-radius: 13px;
    padding: 2px 9px;
    font-size: 0.78em;
    font-weight: 700;
    white-space: nowrap;
    background: var(--card-background-color, var(--ha-card-background));
    border: 1px solid var(--divider-color);
  }
  .batt-speed ha-icon {
    --mdc-icon-size: 14px;
  }
  .batt-speed.charge {
    color: var(--state-sensor-battery-high-color, #43a047);
  }
  .batt-speed.discharge {
    color: var(--info-color, #2196f3);
  }

  /* AC sockets (stacked, compact, in the header's left column) */
  .ac {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 14px;
  }
  .ac-socket {
    display: flex;
    align-items: center;
    gap: 9px;
    background: var(--secondary-background-color);
    border-radius: 12px;
    padding: 6px 10px;
    transition: filter 0.15s ease;
  }
  .ac-socket:hover {
    filter: brightness(1.08);
  }
  .ac-socket ha-switch {
    --mdc-switch-track-width: 32px;
    transform: scale(0.85);
    transform-origin: right center;
  }
  .ac-icon {
    --mdc-icon-size: 19px;
    color: var(--secondary-text-color);
  }
  .ac-icon.on {
    color: var(--state-switch-active-color, var(--primary-color));
  }
  .ac-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }
  .ac-name {
    color: var(--secondary-text-color);
    font-size: 0.8em;
    line-height: 1.2;
  }
  .ac-power {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .ac-power .metric-num {
    font-size: 1.05em;
  }

  /* power stats */
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }
  /* a configured stat list can hold any number of tiles — let them wrap. */
  .stats.custom {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
  .stat {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: filter 0.15s ease, transform 0.1s ease;
  }
  .stat.clickable:hover {
    filter: brightness(1.08);
  }
  .stat.clickable:active {
    transform: scale(0.99);
  }
  .stat-head {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }
  .stat-head ha-icon,
  .stat-head ha-state-icon {
    --mdc-icon-size: 18px;
  }
  .stat-head .more {
    margin-left: auto;
    opacity: 0.6;
    --mdc-icon-size: 16px;
  }
  .stat-value {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .stat-sub {
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  /* shared number + muted unit, used for every primary value */
  .metric {
    display: inline-flex;
    align-items: baseline;
    gap: 3px;
  }
  .metric-num {
    font-size: 1.4em;
    font-weight: 800;
    line-height: 1;
  }
  .metric-unit {
    font-size: 0.78em;
    font-weight: 600;
    opacity: 0.8;
  }
  .solar .stat-value {
    color: var(--energy-solar-color, #ff9800);
  }
  .grid.import .stat-value {
    color: var(--energy-grid-consumption-color, #488fc2);
  }
  .grid.export .stat-value {
    color: var(--energy-grid-return-color, #8353d1);
  }

  /* today's production + forecast */
  .today {
    margin-top: 16px;
    padding: 14px;
    border-radius: 14px;
    background: var(--secondary-background-color);
    transition: filter 0.15s ease;
  }
  .today.clickable:hover {
    filter: brightness(1.08);
  }
  .today-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .today-more {
    align-self: center;
    margin-left: auto;
    color: var(--secondary-text-color);
    --mdc-icon-size: 18px;
  }
  .today-more + .today-value {
    margin-left: 8px;
  }
  .today-head ha-icon {
    --mdc-icon-size: 18px;
    color: var(--energy-solar-color, #ff9800);
    align-self: center;
  }
  .today-label {
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }
  .today-value {
    margin-left: auto;
    font-weight: 800;
    color: var(--energy-solar-color, #ff9800);
  }
  .fc-bar {
    height: 10px;
    border-radius: 5px;
    background: var(--divider-color);
    margin: 12px 0 6px;
    overflow: hidden;
  }
  .fc-fill {
    height: 100%;
    border-radius: 5px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-fill.met {
    background: var(--state-sensor-battery-high-color, #43a047);
  }
  .fc-legend {
    display: flex;
    justify-content: space-between;
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  .fc-legend b {
    color: var(--primary-text-color);
    font-weight: 700;
  }

  /* dialog */
  .dlg-body {
    padding: 4px 4px 8px;
  }
  .dlg-section {
    margin: 18px 4px 6px;
    font-weight: 700;
    color: var(--primary-text-color);
  }

  /* battery detail dialog */
  .batt-detail {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 4px 2px 6px;
  }
  .batt-hero {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  img.batt-hero-img {
    width: 96px;
    height: 96px;
    object-fit: contain;
  }
  ha-icon.batt-hero-img {
    --mdc-icon-size: 72px;
    color: var(--secondary-text-color);
  }
  .batt-hero-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .batt-hero-pct {
    font-size: 2.6em;
    font-weight: 700;
    line-height: 1;
    color: var(--primary-text-color);
  }
  .batt-hero-u {
    font-size: 0.45em;
    font-weight: 600;
    color: var(--secondary-text-color);
    margin-left: 2px;
  }
  .batt-hero-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.95em;
    font-weight: 600;
    color: var(--secondary-text-color);
  }
  .batt-hero-status ha-icon {
    --mdc-icon-size: 18px;
  }
  .batt-hero-status.charge {
    color: var(--state-sensor-battery-high-color, #43a047);
  }
  .batt-hero-status.discharge {
    color: var(--info-color, #2196f3);
  }
  .batt-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .batt-tile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border-radius: 12px;
    background: var(--secondary-background-color);
  }
  .batt-tile.clickable {
    cursor: pointer;
    transition: filter 0.15s ease;
  }
  .batt-tile.clickable:hover {
    filter: brightness(1.06);
  }
  .batt-tile > ha-icon {
    --mdc-icon-size: 22px;
    color: var(--primary-color);
    flex: 0 0 auto;
  }
  .batt-tile-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .batt-tile-val {
    font-size: 1.05em;
    font-weight: 700;
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .batt-tile-label {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .confirm-body {
    padding: 4px 4px 0;
  }
  .confirm-text {
    color: var(--secondary-text-color);
    font-size: 0.95em;
    line-height: 1.45;
  }
  .confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;
  }
  .text-btn,
  .filled-btn {
    border: none;
    border-radius: 20px;
    padding: 10px 18px;
    font-size: 0.95em;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.15s ease, background-color 0.15s ease;
  }
  .text-btn {
    background: transparent;
    color: var(--primary-color);
  }
  .text-btn:hover {
    background: color-mix(in srgb, var(--primary-color) 10%, transparent);
  }
  .filled-btn {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    padding: 10px 24px;
  }
  .filled-btn.danger {
    background: var(--error-color, #db4437);
    color: #fff;
  }
  .filled-btn:hover {
    filter: brightness(1.08);
  }
  .panels {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .panel-row {
    padding: 10px 8px;
    border-radius: 10px;
    transition: background-color 0.15s ease;
  }
  .panel-row:hover {
    background: var(--secondary-background-color);
  }
  .panel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-text-color);
  }
  .panel-name ha-icon {
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
  }
  .panel-val {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .pbar {
    height: 7px;
    border-radius: 4px;
    background: var(--divider-color);
    margin-top: 7px;
    overflow: hidden;
  }
  .pfill {
    height: 100%;
    border-radius: 4px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.4s ease;
  }
  .panel-total {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 10px 8px 2px;
    border-top: 1px solid var(--divider-color);
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .panel-total.clickable {
    cursor: pointer;
  }
  .panel-max {
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  /* forecast / production graph */
  .fc-graph-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .fc-graph-title {
    font-weight: 700;
    font-size: 1.15em;
    color: var(--primary-text-color);
  }
  .fc-graph-total {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 5px 12px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .chart {
    width: 100%;
    height: auto;
    display: block;
  }
  .fc-grid {
    stroke: var(--divider-color);
    stroke-width: 1;
  }
  .fc-axis {
    fill: var(--secondary-text-color);
    font-size: 13px;
    font-family: inherit;
  }
  .fc-axis-y,
  .fc-unit {
    text-anchor: end;
  }
  .fc-axis-x {
    text-anchor: middle;
  }
  .fc-actual {
    fill: var(--energy-solar-color, #ff9800);
  }
  .fc-line {
    fill: none;
    stroke: var(--primary-text-color);
    stroke-width: 2;
    stroke-dasharray: 6 5;
    stroke-linejoin: round;
    opacity: 0.85;
  }
  .fc-graph-legend {
    display: flex;
    gap: 18px;
    justify-content: center;
    margin-top: 10px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }
  .lg {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .lg::before {
    content: "";
    width: 14px;
    height: 3px;
    border-radius: 2px;
  }
  .lg-actual::before {
    height: 12px;
    width: 10px;
    border-radius: 2px;
    background: var(--energy-solar-color, #ff9800);
  }
  .lg-fc::before {
    background: repeating-linear-gradient(
      90deg,
      var(--primary-text-color) 0 6px,
      transparent 6px 11px
    );
  }

  /* produced-vs-forecast progress (red) */
  .fc-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: -2px 0 12px;
  }
  .fc-progress-track {
    flex: 1;
    height: 8px;
    border-radius: 6px;
    background: var(--secondary-background-color);
    overflow: hidden;
  }
  .fc-progress-fill {
    height: 100%;
    border-radius: 6px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-progress-label {
    font-size: 0.85em;
    font-weight: 700;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  /* the live, in-progress hour: same solar colour as the other bars, set apart
   * by a gentle pulse + glow that reads as "still rising" */
  .fc-current {
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  /* opacity-only: a scaleY pulse would re-rasterize the drop-shadow every frame */
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .fc-current {
      animation: none;
    }
  }

  /* hover / touch tooltip */
  .fc-hit {
    fill: transparent;
    pointer-events: all;
    cursor: pointer;
  }
  .fc-band {
    fill: var(--primary-text-color);
    opacity: 0.06;
  }
  .fc-tip-box {
    fill: var(--card-background-color, #1c1c1c);
    stroke: var(--divider-color);
    stroke-width: 1;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }
  .fc-tip-time {
    fill: var(--primary-text-color);
    font-size: 15px;
    font-weight: 700;
  }
  .fc-tip-line {
    fill: var(--secondary-text-color);
    font-size: 14px;
  }
  .fc-tip-line .v {
    fill: var(--primary-text-color);
    font-weight: 700;
  }
`;function xr(c){let i=[];for(let r=1;r<=4;r++){let n=c._config.panels?.[r]||{};if(n.hidden)continue;let h=`sensor.pv${r}_power`,u=c._state(h);u&&i.push({i:r,watts:lt(u),id:c._entityId(h),name:n.name||null,max:Number(n.max)>0?Number(n.max):null})}return i}function Ka(c){let i=(z,U)=>vt(c.hass,z,U),r=xr(c);if(!r.length)return F`<div class="empty">${i("panels.none")}</div>`;let n=Math.max(1,...r.map(z=>z.watts||0)),h=c._entityId("sensor.pv_total"),u=lt(c._state("sensor.pv_total")),w=u??r.reduce((z,U)=>z+(U.watts||0),0);return F`<div class="panels">
    ${r.map(z=>F`<div
        class="panel-row clickable"
        @click=${()=>c._moreInfoId(z.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${z.name||i("panels.panel",{n:z.i})}
          </span>
          <span class="panel-val"
            >${he(z.watts)??"\u2013"}${z.max?F`<span class="panel-max"> / ${he(z.max)}</span>`:""}</span
          >
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,Math.min(100,(z.watts||0)/(z.max||n)*100))}%"
          ></div>
        </div>
      </div>`)}
    <div
      class="panel-total ${h?"clickable":""}"
      @click=${h?()=>c._moreInfoId(h):null}
    >
      <span>${i("panels.total")}</span>
      <span>${he(w)??"\u2013"}</span>
    </div>
  </div>`}var $s=1e3,wr=340,Pt={l:46,r:14,t:16,b:28};function As(c,{actual:i,forecast:r,totalWh:n,forecastWh:h,currentHour:u,showForecast:w,title:z}){let U=(J,$t)=>vt(c.hass,J,$t),B=$s-Pt.l-Pt.r,Y=wr-Pt.t-Pt.b,X=B/24,rt=J=>Pt.l+J/24*B,ot=0;for(let J=0;J<24;J++)ot=Math.max(ot,(i[J]||0)/1e3),w&&(ot=Math.max(ot,(r[J]||0)/1e3));let ct=hl(ot>0?ot:.1),pe=J=>Pt.t+Y-J/ct*Y,Nt=X*.66,Qt=[];for(let J=0;J<24;J++){let $t=(i[J]||0)/1e3;if($t<=0)continue;let Se=rt(J+.5)-Nt/2,Ue=pe($t),Be=J===u?"fc-actual fc-current":"fc-actual";Qt.push(Kt`<rect class=${Be} x=${Se.toFixed(1)} y=${Ue.toFixed(1)}
        width=${Nt.toFixed(1)} height=${(Pt.t+Y-Ue).toFixed(1)} rx="2"></rect>`)}let se=null;if(w){let J=[];for(let $t=0;$t<=24;$t++)J.push(`${rt($t).toFixed(1)},${pe((r[$t]||0)/1e3).toFixed(1)}`);se=Kt`<polyline class="fc-line" points=${J.join(" ")}></polyline>`}let Ht=[],Zi=4;for(let J=0;J<=Zi;J++){let $t=ct/Zi*J,Se=pe($t);Ht.push(Kt`<line class="fc-grid" x1=${Pt.l} y1=${Se.toFixed(1)} x2=${$s-Pt.r} y2=${Se.toFixed(1)}></line>`),Ht.push(Kt`<text class="fc-axis fc-axis-y" x=${Pt.l-6} y=${(Se+4).toFixed(1)}>${cl($t)}</text>`)}let wi=[];for(let J=0;J<=24;J+=4)wi.push(Kt`<text class="fc-axis fc-axis-x" x=${rt(J).toFixed(1)} y=${wr-8}>${J}:00</text>`);let Lt=w&&h>0&&n!=null?Math.round(n/h*100):null,ii=J=>{c._fcTip!==J&&(c._fcTip=J,c.requestUpdate())},re=()=>{c._fcTip!=null&&(c._fcTip=null,c.requestUpdate())},Hs=[];for(let J=0;J<24;J++)Hs.push(Kt`<rect class="fc-hit" x=${rt(J).toFixed(1)} y=${Pt.t} width=${X.toFixed(1)} height=${Y}
        @pointerenter=${()=>ii(J)} @pointermove=${()=>ii(J)}
        @pointerdown=${()=>ii(J)}></rect>`);let Ve=c._fcTip,si=Ve!=null&&Ve>=0&&Ve<24,Er=si?Kt`<rect class="fc-band" x=${rt(Ve).toFixed(1)} y=${Pt.t} width=${X.toFixed(1)} height=${Y}></rect>`:null,Ji=si?gt(Ve):null;function gt(J){let $t=((i[J]||0)/1e3).toFixed(2),Se=((r[J]||0)/1e3).toFixed(2),Ue=184,Be=w?84:60,Ne=rt(J+.5)-Ue/2;Ne=Math.max(Pt.l,Math.min($s-Pt.r-Ue,Ne));let je=Pt.t+6,ri=Ne+12;return Kt`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${Ne.toFixed(1)} y=${je} width=${Ue} height=${Be} rx="7"></rect>
      <text class="fc-tip-time" x=${ri} y=${je+24}>${Xa(J)}:00 – ${Xa((J+1)%24)}:00</text>
      <text class="fc-tip-line" x=${ri} y=${je+46}>${U("card.produced")}: <tspan class="v">${$t} kWh</tspan></text>
      ${w?Kt`<text class="fc-tip-line" x=${ri} y=${je+68}>${U("card.forecast")}: <tspan class="v">${Se} kWh</tspan></text>`:null}
    </g>`}return F`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${z||U("card.today")}</span>
      <span class="fc-graph-total"
        >${(n!=null?n/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    ${Lt!=null?F`<div class="fc-progress" title=${U("card.of_forecast",{pct:Lt})}>
          <div class="fc-progress-track">
            <div
              class="fc-progress-fill"
              style="width:${Math.min(100,Lt)}%"
            ></div>
          </div>
          <span class="fc-progress-label">${U("card.of_forecast",{pct:Lt})}</span>
        </div>`:""}
    <svg
      class="chart"
      viewBox="0 0 ${$s} ${wr}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${re}
      @pointercancel=${re}
    >
      ${Ht}${wi}
      <text class="fc-axis fc-unit" x=${Pt.l-6} y=${Pt.t-4}>kWh</text>
      ${Er}${Qt}${se}${Hs}${Ji}
    </svg>
    ${w?F`<div class="fc-graph-legend">
          <span class="lg lg-actual">${U("card.produced")}</span>
          <span class="lg lg-fc">${U("card.forecast")}</span>
        </div>`:""}
  </div>`}function hl(c){let i=Math.pow(10,Math.floor(Math.log10(c))),r=c/i;return(r<=1?1:r<=2?2:r<=5?5:10)*i}function cl(c){return c>=10?Math.round(c).toString():c.toFixed(1).replace(/\.0$/,"")}function Xa(c){return String(c).padStart(2,"0")}async function gi(c){c._dialog="solar",c._solarTotalWh===void 0&&await dl(c)}async function dl(c){let i=c._entityId("sensor.solar_energy"),r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),h=i?await ks(c.hass,i,n):null;c._solarHourly=h||{},c._solarTotalWh=h?Object.values(h).reduce((u,w)=>u+(w||0),0):null,c._solarForecasts=await qi(c.hass),c.requestUpdate()}function vi(c){let i=(u,w)=>vt(c.hass,u,w),r=new Date,n=ws(c._solarForecasts||{}),h=As(c,{actual:c._solarHourly||{},forecast:Yi(n,r),totalWh:c._solarTotalWh,forecastWh:Ki(n,r),currentHour:r.getHours(),showForecast:Object.keys(n).length>0,title:i("card.today")});return F`<ha-adaptive-dialog
    open
    width="large"
    header-title=${i("card.solar")}
    @closed=${()=>c._dialog=null}
  >
    <div class="dlg-body">
      ${h}
      <div class="dlg-section">${i("panels.title")}</div>
      ${Ka(c)}
    </div>
  </ha-adaptive-dialog>`}var pl=300*1e3,Es=class extends St{static styles=Ya;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._solarHourly={},this._solarTotalWh=void 0,this._solarForecasts={},this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Jt(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},pl)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let i of Object.values(this._tmplUnsub||{}))typeof i=="function"&&i();this._tmplUnsub={}}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${Ft}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(i,r){return vt(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=Xt(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r){if(ht(r)){let h=this._templateResults?.[r];return{state:h===void 0?"unknown":String(h),attributes:{}}}return mt(r)?this.hass.states[r]:{state:r,attributes:{}}}let n=this._map?.[i];return n?this.hass.states[n]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&mt(r)&&!ht(r)?r:this._map?.[i]}shouldUpdate(i){if(!(i.size===1&&i.has("hass"))||!this._map)return!0;let r=Object.values(this._map);for(let n of Object.values(this._config?.entities||{}))mt(n)&&!ht(n)&&r.push(n);for(let n of Array.isArray(this._config?.stats)?this._config.stats:[])n?.entity&&r.push(n.entity);return mi(i.get("hass"),this.hass,r)}updated(i){super.updated(i),(i.has("hass")||i.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let i=this._entityId("sensor.solar_energy");if(!i||!this.hass)return;let{start:r,end:n}=this._dataRange(),h=await ks(this.hass,i,r,n);this._hourly=h||{},this._todayWh=h?Object.values(h).reduce((u,w)=>u+(w||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await qi(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let i=new Date;return{start:new Date(i.getFullYear(),i.getMonth(),i.getDate()),end:i,ref:i}}_bindEnergyCollection(){let i=this._config.collection_key,r=i?`_${i}`:null;if(r!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=r,this._period=null),!r||this._collUnsub||!this.hass?.connection)return;let n=this.hass.connection[r];if(!n||typeof n.subscribe!="function")return;let h=()=>{this._period={start:n.start,end:n.end},this._refreshData()};this._collUnsub=n.subscribe(()=>h()),h()}_mergedForecast(){return ws(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let i=Ki(this._mergedForecast(),this._dataRange().ref);return i!=null?i/1e3:null}_isToday(){let i=this._dataRange().ref,r=new Date;return i.getFullYear()===r.getFullYear()&&i.getMonth()===r.getMonth()&&i.getDate()===r.getDate()}_periodLabel(){return this._isToday()?this._t("card.today"):this._dataRange().ref.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let i=[...Object.values(this._config.entities||{}),this._config.title].filter(r=>ht(r));for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{this._tmplUnsub[r]=await this.hass.connection.subscribeMessage(n=>{this._templateResults[r]=n.result,this.requestUpdate()},{type:"render_template",template:r})}catch{this._templateResults[r]="error",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let n=this._tmplUnsub[r];typeof n=="function"&&n(),delete this._tmplUnsub[r],delete this._templateResults[r]}}_moreInfo(i){this._moreInfoId(this._entityId(i))}_moreInfoId(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}render(){if(!this.hass)return F``;let i=this._device;return i?(this._map=Zt(this.hass,i.ents),this._isToday()?F`<ha-card>
      ${this._renderHead(i)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="solar"?vi(this):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:F`<ha-card>${this._forecastGraph()}</ha-card>`):F`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(i,r,n="medium"){return F`<ha-adaptive-dialog
      open
      width=${n}
      header-title=${i}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${r}</div>
    </ha-adaptive-dialog>`}_imageSrc(i){let r=i?.device?.model;return xe(this._config.image_url||(this._config.image?ui(this._config.image):Da(r)),this.hass)}_renderHead(i){let r=this._config.title,n=r&&ht(r)?String(this._templateResults?.[r]??""):r,h=i.device?.model,u=n||i.device?.name_by_user||i.device?.name||h||this._t("card.device"),w=this._imageSrc(i);return F`<div class="head">
      <div class="head-left">
        <div class="name">${u}</div>
        ${h&&h!==u?F`<div class="subtitle">${h}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(w,u)}
    </div>`}_renderBatteryCircle(i,r){let n=this._state("sensor.cms_batt_soc"),h=this._show("show_image")&&i;if(!n&&!h)return"";let u=lt(n),w=lt(this._state("sensor.bat_power")),z=this._state("binary_sensor.battery_charging")?.state==="on"||w!=null&&w>1,U=!z&&w!=null&&w<-1,B=z?"charge":U?"discharge":u!=null&&u<=15?"low":"",Y=z?"charge":U?"discharge":"";Y&&(this._battDir=Y);let X=Y||this._battDir,rt=!!Y,ot=2*Math.PI*44,ct=u!=null?Math.max(0,Math.min(100,u)):0,pe=[{v:lt(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:lt(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:lt(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(Nt=>Nt.v!=null);return F`<div
      class="batt-circle clickable ${Y}"
      @click=${()=>this._dialog="battery"}
    >
      ${n?F`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${B}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${ot.toFixed(1)};stroke-dashoffset:${(ot*(1-ct/100)).toFixed(1)}"
            ></circle>
            ${pe.map(Nt=>{let Qt=Math.max(0,Math.min(100,Nt.v))/100*2*Math.PI,se=Math.sin(Qt),Ht=Math.cos(Qt);return Kt`<line
                class="ring-tick ${Nt.cls}"
                x1=${(50+39.5*se).toFixed(1)}
                y1=${(50-39.5*Ht).toFixed(1)}
                x2=${(50+48.5*se).toFixed(1)}
                y2=${(50-48.5*Ht).toFixed(1)}
              ><title>${Nt.label} ${Math.round(Nt.v)}%</title></line>`})}
          </svg>`:""}
      ${n&&X?F`<svg
            class="ring-spin ${X} ${rt?"show":""}"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="44" stroke-dasharray="16 261"></circle>
          </svg>`:""}
      ${n&&X?F`<div class="batt-particles ${X} ${rt?"show":""}">
            ${Array.from({length:12},(Nt,Qt)=>{let se=Qt*30,Ht=Qt*5%12/12*1.6;return F`<span
                class="particle"
                style="--angle:${se}deg;animation-delay:${Ht.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${h?F`<picture
            >${ti(i)?F`<source
                  srcset=${ti(i)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${i}" alt="${r}"
          /></picture>`:n?F`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${n}
            ></ha-state-icon>`:F`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${n&&(z||U)&&w!=null?F`<span class="batt-speed ${Y}">
            <ha-icon
              icon=${z?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${he(Math.abs(w))}
          </span>`:""}
      ${n?F`<span class="batt-badge"
            >${u!=null?Math.round(u):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let i=this._device,r=this._show("show_image")&&this._imageSrc(i),n=i?.device?.name||i?.device?.model||this._t("card.device"),h=lt(this._state("sensor.cms_batt_soc")),u=lt(this._state("sensor.bat_power")),w=this._state("binary_sensor.battery_charging")?.state==="on"||u!=null&&u>1,z=!w&&u!=null&&u<-1,U=w?"charge":z?"discharge":"",B=w?"mdi:flash":z?"mdi:battery-arrow-down":"mdi:battery",Y=w?this._t("card.charging"):z?this._t("card.discharging"):this._t("battery.idle"),X=(w||z)&&u!=null?he(Math.abs(u)):null,rt=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...w?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...z?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(ot=>({...ot,value:this._battTileValue(ot.slot)})).filter(ot=>ot.value!=null);return F`<div class="batt-detail">
      <div class="batt-hero">
        ${r?F`<picture
              >${ti(r)?F`<source srcset=${ti(r)} type="image/webp" />`:""}<img class="batt-hero-img" src=${r} alt=${n}
            /></picture>`:F`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${h!=null?Math.round(h):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${U}">
            <ha-icon icon=${B}></ha-icon>${Y}${X?` \xB7 ${X}`:""}
          </span>
        </div>
      </div>
      ${rt.length?F`<div class="batt-grid">
            ${rt.map(ot=>{let ct=this._entityId(ot.slot);return F`<div
                class="batt-tile ${ct?"clickable":""}"
                @click=${ct?()=>this._moreInfoId(ct):null}
              >
                <ha-icon icon=${ot.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${ot.value}</span>
                  <span class="batt-tile-label">${ot.label}</span>
                </div>
              </div>`})}
          </div>`:""}
    </div>`}_battTileValue(i){let r=this._state(i),n=lt(r);if(n==null)return null;let h=r.attributes?.unit_of_measurement||"";return h==="W"?he(n):h==="Wh"?yr(n):h==="kWh"?yr(n*1e3):h==="min"?ja(n):h==="%"?`${Math.round(n)}%`:h?`${Math.round(n)} ${h}`:String(Math.round(n))}_renderAc(){let i=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(r=>({...r,swState:this._state(r.sw),pwState:this._state(r.pw)})).filter(r=>r.swState||r.pwState);return i.length?F`<div class="ac">
      ${i.map(r=>{let n=r.swState?.state==="on",h=lt(r.pwState);return F`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(r.pw)||this._entityId(r.sw))}
        >
          <ha-icon class="ac-icon ${n?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${r.label}</span>
            <span class="ac-power">
              ${r.swState&&!n?this._t("card.off"):h!=null?this._metric(ce(h)):r.pwState?"\u2014":""}
            </span>
          </div>
          ${r.swState?F`<ha-switch
                .checked=${n}
                @click=${u=>u.stopPropagation()}
                @change=${()=>this._toggleSwitch(r.sw,r.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(i,r){let n=this._entityId(i),h=n?this.hass.states[n]:null;!n||!h||(h.state==="on"?this._confirmAc={slot:i,label:r}:this.hass.callService("switch","turn_on",{entity_id:n}))}_renderConfirmAc(){let{label:i}=this._confirmAc,r=()=>this._confirmAc=null;return F`<ha-adaptive-dialog
      open
      width="small"
      header-title=${this._t("confirm.title")}
      @closed=${r}
    >
      <div class="confirm-body">
        <div class="confirm-text">
          ${this._t("confirm.ac_off",{name:i})}
        </div>
        <div class="confirm-actions">
          <button class="text-btn" @click=${r}>
            ${this._t("confirm.cancel")}
          </button>
          <button
            class="filled-btn danger"
            @click=${()=>{let n=this._entityId(this._confirmAc.slot);n&&this.hass.callService("switch","turn_off",{entity_id:n}),this._confirmAc=null}}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-adaptive-dialog>`}_metric(i){return F`<span class="metric"
      ><span class="metric-num">${i.n}</span
      ><span class="metric-unit">${i.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return F`<div class="stats custom">
        ${this._config.stats.map(w=>this._renderCustomStat(w))}
      </div>`;let i=lt(this._state("sensor.pv_total")),r=xr(this),n=this._show("show_panels")&&r.length>0,h=this._state("sensor.grid_power"),u=lt(h);return F`<div class="stats">
      <div
        class="stat solar ${n?"clickable":""}"
        @click=${n?()=>gi(this):null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${n?F`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(ce(i))}</div>
        ${n?F`<div class="stat-sub">
              ${r.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(u):F`<div></div>`}
    </div>`}_renderGrid(i){let r=i!=null&&i>1,n=i!=null&&i<-1,h=r?"import":n?"export":"",u=r?this._t("card.grid_import"):n?this._t("card.grid_export"):this._t("card.grid_idle");return F`<div
      class="stat grid ${h} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${n?"mdi:transmission-tower-export":r?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(ce(i!=null?Math.abs(i):null))}
      </div>
      <div class="stat-sub">${u}</div>
    </div>`}_renderCustomStat(i){if(!i||!i.entity&&!i.name)return F``;let r=i.entity?this.hass.states[i.entity]:void 0,n=i.name||r?.attributes?.friendly_name||i.entity||"",h=i.tap_action,u=!h||h.action!=="none";return F`<div
      class="stat ${u?"clickable":""}"
      @click=${u?()=>this._handleAction(h,i.entity):null}
    >
      <div class="stat-head">
        ${i.icon?F`<ha-icon icon=${i.icon}></ha-icon>`:r?F`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${r}
              ></ha-state-icon>`:F`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${n}
      </div>
      <div class="stat-value">${this._metric(this._statValue(r))}</div>
    </div>`}_statValue(i){let r=i?.state;if(r==null||r==="unavailable"||r==="unknown")return{n:"\u2013",u:""};let n=lt(i),h=i.attributes?.unit_of_measurement||"";return n==null?{n:r,u:""}:h==="W"?ce(n):{n:Number.isInteger(n)?String(n):n.toFixed(1),u:h}}_handleAction(i,r){let n=i||{action:"more-info"},h=n.action||"more-info";if(h!=="none"){if(n.confirmation){let u=n.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm(u))return}switch(h){case"more-info":this._moreInfoId(n.entity||r);return;case"toggle":{let u=n.entity||r;u&&this.hass.callService("homeassistant","toggle",{entity_id:u});return}case"navigate":n.navigation_path&&(history.pushState(null,"",n.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":n.url_path&&window.open(n.url_path,n.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let u=n.perform_action||n.service,[w,z]=(u||"").split(".",2);w&&z&&this.hass.callService(w,z,n.data||n.service_data||{},n.target);return}default:this._moreInfoId(n.entity||r)}}}_forecastGraph(){let i=this._dataRange().ref,r=this._mergedForecast();return As(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:Yi(r,i),totalWh:this._todayWh,forecastWh:Ki(r,i),currentHour:this._isToday()?new Date().getHours():null,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let i=this._todayWh!=null?this._todayWh/1e3:null,r=Object.keys(this._forecasts||{}).length>0,n=this._show("show_forecast")&&r?this._forecastTodayKWh():null,h=n!=null&&n>0,u=h&&i!=null?Math.min(100,Math.round(i/n*100)):null,w=u!=null&&u>=100;return F`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(Ss(i))}</span>
      </div>
      ${h?F`<div class="fc-bar">
              <div
                class="fc-fill ${w?"met":""}"
                style="width:${u}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${i!=null?i.toFixed(1):"\u2013"}</b> /
                ${n.toFixed(1)} kWh
              </span>
              <span>
                ${w?this._t("card.exceeded"):this._t("card.of_forecast",{pct:u??0})}
              </span>
            </div>`:""}
    </div>`}};function Za(c,i){if(!i)return null;let r=c?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${i}/${r}icon.png`}var fl=4;function ul(c){let i=Xt(c.hass),r=c._config.device&&i.find(n=>n.deviceId===c._config.device)||i[0];return r?Zt(c.hass,r.ents):{}}function Ja(c){let i=ul(c),r=[];for(let n=1;n<=fl;n++)i[`sensor.pv${n}_power`]&&r.push(n);return r.length?r:[1,2,3,4]}function Ps(c){let i=(u,w)=>vt(c.hass,u,w),r=Ja(c),n=r.filter(u=>c._config.panels?.[u]?.hidden).length,h=i("editor.panels_count",{n:r.length});return n&&(h+=` \xB7 ${i("editor.panels_hidden",{n})}`),h}function kr(c,i,r){return F`<ha-form
    .hass=${c.hass}
    .data=${{value:i.max??null}}
    .schema=${[{name:"value",selector:{number:{min:0,step:10,unit_of_measurement:"W",mode:"box"}}}]}
    .computeLabel=${()=>vt(c.hass,"editor.panel_max")}
    @value-changed=${n=>{n.stopPropagation(),r(Number(n.detail.value.value)||null)}}
  ></ha-form>`}function Ts(c,i){let r=(n,h)=>vt(c.hass,n,h);return F`<div class="hint top-hint">${r("editor.panels_hint_max")}</div>
    ${Ja(c).map(n=>ml(c,i,n,r))}`}function ml(c,i,r,n){let h=c._config.panels?.[r]||{},u=!!h.hidden,w=z=>c._dispatch(gl(c,i,r,z));return F`<div class="panel-block">
    <div class="panel-title-row">
      <ha-icon icon="mdi:solar-panel"></ha-icon>
      <span class="panel-title">${h.name||n("editor.panel",{n:r})}</span>
      <ha-switch
        .checked=${!u}
        @change=${z=>w({hidden:!z.target.checked})}
      ></ha-switch>
    </div>
    ${u?F`<div class="hint">${n("editor.panel_hidden")}</div>`:F`<ha-form
            .hass=${c.hass}
            .data=${{value:h.name||""}}
            .schema=${[{name:"value",selector:{text:{}}}]}
            .computeLabel=${()=>n("editor.panel_name")}
            @value-changed=${z=>{z.stopPropagation(),w({name:z.detail.value.value||""})}}
          ></ha-form>
          ${kr(c,h,z=>w({max:z}))}`}
  </div>`}function gl(c,i,r,n){let h={...c._config.panels||{}},u={...h[r]||{}};for(let[z,U]of Object.entries(n))U===""||U==null||U===!1?delete u[z]:u[z]=U;Object.keys(u).length?h[r]=u:delete h[r];let w={...c._config,panels:h,type:`custom:${i}`};return Object.keys(h).length||delete w.panels,w}var vl=[{name:"device",selector:{device:{integration:ze}}}],Qa={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},tn={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},en=new Set,sn=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],_l=4,Cs=class extends St{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Jt()}setConfig(i){this._config=i||{}}_t(i,r){return vt(this.hass,i,r)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,Ba(this.hass).then(i=>{this._providers=i}))}render(){if(!this.hass)return F``;let i=sn.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_defaults(){let i=Xt(this.hass),r=this._config.device&&i.find(n=>n.deviceId===this._config.device)||i[0];return r?Zt(this.hass,r.ents):{}}_renderRoot(){return F`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${vl}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${sn.map(i=>F`<button
            class="nav-row"
            @click=${()=>this._page=i.id}
          >
            <ha-icon class="nav-icon" icon=${i.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`page.${i.id}`)}</span>
              <span class="nav-secondary">${this._summary(i.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(i){if(i==="panels"){let w=this._detectedPanels(),z=w.filter(B=>this._config.panels?.[B]?.hidden).length,U=this._t("editor.panels_count",{n:w.length});return z&&(U+=` \xB7 ${this._t("editor.panels_hidden",{n:z})}`),U}if(i==="forecast"){let w=this._providers;if(w===void 0)return this._t("editor.automatic");if(!w.length)return this._t("editor.forecast_none_short");let z=this._config.forecast_config_entries,U=z===void 0?w.length:z.length;return this._t("editor.forecast_selected",{n:U,total:w.length})}if(i==="stats"){let w=this._config.stats;return Array.isArray(w)?this._t("editor.stats_count",{n:w.length}):this._t("editor.stats_default")}if(i==="advanced")return this._config.collection_key||this._t("editor.none");let r=(tn[i]||[]).filter(([w])=>this._config.entities?.[w]).length,n=r?` \xB7 ${this._t("editor.overridden",{n:r})}`:"",h=Qa[i]||[];if(!h.length)return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic");let u=h.filter(([w,z])=>this._config[w]??z);return u.length?u.map(([w])=>this._t(`short.${w}`)).join(", ")+n:`${this._t("editor.nothing_shown")}${n}`}_renderSubpage(i){return F`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${i.id}`)}</span>
      </div>
      ${(Qa[i.id]||[]).map(([r,n,h])=>this._renderToggle(r,n,h))}
      ${i.id==="appearance"?this._renderImagePicker():i.id==="stats"?this._renderStatsPage():i.id==="panels"?this._renderPanelsPage():i.id==="forecast"?this._renderForecastPage():i.id==="advanced"?this._renderAdvancedPage():(tn[i.id]||[]).map(([r,n])=>this._renderSlot(r,n))}`}_renderImagePicker(){let i=this._config.image,r=this._config.image_url,n=this._config.show_image??!0;return F`<div class="section">
        <ha-icon icon="mdi:image-multiple-outline"></ha-icon>${this._t("editor.image")}
      </div>
      <div class=${n?"img-grid":"img-grid dim"}>
        <button
          class="img-opt ${!i&&!r?"on":""}"
          title=${this._t("editor.automatic")}
          @click=${()=>this._setImage(null)}
        >
          <span class="img-auto"><ha-icon icon="mdi:auto-fix"></ha-icon></span>
          <span class="img-label">${this._t("editor.automatic")}</span>
        </button>
        ${xs.map(h=>F`<button
            class="img-opt ${i===h.key?"on":""}"
            title=${h.name}
            @click=${()=>this._setImage(h.key)}
          >
            <picture
              ><source
                srcset=${ti(ui(h.key))}
                type="image/webp"
              /><img
                src=${ui(h.key)}
                loading="lazy"
                alt=${h.name} /></picture
            >
            <span class="img-label">${h.name}</span>
          </button>`)}
      </div>`}_setImage(i){let r={...this._config,type:`custom:${Ft}`};delete r.image_url,i?r.image=i:delete r.image,this._dispatch(r)}_renderAdvancedPage(){return F`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${i=>{i.stopPropagation(),this._setCollectionKey(i.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(i){let r={...this._config,type:`custom:${Ft}`};i?r.collection_key=i:delete r.collection_key,this._dispatch(r)}_renderStatsPage(){let i=this._config.stats;return Array.isArray(i)?F`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${i.map((r,n)=>this._renderStatBlock(r,n,i.length))}
      <div class="stats-actions">
        <button class="add-btn" @click=${()=>this._addStat()}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("editor.stats_add")}
        </button>
        <button class="text-btn" @click=${()=>this._resetStats()}>
          ${this._t("editor.stats_reset")}
        </button>
      </div>`:F`<div class="hint top-hint">
          ${this._t("editor.stats_default_hint")}
        </div>
        <button class="filled-btn" @click=${()=>this._seedDefaultStats()}>
          ${this._t("editor.stats_customize")}
        </button>`}_renderStatBlock(i,r,n){let h=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],u=i.name||i.entity||this._t("editor.stat_n",{n:r+1});return F`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon=${i.icon||"mdi:chart-box-outline"}></ha-icon>
        <span class="panel-title">${u}</span>
        <button
          class="icon-btn"
          .disabled=${r===0}
          title=${this._t("editor.stats_move_up")}
          @click=${()=>this._moveStat(r,-1)}
        >
          <ha-icon icon="mdi:arrow-up"></ha-icon>
        </button>
        <button
          class="icon-btn"
          .disabled=${r===n-1}
          title=${this._t("editor.stats_move_down")}
          @click=${()=>this._moveStat(r,1)}
        >
          <ha-icon icon="mdi:arrow-down"></ha-icon>
        </button>
        <button
          class="icon-btn danger"
          title=${this._t("editor.stats_remove")}
          @click=${()=>this._removeStat(r)}
        >
          <ha-icon icon="mdi:delete-outline"></ha-icon>
        </button>
      </div>
      <ha-form
        .hass=${this.hass}
        .data=${i}
        .schema=${h}
        .computeLabel=${w=>this._t(`editor.stat_field_${w.name}`)}
        @value-changed=${w=>{w.stopPropagation(),this._updateStat(r,w.detail.value)}}
      ></ha-form>
    </div>`}_seedDefaultStats(){let i=this._defaults(),r=n=>{let h=this._config.entities?.[n];return h&&mt(h)&&!ht(h)?h:i[n]||""};this._setStats([{entity:r("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:r("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(i,r){let n=[...this._config.stats||[]],h={};for(let[u,w]of Object.entries(r))w===""||w==null||(h[u]=w);n[i]=h,this._setStats(n)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(i){let r=[...this._config.stats||[]];r.splice(i,1),this._setStats(r)}_moveStat(i,r){let n=[...this._config.stats||[]],h=i+r;h<0||h>=n.length||([n[i],n[h]]=[n[h],n[i]],this._setStats(n))}_setStats(i){this._dispatch({...this._config,stats:i,type:`custom:${Ft}`})}_resetStats(){let i={...this._config,type:`custom:${Ft}`};delete i.stats,this._dispatch(i)}_renderForecastPage(){let i=this._providers;if(i===void 0)return F`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!i.length)return F`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let r=this._config.show_forecast??!0,n=this._config.forecast_config_entries,h=u=>n===void 0?!0:n.includes(u);return F`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${r?"":"dim"}>
        ${i.map(u=>F`<div class="row">
            ${this._renderBrand(u.domain)}
            <span class="row-label"
              >${u.title}<span class="row-sub">${u.domain}</span></span
            >
            <ha-switch
              .checked=${h(u.id)}
              .disabled=${!r}
              @change=${w=>this._toggleProvider(u.id,w.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(i){let r=Za(this.hass,i);return F`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${r?F`<img
            class="brand"
            src=${r}
            @error=${n=>{n.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(i,r){let n=(this._providers||[]).map(w=>w.id),h=this._config.forecast_config_entries??n.slice();h=r?[...new Set([...h,i])]:h.filter(w=>w!==i);let u={...this._config,type:`custom:${Ft}`};h.length===n.length&&n.every(w=>h.includes(w))?delete u.forecast_config_entries:u.forecast_config_entries=h,this._dispatch(u)}_detectedPanels(){let i=this._defaults(),r=[];for(let n=1;n<=_l;n++)(i[`sensor.pv${n}_power`]||this._config.entities?.[`sensor.pv${n}_power`])&&r.push(n);return r.length?r:[1,2,3,4]}_renderPanelsPage(){return F`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(i=>this._renderPanelConfig(i))}`}_renderPanelConfig(i){let r=this._config.panels?.[i]||{},n=!!r.hidden,h=`sensor.pv${i}_power`;return F`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${r.name||this._t("editor.panel",{n:i})}</span
        >
        <ha-switch
          .checked=${!n}
          @change=${u=>this._dispatch(this._withPanel(i,{hidden:!u.target.checked}))}
        ></ha-switch>
      </div>
      ${n?F`<div class="hint">${this._t("editor.panel_hidden")}</div>`:F`<ha-form
              .hass=${this.hass}
              .data=${{value:r.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${u=>{u.stopPropagation(),this._dispatch(this._withPanel(i,{name:u.detail.value.value||""}))}}
            ></ha-form>
            ${kr(this,r,u=>this._dispatch(this._withPanel(i,{max:u})))}
            ${this._renderSlot(h,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(i,r){let n={...this._config.panels||{}},h={...n[i]||{}};for(let[w,z]of Object.entries(r))z===""||z==null||z===!1?delete h[w]:h[w]=z;Object.keys(h).length?n[i]=h:delete n[i];let u={...this._config,panels:n,type:`custom:${Ft}`};return Object.keys(n).length||delete u.panels,u}_renderToggle(i,r,n){return F`<div class="row">
      <ha-icon icon=${n}></ha-icon>
      <span class="row-label">${this._t(`toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._toggleDisplay(i,r,h.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(i,r){return this._modes[i]?this._modes[i]:r?mt(r)&&!ht(r)?"entity":"custom":en.has(i)?"entity":"auto"}_renderModeChips(i,r){let n=en.has(i)?["entity","custom"]:["auto","entity","custom"];return F`<div class="modes">
      ${n.map(h=>F`<button
          class="mode ${r===h?"on":""}"
          @click=${()=>{this._modes={...this._modes,[i]:h},h==="auto"&&this._setOverride(i,"")}}
        >
          ${this._t(`editor.mode_${h}`)}
        </button>`)}
    </div>`}_renderSlot(i,r,n){let h=this._config.entities?.[i]||"",u=this._slotMode(i,h),w=this._defaults()[i];return F`<div class="section">
        <ha-icon icon=${r}></ha-icon>${n||this._t(`slot.${i}`)}
      </div>
      ${this._renderModeChips(i,u)}
      ${u==="auto"?F`<div class="hint">
            ${this._t("editor.auto_value",{value:w||this._t("editor.not_found")})}
          </div>`:u==="entity"?F`<ha-form
              .hass=${this.hass}
              .data=${{value:mt(h)&&!ht(h)?h:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${z=>{z.stopPropagation(),this._setOverride(i,z.detail.value.value||"")}}
            ></ha-form>`:F`<ha-form
              .hass=${this.hass}
              .data=${{value:mt(h)&&!ht(h)?"":h}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${z=>{z.stopPropagation(),this._setOverride(i,z.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(i,r){let n={...this._config.entities||{}};r?n[i]=r:delete n[i];let h={...this._config,entities:n,type:`custom:${Ft}`};return Object.keys(n).length||delete h.entities,h}_setOverride(i,r){this._dispatch(this._withOverride(i,r))}_toggleDisplay(i,r,n){let h={...this._config,type:`custom:${Ft}`};n===r?delete h[i]:h[i]=n,this._dispatch(h)}_valueChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${Ft}`};r.device||delete r.device,this._dispatch(r)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return Ot`
      .nav {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
      }
      .nav-row {
        display: flex;
        align-items: center;
        gap: 14px;
        border: none;
        background: transparent;
        padding: 12px 6px;
        cursor: pointer;
        text-align: left;
        border-radius: 10px;
        color: var(--primary-text-color);
        transition: background-color 0.15s ease;
      }
      .nav-row:hover {
        background: var(--secondary-background-color);
      }
      .nav-row ha-icon {
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }
      .nav-labels {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .nav-label {
        font-size: 1em;
      }
      .nav-secondary {
        font-size: 0.85em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 280px;
      }
      .subpage-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--card-background-color, var(--ha-card-background));
        padding: 8px 0;
        margin-top: -8px;
      }
      .back {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        transition: background-color 0.15s ease;
      }
      .back:hover {
        background: var(--secondary-background-color);
      }
      .subpage-title {
        font-size: 1.1em;
        font-weight: 600;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 4px;
      }
      .row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .row-label {
        flex: 1;
        color: var(--primary-text-color);
      }
      .row-sub {
        display: block;
        font-size: 0.8em;
        color: var(--secondary-text-color);
      }
      .dim {
        opacity: 0.45;
        pointer-events: none;
      }
      .provider-icon {
        position: relative;
        width: 24px;
        height: 24px;
        flex: 0 0 auto;
      }
      .provider-icon ha-icon {
        position: absolute;
        inset: 0;
        --mdc-icon-size: 24px;
        color: var(--secondary-text-color);
      }
      .provider-icon img.brand {
        position: absolute;
        inset: 0;
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
      picture {
        display: contents;
      }
      .img-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(82px, 1fr));
        gap: 8px;
        margin-top: 4px;
      }
      .img-opt {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 8px 4px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .img-opt:hover {
        filter: brightness(1.12);
      }
      .img-opt.on {
        border-color: var(--primary-color);
      }
      .img-opt img,
      .img-auto {
        width: 56px;
        height: 56px;
        object-fit: contain;
      }
      .img-auto {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--secondary-text-color);
      }
      .img-auto ha-icon {
        --mdc-icon-size: 30px;
      }
      .img-label {
        font-size: 0.72em;
        text-align: center;
        line-height: 1.1;
        color: var(--secondary-text-color);
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .section {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        margin: 18px 0 8px;
        color: var(--primary-text-color);
      }
      .section ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
        margin-bottom: 10px;
      }
      .mode {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 8px 0;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9em;
        transition: background-color 0.15s ease, color 0.15s ease;
      }
      .mode:hover:not(.on) {
        background: rgba(127, 127, 127, 0.18);
      }
      .mode.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font-weight: 600;
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 12px;
      }
      .top-hint {
        margin: 0 4px 10px;
      }
      .panel-block {
        padding: 6px 4px 12px;
        border-bottom: 1px solid var(--divider-color);
      }
      .panel-title-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
      }
      .panel-title-row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--energy-solar-color, #ff9800);
      }
      .panel-title {
        flex: 1;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      ha-form {
        display: block;
        margin-bottom: 12px;
      }
      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        flex: 0 0 auto;
        transition: background-color 0.15s ease, color 0.15s ease;
      }
      .icon-btn ha-icon {
        --mdc-icon-size: 20px;
        color: inherit;
      }
      .icon-btn:hover:not([disabled]) {
        background: var(--secondary-background-color);
      }
      .icon-btn[disabled] {
        opacity: 0.3;
        cursor: default;
      }
      .icon-btn.danger:hover:not([disabled]) {
        color: var(--error-color, #db4437);
      }
      .stats-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
      }
      .add-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 1px dashed var(--divider-color);
        background: transparent;
        color: var(--primary-color);
        padding: 8px 14px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.95em;
        font-weight: 600;
        transition: background-color 0.15s ease;
      }
      .add-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .add-btn:hover {
        background: color-mix(in srgb, var(--primary-color) 10%, transparent);
      }
      .filled-btn {
        border: none;
        border-radius: 20px;
        padding: 10px 22px;
        font-size: 0.95em;
        font-weight: 600;
        cursor: pointer;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        transition: filter 0.15s ease;
      }
      .filled-btn:hover {
        filter: brightness(1.08);
      }
      .text-btn {
        border: none;
        border-radius: 20px;
        padding: 8px 14px;
        font-size: 0.95em;
        font-weight: 600;
        cursor: pointer;
        background: transparent;
        color: var(--primary-color);
        transition: background-color 0.15s ease;
      }
      .text-btn:hover {
        background: color-mix(in srgb, var(--primary-color) 10%, transparent);
      }
    `}};var rn=Ot`
  .dlg-body {
    padding: 4px 4px 8px;
  }
  .fc-graph-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .fc-graph-title {
    font-weight: 700;
    font-size: 1.15em;
    color: var(--primary-text-color);
  }
  .fc-graph-total {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 5px 12px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .chart {
    width: 100%;
    height: auto;
    display: block;
  }
  .fc-grid {
    stroke: var(--divider-color);
    stroke-width: 1;
  }
  .fc-axis {
    fill: var(--secondary-text-color);
    font-size: 13px;
    font-family: inherit;
  }
  .fc-axis-y,
  .fc-unit {
    text-anchor: end;
  }
  .fc-axis-x {
    text-anchor: middle;
  }
  .fc-actual {
    fill: var(--energy-solar-color, #ff9800);
  }
  .fc-line {
    fill: none;
    stroke: var(--primary-text-color);
    stroke-width: 2;
    stroke-dasharray: 6 5;
    stroke-linejoin: round;
    opacity: 0.85;
  }
  .fc-graph-legend {
    display: flex;
    gap: 18px;
    justify-content: center;
    margin-top: 10px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }
  .lg {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .lg::before {
    content: "";
    width: 14px;
    height: 3px;
    border-radius: 2px;
  }
  .lg-actual::before {
    height: 12px;
    width: 10px;
    border-radius: 2px;
    background: var(--energy-solar-color, #ff9800);
  }
  .lg-fc::before {
    background: repeating-linear-gradient(
      90deg,
      var(--primary-text-color) 0 6px,
      transparent 6px 11px
    );
  }
  .fc-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: -2px 0 12px;
  }
  .fc-progress-track {
    flex: 1;
    height: 8px;
    border-radius: 6px;
    background: var(--secondary-background-color);
    overflow: hidden;
  }
  .fc-progress-fill {
    height: 100%;
    border-radius: 6px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-progress-label {
    font-size: 0.85em;
    font-weight: 700;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  .fc-current {
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  /* opacity-only: a scaleY pulse would re-rasterize the drop-shadow every frame */
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .fc-current {
      animation: none;
    }
  }
  .fc-hit {
    fill: transparent;
    pointer-events: all;
    cursor: pointer;
  }
  .fc-band {
    fill: var(--primary-text-color);
    opacity: 0.06;
  }
  .fc-tip-box {
    fill: var(--card-background-color, #1c1c1c);
    stroke: var(--divider-color);
    stroke-width: 1;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }
  .fc-tip-time {
    fill: var(--primary-text-color);
    font-size: 15px;
    font-weight: 700;
  }
  .fc-tip-line {
    fill: var(--secondary-text-color);
    font-size: 14px;
  }
  .fc-tip-line .v {
    fill: var(--primary-text-color);
    font-weight: 700;
  }

  /* per-array solar production (shared views/panels.js) */
  .dlg-section {
    margin: 18px 4px 6px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .empty {
    padding: 16px 8px;
    color: var(--secondary-text-color);
    text-align: center;
  }
  .panels {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .panel-row {
    padding: 10px 8px;
    border-radius: 10px;
    transition: background-color 0.15s ease;
  }
  .panel-row.clickable {
    cursor: pointer;
  }
  .panel-row:hover {
    background: var(--secondary-background-color);
  }
  .panel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-text-color);
  }
  .panel-name ha-icon {
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
  }
  .panel-val {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .pbar {
    height: 7px;
    border-radius: 4px;
    background: var(--divider-color);
    margin-top: 7px;
    overflow: hidden;
  }
  .pfill {
    height: 100%;
    border-radius: 4px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.4s ease;
  }
  .panel-total {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 10px 8px 2px;
    border-top: 1px solid var(--divider-color);
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .panel-total.clickable {
    cursor: pointer;
  }
  .panel-max {
    color: var(--secondary-text-color);
    font-weight: 400;
  }
`;var ei=["1","2","3","4","5","6","7","8","9"],It="1",Ms=["auto","day","night"],Re="auto";function an(c,i){if(c==="day"||c==="night")return c;let r=i?.states?.["sun.sun"];return r?r.state==="below_horizon"?"night":"day":i?.themes?.darkMode?"night":"day"}function yl(c,i,r){let n=ei.includes(c)?c:It;return xe(`${be}/houses/${an(i,r)}_${n}.webp`,r)}function Sr(c){return!!(c?.house_image||c?.house_image_dark)}function _i(c,i){let r=c?.house_image,n=c?.house_image_dark;if(r||n){let h=an(c?.house_mode,i);return xe(h==="night"?n||r:r||n,i)}return yl(c?.house,c?.house_mode,i)}function Fs(c,i){let r=ei.includes(c)?c:It;return xe(`${be}/houses/day_${r}.webp`,i)}function nn(c){let i=[];for(let r of["day","night"])for(let n of ei)i.push({name:`${r}_${n}.webp`,url:xe(`${be}/houses/${r}_${n}.webp`,c)});return i}var yi=["bk621","bk620","re_space_system_battery","re_space_system_battery_gateway","re305_device","re306_dpu_combo","re305_or_re306_battery","re305_or_re306_device","re306_device","re306_dpu_battery","po_space_re305_battery","po_space_battery","po_space_battery_system_battery","po_space_battery_ats","po_space_battery_shp32","po_space_battery_system_dpu","jt303_space_battery","jt321_space_battery","dc303_space_battery"],de="re_space_system_battery";function De(c,i){let r=yi.includes(c)?c:de;return xe(`${be}/batteries/${r}.webp`,i)}var bl=new Set(["re_space_system_battery","re_space_system_battery_gateway","bk621","re305_device","re306_dpu_combo"]);function Is(c){return bl.has(c||de)}function Ls(c){let i=yi.includes(c)?c:de;return i==="bk621"?"bk621":i==="bk620"?"bk620":i==="re305_device"?"re305":i==="re306_dpu_combo"?"re306":"re_space"}function zs(c){let i=parseInt(c,10)||1;return i===8?3:i>=9?6:Math.min(7,Math.max(1,i))}function $r(c){let i=parseInt(c,10)||1;return i===8?3:i>=9?9:Math.min(7,Math.max(1,i))}function on(c,i){return xe(`${be}/flows/${c}.json`,i)}var xl={8:3,9:6};function ln(c){return`re_space_solar_${xl[c]||Math.min(7,Math.max(1,c||1))}`}var ke={grid_in:"re_space_gridin",grid_out:"re_space_gridout",home:"re_space_home",bat_in:"jt303_space_battery_input",bat_out:"jt303_space_battery_output",bat_chg:"re_space_bat_chg",bat_dsg:"re_space_bat_dsg",bat_soc:"re_space_bat_soc"};var dn=Do(hn(),1);var tt=1;function xi(c){let i=Number.isFinite(c.grid)?c.grid:0,r=Number.isFinite(c.load)?c.load:0,n=Number.isFinite(c.solar)?c.solar:0,h=Number.isFinite(c.bat)?c.bat:0,u=Number.isFinite(c.loadFromGrid),w=u?Math.max(0,c.loadFromGrid):Math.max(0,Math.min(i,r)),z=Number.isFinite(c.loadFromPv)||Number.isFinite(c.loadFromBat)?(c.loadFromPv||0)+(c.loadFromBat||0):Math.max(0,r-w),U=Math.max(0,h),B=Math.max(0,-h),Y=Math.max(0,n-Math.max(0,c.loadFromPv||0)),X=u?Math.max(0,U-Y):Math.max(0,i-w),rt=u?Math.max(0,Y-U)+Math.max(0,B-Math.max(0,c.loadFromBat||0)):Math.max(0,-i);return{...c,gridToHome:w,deviceToHome:z,chargeFromGrid:X,exportToGrid:rt}}var cn={re_space:{layers:[{key:"solar",zone:"bg",file:c=>ln(c.route),active:c=>c.solar>tt},{key:"grid_in",zone:"bg",file:()=>ke.grid_in,active:c=>c.grid>tt},{key:"grid_out",zone:"bg",file:()=>ke.grid_out,active:c=>c.grid<-tt},{key:"home",zone:"bg",file:()=>ke.home,active:c=>c.load>tt},{key:"bat_in",zone:"bg",file:()=>ke.bat_in,active:c=>c.bat>tt},{key:"bat_out",zone:"bg",file:()=>ke.bat_out,active:c=>c.bat<-tt},{key:"bat_soc",zone:"on",file:()=>ke.bat_soc,mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>ke.bat_chg,active:c=>c.bat>tt},{key:"bat_dsg",zone:"on",file:()=>ke.bat_dsg,active:c=>c.bat<-tt}]},bk621:{layers:[{key:"solar",zone:"bg",file:c=>`bk621/house_solar_lottie_${zs(c.route)}`,active:c=>c.solar>tt},{key:"grid_in",zone:"bg",file:()=>"bk621/grid_to_device_lottie",active:c=>c.chargeFromGrid>tt},{key:"grid_out",zone:"bg",file:()=>"bk621/device_to_grid_lottie",active:c=>c.exportToGrid>tt},{key:"grid_home",zone:"bg",file:()=>"bk621/grid_to_home_lottie",active:c=>c.gridToHome>tt},{key:"home",zone:"bg",file:c=>`bk621/house_device_home_lottie_${zs(c.route)}`,active:c=>c.deviceToHome>tt},{key:"bat_soc",zone:"on",file:()=>"bk621/house_soc_lottie",mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>"bk621/house_soc_charging_lottie",active:c=>c.bat>tt},{key:"bat_dsg",zone:"on",file:()=>"bk621/house_soc_discharging_lottie",active:c=>c.bat<-tt}]},bk620:{layers:[{key:"solar",zone:"bg",file:c=>`bk620/house_solar_lottie_${zs(c.route)}`,active:c=>c.solar>tt},{key:"grid_out",zone:"bg",file:()=>"bk621/device_to_grid_lottie",active:c=>c.exportToGrid>tt},{key:"grid_home",zone:"bg",file:()=>"bk621/grid_to_home_lottie",active:c=>c.gridToHome>tt},{key:"home",zone:"bg",file:()=>"bk620/house_device_home_lottie",active:c=>c.deviceToHome>tt}]},re305:{layers:[{key:"solar",zone:"bg",file:c=>`re305/Space_Style${$r(c.route)}_Solar_OceanPro_Com`,active:c=>c.solar>tt},{key:"grid_in",zone:"bg",file:()=>"re305/Space_Com_GridIn_OceanProOceanPanel_Com",active:c=>c.grid>tt},{key:"grid_out",zone:"bg",file:()=>"re305/Space_Com_GridOut_OceanProAdvanced_Com",active:c=>c.grid<-tt},{key:"home",zone:"bg",file:()=>"re305/Space_Com_DeviceToHome_OceanPro_Com",active:c=>c.load>tt},{key:"bat_in",zone:"bg",file:()=>"re305/OceanPro_E7_Bat_In_Lottie",active:c=>c.bat>tt},{key:"bat_out",zone:"bg",file:()=>"re305/OceanPro_E7_Bat_Out_Lottie",active:c=>c.bat<-tt},{key:"bat_soc",zone:"on",file:()=>"re305/OceanPro_E7_BatSoc_Lottie",mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Charging_Lottie",active:c=>c.bat>tt},{key:"bat_dsg",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Discharging_Lottie",active:c=>c.bat<-tt},{key:"bat_backup",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Backup_Ratio_Lottie",mode:"seek",seek:c=>c.backup,active:c=>c.backup>0&&c.backup<100}]},re306:{layers:[{key:"solar",zone:"bg",file:c=>`re305/Space_Style${$r(c.route)}_Solar_OceanPro_Com`,active:c=>c.solar>tt},{key:"grid_in",zone:"bg",file:()=>"re305/Space_Com_GridIn_OceanProOceanPanel_Com",active:c=>c.grid>tt},{key:"grid_out",zone:"bg",file:()=>"re305/Space_Com_GridOut_OceanProAdvanced_Com",active:c=>c.grid<-tt},{key:"home",zone:"bg",file:()=>"re305/Space_Com_DeviceToHome_OceanPro_Com",active:c=>c.load>tt},{key:"bat_in",zone:"bg",file:()=>"re306/OceanPro_Panel_DpuBat_In_Lottie",active:c=>c.bat>tt},{key:"bat_out",zone:"bg",file:()=>"re306/OceanPro_Panel_DpuBat_Out_Lottie",active:c=>c.bat<-tt},{key:"bat_soc",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBatSoc_Lottie",mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBat_Charging_Lottie",active:c=>c.bat>tt},{key:"bat_dsg",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBat_Discharging_Lottie",active:c=>c.bat<-tt}]}},bi=class{constructor(){this._anims={},this._stageVisible=!0,this._pageVisible=typeof document>"u"||!document.hidden,this._reducedMotion=!1,this._observer=null,this._observed=null,this._onPageVis=null,this._motionMq=null,this._onMotion=null}sync(i,{hass:r,theme:n,showFlows:h,batOverlays:u,states:w}){if(!i)return;let z=(cn[n]||cn.re_space).layers,U=new Set;for(let B of z){let Y=i.querySelector(`[data-flow="${B.key}"]`);if(!Y)continue;this._watch(Y.parentElement),U.add(B.key);let X=h&&B.active(w)&&(B.zone!=="on"||u);this._setFlow(r,Y,B,X,w)}for(let B of i.querySelectorAll("[data-flow]")){if(U.has(B.dataset.flow))continue;let Y=this._anims[B.dataset.flow];Y&&(Y.active=!1,Y.anim?.pause()),B.style.opacity="0"}}destroy(){for(let i of Object.values(this._anims))i.anim?.destroy();this._anims={},this._observer?.disconnect(),this._observer=null,this._observed=null,this._onPageVis&&(document.removeEventListener("visibilitychange",this._onPageVis),this._onPageVis=null),this._motionMq&&this._onMotion&&this._motionMq.removeEventListener?.("change",this._onMotion),this._motionMq=null,this._onMotion=null,this._stageVisible=!0}_watch(i){this._onPageVis||(this._pageVisible=!document.hidden,this._onPageVis=()=>{this._pageVisible=!document.hidden,this._applyAll()},document.addEventListener("visibilitychange",this._onPageVis),this._motionMq=window.matchMedia?.("(prefers-reduced-motion: reduce)"),this._motionMq&&(this._reducedMotion=this._motionMq.matches,this._onMotion=r=>{this._reducedMotion=r.matches,this._applyAll()},this._motionMq.addEventListener?.("change",this._onMotion))),!(!i||i===this._observed)&&(typeof IntersectionObserver>"u"||(this._observer?.disconnect(),this._observer=new IntersectionObserver(r=>{this._stageVisible=r[r.length-1].isIntersecting,this._applyAll()}),this._observer.observe(i),this._observed=i))}_canRender(){return this._stageVisible&&this._pageVisible}_applyAll(){for(let i of Object.values(this._anims))this._applyFlow(i)}_setFlow(i,r,n,h,u){let w=n.key,z=n.file(u),U=n.mode||"play",B=this._anims[w];if(h&&(!B||B.file!==z||B.anim?.wrapper!==r)){B?.anim?.destroy();let Y=dn.default.loadAnimation({container:r,renderer:"svg",loop:U!=="seek",autoplay:!1,path:on(z,i),rendererSettings:{preserveAspectRatio:"xMidYMin meet"}});Y.setSubframe(!1),B=this._anims[w]={anim:Y,file:z,ready:!1,mode:U,seek:n.seek},Y.addEventListener("DOMLoaded",()=>{B.ready=!0,this._applyFlow(B)})}B&&(B.seek=n.seek,B.active=h,B.states=u,this._applyFlow(B)),r.style.opacity=h?"1":"0"}_applyFlow(i){if(i.ready){if(i.mode==="seek"){if(!this._canRender())return;let r=Math.max(0,Math.min(100,i.seek?.(i.states)??0));if(r===i.lastSeek)return;i.lastSeek=r,i.anim.goToAndStop(r,!0);return}i.active&&this._canRender()&&!this._reducedMotion?i.anim.play():i.anim.pause()}}};var pn=Ot`
  :host {
    display: block;
    /* Height the card may use: the viewport below the HA header. vh works on
       every renderer (including older Cast receivers); dvh, when supported,
       tracks mobile browser chrome better. --ef-title reserves the title row
       when one is shown (see house-card's has-title reflection). */
    --ef-view: calc(100vh - var(--header-height, 56px));
    --ef-title: 0px;
  }
  @supports (height: 100dvh) {
    :host {
      --ef-view: calc(100dvh - var(--header-height, 56px));
    }
  }
  :host([has-title]) {
    --ef-title: 40px;
  }
  ha-card {
    overflow: hidden;
    position: relative;
    /* Contain every internal z-index in the card's own stacking context so the
       figures / lines can't paint over Home Assistant's nav. */
    isolation: isolate;
    z-index: 0;
    /* Cap the whole card to the available height so a panel view (which hands
       the card the full viewport) fits without scrolling. Shorter views never
       reach this, so they're unaffected. */
    max-height: var(--ef-view);
  }
  .title {
    font-size: 1.05em;
    font-weight: 600;
    color: var(--primary-text-color);
    padding: 14px 16px 0;
  }
  .empty {
    padding: 24px 16px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  /* Banner centered over the illustration when the card has no device set up:
     the scene still previews (and animates) but carries no live values. */
  .setup-warning {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 86%;
    padding: 8px 14px;
    border-radius: 12px;
    /* Solid card surface first as a fallback; tinted warning on top where
       color-mix is supported. */
    background: var(--ha-card-background, var(--card-background-color, #fff));
    background: color-mix(
      in srgb,
      var(--warning-color, #ff9800) 16%,
      var(--ha-card-background, var(--card-background-color, #fff))
    );
    color: var(--primary-text-color);
    font-size: clamp(11px, 2.6vw, 14px);
    font-weight: 600;
    line-height: 1.3;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
    pointer-events: none;
  }
  .setup-warning ha-icon {
    flex: none;
    color: var(--warning-color, #ff9800);
    --mdc-icon-size: 1.3em;
  }

  /* The illustration: house render with overlays pinned to the same box. The
     2340×1680 house and 1170×840 overlays share an aspect ratio, so object-fit:
     contain on each lines them up exactly. */
  /* The house render is 2340×1680; the stage is a touch taller so a clear band
     is left at the bottom for the battery readout. The house and every overlay
     are top-aligned (object-position / preserveAspectRatio) so they stay
     mutually aligned and that band stays free of the illustration. */
  .stage {
    position: relative;
    /* Fill the card width, but cap it so the fixed-aspect illustration (and thus
       the whole card) fits the available height. When height is the limit the
       stage narrows and centers — letterboxed left/right — instead of
       overflowing; when width is the limit (masonry / grid / mobile) the 100%
       wins and the layout is unchanged. */
    width: min(
      100%,
      calc((var(--ef-view) - var(--ef-title) - 8px) * 2340 / 1920)
    );
    aspect-ratio: 2340 / 1920;
    margin-inline: auto;
  }
  .layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  img.layer {
    object-fit: contain;
    object-position: top center;
  }
  .flow {
    transition: opacity 0.4s ease;
  }
  /* Flow paths between sources and the house sit under the battery box; the SoC
     fill and charge/discharge glow sit on top of it. */
  .z-bg {
    z-index: 1;
  }
  .box {
    z-index: 2;
  }
  .z-box {
    z-index: 3;
  }

  /* Leader lines dropping from each figure into the scene (app-style). */
  .leaders {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
  }
  .leader {
    position: absolute;
    width: 1px;
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, var(--primary-text-color) 38%, transparent),
      transparent
    );
  }
  .leader.grid {
    left: 6.5%;
    top: 13%;
    height: 62%;
  }
  .leader.solar {
    left: 44.5%;
    top: 13%;
    height: 34%;
  }
  .leader.home {
    left: 70%;
    top: 13%;
    height: 50%;
  }

  /* Top figures — Grid · Solar · Home. Each figure is left-aligned at the x of
     its leader line (below), so the figure sits directly above its line. A soft
     scrim of the card surface keeps them legible over the render behind them. */
  .stats {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    height: clamp(70px, 18%, 112px);
    background: linear-gradient(
      to bottom,
      var(--ha-card-background, var(--card-background-color, #fff)) 30%,
      transparent
    );
  }
  .stat {
    position: absolute;
    top: clamp(8px, 3%, 20px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    border-radius: 10px;
    /* no left padding so the text's left edge sits exactly on the leader line */
    padding: 4px 8px 4px 0;
  }
  .stat.col-grid {
    left: 6.5%;
  }
  .stat.col-solar {
    left: 44.5%;
  }
  .stat.col-home {
    left: 70%;
  }
  .stat.clickable {
    cursor: pointer;
  }
  .stat.clickable:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  .stat-value {
    color: var(--primary-text-color, #fff);
    line-height: 1.1;
    white-space: nowrap;
  }
  .stat-value .num {
    font-size: clamp(15px, 4.2vw, 26px);
    font-weight: 700;
  }
  .stat-value .unit {
    font-size: 0.62em;
    font-weight: 600;
    margin-left: 2px;
    opacity: 0.7;
  }
  .stat-label {
    font-size: clamp(10px, 2.2vw, 13px);
    color: var(--secondary-text-color);
    margin-top: 2px;
  }
  .stat.solar .stat-value .num {
    color: var(--energy-solar-color, #ff9800);
  }
  .stat.import .stat-value .num {
    color: var(--energy-grid-consumption-color, #488fc2);
  }
  .stat.export .stat-value .num {
    color: var(--energy-grid-return-color, #8353d1);
  }

  /* Battery readout in the clear band below the house — no container needed. */
  .battery {
    position: absolute;
    left: 50%;
    bottom: clamp(2px, 1.5%, 14px);
    transform: translateX(-50%);
    z-index: 3;
    text-align: center;
    border-radius: 12px;
    padding: 4px 12px;
  }
  .battery.clickable {
    cursor: pointer;
  }
  .battery.clickable:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  .battery-line {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-text-color, #fff);
    font-weight: 700;
    font-size: clamp(13px, 3.4vw, 18px);
    white-space: nowrap;
  }
  .battery-line ha-icon {
    --mdc-icon-size: 1.05em;
    color: var(--secondary-text-color);
  }
  .battery.charge .battery-line ha-icon {
    color: var(--energy-battery-in-color, #3ddc84);
  }
  .battery.discharge .battery-line ha-icon {
    color: var(--energy-battery-out-color, #f06292);
  }
  .battery-soc {
    color: var(--primary-text-color, #fff);
  }
  .battery-label {
    font-size: clamp(10px, 2.2vw, 13px);
    margin-top: 1px;
    color: var(--secondary-text-color);
  }
  .battery.charge .battery-label {
    color: var(--energy-battery-in-color, #3ddc84);
  }
  .battery.discharge .battery-label {
    color: var(--energy-battery-out-color, #f06292);
  }
`;var Rs=class extends St{static styles=[pn,rn];static get properties(){return{hass:{},_config:{},_dialog:{state:!0}}}constructor(){super(),this._flows=new bi,this._dialog=null,this._solarHourly={},this._solarTotalWh=void 0,this._solarForecasts={},this._fcTip=null}connectedCallback(){super.connectedCallback(),Jt()}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy()}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${qt}-editor`)}static getStubConfig(){return{house:It}}getCardSize(){return 7}_t(i,r){return vt(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=Xt(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r)return mt(r)&&!ht(r)?this.hass.states[r]:{state:r,attributes:{}};let n=this._map?.[i];return n?this.hass.states[n]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&mt(r)&&!ht(r)?r:this._map?.[i]}_moreInfo(i){this._moreInfoId(this._entityId(i))}_moreInfoId(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}_openSolar(){gi(this)}_grid(){let i=this._state("sensor.grid_power");return lt(i??this._state("sensor.sys_grid_power"))}_flowStates(){let i=parseInt(this._config.house||It,10)||1;return this._device?xi({grid:this._grid(),solar:lt(this._state("sensor.pv_total")),load:lt(this._state("sensor.sys_load")),bat:lt(this._state("sensor.bat_power")),soc:lt(this._state("sensor.cms_batt_soc")),backup:lt(this._state("number.backup_reserve")),loadFromGrid:lt(this._state("sensor.load_from_grid")),loadFromPv:lt(this._state("sensor.load_from_pv")),loadFromBat:lt(this._state("sensor.load_from_bat")),route:i}):xi({grid:-400,solar:1500,load:700,bat:500,soc:65,backup:20,loadFromPv:700,route:i})}shouldUpdate(i){if(!(i.size===1&&i.has("hass"))||!this._map)return!0;let r=Object.values(this._map);for(let n of Object.values(this._config?.entities||{}))mt(n)&&!ht(n)&&r.push(n);return mi(i.get("hass"),this.hass,r)}updated(i){super.updated(i),this._flows.sync(this.renderRoot,{hass:this.hass,theme:Ls(this._config.battery),showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&Is(this._config.battery),states:this._flowStates()});let r=!!(this._config?.title&&!ht(this._config.title));this.toggleAttribute("has-title",r)}render(){if(!this.hass)return F``;let i=this._device,r=!i;this._map=i?Zt(this.hass,i.ents):{};let n=this._config.title&&!ht(this._config.title)?this._config.title:"",h=this._show("show_battery");return F`<ha-card>
      ${n?F`<div class="title">${n}</div>`:""}
      <div class="stage">
        <img
          class="layer house"
          src=${_i(this._config,this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="grid_home"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${h?F`<img
              class="layer box"
              src=${De(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        <div class="layer flow z-box" data-flow="bat_backup"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${h?this._renderBattery():""}
        ${r?this._renderSetupWarning():""}
      </div>
      ${this._dialog==="solar"?vi(this):""}
    </ha-card>`}_renderSetupWarning(){return F`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderLeaders(){return F`<div class="leaders">
      ${this._show("show_grid")?F`<span class="leader grid"></span>`:""}
      ${this._show("show_solar")?F`<span class="leader solar"></span>`:""}
      ${this._show("show_home")?F`<span class="leader home"></span>`:""}
    </div>`}_renderStats(){let i=!this._device,r=this._flowStates(),n=[];if(this._show("show_grid")){let h=i||!Number.isFinite(r.loadFromGrid)?null:Math.max(0,r.loadFromGrid),u=!i&&(h!=null?h>tt:r.grid>tt),w=!i&&!u&&r.exportToGrid>tt,z=h??r.grid;n.push({slot:u&&h!=null?"sensor.load_from_grid":"sensor.grid_power",fallback:"sensor.sys_grid_power",anchor:"col-grid",value:i?null:u?z:w?r.exportToGrid:h!=null?0:r.grid!=null?Math.abs(r.grid):null,label:u?this._t("house.from_grid"):w?this._t("house.to_grid"):this._t("house.grid"),cls:u?"import":w?"export":""})}return this._show("show_solar")&&n.push({slot:"sensor.pv_total",anchor:"col-solar",value:i?null:r.solar,label:this._t("card.solar"),cls:!i&&r.solar>tt?"solar":"",onTap:()=>this._openSolar()}),this._show("show_home")&&n.push({slot:"sensor.sys_load",anchor:"col-home",value:i?null:r.load,label:this._t("house.home"),cls:!i&&r.load>tt?"home":""}),n.length?F`<div class="stats">
      ${n.map(h=>{let u=ce(h.value);return F`<div
          class="stat ${h.anchor} ${h.cls} clickable"
          @click=${h.onTap||(()=>this._moreInfo(this._entityId(h.slot)?h.slot:h.fallback||h.slot))}
        >
          <div class="stat-value">
            <span class="num">${u.n}</span><span class="unit">${u.u}</span>
          </div>
          <div class="stat-label">${h.label}</div>
        </div>`})}
    </div>`:""}_renderBattery(){let i=lt(this._state("sensor.cms_batt_soc")),r=lt(this._state("sensor.bat_power")),n=r!=null&&r>tt,h=r!=null&&r<-tt,u=n?"charge":h?"discharge":"",w=n?this._t("card.charging"):h?this._t("card.discharging"):this._t("house.idle"),z=r!=null&&(n||h)?he(Math.abs(r)):null;return F`<div
      class="battery ${u} clickable"
      @click=${()=>this._moreInfo(this._entityId("sensor.cms_batt_soc")?"sensor.cms_batt_soc":"sensor.bat_power")}
    >
      <div class="battery-line">
        ${z?F`<ha-icon
              icon=${n?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${z}</span>`:""}
        ${i!=null?F`<span class="battery-soc">${Math.round(i)}%</span>`:""}
      </div>
      <div class="battery-label">${w}</div>
    </div>`}};var wl=(()=>{let c=new Uint32Array(256);for(let i=0;i<256;i++){let r=i;for(let n=0;n<8;n++)r=r&1?3988292384^r>>>1:r>>>1;c[i]=r>>>0}return c})();function kl(c){let i=4294967295;for(let r=0;r<c.length;r++)i=wl[(i^c[r])&255]^i>>>8;return(i^4294967295)>>>0}var fn=33,un=0;function mn(c){let i=new TextEncoder,r=[],n=[],h=0;for(let z of c){let U=i.encode(z.name),B=kl(z.data),Y=z.data.length,X=new DataView(new ArrayBuffer(30));X.setUint32(0,67324752,!0),X.setUint16(4,20,!0),X.setUint16(6,0,!0),X.setUint16(8,0,!0),X.setUint16(10,un,!0),X.setUint16(12,fn,!0),X.setUint32(14,B,!0),X.setUint32(18,Y,!0),X.setUint32(22,Y,!0),X.setUint16(26,U.length,!0),X.setUint16(28,0,!0),r.push(new Uint8Array(X.buffer),U,z.data);let rt=new DataView(new ArrayBuffer(46));rt.setUint32(0,33639248,!0),rt.setUint16(4,20,!0),rt.setUint16(6,20,!0),rt.setUint16(8,0,!0),rt.setUint16(10,0,!0),rt.setUint16(12,un,!0),rt.setUint16(14,fn,!0),rt.setUint32(16,B,!0),rt.setUint32(20,Y,!0),rt.setUint32(24,Y,!0),rt.setUint16(28,U.length,!0),rt.setUint16(30,0,!0),rt.setUint16(32,0,!0),rt.setUint16(34,0,!0),rt.setUint16(36,0,!0),rt.setUint32(38,0,!0),rt.setUint32(42,h,!0),n.push(new Uint8Array(rt.buffer),U),h+=30+U.length+Y}let u=n.reduce((z,U)=>z+U.length,0),w=new DataView(new ArrayBuffer(22));return w.setUint32(0,101010256,!0),w.setUint16(8,c.length,!0),w.setUint16(10,c.length,!0),w.setUint32(12,u,!0),w.setUint32(16,h,!0),w.setUint16(20,0,!0),new Blob([...r,...n,new Uint8Array(w.buffer)],{type:"application/zip"})}var Sl=[{name:"device",selector:{device:{integration:ze}}}],gn=[{id:"appearance",icon:"mdi:palette-outline"},{id:"display",icon:"mdi:eye-outline"},{id:"battery",icon:"mdi:home-battery-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"entities",icon:"mdi:tune-variant"}],vn=[["show_flows",!0,"mdi:transit-connection-variant"],["show_grid",!0,"mdi:transmission-tower"],["show_solar",!0,"mdi:solar-power-variant"],["show_home",!0,"mdi:home-lightning-bolt"],["show_battery",!0,"mdi:home-battery"]],_n=[["sensor.sys_grid_power","mdi:transmission-tower"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.sys_load","mdi:home-lightning-bolt"],["sensor.bat_power","mdi:battery-charging"],["sensor.cms_batt_soc","mdi:battery-high"]],$l=[["house_image","light","mdi:white-balance-sunny"],["house_image_dark","dark","mdi:weather-night"]],Ds=class extends St{static get properties(){return{hass:{},_config:{},_page:{state:!0},_zipping:{state:!0},_uploading:{state:!0}}}constructor(){super(),this._page=null,this._zipping=!1,this._uploading=null}connectedCallback(){super.connectedCallback(),Jt()}setConfig(i){this._config=i||{}}_t(i,r){return vt(this.hass,i,r)}_defaults(){let i=Xt(this.hass),r=this._config.device&&i.find(n=>n.deviceId===this._config.device)||i[0];return r?Zt(this.hass,r.ents):{}}render(){if(!this.hass)return F``;let i=gn.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return F`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Sl}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${gn.map(i=>F`<button
            class="nav-row"
            @click=${()=>this._page=i.id}
          >
            <ha-icon class="nav-icon" icon=${i.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`house.page.${i.id}`)}</span>
              <span class="nav-secondary">${this._summary(i.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(i){if(i==="appearance"){if(Sr(this._config))return this._t("house.editor.custom");let r=this._config.house||It,n=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${n}`)}`}if(i==="display"){let r=vn.filter(([n,h])=>this._config[n]??h);return r.length?r.map(([n])=>this._t(`house.short.${n}`)).join(", "):this._t("editor.nothing_shown")}if(i==="battery"){let r=this._config.show_battery??!0,n=this._t(`house.battery.${this._config.battery||de}`);return r?n:this._t("editor.nothing_shown")}if(i==="panels")return Ps(this);if(i==="entities"){let r=_n.filter(([n])=>this._config.entities?.[n]).length;return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic")}return""}_renderSubpage(i){return F`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`house.page.${i.id}`)}</span>
      </div>
      ${i.id==="appearance"?this._renderAppearancePage():i.id==="display"?vn.map(([r,n,h])=>this._renderToggle(r,n,h)):i.id==="battery"?this._renderBatteryPage():i.id==="panels"?Ts(this,qt):this._renderEntitiesPage()}`}_renderAppearancePage(){let i=this._config.house||It,r=Sr(this._config),n=this._config.house_mode||Re;return F`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="house-grid">
        ${ei.map(h=>F`<button
            class="house-opt ${!r&&i===h?"on":""}"
            title=${this._t("house.editor.style_n",{n:h})}
            @click=${()=>this._selectHouse(h)}
          >
            <img src=${Fs(h,this.hass)} loading="lazy" alt=${h} />
            <span class="house-label">${this._t("house.editor.style_n",{n:h})}</span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${Ms.map(h=>F`<button
            class="mode ${n===h?"on":""}"
            @click=${()=>this._set("house_mode",h,Re)}
          >
            ${this._t(`house.mode.${h}`)}
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:image-edit-outline"></ha-icon>${this._t("house.editor.custom")}
      </div>
      <div class="hint">${this._t("house.editor.custom_hint")}</div>
      ${$l.map(([h,u,w])=>this._renderUploadSlot(h,u,w))}
      <button
        class="link-btn"
        ?disabled=${this._zipping}
        @click=${this._downloadHouses}
      >
        <ha-icon icon=${this._zipping?"mdi:progress-download":"mdi:download"}></ha-icon>
        <span
          >${this._zipping?this._t("house.editor.preparing"):this._t("house.editor.download_zip")}</span
        >
      </button>`}_renderUploadSlot(i,r,n){let h=this._config[i]||"",u=this._uploading===i,w=this._t(`house.editor.custom_${r}`);return F`<div class="upload-slot">
      <div class="upload-slot-label">
        <ha-icon icon=${n}></ha-icon><span>${w}</span>
      </div>
      ${h?F`<div class="custom-img">
            <img src=${h} alt="" />
            <button class="link-btn danger" @click=${()=>this._set(i,"","")}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
              <span>${this._t("house.editor.custom_remove")}</span>
            </button>
          </div>`:F`<label class="upload ${u?"busy":""}">
            <ha-icon icon=${u?"mdi:progress-upload":"mdi:image-plus"}></ha-icon>
            <span>${u?this._t("house.editor.uploading"):w}</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              ?disabled=${this._uploading}
              @change=${z=>this._pickCustomImage(z,i)}
            />
          </label>`}
    </div>`}_renderBatteryPage(){let i=this._config.battery||de,r=this._config.show_battery??!0;return F`<div class="hint top-hint">${this._t("house.editor.battery_hint")}</div>
      <div class=${r?"batt-grid":"batt-grid dim"}>
        ${yi.map(n=>F`<button
            class="batt-opt ${i===n?"on":""}"
            title=${this._t(`house.battery.${n}`)}
            @click=${()=>this._set("battery",n,de)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${De(n,this.hass)})`}
            ></span>
            <span class="batt-label">${this._t(`house.battery.${n}`)}</span>
          </button>`)}
      </div>`}_renderEntitiesPage(){return F`<div class="hint top-hint">${this._t("house.editor.entities_hint")}</div>
      ${_n.map(([i,r])=>this._renderSlot(i,r))}`}_renderToggle(i,r,n){return F`<div class="row">
      <ha-icon icon=${n}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._set(i,h.target.checked,r)}
      ></ha-switch>
    </div>`}_renderSlot(i,r){let n=this._config.entities?.[i]||"",h=this._defaults()[i],u=mt(n)&&!ht(n)?n:"";return F`<div class="slot">
      <ha-icon icon=${r}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{value:u}}
        .schema=${[{name:"value",selector:{entity:{}}}]}
        .computeLabel=${()=>`${this._t(`slot.${i}`)}${h?` (${this._t("editor.auto_value",{value:h})})`:""}`}
        @value-changed=${w=>{w.stopPropagation(),this._setOverride(i,w.detail.value.value||"")}}
      ></ha-form>
    </div>`}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${qt}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,n){let h={...this._config,type:`custom:${qt}`};r===n||r===""||r==null?delete h[i]:h[i]=r,this._dispatch(h)}_selectHouse(i){let r={...this._config,type:`custom:${qt}`};delete r.house_image,delete r.house_image_dark,i===It?delete r.house:r.house=i,this._dispatch(r)}async _pickCustomImage(i,r){let n=i.target.files?.[0];if(i.target.value="",!(!n||this._uploading)){this._uploading=r;try{let h=new FormData;h.append("file",n);let u=await this.hass.fetchWithAuth("/api/image/upload",{method:"POST",body:h});if(!u.ok)throw new Error(`upload failed: ${u.status}`);let w=await u.json();this._set(r,`/api/image/serve/${w.id}/original`,"")}catch(h){console.error("EcoFlow House card: image upload failed",h)}finally{this._uploading=null}}}async _downloadHouses(){if(!this._zipping){this._zipping=!0;try{let i=await Promise.all(nn(this.hass).map(async({name:h,url:u})=>{let w=await fetch(u);if(!w.ok)throw new Error(`${u}: ${w.status}`);return{name:h,data:new Uint8Array(await w.arrayBuffer())}})),r=URL.createObjectURL(mn(i)),n=document.createElement("a");n.href=r,n.download="ecoflow-house-images.zip",n.click(),URL.revokeObjectURL(r)}catch(i){console.error("EcoFlow House card: failed to build zip",i)}finally{this._zipping=!1}}}_setOverride(i,r){let n={...this._config.entities||{}};r?n[i]=r:delete n[i];let h={...this._config,entities:n,type:`custom:${qt}`};Object.keys(n).length||delete h.entities,this._dispatch(h)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return Ot`
      .nav {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
      }
      .nav-row {
        display: flex;
        align-items: center;
        gap: 14px;
        border: none;
        background: transparent;
        padding: 12px 6px;
        cursor: pointer;
        text-align: left;
        border-radius: 10px;
        color: var(--primary-text-color);
        transition: background-color 0.15s ease;
      }
      .nav-row:hover {
        background: var(--secondary-background-color);
      }
      .nav-row ha-icon {
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }
      .nav-labels {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .nav-label {
        font-size: 1em;
      }
      .nav-secondary {
        font-size: 0.85em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 280px;
      }
      .subpage-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--card-background-color, var(--ha-card-background));
        padding: 8px 0;
        margin-top: -8px;
      }
      .back {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        transition: background-color 0.15s ease;
      }
      .back:hover {
        background: var(--secondary-background-color);
      }
      .subpage-title {
        font-size: 1.1em;
        font-weight: 600;
      }
      .section {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        margin: 18px 0 8px;
        color: var(--primary-text-color);
      }
      .section ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .house-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 8px;
      }
      .house-opt {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 6px 4px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .house-opt:hover {
        filter: brightness(1.1);
      }
      .house-opt.on {
        border-color: var(--primary-color);
      }
      .house-opt img {
        width: 100%;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 6px;
      }
      .house-label {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      .batt-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
        gap: 8px;
      }
      .batt-grid.dim {
        opacity: 0.45;
        pointer-events: none;
      }
      .batt-opt {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 6px 4px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .batt-opt:hover {
        filter: brightness(1.1);
      }
      .batt-opt.on {
        border-color: var(--primary-color);
      }
      /* The renders frame the box at centre; zoom the thumbnail into it. */
      .batt-thumb {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-position: center 58%;
        background-size: 200%;
      }
      .batt-label {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        text-align: center;
        line-height: 1.15;
        max-width: 100%;
      }
      .modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
      }
      .mode {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 9px 0;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9em;
        transition: background-color 0.15s ease, color 0.15s ease;
      }
      .mode:hover:not(.on) {
        background: rgba(127, 127, 127, 0.18);
      }
      .mode.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font-weight: 600;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 4px;
      }
      .row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .row-label {
        flex: 1;
        color: var(--primary-text-color);
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 10px;
      }
      .top-hint {
        margin: 0 4px 10px;
      }
      /* per-panel blocks (shared views/panels-editor.js) */
      .panel-block {
        padding: 6px 4px 12px;
        border-bottom: 1px solid var(--divider-color);
      }
      .panel-title-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
      }
      .panel-title-row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--energy-solar-color, #ff9800);
      }
      .panel-title {
        flex: 1;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .panel-block ha-form {
        display: block;
        margin-bottom: 12px;
      }
      .upload-slot {
        margin-bottom: 12px;
      }
      .upload-slot-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9em;
        color: var(--primary-text-color);
        margin: 0 2px 6px;
      }
      .upload-slot-label ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .link-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin: 10px 0 4px;
        border: none;
        background: transparent;
        color: var(--primary-color);
        padding: 6px 4px;
        cursor: pointer;
        font-size: 0.9em;
      }
      .link-btn:hover:not([disabled]) {
        text-decoration: underline;
      }
      .link-btn[disabled] {
        opacity: 0.6;
        cursor: default;
      }
      .link-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .link-btn.danger {
        color: var(--error-color, #db4437);
      }
      .upload {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: 2px dashed var(--divider-color, rgba(127, 127, 127, 0.4));
        border-radius: 12px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        padding: 18px 12px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .upload:hover {
        border-color: var(--primary-color);
      }
      .upload.busy {
        pointer-events: none;
        opacity: 0.7;
      }
      .upload ha-icon {
        --mdc-icon-size: 22px;
        color: var(--secondary-text-color);
      }
      .upload input {
        display: none;
      }
      .custom-img {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      .custom-img img {
        width: 100%;
        max-width: 320px;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 10px;
        border: 2px solid var(--primary-color);
        background: var(--secondary-background-color);
      }
      .slot {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .slot > ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        flex: 0 0 auto;
      }
      .slot-form {
        flex: 1;
        margin-bottom: 8px;
      }
    `}};var yn=Ot`
  :host {
    display: block;
    --ef-view: calc(100vh - var(--header-height, 56px));
    --rail-w: 60px;
    /* App-style dark palette (self-contained so light HA themes still match). */
    --sp-text: #f1f4f7;
    --sp-muted: #9aa3ad;
    --sp-pill: rgba(8, 10, 12, 0.78);
    --sp-tile: rgba(255, 255, 255, 0.05);
    --sp-tile-border: rgba(255, 255, 255, 0.07);
    --sp-pos: #58d18b;
    --sp-neg: #f0707a;
  }
  @supports (height: 100dvh) {
    :host {
      --ef-view: calc(100dvh - var(--header-height, 56px));
    }
  }
  /* Home Assistant Cast (e.g. a Nest Hub) and kiosk-mode (?kiosk / ?hide_header)
     have no top header, so don't reserve room for one — otherwise an empty strip
     is left at the bottom. */
  :host([cast]),
  :host([no-header]) {
    --ef-view: 100vh;
  }
  @supports (height: 100dvh) {
    :host([cast]),
    :host([no-header]) {
      --ef-view: 100dvh;
    }
  }
  ha-card {
    overflow: hidden;
    position: relative;
    isolation: isolate;
    z-index: 0;
    /* Fill the viewport in a panel view, but never exceed the container — so the
       card-editor's short preview pane (and masonry layouts) cap it instead of
       overflowing to full screen height. */
    height: var(--ef-view);
    max-height: 100%;
    border: none;
    border-radius: 0;
    color: var(--sp-text);
    /* A subtle top-lit dark gradient, like the app backdrop. */
    background: radial-gradient(
        120% 90% at 50% -10%,
        #2a2f36 0%,
        #181b1f 45%,
        #101215 100%
      ),
      #0e1013;
  }
  /* In the card-editor preview, use a fixed, sensible height instead of the
     full viewport so the preview pane isn't overrun. */
  :host([in-preview]) ha-card {
    height: 460px;
    max-height: 460px;
  }
  .shell {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
  }

  /* -- left icon rail (minimal, app-style: just icons, no boxes) --
     The rail FLOATS above the main area: it's absolutely positioned, claims no
     layout width of its own (so the house illustration uses the full card
     width), and overlays the left edge. Its empty vertical space is click-
     through (pointer-events) so only the buttons are interactive. Vertical
     alignment of the items is configurable (start / center / end), labels under
     the icons are an opt-in, and the icon+label size scales with --rail-scale
     (the rail_size config option). */
  .rail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: auto;
    max-width: calc(96px * var(--rail-scale, 1));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: calc(26px * var(--rail-scale, 1));
    padding: 30px 6px;
    box-sizing: border-box;
    z-index: 4;
    pointer-events: none;
  }
  .rail.align-center {
    justify-content: center;
  }
  .rail.align-end {
    justify-content: flex-end;
  }
  .rail.has-labels {
    gap: calc(18px * var(--rail-scale, 1));
  }
  .rail-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    border: none;
    background: transparent;
    color: var(--sp-muted);
    cursor: pointer;
    padding: 4px;
    width: auto;
    pointer-events: auto;
    transition: color 0.15s ease, opacity 0.15s ease;
    opacity: 0.7;
  }
  .rail-btn:hover {
    color: var(--sp-text);
    opacity: 1;
  }
  .rail-btn.on {
    color: var(--sp-text);
    opacity: 1;
  }
  .rail-btn ha-icon {
    --mdc-icon-size: calc(27px * var(--rail-scale, 1));
  }
  .rail-label {
    font-size: calc(0.6em * var(--rail-scale, 1));
    line-height: 1.1;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* -- main area (full width; the rail floats over its left edge) -- */
  .main {
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    overflow: hidden;
  }
  .stage-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* -- top bar -- */
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* Clear the floating rail on the left so a title doesn't sit under it. */
    padding: 12px 20px 0 calc(46px * var(--rail-scale, 1));
    gap: 12px;
    z-index: 3;
  }
  .topbar-left,
  .topbar-right {
    flex: 1 1 0;
    display: flex;
    align-items: center;
    min-width: 0;
  }
  .topbar-right {
    justify-content: flex-end;
  }
  .topbar-center {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
  .clock {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.05;
    color: var(--sp-text);
  }
  .clock-time {
    font-size: calc(1.5em * var(--ef-scale, 1));
    font-weight: 600;
    letter-spacing: 0.5px;
    font-variant-numeric: tabular-nums;
  }
  .clock-date {
    font-size: calc(0.62em * var(--ef-scale, 1));
    color: var(--sp-muted);
    font-weight: 500;
    margin-top: 1px;
  }
  .topbar-title {
    font-size: 1.05em;
    font-weight: 600;
    color: var(--sp-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .weather {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    border: none;
    background: transparent;
    color: var(--sp-text);
    cursor: pointer;
    padding: 4px 6px;
    font-size: calc(1.02em * var(--ef-scale, 1));
    font-weight: 600;
  }
  .w-grp {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }
  .w-grp ha-icon {
    --mdc-icon-size: calc(19px * var(--ef-scale, 1));
    color: var(--sp-muted);
  }
  .w-grp.moon ha-icon {
    color: #8e9bff;
  }

  /* -- the illustration (same coordinate box as the House card) -- */
  .stage {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
  }
  .layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  img.layer {
    object-fit: contain;
    object-position: top center;
  }
  .flow {
    transition: opacity 0.4s ease;
  }
  .z-bg {
    z-index: 1;
  }
  .box {
    z-index: 2;
  }
  .z-box {
    z-index: 3;
  }

  /* -- floating overlays -- */
  .overlays {
    position: absolute;
    inset: 0;
    z-index: 4;
    pointer-events: none;
  }
  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    border: none;
    background: var(--sp-pill);
    color: var(--sp-text);
    border-radius: 13px;
    padding: 7px 13px;
    pointer-events: auto;
    cursor: default;
    /* No backdrop blur: the pills sit on the animating flow lotties, so a
       backdrop-filter would be re-blurred every frame — a constant GPU cost on
       mobile. The slightly more opaque pill keeps the text readable instead. */
    white-space: nowrap;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.32);
  }
  .overlay.clickable {
    cursor: pointer;
  }
  .overlay.clickable:hover {
    background: rgba(20, 24, 28, 0.82);
  }
  .ov-label {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: calc(clamp(10px, 1.5vw, 13px) * var(--ef-scale, 1));
    color: var(--sp-muted);
    font-weight: 500;
  }
  .ov-ic {
    --mdc-icon-size: calc(14px * var(--ef-scale, 1));
  }
  .ov-dot {
    width: calc(7px * var(--ef-scale, 1));
    height: calc(7px * var(--ef-scale, 1));
    border-radius: 50%;
    margin-left: 2px;
  }
  /* The value block carries the scaled base size; unit/secondary are relative
     to it so they scale together (--ef-scale set per overlay). */
  .ov-value {
    display: inline-flex;
    align-items: baseline;
    gap: 2px;
    line-height: 1.05;
    font-size: calc(clamp(16px, 2.7vw, 26px) * var(--ef-scale, 1));
  }
  .ov-num {
    font-size: 1em;
    font-weight: 700;
    color: var(--ef-ov-color, var(--sp-text));
  }
  .ov-unit {
    font-size: 0.62em;
    font-weight: 600;
    color: var(--ef-ov-color, var(--sp-text));
    opacity: 0.8;
  }
  .ov-sec {
    font-size: 0.7em;
    font-weight: 700;
    color: var(--sp-pos);
    margin-left: 4px;
  }

  /* -- bottom tiles -- */
  /* Smaller by default so the house gets more room; --ef-scale (set on .tiles)
     resizes the whole row together. */
  .tiles {
    flex: 0 0 auto;
    display: flex;
    gap: 12px;
    padding: 6px 18px 14px;
    overflow-x: auto;
    z-index: 3;
  }
  .tile {
    flex: 1 1 0;
    min-width: 116px;
    display: flex;
    flex-direction: column;
    gap: calc(5px * var(--ef-scale, 1));
    border: 1px solid var(--sp-tile-border);
    text-align: left;
    background: var(--sp-tile);
    color: var(--sp-text);
    border-radius: 14px;
    padding: calc(10px * var(--ef-scale, 1)) calc(13px * var(--ef-scale, 1));
    cursor: default;
  }
  .tile.clickable {
    cursor: pointer;
  }
  .tile.clickable:hover {
    background: rgba(255, 255, 255, 0.09);
  }
  .tile-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }
  .tile-label {
    font-size: calc(0.82em * var(--ef-scale, 1));
    color: var(--sp-muted);
    line-height: 1.2;
  }
  .tile-head ha-icon {
    --mdc-icon-size: calc(18px * var(--ef-scale, 1));
    color: var(--sp-muted);
    flex: none;
  }
  .tile-value {
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-size: calc(clamp(17px, 2.2vw, 25px) * var(--ef-scale, 1));
  }
  .tile-num {
    font-size: 1em;
    font-weight: 800;
    line-height: 1;
  }
  .tile-unit {
    font-size: 0.5em;
    font-weight: 600;
    color: var(--sp-muted);
  }
  .tile-secondary {
    font-size: calc(0.72em * var(--ef-scale, 1));
    color: var(--sp-muted);
  }
  .tile-secondary.pos {
    color: var(--sp-pos);
  }
  .tile-secondary.neg {
    color: var(--sp-neg);
  }

  /* -- setup warning -- */
  .setup-warning {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 86%;
    padding: 8px 14px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--warning-color, #ff9800) 22%, #15181c);
    color: var(--sp-text);
    font-size: clamp(11px, 2.6vw, 14px);
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
  .setup-warning ha-icon {
    flex: none;
    color: var(--warning-color, #ff9800);
    --mdc-icon-size: 1.3em;
  }

  /* -- embedded Lovelace view --
     The embedded ha-cards live in this card's shadow tree, so theme custom
     properties set here cascade into them: we re-map the common HA theme
     variables to the card's dark palette so embedded cards match the scene
     instead of rendering as white cards on a dark backdrop. */
  .embed {
    height: 100%;
    overflow: auto;
    padding: 20px 16px;
    box-sizing: border-box;
    --primary-text-color: var(--sp-text);
    --primary-background-color: #14171b;
    --secondary-text-color: var(--sp-muted);
    --disabled-text-color: #6b7178;
    /* Opaque surfaces — these vars also drive any dialog (more-info, etc.)
       opened from an embedded card, so a translucent value here would make
       those dialogs see-through. */
    --card-background-color: #1c2026;
    --ha-card-background: #1c2026;
    --mdc-theme-surface: #22262d;
    --dialog-background-color: #22262d;
    --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.6);
    --secondary-background-color: #2a2f37;
    --divider-color: rgba(255, 255, 255, 0.1);
    --state-icon-color: var(--sp-text);
    --paper-item-icon-color: var(--sp-muted);
    --ha-card-border-color: var(--sp-tile-border);
    --ha-card-box-shadow: none;
    color: var(--sp-text);
  }
  .embed-host {
    max-width: 860px;
    margin: 0 auto;
  }
  .embed-host > * {
    display: block;
    margin-bottom: 16px;
  }
  .embed-msg {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--sp-muted);
    padding: 16px;
  }
  .embed-msg ha-icon {
    --mdc-icon-size: 20px;
  }

  /* -- "Solar today" dialog (same forecast/production graph as the Energy
     card; theme vars resolve to the normal HA theme inside the dialog) -- */
  .dlg-body {
    padding: 4px 4px 8px;
  }
  .fc-graph-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .fc-graph-title {
    font-weight: 700;
    font-size: 1.15em;
    color: var(--primary-text-color);
  }
  .fc-graph-total {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 5px 12px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .chart {
    width: 100%;
    height: auto;
    display: block;
  }
  .fc-grid {
    stroke: var(--divider-color);
    stroke-width: 1;
  }
  .fc-axis {
    fill: var(--secondary-text-color);
    font-size: 13px;
    font-family: inherit;
  }
  .fc-axis-y,
  .fc-unit {
    text-anchor: end;
  }
  .fc-axis-x {
    text-anchor: middle;
  }
  .fc-actual {
    fill: var(--energy-solar-color, #ff9800);
  }
  .fc-line {
    fill: none;
    stroke: var(--primary-text-color);
    stroke-width: 2;
    stroke-dasharray: 6 5;
    stroke-linejoin: round;
    opacity: 0.85;
  }
  .fc-graph-legend {
    display: flex;
    gap: 18px;
    justify-content: center;
    margin-top: 10px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }
  .lg {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .lg::before {
    content: "";
    width: 14px;
    height: 3px;
    border-radius: 2px;
  }
  .lg-actual::before {
    height: 12px;
    width: 10px;
    border-radius: 2px;
    background: var(--energy-solar-color, #ff9800);
  }
  .lg-fc::before {
    background: repeating-linear-gradient(
      90deg,
      var(--primary-text-color) 0 6px,
      transparent 6px 11px
    );
  }
  .fc-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: -2px 0 12px;
  }
  .fc-progress-track {
    flex: 1;
    height: 8px;
    border-radius: 6px;
    background: var(--secondary-background-color);
    overflow: hidden;
  }
  .fc-progress-fill {
    height: 100%;
    border-radius: 6px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-progress-label {
    font-size: 0.85em;
    font-weight: 700;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  .fc-current {
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  /* opacity-only: a scaleY pulse would re-rasterize the drop-shadow every frame */
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .fc-current {
      animation: none;
    }
  }
  .fc-hit {
    fill: transparent;
    pointer-events: all;
    cursor: pointer;
  }
  .fc-band {
    fill: var(--primary-text-color);
    opacity: 0.06;
  }
  .fc-tip-box {
    fill: var(--card-background-color, #1c1c1c);
    stroke: var(--divider-color);
    stroke-width: 1;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }
  .fc-tip-time {
    fill: var(--primary-text-color);
    font-size: 15px;
    font-weight: 700;
  }
  .fc-tip-line {
    fill: var(--secondary-text-color);
    font-size: 14px;
  }
  .fc-tip-line .v {
    fill: var(--primary-text-color);
    font-weight: 700;
  }

  /* per-array solar production (shared views/panels.js) */
  .dlg-section {
    margin: 18px 4px 6px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .empty {
    padding: 16px 8px;
    color: var(--secondary-text-color);
    text-align: center;
  }
  .panels {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .panel-row {
    padding: 10px 8px;
    border-radius: 10px;
    transition: background-color 0.15s ease;
  }
  .panel-row.clickable {
    cursor: pointer;
  }
  .panel-row:hover {
    background: var(--secondary-background-color);
  }
  .panel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-text-color);
  }
  .panel-name ha-icon {
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
  }
  .panel-val {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .pbar {
    height: 7px;
    border-radius: 4px;
    background: var(--divider-color);
    margin-top: 7px;
    overflow: hidden;
  }
  .pfill {
    height: 100%;
    border-radius: 4px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.4s ease;
  }
  .panel-total {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 10px 8px 2px;
    border-top: 1px solid var(--divider-color);
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .panel-total.clickable {
    cursor: pointer;
  }
  .panel-max {
    color: var(--secondary-text-color);
    font-weight: 400;
  }
`;var xn="sensor.grid_power",wn="sensor.sys_grid_power",kn="sensor.pv_total",Al="sensor.sys_load",Sn="sensor.bat_power",$n="sensor.cms_batt_soc",El="sensor.load_from_grid",Pl="sensor.load_from_pv",Tl="sensor.load_from_bat",Cl="number.backup_reserve",bn={center:"translate(-50%, -50%)","top-left":"translate(0, 0)","top-center":"translate(-50%, 0)","top-right":"translate(-100%, 0)","bottom-left":"translate(0, -100%)","bottom-center":"translate(-50%, -100%)","bottom-right":"translate(-100%, -100%)"},An="var(--energy-solar-color, #ff9800)",En="var(--energy-grid-consumption-color, #488fc2)",Ml="var(--energy-grid-return-color, #8353d1)",Pn="var(--energy-battery-in-color, #3ddc84)",Fl="var(--energy-battery-out-color, #f06292)",Vs={solar:{labelKey:"card.solar",icon:"mdi:solar-power-variant",slot:kn,format:"power",color:c=>c>tt?An:null},grid:{labelKey:"house.grid",icon:"mdi:transmission-tower",slot:xn,slotFallback:wn,format:"power-abs",color:c=>c>tt?En:c<-tt?Ml:null},battery:{labelKey:"card.battery",icon:"mdi:home-battery",slot:Sn,format:"power-abs",color:c=>c>tt?Pn:c<-tt?Fl:null,secondarySlot:$n,secondaryUnit:"%"}},Us={solar_today:{labelKey:"space.preset.solar_today",icon:"mdi:solar-power",color:An,energyKey:"solar",format:"energy",secondaryKey:"space.today"},usage:{labelKey:"space.preset.usage",icon:"mdi:home-lightning-bolt",color:En,energyKey:"consumption",format:"energy",secondaryKey:"space.today"},energy_independence:{labelKey:"space.preset.energy_independence",icon:"mdi:leaf",color:Pn,energyKey:"independence",format:"percent"}},Bs=class extends St{static styles=yn;static get properties(){return{hass:{},_config:{},_tab:{state:!0},_dialog:{state:!0}}}constructor(){super(),this._tab=0,this._flows=new bi,this._tmplUnsub={},this._tmplResults={},this._embed={path:null,status:null,els:[]},this._energy=void 0,this._energyTimer=null,this._clock="",this._clockTimer=null,this._dialog=null,this._solarHourly={},this._solarTotalWh=void 0,this._solarForecasts={},this._fcTip=null}connectedCallback(){super.connectedCallback(),Jt(),this._reflectKiosk(),this._refreshEnergy(),this._energyTimer=setInterval(()=>this._refreshEnergy(),300*1e3),this._clock=this._formatClock(),this._clockTimer=setInterval(()=>{let i=this._formatClock();i!==this._clock&&(this._clock=i,this.requestUpdate())},1e3)}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy();for(let i of Object.values(this._tmplUnsub))typeof i=="function"&&i();this._tmplUnsub={},this._energyTimer&&clearInterval(this._energyTimer),this._energyTimer=null,this._clockTimer&&clearInterval(this._clockTimer),this._clockTimer=null}_reflectCast(){let i=!1;try{let r=this.hass?.hassUrl?.("/");r&&(i=new URL(r,location.href).origin!==location.origin)}catch{}this.toggleAttribute("cast",i)}_reflectKiosk(){let i=!1;try{let r=n=>/[?&#](kiosk|hide_header)(?:=(?!false)[^&#]*)?(?:[&#]|$)/i.test(n);i=r(location.search)||r(location.hash)}catch{}this.toggleAttribute("no-header",i)}_formatClock(){let i=new Date;try{return i.toLocaleTimeString(this.hass?.locale?.language||void 0,{hour:"2-digit",minute:"2-digit"})}catch{return i.toTimeString().slice(0,5)}}firstUpdated(){let i=this;for(let r=0;r<8&&i;r++){let n=i.getRootNode?.()?.host;if(n&&/^hui-(card-preview|dialog-edit-card)/.test(n.localName||"")){this.toggleAttribute("in-preview",!0);break}i=n}}async _refreshEnergy(){if(!this.hass||!(this._config.tiles||[]).some(n=>Us[n.preset]&&!ht(n.template)&&!(n.entity&&mt(n.entity))&&!n.slot))return;let r=await Na(this.hass);this._energy=r,this.requestUpdate()}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${Yt}-editor`)}static getStubConfig(){return{tabs:[{id:"home",icon:"mdi:home",label:"Home"}],overlays:[{id:"solar",preset:"solar",x:30,y:27,anchor:"center"},{id:"grid",preset:"grid",x:22,y:62,anchor:"center"},{id:"battery",preset:"battery",x:52,y:62,anchor:"center"}],tiles:[{id:"solar",preset:"solar_today"},{id:"usage",preset:"usage"},{id:"independence",preset:"energy_independence"}],house:It}}getCardSize(){return 12}_t(i,r){return vt(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=Xt(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_slotEntity(i){return this._map?.[i]}_state(i){return this._slotState(i)}_entityId(i){return this._slotEntity(i)}_moreInfoId(i){this._moreInfo(i)}_slotState(i){let r=this._slotEntity(i);return r?this.hass.states[r]:void 0}_grid(){let i=this._slotState(xn);return lt(i??this._slotState(wn))}_flowStates(){let i=parseInt(this._config.house||It,10)||1;return this._device?xi({grid:this._grid(),solar:lt(this._slotState(kn)),load:lt(this._slotState(Al)),bat:lt(this._slotState(Sn)),soc:lt(this._slotState($n)),backup:lt(this._slotState(Cl)),loadFromGrid:lt(this._slotState(El)),loadFromPv:lt(this._slotState(Pl)),loadFromBat:lt(this._slotState(Tl)),route:i}):xi({grid:-400,solar:1500,load:700,bat:500,soc:65,backup:20,loadFromPv:700,route:i})}_moreInfo(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}_openSolar(){gi(this)}async _syncTemplates(){if(!this.hass?.connection)return;let i=[];for(let r of this._config.overlays||[])ht(r.template)&&i.push(r.template),ht(r.secondary)&&i.push(r.secondary);for(let r of this._config.tiles||[])ht(r.template)&&i.push(r.template),ht(r.secondary)&&i.push(r.secondary);for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{this._tmplUnsub[r]=await this.hass.connection.subscribeMessage(n=>{this._tmplResults[r]=n.result,this.requestUpdate()},{type:"render_template",template:r})}catch{this._tmplResults[r]="\u26A0",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let n=this._tmplUnsub[r];typeof n=="function"&&n(),delete this._tmplUnsub[r],delete this._tmplResults[r]}}_entityDisplay(i,r){let n=i.attributes?.unit_of_measurement||"";if(!r.attribute&&typeof this.hass.formatEntityState=="function")try{let w=this.hass.formatEntityState(i);if(w!=null&&w!==""){let z=w;return n&&w.endsWith(n)&&(z=w.slice(0,w.length-n.length).trim()),{num:z,unit:r.unit??(z===w?"":n)}}}catch{}let h=r.attribute?i.attributes?.[r.attribute]:i.state,u=h==null||h===""?"\u2013":String(h);return{num:u,unit:u==="\u2013"?"":r.unit??(r.attribute?"":n)}}_fmt(i,r){let n=Number(r);return i==="power"?ce(n):i==="power-abs"?ce(Math.abs(n)):i==="energy"?Ss(n):i==="percent"?{n:Number.isFinite(n)?String(Math.round(n)):"\u2013",u:"%"}:{n:r==null||r===""?"\u2013":String(r),u:""}}_gridDirLabel(){let i=this._flowStates();return i.loadFromGrid>tt||i.chargeFromGrid>tt||!Number.isFinite(i.loadFromGrid)&&i.grid>tt?this._t("house.from_grid"):i.exportToGrid>tt?this._t("house.to_grid"):this._t("house.grid")}_overlayView(i){let r=i.preset?Vs[i.preset]:null,n={label:i.label??(i.preset==="grid"&&!ht(i.template)&&!(i.entity&&mt(i.entity))?this._gridDirLabel():r?this._t(r.labelKey):""),icon:i.icon??r?.icon,num:"",unit:"",color:i.color||null,entityId:i.tap_entity||null,secondary:"",dot:i.dot};if(ht(i.template)){let h=this._tmplResults[i.template];n.num=h==null?"\u2026":String(h),n.unit=h==null?"":i.unit||""}else{let h=i.entity&&mt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||r?.slot&&this._slotEntity(r.slot)||r?.slotFallback&&this._slotEntity(r.slotFallback)||null,u=h?this.hass.states[h]:null;if(u){if(r?.format){let w=i.attribute?u.attributes?.[i.attribute]:u.state,z=this._fmt(r.format,w);n.num=z.n,n.unit=i.unit??z.u,!n.color&&r.color&&(n.color=r.color(Number(w)))}else{let w=this._entityDisplay(u,i);n.num=w.num,n.unit=w.unit}if(n.entityId=i.tap_entity||h,r?.secondarySlot){let w=this._slotEntity(r.secondarySlot),z=w?this.hass.states[w]:null,U=z?Number(z.state):NaN;Number.isFinite(U)&&(n.secondary=`${Math.round(U)}${r.secondaryUnit||""}`)}}else n.entityId=i.tap_entity||h}return i.secondary&&(n.secondary=this._resolveValue(i.secondary)),n}_tileView(i){let r=i.preset?Us[i.preset]:null,n={label:i.label??(r?this._t(r.labelKey):""),icon:i.icon??r?.icon,color:i.color||r?.color||null,num:"\u2013",unit:"",entityId:i.tap_entity||null,secondary:""},h=ht(i.template)||i.entity&&mt(i.entity)||i.slot;if(r&&!h){let u=this._energy?this._energy[r.energyKey]:null;if(u!=null){let w=this._fmt(r.format,u);n.num=w.n,n.unit=i.unit??w.u}}else if(ht(i.template)){let u=this._tmplResults[i.template];n.num=u==null?"\u2026":String(u),n.unit=u==null?"":i.unit||""}else{let u=i.entity&&mt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||null,w=u?this.hass.states[u]:null;if(w){if(r?.format){let z=i.attribute?w.attributes?.[i.attribute]:w.state,U=this._fmt(r.format,z);n.num=U.n,n.unit=i.unit??U.u}else{let z=this._entityDisplay(w,i);n.num=z.num,n.unit=z.unit}n.entityId=i.tap_entity||u}}return n.secondary=i.secondary?this._resolveValue(i.secondary):r?.secondaryKey?this._t(r.secondaryKey):"",n}_resolveValue(i){if(!i)return"";if(ht(i)){let r=this._tmplResults[i];return r==null?"\u2026":String(r)}if(mt(i)){let r=this.hass.states[i];if(!r)return"";if(typeof this.hass.formatEntityState=="function")try{return this.hass.formatEntityState(r)}catch{}let n=r.attributes?.unit_of_measurement;return n?`${r.state} ${n}`:r.state}return i}shouldUpdate(i){if(!(i.size===1&&i.has("hass"))||!this._config||this._activeTab().id!=="home"||!this._map)return!0;let r=Object.values(this._map),n=h=>{h&&mt(h)&&!ht(h)&&r.push(h)};for(let h of this._config.overlays||[])n(h.entity),n(h.secondary);for(let h of this._config.tiles||[])n(h.entity),n(h.secondary);return n(this._config.weather?.entity),n(this._config.weather?.low),mi(i.get("hass"),this.hass,r)}updated(i){super.updated(i),this._syncTemplates(),i.has("hass")&&this._reflectCast(),this._reflectKiosk(),this._activeTab().id==="home"?this._flows.sync(this.renderRoot,{hass:this.hass,theme:Ls(this._config.battery),showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&Is(this._config.battery),states:this._flowStates()}):this._syncEmbed()}_activeTab(){let i=this._tabs();return i[this._tab]||i[0]}_tabs(){let i=this._config.tabs&&this._config.tabs.length?[...this._config.tabs]:[{id:"home",icon:"mdi:home",label:"Home"}];return i[0]={...i[0],id:"home",icon:i[0].icon||"mdi:home"},i}async _syncEmbed(){let i=this.renderRoot?.querySelector(".embed-host");if(!i)return;let n=this._activeTab()?.path||"";if(n&&n===this._embed.path&&this._embed.els.length){if(i.childElementCount===0)for(let h of this._embed.els)i.appendChild(h);for(let h of this._embed.els)h.hass=this.hass;return}if(this._embed={path:n,status:"loading",els:[]},i.innerHTML="",!n){this._embed.status="empty";return}try{let h=await this._fetchView(n);if(!h){this._embed.status="missing",i.innerHTML="",this.requestUpdate();return}let u=await window.loadCardHelpers?.();if(!u)throw new Error("card helpers unavailable");let w=[...h.cards||[]];for(let U of h.sections||[])w.push(...U.cards||[]);let z=[];for(let U of w)try{let B=u.createCardElement(U);B.hass=this.hass,i.appendChild(B),z.push(B)}catch{}if(this._activeTab()?.path!==n){i.innerHTML="";return}this._embed={path:n,status:"ready",els:z}}catch{this._embed.status="error",this.requestUpdate()}}async _fetchView(i){let r=String(i).split("/").filter(Boolean),n=r.length>1?r[0]:null,h=r.length>1?r.slice(1).join("/"):r[0],w=(await this.hass.connection.sendMessagePromise({type:"lovelace/config",url_path:n}))?.views||[],z=w.find(U=>U.path===h);return!z&&/^\d+$/.test(h)&&(z=w[Number(h)]),z}render(){if(!this.hass)return F``;let i=this._device;this._map=i?Zt(this.hass,i.ents):{};let r=this._tabs(),n=r[this._tab]||r[0],h=this._config.rail_labels??!1,u=this._config.rail_align||"start",w=this._config.rail_size||1;return F`<ha-card>
      <div class="shell" style=${`--rail-scale:${w}`}>
        <nav class="rail align-${u} ${h?"has-labels":""}">
          ${r.map((z,U)=>F`<button
              class="rail-btn ${U===this._tab?"on":""}"
              title=${z.label||""}
              @click=${()=>this._tab=U}
            >
              <ha-icon icon=${z.icon||"mdi:view-dashboard-outline"}></ha-icon>
              ${h&&z.label?F`<span class="rail-label">${z.label}</span>`:""}
            </button>`)}
        </nav>
        <div class="main">
          ${n.id==="home"?this._renderHome():this._renderEmbed()}
        </div>
      </div>
      ${this._dialog==="solar"?vi(this):""}
    </ha-card>`}_needsDevice(){let i=r=>!r.entity&&!ht(r.template)&&(r.slot||Vs[r.preset]);return(this._config.overlays||[]).some(i)}_renderHome(){let i=this._show("show_battery"),r=!this._device&&this._needsDevice();return F`<div class="stage-wrap">
      ${this._renderTopBar()}
      <div class="stage">
        <img class="layer house" src=${_i(this._config,this.hass)} alt="" />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="grid_home"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${i?F`<img
              class="layer box"
              src=${De(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        <div class="layer flow z-box" data-flow="bat_backup"></div>
        ${this._renderOverlays()}
        ${r?this._renderSetupWarning():""}
      </div>
      ${this._renderTiles()}
    </div>`}_renderTopBar(){let i=this._config.title&&!ht(this._config.title)?this._config.title:"";return F`<div class="topbar">
      <div class="topbar-left">
        ${i?F`<div class="topbar-title">${i}</div>`:""}
      </div>
      ${this._renderClock()} ${this._renderWeather()}
    </div>`}_renderClock(){if(!(this._config.clock??!1))return F`<span class="topbar-center"></span>`;let i=this._config.clock_size||1;return F`<div class="topbar-center">
      <div class="clock" style=${`--ef-scale:${i}`}>
        <span class="clock-time">${this._clock||this._formatClock()}</span>
        ${this._config.clock_date?F`<span class="clock-date">${this._formatDate()}</span>`:""}
      </div>
    </div>`}_formatDate(){try{return new Date().toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}catch{return""}}_renderWeather(){let i=this._config.weather?.entity,r=i?this.hass.states[i]:null;if(!r)return F`<div class="topbar-right"></div>`;let n=r.attributes||{},h=n.temperature_unit||this.hass.config?.unit_system?.temperature||"\xB0",u=this._resolveValue(this._config.weather?.low),w="";if(u!=="")w=u;else if(Array.isArray(n.forecast)&&n.forecast.length){let U=n.forecast[0].templow??n.forecast[0].temperature;U!=null&&(w=`${Math.round(U)} ${h}`)}let z=this._config.weather_size||1;return F`<div class="topbar-right">
      <button
        class="weather"
        style=${`--ef-scale:${z}`}
        @click=${()=>this._moreInfo(i)}
        title=${r.state}
      >
        ${n.temperature!=null?F`<span class="w-grp"
              ><ha-icon icon="mdi:thermometer"></ha-icon
              ><span>${Math.round(n.temperature)} ${h}</span></span
            >`:""}
        ${n.humidity!=null?F`<span class="w-grp"
              ><ha-icon icon="mdi:water-percent"></ha-icon
              ><span>${Math.round(n.humidity)} %</span></span
            >`:""}
        ${w?F`<span class="w-grp moon"
              ><ha-icon icon="mdi:weather-night"></ha-icon
              ><span>${w}</span></span
            >`:""}
      </button>
    </div>`}_renderOverlays(){let i=this._config.overlays||[];return i.length?F`<div class="overlays">
      ${i.map(r=>{let n=this._overlayView(r),h=`left:${r.x??50}%;top:${r.y??50}%;transform:${bn[r.anchor]||bn.center};--ef-scale:${r.size||1};${n.color?`--ef-ov-color:${n.color};`:""}`,u=r.preset==="solar"?()=>this._openSolar():()=>this._moreInfo(n.entityId);return F`<button
          class="overlay ${n.entityId||r.preset==="solar"?"clickable":""}"
          style=${h}
          @click=${u}
        >
          ${n.label?F`<span class="ov-label"
                >${n.icon?F`<ha-icon class="ov-ic" icon=${n.icon}></ha-icon>`:""}
                <span>${n.label}</span>
                ${r.dot?F`<span class="ov-dot" style=${`background:${r.dot}`}></span>`:""}</span
              >`:""}
          ${n.num!==""?F`<span class="ov-value"
                ><span class="ov-num">${n.num}</span
                >${n.unit?F`<span class="ov-unit">${n.unit}</span>`:""}
                ${n.secondary?F`<span class="ov-sec">· ${n.secondary}</span>`:""}</span
              >`:""}
        </button>`})}
    </div>`:""}_renderTiles(){let i=this._config.tiles||[];if(!i.length)return"";let r=this._config.tiles_size||1;return F`<div class="tiles" style=${`--ef-scale:${r}`}>
      ${i.map(n=>{let h=this._tileView(n),u=h.secondary.startsWith("+")?"pos":h.secondary.startsWith("-")?"neg":"",w=n.preset==="solar_today"?()=>this._openSolar():()=>this._moreInfo(h.entityId);return F`<button
          class="tile ${h.entityId||n.preset==="solar_today"?"clickable":""}"
          @click=${w}
        >
          <div class="tile-head">
            <span class="tile-label">${h.label||""}</span>
            ${h.icon?F`<ha-icon
                  icon=${h.icon}
                  style=${h.color?`color:${h.color}`:""}
                ></ha-icon>`:""}
          </div>
          <div class="tile-value">
            <span class="tile-num">${h.num||"\u2013"}</span
            >${h.unit?F`<span class="tile-unit">${h.unit}</span>`:""}
          </div>
          ${h.secondary?F`<div class="tile-secondary ${u}">${h.secondary}</div>`:""}
        </button>`})}
    </div>`}_renderSetupWarning(){return F`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderEmbed(){let i=this._embed.status;return F`<div class="embed">
      ${i==="missing"||i==="error"?F`<div class="embed-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <span>${this._t("space.embed_missing")}</span>
          </div>`:i==="empty"?F`<div class="embed-msg">
              <ha-icon icon="mdi:link-variant-off"></ha-icon>
              <span>${this._t("space.embed_empty")}</span>
            </div>`:""}
      <div class="embed-host"></div>
    </div>`}};var Il=[{name:"device",selector:{device:{integration:ze}}}],Tn=[{id:"appearance",icon:"mdi:palette-outline"},{id:"weather",icon:"mdi:weather-partly-cloudy"},{id:"overlays",icon:"mdi:label-multiple-outline"},{id:"tiles",icon:"mdi:card-text-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"tabs",icon:"mdi:dock-left"}],Ns=["sensor.pv_total","sensor.sys_load","sensor.grid_power","sensor.bat_power","sensor.cms_batt_soc"],Ll=["center","top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],zl=[["show_flows",!0,"mdi:transit-connection-variant"],["show_battery",!0,"mdi:home-battery"]],Ol=0,Ar=c=>`${c}_${Date.now().toString(36)}_${Ol++}`;function Rl(c){if(typeof c!="string")return;let i=c.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(i){let r=i[1];return r.length===3&&(r=r.split("").map(n=>n+n).join("")),[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16)]}if(i=c.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i),i)return[+i[1],+i[2],+i[3]]}var js=class extends St{static get properties(){return{hass:{},_config:{},_page:{state:!0},_sel:{state:!0}}}constructor(){super(),this._config={},this._page=null,this._sel=null,this._modes={},this._drag=null}connectedCallback(){super.connectedCallback(),Jt()}setConfig(i){this._config=i||{}}_t(i,r){return vt(this.hass,i,r)}render(){if(!this.hass)return F``;let i=Tn.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return F`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Il}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${Tn.map(i=>F`<button class="nav-row" @click=${()=>this._page=i.id}>
            <ha-icon class="nav-icon" icon=${i.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`space.page.${i.id}`)}</span>
              <span class="nav-secondary">${this._summary(i.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(i){if(i==="appearance"){let r=this._config.house||It,n=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${n}`)}`}return i==="weather"?this._config.weather?.entity||this._t("editor.automatic"):i==="overlays"?this._t("space.n_items",{n:(this._config.overlays||[]).length}):i==="tiles"?this._t("space.n_items",{n:(this._config.tiles||[]).length}):i==="panels"?Ps(this):i==="tabs"?this._t("space.n_items",{n:this._tabs().length}):""}_renderSubpage(i){return F`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`space.page.${i.id}`)}</span>
      </div>
      ${i.id==="appearance"?this._renderAppearance():i.id==="weather"?this._renderWeather():i.id==="overlays"?this._renderOverlays():i.id==="tiles"?this._renderTiles():i.id==="panels"?Ts(this,Yt):this._renderTabs()}`}_renderAppearance(){let i=this._config.house||It,r=this._config.house_mode||Re,n=this._config.battery||de;return F`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="grid">
        ${ei.map(h=>F`<button
            class="opt ${i===h?"on":""}"
            @click=${()=>this._set("house",h,It)}
          >
            <img src=${Fs(h,this.hass)} loading="lazy" alt=${h} />
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${Ms.map(h=>F`<button
            class="mode ${r===h?"on":""}"
            @click=${()=>this._set("house_mode",h,Re)}
          >
            ${this._t(`house.mode.${h}`)}
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:home-battery-outline"></ha-icon>${this._t("house.editor.battery")}
      </div>
      <div class="grid small">
        ${yi.map(h=>F`<button
            class="opt ${n===h?"on":""}"
            title=${this._t(`house.battery.${h}`)}
            @click=${()=>this._set("battery",h,de)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${De(h,this.hass)})`}
            ></span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:eye-outline"></ha-icon>${this._t("house.page.display")}
      </div>
      ${zl.map(([h,u,w])=>this._renderToggle(h,u,w))}`}_renderToggle(i,r,n){return F`<div class="row">
      <ha-icon icon=${n}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._set(i,h.target.checked,r)}
      ></ha-switch>
    </div>`}_renderWeather(){let i=this._config.weather?.entity||"";return F`<div class="hint top-hint">${this._t("space.weather_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:i}}
        .schema=${[{name:"value",selector:{entity:{domain:"weather"}}}]}
        .computeLabel=${()=>this._t("space.weather_entity")}
        @value-changed=${r=>{r.stopPropagation(),this._setWeather("entity",r.detail.value.value||"")}}
      ></ha-form>
      ${this._textField(this._t("space.f_low"),this._config.weather?.low||"",r=>this._setWeather("low",r))}
      ${this._scaleField(this._t("space.f_weather_size"),this._config.weather_size,r=>this._set("weather_size",r,1))}

      <div class="section">
        <ha-icon icon="mdi:clock-outline"></ha-icon>${this._t("space.clock_title")}
      </div>
      <div class="row">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="row-label">${this._t("space.clock_show")}</span>
        <ha-switch
          .checked=${this._config.clock??!1}
          @change=${r=>this._set("clock",r.target.checked,!1)}
        ></ha-switch>
      </div>
      ${this._config.clock?F`<div class="row">
              <ha-icon icon="mdi:calendar-outline"></ha-icon>
              <span class="row-label">${this._t("space.clock_date")}</span>
              <ha-switch
                .checked=${this._config.clock_date??!1}
                @change=${r=>this._set("clock_date",r.target.checked,!1)}
              ></ha-switch>
            </div>
            ${this._scaleField(this._t("space.f_clock_size"),this._config.clock_size,r=>this._set("clock_size",r,1))}`:""}`}_setWeather(i,r){let n={...this._config.weather||{}};r?n[i]=r:delete n[i];let h={...this._config,weather:n,type:`custom:${Yt}`};Object.keys(n).length||delete h.weather,this._dispatch(h)}_renderOverlays(){let i=this._config.overlays||[];return F`<div class="hint top-hint">${this._t("space.overlays_hint")}</div>
      <div
        class="preview"
        @pointermove=${this._onDragMove}
        @pointerup=${this._onDragEnd}
        @pointerleave=${this._onDragEnd}
      >
        <img class="preview-img" src=${_i(this._config,this.hass)} alt="" />
        ${i.map(r=>F`<button
            class="chip ${this._sel===r.id?"sel":""}"
            style=${`left:${r.x??50}%;top:${r.y??50}%`}
            @pointerdown=${n=>this._onDragStart(n,r.id)}
            @click=${()=>this._sel=r.id}
          >
            ${r.icon?F`<ha-icon icon=${r.icon}></ha-icon>`:""}
            <span>${r.label||r.id}</span>
          </button>`)}
      </div>

      ${i.map((r,n)=>this._renderOverlayEditor(r,n))}

      <button class="add-btn" @click=${this._addOverlay}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_overlay")}</span>
      </button>`}_renderOverlayEditor(i,r){let n=this._sel===i.id,h=this._sourceMode(i);return F`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:i.id}>
        ${i.icon?F`<ha-icon icon=${i.icon}></ha-icon>`:F`<ha-icon icon="mdi:label-outline"></ha-icon>`}
        <span class="item-title">${i.label||i.id}</span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?F`<div class="item-body">
            ${this._renderPresetField("overlays",i,r,Vs)}
            ${this._textField(this._t("space.f_label"),i.label||"",u=>this._updateItem("overlays",r,{label:u}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,u=>this._updateItem("overlays",r,{icon:u}))}
            ${i.preset?"":this._renderSourceField("overlays",i,r,h)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",u=>this._updateItem("overlays",r,{unit:u||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",u=>this._updateItem("overlays",r,{secondary:u||void 0}))}
            ${this._colorField(this._t("space.f_dot"),i.dot,u=>this._updateItem("overlays",r,{dot:u}))}
            ${this._selectField(this._t("space.f_anchor"),Ll,i.anchor||"center",u=>this._updateItem("overlays",r,{anchor:u}),u=>this._t(`space.anchor.${u}`))}
            <div class="xy">
              ${this._numField("X %",i.x??50,u=>this._updateItem("overlays",r,{x:u}))}
              ${this._numField("Y %",i.y??50,u=>this._updateItem("overlays",r,{y:u}))}
            </div>
            ${this._colorField(this._t("space.f_color"),i.color,u=>this._updateItem("overlays",r,{color:u}))}
            ${this._scaleField(this._t("space.f_size"),i.size,u=>this._updateItem("overlays",r,{size:u===1?void 0:u}))}
            <button class="del-btn" @click=${()=>this._removeItem("overlays",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_renderPresetField(i,r,n,h){let u=["",...Object.keys(h)];return F`${this._selectField(this._t("space.f_preset"),u,r.preset||"",w=>{let z={preset:w||void 0};w&&(z.slot=void 0,z.entity=void 0,z.template=void 0),this._updateItem(i,n,z)},w=>w?this._t(`space.preset.${w}`):this._t("space.preset_none"))}
      ${r.preset?F`<div class="hint">${this._t("space.preset_hint")}</div>`:""}`}_sourceMode(i){return this._modes[i.id]?this._modes[i.id]:ht(i.template)?"template":i.entity?"entity":"auto"}_renderSourceField(i,r,n,h){return F`<div class="src-modes">
        ${["auto","entity","template"].map(u=>F`<button
            class="mode ${h===u?"on":""}"
            @click=${()=>{this._modes={...this._modes,[r.id]:u};let w={slot:void 0,entity:void 0,template:void 0};this._updateItem(i,n,w)}}
          >
            ${this._t(`space.src_${u}`)}
          </button>`)}
      </div>
      ${h==="auto"?this._selectField(this._t("space.f_slot"),Ns,r.slot||Ns[0],u=>this._updateItem(i,n,{slot:u}),u=>this._t(`slot.${u}`)):h==="entity"?F`<ha-form
              .hass=${this.hass}
              .data=${{value:mt(r.entity)?r.entity:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${u=>{u.stopPropagation(),this._updateItem(i,n,{entity:u.detail.value.value||void 0})}}
            ></ha-form>`:F`<ha-form
              .hass=${this.hass}
              .data=${{value:ht(r.template)?r.template:""}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${u=>{u.stopPropagation(),this._updateItem(i,n,{template:u.detail.value.value||void 0})}}
            ></ha-form>`}`}_addOverlay(){let i=[...this._config.overlays||[]],r=Ar("ov");i.push({id:r,label:"Overlay",x:50,y:50,anchor:"center",slot:Ns[0]}),this._setList("overlays",i),this._sel=r}_renderTiles(){let i=this._config.tiles||[];return F`<div class="hint top-hint">${this._t("space.tiles_hint")}</div>
      ${this._scaleField(this._t("space.f_tiles_size"),this._config.tiles_size,r=>this._set("tiles_size",r,1))}
      ${i.map((r,n)=>this._renderTileEditor(r,n))}
      <button class="add-btn" @click=${this._addTile}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tile")}</span>
      </button>`}_renderTileEditor(i,r){let n=this._sel===i.id,h=this._sourceMode(i);return F`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:i.id}>
        ${i.icon?F`<ha-icon icon=${i.icon}></ha-icon>`:F`<ha-icon icon="mdi:card-outline"></ha-icon>`}
        <span class="item-title">${i.label||i.id}</span>
        <span class="reorder">
          <button @click=${u=>{u.stopPropagation(),this._moveItem("tiles",r,-1)}}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button @click=${u=>{u.stopPropagation(),this._moveItem("tiles",r,1)}}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
        </span>
      </div>
      ${n?F`<div class="item-body">
            ${this._renderPresetField("tiles",i,r,Us)}
            ${this._textField(this._t("space.f_label"),i.label||"",u=>this._updateItem("tiles",r,{label:u}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,u=>this._updateItem("tiles",r,{icon:u}))}
            ${this._colorField(this._t("space.f_icon_color"),i.color,u=>this._updateItem("tiles",r,{color:u}))}
            ${i.preset?"":this._renderSourceField("tiles",i,r,h)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",u=>this._updateItem("tiles",r,{unit:u||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",u=>this._updateItem("tiles",r,{secondary:u||void 0}))}
            <button class="del-btn" @click=${()=>this._removeItem("tiles",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_addTile(){let i=[...this._config.tiles||[]],r=Ar("tile");i.push({id:r,label:"Tile",slot:Ns[0]}),this._setList("tiles",i),this._sel=r}_tabs(){return this._config.tabs&&this._config.tabs.length?this._config.tabs:[{id:"home",icon:"mdi:home",label:"Home"}]}_renderTabs(){let i=this._tabs();return F`<div class="row">
        <ha-icon icon="mdi:label-outline"></ha-icon>
        <span class="row-label">${this._t("space.rail_labels")}</span>
        <ha-switch
          .checked=${this._config.rail_labels??!1}
          @change=${r=>this._set("rail_labels",r.target.checked,!1)}
        ></ha-switch>
      </div>
      ${this._selectField(this._t("space.rail_align"),["start","center","end"],this._config.rail_align||"start",r=>this._set("rail_align",r,"start"),r=>this._t(`space.align.${r}`))}
      ${this._scaleField(this._t("space.f_rail_size"),this._config.rail_size,r=>this._set("rail_size",r,1))}
      <div class="hint top-hint" style="margin-top:14px">${this._t("space.tabs_hint")}</div>
      ${i.map((r,n)=>n===0?this._renderHomeTab(r):this._renderTabEditor(r,n))}
      <button class="add-btn" @click=${this._addTab}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tab")}</span>
      </button>`}_renderHomeTab(i){return F`<div class="item">
      <div class="item-head static">
        <ha-icon icon=${i.icon||"mdi:home"}></ha-icon>
        <span class="item-title">${i.label||this._t("house.home")}</span>
        <span class="badge">${this._t("space.home_tab")}</span>
      </div>
    </div>`}_renderTabEditor(i,r){let n=this._sel===`tab${r}`;return F`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:`tab${r}`}>
        <ha-icon icon=${i.icon||"mdi:view-dashboard-outline"}></ha-icon>
        <span class="item-title">${i.label||i.path||`Tab ${r}`}</span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?F`<div class="item-body">
            ${this._textField(this._t("space.f_label"),i.label||"",h=>this._updateItem("tabs",r,{label:h}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,h=>this._updateItem("tabs",r,{icon:h}))}
            ${this._textField(this._t("space.f_path"),i.path||"",h=>this._updateItem("tabs",r,{path:h}),this._t("space.path_hint"))}
            <button class="del-btn" @click=${()=>this._removeItem("tabs",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_addTab(){let i=[...this._tabs()];i.push({id:Ar("tab"),icon:"mdi:view-dashboard-outline",label:"View",path:""}),this._setList("tabs",i),this._sel=`tab${i.length-1}`}_textField(i,r,n,h){return F`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??""}}
      .schema=${[{name:"value",selector:{text:{}}}]}
      .computeLabel=${()=>i}
      .computeHelper=${()=>h||""}
      @value-changed=${u=>{u.stopPropagation(),n(u.detail.value.value??"")}}
    ></ha-form>`}_iconField(i,r,n){return F`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??""}}
      .schema=${[{name:"value",selector:{icon:{}}}]}
      .computeLabel=${()=>i}
      @value-changed=${h=>{h.stopPropagation(),n(h.detail.value.value||void 0)}}
    ></ha-form>`}_colorField(i,r,n){return F`<div class="color-field">
      <ha-form
        class="field"
        .hass=${this.hass}
        .data=${{value:Rl(r)}}
        .schema=${[{name:"value",selector:{color_rgb:{}}}]}
        .computeLabel=${()=>i}
        @value-changed=${h=>{h.stopPropagation();let u=h.detail.value.value;n(Array.isArray(u)?`rgb(${u[0]}, ${u[1]}, ${u[2]})`:void 0)}}
      ></ha-form>
      ${r?F`<button
            class="color-clear"
            title=${this._t("space.clear_color")}
            @click=${()=>n(void 0)}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>`:""}
    </div>`}_numField(i,r,n){return F`<ha-form
      class="field num"
      .hass=${this.hass}
      .data=${{value:r}}
      .schema=${[{name:"value",selector:{number:{min:0,max:100,mode:"box"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${h=>{let u=Number(h.detail.value.value);Number.isFinite(u)&&n(Math.max(0,Math.min(100,Math.round(u))))}}
    ></ha-form>`}_scaleField(i,r,n){return F`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??1}}
      .schema=${[{name:"value",selector:{number:{min:.5,max:3,step:.1,mode:"slider"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${h=>{h.stopPropagation();let u=Number(h.detail.value.value);n(Number.isFinite(u)?u:1)}}
    ></ha-form>`}_selectField(i,r,n,h,u){let w=r.map(z=>({value:z,label:u?u(z):z||"\u2014"}));return F`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:n}}
      .schema=${[{name:"value",selector:{select:{options:w,mode:"dropdown"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${z=>{z.stopPropagation(),h(z.detail.value.value??"")}}
    ></ha-form>`}_onDragStart(i,r){i.preventDefault(),this._sel=r;let n=this.renderRoot.querySelector(".preview");this._drag={id:r,rect:n.getBoundingClientRect()},n.setPointerCapture?.(i.pointerId)}_onDragMove(i){if(!this._drag)return;let{rect:r,id:n}=this._drag,h=Math.max(0,Math.min(100,(i.clientX-r.left)/r.width*100)),u=Math.max(0,Math.min(100,(i.clientY-r.top)/r.height*100)),z=(this._config.overlays||[]).findIndex(U=>U.id===n);z<0||this._updateItem("overlays",z,{x:Math.round(h),y:Math.round(u)})}_onDragEnd(){this._drag=null}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${Yt}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,n){let h={...this._config,type:`custom:${Yt}`};r===n||r===""||r==null?delete h[i]:h[i]=r,this._dispatch(h)}_setList(i,r){let n={...this._config,type:`custom:${Yt}`};!r||!r.length?delete n[i]:n[i]=r,this._dispatch(n)}_updateItem(i,r,n){let h=[...i==="tabs"?this._tabs():this._config[i]||[]];if(!h[r])return;let u={...h[r],...n};for(let w of Object.keys(u))u[w]===void 0&&delete u[w];h[r]=u,this._setList(i,h)}_removeItem(i,r){let n=[...i==="tabs"?this._tabs():this._config[i]||[]];n.splice(r,1),this._setList(i,n),this._sel=null}_moveItem(i,r,n){let h=[...this._config[i]||[]],u=r+n;u<0||u>=h.length||([h[r],h[u]]=[h[u],h[r]],this._setList(i,h))}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return Ot`
      .nav {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
      }
      .nav-row {
        display: flex;
        align-items: center;
        gap: 14px;
        border: none;
        background: transparent;
        padding: 12px 6px;
        cursor: pointer;
        text-align: left;
        border-radius: 10px;
        color: var(--primary-text-color);
      }
      .nav-row:hover {
        background: var(--secondary-background-color);
      }
      .nav-row ha-icon {
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }
      .nav-labels {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .nav-secondary {
        font-size: 0.85em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 280px;
      }
      .subpage-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--card-background-color, var(--ha-card-background));
        padding: 8px 0;
        margin-top: -8px;
      }
      .back {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 36px;
        height: 36px;
      }
      .back:hover {
        background: var(--secondary-background-color);
      }
      .subpage-title {
        font-size: 1.1em;
        font-weight: 600;
      }
      .section {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        margin: 18px 0 8px;
      }
      .section ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 8px;
      }
      .grid.small {
        grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
      }
      .opt {
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 4px;
        cursor: pointer;
      }
      .opt.on {
        border-color: var(--primary-color);
      }
      .opt img {
        width: 100%;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 6px;
      }
      .batt-thumb {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-position: center 58%;
        background-size: 200%;
      }
      .modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
      }
      .mode {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 9px 0;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9em;
      }
      .mode.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font-weight: 600;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 4px;
      }
      .row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .row-label {
        flex: 1;
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 10px;
      }
      .top-hint {
        margin: 0 4px 12px;
      }
      /* per-panel blocks (shared views/panels-editor.js) */
      .panel-block {
        padding: 6px 4px 12px;
        border-bottom: 1px solid var(--divider-color);
      }
      .panel-title-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
      }
      .panel-title-row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--energy-solar-color, #ff9800);
      }
      .panel-title {
        flex: 1;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .panel-block ha-form {
        display: block;
        margin-bottom: 12px;
      }

      /* drag preview */
      .preview {
        position: relative;
        width: 100%;
        aspect-ratio: 2340 / 1680;
        border-radius: 12px;
        overflow: hidden;
        background: #1b1f24;
        margin-bottom: 16px;
        touch-action: none;
        user-select: none;
      }
      .preview-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: top center;
      }
      .chip {
        position: absolute;
        transform: translate(-50%, -50%);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 2px solid transparent;
        background: rgba(20, 24, 28, 0.78);
        color: #fff;
        border-radius: 10px;
        padding: 3px 8px;
        font-size: 0.78em;
        cursor: grab;
        white-space: nowrap;
      }
      .chip:active {
        cursor: grabbing;
      }
      .chip.sel {
        border-color: var(--primary-color);
      }
      .chip ha-icon {
        --mdc-icon-size: 15px;
      }

      /* list items */
      .item {
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        border-radius: 12px;
        margin-bottom: 8px;
        overflow: hidden;
      }
      .item.open {
        border-color: var(--primary-color);
      }
      .item-head {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        cursor: pointer;
      }
      .item-head.static {
        cursor: default;
      }
      .item-head > ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .item-title {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .chev {
        color: var(--secondary-text-color);
      }
      .badge {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
        border-radius: 8px;
        padding: 2px 8px;
      }
      .reorder {
        display: inline-flex;
      }
      .reorder button {
        border: none;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        padding: 2px;
      }
      .item-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 4px 12px 14px;
      }
      .field {
        width: 100%;
      }
      .color-field {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .color-field .field {
        flex: 1;
        min-width: 0;
      }
      .color-clear {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
      }
      .color-clear:hover {
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      .color-clear ha-icon {
        --mdc-icon-size: 18px;
      }
      .xy {
        display: flex;
        gap: 10px;
      }
      .xy .num {
        flex: 1;
      }
      .src-modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
      }
      .add-btn,
      .del-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 8px 4px;
        font-size: 0.92em;
      }
      .add-btn {
        color: var(--primary-color);
        margin-top: 4px;
      }
      .del-btn {
        color: var(--error-color, #db4437);
        align-self: flex-start;
      }
      .add-btn ha-icon,
      .del-btn ha-icon {
        --mdc-icon-size: 18px;
      }
    `}};customElements.define(Ft,Es);customElements.define(`${Ft}-editor`,Cs);customElements.define(qt,Rs);customElements.define(`${qt}-editor`,Ds);customElements.define(Yt,Bs);customElements.define(`${Yt}-editor`,js);window.customCards=window.customCards||[];window.customCards.push({type:Ft,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:qt,name:"EcoFlow House Card",description:"Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:Yt,name:"EcoFlow Space Card",description:"Full-screen whole-home dashboard: the house illustration with configurable floating overlays, a weather widget, stat tiles and a sidebar that embeds other Lovelace views.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
/*! Bundled license information:

lottie-web/build/player/lottie_light.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
