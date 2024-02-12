import{i as l,S as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const r={formEl:document.querySelector(".js-search-form"),infoEl:document.querySelector(".js-list-img"),loaderEl:document.querySelector(".loader")};r.formEl.addEventListener("submit",f);function f(o){o.preventDefault(),r.infoEl.innerHTML="",r.loaderEl.classList.add("show");const s=o.target.elements.query.value;if(!s){l.warning({position:"topRight",message:"Please enter a search query."}),r.loaderEl.classList.remove("show");return}u(s).then(i=>{r.loaderEl.classList.remove("show"),i.hits.length===0?l.error({position:"topRight",messageSize:"50",message:"Sorry, there are no images matching your search query. Please try again!"}):(g(i),o.target.elements.query.value="")}).catch(i=>{console.error("Error fetching images:",i),l.error({position:"topRight",messageSize:"50",message:"Failed to fetch images. Please try again later."}),r.loaderEl.classList.remove("show")})}function u(o){const s="https://pixabay.com/",i="/api/",a=`?key=42187150-1e170edc08d41224404163b7f&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,e=s+i+a;return fetch(e).then(t=>t.json())}function d(o){const{webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:n,downloads:c}=o;return`<div class="image js-image">
    <div class="image-container">
      <a class="gallery-link" href="${i}">
        <img
          src="${s}"
          alt="${a}"
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
          <span class="info-item-value">${t}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${n}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${c}</span>
        </li>
      </ul>
    </div>
  </div>`}function g({hits:o}){const s=o.map(d).join("");r.infoEl.insertAdjacentHTML("beforeend",s),new m(".gallery-link",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
