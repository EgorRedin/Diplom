var US=Object.defineProperty;var HS=(e,t,n)=>t in e?US(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>(HS(e,typeof t!="symbol"?t+"":t,n),n);function YS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var qS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function VS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Q0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var K0={exports:{}},lc={},X0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),GS=Symbol.for("react.portal"),QS=Symbol.for("react.fragment"),KS=Symbol.for("react.strict_mode"),XS=Symbol.for("react.profiler"),JS=Symbol.for("react.provider"),ZS=Symbol.for("react.context"),eb=Symbol.for("react.forward_ref"),tb=Symbol.for("react.suspense"),nb=Symbol.for("react.memo"),rb=Symbol.for("react.lazy"),Bh=Symbol.iterator;function ib(e){return e===null||typeof e!="object"?null:(e=Bh&&e[Bh]||e["@@iterator"],typeof e=="function"?e:null)}var J0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z0=Object.assign,ey={};function xs(e,t,n){this.props=e,this.context=t,this.refs=ey,this.updater=n||J0}xs.prototype.isReactComponent={};xs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ty(){}ty.prototype=xs.prototype;function Wf(e,t,n){this.props=e,this.context=t,this.refs=ey,this.updater=n||J0}var Bf=Wf.prototype=new ty;Bf.constructor=Wf;Z0(Bf,xs.prototype);Bf.isPureReactComponent=!0;var Uh=Array.isArray,ny=Object.prototype.hasOwnProperty,Uf={current:null},ry={key:!0,ref:!0,__self:!0,__source:!0};function iy(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)ny.call(t,r)&&!ry.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zo,type:e,key:s,ref:o,props:i,_owner:Uf.current}}function sb(e,t){return{$$typeof:zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hf(e){return typeof e=="object"&&e!==null&&e.$$typeof===zo}function ob(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hh=/\/+/g;function ou(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ob(""+e.key):t.toString(36)}function Ba(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case zo:case GS:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ou(o,0):r,Uh(i)?(n="",e!=null&&(n=e.replace(Hh,"$&/")+"/"),Ba(i,t,n,"",function(u){return u})):i!=null&&(Hf(i)&&(i=sb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hh,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Uh(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ou(s,a);o+=Ba(s,t,n,l,i)}else if(l=ib(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ou(s,a++),o+=Ba(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(e,t,n){if(e==null)return e;var r=[],i=0;return Ba(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ab(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Ua={transition:null},lb={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Uf};function sy(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:aa,forEach:function(e,t,n){aa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return aa(e,function(){t++}),t},toArray:function(e){return aa(e,function(t){return t})||[]},only:function(e){if(!Hf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=xs;ie.Fragment=QS;ie.Profiler=XS;ie.PureComponent=Wf;ie.StrictMode=KS;ie.Suspense=tb;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lb;ie.act=sy;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Z0({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Uf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ny.call(t,l)&&!ry.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zo,type:e.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(e){return e={$$typeof:ZS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:JS,_context:e},e.Consumer=e};ie.createElement=iy;ie.createFactory=function(e){var t=iy.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:eb,render:e}};ie.isValidElement=Hf;ie.lazy=function(e){return{$$typeof:rb,_payload:{_status:-1,_result:e},_init:ab}};ie.memo=function(e,t){return{$$typeof:nb,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=t}};ie.unstable_act=sy;ie.useCallback=function(e,t){return yt.current.useCallback(e,t)};ie.useContext=function(e){return yt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return yt.current.useEffect(e,t)};ie.useId=function(){return yt.current.useId()};ie.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return yt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};ie.useRef=function(e){return yt.current.useRef(e)};ie.useState=function(e){return yt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return yt.current.useTransition()};ie.version="18.3.1";X0.exports=ie;var b=X0.exports;const $t=VS(b),ad=YS({__proto__:null,default:$t},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb=b,ub=Symbol.for("react.element"),db=Symbol.for("react.fragment"),fb=Object.prototype.hasOwnProperty,pb=cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hb={key:!0,ref:!0,__self:!0,__source:!0};function oy(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)fb.call(t,r)&&!hb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ub,type:e,key:s,ref:o,props:i,_owner:pb.current}}lc.Fragment=db;lc.jsx=oy;lc.jsxs=oy;K0.exports=lc;var c=K0.exports,ld={},ay={exports:{}},Bt={},ly={exports:{}},cy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var Y=T.length;T.push(z);e:for(;0<Y;){var oe=Y-1>>>1,ue=T[oe];if(0<i(ue,z))T[oe]=z,T[Y]=ue,Y=oe;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],Y=T.pop();if(Y!==z){T[0]=Y;e:for(var oe=0,ue=T.length,ft=ue>>>1;oe<ft;){var M=2*(oe+1)-1,F=T[M],A=M+1,$=T[A];if(0>i(F,Y))A<ue&&0>i($,F)?(T[oe]=$,T[A]=Y,oe=A):(T[oe]=F,T[M]=Y,oe=M);else if(A<ue&&0>i($,Y))T[oe]=$,T[A]=Y,oe=A;else break e}}return z}function i(T,z){var Y=T.sortIndex-z.sortIndex;return Y!==0?Y:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,p=3,g=!1,x=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function k(T){if(y=!1,w(T),!x)if(n(l)!==null)x=!0,Se(_);else{var z=n(u);z!==null&&$e(k,z.startTime-T)}}function _(T,z){x=!1,y&&(y=!1,v(O),O=-1),g=!0;var Y=p;try{for(w(z),f=n(l);f!==null&&(!(f.expirationTime>z)||T&&!L());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,p=f.priorityLevel;var ue=oe(f.expirationTime<=z);z=e.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),w(z)}else r(l);f=n(l)}if(f!==null)var ft=!0;else{var M=n(u);M!==null&&$e(k,M.startTime-z),ft=!1}return ft}finally{f=null,p=Y,g=!1}}var E=!1,D=null,O=-1,K=5,N=-1;function L(){return!(e.unstable_now()-N<K)}function Z(){if(D!==null){var T=e.unstable_now();N=T;var z=!0;try{z=D(!0,T)}finally{z?Oe():(E=!1,D=null)}}else E=!1}var Oe;if(typeof m=="function")Oe=function(){m(Z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ce=q.port2;q.port1.onmessage=Z,Oe=function(){ce.postMessage(null)}}else Oe=function(){S(Z,0)};function Se(T){D=T,E||(E=!0,Oe())}function $e(T,z){O=S(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Se(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var Y=p;p=z;try{return T()}finally{p=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var Y=p;p=T;try{return z()}finally{p=Y}},e.unstable_scheduleCallback=function(T,z,Y){var oe=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,T){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Y+ue,T={id:d++,callback:z,priorityLevel:T,startTime:Y,expirationTime:ue,sortIndex:-1},Y>oe?(T.sortIndex=Y,t(u,T),n(l)===null&&T===n(u)&&(y?(v(O),O=-1):y=!0,$e(k,Y-oe))):(T.sortIndex=ue,t(l,T),x||g||(x=!0,Se(_))),T},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(T){var z=p;return function(){var Y=p;p=z;try{return T.apply(this,arguments)}finally{p=Y}}}})(cy);ly.exports=cy;var gb=ly.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mb=b,Lt=gb;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uy=new Set,ho={};function yi(e,t){ts(e,t),ts(e+"Capture",t)}function ts(e,t){for(ho[e]=t,e=0;e<t.length;e++)uy.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,yb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yh={},qh={};function xb(e){return cd.call(qh,e)?!0:cd.call(Yh,e)?!1:yb.test(e)?qh[e]=!0:(Yh[e]=!0,!1)}function vb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wb(e,t,n,r){if(t===null||typeof t>"u"||vb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function qf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yf,qf);it[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yf,qf);it[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yf,qf);it[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vf(e,t,n,r){var i=it.hasOwnProperty(t)?it[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wb(t,n,i,r)&&(n=null),r||i===null?xb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),py=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Os(e){return e===null||typeof e!="object"?null:(e=Vh&&e[Vh]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,au;function Gs(e){if(au===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);au=t&&t[1]||""}return`
`+au+e}var lu=!1;function cu(e,t){if(!e||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gs(e):""}function Sb(e){switch(e.tag){case 5:return Gs(e.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return e=cu(e.type,!1),e;case 11:return e=cu(e.type.render,!1),e;case 1:return e=cu(e.type,!0),e;default:return""}}function pd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ti:return"Fragment";case Pi:return"Portal";case ud:return"Profiler";case Gf:return"StrictMode";case dd:return"Suspense";case fd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fy:return(e.displayName||"Context")+".Consumer";case dy:return(e._context.displayName||"Context")+".Provider";case Qf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kf:return t=e.displayName||null,t!==null?t:pd(e.type)||"Memo";case cr:t=e._payload,e=e._init;try{return pd(e(t))}catch{}}return null}function bb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(t);case 8:return t===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kb(e){var t=hy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ca(e){e._valueTracker||(e._valueTracker=kb(e))}function gy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hd(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function my(e,t){t=t.checked,t!=null&&Vf(e,"checked",t,!1)}function gd(e,t){my(e,t);var n=Cr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?md(e,t.type,n):t.hasOwnProperty("defaultValue")&&md(e,t.type,Cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function md(e,t,n){(t!=="number"||pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qs=Array.isArray;function Hi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Qs(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cr(n)}}function yy(e,t){var n=Cr(t.value),r=Cr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ua,vy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ua.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function go(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_b=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(e){_b.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),to[t]=to[e]})});function wy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||to.hasOwnProperty(e)&&to[e]?(""+t).trim():t+"px"}function Sy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Db=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(e,t){if(t){if(Db[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function wd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function Xf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bd=null,Yi=null,qi=null;function Jh(e){if(e=Uo(e)){if(typeof bd!="function")throw Error(R(280));var t=e.stateNode;t&&(t=pc(t),bd(e.stateNode,e.type,t))}}function by(e){Yi?qi?qi.push(e):qi=[e]:Yi=e}function ky(){if(Yi){var e=Yi,t=qi;if(qi=Yi=null,Jh(e),t)for(e=0;e<t.length;e++)Jh(t[e])}}function _y(e,t){return e(t)}function Dy(){}var uu=!1;function Cy(e,t,n){if(uu)return e(t,n);uu=!0;try{return _y(e,t,n)}finally{uu=!1,(Yi!==null||qi!==null)&&(Dy(),ky())}}function mo(e,t){var n=e.stateNode;if(n===null)return null;var r=pc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var kd=!1;if(Vn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){kd=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{kd=!1}function Cb(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var no=!1,hl=null,gl=!1,_d=null,Eb={onError:function(e){no=!0,hl=e}};function jb(e,t,n,r,i,s,o,a,l){no=!1,hl=null,Cb.apply(Eb,arguments)}function Ob(e,t,n,r,i,s,o,a,l){if(jb.apply(this,arguments),no){if(no){var u=hl;no=!1,hl=null}else throw Error(R(198));gl||(gl=!0,_d=u)}}function xi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ey(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zh(e){if(xi(e)!==e)throw Error(R(188))}function Pb(e){var t=e.alternate;if(!t){if(t=xi(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zh(i),e;if(s===r)return Zh(i),t;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function jy(e){return e=Pb(e),e!==null?Oy(e):null}function Oy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oy(e);if(t!==null)return t;e=e.sibling}return null}var Py=Lt.unstable_scheduleCallback,eg=Lt.unstable_cancelCallback,Tb=Lt.unstable_shouldYield,Rb=Lt.unstable_requestPaint,Fe=Lt.unstable_now,Mb=Lt.unstable_getCurrentPriorityLevel,Jf=Lt.unstable_ImmediatePriority,Ty=Lt.unstable_UserBlockingPriority,ml=Lt.unstable_NormalPriority,Nb=Lt.unstable_LowPriority,Ry=Lt.unstable_IdlePriority,cc=null,Tn=null;function $b(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(cc,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Fb,Ib=Math.log,Ab=Math.LN2;function Fb(e){return e>>>=0,e===0?32:31-(Ib(e)/Ab|0)|0}var da=64,fa=4194304;function Ks(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ks(a):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-cn(t),i=1<<n,r|=e[n],t&=~i;return r}function Lb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-cn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Lb(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Dd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function My(){var e=da;return da<<=1,!(da&4194240)&&(da=64),e}function du(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cn(t),e[t]=n}function Wb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Zf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-cn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Ny(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $y,ep,Iy,Ay,Fy,Cd=!1,pa=[],mr=null,yr=null,xr=null,yo=new Map,xo=new Map,dr=[],Bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tg(e,t){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function Ts(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Uo(t),t!==null&&ep(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ub(e,t,n,r,i){switch(t){case"focusin":return mr=Ts(mr,e,t,n,r,i),!0;case"dragenter":return yr=Ts(yr,e,t,n,r,i),!0;case"mouseover":return xr=Ts(xr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return yo.set(s,Ts(yo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Ts(xo.get(s)||null,e,t,n,r,i)),!0}return!1}function Ly(e){var t=Zr(e.target);if(t!==null){var n=xi(t);if(n!==null){if(t=n.tag,t===13){if(t=Ey(n),t!==null){e.blockedOn=t,Fy(e.priority,function(){Iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ha(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ed(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sd=r,n.target.dispatchEvent(r),Sd=null}else return t=Uo(n),t!==null&&ep(t),e.blockedOn=n,!1;t.shift()}return!0}function ng(e,t,n){Ha(e)&&n.delete(t)}function Hb(){Cd=!1,mr!==null&&Ha(mr)&&(mr=null),yr!==null&&Ha(yr)&&(yr=null),xr!==null&&Ha(xr)&&(xr=null),yo.forEach(ng),xo.forEach(ng)}function Rs(e,t){e.blockedOn===t&&(e.blockedOn=null,Cd||(Cd=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,Hb)))}function vo(e){function t(i){return Rs(i,e)}if(0<pa.length){Rs(pa[0],e);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mr!==null&&Rs(mr,e),yr!==null&&Rs(yr,e),xr!==null&&Rs(xr,e),yo.forEach(t),xo.forEach(t),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)Ly(n),n.blockedOn===null&&dr.shift()}var Vi=tr.ReactCurrentBatchConfig,xl=!0;function Yb(e,t,n,r){var i=ye,s=Vi.transition;Vi.transition=null;try{ye=1,tp(e,t,n,r)}finally{ye=i,Vi.transition=s}}function qb(e,t,n,r){var i=ye,s=Vi.transition;Vi.transition=null;try{ye=4,tp(e,t,n,r)}finally{ye=i,Vi.transition=s}}function tp(e,t,n,r){if(xl){var i=Ed(e,t,n,r);if(i===null)Su(e,t,r,vl,n),tg(e,r);else if(Ub(i,e,t,n,r))r.stopPropagation();else if(tg(e,r),t&4&&-1<Bb.indexOf(e)){for(;i!==null;){var s=Uo(i);if(s!==null&&$y(s),s=Ed(e,t,n,r),s===null&&Su(e,t,r,vl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Su(e,t,r,null,n)}}var vl=null;function Ed(e,t,n,r){if(vl=null,e=Xf(r),e=Zr(e),e!==null)if(t=xi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ey(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vl=e,null}function zy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mb()){case Jf:return 1;case Ty:return 4;case ml:case Nb:return 16;case Ry:return 536870912;default:return 16}default:return 16}}var pr=null,np=null,Ya=null;function Wy(){if(Ya)return Ya;var e,t=np,n=t.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ya=i.slice(e,1<r?1-r:void 0)}function qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function rg(){return!1}function Ut(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:rg,this.isPropagationStopped=rg,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=Ut(vs),Bo=Ne({},vs,{view:0,detail:0}),Vb=Ut(Bo),fu,pu,Ms,uc=Ne({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ms&&(Ms&&e.type==="mousemove"?(fu=e.screenX-Ms.screenX,pu=e.screenY-Ms.screenY):pu=fu=0,Ms=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),ig=Ut(uc),Gb=Ne({},uc,{dataTransfer:0}),Qb=Ut(Gb),Kb=Ne({},Bo,{relatedTarget:0}),hu=Ut(Kb),Xb=Ne({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Jb=Ut(Xb),Zb=Ne({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ek=Ut(Zb),tk=Ne({},vs,{data:0}),sg=Ut(tk),nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ik={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ik[e])?!!t[e]:!1}function ip(){return sk}var ok=Ne({},Bo,{key:function(e){if(e.key){var t=nk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(e){return e.type==="keypress"?qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ak=Ut(ok),lk=Ne({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=Ut(lk),ck=Ne({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),uk=Ut(ck),dk=Ne({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fk=Ut(dk),pk=Ne({},uc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hk=Ut(pk),gk=[9,13,27,32],sp=Vn&&"CompositionEvent"in window,ro=null;Vn&&"documentMode"in document&&(ro=document.documentMode);var mk=Vn&&"TextEvent"in window&&!ro,By=Vn&&(!sp||ro&&8<ro&&11>=ro),ag=" ",lg=!1;function Uy(e,t){switch(e){case"keyup":return gk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ri=!1;function yk(e,t){switch(e){case"compositionend":return Hy(t);case"keypress":return t.which!==32?null:(lg=!0,ag);case"textInput":return e=t.data,e===ag&&lg?null:e;default:return null}}function xk(e,t){if(Ri)return e==="compositionend"||!sp&&Uy(e,t)?(e=Wy(),Ya=np=pr=null,Ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return By&&t.locale!=="ko"?null:t.data;default:return null}}var vk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vk[e.type]:t==="textarea"}function Yy(e,t,n,r){by(r),t=wl(t,"onChange"),0<t.length&&(n=new rp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var io=null,wo=null;function wk(e){nx(e,0)}function dc(e){var t=$i(e);if(gy(t))return e}function Sk(e,t){if(e==="change")return t}var qy=!1;if(Vn){var gu;if(Vn){var mu="oninput"in document;if(!mu){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),mu=typeof ug.oninput=="function"}gu=mu}else gu=!1;qy=gu&&(!document.documentMode||9<document.documentMode)}function dg(){io&&(io.detachEvent("onpropertychange",Vy),wo=io=null)}function Vy(e){if(e.propertyName==="value"&&dc(wo)){var t=[];Yy(t,wo,e,Xf(e)),Cy(wk,t)}}function bk(e,t,n){e==="focusin"?(dg(),io=t,wo=n,io.attachEvent("onpropertychange",Vy)):e==="focusout"&&dg()}function kk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dc(wo)}function _k(e,t){if(e==="click")return dc(t)}function Dk(e,t){if(e==="input"||e==="change")return dc(t)}function Ck(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:Ck;function So(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cd.call(t,i)||!hn(e[i],t[i]))return!1}return!0}function fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pg(e,t){var n=fg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fg(n)}}function Gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qy(){for(var e=window,t=pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pl(e.document)}return t}function op(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ek(e){var t=Qy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gy(n.ownerDocument.documentElement,n)){if(r!==null&&op(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=pg(n,s);var o=pg(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jk=Vn&&"documentMode"in document&&11>=document.documentMode,Mi=null,jd=null,so=null,Od=!1;function hg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Od||Mi==null||Mi!==pl(r)||(r=Mi,"selectionStart"in r&&op(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&So(so,r)||(so=r,r=wl(jd,"onSelect"),0<r.length&&(t=new rp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mi)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ni={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},yu={},Ky={};Vn&&(Ky=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function fc(e){if(yu[e])return yu[e];if(!Ni[e])return e;var t=Ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ky)return yu[e]=t[n];return e}var Xy=fc("animationend"),Jy=fc("animationiteration"),Zy=fc("animationstart"),ex=fc("transitionend"),tx=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){tx.set(e,t),yi(t,[e])}for(var xu=0;xu<gg.length;xu++){var vu=gg[xu],Ok=vu.toLowerCase(),Pk=vu[0].toUpperCase()+vu.slice(1);Nr(Ok,"on"+Pk)}Nr(Xy,"onAnimationEnd");Nr(Jy,"onAnimationIteration");Nr(Zy,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(ex,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function mg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ob(r,t,void 0,e),e.currentTarget=null}function nx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mg(i,a,u),s=l}}}if(gl)throw e=_d,gl=!1,_d=null,e}function De(e,t){var n=t[Nd];n===void 0&&(n=t[Nd]=new Set);var r=e+"__bubble";n.has(r)||(rx(t,e,2,!1),n.add(r))}function wu(e,t,n){var r=0;t&&(r|=4),rx(n,e,r,t)}var ma="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[ma]){e[ma]=!0,uy.forEach(function(n){n!=="selectionchange"&&(Tk.has(n)||wu(n,!1,e),wu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ma]||(t[ma]=!0,wu("selectionchange",!1,t))}}function rx(e,t,n,r){switch(zy(t)){case 1:var i=Yb;break;case 4:i=qb;break;default:i=tp}n=i.bind(null,t,n,e),i=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Su(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cy(function(){var u=s,d=Xf(n),f=[];e:{var p=tx.get(e);if(p!==void 0){var g=rp,x=e;switch(e){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":g=ak;break;case"focusin":x="focus",g=hu;break;case"focusout":x="blur",g=hu;break;case"beforeblur":case"afterblur":g=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Qb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uk;break;case Xy:case Jy:case Zy:g=Jb;break;case ex:g=fk;break;case"scroll":g=Vb;break;case"wheel":g=hk;break;case"copy":case"cut":case"paste":g=ek;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=og}var y=(t&4)!==0,S=!y&&e==="scroll",v=y?p!==null?p+"Capture":null:p;y=[];for(var m=u,w;m!==null;){w=m;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,v!==null&&(k=mo(m,v),k!=null&&y.push(ko(m,k,w)))),S)break;m=m.return}0<y.length&&(p=new g(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Sd&&(x=n.relatedTarget||n.fromElement)&&(Zr(x)||x[Gn]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Zr(x):null,x!==null&&(S=xi(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=ig,k="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=og,k="onPointerLeave",v="onPointerEnter",m="pointer"),S=g==null?p:$i(g),w=x==null?p:$i(x),p=new y(k,m+"leave",g,n,d),p.target=S,p.relatedTarget=w,k=null,Zr(d)===u&&(y=new y(v,m+"enter",x,n,d),y.target=w,y.relatedTarget=S,k=y),S=k,g&&x)t:{for(y=g,v=x,m=0,w=y;w;w=ki(w))m++;for(w=0,k=v;k;k=ki(k))w++;for(;0<m-w;)y=ki(y),m--;for(;0<w-m;)v=ki(v),w--;for(;m--;){if(y===v||v!==null&&y===v.alternate)break t;y=ki(y),v=ki(v)}y=null}else y=null;g!==null&&yg(f,p,g,y,!1),x!==null&&S!==null&&yg(f,S,x,y,!0)}}e:{if(p=u?$i(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var _=Sk;else if(cg(p))if(qy)_=Dk;else{_=kk;var E=bk}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=_k);if(_&&(_=_(e,u))){Yy(f,_,n,d);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&md(p,"number",p.value)}switch(E=u?$i(u):window,e){case"focusin":(cg(E)||E.contentEditable==="true")&&(Mi=E,jd=u,so=null);break;case"focusout":so=jd=Mi=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,hg(f,n,d);break;case"selectionchange":if(jk)break;case"keydown":case"keyup":hg(f,n,d)}var D;if(sp)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ri?Uy(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(By&&n.locale!=="ko"&&(Ri||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ri&&(D=Wy()):(pr=d,np="value"in pr?pr.value:pr.textContent,Ri=!0)),E=wl(u,O),0<E.length&&(O=new sg(O,e,null,n,d),f.push({event:O,listeners:E}),D?O.data=D:(D=Hy(n),D!==null&&(O.data=D)))),(D=mk?yk(e,n):xk(e,n))&&(u=wl(u,"onBeforeInput"),0<u.length&&(d=new sg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=D))}nx(f,t)})}function ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mo(e,n),s!=null&&r.unshift(ko(e,s,i)),s=mo(e,t),s!=null&&r.push(ko(e,s,i))),e=e.return}return r}function ki(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yg(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=mo(n,s),l!=null&&o.unshift(ko(n,l,a))):i||(l=mo(n,s),l!=null&&o.push(ko(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Rk=/\r\n?/g,Mk=/\u0000|\uFFFD/g;function xg(e){return(typeof e=="string"?e:""+e).replace(Rk,`
`).replace(Mk,"")}function ya(e,t,n){if(t=xg(t),xg(e)!==t&&n)throw Error(R(425))}function Sl(){}var Pd=null,Td=null;function Rd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,Nk=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,$k=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(e){return vg.resolve(null).then(e).catch(Ik)}:Md;function Ik(e){setTimeout(function(){throw e})}function bu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Cn="__reactFiber$"+ws,_o="__reactProps$"+ws,Gn="__reactContainer$"+ws,Nd="__reactEvents$"+ws,Ak="__reactListeners$"+ws,Fk="__reactHandles$"+ws;function Zr(e){var t=e[Cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[Cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wg(e);e!==null;){if(n=e[Cn])return n;e=wg(e)}return t}e=n,n=e.parentNode}return null}function Uo(e){return e=e[Cn]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $i(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function pc(e){return e[_o]||null}var $d=[],Ii=-1;function $r(e){return{current:e}}function je(e){0>Ii||(e.current=$d[Ii],$d[Ii]=null,Ii--)}function _e(e,t){Ii++,$d[Ii]=e.current,e.current=t}var Er={},dt=$r(Er),Dt=$r(!1),ci=Er;function ns(e,t){var n=e.type.contextTypes;if(!n)return Er;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,e!=null}function bl(){je(Dt),je(dt)}function Sg(e,t,n){if(dt.current!==Er)throw Error(R(168));_e(dt,t),_e(Dt,n)}function ix(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,bb(e)||"Unknown",i));return Ne({},n,r)}function kl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Er,ci=dt.current,_e(dt,e),_e(Dt,Dt.current),!0}function bg(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=ix(e,t,ci),r.__reactInternalMemoizedMergedChildContext=e,je(Dt),je(dt),_e(dt,e)):je(Dt),_e(Dt,n)}var Bn=null,hc=!1,ku=!1;function sx(e){Bn===null?Bn=[e]:Bn.push(e)}function Lk(e){hc=!0,sx(e)}function Ir(){if(!ku&&Bn!==null){ku=!0;var e=0,t=ye;try{var n=Bn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,hc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),Py(Jf,Ir),i}finally{ye=t,ku=!1}}return null}var Ai=[],Fi=0,_l=null,Dl=0,Yt=[],qt=0,ui=null,Hn=1,Yn="";function Vr(e,t){Ai[Fi++]=Dl,Ai[Fi++]=_l,_l=e,Dl=t}function ox(e,t,n){Yt[qt++]=Hn,Yt[qt++]=Yn,Yt[qt++]=ui,ui=e;var r=Hn;e=Yn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-cn(t)+i|n<<i|r,Yn=s+e}else Hn=1<<s|n<<i|r,Yn=e}function ap(e){e.return!==null&&(Vr(e,1),ox(e,1,0))}function lp(e){for(;e===_l;)_l=Ai[--Fi],Ai[Fi]=null,Dl=Ai[--Fi],Ai[Fi]=null;for(;e===ui;)ui=Yt[--qt],Yt[qt]=null,Yn=Yt[--qt],Yt[qt]=null,Hn=Yt[--qt],Yt[qt]=null}var Ft=null,It=null,Pe=!1,on=null;function ax(e,t){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,It=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ui!==null?{id:Hn,overflow:Yn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,It=null,!0):!1;default:return!1}}function Id(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ad(e){if(Pe){var t=It;if(t){var n=t;if(!kg(e,t)){if(Id(e))throw Error(R(418));t=vr(n.nextSibling);var r=Ft;t&&kg(e,t)?ax(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Ft=e)}}else{if(Id(e))throw Error(R(418));e.flags=e.flags&-4097|2,Pe=!1,Ft=e}}}function _g(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function xa(e){if(e!==Ft)return!1;if(!Pe)return _g(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rd(e.type,e.memoizedProps)),t&&(t=It)){if(Id(e))throw lx(),Error(R(418));for(;t;)ax(e,t),t=vr(t.nextSibling)}if(_g(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=vr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=Ft?vr(e.stateNode.nextSibling):null;return!0}function lx(){for(var e=It;e;)e=vr(e.nextSibling)}function rs(){It=Ft=null,Pe=!1}function cp(e){on===null?on=[e]:on.push(e)}var zk=tr.ReactCurrentBatchConfig;function Ns(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dg(e){var t=e._init;return t(e._payload)}function cx(e){function t(v,m){if(e){var w=v.deletions;w===null?(v.deletions=[m],v.flags|=16):w.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=kr(v,m),v.index=0,v.sibling=null,v}function s(v,m,w){return v.index=w,e?(w=v.alternate,w!==null?(w=w.index,w<m?(v.flags|=2,m):w):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,m,w,k){return m===null||m.tag!==6?(m=Pu(w,v.mode,k),m.return=v,m):(m=i(m,w),m.return=v,m)}function l(v,m,w,k){var _=w.type;return _===Ti?d(v,m,w.props.children,k,w.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===cr&&Dg(_)===m.type)?(k=i(m,w.props),k.ref=Ns(v,m,w),k.return=v,k):(k=Za(w.type,w.key,w.props,null,v.mode,k),k.ref=Ns(v,m,w),k.return=v,k)}function u(v,m,w,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=Tu(w,v.mode,k),m.return=v,m):(m=i(m,w.children||[]),m.return=v,m)}function d(v,m,w,k,_){return m===null||m.tag!==7?(m=si(w,v.mode,k,_),m.return=v,m):(m=i(m,w),m.return=v,m)}function f(v,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Pu(""+m,v.mode,w),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case la:return w=Za(m.type,m.key,m.props,null,v.mode,w),w.ref=Ns(v,null,m),w.return=v,w;case Pi:return m=Tu(m,v.mode,w),m.return=v,m;case cr:var k=m._init;return f(v,k(m._payload),w)}if(Qs(m)||Os(m))return m=si(m,v.mode,w,null),m.return=v,m;va(v,m)}return null}function p(v,m,w,k){var _=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return _!==null?null:a(v,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case la:return w.key===_?l(v,m,w,k):null;case Pi:return w.key===_?u(v,m,w,k):null;case cr:return _=w._init,p(v,m,_(w._payload),k)}if(Qs(w)||Os(w))return _!==null?null:d(v,m,w,k,null);va(v,w)}return null}function g(v,m,w,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(w)||null,a(m,v,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case la:return v=v.get(k.key===null?w:k.key)||null,l(m,v,k,_);case Pi:return v=v.get(k.key===null?w:k.key)||null,u(m,v,k,_);case cr:var E=k._init;return g(v,m,w,E(k._payload),_)}if(Qs(k)||Os(k))return v=v.get(w)||null,d(m,v,k,_,null);va(m,k)}return null}function x(v,m,w,k){for(var _=null,E=null,D=m,O=m=0,K=null;D!==null&&O<w.length;O++){D.index>O?(K=D,D=null):K=D.sibling;var N=p(v,D,w[O],k);if(N===null){D===null&&(D=K);break}e&&D&&N.alternate===null&&t(v,D),m=s(N,m,O),E===null?_=N:E.sibling=N,E=N,D=K}if(O===w.length)return n(v,D),Pe&&Vr(v,O),_;if(D===null){for(;O<w.length;O++)D=f(v,w[O],k),D!==null&&(m=s(D,m,O),E===null?_=D:E.sibling=D,E=D);return Pe&&Vr(v,O),_}for(D=r(v,D);O<w.length;O++)K=g(D,v,O,w[O],k),K!==null&&(e&&K.alternate!==null&&D.delete(K.key===null?O:K.key),m=s(K,m,O),E===null?_=K:E.sibling=K,E=K);return e&&D.forEach(function(L){return t(v,L)}),Pe&&Vr(v,O),_}function y(v,m,w,k){var _=Os(w);if(typeof _!="function")throw Error(R(150));if(w=_.call(w),w==null)throw Error(R(151));for(var E=_=null,D=m,O=m=0,K=null,N=w.next();D!==null&&!N.done;O++,N=w.next()){D.index>O?(K=D,D=null):K=D.sibling;var L=p(v,D,N.value,k);if(L===null){D===null&&(D=K);break}e&&D&&L.alternate===null&&t(v,D),m=s(L,m,O),E===null?_=L:E.sibling=L,E=L,D=K}if(N.done)return n(v,D),Pe&&Vr(v,O),_;if(D===null){for(;!N.done;O++,N=w.next())N=f(v,N.value,k),N!==null&&(m=s(N,m,O),E===null?_=N:E.sibling=N,E=N);return Pe&&Vr(v,O),_}for(D=r(v,D);!N.done;O++,N=w.next())N=g(D,v,O,N.value,k),N!==null&&(e&&N.alternate!==null&&D.delete(N.key===null?O:N.key),m=s(N,m,O),E===null?_=N:E.sibling=N,E=N);return e&&D.forEach(function(Z){return t(v,Z)}),Pe&&Vr(v,O),_}function S(v,m,w,k){if(typeof w=="object"&&w!==null&&w.type===Ti&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case la:e:{for(var _=w.key,E=m;E!==null;){if(E.key===_){if(_=w.type,_===Ti){if(E.tag===7){n(v,E.sibling),m=i(E,w.props.children),m.return=v,v=m;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===cr&&Dg(_)===E.type){n(v,E.sibling),m=i(E,w.props),m.ref=Ns(v,E,w),m.return=v,v=m;break e}n(v,E);break}else t(v,E);E=E.sibling}w.type===Ti?(m=si(w.props.children,v.mode,k,w.key),m.return=v,v=m):(k=Za(w.type,w.key,w.props,null,v.mode,k),k.ref=Ns(v,m,w),k.return=v,v=k)}return o(v);case Pi:e:{for(E=w.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(v,m.sibling),m=i(m,w.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Tu(w,v.mode,k),m.return=v,v=m}return o(v);case cr:return E=w._init,S(v,m,E(w._payload),k)}if(Qs(w))return x(v,m,w,k);if(Os(w))return y(v,m,w,k);va(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,w),m.return=v,v=m):(n(v,m),m=Pu(w,v.mode,k),m.return=v,v=m),o(v)):n(v,m)}return S}var is=cx(!0),ux=cx(!1),Cl=$r(null),El=null,Li=null,up=null;function dp(){up=Li=El=null}function fp(e){var t=Cl.current;je(Cl),e._currentValue=t}function Fd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gi(e,t){El=e,up=Li=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_t=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(up!==e)if(e={context:e,memoizedValue:t,next:null},Li===null){if(El===null)throw Error(R(308));Li=e,El.dependencies={lanes:0,firstContext:e}}else Li=Li.next=e;return t}var ei=null;function pp(e){ei===null?ei=[e]:ei.push(e)}function dx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ur=!1;function hp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,pp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zf(e,n)}}function Cg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,r){var i=e.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(p=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=Ne({},f,p);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);fi|=o,e.lanes=o,e.memoizedState=f}}function Eg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Ho={},Rn=$r(Ho),Do=$r(Ho),Co=$r(Ho);function ti(e){if(e===Ho)throw Error(R(174));return e}function gp(e,t){switch(_e(Co,t),_e(Do,e),_e(Rn,Ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xd(t,e)}je(Rn),_e(Rn,t)}function ss(){je(Rn),je(Do),je(Co)}function px(e){ti(Co.current);var t=ti(Rn.current),n=xd(t,e.type);t!==n&&(_e(Do,e),_e(Rn,n))}function mp(e){Do.current===e&&(je(Rn),je(Do))}var Te=$r(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _u=[];function yp(){for(var e=0;e<_u.length;e++)_u[e]._workInProgressVersionPrimary=null;_u.length=0}var Ga=tr.ReactCurrentDispatcher,Du=tr.ReactCurrentBatchConfig,di=0,Me=null,qe=null,Qe=null,Pl=!1,oo=!1,Eo=0,Wk=0;function ot(){throw Error(R(321))}function xp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hn(e[n],t[n]))return!1;return!0}function vp(e,t,n,r,i,s){if(di=s,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?Yk:qk,e=n(r,i),oo){s=0;do{if(oo=!1,Eo=0,25<=s)throw Error(R(301));s+=1,Qe=qe=null,t.updateQueue=null,Ga.current=Vk,e=n(r,i)}while(oo)}if(Ga.current=Tl,t=qe!==null&&qe.next!==null,di=0,Qe=qe=Me=null,Pl=!1,t)throw Error(R(300));return e}function wp(){var e=Eo!==0;return Eo=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Me.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Jt(){if(qe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Qe===null?Me.memoizedState:Qe.next;if(t!==null)Qe=t,qe=e;else{if(e===null)throw Error(R(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Qe===null?Me.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function jo(e,t){return typeof t=="function"?t(e):t}function Cu(e){var t=Jt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((di&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Me.lanes|=d,fi|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,hn(r,t.memoizedState)||(_t=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Me.lanes|=s,fi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Eu(e){var t=Jt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);hn(s,t.memoizedState)||(_t=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function hx(){}function gx(e,t){var n=Me,r=Jt(),i=t(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Sp(xx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Oo(9,yx.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(R(349));di&30||mx(n,t,i)}return i}function mx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yx(e,t,n,r){t.value=n,t.getSnapshot=r,vx(t)&&wx(e)}function xx(e,t,n){return n(function(){vx(t)&&wx(e)})}function vx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hn(e,n)}catch{return!0}}function wx(e){var t=Qn(e,1);t!==null&&un(t,e,1,-1)}function jg(e){var t=bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=Hk.bind(null,Me,e),[t.memoizedState,e]}function Oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sx(){return Jt().memoizedState}function Qa(e,t,n,r){var i=bn();Me.flags|=e,i.memoizedState=Oo(1|t,n,void 0,r===void 0?null:r)}function gc(e,t,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&xp(r,o.deps)){i.memoizedState=Oo(t,n,s,r);return}}Me.flags|=e,i.memoizedState=Oo(1|t,n,s,r)}function Og(e,t){return Qa(8390656,8,e,t)}function Sp(e,t){return gc(2048,8,e,t)}function bx(e,t){return gc(4,2,e,t)}function kx(e,t){return gc(4,4,e,t)}function _x(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dx(e,t,n){return n=n!=null?n.concat([e]):null,gc(4,4,_x.bind(null,t,e),n)}function bp(){}function Cx(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ex(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jx(e,t,n){return di&21?(hn(n,t)||(n=My(),Me.lanes|=n,fi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_t=!0),e.memoizedState=n)}function Bk(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=Du.transition;Du.transition={};try{e(!1),t()}finally{ye=n,Du.transition=r}}function Ox(){return Jt().memoizedState}function Uk(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Px(e))Tx(t,n);else if(n=dx(e,t,n,r),n!==null){var i=mt();un(n,e,r,i),Rx(n,t,r)}}function Hk(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Px(e))Tx(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,o)){var l=t.interleaved;l===null?(i.next=i,pp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=dx(e,t,i,r),n!==null&&(i=mt(),un(n,e,r,i),Rx(n,t,r))}}function Px(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function Tx(e,t){oo=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zf(e,n)}}var Tl={readContext:Xt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Yk={readContext:Xt,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:Og,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4194308,4,_x.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qa(4,2,e,t)},useMemo:function(e,t){var n=bn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Uk.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:jg,useDebugValue:bp,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=jg(!1),t=e[0];return e=Bk.bind(null,e[1]),bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=bn();if(Pe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Xe===null)throw Error(R(349));di&30||mx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Og(xx.bind(null,r,s,e),[e]),r.flags|=2048,Oo(9,yx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=bn(),t=Xe.identifierPrefix;if(Pe){var n=Yn,r=Hn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qk={readContext:Xt,useCallback:Cx,useContext:Xt,useEffect:Sp,useImperativeHandle:Dx,useInsertionEffect:bx,useLayoutEffect:kx,useMemo:Ex,useReducer:Cu,useRef:Sx,useState:function(){return Cu(jo)},useDebugValue:bp,useDeferredValue:function(e){var t=Jt();return jx(t,qe.memoizedState,e)},useTransition:function(){var e=Cu(jo)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:hx,useSyncExternalStore:gx,useId:Ox,unstable_isNewReconciler:!1},Vk={readContext:Xt,useCallback:Cx,useContext:Xt,useEffect:Sp,useImperativeHandle:Dx,useInsertionEffect:bx,useLayoutEffect:kx,useMemo:Ex,useReducer:Eu,useRef:Sx,useState:function(){return Eu(jo)},useDebugValue:bp,useDeferredValue:function(e){var t=Jt();return qe===null?t.memoizedState=e:jx(t,qe.memoizedState,e)},useTransition:function(){var e=Eu(jo)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:hx,useSyncExternalStore:gx,useId:Ox,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ld(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mc={isMounted:function(e){return(e=e._reactInternals)?xi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),i=br(e),s=qn(r,i);s.payload=t,n!=null&&(s.callback=n),t=wr(e,s,i),t!==null&&(un(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),i=br(e),s=qn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wr(e,s,i),t!==null&&(un(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=br(e),i=qn(n,r);i.tag=2,t!=null&&(i.callback=t),t=wr(e,i,r),t!==null&&(un(t,e,r,n),Va(t,e,r))}};function Pg(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!So(n,r)||!So(i,s):!0}function Mx(e,t,n){var r=!1,i=Er,s=t.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Ct(t)?ci:dt.current,r=t.contextTypes,s=(r=r!=null)?ns(e,i):Er),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Tg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mc.enqueueReplaceState(t,t.state,null)}function zd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hp(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Ct(t)?ci:dt.current,i.context=ns(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ld(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mc.enqueueReplaceState(i,i.state,null),jl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function os(e,t){try{var n="",r=t;do n+=Sb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ju(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gk=typeof WeakMap=="function"?WeakMap:Map;function Nx(e,t,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ml||(Ml=!0,Xd=r),Wd(e,t)},n}function $x(e,t,n){n=qn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(e,t),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Rg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=l_.bind(null,e,t,n),t.then(e,e))}function Mg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ng(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qn(-1,1),t.tag=2,wr(n,t,1))),n.lanes|=1),e)}var Qk=tr.ReactCurrentOwner,_t=!1;function gt(e,t,n,r){t.child=e===null?ux(t,null,n,r):is(t,e.child,n,r)}function $g(e,t,n,r,i){n=n.render;var s=t.ref;return Gi(t,i),r=vp(e,t,n,r,s,i),n=wp(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kn(e,t,i)):(Pe&&n&&ap(t),t.flags|=1,gt(e,t,r,i),t.child)}function Ig(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ix(e,t,s,r,i)):(e=Za(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,r)&&e.ref===t.ref)return Kn(e,t,i)}return t.flags|=1,e=kr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ix(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(So(s,r)&&e.ref===t.ref)if(_t=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(_t=!0);else return t.lanes=e.lanes,Kn(e,t,i)}return Bd(e,t,n,r,i)}function Ax(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Wi,Nt),Nt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Wi,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Wi,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,_e(Wi,Nt),Nt|=r;return gt(e,t,i,n),t.child}function Fx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bd(e,t,n,r,i){var s=Ct(n)?ci:dt.current;return s=ns(t,s),Gi(t,i),n=vp(e,t,n,r,s,i),r=wp(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kn(e,t,i)):(Pe&&r&&ap(t),t.flags|=1,gt(e,t,n,i),t.child)}function Ag(e,t,n,r,i){if(Ct(n)){var s=!0;kl(t)}else s=!1;if(Gi(t,i),t.stateNode===null)Ka(e,t),Mx(t,n,r),zd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=Ct(n)?ci:dt.current,u=ns(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tg(t,o,r,u),ur=!1;var p=t.memoizedState;o.state=p,jl(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Dt.current||ur?(typeof d=="function"&&(Ld(t,n,d,r),l=t.memoizedState),(a=ur||Pg(t,n,a,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fx(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nn(t.type,a),o.props=u,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xt(l):(l=Ct(n)?ci:dt.current,l=ns(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Tg(t,o,r,l),ur=!1,p=t.memoizedState,o.state=p,jl(t,r,o,i);var x=t.memoizedState;a!==f||p!==x||Dt.current||ur?(typeof g=="function"&&(Ld(t,n,g,r),x=t.memoizedState),(u=ur||Pg(t,n,u,r,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ud(e,t,n,r,s,i)}function Ud(e,t,n,r,i,s){Fx(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&bg(t,n,!1),Kn(e,t,s);r=t.stateNode,Qk.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=is(t,e.child,null,s),t.child=is(t,null,a,s)):gt(e,t,a,s),t.memoizedState=r.state,i&&bg(t,n,!0),t.child}function Lx(e){var t=e.stateNode;t.pendingContext?Sg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sg(e,t.context,!1),gp(e,t.containerInfo)}function Fg(e,t,n,r,i){return rs(),cp(i),t.flags|=256,gt(e,t,n,r),t.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Yd(e){return{baseLanes:e,cachePool:null,transitions:null}}function zx(e,t,n){var r=t.pendingProps,i=Te.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Te,i&1),e===null)return Ad(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,r,0,null),e=si(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Yd(n),t.memoizedState=Hd,e):kp(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kk(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=si(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Hd,r}return s=e.child,e=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kp(e,t){return t=vc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wa(e,t,n,r){return r!==null&&cp(r),is(t,e.child,null,n),e=kp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kk(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ju(Error(R(422))),wa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=vc({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&is(t,e.child,null,o),t.child.memoizedState=Yd(o),t.memoizedState=Hd,s);if(!(t.mode&1))return wa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=ju(s,r,void 0),wa(e,t,o,r)}if(a=(o&e.childLanes)!==0,_t||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qn(e,i),un(r,e,i,-1))}return Op(),r=ju(Error(R(421))),wa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=c_.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,It=vr(i.nextSibling),Ft=t,Pe=!0,on=null,e!==null&&(Yt[qt++]=Hn,Yt[qt++]=Yn,Yt[qt++]=ui,Hn=e.id,Yn=e.overflow,ui=t),t=kp(t,r.children),t.flags|=4096,t)}function Lg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fd(e.return,t,n)}function Ou(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Wx(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(gt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,n,t);else if(e.tag===19)Lg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ol(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ou(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ol(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ou(t,!0,n,null,s);break;case"together":Ou(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xk(e,t,n){switch(t.tag){case 3:Lx(t),rs();break;case 5:px(t);break;case 1:Ct(t.type)&&kl(t);break;case 4:gp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?zx(e,t,n):(_e(Te,Te.current&1),e=Kn(e,t,n),e!==null?e.sibling:null);_e(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Ax(e,t,n)}return Kn(e,t,n)}var Bx,qd,Ux,Hx;Bx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};Ux=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ti(Rn.current);var s=null;switch(n){case"input":i=hd(e,i),r=hd(e,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=yd(e,i),r=yd(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sl)}vd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ho.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ho.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&De("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Hx=function(e,t,n,r){n!==r&&(t.flags|=4)};function $s(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jk(e,t,n){var r=t.pendingProps;switch(lp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return Ct(t.type)&&bl(),at(t),null;case 3:return r=t.stateNode,ss(),je(Dt),je(dt),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(ef(on),on=null))),qd(e,t),at(t),null;case 5:mp(t);var i=ti(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)Ux(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return at(t),null}if(e=ti(Rn.current),xa(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Cn]=t,r[_o]=s,e=(t.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(i=0;i<Xs.length;i++)De(Xs[i],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":Gh(r,s),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},De("invalid",r);break;case"textarea":Kh(r,s),De("invalid",r)}vd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ya(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ya(r.textContent,a,e),i=["children",""+a]):ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":ca(r),Qh(r,s,!0);break;case"textarea":ca(r),Xh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Cn]=t,e[_o]=r,Bx(e,t,!1,!1),t.stateNode=e;e:{switch(o=wd(n,r),n){case"dialog":De("cancel",e),De("close",e),i=r;break;case"iframe":case"object":case"embed":De("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xs.length;i++)De(Xs[i],e);i=r;break;case"source":De("error",e),i=r;break;case"img":case"image":case"link":De("error",e),De("load",e),i=r;break;case"details":De("toggle",e),i=r;break;case"input":Gh(e,r),i=hd(e,r),De("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),De("invalid",e);break;case"textarea":Kh(e,r),i=yd(e,r),De("invalid",e);break;default:i=r}vd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sy(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vy(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&go(e,l):typeof l=="number"&&go(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&De("scroll",e):l!=null&&Vf(e,s,l,o))}switch(n){case"input":ca(e),Qh(e,r,!1);break;case"textarea":ca(e),Xh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Hi(e,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)Hx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=ti(Co.current),ti(Rn.current),xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Cn]=t,(s=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:ya(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=t,t.stateNode=r}return at(t),null;case 13:if(je(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&It!==null&&t.mode&1&&!(t.flags&128))lx(),rs(),t.flags|=98560,s=!1;else if(s=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(R(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Cn]=t}else rs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),s=!1}else on!==null&&(ef(on),on=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Ve===0&&(Ve=3):Op())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return ss(),qd(e,t),e===null&&bo(t.stateNode.containerInfo),at(t),null;case 10:return fp(t.type._context),at(t),null;case 17:return Ct(t.type)&&bl(),at(t),null;case 19:if(je(Te),s=t.memoizedState,s===null)return at(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ol(e),o!==null){for(t.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Te,Te.current&1|2),t.child}e=e.sibling}s.tail!==null&&Fe()>as&&(t.flags|=128,r=!0,$s(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ol(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return at(t),null}else 2*Fe()-s.renderingStartTime>as&&n!==1073741824&&(t.flags|=128,r=!0,$s(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Fe(),t.sibling=null,n=Te.current,_e(Te,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return jp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Nt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Zk(e,t){switch(lp(t),t.tag){case 1:return Ct(t.type)&&bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ss(),je(Dt),je(dt),yp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mp(t),null;case 13:if(je(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Te),null;case 4:return ss(),null;case 10:return fp(t.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var Sa=!1,ct=!1,e_=typeof WeakSet=="function"?WeakSet:Set,B=null;function zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Vd(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var zg=!1;function t_(e,t){if(Pd=xl,e=Qy(),op(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:e,selectionRange:n},xl=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,S=x.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:nn(t.type,y),S);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){Ie(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return x=zg,zg=!1,x}function ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vd(t,n,s)}i=i.next}while(i!==r)}}function yc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yx(e){var t=e.alternate;t!==null&&(e.alternate=null,Yx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cn],delete t[_o],delete t[Nd],delete t[Ak],delete t[Fk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qx(e){return e.tag===5||e.tag===3||e.tag===4}function Wg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sl));else if(r!==4&&(e=e.child,e!==null))for(Qd(e,t,n),e=e.sibling;e!==null;)Qd(e,t,n),e=e.sibling}function Kd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kd(e,t,n),e=e.sibling;e!==null;)Kd(e,t,n),e=e.sibling}var tt=null,rn=!1;function ir(e,t,n){for(n=n.child;n!==null;)Vx(e,t,n),n=n.sibling}function Vx(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:ct||zi(n,t);case 6:var r=tt,i=rn;tt=null,ir(e,t,n),tt=r,rn=i,tt!==null&&(rn?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(rn?(e=tt,n=n.stateNode,e.nodeType===8?bu(e.parentNode,n):e.nodeType===1&&bu(e,n),vo(e)):bu(tt,n.stateNode));break;case 4:r=tt,i=rn,tt=n.stateNode.containerInfo,rn=!0,ir(e,t,n),tt=r,rn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vd(n,t,o),i=i.next}while(i!==r)}ir(e,t,n);break;case 1:if(!ct&&(zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,t,a)}ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,ir(e,t,n),ct=r):ir(e,t,n);break;default:ir(e,t,n)}}function Bg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new e_),t.forEach(function(r){var i=u_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,rn=!1;break e;case 3:tt=a.stateNode.containerInfo,rn=!0;break e;case 4:tt=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(tt===null)throw Error(R(160));Vx(s,o,i),tt=null,rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gx(t,e),t=t.sibling}function Gx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),vn(e),r&4){try{ao(3,e,e.return),yc(3,e)}catch(y){Ie(e,e.return,y)}try{ao(5,e,e.return)}catch(y){Ie(e,e.return,y)}}break;case 1:tn(t,e),vn(e),r&512&&n!==null&&zi(n,n.return);break;case 5:if(tn(t,e),vn(e),r&512&&n!==null&&zi(n,n.return),e.flags&32){var i=e.stateNode;try{go(i,"")}catch(y){Ie(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&my(i,s),wd(a,o);var u=wd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Sy(i,f):d==="dangerouslySetInnerHTML"?vy(i,f):d==="children"?go(i,f):Vf(i,d,f,u)}switch(a){case"input":gd(i,s);break;case"textarea":yy(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Hi(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Hi(i,!!s.multiple,s.defaultValue,!0):Hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[_o]=s}catch(y){Ie(e,e.return,y)}}break;case 6:if(tn(t,e),vn(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){Ie(e,e.return,y)}}break;case 3:if(tn(t,e),vn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(y){Ie(e,e.return,y)}break;case 4:tn(t,e),vn(e);break;case 13:tn(t,e),vn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cp=Fe())),r&4&&Bg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(u=ct)||d,tn(t,e),ct=u):tn(t,e),vn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(f=B=d;B!==null;){switch(p=B,g=p.child,p.tag){case 0:case 11:case 14:case 15:ao(4,p,p.return);break;case 1:zi(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Ie(r,n,y)}}break;case 5:zi(p,p.return);break;case 22:if(p.memoizedState!==null){Hg(f);continue}}g!==null?(g.return=p,B=g):Hg(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wy("display",o))}catch(y){Ie(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Ie(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(t,e),vn(e),r&4&&Bg(e);break;case 21:break;default:tn(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qx(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(go(i,""),r.flags&=-33);var s=Wg(e);Kd(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wg(e);Qd(e,a,o);break;default:throw Error(R(161))}}catch(l){Ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n_(e,t,n){B=e,Qx(e)}function Qx(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ct;a=Sa;var u=ct;if(Sa=o,(ct=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?Yg(i):l!==null?(l.return=o,B=l):Yg(i);for(;s!==null;)B=s,Qx(s),s=s.sibling;B=i,Sa=a,ct=u}Ug(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Ug(e)}}function Ug(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||yc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Eg(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Eg(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ct||t.flags&512&&Gd(t)}catch(p){Ie(t,t.return,p)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Hg(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Yg(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yc(4,t)}catch(l){Ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ie(t,i,l)}}var s=t.return;try{Gd(t)}catch(l){Ie(t,s,l)}break;case 5:var o=t.return;try{Gd(t)}catch(l){Ie(t,o,l)}}}catch(l){Ie(t,t.return,l)}if(t===e){B=null;break}var a=t.sibling;if(a!==null){a.return=t.return,B=a;break}B=t.return}}var r_=Math.ceil,Rl=tr.ReactCurrentDispatcher,_p=tr.ReactCurrentOwner,Qt=tr.ReactCurrentBatchConfig,le=0,Xe=null,Ue=null,rt=0,Nt=0,Wi=$r(0),Ve=0,Po=null,fi=0,xc=0,Dp=0,lo=null,kt=null,Cp=0,as=1/0,zn=null,Ml=!1,Xd=null,Sr=null,ba=!1,hr=null,Nl=0,co=0,Jd=null,Xa=-1,Ja=0;function mt(){return le&6?Fe():Xa!==-1?Xa:Xa=Fe()}function br(e){return e.mode&1?le&2&&rt!==0?rt&-rt:zk.transition!==null?(Ja===0&&(Ja=My()),Ja):(e=ye,e!==0||(e=window.event,e=e===void 0?16:zy(e.type)),e):1}function un(e,t,n,r){if(50<co)throw co=0,Jd=null,Error(R(185));Wo(e,n,r),(!(le&2)||e!==Xe)&&(e===Xe&&(!(le&2)&&(xc|=n),Ve===4&&fr(e,rt)),Et(e,r),n===1&&le===0&&!(t.mode&1)&&(as=Fe()+500,hc&&Ir()))}function Et(e,t){var n=e.callbackNode;zb(e,t);var r=yl(e,e===Xe?rt:0);if(r===0)n!==null&&eg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eg(n),t===1)e.tag===0?Lk(qg.bind(null,e)):sx(qg.bind(null,e)),$k(function(){!(le&6)&&Ir()}),n=null;else{switch(Ny(r)){case 1:n=Jf;break;case 4:n=Ty;break;case 16:n=ml;break;case 536870912:n=Ry;break;default:n=ml}n=rv(n,Kx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kx(e,t){if(Xa=-1,Ja=0,le&6)throw Error(R(327));var n=e.callbackNode;if(Qi()&&e.callbackNode!==n)return null;var r=yl(e,e===Xe?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$l(e,r);else{t=r;var i=le;le|=2;var s=Jx();(Xe!==e||rt!==t)&&(zn=null,as=Fe()+500,ii(e,t));do try{o_();break}catch(a){Xx(e,a)}while(!0);dp(),Rl.current=s,le=i,Ue!==null?t=0:(Xe=null,rt=0,t=Ve)}if(t!==0){if(t===2&&(i=Dd(e),i!==0&&(r=i,t=Zd(e,i))),t===1)throw n=Po,ii(e,0),fr(e,r),Et(e,Fe()),n;if(t===6)fr(e,r);else{if(i=e.current.alternate,!(r&30)&&!i_(i)&&(t=$l(e,r),t===2&&(s=Dd(e),s!==0&&(r=s,t=Zd(e,s))),t===1))throw n=Po,ii(e,0),fr(e,r),Et(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Gr(e,kt,zn);break;case 3:if(fr(e,r),(r&130023424)===r&&(t=Cp+500-Fe(),10<t)){if(yl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Md(Gr.bind(null,e,kt,zn),t);break}Gr(e,kt,zn);break;case 4:if(fr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r_(r/1960))-r,10<r){e.timeoutHandle=Md(Gr.bind(null,e,kt,zn),r);break}Gr(e,kt,zn);break;case 5:Gr(e,kt,zn);break;default:throw Error(R(329))}}}return Et(e,Fe()),e.callbackNode===n?Kx.bind(null,e):null}function Zd(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(ii(e,t).flags|=256),e=$l(e,t),e!==2&&(t=kt,kt=n,t!==null&&ef(t)),e}function ef(e){kt===null?kt=e:kt.push.apply(kt,e)}function i_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fr(e,t){for(t&=~Dp,t&=~xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-cn(t),r=1<<n;e[n]=-1,t&=~r}}function qg(e){if(le&6)throw Error(R(327));Qi();var t=yl(e,0);if(!(t&1))return Et(e,Fe()),null;var n=$l(e,t);if(e.tag!==0&&n===2){var r=Dd(e);r!==0&&(t=r,n=Zd(e,r))}if(n===1)throw n=Po,ii(e,0),fr(e,t),Et(e,Fe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gr(e,kt,zn),Et(e,Fe()),null}function Ep(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(as=Fe()+500,hc&&Ir())}}function pi(e){hr!==null&&hr.tag===0&&!(le&6)&&Qi();var t=le;le|=1;var n=Qt.transition,r=ye;try{if(Qt.transition=null,ye=1,e)return e()}finally{ye=r,Qt.transition=n,le=t,!(le&6)&&Ir()}}function jp(){Nt=Wi.current,je(Wi)}function ii(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nk(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:ss(),je(Dt),je(dt),yp();break;case 5:mp(r);break;case 4:ss();break;case 13:je(Te);break;case 19:je(Te);break;case 10:fp(r.type._context);break;case 22:case 23:jp()}n=n.return}if(Xe=e,Ue=e=kr(e.current,null),rt=Nt=t,Ve=0,Po=null,Dp=xc=fi=0,kt=lo=null,ei!==null){for(t=0;t<ei.length;t++)if(n=ei[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ei=null}return e}function Xx(e,t){do{var n=Ue;try{if(dp(),Ga.current=Tl,Pl){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(di=0,Qe=qe=Me=null,oo=!1,Eo=0,_p.current=null,n===null||n.return===null){Ve=1,Po=t,Ue=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Mg(o);if(g!==null){g.flags&=-257,Ng(g,o,a,s,t),g.mode&1&&Rg(s,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){Rg(s,u,t),Op();break e}l=Error(R(426))}}else if(Pe&&a.mode&1){var S=Mg(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ng(S,o,a,s,t),cp(os(l,a));break e}}s=l=os(l,a),Ve!==4&&(Ve=2),lo===null?lo=[s]:lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=Nx(s,l,t);Cg(s,v);break e;case 1:a=l;var m=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Sr===null||!Sr.has(w)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=$x(s,a,t);Cg(s,k);break e}}s=s.return}while(s!==null)}ev(n)}catch(_){t=_,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Jx(){var e=Rl.current;return Rl.current=Tl,e===null?Tl:e}function Op(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(fi&268435455)&&!(xc&268435455)||fr(Xe,rt)}function $l(e,t){var n=le;le|=2;var r=Jx();(Xe!==e||rt!==t)&&(zn=null,ii(e,t));do try{s_();break}catch(i){Xx(e,i)}while(!0);if(dp(),le=n,Rl.current=r,Ue!==null)throw Error(R(261));return Xe=null,rt=0,Ve}function s_(){for(;Ue!==null;)Zx(Ue)}function o_(){for(;Ue!==null&&!Tb();)Zx(Ue)}function Zx(e){var t=nv(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?ev(e):Ue=t,_p.current=null}function ev(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zk(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Ue=null;return}}else if(n=Jk(n,t,Nt),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ve===0&&(Ve=5)}function Gr(e,t,n){var r=ye,i=Qt.transition;try{Qt.transition=null,ye=1,a_(e,t,n,r)}finally{Qt.transition=i,ye=r}return null}function a_(e,t,n,r){do Qi();while(hr!==null);if(le&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wb(e,s),e===Xe&&(Ue=Xe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,rv(ml,function(){return Qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=ye;ye=1;var a=le;le|=4,_p.current=null,t_(e,n),Gx(n,e),Ek(Td),xl=!!Pd,Td=Pd=null,e.current=n,n_(n),Rb(),le=a,ye=o,Qt.transition=s}else e.current=n;if(ba&&(ba=!1,hr=e,Nl=i),s=e.pendingLanes,s===0&&(Sr=null),$b(n.stateNode),Et(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ml)throw Ml=!1,e=Xd,Xd=null,e;return Nl&1&&e.tag!==0&&Qi(),s=e.pendingLanes,s&1?e===Jd?co++:(co=0,Jd=e):co=0,Ir(),null}function Qi(){if(hr!==null){var e=Ny(Nl),t=Qt.transition,n=ye;try{if(Qt.transition=null,ye=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,Nl=0,le&6)throw Error(R(331));var i=le;for(le|=4,B=e.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:ao(8,d,s)}var f=d.child;if(f!==null)f.return=d,B=f;else for(;B!==null;){d=B;var p=d.sibling,g=d.return;if(Yx(d),d===u){B=null;break}if(p!==null){p.return=g,B=p;break}B=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ao(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,B=v;break e}B=s.return}}var m=e.current;for(B=m;B!==null;){o=B;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,B=w;else e:for(o=m;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(_){Ie(a,a.return,_)}if(a===o){B=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,B=k;break e}B=a.return}}if(le=i,Ir(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(cc,e)}catch{}r=!0}return r}finally{ye=n,Qt.transition=t}}return!1}function Vg(e,t,n){t=os(n,t),t=Nx(e,t,1),e=wr(e,t,1),t=mt(),e!==null&&(Wo(e,1,t),Et(e,t))}function Ie(e,t,n){if(e.tag===3)Vg(e,e,n);else for(;t!==null;){if(t.tag===3){Vg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){e=os(n,e),e=$x(t,e,1),t=wr(t,e,1),e=mt(),t!==null&&(Wo(t,1,e),Et(t,e));break}}t=t.return}}function l_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(rt&n)===n&&(Ve===4||Ve===3&&(rt&130023424)===rt&&500>Fe()-Cp?ii(e,0):Dp|=n),Et(e,t)}function tv(e,t){t===0&&(e.mode&1?(t=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):t=1);var n=mt();e=Qn(e,t),e!==null&&(Wo(e,t,n),Et(e,n))}function c_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tv(e,n)}function u_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),tv(e,n)}var nv;nv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)_t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _t=!1,Xk(e,t,n);_t=!!(e.flags&131072)}else _t=!1,Pe&&t.flags&1048576&&ox(t,Dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ka(e,t),e=t.pendingProps;var i=ns(t,dt.current);Gi(t,n),i=vp(null,t,r,e,i,n);var s=wp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(r)?(s=!0,kl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hp(t),i.updater=mc,t.stateNode=i,i._reactInternals=t,zd(t,r,e,n),t=Ud(null,t,r,!0,s,n)):(t.tag=0,Pe&&s&&ap(t),gt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ka(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=f_(r),e=nn(r,e),i){case 0:t=Bd(null,t,r,e,n);break e;case 1:t=Ag(null,t,r,e,n);break e;case 11:t=$g(null,t,r,e,n);break e;case 14:t=Ig(null,t,r,nn(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Bd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Ag(e,t,r,i,n);case 3:e:{if(Lx(t),e===null)throw Error(R(387));r=t.pendingProps,s=t.memoizedState,i=s.element,fx(e,t),jl(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=os(Error(R(423)),t),t=Fg(e,t,r,n,i);break e}else if(r!==i){i=os(Error(R(424)),t),t=Fg(e,t,r,n,i);break e}else for(It=vr(t.stateNode.containerInfo.firstChild),Ft=t,Pe=!0,on=null,n=ux(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){t=Kn(e,t,n);break e}gt(e,t,r,n)}t=t.child}return t;case 5:return px(t),e===null&&Ad(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Rd(r,i)?o=null:s!==null&&Rd(r,s)&&(t.flags|=32),Fx(e,t),gt(e,t,o,n),t.child;case 6:return e===null&&Ad(t),null;case 13:return zx(e,t,n);case 4:return gp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=is(t,null,r,n):gt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),$g(e,t,r,i,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,_e(Cl,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!Dt.current){t=Kn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fd(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fd(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gi(t,n),i=Xt(i),r=r(i),t.flags|=1,gt(e,t,r,n),t.child;case 14:return r=t.type,i=nn(r,t.pendingProps),i=nn(r.type,i),Ig(e,t,r,i,n);case 15:return Ix(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Ka(e,t),t.tag=1,Ct(r)?(e=!0,kl(t)):e=!1,Gi(t,n),Mx(t,r,i),zd(t,r,i,n),Ud(null,t,r,!0,e,n);case 19:return Wx(e,t,n);case 22:return Ax(e,t,n)}throw Error(R(156,t.tag))};function rv(e,t){return Py(e,t)}function d_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,r){return new d_(e,t,n,r)}function Pp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f_(e){if(typeof e=="function")return Pp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qf)return 11;if(e===Kf)return 14}return 2}function kr(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Za(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Pp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ti:return si(n.children,i,s,t);case Gf:o=8,i|=8;break;case ud:return e=Gt(12,n,t,i|2),e.elementType=ud,e.lanes=s,e;case dd:return e=Gt(13,n,t,i),e.elementType=dd,e.lanes=s,e;case fd:return e=Gt(19,n,t,i),e.elementType=fd,e.lanes=s,e;case py:return vc(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dy:o=10;break e;case fy:o=9;break e;case Qf:o=11;break e;case Kf:o=14;break e;case cr:o=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Gt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function si(e,t,n,r){return e=Gt(7,e,r,t),e.lanes=n,e}function vc(e,t,n,r){return e=Gt(22,e,r,t),e.elementType=py,e.lanes=n,e.stateNode={isHidden:!1},e}function Pu(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function Tu(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tp(e,t,n,r,i,s,o,a,l){return e=new p_(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(s),e}function h_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function iv(e){if(!e)return Er;e=e._reactInternals;e:{if(xi(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ct(n))return ix(e,n,t)}return t}function sv(e,t,n,r,i,s,o,a,l){return e=Tp(n,r,!0,e,i,s,o,a,l),e.context=iv(null),n=e.current,r=mt(),i=br(n),s=qn(r,i),s.callback=t??null,wr(n,s,i),e.current.lanes=i,Wo(e,i,r),Et(e,r),e}function wc(e,t,n,r){var i=t.current,s=mt(),o=br(i);return n=iv(n),t.context===null?t.context=n:t.pendingContext=n,t=qn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wr(i,t,o),e!==null&&(un(e,i,o,s),Va(e,i,o)),o}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rp(e,t){Gg(e,t),(e=e.alternate)&&Gg(e,t)}function g_(){return null}var ov=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mp(e){this._internalRoot=e}Sc.prototype.render=Mp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));wc(e,t,null,null)};Sc.prototype.unmount=Mp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pi(function(){wc(null,e,null,null)}),t[Gn]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ay();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dr.length&&t!==0&&t<dr[n].priority;n++);dr.splice(n,0,e),n===0&&Ly(e)}};function Np(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function m_(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Il(o);s.call(u)}}var o=sv(t,r,e,0,null,!1,!1,"",Qg);return e._reactRootContainer=o,e[Gn]=o.current,bo(e.nodeType===8?e.parentNode:e),pi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Il(l);a.call(u)}}var l=Tp(e,0,!1,null,null,!1,!1,"",Qg);return e._reactRootContainer=l,e[Gn]=l.current,bo(e.nodeType===8?e.parentNode:e),pi(function(){wc(t,l,n,r)}),l}function kc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Il(o);a.call(l)}}wc(t,o,e,i)}else o=m_(n,t,e,i,r);return Il(o)}$y=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ks(t.pendingLanes);n!==0&&(Zf(t,n|1),Et(t,Fe()),!(le&6)&&(as=Fe()+500,Ir()))}break;case 13:pi(function(){var r=Qn(e,1);if(r!==null){var i=mt();un(r,e,1,i)}}),Rp(e,1)}};ep=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=mt();un(t,e,134217728,n)}Rp(e,134217728)}};Iy=function(e){if(e.tag===13){var t=br(e),n=Qn(e,t);if(n!==null){var r=mt();un(n,e,t,r)}Rp(e,t)}};Ay=function(){return ye};Fy=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};bd=function(e,t,n){switch(t){case"input":if(gd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pc(r);if(!i)throw Error(R(90));gy(r),gd(r,i)}}}break;case"textarea":yy(e,n);break;case"select":t=n.value,t!=null&&Hi(e,!!n.multiple,t,!1)}};_y=Ep;Dy=pi;var y_={usingClientEntryPoint:!1,Events:[Uo,$i,pc,by,ky,Ep]},Is={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x_={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jy(e),e===null?null:e.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||g_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{cc=ka.inject(x_),Tn=ka}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y_;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(t))throw Error(R(200));return h_(e,t,null,n)};Bt.createRoot=function(e,t){if(!Np(e))throw Error(R(299));var n=!1,r="",i=ov;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tp(e,1,!1,null,null,n,!1,r,i),e[Gn]=t.current,bo(e.nodeType===8?e.parentNode:e),new Mp(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=jy(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return pi(e)};Bt.hydrate=function(e,t,n){if(!bc(t))throw Error(R(200));return kc(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!Np(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sv(t,null,e,1,n??null,i,!1,s,o),e[Gn]=t.current,bo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sc(t)};Bt.render=function(e,t,n){if(!bc(t))throw Error(R(200));return kc(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!bc(e))throw Error(R(40));return e._reactRootContainer?(pi(function(){kc(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1};Bt.unstable_batchedUpdates=Ep;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bc(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return kc(e,t,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(e){console.error(e)}}av(),ay.exports=Bt;var v_=ay.exports,Kg=v_;ld.createRoot=Kg.createRoot,ld.hydrateRoot=Kg.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},To.apply(this,arguments)}var gr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gr||(gr={}));const Xg="popstate";function w_(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return tf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cv(i)}return b_(t,n,null,e)}function Ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S_(){return Math.random().toString(36).substr(2,8)}function Jg(e,t){return{usr:e.state,key:e.key,idx:t}}function tf(e,t,n,r){return n===void 0&&(n=null),To({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ss(t):t,{state:n,key:t&&t.key||r||S_()})}function cv(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ss(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function b_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(To({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=gr.Pop;let S=d(),v=S==null?null:S-u;u=S,l&&l({action:a,location:y.location,delta:v})}function p(S,v){a=gr.Push;let m=tf(y.location,S,v);u=d()+1;let w=Jg(m,u),k=y.createHref(m);try{o.pushState(w,"",k)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(k)}s&&l&&l({action:a,location:y.location,delta:1})}function g(S,v){a=gr.Replace;let m=tf(y.location,S,v);u=d();let w=Jg(m,u),k=y.createHref(m);o.replaceState(w,"",k),s&&l&&l({action:a,location:y.location,delta:0})}function x(S){let v=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:cv(S);return m=m.replace(/ $/,"%20"),Ye(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let y={get action(){return a},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Xg,f),l=S,()=>{i.removeEventListener(Xg,f),l=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let v=x(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:g,go(S){return o.go(S)}};return y}var Zg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zg||(Zg={}));function k_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ss(t):t,i=fv(r.pathname||"/",n);if(i==null)return null;let s=uv(e);__(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=I_(i);o=M_(s[a],l)}return o}function uv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=oi([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uv(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:T_(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of dv(s.path))i(s,o,l)}),t}function dv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function __(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:R_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D_=/^:[\w-]+$/,C_=3,E_=2,j_=1,O_=10,P_=-2,em=e=>e==="*";function T_(e,t){let n=e.split("/"),r=n.length;return n.some(em)&&(r+=P_),t&&(r+=E_),n.filter(i=>!em(i)).reduce((i,s)=>i+(D_.test(s)?C_:s===""?j_:O_),r)}function R_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function M_(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=N_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:oi([i,d.pathname]),pathnameBase:z_(oi([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=oi([i,d.pathnameBase]))}return s}function N_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[f];return g&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function $_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function I_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function A_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ss(e):e;return{pathname:n?n.startsWith("/")?n:F_(n,t):t,search:W_(r),hash:B_(i)}}function F_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ru(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pv(e,t){let n=L_(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ss(e):(i=To({},e),Ye(!i.pathname||!i.pathname.includes("?"),Ru("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Ru("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Ru("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=A_(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const oi=e=>e.join("/").replace(/\/\/+/g,"/"),z_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,B_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function U_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gv=["post","put","patch","delete"];new Set(gv);const H_=["get",...gv];new Set(H_);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const $p=b.createContext(null),Y_=b.createContext(null),Yo=b.createContext(null),_c=b.createContext(null),nr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),mv=b.createContext(null);function qo(){return b.useContext(_c)!=null}function Dc(){return qo()||Ye(!1),b.useContext(_c).location}function yv(e){b.useContext(Yo).static||b.useLayoutEffect(e)}function Ze(){let{isDataRoute:e}=b.useContext(nr);return e?o2():q_()}function q_(){qo()||Ye(!1);let e=b.useContext($p),{basename:t,future:n,navigator:r}=b.useContext(Yo),{matches:i}=b.useContext(nr),{pathname:s}=Dc(),o=JSON.stringify(pv(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return yv(()=>{a.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=hv(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:oi([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}const V_=b.createContext(null);function G_(e){let t=b.useContext(nr).outlet;return t&&b.createElement(V_.Provider,{value:e},t)}function xv(){let{matches:e}=b.useContext(nr),t=e[e.length-1];return t?t.params:{}}function Q_(e,t){return K_(e,t)}function K_(e,t,n,r){qo()||Ye(!1);let{navigator:i}=b.useContext(Yo),{matches:s}=b.useContext(nr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Dc(),d;if(t){var f;let S=typeof t=="string"?Ss(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||Ye(!1),d=S}else d=u;let p=d.pathname||"/",g=p;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=k_(e,{pathname:g}),y=t2(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:oi([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:oi([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return t&&y?b.createElement(_c.Provider,{value:{location:Ro({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gr.Pop}},y):y}function X_(){let e=s2(),t=U_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const J_=b.createElement(X_,null);class Z_ extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(nr.Provider,{value:this.props.routeContext},b.createElement(mv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e2(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext($p);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(nr.Provider,{value:t},r)}function t2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ye(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:g}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,x=!1,y=null,S=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||J_,l&&(u<0&&p===0?(x=!0,S=null):u===p&&(x=!0,S=f.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,p+1)),m=()=>{let w;return g?w=y:x?w=S:f.route.Component?w=b.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=d,b.createElement(e2,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(Z_,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var vv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vv||{}),Al=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Al||{});function n2(e){let t=b.useContext($p);return t||Ye(!1),t}function r2(e){let t=b.useContext(Y_);return t||Ye(!1),t}function i2(e){let t=b.useContext(nr);return t||Ye(!1),t}function wv(e){let t=i2(),n=t.matches[t.matches.length-1];return n.route.id||Ye(!1),n.route.id}function s2(){var e;let t=b.useContext(mv),n=r2(Al.UseRouteError),r=wv(Al.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function o2(){let{router:e}=n2(vv.UseNavigateStable),t=wv(Al.UseNavigateStable),n=b.useRef(!1);return yv(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ro({fromRouteId:t},s)))},[e,t])}function tm(e){let{to:t,replace:n,state:r,relative:i}=e;qo()||Ye(!1);let{future:s,static:o}=b.useContext(Yo),{matches:a}=b.useContext(nr),{pathname:l}=Dc(),u=Ze(),d=hv(t,pv(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function a2(e){return G_(e.context)}function lt(e){Ye(!1)}function l2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1,future:a}=e;qo()&&Ye(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:s,static:o,future:Ro({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ss(r));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:x="default"}=r,y=b.useMemo(()=>{let S=fv(d,l);return S==null?null:{location:{pathname:S,search:f,hash:p,state:g,key:x},navigationType:i}},[l,d,f,p,g,x,i]);return y==null?null:b.createElement(Yo.Provider,{value:u},b.createElement(_c.Provider,{children:n,value:y}))}function nm(e){let{children:t,location:n}=e;return Q_(nf(t),n)}new Promise(()=>{});function nf(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,nf(r.props.children,s));return}r.type!==lt&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const c2="6";try{window.__reactRouterVersion=c2}catch{}const u2="startTransition",rm=ad[u2];function d2(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=w_({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=b.useCallback(f=>{u&&rm?rm(()=>l(f)):l(f)},[l,u]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.createElement(l2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var im;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(im||(im={}));var sm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sm||(sm={}));var ut=function(){return ut=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ut.apply(this,arguments)};function Mo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Ce="-ms-",uo="-moz-",he="-webkit-",Sv="comm",Cc="rule",Ip="decl",f2="@import",bv="@keyframes",p2="@layer",kv=Math.abs,Ap=String.fromCharCode,rf=Object.assign;function h2(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function _v(e){return e.trim()}function Wn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function el(e,t,n){return e.indexOf(t,n)}function Ke(e,t){return e.charCodeAt(t)|0}function ls(e,t,n){return e.slice(t,n)}function Dn(e){return e.length}function Dv(e){return e.length}function Js(e,t){return t.push(e),e}function g2(e,t){return e.map(t).join("")}function om(e,t){return e.filter(function(n){return!Wn(n,t)})}var Ec=1,cs=1,Cv=0,Zt=0,Be=0,bs="";function jc(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ec,column:cs,length:o,return:"",siblings:a}}function lr(e,t){return rf(jc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _i(e){for(;e.root;)e=lr(e.root,{children:[e]});Js(e,e.siblings)}function m2(){return Be}function y2(){return Be=Zt>0?Ke(bs,--Zt):0,cs--,Be===10&&(cs=1,Ec--),Be}function dn(){return Be=Zt<Cv?Ke(bs,Zt++):0,cs++,Be===10&&(cs=1,Ec++),Be}function ai(){return Ke(bs,Zt)}function tl(){return Zt}function Oc(e,t){return ls(bs,e,t)}function sf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function x2(e){return Ec=cs=1,Cv=Dn(bs=e),Zt=0,[]}function v2(e){return bs="",e}function Mu(e){return _v(Oc(Zt-1,of(e===91?e+2:e===40?e+1:e)))}function w2(e){for(;(Be=ai())&&Be<33;)dn();return sf(e)>2||sf(Be)>3?"":" "}function S2(e,t){for(;--t&&dn()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Oc(e,tl()+(t<6&&ai()==32&&dn()==32))}function of(e){for(;dn();)switch(Be){case e:return Zt;case 34:case 39:e!==34&&e!==39&&of(Be);break;case 40:e===41&&of(e);break;case 92:dn();break}return Zt}function b2(e,t){for(;dn()&&e+Be!==57;)if(e+Be===84&&ai()===47)break;return"/*"+Oc(t,Zt-1)+"*"+Ap(e===47?e:dn())}function k2(e){for(;!sf(ai());)dn();return Oc(e,Zt)}function _2(e){return v2(nl("",null,null,null,[""],e=x2(e),0,[0],e))}function nl(e,t,n,r,i,s,o,a,l){for(var u=0,d=0,f=o,p=0,g=0,x=0,y=1,S=1,v=1,m=0,w="",k=i,_=s,E=r,D=w;S;)switch(x=m,m=dn()){case 40:if(x!=108&&Ke(D,f-1)==58){el(D+=ne(Mu(m),"&","&\f"),"&\f",kv(u?a[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:D+=Mu(m);break;case 9:case 10:case 13:case 32:D+=w2(x);break;case 92:D+=S2(tl()-1,7);continue;case 47:switch(ai()){case 42:case 47:Js(D2(b2(dn(),tl()),t,n,l),l);break;default:D+="/"}break;case 123*y:a[u++]=Dn(D)*v;case 125*y:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+d:v==-1&&(D=ne(D,/\f/g,"")),g>0&&Dn(D)-f&&Js(g>32?lm(D+";",r,n,f-1,l):lm(ne(D," ","")+";",r,n,f-2,l),l);break;case 59:D+=";";default:if(Js(E=am(D,t,n,u,d,i,a,w,k=[],_=[],f,s),s),m===123)if(d===0)nl(D,t,E,E,k,s,f,a,_);else switch(p===99&&Ke(D,3)===110?100:p){case 100:case 108:case 109:case 115:nl(e,E,E,r&&Js(am(e,E,E,0,0,i,a,w,i,k=[],f,_),_),i,_,f,a,r?k:_);break;default:nl(D,E,E,E,[""],_,0,a,_)}}u=d=g=0,y=v=1,w=D="",f=o;break;case 58:f=1+Dn(D),g=x;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&y2()==125)continue}switch(D+=Ap(m),m*y){case 38:v=d>0?1:(D+="\f",-1);break;case 44:a[u++]=(Dn(D)-1)*v,v=1;break;case 64:ai()===45&&(D+=Mu(dn())),p=ai(),d=f=Dn(w=D+=k2(tl())),m++;break;case 45:x===45&&Dn(D)==2&&(y=0)}}return s}function am(e,t,n,r,i,s,o,a,l,u,d,f){for(var p=i-1,g=i===0?s:[""],x=Dv(g),y=0,S=0,v=0;y<r;++y)for(var m=0,w=ls(e,p+1,p=kv(S=o[y])),k=e;m<x;++m)(k=_v(S>0?g[m]+" "+w:ne(w,/&\f/g,g[m])))&&(l[v++]=k);return jc(e,t,n,i===0?Cc:a,l,u,d,f)}function D2(e,t,n,r){return jc(e,t,n,Sv,Ap(m2()),ls(e,2,-2),0,r)}function lm(e,t,n,r,i){return jc(e,t,n,Ip,ls(e,0,r),ls(e,r+1,-1),r,i)}function Ev(e,t,n){switch(h2(e,t)){case 5103:return he+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+e+e;case 4789:return uo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return he+e+uo+e+Ce+e+e;case 5936:switch(Ke(e,t+11)){case 114:return he+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return he+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return he+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return he+e+Ce+e+e;case 6165:return he+e+Ce+"flex-"+e+e;case 5187:return he+e+ne(e,/(\w+).+(:[^]+)/,he+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return he+e+Ce+"flex-item-"+ne(e,/flex-|-self/g,"")+(Wn(e,/flex-|baseline/)?"":Ce+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return he+e+Ce+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return he+e+Ce+ne(e,"shrink","negative")+e;case 5292:return he+e+Ce+ne(e,"basis","preferred-size")+e;case 6060:return he+"box-"+ne(e,"-grow","")+he+e+Ce+ne(e,"grow","positive")+e;case 4554:return he+ne(e,/([^-])(transform)/g,"$1"+he+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+e+e;case 4200:if(!Wn(e,/flex-|baseline/))return Ce+"grid-column-align"+ls(e,t)+e;break;case 2592:case 3360:return Ce+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Wn(r.props,/grid-\w+-end/)})?~el(e+(n=n[t].value),"span",0)?e:Ce+ne(e,"-start","")+e+Ce+"grid-row-span:"+(~el(n,"span",0)?Wn(n,/\d+/):+Wn(n,/\d+/)-+Wn(e,/\d+/))+";":Ce+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Wn(r.props,/grid-\w+-start/)})?e:Ce+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,he+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+uo+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~el(e,"stretch",0)?Ev(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Ce+i+":"+s+u+(o?Ce+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Ke(e,t+6)===121)return ne(e,":",":"+he)+e;break;case 6444:switch(Ke(e,Ke(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Ke(e,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Ce+"$2box$3")+e;case 100:return ne(e,":",":"+Ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Fl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function C2(e,t,n,r){switch(e.type){case p2:if(e.children.length)break;case f2:case Ip:return e.return=e.return||e.value;case Sv:return"";case bv:return e.return=e.value+"{"+Fl(e.children,r)+"}";case Cc:if(!Dn(e.value=e.props.join(",")))return""}return Dn(n=Fl(e.children,r))?e.return=e.value+"{"+n+"}":""}function E2(e){var t=Dv(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function j2(e){return function(t){t.root||(t=t.return)&&e(t)}}function O2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ip:e.return=Ev(e.value,e.length,n);return;case bv:return Fl([lr(e,{value:ne(e.value,"@","@"+he)})],r);case Cc:if(e.length)return g2(n=e.props,function(i){switch(Wn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_i(lr(e,{props:[ne(i,/:(read-\w+)/,":"+uo+"$1")]})),_i(lr(e,{props:[i]})),rf(e,{props:om(n,r)});break;case"::placeholder":_i(lr(e,{props:[ne(i,/:(plac\w+)/,":"+he+"input-$1")]})),_i(lr(e,{props:[ne(i,/:(plac\w+)/,":"+uo+"$1")]})),_i(lr(e,{props:[ne(i,/:(plac\w+)/,Ce+"input-$1")]})),_i(lr(e,{props:[i]})),rf(e,{props:om(n,r)});break}return""})}}var P2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mt={},us=typeof process<"u"&&Mt!==void 0&&(Mt.REACT_APP_SC_ATTR||Mt.SC_ATTR)||"data-styled",jv="active",Ov="data-styled-version",Pc="6.1.11",Fp=`/*!sc*/
`,Lp=typeof window<"u"&&"HTMLElement"in window,T2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mt!==void 0&&Mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mt.REACT_APP_SC_DISABLE_SPEEDY!==""?Mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mt!==void 0&&Mt.SC_DISABLE_SPEEDY!==void 0&&Mt.SC_DISABLE_SPEEDY!==""&&Mt.SC_DISABLE_SPEEDY!=="false"&&Mt.SC_DISABLE_SPEEDY),R2={},Tc=Object.freeze([]),ds=Object.freeze({});function Pv(e,t,n){return n===void 0&&(n=ds),e.theme!==n.theme&&e.theme||t||n.theme}var Tv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,N2=/(^-|-$)/g;function cm(e){return e.replace(M2,"-").replace(N2,"")}var $2=/(a)(d)/gi,_a=52,um=function(e){return String.fromCharCode(e+(e>25?39:97))};function af(e){var t,n="";for(t=Math.abs(e);t>_a;t=t/_a|0)n=um(t%_a)+n;return(um(t%_a)+n).replace($2,"$1-$2")}var Nu,Rv=5381,Bi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mv=function(e){return Bi(Rv,e)};function Nv(e){return af(Mv(e)>>>0)}function I2(e){return e.displayName||e.name||"Component"}function $u(e){return typeof e=="string"&&!0}var $v=typeof Symbol=="function"&&Symbol.for,Iv=$v?Symbol.for("react.memo"):60115,A2=$v?Symbol.for("react.forward_ref"):60112,F2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Av={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},z2=((Nu={})[A2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nu[Iv]=Av,Nu);function dm(e){return("type"in(t=e)&&t.type.$$typeof)===Iv?Av:"$$typeof"in e?z2[e.$$typeof]:F2;var t}var W2=Object.defineProperty,B2=Object.getOwnPropertyNames,fm=Object.getOwnPropertySymbols,U2=Object.getOwnPropertyDescriptor,H2=Object.getPrototypeOf,pm=Object.prototype;function Fv(e,t,n){if(typeof t!="string"){if(pm){var r=H2(t);r&&r!==pm&&Fv(e,r,n)}var i=B2(t);fm&&(i=i.concat(fm(t)));for(var s=dm(e),o=dm(t),a=0;a<i.length;++a){var l=i[a];if(!(l in L2||n&&n[l]||o&&l in o||s&&l in s)){var u=U2(t,l);try{W2(e,l,u)}catch{}}}}return e}function fs(e){return typeof e=="function"}function zp(e){return typeof e=="object"&&"styledComponentId"in e}function ni(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function No(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cf(e,t,n){if(n===void 0&&(n=!1),!n&&!No(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cf(e[r],t[r]);else if(No(t))for(var r in t)e[r]=cf(e[r],t[r]);return e}function Wp(e,t){Object.defineProperty(e,"toString",{value:t})}function Vo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Y2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Vo(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Fp);return n},e}(),rl=new Map,Ll=new Map,il=1,Da=function(e){if(rl.has(e))return rl.get(e);for(;Ll.has(il);)il++;var t=il++;return rl.set(e,t),Ll.set(t,e),t},q2=function(e,t){il=t+1,rl.set(e,t),Ll.set(t,e)},V2="style[".concat(us,"][").concat(Ov,'="').concat(Pc,'"]'),G2=new RegExp("^".concat(us,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Q2=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},K2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Fp),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(G2);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(q2(d,u),Q2(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function X2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Lv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(us,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(us,jv),r.setAttribute(Ov,Pc);var o=X2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},J2=function(){function e(t){this.element=Lv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Vo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Z2=function(){function e(t){this.element=Lv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),eD=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),hm=Lp,tD={isServer:!Lp,useCSSOMInjection:!T2},zl=function(){function e(t,n,r){t===void 0&&(t=ds),n===void 0&&(n={});var i=this;this.options=ut(ut({},tD),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Lp&&hm&&(hm=!1,function(s){for(var o=document.querySelectorAll(V2),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(us)!==jv&&(K2(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Wp(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(f){var p=function(v){return Ll.get(v)}(f);if(p===void 0)return"continue";var g=s.names.get(p),x=o.getGroup(f);if(g===void 0||x.length===0)return"continue";var y="".concat(us,".g").concat(f,'[id="').concat(p,'"]'),S="";g!==void 0&&g.forEach(function(v){v.length>0&&(S+="".concat(v,","))}),l+="".concat(x).concat(y,'{content:"').concat(S,'"}').concat(Fp)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return Da(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ut(ut({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new eD(i):r?new J2(i):new Z2(i)}(this.options),new Y2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Da(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Da(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Da(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),nD=/&/g,rD=/^\s*\/\/.*$/gm;function zv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zv(n.children,t)),n})}function iD(e){var t,n,r,i=ds,s=i.options,o=s===void 0?ds:s,a=i.plugins,l=a===void 0?Tc:a,u=function(p,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===Cc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(nD,n).replace(r,u))}),o.prefix&&d.push(O2),d.push(C2);var f=function(p,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(rD,""),v=_2(x||g?"".concat(x," ").concat(g," { ").concat(S," }"):S);o.namespace&&(v=zv(v,o.namespace));var m=[];return Fl(v,E2(d.concat(j2(function(w){return m.push(w)})))),m};return f.hash=l.length?l.reduce(function(p,g){return g.name||Vo(15),Bi(p,g.name)},Rv).toString():"",f}var sD=new zl,uf=iD(),Wv=$t.createContext({shouldForwardProp:void 0,styleSheet:sD,stylis:uf});Wv.Consumer;$t.createContext(void 0);function df(){return b.useContext(Wv)}var oD=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=uf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wp(this,function(){throw Vo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=uf),this.name+t.hash},e}(),aD=function(e){return e>="A"&&e<="Z"};function gm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;aD(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Bv=function(e){return e==null||e===!1||e===""},Uv=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Bv(s)&&(Array.isArray(s)&&s.isCss||fs(s)?r.push("".concat(gm(i),":"),s,";"):No(s)?r.push.apply(r,Mo(Mo(["".concat(i," {")],Uv(s),!1),["}"],!1)):r.push("".concat(gm(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in P2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _r(e,t,n,r){if(Bv(e))return[];if(zp(e))return[".".concat(e.styledComponentId)];if(fs(e)){if(!fs(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return _r(i,t,n,r)}var s;return e instanceof oD?n?(e.inject(n,r),[e.getName(r)]):[e]:No(e)?Uv(e):Array.isArray(e)?Array.prototype.concat.apply(Tc,e.map(function(o){return _r(o,t,n,r)})):[e.toString()]}function Hv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fs(n)&&!zp(n))return!1}return!0}var lD=Mv(Pc),cD=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hv(t),this.componentId=n,this.baseHash=Bi(lD,n),this.baseStyle=r,zl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ni(i,this.staticRulesId);else{var s=lf(_r(this.rules,t,n,r)),o=af(Bi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ni(i,o),this.staticRulesId=o}else{for(var l=Bi(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=lf(_r(f,t,n,r));l=Bi(l,p+d),u+=p}}if(u){var g=af(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=ni(i,g)}}return i},e}(),Bp=$t.createContext(void 0);Bp.Consumer;var Iu={};function uD(e,t,n){var r=zp(e),i=e,s=!$u(e),o=t.attrs,a=o===void 0?Tc:o,l=t.componentId,u=l===void 0?function(k,_){var E=typeof k!="string"?"sc":cm(k);Iu[E]=(Iu[E]||0)+1;var D="".concat(E,"-").concat(Nv(Pc+E+Iu[E]));return _?"".concat(_,"-").concat(D):D}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(k){return $u(k)?"styled.".concat(k):"Styled(".concat(I2(k),")")}(e):d,p=t.displayName&&t.componentId?"".concat(cm(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(k,_){return y(k,_)&&S(k,_)}}else x=y}var v=new cD(n,p,r?i.componentStyle:void 0);function m(k,_){return function(E,D,O){var K=E.attrs,N=E.componentStyle,L=E.defaultProps,Z=E.foldedComponentIds,Oe=E.styledComponentId,q=E.target,ce=$t.useContext(Bp),Se=df(),$e=E.shouldForwardProp||Se.shouldForwardProp,T=Pv(D,ce,L)||ds,z=function(F,A,$){for(var P,I=ut(ut({},A),{className:void 0,theme:$}),U=0;U<F.length;U+=1){var H=fs(P=F[U])?P(I):P;for(var G in H)I[G]=G==="className"?ni(I[G],H[G]):G==="style"?ut(ut({},I[G]),H[G]):H[G]}return A.className&&(I.className=ni(I.className,A.className)),I}(K,D,T),Y=z.as||q,oe={};for(var ue in z)z[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"&&z.theme===T||(ue==="forwardedAs"?oe.as=z.forwardedAs:$e&&!$e(ue,Y)||(oe[ue]=z[ue]));var ft=function(F,A){var $=df(),P=F.generateAndInjectStyles(A,$.styleSheet,$.stylis);return P}(N,z),M=ni(Z,Oe);return ft&&(M+=" "+ft),z.className&&(M+=" "+z.className),oe[$u(Y)&&!Tv.has(Y)?"class":"className"]=M,oe.ref=O,b.createElement(Y,oe)}(w,k,_)}m.displayName=f;var w=$t.forwardRef(m);return w.attrs=g,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=x,w.foldedComponentIds=r?ni(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=r?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(_){for(var E=[],D=1;D<arguments.length;D++)E[D-1]=arguments[D];for(var O=0,K=E;O<K.length;O++)cf(_,K[O],!0);return _}({},i.defaultProps,k):k}}),Wp(w,function(){return".".concat(w.styledComponentId)}),s&&Fv(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function mm(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ym=function(e){return Object.assign(e,{isCss:!0})};function Yv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fs(e)||No(e))return ym(_r(mm(Tc,Mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?_r(r):ym(_r(mm(r,t)))}function ff(e,t,n){if(n===void 0&&(n=ds),!t)throw Vo(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Yv.apply(void 0,Mo([i],s,!1)))};return r.attrs=function(i){return ff(e,t,ut(ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ff(e,t,ut(ut({},n),i))},r}var qv=function(e){return ff(uD,e)},h=qv;Tv.forEach(function(e){h[e]=qv(e)});var dD=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Hv(t),zl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(lf(_r(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&zl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function fD(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Yv.apply(void 0,Mo([e],t,!1)),i="sc-global-".concat(Nv(JSON.stringify(r))),s=new dD(r,i),o=function(l){var u=df(),d=$t.useContext(Bp),f=$t.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,d,u.stylis),$t.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,f,p){if(s.isStatic)s.renderStyles(l,R2,d,p);else{var g=ut(ut({},u),{theme:Pv(u,f,o.defaultProps)});s.renderStyles(l,g,d,p)}}return $t.memo(o)}const pD=h.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #2a85ff;
      outline: none;
      border: none;
      border-radius: 12px;
      color: #fcfcfc;
      padding: 12px;
      height: 48px;
      font-size: 15px;
      line-height: 24px;
      gap: 8px;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: center;
      cursor: pointer;
      &:focus {
            outline: none;
      }
      &:disabled {
            opacity: 0.5;
            cursor: auto;
      }
`,Je=e=>c.jsx(pD,{...e}),hD=h.input`
      width: 56px;
      height: 72px;
      border-radius: 12px;
      border: none;
      /* border: 2px solid #9a9fa5; */
      outline: none;
      padding: 12px;
      color: #1a1d1f;
      font-weight: 600;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.03em;
      overflow: hidden;
      text-align: center;
      caret-color: #2a85ff;
      background: #efefef;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
            -webkit-appearance: none;
      }
      &[type="number"] {
            appearance: textfield;
            -moz-appearance: textfield;
      }
      margin-right: 12px;
      &:last-child {
            margin-right: 0px;
      }
      &:focus {
            border: 2px solid #9a9fa5;
            background: #fcfcfc;
      }
`;let As=0;const gD=({otp:e,setOtp:t,...n})=>{console.log(e);const[r,i]=b.useState(0),s=b.useRef(null),o=({target:l})=>{const{value:u}=l,d=[...e];d[As]=u.substring(u.length-1),i(u?As+1:As-1),t(d)},a=(l,u)=>{As=u,l.key==="Backspace"&&i(As-1)};return b.useEffect(()=>{var l;(l=s.current)==null||l.focus()},[r]),c.jsx("div",{className:"h-screen flex justify-center items-center space-x-2",...n,children:e.map((l,u)=>c.jsxs($t.Fragment,{children:[c.jsx(hD,{type:"number",ref:r===u?s:null,className:"w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition",onChange:o,onKeyDown:d=>a(d,u),value:e[u],maxLength:1,required:!0}),u===e.length-1?null:c.jsx("span",{className:"w-2 py-0.5 bg-gray-400"})]},u))})};function Vv(e,t){return function(){return e.apply(t,arguments)}}const{toString:mD}=Object.prototype,{getPrototypeOf:Up}=Object,Rc=(e=>t=>{const n=mD.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yn=e=>(e=e.toLowerCase(),t=>Rc(t)===e),Mc=e=>t=>typeof t===e,{isArray:ks}=Array,$o=Mc("undefined");function yD(e){return e!==null&&!$o(e)&&e.constructor!==null&&!$o(e.constructor)&&Kt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Gv=yn("ArrayBuffer");function xD(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Gv(e.buffer),t}const vD=Mc("string"),Kt=Mc("function"),Qv=Mc("number"),Nc=e=>e!==null&&typeof e=="object",wD=e=>e===!0||e===!1,sl=e=>{if(Rc(e)!=="object")return!1;const t=Up(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},SD=yn("Date"),bD=yn("File"),kD=yn("Blob"),_D=yn("FileList"),DD=e=>Nc(e)&&Kt(e.pipe),CD=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Kt(e.append)&&((t=Rc(e))==="formdata"||t==="object"&&Kt(e.toString)&&e.toString()==="[object FormData]"))},ED=yn("URLSearchParams"),[jD,OD,PD,TD]=["ReadableStream","Request","Response","Headers"].map(yn),RD=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Go(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ks(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let a;for(r=0;r<o;r++)a=s[r],t.call(null,e[a],a,e)}}function Kv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Xv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Jv=e=>!$o(e)&&e!==Xv;function pf(){const{caseless:e}=Jv(this)&&this||{},t={},n=(r,i)=>{const s=e&&Kv(t,i)||i;sl(t[s])&&sl(r)?t[s]=pf(t[s],r):sl(r)?t[s]=pf({},r):ks(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Go(arguments[r],n);return t}const MD=(e,t,n,{allOwnKeys:r}={})=>(Go(t,(i,s)=>{n&&Kt(i)?e[s]=Vv(i,n):e[s]=i},{allOwnKeys:r}),e),ND=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),$D=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ID=(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Up(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},AD=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},FD=e=>{if(!e)return null;if(ks(e))return e;let t=e.length;if(!Qv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},LD=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Up(Uint8Array)),zD=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},WD=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},BD=yn("HTMLFormElement"),UD=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),xm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),HD=yn("RegExp"),Zv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Go(n,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(r[s]=o||i)}),Object.defineProperties(e,r)},YD=e=>{Zv(e,(t,n)=>{if(Kt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Kt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qD=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ks(e)?r(e):r(String(e).split(t)),n},VD=()=>{},GD=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Au="abcdefghijklmnopqrstuvwxyz",vm="0123456789",e1={DIGIT:vm,ALPHA:Au,ALPHA_DIGIT:Au+Au.toUpperCase()+vm},QD=(e=16,t=e1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function KD(e){return!!(e&&Kt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const XD=e=>{const t=new Array(10),n=(r,i)=>{if(Nc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=ks(r)?[]:{};return Go(r,(o,a)=>{const l=n(o,i+1);!$o(l)&&(s[a]=l)}),t[i]=void 0,s}}return r};return n(e,0)},JD=yn("AsyncFunction"),ZD=e=>e&&(Nc(e)||Kt(e))&&Kt(e.then)&&Kt(e.catch),j={isArray:ks,isArrayBuffer:Gv,isBuffer:yD,isFormData:CD,isArrayBufferView:xD,isString:vD,isNumber:Qv,isBoolean:wD,isObject:Nc,isPlainObject:sl,isReadableStream:jD,isRequest:OD,isResponse:PD,isHeaders:TD,isUndefined:$o,isDate:SD,isFile:bD,isBlob:kD,isRegExp:HD,isFunction:Kt,isStream:DD,isURLSearchParams:ED,isTypedArray:LD,isFileList:_D,forEach:Go,merge:pf,extend:MD,trim:RD,stripBOM:ND,inherits:$D,toFlatObject:ID,kindOf:Rc,kindOfTest:yn,endsWith:AD,toArray:FD,forEachEntry:zD,matchAll:WD,isHTMLForm:BD,hasOwnProperty:xm,hasOwnProp:xm,reduceDescriptors:Zv,freezeMethods:YD,toObjectSet:qD,toCamelCase:UD,noop:VD,toFiniteNumber:GD,findKey:Kv,global:Xv,isContextDefined:Jv,ALPHABET:e1,generateString:QD,isSpecCompliantForm:KD,toJSONObject:XD,isAsyncFn:JD,isThenable:ZD};function te(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const t1=te.prototype,n1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{n1[e]={value:e}});Object.defineProperties(te,n1);Object.defineProperty(t1,"isAxiosError",{value:!0});te.from=(e,t,n,r,i,s)=>{const o=Object.create(t1);return j.toFlatObject(e,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const eC=null;function hf(e){return j.isPlainObject(e)||j.isArray(e)}function r1(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function wm(e,t,n){return e?e.concat(t).map(function(i,s){return i=r1(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function tC(e){return j.isArray(e)&&!e.some(hf)}const nC=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function $c(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!j.isUndefined(S[y])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(j.isDate(x))return x.toISOString();if(!l&&j.isBlob(x))throw new te("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(x)||j.isTypedArray(x)?l&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,y,S){let v=x;if(x&&!S&&typeof x=="object"){if(j.endsWith(y,"{}"))y=r?y:y.slice(0,-2),x=JSON.stringify(x);else if(j.isArray(x)&&tC(x)||(j.isFileList(x)||j.endsWith(y,"[]"))&&(v=j.toArray(x)))return y=r1(y),v.forEach(function(w,k){!(j.isUndefined(w)||w===null)&&t.append(o===!0?wm([y],k,s):o===null?y:y+"[]",u(w))}),!1}return hf(x)?!0:(t.append(wm(S,y,s),u(x)),!1)}const f=[],p=Object.assign(nC,{defaultVisitor:d,convertValue:u,isVisitable:hf});function g(x,y){if(!j.isUndefined(x)){if(f.indexOf(x)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(x),j.forEach(x,function(v,m){(!(j.isUndefined(v)||v===null)&&i.call(t,v,j.isString(m)?m.trim():m,y,p))===!0&&g(v,y?y.concat(m):[m])}),f.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Sm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Hp(e,t){this._pairs=[],e&&$c(e,this,t)}const i1=Hp.prototype;i1.append=function(t,n){this._pairs.push([t,n])};i1.toString=function(t){const n=t?function(r){return t.call(this,r,Sm)}:Sm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function rC(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s1(e,t,n){if(!t)return e;const r=n&&n.encode||rC,i=n&&n.serialize;let s;if(i?s=i(t,n):s=j.isURLSearchParams(t)?t.toString():new Hp(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class bm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const o1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iC=typeof URLSearchParams<"u"?URLSearchParams:Hp,sC=typeof FormData<"u"?FormData:null,oC=typeof Blob<"u"?Blob:null,aC={isBrowser:!0,classes:{URLSearchParams:iC,FormData:sC,Blob:oC},protocols:["http","https","file","blob","url","data"]},Yp=typeof window<"u"&&typeof document<"u",lC=(e=>Yp&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),cC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uC=Yp&&window.location.href||"http://localhost",dC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yp,hasStandardBrowserEnv:lC,hasStandardBrowserWebWorkerEnv:cC,origin:uC},Symbol.toStringTag,{value:"Module"})),fn={...dC,...aC};function fC(e,t){return $c(e,new fn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return fn.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function pC(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function hC(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function a1(e){function t(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&j.isArray(i)?i.length:o,l?(j.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!j.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&j.isArray(i[o])&&(i[o]=hC(i[o])),!a)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,i)=>{t(pC(r),i,n,0)}),n}return null}function gC(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Qo={transitional:o1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=j.isObject(t);if(s&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i?JSON.stringify(a1(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t)||j.isReadableStream(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return fC(t,this.formSerializer).toString();if((a=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return $c(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),gC(t)):t}],transformResponse:[function(t){const n=this.transitional||Qo.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(j.isResponse(t)||j.isReadableStream(t))return t;if(t&&j.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:fn.classes.FormData,Blob:fn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{Qo.headers[e]={}});const mC=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yC=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&mC[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},km=Symbol("internals");function Fs(e){return e&&String(e).trim().toLowerCase()}function ol(e){return e===!1||e==null?e:j.isArray(e)?e.map(ol):String(e)}function xC(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vC=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Fu(e,t,n,r,i){if(j.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function wC(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function SC(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class jt{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(a,l,u){const d=Fs(l);if(!d)throw new Error("header name must be a non-empty string");const f=j.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=ol(a))}const o=(a,l)=>j.forEach(a,(u,d)=>s(u,d,l));if(j.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(j.isString(t)&&(t=t.trim())&&!vC(t))o(yC(t),n);else if(j.isHeaders(t))for(const[a,l]of t.entries())s(l,a,r);else t!=null&&s(n,t,r);return this}get(t,n){if(t=Fs(t),t){const r=j.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return xC(i);if(j.isFunction(n))return n.call(this,i,r);if(j.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Fs(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Fu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=Fs(o),o){const a=j.findKey(r,o);a&&(!n||Fu(r,r[a],a,n))&&(delete r[a],i=!0)}}return j.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||Fu(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return j.forEach(this,(i,s)=>{const o=j.findKey(r,s);if(o){n[o]=ol(i),delete n[s];return}const a=t?wC(s):String(s).trim();a!==s&&delete n[s],n[a]=ol(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[km]=this[km]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Fs(o);r[a]||(SC(i,o),r[a]=!0)}return j.isArray(t)?t.forEach(s):s(t),this}}jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(jt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(jt);function Lu(e,t){const n=this||Qo,r=t||n,i=jt.from(r.headers);let s=r.data;return j.forEach(e,function(a){s=a.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function l1(e){return!!(e&&e.__CANCEL__)}function _s(e,t,n){te.call(this,e??"canceled",te.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(_s,te,{__CANCEL__:!0});function c1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function bC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function kC(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[s];o||(o=u),n[i]=l,r[i]=u;let f=s,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const g=d&&u-d;return g?Math.round(p*1e3/g):void 0}}function _C(e,t){let n=0;const r=1e3/t;let i=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>r)return i&&(clearTimeout(i),i=null),n=a,e.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),e.apply(null,arguments)),r-(a-n)))}}const Wl=(e,t,n=3)=>{let r=0;const i=kC(50,250);return _C(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-r,u=i(l),d=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:s,lengthComputable:a!=null};f[t?"download":"upload"]=!0,e(f)},n)},DC=fn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=j.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),CC=fn.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];j.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),j.isString(r)&&o.push("path="+r),j.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function EC(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jC(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function u1(e,t){return e&&!EC(t)?jC(e,t):t}const _m=e=>e instanceof jt?{...e}:e;function hi(e,t){t=t||{};const n={};function r(u,d,f){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:f},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function i(u,d,f){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function s(u,d){if(!j.isUndefined(d))return r(void 0,d)}function o(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,d)=>i(_m(u),_m(d),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||i,p=f(e[d],t[d],d);j.isUndefined(p)&&f!==a||(n[d]=p)}),n}const d1=e=>{const t=hi({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=t;t.headers=o=jt.from(o),t.url=s1(u1(t.baseURL,t.url),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(j.isFormData(n)){if(fn.hasStandardBrowserEnv||fn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...d]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(fn.hasStandardBrowserEnv&&(r&&j.isFunction(r)&&(r=r(t)),r||r!==!1&&DC(t.url))){const u=i&&s&&CC.read(s);u&&o.set(i,u)}return t},OC=typeof XMLHttpRequest<"u",PC=OC&&function(e){return new Promise(function(n,r){const i=d1(e);let s=i.data;const o=jt.from(i.headers).normalize();let{responseType:a}=i,l;function u(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d=new XMLHttpRequest;d.open(i.method.toUpperCase(),i.url,!0),d.timeout=i.timeout;function f(){if(!d)return;const g=jt.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:g,config:e,request:d};c1(function(v){n(v),u()},function(v){r(v),u()},y),d=null}"onloadend"in d?d.onloadend=f:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(f)},d.onabort=function(){d&&(r(new te("Request aborted",te.ECONNABORTED,i,d)),d=null)},d.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,i,d)),d=null},d.ontimeout=function(){let x=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const y=i.transitional||o1;i.timeoutErrorMessage&&(x=i.timeoutErrorMessage),r(new te(x,y.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,i,d)),d=null},s===void 0&&o.setContentType(null),"setRequestHeader"in d&&j.forEach(o.toJSON(),function(x,y){d.setRequestHeader(y,x)}),j.isUndefined(i.withCredentials)||(d.withCredentials=!!i.withCredentials),a&&a!=="json"&&(d.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&d.addEventListener("progress",Wl(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Wl(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=g=>{d&&(r(!g||g.type?new _s(null,e,d):g),d.abort(),d=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const p=bC(i.url);if(p&&fn.protocols.indexOf(p)===-1){r(new te("Unsupported protocol "+p+":",te.ERR_BAD_REQUEST,e));return}d.send(s||null)})},TC=(e,t)=>{let n=new AbortController,r;const i=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof te?u:new _s(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{i(new te(`timeout ${t} of ms exceeded`,te.ETIMEDOUT))},t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{s&&clearTimeout(s),s=null}]},RC=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},MC=async function*(e,t,n){for await(const r of e)yield*RC(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Dm=(e,t,n,r,i)=>{const s=MC(e,t,i);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await s.next();if(l){a.close(),r();return}let d=u.byteLength;n&&n(o+=d),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),s.return()}},{highWaterMark:2})},Cm=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Ic=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",f1=Ic&&typeof ReadableStream=="function",gf=Ic&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),NC=f1&&(()=>{let e=!1;const t=new Request(fn.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Em=64*1024,mf=f1&&!!(()=>{try{return j.isReadableStream(new Response("").body)}catch{}})(),Bl={stream:mf&&(e=>e.body)};Ic&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Bl[t]&&(Bl[t]=j.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new te(`Response type '${t}' is not supported`,te.ERR_NOT_SUPPORT,r)})})})(new Response);const $C=async e=>{if(e==null)return 0;if(j.isBlob(e))return e.size;if(j.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(j.isArrayBufferView(e))return e.byteLength;if(j.isURLSearchParams(e)&&(e=e+""),j.isString(e))return(await gf(e)).byteLength},IC=async(e,t)=>{const n=j.toFiniteNumber(e.getContentLength());return n??$C(t)},AC=Ic&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:p}=d1(e);u=u?(u+"").toLowerCase():"text";let[g,x]=i||s||o?TC([i,s],o):[],y,S;const v=()=>{!y&&setTimeout(()=>{g&&g.unsubscribe()}),y=!0};let m;try{if(l&&NC&&n!=="get"&&n!=="head"&&(m=await IC(d,r))!==0){let E=new Request(t,{method:"POST",body:r,duplex:"half"}),D;j.isFormData(r)&&(D=E.headers.get("content-type"))&&d.setContentType(D),E.body&&(r=Dm(E.body,Em,Cm(m,Wl(l)),null,gf))}j.isString(f)||(f=f?"cors":"omit"),S=new Request(t,{...p,signal:g,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let w=await fetch(S);const k=mf&&(u==="stream"||u==="response");if(mf&&(a||k)){const E={};["status","statusText","headers"].forEach(O=>{E[O]=w[O]});const D=j.toFiniteNumber(w.headers.get("content-length"));w=new Response(Dm(w.body,Em,a&&Cm(D,Wl(a,!0)),k&&v,gf),E)}u=u||"text";let _=await Bl[j.findKey(Bl,u)||"text"](w,e);return!k&&v(),x&&x(),await new Promise((E,D)=>{c1(E,D,{data:_,headers:jt.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:S})})}catch(w){throw v(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,e,S),{cause:w.cause||w}):te.from(w,w&&w.code,e,S)}}),yf={http:eC,xhr:PC,fetch:AC};j.forEach(yf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const jm=e=>`- ${e}`,FC=e=>j.isFunction(e)||e===null||e===!1,p1={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){n=e[s];let o;if(r=n,!FC(n)&&(r=yf[(o=String(n)).toLowerCase()],r===void 0))throw new te(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(jm).join(`
`):" "+jm(s[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:yf};function zu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _s(null,e)}function Om(e){return zu(e),e.headers=jt.from(e.headers),e.data=Lu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),p1.getAdapter(e.adapter||Qo.adapter)(e).then(function(r){return zu(e),r.data=Lu.call(e,e.transformResponse,r),r.headers=jt.from(r.headers),r},function(r){return l1(r)||(zu(e),r&&r.response&&(r.response.data=Lu.call(e,e.transformResponse,r.response),r.response.headers=jt.from(r.response.headers))),Promise.reject(r)})}const h1="1.7.2",qp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pm={};qp.transitional=function(t,n,r){function i(s,o){return"[Axios v"+h1+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(t===!1)throw new te(i(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!Pm[o]&&(Pm[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,a):!0}};function LC(e,t,n){if(typeof e!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const a=e[s],l=a===void 0||o(a,s,e);if(l!==!0)throw new te("option "+s+" must be "+l,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}}const xf={assertOptions:LC,validators:qp},sr=xf.validators;class li{constructor(t){this.defaults=t,this.interceptors={request:new bm,response:new bm}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=hi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&xf.assertOptions(r,{silentJSONParsing:sr.transitional(sr.boolean),forcedJSONParsing:sr.transitional(sr.boolean),clarifyTimeoutError:sr.transitional(sr.boolean)},!1),i!=null&&(j.isFunction(i)?n.paramsSerializer={serialize:i}:xf.assertOptions(i,{encode:sr.function,serialize:sr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[n.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],x=>{delete s[x]}),n.headers=jt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,f=0,p;if(!l){const x=[Om.bind(this),void 0];for(x.unshift.apply(x,a),x.push.apply(x,u),p=x.length,d=Promise.resolve(n);f<p;)d=d.then(x[f++],x[f++]);return d}p=a.length;let g=n;for(f=0;f<p;){const x=a[f++],y=a[f++];try{g=x(g)}catch(S){y.call(this,S);break}}try{d=Om.call(this,g)}catch(x){return Promise.reject(x)}for(f=0,p=u.length;f<p;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=hi(this.defaults,t);const n=u1(t.baseURL,t.url);return s1(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){li.prototype[t]=function(n,r){return this.request(hi(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,a){return this.request(hi(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}li.prototype[t]=n(),li.prototype[t+"Form"]=n(!0)});class Vp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,a){r.reason||(r.reason=new _s(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Vp(function(i){t=i}),cancel:t}}}function zC(e){return function(n){return e.apply(null,n)}}function WC(e){return j.isObject(e)&&e.isAxiosError===!0}const vf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(vf).forEach(([e,t])=>{vf[t]=e});function g1(e){const t=new li(e),n=Vv(li.prototype.request,t);return j.extend(n,li.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return g1(hi(e,i))},n}const re=g1(Qo);re.Axios=li;re.CanceledError=_s;re.CancelToken=Vp;re.isCancel=l1;re.VERSION=h1;re.toFormData=$c;re.AxiosError=te;re.Cancel=re.CanceledError;re.all=function(t){return Promise.all(t)};re.spread=zC;re.isAxiosError=WC;re.mergeConfig=hi;re.AxiosHeaders=jt;re.formToJSON=e=>a1(j.isHTMLForm(e)?new FormData(e):e);re.getAdapter=p1.getAdapter;re.HttpStatusCode=vf;re.default=re;const X="http://5.35.12.37:8000",BC=async(e,t)=>await re({method:"post",url:X+"/registration",validateStatus:function(r){return r<500},data:{email:e,password:t}}),UC=async(e,t)=>await re({method:"post",url:X+"/confirm",validateStatus:function(r){return r<500},params:{email:e,code:t}}),HC=async(e,t)=>{const n=new FormData;return n.append("username",e),n.append("password",t),await re.post(X+"/login",n,{validateStatus:function(i){return i<500}})},YC=h.div`
      width: 296px;
`,qC=h.div`
      font-weight: 600;
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.03em;
      margin-top: 32px;
      color: #1a1d1f;
`,VC=h.div`
      margin-top: 32px;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: #efefef;
`,Tm=h.div`
      margin-top: 32px;
      color: #1a1d1f;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
`,GC=h.div`
      width: 296px;
      position: relative;
`,QC=h.div`
      width: 296px;
      position: relative;
`,KC=h.img`
      position: absolute;
      max-width: 24px;
      max-height: 24px;
      left: 12px;
      top: 12px;
`,XC=h.img`
      position: absolute;
      max-width: 24px;
      max-height: 24px;
      left: 12px;
      top: 12px;
`,JC=h.img`
      position: absolute;
      display: block;
      right: 12px;
      top: 12px;
`,ZC=h.img`
      position: absolute;
      display: block;
      right: 12px;
      top: 12px;
`,Rm=h.input`
      width: 100%;
      border-radius: 12px;
      background: #f4f4f4;
      padding: 12px;
      outline: none;
      border: none;
      padding-left: 48px;
      color: #1a1d1f;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      caret-color: #2a85ff;
      &::placeholder {
            color: #9a9fa5;
      }
`,eE=h.div`
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: -0.01em;
      color: #ff6a55;
`,tE=({loginWrapperStyles:e,passwordWrapperStyles:t})=>{const n=Ze(),[r,i]=b.useState(!1),[s,o]=b.useState(!1),[a,l]=b.useState({}),[u,d]=b.useState(!0),[f,p]=b.useState(!0),[g,x]=b.useState({email:"",password:""}),[y,S]=b.useState(!1),[v,m]=b.useState(!1),[w,k]=b.useState(new Array(4).fill("")),_=L=>{L.target.validity.valid&&L.target.value!==""?(i(!0),l({color:"#1a1d1f",background:"#f4f4f4"}),O(L),d(!1)):L.target.value!==""?(i(!1),l({color:"#ff6a55",background:"rgba(255, 188, 153, 0.25)"}),O(L),d(!1)):L.target.value===""&&(l({color:"#1a1d1f",background:"#f4f4f4"}),O(L),d(!0))},E=L=>{L.target.value.length>0?(O(L),o(!0)):(O(L),o(!1))},D=b.useCallback(()=>{const L=g.email,Z=g.password;p(!(L&&Z&&r&&s))},[g,r,s]),O=L=>{const Z=L.target.name,Oe=L.target.value;x(q=>({...q,[Z]:Oe}))},K=L=>{L.preventDefault(),BC(g.email,g.password).then(Z=>{(Z==null?void 0:Z.status)===200&&S(!0),(Z==null?void 0:Z.status)===403&&S(!0)}).catch(Z=>{console.log(Z.message)})},N=()=>{const L=w.join("");console.log(L),UC(g.email,L).then(Z=>{if(console.log(Z),(Z==null?void 0:Z.status)===200){m(!1),n("/login");return}(Z==null?void 0:Z.status)!==200&&m(!0)})};return b.useEffect(()=>{D()},[g,D]),c.jsx("form",{onSubmit:K,children:c.jsxs(YC,{children:[c.jsx(qC,{children:"Регистрация"}),!y&&c.jsxs(c.Fragment,{children:[c.jsx(VC,{}),c.jsx(Tm,{children:"Or continue with email address"}),c.jsxs(GC,{style:e,children:[c.jsx(KC,{src:"public/icons/mail.svg"}),r&&!u&&c.jsx(JC,{src:"public/icons/check-input.svg"}),!r&&!u&&c.jsx(ZC,{src:"public/icons/warning.svg"}),c.jsx(Rm,{placeholder:"Ваш email",type:"email",name:"email",value:g.email||"",style:a,onChange:L=>{_(L)}})]}),c.jsxs(QC,{style:t,children:[c.jsx(XC,{src:"public/icons/lock.svg"}),c.jsx(Rm,{placeholder:"Пароль",type:"password",name:"password",value:g.password||"",onChange:L=>{E(L)}})]}),c.jsx(Je,{style:{width:"100%",marginTop:"12px"},disabled:f,type:"submit",children:"Продолжить"})]}),y&&c.jsxs(c.Fragment,{children:[c.jsx(Tm,{children:"Мы выслали вам код подтверждения. Проверьте свой почтовый ящик."}),c.jsx(gD,{otp:w,setOtp:k,style:{marginTop:"32px"}}),v&&c.jsx(eE,{style:{marginTop:"12px"},children:"Неверный код подтверждения."}),c.jsx(Je,{style:{width:"260px",marginTop:"12px"},type:"button",onClick:()=>{N()},children:"Продолжить"})]})]})})},nE=h.div`
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
      position: relative;
      background: #fcfcfc;
`,rE=h.div`
      width: 400px;
      height: 100%;
      background: #f4f4f4;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
`,iE=h.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
`,sE=h.img`
      width: 153px;
`,oE=h.img`
      width: 42px;
      position: absolute;
      top: 23px;
      left: 27px;
      z-index: 1;
`,aE=h.div`
      position: absolute;
      top: 40px;
      right: 40px;
      color: #9a9fa5;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      & a {
            text-decoration: none;
            cursor: pointer;
      }
      & span {
            color: #1a1d1f;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            display: inline;
      }
`,lE=h.div`
      color: #272b30;
      font-size: 32px;
      font-weight: 600;
      line-height: 40px;
      margin-top: 48px;
`,cE=h.div`
      margin-top: 48px;
`,Ca=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
      &:last-child {
            margin-bottom: 0;
      }
`,Ea=h.img`
      width: 20px;
`,ja=h.div`
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      color: #6f767e;
      margin-left: 12px;
`,uE=h.div`
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
`,dE=()=>{const e=Ze();return c.jsxs(nE,{children:[c.jsx(oE,{src:"/public/logo.svg"}),c.jsxs(aE,{children:["Уже зарегестрированны ?"," ",c.jsx("a",{onClick:()=>{e("/login")},children:c.jsx("span",{children:"Войти"})})]}),c.jsx(rE,{children:c.jsxs(iE,{children:[c.jsx(sE,{src:"/public/images/mountain.png"}),c.jsx(lE,{children:"Plan includes"}),c.jsxs(cE,{children:[c.jsxs(Ca,{children:[c.jsx(Ea,{src:"/public/icons/check_circled_light.svg"}),c.jsx(ja,{children:"Unlimited product uploads"})]}),c.jsxs(Ca,{children:[c.jsx(Ea,{src:"/public/icons/check_circled_light.svg"}),c.jsx(ja,{children:"Pro tips"})]}),c.jsxs(Ca,{children:[c.jsx(Ea,{src:"/public/icons/check_circled_light.svg"}),c.jsx(ja,{children:"Free forever"})]}),c.jsxs(Ca,{children:[c.jsx(Ea,{src:"/public/icons/check_circled_light.svg"}),c.jsx(ja,{children:"Full author options"})]})]})]})}),c.jsx(uE,{children:c.jsx(tE,{loginWrapperStyles:{marginTop:"20px"},passwordWrapperStyles:{marginTop:"20px"}})})]})},Ko=b.createContext({isAuth:!1,setIsAuth:()=>{}}),fE=({children:e})=>{const[t,n]=b.useState(!1);return c.jsx(Ko.Provider,{value:{isAuth:t,setIsAuth:n},children:e})},pE=h.div`
      width: 296px;
      position: relative;
`,hE=h.div`
      width: 296px;
      position: relative;
`,gE=h.img`
      position: absolute;
      max-width: 24px;
      max-height: 24px;
      left: 12px;
      top: 12px;
`,mE=h.img`
      position: absolute;
      max-width: 24px;
      max-height: 24px;
      left: 12px;
      top: 12px;
`,yE=h.img`
      position: absolute;
      display: block;
      right: 12px;
      top: 12px;
`,xE=h.img`
      position: absolute;
      display: block;
      right: 12px;
      top: 12px;
`,Mm=h.input`
      width: 100%;
      border-radius: 12px;
      background: #f4f4f4;
      padding: 12px;
      outline: none;
      border: none;
      padding-left: 48px;
      color: #1a1d1f;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      caret-color: #2a85ff;
      &::placeholder {
            color: #9a9fa5;
      }
`,vE=({loginWrapperStyles:e,passwordWrapperStyles:t})=>{const{setIsAuth:n}=b.useContext(Ko),r=Ze(),[i,s]=b.useState(!1),[o,a]=b.useState(!1),[l,u]=b.useState({}),[d,f]=b.useState(!0),[p,g]=b.useState(!0),[x,y]=b.useState({email:"",password:""}),S=_=>{_.target.validity.valid&&_.target.value!==""?(s(!0),u({color:"#1a1d1f",background:"#f4f4f4"}),w(_),f(!1)):_.target.value!==""?(s(!1),u({color:"#ff6a55",background:"rgba(255, 188, 153, 0.25)"}),w(_),f(!1)):_.target.value===""&&(u({color:"#1a1d1f",background:"#f4f4f4"}),w(_),f(!0))},v=_=>{_.target.value.length>0?(w(_),a(!0)):(w(_),a(!1))},m=b.useCallback(()=>{const _=x.email,E=x.password;g(!(_&&E&&i&&o))},[x,i,o]),w=_=>{const E=_.target.name,D=_.target.value;y(O=>({...O,[E]:D}))},k=_=>{_.preventDefault(),HC(x.email,x.password).then(E=>{if(E.status===200){const D=E.data.access_token;window.localStorage.setItem("access_token",D),n(!0),r("/home")}}).catch(E=>{console.log(E)})};return b.useEffect(()=>{m()},[x,m]),c.jsxs("form",{onSubmit:k,children:[c.jsxs(pE,{style:e,children:[c.jsx(gE,{src:"public/icons/mail.svg"}),i&&!d&&c.jsx(yE,{src:"public/icons/check-input.svg"}),!i&&!d&&c.jsx(xE,{src:"public/icons/warning.svg"}),c.jsx(Mm,{placeholder:"Ваш email",type:"email",name:"email",value:x.email||"",style:l,onChange:_=>{S(_)}})]}),c.jsxs(hE,{style:t,children:[c.jsx(mE,{src:"public/icons/lock.svg"}),c.jsx(Mm,{placeholder:"Пароль",type:"password",name:"password",value:x.password||"",onChange:_=>{v(_)}})]}),c.jsx(Je,{style:{width:"100%",marginTop:"12px"},disabled:p,type:"submit",children:"Вход"})]})},wE=h.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: #fcfcfc;
`,SE=h.img`
      width: 42px;
`,bE=h.div`
      font-weight: 600;
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.03em;
      margin-top: 32px;
      color: #1a1d1f;
`,kE=h.div`
      width: 296px;
`,_E=h.div`
      margin-top: 32px;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: #efefef;
`,DE=h.div`
      margin-top: 32px;
      color: #1a1d1f;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
`,CE=h.div`
      color: #6f767e;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      margin-top: 32px;
      & a {
            text-decoration: none;
            cursor: pointer;
      }
      & span {
            color: #1a1d1f;
            display: inline;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
      }
`,EE=()=>{const e=Ze();return c.jsx(wE,{children:c.jsxs(kE,{children:[c.jsx(SE,{src:"/public/logo.svg"}),c.jsx(bE,{children:"Вход"}),c.jsx(_E,{}),c.jsx(DE,{children:"Для входа введите email"}),c.jsx(vE,{loginWrapperStyles:{marginTop:"20px"},passwordWrapperStyles:{marginTop:"12px"}}),c.jsxs(CE,{children:["Еще нет аккаунта?"," ",c.jsx("a",{onClick:()=>{e("/register")},children:c.jsx("span",{children:"Регистрация"})})]})]})})},Nm=h.button`
      display: flex;
      /* align-items: center; */
      width: 292px;
      height: 48px;
      margin-bottom: 8px;
      padding: 12px;
      border-radius: 12px;
      border: none;
      outline: none;
      color: #6f767e;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      background: transparent;
      cursor: pointer;
      &:disabled {
            background: #efefef;
            color: #1a1d1f;
            letter-spacing: -0.01em;
            box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 1) inset;
            box-shadow: 0px -2px 1px 0px rgba(0, 0, 0, 0.05) inset;
      }
      &:focus {
            outline: none;
      }
`,$m=h.img`
      margin-right: 12px;
`,Im=h.div`
      flex: 1;
      text-align: left;
`,Am=h.div`
      height: 24px;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      border-radius: 6px;
      padding-left: 8px;
      padding-right: 8px;
      background: #ffbc99;
`,Oa=({title:e,iconPathInactive:t,iconPathActive:n,url:r,notificationDigit:i})=>{const s=Ze();return!!Dc().pathname.startsWith(r)?c.jsxs(Nm,{disabled:!0,children:[c.jsx($m,{src:n}),c.jsx(Im,{children:e}),i&&c.jsx(Am,{children:i})]}):c.jsxs(Nm,{onClick:()=>{s(r)},children:[c.jsx($m,{src:t}),c.jsx(Im,{children:e}),i&&c.jsx(Am,{children:i})]})};var m1={exports:{}},y1={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=b;function jE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var OE=typeof Object.is=="function"?Object.is:jE,PE=Xo.useSyncExternalStore,TE=Xo.useRef,RE=Xo.useEffect,ME=Xo.useMemo,NE=Xo.useDebugValue;y1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=TE(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=ME(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var x=o.value;if(i(x,g))return f=x}return f=g}if(x=f,OE(d,g))return x;var y=r(g);return i!==void 0&&i(x,y)?x:(d=g,f=y)}var u=!1,d,f,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,i]);var a=PE(e,s[0],s[1]);return RE(function(){o.hasValue=!0,o.value=a},[a]),NE(a),a};m1.exports=y1;var $E=m1.exports,At="default"in ad?$t:ad,Fm=Symbol.for("react-redux-context"),Lm=typeof globalThis<"u"?globalThis:{};function IE(){if(!At.createContext)return{};const e=Lm[Fm]??(Lm[Fm]=new Map);let t=e.get(At.createContext);return t||(t=At.createContext(null),e.set(At.createContext,t)),t}var jr=IE(),AE=()=>{throw new Error("uSES not initialized!")};function Gp(e=jr){return function(){return At.useContext(e)}}var x1=Gp(),v1=AE,FE=e=>{v1=e},LE=(e,t)=>e===t;function zE(e=jr){const t=e===jr?x1:Gp(e),n=(r,i={})=>{const{equalityFn:s=LE,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:f}=t();At.useRef(!0);const p=At.useCallback({[r.name](x){return r(x)}}[r.name],[r,d,o.stabilityCheck]),g=v1(l.addNestedSub,a.getState,u||a.getState,p,s);return At.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var WE=zE();function BE(e){e()}function UE(){let e=null,t=null;return{clear(){e=null,t=null},notify(){BE(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var zm={notify(){},get:()=>[]};function HE(e,t){let n,r=zm,i=0,s=!1;function o(y){d();const S=r.subscribe(y);let v=!1;return()=>{v||(v=!0,S(),f())}}function a(){r.notify()}function l(){x.onStateChange&&x.onStateChange()}function u(){return s}function d(){i++,n||(n=e.subscribe(l),r=UE())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=zm)}function p(){s||(s=!0,d())}function g(){s&&(s=!1,f())}const x={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:p,tryUnsubscribe:g,getListeners:()=>r};return x}var YE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qE=typeof navigator<"u"&&navigator.product==="ReactNative",VE=YE||qE?At.useLayoutEffect:At.useEffect;function GE({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=At.useMemo(()=>{const u=HE(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[e,r,i,s]),a=At.useMemo(()=>e.getState(),[e]);VE(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||jr;return At.createElement(l.Provider,{value:o},n)}var QE=GE;function w1(e=jr){const t=e===jr?x1:Gp(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var KE=w1();function XE(e=jr){const t=e===jr?KE:w1(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var vt=XE();FE($E.useSyncExternalStoreWithSelector);const we=WE,JE=h.div`
      width: 340px;
      height: 100%;
      background: #fcfcfc;
      padding: 24px;
`,ZE=h.img`
      width: 48px;
      height: 48px;
`,ej=h.div`
      margin-top: 48px;
`,tj=()=>{const e=we(r=>r.userReducer.user),t=we(r=>r.chatsReducer.chats);let n=0;return t.map(r=>{r.messages.map(i=>{i.read_id.includes(e.id)||(n=n+1)})}),c.jsxs(JE,{children:[c.jsx(ZE,{src:"/public/logo.svg"}),c.jsxs(ej,{children:[c.jsx(Oa,{title:"Главная",iconPathActive:"/public/icons/menu/home_active.svg",iconPathInactive:"/public/icons/menu/home.svg",url:"/home"}),c.jsx(Oa,{title:"Мессенджер",iconPathActive:"/public/icons/menu/message_active.svg",iconPathInactive:"/public/icons/menu/message.svg",url:"/messages",notificationDigit:n>0?n:void 0}),c.jsx(Oa,{title:"Задачи",iconPathActive:"/public/icons/menu/clipboard_active.svg",iconPathInactive:"/public/icons/menu/clipboard.svg",url:"/tasks"}),c.jsx(Oa,{title:"Проекты",iconPathActive:"/public/icons/menu/pie_chart_active.svg",iconPathInactive:"/public/icons/menu/pie_chart.svg",url:"/projects"})]})]})},nj=h.div`
      width: 100%;
      position: relative;
`,rj=h.img`
      width: 24px;
      height: 24px;
      position: absolute;
      left: 8px;
      top: 12px;
`,ij=h.input`
      width: 100%;
      height: 48px;
      padding-left: 48px;
      padding-right: 12px;
      padding-top: 12px;
      padding-bottom: 12px;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.01em;
      border-radius: 12px;
      outline: none;
      border: none;
      color: #1a1d1f;
      background: #f4f4f4;
      caret-color: #2a85ff;
      &:focus {
            outline: none;
            /* outline: 4px solid rgba(42, 133, 255, 0.25); */
      }
      &::placeholder {
            color: #9a9fa5;
      }
`,Jo=({style:e})=>c.jsxs(nj,{style:e,children:[c.jsx(rj,{src:"/public/icons/search.svg"}),c.jsx(ij,{placeholder:"Поиск"})]}),sj=h.div`
      width: 48px;
      height: 48px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      & img {
            width: 24px;
            height: 24px;
            max-width: 100%;
            max-height: 100%;
      }
`,oj=h.div`
      width: 10px;
      height: 10px;
      position: absolute;
      background: #ff6a55;
      border-radius: 12px;
      top: 12px;
      right: 12px;
      border: 2px solid #fcfcfc;
`,Wm=({isActive:e,iconPathInactive:t,iconPathActive:n,onClick:r})=>c.jsx(sj,{onClick:r,children:e?c.jsxs(c.Fragment,{children:[c.jsx("img",{src:n}),c.jsx(oj,{})]}):c.jsx("img",{src:t})}),aj=h.div`
      width: 56px;
      height: 56px;
      position: relative;
`,lj=h.div`
      width: 56px;
      height: 56px;
      overflow: hidden;
      background: #b1e5fc;
      border-radius: 50%;
`,cj=h.img`
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 48px;
`,uj=h.div`
      width: 20px;
      height: 20px;
      background: #83bf6e;
      border: 4px solid #efefef;
      position: absolute;
      border-radius: 100%;
      top: -2px;
      left: -2px;
`,Or=({isOnline:e,src:t,...n})=>c.jsx(aj,{children:c.jsxs(lj,{...n,children:[e&&c.jsx(uj,{}),t?c.jsx(cj,{src:t}):c.jsx(c.Fragment,{})]})}),pn=h.div`
      width: 16px;
      height: 32px;
      border-radius: 4px;
      background: #2a85ff;
`,an=h.div`
      position: relative;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;

      &::after {
            content: url("/public/icons/info_gray_16.svg");
            position: relative;
            cursor: pointer;
            width: 16px;
            height: 16px;
            right: -4px;
            top: 4px;
      }
`,dj=h.div`
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 36px;
      background: #efefef;
      cursor: pointer;
`,fj=h.img`
      width: 20px;
      height: 20px;
`,S1=({onClick:e})=>c.jsx(dj,{onClick:e,children:c.jsx(fj,{src:"/public/icons/close_dark_20.svg"})}),Qp=h.button`
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
      border-radius: 36px;
      height: 32px;
      background: #efefef;
      cursor: pointer;

      &:focus {
            outline: none;
      }
`,Ki=h(Qp)`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      & > img {
            width: 20px;
            height: 20px;
      }
`,pj=h(Qp)`
      padding: 0 8px 0 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;

      &:hover {
            background: #ffbc99;
      }
`,hj=h.div`
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 48px;
      padding: 4px;
      width: 32px;
      height: 32px;
      background: #ff6a55;

      & > img {
            width: 24px;
            height: 24px;
      }
`,Bm=h.div`
      width: 32px;
      height: 32px;
      border-radius: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: #b1e5fc;
      & > img {
            width: 32px;
            height: 32px;
            border-radius: 100%;
            object-fit: cover;
      }
`,gj=h.div`
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.015em;
      color: #33383f;
`,b1=({avatarPath:e,name:t,...n})=>{const[r,i]=b.useState(!1);return c.jsxs(pj,{...n,onMouseOver:()=>{i(!0)},onMouseOut:()=>{i(!1)},children:[!r&&(e?c.jsx(Bm,{children:c.jsx("img",{src:e})}):c.jsx(Bm,{})),r&&c.jsx(hj,{children:c.jsx("img",{src:"/public/icons/close_light.svg"})}),c.jsx(gj,{children:t})]})},Ac=h.input`
      width: 100%;
      height: 48px;
      border: 2px solid rgba(42, 133, 255, 0.35);
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      background: none;
      border-radius: 12px;
      color: #33383f;
      padding: 12px;
      outline: none;
`,Qr=h.input`
      width: 100%;
      height: 48px;
      border: none;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      background: #f4f4f4;
      border-radius: 12px;
      color: #33383f;
      padding: 12px;
      outline: none;
`,mj=h.textarea`
      width: 100%;
      height: 112px;
      border-radius: 12px;
      border: 2px solid rgba(154, 159, 165, 0.25);
      background: #f4f4f4;
      resize: none;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      padding: 6px 12px 6px 12px;
      outline: none;
      &:focus {
            background: #fcfcfc;
      }
`,yj=h.textarea`
      width: 100%;
      height: 112px;
      border-radius: 12px;
      border: 2px solid rgba(42, 133, 255, 0.35);
      background: #ffffff;
      resize: none;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      padding: 6px 12px 6px 12px;
      outline: none;
`,xj=h.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #fcfcfc;
      outline: none;
      border: 2px solid rgba(239, 239, 239, 1);
      border-radius: 12px;
      color: #1a1d1f;
      padding: 12px;
      height: 48px;
      font-size: 15px;
      line-height: 24px;
      gap: 8px;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: center;
      cursor: pointer;
      &:hover {
            outline: none;
            border: 2px solid rgba(239, 239, 239, 1);
      }
      &:focus {
            outline: none;
      }
      &:disabled {
            opacity: 0.5;
            cursor: auto;
      }
`,ps=e=>c.jsx(xj,{...e});var k1={},Zo={},_1={exports:{}},vj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wj=vj,Sj=wj;function D1(){}function C1(){}C1.resetWarningCache=D1;var bj=function(){function e(r,i,s,o,a,l){if(l!==Sj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:C1,resetWarningCache:D1};return n.PropTypes=n,n};_1.exports=bj();var An=_1.exports,ea={},Xn={},E1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)t.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(E1);var vi=E1.exports;function C(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function J(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function $n(e,t){const n=C(e);return isNaN(t)?J(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function ta(e,t){const n=C(e);if(isNaN(t))return J(e,NaN);if(!t)return n;const r=n.getDate(),i=J(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const s=i.getDate();return r>=s?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}function ji(e,t){const{years:n=0,months:r=0,weeks:i=0,days:s=0,hours:o=0,minutes:a=0,seconds:l=0}=t,u=C(e),d=r||n?ta(u,r+n*12):u,f=s||i?$n(d,s+i*7):d,p=a+o*60,x=(l+p*60)*1e3;return J(e,f.getTime()+x)}function j1(e){return C(e).getDay()===6}function O1(e){return C(e).getDay()===0}function Xi(e){const t=C(e).getDay();return t===0||t===6}function P1(e,t){const n=C(e),r=Xi(n);if(isNaN(t))return J(e,NaN);const i=n.getHours(),s=t<0?-1:1,o=Math.trunc(t/5);n.setDate(n.getDate()+o*7);let a=Math.abs(t%5);for(;a>0;)n.setDate(n.getDate()+s),Xi(n)||(a-=1);return r&&Xi(n)&&t!==0&&(j1(n)&&n.setDate(n.getDate()+(s<0?2:-1)),O1(n)&&n.setDate(n.getDate()+(s<0?1:-2))),n.setHours(i),n}function na(e,t){const n=+C(e);return J(e,n+t)}const T1=7,Ul=365.2425,ra=6048e5,R1=864e5,Jn=6e4,wi=36e5,Kp=1e3,Um=525600,Ui=43200,Hl=1440,M1=60,N1=3,$1=12,I1=4,Fc=3600,Xp=60,Jp=Fc*24,kj=Jp*7,A1=Jp*Ul,F1=A1/12,_j=F1*3;function Zp(e,t){return na(e,t*wi)}let L1={};function wt(){return L1}function Dj(e){L1=e}function nt(e,t){var a,l,u,d;const n=wt(),r=(t==null?void 0:t.weekStartsOn)??((l=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,i=C(e),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function gn(e){return nt(e,{weekStartsOn:1})}function Pr(e){const t=C(e),n=t.getFullYear(),r=J(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=gn(r),s=J(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=gn(s);return t.getTime()>=i.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function hs(e){const t=C(e);return t.setHours(0,0,0,0),t}function Pt(e){const t=C(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Mn(e,t){const n=hs(e),r=hs(t),i=+n-Pt(n),s=+r-Pt(r);return Math.round((i-s)/R1)}function Tr(e){const t=Pr(e),n=J(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),gn(n)}function z1(e,t){let n=C(e);const r=Mn(n,Tr(n)),i=J(e,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),n=Tr(i),n.setDate(n.getDate()+r),n}function W1(e,t){return z1(e,Pr(e)+t)}function eh(e,t){return na(e,t*Jn)}function th(e,t){const n=t*3;return ta(e,n)}function B1(e,t){return na(e,t*1e3)}function Lc(e,t){const n=t*7;return $n(e,n)}function U1(e,t){return ta(e,t*12)}function Cj(e,t,n){const[r,i]=[+C(e.start),+C(e.end)].sort((a,l)=>a-l),[s,o]=[+C(t.start),+C(t.end)].sort((a,l)=>a-l);return n!=null&&n.inclusive?r<=o&&s<=i:r<o&&s<i}function H1(e){let t;return e.forEach(function(n){const r=C(n);(t===void 0||t<r||isNaN(Number(r)))&&(t=r)}),t||new Date(NaN)}function Y1(e){let t;return e.forEach(n=>{const r=C(n);(!t||t>r||isNaN(+r))&&(t=r)}),t||new Date(NaN)}function Ej(e,t){return Y1([H1([e,t.start]),t.end])}function jj(e,t){const n=C(e);if(isNaN(Number(n)))return NaN;const r=n.getTime();let i,s;return t.forEach(function(o,a){const l=C(o);if(isNaN(Number(l))){i=NaN,s=NaN;return}const u=Math.abs(r-l.getTime());(i==null||u<s)&&(i=a,s=u)}),i}function Oj(e,t){const n=C(e);if(isNaN(Number(n)))return J(e,NaN);const r=n.getTime();let i,s;return t.forEach(o=>{const a=C(o);if(isNaN(Number(a))){i=J(e,NaN),s=NaN;return}const l=Math.abs(r-a.getTime());(i==null||l<s)&&(i=a,s=l)}),i}function Nn(e,t){const n=C(e),r=C(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function Pj(e,t){const n=C(e),r=C(t),i=n.getTime()-r.getTime();return i>0?-1:i<0?1:i}function Tt(e){return J(e,Date.now())}function Tj(e){const t=e/T1,n=Math.trunc(t);return n===0?0:n}function ia(e,t){const n=hs(e),r=hs(t);return+n==+r}function q1(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Zn(e){if(!q1(e)&&typeof e!="number")return!1;const t=C(e);return!isNaN(Number(t))}function Rj(e,t){const n=C(e);let r=C(t);if(!Zn(n)||!Zn(r))return NaN;const i=Mn(n,r),s=i<0?-1:1,o=Math.trunc(i/7);let a=o*5;for(r=$n(r,o*7);!ia(n,r);)a+=Xi(r)?0:s,r=$n(r,s);return a===0?0:a}function V1(e,t){return Pr(e)-Pr(t)}function Mj(e,t){const n=gn(e),r=gn(t),i=+n-Pt(n),s=+r-Pt(r);return Math.round((i-s)/ra)}function Yl(e,t){const n=C(e),r=C(t),i=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return i*12+s}function wf(e){const t=C(e);return Math.trunc(t.getMonth()/3)+1}function al(e,t){const n=C(e),r=C(t),i=n.getFullYear()-r.getFullYear(),s=wf(n)-wf(r);return i*4+s}function ql(e,t,n){const r=nt(e,n),i=nt(t,n),s=+r-Pt(r),o=+i-Pt(i);return Math.round((s-o)/ra)}function fo(e,t){const n=C(e),r=C(t);return n.getFullYear()-r.getFullYear()}function nh(e,t){const n=C(e),r=C(t),i=Hm(n,r),s=Math.abs(Mn(n,r));n.setDate(n.getDate()-i*s);const o=+(Hm(n,r)===-i),a=i*(s-o);return a===0?0:a}function Hm(e,t){const n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function Ar(e){return t=>{const r=(e?Math[e]:Math.trunc)(t);return r===0?0:r}}function zc(e,t){return+C(e)-+C(t)}function Vl(e,t,n){const r=zc(e,t)/wi;return Ar(n==null?void 0:n.roundingMethod)(r)}function G1(e,t){return W1(e,-t)}function Nj(e,t){let n=C(e);const r=C(t),i=Nn(n,r),s=Math.abs(V1(n,r));n=G1(n,i*s);const o=+(Nn(n,r)===-i),a=i*(s-o);return a===0?0:a}function Gl(e,t,n){const r=zc(e,t)/Jn;return Ar(n==null?void 0:n.roundingMethod)(r)}function rh(e){const t=C(e);return t.setHours(23,59,59,999),t}function ih(e){const t=C(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Q1(e){const t=C(e);return+rh(t)==+ih(t)}function Wc(e,t){const n=C(e),r=C(t),i=Nn(n,r),s=Math.abs(Yl(n,r));let o;if(s<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*s);let a=Nn(n,r)===-i;Q1(C(e))&&s===1&&Nn(e,r)===1&&(a=!1),o=i*(s-Number(a))}return o===0?0:o}function $j(e,t,n){const r=Wc(e,t)/3;return Ar(n==null?void 0:n.roundingMethod)(r)}function Ji(e,t,n){const r=zc(e,t)/1e3;return Ar(n==null?void 0:n.roundingMethod)(r)}function Ij(e,t,n){const r=nh(e,t)/7;return Ar(n==null?void 0:n.roundingMethod)(r)}function K1(e,t){const n=C(e),r=C(t),i=Nn(n,r),s=Math.abs(fo(n,r));n.setFullYear(1584),r.setFullYear(1584);const o=Nn(n,r)===-i,a=i*(s-+o);return a===0?0:a}function X1(e,t){const n=C(e.start),r=C(e.end);let i=+n>+r;const s=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,i=!i);const l=[];for(;+o<=s;)l.push(C(o)),o.setDate(o.getDate()+a),o.setHours(0,0,0,0);return i?l.reverse():l}function Aj(e,t){const n=C(e.start),r=C(e.end);let i=+n>+r;const s=i?+n:+r;let o=i?r:n;o.setMinutes(0,0,0);let a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,i=!i);const l=[];for(;+o<=s;)l.push(C(o)),o=Zp(o,a);return i?l.reverse():l}function Ql(e){const t=C(e);return t.setSeconds(0,0),t}function Fj(e,t){const n=Ql(C(e.start)),r=C(e.end);let i=+n>+r;const s=i?+n:+r;let o=i?r:n,a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,i=!i);const l=[];for(;+o<=s;)l.push(C(o)),o=eh(o,a);return i?l.reverse():l}function Lj(e,t){const n=C(e.start),r=C(e.end);let i=+n>+r;const s=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0),o.setDate(1);let a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,i=!i);const l=[];for(;+o<=s;)l.push(C(o)),o.setMonth(o.getMonth()+a);return i?l.reverse():l}function ri(e){const t=C(e),n=t.getMonth(),r=n-n%3;return t.setMonth(r,1),t.setHours(0,0,0,0),t}function zj(e,t){const n=C(e.start),r=C(e.end);let i=+n>+r;const s=i?+ri(n):+ri(r);let o=ri(i?r:n),a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,i=!i);const l=[];for(;+o<=s;)l.push(C(o)),o=th(o,a);return i?l.reverse():l}function Wj(e,t){const n=C(e.start),r=C(e.end);let i=+n>+r;const s=nt(i?r:n,t),o=nt(i?n:r,t);s.setHours(15),o.setHours(15);const a=+o.getTime();let l=s,u=(t==null?void 0:t.step)??1;if(!u)return[];u<0&&(u=-u,i=!i);const d=[];for(;+l<=a;)l.setHours(0),d.push(C(l)),l=Lc(l,u),l.setHours(15);return i?d.reverse():d}function sh(e){const t=X1(e),n=[];let r=0;for(;r<t.length;){const i=t[r++];Xi(i)&&n.push(i)}return n}function Bc(e){const t=C(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Bj(e){const t=Bc(e),n=ih(e);return sh({start:t,end:n})}function J1(e){const t=C(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}function oh(e){const t=C(e),n=J(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Uj(e){const t=oh(e),n=J1(e);return sh({start:t,end:n})}function Hj(e,t){const n=C(e.start),r=C(e.end);let i=+n>+r;const s=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0),o.setMonth(0,1);let a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,i=!i);const l=[];for(;+o<=s;)l.push(C(o)),o.setFullYear(o.getFullYear()+a);return i?l.reverse():l}function Yj(e){const t=C(e),n=t.getFullYear(),r=9+Math.floor(n/10)*10;return t.setFullYear(r,11,31),t.setHours(23,59,59,999),t}function qj(e){const t=C(e);return t.setMinutes(59,59,999),t}function Z1(e,t){var a,l,u,d;const n=wt(),r=(t==null?void 0:t.weekStartsOn)??((l=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,i=C(e),s=i.getDay(),o=(s<r?-7:0)+6-(s-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function Vj(e){return Z1(e,{weekStartsOn:1})}function Gj(e){const t=Pr(e),n=J(e,0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);const r=gn(n);return r.setMilliseconds(r.getMilliseconds()-1),r}function Qj(e){const t=C(e);return t.setSeconds(59,999),t}function Kj(e){const t=C(e),n=t.getMonth(),r=n-n%3+3;return t.setMonth(r,0),t.setHours(23,59,59,999),t}function Xj(e){const t=C(e);return t.setMilliseconds(999),t}function Jj(){return rh(Date.now())}function Zj(){const e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),i=new Date(0);return i.setFullYear(t,n,r+1),i.setHours(23,59,59,999),i}function eO(){const e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),i=new Date(0);return i.setFullYear(t,n,r-1),i.setHours(23,59,59,999),i}const tO={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},nO=(e,t,n)=>{let r;const i=tO[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Zi(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const rO={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},iO={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sO={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},oO={date:Zi({formats:rO,defaultWidth:"full"}),time:Zi({formats:iO,defaultWidth:"full"}),dateTime:Zi({formats:sO,defaultWidth:"full"})},aO={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lO=(e,t,n,r)=>aO[e];function En(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=e.formattingValues[a]||e.formattingValues[o]}else{const o=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[a]||e.values[o]}const s=e.argumentCallback?e.argumentCallback(t):t;return i[s]}}const cO={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},uO={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dO={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},fO={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},pO={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},hO={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gO=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},mO={ordinalNumber:gO,era:En({values:cO,defaultWidth:"wide"}),quarter:En({values:uO,defaultWidth:"wide",argumentCallback:e=>e-1}),month:En({values:dO,defaultWidth:"wide"}),day:En({values:fO,defaultWidth:"wide"}),dayPeriod:En({values:pO,defaultWidth:"wide",formattingValues:hO,defaultFormattingWidth:"wide"})};function jn(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;const o=s[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(a)?xO(a,f=>f.test(o)):yO(a,f=>f.test(o));let u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(o.length);return{value:u,rest:d}}}function yO(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function xO(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function ew(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],s=t.match(e.parsePattern);if(!s)return null;let o=e.valueCallback?e.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=t.slice(i.length);return{value:o,rest:a}}}const vO=/^(\d+)(th|st|nd|rd)?/i,wO=/\d+/i,SO={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bO={any:[/^b/i,/^(a|c)/i]},kO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_O={any:[/1/i,/2/i,/3/i,/4/i]},DO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},CO={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},EO={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},jO={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},OO={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},PO={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},TO={ordinalNumber:ew({matchPattern:vO,parsePattern:wO,valueCallback:e=>parseInt(e,10)}),era:jn({matchPatterns:SO,defaultMatchWidth:"wide",parsePatterns:bO,defaultParseWidth:"any"}),quarter:jn({matchPatterns:kO,defaultMatchWidth:"wide",parsePatterns:_O,defaultParseWidth:"any",valueCallback:e=>e+1}),month:jn({matchPatterns:DO,defaultMatchWidth:"wide",parsePatterns:CO,defaultParseWidth:"any"}),day:jn({matchPatterns:EO,defaultMatchWidth:"wide",parsePatterns:jO,defaultParseWidth:"any"}),dayPeriod:jn({matchPatterns:OO,defaultMatchWidth:"any",parsePatterns:PO,defaultParseWidth:"any"})},Ds={code:"en-US",formatDistance:nO,formatLong:oO,formatRelative:lO,localize:mO,match:TO,options:{weekStartsOn:0,firstWeekContainsDate:1}};function tw(e){const t=C(e);return Mn(t,oh(t))+1}function ah(e){const t=C(e),n=+gn(t)-+Tr(t);return Math.round(n/ra)+1}function Uc(e,t){var d,f,p,g;const n=C(e),r=n.getFullYear(),i=wt(),s=(t==null?void 0:t.firstWeekContainsDate)??((f=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((g=(p=i.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,o=J(e,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const a=nt(o,t),l=J(e,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const u=nt(l,t);return n.getTime()>=a.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function Kl(e,t){var a,l,u,d;const n=wt(),r=(t==null?void 0:t.firstWeekContainsDate)??((l=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,i=Uc(e,t),s=J(e,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),nt(s,t)}function lh(e,t){const n=C(e),r=+nt(n,t)-+Kl(n,t);return Math.round(r/ra)+1}function V(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const kn={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return V(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):V(n+1,2)},d(e,t){return V(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return V(e.getHours()%12||12,t.length)},H(e,t){return V(e.getHours(),t.length)},m(e,t){return V(e.getMinutes(),t.length)},s(e,t){return V(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return V(i,t.length)}},Di={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Sf={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return kn.y(e,t)},Y:function(e,t,n,r){const i=Uc(e,r),s=i>0?i:1-i;if(t==="YY"){const o=s%100;return V(o,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):V(s,t.length)},R:function(e,t){const n=Pr(e);return V(n,t.length)},u:function(e,t){const n=e.getFullYear();return V(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return V(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return V(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return kn.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return V(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=lh(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):V(i,t.length)},I:function(e,t,n){const r=ah(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):V(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):kn.d(e,t)},D:function(e,t,n){const r=tw(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):V(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return V(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return V(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return V(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=Di.noon:r===0?i=Di.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=Di.evening:r>=12?i=Di.afternoon:r>=4?i=Di.morning:i=Di.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return kn.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):kn.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):V(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):V(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):kn.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):kn.s(e,t)},S:function(e,t){return kn.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return qm(r);case"XXXX":case"XX":return Kr(r);case"XXXXX":case"XXX":default:return Kr(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return qm(r);case"xxxx":case"xx":return Kr(r);case"xxxxx":case"xxx":default:return Kr(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ym(r,":");case"OOOO":default:return"GMT"+Kr(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ym(r,":");case"zzzz":default:return"GMT"+Kr(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return V(r,t.length)},T:function(e,t,n){const r=e.getTime();return V(r,t.length)}};function Ym(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+t+V(s,2)}function qm(e,t){return e%60===0?(e>0?"-":"+")+V(Math.abs(e)/60,2):Kr(e,t)}function Kr(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=V(Math.trunc(r/60),2),s=V(r%60,2);return n+i+t+s}const Vm=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},nw=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},RO=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Vm(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",Vm(r,t)).replace("{{time}}",nw(i,t))},Xl={p:nw,P:RO},MO=/^D+$/,NO=/^Y+$/,$O=["D","DD","YY","YYYY"];function rw(e){return MO.test(e)}function iw(e){return NO.test(e)}function bf(e,t,n){const r=IO(e,t,n);if(console.warn(r),$O.includes(e))throw new RangeError(r)}function IO(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const AO=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,FO=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,LO=/^'([^]*?)'?$/,zO=/''/g,WO=/[a-zA-Z]/;function Io(e,t,n){var d,f,p,g,x,y,S,v;const r=wt(),i=(n==null?void 0:n.locale)??r.locale??Ds,s=(n==null?void 0:n.firstWeekContainsDate)??((f=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(p=r.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((y=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:y.weekStartsOn)??r.weekStartsOn??((v=(S=r.locale)==null?void 0:S.options)==null?void 0:v.weekStartsOn)??0,a=C(e);if(!Zn(a))throw new RangeError("Invalid time value");let l=t.match(FO).map(m=>{const w=m[0];if(w==="p"||w==="P"){const k=Xl[w];return k(m,i.formatLong)}return m}).join("").match(AO).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const w=m[0];if(w==="'")return{isToken:!1,value:BO(m)};if(Sf[w])return{isToken:!0,value:m};if(w.match(WO))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:m}});i.localize.preprocessor&&(l=i.localize.preprocessor(a,l));const u={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return l.map(m=>{if(!m.isToken)return m.value;const w=m.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&iw(w)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&rw(w))&&bf(w,t,String(e));const k=Sf[w[0]];return k(a,w,i.localize,u)}).join("")}function BO(e){const t=e.match(LO);return t?t[1].replace(zO,"'"):e}function ch(e,t,n){const r=wt(),i=(n==null?void 0:n.locale)??r.locale??Ds,s=2520,o=Nn(e,t);if(isNaN(o))throw new RangeError("Invalid time value");const a=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:o});let l,u;o>0?(l=C(t),u=C(e)):(l=C(e),u=C(t));const d=Ji(u,l),f=(Pt(u)-Pt(l))/1e3,p=Math.round((d-f)/60);let g;if(p<2)return n!=null&&n.includeSeconds?d<5?i.formatDistance("lessThanXSeconds",5,a):d<10?i.formatDistance("lessThanXSeconds",10,a):d<20?i.formatDistance("lessThanXSeconds",20,a):d<40?i.formatDistance("halfAMinute",0,a):d<60?i.formatDistance("lessThanXMinutes",1,a):i.formatDistance("xMinutes",1,a):p===0?i.formatDistance("lessThanXMinutes",1,a):i.formatDistance("xMinutes",p,a);if(p<45)return i.formatDistance("xMinutes",p,a);if(p<90)return i.formatDistance("aboutXHours",1,a);if(p<Hl){const x=Math.round(p/60);return i.formatDistance("aboutXHours",x,a)}else{if(p<s)return i.formatDistance("xDays",1,a);if(p<Ui){const x=Math.round(p/Hl);return i.formatDistance("xDays",x,a)}else if(p<Ui*2)return g=Math.round(p/Ui),i.formatDistance("aboutXMonths",g,a)}if(g=Wc(u,l),g<12){const x=Math.round(p/Ui);return i.formatDistance("xMonths",x,a)}else{const x=g%12,y=Math.trunc(g/12);return x<3?i.formatDistance("aboutXYears",y,a):x<9?i.formatDistance("overXYears",y,a):i.formatDistance("almostXYears",y+1,a)}}function sw(e,t,n){const r=wt(),i=(n==null?void 0:n.locale)??r.locale??Ds,s=Nn(e,t);if(isNaN(s))throw new RangeError("Invalid time value");const o=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:s});let a,l;s>0?(a=C(t),l=C(e)):(a=C(e),l=C(t));const u=Ar((n==null?void 0:n.roundingMethod)??"round"),d=l.getTime()-a.getTime(),f=d/Jn,p=Pt(l)-Pt(a),g=(d-p)/Jn,x=n==null?void 0:n.unit;let y;if(x?y=x:f<1?y="second":f<60?y="minute":f<Hl?y="hour":g<Ui?y="day":g<Um?y="month":y="year",y==="second"){const S=u(d/1e3);return i.formatDistance("xSeconds",S,o)}else if(y==="minute"){const S=u(f);return i.formatDistance("xMinutes",S,o)}else if(y==="hour"){const S=u(f/60);return i.formatDistance("xHours",S,o)}else if(y==="day"){const S=u(g/Hl);return i.formatDistance("xDays",S,o)}else if(y==="month"){const S=u(g/Ui);return S===12&&x!=="month"?i.formatDistance("xYears",1,o):i.formatDistance("xMonths",S,o)}else{const S=u(g/Um);return i.formatDistance("xYears",S,o)}}function UO(e,t){return ch(e,Tt(e),t)}function HO(e,t){return sw(e,Tt(e),t)}const YO=["years","months","weeks","days","hours","minutes","seconds"];function qO(e,t){const n=wt(),r=(t==null?void 0:t.locale)??n.locale??Ds,i=(t==null?void 0:t.format)??YO,s=(t==null?void 0:t.zero)??!1,o=(t==null?void 0:t.delimiter)??" ";return r.formatDistance?i.reduce((l,u)=>{const d=`x${u.replace(/(^.)/,p=>p.toUpperCase())}`,f=e[u];return f!==void 0&&(s||e[u])?l.concat(r.formatDistance(d,f)):l},[]).join(o):""}function VO(e,t){const n=C(e);if(isNaN(n.getTime()))throw new RangeError("Invalid time value");const r=(t==null?void 0:t.format)??"extended",i=(t==null?void 0:t.representation)??"complete";let s="",o="";const a=r==="extended"?"-":"",l=r==="extended"?":":"";if(i!=="time"){const u=V(n.getDate(),2),d=V(n.getMonth()+1,2);s=`${V(n.getFullYear(),4)}${a}${d}${a}${u}`}if(i!=="date"){const u=n.getTimezoneOffset();if(u!==0){const y=Math.abs(u),S=V(Math.trunc(y/60),2),v=V(y%60,2);o=`${u<0?"+":"-"}${S}:${v}`}else o="Z";const d=V(n.getHours(),2),f=V(n.getMinutes(),2),p=V(n.getSeconds(),2),g=s===""?"":"T",x=[d,f,p].join(l);s=`${s}${g}${x}${o}`}return s}function GO(e,t){const n=C(e);if(!Zn(n))throw new RangeError("Invalid time value");const r=(t==null?void 0:t.format)??"extended",i=(t==null?void 0:t.representation)??"complete";let s="";const o=r==="extended"?"-":"",a=r==="extended"?":":"";if(i!=="time"){const l=V(n.getDate(),2),u=V(n.getMonth()+1,2);s=`${V(n.getFullYear(),4)}${o}${u}${o}${l}`}if(i!=="date"){const l=V(n.getHours(),2),u=V(n.getMinutes(),2),d=V(n.getSeconds(),2);s=`${s}${s===""?"":" "}${l}${a}${u}${a}${d}`}return s}function QO(e){const{years:t=0,months:n=0,days:r=0,hours:i=0,minutes:s=0,seconds:o=0}=e;return`P${t}Y${n}M${r}DT${i}H${s}M${o}S`}function KO(e,t){const n=C(e);if(!Zn(n))throw new RangeError("Invalid time value");const r=(t==null?void 0:t.fractionDigits)??0,i=V(n.getDate(),2),s=V(n.getMonth()+1,2),o=n.getFullYear(),a=V(n.getHours(),2),l=V(n.getMinutes(),2),u=V(n.getSeconds(),2);let d="";if(r>0){const g=n.getMilliseconds(),x=Math.trunc(g*Math.pow(10,r-3));d="."+V(x,r)}let f="";const p=n.getTimezoneOffset();if(p!==0){const g=Math.abs(p),x=V(Math.trunc(g/60),2),y=V(g%60,2);f=`${p<0?"+":"-"}${x}:${y}`}else f="Z";return`${o}-${s}-${i}T${a}:${l}:${u}${d}${f}`}const XO=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],JO=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ZO(e){const t=C(e);if(!Zn(t))throw new RangeError("Invalid time value");const n=XO[t.getUTCDay()],r=V(t.getUTCDate(),2),i=JO[t.getUTCMonth()],s=t.getUTCFullYear(),o=V(t.getUTCHours(),2),a=V(t.getUTCMinutes(),2),l=V(t.getUTCSeconds(),2);return`${n}, ${r} ${i} ${s} ${o}:${a}:${l} GMT`}function eP(e,t,n){var f,p,g,x;const r=C(e),i=C(t),s=wt(),o=(n==null?void 0:n.locale)??s.locale??Ds,a=(n==null?void 0:n.weekStartsOn)??((p=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:p.weekStartsOn)??s.weekStartsOn??((x=(g=s.locale)==null?void 0:g.options)==null?void 0:x.weekStartsOn)??0,l=Mn(r,i);if(isNaN(l))throw new RangeError("Invalid time value");let u;l<-6?u="other":l<-1?u="lastWeek":l<0?u="yesterday":l<1?u="today":l<2?u="tomorrow":l<7?u="nextWeek":u="other";const d=o.formatRelative(u,r,i,{locale:o,weekStartsOn:a});return Io(r,d,{locale:o,weekStartsOn:a})}function tP(e){return C(e*1e3)}function ow(e){return C(e).getDate()}function Hc(e){return C(e).getDay()}function aw(e){const t=C(e),n=t.getFullYear(),r=t.getMonth(),i=J(e,0);return i.setFullYear(n,r+1,0),i.setHours(0,0,0,0),i.getDate()}function lw(e){const n=C(e).getFullYear();return n%400===0||n%4===0&&n%100!==0}function nP(e){const t=C(e);return String(new Date(t))==="Invalid Date"?NaN:lw(t)?366:365}function rP(e){const n=C(e).getFullYear();return Math.floor(n/10)*10}function cw(){return Object.assign({},wt())}function iP(e){return C(e).getHours()}function uw(e){let n=C(e).getDay();return n===0&&(n=7),n}function sP(e){const t=Tr(e),r=+Tr(Lc(t,60))-+t;return Math.round(r/ra)}function oP(e){return C(e).getMilliseconds()}function aP(e){return C(e).getMinutes()}function lP(e){return C(e).getMonth()}function cP(e,t){const[n,r]=[+C(e.start),+C(e.end)].sort((f,p)=>f-p),[i,s]=[+C(t.start),+C(t.end)].sort((f,p)=>f-p);if(!(n<s&&i<r))return 0;const a=i<n?n:i,l=a-Pt(a),u=s>r?r:s,d=u-Pt(u);return Math.ceil((d-l)/R1)}function uP(e){return C(e).getSeconds()}function dP(e){return C(e).getTime()}function fP(e){return Math.trunc(+C(e)/1e3)}function pP(e,t){var l,u,d,f;const n=wt(),r=(t==null?void 0:t.weekStartsOn)??((u=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(d=n.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,i=ow(e);if(isNaN(i))return NaN;const s=Hc(Bc(e));let o=r-s;o<=0&&(o+=7);const a=i-o;return Math.ceil(a/7)+1}function dw(e){const t=C(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function hP(e,t){return ql(dw(e),Bc(e),t)+1}function gP(e){return C(e).getFullYear()}function mP(e){return Math.trunc(e*wi)}function yP(e){return Math.trunc(e*M1)}function xP(e){return Math.trunc(e*Fc)}function vP(e,t,n){const r=C(e);if(isNaN(+r))throw new TypeError("Start date is invalid");const i=C(t);if(isNaN(+i))throw new TypeError("End date is invalid");if(n!=null&&n.assertPositive&&+r>+i)throw new TypeError("End date must be after start date");return{start:r,end:i}}function wP(e){const t=C(e.start),n=C(e.end),r={},i=K1(n,t);i&&(r.years=i);const s=ji(t,{years:r.years}),o=Wc(n,s);o&&(r.months=o);const a=ji(s,{months:r.months}),l=nh(n,a);l&&(r.days=l);const u=ji(a,{days:r.days}),d=Vl(n,u);d&&(r.hours=d);const f=ji(u,{hours:r.hours}),p=Gl(n,f);p&&(r.minutes=p);const g=ji(f,{minutes:r.minutes}),x=Ji(n,g);return x&&(r.seconds=x),r}function SP(e,t,n){let r;return bP(t)?r=t:n=t,new Intl.DateTimeFormat(n==null?void 0:n.locale,r).format(C(e))}function bP(e){return e!==void 0&&!("locale"in e)}function kP(e,t,n){let r=0,i;const s=C(e),o=C(t);if(n!=null&&n.unit)i=n==null?void 0:n.unit,i==="second"?r=Ji(s,o):i==="minute"?r=Gl(s,o):i==="hour"?r=Vl(s,o):i==="day"?r=Mn(s,o):i==="week"?r=ql(s,o):i==="month"?r=Yl(s,o):i==="quarter"?r=al(s,o):i==="year"&&(r=fo(s,o));else{const l=Ji(s,o);Math.abs(l)<Xp?(r=Ji(s,o),i="second"):Math.abs(l)<Fc?(r=Gl(s,o),i="minute"):Math.abs(l)<Jp&&Math.abs(Mn(s,o))<1?(r=Vl(s,o),i="hour"):Math.abs(l)<kj&&(r=Mn(s,o))&&Math.abs(r)<7?i="day":Math.abs(l)<F1?(r=ql(s,o),i="week"):Math.abs(l)<_j?(r=Yl(s,o),i="month"):Math.abs(l)<A1&&al(s,o)<4?(r=al(s,o),i="quarter"):(r=fo(s,o),i="year")}return new Intl.RelativeTimeFormat(n==null?void 0:n.locale,{localeMatcher:n==null?void 0:n.localeMatcher,numeric:(n==null?void 0:n.numeric)||"auto",style:n==null?void 0:n.style}).format(r,i)}function _P(e,t){const n=C(e),r=C(t);return n.getTime()>r.getTime()}function DP(e,t){const n=C(e),r=C(t);return+n<+r}function CP(e,t){const n=C(e),r=C(t);return+n==+r}function EP(e,t,n){const r=new Date(e,t,n);return r.getFullYear()===e&&r.getMonth()===t&&r.getDate()===n}function jP(e){return C(e).getDate()===1}function OP(e){return C(e).getDay()===5}function PP(e){return+C(e)>Date.now()}function fw(e,t){const n=t instanceof Date?J(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const TP=10;class pw{constructor(){W(this,"subPriority",0)}validate(t,n){return!0}}class RP extends pw{constructor(t,n,r,i,s){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=i,s&&(this.subPriority=s)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class MP extends pw{constructor(){super(...arguments);W(this,"priority",TP);W(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:J(n,fw(n,Date))}}class fe{run(t,n,r,i){const s=this.parse(t,n,r,i);return s?{setter:new RP(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(t,n,r){return!0}}class NP extends fe{constructor(){super(...arguments);W(this,"priority",140);W(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,i){switch(r){case"G":case"GG":case"GGG":return i.era(n,{width:"abbreviated"})||i.era(n,{width:"narrow"});case"GGGGG":return i.era(n,{width:"narrow"});case"GGGG":default:return i.era(n,{width:"wide"})||i.era(n,{width:"abbreviated"})||i.era(n,{width:"narrow"})}}set(n,r,i){return r.era=i,n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}}const Le={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},On={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function ze(e,t){return e&&{value:t(e.value),rest:e.rest}}function Re(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function Pn(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,i=n[2]?parseInt(n[2],10):0,s=n[3]?parseInt(n[3],10):0,o=n[5]?parseInt(n[5],10):0;return{value:r*(i*wi+s*Jn+o*Kp),rest:t.slice(n[0].length)}}function hw(e){return Re(Le.anyDigitsSigned,e)}function Ae(e,t){switch(e){case 1:return Re(Le.singleDigit,t);case 2:return Re(Le.twoDigits,t);case 3:return Re(Le.threeDigits,t);case 4:return Re(Le.fourDigits,t);default:return Re(new RegExp("^\\d{1,"+e+"}"),t)}}function Jl(e,t){switch(e){case 1:return Re(Le.singleDigitSigned,t);case 2:return Re(Le.twoDigitsSigned,t);case 3:return Re(Le.threeDigitsSigned,t);case 4:return Re(Le.fourDigitsSigned,t);default:return Re(new RegExp("^-?\\d{1,"+e+"}"),t)}}function uh(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function gw(e,t){const n=t>0,r=n?t:1-t;let i;if(r<=50)i=e||100;else{const s=r+50,o=Math.trunc(s/100)*100,a=e>=s%100;i=e+o-(a?100:0)}return n?i:1-i}function mw(e){return e%400===0||e%4===0&&e%100!==0}class $P extends fe{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,i){const s=o=>({year:o,isTwoDigitYear:r==="yy"});switch(r){case"y":return ze(Ae(4,n),s);case"yo":return ze(i.ordinalNumber(n,{unit:"year"}),s);default:return ze(Ae(r.length,n),s)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,i){const s=n.getFullYear();if(i.isTwoDigitYear){const a=gw(i.year,s);return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}const o=!("era"in r)||r.era===1?i.year:1-i.year;return n.setFullYear(o,0,1),n.setHours(0,0,0,0),n}}class IP extends fe{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,i){const s=o=>({year:o,isTwoDigitYear:r==="YY"});switch(r){case"Y":return ze(Ae(4,n),s);case"Yo":return ze(i.ordinalNumber(n,{unit:"year"}),s);default:return ze(Ae(r.length,n),s)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,i,s){const o=Uc(n,s);if(i.isTwoDigitYear){const l=gw(i.year,o);return n.setFullYear(l,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),nt(n,s)}const a=!("era"in r)||r.era===1?i.year:1-i.year;return n.setFullYear(a,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),nt(n,s)}}class AP extends fe{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return Jl(r==="R"?4:r.length,n)}set(n,r,i){const s=J(n,0);return s.setFullYear(i,0,4),s.setHours(0,0,0,0),gn(s)}}class FP extends fe{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return Jl(r==="u"?4:r.length,n)}set(n,r,i){return n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}}class LP extends fe{constructor(){super(...arguments);W(this,"priority",120);W(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"Q":case"QQ":return Ae(r.length,n);case"Qo":return i.ordinalNumber(n,{unit:"quarter"});case"QQQ":return i.quarter(n,{width:"abbreviated",context:"formatting"})||i.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(n,{width:"wide",context:"formatting"})||i.quarter(n,{width:"abbreviated",context:"formatting"})||i.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,i){return n.setMonth((i-1)*3,1),n.setHours(0,0,0,0),n}}class zP extends fe{constructor(){super(...arguments);W(this,"priority",120);W(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"q":case"qq":return Ae(r.length,n);case"qo":return i.ordinalNumber(n,{unit:"quarter"});case"qqq":return i.quarter(n,{width:"abbreviated",context:"standalone"})||i.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(n,{width:"wide",context:"standalone"})||i.quarter(n,{width:"abbreviated",context:"standalone"})||i.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,i){return n.setMonth((i-1)*3,1),n.setHours(0,0,0,0),n}}class WP extends fe{constructor(){super(...arguments);W(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);W(this,"priority",110)}parse(n,r,i){const s=o=>o-1;switch(r){case"M":return ze(Re(Le.month,n),s);case"MM":return ze(Ae(2,n),s);case"Mo":return ze(i.ordinalNumber(n,{unit:"month"}),s);case"MMM":return i.month(n,{width:"abbreviated",context:"formatting"})||i.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(n,{width:"wide",context:"formatting"})||i.month(n,{width:"abbreviated",context:"formatting"})||i.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,i){return n.setMonth(i,1),n.setHours(0,0,0,0),n}}class BP extends fe{constructor(){super(...arguments);W(this,"priority",110);W(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,i){const s=o=>o-1;switch(r){case"L":return ze(Re(Le.month,n),s);case"LL":return ze(Ae(2,n),s);case"Lo":return ze(i.ordinalNumber(n,{unit:"month"}),s);case"LLL":return i.month(n,{width:"abbreviated",context:"standalone"})||i.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(n,{width:"wide",context:"standalone"})||i.month(n,{width:"abbreviated",context:"standalone"})||i.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,i){return n.setMonth(i,1),n.setHours(0,0,0,0),n}}function yw(e,t,n){const r=C(e),i=lh(r,n)-t;return r.setDate(r.getDate()-i*7),r}class UP extends fe{constructor(){super(...arguments);W(this,"priority",100);W(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,i){switch(r){case"w":return Re(Le.week,n);case"wo":return i.ordinalNumber(n,{unit:"week"});default:return Ae(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,i,s){return nt(yw(n,i,s),s)}}function xw(e,t){const n=C(e),r=ah(n)-t;return n.setDate(n.getDate()-r*7),n}class HP extends fe{constructor(){super(...arguments);W(this,"priority",100);W(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,i){switch(r){case"I":return Re(Le.week,n);case"Io":return i.ordinalNumber(n,{unit:"week"});default:return Ae(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,i){return gn(xw(n,i))}}const YP=[31,28,31,30,31,30,31,31,30,31,30,31],qP=[31,29,31,30,31,30,31,31,30,31,30,31];class VP extends fe{constructor(){super(...arguments);W(this,"priority",90);W(this,"subPriority",1);W(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"d":return Re(Le.date,n);case"do":return i.ordinalNumber(n,{unit:"date"});default:return Ae(r.length,n)}}validate(n,r){const i=n.getFullYear(),s=mw(i),o=n.getMonth();return s?r>=1&&r<=qP[o]:r>=1&&r<=YP[o]}set(n,r,i){return n.setDate(i),n.setHours(0,0,0,0),n}}class GP extends fe{constructor(){super(...arguments);W(this,"priority",90);W(this,"subpriority",1);W(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,i){switch(r){case"D":case"DD":return Re(Le.dayOfYear,n);case"Do":return i.ordinalNumber(n,{unit:"date"});default:return Ae(r.length,n)}}validate(n,r){const i=n.getFullYear();return mw(i)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,i){return n.setMonth(0,i),n.setHours(0,0,0,0),n}}function Yc(e,t,n){var f,p,g,x;const r=wt(),i=(n==null?void 0:n.weekStartsOn)??((p=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:p.weekStartsOn)??r.weekStartsOn??((x=(g=r.locale)==null?void 0:g.options)==null?void 0:x.weekStartsOn)??0,s=C(e),o=s.getDay(),l=(t%7+7)%7,u=7-i,d=t<0||t>6?t-(o+u)%7:(l+u)%7-(o+u)%7;return $n(s,d)}class QP extends fe{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"E":case"EE":case"EEE":return i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(n,{width:"wide",context:"formatting"})||i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,i,s){return n=Yc(n,i,s),n.setHours(0,0,0,0),n}}class KP extends fe{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,i,s){const o=a=>{const l=Math.floor((a-1)/7)*7;return(a+s.weekStartsOn+6)%7+l};switch(r){case"e":case"ee":return ze(Ae(r.length,n),o);case"eo":return ze(i.ordinalNumber(n,{unit:"day"}),o);case"eee":return i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"eeeee":return i.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(n,{width:"wide",context:"formatting"})||i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,i,s){return n=Yc(n,i,s),n.setHours(0,0,0,0),n}}class XP extends fe{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,i,s){const o=a=>{const l=Math.floor((a-1)/7)*7;return(a+s.weekStartsOn+6)%7+l};switch(r){case"c":case"cc":return ze(Ae(r.length,n),o);case"co":return ze(i.ordinalNumber(n,{unit:"day"}),o);case"ccc":return i.day(n,{width:"abbreviated",context:"standalone"})||i.day(n,{width:"short",context:"standalone"})||i.day(n,{width:"narrow",context:"standalone"});case"ccccc":return i.day(n,{width:"narrow",context:"standalone"});case"cccccc":return i.day(n,{width:"short",context:"standalone"})||i.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(n,{width:"wide",context:"standalone"})||i.day(n,{width:"abbreviated",context:"standalone"})||i.day(n,{width:"short",context:"standalone"})||i.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,i,s){return n=Yc(n,i,s),n.setHours(0,0,0,0),n}}function vw(e,t){const n=C(e),r=uw(n),i=t-r;return $n(n,i)}class JP extends fe{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,i){const s=o=>o===0?7:o;switch(r){case"i":case"ii":return Ae(r.length,n);case"io":return i.ordinalNumber(n,{unit:"day"});case"iii":return ze(i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"}),s);case"iiiii":return ze(i.day(n,{width:"narrow",context:"formatting"}),s);case"iiiiii":return ze(i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"}),s);case"iiii":default:return ze(i.day(n,{width:"wide",context:"formatting"})||i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"}),s)}}validate(n,r){return r>=1&&r<=7}set(n,r,i){return n=vw(n,i),n.setHours(0,0,0,0),n}}class ZP extends fe{constructor(){super(...arguments);W(this,"priority",80);W(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,i){switch(r){case"a":case"aa":case"aaa":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})||i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,i){return n.setHours(uh(i),0,0,0),n}}class eT extends fe{constructor(){super(...arguments);W(this,"priority",80);W(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,i){switch(r){case"b":case"bb":case"bbb":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})||i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,i){return n.setHours(uh(i),0,0,0),n}}class tT extends fe{constructor(){super(...arguments);W(this,"priority",80);W(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,i){switch(r){case"B":case"BB":case"BBB":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})||i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,i){return n.setHours(uh(i),0,0,0),n}}class nT extends fe{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,i){switch(r){case"h":return Re(Le.hour12h,n);case"ho":return i.ordinalNumber(n,{unit:"hour"});default:return Ae(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,i){const s=n.getHours()>=12;return s&&i<12?n.setHours(i+12,0,0,0):!s&&i===12?n.setHours(0,0,0,0):n.setHours(i,0,0,0),n}}class rT extends fe{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,i){switch(r){case"H":return Re(Le.hour23h,n);case"Ho":return i.ordinalNumber(n,{unit:"hour"});default:return Ae(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,i){return n.setHours(i,0,0,0),n}}class iT extends fe{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,i){switch(r){case"K":return Re(Le.hour11h,n);case"Ko":return i.ordinalNumber(n,{unit:"hour"});default:return Ae(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,i){return n.getHours()>=12&&i<12?n.setHours(i+12,0,0,0):n.setHours(i,0,0,0),n}}class sT extends fe{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,i){switch(r){case"k":return Re(Le.hour24h,n);case"ko":return i.ordinalNumber(n,{unit:"hour"});default:return Ae(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,i){const s=i<=24?i%24:i;return n.setHours(s,0,0,0),n}}class oT extends fe{constructor(){super(...arguments);W(this,"priority",60);W(this,"incompatibleTokens",["t","T"])}parse(n,r,i){switch(r){case"m":return Re(Le.minute,n);case"mo":return i.ordinalNumber(n,{unit:"minute"});default:return Ae(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,i){return n.setMinutes(i,0,0),n}}class aT extends fe{constructor(){super(...arguments);W(this,"priority",50);W(this,"incompatibleTokens",["t","T"])}parse(n,r,i){switch(r){case"s":return Re(Le.second,n);case"so":return i.ordinalNumber(n,{unit:"second"});default:return Ae(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,i){return n.setSeconds(i,0),n}}class lT extends fe{constructor(){super(...arguments);W(this,"priority",30);W(this,"incompatibleTokens",["t","T"])}parse(n,r){const i=s=>Math.trunc(s*Math.pow(10,-r.length+3));return ze(Ae(r.length,n),i)}set(n,r,i){return n.setMilliseconds(i),n}}class cT extends fe{constructor(){super(...arguments);W(this,"priority",10);W(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return Pn(On.basicOptionalMinutes,n);case"XX":return Pn(On.basic,n);case"XXXX":return Pn(On.basicOptionalSeconds,n);case"XXXXX":return Pn(On.extendedOptionalSeconds,n);case"XXX":default:return Pn(On.extended,n)}}set(n,r,i){return r.timestampIsSet?n:J(n,n.getTime()-Pt(n)-i)}}class uT extends fe{constructor(){super(...arguments);W(this,"priority",10);W(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return Pn(On.basicOptionalMinutes,n);case"xx":return Pn(On.basic,n);case"xxxx":return Pn(On.basicOptionalSeconds,n);case"xxxxx":return Pn(On.extendedOptionalSeconds,n);case"xxx":default:return Pn(On.extended,n)}}set(n,r,i){return r.timestampIsSet?n:J(n,n.getTime()-Pt(n)-i)}}class dT extends fe{constructor(){super(...arguments);W(this,"priority",40);W(this,"incompatibleTokens","*")}parse(n){return hw(n)}set(n,r,i){return[J(n,i*1e3),{timestampIsSet:!0}]}}class fT extends fe{constructor(){super(...arguments);W(this,"priority",20);W(this,"incompatibleTokens","*")}parse(n){return hw(n)}set(n,r,i){return[J(n,i),{timestampIsSet:!0}]}}const ww={G:new NP,y:new $P,Y:new IP,R:new AP,u:new FP,Q:new LP,q:new zP,M:new WP,L:new BP,w:new UP,I:new HP,d:new VP,D:new GP,E:new QP,e:new KP,c:new XP,i:new JP,a:new ZP,b:new eT,B:new tT,h:new nT,H:new rT,K:new iT,k:new sT,m:new oT,s:new aT,S:new lT,X:new cT,x:new uT,t:new dT,T:new fT},pT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,hT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,gT=/^'([^]*?)'?$/,mT=/''/g,yT=/\S/,xT=/[a-zA-Z]/;function Sw(e,t,n,r){var y,S,v,m,w,k,_,E;const i=cw(),s=(r==null?void 0:r.locale)??i.locale??Ds,o=(r==null?void 0:r.firstWeekContainsDate)??((S=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:S.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(v=i.locale)==null?void 0:v.options)==null?void 0:m.firstWeekContainsDate)??1,a=(r==null?void 0:r.weekStartsOn)??((k=(w=r==null?void 0:r.locale)==null?void 0:w.options)==null?void 0:k.weekStartsOn)??i.weekStartsOn??((E=(_=i.locale)==null?void 0:_.options)==null?void 0:E.weekStartsOn)??0;if(t==="")return e===""?C(n):J(n,NaN);const l={firstWeekContainsDate:o,weekStartsOn:a,locale:s},u=[new MP],d=t.match(hT).map(D=>{const O=D[0];if(O in Xl){const K=Xl[O];return K(D,s.formatLong)}return D}).join("").match(pT),f=[];for(let D of d){!(r!=null&&r.useAdditionalWeekYearTokens)&&iw(D)&&bf(D,t,e),!(r!=null&&r.useAdditionalDayOfYearTokens)&&rw(D)&&bf(D,t,e);const O=D[0],K=ww[O];if(K){const{incompatibleTokens:N}=K;if(Array.isArray(N)){const Z=f.find(Oe=>N.includes(Oe.token)||Oe.token===O);if(Z)throw new RangeError(`The format string mustn't contain \`${Z.fullToken}\` and \`${D}\` at the same time`)}else if(K.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${D}\` and any other token at the same time`);f.push({token:O,fullToken:D});const L=K.run(e,D,s.match,l);if(!L)return J(n,NaN);u.push(L.setter),e=L.rest}else{if(O.match(xT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(D==="''"?D="'":O==="'"&&(D=vT(D)),e.indexOf(D)===0)e=e.slice(D.length);else return J(n,NaN)}}if(e.length>0&&yT.test(e))return J(n,NaN);const p=u.map(D=>D.priority).sort((D,O)=>O-D).filter((D,O,K)=>K.indexOf(D)===O).map(D=>u.filter(O=>O.priority===D).sort((O,K)=>K.subPriority-O.subPriority)).map(D=>D[0]);let g=C(n);if(isNaN(g.getTime()))return J(n,NaN);const x={};for(const D of p){if(!D.validate(g,l))return J(n,NaN);const O=D.set(g,x,l);Array.isArray(O)?(g=O[0],Object.assign(x,O[1])):g=O}return J(n,g)}function vT(e){return e.match(gT)[1].replace(mT,"'")}function wT(e,t,n){return Zn(Sw(e,t,new Date,n))}function ST(e){return C(e).getDay()===1}function bT(e){return+C(e)<Date.now()}function kf(e){const t=C(e);return t.setMinutes(0,0,0),t}function bw(e,t){const n=kf(e),r=kf(t);return+n==+r}function Ao(e,t,n){const r=nt(e,n),i=nt(t,n);return+r==+i}function kw(e,t){return Ao(e,t,{weekStartsOn:1})}function kT(e,t){const n=Tr(e),r=Tr(t);return+n==+r}function _w(e,t){const n=Ql(e),r=Ql(t);return+n==+r}function Dw(e,t){const n=C(e),r=C(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function Cw(e,t){const n=ri(e),r=ri(t);return+n==+r}function _f(e){const t=C(e);return t.setMilliseconds(0),t}function Ew(e,t){const n=_f(e),r=_f(t);return+n==+r}function jw(e,t){const n=C(e),r=C(t);return n.getFullYear()===r.getFullYear()}function _T(e){return bw(e,Tt(e))}function DT(e){return kw(e,Tt(e))}function CT(e){return _w(e,Tt(e))}function ET(e){return Dw(e,Tt(e))}function jT(e){return Cw(e,Tt(e))}function OT(e){return Ew(e,Tt(e))}function PT(e,t){return Ao(e,Tt(e),t)}function TT(e){return jw(e,Tt(e))}function RT(e){return C(e).getDay()===4}function MT(e){return ia(e,Tt(e))}function NT(e){return ia(e,$n(Tt(e),1))}function $T(e){return C(e).getDay()===2}function IT(e){return C(e).getDay()===3}function AT(e,t){const n=+C(e),[r,i]=[+C(t.start),+C(t.end)].sort((s,o)=>s-o);return n>=r&&n<=i}function qc(e,t){return $n(e,-t)}function FT(e){return ia(e,qc(Tt(e),1))}function LT(e){const t=C(e),n=t.getFullYear(),r=9+Math.floor(n/10)*10;return t.setFullYear(r+1,0,0),t.setHours(0,0,0,0),t}function Ow(e,t){var a,l,u,d;const n=wt(),r=(t==null?void 0:t.weekStartsOn)??((l=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,i=C(e),s=i.getDay(),o=(s<r?-7:0)+6-(s-r);return i.setHours(0,0,0,0),i.setDate(i.getDate()+o),i}function zT(e){return Ow(e,{weekStartsOn:1})}function WT(e){const t=Pr(e),n=J(e,0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);const r=gn(n);return r.setDate(r.getDate()-1),r}function BT(e){const t=C(e),n=t.getMonth(),r=n-n%3+3;return t.setMonth(r,0),t.setHours(0,0,0,0),t}function UT(e){const t=C(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t}const HT=/(\w)\1*|''|'(''|[^'])+('|$)|./g,YT=/^'([^]*?)'?$/,qT=/''/g,VT=/[a-zA-Z]/;function GT(e,t){const n=C(e);if(!Zn(n))throw new RangeError("Invalid time value");const r=t.match(HT);return r?r.map(s=>{if(s==="''")return"'";const o=s[0];if(o==="'")return QT(s);const a=kn[o];if(a)return a(n,s);if(o.match(VT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return s}).join(""):""}function QT(e){const t=e.match(YT);return t?t[1].replace(qT,"'"):e}function KT({years:e,months:t,weeks:n,days:r,hours:i,minutes:s,seconds:o}){let a=0;e&&(a+=e*Ul),t&&(a+=t*(Ul/12)),n&&(a+=n*7),r&&(a+=r);let l=a*24*60*60;return i&&(l+=i*60*60),s&&(l+=s*60),o&&(l+=o),Math.trunc(l*1e3)}function XT(e){const t=e/wi;return Math.trunc(t)}function JT(e){const t=e/Jn;return Math.trunc(t)}function ZT(e){const t=e/Kp;return Math.trunc(t)}function eR(e){const t=e/M1;return Math.trunc(t)}function tR(e){return Math.trunc(e*Jn)}function nR(e){return Math.trunc(e*Xp)}function rR(e){const t=e/N1;return Math.trunc(t)}function iR(e){const t=e/$1;return Math.trunc(t)}function Fr(e,t){let n=t-Hc(e);return n<=0&&(n+=7),$n(e,n)}function sR(e){return Fr(e,5)}function oR(e){return Fr(e,1)}function aR(e){return Fr(e,6)}function lR(e){return Fr(e,0)}function cR(e){return Fr(e,4)}function uR(e){return Fr(e,2)}function dR(e){return Fr(e,3)}function fR(e,t){const n=(t==null?void 0:t.additionalDigits)??2,r=mR(e);let i;if(r.date){const l=yR(r.date,n);i=xR(l.restDateString,l.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);const s=i.getTime();let o=0,a;if(r.time&&(o=vR(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(a=wR(r.timezone),isNaN(a))return new Date(NaN)}else{const l=new Date(s+o),u=new Date(0);return u.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),u.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),u}return new Date(s+o+a)}const Pa={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},pR=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,hR=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,gR=/^([+-])(\d{2})(?::?(\d{2}))?$/;function mR(e){const t={},n=e.split(Pa.dateTimeDelimiter);let r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],Pa.timeZoneDelimiter.test(t.date)&&(t.date=e.split(Pa.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){const i=Pa.timezone.exec(r);i?(t.time=r.replace(i[1],""),t.timezone=i[1]):t.time=r}return t}function yR(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const i=r[1]?parseInt(r[1]):null,s=r[2]?parseInt(r[2]):null;return{year:s===null?i:s*100,restDateString:e.slice((r[1]||r[2]).length)}}function xR(e,t){if(t===null)return new Date(NaN);const n=e.match(pR);if(!n)return new Date(NaN);const r=!!n[4],i=Ls(n[1]),s=Ls(n[2])-1,o=Ls(n[3]),a=Ls(n[4]),l=Ls(n[5])-1;if(r)return DR(t,a,l)?SR(t,a,l):new Date(NaN);{const u=new Date(0);return!kR(t,s,o)||!_R(t,i)?new Date(NaN):(u.setUTCFullYear(t,s,Math.max(i,o)),u)}}function Ls(e){return e?parseInt(e):1}function vR(e){const t=e.match(hR);if(!t)return NaN;const n=Wu(t[1]),r=Wu(t[2]),i=Wu(t[3]);return CR(n,r,i)?n*wi+r*Jn+i*1e3:NaN}function Wu(e){return e&&parseFloat(e.replace(",","."))||0}function wR(e){if(e==="Z")return 0;const t=e.match(gR);if(!t)return 0;const n=t[1]==="+"?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return ER(r,i)?n*(r*wi+i*Jn):NaN}function SR(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const i=r.getUTCDay()||7,s=(t-1)*7+n+1-i;return r.setUTCDate(r.getUTCDate()+s),r}const bR=[31,null,31,30,31,30,31,31,30,31,30,31];function Pw(e){return e%400===0||e%4===0&&e%100!==0}function kR(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(bR[t]||(Pw(e)?29:28))}function _R(e,t){return t>=1&&t<=(Pw(e)?366:365)}function DR(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function CR(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function ER(e,t){return t>=0&&t<=59}function jR(e){const t=e.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);return t?new Date(Date.UTC(+t[1],+t[2]-1,+t[3],+t[4]-(+t[9]||0)*(t[8]=="-"?-1:1),+t[5]-(+t[10]||0)*(t[8]=="-"?-1:1),+t[6],+((t[7]||"0")+"00").substring(0,3))):new Date(NaN)}function Lr(e,t){let n=Hc(e)-t;return n<=0&&(n+=7),qc(e,n)}function OR(e){return Lr(e,5)}function PR(e){return Lr(e,1)}function TR(e){return Lr(e,6)}function RR(e){return Lr(e,0)}function MR(e){return Lr(e,4)}function NR(e){return Lr(e,2)}function $R(e){return Lr(e,3)}function IR(e){return Math.trunc(e*N1)}function AR(e){const t=e/I1;return Math.trunc(t)}function FR(e,t){const n=(t==null?void 0:t.nearestTo)??1;if(n<1||n>12)return J(e,NaN);const r=C(e),i=r.getMinutes()/60,s=r.getSeconds()/60/60,o=r.getMilliseconds()/1e3/60/60,a=r.getHours()+i+s+o,l=(t==null?void 0:t.roundingMethod)??"round",d=Ar(l)(a/n)*n,f=J(e,r);return f.setHours(d,0,0,0),f}function LR(e,t){const n=(t==null?void 0:t.nearestTo)??1;if(n<1||n>30)return J(e,NaN);const r=C(e),i=r.getSeconds()/60,s=r.getMilliseconds()/1e3/60,o=r.getMinutes()+i+s,a=(t==null?void 0:t.roundingMethod)??"round",u=Ar(a)(o/n)*n,d=J(e,r);return d.setMinutes(u,0,0),d}function zR(e){const t=e/Fc;return Math.trunc(t)}function WR(e){return e*Kp}function BR(e){const t=e/Xp;return Math.trunc(t)}function dh(e,t){const n=C(e),r=n.getFullYear(),i=n.getDate(),s=J(e,0);s.setFullYear(r,t,15),s.setHours(0,0,0,0);const o=aw(s);return n.setMonth(t,Math.min(i,o)),n}function UR(e,t){let n=C(e);return isNaN(+n)?J(e,NaN):(t.year!=null&&n.setFullYear(t.year),t.month!=null&&(n=dh(n,t.month)),t.date!=null&&n.setDate(t.date),t.hours!=null&&n.setHours(t.hours),t.minutes!=null&&n.setMinutes(t.minutes),t.seconds!=null&&n.setSeconds(t.seconds),t.milliseconds!=null&&n.setMilliseconds(t.milliseconds),n)}function HR(e,t){const n=C(e);return n.setDate(t),n}function YR(e,t){const n=C(e);return n.setMonth(0),n.setDate(t),n}function qR(e){const t={},n=wt();for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]===void 0?delete t[r]:t[r]=e[r]);Dj(t)}function VR(e,t){const n=C(e);return n.setHours(t),n}function GR(e,t){const n=C(e);return n.setMilliseconds(t),n}function QR(e,t){const n=C(e);return n.setMinutes(t),n}function KR(e,t){const n=C(e),r=Math.trunc(n.getMonth()/3)+1,i=t-r;return dh(n,n.getMonth()+i*3)}function XR(e,t){const n=C(e);return n.setSeconds(t),n}function JR(e,t,n){var l,u,d,f;const r=wt(),i=(n==null?void 0:n.firstWeekContainsDate)??((u=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((f=(d=r.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1;let s=C(e);const o=Mn(s,Kl(s,n)),a=J(e,0);return a.setFullYear(t,0,i),a.setHours(0,0,0,0),s=Kl(a,n),s.setDate(s.getDate()+o),s}function ZR(e,t){const n=C(e);return isNaN(+n)?J(e,NaN):(n.setFullYear(t),n)}function e4(e){const t=C(e),n=t.getFullYear(),r=Math.floor(n/10)*10;return t.setFullYear(r,0,1),t.setHours(0,0,0,0),t}function t4(){return hs(Date.now())}function n4(){const e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),i=new Date(0);return i.setFullYear(t,n,r+1),i.setHours(0,0,0,0),i}function r4(){const e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),i=new Date(0);return i.setFullYear(t,n,r-1),i.setHours(0,0,0,0),i}function Tw(e,t){return ta(e,-t)}function i4(e,t){const{years:n=0,months:r=0,weeks:i=0,days:s=0,hours:o=0,minutes:a=0,seconds:l=0}=t,u=Tw(e,r+n*12),d=qc(u,s+i*7),f=a+o*60,g=(l+f*60)*1e3;return J(e,d.getTime()-g)}function s4(e,t){return P1(e,-t)}function o4(e,t){return Zp(e,-t)}function a4(e,t){return na(e,-t)}function l4(e,t){return eh(e,-t)}function c4(e,t){return th(e,-t)}function u4(e,t){return B1(e,-t)}function d4(e,t){return Lc(e,-t)}function f4(e,t){return U1(e,-t)}function p4(e){return Math.trunc(e*T1)}function h4(e){return Math.trunc(e*Ul)}function g4(e){return Math.trunc(e*$1)}function m4(e){return Math.trunc(e*I1)}const y4=Object.freeze(Object.defineProperty({__proto__:null,add:ji,addBusinessDays:P1,addDays:$n,addHours:Zp,addISOWeekYears:W1,addMilliseconds:na,addMinutes:eh,addMonths:ta,addQuarters:th,addSeconds:B1,addWeeks:Lc,addYears:U1,areIntervalsOverlapping:Cj,clamp:Ej,closestIndexTo:jj,closestTo:Oj,compareAsc:Nn,compareDesc:Pj,constructFrom:J,constructNow:Tt,daysToWeeks:Tj,differenceInBusinessDays:Rj,differenceInCalendarDays:Mn,differenceInCalendarISOWeekYears:V1,differenceInCalendarISOWeeks:Mj,differenceInCalendarMonths:Yl,differenceInCalendarQuarters:al,differenceInCalendarWeeks:ql,differenceInCalendarYears:fo,differenceInDays:nh,differenceInHours:Vl,differenceInISOWeekYears:Nj,differenceInMilliseconds:zc,differenceInMinutes:Gl,differenceInMonths:Wc,differenceInQuarters:$j,differenceInSeconds:Ji,differenceInWeeks:Ij,differenceInYears:K1,eachDayOfInterval:X1,eachHourOfInterval:Aj,eachMinuteOfInterval:Fj,eachMonthOfInterval:Lj,eachQuarterOfInterval:zj,eachWeekOfInterval:Wj,eachWeekendOfInterval:sh,eachWeekendOfMonth:Bj,eachWeekendOfYear:Uj,eachYearOfInterval:Hj,endOfDay:rh,endOfDecade:Yj,endOfHour:qj,endOfISOWeek:Vj,endOfISOWeekYear:Gj,endOfMinute:Qj,endOfMonth:ih,endOfQuarter:Kj,endOfSecond:Xj,endOfToday:Jj,endOfTomorrow:Zj,endOfWeek:Z1,endOfYear:J1,endOfYesterday:eO,format:Io,formatDate:Io,formatDistance:ch,formatDistanceStrict:sw,formatDistanceToNow:UO,formatDistanceToNowStrict:HO,formatDuration:qO,formatISO:VO,formatISO9075:GO,formatISODuration:QO,formatRFC3339:KO,formatRFC7231:ZO,formatRelative:eP,formatters:Sf,fromUnixTime:tP,getDate:ow,getDay:Hc,getDayOfYear:tw,getDaysInMonth:aw,getDaysInYear:nP,getDecade:rP,getDefaultOptions:cw,getHours:iP,getISODay:uw,getISOWeek:ah,getISOWeekYear:Pr,getISOWeeksInYear:sP,getMilliseconds:oP,getMinutes:aP,getMonth:lP,getOverlappingDaysInIntervals:cP,getQuarter:wf,getSeconds:uP,getTime:dP,getUnixTime:fP,getWeek:lh,getWeekOfMonth:pP,getWeekYear:Uc,getWeeksInMonth:hP,getYear:gP,hoursToMilliseconds:mP,hoursToMinutes:yP,hoursToSeconds:xP,interval:vP,intervalToDuration:wP,intlFormat:SP,intlFormatDistance:kP,isAfter:_P,isBefore:DP,isDate:q1,isEqual:CP,isExists:EP,isFirstDayOfMonth:jP,isFriday:OP,isFuture:PP,isLastDayOfMonth:Q1,isLeapYear:lw,isMatch:wT,isMonday:ST,isPast:bT,isSameDay:ia,isSameHour:bw,isSameISOWeek:kw,isSameISOWeekYear:kT,isSameMinute:_w,isSameMonth:Dw,isSameQuarter:Cw,isSameSecond:Ew,isSameWeek:Ao,isSameYear:jw,isSaturday:j1,isSunday:O1,isThisHour:_T,isThisISOWeek:DT,isThisMinute:CT,isThisMonth:ET,isThisQuarter:jT,isThisSecond:OT,isThisWeek:PT,isThisYear:TT,isThursday:RT,isToday:MT,isTomorrow:NT,isTuesday:$T,isValid:Zn,isWednesday:IT,isWeekend:Xi,isWithinInterval:AT,isYesterday:FT,lastDayOfDecade:LT,lastDayOfISOWeek:zT,lastDayOfISOWeekYear:WT,lastDayOfMonth:dw,lastDayOfQuarter:BT,lastDayOfWeek:Ow,lastDayOfYear:UT,lightFormat:GT,lightFormatters:kn,longFormatters:Xl,max:H1,milliseconds:KT,millisecondsToHours:XT,millisecondsToMinutes:JT,millisecondsToSeconds:ZT,min:Y1,minutesToHours:eR,minutesToMilliseconds:tR,minutesToSeconds:nR,monthsToQuarters:rR,monthsToYears:iR,nextDay:Fr,nextFriday:sR,nextMonday:oR,nextSaturday:aR,nextSunday:lR,nextThursday:cR,nextTuesday:uR,nextWednesday:dR,parse:Sw,parseISO:fR,parseJSON:jR,parsers:ww,previousDay:Lr,previousFriday:OR,previousMonday:PR,previousSaturday:TR,previousSunday:RR,previousThursday:MR,previousTuesday:NR,previousWednesday:$R,quartersToMonths:IR,quartersToYears:AR,roundToNearestHours:FR,roundToNearestMinutes:LR,secondsToHours:zR,secondsToMilliseconds:WR,secondsToMinutes:BR,set:UR,setDate:HR,setDay:Yc,setDayOfYear:YR,setDefaultOptions:qR,setHours:VR,setISODay:vw,setISOWeek:xw,setISOWeekYear:z1,setMilliseconds:GR,setMinutes:QR,setMonth:dh,setQuarter:KR,setSeconds:XR,setWeek:yw,setWeekYear:JR,setYear:ZR,startOfDay:hs,startOfDecade:e4,startOfHour:kf,startOfISOWeek:gn,startOfISOWeekYear:Tr,startOfMinute:Ql,startOfMonth:Bc,startOfQuarter:ri,startOfSecond:_f,startOfToday:t4,startOfTomorrow:n4,startOfWeek:nt,startOfWeekYear:Kl,startOfYear:oh,startOfYesterday:r4,sub:i4,subBusinessDays:s4,subDays:qc,subHours:o4,subISOWeekYears:G1,subMilliseconds:a4,subMinutes:l4,subMonths:Tw,subQuarters:c4,subSeconds:u4,subWeeks:d4,subYears:f4,toDate:C,transpose:fw,weeksToDays:p4,yearsToDays:h4,yearsToMonths:g4,yearsToQuarters:m4},Symbol.toStringTag,{value:"Module"})),Si=Q0(y4);Object.defineProperty(Xn,"__esModule",{value:!0});Xn.rangeShape=Xn.default=void 0;var zr=x4(b),ae=Rw(An),Bu=Rw(vi),pt=Si;function Rw(e){return e&&e.__esModule?e:{default:e}}function Mw(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Mw=function(r){return r?n:t})(e)}function x4(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Mw(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function Df(){return Df=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Df.apply(this,arguments)}function zs(e,t,n){return t=v4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v4(e){var t=w4(e,"string");return typeof t=="symbol"?t:String(t)}function w4(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class fh extends zr.Component{constructor(t,n){super(t,n),zs(this,"handleKeyEvent",r=>{const{day:i,onMouseDown:s,onMouseUp:o}=this.props;[13,32].includes(r.keyCode)&&(r.type==="keydown"?s(i):o(i))}),zs(this,"handleMouseEvent",r=>{const{day:i,disabled:s,onPreviewChange:o,onMouseEnter:a,onMouseDown:l,onMouseUp:u}=this.props,d={};if(s){o();return}switch(r.type){case"mouseenter":a(i),o(i),d.hover=!0;break;case"blur":case"mouseleave":d.hover=!1;break;case"mousedown":d.active=!0,l(i);break;case"mouseup":r.stopPropagation(),d.active=!1,u(i);break;case"focus":o(i);break}Object.keys(d).length&&this.setState(d)}),zs(this,"getClassNames",()=>{const{isPassive:r,isToday:i,isWeekend:s,isStartOfWeek:o,isEndOfWeek:a,isStartOfMonth:l,isEndOfMonth:u,disabled:d,styles:f}=this.props;return(0,Bu.default)(f.day,{[f.dayPassive]:r,[f.dayDisabled]:d,[f.dayToday]:i,[f.dayWeekend]:s,[f.dayStartOfWeek]:o,[f.dayEndOfWeek]:a,[f.dayStartOfMonth]:l,[f.dayEndOfMonth]:u,[f.dayHovered]:this.state.hover,[f.dayActive]:this.state.active})}),zs(this,"renderPreviewPlaceholder",()=>{const{preview:r,day:i,styles:s}=this.props;if(!r)return null;const o=r.startDate?(0,pt.endOfDay)(r.startDate):null,a=r.endDate?(0,pt.startOfDay)(r.endDate):null,l=(!o||(0,pt.isAfter)(i,o))&&(!a||(0,pt.isBefore)(i,a)),u=!l&&(0,pt.isSameDay)(i,o),d=!l&&(0,pt.isSameDay)(i,a);return zr.default.createElement("span",{className:(0,Bu.default)({[s.dayStartPreview]:u,[s.dayInPreview]:l,[s.dayEndPreview]:d}),style:{color:r.color}})}),zs(this,"renderSelectionPlaceholders",()=>{const{styles:r,ranges:i,day:s}=this.props;return this.props.displayMode==="date"?(0,pt.isSameDay)(this.props.day,this.props.date)?zr.default.createElement("span",{className:r.selected,style:{color:this.props.color}}):null:i.reduce((a,l)=>{let u=l.startDate,d=l.endDate;u&&d&&(0,pt.isBefore)(d,u)&&([u,d]=[d,u]),u=u?(0,pt.endOfDay)(u):null,d=d?(0,pt.startOfDay)(d):null;const f=(!u||(0,pt.isAfter)(s,u))&&(!d||(0,pt.isBefore)(s,d)),p=!f&&(0,pt.isSameDay)(s,u),g=!f&&(0,pt.isSameDay)(s,d);return f||p||g?[...a,{isStartEdge:p,isEndEdge:g,isInRange:f,...l}]:a},[]).map((a,l)=>zr.default.createElement("span",{key:l,className:(0,Bu.default)({[r.startEdge]:a.isStartEdge,[r.endEdge]:a.isEndEdge,[r.inRange]:a.isInRange}),style:{color:a.color||this.props.color}}))}),this.state={hover:!1,active:!1}}render(){const{dayContentRenderer:t}=this.props;return zr.default.createElement("button",Df({type:"button",onMouseEnter:this.handleMouseEvent,onMouseLeave:this.handleMouseEvent,onFocus:this.handleMouseEvent,onMouseDown:this.handleMouseEvent,onMouseUp:this.handleMouseEvent,onBlur:this.handleMouseEvent,onPauseCapture:this.handleMouseEvent,onKeyDown:this.handleKeyEvent,onKeyUp:this.handleKeyEvent,className:this.getClassNames(this.props.styles)},this.props.disabled||this.props.isPassive?{tabIndex:-1}:{},{style:{color:this.props.color}}),this.renderSelectionPlaceholders(),this.renderPreviewPlaceholder(),zr.default.createElement("span",{className:this.props.styles.dayNumber},(t==null?void 0:t(this.props.day))||zr.default.createElement("span",null,(0,pt.format)(this.props.day,this.props.dayDisplayFormat))))}}fh.defaultProps={};const S4=Xn.rangeShape=ae.default.shape({startDate:ae.default.object,endDate:ae.default.object,color:ae.default.string,key:ae.default.string,autoFocus:ae.default.bool,disabled:ae.default.bool,showDateDisplay:ae.default.bool});fh.propTypes={day:ae.default.object.isRequired,dayDisplayFormat:ae.default.string,date:ae.default.object,ranges:ae.default.arrayOf(S4),preview:ae.default.shape({startDate:ae.default.object,endDate:ae.default.object,color:ae.default.string}),onPreviewChange:ae.default.func,previewColor:ae.default.string,disabled:ae.default.bool,isPassive:ae.default.bool,isToday:ae.default.bool,isWeekend:ae.default.bool,isStartOfWeek:ae.default.bool,isEndOfWeek:ae.default.bool,isStartOfMonth:ae.default.bool,isEndOfMonth:ae.default.bool,color:ae.default.string,displayMode:ae.default.oneOf(["dateRange","date"]),styles:ae.default.object,onMouseDown:ae.default.func,onMouseUp:ae.default.func,onMouseEnter:ae.default.func,dayContentRenderer:ae.default.func};Xn.default=fh;var Vc={},rr={};Object.defineProperty(rr,"__esModule",{value:!0});rr.calcFocusDate=_4;rr.findNextRangeIndex=D4;rr.generateStyles=E4;rr.getMonthDisplayRange=C4;var b4=k4(vi),Un=Si;function k4(e){return e&&e.__esModule?e:{default:e}}function _4(e,t){const{shownDate:n,date:r,months:i,ranges:s,focusedRange:o,displayMode:a}=t;let l;if(a==="dateRange"){const d=s[o[0]]||{};l={start:d.startDate,end:d.endDate}}else l={start:r,end:r};l.start=(0,Un.startOfMonth)(l.start||new Date),l.end=(0,Un.endOfMonth)(l.end||l.start);const u=l.start||l.end||n||new Date;return e?(0,Un.differenceInCalendarMonths)(l.start,l.end)>i?e:u:n||u}function D4(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1;const n=e.findIndex((r,i)=>i>t&&r.autoFocus!==!1&&!r.disabled);return n!==-1?n:e.findIndex(r=>r.autoFocus!==!1&&!r.disabled)}function C4(e,t,n){const r=(0,Un.startOfMonth)(e,t),i=(0,Un.endOfMonth)(e,t),s=(0,Un.startOfWeek)(r,t);let o=(0,Un.endOfWeek)(i,t);return n&&(0,Un.differenceInCalendarDays)(o,s)<=34&&(o=(0,Un.addDays)(o,7)),{start:s,end:o,startDateOfMonth:r,endDateOfMonth:i}}function E4(e){return e.length?e.filter(n=>!!n).reduce((n,r)=>(Object.keys(r).forEach(i=>{n[i]=(0,b4.default)(n[i],r[i])}),n),{}):{}}Object.defineProperty(Vc,"__esModule",{value:!0});Vc.default=void 0;var Jr=Iw(b),ve=O4(An),Nw=Iw(Xn),We=Si,j4=rr;function O4(e){return e&&e.__esModule?e:{default:e}}function $w(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return($w=function(r){return r?n:t})(e)}function Iw(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=$w(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function Cf(){return Cf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cf.apply(this,arguments)}function P4(e,t,n){const r=new Date;return Jr.default.createElement("div",{className:e.weekDays},(0,We.eachDayOfInterval)({start:(0,We.startOfWeek)(r,t),end:(0,We.endOfWeek)(r,t)}).map((i,s)=>Jr.default.createElement("span",{className:e.weekDay,key:s},(0,We.format)(i,n,t))))}class ph extends Jr.PureComponent{render(){const t=new Date,{displayMode:n,focusedRange:r,drag:i,styles:s,disabledDates:o,disabledDay:a}=this.props,l=this.props.minDate&&(0,We.startOfDay)(this.props.minDate),u=this.props.maxDate&&(0,We.endOfDay)(this.props.maxDate),d=(0,j4.getMonthDisplayRange)(this.props.month,this.props.dateOptions,this.props.fixedHeight);let f=this.props.ranges;if(n==="dateRange"&&i.status){let{startDate:g,endDate:x}=i.range;f=f.map((y,S)=>S!==r[0]?y:{...y,startDate:g,endDate:x})}const p=this.props.showPreview&&!i.disablePreview;return Jr.default.createElement("div",{className:s.month,style:this.props.style},this.props.showMonthName?Jr.default.createElement("div",{className:s.monthName},(0,We.format)(this.props.month,this.props.monthDisplayFormat,this.props.dateOptions)):null,this.props.showWeekDays&&P4(s,this.props.dateOptions,this.props.weekdayDisplayFormat),Jr.default.createElement("div",{className:s.days,onMouseLeave:this.props.onMouseLeave},(0,We.eachDayOfInterval)({start:d.start,end:d.end}).map((g,x)=>{const y=(0,We.isSameDay)(g,d.startDateOfMonth),S=(0,We.isSameDay)(g,d.endDateOfMonth),v=l&&(0,We.isBefore)(g,l)||u&&(0,We.isAfter)(g,u),m=o.some(k=>(0,We.isSameDay)(k,g)),w=a(g);return Jr.default.createElement(Nw.default,Cf({},this.props,{ranges:f,day:g,preview:p?this.props.preview:null,isWeekend:(0,We.isWeekend)(g,this.props.dateOptions),isToday:(0,We.isSameDay)(g,t),isStartOfWeek:(0,We.isSameDay)(g,(0,We.startOfWeek)(g,this.props.dateOptions)),isEndOfWeek:(0,We.isSameDay)(g,(0,We.endOfWeek)(g,this.props.dateOptions)),isStartOfMonth:y,isEndOfMonth:S,key:x,disabled:v||m||w,isPassive:!(0,We.isWithinInterval)(g,{start:d.startDateOfMonth,end:d.endDateOfMonth}),styles:s,onMouseDown:this.props.onDragSelectionStart,onMouseUp:this.props.onDragSelectionEnd,onMouseEnter:this.props.onDragSelectionMove,dragRange:i.range,drag:i.status}))})))}}ph.defaultProps={};ph.propTypes={style:ve.default.object,styles:ve.default.object,month:ve.default.object,drag:ve.default.object,dateOptions:ve.default.object,disabledDates:ve.default.array,disabledDay:ve.default.func,preview:ve.default.shape({startDate:ve.default.object,endDate:ve.default.object}),showPreview:ve.default.bool,displayMode:ve.default.oneOf(["dateRange","date"]),minDate:ve.default.object,maxDate:ve.default.object,ranges:ve.default.arrayOf(Nw.rangeShape),focusedRange:ve.default.arrayOf(ve.default.number),onDragSelectionStart:ve.default.func,onDragSelectionEnd:ve.default.func,onDragSelectionMove:ve.default.func,onMouseLeave:ve.default.func,monthDisplayFormat:ve.default.string,weekdayDisplayFormat:ve.default.string,dayDisplayFormat:ve.default.string,showWeekDays:ve.default.bool,showMonthName:ve.default.bool,fixedHeight:ve.default.bool};Vc.default=ph;var Gc={};Object.defineProperty(Gc,"__esModule",{value:!0});Gc.default=void 0;var Ta=R4(b),wn=Aw(An),T4=Aw(vi),Ws=Si;function Aw(e){return e&&e.__esModule?e:{default:e}}function Fw(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Fw=function(r){return r?n:t})(e)}function R4(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Fw(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function Uu(e,t,n){return t=M4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M4(e){var t=N4(e,"string");return typeof t=="symbol"?t:String(t)}function N4(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class hh extends Ta.PureComponent{constructor(t,n){super(t,n),Uu(this,"onKeyDown",r=>{const{value:i}=this.state;r.key==="Enter"&&this.update(i)}),Uu(this,"onChange",r=>{this.setState({value:r.target.value,changed:!0,invalid:!1})}),Uu(this,"onBlur",()=>{const{value:r}=this.state;this.update(r)}),this.state={invalid:!1,changed:!1,value:this.formatDate(t)}}componentDidUpdate(t){const{value:n}=t;(0,Ws.isEqual)(n,this.props.value)||this.setState({value:this.formatDate(this.props)})}formatDate(t){let{value:n,dateDisplayFormat:r,dateOptions:i}=t;return n&&(0,Ws.isValid)(n)?(0,Ws.format)(n,r,i):""}update(t){const{invalid:n,changed:r}=this.state;if(n||!r||!t)return;const{onChange:i,dateDisplayFormat:s,dateOptions:o}=this.props,a=(0,Ws.parse)(t,s,new Date,o);(0,Ws.isValid)(a)?this.setState({changed:!1},()=>i(a)):this.setState({invalid:!0})}render(){const{className:t,readOnly:n,placeholder:r,ariaLabel:i,disabled:s,onFocus:o}=this.props,{value:a,invalid:l}=this.state;return Ta.default.createElement("span",{className:(0,T4.default)("rdrDateInput",t)},Ta.default.createElement("input",{readOnly:n,disabled:s,value:a,placeholder:r,"aria-label":i,onKeyDown:this.onKeyDown,onChange:this.onChange,onBlur:this.onBlur,onFocus:o}),l&&Ta.default.createElement("span",{className:"rdrWarning"},"⚠"))}}hh.propTypes={value:wn.default.object,placeholder:wn.default.string,disabled:wn.default.bool,readOnly:wn.default.bool,dateOptions:wn.default.object,dateDisplayFormat:wn.default.string,ariaLabel:wn.default.string,className:wn.default.string,onFocus:wn.default.func.isRequired,onChange:wn.default.func.isRequired};hh.defaultProps={readOnly:!0,disabled:!1,dateDisplayFormat:"MMM D, YYYY"};Gc.default=hh;var Lw={exports:{}};(function(e,t){(function(n,r){r(An,b)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:qS,function(n,r){n=l(n),r=a(r);var i,s;function o(){if(typeof WeakMap!="function")return null;var M=new WeakMap;return o=function(){return M},M}function a(M){if(M&&M.__esModule)return M;if(M===null||u(M)!=="object"&&typeof M!="function")return{default:M};var F=o();if(F&&F.has(M))return F.get(M);var A={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in M)if(Object.prototype.hasOwnProperty.call(M,P)){var I=$?Object.getOwnPropertyDescriptor(M,P):null;I&&(I.get||I.set)?Object.defineProperty(A,P,I):A[P]=M[P]}return A.default=M,F&&F.set(M,A),A}function l(M){return M&&M.__esModule?M:{default:M}}function u(M){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?u=function(A){return typeof A}:u=function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},u(M)}function d(M,F){if(!(M instanceof F))throw new TypeError("Cannot call a class as a function")}function f(M,F){for(var A=0;A<F.length;A++){var $=F[A];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(M,$.key,$)}}function p(M,F,A){return F&&f(M.prototype,F),A&&f(M,A),M}function g(M,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(F&&F.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),F&&x(M,F)}function x(M,F){return x=Object.setPrototypeOf||function($,P){return $.__proto__=P,$},x(M,F)}function y(M){var F=m();return function(){var $=w(M),P;if(F){var I=w(this).constructor;P=Reflect.construct($,arguments,I)}else P=$.apply(this,arguments);return S(this,P)}}function S(M,F){return F&&(u(F)==="object"||typeof F=="function")?F:v(M)}function v(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function w(M){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)},w(M)}function k(M,F){var A=Object.keys(M);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(M);F&&($=$.filter(function(P){return Object.getOwnPropertyDescriptor(M,P).enumerable})),A.push.apply(A,$)}return A}function _(M){for(var F=1;F<arguments.length;F++){var A=arguments[F]!=null?arguments[F]:{};F%2?k(Object(A),!0).forEach(function($){E(M,$,A[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(A)):k(Object(A)).forEach(function($){Object.defineProperty(M,$,Object.getOwnPropertyDescriptor(A,$))})}return M}function E(M,F,A){return F in M?Object.defineProperty(M,F,{value:A,enumerable:!0,configurable:!0,writable:!0}):M[F]=A,M}var D={x:"clientWidth",y:"clientHeight"},O={x:"clientTop",y:"clientLeft"},K={x:"innerWidth",y:"innerHeight"},N={x:"offsetWidth",y:"offsetHeight"},L={x:"offsetLeft",y:"offsetTop"},Z={x:"overflowX",y:"overflowY"},Oe={x:"scrollWidth",y:"scrollHeight"},q={x:"scrollLeft",y:"scrollTop"},ce={x:"width",y:"height"},Se=function(){},$e=function(){if(typeof window>"u")return!1;var M=!1;try{document.createElement("div").addEventListener("test",Se,{get passive(){return M=!0,!1}})}catch{}return M}()?{passive:!0}:!1,T="ReactList failed to reach a stable state.",z=40,Y=function(F,A){for(var $ in A)if(F[$]!==A[$])return!1;return!0},oe=function(F){for(var A=F.props.axis,$=F.getEl(),P=Z[A];$=$.parentElement;)switch(window.getComputedStyle($)[P]){case"auto":case"scroll":case"overlay":return $}return window},ue=function(F){var A=F.props.axis,$=F.scrollParent;return $===window?window[K[A]]:$[D[A]]},ft=function(F,A){var $=F.length,P=F.minSize,I=F.type,U=A.from,H=A.size,G=A.itemsPerRow;H=Math.max(H,P);var ee=H%G;return ee&&(H+=G-ee),H>$&&(H=$),U=I==="simple"||!U?0:Math.max(Math.min(U,$-H),0),(ee=U%G)&&(U-=ee,H+=ee),U===A.from&&H==A.size?A:_(_({},A),{},{from:U,size:H})};e.exports=(s=i=function(M){g(A,M);var F=y(A);p(A,null,[{key:"getDerivedStateFromProps",value:function(P,I){var U=ft(P,I);return U===I?null:U}}]);function A($){var P;return d(this,A),P=F.call(this,$),P.state=ft($,{itemsPerRow:1,from:$.initialIndex,size:0}),P.cache={},P.cachedScrollPosition=null,P.prevPrevState={},P.unstable=!1,P.updateCounter=0,P}return p(A,[{key:"componentDidMount",value:function(){this.updateFrameAndClearCache=this.updateFrameAndClearCache.bind(this),window.addEventListener("resize",this.updateFrameAndClearCache),this.updateFrame(this.scrollTo.bind(this,this.props.initialIndex))}},{key:"componentDidUpdate",value:function(P){var I=this;if(this.props.axis!==P.axis&&this.clearSizeCache(),!this.unstable){if(++this.updateCounter>z)return this.unstable=!0,console.error(T);this.updateCounterTimeoutId||(this.updateCounterTimeoutId=setTimeout(function(){I.updateCounter=0,delete I.updateCounterTimeoutId},0)),this.updateFrame()}}},{key:"maybeSetState",value:function(P,I){if(Y(this.state,P))return I();this.setState(P,I)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateFrameAndClearCache),this.scrollParent.removeEventListener("scroll",this.updateFrameAndClearCache,$e),this.scrollParent.removeEventListener("mousewheel",Se,$e)}},{key:"getOffset",value:function(P){var I=this.props.axis,U=P[O[I]]||0,H=L[I];do U+=P[H]||0;while(P=P.offsetParent);return U}},{key:"getEl",value:function(){return this.el||this.items}},{key:"getScrollPosition",value:function(){if(typeof this.cachedScrollPosition=="number")return this.cachedScrollPosition;var P=this.scrollParent,I=this.props.axis,U=q[I],H=P===window?document.body[U]||document.documentElement[U]:P[U],G=this.getScrollSize()-this.props.scrollParentViewportSizeGetter(this),ee=Math.max(0,Math.min(H,G)),be=this.getEl();return this.cachedScrollPosition=this.getOffset(P)+ee-this.getOffset(be),this.cachedScrollPosition}},{key:"setScroll",value:function(P){var I=this.scrollParent,U=this.props.axis;if(P+=this.getOffset(this.getEl()),I===window)return window.scrollTo(0,P);P-=this.getOffset(this.scrollParent),I[q[U]]=P}},{key:"getScrollSize",value:function(){var P=this.scrollParent,I=document,U=I.body,H=I.documentElement,G=Oe[this.props.axis];return P===window?Math.max(U[G],H[G]):P[G]}},{key:"hasDeterminateSize",value:function(){var P=this.props,I=P.itemSizeGetter,U=P.type;return U==="uniform"||I}},{key:"getStartAndEnd",value:function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.threshold,I=this.getScrollPosition(),U=Math.max(0,I-P),H=I+this.props.scrollParentViewportSizeGetter(this)+P;return this.hasDeterminateSize()&&(H=Math.min(H,this.getSpaceBefore(this.props.length))),{start:U,end:H}}},{key:"getItemSizeAndItemsPerRow",value:function(){var P=this.props,I=P.axis,U=P.useStaticSize,H=this.state,G=H.itemSize,ee=H.itemsPerRow;if(U&&G&&ee)return{itemSize:G,itemsPerRow:ee};var be=this.items.children;if(!be.length)return{};var pe=be[0],de=pe[N[I]],ge=Math.abs(de-G);if((isNaN(ge)||ge>=1)&&(G=de),!G)return{};var st=L[I],St=pe[st];ee=1;for(var en=be[ee];en&&en[st]===St;en=be[ee])++ee;return{itemSize:G,itemsPerRow:ee}}},{key:"clearSizeCache",value:function(){this.cachedScrollPosition=null}},{key:"updateFrameAndClearCache",value:function(P){return this.clearSizeCache(),this.updateFrame(P)}},{key:"updateFrame",value:function(P){switch(this.updateScrollParent(),typeof P!="function"&&(P=Se),this.props.type){case"simple":return this.updateSimpleFrame(P);case"variable":return this.updateVariableFrame(P);case"uniform":return this.updateUniformFrame(P)}}},{key:"updateScrollParent",value:function(){var P=this.scrollParent;this.scrollParent=this.props.scrollParentGetter(this),P!==this.scrollParent&&(P&&(P.removeEventListener("scroll",this.updateFrameAndClearCache),P.removeEventListener("mousewheel",Se)),this.clearSizeCache(),this.scrollParent.addEventListener("scroll",this.updateFrameAndClearCache,$e),this.scrollParent.addEventListener("mousewheel",Se,$e))}},{key:"updateSimpleFrame",value:function(P){var I=this.getStartAndEnd(),U=I.end,H=this.items.children,G=0;if(H.length){var ee=this.props.axis,be=H[0],pe=H[H.length-1];G=this.getOffset(pe)+pe[N[ee]]-this.getOffset(be)}if(G>U)return P();var de=this.props,ge=de.pageSize,st=de.length,St=Math.min(this.state.size+ge,st);this.maybeSetState({size:St},P)}},{key:"updateVariableFrame",value:function(P){this.props.itemSizeGetter||this.cacheSizes();for(var I=this.getStartAndEnd(),U=I.start,H=I.end,G=this.props,ee=G.length,be=G.pageSize,pe=0,de=0,ge=0,st=ee-1;de<st;){var St=this.getSizeOfItem(de);if(St==null||pe+St>U)break;pe+=St,++de}for(var en=ee-de;ge<en&&pe<H;){var js=this.getSizeOfItem(de+ge);if(js==null){ge=Math.min(ge+be,en);break}pe+=js,++ge}this.maybeSetState(ft(this.props,{from:de,itemsPerRow:1,size:ge}),P)}},{key:"updateUniformFrame",value:function(P){var I=this.getItemSizeAndItemsPerRow(),U=I.itemSize,H=I.itemsPerRow;if(!U||!H)return P();var G=this.getStartAndEnd(),ee=G.start,be=G.end,pe=ft(this.props,{from:Math.floor(ee/U)*H,size:(Math.ceil((be-ee)/U)+1)*H,itemsPerRow:H}),de=pe.from,ge=pe.size;return this.maybeSetState({itemsPerRow:H,from:de,itemSize:U,size:ge},P)}},{key:"getSpaceBefore",value:function(P){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(I[P]!=null)return I[P];var U=this.state,H=U.itemSize,G=U.itemsPerRow;if(H)return I[P]=Math.floor(P/G)*H;for(var ee=P;ee>0&&I[--ee]==null;);for(var be=I[ee]||0,pe=ee;pe<P;++pe){I[pe]=be;var de=this.getSizeOfItem(pe);if(de==null)break;be+=de}return I[P]=be}},{key:"cacheSizes",value:function(){for(var P=this.cache,I=this.state.from,U=this.items.children,H=N[this.props.axis],G=0,ee=U.length;G<ee;++G)P[I+G]=U[G][H]}},{key:"getSizeOfItem",value:function(P){var I=this.cache,U=this.items,H=this.props,G=H.axis,ee=H.itemSizeGetter,be=H.itemSizeEstimator,pe=H.type,de=this.state,ge=de.from,st=de.itemSize,St=de.size;if(st)return st;if(ee)return ee(P);if(P in I)return I[P];if(pe==="simple"&&P>=ge&&P<ge+St&&U){var en=U.children[P-ge];if(en)return en[N[G]]}if(be)return be(P,I)}},{key:"scrollTo",value:function(P){P!=null&&this.setScroll(this.getSpaceBefore(P))}},{key:"scrollAround",value:function(P){var I=this.getScrollPosition(),U=this.getSpaceBefore(P),H=U-this.props.scrollParentViewportSizeGetter(this)+this.getSizeOfItem(P),G=Math.min(H,U),ee=Math.max(H,U);if(I<=G)return this.setScroll(G);if(I>ee)return this.setScroll(ee)}},{key:"getVisibleRange",value:function(){for(var P=this.state,I=P.from,U=P.size,H=this.getStartAndEnd(0),G=H.start,ee=H.end,be={},pe,de,ge=I;ge<I+U;++ge){var st=this.getSpaceBefore(ge,be),St=st+this.getSizeOfItem(ge);pe==null&&St>G&&(pe=ge),pe!=null&&st<ee&&(de=ge)}return[pe,de]}},{key:"renderItems",value:function(){for(var P=this,I=this.props,U=I.itemRenderer,H=I.itemsRenderer,G=this.state,ee=G.from,be=G.size,pe=[],de=0;de<be;++de)pe.push(U(ee+de,de));return H(pe,function(ge){return P.items=ge})}},{key:"render",value:function(){var P=this,I=this.props,U=I.axis,H=I.length,G=I.type,ee=I.useTranslate3d,be=this.state,pe=be.from,de=be.itemsPerRow,ge=this.renderItems();if(G==="simple")return ge;var st={position:"relative"},St={},en=Math.ceil(H/de)*de,js=this.getSpaceBefore(en,St);js&&(st[ce[U]]=js,U==="x"&&(st.overflowX="hidden"));var Lh=this.getSpaceBefore(pe,St),zh=U==="x"?Lh:0,Wh=U==="y"?Lh:0,su=ee?"translate3d(".concat(zh,"px, ").concat(Wh,"px, 0)"):"translate(".concat(zh,"px, ").concat(Wh,"px)"),WS={msTransform:su,WebkitTransform:su,transform:su};return r.default.createElement("div",{style:st,ref:function(BS){return P.el=BS}},r.default.createElement("div",{style:WS},ge))}}]),A}(r.Component),E(i,"displayName","ReactList"),E(i,"propTypes",{axis:n.default.oneOf(["x","y"]),initialIndex:n.default.number,itemRenderer:n.default.func,itemSizeEstimator:n.default.func,itemSizeGetter:n.default.func,itemsRenderer:n.default.func,length:n.default.number,minSize:n.default.number,pageSize:n.default.number,scrollParentGetter:n.default.func,scrollParentViewportSizeGetter:n.default.func,threshold:n.default.number,type:n.default.oneOf(["simple","variable","uniform"]),useStaticSize:n.default.bool,useTranslate3d:n.default.bool}),E(i,"defaultProps",{axis:"y",itemRenderer:function(F,A){return r.default.createElement("div",{key:A},F)},itemsRenderer:function(F,A){return r.default.createElement("div",{ref:A},F)},length:0,minSize:1,pageSize:10,scrollParentGetter:oe,scrollParentViewportSizeGetter:ue,threshold:100,type:"simple",useStaticSize:!1,useTranslate3d:!1}),s)})})(Lw);var $4=Lw.exports;function I4(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var s=0;s<i;s++){var o=n[s];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}function A4(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const F4=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:A4,shallowEqualObjects:I4},Symbol.toStringTag,{value:"Module"})),L4=Q0(F4);var gh={},mh={};mh.formatDistance=void 0;const z4={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},W4=(e,t,n)=>{let r;const i=z4[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};mh.formatDistance=W4;var yh={},zw={};zw.buildFormatLongFn=B4;function B4(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}yh.formatLong=void 0;var Hu=zw;const U4={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},H4={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Y4={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};yh.formatLong={date:(0,Hu.buildFormatLongFn)({formats:U4,defaultWidth:"full"}),time:(0,Hu.buildFormatLongFn)({formats:H4,defaultWidth:"full"}),dateTime:(0,Hu.buildFormatLongFn)({formats:Y4,defaultWidth:"full"})};var xh={};xh.formatRelative=void 0;const q4={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},V4=(e,t,n,r)=>q4[e];xh.formatRelative=V4;var vh={},Ww={};Ww.buildLocalizeFn=G4;function G4(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=e.formattingValues[a]||e.formattingValues[o]}else{const o=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[a]||e.values[o]}const s=e.argumentCallback?e.argumentCallback(t):t;return i[s]}}vh.localize=void 0;var Bs=Ww;const Q4={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},K4={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},X4={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},J4={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Z4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},eM={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},tM=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"};vh.localize={ordinalNumber:tM,era:(0,Bs.buildLocalizeFn)({values:Q4,defaultWidth:"wide"}),quarter:(0,Bs.buildLocalizeFn)({values:K4,defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,Bs.buildLocalizeFn)({values:X4,defaultWidth:"wide"}),day:(0,Bs.buildLocalizeFn)({values:J4,defaultWidth:"wide"}),dayPeriod:(0,Bs.buildLocalizeFn)({values:Z4,defaultWidth:"wide",formattingValues:eM,defaultFormattingWidth:"wide"})};var wh={},Bw={};Bw.buildMatchFn=nM;function nM(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;const o=s[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(a)?iM(a,f=>f.test(o)):rM(a,f=>f.test(o));let u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(o.length);return{value:u,rest:d}}}function rM(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function iM(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}var Uw={};Uw.buildMatchPatternFn=sM;function sM(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],s=t.match(e.parsePattern);if(!s)return null;let o=e.valueCallback?e.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=t.slice(i.length);return{value:o,rest:a}}}wh.match=void 0;var Us=Bw,oM=Uw;const aM=/^(\d+)(th|st|nd|rd)?/i,lM=/\d+/i,cM={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},uM={any:[/^b/i,/^(a|c)/i]},dM={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fM={any:[/1/i,/2/i,/3/i,/4/i]},pM={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hM={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gM={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},mM={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},yM={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xM={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};wh.match={ordinalNumber:(0,oM.buildMatchPatternFn)({matchPattern:aM,parsePattern:lM,valueCallback:e=>parseInt(e,10)}),era:(0,Us.buildMatchFn)({matchPatterns:cM,defaultMatchWidth:"wide",parsePatterns:uM,defaultParseWidth:"any"}),quarter:(0,Us.buildMatchFn)({matchPatterns:dM,defaultMatchWidth:"wide",parsePatterns:fM,defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,Us.buildMatchFn)({matchPatterns:pM,defaultMatchWidth:"wide",parsePatterns:hM,defaultParseWidth:"any"}),day:(0,Us.buildMatchFn)({matchPatterns:gM,defaultMatchWidth:"wide",parsePatterns:mM,defaultParseWidth:"any"}),dayPeriod:(0,Us.buildMatchFn)({matchPatterns:yM,defaultMatchWidth:"any",parsePatterns:xM,defaultParseWidth:"any"})};gh.enUS=void 0;var vM=mh,wM=yh,SM=xh,bM=vh,kM=wh;gh.enUS={code:"en-US",formatDistance:vM.formatDistance,formatLong:wM.formatLong,formatRelative:SM.formatRelative,localize:bM.localize,match:kM.match,options:{weekStartsOn:0,firstWeekContainsDate:1}};var bi={};Object.defineProperty(bi,"__esModule",{value:!0});bi.default=void 0;bi.default={dateRangeWrapper:"rdrDateRangeWrapper",calendarWrapper:"rdrCalendarWrapper",dateDisplay:"rdrDateDisplay",dateDisplayItem:"rdrDateDisplayItem",dateDisplayItemActive:"rdrDateDisplayItemActive",monthAndYearWrapper:"rdrMonthAndYearWrapper",monthAndYearPickers:"rdrMonthAndYearPickers",nextPrevButton:"rdrNextPrevButton",month:"rdrMonth",weekDays:"rdrWeekDays",weekDay:"rdrWeekDay",days:"rdrDays",day:"rdrDay",dayNumber:"rdrDayNumber",dayPassive:"rdrDayPassive",dayToday:"rdrDayToday",dayStartOfWeek:"rdrDayStartOfWeek",dayEndOfWeek:"rdrDayEndOfWeek",daySelected:"rdrDaySelected",dayDisabled:"rdrDayDisabled",dayStartOfMonth:"rdrDayStartOfMonth",dayEndOfMonth:"rdrDayEndOfMonth",dayWeekend:"rdrDayWeekend",dayStartPreview:"rdrDayStartPreview",dayInPreview:"rdrDayInPreview",dayEndPreview:"rdrDayEndPreview",dayHovered:"rdrDayHovered",dayActive:"rdrDayActive",inRange:"rdrInRange",endEdge:"rdrEndEdge",startEdge:"rdrStartEdge",prevButton:"rdrPprevButton",nextButton:"rdrNextButton",selected:"rdrSelected",months:"rdrMonths",monthPicker:"rdrMonthPicker",yearPicker:"rdrYearPicker",dateDisplayWrapper:"rdrDateDisplayWrapper",definedRangesWrapper:"rdrDefinedRangesWrapper",staticRanges:"rdrStaticRanges",staticRange:"rdrStaticRange",inputRanges:"rdrInputRanges",inputRange:"rdrInputRange",inputRangeInput:"rdrInputRangeInput",dateRangePickerWrapper:"rdrDateRangePickerWrapper",staticRangeLabel:"rdrStaticRangeLabel",staticRangeSelected:"rdrStaticRangeSelected",monthName:"rdrMonthName",infiniteMonths:"rdrInfiniteMonths",monthsVertical:"rdrMonthsVertical",monthsHorizontal:"rdrMonthsHorizontal"};var Qc={};Object.defineProperty(Qc,"__esModule",{value:!0});Qc.ariaLabelsShape=void 0;var Fn=_M(An);function _M(e){return e&&e.__esModule?e:{default:e}}Qc.ariaLabelsShape=Fn.default.shape({dateInput:Fn.default.objectOf(Fn.default.shape({startDate:Fn.default.string,endDate:Fn.default.string})),monthPicker:Fn.default.string,yearPicker:Fn.default.string,prevButton:Fn.default.string,nextButton:Fn.default.string});Object.defineProperty(ea,"__esModule",{value:!0});ea.default=void 0;var xe=TM(b),Q=Cs(An),DM=Xn,Gm=Cs(Vc),Qm=Cs(Gc),Ra=rr,Wr=Cs(vi),CM=Cs($4),EM=L4,Ee=Si,jM=gh,OM=Cs(bi),PM=Qc;function Cs(e){return e&&e.__esModule?e:{default:e}}function Hw(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Hw=function(r){return r?n:t})(e)}function TM(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Hw(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}function Ht(e,t,n){return t=RM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RM(e){var t=MM(e,"string");return typeof t=="symbol"?t:String(t)}function MM(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class gs extends xe.PureComponent{constructor(t,n){var r;super(t,n),r=this,Ht(this,"focusToDate",function(i){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r.props,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!s.scroll.enabled){if(o&&s.preventSnapRefocus){const u=(0,Ee.differenceInCalendarMonths)(i,r.state.focusedDate),d=s.calendarFocus==="forwards"&&u>=0,f=s.calendarFocus==="backwards"&&u<=0;if((d||f)&&Math.abs(u)<s.months)return}r.setState({focusedDate:i});return}const a=(0,Ee.differenceInCalendarMonths)(i,s.minDate,r.dateOptions),l=r.list.getVisibleRange();o&&l.includes(a)||(r.isFirstRender=!0,r.list.scrollTo(a),r.setState({focusedDate:i}))}),Ht(this,"updateShownDate",function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r.props;const s=i.scroll.enabled?{...i,months:r.list.getVisibleRange().length}:i,o=(0,Ra.calcFocusDate)(r.state.focusedDate,s);r.focusToDate(o,s)}),Ht(this,"updatePreview",i=>{if(!i){this.setState({preview:null});return}const s={startDate:i,endDate:i,color:this.props.color};this.setState({preview:s})}),Ht(this,"changeShownDate",function(i){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"set";const{focusedDate:o}=r.state,{onShownDateChange:a,minDate:l,maxDate:u}=r.props,d={monthOffset:()=>(0,Ee.addMonths)(o,i),setMonth:()=>(0,Ee.setMonth)(o,i),setYear:()=>(0,Ee.setYear)(o,i),set:()=>i},f=(0,Ee.min)([(0,Ee.max)([d[s](),l]),u]);r.focusToDate(f,r.props,!1),a&&a(f)}),Ht(this,"handleRangeFocusChange",(i,s)=>{this.props.onRangeFocusChange&&this.props.onRangeFocusChange([i,s])}),Ht(this,"handleScroll",()=>{const{onShownDateChange:i,minDate:s}=this.props,{focusedDate:o}=this.state,{isFirstRender:a}=this,l=this.list.getVisibleRange();if(l[0]===void 0)return;const u=(0,Ee.addMonths)(s,l[0]||0);!(0,Ee.isSameMonth)(u,o)&&!a&&(this.setState({focusedDate:u}),i&&i(u)),this.isFirstRender=!1}),Ht(this,"renderMonthAndYear",(i,s,o)=>{const{showMonthArrow:a,minDate:l,maxDate:u,showMonthAndYearPickers:d,ariaLabels:f}=o,p=(u||gs.defaultProps.maxDate).getFullYear(),g=(l||gs.defaultProps.minDate).getFullYear(),x=this.styles;return xe.default.createElement("div",{onMouseUp:y=>y.stopPropagation(),className:x.monthAndYearWrapper},a?xe.default.createElement("button",{type:"button",className:(0,Wr.default)(x.nextPrevButton,x.prevButton),onClick:()=>s(-1,"monthOffset"),"aria-label":f.prevButton},xe.default.createElement("i",null)):null,d?xe.default.createElement("span",{className:x.monthAndYearPickers},xe.default.createElement("span",{className:x.monthPicker},xe.default.createElement("select",{value:i.getMonth(),onChange:y=>s(y.target.value,"setMonth"),"aria-label":f.monthPicker},this.state.monthNames.map((y,S)=>xe.default.createElement("option",{key:S,value:S},y)))),xe.default.createElement("span",{className:x.monthAndYearDivider}),xe.default.createElement("span",{className:x.yearPicker},xe.default.createElement("select",{value:i.getFullYear(),onChange:y=>s(y.target.value,"setYear"),"aria-label":f.yearPicker},new Array(p-g+1).fill(p).map((y,S)=>{const v=y-S;return xe.default.createElement("option",{key:v,value:v},v)})))):xe.default.createElement("span",{className:x.monthAndYearPickers},this.state.monthNames[i.getMonth()]," ",i.getFullYear()),a?xe.default.createElement("button",{type:"button",className:(0,Wr.default)(x.nextPrevButton,x.nextButton),onClick:()=>s(1,"monthOffset"),"aria-label":f.nextButton},xe.default.createElement("i",null)):null)}),Ht(this,"renderDateDisplay",()=>{const{focusedRange:i,color:s,ranges:o,rangeColors:a,dateDisplayFormat:l,editableDateInputs:u,startDatePlaceholder:d,endDatePlaceholder:f,ariaLabels:p}=this.props,g=a[i[0]]||s,x=this.styles;return xe.default.createElement("div",{className:x.dateDisplayWrapper},o.map((y,S)=>y.showDateDisplay===!1||y.disabled&&!y.showDateDisplay?null:xe.default.createElement("div",{className:x.dateDisplay,key:S,style:{color:y.color||g}},xe.default.createElement(Qm.default,{className:(0,Wr.default)(x.dateDisplayItem,{[x.dateDisplayItemActive]:i[0]===S&&i[1]===0}),readOnly:!u,disabled:y.disabled,value:y.startDate,placeholder:d,dateOptions:this.dateOptions,dateDisplayFormat:l,ariaLabel:p.dateInput&&p.dateInput[y.key]&&p.dateInput[y.key].startDate,onChange:this.onDragSelectionEnd,onFocus:()=>this.handleRangeFocusChange(S,0)}),xe.default.createElement(Qm.default,{className:(0,Wr.default)(x.dateDisplayItem,{[x.dateDisplayItemActive]:i[0]===S&&i[1]===1}),readOnly:!u,disabled:y.disabled,value:y.endDate,placeholder:f,dateOptions:this.dateOptions,dateDisplayFormat:l,ariaLabel:p.dateInput&&p.dateInput[y.key]&&p.dateInput[y.key].endDate,onChange:this.onDragSelectionEnd,onFocus:()=>this.handleRangeFocusChange(S,1)}))))}),Ht(this,"onDragSelectionStart",i=>{const{onChange:s,dragSelectionEnabled:o}=this.props;o?this.setState({drag:{status:!0,range:{startDate:i,endDate:i},disablePreview:!0}}):s&&s(i)}),Ht(this,"onDragSelectionEnd",i=>{const{updateRange:s,displayMode:o,onChange:a,dragSelectionEnabled:l}=this.props;if(!l)return;if(o==="date"||!this.state.drag.status){a&&a(i);return}const u={startDate:this.state.drag.range.startDate,endDate:i};o!=="dateRange"||(0,Ee.isSameDay)(u.startDate,i)?this.setState({drag:{status:!1,range:{}}},()=>a&&a(i)):this.setState({drag:{status:!1,range:{}}},()=>{s&&s(u)})}),Ht(this,"onDragSelectionMove",i=>{const{drag:s}=this.state;!s.status||!this.props.dragSelectionEnabled||this.setState({drag:{status:s.status,range:{startDate:s.range.startDate,endDate:i},disablePreview:!0}})}),Ht(this,"estimateMonthSize",(i,s)=>{const{direction:o,minDate:a}=this.props,{scrollArea:l}=this.state;if(s&&(this.listSizeCache=s,s[i]))return s[i];if(o==="horizontal")return l.monthWidth;const u=(0,Ee.addMonths)(a,i),{start:d,end:f}=(0,Ra.getMonthDisplayRange)(u,this.dateOptions);return(0,Ee.differenceInDays)(f,d,this.dateOptions)+1>7*5?l.longMonthHeight:l.monthHeight}),this.dateOptions={locale:t.locale},t.weekStartsOn!==void 0&&(this.dateOptions.weekStartsOn=t.weekStartsOn),this.styles=(0,Ra.generateStyles)([OM.default,t.classNames]),this.listSizeCache={},this.isFirstRender=!0,this.state={monthNames:this.getMonthNames(),focusedDate:(0,Ra.calcFocusDate)(null,t),drag:{status:!1,range:{startDate:null,endDate:null},disablePreview:!1},scrollArea:this.calcScrollArea(t)}}getMonthNames(){return[...Array(12).keys()].map(t=>this.props.locale.localize.month(t))}calcScrollArea(t){const{direction:n,months:r,scroll:i}=t;if(!i.enabled)return{enabled:!1};const s=i.longMonthHeight||i.monthHeight;return n==="vertical"?{enabled:!0,monthHeight:i.monthHeight||220,longMonthHeight:s||260,calendarWidth:"auto",calendarHeight:(i.calendarHeight||s||240)*r}:{enabled:!0,monthWidth:i.monthWidth||332,calendarWidth:(i.calendarWidth||i.monthWidth||332)*r,monthHeight:s||300,calendarHeight:s||300}}componentDidMount(){this.props.scroll.enabled&&setTimeout(()=>this.focusToDate(this.state.focusedDate))}componentDidUpdate(t){const r={dateRange:"ranges",date:"date"}[this.props.displayMode];this.props[r]!==t[r]&&this.updateShownDate(this.props),(t.locale!==this.props.locale||t.weekStartsOn!==this.props.weekStartsOn)&&(this.dateOptions={locale:this.props.locale},this.props.weekStartsOn!==void 0&&(this.dateOptions.weekStartsOn=this.props.weekStartsOn),this.setState({monthNames:this.getMonthNames()})),(0,EM.shallowEqualObjects)(t.scroll,this.props.scroll)||this.setState({scrollArea:this.calcScrollArea(this.props)})}renderWeekdays(){const t=new Date;return xe.default.createElement("div",{className:this.styles.weekDays},(0,Ee.eachDayOfInterval)({start:(0,Ee.startOfWeek)(t,this.dateOptions),end:(0,Ee.endOfWeek)(t,this.dateOptions)}).map((n,r)=>xe.default.createElement("span",{className:this.styles.weekDay,key:r},(0,Ee.format)(n,this.props.weekdayDisplayFormat,this.dateOptions))))}render(){const{showDateDisplay:t,onPreviewChange:n,scroll:r,direction:i,disabledDates:s,disabledDay:o,maxDate:a,minDate:l,rangeColors:u,color:d,navigatorRenderer:f,className:p,preview:g}=this.props,{scrollArea:x,focusedDate:y}=this.state,S=i==="vertical",v=f||this.renderMonthAndYear,m=this.props.ranges.map((w,k)=>({...w,color:w.color||u[k]||d}));return xe.default.createElement("div",{className:(0,Wr.default)(this.styles.calendarWrapper,p),onMouseUp:()=>this.setState({drag:{status:!1,range:{}}}),onMouseLeave:()=>{this.setState({drag:{status:!1,range:{}}})}},t&&this.renderDateDisplay(),v(y,this.changeShownDate,this.props),r.enabled?xe.default.createElement("div",null,S&&this.renderWeekdays(this.dateOptions),xe.default.createElement("div",{className:(0,Wr.default)(this.styles.infiniteMonths,S?this.styles.monthsVertical:this.styles.monthsHorizontal),onMouseLeave:()=>n&&n(),style:{width:x.calendarWidth+11,height:x.calendarHeight+11},onScroll:this.handleScroll},xe.default.createElement(CM.default,{length:(0,Ee.differenceInCalendarMonths)((0,Ee.endOfMonth)(a),(0,Ee.addDays)((0,Ee.startOfMonth)(l),-1),this.dateOptions),treshold:500,type:"variable",ref:w=>this.list=w,itemSizeEstimator:this.estimateMonthSize,axis:S?"y":"x",itemRenderer:(w,k)=>{const _=(0,Ee.addMonths)(l,w);return xe.default.createElement(Gm.default,Zl({},this.props,{onPreviewChange:n||this.updatePreview,preview:g||this.state.preview,ranges:m,key:k,drag:this.state.drag,dateOptions:this.dateOptions,disabledDates:s,disabledDay:o,month:_,onDragSelectionStart:this.onDragSelectionStart,onDragSelectionEnd:this.onDragSelectionEnd,onDragSelectionMove:this.onDragSelectionMove,onMouseLeave:()=>n&&n(),styles:this.styles,style:S?{height:this.estimateMonthSize(w)}:{height:x.monthHeight,width:this.estimateMonthSize(w)},showMonthName:!0,showWeekDays:!S}))}}))):xe.default.createElement("div",{className:(0,Wr.default)(this.styles.months,S?this.styles.monthsVertical:this.styles.monthsHorizontal)},new Array(this.props.months).fill(null).map((w,k)=>{let _=(0,Ee.addMonths)(this.state.focusedDate,k);return this.props.calendarFocus==="backwards"&&(_=(0,Ee.subMonths)(this.state.focusedDate,this.props.months-1-k)),xe.default.createElement(Gm.default,Zl({},this.props,{onPreviewChange:n||this.updatePreview,preview:g||this.state.preview,ranges:m,key:k,drag:this.state.drag,dateOptions:this.dateOptions,disabledDates:s,disabledDay:o,month:_,onDragSelectionStart:this.onDragSelectionStart,onDragSelectionEnd:this.onDragSelectionEnd,onDragSelectionMove:this.onDragSelectionMove,onMouseLeave:()=>n&&n(),styles:this.styles,showWeekDays:!S||k===0,showMonthName:!S||k>0}))})))}}gs.defaultProps={showMonthArrow:!0,showMonthAndYearPickers:!0,disabledDates:[],disabledDay:()=>{},classNames:{},locale:jM.enUS,ranges:[],focusedRange:[0,0],dateDisplayFormat:"MMM d, yyyy",monthDisplayFormat:"MMM yyyy",weekdayDisplayFormat:"E",dayDisplayFormat:"d",showDateDisplay:!0,showPreview:!0,displayMode:"date",months:1,color:"#3d91ff",scroll:{enabled:!1},direction:"vertical",maxDate:(0,Ee.addYears)(new Date,20),minDate:(0,Ee.addYears)(new Date,-100),rangeColors:["#3d91ff","#3ecf8e","#fed14c"],startDatePlaceholder:"Early",endDatePlaceholder:"Continuous",editableDateInputs:!1,dragSelectionEnabled:!0,fixedHeight:!1,calendarFocus:"forwards",preventSnapRefocus:!1,ariaLabels:{}};gs.propTypes={showMonthArrow:Q.default.bool,showMonthAndYearPickers:Q.default.bool,disabledDates:Q.default.array,disabledDay:Q.default.func,minDate:Q.default.object,maxDate:Q.default.object,date:Q.default.object,onChange:Q.default.func,onPreviewChange:Q.default.func,onRangeFocusChange:Q.default.func,classNames:Q.default.object,locale:Q.default.object,shownDate:Q.default.object,onShownDateChange:Q.default.func,ranges:Q.default.arrayOf(DM.rangeShape),preview:Q.default.shape({startDate:Q.default.object,endDate:Q.default.object,color:Q.default.string}),dateDisplayFormat:Q.default.string,monthDisplayFormat:Q.default.string,weekdayDisplayFormat:Q.default.string,weekStartsOn:Q.default.number,dayDisplayFormat:Q.default.string,focusedRange:Q.default.arrayOf(Q.default.number),initialFocusedRange:Q.default.arrayOf(Q.default.number),months:Q.default.number,className:Q.default.string,showDateDisplay:Q.default.bool,showPreview:Q.default.bool,displayMode:Q.default.oneOf(["dateRange","date"]),color:Q.default.string,updateRange:Q.default.func,scroll:Q.default.shape({enabled:Q.default.bool,monthHeight:Q.default.number,longMonthHeight:Q.default.number,monthWidth:Q.default.number,calendarWidth:Q.default.number,calendarHeight:Q.default.number}),direction:Q.default.oneOf(["vertical","horizontal"]),startDatePlaceholder:Q.default.string,endDatePlaceholder:Q.default.string,navigatorRenderer:Q.default.func,rangeColors:Q.default.arrayOf(Q.default.string),editableDateInputs:Q.default.bool,dragSelectionEnabled:Q.default.bool,fixedHeight:Q.default.bool,calendarFocus:Q.default.string,preventSnapRefocus:Q.default.bool,ariaLabels:PM.ariaLabelsShape};ea.default=gs;Object.defineProperty(Zo,"__esModule",{value:!0});Zo.default=void 0;var Km=AM(b),Ci=Kc(An),Yw=Kc(ea),NM=Xn,Yu=rr,Sn=Si,$M=Kc(vi),IM=Kc(bi);function Kc(e){return e&&e.__esModule?e:{default:e}}function qw(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(qw=function(r){return r?n:t})(e)}function AM(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=qw(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function Ef(){return Ef=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ef.apply(this,arguments)}function Ma(e,t,n){return t=FM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FM(e){var t=LM(e,"string");return typeof t=="symbol"?t:String(t)}function LM(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Sh extends Km.Component{constructor(t,n){var r;super(t,n),r=this,Ma(this,"calcNewSelection",function(i){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const o=r.props.focusedRange||r.state.focusedRange,{ranges:a,onChange:l,maxDate:u,moveRangeOnFirstSelection:d,retainEndDateOnFirstSelection:f,disabledDates:p}=r.props,g=o[0],x=a[g];if(!x||!l)return{};let{startDate:y,endDate:S}=x;const v=new Date;let m;if(!s)y=i.startDate,S=i.endDate;else if(o[1]===0){const _=(0,Sn.differenceInCalendarDays)(S||v,y),E=()=>d?(0,Sn.addDays)(i,_):f?!S||(0,Sn.isBefore)(i,S)?S:i:i||v;y=i,S=E(),u&&(S=(0,Sn.min)([S,u])),m=[o[0],1]}else S=i;let w=o[1]===0;(0,Sn.isBefore)(S,y)&&(w=!w,[y,S]=[S,y]);const k=p.filter(_=>(0,Sn.isWithinInterval)(_,{start:y,end:S}));return k.length>0&&(w?y=(0,Sn.addDays)((0,Sn.max)(k),1):S=(0,Sn.addDays)((0,Sn.min)(k),-1)),m||(m=[(0,Yu.findNextRangeIndex)(r.props.ranges,o[0]),0]),{wasValid:!(k.length>0),range:{startDate:y,endDate:S},nextFocusRange:m}}),Ma(this,"setSelection",(i,s)=>{const{onChange:o,ranges:a,onRangeFocusChange:l}=this.props,d=(this.props.focusedRange||this.state.focusedRange)[0],f=a[d];if(!f)return;const p=this.calcNewSelection(i,s);o({[f.key||`range${d+1}`]:{...f,...p.range}}),this.setState({focusedRange:p.nextFocusRange,preview:null}),l&&l(p.nextFocusRange)}),Ma(this,"handleRangeFocusChange",i=>{this.setState({focusedRange:i}),this.props.onRangeFocusChange&&this.props.onRangeFocusChange(i)}),Ma(this,"updatePreview",i=>{var u;if(!i){this.setState({preview:null});return}const{rangeColors:s,ranges:o}=this.props,a=this.props.focusedRange||this.state.focusedRange,l=((u=o[a[0]])==null?void 0:u.color)||s[a[0]]||l;this.setState({preview:{...i.range,color:l}})}),this.state={focusedRange:t.initialFocusedRange||[(0,Yu.findNextRangeIndex)(t.ranges),0],preview:null},this.styles=(0,Yu.generateStyles)([IM.default,t.classNames])}render(){return Km.default.createElement(Yw.default,Ef({focusedRange:this.state.focusedRange,onRangeFocusChange:this.handleRangeFocusChange,preview:this.state.preview,onPreviewChange:t=>{this.updatePreview(t?this.calcNewSelection(t):null)}},this.props,{displayMode:"dateRange",className:(0,$M.default)(this.styles.dateRangeWrapper,this.props.className),onChange:this.setSelection,updateRange:t=>this.setSelection(t,!1),ref:t=>{this.calendar=t}}))}}Sh.defaultProps={classNames:{},ranges:[],moveRangeOnFirstSelection:!1,retainEndDateOnFirstSelection:!1,rangeColors:["#3d91ff","#3ecf8e","#fed14c"],disabledDates:[]};Sh.propTypes={...Yw.default.propTypes,onChange:Ci.default.func,onRangeFocusChange:Ci.default.func,className:Ci.default.string,ranges:Ci.default.arrayOf(NM.rangeShape),moveRangeOnFirstSelection:Ci.default.bool,retainEndDateOnFirstSelection:Ci.default.bool};Zo.default=Sh;var Xc={},sa={},Rr={};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.createStaticRanges=Vw;Rr.defaultStaticRanges=Rr.defaultInputRanges=void 0;var ke=Si;const Ge={startOfWeek:(0,ke.startOfWeek)(new Date),endOfWeek:(0,ke.endOfWeek)(new Date),startOfLastWeek:(0,ke.startOfWeek)((0,ke.addDays)(new Date,-7)),endOfLastWeek:(0,ke.endOfWeek)((0,ke.addDays)(new Date,-7)),startOfToday:(0,ke.startOfDay)(new Date),endOfToday:(0,ke.endOfDay)(new Date),startOfYesterday:(0,ke.startOfDay)((0,ke.addDays)(new Date,-1)),endOfYesterday:(0,ke.endOfDay)((0,ke.addDays)(new Date,-1)),startOfMonth:(0,ke.startOfMonth)(new Date),endOfMonth:(0,ke.endOfMonth)(new Date),startOfLastMonth:(0,ke.startOfMonth)((0,ke.addMonths)(new Date,-1)),endOfLastMonth:(0,ke.endOfMonth)((0,ke.addMonths)(new Date,-1))},zM={range:{},isSelected(e){const t=this.range();return(0,ke.isSameDay)(e.startDate,t.startDate)&&(0,ke.isSameDay)(e.endDate,t.endDate)}};function Vw(e){return e.map(t=>({...zM,...t}))}Rr.defaultStaticRanges=Vw([{label:"Today",range:()=>({startDate:Ge.startOfToday,endDate:Ge.endOfToday})},{label:"Yesterday",range:()=>({startDate:Ge.startOfYesterday,endDate:Ge.endOfYesterday})},{label:"This Week",range:()=>({startDate:Ge.startOfWeek,endDate:Ge.endOfWeek})},{label:"Last Week",range:()=>({startDate:Ge.startOfLastWeek,endDate:Ge.endOfLastWeek})},{label:"This Month",range:()=>({startDate:Ge.startOfMonth,endDate:Ge.endOfMonth})},{label:"Last Month",range:()=>({startDate:Ge.startOfLastMonth,endDate:Ge.endOfLastMonth})}]);Rr.defaultInputRanges=[{label:"days up to today",range(e){return{startDate:(0,ke.addDays)(Ge.startOfToday,(Math.max(Number(e),1)-1)*-1),endDate:Ge.endOfToday}},getCurrentValue(e){return(0,ke.isSameDay)(e.endDate,Ge.endOfToday)?e.startDate?(0,ke.differenceInCalendarDays)(Ge.endOfToday,e.startDate)+1:"∞":"-"}},{label:"days starting today",range(e){const t=new Date;return{startDate:t,endDate:(0,ke.addDays)(t,Math.max(Number(e),1)-1)}},getCurrentValue(e){return(0,ke.isSameDay)(e.startDate,Ge.startOfToday)?e.endDate?(0,ke.differenceInCalendarDays)(e.endDate,Ge.startOfToday)+1:"∞":"-"}}];var Jc={};Object.defineProperty(Jc,"__esModule",{value:!0});Jc.default=void 0;var Na=BM(b),bt=WM(An);function WM(e){return e&&e.__esModule?e:{default:e}}function Gw(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Gw=function(r){return r?n:t})(e)}function BM(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Gw(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function UM(e,t,n){return t=HM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HM(e){var t=YM(e,"string");return typeof t=="symbol"?t:String(t)}function YM(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const Xm=0,Jm=99999;class bh extends Na.Component{constructor(t,n){super(t,n),UM(this,"onChange",r=>{const{onChange:i}=this.props;let s=parseInt(r.target.value,10);s=isNaN(s)?0:Math.max(Math.min(Jm,s),Xm),i(s)})}shouldComponentUpdate(t){const{value:n,label:r,placeholder:i}=this.props;return n!==t.value||r!==t.label||i!==t.placeholder}render(){const{label:t,placeholder:n,value:r,styles:i,onBlur:s,onFocus:o}=this.props;return Na.default.createElement("div",{className:i.inputRange},Na.default.createElement("input",{className:i.inputRangeInput,placeholder:n,value:r,min:Xm,max:Jm,onChange:this.onChange,onFocus:o,onBlur:s}),Na.default.createElement("span",{className:i.inputRangeLabel},t))}}bh.propTypes={value:bt.default.oneOfType([bt.default.string,bt.default.number]),label:bt.default.oneOfType([bt.default.element,bt.default.node]).isRequired,placeholder:bt.default.string,styles:bt.default.shape({inputRange:bt.default.string,inputRangeInput:bt.default.string,inputRangeLabel:bt.default.string}).isRequired,onBlur:bt.default.func.isRequired,onFocus:bt.default.func.isRequired,onChange:bt.default.func.isRequired};bh.defaultProps={value:"",placeholder:"-"};Jc.default=bh;Object.defineProperty(sa,"__esModule",{value:!0});sa.default=void 0;var Br=GM(b),Rt=Zc(An),Ur=Zc(bi),Zm=Rr,qM=Xn,VM=Zc(Jc),e0=Zc(vi);function Zc(e){return e&&e.__esModule?e:{default:e}}function Qw(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Qw=function(r){return r?n:t})(e)}function GM(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Qw(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function QM(e,t,n){return t=KM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KM(e){var t=XM(e,"string");return typeof t=="symbol"?t:String(t)}function XM(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class kh extends Br.Component{constructor(t){super(t),QM(this,"handleRangeChange",n=>{const{onChange:r,ranges:i,focusedRange:s}=this.props,o=i[s[0]];!r||!o||r({[o.key||`range${s[0]+1}`]:{...o,...n}})}),this.state={rangeOffset:0,focusedInput:-1}}getRangeOptionValue(t){const{ranges:n=[],focusedRange:r=[]}=this.props;if(typeof t.getCurrentValue!="function")return"";const i=n[r[0]]||{};return t.getCurrentValue(i)||""}getSelectedRange(t,n){const r=t.findIndex(s=>!s.startDate||!s.endDate||s.disabled?!1:n.isSelected(s));return{selectedRange:t[r],focusedRangeIndex:r}}render(){const{headerContent:t,footerContent:n,onPreviewChange:r,inputRanges:i,staticRanges:s,ranges:o,renderStaticRangeLabel:a,rangeColors:l,className:u}=this.props;return Br.default.createElement("div",{className:(0,e0.default)(Ur.default.definedRangesWrapper,u)},t,Br.default.createElement("div",{className:Ur.default.staticRanges},s.map((d,f)=>{const{selectedRange:p,focusedRangeIndex:g}=this.getSelectedRange(o,d);let x;return d.hasCustomRendering?x=a(d):x=d.label,Br.default.createElement("button",{type:"button",className:(0,e0.default)(Ur.default.staticRange,{[Ur.default.staticRangeSelected]:!!p}),style:{color:p?p.color||l[g]:null},key:f,onClick:()=>this.handleRangeChange(d.range(this.props)),onFocus:()=>r&&r(d.range(this.props)),onMouseOver:()=>r&&r(d.range(this.props)),onMouseLeave:()=>{r&&r()}},Br.default.createElement("span",{tabIndex:-1,className:Ur.default.staticRangeLabel},x))})),Br.default.createElement("div",{className:Ur.default.inputRanges},i.map((d,f)=>Br.default.createElement(VM.default,{key:f,styles:Ur.default,label:d.label,onFocus:()=>this.setState({focusedInput:f,rangeOffset:0}),onBlur:()=>this.setState({rangeOffset:0}),onChange:p=>this.handleRangeChange(d.range(p,this.props)),value:this.getRangeOptionValue(d)}))),n)}}kh.propTypes={inputRanges:Rt.default.array,staticRanges:Rt.default.array,ranges:Rt.default.arrayOf(qM.rangeShape),focusedRange:Rt.default.arrayOf(Rt.default.number),onPreviewChange:Rt.default.func,onChange:Rt.default.func,footerContent:Rt.default.any,headerContent:Rt.default.any,rangeColors:Rt.default.arrayOf(Rt.default.string),className:Rt.default.string,renderStaticRangeLabel:Rt.default.func};kh.defaultProps={inputRanges:Zm.defaultInputRanges,staticRanges:Zm.defaultStaticRanges,ranges:[],rangeColors:["#3d91ff","#3ecf8e","#fed14c"],focusedRange:[0,0]};sa.default=kh;Object.defineProperty(Xc,"__esModule",{value:!0});Xc.default=void 0;var $a=tN(b),JM=oa(An),Kw=oa(Zo),Xw=oa(sa),t0=rr,ZM=oa(vi),eN=oa(bi);function oa(e){return e&&e.__esModule?e:{default:e}}function Jw(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Jw=function(r){return r?n:t})(e)}function tN(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Jw(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ec.apply(this,arguments)}class _h extends $a.Component{constructor(t){super(t),this.state={focusedRange:[(0,t0.findNextRangeIndex)(t.ranges),0]},this.styles=(0,t0.generateStyles)([eN.default,t.classNames])}render(){const{focusedRange:t}=this.state;return $a.default.createElement("div",{className:(0,ZM.default)(this.styles.dateRangePickerWrapper,this.props.className)},$a.default.createElement(Xw.default,ec({focusedRange:t,onPreviewChange:n=>this.dateRange.updatePreview(n?this.dateRange.calcNewSelection(n,typeof n=="string"):null)},this.props,{range:this.props.ranges[t[0]],className:void 0})),$a.default.createElement(Kw.default,ec({onRangeFocusChange:n=>this.setState({focusedRange:n}),focusedRange:t},this.props,{ref:n=>this.dateRange=n,className:void 0})))}}_h.defaultProps={};_h.propTypes={...Kw.default.propTypes,...Xw.default.propTypes,className:JM.default.string};Xc.default=_h;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Calendar",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"DateRange",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"DateRangePicker",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"DefinedRange",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"createStaticRanges",{enumerable:!0,get:function(){return s.createStaticRanges}}),Object.defineProperty(e,"defaultInputRanges",{enumerable:!0,get:function(){return s.defaultInputRanges}}),Object.defineProperty(e,"defaultStaticRanges",{enumerable:!0,get:function(){return s.defaultStaticRanges}});var t=o(Zo),n=o(ea),r=o(Xc),i=o(sa),s=Rr;function o(a){return a&&a.__esModule?a:{default:a}}})(k1);function Hs(e,t){if(e.one!==void 0&&t===1)return e.one;const n=t%10,r=t%100;return n===1&&r!==11?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(r<10||r>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function ht(e){return(t,n)=>n!=null&&n.addSuffix?n.comparison&&n.comparison>0?e.future?Hs(e.future,t):"через "+Hs(e.regular,t):e.past?Hs(e.past,t):Hs(e.regular,t)+" назад":Hs(e.regular,t)}const nN={lessThanXSeconds:ht({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:ht({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:(e,t)=>t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"через полминуты":"полминуты назад":"полминуты",lessThanXMinutes:ht({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:ht({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:ht({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:ht({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:ht({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:ht({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:ht({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:ht({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:ht({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:ht({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:ht({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:ht({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:ht({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},rN=(e,t,n)=>nN[e](t,n),iN={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},sN={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},oN={any:"{{date}}, {{time}}"},aN={date:Zi({formats:iN,defaultWidth:"full"}),time:Zi({formats:sN,defaultWidth:"full"}),dateTime:Zi({formats:oN,defaultWidth:"any"})},Dh=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function lN(e){const t=Dh[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}function n0(e){const t=Dh[e];return e===2?"'во "+t+" в' p":"'в "+t+" в' p"}function cN(e){const t=Dh[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}const uN={lastWeek:(e,t,n)=>{const r=e.getDay();return Ao(e,t,n)?n0(r):lN(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:(e,t,n)=>{const r=e.getDay();return Ao(e,t,n)?n0(r):cN(r)},other:"P"},dN=(e,t,n,r)=>{const i=uN[e];return typeof i=="function"?i(t,n,r):i},fN={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},pN={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},hN={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},gN={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},mN={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},yN={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},xN={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},vN=(e,t)=>{const n=Number(e),r=t==null?void 0:t.unit;let i;return r==="date"?i="-е":r==="week"||r==="minute"||r==="second"?i="-я":i="-й",n+i},wN={ordinalNumber:vN,era:En({values:fN,defaultWidth:"wide"}),quarter:En({values:pN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:En({values:hN,defaultWidth:"wide",formattingValues:gN,defaultFormattingWidth:"wide"}),day:En({values:mN,defaultWidth:"wide"}),dayPeriod:En({values:yN,defaultWidth:"any",formattingValues:xN,defaultFormattingWidth:"wide"})},SN=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,bN=/\d+/i,kN={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},_N={any:[/^д/i,/^н/i]},DN={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},CN={any:[/1/i,/2/i,/3/i,/4/i]},EN={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},jN={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},ON={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},PN={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},TN={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},RN={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},MN={ordinalNumber:ew({matchPattern:SN,parsePattern:bN,valueCallback:e=>parseInt(e,10)}),era:jn({matchPatterns:kN,defaultMatchWidth:"wide",parsePatterns:_N,defaultParseWidth:"any"}),quarter:jn({matchPatterns:DN,defaultMatchWidth:"wide",parsePatterns:CN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:jn({matchPatterns:EN,defaultMatchWidth:"wide",parsePatterns:jN,defaultParseWidth:"any"}),day:jn({matchPatterns:ON,defaultMatchWidth:"wide",parsePatterns:PN,defaultParseWidth:"any"}),dayPeriod:jn({matchPatterns:TN,defaultMatchWidth:"wide",parsePatterns:RN,defaultParseWidth:"any"})},tc={code:"ru",formatDistance:rN,formatLong:aN,formatRelative:dN,localize:wN,match:MN,options:{weekStartsOn:1,firstWeekContainsDate:1}},NN=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],$N=h.div`
      padding: 24px;
      width: 392px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      box-shadow: 0px 32px 48px -8px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05);
      border-radius: 16px;
      background: #fcfcfc;
`,IN=h.div`
      height: 1px;
      width: 344px;
      background: #efefef;
      margin-top: 24px;
`,r0=h.input`
      width: 100%;
      background: #f4f4f4;
      padding: 12px;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #33383f;
      border: none;
      border-radius: 12px;
      outline: none;
      &:focus {
            outline: none;
      }
      &::placeholder {
            color: #6f767e;
      }
`,AN=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      margin-top: 32px;
`,Zw=({date:e,setDate:t,close:n,startStringDate:r,setStartStringDate:i,endStringDate:s,setEndStringDate:o})=>{b.useEffect(()=>{e.startDate&&i(a(e.startDate)),e.endDate&&o(a(e.endDate))},[e,i,o]);const a=f=>{const p=f.getDate(),g=f.getMonth(),x=NN[g];return p+" "+x},l=f=>{t(f.selection)},u=f=>{f.preventDefault(),t({startDate:new Date,endDate:new Date,key:"selection"})},d=()=>{n()};return c.jsxs($N,{children:[c.jsx(k1.DateRange,{locale:tc,ranges:[e],onChange:l,color:"#2A85FF",showMonthAndYearPickers:!1}),c.jsx(IN,{}),c.jsx(r0,{placeholder:"Дата начала",value:r,style:{marginTop:"24px"},disabled:!0}),c.jsx(r0,{placeholder:"Дата окончания",value:s,style:{marginTop:"16px"},disabled:!0}),c.jsxs(AN,{children:[c.jsx(ps,{style:{padding:"8px 16px 8px 16px",fontSize:"13px",height:"40px"},onClick:u,children:"Очистить"}),c.jsx(Je,{style:{padding:"8px 16px 8px 16px",height:"40px",fontSize:"13px"},onClick:d,children:"Сохранить"})]})]})},FN=h.div`
      padding: 16px;
      width: 280px;
      height: 272px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0px 32px 48px -8px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05);
      box-shadow: 0px 40px 64px -12px rgba(0, 0, 0, 0.08);
      cursor: auto;
`,LN=h.div`
      width: 100%;
      overflow: auto;
`,eS=({setIsQueryDropdown:e,...t})=>{const n=b.useRef(null);return b.useEffect(()=>{const r=({target:i})=>{var s;(s=n.current)!=null&&s.contains(i)||e(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[e]),c.jsxs(FN,{...t,ref:n,children:[c.jsx(Jo,{}),c.jsx(LN,{children:t.children})]})},zN=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      height: 48px;
      border-radius: 12px;
      padding: 8px 3px 8px 3px;
      cursor: pointer;
`,WN=h.div`
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #b1e5fc;
      & > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
      }
`,BN=h.div`
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;
      user-select: none;
`,tS=({avatarUrl:e,name:t,...n})=>c.jsxs(zN,{...n,children:[c.jsx(WN,{children:e&&c.jsx("img",{src:e})}),c.jsx(BN,{children:t})]}),UN=async(e,t,n)=>{const r={name:t,color:n};return await re.post(X+"/projects",r,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(s){return s<500}})},mn=async e=>await re.get(X+"/projects",{headers:{Authorization:`Bearer ${e}`},validateStatus:function(n){return n<500}}),HN=async(e,t,n)=>{const r={email:n};return await re.post(`${X}/projects/${t}/user`,r,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(s){return s<500}})},YN=async(e,t,n)=>await re.post(`${X}/projects/${t}/task`,n,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(i){return i<500}}),jf=async(e,t,n,r)=>await re.put(`${X}/projects/${t}/task/${n}`,r,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(s){return s<500}}),qN=async(e,t,n)=>await re.delete(`${X}/projects/${t}/task/${n}`,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(i){return i<500}});function et(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var VN=typeof Symbol=="function"&&Symbol.observable||"@@observable",i0=VN,qu=()=>Math.random().toString(36).substring(7).split("").join("."),GN={INIT:`@@redux/INIT${qu()}`,REPLACE:`@@redux/REPLACE${qu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${qu()}`},nc=GN;function Ch(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function nS(e,t,n){if(typeof e!="function")throw new Error(et(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(et(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(et(1));return n(nS)(e,t)}let r=e,i=t,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,v)=>{o.set(v,S)}))}function d(){if(l)throw new Error(et(3));return i}function f(S){if(typeof S!="function")throw new Error(et(4));if(l)throw new Error(et(5));let v=!0;u();const m=a++;return o.set(m,S),function(){if(v){if(l)throw new Error(et(6));v=!1,u(),o.delete(m),s=null}}}function p(S){if(!Ch(S))throw new Error(et(7));if(typeof S.type>"u")throw new Error(et(8));if(typeof S.type!="string")throw new Error(et(17));if(l)throw new Error(et(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(m=>{m()}),S}function g(S){if(typeof S!="function")throw new Error(et(10));r=S,p({type:nc.REPLACE})}function x(){const S=f;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(et(11));function m(){const k=v;k.next&&k.next(d())}return m(),{unsubscribe:S(m)}},[i0](){return this}}}return p({type:nc.INIT}),{dispatch:p,subscribe:f,getState:d,replaceReducer:g,[i0]:x}}function QN(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:nc.INIT})>"u")throw new Error(et(12));if(typeof n(void 0,{type:nc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(et(13))})}function rS(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const r=Object.keys(n);let i;try{QN(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const f=r[d],p=n[f],g=o[f],x=p(g,a);if(typeof x>"u")throw a&&a.type,new Error(et(14));u[f]=x,l=l||x!==g}return l=l||r.length!==Object.keys(o).length,l?u:o}}function rc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function KN(...e){return t=>(n,r)=>{const i=t(n,r);let s=()=>{throw new Error(et(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(o));return s=rc(...a)(i.dispatch),{...i,dispatch:s}}}function XN(e){return Ch(e)&&"type"in e&&typeof e.type=="string"}var iS=Symbol.for("immer-nothing"),s0=Symbol.for("immer-draftable"),zt=Symbol.for("immer-state");function ln(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ms=Object.getPrototypeOf;function Mr(e){return!!e&&!!e[zt]}function er(e){var t;return e?sS(e)||Array.isArray(e)||!!e[s0]||!!((t=e.constructor)!=null&&t[s0])||tu(e)||nu(e):!1}var JN=Object.prototype.constructor.toString();function sS(e){if(!e||typeof e!="object")return!1;const t=ms(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===JN}function ic(e,t){eu(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function eu(e){const t=e[zt];return t?t.type_:Array.isArray(e)?1:tu(e)?2:nu(e)?3:0}function Of(e,t){return eu(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function oS(e,t,n){const r=eu(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function ZN(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function tu(e){return e instanceof Map}function nu(e){return e instanceof Set}function Xr(e){return e.copy_||e.base_}function Pf(e,t){if(tu(e))return new Map(e);if(nu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=sS(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[zt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(ms(e),r)}else{const r=ms(e);if(r!==null&&n)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function Eh(e,t=!1){return ru(e)||Mr(e)||!er(e)||(eu(e)>1&&(e.set=e.add=e.clear=e.delete=e$),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>Eh(r,!0))),e}function e$(){ln(2)}function ru(e){return Object.isFrozen(e)}var t$={};function gi(e){const t=t$[e];return t||ln(0,e),t}var Fo;function aS(){return Fo}function n$(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function o0(e,t){t&&(gi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Tf(e){Rf(e),e.drafts_.forEach(r$),e.drafts_=null}function Rf(e){e===Fo&&(Fo=e.parent_)}function a0(e){return Fo=n$(Fo,e)}function r$(e){const t=e[zt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function l0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[zt].modified_&&(Tf(t),ln(4)),er(e)&&(e=sc(t,e),t.parent_||oc(t,e)),t.patches_&&gi("Patches").generateReplacementPatches_(n[zt].base_,e,t.patches_,t.inversePatches_)):e=sc(t,n,[]),Tf(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==iS?e:void 0}function sc(e,t,n){if(ru(t))return t;const r=t[zt];if(!r)return ic(t,(i,s)=>c0(e,r,t,i,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return oc(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),ic(s,(a,l)=>c0(e,r,i,a,l,n,o)),oc(e,i,!1),n&&e.patches_&&gi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function c0(e,t,n,r,i,s,o){if(Mr(i)){const a=s&&t&&t.type_!==3&&!Of(t.assigned_,r)?s.concat(r):void 0,l=sc(e,i,a);if(oS(n,r,l),Mr(l))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(er(i)&&!ru(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;sc(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&oc(e,i)}}function oc(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Eh(t,n)}function i$(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:aS(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=jh;n&&(i=[r],s=Lo);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var jh={get(e,t){if(t===zt)return e;const n=Xr(e);if(!Of(n,t))return s$(e,n,t);const r=n[t];return e.finalized_||!er(r)?r:r===Vu(e.base_,t)?(Gu(e),e.copy_[t]=Nf(r,e)):r},has(e,t){return t in Xr(e)},ownKeys(e){return Reflect.ownKeys(Xr(e))},set(e,t,n){const r=lS(Xr(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Vu(Xr(e),t),s=i==null?void 0:i[zt];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(ZN(n,i)&&(n!==void 0||Of(e.base_,t)))return!0;Gu(e),Mf(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Vu(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Gu(e),Mf(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Xr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){ln(11)},getPrototypeOf(e){return ms(e.base_)},setPrototypeOf(){ln(12)}},Lo={};ic(jh,(e,t)=>{Lo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Lo.deleteProperty=function(e,t){return Lo.set.call(this,e,t,void 0)};Lo.set=function(e,t,n){return jh.set.call(this,e[0],t,n,e[0])};function Vu(e,t){const n=e[zt];return(n?Xr(n):e)[t]}function s$(e,t,n){var i;const r=lS(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function lS(e,t){if(!(t in e))return;let n=ms(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=ms(n)}}function Mf(e){e.modified_||(e.modified_=!0,e.parent_&&Mf(e.parent_))}function Gu(e){e.copy_||(e.copy_=Pf(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var o$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&ln(6),r!==void 0&&typeof r!="function"&&ln(7);let i;if(er(t)){const s=a0(this),o=Nf(t,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Tf(s):Rf(s)}return o0(s,r),l0(i,s)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===iS&&(i=void 0),this.autoFreeze_&&Eh(i,!0),r){const s=[],o=[];gi("Patches").generateReplacementPatches_(t,i,s,o),r(s,o)}return i}else ln(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let r,i;return[this.produce(t,n,(o,a)=>{r=o,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){er(e)||ln(8),Mr(e)&&(e=cS(e));const t=a0(this),n=Nf(e,void 0);return n[zt].isManual_=!0,Rf(t),n}finishDraft(e,t){const n=e&&e[zt];(!n||!n.isManual_)&&ln(9);const{scope_:r}=n;return o0(r,t),l0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=gi("Patches").applyPatches_;return Mr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Nf(e,t){const n=tu(e)?gi("MapSet").proxyMap_(e,t):nu(e)?gi("MapSet").proxySet_(e,t):i$(e,t);return(t?t.scope_:aS()).drafts_.push(n),n}function cS(e){return Mr(e)||ln(10,e),uS(e)}function uS(e){if(!er(e)||ru(e))return e;const t=e[zt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Pf(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Pf(e,!0);return ic(n,(r,i)=>{oS(n,r,uS(i))}),t&&(t.finalized_=!1),n}var Wt=new o$,dS=Wt.produce;Wt.produceWithPatches.bind(Wt);Wt.setAutoFreeze.bind(Wt);Wt.setUseStrictShallowCopy.bind(Wt);Wt.applyPatches.bind(Wt);Wt.createDraft.bind(Wt);Wt.finishDraft.bind(Wt);function a$(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function l$(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function c$(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var u0=e=>Array.isArray(e)?e:[e];function u$(e){const t=Array.isArray(e[0])?e[0]:e;return c$(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function d$(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var f$=class{constructor(e){this.value=e}deref(){return this.value}},p$=typeof WeakRef<"u"?WeakRef:f$,h$=0,d0=1;function Ia(){return{s:h$,v:void 0,o:null,p:null}}function Oh(e,t={}){let n=Ia();const{resultEqualityCheck:r}=t;let i,s=0;function o(){var f;let a=n;const{length:l}=arguments;for(let p=0,g=l;p<g;p++){const x=arguments[p];if(typeof x=="function"||typeof x=="object"&&x!==null){let y=a.o;y===null&&(a.o=y=new WeakMap);const S=y.get(x);S===void 0?(a=Ia(),y.set(x,a)):a=S}else{let y=a.p;y===null&&(a.p=y=new Map);const S=y.get(x);S===void 0?(a=Ia(),y.set(x,a)):a=S}}const u=a;let d;if(a.s===d0)d=a.v;else if(d=e.apply(null,arguments),s++,r){const p=((f=i==null?void 0:i.deref)==null?void 0:f.call(i))??i;p!=null&&r(p,d)&&(d=p,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new p$(d):d}return u.s=d0,u.v=d,d}return o.clearCache=()=>{n=Ia(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function fS(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),a$(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:f,memoizeOptions:p=[],argsMemoize:g=Oh,argsMemoizeOptions:x=[],devModeChecks:y={}}=d,S=u0(p),v=u0(x),m=u$(i),w=f(function(){return s++,u.apply(null,arguments)},...S),k=g(function(){o++;const E=d$(m,arguments);return a=w.apply(null,E),a},...v);return Object.assign(k,{resultFunc:u,memoizedResultFunc:w,dependencies:m,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:f,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var g$=fS(Oh),m$=Object.assign((e,t=g$)=>{l$(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(s=>e[s]);return t(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>m$});function pS(e){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,e):i(s)}var y$=pS(),x$=pS,v$=(...e)=>{const t=fS(...e),n=Object.assign((...r)=>{const i=t(...r),s=(o,...a)=>i(Mr(o)?cS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};v$(Oh);var w$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?rc:rc.apply(null,arguments)};function ys(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Ot(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>XN(r)&&r.type===e,n}var hS=class Zs extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Zs.prototype)}static get[Symbol.species](){return Zs}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Zs(...t[0].concat(this)):new Zs(...t.concat(this))}};function f0(e){return er(e)?dS(e,()=>{}):e}function p0(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(Ot(10));const r=n.insert(t,e);return e.set(t,r),r}function S$(e){return typeof e=="boolean"}var b$=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=t??{};let o=new hS;return n&&(S$(n)?o.push(y$):o.push(x$(n.extraArgument))),o},k$="RTK_autoBatch",gS=e=>t=>{setTimeout(t,e)},_$=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:gS(10),D$=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,s=!1,o=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?_$:e.type==="callback"?e.queueNotification:gS(e.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),p=r.subscribe(f);return a.add(d),()=>{p(),a.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[k$]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},C$=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new hS(e);return r&&i.push(D$(typeof r=="object"?r:void 0)),i},E$=!0;function j$(e){const t=b$(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Ch(n))a=rS(n);else throw new Error(Ot(1));let l;typeof r=="function"?l=r(t):l=t();let u=rc;i&&(u=w$({trace:!E$,...typeof i=="object"&&i}));const d=KN(...l),f=C$(d);let p=typeof o=="function"?o(f):f();const g=u(...p);return nS(a,s,g)}function mS(e){const t={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(Ot(28));if(a in t)throw new Error(Ot(29));return t[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return e(i),[t,n,r]}function O$(e){return typeof e=="function"}function P$(e,t){let[n,r,i]=mS(t),s;if(O$(e))s=()=>f0(e());else{const a=f0(e);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,f)=>{if(f)if(Mr(d)){const g=f(d,l);return g===void 0?d:g}else{if(er(d))return dS(d,p=>f(p,l));{const p=f(d,l);if(p===void 0){if(d===null)return d;throw new Error(Ot(9))}return p}}return d},a)}return o.getInitialState=s,o}var T$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",R$=(e=21)=>{let t="",n=e;for(;n--;)t+=T$[Math.random()*64|0];return t},M$=Symbol.for("rtk-slice-createasyncthunk");function N$(e,t){return`${e}/${t}`}function $$({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[M$];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(Ot(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(A$()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(w,k){const _=typeof w=="string"?w:w.type;if(!_)throw new Error(Ot(12));if(_ in u.sliceCaseReducersByType)throw new Error(Ot(13));return u.sliceCaseReducersByType[_]=k,d},addMatcher(w,k){return u.sliceMatchers.push({matcher:w,reducer:k}),d},exposeAction(w,k){return u.actionCreators[w]=k,d},exposeCaseReducer(w,k){return u.sliceCaseReducersByName[w]=k,d}};l.forEach(w=>{const k=a[w],_={reducerName:w,type:N$(s,w),createNotation:typeof i.reducers=="function"};L$(k)?W$(_,k,d,t):F$(_,k,d)});function f(){const[w={},k=[],_=void 0]=typeof i.extraReducers=="function"?mS(i.extraReducers):[i.extraReducers],E={...w,...u.sliceCaseReducersByType};return P$(i.initialState,D=>{for(let O in E)D.addCase(O,E[O]);for(let O of u.sliceMatchers)D.addMatcher(O.matcher,O.reducer);for(let O of k)D.addMatcher(O.matcher,O.reducer);_&&D.addDefaultCase(_)})}const p=w=>w,g=new Map;let x;function y(w,k){return x||(x=f()),x(w,k)}function S(){return x||(x=f()),x.getInitialState()}function v(w,k=!1){function _(D){let O=D[w];return typeof O>"u"&&k&&(O=S()),O}function E(D=p){const O=p0(g,k,{insert:()=>new WeakMap});return p0(O,D,{insert:()=>{const K={};for(const[N,L]of Object.entries(i.selectors??{}))K[N]=I$(L,D,S,k);return K}})}return{reducerPath:w,getSelectors:E,get selectors(){return E(_)},selectSlice:_}}const m={name:s,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...v(o),injectInto(w,{reducerPath:k,..._}={}){const E=k??o;return w.inject({reducerPath:E,reducer:y},_),{...m,...v(E,!0)}}};return m}}function I$(e,t,n,r){function i(s,...o){let a=t(s);return typeof a>"u"&&r&&(a=n()),e(a,...o)}return i.unwrapped=e,i}var Ph=$$();function A$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function F$({type:e,reducerName:t,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!z$(r))throw new Error(Ot(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,o?ys(e,o):ys(e))}function L$(e){return e._reducerDefinitionType==="asyncThunk"}function z$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function W$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Ot(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,f=i(e,s,d);r.exposeAction(t,f),o&&r.addCase(f.fulfilled,o),a&&r.addCase(f.pending,a),l&&r.addCase(f.rejected,l),u&&r.addMatcher(f.settled,u),r.exposeCaseReducer(t,{fulfilled:o||Aa,pending:a||Aa,rejected:l||Aa,settled:u||Aa})}function Aa(){}var B$=(e,t)=>{if(typeof e!="function")throw new Error(Ot(32))},Th="listenerMiddleware",U$=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:s}=e;if(t)i=ys(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(Ot(21));return B$(s),{predicate:i,type:t,effect:s}},H$=Object.assign(e=>{const{type:t,predicate:n,effect:r}=U$(e);return{id:R$(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Ot(22))}}},{withTypes:()=>H$}),Y$=Object.assign(ys(`${Th}/add`),{withTypes:()=>Y$});ys(`${Th}/removeAll`);var q$=Object.assign(ys(`${Th}/remove`),{withTypes:()=>q$});function Ot(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const V$={projects:[]},xn=Ph({name:"projectSlice",initialState:V$,reducers:{setProjects(e,t){e.projects=t.payload}}}),G$=xn.reducer,Q$=h.div`
      position: relative;
`,K$=h.button`
      width: 100%;
      border: none;
      position: relative;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      height: 44px;
      text-align: left;
      color: #1a1d1f;
      background: #fcfcfc;
      padding: 8px 40px 8px 16px;
      outline: 2px solid #efefef;
      border-radius: 12px;
      user-select: none;
      cursor: pointer;

      &:disabled {
            cursor: auto;
      }

      &::after {
            content: url("/public/icons/cheveron_gray.svg");
            position: absolute;
            width: 16px;
            height: 16px;
            right: 16px;
            top: 12px;
            transform: rotate(${e=>e.isopened?"180deg":"0deg"});
      }
`,X$=h.div`
      padding: 16px;
      border-radius: 16px;
      position: absolute;
      right: 0px;
      top: 50px;
      z-index: 2;
      background: #fff;
      box-shadow: 0px 32px 48px -8px #0000001a;
      box-shadow: 0px 0px 14px -4px #0000000d;
      box-shadow: 0px 40px 64px -12px #00000014;
      overflow: auto;
      width: 100%;
      left: 0px;
      right: auto;
      max-height: 180px;
`,J$=h.div`
      width: 100%;
      padding: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 12px;
      background: #fff;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #6f767e;
      user-select: none;
      cursor: pointer;

      &:hover,
      &:focus {
            box-shadow: 0px 1px 1px 0px #ffffff inset;
            box-shadow: 0px -2px 1px 0px #0000000d inset;
            background: #efefef;
            color: #1a1d1f;
      }
`,yS=({value:e,setValue:t})=>{const n=vt(),r=xn.actions.setProjects,[i,s]=b.useState(!1),o=we(a=>a.projectsReducer.projects);return b.useLayoutEffect(()=>{const a=window.localStorage.getItem("access_token");a&&mn(a).then(l=>{n(r(l.data.projects))}).catch(),t(o[0])},[]),b.useEffect(()=>{t(o[0])},o),c.jsxs(Q$,{children:[c.jsxs(K$,{disabled:o.length===0,isopened:i,onClick:()=>{s(!i)},type:"button",children:[e&&e.name,!e&&"Нет доступных проектов"]}),i&&c.jsx(X$,{children:o.map((a,l)=>c.jsx(J$,{onClick:()=>{t(a),s(!1)},children:a.name},`dropdownoption${l}`))})]})},Z$=h.div`
      z-index: 999;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
`,e3=h.div`
      background: #f4f4f4;
      opacity: 0.9;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
`,t3=h.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 672px;
      background: #fcfcfc;
      padding: 24px;
      border-radius: 16px;
      z-index: 1000;
      max-height: 100vh;
      overflow: auto;
`,n3=h.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
`,r3=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
`,i3=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
`,s3=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-direction: flex-start;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 24px;
      padding-right: 70px;
`,o3=h.div`
      margin-top: 24px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-direction: flex-start;
      gap: 16px;
      position: relative;
`,a3=h.div`
      position: fixed;
      z-index: 9999;
      top: 33%;
      left: 38%;
`,l3=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      margin-top: 32px;
`,c3=({close:e})=>{const t=vt(),n=xn.actions.setProjects,[r,i]=b.useState(),s=we(N=>N.userReducer.user),[o,a]=b.useState(!1),[l,u]=b.useState(""),[d,f]=b.useState(""),[p,g]=b.useState({startDate:new Date,endDate:new Date,key:"selection"}),[x,y]=b.useState(""),[S,v]=b.useState(""),[m,w]=b.useState(!0),[k,_]=b.useState(!1),[E,D]=b.useState([]);b.useEffect(()=>{r&&p.startDate&&p.endDate&&l&&l.length>0&&d&&d.length>0&&x.length>0&&S.length>0?w(!1):w(!0)},[r,p.startDate,p.endDate,S.length,x.length,l,d]);const O=b.useRef(null);b.useEffect(()=>{const N=({target:L})=>{var Z;(Z=O.current)!=null&&Z.contains(L)||a(!1)};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[a]);const K=N=>{var q,ce;N.preventDefault();const L=window.localStorage.getItem("access_token"),Z=E.map(Se=>Se.id),Oe={name:l,description:d,time_start:(q=p.startDate)==null?void 0:q.toISOString(),time_end:(ce=p.endDate)==null?void 0:ce.toISOString(),assigned:[s.id,...Z]};L&&r&&YN(L,r==null?void 0:r.id,Oe).then(Se=>{Se.status===200&&mn(L).then($e=>{t(n($e.data.projects))}).catch()}).catch(),e()};return c.jsxs(Z$,{children:[c.jsx(e3,{}),c.jsxs(t3,{children:[c.jsxs(n3,{children:[c.jsxs(r3,{children:[c.jsx(pn,{style:{marginRight:"16px"}}),c.jsx(i3,{children:"Новая задача"})]}),c.jsx(S1,{onClick:e})]}),c.jsxs("form",{onSubmit:K,children:[c.jsxs(s3,{children:[c.jsx("img",{src:"/public/icons/person_gray.svg",style:{width:"24px",height:"24px"}}),E.map(N=>c.jsx(b1,{type:"button",avatarPath:N.photo?`${X}/${N.photo}`:void 0,name:`${N.first_name} ${N.second_name}`,onClick:()=>{D(E.filter(L=>L.id!==N.id))}})),c.jsxs(Ki,{style:{position:"relative"},onClick:N=>{N.preventDefault(),_(!0)},children:[c.jsx("img",{src:"/public/icons/plus_gray_20.svg"}),k&&c.jsx(eS,{setIsQueryDropdown:_,style:{position:"absolute",top:"0",left:"0",zIndex:1e4},children:r==null?void 0:r.members.filter(N=>N.id!==s.id).map(N=>E.includes(N)?c.jsx(c.Fragment,{}):c.jsx(tS,{avatarUrl:N.photo?`${X}/${N.photo}`:void 0,name:N.first_name+" "+N.second_name,onClick:()=>{D([N,...E])}}))})]})]}),c.jsxs(o3,{children:[c.jsx("img",{src:"/public/icons/schedule_light_24.svg",style:{width:"24px",height:"24px"}}),!x&&!S&&c.jsx(Ki,{onClick:N=>{N.preventDefault(),a(!o)},children:c.jsx("img",{src:"/public/icons/plus_gray_20.svg"})}),x&&S&&c.jsx(Ki,{style:{width:"fit-content",padding:"4px 8px 4px 8px",color:"#33383F"},onClick:N=>{N.preventDefault(),a(!o)},children:x+" - "+S}),o&&c.jsx(a3,{ref:O,children:c.jsx(Zw,{date:p,setDate:g,close:()=>{a(!1)},startStringDate:x,endStringDate:S,setStartStringDate:y,setEndStringDate:v})})]}),c.jsx(an,{style:{marginTop:"24px"},children:"Задача"}),c.jsx(Ac,{style:{marginTop:"12px"},value:l,onChange:N=>u(N.target.value)}),c.jsx(an,{style:{marginBottom:"12px",marginTop:"24px"},children:"Проект"}),c.jsx(yS,{setValue:i,value:r}),c.jsx(an,{style:{marginTop:"24px"},children:"Описание"}),c.jsx(mj,{style:{marginTop:"12px"},value:d,onChange:N=>f(N.target.value)}),c.jsxs(l3,{children:[c.jsx(ps,{style:{padding:"12px 68px 12px 68px"},onClick:e,children:"Отмена"}),c.jsx(Je,{type:"submit",style:{padding:"12px 68px 12px 68px"},disabled:m,children:"Создать"})]})]})]})]})},u3=h.div`
      display: flex;
      flex-direction: column;
      gap: 12px;
      position: absolute;
      width: 280px;
      top: 90px;
      right: 12px;
      z-index: 100;
      padding: 16px;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0px 32px 48px -8px #0000001a;
      box-shadow: 0px 0px 14px -4px #0000000d;
      box-shadow: 0px 40px 64px -12px #00000014;
`,xS=h.div`
      width: 100%;
      height: 48px;
      padding: 12px;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #6f767e;
      user-select: none;
      cursor: pointer;
`,d3=h.div`
      height: 1px;
      width: 100%;
      background: #efefef;
`,f3=h(xS)`
      color: #ff6a55;
`,p3=({setIsVisible:e,...t})=>{const n=Ze(),{setIsAuth:r}=b.useContext(Ko),i=b.useRef(null);b.useEffect(()=>{const o=({target:a})=>{var l;(l=i.current)!=null&&l.contains(a)||e(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[e]);const s=()=>{window.localStorage.removeItem("access_token"),r(!1)};return c.jsxs(u3,{...t,ref:i,children:[c.jsx(xS,{onClick:()=>{n("/account"),e(!1)},children:"Личный кабинет"}),c.jsx(d3,{}),c.jsx(f3,{onClick:s,children:"Выйти"})]})},h3=h.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 96px;
      padding-top: 24px;
      padding-bottom: 24px;
      padding-left: 39px;
      padding-right: 40px;
      background: #fcfcfc;
      border-left: 1px solid #f4f4f4;
`,g3=h.div`
      width: 360px;
`,m3=h.div`
      display: flex;
      flex-direction: row;
      gap: 24px;
`,y3=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),i=we(a=>a.userReducer.user),s=we(a=>a.chatsReducer.chats);let o=0;return s.map(a=>{a.messages.map(l=>{l.read_id.includes(i.id)||(o=o+1)})}),c.jsxs(h3,{children:[e&&c.jsx(c3,{close:()=>{t(!1)}}),c.jsx(g3,{children:c.jsx(Jo,{})}),c.jsxs(m3,{children:[c.jsxs(Je,{onClick:()=>{t(!0)},children:[c.jsx("img",{src:"/public/icons/plus.svg",style:{display:"inline-block"}}),"Новая задача"]}),c.jsx(Wm,{isActive:o>0,iconPathInactive:"/public/icons/menu/message_active.svg",iconPathActive:"/public/icons/menu/message.svg"}),c.jsx(Wm,{isActive:!1,iconPathInactive:"/public/icons/notification_active.svg",iconPathActive:"/public/icons/notification.svg"}),c.jsx(Or,{style:{cursor:"pointer"},src:i.photo?`${X}/${i.photo}`:void 0,onClick:()=>{r(!0)}}),n&&c.jsx(p3,{setIsVisible:r})]})]})},x3=h.div`
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      display: flex;
      flex-direction: row;
`,v3=h.div`
      flex: 1;
      height: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
`,w3=h.div`
      flex: 1;
      overflow: hidden;
`,S3=()=>c.jsxs(x3,{children:[c.jsx(tj,{}),c.jsxs(v3,{children:[c.jsx(y3,{}),c.jsx(w3,{children:c.jsx(a2,{})})]})]}),b3=h.div`
      width: 324px;
      height: 224px;
      padding: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      background: #fcfcfc;
      border-radius: 8px;
`,k3=h.div`
      font-size: 24px;
      font-weight: 600;
      line-height: 29.05px;
      text-align: left;
      color: #33383f;
      width: 55%;
`,_3=h.img`
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 112px;
      height: 112px;
`,Ei=({title:e,buttonTitle:t,isDisabled:n,onClick:r,imgPath:i})=>c.jsxs(b3,{children:[c.jsx(k3,{children:e}),c.jsx(Je,{onClick:r,disabled:n,children:t}),c.jsx(_3,{src:i})]}),D3=h.div`
      width: 100%;
      height: 100%;
      background-color: #f4f4f4;
      display: flex;
      padding: 40px;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 24px;
`,C3=()=>{const e=Ze();return c.jsxs(D3,{children:[c.jsx(Ei,{title:"Мессенджер",buttonTitle:"Перейти",isDisabled:!1,imgPath:"/public/home_cards/chat_bubbles.png",onClick:()=>e("/messages")}),c.jsx(Ei,{title:"Менеджер задач",buttonTitle:"Перейти",isDisabled:!1,imgPath:"/public/home_cards/category.png",onClick:()=>e("/tasks")}),c.jsx(Ei,{title:"Видеохостинг",buttonTitle:"В разработке",isDisabled:!0,imgPath:"/public/home_cards/video.png"}),c.jsx(Ei,{title:"Электронная доска",buttonTitle:"В разработке",isDisabled:!0,imgPath:"/public/home_cards/tv.png"}),c.jsx(Ei,{title:"Формы для опросов",buttonTitle:"В разработке",isDisabled:!0,imgPath:"/public/home_cards/newspaper.png"}),c.jsx(Ei,{title:"Файлообменник",buttonTitle:"В разработке",isDisabled:!0,imgPath:"/public/home_cards/folder.png"})]})},E3=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
`,Qu=h.div`
      cursor: pointer;
      user-select: none;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: ${e=>e.isActive?"#FCFCFC":""};
      box-shadow: ${e=>e.isActive?"0px 4px 8px -4px rgba(0, 0, 0, 0.1)":""};
      box-shadow: ${e=>e.isActive?"0px 2px 0px 0px rgba(255, 255, 255, 0.25) inset":""};
      box-shadow: ${e=>e.isActive?"0px -1px 1px 0px rgba(0, 0, 0, 0.04) inset":""};

      & > img {
            width: 24px;
            height: 24px;
      }
`,j3=({view:e,setView:t})=>c.jsxs(E3,{children:[c.jsx(Qu,{onClick:()=>{t("list")},isActive:e==="list",children:c.jsx("img",{src:e==="list"?"/public/icons/list_dark_24.svg":"/public/icons/list_gray_24.svg"})}),c.jsx(Qu,{onClick:()=>{t("grid")},isActive:e==="grid",children:c.jsx("img",{src:e==="grid"?"/public/icons/grid_dark_24.svg":"/public/icons/grid_gray_24.svg"})}),c.jsx(Qu,{onClick:()=>{t("schedule")},isActive:e==="schedule",children:c.jsx("img",{src:e==="schedule"?"/public/icons/schedule_dark_24.svg":"/public/icons/schedule_gray_24.svg"})})]}),vS=h.button`
      width: 40px;
      height: 40px;
      padding: 8px;
      outline: none;
      border: none;
      cursor: pointer;
      user-select: none;
      background: none;
      &:focus {
            outline: none;
      }
      & > img {
            width: 24px;
            height: 24px;
      }
`,O3=h(vS)`
      & > img {
            content: url("/public/icons/arrow_backward_filled_24.svg");
      }
      &:disabled > img {
            content: url("/public/icons/arrow_backward_light_24.svg");
      }
`,P3=h(vS)`
      & > img {
            content: url("/public/icons/arrow_forward_filled_24.svg");
      }
      &:disabled > img {
            content: url("/public/icons/arrow_forward_light_24.svg");
      }
`,h0=({direction:e,disabled:t,...n})=>{switch(e){case"backward":return c.jsx(O3,{disabled:t,...n,children:c.jsx("img",{})});case"forward":return c.jsx(P3,{disabled:t,...n,children:c.jsx("img",{})})}},T3=h.div`
      height: 108px;
      width: 100%;
      border-radius: 8px;
      padding: 8px;
      position: relative;
      min-width: 138px;
      min-height: 108px;
      cursor: pointer;
`,R3=h.div`
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      padding: 4px 8px 4px 8px;
      background: rgba(244, 244, 244, 0.5);
      border-radius: 3px;
      width: fit-content;
`,M3=h.div`
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      margin-top: 8px;
      max-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
`,N3=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      position: absolute;
      left: 8px;
      bottom: 8px;
`,$3=h.img`
      width: 20px;
      height: 20px;
`,I3=h.div`
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #272b30;
`,Hr=({projectTitle:e,taskTitle:t,colour:n,date:r,onClick:i})=>c.jsxs(T3,{style:{background:n},onClick:i,children:[c.jsx(R3,{children:e}),c.jsx(M3,{children:t}),c.jsxs(N3,{children:[c.jsx($3,{src:"/public/icons/calendar_gray_20.svg"}),c.jsx(I3,{children:r})]})]}),g0=e=>{const t=new Date,n=t.getDay(),r=t.getDate(),i=new Date(t),s=new Date(t);i.setDate(r+e*7-n+(n===0?-6:1)),s.setDate(r+e*7-n+(n===0?0:7));const o=[],a=new Date(i);for(;a<=s;)o.push(new Date(a)),a.setDate(a.getDate()+1);return o},_n=e=>{const t=[];return e.map((n,r)=>{const i=Io(n,"EE d MMMM",{locale:tc}),s=i[0].toUpperCase()+i.slice(1),o=s.substring(0,2)+s.substring(3),a=Io(n,"dd.MM.yyyy",{locale:tc});t[r]=[o,a]}),t},A3=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],m0=e=>{const t=e.getDate(),n=e.getMonth(),r=A3[n];return t+" "+r},ac=e=>{const t=e.getMinutes();return t<10?"0"+t.toString():t.toString()},F3=h.div`
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 32px;
      gap: 1px;
      width: 100%;
      overflow: auto;
`,Yr=h.div`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 12px 15px 12px;
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: -0.01em;
      user-select: none;
      color: #6f767e;
      overflow: auto;
`,qr=h.div`
      background: #fcfcfc;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-basis: 14%;
      border-radius: 8px;
      min-width: 138px;
      gap: 4px;

      &:nth-child(6) {
            background: #f4f4f4;
      }

      &:nth-child(7) {
            background: #f4f4f4;
      }
`,L3=({week:e})=>{const t=Ze(),n=_n(e),r=we(l=>l.projectsReducer.projects),[i,s]=b.useState([]),o=(l,u)=>{const d=l.filter(f=>new Date(f.time_start).getDate()===u.getDate());return console.log(d),d},a=()=>{const l=[];r.map(u=>{u.tasks.map(d=>{l.push(d)})}),s(l)};return b.useEffect(()=>{a()},[r]),c.jsxs(F3,{children:[c.jsxs(qr,{children:[c.jsx(Yr,{children:n[0][0]}),o(i,e[0]).map(l=>{var u,d;return c.jsx(Hr,{projectTitle:(u=r.find(f=>f.tasks.includes(l)))==null?void 0:u.name,colour:(d=r.find(f=>f.tasks.includes(l)))==null?void 0:d.color,taskTitle:l.name,date:_n([new Date(l.time_start)])[0][1],onClick:()=>t(`/tasks/${l.id}`)})})]}),c.jsxs(qr,{children:[c.jsx(Yr,{children:n[1][0]}),o(i,e[1]).map(l=>{var u,d;return c.jsx(Hr,{projectTitle:(u=r.find(f=>f.tasks.includes(l)))==null?void 0:u.name,colour:(d=r.find(f=>f.tasks.includes(l)))==null?void 0:d.color,taskTitle:l.name,date:_n([new Date(l.time_start)])[0][1],onClick:()=>t(`/tasks/${l.id}`)})})]}),c.jsxs(qr,{children:[c.jsx(Yr,{children:n[2][0]}),o(i,e[2]).map(l=>{var u,d;return c.jsx(Hr,{projectTitle:(u=r.find(f=>f.tasks.includes(l)))==null?void 0:u.name,colour:(d=r.find(f=>f.tasks.includes(l)))==null?void 0:d.color,taskTitle:l.name,date:_n([new Date(l.time_start)])[0][1],onClick:()=>t(`/tasks/${l.id}`)})})]}),c.jsxs(qr,{children:[c.jsx(Yr,{children:n[3][0]}),o(i,e[3]).map(l=>{var u,d;return c.jsx(Hr,{projectTitle:(u=r.find(f=>f.tasks.includes(l)))==null?void 0:u.name,colour:(d=r.find(f=>f.tasks.includes(l)))==null?void 0:d.color,taskTitle:l.name,date:_n([new Date(l.time_start)])[0][1],onClick:()=>t(`/tasks/${l.id}`)})})]}),c.jsxs(qr,{children:[c.jsx(Yr,{children:n[4][0]}),o(i,e[4]).map(l=>{var u,d;return c.jsx(Hr,{projectTitle:(u=r.find(f=>f.tasks.includes(l)))==null?void 0:u.name,colour:(d=r.find(f=>f.tasks.includes(l)))==null?void 0:d.color,taskTitle:l.name,date:_n([new Date(l.time_start)])[0][1],onClick:()=>t(`/tasks/${l.id}`)})})]}),c.jsxs(qr,{children:[c.jsx(Yr,{children:n[5][0]}),o(i,e[5]).map(l=>{var u,d;return c.jsx(Hr,{projectTitle:(u=r.find(f=>f.tasks.includes(l)))==null?void 0:u.name,colour:(d=r.find(f=>f.tasks.includes(l)))==null?void 0:d.color,taskTitle:l.name,date:_n([new Date(l.time_start)])[0][1],onClick:()=>t(`/tasks/${l.id}`)})})]}),c.jsxs(qr,{children:[c.jsx(Yr,{children:n[6][0]}),o(i,e[6]).map(l=>{var u,d;return c.jsx(Hr,{projectTitle:(u=r.find(f=>f.tasks.includes(l)))==null?void 0:u.name,colour:(d=r.find(f=>f.tasks.includes(l)))==null?void 0:d.color,taskTitle:l.name,date:_n([new Date(l.time_start)])[0][1],onClick:()=>t(`/tasks/${l.id}`)})})]})]})},z3=h.div`
      padding: 24px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
`,W3=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
      flex: 1;
`,B3=()=>{const[e,t]=b.useState(0),[n,r]=b.useState(g0(e)),i=()=>{const s=g0(e);r(s)};return b.useEffect(()=>{i()},[e]),c.jsxs(c.Fragment,{children:[c.jsxs(z3,{children:[c.jsx(pn,{style:{marginRight:"16px"}}),c.jsx(W3,{children:"Задачи"}),c.jsx(h0,{direction:"backward",disabled:!1,onClick:()=>{t(e-1)}}),c.jsx(h0,{direction:"forward",disabled:!1,onClick:()=>{t(e+1)}})]}),c.jsx(L3,{week:n})]})},y0=h.div`
      background: #efefef;
      padding: 4px 8px 4px 8px;
      border-radius: 41px;
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      white-space: nowrap;
      letter-spacing: -0.015em;
      user-select: none;
      cursor: pointer;
      color: #6f767e;
      width: fit-content;
`,po=({color:e,bgColor:t,isActive:n=!0,...r})=>n?c.jsx(y0,{style:{color:e,backgroundColor:t},...r}):c.jsx(y0,{...r}),x0=h.div`
      height: 32px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      background: #efefef;
      border-radius: 41px;
      width: fit-content;
      padding-right: 8px;
      padding-left: 40px;
      cursor: pointer;
`,v0=h.div`
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      height: 24px;
      white-space: nowrap;
      letter-spacing: -0.015em;
      color: #33383f;
      user-select: none;
`,w0=h.div`
      position: absolute;
      left: 0;
      top: 0;
      width: 32px;
      height: 32px;
      max-width: 32px;
      max-height: 32px;
      border-radius: 100%;
      & > img {
            width: 32px;
            height: 32px;
            border-radius: 100%;
            object-fit: cover;
      }
`,U3=({name:e,avatarPath:t})=>t?c.jsxs(x0,{children:[c.jsx(w0,{children:c.jsx("img",{src:t})}),c.jsx(v0,{children:e})]}):c.jsxs(x0,{children:[c.jsx(w0,{style:{background:"rgb(177, 229, 252)"}}),c.jsx(v0,{children:e})]}),Ku=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
`,Xu=h.div`
      font-size: 14px;
      font-weight: 600;
      line-height: 18.2px;
      white-space: nowrap;
`,Ju=h.img`
      width: 16px;
      height: 16px;
`,H3=({type:e})=>{switch(e){case"todo":return c.jsxs(Ku,{children:[c.jsx(Xu,{style:{color:"#2A85FF"},children:"К исполнению"}),c.jsx(Ju,{src:"/public/icons/cheveron_blue_16.svg"})]});case"inprogress":return c.jsxs(Ku,{children:[c.jsx(Xu,{style:{color:"#8E59FF"},children:"В процессе"}),c.jsx(Ju,{src:"/public/icons/cheveron_purple_16.svg"})]});case"completed":return c.jsxs(Ku,{children:[c.jsx(Xu,{style:{color:"#83BF6E"},children:"Выполненно"}),c.jsx(Ju,{src:"/public/icons/cheveron_green_16.svg"})]})}},Y3=h.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
`,q3=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: 0px 24px 24px 24px;
      gap: 16px;
      overflow: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;
      &::-webkit-scrollbar {
            display: none;
      }
`,V3=h.div`
      padding: 24px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
`,G3=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
      flex: 1;
`,Q3=h.div`
      padding-left: 24px;
      padding-right: 24px;
      overflow: auto;
      flex: 1;
`,K3=h.table`
      border-collapse: collapse;
      flex: 1;
      width: 100%;
      position: relative;
`,X3=h.thead`
      /* border-top: 1px solid #efefef; */
`,J3=h.tr``,Ys=h.th`
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: -0.01em;
      text-align: left;
      padding-top: 24px;
      padding-bottom: 24px;
      color: #6f767e;
      position: sticky;
      top: 0;
      background: #fcfcfc;
      z-index: 1;
`,Z3=h.tbody``,eI=h.tr`
      height: 64px;
`,qs=h.td`
      max-height: 40px;
      padding-right: 29.5px;
      &:last-child {
            padding-right: 0;
      }
`,tI=h.div`
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
`,nI=h.div`
      color: #33383f;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      width: fit-content;
      white-space: nowrap;
      cursor: pointer;
`,wS=({section:e,sortBy:t})=>{const n=Ze(),r=vt(),i=xn.actions.setProjects,[s,o]=b.useState(NaN),a=we(g=>g.projectsReducer.projects),[l,u]=b.useState(),d=b.useCallback(()=>{const g=[];return a.map(x=>{x.tasks.map(y=>{g.push(y)})}),g},[a]),f=b.useCallback((g,x,y)=>{if(g){if(y==="По дате")return[...g].sort((v,m)=>new Date(m.time_start).getTime()-new Date(v.time_start).getTime());if(y==="По владельцу")return[...g].sort((v,m)=>{var _,E;const w=(_=x.find(D=>D.tasks.includes(v)))==null?void 0:_.owner,k=(E=x.find(D=>D.tasks.includes(m)))==null?void 0:E.owner;return w.id-k.id});if(y==="По статусу")return[...g].sort(function(v,m){return v.status>m.status?-1:v.status<m.status?1:0});if(y==="По названию")return[...g].sort(function(v,m){return v.name<m.name?-1:v.name>m.name?1:0})}else return g},[]),p=b.useCallback(()=>{var g;if(s){const x=(g=a.find(y=>y.id===s))==null?void 0:g.tasks;if(x){const y=f(x,a,t);u(y)}return}if(isNaN(s)){const x=d(),y=f(x,a,t);u(y)}},[s,a,d,f,t]);return b.useEffect(()=>{u(d())},[a,d]),b.useEffect(()=>{p()},[s,a,p]),b.useLayoutEffect(()=>{const g=window.localStorage.getItem("access_token");g&&mn(g).then(x=>{x.status===200&&r(i(x.data.projects))}).catch()},[r,i]),c.jsxs(Y3,{children:[e==="projects"&&c.jsxs(q3,{children:[c.jsx(po,{color:"#FCFCFC",bgColor:"#2A85FF",isActive:!s,onClick:()=>{o(NaN)},children:"Все проекты"}),a.map(g=>c.jsx(po,{color:"#33383F",bgColor:g.color,isActive:g.id===s,onClick:()=>{o(g.id)},children:g.name}))]}),e==="tasks"&&c.jsxs(V3,{children:[c.jsx(pn,{style:{marginRight:"16px"}}),c.jsx(G3,{children:"Задачи"})]}),c.jsx(Q3,{children:c.jsxs(K3,{children:[c.jsx(X3,{children:c.jsxs(J3,{children:[c.jsx(Ys,{children:"Дата начала"}),c.jsx(Ys,{children:"Проект"}),c.jsx(Ys,{children:"Название задачи"}),c.jsx(Ys,{children:"Владелец"}),c.jsx(Ys,{children:"Статус задачи"})]})}),c.jsx(Z3,{children:l==null?void 0:l.map(g=>{var x,y,S,v,m,w;return c.jsxs(eI,{children:[c.jsx(qs,{children:c.jsx(tI,{children:_n([new Date(g.time_start)])[0][1]})}),c.jsx(qs,{children:c.jsx(po,{color:"#33383F",bgColor:(x=a.find(k=>k.tasks.includes(g)))==null?void 0:x.color,children:(y=a.find(k=>k.tasks.includes(g)))==null?void 0:y.name})}),c.jsx(qs,{children:c.jsx(nI,{onClick:()=>{n(`/tasks/${g.id}`)},children:g.name})}),c.jsx(qs,{children:c.jsx(U3,{name:((S=a.find(k=>k.tasks.includes(g)))==null?void 0:S.owner.first_name)+" "+((v=a.find(k=>k.tasks.includes(g)))==null?void 0:v.owner.second_name),avatarPath:(m=a.find(k=>k.tasks.includes(g)))!=null&&m.owner.photo?X+"/"+((w=a.find(k=>k.tasks.includes(g)))==null?void 0:w.owner.photo):void 0})}),c.jsx(qs,{children:c.jsx(H3,{type:g.status})})]})})})]})})]})},rI=h.div`
      height: 224px;
      border-radius: 12px;
      background: #f4f4f4;
      padding: 24px;
      position: relative;
      width: 100%;
      min-width: 138px;
      cursor: pointer;
`,iI=h.div`
      border-radius: 4px;
      padding: 0 8px 0 8px;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      max-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: fit-content;
      white-space: nowrap;
`,sI=h.div`
      margin-top: 12px;
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
`,oI=h.div`
      margin-top: 4px;
      font-size: 13px;
      font-weight: 600;
      max-height: 64px;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #6f767e;
      overflow: hidden;
      text-overflow: ellipsis;
`,aI=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      position: absolute;
      left: 24px;
      bottom: 24px;
`,lI=h.img`
      width: 24px;
      height: 24px;
`,cI=h.div`
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #272b30;
`,Zu=({task:e,project:t,onClick:n})=>c.jsxs(rI,{onClick:n,children:[c.jsx(iI,{style:{background:t.color},children:t.name}),c.jsx(sI,{children:e.name}),c.jsx(oI,{children:e.description}),c.jsxs(aI,{children:[c.jsx(lI,{src:"/public/icons/calendar_gray_20.svg"}),c.jsx(cI,{children:_n([new Date(e.time_start)])[0][1]})]})]}),uI=h.div`
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      overflow: auto;
      padding-bottom: 24px;
`,ed=h.div`
      min-width: 335px;
      flex-basis: 32.5%;
      border-radius: 8px;
      background: #fcfcfc;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 24px;
      height: fit-content;
`,td=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
`,nd=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
      flex: 1;
`,rd=h.div`
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: flex-start;
      align-items: center;
`,dI=()=>{const e=Ze(),t=we(n=>n.projectsReducer.projects);return c.jsxs(uI,{children:[c.jsxs(ed,{children:[c.jsxs(td,{children:[c.jsx(pn,{style:{marginRight:"16px"}}),c.jsx(nd,{children:"К исполнению"})]}),c.jsx(rd,{children:t.map(n=>c.jsx(c.Fragment,{children:n.tasks.filter(r=>r.status==="todo").map(r=>c.jsx(Zu,{task:r,project:n,onClick:()=>e(`/tasks/${r.id}`)}))}))})]}),c.jsxs(ed,{children:[c.jsxs(td,{children:[c.jsx(pn,{style:{background:"#8E59FF",marginRight:"16px"}}),c.jsx(nd,{children:"В процессе"})]}),c.jsx(rd,{children:t.map(n=>c.jsx(c.Fragment,{children:n.tasks.filter(r=>r.status==="inprogress").map(r=>c.jsx(Zu,{task:r,project:n,onClick:()=>e(`/tasks/${r.id}`)}))}))})]}),c.jsxs(ed,{children:[c.jsxs(td,{children:[c.jsx(pn,{style:{background:"#83BF6E",marginRight:"16px"}}),c.jsx(nd,{children:"Выполненно"})]}),c.jsx(rd,{children:t.map(n=>c.jsx(c.Fragment,{children:n.tasks.filter(r=>r.status==="completed").map(r=>c.jsx(Zu,{task:r,project:n,onClick:()=>e(`/tasks/${r.id}`)}))}))})]})]})},fI=h.div`
      background: #f4f4f4;
      padding: 40px 40px 33px 40px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      overflow: hidden;
`,pI=h.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
`,hI=h.div`
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,gI=h.div`
      background: #fcfcfc;
      border-radius: 8px;
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
`,mI=()=>{const[e,t]=b.useState("По владельцу"),[n,r]=b.useState("list");return c.jsxs(fI,{style:{paddingBottom:n==="grid"?"0px":"24px"},children:[c.jsxs(pI,{children:[c.jsx(hI,{children:"Мои задачи"}),c.jsx(j3,{view:n,setView:r})]}),c.jsxs(gI,{style:{background:n==="grid"?"none":"#fcfcfc"},children:[n==="schedule"&&c.jsx(B3,{}),n==="list"&&c.jsx(wS,{sortBy:e,setSortBy:t,section:"tasks"}),n==="grid"&&c.jsx(dI,{})]})]})},yI=h.div`
      position: relative;
`,xI=h.div`
      position: relative;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #6f767e;
      padding: 8px 40px 8px 16px;
      outline: 2px solid #efefef;
      border-radius: 12px;
      user-select: none;
      cursor: pointer;

      &::after {
            content: url("/public/icons/cheveron_gray.svg");
            position: absolute;
            width: 16px;
            height: 16px;
            right: 16px;
            top: 12px;
            transform: rotate(${e=>e.isopened?"180deg":"0deg"});
      }
`,vI=h.div`
      padding: 16px;
      border-radius: 16px;
      position: absolute;
      right: 0px;
      top: 50px;
      z-index: 2;
      background: #fff;
      box-shadow: 0px 32px 48px -8px #0000001a;
      box-shadow: 0px 0px 14px -4px #0000000d;
      box-shadow: 0px 40px 64px -12px #00000014;
      overflow: auto;
`,wI=h.div`
      width: 206px;
      padding: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 12px;
      background: #fff;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #6f767e;
      user-select: none;
      cursor: pointer;

      &:hover,
      &:focus {
            box-shadow: 0px 1px 1px 0px #ffffff inset;
            box-shadow: 0px -2px 1px 0px #0000000d inset;
            background: #efefef;
            color: #1a1d1f;
      }
`,SI=({value:e,setValue:t,options:n,isFullsize:r})=>{const[i,s]=b.useState(!1);return c.jsxs(yI,{children:[c.jsx(xI,{style:{color:r?"#1A1D1F":"#6f767e"},isopened:i,onClick:()=>{s(!i)},children:e}),i&&c.jsx(vI,{style:{width:r?"100%":"auto",left:r?"0px":"auto",right:r?"auto":"0px",maxHeight:r?"180px":"none"},children:n.map((o,a)=>c.jsx(wI,{style:{width:r?"100%":"206px"},onClick:()=>{t(o),s(!1)},children:o},`dropdownoption${a}`))})]})},bI=h.div`
      z-index: 999;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
`,kI=h.div`
      background: #f4f4f4;
      opacity: 0.9;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
`,_I=h.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 672px;
      background: #fcfcfc;
      padding: 24px;
      border-radius: 16px;
      z-index: 1000;
`,DI=h.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
`,CI=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
`,EI=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
`,jI=h.div`
      margin-top: 24px;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;
`,OI=h.div`
      position: relative;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;
      margin-top: 24px;
      &::after {
            content: url("/public/icons/info_gray_16.svg");
            position: relative;
            cursor: pointer;
            width: 16px;
            height: 16px;
            right: -4px;
            top: 4px;
      }
`,PI=h.div`
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 16px;
      margin-top: 12px;
`,TI=h.div`
      width: 32px;
      height: 32px;
      border-radius: 16px;
      position: relative;
`,RI=h.input`
      outline: none;
      border: none;
      padding: 0;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background: none;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
`,MI=h.img`
      position: absolute;
      top: 4px;
      left: 4px;
      width: 24px;
      height: 24px;
`,NI=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      margin-top: 32px;
`,$I=({close:e})=>{const t=vt(),n=xn.actions.setProjects,r=["#FFBC99","#CABDFF","#B1E5FC","#B5E4CA","#FFD88D"],[i,s]=b.useState(""),[o,a]=b.useState("#FFBC99"),[l,u]=b.useState(!0),d=b.useCallback(()=>{i.length>0?u(!1):u(!0)},[i]),f=p=>{p.preventDefault();const g=window.localStorage.getItem("access_token");g&&UN(g,i,o).then(x=>{x.status===200&&mn(g).then(y=>{t(n(y.data.projects))}).catch(y=>{console.log(y)})}).catch(x=>console.log(x)),e()};return b.useEffect(()=>{d()},[i,d]),c.jsxs(bI,{children:[c.jsx(kI,{}),c.jsxs(_I,{children:[c.jsxs(DI,{children:[c.jsxs(CI,{children:[c.jsx(pn,{style:{marginRight:"16px"}}),c.jsx(EI,{children:"Новый проект"})]}),c.jsx(S1,{onClick:e})]}),c.jsxs("form",{onSubmit:f,children:[c.jsx(jI,{children:"Название проекта"}),c.jsx(Ac,{style:{marginTop:"12px"},value:i,onChange:p=>s(p.target.value)}),c.jsx(OI,{children:"Цвет проекта"}),c.jsx(PI,{children:r.map(p=>c.jsxs(TI,{children:[c.jsx(RI,{style:{backgroundColor:p},type:"radio",value:p,checked:o===p,onChange:g=>a(g.target.value)}),p===o&&c.jsx(MI,{src:"/public/icons/check_dark_24.svg"})]},p))}),c.jsxs(NI,{children:[c.jsx(ps,{style:{padding:"12px 68px 12px 68px"},onClick:e,children:"Отмена"}),c.jsx(Je,{disabled:l,type:"submit",style:{padding:"12px 68px 12px 68px"},children:"Создать"})]})]})]})]})},II=h.div`
      background: #f4f4f4;
      padding: 40px 40px 6px 40px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
`,AI=h.div`
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,FI=h.div`
      background: #fcfcfc;
      border-radius: 8px;
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
`,LI=h.div`
      padding: 24px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
`,zI=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
      flex: 1;
`,WI=()=>{const e=Ze(),t=["По дате","По владельцу","По статусу","По названию"],[n,r]=b.useState("По дате"),[i,s]=b.useState(!1);return c.jsxs(II,{children:[i&&c.jsx($I,{close:()=>{s(!1)}}),c.jsx(AI,{children:"Проекты"}),c.jsxs(FI,{children:[c.jsxs(LI,{children:[c.jsx(pn,{style:{marginRight:"16px"}}),c.jsx(zI,{children:"Доступные проекты"}),c.jsx(SI,{value:n,setValue:r,options:t}),c.jsxs(Je,{style:{marginLeft:"10px",padding:"8px 16px 8px 16px",height:"40px"},onClick:()=>{e("/projects/adduser")},children:[c.jsx("img",{src:"/public/icons/plus.svg",style:{display:"inline-block"}}),"Добавить пользователя в проект"]}),c.jsxs(Je,{style:{marginLeft:"10px",padding:"8px 16px 8px 16px",height:"40px"},onClick:()=>{s(!0)},children:[c.jsx("img",{src:"/public/icons/plus.svg",style:{display:"inline-block"}}),"Новый проект"]})]}),c.jsx(wS,{sortBy:n,setSortBy:r,section:"projects"})]})]})},BI=h.div`
      position: relative;
`,UI=h.div`
      position: relative;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #6f767e;
      padding: 10px 38px 10px 14px;
      outline: 2px solid #efefef;
      border-radius: 12px;
      user-select: none;
      cursor: pointer;

      &::after {
            content: url("/public/icons/cheveron_gray.svg");
            position: absolute;
            width: 16px;
            height: 16px;
            right: 16px;
            top: 14px;
            transform: rotate(${e=>e.isopened?"180deg":"0deg"});
      }
`,HI=h.div`
      padding: 16px;
      border-radius: 16px;
      position: absolute;
      right: 0px;
      top: 50px;
      z-index: 2;
      background: #fff;
      box-shadow: 0px 32px 48px -8px #0000001a;
      box-shadow: 0px 0px 14px -4px #0000000d;
      box-shadow: 0px 40px 64px -12px #00000014;
      overflow: auto;
`,YI=h.div`
      width: 206px;
      padding: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 12px;
      background: #fff;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #6f767e;
      user-select: none;
      cursor: pointer;

      &:hover,
      &:focus {
            box-shadow: 0px 1px 1px 0px #ffffff inset;
            box-shadow: 0px -2px 1px 0px #0000000d inset;
            background: #efefef;
            color: #1a1d1f;
      }
`,SS=({value:e,setValue:t,options:n,isFullsize:r})=>{const i={todo:{value:"todo",title:"К исполнению",colorHex:"#2A85FF"},inprogress:{value:"inprogress",title:"В процессе",colorHex:"#8E59FF"},completed:{value:"completed",title:"Выполненно",colorHex:"#83BF6E"}},[s,o]=b.useState(!1);return c.jsxs(BI,{children:[c.jsx(UI,{style:{color:i[e].colorHex},isopened:s,onClick:()=>{o(!s)},children:i[e].title}),s&&c.jsx(HI,{style:{width:r?"100%":"auto",left:r?"0px":"auto",right:r?"auto":"0px",maxHeight:r?"180px":"none"},children:n.map((a,l)=>c.jsx(YI,{style:{width:r?"100%":"206px",color:a.colorHex},onClick:()=>{t(a.value),o(!1)},children:a.title},`dropdownoption${l}`))})]})},qI=h(Qp)`
      padding: 0 8px 0 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
`,VI=h.div`
      width: 32px;
      height: 32px;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 100%;
      background: #b1e5fc;
      & > img {
            width: 32px;
            height: 32px;
            border-radius: 100%;
            object-fit: cover;
      }
`,GI=h.div`
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.015em;
      color: #33383f;
`,QI=({avatarPath:e,name:t,...n})=>c.jsxs(qI,{...n,children:[c.jsx(VI,{children:e&&c.jsx("img",{src:e})}),c.jsx(GI,{children:t})]}),KI=async(e,t,n)=>await re.post(`${X}/comment/${t}`,{content:n},{headers:{Authorization:`Bearer ${e}`},validateStatus:function(i){return i<500}}),XI=async(e,t)=>await re.delete(`${X}/comment/${t}`,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(r){return r<500}}),JI=h.div`
      min-height: 116px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 20px;
      border-radius: 8px;

      &:hover {
            background: #efefef;

            & .comment-btn-container {
                  opacity: 1;
            }
      }
`,ZI=h.div`
      width: 48px;
      height: 48px;
      border-radius: 48px;
      background: #b1e5fc;
      & > img {
            width: 48px;
            height: 48px;
            border-radius: 48px;
      }
`,eA=h.div`
      flex: 1;
      display: flex;
      justify-content: space-between;
      gap: 24px;
`,tA=h.div`
      font-size: 13px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #9a9fa5;
`,nA=h.div``,rA=h.div`
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
`,iA=h.div`
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;
      margin-top: 4px;
`,sA=h.div`
      display: flex;
      opacity: 0;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 32px;
      margin-top: 16px;
`,oA=h.div`
      cursor: pointer;
      width: 24px;
      height: 24px;
      & > img {
            width: 24px;
            height: 24px;
      }
`,aA=({comment:e,isCurrUser:t})=>{const n=vt(),r=xn.actions.setProjects,i=()=>{const s=window.localStorage.getItem("access_token");s&&XI(s,e.id).then(o=>{o.status===200&&mn(s).then(a=>{n(r(a.data.projects))}).catch()})};return c.jsxs(JI,{children:[c.jsx(ZI,{children:e.sender.photo&&c.jsx("img",{src:`${X}/${e.sender.photo}`})}),c.jsxs(eA,{children:[c.jsxs(nA,{children:[c.jsxs(rA,{children:[e.sender.first_name," ",e.sender.second_name]}),c.jsx(iA,{children:e.content}),c.jsx(sA,{className:"comment-btn-container",children:t&&c.jsx(oA,{onClick:i,children:c.jsx("img",{src:"/public/icons/trash_gray_24.svg"})})})]}),c.jsx(tA,{children:ch(new Date(e.timestamp),new Date,{locale:tc,addSuffix:!0})})]})]})},lA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      border: 2px solid #efefef;
      background: #f4f4f4;
      border-radius: 12px;
      align-items: center;
      padding: 4px 4px 4px 12px;
      gap: 24px;
      flex: 1;
`,cA=h.textarea`
      flex: 1;
      min-height: 24px;
      height: 24px;
      overflow: hidden;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      background: none;
      border: none;
      outline: none;
      resize: none;
      &::placeholder {
            color: #9a9fa5;
      }
`,uA=({taskId:e})=>{const t=vt(),n=xn.actions.setProjects,[r,i]=b.useState(""),[s,o]=b.useState(!0);b.useEffect(()=>{r.length>0?o(!1):o(!0)},[r]);const a=()=>{const l=window.localStorage.getItem("access_token");r.length>0&&l&&KI(l,e,r).then(u=>{u.status===200&&(i(""),mn(l).then(d=>{t(n(d.data.projects))}).catch())}).catch(u=>console.log(u))};return c.jsxs(lA,{children:[c.jsx(cA,{rows:1,placeholder:"Написать комментарий...",onChange:l=>{l.target.scrollHeight<150&&(l.target.style.height="auto",l.target.style.height=l.target.scrollHeight+"px"),i(l.target.value)},value:r,maxLength:1200}),c.jsx(Je,{style:{padding:"8px 16px 8px 16px",height:"40px",fontSize:"13px",alignSelf:"flex-end"},disabled:s,onClick:a,children:"Отправить"})]})},bS=h.div`
      display: block;
      width: 36px;
      height: 36px;
      max-width: 36px;
      max-height: 36px;
      border-radius: 36px;
      padding: 8px;
      background: #efefef;
      outline: none;
      border: none;
      cursor: pointer;
      & > img {
            width: 20px;
            height: 20px;
      }
      &:focus {
            outline: none;
      }
`,dA=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],fA=h.div`
      width: 100%;
      height: 100%;
      padding: 40px 40px 32px 40px;
      background: #f4f4f4;
      display: flex;
      flex-direction: column;
      gap: 24px;
      overflow: scroll;
`,pA=h.div`
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,hA=h.div`
      flex: 1;
      padding: 24px 40px 24px 24px;
      background: #fcfcfc;
      border-radius: 8px;
`,gA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 8px;
      align-items: center;
`,mA=h.div`
      width: 64px;
      height: 48px;
      border: 2px solid #efefef;
      padding: 10px 18px 10px 18px;
      background: #fcfcfc;
      border-radius: 12px;
      cursor: pointer;
      & > img {
            width: 24px;
            height: 24px;
      }
`,yA=h.div``,xA=h.div`
      font-size: 32px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: -0.03em;
      margin-top: 24px;
      color: #1a1d1f;
`,vA=h.div`
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: -0.02em;
      margin-top: 12px;
      color: #6f767e;
`,wA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      margin-top: 12px;
`,SA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      margin-top: 12px;
`,bA=h.div`
      height: 32px;
      padding: 4px 8px 4px 8px;
      border-radius: 41px;
      background: #efefef;
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.015em;
      color: #33383f;
`,kA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      margin-top: 12px;
`,_A=h.div`
      width: 100%;
      height: 1px;
      background: #efefef;
`,DA=h.div`
      display: flex;
      gap: 16px;
      margin-top: 40px;
`,CA=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
`,EA=h.div`
      display: flex;
      flex-direction: column;
      gap: 17px;
      margin-top: 32px;
`,jA=h.div`
      margin-top: 32px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
`,OA=()=>{const e=vt(),t=xn.actions.setProjects,n=we(y=>y.userReducer.user),r=we(y=>y.projectsReducer.projects),i=y=>{const S=y.getDate(),v=y.getMonth(),m=dA[v];return S+" "+m},s=[{value:"todo",title:"К исполнению",colorHex:"#2A85FF"},{value:"inprogress",title:"В процессе",colorHex:"#8E59FF"},{value:"completed",title:"Выполненно",colorHex:"#83BF6E"}],[o,a]=b.useState("todo"),l=xv(),u=Ze(),d=Number(l.id),[f,p]=b.useState(),[g,x]=b.useState();return b.useEffect(()=>{const y=window.localStorage.getItem("access_token");y&&g&&f&&jf(y,g==null?void 0:g.id,f==null?void 0:f.id,{status:o}).then(()=>{mn(y).then(S=>{e(t(S.data.projects))}).catch()}).catch()},[o]),b.useEffect(()=>{const y=r.find(v=>v.tasks.find(m=>m.id===d));x(y);const S=y==null?void 0:y.tasks.find(v=>v.id===d);p(S)},[r]),b.useEffect(()=>{f&&a(f==null?void 0:f.status)},[f]),c.jsxs(fA,{children:[c.jsx(pA,{children:"Информация о задаче"}),c.jsxs(hA,{children:[c.jsxs(gA,{children:[c.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:c.jsx(bS,{onClick:()=>u("/tasks"),children:c.jsx("img",{src:"/public/icons/arrow_backward_light_24.svg"})})}),c.jsx(mA,{onClick:()=>{u("settings")},children:c.jsx("img",{src:"/public/icons/settings_light_24.svg"})}),c.jsx(SS,{value:o,setValue:a,options:s})]}),c.jsxs(yA,{children:[c.jsx(xA,{children:f==null?void 0:f.name}),c.jsx(vA,{children:f==null?void 0:f.description}),c.jsxs(wA,{children:[c.jsx("img",{src:"/public/icons/person_gray.svg"}),f==null?void 0:f.assigned.map(y=>c.jsx(QI,{avatarPath:y.photo?`${X}/${y.photo}`:void 0,name:`${y.first_name} ${y.second_name}`}))]}),c.jsxs(SA,{children:[c.jsx("img",{src:"/public/icons/schedule_light_24.svg"}),c.jsx(bA,{children:f&&`${i(new Date(f==null?void 0:f.time_start))} - ${i(new Date(f==null?void 0:f.time_end))}`})]}),c.jsxs(kA,{children:[c.jsx("img",{src:"/public/icons/piechart_gray_24.svg"}),c.jsx(po,{color:"#33383F",bgColor:g==null?void 0:g.color,children:g&&g.name})]})]}),c.jsx(_A,{style:{marginTop:"24px"}}),c.jsxs(DA,{children:[c.jsx(CA,{children:"Комментарии"}),c.jsx(pn,{style:{background:"#CABDFF"}})]}),c.jsx(EA,{children:f&&f.comments.map(y=>c.jsx(aA,{comment:y,isCurrUser:y.sender.id===n.id}))}),c.jsx(jA,{children:c.jsx(uA,{taskId:f==null?void 0:f.id})})]})]})},PA=h.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #fcfcfc;
      outline: none;
      border: 2px solid rgba(239, 239, 239, 1);
      border-radius: 12px;
      color: #ff6a55;
      padding: 12px 20px 12px 20px;
      height: 48px;
      font-size: 15px;
      line-height: 24px;
      gap: 8px;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: center;
      cursor: pointer;
      &:focus {
            outline: none;
      }
      &:disabled {
            opacity: 0.5;
            cursor: auto;
      }
      &:hover {
            border: 2px solid rgba(239, 239, 239, 1);
      }
`,TA=e=>c.jsx(PA,{...e}),RA=[{value:"todo",title:"К исполнению",colorHex:"#2A85FF"},{value:"inprogress",title:"В процессе",colorHex:"#8E59FF"},{value:"completed",title:"Выполненно",colorHex:"#83BF6E"}],MA=h.div`
      width: 100%;
      height: 100%;
      padding: 40px 40px 32px 40px;
      background: #f4f4f4;
      display: flex;
      flex-direction: column;
      gap: 24px;
      overflow: scroll;
`,NA=h.div`
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,$A=h.div`
      flex: 1;
      padding: 24px 40px 24px 24px;
      background: #fcfcfc;
      border-radius: 8px;
`,IA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
`,AA=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-direction: flex-start;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 12px;
`,S0=h.div`
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;
`,FA=h.div`
      margin-top: 24px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-direction: flex-start;
      gap: 16px;
      position: relative;
`,LA=h.div`
      position: fixed;
      z-index: 9999;
      top: 25%;
      left: 38%;
`,zA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      margin-top: 12px;
`,WA=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      margin-top: 32px;
`,BA=()=>{const e=vt(),t=xn.actions.setProjects,n=Ze(),r=xv(),i=Number(r.id),s=we(T=>T.projectsReducer.projects),o=we(T=>T.userReducer.user),[a,l]=b.useState("todo"),[u,d]=b.useState(),[f,p]=b.useState(),[g,x]=b.useState(""),[y,S]=b.useState(!1),[v,m]=b.useState(!1),[w,k]=b.useState(""),[_,E]=b.useState(""),[D,O]=b.useState(""),[K,N]=b.useState(!0),[L,Z]=b.useState({startDate:new Date,endDate:new Date,key:"selection"}),[Oe,q]=b.useState([]);b.useEffect(()=>{const T=window.localStorage.getItem("access_token");T&&f&&u&&jf(T,f==null?void 0:f.id,u==null?void 0:u.id,{status:a}).then(()=>{mn(T).then(z=>{e(t(z.data.projects))}).catch()}).catch()},[a]),b.useEffect(()=>{const T=s.find(Y=>Y.tasks.find(oe=>oe.id===i));p(T);const z=T==null?void 0:T.tasks.find(Y=>Y.id===i);d(z)},[s]),b.useEffect(()=>{u&&(l(u==null?void 0:u.status),x(u==null?void 0:u.name),k(u==null?void 0:u.description),Z({startDate:new Date(u.time_start),endDate:new Date(u.time_end),key:"selection"}),L.endDate&&O(m0(L.endDate)),L.startDate&&E(m0(L.startDate)),q(u.assigned))},[u]);const ce=b.useRef(null);b.useEffect(()=>{const T=({target:z})=>{var Y;(Y=ce.current)!=null&&Y.contains(z)||S(!1)};return document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[S]),b.useEffect(()=>{L.startDate&&L.endDate&&g&&g.length>0&&w&&w.length>0&&_.length>0&&D.length>0?N(!1):N(!0)},[L.startDate,L.endDate,D.length,_.length,g,w]);const Se=()=>{const T=window.localStorage.getItem("access_token");T&&u&&f&&qN(T,f.id,u.id).then(z=>{z.status===200&&(mn(T).then(Y=>{e(t(Y.data.projects))}).catch(Y=>console.log(Y)),n("/tasks"))}).catch(z=>console.log(z))},$e=T=>{var ue,ft;T.preventDefault();const z=window.localStorage.getItem("access_token"),Y=Oe.map(M=>M.id),oe={name:g,description:w,time_start:(ue=L.startDate)==null?void 0:ue.toISOString(),time_end:(ft=L.endDate)==null?void 0:ft.toISOString(),assigned:[o.id,...Y]};z&&f&&u&&f&&jf(z,f.id,u==null?void 0:u.id,oe),close()};return c.jsxs(MA,{children:[c.jsx(NA,{children:"Редактирование задачи"}),c.jsxs($A,{children:[c.jsxs(IA,{children:[c.jsx(bS,{onClick:()=>n(`${X}/tasks/${u==null?void 0:u.id}`),children:c.jsx("img",{src:"/public/icons/arrow_backward_light_24.svg"})}),c.jsx(SS,{value:a,setValue:l,options:RA})]}),c.jsxs("form",{onSubmit:$e,children:[c.jsx(S0,{style:{marginTop:"24px"},children:"Название задачи"}),c.jsx(Ac,{style:{marginTop:"12px"},value:g,onChange:T=>x(T.target.value)}),c.jsx(S0,{style:{marginTop:"12px"},children:"Описание"}),c.jsx(yj,{style:{marginTop:"12px"},value:w,onChange:T=>k(T.target.value)}),c.jsxs(AA,{children:[c.jsx("img",{src:"/public/icons/person_gray.svg",style:{width:"24px",height:"24px"}}),Oe.map(T=>c.jsx(b1,{type:"button",avatarPath:T.photo?`${X}/${T.photo}`:void 0,name:`${T.first_name} ${T.second_name}`,onClick:()=>{q(Oe.filter(z=>z.id!==T.id))}})),c.jsxs(Ki,{style:{position:"relative"},onClick:T=>{T.preventDefault(),m(!0)},children:[c.jsx("img",{src:"/public/icons/plus_gray_20.svg"}),v&&c.jsx(eS,{setIsQueryDropdown:m,style:{position:"absolute",top:"0",left:"0",zIndex:1e4},children:f==null?void 0:f.members.filter(T=>T.id!==o.id).map(T=>Oe.includes(T)?c.jsx(c.Fragment,{}):c.jsx(tS,{avatarUrl:T.photo?`${X}/${T.photo}`:void 0,name:T.first_name+" "+T.second_name,onClick:()=>{q([T,...Oe])}}))})]})]}),c.jsxs(FA,{children:[c.jsx("img",{src:"/public/icons/schedule_light_24.svg",style:{width:"24px",height:"24px"}}),!_&&!D&&c.jsx(Ki,{onClick:T=>{T.preventDefault(),S(!y)},children:c.jsx("img",{src:"/public/icons/plus_gray_20.svg"})}),_&&D&&c.jsx(Ki,{style:{width:"fit-content",padding:"4px 8px 4px 8px"},onClick:T=>{T.preventDefault(),S(!y)},children:_+" - "+D}),y&&c.jsx(LA,{ref:ce,children:c.jsx(Zw,{date:L,setDate:Z,close:()=>{S(!1)},startStringDate:_,endStringDate:D,setStartStringDate:E,setEndStringDate:O})})]}),c.jsxs(zA,{children:[c.jsx("img",{src:"/public/icons/piechart_gray_24.svg"}),c.jsx(po,{color:"#33383F",bgColor:f?f.color:"#FFBC99",children:f&&f.name})]}),c.jsxs(WA,{children:[c.jsxs(TA,{type:"button",onClick:Se,children:[c.jsx("div",{children:"Удалить"}),c.jsx("img",{src:"/public/icons/trash_red_24.svg"})]}),c.jsx(Je,{type:"submit",style:{padding:"12px 68px 12px 68px"},disabled:K,children:"Сохранить"})]})]})]})]})},ll=async e=>await re({method:"get",url:X+"/user",headers:{Authorization:`Bearer ${e}`},validateStatus:function(n){return n<500},timeout:3e3}),id=async(e,t)=>{const n=new FormData;return t.email&&n.append("email",t.email),t.photo&&n.append("photo",t.photo),t.photo===null&&n.append("photo","null"),t.first_name&&n.append("first_name",t.first_name),t.second_name&&n.append("second_name",t.second_name),t.old_password&&n.append("old_password",t.old_password),t.new_password&&n.append("new_password",t.new_password),await re.put(X+"/user",n,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(i){return i<500}})},UA=async e=>re.put(X+"/user/delete_photo",{},{headers:{Authorization:`Bearer ${e}`},validateStatus:function(n){return n<500}}),HA={user:{id:NaN,photo:null,email:"",first_name:"",second_name:""}},Rh=Ph({name:"userSlice",initialState:HA,reducers:{setUser(e,t){e.user=t.payload}}}),YA=Rh.reducer,qA=h.div`
      width: 100%;
      height: 100%;
      padding: 40px 40px 40px 40px;
      background: #f4f4f4;
      display: flex;
      flex-direction: column;
      gap: 24px;
      overflow: scroll;
`,VA=h.div`
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,GA=h.div`
      flex: 1;
      padding: 24px 24px 24px 24px;
      background: #fcfcfc;
      border-radius: 8px;
`,b0=h.div`
      display: flex;
      gap: 16px;
      align-items: center;
`,k0=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
`,QA=h.div`
      display: flex;
      align-items: center;
      margin-top: 32px;
`,KA=h.div`
      width: 96px;
      height: 96px;
      border-radius: 48px;
      & > img {
            width: 96px;
            height: 96px;
            border-radius: 48px;
            object-fit: cover;
      }
`,XA=h.div`
      width: 660px;
      height: 1px;
      margin-top: 48px;
      border-radius: 1px;
      background: #efefef;
`,JA=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-top: 32px;
`,ZA=()=>{const{setIsAuth:e}=b.useContext(Ko),t=Ze(),n=vt(),r=Rh.actions.setUser,i=we(q=>q.userReducer),s=b.useRef(null),[o,a]=b.useState({...i.user}),[l,u]=b.useState(""),[d,f]=b.useState(""),[p,g]=b.useState(""),[x,y]=b.useState(!1),[S,v]=b.useState(!0),[m,w]=b.useState({}),[k,_]=b.useState(!0),E=q=>{const ce=q.target.name,Se=q.target.value;a($e=>({...$e,[ce]:Se}))},D=q=>{if(q.target.files){const ce=q.target.files[0],Se=window.localStorage.getItem("access_token");Se&&id(Se,{photo:ce}).then(()=>{ll(Se).then(({data:$e})=>{n(r($e))}).catch()}).catch($e=>{console.log($e)})}},O=q=>{q.target.validity.valid&&q.target.value!==""?(_(!0),w({color:"#1a1d1f",background:"#f4f4f4"}),E(q)):q.target.value!==""?(_(!1),w({color:"#ff6a55",background:"rgba(255, 188, 153, 0.25)"}),E(q)):q.target.value===""&&(w({color:"#1a1d1f",background:"#f4f4f4"}),E(q))},K=b.useCallback(()=>{l.length>0&&d.length>0&&p.length>0&&d===p?v(!1):v(!0)},[d,p,l]),N=b.useCallback(()=>{const{email:q,first_name:ce,second_name:Se}=o;q&&ce&&Se&&k&&ce.length>0&&Se.length>0?y(!1):y(!0)},[o,k]),L=()=>{const q=window.localStorage.getItem("access_token");q&&id(q,{email:o.email,first_name:o.first_name,second_name:o.second_name,photo:void 0}).then(()=>{ll(q).then(ce=>{if(ce.status===401){window.localStorage.removeItem("access_token"),e(!1);return}ce.status===200&&n(r(ce.data)),t("/home")}).catch()}).catch(ce=>{console.log(ce)})},Z=()=>{const q=window.localStorage.getItem("access_token");q&&UA(q).then(()=>{ll(q).then(({data:ce})=>{n(r(ce))}).catch()}).catch(ce=>{console.log(ce)})},Oe=()=>{const q=window.localStorage.getItem("access_token");q&&id(q,{old_password:l,new_password:d}).then(ce=>{ce.status===200&&(t("/home"),console.log("Password changed!"))}).catch(ce=>{console.log(ce)})};return b.useEffect(()=>{N()},[o,N]),b.useEffect(()=>{K()},[l,d,p,K]),c.jsxs(qA,{children:[c.jsx(VA,{children:"Личный кабинет"}),c.jsxs(GA,{children:[c.jsxs(b0,{children:[c.jsx(pn,{style:{background:"#B5E4CA"}}),c.jsx(k0,{children:"Информация о профиле"})]}),c.jsxs("form",{children:[c.jsxs(QA,{children:[c.jsx(KA,{style:{background:i.user.photo?"none":"#b1e5fc"},children:i.user.photo&&c.jsx("img",{src:`${X}/${i.user.photo}`})}),c.jsx("input",{name:"photo",onChange:D,multiple:!1,ref:s,type:"file",hidden:!0}),c.jsxs(Je,{style:{padding:"12px 20px 12px 20px",marginLeft:"32px"},type:"button",onClick:()=>{s.current&&s.current.click()},children:[c.jsx("img",{src:"/public/icons/plus.svg"}),"Обновить фотографию"]}),c.jsx(ps,{style:{marginLeft:"12px"},type:"button",onClick:Z,children:"Удалить"})]}),c.jsx(an,{style:{marginTop:"32px"},children:"Имя"}),c.jsx(Qr,{name:"first_name",value:o.first_name,style:{marginTop:"12px"},onChange:q=>{E(q)}}),c.jsx(an,{style:{marginTop:"32px"},children:"Фамилия"}),c.jsx(Qr,{name:"second_name",value:o.second_name,style:{marginTop:"12px"},onChange:q=>{E(q)}}),c.jsx(an,{style:{marginTop:"32px"},children:"Email"}),c.jsx(Qr,{name:"email",value:o.email,style:{marginTop:"12px",...m},type:"email",onChange:q=>{O(q)}})]}),c.jsx(XA,{}),c.jsxs(b0,{style:{marginTop:"48px"},children:[c.jsx(pn,{style:{background:"#CABDFF"}}),c.jsx(k0,{children:"Пароль"})]}),c.jsxs("form",{children:[c.jsx(an,{style:{marginTop:"32px"},children:"Старый пароль"}),c.jsx(Qr,{name:"oldPassword",value:l,type:"password",onChange:q=>{u(q.target.value)},style:{marginTop:"12px",width:"624px"}}),c.jsxs(JA,{children:[c.jsxs("div",{style:{flex:1},children:[c.jsx(an,{children:"Новый пароль"}),c.jsx(Qr,{name:"newPassword",value:d,type:"password",onChange:q=>{f(q.target.value)},style:{marginTop:"12px",width:"100%"}})]}),c.jsxs("div",{style:{flex:1},children:[c.jsx(an,{children:"Подтвердите новый пароль"}),c.jsx(Qr,{name:"newPassword2",value:p,type:"password",onChange:q=>{g(q.target.value)},style:{marginTop:"12px",width:"100%"}})]})]}),c.jsx(ps,{style:{marginTop:"32px"},disabled:S,onClick:Oe,type:"button",children:"Обновить пароль"})]}),c.jsx(Je,{style:{marginTop:"48px"},type:"button",disabled:x,onClick:L,children:"Сохранить"})]})]})},eF=h.div`
      width: 100%;
      border-radius: 12px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 12px;
      cursor: pointer;
`,tF=h.div`
      width: 56px;
      height: 56px;
      position: relative;
`,nF=h.div`
      width: 56px;
      height: 56px;
      border-radius: 56px;
      background: #b1e5fc;
      & > img {
            width: 56px;
            height: 56px;
            border-radius: 56px;
            object-fit: cover;
      }
`,rF=h.div`
      flex: 1;
      overflow: hidden;
      position: relative;
`,iF=h.div`
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #1a1d1f;
`,sF=h.div`
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.015em;
      color: #6f767e;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
`,oF=h.div`
      font-size: 13px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #9a9fa5;
      position: absolute;
      right: 24px;
      top: 4px;
`,aF=h.div`
      width: 12px;
      height: 12px;
      border-radius: 12px;
      background: #9a9fa5;
      position: absolute;
      top: 6px;
      right: 0;
`,lF=h.div`
      width: 20px;
      height: 20px;
      background: #83bf6e;
      border: 4px solid #efefef;
      position: absolute;
      border-radius: 100%;
      top: -2px;
      left: -2px;
`,cF=({chat:e,isActive:t,onClick:n})=>{const r=we(v=>v.userReducer.user),i=we(v=>v.chatsReducer.chats);let s=0;i.map(v=>{v.messages.map(m=>{m.read_id.includes(r.id)||(s=s+1)})});const o=s>0,[a,l]=b.useState(""),[u,d]=b.useState(""),[f,p]=b.useState(),[g,x]=b.useState(void 0),[y,S]=b.useState(!1);return b.useEffect(()=>{var v;if(e.messages[0]&&(e.messages[e.messages.length-1].type==="text"&&d(e.messages[e.messages.length-1].content),e.messages[e.messages.length-1].type==="file"&&d(`${e.messages[e.messages.length-1].sender.first_name} ${e.messages[e.messages.length-1].sender.second_name} отправил файл`),e.messages[e.messages.length-1].type==="image"&&d(`${e.messages[e.messages.length-1].sender.first_name} ${e.messages[e.messages.length-1].sender.second_name} отправил фото`),p(`${new Date(e.messages[e.messages.length-1].timestamp).getHours()}:${ac(new Date(e.messages[e.messages.length-1].timestamp))}`)),e.type==="direct"){const m=e.members.find(w=>w.id!==r.id);m!=null&&m.photo&&x(`${X}/${(v=e.members.find(w=>w.id!==r.id))==null?void 0:v.photo}`),S(m==null?void 0:m.is_online),l(`${m==null?void 0:m.first_name} ${m==null?void 0:m.second_name}`)}e.type==="group"&&(l(e.name),e.photo&&x(`${X}/${e.photo}`))},[e]),c.jsxs(eF,{onClick:n,style:{background:t?"#efefef":void 0},children:[c.jsxs(tF,{children:[y&&c.jsx(lF,{}),c.jsx(nF,{children:g&&c.jsx("img",{src:g})})]}),c.jsxs(rF,{children:[c.jsx(iF,{children:a}),c.jsx(sF,{children:u}),c.jsx(oF,{children:f}),c.jsx(aF,{style:{background:o?"#2A85FF":"#9a9fa5"}})]})]})},or="/public/reactions/",Ln={1:`${or}blush_18.png`,2:`${or}cool_18.png`,3:`${or}crying_with_laughter_18.png`,4:`${or}heart_eyes_18.png`,5:`${or}sleepy_18.png`,6:`${or}smile_eyes_18.png`,7:`${or}surprised_18.png`,8:`${or}sweat_grinning_18.png`},In=Object.create(null);In.open="0";In.close="1";In.ping="2";In.pong="3";In.message="4";In.upgrade="5";In.noop="6";const cl=Object.create(null);Object.keys(In).forEach(e=>{cl[In[e]]=e});const $f={type:"error",data:"parser error"},kS=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",_S=typeof ArrayBuffer=="function",DS=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Mh=({type:e,data:t},n,r)=>kS&&t instanceof Blob?n?r(t):_0(t,r):_S&&(t instanceof ArrayBuffer||DS(t))?n?r(t):_0(new Blob([t]),r):r(In[e]+(t||"")),_0=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)};function D0(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let sd;function uF(e,t){if(kS&&e.data instanceof Blob)return e.data.arrayBuffer().then(D0).then(t);if(_S&&(e.data instanceof ArrayBuffer||DS(e.data)))return t(D0(e.data));Mh(e,!1,n=>{sd||(sd=new TextEncoder),t(sd.encode(n))})}const C0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",eo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<C0.length;e++)eo[C0.charCodeAt(e)]=e;const dF=e=>{let t=e.length*.75,n=e.length,r,i=0,s,o,a,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const u=new ArrayBuffer(t),d=new Uint8Array(u);for(r=0;r<n;r+=4)s=eo[e.charCodeAt(r)],o=eo[e.charCodeAt(r+1)],a=eo[e.charCodeAt(r+2)],l=eo[e.charCodeAt(r+3)],d[i++]=s<<2|o>>4,d[i++]=(o&15)<<4|a>>2,d[i++]=(a&3)<<6|l&63;return u},fF=typeof ArrayBuffer=="function",Nh=(e,t)=>{if(typeof e!="string")return{type:"message",data:CS(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:pF(e.substring(1),t)}:cl[n]?e.length>1?{type:cl[n],data:e.substring(1)}:{type:cl[n]}:$f},pF=(e,t)=>{if(fF){const n=dF(e);return CS(n,t)}else return{base64:!0,data:e}},CS=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},ES="",hF=(e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((s,o)=>{Mh(s,!1,a=>{r[o]=a,++i===n&&t(r.join(ES))})})},gF=(e,t)=>{const n=e.split(ES),r=[];for(let i=0;i<n.length;i++){const s=Nh(n[i],t);if(r.push(s),s.type==="error")break}return r};function mF(){return new TransformStream({transform(e,t){uF(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let od;function Fa(e){return e.reduce((t,n)=>t+n.length,0)}function La(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function yF(e,t){od||(od=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(Fa(n)<1)break;const l=La(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Fa(n)<2)break;const l=La(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(Fa(n)<8)break;const l=La(n,8),u=new DataView(l.buffer,l.byteOffset,l.length),d=u.getUint32(0);if(d>Math.pow(2,21)-1){a.enqueue($f);break}i=d*Math.pow(2,32)+u.getUint32(4),r=3}else{if(Fa(n)<i)break;const l=La(n,i);a.enqueue(Nh(s?l:od.decode(l),t)),r=0}if(i===0||i>e){a.enqueue($f);break}}}})}const jS=4;function He(e){if(e)return xF(e)}function xF(e){for(var t in He.prototype)e[t]=He.prototype[t];return e}He.prototype.on=He.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};He.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};He.prototype.off=He.prototype.removeListener=He.prototype.removeAllListeners=He.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+e],this};He.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this};He.prototype.emitReserved=He.prototype.emit;He.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};He.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Vt=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function OS(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const vF=Vt.setTimeout,wF=Vt.clearTimeout;function iu(e,t){t.useNativeTimers?(e.setTimeoutFn=vF.bind(Vt),e.clearTimeoutFn=wF.bind(Vt)):(e.setTimeoutFn=Vt.setTimeout.bind(Vt),e.clearTimeoutFn=Vt.clearTimeout.bind(Vt))}const SF=1.33;function bF(e){return typeof e=="string"?kF(e):Math.ceil((e.byteLength||e.size)*SF)}function kF(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function _F(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function DF(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class CF extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class $h extends He{constructor(t){super(),this.writable=!1,iu(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,n,r){return super.emitReserved("error",new CF(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=Nh(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=_F(t);return n.length?"?"+n:""}}const PS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),If=64,EF={};let E0=0,za=0,j0;function O0(e){let t="";do t=PS[e%If]+t,e=Math.floor(e/If);while(e>0);return t}function TS(){const e=O0(+new Date);return e!==j0?(E0=0,j0=e):e+"."+O0(E0++)}for(;za<If;za++)EF[PS[za]]=za;let RS=!1;try{RS=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const jF=RS;function MS(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||jF))return new XMLHttpRequest}catch{}if(!t)try{return new Vt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function OF(){}const PF=function(){return new MS({xdomain:!1}).responseType!=null}();class TF extends $h{constructor(t){if(super(t),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}const n=t&&t.forceBase64;this.supportsBinary=PF&&!n,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};gF(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,hF(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=TS()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}request(t={}){return Object.assign(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new es(this.uri(),t)}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}let es=class ul extends He{constructor(t,n){super(),iu(this,n),this.opts=n,this.method=n.method||"GET",this.uri=t,this.data=n.data!==void 0?n.data:null,this.create()}create(){var t;const n=OS(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;const r=this.xhr=new MS(n);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(t=this.opts.cookieJar)===null||t===void 0||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status=="number"?r.status:0)},0))},r.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=ul.requestsCount++,ul.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=OF,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete ul.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}};es.requestsCount=0;es.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",P0);else if(typeof addEventListener=="function"){const e="onpagehide"in Vt?"pagehide":"unload";addEventListener(e,P0,!1)}}function P0(){for(let e in es.requests)es.requests.hasOwnProperty(e)&&es.requests[e].abort()}const Ih=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0),Wa=Vt.WebSocket||Vt.MozWebSocket,T0=!0,RF="arraybuffer",R0=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class MF extends $h{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),n=this.opts.protocols,r=R0?{}:OS(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=T0&&!R0?n?new Wa(t,n):new Wa(t):new Wa(t,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;Mh(r,this.supportsBinary,s=>{const o={};try{T0&&this.ws.send(s)}catch{}i&&Ih(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=TS()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}check(){return!!Wa}}class NF extends $h{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(t=>{const n=yF(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(n).getReader(),i=mF();i.readable.pipeTo(t.writable),this.writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;this.writer.write(r).then(()=>{i&&Ih(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this.transport)===null||t===void 0||t.close()}}const $F={websocket:MF,webtransport:NF,polling:TF},IF=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,AF=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Af(e){if(e.length>2e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=IF.exec(e||""),s={},o=14;for(;o--;)s[AF[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=FF(s,s.path),s.queryKey=LF(s,s.query),s}function FF(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function LF(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}let NS=class Oi extends He{constructor(t,n={}){super(),this.binaryType=RF,this.writeBuffer=[],t&&typeof t=="object"&&(n=t,t=null),t?(t=Af(t),n.hostname=t.host,n.secure=t.protocol==="https"||t.protocol==="wss",n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=Af(n.host).host),iu(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=DF(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=jS,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new $F[t](r)}open(){let t;if(this.opts.rememberUpgrade&&Oi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(t){let n=this.createTransport(t),r=!1;Oi.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",f=>{if(!r)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Oi.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(d(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=n.name,this.emitReserved("upgradeError",p)}}))};function s(){r||(r=!0,d(),n.close(),n=null)}const o=f=>{const p=new Error("probe error: "+f);p.transport=n.name,s(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function l(){o("socket closed")}function u(f){n&&f.name!==n.name&&s()}const d=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",u)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",u),this.upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onOpen(){if(this.readyState="open",Oi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let t=0;const n=this.upgrades.length;for(;t<n;t++)this.probe(this.upgrades[t])}}onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=t.data,this.onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=bF(i)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(t,n,r){return this.sendPacket("message",t,n,r),this}send(t,n,r){return this.sendPacket("message",t,n,r),this}sendPacket(t,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:t,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}onError(t){Oi.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const n=[];let r=0;const i=t.length;for(;r<i;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}};NS.protocol=jS;function zF(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=Af(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+t,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const WF=typeof ArrayBuffer=="function",BF=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,$S=Object.prototype.toString,UF=typeof Blob=="function"||typeof Blob<"u"&&$S.call(Blob)==="[object BlobConstructor]",HF=typeof File=="function"||typeof File<"u"&&$S.call(File)==="[object FileConstructor]";function Ah(e){return WF&&(e instanceof ArrayBuffer||BF(e))||UF&&e instanceof Blob||HF&&e instanceof File}function dl(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(dl(e[n]))return!0;return!1}if(Ah(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return dl(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&dl(e[n]))return!0;return!1}function YF(e){const t=[],n=e.data,r=e;return r.data=Ff(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Ff(e,t){if(!e)return e;if(Ah(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ff(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Ff(e[r],t));return n}return e}function qF(e,t){return e.data=Lf(e.data,t),delete e.attachments,e}function Lf(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Lf(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Lf(e[n],t));return e}const VF=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],GF=5;var se;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(se||(se={}));class QF{constructor(t){this.replacer=t}encode(t){return(t.type===se.EVENT||t.type===se.ACK)&&dl(t)?this.encodeAsBinary({type:t.type===se.EVENT?se.BINARY_EVENT:se.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===se.BINARY_EVENT||t.type===se.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=YF(t),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}function M0(e){return Object.prototype.toString.call(e)==="[object Object]"}class Fh extends He{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===se.BINARY_EVENT;r||n.type===se.BINARY_ACK?(n.type=r?se.EVENT:se.ACK,this.reconstructor=new KF(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ah(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(se[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===se.BINARY_EVENT||r.type===se.BINARY_ACK){const s=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const o=t.substring(s,n);if(o!=Number(o)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(t.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(s,n)}else r.nsp="/";const i=t.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=t.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===t.length)break}r.id=Number(t.substring(s,n+1))}if(t.charAt(++n)){const s=this.tryParse(t.substr(n));if(Fh.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case se.CONNECT:return M0(n);case se.DISCONNECT:return n===void 0;case se.CONNECT_ERROR:return typeof n=="string"||M0(n);case se.EVENT:case se.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&VF.indexOf(n[0])===-1);case se.ACK:case se.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class KF{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=qF(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const XF=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Fh,Encoder:QF,get PacketType(){return se},protocol:GF},Symbol.toStringTag,{value:"Module"}));function sn(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const JF=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class IS extends He{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[sn(t,"open",this.onopen.bind(this)),sn(t,"packet",this.onpacket.bind(this)),sn(t,"error",this.onerror.bind(this)),sn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){if(JF.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const r={type:se.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const o=this.ids++,a=n.pop();this._registerAckCallback(o,a),r.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(t,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[t]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:se.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(r=>String(r.id)===t)){const r=this.acks[t];delete this.acks[t],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case se.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case se.EVENT:case se.BINARY_EVENT:this.onevent(t);break;case se.ACK:case se.BINARY_ACK:this.onack(t);break;case se.DISCONNECT:this.ondisconnect();break;case se.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:se.ACK,id:t,data:i}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:se.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function Es(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Es.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};Es.prototype.reset=function(){this.attempts=0};Es.prototype.setMin=function(e){this.ms=e};Es.prototype.setMax=function(e){this.max=e};Es.prototype.setJitter=function(e){this.jitter=e};class zf extends He{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,iu(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Es({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||XF;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new NS(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=sn(n,"open",function(){r.onopen(),t&&t()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=sn(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(sn(t,"ping",this.onping.bind(this)),sn(t,"data",this.ondata.bind(this)),sn(t,"error",this.onerror.bind(this)),sn(t,"close",this.onclose.bind(this)),sn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){Ih(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new IS(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Vs={};function fl(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=zF(e,t.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Vs[i]&&s in Vs[i].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let l;return a?l=new zf(r,t):(Vs[i]||(Vs[i]=new zf(r,t)),l=Vs[i]),n.query&&!t.query&&(t.query=n.queryKey),l.socket(n.path,t)}Object.assign(fl,{Manager:zf,Socket:IS,io:fl,connect:fl});const me=fl(X,{auth:{token:window.localStorage.getItem("access_token")},reconnection:!1,autoConnect:!1}),ZF=h.div`
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      &:hover > div {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 8px;
      }
`,e6=h.button`
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      border: none;
      background: none;
      height: 16px;
      &:focus {
            outline: none;
      }
      img {
            width: 100%;
            height: 100%;
      }
`,t6=h.div`
      display: none;
      width: fit-content;
      position: absolute;
      bottom: 0;
      background: #fff;
      border-radius: 12px 12px 12px 12px;
      padding: 12px;
      z-index: 1;
      box-shadow: 0px 32px 48px -8px #0000001a;
      box-shadow: 0px 0px 14px -4px #0000000d;
      box-shadow: 0px 40px 64px -12px #00000014;
`,ar=h.button`
      width: 16px;
      height: 16px;
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
      background: none;
      cursor: pointer;
      user-select: none;
      &:focus {
            outline: none;
      }
      & > img {
            width: 100%;
            height: 100%;
      }
`,n6=({chatId:e,messageId:t,isIncoming:n})=>{const r=i=>{me.emit("set_reaction",{reaction:i,chat_id:e,message_id:t})};return c.jsxs(ZF,{children:[c.jsx(e6,{style:{width:"14px",height:"14px"},children:c.jsx("img",{src:"/public/icons/reactions/smile_light.svg"})}),c.jsxs(t6,{style:{right:n?"none":"0px",left:n?"0px":"none"},children:[c.jsx(ar,{onClick:()=>{r(1)},children:c.jsx("img",{src:Ln[1]})}),c.jsx(ar,{onClick:()=>{r(2)},children:c.jsx("img",{src:Ln[2]})}),c.jsx(ar,{onClick:()=>{r(3)},children:c.jsx("img",{src:Ln[3]})}),c.jsx(ar,{onClick:()=>{r(4)},children:c.jsx("img",{src:Ln[4]})}),c.jsx(ar,{onClick:()=>{r(5)},children:c.jsx("img",{src:Ln[5]})}),c.jsx(ar,{onClick:()=>{r(6)},children:c.jsx("img",{src:Ln[6]})}),c.jsx(ar,{onClick:()=>{r(7)},children:c.jsx("img",{src:Ln[7]})}),c.jsx(ar,{onClick:()=>{r(8)},children:c.jsx("img",{src:Ln[8]})})]})]})},r6=h.div`
      max-width: 63px;
      border: 0.5px solid #efefef;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
      padding: 2px 2px 2px 6px;
      background: #fcfcfc;
      border-radius: 10px;
      transition: background 0.3s;
      cursor: pointer;
      &:hover {
            background: #2a85ff;
      }
`,i6=h.img`
      max-width: 14px;
      max-height: 14px;
      width: 14px;
      height: 14px;
`,s6=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      position: relative;
`,N0=h.img`
      position: relative;
      width: 15px;
      height: 15px;
      max-width: 15px;
      max-height: 15px;
      border-radius: 16px;
      border: 0.5px solid #60636c;
      &:nth-child(2) {
            left: -5px;
      }
      &:nth-child(3) {
            left: -10px;
      }
`,o6=({reaction:e,chatId:t,messageId:n,users:r,myUserId:i,reactionId:s})=>{const o=e.toString(),[a,l]=b.useState(!1);b.useEffect(()=>{r.find(p=>p.id===i)?l(!0):l(!1)},[r]);const u=()=>{me.emit("set_reaction",{reaction:e,chat_id:t,message_id:n})},d=()=>{me.emit("remove_reaction",{reaction_id:s,chat_id:t})},f=()=>{a?d():u()};return c.jsxs(r6,{onClick:f,style:{background:a?"#2a85ff":"#fcfcfc"},children:[c.jsx(i6,{src:Ln[o]}),c.jsx(s6,{children:r.slice(-3).map(p=>{if(p.photo)return c.jsx(N0,{src:`${X}/${p.photo}`});if(p.photo)return c.jsx(N0,{})})})]})},a6=h.div`
      align-self: ${e=>e.isIncomingMessage===!1?"flex-end":"flex-start"};
      display: flex;
      max-width: 87%;
      width: fit-content;
      flex-direction: row;
      gap: 12px;
      align-items: flex-end;
`,l6=h.div`
      flex: 1;
      padding: 12px;
      background: #f4f4f4;
      border: 2px solid #efefef;
      border-radius: ${e=>e.isIncomingMessage===!0?"12px 12px 12px 0px":"12px 12px 0px 12px"};
      display: flex;
      flex-direction: column;
      gap: 4px;
`,c6=h.div`
      color: #2a85ff;
      font-size: 13px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.01em;
      display: ${e=>e.isIncomingMessage===!0?"block":"none"};
`,u6=h.div`
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.015em;
      text-align: left;
      color: #1a1d1f;
`,d6=h.div`
      display: flex;
      flex-direction: row-reverse;
      gap: 12px;
`,f6=h.div`
      color: #9a9fa5;
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
`,p6=({chatType:e,isIncomingMessage:t,senderAvatarURL:n,senderName:r,textContent:i,messageTime:s,reactions:o,chatId:a,messageId:l,myUserId:u})=>c.jsxs(a6,{isIncomingMessage:t,children:[t&&e=="group"&&c.jsx(Or,{src:n}),c.jsxs(l6,{isIncomingMessage:t,children:[c.jsx(c6,{isIncomingMessage:t,children:r}),c.jsx(u6,{children:i}),c.jsxs(d6,{children:[c.jsx(f6,{children:s}),o.map(d=>c.jsx(o6,{chatId:a,messageId:l,reaction:d.content,users:d.senders,myUserId:u,reactionId:d.id})),c.jsx(n6,{isIncoming:t,messageId:l,chatId:a})]})]})]}),h6=h.div`
      width: 40px;
      height: 40px;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fcfcfc;
      cursor: pointer;
`,$0=h.img`
      width: 24px;
      height: 24px;
`,I0=({isActive:e,iconPath:t,iconPathActive:n,onClick:r})=>c.jsx(h6,{onClick:r,children:e?c.jsx($0,{src:n}):c.jsx($0,{src:t})}),g6=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      border: 2px solid #efefef;
      background: #f4f4f4;
      border-radius: 12px;
      align-items: center;
      padding: 4px 4px 4px 12px;
      gap: 24px;
      flex: 1;
`,m6=h.textarea`
      flex: 1;
      min-height: 24px;
      height: 24px;
      overflow: hidden;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      background: none;
      border: none;
      outline: none;
      resize: none;
      &::placeholder {
            color: #9a9fa5;
      }
`,y6=({chatId:e})=>{const[t,n]=b.useState(!0),[r,i]=b.useState(""),[s,o]=b.useState(!1);b.useEffect(()=>{r&&r.length>0?(n(!1),o(!0)):(n(!0),o(!1))},[r]);const a=()=>{s&&(me.emit("new_message",{message:r,chat_id:e}),i(""))};return c.jsxs(g6,{children:[c.jsx(m6,{rows:1,value:r,placeholder:"Написать сообщение...",onChange:l=>{l.target.scrollHeight<150&&(l.target.style.height="auto",l.target.style.height=l.target.scrollHeight+"px"),i(l.target.value)},maxLength:1200}),c.jsx(Je,{disabled:t,style:{padding:"8px 16px 8px 16px",height:"40px",fontSize:"13px",alignSelf:"flex-end"},onClick:a,children:"Отправить"})]})},x6=h.div`
      align-self: ${e=>e.isIncomingMessage===!1?"flex-end":"flex-start"};
      display: flex;
      max-width: 87%;
      width: fit-content;
      flex-direction: row;
      gap: 12px;
      align-items: flex-end;
`,v6=h.div`
      position: relative;
      flex: 1;
      padding: 12px;
      padding-right: 50px;
      background: #f4f4f4;
      border: 2px solid #efefef;
      border-radius: ${e=>e.isIncomingMessage===!0?"12px 12px 12px 0px":"12px 12px 0px 12px"};
      display: flex;
      flex-direction: column;
      gap: 4px;
`,w6=h.div`
      color: #2a85ff;
      font-size: 13px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.01em;
      display: ${e=>e.isIncomingMessage===!0?"block":"none"};
`,S6=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 14px;
`,b6=h.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
      flex: 1;
`,k6=h.div`
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.015em;
      text-align: left;
      color: #1a1d1f;
      text-overflow: ellipsis;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      max-width: 300px;
`,_6=h.div`
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #9a9fa5;
`,D6=h.div`
      display: flex;
      flex-direction: row-reverse;
      gap: 12px;
      position: absolute;
      right: 12px;
      bottom: 6px;
`,C6=h.div`
      color: #9a9fa5;
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
`,E6=({chatType:e,isIncomingMessage:t,senderAvatarURL:n,senderName:r,messageTime:i,message:s})=>c.jsxs(x6,{isIncomingMessage:t,children:[t&&e=="group"&&c.jsx(Or,{src:n}),c.jsxs(v6,{isIncomingMessage:t,children:[c.jsx(w6,{isIncomingMessage:t,children:r}),c.jsxs(S6,{children:[c.jsx("a",{href:`${X}/${s.file_path}`,download:!0,children:c.jsx(Je,{type:"button",style:{borderRadius:"50%"},children:c.jsx("img",{src:"/public/icons/file_light.svg"})})}),c.jsxs(b6,{children:[c.jsx(k6,{children:s.file_name}),c.jsx(_6,{children:s.file_size+" Bytes"})]})]}),c.jsx(D6,{children:c.jsx(C6,{children:i})})]})]}),j6=h.div`
      align-self: ${e=>e.isIncomingMessage===!1?"flex-end":"flex-start"};
      display: flex;
      max-width: 87%;
      width: fit-content;
      flex-direction: row;
      gap: 12px;
      align-items: flex-end;
`,O6=h.div`
      position: relative;
      flex: 1;
      background: #f4f4f4;
      border: 2px solid #efefef;
      border-radius: ${e=>e.isIncomingMessage===!0?"12px 12px 12px 0px":"12px 12px 0px 12px"};
      display: flex;
      flex-direction: column;
`,P6=h.div`
      color: #2a85ff;
      font-size: 13px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.01em;
      padding: 4px 10px 4px 10px;
      display: ${e=>e.isIncomingMessage===!0?"block":"none"};
`,T6=h.img`
      border-top: ${e=>e.isIncomingMessage===!0?"2px solid #efefef":"none"};
      max-width: 240px;
      max-height: 240px;
      border-radius: ${e=>e.isIncomingMessage===!0?"0 0 12px 0px":"12px 12px 0px 12px"};
`,R6=h.div`
      display: flex;
      flex-direction: row-reverse;
      gap: 12px;
      position: absolute;
      right: 12px;
      bottom: 6px;
`,M6=h.div`
      color: #9a9fa5;
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
`,N6=({chatType:e,isIncomingMessage:t,senderAvatarURL:n,message:r})=>c.jsxs(j6,{isIncomingMessage:t,children:[t&&e=="group"&&c.jsx(Or,{src:n}),c.jsxs(O6,{isIncomingMessage:t,children:[c.jsx(P6,{isIncomingMessage:t,children:`${r.sender.first_name} ${r.sender.second_name}`}),c.jsx(T6,{src:`${X}/${r.file_path}`,isIncomingMessage:t}),c.jsx(R6,{children:c.jsx(M6,{children:`${new Date(r.timestamp).getHours()}:${ac(new Date(r.timestamp))}`})})]})]}),Dr=async e=>await re.get(`${X}/chats`,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(n){return n<500}}),AS=async(e,t)=>{const n=new FormData;return n.append("type",t.type),n.append("members",JSON.stringify(t.members)),t.name?n.append("name",t.name):n.append("name","null"),t.photo&&n.append("photo",t.photo),await re.post(`${X}/chats`,n,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(i){return i<500}})},$6=async(e,t,n)=>{const r=new FormData;return r.append("file",n),await re.post(`${X}/upload_file/${t}`,r,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(s){return s<500}})},I6=async(e,t)=>await re.post(`${X}/chat/${t}/read`,{},{headers:{Authorization:`Bearer ${e}`},validateStatus:function(r){return r<500}}),A6=async(e,t)=>await re.post(`${X}/chat/${t}/leave`,{},{headers:{Authorization:`Bearer ${e}`},validateStatus:function(r){return r<500}}),F6=async(e,t)=>await re.delete(`${X}/chat/${t}/delete`,{headers:{Authorization:`Bearer ${e}`},validateStatus:function(r){return r<500}}),L6=h.div`
      display: inline-block;
      width: 48px;
      height: 24px;
      border-radius: 15px;
      outline: none;
      background: ${e=>e.isActive?"#2A85FF":"#f4f4f4"};
      position: relative;
      transition: all 0.3s ease;
      cursor: pointer;

      &::before {
            content: "";
            position: absolute;
            top: 2px;
            left: ${e=>e.isActive?"26px":"2px"};
            display: block;
            width: 20px;
            height: 20px;
            background: ${e=>e.isActive?"#FCFCFC":"#2A85FF"};
            border-radius: 50%;
            transition: all 0.3s ease;
            box-shadow: 0px 2px 4px 0px #00000033;
            box-shadow: 0px -1px 1px 0px #0000001a inset;
      }
`,z6=({isActive:e,setIsActive:t})=>c.jsx(L6,{onClick:()=>{t(!e)},isActive:e}),W6={chats:[]},mi=Ph({name:"projectSlice",initialState:W6,reducers:{setChats(e,t){e.chats=t.payload},setNewMessage(e,t){const n=t.payload;let r;if(n.type==="file"||n.type==="image"){r={id:n.message_id,sender:{id:n.user.id,photo:n.user.photo,email:n.user.email,first_name:n.user.first_name,second_name:n.user.second_name},content:null,file_path:n.url,file_name:n.filename,file_size:n.file_size,timestamp:n.timestamp,reactions:[],read_id:[],type:n.type};let i=e.chats.find(s=>s.id===n.chat.id);i&&(i.messages.push(r),e.chats=[i,...e.chats.filter(s=>s.id!==i.id)])}if(n.type==="text"){r={id:n.message_id,sender:{id:n.user.id,photo:n.user.photo,email:n.user.email,first_name:n.user.first_name,second_name:n.user.second_name},content:n.message,file_path:null,file_name:null,file_size:null,timestamp:n.timestamp,reactions:[],read_id:[],type:n.type};let i=e.chats.find(s=>s.id===n.chat.id);i&&(i.messages.push(r),e.chats=[i,...e.chats.filter(s=>s.id!==i.id)])}}}}),B6=mi.reducer,U6=h.div`
      width: 380px;
      background: #ffffff;
      box-shadow: 0px 32px 48px -8px #0000001a;
      box-shadow: 0px 0px 14px -4px #0000000d;
      box-shadow: 0px 40px 64px -12px #00000014;
      position: absolute;
      right: 25px;
      top: 25px;
      border-radius: 16px;
      padding: 12px;
      z-index: 100;
`,A0=h.div`
      width: 100%;
      height: 1px;
      background: #efefef;
`,H6=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
`,Y6=h.div``,q6=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
      user-select: none;
`,V6=h.div`
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #9a9fa5;
      user-select: none;
      & span {
            color: #2a85ff;
            user-select: none;
      }
`,G6=h.div`
      padding-left: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
`,F0=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      text-align: left;
      color: #1a1d1f;
      user-select: none;
`,Q6=h.div`
      max-height: 344px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: scroll;
`,K6=h.div`
      width: 100%;
      height: 80px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
`,X6=h.div`
      width: 56px;
      height: 56px;
      position: relative;
`,J6=h.div`
      width: 56px;
      height: 56px;
      border-radius: 56px;
      background: #b1e5fc;
      & > img {
            width: 56px;
            height: 56px;
            border-radius: 56px;
      }
`,Z6=h.div`
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      text-overflow: ellipsis;
      white-space: nowrap;
      user-select: none;
`,e5=h.div`
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      padding-left: 12px;
      padding-right: 12px;
      gap: 8px;
`,t5=({chatPhoto:e,chatName:t,chatId:n,setIsVisible:r,setChat:i})=>{const s=vt(),o=mi.actions.setChats,a=we(S=>S.chatsReducer.chats.find(v=>v.id===n)),l=we(S=>S.projectsReducer.projects),u=we(S=>S.userReducer.user),d=[];l.map(S=>{S.members.map(v=>{!d.find(m=>m.id===v.id)&&v.id!==u.id&&d.push(v)})});const[f,p]=b.useState(!1),g=b.useRef(null);b.useEffect(()=>{const S=({target:v})=>{var m;(m=g.current)!=null&&m.contains(v)||(console.log(v),r(!1))};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[r]);const x=()=>{const S=window.localStorage.getItem("access_token");S&&A6(S,n).then(v=>{v.status===200&&Dr(S).then(m=>{m.status===200&&(i(void 0),s(o(m.data.chats)))}).catch(m=>console.log(m))}).catch(v=>console.log(v))},y=()=>{const S=window.localStorage.getItem("access_token");S&&F6(S,n).then(v=>{v.status===200&&Dr(S).then(m=>{m.status===200&&(i(void 0),s(o(m.data.chats)))}).catch(m=>console.log(m))}).catch(v=>console.log(v))};return c.jsxs(U6,{ref:g,children:[c.jsxs(H6,{children:[e&&c.jsx(Or,{style:{width:"56px",height:"56px"},src:e}),!e&&c.jsx(Or,{style:{width:"56px",height:"56px"}}),c.jsxs(Y6,{children:[c.jsx(q6,{children:t}),a.type==="group"&&c.jsxs(V6,{children:[a.members.length," участников"]})]})]}),c.jsx(A0,{style:{marginTop:"12px"}}),c.jsxs(G6,{style:{marginTop:"12px"},children:[c.jsx(F0,{children:"Уведомления"}),c.jsx(z6,{isActive:f,setIsActive:p})]}),c.jsx(A0,{style:{marginTop:"12px"}}),c.jsx(F0,{style:{paddingLeft:"12px",marginTop:"12px"},children:"Участники"}),c.jsx(Q6,{style:{marginTop:"12px"},children:a.members.map(S=>c.jsxs(K6,{children:[c.jsx(X6,{children:c.jsx(J6,{children:S.photo&&c.jsx("img",{src:`${X}/${S.photo}`})})}),c.jsx(Z6,{children:`${S.first_name} ${S.second_name}`})]}))}),c.jsxs(e5,{style:{marginTop:"24px",marginBottom:"12px"},children:[c.jsx(Je,{style:{flex:1},onClick:()=>{x(),r(!1)},children:"Покинуть чат"}),a.owner.id===u.id&&c.jsx(ps,{style:{color:"#EC545D",flex:1},onClick:()=>{y(),r(!1)},children:"Удалить чат"})]})]})},n5=h.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: visible;
`,r5=h.div`
      width: 100%;
      height: 104px;
      background: #f4f4f4;
      border-radius: 12px 12px 0px 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 24px;
      gap: 24px;
`,i5=h.div``,s5=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      flex: 1;
      justify-content: flex-end;
      position: relative;
`,o5=h.div`
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1a1d1f;
`,a5=h.div`
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #9a9fa5;
      & span {
            color: #2a85ff;
      }
`,l5=h.div`
      flex: 1;
      border: 1px solid #efefef;
      border-width: 0 1px 0 1px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: scroll;
      padding: 24px 24px 12px 24px;
`,c5=h.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      border: 1px solid #efefef;
      border-width: 0 1px 1px 1px;
      border-radius: 0 0 12px 12px;
      padding: 12px 24px 24px 24px;
`,L0=h.button`
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      outline: none;
      padding: 0;
      width: 24px;
      height: 24px;
      &:focus {
            outline: none;
      }
      img {
            width: 24px;
            height: 24px;
      }
`,u5=({chatId:e,setChat:t})=>{const n=vt(),r=mi.actions.setChats,i=we(y=>y.chatsReducer.chats.find(S=>S.id===e)),s=we(y=>y.userReducer.user),o=b.useRef(null),[a,l]=b.useState(""),[u,d]=b.useState(void 0),[f,p]=b.useState(!1),g=b.useRef(null);b.useEffect(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},[i]),b.useEffect(()=>{const y=window.localStorage.getItem("access_token");y&&I6(y,i.id).then(S=>{S.status===200&&Dr(y).then(v=>{n(r(v.data.chats))}).catch(v=>console.log(v))}).catch(S=>console.log(S))},[i.messages.length]),b.useEffect(()=>{var y;if(i.type==="direct"){const S=i.members.find(v=>v.id!==s.id);S!=null&&S.photo?d(`${X}/${(y=i.members.find(v=>v.id!==s.id))==null?void 0:y.photo}`):d(void 0),l(`${S==null?void 0:S.first_name} ${S==null?void 0:S.second_name}`)}i.type==="group"&&(l(i.name),i.photo&&d(`${X}/${i.photo}`))},[i]);const x=y=>{if(y.target.files){const S=y.target.files[0],v=window.localStorage.getItem("access_token");v&&$6(v,i.id,S).then(m=>{m.status===201&&console.log("Message sent!")}).catch()}};return c.jsxs(n5,{children:[c.jsxs(r5,{children:[u&&c.jsx(Or,{style:{width:"56px",height:"56px"},src:u}),!u&&c.jsx(Or,{style:{width:"56px",height:"56px"}}),c.jsxs(i5,{children:[c.jsx(o5,{children:a}),i.type==="group"&&c.jsxs(a5,{children:[i.members.length," участников"]})]}),c.jsxs(s5,{children:[c.jsx(I0,{iconPath:"/public/icons/search_black.svg",iconPathActive:"/public/icons/search_blue.svg",isActive:!1}),c.jsx(I0,{iconPath:"/public/icons/layout_black.svg",iconPathActive:"/public/icons/layout_blue.svg",isActive:f,onClick:()=>{p(!0)}}),f&&c.jsx(t5,{setChat:t,chatName:a,chatId:i.id,setIsVisible:p})]})]}),c.jsx(l5,{ref:g,children:i.messages.map(y=>{if(y.type==="text")return c.jsx(p6,{chatType:i.type,isIncomingMessage:y.sender.id!==s.id,senderName:`${y.sender.first_name} ${y.sender.second_name}`,textContent:y.content,messageTime:`${new Date(y.timestamp).getHours()}:${ac(new Date(y.timestamp))}`,senderAvatarURL:`${X}/${y.sender.photo}`,messageId:y.id,reactions:y.reactions,chatId:i.id,myUserId:s.id});if(y.type==="file")return c.jsx(E6,{chatType:i.type,isIncomingMessage:y.sender.id!==s.id,senderName:`${y.sender.first_name} ${y.sender.second_name}`,messageTime:`${new Date(y.timestamp).getHours()}:${ac(new Date(y.timestamp))}`,senderAvatarURL:`${X}/${y.sender.photo}`,message:y});if(y.type==="image")return c.jsx(N6,{chatType:i.type,isIncomingMessage:y.sender.id!==s.id,senderAvatarURL:`${X}/${y.sender.photo}`,message:y})})}),c.jsxs(c5,{children:[c.jsxs(L0,{onClick:()=>{o.current&&o.current.click()},style:{cursor:"pointer"},children:[c.jsx("img",{src:"/public/icons/fileadd_light.svg"}),c.jsx("input",{name:"photo",onChange:x,multiple:!1,ref:o,type:"file",hidden:!0})]}),c.jsx(L0,{children:c.jsx("img",{src:"/public/icons/smile_light.svg"})}),c.jsx(y6,{chatId:i.id})]})]})},d5=h.div`
      padding: 40px;
      background: #f4f4f4;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
`,f5=h.div`
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,p5=h.div`
      margin-top: 24px;
      width: 100%;
      flex: 1;
      background: #fcfcfc;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      gap: 12px;
`,h5=h.div`
      position: relative;
      width: 340px;
      height: 100%;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none;
      padding-bottom: 80px;
`,g5=h.div`
      width: 280px;
      padding: 16px;
      position: absolute;
      bottom: 152px;
      left: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0px 32px 48px -8px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05);
      box-shadow: 0px 40px 64px -12px rgba(0, 0, 0, 0.08);
`,m5=h.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #2a85ff;
      outline: none;
      border: none;
      border-radius: 12px;
      color: #fcfcfc;
      padding: 12px;
      height: 48px;
      font-size: 15px;
      line-height: 24px;
      gap: 8px;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: center;
      cursor: pointer;
      &:focus {
            outline: none;
      }
`,FS=h.div`
      width: 100%;
      height: 48px;
      padding: 12px;
      display: flex;
      border-radius: 12px;
      gap: 12px;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      &:hover {
            background: #efefef;
            box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 1) inset;
            box-shadow: 0px -2px 1px 0px rgba(0, 0, 0, 0.05) inset;

            & > div {
                  color: #1a1d1f;
            }
      }
      & > div {
            font-size: 15px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: -0.01em;
            color: #6f767e;
      }
      & > img {
            width: 24px;
            height: 24px;
            max-width: 24px;
            max-height: 24px;
      }
`,y5=h(FS)`
      & > img {
            content: url("/public/icons/group_gray.svg");
      }
      &:hover {
            & > img {
                  content: url("/public/icons/group_dark.svg");
            }
      }
`,x5=h(FS)`
      & > img {
            content: url("/public/icons/person_gray.svg");
      }
      &:hover {
            & > img {
                  content: url("/public/icons/person_dark.svg");
            }
      }
`,v5=()=>{const e=vt(),t=mi.actions.setChats,n=Ze(),r=we(u=>u.chatsReducer.chats),[i,s]=b.useState(),[o,a]=b.useState(!1),l=b.useRef(null);return b.useEffect(()=>{const u=({target:d})=>{var f;(f=l.current)!=null&&f.contains(d)||a(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),b.useLayoutEffect(()=>{const u=window.localStorage.getItem("access_token");u&&Dr(u).then(d=>{d.status===200&&e(t(d.data.chats))}).catch(d=>console.log(d))},[]),c.jsxs(d5,{children:[c.jsx(f5,{children:"Сообщения"}),c.jsxs(p5,{children:[c.jsxs(h5,{children:[c.jsx(m5,{onClick:()=>{a(!o)},style:{padding:"16px",width:"fit-content",height:"fit-content",borderRadius:"50%",position:"absolute",bottom:"84px",right:"12px",zIndex:"2"},children:o?c.jsx("img",{src:"/public/icons/close_light.svg"}):c.jsx("img",{src:"/public/icons/group_light.svg"})}),o&&c.jsxs(g5,{ref:l,style:{zIndex:"2"},children:[c.jsxs(y5,{onClick:()=>{n("/messages/newgroup")},children:[c.jsx("img",{}),c.jsx("div",{children:"Новая группа"})]}),c.jsxs(x5,{onClick:()=>{n("/messages/newdirect")},children:[c.jsx("img",{}),c.jsx("div",{children:"Новое сообщение"})]})]}),c.jsx(Jo,{style:{position:"absolute",bottom:"12px",zIndex:"1"}}),c.jsx("div",{style:{overflow:"auto"},children:r&&r.map(u=>c.jsx(cF,{chat:u,isActive:i?u.id===i.id:!1,onClick:()=>s(u)}))})]}),i&&c.jsx(u5,{chatId:i.id,setChat:s})]})]})},w5=h.div`
      padding: 40px;
      background: #f4f4f4;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
`,S5=h.div`
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,b5=h.div`
      margin-top: 24px;
      width: 100%;
      flex: 1;
      background: #fcfcfc;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      gap: 12px;
`,k5=h.div`
      width: 1px;
      height: 100%;
      gap: 0px;
      border-radius: 1px;
      background: #efefef;
`,_5=h.div`
      width: 340px;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
`,D5=h.div`
      padding: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
`,C5=h.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: auto;
`,E5=h.div`
      width: 100%;
      height: 80px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      cursor: pointer;
`,j5=h.div`
      width: 56px;
      height: 56px;
      position: relative;
`,O5=h.div`
      width: 56px;
      height: 56px;
      border-radius: 56px;
      background: #b1e5fc;
      & > img {
            width: 56px;
            height: 56px;
            border-radius: 56px;
            object-fit: cover;
      }
`,P5=h.div`
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      text-overflow: ellipsis;
      white-space: nowrap;
      user-select: none;
`,T5=h.div`
      width: 20px;
      height: 20px;
      background: #83bf6e;
      border: 4px solid #efefef;
      position: absolute;
      border-radius: 100%;
      top: -2px;
      left: -2px;
`,R5=()=>{const e=Ze(),t=we(s=>s.projectsReducer.projects),n=we(s=>s.userReducer.user),r=[];t.map(s=>{s.members.map(o=>{!r.find(a=>a.id===o.id)&&o.id!==n.id&&r.push(o)})});const i=s=>{const o=window.localStorage.getItem("access_token"),a={type:"direct",members:[n.id,s.id]};o&&AS(o,a).then(l=>{l.status===200&&setTimeout(()=>e("/messages"),300)})};return c.jsxs(w5,{children:[c.jsx(S5,{children:"Сообщения"}),c.jsxs(b5,{children:[c.jsxs(_5,{children:[c.jsxs(D5,{children:[c.jsx("img",{src:"/public/icons/arrow_backward_light_24.svg",style:{cursor:"pointer"},onClick:()=>{e("/messages")}}),c.jsx(Jo,{})]}),c.jsx(C5,{style:{marginTop:"12px"},children:r.map(s=>c.jsxs(E5,{onClick:()=>{i(s)},children:[c.jsxs(j5,{children:[c.jsx(O5,{children:s.photo&&c.jsx("img",{src:`${X}/${s.photo}`})}),s.is_online&&c.jsx(T5,{})]}),c.jsx(P5,{children:`${s.first_name} ${s.second_name}`})]}))})]}),c.jsx(k5,{})]})]})},LS=h.div`
      width: 96px;
      height: 96px;
      background: rgba(111, 118, 126, 0.65);
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 48px;
      justify-content: center;
      align-items: center;
`,zS=h.button`
      width: 96px;
      height: 96px;
      border-radius: 48px;
      position: relative;
      padding: 0;
      outline: none;
      border: none;
      &:focus {
            outline: none;
            border: none;
      }

      & > img {
            width: 96px;
            height: 96px;
            border-radius: 48px;
      }
`,M5=h(zS)`
      background: #2a85ff;
`,N5=h(zS)`
      &:hover > ${LS} {
            display: flex;
      }
`,z0=({avatarPath:e,...t})=>e?c.jsxs(N5,{...t,children:[c.jsx("img",{src:e,style:{objectFit:"cover"}}),c.jsx(LS,{children:c.jsx("img",{src:"/public/icons/trash_white_48.svg",style:{width:"48px"}})})]}):c.jsx(M5,{...t,children:c.jsx("img",{src:"/public/icons/camera_white_48.svg",style:{width:"48px"}})}),$5=h.div`
      padding: 40px;
      background: #f4f4f4;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
`,I5=h.div`
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,A5=h.div`
      margin-top: 24px;
      width: 100%;
      flex: 1;
      background: #fcfcfc;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      gap: 12px;
`,F5=h.div`
      width: 1px;
      height: 100%;
      border-radius: 1px;
      background: #efefef;
`,L5=h.div`
      height: 1px;
      width: 100%;
      border-radius: 1px;
      background: #efefef;
`,W0=h.div`
      width: 340px;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
`,B0=h.div`
      padding: 12px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      & > img {
            width: 24px;
            height: 24px;
            cursor: pointer;
      }
      & > div {
            font-size: 15px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: -0.01em;
            color: #1a1d1f;
      }
`,z5=h.div`
      padding: 12px;
`,W5=h.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: auto;
      padding-bottom: 80px;
      margin-top: 12px;
`,U0=h.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      padding: 12px;
`,H0=h.div`
      width: 56px;
      height: 56px;
      position: relative;
`,Y0=h.div`
      width: 56px;
      height: 56px;
      border-radius: 56px;
      background: #b1e5fc;
      & > img {
            width: 56px;
            height: 56px;
            border-radius: 56px;
            object-fit: cover;
      }
`,q0=h.div`
      width: 20px;
      height: 20px;
      background: #83bf6e;
      border: 4px solid #efefef;
      position: absolute;
      border-radius: 100%;
      top: -2px;
      left: -2px;
`,V0=h.div`
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #1a1d1f;
      text-overflow: ellipsis;
      white-space: nowrap;
      user-select: none;
`,B5=h.input`
      width: 24px;
      height: 24px;
      -webkit-appearance: none;
      appearance: none;
      border: 2px solid rgba(111, 118, 126, 0.4);
      border-radius: 6px;
      outline: none;
      background: #fcfcfc;

      &:checked {
            border: none;
            background: #2a85ff;
            content: url("/public/icons/check_white_24.svg");
      }
`,G0=h.button`
      position: absolute;
      width: 56px;
      height: 56px;
      outline: none;
      padding: 16px;
      border-radius: 48px;
      bottom: 12px;
      right: 12px;
      background: #2a85ff;
      border: none;
      cursor: pointer;
      &:focus {
            outline: none;
      }
      &:disabled {
            opacity: 0.5;
            cursor: auto;
      }
`,U5=h.div`
      display: flex;
      justify-content: center;
      margin-top: 12px;
`,H5=h.div`
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;
`,Y5=h.div`
      flex: 1;
      overflow: hidden;
      padding-bottom: 80px;
      margin-top: 12px;
`,q5=h.div`
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #33383f;
      padding-left: 12px;
`,V5=h.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: auto;
`,G5=()=>{const e=Ze(),t=vt(),n=mi.actions.setChats,r=we(_=>_.projectsReducer.projects),i=we(_=>_.userReducer.user),s=[];r.map(_=>{_.members.map(E=>{!s.find(D=>D.id===E.id)&&E.id!==i.id&&s.push(E)})});const o=b.useRef(null),[a,l]=b.useState(void 0),[u,d]=b.useState(void 0),[f,p]=b.useState(""),[g,x]=b.useState([]),[y,S]=b.useState(1),[v,m]=b.useState(!0),w=_=>{x(E=>E.some(D=>D.id===_.id)?E.filter(D=>D.id!==_.id):[...E,_])};b.useEffect(()=>{f.length>0&&g.length>0?m(!1):m(!0)},[g,f]),b.useEffect(()=>{a&&d(URL.createObjectURL(a))},[a]);const k=()=>{const _=window.localStorage.getItem("access_token"),E={type:"group",name:f,members:g.map(D=>D.id),photo:a};_&&AS(_,E).then(D=>{console.log(D),D.status===200&&(Dr(_).then(O=>{t(n(O.data.chats))}).catch(),setTimeout(()=>e("/messages"),300))}).catch(D=>console.log(D))};return c.jsxs($5,{children:[c.jsx(I5,{children:"Сообщения"}),c.jsxs(A5,{children:[y===1&&c.jsxs(W0,{children:[c.jsxs(B0,{children:[c.jsx("img",{src:"/public/icons/arrow_backward_light_24.svg",style:{cursor:"pointer"},onClick:()=>{e("/messages")}}),c.jsx("div",{children:"Добавление участников"})]}),c.jsx(z5,{children:c.jsx(Jo,{})}),c.jsx(L5,{style:{marginTop:"12px"}}),c.jsx(W5,{children:s.map(_=>c.jsxs(U0,{children:[c.jsx(B5,{type:"checkbox",checked:g.some(E=>E.id===_.id),onChange:()=>w(_)}),c.jsxs(H0,{style:{marginLeft:"24px"},children:[c.jsx(Y0,{children:_.photo&&c.jsx("img",{src:`${X}/${_.photo}`})}),_.is_online&&c.jsx(q0,{})]}),c.jsx(V0,{style:{marginLeft:"12px"},children:`${_.first_name} ${_.second_name}`})]}))}),c.jsx(G0,{onClick:()=>{S(2),x([i,...g])},children:c.jsx("img",{src:"/public/icons/arrow_forward_white_24.svg"})})]}),y===2&&c.jsxs(W0,{children:[c.jsxs(B0,{children:[c.jsx("img",{src:"/public/icons/arrow_backward_light_24.svg",style:{cursor:"pointer"},onClick:()=>{S(1),x([])}}),c.jsx("div",{children:"Новая группа"})]}),c.jsxs(U5,{children:[a&&c.jsx(z0,{style:{cursor:"pointer"},onClick:()=>{o.current&&o.current.click()},avatarPath:u}),!a&&c.jsx(z0,{style:{cursor:"pointer"},onClick:()=>{o.current&&o.current.click()}}),c.jsx("input",{name:"photo",onChange:_=>{const E=_.target.files;E&&l(E[0])},multiple:!1,ref:o,type:"file",hidden:!0})]}),c.jsxs("div",{style:{marginTop:"12px"},children:[c.jsx(H5,{children:"Название группы"}),c.jsx(Qr,{value:f,onChange:_=>{p(_.target.value)},style:{marginTop:"12px"}})]}),c.jsxs(Y5,{children:[c.jsx(q5,{children:g.length+" участника"}),c.jsx(V5,{children:g.map(_=>c.jsxs(U0,{children:[c.jsxs(H0,{children:[c.jsx(Y0,{children:_.photo&&c.jsx("img",{src:`${X}/${_.photo}`})}),_.is_online&&c.jsx(q0,{})]}),c.jsx(V0,{style:{marginLeft:"12px"},children:`${_.first_name} ${_.second_name}`})]}))})]}),c.jsx(G0,{disabled:v,onClick:k,children:c.jsx("img",{src:"/public/icons/arrow_forward_white_24.svg"})})]}),c.jsx(F5,{})]})]})},Q5=h.div`
      background: #f4f4f4;
      padding: 40px 40px 6px 40px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
`,K5=h.div`
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #272b30;
`,X5=h.div`
      background: #fcfcfc;
      border-radius: 8px;
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 24px;
`,J5=h.div`
      width: 600px;
`,Z5=()=>{const e=vt(),t=xn.actions.setProjects,[n,r]=b.useState(),[i,s]=b.useState(""),[o,a]=b.useState(!0),l=d=>{d.target.validity.valid&&n?a(!1):a(!0),s(d.target.value)},u=d=>{d.preventDefault();const f=window.localStorage.getItem("access_token");f&&n&&HN(f,n==null?void 0:n.id,i).then(p=>{console.log(p),p.status===200&&mn(f).then(g=>{e(t(g.data.projects))}).catch()})};return c.jsxs(Q5,{children:[c.jsx(K5,{children:"Менеджер проектов"}),c.jsx(X5,{children:c.jsx("form",{onSubmit:u,children:c.jsxs(J5,{children:[c.jsx(an,{children:"Email"}),c.jsx(Ac,{style:{marginTop:"12px"},type:"email",value:i,onChange:l}),c.jsx(an,{style:{marginBottom:"12px",marginTop:"12px"},children:"Проект"}),c.jsx(yS,{setValue:r,value:n}),c.jsx(Je,{style:{width:"fit-content",marginTop:"24px"},disabled:o,type:"submit",children:"Добавить пользователя"})]})})})]})},eL=()=>{const e=vt(),t=mi.actions.setChats,n=mi.actions.setNewMessage,r=xn.actions.setProjects,{isAuth:i,setIsAuth:s}=b.useContext(Ko),[o,a]=b.useState(me.connected),l=window.localStorage.getItem("access_token"),u=we(d=>d.chatsReducer.chats);return b.useLayoutEffect(()=>{const d=window.localStorage.getItem("access_token");ll(d).then(f=>{if(f.status===200){const p=Rh.actions.setUser;e(p(f.data)),s(!0)}else s(!1)}).catch(f=>{s(!1),console.log(f)}),i&&(Dr(d).then(f=>{f.status===200&&e(t(f.data.chats))}).catch(f=>console.log(f)),mn(d).then(f=>{f.status===200&&e(r(f.data.projects))}).catch(f=>console.log(f)))},[i]),b.useEffect(()=>(i&&l&&l.length>0&&(me.on("connect",()=>{console.log("Connected "+me.id),a(!0)}),me.on("disconnect",(d,f)=>{console.log(d),console.log(f),a(!1),me.connect()}),me.on("new_message",d=>{var f;(f=u.find(p=>p.id===d.chat.id))!=null&&f.messages.find(p=>p.id===d.message_id)||e(n(d))}),me.on("set_reaction",()=>{const d=window.localStorage.getItem("access_token");d&&Dr(d).then(f=>{e(t(f.data.chats))}).catch()}),me.on("remove_reaction",()=>{const d=window.localStorage.getItem("access_token");d&&Dr(d).then(f=>{e(t(f.data.chats))}).catch()}),me.auth={token:l},me.connect()),i===!1&&(me.disconnect(),me.off("connect"),me.off("disconnect"),me.off("new_message"),me.off("set_reaction"),me.off("remove_reaction"),me.auth={}),()=>{me.disconnect(),me.off("connect"),me.off("disconnect"),me.off("new_message"),me.off("set_reaction"),me.off("remove_reaction"),me.auth={}}),[i]),b.useEffect(()=>{o&&u.map(d=>{me.emit("begin_chat",{chat_id:d.id})})},[o,u.length]),i?c.jsx(nm,{children:c.jsxs(lt,{element:c.jsx(S3,{}),path:"/",children:[c.jsx(lt,{path:"/home",element:c.jsx(C3,{})}),c.jsx(lt,{path:"/messages",element:c.jsx(v5,{})}),c.jsx(lt,{path:"/messages/newdirect",element:c.jsx(R5,{})}),c.jsx(lt,{path:"/messages/newgroup",element:c.jsx(G5,{})}),c.jsx(lt,{path:"/tasks",element:c.jsx(mI,{})}),c.jsx(lt,{path:"/tasks/:id",element:c.jsx(OA,{})}),c.jsx(lt,{path:"/tasks/:id/settings",element:c.jsx(BA,{})}),c.jsx(lt,{path:"/projects",element:c.jsx(WI,{})}),c.jsx(lt,{path:"/projects/adduser",element:c.jsx(Z5,{})}),c.jsx(lt,{path:"/account",element:c.jsx(ZA,{})}),c.jsx(lt,{path:"*",element:c.jsx(tm,{to:"/home"})})]})}):c.jsxs(nm,{children:[c.jsx(lt,{path:"/register",element:c.jsx(dE,{})}),c.jsx(lt,{path:"/login",element:c.jsx(EE,{})}),c.jsx(lt,{path:"*",element:c.jsx(tm,{to:"/login"})})]})},tL=fD`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
`;function nL(){return c.jsx(c.Fragment,{children:c.jsxs(fE,{children:[c.jsx(tL,{}),c.jsx(d2,{children:c.jsx(eL,{})})]})})}const rL=rS({chatsReducer:B6,userReducer:YA,projectsReducer:G$}),iL=()=>j$({reducer:rL}),sL=iL();ld.createRoot(document.getElementById("root")).render(c.jsx($t.StrictMode,{children:c.jsx(QE,{store:sL,children:c.jsx(nL,{})})}));
