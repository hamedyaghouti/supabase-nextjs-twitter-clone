
		import('node:buffer').then(({ Buffer }) => {
			globalThis.Buffer = Buffer;
		})
		.catch(() => null);

		const __ENV_ALS_PROMISE__ = import('node:async_hooks').then(({ AsyncLocalStorage }) => {
			globalThis.AsyncLocalStorage = AsyncLocalStorage;

			const envAsyncLocalStorage = new AsyncLocalStorage();

			globalThis.process = {
				env: new Proxy(
					{},
					{
						ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
						getOwnPropertyDescriptor: (_, ...args) =>
							Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
						get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
						set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value),
				}),
			};
			return envAsyncLocalStorage;
		})
		.catch(() => null);
	
var ee=Object.create;var U=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var se=Object.getOwnPropertyNames;var ae=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty;var O=(t,e)=>()=>(t&&(e=t(t=0)),e);var I=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ne=(t,e,a,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of se(e))!re.call(t,r)&&r!==a&&U(t,r,{get:()=>e[r],enumerable:!(s=te(e,r))||s.enumerable});return t};var F=(t,e,a)=>(a=t!=null?ee(ae(t)):{},ne(e||!t||!t.__esModule?U(a,"default",{value:t,enumerable:!0}):a,t));var p,u=O(()=>{p={version:3,routes:{none:[{src:"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$",headers:{Location:"/$1"},status:308,continue:!0},{src:"/_next/__private/trace",dest:"/404",status:404,continue:!0},{src:"/404/?",status:404,continue:!0,missing:[{type:"header",key:"x-prerender-revalidate"}]},{src:"/500",status:500,continue:!0},{src:"^/_next/data/qry1cwgYutBN5S5WsxfYD/(.*).json",dest:"/$1",override:!0,continue:!0,has:[{type:"header",key:"x-nextjs-data"}]},{src:"^/index(?:/)?",has:[{type:"header",key:"x-nextjs-data"}],dest:"/",override:!0,continue:!0},{continue:!0,src:"^/.*$",missing:[{type:"header",key:"x-prerender-revalidate",value:"4b408978f41767ed4b279934fe4fff73"}],middlewarePath:"middleware",middlewareRawSrc:["/:path*"],override:!0},{src:"^/$",has:[{type:"header",key:"x-nextjs-data"}],dest:"/_next/data/qry1cwgYutBN5S5WsxfYD/index.json",continue:!0,override:!0},{src:"^/((?!_next/)(?:.*[^/]|.*))/?$",has:[{type:"header",key:"x-nextjs-data"}],dest:"/_next/data/qry1cwgYutBN5S5WsxfYD/$1.json",continue:!0,override:!0},{src:"^/$",has:[{type:"header",key:"next-router-prefetch"}],dest:"/index.prefetch.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url"},continue:!0,override:!0},{src:"^/((?!.+\\.rsc).+?)(?:/)?$",has:[{type:"header",key:"next-router-prefetch"}],dest:"/$1.prefetch.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url"},continue:!0,override:!0},{src:"^/",has:[{type:"header",key:"rsc"}],dest:"/index.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url"},continue:!0,override:!0},{src:"^/((?!.+\\.rsc).+?)(?:/)?$",has:[{type:"header",key:"rsc"}],dest:"/$1.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url"},continue:!0,override:!0}],filesystem:[{src:"^/_next/data/qry1cwgYutBN5S5WsxfYD/(.*).json",dest:"/$1",continue:!0,has:[{type:"header",key:"x-nextjs-data"}]},{src:"^/index(?:/)?",has:[{type:"header",key:"x-nextjs-data"}],dest:"/",continue:!0},{src:"/index.prefetch.rsc",dest:"/index.rsc",has:[{type:"header",key:"next-router-prefetch"}],continue:!0,override:!0},{src:"^/(.+?).prefetch.rsc(?:/)?$",dest:"/$1.rsc",has:[{type:"header",key:"next-router-prefetch"}],continue:!0,override:!0}],miss:[{src:"/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+",status:404,check:!0,dest:"$0"}],rewrite:[{src:"^/$",has:[{type:"header",key:"x-nextjs-data"}],dest:"/_next/data/qry1cwgYutBN5S5WsxfYD/index.json",continue:!0},{src:"^/((?!_next/)(?:.*[^/]|.*))/?$",has:[{type:"header",key:"x-nextjs-data"}],dest:"/_next/data/qry1cwgYutBN5S5WsxfYD/$1.json",continue:!0},{src:"^/_next/data/qry1cwgYutBN5S5WsxfYD/(.*).json",headers:{"x-nextjs-matched-path":"/$1"},continue:!0,override:!0},{src:"^/_next/data/qry1cwgYutBN5S5WsxfYD/(.*).json",dest:"__next_data_catchall"}],resource:[{src:"/.*",status:404}],hit:[{src:"/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|qry1cwgYutBN5S5WsxfYD)/.+",headers:{"cache-control":"public,max-age=31536000,immutable"},continue:!0,important:!0},{src:"/index",headers:{"x-matched-path":"/"},continue:!0,important:!0},{src:"/((?!index$).*)",headers:{"x-matched-path":"/$1"},continue:!0,important:!0}],error:[{src:"/.*",dest:"/404",status:404},{src:"/.*",dest:"/500",status:500}]},images:{domains:[],sizes:[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],remotePatterns:[],minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline"},overrides:{"404.html":{path:"404",contentType:"text/html; charset=utf-8"},"500.html":{path:"500",contentType:"text/html; charset=utf-8"},"_app.rsc.json":{path:"_app.rsc",contentType:"application/json"},"_error.rsc.json":{path:"_error.rsc",contentType:"application/json"},"_document.rsc.json":{path:"_document.rsc",contentType:"application/json"},"404.rsc.json":{path:"404.rsc",contentType:"application/json"},"__next_data_catchall.json":{path:"__next_data_catchall",contentType:"application/json"}},framework:{version:"13.5.4"},crons:[],flags:[]}});var f,l=O(()=>{f={"/404.html":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/404.rsc.json":{type:"override",path:"/404.rsc.json",headers:{"content-type":"application/json"}},"/500.html":{type:"override",path:"/500.html",headers:{"content-type":"text/html; charset=utf-8"}},"/__next_data_catchall.json":{type:"override",path:"/__next_data_catchall.json",headers:{"content-type":"application/json"}},"/_app.rsc.json":{type:"override",path:"/_app.rsc.json",headers:{"content-type":"application/json"}},"/_document.rsc.json":{type:"override",path:"/_document.rsc.json",headers:{"content-type":"application/json"}},"/_error.rsc.json":{type:"override",path:"/_error.rsc.json",headers:{"content-type":"application/json"}},"/_next/static/chunks/12-09a4b84998421c84.js":{type:"static"},"/_next/static/chunks/67-e6a4736659b6631f.js":{type:"static"},"/_next/static/chunks/app/_not-found-92e23a94853c32a1.js":{type:"static"},"/_next/static/chunks/app/layout-1f1583d70577912c.js":{type:"static"},"/_next/static/chunks/app/page-d4d6cb79dd2b13d6.js":{type:"static"},"/_next/static/chunks/app/tweets/page-4071b2ab3333934d.js":{type:"static"},"/_next/static/chunks/fd9d1056-bdbc21787612b876.js":{type:"static"},"/_next/static/chunks/framework-8883d1e9be70c3da.js":{type:"static"},"/_next/static/chunks/main-3cb7d03703a6a164.js":{type:"static"},"/_next/static/chunks/main-app-e4f458537412773e.js":{type:"static"},"/_next/static/chunks/pages/_app-27277a117f49dcf1.js":{type:"static"},"/_next/static/chunks/pages/_error-91a5938854a6f402.js":{type:"static"},"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js":{type:"static"},"/_next/static/chunks/webpack-8827a38b086fd263.js":{type:"static"},"/_next/static/css/3422cc5434ead958.css":{type:"static"},"/_next/static/media/05a31a2ca4975f99-s.woff2":{type:"static"},"/_next/static/media/513657b02c5c193f-s.woff2":{type:"static"},"/_next/static/media/51ed15f9841b9f9d-s.woff2":{type:"static"},"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2":{type:"static"},"/_next/static/media/d6b16ce4a6175f26-s.woff2":{type:"static"},"/_next/static/media/ec159349637c90ad-s.woff2":{type:"static"},"/_next/static/media/fd4db3eb5472fc27-s.woff2":{type:"static"},"/_next/static/qry1cwgYutBN5S5WsxfYD/_buildManifest.js":{type:"static"},"/_next/static/qry1cwgYutBN5S5WsxfYD/_ssgManifest.js":{type:"static"},"/next.svg":{type:"static"},"/vercel.svg":{type:"static"},"/api/auth/callback":{type:"function",entrypoint:"__next-on-pages-dist__/functions/api/auth/callback.func.js"},"/api/userinfo":{type:"function",entrypoint:"__next-on-pages-dist__/functions/api/userinfo.func.js"},"/index":{type:"function",entrypoint:"__next-on-pages-dist__/functions/index.func.js"},"/":{type:"function",entrypoint:"__next-on-pages-dist__/functions/index.func.js"},"/index.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/index.func.js"},"/tweets":{type:"function",entrypoint:"__next-on-pages-dist__/functions/tweets.func.js"},"/tweets.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/tweets.func.js"},"/404":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/500":{type:"override",path:"/500.html",headers:{"content-type":"text/html; charset=utf-8"}},"/_app.rsc":{type:"override",path:"/_app.rsc.json",headers:{"content-type":"application/json"}},"/_error.rsc":{type:"override",path:"/_error.rsc.json",headers:{"content-type":"application/json"}},"/_document.rsc":{type:"override",path:"/_document.rsc.json",headers:{"content-type":"application/json"}},"/404.rsc":{type:"override",path:"/404.rsc.json",headers:{"content-type":"application/json"}},"/__next_data_catchall":{type:"override",path:"/__next_data_catchall.json",headers:{"content-type":"application/json"}},"/favicon.ico":{type:"override",path:"/favicon.ico",headers:{"cache-control":"public, max-age=0, must-revalidate","content-type":"image/x-icon","x-next-cache-tags":"_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url"}},middleware:{type:"middleware",entrypoint:"__next-on-pages-dist__/functions/middleware.func.js"}}});var $=I((Le,A)=>{"use strict";u();l();function w(t,e){t=String(t||"").trim();let a=t,s,r="";if(/^[^a-zA-Z\\\s]/.test(t)){s=t[0];let o=t.lastIndexOf(s);r+=t.substring(o+1),t=t.substring(1,o)}let i=0;return t=oe(t,o=>{if(/^\(\?[P<']/.test(o)){let c=/^\(\?P?[<']([^>']+)[>']/.exec(o);if(!c)throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);let d=o.substring(c[0].length,o.length-1);return e&&(e[i]=c[1]),i++,`(${d})`}return o.substring(0,3)==="(?:"||i++,o}),t=t.replace(/\[:([^:]+):\]/g,(o,c)=>w.characterClasses[c]||o),new w.PCRE(t,r,a,r,s)}function oe(t,e){let a=0,s=0,r=!1;for(let n=0;n<t.length;n++){let i=t[n];if(r){r=!1;continue}switch(i){case"(":s===0&&(a=n),s++;break;case")":if(s>0&&(s--,s===0)){let o=n+1,c=a===0?"":t.substring(0,a),d=t.substring(o),h=String(e(t.substring(a,o)));t=c+h+d,n=a}break;case"\\":r=!0;break;default:break}}return t}(function(t){class e extends RegExp{constructor(s,r,n,i,o){super(s,r),this.pcrePattern=n,this.pcreFlags=i,this.delimiter=o}}t.PCRE=e,t.characterClasses={alnum:"[A-Za-z0-9]",word:"[A-Za-z0-9_]",alpha:"[A-Za-z]",blank:"[ \\t]",cntrl:"[\\x00-\\x1F\\x7F]",digit:"\\d",graph:"[\\x21-\\x7E]",lower:"[a-z]",print:"[\\x20-\\x7E]",punct:"[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]",space:"\\s",upper:"[A-Z]",xdigit:"[A-Fa-f0-9]"}})(w||(w={}));w.prototype=w.PCRE.prototype;A.exports=w});var Z=I(H=>{"use strict";u();l();H.parse=ge;H.serialize=ye;var me=Object.prototype.toString,k=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function ge(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var a={},s=e||{},r=s.decode||we,n=0;n<t.length;){var i=t.indexOf("=",n);if(i===-1)break;var o=t.indexOf(";",n);if(o===-1)o=t.length;else if(o<i){n=t.lastIndexOf(";",i-1)+1;continue}var c=t.slice(n,i).trim();if(a[c]===void 0){var d=t.slice(i+1,o).trim();d.charCodeAt(0)===34&&(d=d.slice(1,-1)),a[c]=_e(d,r)}n=o+1}return a}function ye(t,e,a){var s=a||{},r=s.encode||Re;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!k.test(t))throw new TypeError("argument name is invalid");var n=r(e);if(n&&!k.test(n))throw new TypeError("argument val is invalid");var i=t+"="+n;if(s.maxAge!=null){var o=s.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(o)}if(s.domain){if(!k.test(s.domain))throw new TypeError("option domain is invalid");i+="; Domain="+s.domain}if(s.path){if(!k.test(s.path))throw new TypeError("option path is invalid");i+="; Path="+s.path}if(s.expires){var c=s.expires;if(!xe(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+c.toUTCString()}if(s.httpOnly&&(i+="; HttpOnly"),s.secure&&(i+="; Secure"),s.priority){var d=typeof s.priority=="string"?s.priority.toLowerCase():s.priority;switch(d){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(s.sameSite){var h=typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite;switch(h){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function we(t){return t.indexOf("%")!==-1?decodeURIComponent(t):t}function Re(t){return encodeURIComponent(t)}function xe(t){return me.call(t)==="[object Date]"||t instanceof Date}function _e(t,e){try{return e(t)}catch{return t}}});u();l();u();l();u();l();var R="INTERNAL_SUSPENSE_CACHE_HOSTNAME.local",M=new Set,b=class{constructor(e={}){this.ctx=e}tagsManifest;tagsManifestKey="tags-manifest";async retrieve(e){throw new Error(`Method not implemented - ${e}`)}async update(e,a){throw new Error(`Method not implemented - ${e}, ${a}`)}async set(e,a){let s={lastModified:Date.now(),value:a};switch(await this.update(e,JSON.stringify(s)),s.value?.kind){case"FETCH":{let r=s.value.data.tags??[];await this.setTags(r,{cacheKey:e}),q(r).forEach(n=>M.delete(n))}}}async get(e){let a=await this.retrieve(e);if(!a)return null;let s;try{s=JSON.parse(a)}catch{return null}switch(s.value?.kind){case"FETCH":return await this.loadTagsManifest(),q(s.value.data.tags??[]).some(i=>{if(M.has(i))return!0;let o=this.tagsManifest?.items?.[i];return o?.revalidatedAt&&o?.revalidatedAt>=(s.lastModified??Date.now())})?null:s;default:return s}}async revalidateTag(e){await this.setTags([e],{revalidatedAt:Date.now()}),M.add(e)}async loadTagsManifest(){try{let e=await this.retrieve(this.tagsManifestKey);e&&(this.tagsManifest=JSON.parse(e))}catch{}this.tagsManifest??={version:1,items:{}}}async saveTagsManifest(){if(this.tagsManifest){let e=JSON.stringify(this.tagsManifest);await this.update(this.tagsManifestKey,e)}}async setTags(e,{cacheKey:a,revalidatedAt:s}){await this.loadTagsManifest();let r=this.tagsManifest;for(let n of e){let i=r.items[n]??{keys:[]};a&&!i.keys.includes(a)&&i.keys.push(a),s&&(i.revalidatedAt=s),r.items[n]=i}await this.saveTagsManifest()}};function q(t){let e=["/"];for(let a of t||[])if(a.startsWith("/")){let s=a.split("/");for(let r=1;r<s.length+1;r++){let n=s.slice(0,r).join("/");n&&(e.push(n),e.includes(n)||e.push(n))}}else e.includes(a)||e.push(a);return e}u();l();u();l();u();l();u();l();var D=F($());function P(t,e,a){if(e==null)return{match:null,captureGroupKeys:[]};let s=a?"":"i",r=[];return{match:(0,D.default)(`%${t}%${s}`,r).exec(e),captureGroupKeys:r}}function x(t,e,a,{namedOnly:s}={}){return t.replace(/\$([a-zA-Z0-9_]+)/g,(r,n)=>{let i=a.indexOf(n);return s&&i===-1?r:(i===-1?e[parseInt(n,10)]:e[i+1])||""})}function N(t,{url:e,cookies:a,headers:s,routeDest:r}){switch(t.type){case"host":return{valid:e.hostname===t.value};case"header":return t.value!==void 0?j(t.value,s.get(t.key),r):{valid:s.has(t.key)};case"cookie":{let n=a[t.key];return n&&t.value!==void 0?j(t.value,n,r):{valid:n!==void 0}}case"query":return t.value!==void 0?j(t.value,e.searchParams.get(t.key),r):{valid:e.searchParams.has(t.key)}}}function j(t,e,a){let{match:s,captureGroupKeys:r}=P(t,e);return a&&s&&r.length?{valid:!!s,newRouteDest:x(a,s,r,{namedOnly:!0})}:{valid:!!s}}u();l();function B(t){let e=new Headers(t.headers);return t.cf&&(e.append("x-vercel-ip-city",t.cf.city),e.append("x-vercel-ip-country",t.cf.country),e.append("x-vercel-ip-country-region",t.cf.region),e.append("x-vercel-ip-latitude",t.cf.latitude),e.append("x-vercel-ip-longitude",t.cf.longitude)),new Request(t,{headers:e})}u();l();function g(t,e,a){let s=e instanceof Headers?e.entries():Object.entries(e);for(let[r,n]of s){let i=r.toLowerCase(),o=a?.match?x(n,a.match,a.captureGroupKeys):n;i==="set-cookie"?t.append(i,o):t.set(i,o)}}function _(t){return/^https?:\/\//.test(t)}function y(t,e){for(let[a,s]of e.entries()){let r=/^nxtP(.+)$/.exec(a);r?.[1]?(t.set(a,s),t.set(r[1],s)):(!t.has(a)||!!s&&!t.getAll(a).includes(s))&&t.append(a,s)}}function T(t,e){let a=new URL(e,t.url);return y(a.searchParams,new URL(t.url).searchParams),a.pathname=a.pathname.replace(/^\/index.html$/,"/").replace(/\.html$/,""),new Request(a,t)}function v(t){return new Response(t.body,t)}function L(t){return t.split(",").map(e=>{let[a,s]=e.split(";"),r=parseFloat((s??"q=1").replace(/q *= */gi,""));return[a.trim(),isNaN(r)?1:r]}).sort((e,a)=>a[1]-e[1]).map(([e])=>e==="*"||e===""?[]:e).flat()}u();l();function V(t){switch(t){case"none":return"filesystem";case"filesystem":return"rewrite";case"rewrite":return"resource";case"resource":return"miss";default:return"miss"}}async function S(t,{request:e,assetsFetcher:a,ctx:s},{path:r,searchParams:n}){let i,o=new URL(e.url);y(o.searchParams,n);let c=new Request(o,e);try{switch(t?.type){case"function":case"middleware":{let d=await import(t.entrypoint);try{i=await d.default(c,s)}catch(h){let m=h;throw m.name==="TypeError"&&m.message.endsWith("default is not a function")?new Error(`An error occurred while evaluating the target edge function (${t.entrypoint})`):h}break}case"override":{i=v(await a.fetch(T(c,t.path??r))),t.headers&&g(i.headers,t.headers);break}case"static":{i=await a.fetch(T(c,r));break}default:i=new Response("Not Found",{status:404})}}catch(d){return console.error(d),new Response("Internal Server Error",{status:500})}return v(i)}function K(t,e){let a="^//?(?:",s=")/(.*)";return!t.startsWith(a)||!t.endsWith(s)?!1:t.slice(a.length,-s.length).split("|").every(n=>n in e)}u();l();function ce(t,{protocol:e,hostname:a,port:s,pathname:r}){return!(e&&t.protocol.replace(/:$/,"")!==e||!new RegExp(a).test(t.hostname)||s&&!new RegExp(s).test(t.port)||r&&!new RegExp(r).test(t.pathname))}function ue(t,e){if(t.method!=="GET")return;let{origin:a,searchParams:s}=new URL(t.url),r=s.get("url"),n=Number.parseInt(s.get("w")??"",10),i=Number.parseInt(s.get("q")??"75",10);if(!r||Number.isNaN(n)||Number.isNaN(i)||!e?.sizes?.includes(n)||i<0||i>100)return;let o=new URL(r,a);if(o.pathname.endsWith(".svg")&&!e?.dangerouslyAllowSVG)return;let c=r.startsWith("/")||r.startsWith("%2F");if(!c&&!e?.domains?.includes(o.hostname)&&!e?.remotePatterns?.find(m=>ce(o,m)))return;let d=t.headers.get("Accept")??"",h=e?.formats?.find(m=>d.includes(m))?.replace("image/","");return{isRelative:c,imageUrl:o,options:{width:n,quality:i,format:h}}}function le(t,e,a){let s=new Headers;if(a?.contentSecurityPolicy&&s.set("Content-Security-Policy",a.contentSecurityPolicy),a?.contentDispositionType){let n=e.pathname.split("/").pop(),i=n?`${a.contentDispositionType}; filename="${n}"`:a.contentDispositionType;s.set("Content-Disposition",i)}t.headers.has("Cache-Control")||s.set("Cache-Control",`public, max-age=${a?.minimumCacheTTL??60}`);let r=v(t);return g(r.headers,s),r}async function z(t,{buildOutput:e,assetsFetcher:a,imagesConfig:s}){let r=ue(t,s);if(!r)return new Response("Invalid image resizing request",{status:400});let{isRelative:n,imageUrl:i}=r,o=new Request(i,{headers:t.headers}),c=n&&i.pathname in e?await a.fetch(o):await fetch(o);return le(c,i,s)}u();l();u();l();u();l();var C=class extends b{cacheName="suspense-cache";constructor(e={}){super(e)}async retrieve(e){let s=await(await caches.open(this.cacheName)).match(this.buildCacheKey(e));return s?s.text():null}async update(e,a){let s=await caches.open(this.cacheName),r="31536000",n=new Response(a,{headers:new Headers({"cache-control":`max-age=${r}`})});await s.put(this.buildCacheKey(e),n)}buildCacheKey(e){return`https://${R}/entry/${e}`}};async function W(t){let e=`https://${R}/v1/suspense-cache/`;if(!t.url.startsWith(e))return null;try{let a=new URL(t.url),s=await de();if(a.pathname==="/v1/suspense-cache/revalidate"){let n=a.searchParams.get("tags")?.split(",")??[];for(let i of n)await s.revalidateTag(i);return new Response(null,{status:200})}let r=a.pathname.replace("/v1/suspense-cache/","");if(!r.length)return new Response("Invalid cache key",{status:400});switch(t.method){case"GET":{let n=await s.get(r);return n?new Response(JSON.stringify(n.value),{status:200,headers:{"Content-Type":"application/json","x-vercel-cache-state":"fresh",age:`${(Date.now()-(n.lastModified??Date.now()))/1e3}`}}):new Response(null,{status:404})}case"POST":{let n=await t.json();return await s.set(r,n),new Response(null,{status:200})}default:return new Response(null,{status:405})}}catch(a){return console.error(a),new Response("Error handling cache request",{status:500})}}async function de(){return new C}function J(){globalThis.fetch[G]||(he(),globalThis.fetch[G]=!0)}function he(){let t=globalThis.fetch;globalThis.fetch=async(...e)=>{let a=new Request(...e),s=await pe(a);return s||(s=await W(a),s)?s:(fe(a),t(a))}}async function pe(t){if(t.url.startsWith("blob:"))try{let a=(await import(`./__next-on-pages-dist__/assets/${new URL(t.url).pathname}.bin`)).default,s={async arrayBuffer(){return a},get body(){return new ReadableStream({start(r){let n=Buffer.from(a);r.enqueue(n),r.close()}})},async text(){return Buffer.from(a).toString()},async json(){let r=Buffer.from(a);return JSON.stringify(r.toString())},async blob(){return new Blob(a)}};return s.clone=()=>({...s}),s}catch{}return null}function fe(t){t.headers.has("user-agent")||t.headers.set("user-agent","Next.js Middleware")}var G=Symbol.for("next-on-pages fetch patch");u();l();var Y=F(Z());var E=class{constructor(e,a,s,r){this.routes=e;this.output=a;this.reqCtx=s;this.url=new URL(s.request.url),this.cookies=(0,Y.parse)(s.request.headers.get("cookie")||""),this.path=this.url.pathname||"/",this.headers={normal:new Headers,important:new Headers},this.searchParams=new URLSearchParams,y(this.searchParams,this.url.searchParams),this.checkPhaseCounter=0,this.middlewareInvoked=[],this.wildcardMatch=r?.find(n=>n.domain===this.url.hostname)}url;cookies;wildcardMatch;path;status;headers;searchParams;body;checkPhaseCounter;middlewareInvoked;locales;checkRouteMatch(e,a){let s=P(e.src,this.path,e.caseSensitive);if(!s.match||e.methods&&!e.methods.map(n=>n.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))return;let r={url:this.url,cookies:this.cookies,headers:this.reqCtx.request.headers,routeDest:e.dest};if(!e.has?.find(n=>{let i=N(n,r);return i.newRouteDest&&(r.routeDest=i.newRouteDest),!i.valid})&&!e.missing?.find(n=>N(n,r).valid)&&!(a&&e.status!==this.status))return{routeMatch:s,routeDest:r.routeDest}}processMiddlewareResp(e){let a="x-middleware-override-headers",s=e.headers.get(a);if(s){let c=new Set(s.split(",").map(d=>d.trim()));for(let d of c.keys()){let h=`x-middleware-request-${d}`,m=e.headers.get(h);this.reqCtx.request.headers.get(d)!==m&&(m?this.reqCtx.request.headers.set(d,m):this.reqCtx.request.headers.delete(d)),e.headers.delete(h)}e.headers.delete(a)}let r="x-middleware-rewrite",n=e.headers.get(r);if(n){let c=new URL(n,this.url);this.path=c.pathname,y(this.searchParams,c.searchParams),e.headers.delete(r)}let i="x-middleware-next";e.headers.get(i)?e.headers.delete(i):!n&&!e.headers.has("location")&&(this.body=e.body,this.status=e.status),g(this.headers.normal,e.headers),this.headers.middlewareLocation=e.headers.get("location")}async runRouteMiddleware(e){if(!e)return!0;let a=e&&this.output[e];if(!a||a.type!=="middleware")return this.status=500,!1;let s=await S(a,this.reqCtx,{path:this.path,searchParams:this.searchParams,headers:this.headers,status:this.status});return this.middlewareInvoked.push(e),s.status===500?(this.status=s.status,!1):(this.processMiddlewareResp(s),!0)}applyRouteOverrides(e){!e.override||(this.status=void 0,this.headers.normal=new Headers,this.headers.important=new Headers)}applyRouteHeaders(e,a,s){!e.headers||(g(this.headers.normal,e.headers,{match:a,captureGroupKeys:s}),e.important&&g(this.headers.important,e.headers,{match:a,captureGroupKeys:s}))}applyRouteStatus(e){!e.status||(this.status=e.status)}applyRouteDest(e,a,s){if(!e.dest)return this.path;let r=this.path,n=e.dest;this.wildcardMatch&&/\$wildcard/.test(n)&&(n=n.replace(/\$wildcard/g,this.wildcardMatch.value)),this.path=x(n,a,s),/\/index\.rsc$/i.test(this.path)&&!/^\/(?:index)?$/i.test(r)&&(this.path=r);let i=/(\.prefetch)?\.rsc$/i.test(this.path),o=this.path in this.output;i&&!o&&(this.path=this.path.replace(/(\.prefetch)?\.rsc/i,""));let c=new URL(this.path,this.url);return y(this.searchParams,c.searchParams),_(this.path)||(this.path=c.pathname),r}applyLocaleRedirects(e){if(!e.locale?.redirect||(this.locales||(this.locales={}),Object.assign(this.locales,e.locale.redirect),!/^\^(.)*$/.test(e.src)&&e.src!==this.path)||this.headers.normal.has("location"))return;let{locale:{redirect:s,cookie:r}}=e,n=r&&this.cookies[r],i=L(n??""),o=L(this.reqCtx.request.headers.get("accept-language")??""),h=[...i,...o].map(m=>s[m]).filter(Boolean)[0];if(h){!this.path.startsWith(h)&&(this.headers.normal.set("location",h),this.status=307);return}}getLocaleFriendlyRoute(e,a){return!this.locales||a!=="miss"?e:/^\//.test(e.src)&&e.src.slice(1)in this.locales?{...e,src:`^${e.src}$`}:K(e.src,this.locales)?{...e,src:e.src.replace(/\/\(\.\*\)$/,"(?:/(.*))?$")}:e}async checkRoute(e,a){let s=this.getLocaleFriendlyRoute(a,e),{routeMatch:r,routeDest:n}=this.checkRouteMatch(s,e==="error")??{},i={...s,dest:n};if(!r?.match||i.middlewarePath&&this.middlewareInvoked.includes(i.middlewarePath))return"skip";let{match:o,captureGroupKeys:c}=r;if(this.applyRouteOverrides(i),this.applyLocaleRedirects(i),!await this.runRouteMiddleware(i.middlewarePath))return"error";if(this.body!==void 0||this.headers.middlewareLocation)return"done";this.applyRouteHeaders(i,o,c),this.applyRouteStatus(i);let h=this.applyRouteDest(i,o,c);if(i.check&&!_(this.path))if(h===this.path){if(e!=="miss")return this.checkPhase(V(e));this.status=404}else if(e==="miss"){if(!(this.path in this.output))return this.checkPhase("filesystem");this.status===404&&(this.status=void 0)}else return this.checkPhase("none");return i.continue?"next":"done"}async checkPhase(e){if(this.checkPhaseCounter++>=50)return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`),this.status=500,"error";this.middlewareInvoked=[];let a=!0;for(let n of this.routes[e]){let i=await this.checkRoute(e,n);if(i==="error")return"error";if(i==="done"){a=!1;break}}if(e==="hit"||_(this.path)||this.headers.normal.has("location")||!!this.body)return"done";let s=this.path in this.output;if(e==="rewrite"&&!s&&this.path.endsWith("/")){let n=this.path.replace(/\/$/,"");s=n in this.output,s&&(this.path=n)}if(e==="miss"&&!s){let n=!this.status||this.status<400;this.status=n?404:this.status}let r="miss";return s||e==="miss"||e==="error"?r="hit":a&&(r=V(e)),this.checkPhase(r)}async run(e="none"){this.checkPhaseCounter=0;let a=await this.checkPhase(e);return this.headers.normal.has("location")&&(!this.status||this.status<300||this.status>=400)&&(this.status=307),a}};async function Q(t,e,a){let s=new E(e.routes,a,t,e.wildcard),r=await X(s);return ve(t,r,a)}async function X(t,e="none",a=!1){return await t.run(e)==="error"||!a&&t.status&&t.status>=400?X(t,"error",!0):{path:t.path,status:t.status,headers:t.headers,searchParams:t.searchParams,body:t.body}}async function ve(t,{path:e="/404",status:a,headers:s,searchParams:r,body:n},i){let o=s.normal.get("location");if(o){if(o!==s.middlewareLocation){let h=[...r.keys()].length?`?${r.toString()}`:"";s.normal.set("location",`${o??"/"}${h}`)}return new Response(null,{status:a,headers:s.normal})}let c;if(n!==void 0)c=new Response(n,{status:a});else if(_(e)){let h=new URL(e);y(h.searchParams,r),c=await fetch(h,t.request)}else c=await S(i[e],t,{path:e,status:a,headers:s,searchParams:r});let d=s.normal;return g(d,c.headers),g(d,s.important),c=new Response(c.body,{...c,status:a||c.status,headers:d}),c}J();var Dt={async fetch(t,e,a){let s=await __ENV_ALS_PROMISE__;return s?s.run({...e,NODE_ENV:"production",SUSPENSE_CACHE_URL:R},async()=>{if(new URL(t.url).pathname.startsWith("/_next/image"))return z(t,{buildOutput:f,assetsFetcher:e.ASSETS,imagesConfig:p.images});let n=B(t);return Q({request:n,ctx:a,assetsFetcher:e.ASSETS},p,f)}):new Response("Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.",{status:503})}};export{Dt as default};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
