// DOM
const toggleBtn = document.querySelector('#toggleBtn');
const menuList = document.querySelector('#menuList');
const menuIcon = document.querySelector('#menuIcon');

const filterDropdownBtn = document.querySelector('#filterDropdownBtn');
const filterDropdown = document.querySelector('#filterDropdown');

const sortDropdownBtn = document.querySelector('#sortDropdownBtn');
const sortDropdown = document.querySelector('#sortDropdown');

const toTopBtn = document.querySelector('#toTopBtn');

// header 漢堡選單
const menuToggle = (e) => {
  e.preventDefault();
  if (menuList.classList.contains('hidden')) {
    menuList.classList.remove('hidden');
    menuIcon.setAttribute('src', './icons/Close.png');
  } else {
    menuList.classList.add('hidden');
    menuIcon.setAttribute('src', './icons/Menu.png');
  }
};

// 篩選的下拉選單
const filterDropdownToggle = () => {
  sortDropdown.classList.add('hidden');
  if (filterDropdown.classList.contains('hidden')) {
    filterDropdown.classList.remove('hidden');
    return;
  }

  filterDropdown.classList.add('hidden');
};

// 由舊到新由新到舊的下拉選單
const sortDropdownToggle = () => {
  filterDropdown.classList.add('hidden');
  if (sortDropdown.classList.contains('hidden')) {
    sortDropdown.classList.remove('hidden');
    return;
  }
  sortDropdown.classList.add('hidden');
};

// to top
const toTopTrigger = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

toggleBtn.addEventListener('click', menuToggle);
filterDropdownBtn.addEventListener('click', filterDropdownToggle);
sortDropdownBtn.addEventListener('click', sortDropdownToggle);
toTopBtn.addEventListener('click', toTopTrigger);

// swiper
const swiper = new Swiper('.mySwiper', {
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
