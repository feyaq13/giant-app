
$('.section-video__button-play').click(showAndPlay);

function showAndPlay() {
  $('.section-video').css(
    'background', 'rgba(0, 0, 0, .9)'
  );
  $(this).hide();
  $('.section-video__video').css('visibility', 'visible').get(0).play();
}

$( document ).ready(function() {
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
