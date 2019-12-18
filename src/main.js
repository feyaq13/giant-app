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

  const viewportSlider = document.querySelector(".slider-reviews__wrapper-imgs");
  const btnPrev = document.querySelector(".slider-reviews__prev");
  const btnNext = document.querySelector(".slider-reviews__next");
  const counterSlides = 5;
  let counter = 1;
  let sliderPagesLength = calcWidth();

  btnNext.addEventListener("click", slideNext);
  btnPrev.addEventListener("click", slidePrev);
  checkButtons();
  window.addEventListener("resize", calcWidth);
  window.addEventListener("resize", checkButtons);

  function calcWidth() {
    viewportSlider.style.transform = '';
    counter = 1;
    let sliderWidth = document.querySelector(".slider-reviews").clientWidth;
    let slideWidth = document.querySelectorAll(".slide")[0].clientWidth;
    console.log(sliderWidth, slideWidth);

    sliderPagesLength =
      Math.ceil(counterSlides / (sliderWidth / slideWidth));

    return sliderPagesLength
  }

  function checkButtons() {
    btnPrev.disabled = (counter === 1);
    btnNext.disabled = (counter === sliderPagesLength);
  }

  function slideNext() {
    if (counter !== sliderPagesLength) {
      viewportSlider.style.transform += "translate(-100%)";
      ++counter;
      console.log(counter + '/' + sliderPagesLength);

      btnPrev.disabled = (counter === 1);
      btnNext.disabled  = (counter === sliderPagesLength);
    }
  }

  function slidePrev() {
    if (counter !== 1) {
      --counter;
      console.log(counter + '/' + sliderPagesLength);
      viewportSlider.style.transform += "translate(100%)";

      btnPrev.disabled = (counter === 1);
      btnNext.disabled = (counter === sliderPagesLength);
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
