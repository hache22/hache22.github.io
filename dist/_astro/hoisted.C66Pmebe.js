document.addEventListener("astro:page-load",()=>{const e=document.querySelectorAll("section"),t=document.querySelectorAll("header nav a"),n=r=>{r.forEach(i=>{i.isIntersecting&&t.forEach(c=>{c.getAttribute("aria-label")==i.target.id?c.classList.add("text-blue-500"):c.classList.remove("text-blue-500")})})},o=new IntersectionObserver(n,{root:null,rootMargin:"0px",threshold:.3});e.forEach(r=>{o.observe(r)}),document.onvisibilitychange=()=>{document.visibilityState==="hidden"?o.disconnect():e.forEach(r=>{o.observe(r)})}});const w="data-astro-transition-persist";function J(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function Q(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function Z(e){for(const t of Array.from(document.head.children)){const n=ne(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ee(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${w}]`)){const o=n.getAttribute(w),r=e.querySelector(`[${w}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&oe(n)&&!re(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const te=()=>{const e=document.activeElement;if(e?.closest(`[${w}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>R({activeElement:e,start:t,end:n})}return()=>R({activeElement:e})}else return()=>R({activeElement:null})},R=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ne=(e,t)=>{const n=e.getAttribute(w),o=n&&t.head.querySelector(`[${w}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},oe=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},re=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),ie=e=>{J(e),Q(e),Z(e);const t=te();ee(e.body,document.body),t()},se="astro:before-preparation",ae="astro:after-preparation",ce="astro:before-swap",le="astro:after-swap",ue=e=>document.dispatchEvent(new Event(e));class _ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,i,c,a,u,f,l){super(t,n),this.from=o,this.to=r,this.direction=i,this.navigationType=c,this.sourceElement=a,this.info=u,this.newDocument=f,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class fe extends _{formData;loader;constructor(t,n,o,r,i,c,a,u,f,l){super(se,{cancelable:!0},t,n,o,r,i,c,a,u),this.formData=f,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class de extends _{direction;viewTransition;swap;constructor(t,n){super(ce,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ie(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function me(e,t,n,o,r,i,c,a,u){const f=new fe(e,t,n,o,r,i,window.document,c,a,u);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(ue(ae),f.navigationType!=="traverse"&&x({scrollX,scrollY}))),f}function he(e,t){const n=new de(e,t);return document.dispatchEvent(n),n.swap(),n}const pe=history.pushState.bind(history),T=history.replaceState.bind(history),x=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},D=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),$=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let d,g,A;const B=e=>document.dispatchEvent(new Event(e)),U=()=>B("astro:page-load"),ge=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},M="data-astro-transition-persist",O="data-astro-transition",P="data-astro-transition-fallback";let H,y=0;history.state?(y=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(T({index:y,scrollX,scrollY},""),history.scrollRestoration="manual");async function be(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function V(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function we(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(c=>{o.onload=o.onerror=c});e=e.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const W=(e,t,n,o,r)=>{const i=$(t,e),c=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const u=history.state;T({...n.state,index:u.index,scrollX:u.scrollX,scrollY:u.scrollY},"",e.href)}else pe({...n.state,index:++y,scrollX:0,scrollY:0},"",e.href);if(document.title=c,A=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const u=history.state;location.href=e.href,history.state||(T(u,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ye(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${M}="${n.getAttribute(M)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return t}async function F(e,t,n,o,r){async function i(u){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(P,u);const p=document.getAnimations().filter(h=>!l.includes(h)&&!f(h));return Promise.allSettled(p.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const c=document.title,a=he(e,n.viewTransition);W(a.to,a.from,t,c,o),B(le),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function ve(){return d?.controller.abort(),d={controller:new AbortController}}async function j(e,t,n,o,r){const i=ve();if(!I()||location.origin!==n.origin){i===d&&(d=void 0),location.href=n.href;return}const c=r?"traverse":o.history==="replace"?"replace":"push";if(c!=="traverse"&&x({scrollX,scrollY}),$(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){W(n,t,o,document.title,r),i===d&&(d=void 0);return}const a=await me(t,n,e,c,o.sourceElement,o.info,i.controller.signal,o.formData,u);if(a.defaultPrevented||a.signal.aborted){i===d&&(d=void 0),a.signal.aborted||(location.href=n.href);return}async function u(s){const p=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const b=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=b?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await be(p,h);if(m===null){s.preventDefault();return}if(m.redirected){const b=new URL(m.redirected);if(b.origin!==s.to.origin){s.preventDefault();return}s.to=b}if(H??=new DOMParser,s.newDocument=H.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(b=>b.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const L=ye(s.newDocument);L.length&&!s.signal.aborted&&await Promise.all(L)}async function f(){if(g&&g.viewTransition){try{g.viewTransition.skipTransition()}catch{}try{await g.viewTransition.updateCallbackDone}catch{}}return g={transitionSkipped:!1}}const l=await f();if(a.signal.aborted){i===d&&(d=void 0);return}if(document.documentElement.setAttribute(O,a.direction),D)l.viewTransition=document.startViewTransition(async()=>await F(a,o,l,r));else{const s=(async()=>{await Promise.resolve(),await F(a,o,l,r,V())})();l.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(p=>l.viewTransitionFinished=p),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(P)}}}l.viewTransition?.updateCallbackDone.finally(async()=>{await we(),U(),ge()}),l.viewTransition?.finished.finally(()=>{l.viewTransition=void 0,l===g&&(g=void 0),i===d&&(d=void 0),document.documentElement.removeAttribute(O),document.documentElement.removeAttribute(P)});try{await l.viewTransition?.updateCallbackDone}catch(s){const p=s;console.log("[astro]",p.name,p.message,p.stack)}}async function C(e,t){await j("forward",A,new URL(e,location.href),t??{})}function Te(e){if(!I()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>y?"forward":"back";y=n,j(o,A,new URL(location.href),{},t)}const X=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&x({scrollX,scrollY})};{if(D||V()!=="none")if(A=new URL(location.href),addEventListener("popstate",Te),addEventListener("load",U),"onscrollend"in window)addEventListener("scrollend",X);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,X();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}const K=new Set,E=new WeakSet;let k,G,Y=!1;function Ee(e){Y||(Y=!0,k??=e?.prefetchAll,G??=e?.defaultStrategy??"hover",Ae(),Se(),Le(),Pe())}function Ae(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{v(t.target,"tap")&&S(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Se(){let e;document.body.addEventListener("focusin",o=>{v(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||v(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{S(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Le(){let e;N(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||v(t,"viewport")&&(E.add(t),e??=Re(),e.observe(t))})}function Re(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,i=e.get(r);o.isIntersecting?(i&&clearTimeout(i),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),S(r.href)},300))):i&&(clearTimeout(i),e.delete(r))}})}function Pe(){N(()=>{for(const e of document.getElementsByTagName("a"))v(e,"load")&&S(e.href)})}function S(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(ke(e,n))if(K.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function ke(e,t){if(!navigator.onLine||!t&&z())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!K.has(e)}catch{}return!1}function v(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||k)&&z()?!0:n==null&&k||n===""?t===G:n===t}function z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function N(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function xe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return e.dataset.astroReload!==void 0}(D||xe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),C(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),c=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??i??location.pathname;const u=o?.getAttribute("formmethod")??c??"get";if(u==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(u==="get"){const l=new URLSearchParams(r),s=new URL(a);s.search=l.toString(),a=s.toString()}else f.formData=r;e.preventDefault(),C(a,f)}),Ee({prefetchAll:!0}));