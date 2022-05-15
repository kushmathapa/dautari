(self["webpackChunkdautari"]=self["webpackChunkdautari"]||[]).push([[998],{9662:function(e,t,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},6077:function(e,t,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},1223:function(e,t,n){var r=n(5112),i=n(30),s=n(3070),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},5787:function(e,t,n){var r=n(7854),i=n(7976),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},9670:function(e,t,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,y=n(7976),v=n(9518),w=n(7674),_=n(5112),b=n(9711),I=c.Int8Array,T=I&&I.prototype,E=c.Uint8ClampedArray,S=E&&E.prototype,k=I&&v(I),A=T&&v(T),C=Object.prototype,N=c.TypeError,R=_("toStringTag"),D=b("TYPED_ARRAY_TAG"),x=b("TYPED_ARRAY_CONSTRUCTOR"),O=o&&!!w&&"Opera"!==d(c.opera),P=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},F=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(L,t)||h(M,t)},U=function(e){if(!l(e))return!1;var t=d(e);return h(L,t)||h(M,t)},V=function(e){if(U(e))return e;throw N("Target is not a typed array")},B=function(e){if(u(e)&&(!w||y(k,e)))return e;throw N(f(e)+" is not a typed array constructor")},j=function(e,t,n,r){if(a){if(n)for(var i in L){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}A[e]&&!n||m(A,e,n?t:O&&T[e]||t,r)}},q=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in L)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(k[e]&&!n)return;try{return m(k,e,n?t:O&&k[e]||t)}catch(s){}}for(r in L)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in L)i=c[r],s=i&&i.prototype,s?p(s,x,i):O=!1;for(r in M)i=c[r],s=i&&i.prototype,s&&p(s,x,i);if((!O||!u(k)||k===Function.prototype)&&(k=function(){throw N("Incorrect invocation")},O))for(r in L)c[r]&&w(c[r],k);if((!O||!A||A===C)&&(A=k.prototype,O))for(r in L)c[r]&&w(c[r].prototype,A);if(O&&v(S)!==A&&w(S,A),a&&!h(A,R))for(r in P=!0,g(A,R,{get:function(){return l(this)?this[D]:void 0}}),L)c[r]&&p(c[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_CONSTRUCTOR:x,TYPED_ARRAY_TAG:P&&D,aTypedArray:V,aTypedArrayConstructor:B,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:q,isView:F,isTypedArray:U,TypedArray:k,TypedArrayPrototype:A}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(7854),i=n(614),s=n(8880),o=n(6339),a=n(3505);e.exports=function(e,t,n,c){var u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:t;return i(n)&&o(n,d,c),e===r?(l?e[t]=n:a(t,n),e):(u?!h&&e[t]&&(l=!0):delete e[t],l?e[t]=n:s(e,t,n),e)}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3505),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),i=n(1702),s=n(7293),o=n(4326),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},w=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var _=d.state||(d.state=new y),b=c(_.get),I=c(_.has),T=c(_.set);r=function(e,t){if(I(_,e))throw new g(m);return t.facade=e,T(_,e,t),t},i=function(e){return b(_,e)||{}},s=function(e){return I(_,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new g(m);return t.facade=e,l(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:w}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){if("Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&d(e,"name",{value:t,configurable:!0}),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity}),n&&s(n,"constructor")&&n.constructor){if(o)try{d(e,"prototype",{writable:!1})}catch(i){}}else e.prototype=void 0;var r=l(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},30:function(e,t,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},y=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(y("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(y("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var e=o.length;while(e--)delete _[f][o[e]];return _()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=_(),void 0===t?n:s.f(n,t)}},6048:function(e,t,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)s.f(e,n=i[l++],r[n]);return e}},3070:function(e,t,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(7854),i=n(2597),s=n(614),o=n(7908),a=n(6200),c=n(8544),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=o(e);if(i(t,u))return t[u];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},1956:function(e,t,n){var r=n(6324),i=n(748);e.exports=Object.keys||function(e){return r(e,i)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e,t,n){var r=n(7854),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),i=n(4488),s=r.Object;e.exports=function(e){return s(i(e))}},4590:function(e,t,n){var r=n(7854),i=n(3002),s=r.RangeError;e.exports=function(e,t){var n=i(e);if(n%t)throw s("Wrong offset");return n}},3002:function(e,t,n){var r=n(7854),i=n(9303),s=r.RangeError;e.exports=function(e){var t=i(e);if(t<0)throw s("The argument can't be less than 0");return t}},7593:function(e,t,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(7854),i=n(648),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e,t,n){var r=n(7854),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),m=n(9781),g=n(1913);e.exports=function(e,t,n,y){var v="stackTraceLimit",w=y?2:1,_=e.split("."),b=_[_.length-1],I=r.apply(null,_);if(I){var T=I.prototype;if(!g&&i(T,"cause")&&delete T.cause,!n)return I;var E=r("Error"),S=t((function(e,t){var n=h(y?t:e,void 0),r=y?new I(e):new I;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(T,this)&&l(r,this,S),arguments.length>w&&d(r,arguments[w]),r}));if(S.prototype=T,"Error"!==b?a?a(S,E):c(S,E,{name:!0}):m&&v in I&&(u(S,I,v),u(S,I,"prepareStackTrace")),c(S,I),!g)try{T.name!==b&&s(T,"name",b),T.constructor=S}catch(k){}return S}}},2262:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(e){var t=i(this),n=s(t),r=o(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}}),a("at")},6699:function(e,t,n){"use strict";var r=n(2109),i=n(1318).includes,s=n(7293),o=n(1223),a=s((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(e,t,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=o(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(e){return function(t){return s(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),l("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},4506:function(e,t,n){"use strict";var r=n(2109),i=n(1702),s=n(4488),o=n(9303),a=n(1340),c=n(7293),u=i("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(e){var t=a(s(this)),n=t.length,r=o(e),i=r>=0?r:n+r;return i<0||i>=n?void 0:u(t,i)}})},8675:function(e,t,n){"use strict";var r=n(260),i=n(6244),s=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},3462:function(e,t,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!u((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),y=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=c(e);if(g)return i(f,this,n,t);var r=this.length,s=o(n),u=0;if(s+t>r)throw l("Wrong length");while(u<s)this[t+u]=n[u++]}),!g||y)},2801:function(e,t,n){"use strict";var r=n(2109),i=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),u=n(9587),l=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",m=i("Error"),g=i(p),y=function(){c(this,v);var e=arguments.length,t=l(e<1?void 0:arguments[0]),n=l(e<2?void 0:arguments[1],"Error"),r=new g(t,n),i=m(t);return i.name=p,o(r,"stack",s(1,d(i.stack,1))),u(r,this,y),r},v=y.prototype=g.prototype,w="stack"in m(p),_="stack"in new g(1,2),b=w&&!_;r({global:!0,constructor:!0,forced:f||b},{DOMException:b?y:g});var I=i(p),T=I.prototype;if(T.constructor!==I)for(var E in f||o(T,"constructor",s(1,I)),h)if(a(h,E)){var S=h[E],k=S.s;a(I,k)||o(I,k,s(6,S.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return h},G6:function(){return I},L:function(){return a},LL:function(){return A},Mn:function(){return b},Sg:function(){return d},UG:function(){return m},ZB:function(){return u},ZR:function(){return k},b$:function(){return v},d:function(){return w},eu:function(){return E},hl:function(){return T},jU:function(){return g},m9:function(){return j},ne:function(){return F},pd:function(){return M},r3:function(){return R},ru:function(){return y},tV:function(){return c},uI:function(){return p},vZ:function(){return x},w1:function(){return _},xO:function(){return P},xb:function(){return D},z$:function(){return f},zd:function(){return L}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return f().indexOf("Electron/")>=0}function _(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}function E(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?C(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new k(r,o,n);return a}}function C(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(O(n)&&O(s)){if(!x(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=V(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function V(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return je},IU:function(){return Ae},Jd:function(){return T},PG:function(){return Te},Um:function(){return _e},WL:function(){return Ve},X$:function(){return A},X3:function(){return ke},Xl:function(){return Ce},dq:function(){return Oe},iH:function(){return Pe},j:function(){return S},lk:function(){return E},qj:function(){return we},qq:function(){return w},yT:function(){return Se}});var r=n(7139);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=b;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,b=!0,p=1<<++f,f<=m?l(this):_(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,b=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let b=!0;const I=[];function T(){I.push(b),b=!1}function E(){const e=I.pop();b=void 0===e||e}function S(e,t,n){if(b&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;k(r,i)}}function k(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function A(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&u.push(e)}));else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"set":(0,r._N)(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&C(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);C(a(e))}}function C(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),D=M(),x=M(!1,!0),O=M(!0),P=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ae(this)[t].apply(this,e);return E(),n}})),e}function M(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ge:me:t?pe:fe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(P,i))return Reflect.get(P,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?R.has(i):N(i))return a;if(e||S(n,"get",i),t)return a;if(Oe(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?be(a):we(a):a}}const F=V(),U=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(Ee(o)&&Oe(o)&&!Oe(i))return!1;if(!e&&!Ee(i)&&(Se(i)||(i=Ae(i),o=Ae(o)),!(0,r.kJ)(t)&&Oe(o)&&!Oe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ae(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),c}}function B(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function j(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&R.has(t)||S(e,"has",t),n}function q(e){return S(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const K={get:D,set:F,deleteProperty:B,has:j,ownKeys:q},$={get:O,set(e,t){return!0},deleteProperty(e,t){return!0}},G=(0,r.l7)({},K,{get:x,set:U}),z=e=>e,W=e=>Reflect.getPrototypeOf(e);function H(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),s=Ae(t);t!==s&&!n&&S(i,"get",t),!n&&S(i,"get",s);const{has:o}=W(i),a=r?z:n?Re:Ne;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function J(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return e!==i&&!t&&S(r,"has",e),!t&&S(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&S(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function Y(e){e=Ae(e);const t=Ae(this),n=W(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function X(e,t){t=Ae(t);const n=Ae(this),{has:i,get:s}=W(n);let o=i.call(n,e);o||(e=Ae(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function Z(e){const t=Ae(this),{has:n,get:r}=W(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function ee(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?z:e?Re:Ne;return!e&&S(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ne(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?z:t?Re:Ne;return!t&&S(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return H(this,e)},get size(){return Q(this)},has:J,add:Y,set:X,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return H(this,e,!1,!0)},get size(){return Q(this)},has:J,add:Y,set:X,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return H(this,e,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return H(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)})),[e,n,t,r]}const[se,oe,ae,ce]=ie();function ue(e,t){const n=t?e?ce:ae:e?oe:se;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function we(e){return Ee(e)?e:Ie(e,!1,K,le,fe)}function _e(e){return Ie(e,!1,G,he,pe)}function be(e){return Ie(e,!0,$,de,me)}function Ie(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ve(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Te(e){return Ee(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ee(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Te(e)||Ee(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Ce(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?we(e):e,Re=e=>(0,r.Kn)(e)?be(e):e;function De(e){b&&g&&(e=Ae(e),k(e.dep||(e.dep=a())))}function xe(e,t){e=Ae(e),e.dep&&C(e.dep)}function Oe(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Le(e,!1)}function Le(e,t){return Oe(e)?e:new Me(e,t)}class Me{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return De(this),this._value}set value(e){e=this.__v_isShallow?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ne(e),xe(this,e))}}function Fe(e){return Oe(e)?e.value:e}const Ue={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ve(e){return Te(e)?e:new Proxy(e,Ue)}class Be{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,xe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function je(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Be(i,s,o||!s,n);return a}},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Ah:function(){return Ne},FN:function(){return gn},Fl:function(){return xn},HY:function(){return Nt},Ko:function(){return on},P$:function(){return oe},Q6:function(){return de},U2:function(){return ce},Uk:function(){return Xt},Us:function(){return vt},WI:function(){return an},Wm:function(){return Ht},Y3:function(){return I},Y8:function(){return re},YP:function(){return X},_:function(){return Wt},h:function(){return On},iD:function(){return Bt},ic:function(){return Ae},j4:function(){return jt},kq:function(){return Zt},nK:function(){return he},up:function(){return St},w5:function(){return B},wg:function(){return Lt},wy:function(){return lt}});n(6699),n(1703);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let y=null,v=0;const w=Promise.resolve();let _=null,b=null;function I(e){const t=_||w;return e?t.then(this?e.bind(this):e):t}function T(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=x(h[r]);i<e?t=r+1:n=r}return t}function E(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||e===b||(null==e.id?h.push(e):h.splice(T(e.id),0,e),S())}function S(){u||l||(l=!0,_=w.then(O))}function k(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function A(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),S()}function C(e){A(e,p,f,m)}function N(e){A(e,y,g,v)}function R(e,t=null){if(f.length){for(b=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,b=null,R(e,t)}}function D(e){if(g.length){const e=[...new Set(g)];if(g.length=0,y)return void y.push(...e);for(y=e,y.sort(((e,t)=>x(e)-x(t))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const x=e=>null==e.id?1/0:e.id;function O(e){l=!1,u=!0,R(e),h.sort(((e,t)=>x(e)-x(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,D(e),u=!1,_=null,(h.length||f.length||g.length)&&O(e)}}new Set;new Map;function P(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function L(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=L(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let F=null,U=null;function V(e){const t=F;return F=e,U=e&&e.type.__scopeId||null,t}function B(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ut(-1);const i=V(t),s=e(...n);return V(i),r._d&&Ut(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function j(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const _=V(e);try{if(4&n.shapeFlag){const e=s||r;v=en(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=en(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:q(l)}}catch(I){Ot.length=0,a(I,e,1),v=Ht(Dt)}let b=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(w=K(w,c)),b=Yt(b,w))}return n.dirs&&(b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,V(_),v}const q=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},K=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||G(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?G(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function G(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!M(n,s))return!0}return!1}function z({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const W=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function J(e,t){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[e]=t}else 0}function Q(e,t,n=!1){const r=mn||F;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Y={};function X(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=mn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>ne(e())}let g=e=>{f=_.onStop=()=>{s(e,h,4)}};if(In)return g=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let y=m?[]:Y;const v=()=>{if(_.active)if(t){const e=_.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===Y?void 0:y,g]),y=e)}else _.run()};let w;v.allowRecurse=!!t,w="sync"===c?v:"post"===c?()=>yt(v,h&&h.suspense):()=>{!h||h.isMounted?C(v):v()};const _=new r.qq(d,w);return t?n?v():y=_.run():"post"===c?yt(_.run.bind(_),h&&h.suspense):_.run(),()=>{_.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,_)}}function ee(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=mn;yn(this);const c=Z(s,o.bind(r),n);return a?yn(a):vn(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Se((()=>{e.isMounted=!0})),Ce((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=gn(),i=re();let s;return()=>{const o=t.default&&de(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Dt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ue(a);const l=le(a);if(!l)return ue(a);const h=ce(l,c,i,n);he(l,h);const d=n.subTree,f=d&&le(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Dt&&(!Kt(l,f)||p)){const e=ce(f,c,i,n);if(he(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},ue(a);"in-out"===u&&l.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=ae(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},oe=se;function ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ce(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=t,_=String(e.key),b=ae(n,e),I=(e,t)=>{e&&o(e,r,9,t)},T={mode:s,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const s=b[_];s&&Kt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),I(r,[t])},enter(e){let t=u,r=l,s=h;if(!n.isMounted){if(!i)return;t=y||u,r=v||l,s=w||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?s:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),I(n?m:p,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return ce(e,t,n,r)}};return T}function ue(e){if(pe(e))return e=Yt(e),e.children=null,e}function le(e){return pe(e)?e.children?e.children[0]:void 0:e}function he(e,t){6&e.shapeFlag&&e.component?he(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Nt?(128&o.patchFlag&&i++,r=r.concat(de(o.children,t,a))):(t||o.type!==Dt)&&r.push(null!=a?Yt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}const fe=e=>!!e.type.__asyncLoader;const pe=e=>e.type.__isKeepAlive;RegExp,RegExp;function me(e,t){return(0,i.kJ)(e)?e.some((e=>me(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ge(e,t){ve(e,"a",t)}function ye(e,t){ve(e,"da",t)}function ve(e,t,n=mn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ie(t,r,n),n){let e=n.parent;while(e&&e.parent)pe(e.parent.vnode)&&we(r,t,n,e),e=e.parent}}function we(e,t,n,r){const s=Ie(t,e,r,!0);Ne((()=>{(0,i.Od)(r[t],s)}),n)}function _e(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function be(e){return 128&e.shapeFlag?e.ssContent:e}function Ie(e,t,n=mn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),yn(n);const s=o(t,n,e,i);return vn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Te=e=>(t,n=mn)=>(!In||"sp"===e)&&Ie(e,t,n),Ee=Te("bm"),Se=Te("m"),ke=Te("bu"),Ae=Te("u"),Ce=Te("bum"),Ne=Te("um"),Re=Te("sp"),De=Te("rtg"),xe=Te("rtc");function Oe(e,t=mn){Ie("ec",e,t)}let Pe=!0;function Le(e){const t=Ve(e),n=e.proxy,s=e.ctx;Pe=!1,t.beforeCreate&&Fe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:I,render:T,renderTracked:E,renderTriggered:S,errorCaptured:k,serverPrefetch:A,expose:C,inheritAttrs:N,components:R,directives:D,filters:x}=t,O=null;if(h&&Me(h,s,O,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Pe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=xn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ue(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{J(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Fe(d,e,"c"),P(Ee,f),P(Se,p),P(ke,m),P(Ae,g),P(ge,y),P(ye,v),P(Oe,k),P(xe,E),P(De,S),P(Ce,_),P(Ne,I),P(Re,A),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=N&&(e.inheritAttrs=N),R&&(e.components=R),D&&(e.directives=D)}function Me(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=$e(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?Q(n.from||o,n.default,!0):Q(n.from||o):Q(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Fe(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ue(e,t,n,r){const s=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&X(s,n)}else if((0,i.mf)(e))X(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ue(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&X(s,r,e)}else 0}function Ve(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>Be(c,e,o,!0))),Be(c,t,o)):c=t,s.set(t,c),c}function Be(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Be(e,s,n,!0),i&&i.forEach((t=>Be(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=je[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const je={data:qe,props:ze,emits:ze,methods:ze,computed:ze,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:ze,directives:ze,watch:We,provide:qe,inject:Ke};function qe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ke(e,t){return ze($e(e),$e(t))}function $e(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function ze(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function We(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Ge(e[r],t[r]);return n}function He(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,$t,1),e.propsDefaults=Object.create(null),Qe(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Je(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Qe(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Ye(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=Ye(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Qe(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Ye(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function Ye(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(yn(s),r=i[n]=e.call(null,t),vn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function Xe(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=Xe(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);Ze(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(Ze(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=nt(Boolean,r.type),n=nt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return r.set(e,l),l}function Ze(e){return"$"!==e[0]}function et(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function tt(e,t){return et(e)===et(t)}function nt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>tt(t,e))):(0,i.mf)(t)&&tt(t,e)?0:-1}const rt=e=>"_"===e[0]||"$stable"===e,it=e=>(0,i.kJ)(e)?e.map(en):[en(e)],st=(e,t,n)=>{const r=B(((...e)=>it(t(...e))),n);return r._c=!1,r},ot=(e,t,n)=>{const r=e._ctx;for(const s in e){if(rt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=st(s,n,r);else if(null!=n){0;const e=it(n);t[s]=()=>e}}},at=(e,t)=>{const n=it(t);e.slots.default=()=>n},ct=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):ot(t,e.slots={})}else e.slots={},t&&at(e,t);(0,i.Nj)(e.slots,$t,1)},ut=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,ot(t,s)),a=t}else t&&(at(e,t),a={default:1});if(o)for(const i in s)rt(i)||i in a||delete s[i]};function lt(e,t){const n=F;if(null===n)return e;const r=Nn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function ht(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function dt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ft=0;function pt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=dt(),o=new Set;let a=!1;const c=s.app={_uid:ft++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Pn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){const l=Ht(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Nn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function mt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>mt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(fe(o)&&!a)return;const c=4&o.shapeFlag?Nn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const s=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,e.k&&(f[e.k]=u))};u?(s.id=-1,yt(s,n)):s()}else 0}}function gt(){}const yt=H;function vt(e){return wt(e)}function wt(e,t){gt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:y}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Rt:w(e,t,n,r);break;case Dt:_(e,t,n,r);break;case xt:null==e&&b(t,n,r,o);break;case Nt:L(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&mt(l,e&&e.ref,s,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:_,dirs:b}=e;if(e.el&&void 0!==g&&-1===_)f=e.el=g(e.el);else{if(f=e.el=c(e.type,u,y&&y.is,y),8&v?d(f,e.children):16&v&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),b&&ht(e,null,r,"created"),y){for(const t in y)"value"===t||(0,i.Gg)(t)||a(f,t,null,y[t],u,e.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&sn(p,r,e)}C(f,e,e.scopeId,l,r)}b&&ht(e,null,r,"beforeMount");const I=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;I&&w.beforeEnter(f),s(f,t,n),((p=y&&y.onVnodeMounted)||I||b)&&yt((()=>{p&&sn(p,r,e),I&&w.enter(f),b&&ht(e,null,r,"mounted")}),o)},C=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?tn(e[u]):en(e[u]);v(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&_t(n,!1),(g=m.onVnodeBeforeUpdate)&&sn(g,n,t,e),f&&ht(t,e,n,"beforeUpdate"),n&&_t(n,!0);const y=s&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,u,n,r,y,o):c||q(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)P(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||P(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&yt((()=>{g&&sn(g,n,t,e),f&&ht(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Nt||!Kt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},P=(e,t,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&bt(e,t,!0)):q(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):U(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=pn(e,r,i);if(pe(e)&&(a.ctx.renderer=te),Tn(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=Ht(Dt);_(null,e,t,n)}}else V(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,k(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,_t(e,!1),n?(n.el=l.el,B(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&sn(t,u,n,l),_t(e,!0);const d=j(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&z(e,d.el),s&&yt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&yt((()=>sn(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=fe(t);if(_t(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&sn(r,d,t),_t(e,!0),c&&re){const n=()=>{e.subTree=j(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=j(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&yt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;yt((()=>sn(r,d,e)),o)}256&t.shapeFlag&&e.a&&yt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>E(e.update)),e.scope),h=e.update=l.run.bind(l);h.id=e.uid,_t(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Je(e,t.props,i,n),ut(e,t.children,n),(0,r.Jd)(),R(void 0,e.update),(0,r.lk)()},q=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,i,s,o,a,c);if(256&f)return void K(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},K=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?tn(t[f]):en(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},G=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?tn(t[l]):en(t[l]);if(!Kt(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?tn(t[f]):en(t[f]);if(!Kt(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?tn(t[l]):en(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?tn(t[l]):en(t[l]);null!=e.key&&g.set(e.key,l)}let y,w=0;const _=f-m+1;let b=!1,I=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===T[y-m]&&Kt(r,t[y])){i=y;break}void 0===i?H(r,s,o,!0):(T[i-m]=l+1,i>=I?I=i:b=!0,v(r,t[i],n,null,s,o,a,c,u),w++)}const E=b?It(T):i.Z6;for(y=E.length-1,l=_-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?v(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==E[y]?W(i,n,d,2):y--)}}},W=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void W(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Nt){s(o,t,n);for(let e=0;e<u.length;e++)W(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===xt)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),yt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&mt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!fe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&sn(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&ht(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Nt||h>0&&64&h)?X(u,t,n,!1,!0):(s===Nt&&384&h||!i&&16&l)&&X(c,t,n),r&&J(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&yt((()=>{m&&sn(m,t,e),f&&ht(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Nt)return void Q(n,r);if(t===xt)return void T(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&yt(c,t),yt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),D(),t._vnode=e},te={p:v,um:H,m:W,r:J,mt:F,mc:N,pc:q,pbc:O,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:pt(ee,ne)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=tn(s[i]),t.el=e.el),n||bt(e,t))}}function It(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Tt=e=>e.__isTeleport;const Et="components";function St(e,t){return At(Et,e,!0,t)||e}const kt=Symbol();function At(e,t,n=!0,r=!1){const s=F||mn;if(s){const n=s.type;if(e===Et){const e=Rn(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Ct(s[e]||n[e],t)||Ct(s.appContext[e],t);return!o&&r?n:o}}function Ct(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const Nt=Symbol(void 0),Rt=Symbol(void 0),Dt=Symbol(void 0),xt=Symbol(void 0),Ot=[];let Pt=null;function Lt(e=!1){Ot.push(Pt=e?null:[])}function Mt(){Ot.pop(),Pt=Ot[Ot.length-1]||null}let Ft=1;function Ut(e){Ft+=e}function Vt(e){return e.dynamicChildren=Ft>0?Pt||i.Z6:null,Mt(),Ft>0&&Pt&&Pt.push(e),e}function Bt(e,t,n,r,i,s){return Vt(Wt(e,t,n,r,i,s,!0))}function jt(e,t,n,r,i){return Vt(Ht(e,t,n,r,i,!0))}function qt(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const $t="__vInternal",Gt=({key:e})=>null!=e?e:null,zt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Wt(e,t=null,n=null,r=0,s=null,o=(e===Nt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gt(t),ref:t&&zt(t),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(nn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Ft>0&&!a&&Pt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Pt.push(u),u}const Ht=Jt;function Jt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==kt||(e=Dt),qt(e)){const r=Yt(e,t,!0);return n&&nn(r,n),r}if(Dn(e)&&(e=e.__vccOpts),t){t=Qt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:W(e)?128:Tt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Wt(e,t,n,s,o,c,a,!0)}function Qt(e){return e?(0,r.X3)(e)||$t in e?(0,i.l7)({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?rn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(zt(t)):[s,zt(t)]:zt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Nt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Xt(e=" ",t=0){return Ht(Rt,null,e,t)}function Zt(e="",t=!1){return t?(Lt(),jt(Dt,null,e)):Ht(Dt,null,e)}function en(e){return null==e||"boolean"===typeof e?Ht(Dt):(0,i.kJ)(e)?Ht(Nt,null,e.slice()):"object"===typeof e?tn(e):Ht(Rt,null,String(e))}function tn(e){return null===e.el||e.memo?e:Yt(e)}function nn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),nn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||$t in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,i.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[Xt(t)]):n=8);e.children=t,e.shapeFlag|=n}function rn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function sn(e,t,n,r=null){o(e,t,7,[n,r])}function on(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function an(e,t,n={},r,i){if(F.isCE||F.parent&&fe(F.parent)&&F.parent.isCE)return Ht("slot","default"===t?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),Lt();const o=s&&cn(s(n)),a=jt(Nt,{key:n.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function cn(e){return e.some((e=>!qt(e)||e.type!==Dt&&!(e.type===Nt&&!cn(e.children))))?e:null}const un=e=>e?wn(e)?Nn(e)||e.proxy:un(e.parent):null,ln=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>un(e.parent),$root:e=>un(e.root),$emit:e=>e.emit,$options:e=>Ve(e),$forceUpdate:e=>()=>E(e.update),$nextTick:e=>I.bind(e.proxy),$watch:e=>ee.bind(e)}),hn={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Pe&&(c[t]=0)}}const d=ln[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(ln,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const dn=dt();let fn=0;function pn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||dn,a={uid:fn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xe(s,o),emitsOptions:L(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=P.bind(null,a),e.ce&&e.ce(a),a}let mn=null;const gn=()=>mn||F,yn=e=>{mn=e,e.scope.on()},vn=()=>{mn&&mn.scope.off(),mn=null};function wn(e){return 4&e.vnode.shapeFlag}let _n,bn,In=!1;function Tn(e,t=!1){In=t;const{props:n,children:r}=e.vnode,i=wn(e);He(e,n,i,t),ct(e,r);const s=i?En(e,t):void 0;return In=!1,s}function En(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,hn));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Cn(e):null;yn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),vn(),(0,i.tI)(c)){if(c.then(vn,vn),t)return c.then((n=>{Sn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Sn(e,c,t)}else kn(e,t)}function Sn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),kn(e,n)}function kn(e,t,n){const s=e.type;if(!e.render){if(!t&&_n&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=_n(t,c)}}e.render=s.render||i.dG,bn&&bn(e)}yn(e),(0,r.Jd)(),Le(e),(0,r.lk)(),vn()}function An(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Cn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=An(e))},slots:e.slots,emit:e.emit,expose:t}}function Nn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in ln?ln[n](e):void 0}}))}function Rn(e){return(0,i.mf)(e)&&e.displayName||e.name}function Dn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const xn=(e,t)=>(0,r.Fl)(e,t,In);function On(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?qt(t)?Ht(e,null,[t]):Ht(e,t):Ht(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qt(n)&&(n=[n]),Ht(e,t,n))}Symbol("");const Pn="3.2.33"},9242:function(e,t,n){"use strict";n.d(t,{iM:function(){return oe},nr:function(){return re},ri:function(){return le}});n(6699);var r=n(7139),i=n(3396);n(4870);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function v(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[w,_]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let b=0;const I=Promise.resolve(),T=()=>{b=0},E=()=>b||(I.then(T),b=w());function S(e,t,n,r){e.addEventListener(t,n,r)}function k(e,t,n,r){e.removeEventListener(t,n,r)}function A(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=N(t);if(r){const o=s[t]=R(r,i);S(e,n,o,a)}else o&&(k(e,n,o,a),s[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function N(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function R(e,t){const n=e=>{const r=e.timeStamp||w();(_||r>=n.attached-1)&&(0,i.$d)(D(e,n.value),t,5,[e])};return n.value=e,n.attached=E(),n}function D(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const x=/^on[a-z]/,O=(e,t,n,i,s=!1,o,a,c,h)=>{"class"===t?u(e,i,s):"style"===t?l(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||A(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,i,s))?v(e,t,i,o,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function P(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&x.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!x.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",F=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);F.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=(F.props=(0,r.l7)({},i.P$.props,U),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),B=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in U||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=q(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:I,onBeforeAppear:T=v,onAppear:E=w,onAppearCancelled:S=_}=t,k=(e,t,n)=>{G(e,t?h:c),G(e,t?l:a),n&&n()},A=(e,t)=>{G(e,p),G(e,f),t&&t()},C=e=>(t,n)=>{const r=e?E:w,s=()=>k(t,e,n);V(r,[t,s]),z((()=>{G(t,e?u:o),$(t,e?h:c),B(r)||H(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){V(v,[e]),$(e,o),$(e,a)},onBeforeAppear(e){V(T,[e]),$(e,u),$(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){const n=()=>A(e,t);$(e,d),X(),$(e,f),z((()=>{G(e,d),$(e,p),B(b)||H(e,i,y,n)})),V(b,[e,n])},onEnterCancelled(e){k(e,!1),V(_,[e])},onAppearCancelled(e){k(e,!0),V(S,[e])},onLeaveCancelled(e){A(e),V(I,[e])}})}function q(e){if(null==e)return null;if((0,r.Kn)(e))return[K(e.enter),K(e.leave)];{const t=K(e);return[t,t]}}function K(e){const t=(0,r.He)(e);return t}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function H(e,t,n,r){const i=e._endId=++W,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=J(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(L+"Delay"),s=r(L+"Duration"),o=Q(i,s),a=r(M+"Delay"),c=r(M+"Duration"),u=Q(a,c);let l=null,h=0,d=0;t===L?o>0&&(l=L,h=o,d=s.length):t===M?u>0&&(l=M,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?L:M:null,d=l?l===L?s.length:c.length:0);const f=l===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Z(s);const o=i||s.props&&"number"===s.props.type;S(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=(0,r.He)(i)),e._assign(i)})),n&&S(e,"change",(()=>{e.value=e.value.trim()})),t||(S(e,"compositionstart",ee),S(e,"compositionend",te),S(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ie=["ctrl","shift","alt","meta"],se={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ie.some((n=>e[`${n}Key`]&&!t.includes(n)))},oe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=se[t[e]];if(r&&r(n,t))return}return e(n,...r)};const ae=(0,r.l7)({patchProp:O},c);let ce;function ue(){return ce||(ce=(0,i.Us)(ae))}const le=(...e)=>{const t=ue().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=he(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function he(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return x},E9:function(){return re},F7:function(){return E},Gg:function(){return $},HD:function(){return L},He:function(){return te},Kn:function(){return F},NO:function(){return I},Nj:function(){return ee},Od:function(){return A},PO:function(){return q},Pq:function(){return a},RI:function(){return N},S0:function(){return K},W7:function(){return j},WV:function(){return m},Z6:function(){return _},_A:function(){return W},_N:function(){return D},aU:function(){return X},dG:function(){return b},e1:function(){return s},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return Q},kJ:function(){return R},kT:function(){return w},l7:function(){return k},mf:function(){return P},rs:function(){return J},tI:function(){return U},tR:function(){return S},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||F(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=O(e),r=O(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>L(e)?e:null==e?"":R(e)||F(e)&&(e.toString===V||!P(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:x(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||R(t)||q(t)?t:String(t),w={},_=[],b=()=>{},I=()=>!1,T=/^on[^a-z]/,E=e=>T.test(e),S=e=>e.startsWith("onUpdate:"),k=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,N=(e,t)=>C.call(e,t),R=Array.isArray,D=e=>"[object Map]"===B(e),x=e=>"[object Set]"===B(e),O=e=>e instanceof Date,P=e=>"function"===typeof e,L=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,U=e=>F(e)&&P(e.then)&&P(e.catch),V=Object.prototype.toString,B=e=>V.call(e),j=e=>B(e).slice(8,-1),q=e=>"[object Object]"===B(e),K=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,$=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,W=G((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),H=/\B([A-Z])/g,J=G((e=>e.replace(H,"-$1").toLowerCase())),Q=G((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=G((e=>e?`on${Q(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},6780:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",s="9.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},2412:function(e,t,n){"use strict";n(6699);var r=n(2661),i=(n(8675),n(3462),n(1703),n(223)),s=n(7077);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(5168),c=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function y(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw I(e,...t)}function w(e,...t){return I(e,...t)}function _(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function b(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw I(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw y(t),new Error(t)}function S(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function A(e){S(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(A);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function R(){return"http:"===D()||"https:"===D()}function D(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(R()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},U=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,r,s={}){return j(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),M.fetch()(K(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function j(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F),t);try{const t=new $(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw G(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw G(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _(e,a,o);v(e,a)}}catch(s){if(s instanceof i.ZR)throw s;v(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const s=await B(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function K(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),U.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function G(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return B(e,"POST","/v1/accounts:update",t)}async function H(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=X(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:J(Y(s.auth_time)),issuedAtTime:J(Y(s.iat)),expirationTime:J(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function X(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return y("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(y("Failed to decode base64 JWT payload"),null)}catch(s){return y("Caught error parsing JWT payload as JSON",s),null}}function Z(e){const t=X(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=J(this.lastLoginAt),this.creationTime=J(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,H(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await j(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=K(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ue;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return se(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;T(v&&I,e,"internal-error");const E=ue.fromJSON(this.name,I);T("string"===typeof v,e,"internal-error"),le(l,e.name),le(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof _,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(y,e.name);const S=new he({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(A(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||A(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ye(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Te(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ye(e=(0,i.z$)()){return/firefox\//i.test(e)}function ve(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function _e(e=(0,i.z$)()){return/iemobile/i.test(e)}function be(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Te(e=(0,i.z$)()){return/webos/i.test(e)}function Ee(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function Se(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,i.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ae(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return Ee(e)||be(e)||Te(e)||Ie(e)||/windows phone/i.test(e)||_e(e)}function Ne(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new De(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=A(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(A(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&A(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[A(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Oe(e){return(0,i.m9)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=Oe(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Me(t),{host:o,port:a}=Fe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ve()}function Me(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fe(e){const t=Me(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ue(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ue(t)}}}function Ue(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ve(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return B(e,"POST","/v1/accounts:resetPassword",V(e,t))}async function qe(e,t){return B(e,"POST","/v1/accounts:update",t)}async function Ke(e,t){return B(e,"POST","/v1/accounts:update",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",V(e,t))}async function Ge(e,t){return B(e,"POST","/v1/accounts:sendOobCode",V(e,t))}async function ze(e,t){return Ge(e,t)}async function We(e,t){return Ge(e,t)}async function He(e,t){return Ge(e,t)}async function Je(e,t){return Ge(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}async function Ye(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Be{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $e(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new tt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",V(e,t))}async function rt(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t))}async function it(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t));if(n.temporaryProof)throw G(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class lt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ct(null!==(r=c["mode"])&&void 0!==r?r:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return T(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch(t){return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com",yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="http://localhost";class wt extends Be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new wt(n,i):null}static _create(e,t){return new wt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="saml.";class bt extends dt{constructor(e){T(e.startsWith(_t),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=wt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return wt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tt(e,t){return q(e,"POST","/v1/accounts:signUp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=St(n),o=new Et({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=St(n);return new Et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function St(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){var t;const n=Oe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Et({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Tt(n,{returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new At(e,t,n,r)}}function Ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t){const n=(0,i.m9)(e);await xt(!0,n,t);const{providerUserInfo:r}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Nt(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Dt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Et._forOperation(e,"link",r)}async function xt(e,t,n){await ie(t);const r=Nt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,Ct(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=X(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Et._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const r="signIn",i=await Ct(e,r,t),s=await Et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Lt(e,t){return Pt(Oe(e),t)}async function Mt(e,t){const n=(0,i.m9)(e);return await xt(!1,n,t.providerId),Dt(n,t)}async function Ft(e,t){return Ot((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){return q(e,"POST","/v1/accounts:signInWithCustomToken",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){const n=Oe(e),r=await Ut(n,{token:t,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?jt._fromServerResponse(e,t):v(e,"internal-error")}}class jt extends Bt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new jt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t,n){const r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&qt(r,s,n),await We(r,s)}async function $t(e,t,n){await je((0,i.m9)(e),{oobCode:t,newPassword:n})}async function Gt(e,t){await Ke((0,i.m9)(e),{oobCode:t})}async function zt(e,t){const n=(0,i.m9)(e),r=await je(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Bt._fromServerResponse(Oe(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Wt(e,t){const{data:n}=await zt((0,i.m9)(e),t);return n.email}async function Ht(e,t,n){const r=Oe(e),i=await Tt(r,{returnSecureToken:!0,email:t,password:n}),s=await Et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Jt(e,t,n){return Lt((0,i.m9)(e),ht.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t,n){const r=(0,i.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};T(n.handleCodeInApp,r,"argument-error"),n&&qt(r,s,n),await He(r,s)}function Yt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Xt(e,t,n){const r=(0,i.m9)(e),s=ht.credentialWithLink(t,n||N());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Lt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return B(e,"POST","/v1/accounts:createAuthUri",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){const n=R()?N():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Zt((0,i.m9)(e),r);return s||[]}async function tn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&qt(n.auth,s,t);const{email:o}=await ze(n.auth,s);o!==e.email&&await e.reload()}async function nn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&qt(r.auth,o,n);const{email:a}=await Je(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,rn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function on(e,t){return cn((0,i.m9)(e),t,null)}function an(e,t){return cn((0,i.m9)(e),null,t)}async function cn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,qe(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new ln(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new dn(s,i);case"github.com":return new fn(s,i);case"google.com":return new pn(s,i);case"twitter.com":return new mn(s,i,e.screenName||null);case"custom":case"anonymous":return new ln(s,null);default:return new ln(s,r,i)}}class ln{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class hn extends ln{constructor(e,t,n,r){super(e,t,n),this.username=r}}class dn extends ln{constructor(e,t){super(e,"facebook.com",t)}}class fn extends hn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class pn extends ln{constructor(e,t){super(e,"google.com",t)}}class mn extends hn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:un(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new yn("enroll",e)}static _fromMfaPendingCredential(e){return new yn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return yn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return yn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Oe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Bt._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=yn._fromMfaPendingCredential(r.mfaPendingCredential);return new vn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Et._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Et._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function wn(e,t){var n;const r=(0,i.m9)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),vn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",V(e,t))}function bn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",V(e,t))}function In(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",V(e,t))}class Tn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Bt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Tn(e)}async getSession(){return yn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,In(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const En=new WeakMap;function Sn(e){const t=(0,i.m9)(e);return En.has(t)||En.set(t,Tn._fromUser(t)),En.get(t)}const kn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){const e=(0,i.z$)();return ve(e)||Ee(e)}const Nn=1e3,Rn=10;class Dn extends An{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cn()&&Ne(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ae()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Nn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dn.type="LOCAL";const xn=Dn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends An{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}On.type="SESSION";const Pn=On;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Mn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ln(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.receivers=[];class Un{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Fn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Bn(e){Vn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return"undefined"!==typeof Vn()["WorkerGlobalScope"]&&"function"===typeof Vn()["importScripts"]}async function qn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Kn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function $n(){return jn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="firebaseLocalStorageDb",zn=1,Wn="firebaseLocalStorage",Hn="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Qn(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Yn(){const e=indexedDB.deleteDatabase(Gn);return new Jn(e).toPromise()}function Xn(){const e=indexedDB.open(Gn,zn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Wn,{keyPath:Hn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Wn)?t(n):(n.close(),await Yn(),t(await Xn()))}))}))}async function Zn(e,t,n){const r=Qn(e,!0).put({[Hn]:t,value:n});return new Jn(r).toPromise()}async function er(e,t){const n=Qn(e,!1).get(t),r=await new Jn(n).toPromise();return void 0===r?null:r.value}function tr(e,t){const n=Qn(e,!0).delete(t);return new Jn(n).toPromise()}const nr=800,rr=3;class ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>rr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mn._getInstance($n()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await qn(),!this.activeServiceWorker)return;this.sender=new Un(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Kn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xn();return await Zn(e,kn,"1"),await tr(e,kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>er(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Qn(e,!1).getAll();return new Jn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),nr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const sr=ir;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",V(e,t))}function ar(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function lr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ur().appendChild(r)}))}function hr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=500,fr=6e4,pr=1e12;class mr{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new gr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class gr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=yr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),fr)}),dr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function yr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=hr("rcb"),wr=new P(3e4,6e4),_r="https://www.google.com/recaptcha/api.js?";class br{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Vn().grecaptcha}load(e,t=""){return T(Ir(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Vn().grecaptcha):new Promise(((n,r)=>{const s=Vn().setTimeout((()=>{r(w(e,"network-request-failed"))}),wr.get());Vn()[vr]=()=>{Vn().clearTimeout(s),delete Vn()[vr];const i=Vn().grecaptcha;if(!i)return void r(w(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${_r}?${(0,i.xO)({onload:vr,render:"explicit",hl:t})}`;lr(o).catch((()=>{clearTimeout(s),r(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Vn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ir(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Tr{async load(e){return new mr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="recaptcha",Sr={theme:"light",type:"image"};class kr{constructor(e,t=Object.assign({},Sr),n){this.parameters=t,this.type=Er,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Oe(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Tr:new br,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Vn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(R()&&!jn(),this.auth,"internal-error"),await Ar(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cr(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ar(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Nr(e,t,n){const r=Oe(e),s=await xr(r,t,(0,i.m9)(n));return new Cr(s,(e=>Lt(r,e)))}async function Rr(e,t,n){const r=(0,i.m9)(e);await xt(!1,r,"phone");const s=await xr(r.auth,t,(0,i.m9)(n));return new Cr(s,(e=>Mt(r,e)))}async function Dr(e,t,n){const r=(0,i.m9)(e),s=await xr(r.auth,t,(0,i.m9)(n));return new Cr(s,(e=>Ft(r,e)))}async function xr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Er,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await _n(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await or(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Or(e,t){await Dt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.providerId=Pr.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return xr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pr.credentialFromTaggedObject(t)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(e,t){return t?A(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.PROVIDER_ID="phone",Pr.PHONE_SIGN_IN_METHOD="phone";class Mr extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fr(e){return Pt(e.auth,new Mr(e),e.bypassAuthState)}function Ur(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Ot(n,new Mr(e),e.bypassAuthState)}async function Vr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Dt(n,new Mr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fr;case"linkViaPopup":case"linkViaRedirect":return Vr;case"reauthViaPopup":case"reauthViaRedirect":return Ur;default:v(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new P(2e3,1e4);async function qr(e,t,n){const r=Oe(e);b(e,t,dt);const i=Lr(r,n),s=new Gr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Kr(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const s=Lr(r.auth,n),o=new Gr(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function $r(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const s=Lr(r.auth,n),o=new Gr(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class Gr extends Br{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,jr.get())};e()}}Gr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zr="pendingRedirect",Wr=new Map;class Hr extends Br{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const t=await Jr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Jr(e,t){const n=ei(t),r=Zr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Qr(e,t){return Zr(e)._set(ei(t),"true")}function Yr(){Wr.clear()}function Xr(e,t){Wr.set(e._key(),t)}function Zr(e){return A(e._redirectPersistence)}function ei(e){return pe(zr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=Oe(e);b(e,t,dt);const i=Lr(r,n);return await Qr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const s=Lr(r.auth,n);await Qr(s,r.auth);const o=await ui(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function si(e,t,n){return oi(e,t,n)}async function oi(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const s=Lr(r.auth,n);await xt(!1,r,t.providerId),await Qr(s,r.auth);const o=await ui(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function ai(e,t){return await Oe(e)._initializationPromise,ci(e,t,!1)}async function ci(e,t,n=!1){const r=Oe(e),i=Lr(r,t),s=new Hr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ui(e){const t=Fn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=6e5;class hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!pi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=li&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}}function di(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function pi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yi=/^https?/;async function vi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mi(e);for(const r of t)try{if(wi(r))return}catch(n){}v(e,"unauthorized-domain")}function wi(e){const t=N(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!yi.test(n))return!1;if(gi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new P(3e4,6e4);function bi(){const e=Vn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ii(e){return new Promise(((t,n)=>{var r,i,s;function o(){bi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bi(),n(w(e,"network-request-failed"))},timeout:_i.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const t=hr("iframefcb");return Vn()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},lr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ti=null,e}))}let Ti=null;function Ei(e){return Ti=Ti||Ii(e),Ti}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new P(5e3,15e3),ki="__/auth/iframe",Ai="emulator/auth/iframe",Ci={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ni=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ri(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,Ai):`https://${e.config.authDomain}/${ki}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Ni.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Di(e){const t=await Ei(e),n=Vn().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Ri(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ci,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=Vn().setTimeout((()=>{r(i)}),Si.get());function o(){Vn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oi=500,Pi=600,Li="_blank",Mi="http://localhost";class Fi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ui(e,t,n,r=Oi,s=Pi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},xi),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=we(l)?Li:n),ye(l)&&(t=t||Mi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return Vi(t||"",c),new Fi(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Fi(d)}function Vi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="__/auth/handler",ji="emulator/auth/handler";function qi(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${Ki(e)}?${(0,i.xO)(u).slice(1)}`}function Ki({config:e}){return e.emulator?L(e,ji):`https://${e.authDomain}/${Bi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="webStorageSupport";class Gi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=qi(e,t,n,N(),r);return Ui(e,s,Fn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Bn(qi(e,t,n,N(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Di(e),n=new hi(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send($i,{type:$i},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[$i];void 0!==i&&t(!!i),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ve()||Ee()}}const zi=Gi;class Wi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Hi extends Wi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hi(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ar(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ji{constructor(){}static assertion(e){return Hi._fromCredential(e)}}Ji.FACTOR_ID="phone";var Qi="@firebase/auth",Yi="0.20.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function es(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{T(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),T(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},a=new xe(t,r,i);return C(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new Xi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Qi,Yi,Zi(e)),(0,s.registerVersion)(Qi,Yi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ts(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */es("Browser");const ns=2e3;async function rs(e,t,n){var r;const{BuildInfo:i}=ts();S(t.sessionId,"AuthEvent did not contain a session ID");const s=await cs(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:be()?o["apn"]=i.packageName:v(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,qi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function is(e){const{BuildInfo:t}=ts(),n={};Ee()?n.iosBundleId=t.packageName:be()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await mi(e,n)}function ss(e){const{cordova:t}=ts();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)}))}))}async function os(e,t,n){const{cordova:r}=ts();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(w(e,"redirect-cancelled-by-user"))}),ns))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),be()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function as(e){var t,n,r,i,s,o,a,c,u,l;const h=ts();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function cs(e){const t=us(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function us(e){if(S(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=20;class hs extends hi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function ds(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:gs(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function fs(e,t){return ys()._set(vs(e),t)}async function ps(e){const t=await ys()._get(vs(e));return t&&await ys()._remove(vs(e)),t}function ms(e,t){var n,r;const i=_s(t);if(i.includes("/__/auth/callback")){const t=bs(i),s=t["firebaseError"]?ws(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?w(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function gs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ls;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ys(){return A(xn)}function vs(e){return pe("authEvent",e.config.apiKey,e.name)}function ws(e){try{return JSON.parse(e)}catch(t){return null}}function _s(e){const t=bs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=bs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=bs(i)["link"];return s||i||r||n||e}function bs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=500;class Ts{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new hs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){as(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Yr(),await this._originValidation(e);const s=ds(e,n,r);await fs(e,s);const o=await rs(e,s,t),a=await ss(o);return os(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=is(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ts(),s=setTimeout((async()=>{await ps(e),t.onEvent(Ss())}),Is),o=async n=>{clearTimeout(s);const r=await ps(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ms(r,n["url"])),t.onEvent(i||Ss())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;ts().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Es=Ts;function Ss(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e,t){Oe(e)._logFramework(t)}var As="@firebase/auth-compat",Cs="0.2.14";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ns=1e3;function Rs(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Ds(){return"http:"===Rs()||"https:"===Rs()}function xs(e=(0,i.z$)()){return!("file:"!==Rs()&&"ionic:"!==Rs()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Os(){return(0,i.b$)()||(0,i.UG)()}function Ps(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Ls(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Ms(e=(0,i.z$)()){return Ps()||Ls(e)}function Fs(){try{const e=self.localStorage,t=Fn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Ms()||(0,i.hl)()}catch(e){return Us()&&(0,i.hl)()}return!1}function Us(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Vs(){return(Ds()||(0,i.ru)()||xs())&&!Os()&&Fs()&&!Us()}function Bs(){return xs()&&"undefined"!==typeof document}async function js(){return!!Bs()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Ns);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function qs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks={LOCAL:"local",NONE:"none",SESSION:"session"},$s=T,Gs="persistence";function zs(e,t){$s(Object.values(Ks).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?$s(t!==Ks.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?$s(t===Ks.NONE,e,"unsupported-persistence-type"):Us()?$s(t===Ks.NONE||t===Ks.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):$s(t===Ks.NONE||Fs(),e,"unsupported-persistence-type")}async function Ws(e){await e._initializationPromise;const t=Js(),n=pe(Gs,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Hs(e,t){const n=Js();if(!n)return[];const r=pe(Gs,e,t),i=n.getItem(r);switch(i){case Ks.NONE:return[fe];case Ks.LOCAL:return[sr,Pn];case Ks.SESSION:return[Pn];default:return[]}}function Js(){var e;try{return(null===(e=qs())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=T;class Ys{constructor(){this.browserResolver=A(zi),this.cordovaResolver=A(Es),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Bs()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Qs(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await js();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){return e.unwrap()}function Zs(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){return no(e)}function to(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new so(e,wn(e,t))}else if(r){const e=no(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function no(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Pr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=gt;break;case u.FACEBOOK:r=mt;break;case u.GITHUB:r=yt;break;case u.TWITTER:r=It;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?wt._create(n,o):tt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new pt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function ro(e,t){return t.catch((t=>{throw t instanceof i.ZR&&to(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:eo(e),additionalUserInfo:gn(e),user:oo.getOrCreate(n)}}))}async function io(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ro(e,n.confirm(t))}}class so{constructor(e,t){this.resolver=t,this.auth=Zs(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ro(Xs(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this._delegate=e,this.multiFactor=Sn(e)}static getOrCreate(e){return oo.USER_MAP.has(e)||oo.USER_MAP.set(e,new oo(e)),oo.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ro(this.auth,Mt(this._delegate,e))}async linkWithPhoneNumber(e,t){return io(this.auth,Rr(this._delegate,e,t))}async linkWithPopup(e){return ro(this.auth,$r(this._delegate,e,Ys))}async linkWithRedirect(e){return await Ws(Oe(this.auth)),si(this._delegate,e,Ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ro(this.auth,Ft(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return io(this.auth,Dr(this._delegate,e,t))}reauthenticateWithPopup(e){return ro(this.auth,Kr(this._delegate,e,Ys))}async reauthenticateWithRedirect(e){return await Ws(Oe(this.auth)),ri(this._delegate,e,Ys)}sendEmailVerification(e){return tn(this._delegate,e)}async unlink(e){return await Rt(this._delegate,e),this}updateEmail(e){return on(this._delegate,e)}updatePassword(e){return an(this._delegate,e)}updatePhoneNumber(e){return Or(this._delegate,e)}updateProfile(e){return sn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return nn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}oo.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ao=T;class co{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;ao(n,"invalid-api-key",{appName:e.name}),ao(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Ys:void 0;this._delegate=t.initialize({options:{persistence:lo(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?oo.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Le(this._delegate,e,t)}applyActionCode(e){return Gt(this._delegate,e)}checkActionCode(e){return zt(this._delegate,e)}confirmPasswordReset(e,t){return $t(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ro(this._delegate,Ht(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return en(this._delegate,e)}isSignInWithEmailLink(e){return Yt(this._delegate,e)}async getRedirectResult(){ao(Vs(),this._delegate,"operation-not-supported-in-this-environment");const e=await ai(this._delegate,Ys);return e?ro(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ks(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=uo(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=uo(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Qt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Kt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(zs(this._delegate,e),e){case Ks.SESSION:t=Pn;break;case Ks.LOCAL:const e=await A(sr)._isAvailable();t=e?sr:xn;break;case Ks.NONE:t=fe;break;default:return v("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ro(this._delegate,kt(this._delegate))}signInWithCredential(e){return ro(this._delegate,Lt(this._delegate,e))}signInWithCustomToken(e){return ro(this._delegate,Vt(this._delegate,e))}signInWithEmailAndPassword(e,t){return ro(this._delegate,Jt(this._delegate,e,t))}signInWithEmailLink(e,t){return ro(this._delegate,Xt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return io(this._delegate,Nr(this._delegate,e,t))}async signInWithPopup(e){return ao(Vs(),this._delegate,"operation-not-supported-in-this-environment"),ro(this._delegate,qr(this._delegate,e,Ys))}async signInWithRedirect(e){return ao(Vs(),this._delegate,"operation-not-supported-in-this-environment"),await Ws(this._delegate),ti(this._delegate,e,Ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Wt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function uo(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&oo.getOrCreate(e));return{next:s,error:t,complete:n}}function lo(e,t){const n=Hs(e,t);if("undefined"===typeof self||n.includes(sr)||n.push(sr),"undefined"!==typeof window)for(const r of[xn,Pn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co.Persistence=Ks;class ho{constructor(){this.providerId="phone",this._delegate=new Pr(Xs(r.Z.auth()))}static credential(e,t){return Pr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ho.PHONE_SIGN_IN_METHOD=Pr.PHONE_SIGN_IN_METHOD,ho.PROVIDER_ID=Pr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fo=T;class po{constructor(e,t,n=r.Z.app()){var i;fo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new kr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="auth-compat";function go(e){e.INTERNAL.registerComponent(new c.wA(mo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new co(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:ht,FacebookAuthProvider:mt,GithubAuthProvider:yt,GoogleAuthProvider:gt,OAuthProvider:pt,SAMLAuthProvider:bt,PhoneAuthProvider:ho,PhoneMultiFactorGenerator:Ji,RecaptchaVerifier:po,TwitterAuthProvider:It,Auth:co,AuthCredential:Be,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(As,Cs)}go(r.Z)},4406:function(e,t,n){"use strict";n(8675),n(3462);var r,i=n(2661),s=(n(1703),n(2801),n(2262),n(4506),n(6699),n(7077)),o=n(7142),a=n(5168),c=n(223),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,y)&&e[y]||(e[y]=++v)}var y="closure_uid_"+(1e9*Math.random()>>>0),v=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:_,b.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var S=0,k={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var e=g(this);delete k[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function N(e){e:{var t=Wn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function R(e){return Array.prototype.concat.apply([],arguments)}function D(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function x(e){return/^[\s\xa0]*$/.test(e)}var O,P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return-1!=e.indexOf(t)}function M(e,t){return e<t?-1:e>t?1:0}e:{var F=d.navigator;if(F){var U=F.userAgent;if(U){O=U;break e}}O=""}function V(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function B(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function K(e){return K[" "](e),e}function $(e){var t=re;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}K[" "]=f;var G,z=L(O,"Opera"),W=L(O,"Trident")||L(O,"MSIE"),H=L(O,"Edge"),J=H||W,Q=L(O,"Gecko")&&!(L(O.toLowerCase(),"webkit")&&!L(O,"Edge"))&&!(L(O,"Trident")||L(O,"MSIE"))&&!L(O,"Edge"),Y=L(O.toLowerCase(),"webkit")&&!L(O,"Edge");function X(){var e=d.document;return e?e.documentMode:void 0}e:{var Z="",ee=function(){var e=O;return Q?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Y?/WebKit\/(\S+)/.exec(e):z?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ee&&(Z=ee?ee[1]:""),W){var te=X();if(null!=te&&te>parseFloat(Z)){G=String(te);break e}}G=Z}var ne,re={};function ie(){return $((function(){let e=0;const t=P(String(G)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=M(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||M(0==i[2].length,0==s[2].length)||M(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&W){var se=X();ne=se||(parseInt(G,10)||void 0)}else ne=void 0;var oe=ne,ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ue(e,t){if(ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Q){e:{try{K(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:le[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.Z.h.call(this)}}ce.prototype.h=function(){this.defaultPrevented=!0},T(ue,ce);var le={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),de=0;function fe(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++de,this.ca=this.fa=!1}function pe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function me(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=A(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ye(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}me.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ye(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new fe(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ve="closure_lm_"+(1e6*Math.random()|0),we={};function _e(e,t,n,r,i){if(r&&r.once)return Te(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)_e(e,t[s],n,r,i);return null}return n=Re(n),e&&e[he]?e.N(t,n,m(r)?!!r.capture:!!r,i):be(e,t,n,!1,r,i)}function be(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[ve]=a=new me(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ie(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ae||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ie(){function e(n){return t.call(e.src,e.listener,n)}var t=Ae;return e}function Te(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Te(e,t[s],n,r,i);return null}return n=Re(n),e&&e[he]?e.O(t,n,m(r)?!!r.capture:!!r,i):be(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Re(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ye(s,n,r,i),-1<n&&(pe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ye(t,n,r,i)),(n=-1<e?t[e]:null)&&Se(n))}function Se(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[he])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ve]=null)):pe(e)}}}function ke(e){return e in we?we[e]:we[e]="on"+e}function Ae(e,t){if(e.ca)e=!0;else{t=new ue(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Se(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ve],e instanceof me?e:null}var Ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function Re(e){return"function"===typeof e?e:(e[Ne]||(e[Ne]=function(t){return e.handleEvent(t)}),e[Ne])}function De(){E.call(this),this.i=new me(this),this.P=this,this.I=null}function xe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ce(t,e);else if(t instanceof ce)t.target=t.target||e;else{var i=t;t=new ce(r,e),q(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Oe(o,r,!0,t)&&i}if(o=t.g=e,i=Oe(o,r,!0,t)&&i,i=Oe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Oe(o,r,!1,t)&&i}function Oe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ge(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}T(De,E),De.prototype[he]=!0,De.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},De.prototype.M=function(){if(De.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pe(n[r]);delete t.g[e],t.h--}}this.I=null},De.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},De.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Pe=d.JSON.stringify;function Le(){var e=$e;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Me{constructor(){this.h=this.g=null}add(e,t){const n=Ue.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fe,Ue=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ve),(e=>e.reset()));class Ve{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Be(e){d.setTimeout((()=>{throw e}),0)}function je(e,t){Fe||qe(),Ke||(Fe(),Ke=!0),$e.add(e,t)}function qe(){var e=d.Promise.resolve(void 0);Fe=function(){e.then(Ge)}}var Ke=!1,$e=new Me;function Ge(){for(var e;e=Le();){try{e.h.call(e.g)}catch(n){Be(n)}var t=Ue;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ke=!1}function ze(e,t){De.call(this),this.h=e||1,this.g=t||d,this.j=b(this.kb,this),this.l=Date.now()}function We(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Je(e){e.g=He((()=>{e.g=null,e.i&&(e.i=!1,Je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}T(ze,De),r=ze.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xe(this,"tick"),this.da&&(We(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){ze.Z.M.call(this),We(this),delete this.g};class Qe extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Je(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(e){E.call(this),this.h=e,this.g={}}T(Ye,E);var Xe=[];function Ze(e,t,n,r){Array.isArray(n)||(n&&(Xe[0]=n.toString()),n=Xe);for(var i=0;i<n.length;i++){var s=_e(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function et(e){V(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Se(e)}),e),e.g={}}function tt(){this.g=!0}function nt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function rt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function it(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ot(e,n)+(r?" "+r:"")}))}function st(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ot(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Pe(n)}catch(a){return t}}Ye.prototype.M=function(){Ye.Z.M.call(this),et(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tt.prototype.Aa=function(){this.g=!1},tt.prototype.info=function(){};var at={},ct=null;function ut(){return ct=ct||new De}function lt(e){ce.call(this,at.Ma,e)}function ht(e){const t=ut();xe(t,new lt(t,e))}function dt(e,t){ce.call(this,at.STAT_EVENT,e),this.stat=t}function ft(e){const t=ut();xe(t,new dt(t,e))}function pt(e,t){ce.call(this,at.Na,e),this.size=t}function mt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}at.Ma="serverreachability",T(lt,ce),at.STAT_EVENT="statevent",T(dt,ce),at.Na="timingevent",T(pt,ce);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vt(){}function wt(e){return e.h||(e.h=e.i())}function _t(){}vt.prototype.h=null;var bt,It={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Tt(){ce.call(this,"d")}function Et(){ce.call(this,"c")}function St(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ye(this),this.P=Ct,e=J?125:void 0,this.W=new ze(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new At}function At(){this.i=null,this.g="",this.h=!1}T(Tt,ce),T(Et,ce),T(St,vt),St.prototype.g=function(){return new XMLHttpRequest},St.prototype.i=function(){return{}},bt=new St;var Ct=45e3,Nt={},Rt={};function Dt(e,t,n){e.K=1,e.v=nn(Qt(t)),e.s=n,e.U=!0,xt(e,null)}function xt(e,t){e.F=Date.now(),Mt(e),e.A=Qt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new At,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Qe(b(e.Ia,e,e.g),e.O)),Ze(e.V,e.g,"readystatechange",e.gb),t=e.H?B(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ht(1),nt(e.j,e.u,e.A,e.m,e.X,e.s)}function Ot(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Pt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Lt(e,n),r==Rt){4==t&&(e.o=4,ft(14),i=!1),it(e.j,e.m,null,"[Incomplete Response]");break}if(r==Nt){e.o=4,ft(15),it(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}it(e.j,e.m,r,null),jt(e,r)}Ot(e)&&r!=Rt&&r!=Nt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ft(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,ft(11))):(it(e.j,e.m,n,"[Invalid Chunked Response]"),Bt(e),Vt(e))}function Lt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Rt:(n=Number(t.substring(n,r)),isNaN(n)?Nt:(r+=1,r+n>t.length?Rt:(t=t.substr(r,n),e.C=r+n,t)))}function Mt(e){e.Y=Date.now()+e.P,Ft(e,e.P)}function Ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=mt(b(e.eb,e),t)}function Ut(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Vt(e){0==e.l.G||e.I||wr(e.l,e)}function Bt(e){Ut(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,We(e.W),et(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kn(n.i,e)))if(n.I=e.N,!e.J&&kn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;vr(n),or(n)}mr(n),ft(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=mt(b(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else br(n,11)}else if((e.J||n.g==e)&&vr(n),!x(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(L(e,"spdy")||L(e,"quic")||L(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(An(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,tn(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Tr(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ut(a),Mt(a)),r.g=o}else pr(r);0<n.l.length&&ur(n)}else"stop"!=u[0]&&"close"!=u[0]||br(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?br(n,7):sr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ht(4)}catch(u){}}function qt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Kt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(p(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=qt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function $t(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof $t)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Gt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];zt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],zt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function zt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=kt.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Zn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const l=Zn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||J||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||4!=l||7==t||ht(8==t||0>=h?3:2),Ut(this);var n=this.g.ba();this.N=n;t:if(Ot(this)){var r=er(this.g);e="";var i=r.length,s=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Bt(this),Vt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,rt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ft(12),Bt(this),Vt(this);break e}it(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Pt(this,l,o),J&&this.i&&3==l&&(Ze(this.V,this.W,"tick",this.fb),this.W.start())):(it(this.j,this.m,o,null),jt(this,o)),4==l&&Bt(this),this.i&&!this.I&&(4==l?wr(this.l,this):(this.i=!1,Mt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),Bt(this),Vt(this)}}}catch(l){}},r.fb=function(){if(this.g){var e=Zn(this.g),t=this.g.ga();this.C<t.length&&(Ut(this),Pt(this,e,t),this.i&&4!=e&&Mt(this))}},r.cancel=function(){this.I=!0,Bt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(st(this.j,this.A),2!=this.K&&(ht(3),ft(17)),Bt(this),this.o=2,Vt(this)):Ft(this,this.Y-e)},r=$t.prototype,r.R=function(){Gt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Gt(this),this.g.concat()},r.get=function(e,t){return zt(this.h,e)?this.h[e]:t},r.set=function(e,t){zt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Wt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ht(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Jt){this.g=void 0!==t?t:e.g,Yt(this,e.j),this.s=e.s,Xt(this,e.i),Zt(this,e.m),this.l=e.l,t=e.h;var n=new pn;n.i=t.i,t.g&&(n.g=new $t(t.g),n.h=t.h),en(this,n),this.o=e.o}else e&&(n=String(e).match(Wt))?(this.g=!!t,Yt(this,n[1]||"",!0),this.s=on(n[2]||""),Xt(this,n[3]||"",!0),Zt(this,n[4]),this.l=on(n[5]||"",!0),en(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!t,this.h=new pn(null,this.g))}function Qt(e){return new Jt(e)}function Yt(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xt(e,t,n){e.i=n?on(t,!0):t}function Zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function en(e,t,n){t instanceof pn?(e.h=t,_n(e.h,e.g)):(n||(t=an(t,dn)),e.h=new pn(t,e.g))}function tn(e,t,n){e.h.set(t,n)}function nn(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e){return e instanceof Jt?Qt(e):new Jt(e,void 0)}function sn(e,t,n,r){var i=new Jt(null,void 0);return e&&Yt(i,e),t&&Xt(i,t),n&&Zt(i,n),r&&(i.l=r),i}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,cn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,un,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(an(t,un,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,fn)),e.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new $t,e.h=0,e.i&&Ht(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){mn(e),t=wn(e,t),zt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,zt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Gt(e)))}function yn(e,t){return mn(e),t=wn(e,t),zt(e.g.h,t)}function vn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(wn(e,t),D(n)),e.h+=n.length)}function wn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _n(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),vn(this,n,e))}),e)),e.j=t}r=pn.prototype,r.add=function(e,t){mn(this),this.i=null,e=wn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){mn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){mn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){mn(this);var t=[];if("string"===typeof e)yn(this,e)&&(t=R(t,this.g.get(wn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=R(t,e[n])}return t},r.set=function(e,t){return mn(this),this.i=null,e=wn(this,e),yn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var bn=class{constructor(e,t){this.h=e,this.g=t}};function In(e){this.l=e||Tn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Sn(e){return e.h?1:e.g?e.g.size:0}function kn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function An(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Nn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return D(e.i)}function Rn(){}function Dn(){this.g=new Rn}function xn(e,t,n){const r=n||"";try{Kt(e,(function(e,n){let i=e;m(e)&&(i=Pe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function On(e,t){const n=new tt;if(d.Image){const r=new Image;r.onload=I(Pn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=I(Pn,n,r,"TestLoadImage: error",!1,t),r.onabort=I(Pn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=I(Pn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Pn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Ln(e){this.l=e.$b||null,this.j=e.ib||!1}function Mn(e,t){De.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){if(this.i=Nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Rn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},Rn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},T(Ln,vt),Ln.prototype.g=function(){return new Mn(this.l,this.j)},Ln.prototype.i=function(e){return function(){return e}}({}),T(Mn,De);var Fn=0;function Un(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Vn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Bn(e)}function Bn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Mn.prototype,r.open=function(e,t){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Bn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vn(this)),this.readyState=Fn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Un(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Vn(this):Bn(this),3==this.readyState&&Un(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Vn(this))},r.Ta=function(e){this.g&&(this.response=e,Vn(this))},r.ha=function(){this.g&&Vn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=d.JSON.parse;function qn(e){De.call(this),this.headers=new $t,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kn,this.K=this.L=!1}T(qn,De);var Kn="",$n=/^https?$/i,Gn=["POST","PUT"];function zn(e){return W&&ie()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Wn(e){return"content-type"==e.toLowerCase()}function Hn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Jn(e),Yn(e)}function Jn(e){e.D||(e.D=!0,xe(e,"complete"),xe(e,"error"))}function Qn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Zn(e)||2!=e.ba()))if(e.v&&4==Zn(e))He(e.Fa,0,e);else if(xe(e,"readystatechange"),4==Zn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Wt)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!$n.test(i?i.toLowerCase():"")}n=r}if(n)xe(e,"complete"),xe(e,"success");else{e.m=6;try{var o=2<Zn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Jn(e)}}finally{Yn(e)}}}function Yn(e,t){if(e.g){Xn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||xe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Xn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Zn(e){return e.g?e.g.readyState:0}function er(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Kn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tr(e){let t="";return V(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function nr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tr(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):tn(e,t,n))}function rr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ir(e){this.za=0,this.l=[],this.h=new tt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,e),this.$a=rr("retryDelaySeedMs",1e4,e),this.Ya=rr("forwardChannelMaxRetries",2,e),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new In(e&&e.concurrentRequestLimit),this.Ca=new Dn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function sr(e){if(ar(e),3==e.G){var t=e.V++,n=Qt(e.F);tn(n,"SID",e.J),tn(n,"RID",t),tn(n,"TYPE","terminate"),dr(e,n),t=new kt(e,e.h,t,void 0),t.K=2,t.v=nn(Qt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Mt(t)}Ir(e)}function or(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function ar(e){or(e),e.u&&(d.clearTimeout(e.u),e.u=null),vr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function cr(e,t){e.l.push(new bn(e.Za++,t)),3==e.G&&ur(e)}function ur(e){En(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function lr(e,t){return!(Sn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=mt(b(e.Ha,e,t),_r(e,e.C)),e.C++,!0))}function hr(e,t){var n;n=t?t.m:e.V++;const r=Qt(e.F);tn(r,"SID",e.J),tn(r,"RID",n),tn(r,"AID",e.U),dr(e,r),e.o&&e.s&&nr(r,e.o,e.s),n=new kt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=fr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),An(e.i,n),Dt(n,r,t)}function dr(e,t){e.j&&Kt({},(function(e,n){tn(t,n,e)}))}function fr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?b(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{xn(a,e,"req"+n+"_")}catch(ei){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function pr(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function mr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=mt(b(e.Ga,e),_r(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function yr(e){e.g=new kt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Qt(e.oa);tn(t,"RID","rpc"),tn(t,"SID",e.J),tn(t,"CI",e.N?"0":"1"),tn(t,"AID",e.U),dr(e,t),tn(t,"TYPE","xmlhttp"),e.o&&e.s&&nr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(Qt(t)),n.s=null,n.U=!0,xt(n,e)}function vr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function wr(e,t){var n=null;if(e.g==t){vr(e),gr(e),e.g=null;var r=2}else{if(!kn(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=ut(),xe(r,new pt(r,n,t,i)),ur(e)}else pr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&lr(e,t)||2==r&&mr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:br(e,5);break;case 4:br(e,10);break;case 3:br(e,6);break;default:br(e,2)}}function _r(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function br(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=b(e.jb,e);n||(n=new Jt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Yt(n,"https"),nn(n)),On(n.toString(),r)}else ft(2);e.G=0,e.j&&e.j.va(t),Ir(e),ar(e)}function Ir(e){e.G=0,e.I=-1,e.j&&(0==Nn(e.i).length&&0==e.l.length||(e.i.i.length=0,D(e.l),e.l.length=0),e.j.ua())}function Tr(e,t,n){let r=rn(n);if(""!=r.i)t&&Xt(r,t+"."+r.i),Zt(r,r.m);else{const e=d.location;r=sn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&V(e.aa,(function(e,t){tn(r,t,e)})),t=e.D,n=e.sa,t&&n&&tn(r,t,n),tn(r,"VER",e.ma),dr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new qn(new Ln({ib:!0})):new qn(e.qa),t.L=e.H,t}function Sr(){}function kr(){if(W&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function Ar(e,t){De.call(this),this.g=new ir(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!x(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!x(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Rr(this)}function Cr(e){Tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Nr(){Et.call(this),this.status=1}function Rr(e){this.g=e}r=qn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bt.g(),this.C=this.u?wt(this.u):wt(bt),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Hn(this,s)}e=n||"";const i=new $t(this.headers);r&&Kt(r,(function(e,t){i.set(t,e)})),r=N(i.T()),n=d.FormData&&e instanceof d.FormData,!(0<=A(Gn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Hn(this,s)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,xe(this,"complete"),xe(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Qn(this):this.cb())},r.cb=function(){Qn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=ir.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new kt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=B(s),q(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=fr(this,i,t),n=Qt(this.F),tn(n,"RID",e),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&s&&nr(n,this.o,s),An(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",t),tn(n,"SID","null"),i.$=!0,Dt(i,n,null)):Dt(i,n,t),this.G=2}}else 3==this.G&&(e?hr(this,e):0==this.l.length||En(this.i)||hr(this))},r.Ga=function(){if(this.u=null,yr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=mt(b(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ft(10),or(this),yr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),mr(this),ft(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ft(2)):(this.h.info("Failed to ping google.com"),ft(1))},r=Sr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},kr.prototype.g=function(e,t){return new Ar(e,t)},T(Ar,De),Ar.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(b(e.hb,e,t))),ft(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Tr(e,null,e.W),ur(e)},Ar.prototype.close=function(){sr(this.g)},Ar.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,cr(this.g,t)}else this.v?(t={},t.__data__=Pe(e),cr(this.g,t)):cr(this.g,e)},Ar.prototype.M=function(){this.g.j=null,delete this.j,sr(this.g),delete this.g,Ar.Z.M.call(this)},T(Cr,Tt),T(Nr,Et),T(Rr,Sr),Rr.prototype.xa=function(){xe(this.g,"a")},Rr.prototype.wa=function(e){xe(this.g,new Cr(e))},Rr.prototype.va=function(e){xe(this.g,new Nr(e))},Rr.prototype.ua=function(){xe(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,Ar.prototype.send=Ar.prototype.u,Ar.prototype.open=Ar.prototype.m,Ar.prototype.close=Ar.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,yt.COMPLETE="complete",_t.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",De.prototype.listen=De.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Dr=l.createWebChannelTransport=function(){return new kr},xr=l.getStatEventTarget=function(){return ut()},Or=l.ErrorCode=gt,Pr=l.EventType=yt,Lr=l.Event=at,Mr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=l.FetchXmlHttpFactory=Ln,Ur=l.WebChannel=_t,Vr=l.XhrIo=qn;const Br="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qr="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new a.Yd("@firebase/firestore");function $r(){return Kr.logLevel}function Gr(e){Kr.setLogLevel(e)}function zr(e,...t){if(Kr.logLevel<=a["in"].DEBUG){const n=t.map(Jr);Kr.debug(`Firestore (${qr}): ${e}`,...n)}}function Wr(e,...t){if(Kr.logLevel<=a["in"].ERROR){const n=t.map(Jr);Kr.error(`Firestore (${qr}): ${e}`,...n)}}function Hr(e,...t){if(Kr.logLevel<=a["in"].WARN){const n=t.map(Jr);Kr.warn(`Firestore (${qr}): ${e}`,...n)}}function Jr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e="Unexpected state"){const t=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+e;throw Wr(t),new Error(t)}function Yr(e,t){e||Qr()}function Xr(e,t){e||Qr()}function Zr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ti extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ii{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jr.UNAUTHENTICATED)))}shutdown(){}}class si{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class oi{constructor(e){this.t=e,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ni,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ni)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Yr("string"==typeof t.accessToken),new ri(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Yr(null===e||"string"==typeof e),new jr(e)}}class ai{constructor(e,t,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ci{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ai(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ui{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class li{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Yr("string"==typeof e.token),this.p=e.token,new ui(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.A=-1;class fi{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=di(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function pi(e,t){return e<t?-1:e>t?1:0}function mi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function gi(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yi.fromMillis(Date.now())}static fromDate(e){return yi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new yi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pi(this.nanoseconds,e.nanoseconds):pi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new vi(e)}static min(){return new vi(new yi(0,0))}static max(){return new vi(new yi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _i(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function bi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,n){void 0===t?t=0:t>e.length&&Qr(),void 0===n?n=e.length-t:n>e.length-t&&Qr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ii.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ti extends Ii{construct(e,t,n){return new Ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ti(t)}static emptyPath(){return new Ti([])}}const Ei=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ii{construct(e,t,n){return new Si(e,t,n)}static isValidIdentifier(e){return Ei.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ti(ei.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ti(ei.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ti(ei.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Si(t)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.fields=e,e.sort(Si.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ci(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ci(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ni=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(e){if(Yr(!!e),"string"==typeof e){let t=0;const n=Ni.exec(e);if(Yr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Di(e.seconds),nanos:Di(e.nanos)}}function Di(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xi(e){return"string"==typeof e?Ci.fromBase64String(e):Ci.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pi(e){const t=e.mapValue.fields.__previous_value__;return Oi(t)?Pi(t):t}function Li(e){const t=Ri(e.mapValue.fields.__local_write_time__.timestampValue);return new yi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){return null==e}function Vi(e){return 0===e&&1/e==-1/0}function Bi(e){return"number"==typeof e&&Number.isInteger(e)&&!Vi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.path=e}static fromPath(e){return new ji(Ti.fromString(e))}static fromName(e){return new ji(Ti.fromString(e).popFirst(5))}static empty(){return new ji(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ji(new Ti(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ki={nullValue:"NULL_VALUE"};function $i(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Oi(e)?4:is(e)?9007199254740991:10:Qr()}function Gi(e,t){if(e===t)return!0;const n=$i(e);if(n!==$i(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Li(e).isEqual(Li(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ri(e.timestampValue),r=Ri(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return xi(e.bytesValue).isEqual(xi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Di(e.geoPointValue.latitude)===Di(t.geoPointValue.latitude)&&Di(e.geoPointValue.longitude)===Di(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Di(e.integerValue)===Di(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Di(e.doubleValue),r=Di(t.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return mi(e.arrayValue.values||[],t.arrayValue.values||[],Gi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(wi(n)!==wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Gi(n[i],r[i])))return!1;return!0}(e,t);default:return Qr()}}function zi(e,t){return void 0!==(e.values||[]).find((e=>Gi(e,t)))}function Wi(e,t){if(e===t)return 0;const n=$i(e),r=$i(t);if(n!==r)return pi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Di(e.integerValue||e.doubleValue),r=Di(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Hi(e.timestampValue,t.timestampValue);case 4:return Hi(Li(e),Li(t));case 5:return pi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=xi(e),r=xi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=pi(n[i],r[i]);if(0!==e)return e}return pi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=pi(Di(e.latitude),Di(t.latitude));return 0!==n?n:pi(Di(e.longitude),Di(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Wi(n[i],r[i]);if(e)return e}return pi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===qi.mapValue&&t===qi.mapValue)return 0;if(e===qi.mapValue)return 1;if(t===qi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=pi(r[o],s[o]);if(0!==e)return e;const t=Wi(n[r[o]],i[s[o]]);if(0!==t)return t}return pi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Qr()}}function Hi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return pi(e,t);const n=Ri(e),r=Ri(t),i=pi(n.seconds,r.seconds);return 0!==i?i:pi(n.nanos,r.nanos)}function Ji(e){return Qi(e)}function Qi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ri(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ji.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Qi(e.fields[i])}`;return n+"}"}(e.mapValue):Qr();var t,n}function Yi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Xi(e){return!!e&&"integerValue"in e}function Zi(e){return!!e&&"arrayValue"in e}function es(e){return!!e&&"nullValue"in e}function ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ns(e){return!!e&&"mapValue"in e}function rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _i(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=rs(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ss(e){return"nullValue"in e?Ki:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Yi(Fi.empty(),ji.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Qr()}function os(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Yi(Fi.empty(),ji.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?qi:Qr()}function as(e,t){const n=Wi(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function cs(e,t){const n=Wi(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.value=e}static empty(){return new us({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(t)}setAll(e){let t=Si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rs(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){_i(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new us(rs(this.value))}}function ls(e){const t=[];return _i(e.fields,((e,n)=>{const r=new Si([e]);if(ns(n)){const e=ls(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ki(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hs{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new hs(e,0,vi.min(),vi.min(),us.empty(),0)}static newFoundDocument(e,t,n){return new hs(e,1,t,vi.min(),n,0)}static newNoDocument(e,t){return new hs(e,2,t,vi.min(),us.empty(),0)}static newUnknownDocument(e,t){return new hs(e,3,t,vi.min(),us.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=us.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=us.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof hs&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hs(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ds{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function fs(e){return e.fields.find((e=>2===e.kind))}function ps(e){return e.fields.filter((e=>2!==e.kind))}ds.UNKNOWN_ID=-1;class ms{constructor(e,t){this.fieldPath=e,this.kind=t}}class gs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gs(0,ws.min())}}function ys(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=vi.fromTimestamp(1e9===r?new yi(n+1,0):new yi(n,r));return new ws(i,ji.empty(),t)}function vs(e){return new ws(e.readTime,e.key,-1)}class ws{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ws(vi.min(),ji.empty(),-1)}static max(){return new ws(vi.max(),ji.empty(),-1)}}function _s(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ji.comparator(e.documentKey,t.documentKey),0!==n?n:pi(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.comparator=e,this.root=t||Ts.EMPTY}insert(e,t){return new bs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ts.BLACK,null,null))}remove(e){return new bs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ts.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Is(this.root,e,this.comparator,!1)}getReverseIterator(){return new Is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Is(this.root,e,this.comparator,!0)}}class Is{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ts{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ts.RED,this.left=null!=r?r:Ts.EMPTY,this.right=null!=i?i:Ts.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ts(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ts.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ts.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qr();if(this.right.isRed())throw Qr();const e=this.left.check();if(e!==this.right.check())throw Qr();return e+(this.isRed()?0:1)}}Ts.EMPTY=null,Ts.RED=!0,Ts.BLACK=!1,Ts.EMPTY=new class{constructor(){this.size=0}get key(){throw Qr()}get value(){throw Qr()}get color(){throw Qr()}get left(){throw Qr()}get right(){throw Qr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ts(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(e){this.comparator=e,this.data=new bs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ss(this.data.getIterator())}getIteratorFrom(e){return new Ss(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Es))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Es(this.comparator);return t.data=e,t}}class Ss{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ks(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function Cs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new As(e,t,n,r,i,s,o)}function Ns(e){const t=Zr(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Ji(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ji(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ji(e))).join(",")),t.P=e}return t.P}function Rs(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Ji(t.value)}`;var t})).join(", ")}]`),Ui(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ji(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ji(e))).join(",")),`Target(${t})`}function Ds(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ws(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Gi(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Js(e.startAt,t.startAt)&&Js(e.endAt,t.endAt)}function xs(e){return ji.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Os(e,t){return e.filters.filter((e=>e instanceof Ms&&e.field.isEqual(t)))}function Ps(e,t,n){let r=Ki,i=!0;for(const s of Os(e,t)){let e=Ki,t=!0;switch(s.op){case"<":case"<=":e=ss(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=Ki}as({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];as({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Ls(e,t,n){let r=qi,i=!0;for(const s of Os(e,t)){let e=qi,t=!0;switch(s.op){case">=":case">":e=os(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=qi}cs({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];cs({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class Ms extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Fs(e,t,n):"array-contains"===t?new js(e,n):"in"===t?new qs(e,n):"not-in"===t?new Ks(e,n):"array-contains-any"===t?new $s(e,n):new Ms(e,t,n)}static V(e,t,n){return"in"===t?new Us(e,n):new Vs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Wi(t,this.value)):null!==t&&$i(this.value)===$i(t)&&this.v(Wi(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Qr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Fs extends Ms{constructor(e,t,n){super(e,t,n),this.key=ji.fromName(n.referenceValue)}matches(e){const t=ji.comparator(e.key,this.key);return this.v(t)}}class Us extends Ms{constructor(e,t){super(e,"in",t),this.keys=Bs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Vs extends Ms{constructor(e,t){super(e,"not-in",t),this.keys=Bs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Bs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ji.fromName(e.referenceValue)))}class js extends Ms{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zi(t)&&zi(t.arrayValue,this.value)}}class qs extends Ms{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&zi(this.value.arrayValue,t)}}class Ks extends Ms{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!zi(this.value.arrayValue,t)}}class $s extends Ms{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>zi(this.value.arrayValue,e)))}}class Gs{constructor(e,t){this.position=e,this.inclusive=t}}class zs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ws(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Hs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ji.comparator(ji.fromName(o.referenceValue),n.key):Wi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Js(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Gi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ys(e,t,n,r,i,s,o,a){return new Qs(e,t,n,r,i,s,o,a)}function Xs(e){return new Qs(e)}function Zs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function eo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function to(e){for(const t of e.filters)if(t.S())return t.field;return null}function no(e){return null!==e.collectionGroup}function ro(e){const t=Zr(e);if(null===t.D){t.D=[];const e=to(t),n=eo(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new zs(e)),t.D.push(new zs(Si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new zs(Si.keyField(),e))}}}return t.D}function io(e){const t=Zr(e);if(!t.C)if("F"===t.limitType)t.C=Cs(t.path,t.collectionGroup,ro(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of ro(t)){const t="desc"===i.dir?"asc":"desc";e.push(new zs(i.field,t))}const n=t.endAt?new Gs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gs(t.startAt.position,t.startAt.inclusive):null;t.C=Cs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function so(e,t,n){return new Qs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function oo(e,t){return Ds(io(e),io(t))&&e.limitType===t.limitType}function ao(e){return`${Ns(io(e))}|lt:${e.limitType}`}function co(e){return`Query(target=${Rs(io(e))}; limitType=${e.limitType})`}function uo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ji.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Hs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ro(e),t))&&!(e.endAt&&!function(e,t,n){const r=Hs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ro(e),t))}(e,t)}function lo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ho(e){return(t,n)=>{let r=!1;for(const i of ro(e)){const e=fo(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function fo(e,t,n){const r=e.field.isKeyField()?ji.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Wi(r,i):Qr()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Qr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(t)?"-0":t}}function mo(e){return{integerValue:""+e}}function go(e,t){return Bi(t)?mo(t):po(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this._=void 0}}function vo(e,t,n){return e instanceof bo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Io?To(e,t):e instanceof Eo?So(e,t):function(e,t){const n=_o(e,t),r=Ao(n)+Ao(e.k);return Xi(n)&&Xi(e.k)?mo(r):po(e.M,r)}(e,t)}function wo(e,t,n){return e instanceof Io?To(e,t):e instanceof Eo?So(e,t):n}function _o(e,t){return e instanceof ko?Xi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class bo extends yo{}class Io extends yo{constructor(e){super(),this.elements=e}}function To(e,t){const n=Co(t);for(const r of e.elements)n.some((e=>Gi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Eo extends yo{constructor(e){super(),this.elements=e}}function So(e,t){let n=Co(t);for(const r of e.elements)n=n.filter((e=>!Gi(e,r)));return{arrayValue:{values:n}}}class ko extends yo{constructor(e,t){super(),this.M=e,this.k=t}}function Ao(e){return Di(e.integerValue||e.doubleValue)}function Co(e){return Zi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.field=e,this.transform=t}}function Ro(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Io&&t instanceof Io||e instanceof Eo&&t instanceof Eo?mi(e.elements,t.elements,Gi):e instanceof ko&&t instanceof ko?Gi(e.k,t.k):e instanceof bo&&t instanceof bo}(e.transform,t.transform)}class Do{constructor(e,t){this.version=e,this.transformResults=t}}class xo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xo}static exists(e){return new xo(void 0,e)}static updateTime(e){return new xo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Po{}function Lo(e,t,n){e instanceof Bo?function(e,t,n){const r=e.value.clone(),i=Ko(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof jo?function(e,t,n){if(!Oo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Ko(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(qo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Mo(e,t,n){e instanceof Bo?function(e,t,n){if(!Oo(e.precondition,t))return;const r=e.value.clone(),i=$o(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Vo(t),r).setHasLocalMutations()}(e,t,n):e instanceof jo?function(e,t,n){if(!Oo(e.precondition,t))return;const r=$o(e.fieldTransforms,n,t),i=t.data;i.setAll(qo(e)),i.setAll(r),t.convertToFoundDocument(Vo(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Oo(e.precondition,t)&&t.convertToNoDocument(vi.min())}(e,t)}function Fo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=_o(r.transform,e||null);null!=i&&(null==n&&(n=us.empty()),n.set(r.field,i))}return n||null}function Uo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&mi(e,t,((e,t)=>Ro(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Vo(e){return e.isFoundDocument()?e.version:vi.min()}class Bo extends Po{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class jo extends Po{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function qo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Ko(e,t,n){const r=new Map;Yr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,wo(o,a,n[i]))}return r}function $o(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,vo(e,s,t))}return r}class Go extends Po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class zo extends Po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho,Jo;function Qo(e){switch(e){default:return Qr();case ei.CANCELLED:case ei.UNKNOWN:case ei.DEADLINE_EXCEEDED:case ei.RESOURCE_EXHAUSTED:case ei.INTERNAL:case ei.UNAVAILABLE:case ei.UNAUTHENTICATED:return!1;case ei.INVALID_ARGUMENT:case ei.NOT_FOUND:case ei.ALREADY_EXISTS:case ei.PERMISSION_DENIED:case ei.FAILED_PRECONDITION:case ei.ABORTED:case ei.OUT_OF_RANGE:case ei.UNIMPLEMENTED:case ei.DATA_LOSS:return!0}}function Yo(e){if(void 0===e)return Wr("GRPC error has no .code"),ei.UNKNOWN;switch(e){case Ho.OK:return ei.OK;case Ho.CANCELLED:return ei.CANCELLED;case Ho.UNKNOWN:return ei.UNKNOWN;case Ho.DEADLINE_EXCEEDED:return ei.DEADLINE_EXCEEDED;case Ho.RESOURCE_EXHAUSTED:return ei.RESOURCE_EXHAUSTED;case Ho.INTERNAL:return ei.INTERNAL;case Ho.UNAVAILABLE:return ei.UNAVAILABLE;case Ho.UNAUTHENTICATED:return ei.UNAUTHENTICATED;case Ho.INVALID_ARGUMENT:return ei.INVALID_ARGUMENT;case Ho.NOT_FOUND:return ei.NOT_FOUND;case Ho.ALREADY_EXISTS:return ei.ALREADY_EXISTS;case Ho.PERMISSION_DENIED:return ei.PERMISSION_DENIED;case Ho.FAILED_PRECONDITION:return ei.FAILED_PRECONDITION;case Ho.ABORTED:return ei.ABORTED;case Ho.OUT_OF_RANGE:return ei.OUT_OF_RANGE;case Ho.UNIMPLEMENTED:return ei.UNIMPLEMENTED;case Ho.DATA_LOSS:return ei.DATA_LOSS;default:return Qr()}}(Jo=Ho||(Ho={}))[Jo.OK=0]="OK",Jo[Jo.CANCELLED=1]="CANCELLED",Jo[Jo.UNKNOWN=2]="UNKNOWN",Jo[Jo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Jo[Jo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Jo[Jo.NOT_FOUND=5]="NOT_FOUND",Jo[Jo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Jo[Jo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Jo[Jo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Jo[Jo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Jo[Jo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Jo[Jo.ABORTED=10]="ABORTED",Jo[Jo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Jo[Jo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Jo[Jo.INTERNAL=13]="INTERNAL",Jo[Jo.UNAVAILABLE=14]="UNAVAILABLE",Jo[Jo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return bi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new bs(ji.comparator);function ea(){return Zo}const ta=new bs(ji.comparator);function na(...e){let t=ta;for(const n of e)t=t.insert(n.key,n);return t}function ra(){return new Xo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ia=new bs(ji.comparator),sa=new Es(ji.comparator);function oa(...e){let t=sa;for(const n of e)t=t.add(n);return t}const aa=new Es(pi);function ca(){return aa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,t)),new ua(vi.min(),n,ca(),ea(),oa())}}class la{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new la(Ci.EMPTY_BYTE_STRING,t,oa(),oa(),oa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class da{constructor(e,t){this.targetId=e,this.$=t}}class fa{constructor(e,t,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class pa{constructor(){this.B=0,this.L=ya(),this.U=Ci.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=oa(),t=oa(),n=oa();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Qr()}})),new la(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=ya()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ma{constructor(e){this.nt=e,this.st=new Map,this.it=ea(),this.rt=ga(),this.ot=new Es(pi)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Qr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(xs(e))if(0===n){const n=new ji(e.path);this.ct(t,n,hs.newNoDocument(n,vi.min()))}else Yr(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&xs(i.target)){const t=new ji(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,hs.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=oa();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new ua(e,t,this.ot,this.it,n);return this.it=ea(),this.rt=ga(),this.ot=new Es(pi),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new pa,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new Es(pi),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||zr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new pa),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function ga(){return new bs(ji.comparator)}function ya(){return new bs(ji.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),wa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class _a{constructor(e,t){this.databaseId=e,this.N=t}}function ba(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ia(e,t){return e.N?t.toBase64():t.toUint8Array()}function Ta(e,t){return ba(e,t.toTimestamp())}function Ea(e){return Yr(!!e),vi.fromTimestamp(function(e){const t=Ri(e);return new yi(t.seconds,t.nanos)}(e))}function Sa(e,t){return function(e){return new Ti(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ka(e){const t=Ti.fromString(e);return Yr(Xa(t)),t}function Aa(e,t){return Sa(e.databaseId,t.path)}function Ca(e,t){const n=ka(t);if(n.get(1)!==e.databaseId.projectId)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ji(xa(n))}function Na(e,t){return Sa(e.databaseId,t)}function Ra(e){const t=ka(e);return 4===t.length?Ti.emptyPath():xa(t)}function Da(e){return new Ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xa(e){return Yr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Oa(e,t,n){return{name:Aa(e,t),fields:n.value.mapValue.fields}}function Pa(e,t,n){const r=Ca(e,t.name),i=Ea(t.updateTime),s=new us({mapValue:{fields:t.fields}}),o=hs.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function La(e,t){return"found"in t?function(e,t){Yr(!!t.found),t.found.name,t.found.updateTime;const n=Ca(e,t.found.name),r=Ea(t.found.updateTime),i=new us({mapValue:{fields:t.found.fields}});return hs.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Yr(!!t.missing),Yr(!!t.readTime);const n=Ca(e,t.missing),r=Ea(t.readTime);return hs.newNoDocument(n,r)}(e,t):Qr()}function Ma(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Qr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(Yr(void 0===t||"string"==typeof t),Ci.fromBase64String(t||"")):(Yr(void 0===t||t instanceof Uint8Array),Ci.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ei.UNKNOWN:Yo(e.code);return new ti(t,e.message||"")}(o);n=new fa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ca(e,r.document.name),s=Ea(r.document.updateTime),o=new us({mapValue:{fields:r.document.fields}}),a=hs.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ha(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ca(e,r.document),s=r.readTime?Ea(r.readTime):vi.min(),o=hs.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ha([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ca(e,r.document),s=r.removedTargetIds||[];n=new ha([],s,i,null)}else{if(!("filter"in t))return Qr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Wo(r),s=e.targetId;n=new da(s,i)}}return n}function Fa(e,t){let n;if(t instanceof Bo)n={update:Oa(e,t.key,t.value)};else if(t instanceof Go)n={delete:Aa(e,t.key)};else if(t instanceof jo)n={update:Oa(e,t.key,t.data),updateMask:Ya(t.fieldMask)};else{if(!(t instanceof zo))return Qr();n={verify:Aa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof bo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Io)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Eo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ko)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Qr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ta(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Qr()}(e,t.precondition)),n}function Ua(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?xo.updateTime(Ea(e.updateTime)):void 0!==e.exists?xo.exists(e.exists):xo.none()}(t.currentDocument):xo.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Yr("REQUEST_TIME"===t.setToServerValue),n=new bo;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Io(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Eo(e)}else"increment"in t?n=new ko(e,t.increment):Qr();const r=Si.fromServerFormat(t.fieldPath);return new No(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Ca(e,t.update.name),s=new us({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new ki(t.map((e=>Si.fromServerFormat(e))))}(t.updateMask);return new jo(i,s,e,n,r)}return new Bo(i,s,n,r)}if(t.delete){const r=Ca(e,t.delete);return new Go(r,n)}if(t.verify){const r=Ca(e,t.verify);return new zo(r,n)}return Qr()}function Va(e,t){return e&&e.length>0?(Yr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ea(e.updateTime):Ea(t);return n.isEqual(vi.min())&&(n=Ea(t)),new Do(n,e.transformResults||[])}(e,t)))):[]}function Ba(e,t){return{documents:[Na(e,t.path)]}}function ja(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Na(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Na(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ts(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NAN"}};if(es(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ts(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NOT_NAN"}};if(es(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wa(e.field),op:za(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Wa(e.field),direction:Ga(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||Ui(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function qa(e){let t=Ra(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Yr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=$a(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new zs(Ha(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ui(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Gs(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Gs(n,t)}(n.endAt)),Ys(t,i,o,s,a,"F",c,u)}function Ka(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Qr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function $a(e){return e?void 0!==e.unaryFilter?[Qa(e)]:void 0!==e.fieldFilter?[Ja(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>$a(e))).reduce(((e,t)=>e.concat(t))):Qr():[]}function Ga(e){return va[e]}function za(e){return wa[e]}function Wa(e){return{fieldPath:e.canonicalString()}}function Ha(e){return Si.fromServerFormat(e.fieldPath)}function Ja(e){return Ms.create(Ha(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Qa(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ha(e.unaryFilter.field);return Ms.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ha(e.unaryFilter.field);return Ms.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ha(e.unaryFilter.field);return Ms.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ha(e.unaryFilter.field);return Ms.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Qr()}}function Ya(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Xa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=tc(t)),t=ec(e.get(n),t);return tc(t)}function ec(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function tc(e){return e+""}function nc(e){const t=e.length;if(Yr(t>=2),2===t)return Yr(""===e.charAt(0)&&""===e.charAt(1)),Ti.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Qr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Qr()}s=t+2}return new Ti(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e,t){return[e,Za(t)]}function sc(e,t,n){return[e,Za(t),n]}const oc={},ac=["prefixPath","collectionGroup","readTime","documentId"],cc=["prefixPath","collectionGroup","documentId"],uc=["collectionGroup","readTime","prefixPath","documentId"],lc=["canonicalId","targetId"],hc=["targetId","path"],dc=["path","targetId"],fc=["collectionId","parent"],pc=["indexId","uid"],mc=["uid","sequenceNumber"],gc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yc=["indexId","uid","orderedDocumentKey"],vc=["userId","collectionPath","documentId"],wc=["userId","collectionPath","largestBatchId"],_c=["userId","collectionGroup","largestBatchId"],bc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ic=[...bc,"documentOverlays"],Tc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ec=[...Tc,"indexConfiguration","indexState","indexEntries"],Sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Qr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ac(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ac?t:Ac.resolve(t)}catch(e){return Ac.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ac.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ac.reject(t)}static resolve(e){return new Ac(((t,n)=>{t(e)}))}static reject(e){return new Ac(((t,n)=>{n(e)}))}static waitFor(e){return new Ac(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ac.resolve(!1);for(const n of e)t=t.next((e=>e?Ac.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ni,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Dc(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=Mc(t.target.error);this.At.reject(new Dc(e,n))}}static open(e,t,n,r){try{return new Cc(t,e.transaction(r,n))}catch(e){throw new Dc(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(zr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Oc(t)}}class Nc{constructor(e,t,n){this.name=e,this.version=t,this.Pt=n,12.2===Nc.Vt((0,c.z$)())&&Wr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return zr("SimpleDb","Removing database:",e),Pc(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!(0,c.hl)())return!1;if(Nc.St())return!0;const e=(0,c.z$)(),t=Nc.Vt(e),n=0<t&&t<10,r=Nc.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/dautari/"})||void 0===e?void 0:e.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(zr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Dc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Dc(e,r))},r.onupgradeneeded=e=>{zr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Pt.kt(t,r.transaction,e.oldVersion,this.version).next((()=>{zr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Nt(e);const t=Cc.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.bt(),e))).catch((e=>(t.abort(e),Ac.reject(e)))).toPromise();return s.catch((()=>{})),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(zr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Rc{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Pc(this.Ft.delete())}}class Dc extends ti{constructor(e,t){super(ei.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xc(e){return"IndexedDbTransactionError"===e.name}class Oc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(zr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(zr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Pc(n)}add(e){return zr("SimpleDb","ADD",this.store.name,e,e),Pc(this.store.add(e))}get(e){return Pc(this.store.get(e)).next((t=>(void 0===t&&(t=null),zr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return zr("SimpleDb","DELETE",this.store.name,e),Pc(this.store.delete(e))}count(){return zr("SimpleDb","COUNT",this.store.name),Pc(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ac(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}Gt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ac(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Qt(e,t){zr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,((e,t,n)=>n.delete()))}Wt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}zt(e){const t=this.cursor({});return new Ac(((n,r)=>{t.onerror=e=>{const t=Mc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Kt(e,t){const n=[];return new Ac(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Rc(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ac){const e=o.catch((e=>(s.done(),Ac.reject(e))));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}})).next((()=>Ac.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Pc(e){return new Ac(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Mc(e.target.error);n(t)}}))}let Lc=!1;function Mc(e){const t=Nc.Vt((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ti("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Lc||(Lc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends kc{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function Uc(e,t){const n=Zr(e);return Nc.xt(n.Ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Lo(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Mo(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Mo(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(vi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),oa())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((e,t)=>Uo(e,t)))&&mi(this.baseMutations,e.baseMutations,((e,t)=>Uo(e,t)))}}class Bc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Yr(e.mutations.length===n.length);let r=ia;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Bc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,n,r,i=vi.min(),s=vi.min(),o=Ci.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new qc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new qc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.Jt=e}}function $c(e,t){let n;if(t.document)n=Pa(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ji.fromSegments(t.noDocument.path),r=Hc(t.noDocument.readTime);n=hs.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Qr();{const e=ji.fromSegments(t.unknownDocument.path),r=Hc(t.unknownDocument.version);n=hs.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new yi(e[0],e[1]);return vi.fromTimestamp(t)}(t.readTime)),n}function Gc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:zc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Aa(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ba(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Wc(t.version)};else{if(!t.isUnknownDocument())return Qr();r.unknownDocument={path:n.path.toArray(),version:Wc(t.version)}}return r}function zc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Wc(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Hc(e){const t=new yi(e.seconds,e.nanoseconds);return vi.fromTimestamp(t)}function Jc(e,t){const n=(t.baseMutations||[]).map((t=>Ua(e.Jt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>Ua(e.Jt,t))),i=yi.fromMillis(t.localWriteTimeMs);return new Vc(t.batchId,i,n,r)}function Qc(e){const t=Hc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Hc(e.lastLimboFreeSnapshotVersion):vi.min();let r;var i;return void 0!==e.query.documents?(Yr(1===(i=e.query).documents.length),r=io(Xs(Ra(i.documents[0])))):r=function(e){return io(qa(e))}(e.query),new qc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Ci.fromBase64String(e.resumeToken))}function Yc(e,t){const n=Wc(t.snapshotVersion),r=Wc(t.lastLimboFreeSnapshotVersion);let i;i=xs(t.target)?Ba(e.Jt,t.target):ja(e.Jt,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ns(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Xc(e){const t=qa({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?so(t,t.limit,"L"):t}function Zc(e,t){return new jc(t.largestBatchId,Ua(e.Jt,t.overlayMutation))}function eu(e,t){const n=t.path.lastSegment();return[e,Za(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{getBundleMetadata(e,t){return nu(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Hc(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return nu(e).put({bundleId:(n=t).id,createTime:Wc(Ea(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return ru(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Xc(t.bundledQuery),readTime:Hc(t.readTime)};var t}))}saveNamedQuery(e,t){return ru(e).put(function(e){return{name:e.name,readTime:Wc(Ea(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function nu(e){return Uc(e,"bundles")}function ru(e){return Uc(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new iu(e,n)}getOverlay(e,t){return su(e).get(eu(this.userId,t)).next((e=>e?Zc(this.M,e):null))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new jc(t,i);r.push(this.Xt(e,s))})),Ac.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Za(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(su(e).Qt("collectionPathOverlayIndex",r))})),Ac.waitFor(i)}getOverlaysForCollection(e,t,n){const r=ra(),i=Za(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return su(e).qt("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Zc(this.M,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=ra();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return su(e).Wt({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Zc(this.M,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}Xt(e,t){return su(e).put(function(e,t,n){const[r,i,s]=eu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Fa(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function su(e){return Uc(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Di(e.integerValue));else if("doubleValue"in e){const n=Di(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),Vi(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(xi(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?is(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Qr()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),ji.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}function au(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function cu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=au(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}ou.fe=new ou;class uu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=cu(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),n=cu(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class lu{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class hu{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class du{constructor(){this.De=new uu,this.Ce=new lu(this.De),this.xe=new hu(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new fu(this.indexId,this.documentKey,this.arrayValue,n)}}function pu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=mu(e.arrayValue,t.arrayValue),0!==n?n:(n=mu(e.directionalValue,t.directionalValue),0!==n?n:ji.comparator(e.documentKey,t.documentKey)))}function mu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=fs(e);if(void 0!==t&&!this.Be(t))return!1;const n=ps(e);let r=0,i=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const e=n[r];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Me.length||!this.Ue(this.Me[i++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.qe=new vu}addToCollectionParentIndex(e,t){return this.qe.add(t),Ac.resolve()}getCollectionParents(e,t){return Ac.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Ac.resolve()}deleteFieldIndex(e,t){return Ac.resolve()}getDocumentsMatchingTarget(e,t){return Ac.resolve(null)}getIndexType(e,t){return Ac.resolve(0)}getFieldIndexes(e,t){return Ac.resolve([])}getNextCollectionGroupToUpdate(e){return Ac.resolve(null)}getMinOffset(e,t){return Ac.resolve(ws.min())}updateCollectionGroup(e,t,n){return Ac.resolve()}updateIndexEntries(e,t){return Ac.resolve()}}class vu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Es(Ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Es(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Uint8Array(0);class _u{constructor(e,t){this.user=e,this.databaseId=t,this.Ke=new vu,this.Ge=new Xo((e=>Ns(e)),((e,t)=>Ds(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Ke.add(t)}));const i={collectionId:n,parent:Za(r)};return bu(e).put(i)}return Ac.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[gi(t),""],!1,!0);return bu(e).qt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(nc(r.parent))}return n}))}addFieldIndex(e,t){const n=Tu(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=Tu(e),r=Eu(e),i=Iu(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Iu(e);let r=!0;const i=new Map;return Ac.forEach(this.Qe(t),(t=>this.je(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=oa();const r=[];return Ac.forEach(i,((i,s)=>{var o;zr("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Ns(t)}`);const a=function(e,t){const n=fs(t);if(void 0===n)return null;for(const r of Os(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of ps(t))for(const t of Os(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of ps(t)){const t=0===i.kind?Ps(e,i.fieldPath,e.startAt):Ls(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Gs(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of ps(t)){const t=0===i.kind?Ls(e,i.fieldPath,e.endAt):Ps(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Gs(n,r)}(s,i),h=this.We(i,s,u),d=this.We(i,s,l),f=this.ze(i,s,c),p=this.He(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ac.forEach(p,(i=>n.Gt(i,t.limit).next((t=>{t.forEach((t=>{const n=ji.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ac.resolve(null)}))}Qe(e){let t=this.Ge.get(e);return t||(t=[e],this.Ge.set(e,t),t)}He(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.Je(t[l/c]):wu,h=this.Ye(e,a,n[l%c],r),d=this.Xe(e,a,i[l%c],s),f=o.map((t=>this.Ye(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}Ye(e,t,n,r){const i=new fu(e,ji.empty(),t,n);return r?i:i.ke()}Xe(e,t,n,r){const i=new fu(e,ji.empty(),t,n);return r?i.ke():i}je(e,t){const n=new gu(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.$e(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return Ac.forEach(this.Qe(t),(t=>this.je(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Es(Si.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}Ze(e,t){const n=new du;for(const r of ps(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);ou.fe.Zt(e,i)}return n.Se()}Je(e){const t=new du;return ou.fe.Zt(e,t.Ne(0)),t.Se()}tn(e,t){const n=new du;return ou.fe.Zt(Yi(this.databaseId,t),n.Ne(function(e){const t=ps(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Se()}ze(e,t,n){if(null===n)return[];let r=[];r.push(new du);let i=0;for(const s of ps(e)){const e=n[i++];for(const n of r)if(this.en(t,s.fieldPath)&&Zi(e))r=this.nn(r,s,e);else{const t=n.Ne(s.kind);ou.fe.Zt(e,t)}}return this.sn(r)}We(e,t,n){return this.ze(e,t,n.position)}sn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}nn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new du;n.seed(e.Se()),ou.fe.Zt(s,n.Ne(t.kind)),i.push(n)}return i}en(e,t){return!!e.filters.find((e=>e instanceof Ms&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Tu(e),r=Eu(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next((e=>{const t=[];return Ac.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new gs(t.sequenceNumber,new ws(Hc(t.readTime),new ji(nc(t.documentKey)),t.largestBatchId)):gs.empty(),r=e.fields.map((([e,t])=>new ms(Si.fromServerFormat(e),t)));return new ds(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:pi(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Tu(e),i=Eu(e);return this.rn(e).next((e=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ac.forEach(t,(t=>i.put(function(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Wc(r.readTime),documentKey:Za(r.documentKey.path),largestBatchId:r.largestBatchId}}(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ac.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ac.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ac.forEach(i,(n=>this.on(e,t,n).next((t=>{const i=this.un(r,n);return t.isEqual(i)?Ac.resolve():this.an(e,r,n,t,i)})))))))}))}cn(e,t,n,r){return Iu(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.tn(n,t.key),documentKey:t.key.path.toArray()})}hn(e,t,n,r){return Iu(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.tn(n,t.key),t.key.path.toArray()])}on(e,t,n){const r=Iu(e);let i=new Es(pu);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,t)])},((e,r)=>{i=i.add(new fu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}un(e,t){let n=new Es(pu);const r=this.Ze(t,e);if(null==r)return n;const i=fs(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Zi(s))for(const i of s.arrayValue.values||[])n=n.add(new fu(t.indexId,e.key,this.Je(i),r))}else n=n.add(new fu(t.indexId,e.key,wu,r));return n}an(e,t,n,r,i){zr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=ks(s),c=ks(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=ks(o)):t?(i(a),a=ks(s)):(a=ks(s),c=ks(o))}}(r,i,pu,(r=>{s.push(this.cn(e,t,n,r))}),(r=>{s.push(this.hn(e,t,n,r))})),Ac.waitFor(s)}rn(e){let t=1;return Eu(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>pu(e,t))).filter(((e,t,n)=>!t||0!==pu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=pu(s,e),i=pu(s,t);if(0===n)r[0]=e.ke();else if(n>0&&i<0)r.push(s),r.push(s.ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,wu,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,wu,[]]));return i}getMinOffset(e,t){let n;return Ac.forEach(this.Qe(t),(t=>this.je(e,t).next((e=>{e?(!n||_s(e.indexState.offset,n)<0)&&(n=e.indexState.offset):n=ws.min()})))).next((()=>n))}}function bu(e){return Uc(e,"collectionParents")}function Iu(e){return Uc(e,"indexEntries")}function Tu(e){return Uc(e,"indexConfiguration")}function Eu(e){return Uc(e,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ku{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ku(e,ku.DEFAULT_COLLECTION_PERCENTILE,ku.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Yr(1===a)})));const u=[];for(const l of n.mutations){const e=sc(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ac.waitFor(s).next((()=>u))}function Cu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Qr();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ku.DEFAULT_COLLECTION_PERCENTILE=10,ku.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ku.DEFAULT=new ku(41943040,ku.DEFAULT_COLLECTION_PERCENTILE,ku.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ku.DISABLED=new ku(-1,0,0);class Nu{constructor(e,t,n,r){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=r,this.ln={}}static Yt(e,t,n,r){Yr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Nu(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Du(e).Wt({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=xu(e),s=Du(e);return s.add({}).next((o=>{Yr("number"==typeof o);const a=new Vc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Fa(e.Jt,t))),i=n.mutations.map((t=>Fa(e.Jt,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.M,this.userId,a),u=[];let l=new Es(((e,t)=>pi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=sc(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,oc))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.ln[o]=a.keys()})),Ac.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Du(e).get(t).next((e=>e?(Yr(e.userId===this.userId),Jc(this.M,e)):null))}fn(e,t){return this.ln[t]?Ac.resolve(this.ln[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.ln[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Du(e).Wt({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Yr(t.batchId>=n),i=Jc(this.M,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Du(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Du(e).qt("userMutationsIndex",t).next((e=>e.map((e=>Jc(this.M,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ic(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return xu(e).Wt({range:r},((n,r,s)=>{const[o,a,c]=n,u=nc(a);if(o===this.userId&&t.path.isEqual(u))return Du(e).get(c).next((e=>{if(!e)throw Qr();Yr(e.userId===this.userId),i.push(Jc(this.M,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Es(pi);const r=[];return t.forEach((t=>{const i=ic(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=xu(e).Wt({range:s},((e,r,i)=>{const[s,o,a]=e,c=nc(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ac.waitFor(r).next((()=>this.dn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=ic(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Es(pi);return xu(e).Wt({range:s},((e,t,i)=>{const[s,a,c]=e,u=nc(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.dn(e,o)))}dn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Du(e).get(t).next((e=>{if(null===e)throw Qr();Yr(e.userId===this.userId),n.push(Jc(this.M,e))})))})),Ac.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Au(e.Ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this._n(t.batchId)})),Ac.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}_n(e){delete this.ln[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ac.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return xu(e).Wt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=nc(e[1]);r.push(t)}else n.done()})).next((()=>{Yr(0===r.length)}))}))}containsKey(e,t){return Ru(e,this.userId,t)}wn(e){return Ou(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Ru(e,t,n){const r=ic(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return xu(e).Wt({range:s,jt:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Du(e){return Uc(e,"mutations")}function xu(e){return Uc(e,"documentMutations")}function Ou(e){return Uc(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Pu(0)}static yn(){return new Pu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.pn(e).next((t=>{const n=new Pu(t.highestTargetId);return t.highestTargetId=n.next(),this.In(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.pn(e).next((e=>vi.fromTimestamp(new yi(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.pn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.pn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.In(e,r))))}addTargetData(e,t){return this.Tn(e,t).next((()=>this.pn(e).next((n=>(n.targetCount+=1,this.En(t,n),this.In(e,n))))))}updateTargetData(e,t){return this.Tn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Mu(e).delete(t.targetId))).next((()=>this.pn(e))).next((t=>(Yr(t.targetCount>0),t.targetCount-=1,this.In(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Mu(e).Wt(((s,o)=>{const a=Qc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ac.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Mu(e).Wt(((e,n)=>{const r=Qc(n);t(r)}))}pn(e){return Fu(e).get("targetGlobalKey").next((e=>(Yr(null!==e),e)))}In(e,t){return Fu(e).put("targetGlobalKey",t)}Tn(e,t){return Mu(e).put(Yc(this.M,t))}En(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.pn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Ns(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Mu(e).Wt({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Qc(n);Ds(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Uu(e);return t.forEach((t=>{const s=Za(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ac.waitFor(r)}removeMatchingKeys(e,t,n){const r=Uu(e);return Ac.forEach(t,(t=>{const i=Za(t.path);return Ac.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Uu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Uu(e);let i=oa();return r.Wt({range:n,jt:!0},((e,t,n)=>{const r=nc(e[1]),s=new ji(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Za(t.path),r=IDBKeyRange.bound([n],[gi(n)],!1,!0);let i=0;return Uu(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return Mu(e).get(t).next((e=>e?Qc(e):null))}}function Mu(e){return Uc(e,"targets")}function Fu(e){return Uc(e,"targetGlobal")}function Uu(e){return Uc(e,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(e){if(e.code!==ei.FAILED_PRECONDITION||e.message!==Sc)throw e;zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu([e,t],[n,r]){const i=pi(e,n);return 0===i?pi(t,r):i}class ju{constructor(e){this.An=e,this.buffer=new Es(Bu),this.Rn=0}bn(){return++this.Rn}Pn(e){const t=[e,this.bn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Bu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qu{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(e){const t=this.Vn?3e5:6e4;zr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.vn=null,this.Vn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){xc(e)?zr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Vu(e)}await this.Sn(e)}))}}class Ku{constructor(e,t){this.Dn=e,this.params=t}calculateTargetCount(e,t){return this.Dn.Cn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ac.resolve(hi.A);const n=new ju(t);return this.Dn.forEachTarget(e,(e=>n.Pn(e.sequenceNumber))).next((()=>this.Dn.xn(e,(e=>n.Pn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Dn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Dn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector","Garbage collection skipped; disabled"),Ac.resolve(Su)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Su):this.Nn(e,t)))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(zr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),$r()<=a["in"].DEBUG&&zr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ac.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ku(e,t)}(this,t)}Cn(e){const t=this.kn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}kn(e){let t=0;return this.xn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}xn(e,t){return this.Mn(e,((e,n)=>t(n)))}addReference(e,t,n){return Gu(e,n)}removeReference(e,t,n){return Gu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Gu(e,t)}On(e,t){return function(e,t){let n=!1;return Ou(e).zt((r=>Ru(e,r,t).next((e=>(e&&(n=!0),Ac.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Mn(e,((s,o)=>{if(o<=t){const t=this.On(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,vi.min()),Uu(e).delete([0,Za(s.path)]))))}));r.push(t)}})).next((()=>Ac.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Gu(e,t)}Mn(e,t){const n=Uu(e);let r,i=hi.A;return n.Wt({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==hi.A&&t(new ji(nc(r)),i),i=o,r=s):i=hi.A})).next((()=>{i!==hi.A&&t(new ji(nc(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Gu(e,t){return Uu(e).put(function(e,t){return{targetId:0,path:Za(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.changes=new Xo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hs.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ac.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Qu(e).put(n)}removeEntry(e,t,n){return Qu(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],zc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Fn(e,n))))}getEntry(e,t){let n=hs.newInvalidDocument(t);return Qu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Yu(t))},((e,r)=>{n=this.$n(t,r)})).next((()=>n))}Bn(e,t){let n={size:0,document:hs.newInvalidDocument(t)};return Qu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Yu(t))},((e,r)=>{n={document:this.$n(t,r),size:Cu(r)}})).next((()=>n))}getEntries(e,t){let n=ea();return this.Ln(e,t,((e,t)=>{const r=this.$n(e,t);n=n.insert(e,r)})).next((()=>n))}Un(e,t){let n=ea(),r=new bs(ji.comparator);return this.Ln(e,t,((e,t)=>{const i=this.$n(e,t);n=n.insert(e,i),r=r.insert(e,Cu(t))})).next((()=>({documents:n,qn:r})))}Ln(e,t,n){if(t.isEmpty())return Ac.resolve();let r=new Es(Zu);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Yu(r.first()),Yu(r.last())),s=r.getIterator();let o=s.getNext();return Qu(e).Wt({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=ji.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Zu(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.Ut(Yu(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),zc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qu(e).qt(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=ea();for(const n of e){const e=this.$n(ji.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=ea();const s=Xu(t,n),o=Xu(t,ws.max());return Qu(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.$n(ji.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Hu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Ju(e).get("remoteDocumentGlobalKey").next((e=>(Yr(!!e),e)))}Fn(e,t){return Ju(e).put("remoteDocumentGlobalKey",t)}$n(e,t){if(t){const e=$c(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(vi.min()))return e}return hs.newInvalidDocument(e)}}class Hu extends zu{constructor(e,t){super(),this.Kn=e,this.trackRemovals=t,this.Gn=new Xo((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Es(((e,t)=>pi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Gn.get(i);if(t.push(this.Kn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Gc(this.Kn.M,s);r=r.add(i.path.popLast());const c=Cu(a);n+=c-o.size,t.push(this.Kn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Gc(this.Kn.M,s.convertToNoDocument(vi.min()));t.push(this.Kn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Kn.updateMetadata(e,n)),Ac.waitFor(t)}getFromCache(e,t){return this.Kn.Bn(e,t).next((e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Kn.Un(e,t).next((({documents:e,qn:t})=>(t.forEach(((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Ju(e){return Uc(e,"remoteDocumentGlobal")}function Qu(e){return Uc(e,"remoteDocumentsV14")}function Yu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Xu(e,t){const n=t.documentKey.path.toArray();return[e,zc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Zu(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=pi(n[s],r[s]),i)return i;return i=pi(n.length,r.length),i||(i=pi(n[n.length-2],r[r.length-2]),i||pi(n[n.length-1],r[r.length-1]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.M=e}kt(e,t,n,r){const i=new Cc("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rc,{unique:!0}),e.createObjectStore("documentMutations")}(e),tl(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ac.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),tl(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:vi.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").qt().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rc,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ac.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Qn(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.jn(i))))),n<7&&r>=7&&(s=s.next((()=>this.Wn(i)))),n<8&&r>=8&&(s=s.next((()=>this.zn(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.Hn(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:vc});t.createIndex("collectionPathOverlayIndex",wc,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",_c,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ac});t.createIndex("documentKeyIndex",cc),t.createIndex("collectionGroupIndex",uc)}(e))).next((()=>this.Jn(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:pc}).createIndex("sequenceNumberIndex",mc,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:gc}).createIndex("documentKeyIndex",yc,{unique:!1})}(e)}))),s}jn(e){let t=0;return e.store("remoteDocuments").Wt(((e,n)=>{t+=Cu(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Qn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next((t=>Ac.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next((n=>Ac.forEach(n,(n=>{Yr(n.userId===t.userId);const r=Jc(this.M,n);return Au(e,t.userId,r).next((()=>{}))}))))}))))}Wn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Wt(((n,i)=>{const s=new Ti(n),o=function(e){return[0,Za(e)]}(s);r.push(t.get(o).next((n=>n?Ac.resolve():(n=>t.put({targetId:0,path:Za(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ac.waitFor(r)))}))}zn(e,t){e.createObjectStore("collectionParents",{keyPath:fc});const n=t.store("collectionParents"),r=new vu,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Za(r)})}};return t.store("remoteDocuments").Wt({jt:!0},((e,t)=>{const n=new Ti(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Wt({jt:!0},(([e,t,n],r)=>{const s=nc(t);return i(s.popLast())}))))}Hn(e){const t=e.store("targets");return t.Wt(((e,n)=>{const r=Qc(n),i=Yc(this.M,r);return t.put(i)}))}Jn(e,t){const n=t.store("remoteDocuments"),r=[];return n.Wt(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new ji(Ti.fromString(o.document.name).popFirst(5)):o.noDocument?ji.fromSegments(o.noDocument.path):o.unknownDocument?ji.fromSegments(o.unknownDocument.path):Qr()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Ac.waitFor(r)))}}function tl(e){e.createObjectStore("targetDocuments",{keyPath:hc}).createIndex("documentTargetsIndex",dc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",lc,{unique:!0}),e.createObjectStore("targetGlobal")}const nl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class rl{constructor(e,t,n,r,i,s,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Yn=i,this.window=s,this.document=o,this.Xn=c,this.Zn=u,this.ts=l,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=e=>Promise.resolve(),!rl.vt())throw new ti(ei.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new $u(this,r),this.hs=t+"main",this.M=new Kc(a),this.ls=new Nc(this.hs,this.ts,new el(this.M)),this.fs=new Lu(this.referenceDelegate,this.M),this.ds=function(e){return new Wu(e)}(this.M),this._s=new tu,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===u&&Wr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,nl);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.fs.getHighestSequenceNumber(e)))})).then((e=>{this.es=new hi(e,this.Xn)})).then((()=>{this.ns=!0})).catch((e=>(this.ls&&this.ls.close(),Promise.reject(e))))}Ts(e){return this.cs=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ls.Ot((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget((async()=>{this.started&&await this.gs()})))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>sl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Es(e).next((e=>{e||(this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))))}))})).next((()=>this.As(e))).next((t=>this.isPrimary&&!t?this.Rs(e).next((()=>!1)):!!t&&this.bs(e).next((()=>!0)))))).catch((e=>{if(xc(e))return zr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return zr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Yn.enqueueRetryable((()=>this.cs(e))),this.isPrimary=e}))}Es(e){return il(e).get("owner").next((e=>Ac.resolve(this.Ps(e))))}Vs(e){return sl(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Uc(e,"clientMetadata");return t.qt().next((e=>{const n=this.Ds(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ac.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.ws)for(const t of e)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.gs().then((()=>this.vs())).then((()=>this.Is()))))}Ps(e){return!!e&&e.ownerId===this.clientId}As(e){return this.Zn?Ac.resolve(!0):il(e).get("owner").next((t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.Ps(t)&&this.networkEnabled)return!0;if(!this.Ps(t)){if(!t.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,nl);return!1}}return!(!this.networkEnabled||!this.inForeground)||sl(e).qt().next((e=>void 0===this.Ds(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&zr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Fc(e,hi.A);return this.Rs(t).next((()=>this.Vs(t)))})),this.ls.close(),this.Os()}Ds(e,t){return e.filter((e=>this.Ss(e.updateTimeMs,t)&&!this.xs(e.clientId)))}Fs(){return this.runTransaction("getActiveClients","readonly",(e=>sl(e).qt().next((e=>this.Ds(e,18e5).map((e=>e.clientId))))))}get started(){return this.ns}getMutationQueue(e,t){return Nu.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new _u(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return iu.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(e,t,n){zr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=14===(s=this.ts)?Ec:13===s?Tc:12===s?Ic:11===s?bc:void Qr();var s;let o;return this.ls.runTransaction(e,r,i,(r=>(o=new Fc(r,this.es?this.es.next():hi.A),"readwrite-primary"===t?this.Es(o).next((e=>!!e||this.As(o))).next((t=>{if(!t)throw Wr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))),new ti(ei.FAILED_PRECONDITION,Sc);return n(o)})).next((e=>this.bs(o).next((()=>e)))):this.$s(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}$s(e){return il(e).get("owner").next((e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)&&!this.Ps(e)&&!(this.Zn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ti(ei.FAILED_PRECONDITION,nl)}))}bs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return il(e).put("owner",t)}static vt(){return Nc.vt()}Rs(e){const t=il(e);return t.get("owner").next((e=>this.Ps(e)?(zr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ac.resolve()))}Ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Wr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.gs())))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ss=()=>{this.Ns(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(e){var t;try{const n=null!==(null===(t=this.ws)||void 0===t?void 0:t.getItem(this.Cs(e)));return zr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Wr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(T){Wr("Failed to set zombie client id.",T)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(T){}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function il(e){return Uc(e,"owner")}function sl(e){return Uc(e,"clientMetadata")}function ol(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class al{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return function(e){return ji.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(e,t.path):no(t)?this.Ws(e,t,n):this.zs(e,t,n)}js(e,t){return this.Ls(e,new ji(t)).next((e=>{let t=na();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const r=t.collectionGroup;let i=na();return this.indexManager.getCollectionParents(e,r).next((s=>Ac.forEach(s,(s=>{const o=function(e,t){return new Qs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.zs(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=hs.newInvalidDocument(n),r=r.insert(n,i)),Mo(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{uo(t,n)||(r=r.remove(e))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=oa(),r=oa();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.Xs=!1}initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,n,r){return this.ti(e,t).next((i=>i||this.ei(e,t,r,n))).next((n=>n||this.ni(e,t)))}ti(e,t){return Ac.resolve(null)}ei(e,t,n,r){return Zs(t)||r.isEqual(vi.min())?this.ni(e,t):this.Zs.Ks(e,n).next((i=>{const s=this.si(t,i);return this.ii(t,s,n,r)?this.ni(e,t):($r()<=a["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),co(t)),this.ri(e,s,t,ys(r,-1)))}))}si(e,t){let n=new Es(ho(e));return t.forEach(((t,r)=>{uo(e,r)&&(n=n.add(r))})),n}ii(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,t){return $r()<=a["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",co(t)),this.Zs.Qs(e,t,ws.min())}ri(e,t,n,r){return this.Zs.Qs(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,n,r){this.persistence=e,this.oi=t,this.M=r,this.ui=new bs(pi),this.ai=new Xo((e=>Ns(e)),Ds),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(n)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new al(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ui)))}}function hl(e,t,n,r){return new ll(e,t,n,r)}async function dl(e,t){const n=Zr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.Bs.getAllMutationBatches(e).next((i=>(r=i,n.li(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=oa();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.fi.Ks(e,o).next((e=>({di:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function fl(e,t){const n=Zr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ac.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Yr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.Bs.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}function pl(e){const t=Zr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function ml(e,t){const n=Zr(e),r=t.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.fs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ci.EMPTY_BYTE_STRING,vi.min()).withLastLimboFreeSnapshotVersion(vi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.fs.updateTargetData(e,u))}));let a=ea();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(gl(e,s,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(vi.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ac.waitFor(o).next((()=>s.apply(e))).next((()=>n.fi.Gs(e,a))).next((()=>a))})).then((e=>(n.ui=i,e)))}function gl(e,t,n){let r=oa();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ea();return n.forEach(((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(vi.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function yl(e,t){const n=Zr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function vl(e,t){const n=Zr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.fs.getTargetData(e,t).next((i=>i?(r=i,Ac.resolve(r)):n.fs.allocateTargetId(e).next((i=>(r=new qc(t,i,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(e.targetId,e),n.ai.set(t,e.targetId)),e}))}async function wl(e,t,n){const r=Zr(e),i=r.ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!xc(e))throw e;zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ui=r.ui.remove(t),r.ai.delete(i.target)}function _l(e,t,n){const r=Zr(e);let i=vi.min(),s=oa();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Zr(e),i=r.ai.get(n);return void 0!==i?Ac.resolve(r.ui.get(i)):r.fs.getTargetData(t,n)}(r,e,io(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.oi.Qs(e,t,n?i:vi.min(),n?s:oa()))).next((e=>(Tl(r,lo(t),e),{documents:e,_i:s})))))}function bl(e,t){const n=Zr(e),r=Zr(n.fs),i=n.ui.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function Il(e,t){const n=Zr(e),r=n.ci.get(t)||vi.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.hi.getAllFromCollectionGroup(e,t,ys(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Tl(n,t,e),e)))}function Tl(e,t,n){let r=vi.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ci.set(t,r)}async function El(e,t,n,r){const i=Zr(e);let s=oa(),o=ea();for(const u of n){const e=t.wi(u.metadata.name);u.document&&(s=s.add(e));const n=t.mi(u);n.setReadTime(t.gi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.hi.newChangeBuffer({trackRemovals:!0}),c=await vl(i,function(e){return io(Xs(Ti.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>gl(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.fs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.fs.addMatchingKeys(e,s,c.targetId))).next((()=>i.fi.Gs(e,t))).next((()=>t))))))}async function Sl(e,t,n=oa()){const r=await vl(e,io(Xc(t.bundledQuery))),i=Zr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Ea(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i._s.saveNamedQuery(e,t);const o=r.withResumeToken(Ci.EMPTY_BYTE_STRING,s);return i.ui=i.ui.insert(o.targetId,o),i.fs.updateTargetData(e,o).next((()=>i.fs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.fs.addMatchingKeys(e,n,r.targetId))).next((()=>i._s.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,t){return Ac.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var n;return this.yi.set(t.id,{id:(n=t).id,version:n.version,createTime:Ea(n.createTime)}),Ac.resolve()}getNamedQuery(e,t){return Ac.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,function(e){return{name:e.name,query:Xc(e.bundledQuery),readTime:Ea(e.readTime)}}(t)),Ac.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.overlays=new bs(ji.comparator),this.Ii=new Map}getOverlay(e,t){return Ac.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),Ac.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ii.delete(n)),Ac.resolve()}getOverlaysForCollection(e,t,n){const r=ra(),i=t.length+1,s=new ji(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ac.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new bs(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ra(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ra(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ac.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new jc(t,n));let i=this.Ii.get(t);void 0===i&&(i=oa(),this.Ii.set(t,i)),this.Ii.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.Ti=new Es(Nl.Ei),this.Ai=new Es(Nl.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const n=new Nl(e,t);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Pi(new Nl(e,t))}Vi(e,t){e.forEach((e=>this.removeReference(e,t)))}vi(e){const t=new ji(new Ti([])),n=new Nl(t,e),r=new Nl(t,e+1),i=[];return this.Ai.forEachInRange([n,r],(e=>{this.Pi(e),i.push(e.key)})),i}Si(){this.Ti.forEach((e=>this.Pi(e)))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new ji(new Ti([])),n=new Nl(t,e),r=new Nl(t,e+1);let i=oa();return this.Ai.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Nl(e,0),n=this.Ti.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Nl{constructor(e,t){this.key=e,this.Ci=t}static Ei(e,t){return ji.comparator(e.key,t.key)||pi(e.Ci,t.Ci)}static Ri(e,t){return pi(e.Ci,t.Ci)||ji.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new Es(Nl.Ei)}checkEmpty(e){return Ac.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new Vc(i,t,n,r);this.Bs.push(s);for(const o of r)this.Ni=this.Ni.add(new Nl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ac.resolve(s)}lookupMutationBatch(e,t){return Ac.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Mi(n),i=r<0?0:r;return Ac.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Ac.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(e){return Ac.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Nl(t,0),r=new Nl(t,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([n,r],(e=>{const t=this.ki(e.Ci);i.push(t)})),Ac.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Es(pi);return t.forEach((e=>{const t=new Nl(e,0),r=new Nl(e,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([t,r],(e=>{n=n.add(e.Ci)}))})),Ac.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ji.isDocumentKey(i)||(i=i.child(""));const s=new Nl(new ji(i),0);let o=new Es(pi);return this.Ni.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Ci)),!0)}),s),Ac.resolve(this.Oi(o))}Oi(e){const t=[];return e.forEach((e=>{const n=this.ki(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Yr(0===this.Fi(t.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Ac.forEach(t.mutations,(r=>{const i=new Nl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Ni=n}))}_n(e){}containsKey(e,t){const n=new Nl(t,0),r=this.Ni.firstAfterOrEqual(n);return Ac.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,Ac.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.$i=e,this.docs=new bs(ji.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.$i(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ac.resolve(n?n.document.mutableCopy():hs.newInvalidDocument(t))}getEntries(e,t){let n=ea();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():hs.newInvalidDocument(e))})),Ac.resolve(n)}getAllFromCollection(e,t,n){let r=ea();const i=new ji(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||_s(vs(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Ac.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Qr()}Bi(e,t){return Ac.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new xl(this)}getSize(e){return Ac.resolve(this.size)}}class xl extends zu{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)})),Ac.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.persistence=e,this.Li=new Xo((e=>Ns(e)),Ds),this.lastRemoteSnapshotVersion=vi.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Cl,this.targetCount=0,this.Ki=Pu.gn()}forEachTarget(e,t){return this.Li.forEach(((e,n)=>t(n))),Ac.resolve()}getLastRemoteSnapshotVersion(e){return Ac.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ac.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),Ac.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ui&&(this.Ui=t),Ac.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new Pu(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,Ac.resolve()}updateTargetData(e,t){return this.Tn(t),Ac.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,Ac.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Li.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Li.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ac.waitFor(i).next((()=>r))}getTargetCount(e){return Ac.resolve(this.targetCount)}getTargetData(e,t){const n=this.Li.get(t)||null;return Ac.resolve(n)}addMatchingKeys(e,t,n){return this.qi.bi(t,n),Ac.resolve()}removeMatchingKeys(e,t,n){this.qi.Vi(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ac.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),Ac.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qi.Di(t);return Ac.resolve(n)}containsKey(e,t){return Ac.resolve(this.qi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.Gi={},this.overlays={},this.es=new hi(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Ol(this),this.indexManager=new yu,this.ds=function(e){return new Dl(e)}((e=>this.referenceDelegate.Qi(e))),this.M=new Kc(t),this._s=new kl(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Al,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Gi[e.toKey()];return n||(n=new Rl(t,this.referenceDelegate),this.Gi[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){zr("MemoryPersistence","Starting transaction:",e);const r=new Ll(this.es.next());return this.referenceDelegate.ji(),n(r).next((e=>this.referenceDelegate.Wi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}zi(e,t){return Ac.or(Object.values(this.Gi).map((n=>()=>n.containsKey(e,t))))}}class Ll extends kc{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Hi=new Cl,this.Ji=null}static Yi(e){return new Ml(e)}get Xi(){if(this.Ji)return this.Ji;throw Qr()}addReference(e,t,n){return this.Hi.addReference(n,t),this.Xi.delete(n.toString()),Ac.resolve()}removeReference(e,t,n){return this.Hi.removeReference(n,t),this.Xi.add(n.toString()),Ac.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),Ac.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach((e=>this.Xi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ac.forEach(this.Xi,(n=>{const r=ji.fromPath(n);return this.Zi(e,r).next((e=>{e||t.removeEntry(r,vi.min())}))})).next((()=>(this.Ji=null,t.apply(e))))}updateLimboDocument(e,t){return this.Zi(e,t).next((e=>{e?this.Xi.delete(t.toString()):this.Xi.add(t.toString())}))}Qi(e){return 0}Zi(e,t){return Ac.or([()=>Ac.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(e,t){return`firestore_clients_${e}_${t}`}function Ul(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Vl(e,t){return`firestore_targets_${e}_${t}`}class Bl{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static tr(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ti(r.error.code,r.error.message))),s?new Bl(e,t,r.state,i):(Wr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static tr(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ti(n.error.code,n.error.message))),i?new jl(e,n.state,r):(Wr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ql{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static tr(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=ca();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=Bi(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ql(e,i):(Wr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Kl{constructor(e,t){this.clientId=e,this.onlineState=t}static tr(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Kl(t.clientId,t.onlineState):(Wr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $l{constructor(){this.activeTargetIds=ca()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gl{constructor(e,t,n,r,i){this.window=e,this.Yn=t,this.persistenceKey=n,this.ir=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.rr=this.ur.bind(this),this.ar=new bs(pi),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.hr=Fl(this.persistenceKey,this.ir),this.lr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ar=this.ar.insert(this.ir,new $l),this.dr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this._r=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.wr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.mr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.gr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.rr)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Fs();for(const n of e){if(n===this.ir)continue;const e=this.getItem(Fl(this.persistenceKey,n));if(e){const t=ql.tr(n,e);t&&(this.ar=this.ar.insert(t.clientId,t))}}this.yr();const t=this.storage.getItem(this.mr);if(t){const e=this.pr(t);e&&this.Ir(e)}for(const n of this.cr)this.ur(n);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.lr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Tr(this.ar)}isActiveQueryTarget(e){let t=!1;return this.ar.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Er(e,"pending")}updateMutationState(e,t,n){this.Er(e,t,n),this.Ar(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Vl(this.persistenceKey,e));if(n){const r=jl.tr(e,n);r&&(t=r.state)}}return this.Rr.nr(e),this.yr(),t}removeLocalQueryTarget(e){this.Rr.sr(e),this.yr()}isLocalQueryTarget(e){return this.Rr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Vl(this.persistenceKey,e))}updateQueryState(e,t,n){this.br(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Ar(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Pr(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.rr),this.removeItem(this.hr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return zr("SharedClientState","READ",e,t),t}setItem(e,t){zr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){zr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ur(e){const t=e;if(t.storageArea===this.storage){if(zr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.hr)return void Wr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.dr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Sr(e,null)}{const e=this.Dr(t.key,t.newValue);if(e)return this.Sr(e.clientId,e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Cr(t.key,t.newValue);if(e)return this.Nr(e)}}else if(this.wr.test(t.key)){if(null!==t.newValue){const e=this.kr(t.key,t.newValue);if(e)return this.Mr(e)}}else if(t.key===this.mr){if(null!==t.newValue){const e=this.pr(t.newValue);if(e)return this.Ir(e)}}else if(t.key===this.lr){const e=function(e){let t=hi.A;if(null!=e)try{const n=JSON.parse(e);Yr("number"==typeof n),t=n}catch(e){Wr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==hi.A&&this.sequenceNumberHandler(e)}else if(t.key===this.gr){const e=this.Or(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Fr(e))))}}else this.cr.push(t)}))}}get Rr(){return this.ar.get(this.ir)}yr(){this.setItem(this.hr,this.Rr.er())}Er(e,t,n){const r=new Bl(this.currentUser,e,t,n),i=Ul(this.persistenceKey,this.currentUser,e);this.setItem(i,r.er())}Ar(e){const t=Ul(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Pr(e){const t={clientId:this.ir,onlineState:e};this.storage.setItem(this.mr,JSON.stringify(t))}br(e,t,n){const r=Vl(this.persistenceKey,e),i=new jl(e,t,n);this.setItem(r,i.er())}Vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.gr,t)}vr(e){const t=this.dr.exec(e);return t?t[1]:null}Dr(e,t){const n=this.vr(e);return ql.tr(n,t)}Cr(e,t){const n=this._r.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Bl.tr(new jr(i),r,t)}kr(e,t){const n=this.wr.exec(e),r=Number(n[1]);return jl.tr(r,t)}pr(e){return Kl.tr(e)}Or(e){return JSON.parse(e)}async Nr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);zr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Mr(e){return this.syncEngine.Br(e.targetId,e.state,e.error)}Sr(e,t){const n=t?this.ar.insert(e,t):this.ar.remove(e),r=this.Tr(this.ar),i=this.Tr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Lr(s,o).then((()=>{this.ar=n}))}Ir(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Tr(e){let t=ca();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class zl{constructor(){this.Ur=new $l,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new $l,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{Kr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,i){const s=this.ho(e,t);zr("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(zr("RestConnection","Received: ",e),e)),(t=>{throw Hr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i){return this.co(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Jl[e];return`${this.uo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new Vr;o.listenOnce(Pr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Or.NO_ERROR:const t=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Or.TIMEOUT:zr("Connection",'RPC "'+e+'" timed out'),s(new ti(ei.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ei).indexOf(t)>=0?t:ei.UNKNOWN}(e.status);s(new ti(t,e.message))}else s(new ti(ei.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ti(ei.UNAVAILABLE,"Connection failed."));break;default:Qr()}}finally{zr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Dr(),s=xr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.lo(o.initMessageHeaders,t,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");zr("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,h=!1;const d=new Ql({Jr:e=>{h?zr("Connection","Not sending because WebChannel is closed:",e):(l||(zr("Connection","Opening WebChannel transport."),u.open(),l=!0),zr("Connection","WebChannel sending:",e),u.send(e))},Yr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Ur.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(u,Ur.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.ro())})),f(u,Ur.EventType.ERROR,(e=>{h||(h=!0,Hr("Connection","WebChannel transport errored:",e),d.ro(new ti(ei.UNAVAILABLE,"The operation could not be completed")))})),f(u,Ur.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Yr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){zr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Ho[e];if(void 0!==t)return Yo(t)}(e),n=i.message;void 0===t&&(t=ei.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.ro(new ti(t,n)),u.close()}else zr("Connection","WebChannel received:",n),d.oo(n)}})),f(s,Lr.STAT_EVENT,(e=>{e.stat===Mr.PROXY?zr("Connection","Detected buffering proxy"):e.stat===Mr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.io()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){return"undefined"!=typeof window?window:null}function Zl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e){return new _a(e,!0)}class th{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,n,r,i,s,o,a){this.Yn=e,this.Vo=n,this.vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new th(e,t)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===ei.RESOURCE_EXHAUSTED?(Wr(t.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===ei.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Do===t&&this.Qo(e,n)}),(t=>{e((()=>{const e=new ti(ei.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)}))}))}Qo(e,t){const n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((e=>{n((()=>this.jo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(e){return zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget((()=>this.Do===e?t():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rh extends nh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=Ma(this.M,e),n=function(e){if(!("targetChange"in e))return vi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?vi.min():t.readTime?Ea(t.readTime):vi.min()}(e);return this.listener.zo(t,n)}Ho(e){const t={};t.database=Da(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=xs(r)?{documents:Ba(e,r)}:{query:ja(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Ia(e,t.resumeToken):t.snapshotVersion.compareTo(vi.min())>0&&(n.readTime=ba(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=Ka(this.M,e);n&&(t.labels=n),this.Lo(t)}Jo(e){const t={};t.database=Da(this.M),t.removeTarget=e,this.Lo(t)}}class ih extends nh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(Yr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const t=Va(e.writeResults,e.commitTime),n=Ea(e.commitTime);return this.listener.tu(n,t)}return Yr(!e.writeResults||0===e.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Da(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Fa(this.M,e)))};this.Lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}_o(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So._o(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}terminate(){this.su=!0}}class oh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(e){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Wr(t),this.uu=!1):zr("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr((e=>{n.enqueueAndForget((async()=>{gh(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Zr(e);t.wu.add(4),await uh(t),t.yu.set("Unknown"),t.wu.delete(4),await ch(t)}(this))}))})),this.yu=new oh(n,r)}}async function ch(e){if(gh(e))for(const t of e.mu)await t(!0)}async function uh(e){for(const t of e.mu)await t(!1)}function lh(e,t){const n=Zr(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),mh(n)?ph(n):Ph(n).Mo()&&dh(n,t))}function hh(e,t){const n=Zr(e),r=Ph(n);n._u.delete(t),r.Mo()&&fh(n,t),0===n._u.size&&(r.Mo()?r.$o():gh(n)&&n.yu.set("Unknown"))}function dh(e,t){e.pu.Z(t.targetId),Ph(e).Ho(t)}function fh(e,t){e.pu.Z(t),Ph(e).Jo(t)}function ph(e){e.pu=new ma({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),Ph(e).start(),e.yu.au()}function mh(e){return gh(e)&&!Ph(e).ko()&&e._u.size>0}function gh(e){return 0===Zr(e).wu.size}function yh(e){e.pu=void 0}async function vh(e){e._u.forEach(((t,n)=>{dh(e,t)}))}async function wh(e,t){yh(e),mh(e)?(e.yu.lu(t),ph(e)):e.yu.set("Unknown")}async function _h(e,t,n){if(e.yu.set("Online"),t instanceof fa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await bh(e,n)}else if(t instanceof ha?e.pu.ut(t):t instanceof da?e.pu._t(t):e.pu.ht(t),!n.isEqual(vi.min()))try{const t=await pl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.pu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e._u.get(r);i&&e._u.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),fh(e,t);const r=new qc(n.target,t,1,n.sequenceNumber);dh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){zr("RemoteStore","Failed to raise snapshot:",t),await bh(e,t)}}async function bh(e,t,n){if(!xc(t))throw t;e.wu.add(1),await uh(e),e.yu.set("Offline"),n||(n=()=>pl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await ch(e)}))}function Ih(e,t){return t().catch((n=>bh(e,n,t)))}async function Th(e){const t=Zr(e),n=Lh(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;Eh(t);)try{const e=await yl(t.localStore,r);if(null===e){0===t.du.length&&n.$o();break}r=e.batchId,Sh(t,e)}catch(e){await bh(t,e)}kh(t)&&Ah(t)}function Eh(e){return gh(e)&&e.du.length<10}function Sh(e,t){e.du.push(t);const n=Lh(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function kh(e){return gh(e)&&!Lh(e).ko()&&e.du.length>0}function Ah(e){Lh(e).start()}async function Ch(e){Lh(e).nu()}async function Nh(e){const t=Lh(e);for(const n of e.du)t.Zo(n.mutations)}async function Rh(e,t,n){const r=e.du.shift(),i=Bc.from(r,t,n);await Ih(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Th(e)}async function Dh(e,t){t&&Lh(e).Xo&&await async function(e,t){if(n=t.code,Qo(n)&&n!==ei.ABORTED){const n=e.du.shift();Lh(e).Fo(),await Ih(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Th(e)}var n}(e,t),kh(e)&&Ah(e)}async function xh(e,t){const n=Zr(e);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=gh(n);n.wu.add(3),await uh(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await ch(n)}async function Oh(e,t){const n=Zr(e);t?(n.wu.delete(2),await ch(n)):t||(n.wu.add(2),await uh(n),n.yu.set("Unknown"))}function Ph(e){return e.Iu||(e.Iu=function(e,t,n){const r=Zr(e);return r.iu(),new rh(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Xr:vh.bind(null,e),eo:wh.bind(null,e),zo:_h.bind(null,e)}),e.mu.push((async t=>{t?(e.Iu.Fo(),mh(e)?ph(e):e.yu.set("Unknown")):(await e.Iu.stop(),yh(e))}))),e.Iu}function Lh(e){return e.Tu||(e.Tu=function(e,t,n){const r=Zr(e);return r.iu(),new ih(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:Ch.bind(null,e),eo:Dh.bind(null,e),eu:Nh.bind(null,e),tu:Rh.bind(null,e)}),e.mu.push((async t=>{t?(e.Tu.Fo(),await Th(e)):(await e.Tu.stop(),e.du.length>0&&(zr("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))}))),e.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Mh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ti(ei.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fh(e,t){if(Wr("AsyncQueue",`${t}: ${e}`),xc(e))return new ti(ei.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ji.comparator(t.key,n.key):(e,t)=>ji.comparator(e.key,t.key),this.keyedMap=na(),this.sortedSet=new bs(this.comparator)}static emptySet(e){return new Uh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Uh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Uh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Eu=new bs(ji.comparator)}track(e){const t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):Qr():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Bh{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Bh(e,t,Uh.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Ru=void 0,this.listeners=[]}}class qh{constructor(){this.queries=new Xo((e=>ao(e)),oo),this.onlineState="Unknown",this.bu=new Set}}async function Kh(e,t){const n=Zr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jh),i)try{s.Ru=await n.onListen(r)}catch(e){const n=Fh(e,`Initialization of query '${co(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Pu(n.onlineState),s.Ru&&t.Vu(s.Ru)&&Wh(n)}async function $h(e,t){const n=Zr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gh(e,t){const n=Zr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Vu(i)&&(r=!0);t.Ru=i}}r&&Wh(n)}function zh(e,t,n){const r=Zr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Wh(e){e.bu.forEach((e=>{e.next()}))}class Hh{constructor(e,t,n){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Bh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.ku||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=Bh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.payload=e,this.byteLength=t}Mu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.M=e}wi(e){return Ca(this.M,e)}mi(e){return e.metadata.exists?Pa(this.M,e.document,!1):hs.newNoDocument(this.wi(e.metadata.name),this.gi(e.metadata.readTime))}gi(e){return Ea(e)}}class Yh{constructor(e,t,n){this.Ou=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Xh(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Ti.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new Qh(this.M);for(const r of e)if(r.metadata.queries){const e=n.wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||oa()).add(e);t.set(n,r)}}return t}async complete(){const e=await El(this.localStore,new Qh(this.M),this.documents,this.Ou.id),t=this.$u(this.documents);for(const n of this.queries)await Sl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Xh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.key=e}}class ed{constructor(e){this.key=e}}class td{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=oa(),this.mutatedKeys=oa(),this.Gu=ho(e),this.Qu=new Uh(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new Vh,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=uo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,ii:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new Bh(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1),Xu:s}:{Xu:s}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Vh,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=oa(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new ed(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Zh(n))})),t}ta(e){this.Uu=e._i,this.Ku=oa();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return Bh.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class nd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rd{constructor(e){this.key=e,this.na=!1}}class id{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sa={},this.ia=new Xo((e=>ao(e)),oo),this.ra=new Map,this.oa=new Set,this.ua=new bs(ji.comparator),this.aa=new Map,this.ca=new Cl,this.ha={},this.la=new Map,this.fa=Pu.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function sd(e,t){const n=Pd(e);let r,i;const s=n.ia.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const e=await vl(n.localStore,io(t));n.isPrimaryClient&&lh(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await od(n,t,r,"current"===s)}return i}async function od(e,t,n,r){e._a=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.ii&&(i=await _l(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return wd(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const i=await _l(e.localStore,t,!0),s=new td(t,i._i),o=s.Wu(i.documents),a=la.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);wd(e,n,c.Xu);const u=new nd(t,n,s);return e.ia.set(t,u),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),c.snapshot}async function ad(e,t){const n=Zr(e),r=n.ia.get(t),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter((e=>!oo(e,t)))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),hh(n.remoteStore,r.targetId),yd(n,r.targetId)})).catch(Vu)):(yd(n,r.targetId),await wl(n.localStore,r.targetId,!0))}async function cd(e,t,n){const r=Ld(e);try{const e=await function(e,t){const n=Zr(e),r=yi.now(),i=t.reduce(((e,t)=>e.add(t.key)),oa());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.fi.Ks(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=Fo(e,s.get(e.key));null!=t&&o.push(new jo(e.key,t,ls(t.value.mapValue),xo.exists(!0)))}return n.Bs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ha[e.currentUser.toKey()];r||(r=new bs(pi)),r=r.insert(t,n),e.ha[e.currentUser.toKey()]=r}(r,e.batchId,n),await Id(r,e.changes),await Th(r.remoteStore)}catch(e){const t=Fh(e,"Failed to persist write");n.reject(t)}}async function ud(e,t){const n=Zr(e);try{const e=await ml(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.aa.get(t);r&&(Yr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.na=!0:e.modifiedDocuments.size>0?Yr(r.na):e.removedDocuments.size>0&&(Yr(r.na),r.na=!1))})),await Id(n,e,t)}catch(e){await Vu(e)}}function ld(e,t,n){const r=Zr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ia.forEach(((n,r)=>{const i=r.view.Pu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Zr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Pu(t)&&(r=!0)})),r&&Wh(n)}(r.eventManager,t),e.length&&r.sa.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hd(e,t,n){const r=Zr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.aa.get(t),s=i&&i.key;if(s){let e=new bs(ji.comparator);e=e.insert(s,hs.newNoDocument(s,vi.min()));const n=oa().add(s),i=new ua(vi.min(),new Map,new Es(pi),e,n);await ud(r,i),r.ua=r.ua.remove(s),r.aa.delete(t),bd(r)}else await wl(r.localStore,t,!1).then((()=>yd(r,t,n))).catch(Vu)}async function dd(e,t){const n=Zr(e),r=t.batch.batchId;try{const e=await fl(n.localStore,t);gd(n,r,null),md(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Id(n,e)}catch(e){await Vu(e)}}async function fd(e,t,n){const r=Zr(e);try{const e=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.Bs.lookupMutationBatch(e,t).next((t=>(Yr(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}(r.localStore,t);gd(r,t,n),md(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Id(r,e)}catch(n){await Vu(n)}}async function pd(e,t){const n=Zr(e);gh(n.remoteStore)||zr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Zr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.Bs.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.la.get(e)||[];r.push(t),n.la.set(e,r)}catch(e){const n=Fh(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function md(e,t){(e.la.get(t)||[]).forEach((e=>{e.resolve()})),e.la.delete(t)}function gd(e,t,n){const r=Zr(e);let i=r.ha[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ha[r.currentUser.toKey()]=i}}function yd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ra.get(t))e.ia.delete(r),n&&e.sa.wa(r,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach((t=>{e.ca.containsKey(t)||vd(e,t)}))}function vd(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);null!==n&&(hh(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),bd(e))}function wd(e,t,n){for(const r of n)r instanceof Zh?(e.ca.addReference(r.key,t),_d(e,r)):r instanceof ed?(zr("SyncEngine","Document no longer in limbo: "+r.key),e.ca.removeReference(r.key,t),e.ca.containsKey(r.key)||vd(e,r.key)):Qr()}function _d(e,t){const n=t.key,r=n.path.canonicalString();e.ua.get(n)||e.oa.has(r)||(zr("SyncEngine","New document in limbo: "+n),e.oa.add(r),bd(e))}function bd(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new ji(Ti.fromString(t)),r=e.fa.next();e.aa.set(r,new rd(n)),e.ua=e.ua.insert(n,r),lh(e.remoteStore,new qc(io(Xs(n.path)),r,2,hi.A))}}async function Id(e,t,n){const r=Zr(e),i=[],s=[],o=[];r.ia.isEmpty()||(r.ia.forEach(((e,a)=>{o.push(r._a(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=cl.Ys(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sa.zo(i),await async function(e,t){const n=Zr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ac.forEach(t,(t=>Ac.forEach(t.Hs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ac.forEach(t.Js,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!xc(e))throw e;zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(e,i)}}}(r.localStore,s))}async function Td(e,t){const n=Zr(e);if(!n.currentUser.isEqual(t)){zr("SyncEngine","User change. New user:",t.toKey());const e=await dl(n.localStore,t);n.currentUser=t,function(e,t){e.la.forEach((e=>{e.forEach((e=>{e.reject(new ti(ei.CANCELLED,t))}))})),e.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Id(n,e.di)}}function Ed(e,t){const n=Zr(e),r=n.aa.get(t);if(r&&r.na)return oa().add(r.key);{let e=oa();const r=n.ra.get(t);if(!r)return e;for(const t of r){const r=n.ia.get(t);e=e.unionWith(r.view.ju)}return e}}async function Sd(e,t){const n=Zr(e),r=await _l(n.localStore,t.query,!0),i=t.view.ta(r);return n.isPrimaryClient&&wd(n,t.targetId,i.Xu),i}async function kd(e,t){const n=Zr(e);return Il(n.localStore,t).then((e=>Id(n,e)))}async function Ad(e,t,n,r){const i=Zr(e),s=await function(e,t){const n=Zr(e),r=Zr(n.Bs);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.fn(e,t).next((t=>t?n.fi.Ks(e,t):Ac.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Th(i.remoteStore):"acknowledged"===n||"rejected"===n?(gd(i,t,r||null),md(i,t),function(e,t){Zr(Zr(e).Bs)._n(t)}(i.localStore,t)):Qr(),await Id(i,s)):zr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Cd(e,t){const n=Zr(e);if(Pd(n),Ld(n),!0===t&&!0!==n.da){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Nd(n,e.toArray());n.da=!0,await Oh(n.remoteStore,!0);for(const r of t)lh(n.remoteStore,r)}else if(!1===t&&!1!==n.da){const e=[];let t=Promise.resolve();n.ra.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(yd(n,i),wl(n.localStore,i,!0)))),hh(n.remoteStore,i)})),await t,await Nd(n,e),function(e){const t=Zr(e);t.aa.forEach(((e,n)=>{hh(t.remoteStore,n)})),t.ca.Si(),t.aa=new Map,t.ua=new bs(ji.comparator)}(n),n.da=!1,await Oh(n.remoteStore,!1)}}async function Nd(e,t,n){const r=Zr(e),i=[],s=[];for(const o of t){let e;const t=r.ra.get(o);if(t&&0!==t.length){e=await vl(r.localStore,io(t[0]));for(const e of t){const t=r.ia.get(e),n=await Sd(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await bl(r.localStore,o);e=await vl(r.localStore,t),await od(r,Rd(t),o,!1)}i.push(e)}return r.sa.zo(s),i}function Rd(e){return Ys(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Dd(e){const t=Zr(e);return Zr(Zr(t.localStore).persistence).Fs()}async function xd(e,t,n,r){const i=Zr(e);if(i.da)return void zr("SyncEngine","Ignoring unexpected query state notification.");const s=i.ra.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Il(i.localStore,lo(s[0])),r=ua.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Id(i,e,r);break}case"rejected":await wl(i.localStore,t,!0),yd(i,t,r);break;default:Qr()}}async function Od(e,t,n){const r=Pd(e);if(r.da){for(const e of t){if(r.ra.has(e)){zr("SyncEngine","Adding an already active target "+e);continue}const t=await bl(r.localStore,e),n=await vl(r.localStore,t);await od(r,Rd(t),n.targetId,!1),lh(r.remoteStore,n)}for(const e of n)r.ra.has(e)&&await wl(r.localStore,e,!1).then((()=>{hh(r.remoteStore,e),yd(r,e)})).catch(Vu)}}function Pd(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ud.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ed.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hd.bind(null,t),t.sa.zo=Gh.bind(null,t.eventManager),t.sa.wa=zh.bind(null,t.eventManager),t}function Ld(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fd.bind(null,t),t}function Md(e,t,n){const r=Zr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Zr(e),r=Ea(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n._s.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Xh(r));const i=new Yh(r,e.localStore,t.M);let s=await t.ma();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.ma()}const o=await i.complete();return await Id(e,o.Lu,void 0),await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n._s.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return Hr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Fd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=eh(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return hl(this.persistence,new ul,e.initialUser,this.M)}ya(e){return new Pl(Ml.Yi,this.M)}ga(e){return new zl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ud extends Fd{constructor(e,t,n){super(),this.Ta=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ta.initialize(this,e),await Ld(this.Ta.syncEngine),await Th(this.Ta.remoteStore),await this.persistence.Ts((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Ia(e){return hl(this.persistence,new ul,e.initialUser,this.M)}pa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new qu(t,e.asyncQueue)}ya(e){const t=ol(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ku.withCacheSize(this.cacheSizeBytes):ku.DEFAULT;return new rl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Xl(),Zl(),this.M,this.sharedClientState,!!this.forceOwnership)}ga(e){return new zl}}class Vd extends Ud{constructor(e,t){super(e,t,!1),this.Ta=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ta.syncEngine;this.sharedClientState instanceof Gl&&(this.sharedClientState.syncEngine={$r:Ad.bind(null,t),Br:xd.bind(null,t),Lr:Od.bind(null,t),Fs:Dd.bind(null,t),Fr:kd.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts((async e=>{await Cd(this.Ta.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}ga(e){const t=Xl();if(!Gl.vt(t))throw new ti(ei.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ol(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Gl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Bd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ld(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Td.bind(null,this.syncEngine),await Oh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qh}createDatastore(e){const t=eh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Yl(r));var r;return function(e,t,n,r){return new sh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>ld(this.syncEngine,e,0),s=Hl.vt()?new Hl:new Wl,new ah(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new id(e,t,n,r,i,s);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Zr(e);zr("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await uh(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.Ra=e,this.M=t,this.metadata=new ni,this.buffer=new Uint8Array,this.ba=new TextDecoder("utf-8"),this.Pa().then((e=>{e&&e.Mu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ra.cancel()}async getMetadata(){return this.metadata.promise}async ma(){return await this.getMetadata(),this.Pa()}async Pa(){const e=await this.Va();if(null===e)return null;const t=this.ba.decode(e),n=Number(t);isNaN(n)&&this.va(`length string (${t}) is not valid number`);const r=await this.Sa(n);return new Jh(JSON.parse(r),e.length+n)}Da(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Va(){for(;this.Da()<0;)if(await this.Ca())break;if(0===this.buffer.length)return null;const e=this.Da();e<0&&this.va("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Sa(e){for(;this.buffer.length<e;)await this.Ca()&&this.va("Reached the end of bundle when more is expected.");const t=this.ba.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}va(e){throw this.Ra.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ca(){const e=await this.Ra.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ti(ei.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Zr(e),r=Da(n.M)+"/documents",i={documents:t.map((e=>Aa(n.M,e)))},s=await n._o("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=La(n.M,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Yr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Go(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=ji.fromPath(t);this.mutations.push(new zo(n,this.precondition(n)))})),await async function(e,t){const n=Zr(e),r=Da(n.M)+"/documents",i={writes:t.map((e=>Fa(n.M,e)))};await n.co("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Qr();t=vi.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ti(ei.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?xo.updateTime(t):xo.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(vi.min()))throw new ti(ei.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xo.updateTime(t)}return xo.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.xa=n.maxAttempts,this.No=new th(this.asyncQueue,"transaction_retry")}run(){this.xa-=1,this.Na()}Na(){this.No.Ro((async()=>{const e=new $d(this.datastore),t=this.ka(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Ma(e)}))))})).catch((e=>{this.Ma(e)}))}))}ka(e){try{const t=this.updateFunction(e);return!Ui(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ma(e){this.xa>0&&this.Oa(e)?(this.xa-=1,this.asyncQueue.enqueueAndForget((()=>(this.Na(),Promise.resolve())))):this.deferred.reject(e)}Oa(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Qo(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=fi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Fh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wd(e,t){e.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await dl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Hd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jd(e);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>xh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>xh(t.remoteStore,n))),e.onlineComponents=t}async function Jd(e){return e.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await Wd(e,new Fd)),e.offlineComponents}async function Qd(e){return e.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await Hd(e,new Bd)),e.onlineComponents}function Yd(e){return Jd(e).then((e=>e.persistence))}function Xd(e){return Jd(e).then((e=>e.localStore))}function Zd(e){return Qd(e).then((e=>e.remoteStore))}function ef(e){return Qd(e).then((e=>e.syncEngine))}async function tf(e){const t=await Qd(e),n=t.eventManager;return n.onListen=sd.bind(null,t.syncEngine),n.onUnlisten=ad.bind(null,t.syncEngine),n}function nf(e){return e.asyncQueue.enqueue((async()=>{const t=await Yd(e),n=await Zd(e);return t.setNetworkEnabled(!0),function(e){const t=Zr(e);return t.wu.delete(0),ch(t)}(n)}))}function rf(e){return e.asyncQueue.enqueue((async()=>{const t=await Yd(e),n=await Zd(e);return t.setNetworkEnabled(!1),async function(e){const t=Zr(e);t.wu.add(0),await uh(t),t.yu.set("Offline")}(n)}))}function sf(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.fi.Ls(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ti(ei.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Fh(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Xd(e),t,n))),n.promise}function of(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qd({next:s=>{t.enqueueAndForget((()=>$h(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ti(ei.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Hh(Xs(n.path),s,{includeMetadataChanges:!0,ku:!0});return Kh(e,o)}(await tf(e),e.asyncQueue,t,n,r))),r.promise}function af(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await _l(e,t,!0),i=new td(t,r._i),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Fh(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Xd(e),t,n))),n.promise}function cf(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qd({next:n=>{t.enqueueAndForget((()=>$h(e,o))),n.fromCache&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Hh(n,s,{includeMetadataChanges:!0,ku:!0});return Kh(e,o)}(await tf(e),e.asyncQueue,t,n,r))),r.promise}function uf(e,t){const n=new qd(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).bu.add(t),t.next()}(await tf(e),n))),()=>{n.Aa(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).bu.delete(t)}(await tf(e),n)))}}function lf(e,t,n){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>{const i=await function(e){return Qd(e).then((e=>e.datastore))}(e);new Gd(e.asyncQueue,i,n,t,r).run()})),r.promise}function hf(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Kd(e,t)}(function(e,t){if(e instanceof Uint8Array)return jd(e,t);if(e instanceof ArrayBuffer)return jd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,eh(t));e.asyncQueue.enqueueAndForget((async()=>{Md(await ef(e),i,r)}))}function df(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Zr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n._s.getNamedQuery(e,t)))}(await Xd(e),t)))}const ff=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e,t,n){if(!n)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mf(e,t,n,r){if(!0===t&&!0===r)throw new ti(ei.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function gf(e){if(!ji.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yf(e){if(ji.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Qr()}function wf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ti(ei.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(e);throw new ti(ei.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function _f(e,t){if(t<=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ti(ei.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ti(ei.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bf({}),this._settingsFrozen=!1,e instanceof Fi?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ti(ei.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(e.options.projectId)}(e))}get app(){if(!this._app)throw new ti(ei.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ii;switch(e.type){case"gapi":const t=e.client;return Yr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ci(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ti(ei.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ff.get(e);t&&(zr("ComponentProvider","Removing Datastore"),ff.delete(e),t.terminate())}(this),Promise.resolve()}}function Tf(e,t,n,r={}){var i;const s=(e=wf(e,If))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=jr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ti(ei.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(s)}e._authCredentials=new si(new ri(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ef(this.firestore,e,this._key)}}class Sf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Sf(this.firestore,e,this._query)}}class kf extends Sf{constructor(e,t,n){super(e,t,Xs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ef(this.firestore,null,new ji(e))}withConverter(e){return new kf(this.firestore,e,this._path)}}function Af(e,t,...n){if(e=(0,c.m9)(e),pf("collection","path",t),e instanceof If){const r=Ti.fromString(t,...n);return yf(r),new kf(e,null,r)}{if(!(e instanceof Ef||e instanceof kf))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return yf(r),new kf(e.firestore,null,r)}}function Cf(e,t){if(e=wf(e,If),pf("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Sf(e,null,function(e){return new Qs(Ti.emptyPath(),e)}(t))}function Nf(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=fi.R()),pf("doc","path",t),e instanceof If){const r=Ti.fromString(t,...n);return gf(r),new Ef(e,null,new ji(r))}{if(!(e instanceof Ef||e instanceof kf))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return gf(r),new Ef(e.firestore,e instanceof kf?e.converter:null,new ji(r))}}function Rf(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Ef||e instanceof kf)&&(t instanceof Ef||t instanceof kf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Df(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Sf&&t instanceof Sf&&e.firestore===t.firestore&&oo(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xf{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new th(this,"async_queue_retry"),this.Qa=()=>{const e=Zl();e&&zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};const e=Zl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=Zl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise((()=>{}));const t=new ni;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$a.push(e),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(T){if(!xc(T))throw T;zr("AsyncQueue","Operation failed with retryable error: "+T)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(e){const t=this.Fa.then((()=>(this.qa=!0,e().catch((e=>{this.Ua=e,this.qa=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Wr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.qa=!1,e))))));return this.Fa=t,t}enqueueAfterDelay(e,t,n){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const r=Mh.createAndSchedule(this,e,t,n,(e=>this.Ha(e)));return this.La.push(r),r}ja(){this.Ua&&Qr()}verifyOperationInProgress(){}async Ja(){let e;do{e=this.Fa,await e}while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then((()=>{this.La.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.La)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ja()}))}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}}function Of(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Pf{constructor(){this._progressObserver={},this._taskCompletionResolver=new ni,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=-1;class Mf extends If{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new xf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Uf(this),this._firestoreClient.terminate()}}function Ff(e){return e._firestoreClient||Uf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Uf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Mi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new zd(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Vf(e,t){Hf(e=wf(e,Mf));const n=Ff(e),r=e._freezeSettings(),i=new Bd;return jf(n,i,new Ud(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Bf(e){Hf(e=wf(e,Mf));const t=Ff(e),n=e._freezeSettings(),r=new Bd;return jf(t,r,new Vd(r,n.cacheSizeBytes))}function jf(e,t,n){const r=new ni;return e.asyncQueue.enqueue((async()=>{try{await Wd(e,n),await Hd(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===ei.FAILED_PRECONDITION||e.code===ei.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function qf(e){if(e._initialized&&!e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ni;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Nc.vt())return Promise.resolve();const t=e+"main";await Nc.delete(t)}(ol(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Kf(e){return function(e){const t=new ni;return e.asyncQueue.enqueueAndForget((async()=>pd(await ef(e),t))),t.promise}(Ff(e=wf(e,Mf)))}function $f(e){return nf(Ff(e=wf(e,Mf)))}function Gf(e){return rf(Ff(e=wf(e,Mf)))}function zf(e,t){const n=Ff(e=wf(e,Mf)),r=new Pf;return hf(n,e._databaseId,t,r),r}function Wf(e,t){return df(Ff(e=wf(e,Mf)),t).then((t=>t?new Sf(e,null,t.query):null))}function Hf(e){if(e._initialized||e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ti(ei.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qf(Ci.fromBase64String(e))}catch(e){throw new ti(ei.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Qf(Ci.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ti(ei.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ti(ei.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pi(this._lat,e._lat)||pi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=/^__.*__$/;class ep{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new jo(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bo(e,this.data,t,this.fieldTransforms)}}class tp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new jo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function np(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qr()}}class rp{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.rc(e),r}oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Tp(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(0===e.length)throw this.ac("Document fields must not be empty");if(np(this.ec)&&Zf.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class ip{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||eh(e)}lc(e,t,n,r=!1){return new rp({ec:e,methodName:t,hc:n,path:Si.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function sp(e){const t=e._freezeSettings(),n=eh(e._databaseId);return new ip(e._databaseId,!!t.ignoreUndefinedProperties,n)}function op(e,t,n,r,i,s={}){const o=e.lc(s.merge||s.mergeFields?2:0,t,n,i);wp("Data must be an object, but it was:",o,r);const a=yp(r,o);let c,u;if(s.merge)c=new ki(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=_p(t,r,n);if(!o.contains(i))throw new ti(ei.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ep(e,i)||e.push(i)}c=new ki(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new ep(new us(a),c,u)}class ap extends Yf{_toFieldTransform(e){if(2!==e.ec)throw 1===e.ec?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ap}}function cp(e,t,n){return new rp({ec:3,hc:t.settings.hc,methodName:e._methodName,ic:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class up extends Yf{_toFieldTransform(e){return new No(e.path,new bo)}isEqual(e){return e instanceof up}}class lp extends Yf{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=cp(this,e,!0),n=this.fc.map((e=>gp(e,t))),r=new Io(n);return new No(e.path,r)}isEqual(e){return this===e}}class hp extends Yf{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=cp(this,e,!0),n=this.fc.map((e=>gp(e,t))),r=new Eo(n);return new No(e.path,r)}isEqual(e){return this===e}}class dp extends Yf{constructor(e,t){super(e),this.dc=t}_toFieldTransform(e){const t=new ko(e.M,go(e.M,this.dc));return new No(e.path,t)}isEqual(e){return this===e}}function fp(e,t,n,r){const i=e.lc(1,t,n);wp("Data must be an object, but it was:",i,r);const s=[],o=us.empty();_i(r,((e,r)=>{const a=Ip(t,e,n);r=(0,c.m9)(r);const u=i.oc(a);if(r instanceof ap)s.push(a);else{const e=gp(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new ki(s);return new tp(o,a,i.fieldTransforms)}function pp(e,t,n,r,i,s){const o=e.lc(1,t,n),a=[_p(t,r,n)],u=[i];if(s.length%2!=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(_p(t,s[c])),u.push(s[c+1]);const l=[],h=us.empty();for(let f=a.length-1;f>=0;--f)if(!Ep(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.oc(e);if(t instanceof ap)l.push(e);else{const r=gp(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new ki(l);return new tp(h,d,o.fieldTransforms)}function mp(e,t,n,r=!1){return gp(n,e.lc(r?4:3,t))}function gp(e,t){if(vp(e=(0,c.m9)(e)))return wp("Unsupported field value:",t,e),yp(e,t);if(e instanceof Yf)return function(e,t){if(!np(t.ec))throw t.ac(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ac(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&4!==t.ec)throw t.ac("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=gp(i,t.uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return go(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=yi.fromDate(e);return{timestampValue:ba(t.M,n)}}if(e instanceof yi){const n=new yi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ba(t.M,n)}}if(e instanceof Xf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Qf)return{bytesValue:Ia(t.M,e._byteString)};if(e instanceof Ef){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sa(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ac(`Unsupported field value: ${vf(e)}`)}(e,t)}function yp(e,t){const n={};return bi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_i(e,((e,r)=>{const i=gp(r,t.sc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function vp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof yi||e instanceof Xf||e instanceof Qf||e instanceof Ef||e instanceof Yf)}function wp(e,t,n){if(!vp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=vf(n);throw"an object"===r?t.ac(e+" a custom object"):t.ac(e+" "+r)}}function _p(e,t,n){if((t=(0,c.m9)(t))instanceof Jf)return t._internalPath;if("string"==typeof t)return Ip(e,t);throw Tp("Field path arguments must be of type string or ",e,!1,void 0,n)}const bp=new RegExp("[~\\*/\\[\\]]");function Ip(e,t,n){if(t.search(bp)>=0)throw Tp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jf(...t.split("."))._internalPath}catch(r){throw Tp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Tp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ti(ei.INVALID_ARGUMENT,a+e+c)}function Ep(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ef(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new kp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ap("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class kp extends Sp{data(){return super.data()}}function Ap(e,t){return"string"==typeof t?Ip(e,t):t instanceof Jf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Np extends Sp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ap("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Rp extends Np{data(e={}){return super.data(e)}}class Dp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Cp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Rp(this._firestore,this._userDataWriter,n.key,n,new Cp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ti(ei.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Rp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Cp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Rp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Cp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:xp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qr()}}function Op(e,t){return e instanceof Np&&t instanceof Np?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Dp&&t instanceof Dp&&e._firestore===t._firestore&&Df(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ti(ei.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}function Mp(e,...t){for(const n of t)e=n._apply(e);return e}class Fp extends Lp{constructor(e,t,n){super(),this._c=e,this.wc=t,this.mc=n,this.type="where"}_apply(e){const t=sp(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Xp(o,s);const t=[];for(const n of o)t.push(Yp(r,e,n));a={arrayValue:{values:t}}}else a=Yp(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Xp(o,s),a=mp(n,t,o,"in"===s||"not-in"===s);const c=Ms.create(i,s,a);return function(e,t){if(t.S()){const n=to(e);if(null!==n&&!n.isEqual(t.field))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=eo(e);null!==r&&Zp(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this._c,this.wc,this.mc);return new Sf(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Qs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Up(e,t,n){const r=t,i=Ap("where",e);return new Fp(i,r,n)}class Vp extends Lp{constructor(e,t){super(),this._c=e,this.gc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new zs(t,n);return function(e,t){if(null===eo(e)){const n=to(e);null!==n&&Zp(e,n,t.field)}}(e,r),r}(e._query,this._c,this.gc);return new Sf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Qs(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Bp(e,t="asc"){const n=t,r=Ap("orderBy",e);return new Vp(r,n)}class jp extends Lp{constructor(e,t,n){super(),this.type=e,this.yc=t,this.Ic=n}_apply(e){return new Sf(e.firestore,e.converter,so(e._query,this.yc,this.Ic))}}function qp(e){return _f("limit",e),new jp("limit",e,"F")}function Kp(e){return _f("limitToLast",e),new jp("limitToLast",e,"L")}class $p extends Lp{constructor(e,t,n){super(),this.type=e,this.Tc=t,this.Ec=n}_apply(e){const t=Qp(e,this.type,this.Tc,this.Ec);return new Sf(e.firestore,e.converter,function(e,t){return new Qs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Gp(...e){return new $p("startAt",e,!0)}function zp(...e){return new $p("startAfter",e,!1)}class Wp extends Lp{constructor(e,t,n){super(),this.type=e,this.Tc=t,this.Ec=n}_apply(e){const t=Qp(e,this.type,this.Tc,this.Ec);return new Sf(e.firestore,e.converter,function(e,t){return new Qs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Hp(...e){return new Wp("endBefore",e,!1)}function Jp(...e){return new Wp("endAt",e,!0)}function Qp(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Sp)return function(e,t,n,r,i){if(!r)throw new ti(ei.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ro(e))if(o.field.isKeyField())s.push(Yi(t,r.key));else{const e=r.data.field(o.field);if(Oi(e))throw new ti(ei.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Gs(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=sp(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ti(ei.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ti(ei.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!no(e)&&-1!==s.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ti.fromString(s));if(!ji.isDocumentKey(n))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ji(n);a.push(Yi(t,i))}else{const e=mp(n,r,s);a.push(e)}}return new Gs(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Yp(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!no(t)&&-1!==n.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ti.fromString(n));if(!ji.isDocumentKey(r))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yi(e,new ji(r))}if(n instanceof Ef)return Yi(e,n._key);throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vf(n)}.`)}function Xp(e,t){if(!Array.isArray(e)||0===e.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Zp(e,t,n){if(!n.isEqual(t))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{convertValue(e,t="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Di(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Qr()}}convertObject(e,t){const n={};return _i(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Xf(Di(e.latitude),Di(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Pi(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new yi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ti.fromString(e);Yr(Xa(n));const r=new Fi(n.get(1),n.get(3)),i=new ji(n.popFirst(5));return r.isEqual(t)||Wr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class rm extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ef(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=sp(e)}set(e,t,n){this._verifyNotCommitted();const r=sm(e,this._firestore),i=nm(r.converter,t,n),s=op(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,xo.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=sm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Jf?pp(this._dataReader,"WriteBatch.update",i._key,t,n,r):fp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,xo.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=sm(e,this._firestore);return this._mutations=this._mutations.concat(new Go(t._key,xo.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ti(ei.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function sm(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new ti(ei.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(e){e=wf(e,Ef);const t=wf(e.firestore,Mf);return of(Ff(t),e._key).then((n=>_m(t,e,n)))}class am extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ef(this.firestore,null,t)}}function cm(e){e=wf(e,Ef);const t=wf(e.firestore,Mf),n=Ff(t),r=new am(t);return sf(n,e._key).then((n=>new Np(t,r,e._key,n,new Cp(null!==n&&n.hasLocalMutations,!0),e.converter)))}function um(e){e=wf(e,Ef);const t=wf(e.firestore,Mf);return of(Ff(t),e._key,{source:"server"}).then((n=>_m(t,e,n)))}function lm(e){e=wf(e,Sf);const t=wf(e.firestore,Mf),n=Ff(t),r=new am(t);return Pp(e._query),cf(n,e._query).then((n=>new Dp(t,r,e,n)))}function hm(e){e=wf(e,Sf);const t=wf(e.firestore,Mf),n=Ff(t),r=new am(t);return af(n,e._query).then((n=>new Dp(t,r,e,n)))}function dm(e){e=wf(e,Sf);const t=wf(e.firestore,Mf),n=Ff(t),r=new am(t);return cf(n,e._query,{source:"server"}).then((n=>new Dp(t,r,e,n)))}function fm(e,t,n){e=wf(e,Ef);const r=wf(e.firestore,Mf),i=nm(e.converter,t,n);return wm(r,[op(sp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,xo.none())])}function pm(e,t,n,...r){e=wf(e,Ef);const i=wf(e.firestore,Mf),s=sp(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Jf?pp(s,"updateDoc",e._key,t,n,r):fp(s,"updateDoc",e._key,t),wm(i,[o.toMutation(e._key,xo.exists(!0))])}function mm(e){return wm(wf(e.firestore,Mf),[new Go(e._key,xo.none())])}function gm(e,t){const n=wf(e.firestore,Mf),r=Nf(e),i=nm(e.converter,t);return wm(n,[op(sp(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,xo.exists(!1))]).then((()=>r))}function ym(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Of(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Of(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Ef)l=wf(e.firestore,Mf),h=Xs(e._key.path),u={next:n=>{t[o]&&t[o](_m(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=wf(e,Sf);l=wf(n.firestore,Mf),h=n._query;const r=new am(l);u={next:e=>{t[o]&&t[o](new Dp(l,r,n,e))},error:t[o+1],complete:t[o+2]},Pp(e._query)}return function(e,t,n,r){const i=new qd(r),s=new Hh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Kh(await tf(e),s))),()=>{i.Aa(),e.asyncQueue.enqueueAndForget((async()=>$h(await tf(e),s)))}}(Ff(l),h,a,u)}function vm(e,t){return uf(Ff(e=wf(e,Mf)),Of(t)?t:{next:t})}function wm(e,t){return function(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>cd(await ef(e),t,n))),n.promise}(Ff(e),t)}function _m(e,t,n){const r=n.docs.get(t._key),i=new am(e);return new Np(e,i,t._key,r,new Cp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=sp(e)}get(e){const t=sm(e,this._firestore),n=new rm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Qr();const r=e[0];if(r.isFoundDocument())return new Sp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Sp(this._firestore,n,t._key,null,t.converter);throw Qr()}))}set(e,t,n){const r=sm(e,this._firestore),i=nm(r.converter,t,n),s=op(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=sm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Jf?pp(this._dataReader,"Transaction.update",i._key,t,n,r):fp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=sm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=sm(e,this._firestore),n=new am(this._firestore);return super.get(e).then((e=>new Np(this._firestore,n,t._key,e._document,new Cp(!1,!1),t.converter)))}}function Im(e,t,n){e=wf(e,Mf);const r=Object.assign(Object.assign({},em),n);return function(e){if(e.maxAttempts<1)throw new ti(ei.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),lf(Ff(e),(n=>t(new bm(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(){return new ap("deleteField")}function Em(){return new up("serverTimestamp")}function Sm(...e){return new lp("arrayUnion",e)}function km(...e){return new hp("arrayRemove",e)}function Am(e){return new dp("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){qr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Mf(r,new oi(e.getProvider("auth-internal")),new li(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,s.registerVersion)(Br,"3.4.9",e),(0,s.registerVersion)(Br,"3.4.9","esm2017")}();const Cm="@firebase/firestore-compat",Nm="0.1.18";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rm(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ti("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){if("undefined"===typeof Uint8Array)throw new ti("unimplemented","Uint8Arrays are not available in this environment.")}function xm(){if(!Ai())throw new ti("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Om{constructor(e){this._delegate=e}static fromBase64String(e){return xm(),new Om(Qf.fromBase64String(e))}static fromUint8Array(e){return Dm(),new Om(Qf.fromUint8Array(e))}toBase64(){return xm(),this._delegate.toBase64()}toUint8Array(){return Dm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(e){return Lm(e,["next","error","complete"])}function Lm(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{enableIndexedDbPersistence(e,t){return Vf(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Bf(e._delegate)}clearIndexedDbPersistence(e){return qf(e._delegate)}}class Fm{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Hr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Tf(this._delegate,e,t,n)}enableNetwork(){return $f(this._delegate)}disableNetwork(){return Gf(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,mf("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Kf(this._delegate)}onSnapshotsInSync(e){return vm(this._delegate,e)}get app(){if(!this._appCompat)throw new ti("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Xm(this,Af(this._delegate,e))}catch(t){throw $m(t,"collection()","Firestore.collection()")}}doc(e){try{return new Km(this,Nf(this._delegate,e))}catch(t){throw $m(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Jm(this,Cf(this._delegate,e))}catch(t){throw $m(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Im(this._delegate,(t=>e(new Bm(this,t))))}batch(){return Ff(this._delegate),new jm(new im(this._delegate,(e=>wm(this._delegate,e))))}loadBundle(e){return zf(this._delegate,e)}namedQuery(e){return Wf(this._delegate,e).then((e=>e?new Jm(this,e):null))}}class Um extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Om(new Qf(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Km.forKey(t,this.firestore,null)}}function Vm(e){Gr(e)}class Bm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Um(e)}get(e){const t=Zm(e);return this._delegate.get(t).then((e=>new Wm(this._firestore,new Np(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Zm(e);return n?(Rm("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Zm(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Zm(e);return this._delegate.delete(t),this}}class jm{constructor(e){this._delegate=e}set(e,t,n){const r=Zm(e);return n?(Rm("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Zm(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Zm(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class qm{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Rp(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Hm(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=qm.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new qm(e,new Um(e),t),r.set(t,i)),i}}qm.INSTANCES=new WeakMap;class Km{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Um(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ti("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Km(t,new Ef(t._delegate,n,new ji(e)))}static forKey(e,t,n){return new Km(t,new Ef(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Xm(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Xm(this.firestore,Af(this._delegate,e))}catch(t){throw $m(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Ef&&Rf(this._delegate,e)}set(e,t){t=Rm("DocumentReference.set",t);try{return t?fm(this._delegate,e,t):fm(this._delegate,e)}catch(n){throw $m(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?pm(this._delegate,e):pm(this._delegate,e,t,...n)}catch(r){throw $m(r,"updateDoc()","DocumentReference.update()")}}delete(){return mm(this._delegate)}onSnapshot(...e){const t=Gm(e),n=zm(e,(e=>new Wm(this.firestore,new Np(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return ym(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?cm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?um(this._delegate):om(this._delegate),t.then((e=>new Wm(this.firestore,new Np(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Km(this.firestore,e?this._delegate.withConverter(qm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $m(e,t,n){return e.message=e.message.replace(t,n),e}function Gm(e){for(const t of e)if("object"===typeof t&&!Pm(t))return t;return{}}function zm(e,t){var n,r;let i;return i=Pm(e[0])?e[0]:Pm(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Wm{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Km(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Op(this._delegate,e._delegate)}}class Hm extends Wm{data(e){const t=this._delegate.data(e);return Xr(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Jm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Um(e)}where(e,t,n){try{return new Jm(this.firestore,Mp(this._delegate,Up(e,t,n)))}catch(r){throw $m(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Jm(this.firestore,Mp(this._delegate,Bp(e,t)))}catch(n){throw $m(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Jm(this.firestore,Mp(this._delegate,qp(e)))}catch(t){throw $m(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Jm(this.firestore,Mp(this._delegate,Kp(e)))}catch(t){throw $m(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Jm(this.firestore,Mp(this._delegate,Gp(...e)))}catch(t){throw $m(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Jm(this.firestore,Mp(this._delegate,zp(...e)))}catch(t){throw $m(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Jm(this.firestore,Mp(this._delegate,Hp(...e)))}catch(t){throw $m(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Jm(this.firestore,Mp(this._delegate,Jp(...e)))}catch(t){throw $m(t,"endAt()","Query.endAt()")}}isEqual(e){return Df(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?hm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?dm(this._delegate):lm(this._delegate),t.then((e=>new Ym(this.firestore,new Dp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Gm(e),n=zm(e,(e=>new Ym(this.firestore,new Dp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return ym(this._delegate,t,n)}withConverter(e){return new Jm(this.firestore,e?this._delegate.withConverter(qm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Qm{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Hm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ym{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Jm(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Hm(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Qm(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Hm(this._firestore,n))}))}isEqual(e){return Op(this._delegate,e._delegate)}}class Xm extends Jm{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Km(this.firestore,e):null}doc(e){try{return new Km(this.firestore,void 0===e?Nf(this._delegate):Nf(this._delegate,e))}catch(t){throw $m(t,"doc()","CollectionReference.doc()")}}add(e){return gm(this._delegate,e).then((e=>new Km(this.firestore,e)))}isEqual(e){return Rf(this._delegate,e._delegate)}withConverter(e){return new Xm(this.firestore,e?this._delegate.withConverter(qm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Zm(e){return wf(e,Ef)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(...e){this._delegate=new Jf(...e)}static documentId(){return new eg(Si.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Jf&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this._delegate=e}static serverTimestamp(){const e=Em();return e._methodName="FieldValue.serverTimestamp",new tg(e)}static delete(){const e=Tm();return e._methodName="FieldValue.delete",new tg(e)}static arrayUnion(...e){const t=Sm(...e);return t._methodName="FieldValue.arrayUnion",new tg(t)}static arrayRemove(...e){const t=km(...e);return t._methodName="FieldValue.arrayRemove",new tg(t)}static increment(e){const t=Am(e);return t._methodName="FieldValue.increment",new tg(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={Firestore:Fm,GeoPoint:Xf,Timestamp:yi,Blob:Om,Transaction:Bm,WriteBatch:jm,DocumentReference:Km,DocumentSnapshot:Wm,Query:Jm,QueryDocumentSnapshot:Hm,QuerySnapshot:Ym,CollectionReference:Xm,FieldPath:eg,FieldValue:tg,setLogLevel:Vm,CACHE_SIZE_UNLIMITED:Lf};function rg(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},ng)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(e){rg(e,((e,t)=>new Fm(e,t,new Mm))),e.registerVersion(Cm,Nm)}ig(i.Z)},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(223),i=n(7142),s=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.25";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},7077:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return _e},getApps:function(){return be},initializeApp:function(){return we},onLog:function(){return Ee},registerVersion:function(){return Te},setLogLevel:function(){return Se}});var r=n(7142),i=n(5168),s=n(223);n(6699),n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),I(h.get(this))}:function(...t){return I(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function b(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],A=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}w((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const D="@firebase/app",x="0.7.24",O=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",K="@firebase/functions",$="@firebase/functions-compat",G="@firebase/installations",z="@firebase/installations-compat",W="@firebase/messaging",H="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.8.1",se="[DEFAULT]",oe={[D]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[K]:"fire-fn",[$]:"fire-fn-compat",[G]:"fire-iid",[z]:"fire-iid-compat",[W]:"fire-fcm",[H]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function we(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw ge.create("bad-app-name",{appName:String(i)});const o=ae.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw ge.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ce.values())a.addComponent(r);const c=new ye(e,n,a);return ae.set(i,c),c}function _e(e=se){const t=ae.get(e);if(!t)throw ge.create("no-app",{appName:e});return t}function be(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Te(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ae=1,Ce="firebase-heartbeat-store";let Ne=null;function Re(){return Ne||(Ne=E(ke,Ae,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ge.create("storage-open",{originalErrorMessage:e.message})}))),Ne}async function De(e){try{const t=await Re();return t.transaction(Ce).objectStore(Ce).get(Oe(e))}catch(t){throw ge.create("storage-get",{originalErrorMessage:t.message})}}async function xe(e,t){try{const n=await Re(),r=n.transaction(Ce,"readwrite"),i=r.objectStore(Ce);return await i.put(t,Oe(e)),r.done}catch(n){throw ge.create("storage-set",{originalErrorMessage:n.message})}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ue(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ue(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await De(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){he(new r.wA("platform-logger",(e=>new N(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Te(D,x,e),Te(D,x,"esm2017"),Te("fire-js","")}je("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.524109f4.js.map