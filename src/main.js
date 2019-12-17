const $ = require('jquery');

var Swiper = require('swiper').default;
var mySwiper;
console.log(mySwiper)

$('.section-video__button-play').click(showAndPlay);

function showAndPlay() {
  $('.section-video').css(
    'background', 'rgba(0, 0, 0, .9)'
  );
  $(this).hide();
  $('.section-video__video').css('visibility', 'visible').get(0).play();
}

$( document ).ready(function() {
  window.addEventListener('load', checkInit);
  window.addEventListener('resize', checkInit);

  function checkInit() {
    if (window.matchMedia('(max-width: 640px)').matches) {
      if (mySwiper) {
        mySwiper.destroy(false, true);
      }
    } else if (window.matchMedia('(min-width: 641px)').matches) {
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

          breakpoints: {},

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

  const imgs = document.querySelector(".slider-reviews__wrapper-imgs");
  const btnPrev = document.querySelector(".slider-reviews__prev");
  const btnNext = document.querySelector(".slider-reviews__next");
  const counterSlides = 5;
  let counter = 0;
  let slidesLength = calcWidth();

  btnNext.addEventListener("click", slideNext);
  btnPrev.addEventListener("click", slidePrev);
  document.addEventListener("load", checkButtons());
  window.addEventListener("resize", calcWidth);
  window.addEventListener("resize", checkButtons);

  function calcWidth() {
    let sliderWidth = document.querySelector(".slider-reviews").clientWidth;
    let slidesWidth = document.querySelectorAll(".slide")[0].clientWidth;

    slidesLength
      = (sliderWidth === slidesWidth) ? slidesLength = 5
      : Math.floor(counterSlides - (sliderWidth / slidesWidth));

    return slidesLength
  }

  function checkButtons() {
    btnPrev.disabled = (counter === 0) ? true : false;
    btnNext.disabled = (slidesLength > 0) ? false : true;
  }

  function slideNext() {
    if (counter < slidesLength) {
      imgs.style.transform += "translate(-100%)";
      ++counter;

      btnPrev.disabled = (counter === 0) ? true : false;
      btnNext.disabled  = (counter < slidesLength - 1) ? false : true;
    }
  }

  function slidePrev() {
    if (counter !== 0) {
      --counter;
      imgs.style.transform += "translate(100%)";

      btnPrev.disabled = (counter === 0) ? true : false;
      btnNext.disabled = (counter < slidesLength) ? false : true;
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
