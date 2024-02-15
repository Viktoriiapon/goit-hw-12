import{i as c,a as g,S as y}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const i={formEl:document.querySelector(".js-search-form"),infoEl:document.querySelector(".js-list-img"),loaderEl:document.querySelector(".loader"),loadMoreBtnEl:document.querySelector(".btn-load")};let r=1,d="",m=0;const h=15;i.loaderEl.classList.add("hidden");i.formEl.addEventListener("submit",b);i.loadMoreBtnEl.addEventListener("click",E);async function b(t){t.preventDefault(),r=1,d=t.target.elements.query.value.trim(),i.infoEl.innerHTML="",i.loadMoreBtnEl.classList.add("hidden"),i.loaderEl.style.display="block";try{const s=await f(d,r);s.hits.length===0?c.warning({position:"topRight",messageSize:"30",message:"Please enter another search query."}):(w(s),i.loadMoreBtnEl.style.display="block",i.loadMoreBtnEl.classList.remove("hidden"))}catch{c.error({position:"topRight",messageSize:"30",message:"Failed to fetch images. Please try again later."})}finally{i.loaderEl.style.display="none",t.target.elements.query.value=""}}async function E(){r+=1;try{const t=await f(d,r);M(t),r>=m&&(L(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),v()}catch{c.error({position:"topRight",messageSize:"30",message:"Failed to fetch more images. Please try again later."})}finally{i.loaderEl.style.display="none"}}function v(){const t=i.infoEl.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}function L(){i.loadMoreBtnEl.classList.add("hidden")}async function f(t,s){const a={key:"42187150-1e170edc08d41224404163b7f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s},n="https://pixabay.com/api/?";return(await g.get(n,{params:a})).data}function u(t){const{webformatURL:s,largeImageURL:a,tags:n,likes:e,views:o,comments:l,downloads:p}=t;return`<div class="image js-image">
    <div class="image-container">
      <a class="gallery-link" href="${a}">
        <img
          src="${s}"
          alt="${n}"
          class="image js-image"
        />
      </a>
    </div>
    <div class="image-body">
      <ul class="info">
        <li class="info-item">
          <b class="info-item-title">Likes</b>
          <span class="info-item-value">${e}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Views</b>
          <span class="info-item-value">${o}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${l}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${p}</span>
        </li>
      </ul>
    </div>
  </div>`}function w({hits:t,totalHits:s}){m=Math.ceil(s/h);const a=t.map(u).join("");i.infoEl.innerHTML=a,new y(".gallery-link",{captionDelay:250,captionsData:"alt"}).refresh()}function M({hits:t,totalHits:s}){const a=t.map(u).join("");i.infoEl.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=commonHelpers.js.map
