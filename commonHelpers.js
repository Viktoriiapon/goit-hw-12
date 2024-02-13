import{i as m,a as p,S as y}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const a={formEl:document.querySelector(".js-search-form"),infoEl:document.querySelector(".js-list-img"),loaderEl:document.querySelector(".loader"),loadMoreBtnEl:document.querySelector(".btn-load")};let r=1,c="";a.formEl.addEventListener("submit",g);a.loadMoreBtnEl.addEventListener("click",b);async function g(t){t.preventDefault(),r=1,c=t.target.elements.query.value.trim(),a.infoEl.innerHTML="",a.loadMoreBtnEl.style.display="none",a.loaderEl.style.display="block";try{const s=await d(c,r);h(s),a.loadMoreBtnEl.style.display="block"}catch{m.error({position:"topRight",messageSize:"30",message:"Failed to fetch images. Please try again later."})}finally{a.loaderEl.style.display="none"}}async function b(){r+=1,a.loaderEl.style.display="block";try{const t=await d(c,r);E(t)}catch{m.error({position:"topRight",messageSize:"30",message:"Failed to fetch more images. Please try again later."})}finally{a.loaderEl.style.display="none"}}async function d(t,s){const o={key:"42187150-1e170edc08d41224404163b7f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s},l="https://pixabay.com/api/?";return(await p.get(l,{params:o})).data}function f(t){const{webformatURL:s,largeImageURL:o,tags:l,likes:e,views:i,comments:n,downloads:u}=t;return`<div class="image js-image">
    <div class="image-container">
      <a class="gallery-link" href="${o}">
        <img
          src="${s}"
          alt="${l}"
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
          <span class="info-item-value">${n}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${u}</span>
        </li>
      </ul>
    </div>
  </div>`}function h({hits:t}){const s=t.map(f).join("");a.infoEl.innerHTML=s,new y(".gallery-link",{captionDelay:250,captionsData:"alt"}).refresh()}function E({hits:t}){const s=t.map(f).join("");a.infoEl.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=commonHelpers.js.map
