import{i as c,a as h,S as y}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const a={formEl:document.querySelector(".js-search-form"),infoEl:document.querySelector(".js-list-img"),loaderEl:document.querySelector(".loader"),loadMoreBtnEl:document.querySelector(".btn-load")};let l=1,d="",m=0;const f=15;a.loaderEl.classList.add("hidden");a.formEl.addEventListener("submit",b);a.loadMoreBtnEl.addEventListener("click",v);async function b(t){t.preventDefault();const s=t.target.elements.query.value.trim();if(!s){c.warning({position:"topRight",messageSize:"30",message:"Please enter another search query."});return}l=1,d=s,a.infoEl.innerHTML="",a.loadMoreBtnEl.classList.add("hidden"),a.loaderEl.style.display="block";try{const o=await u(d,l);o.hits.length===0?c.warning({position:"topRight",messageSize:"30",message:"Please enter another search query."}):(w(o),console.log("Removing hidden class from loadMoreBtnEl"),a.loadMoreBtnEl.classList.remove("hidden"))}catch(o){o.response&&o.response.status===404&&c.error({position:"topRight",messageSize:"30",message:"Failed to fetch images. Please try again later."})}finally{a.loaderEl.style.display="none",t.target.elements.query.value=""}}async function v(){l+=1;try{const t=await u(d,l);m=Math.ceil(t.totalHits/f),M(t),l>=m&&(L(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),refreshLightbox()}finally{a.loaderEl.style.display="none"}}function E(){const t=a.infoEl.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}function L(){a.loadMoreBtnEl.classList.add("hidden")}async function u(t,s){const o={key:"42187150-1e170edc08d41224404163b7f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s},n="https://pixabay.com/api/?";return(await h.get(n,{params:o})).data}function p(t){const{webformatURL:s,largeImageURL:o,tags:n,likes:e,views:i,comments:r,downloads:g}=t;return`<div class="image js-image">
    <div class="image-container">
      <a class="gallery-link" href="${o}">
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
          <span class="info-item-value">${i}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${r}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${g}</span>
        </li>
      </ul>
    </div>
  </div>`}function w({hits:t,totalHits:s}){m=Math.ceil(s/f);const o=t.map(p).join("");a.infoEl.innerHTML=o,new y(".gallery-link",{captionDelay:250,captionsData:"alt"}).refresh()}function M({hits:t}){const s=t.map(p).join("");a.infoEl.insertAdjacentHTML("beforeend",s),E()}
//# sourceMappingURL=commonHelpers.js.map
