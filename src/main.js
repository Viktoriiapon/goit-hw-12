import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';


const refs = {
  formEl: document.querySelector('.js-search-form'),
  infoEl: document.querySelector('.js-list-img'),
  loaderEl: document.querySelector('.loader'),
  loadMoreBtnEl: document.querySelector('.btn-load'),
  
};

let page = 1;
let userQuery = '';
let totalPages = 0;
const per_page = 15;
refs.loaderEl.classList.add('hidden');
refs.formEl.addEventListener('submit', onFormSubmit);
refs.loadMoreBtnEl.addEventListener('click', onLoadMore);

async function onFormSubmit(e) {
  e.preventDefault();
  page = 1;
  userQuery = e.target.elements.query.value.trim();
  refs.infoEl.innerHTML = '';
  refs.loadMoreBtnEl.classList.add('hidden');
  refs.loaderEl.style.display = 'block';
  try {
    const data = await getImage(userQuery, page);
    if (data.hits.length === 0) {
      iziToast.warning({
        position: 'topRight',
        messageSize: '30',
        message: 'Please enter another search query.',
      });
    } else {
      renderGallery(data);
      refs.loadMoreBtnEl.style.display = 'block';
      refs.loadMoreBtnEl.classList.remove('hidden');

    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      messageSize: '30',
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    refs.loaderEl.style.display = 'none';
    e.target.elements.query.value = '';
    
  }
}

async function onLoadMore() {
  page += 1;
  
  try {
    const data = await getImage(userQuery, page);
    appendImages(data);
    if (page >= totalPages) {
      hideButton();
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
    smoothScroll();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      messageSize: '30',
      message: 'Failed to fetch more images. Please try again later.',
    });
  } finally {
    refs.loaderEl.style.display = 'none';
  }
}

function smoothScroll() {
  const cardHeight = refs.infoEl.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth'
  });
}

function hideButton() {
  refs.loadMoreBtnEl.classList.add('hidden');
}

async function getImage(nameImage, page) {
  const params = {
    key: '42187150-1e170edc08d41224404163b7f',
    q: nameImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  const url = `https://pixabay.com/api/?`;
  const response = await axios.get(url, { params });
  return response.data;
}

function imageTemplate(nameImage) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = nameImage;
  return `<div class="image js-image">
    <div class="image-container">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          src="${webformatURL}"
          alt="${tags}"
          class="image js-image"
        />
      </a>
    </div>
    <div class="image-body">
      <ul class="info">
        <li class="info-item">
          <b class="info-item-title">Likes</b>
          <span class="info-item-value">${likes}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Views</b>
          <span class="info-item-value">${views}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${comments}</span>
        </li>
        <li class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${downloads}</span>
        </li>
      </ul>
    </div>
  </div>`;
}

function renderGallery({ hits, totalHits }) {
  totalPages= Math.ceil(totalHits / per_page)

  const markup = hits.map(imageTemplate).join('');
  refs.infoEl.innerHTML = markup;
  const lightbox = new SimpleLightbox('.gallery-link', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  lightbox.refresh();
}

function appendImages({ hits, totalHits }) {
  const markup = hits.map(imageTemplate).join('');
  refs.infoEl.insertAdjacentHTML('beforeend', markup);
}
