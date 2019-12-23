const $ = require('jquery');

var Swiper = require('swiper').default;
var mySwiper;

$('.section-video__button-play').click(showAndPlay);

function showAndPlay() {
  $('.section-video').css(
    'background', 'rgba(0, 0, 0, .9)'
  );
  $(this).hide();
  $('.section-video__video').css('visibility', 'visible').get(0).play();
}

$( document ).ready(function() {
  checkInit();
  window.addEventListener('resize', checkInit);

  function checkInit() {
    if (window.matchMedia('(max-width: 640px)').matches) {
      if (mySwiper) {
        mySwiper.destroy(false, true);
      }
    } else if (window.matchMedia('(min-width: 641px)').matches) {
      // если его нет или его состояние "неактивно"
      if (!mySwiper || mySwiper.destroyed) {
        mySwiper = new Swiper('.swiper-container', {
          init: true,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 4,
          initialSlide: 3,

          keyboard: {
            enabled: true,
          },

          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            modifier: 1,
            depth: 250,
            slideShadows : false,
          },

          navigation: {
            nextEl: '.swiper-button-next--custom',
            prevEl: '.swiper-button-prev--custom',
          }
        })
      }
    }
  }

  const viewportSlider = document.querySelector(".slider-reviews__wrapper-imgs");
  const btnPrev = document.querySelector(".slider-reviews__prev");
  const btnNext = document.querySelector(".slider-reviews__next");
  const counterSlides = 5;
  let currentPage = 1;
  let sliderPagesLength = calcWidth();

  btnNext.addEventListener("click", slideNext);
  btnPrev.addEventListener("click", slidePrev);
  initButtons();
  window.addEventListener("resize", calcWidth);
  window.addEventListener("resize", initButtons);

  function calcWidth() {
    viewportSlider.style.transform = '';
    currentPage = 1;
    let sliderWidth = document.querySelector(".slider-reviews").clientWidth;
    let slideWidth = document.querySelectorAll(".slide")[0].clientWidth;

    sliderPagesLength =
      Math.ceil(counterSlides / (sliderWidth / slideWidth));

    return sliderPagesLength
  }

  function initButtons() {
    btnPrev.disabled = (currentPage === 1);
    btnNext.disabled = (currentPage === sliderPagesLength);
  }

  function slideNext() {
    if (currentPage !== sliderPagesLength) {
      viewportSlider.style.transform += "translate(-100%)";
      ++currentPage;

      initButtons()
    }
  }

  function slidePrev() {
    if (currentPage !== 1) {
      --currentPage;
      viewportSlider.style.transform += "translate(100%)";

      initButtons()
    }
  }

  const scrollTopAnimationDurationMs = 1000;

  $('.navigation__list').on('click', 'a', goDownLink);

  function goDownLink(event) {
    const listItem = $(this).attr('href');
    const top = $(listItem).offset().top;
    event.preventDefault();

    $('body,html').animate(
      { scrollTop: top },
      scrollTopAnimationDurationMs
    );
  }
});
