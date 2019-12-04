// $(".slider").dnSlide({
//   "response": true,
//   afterClickBtnFn: function (i) {
//     console.log(i);
//   }
// });

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

  const sliderWidth = document.querySelector(".slider-reviews").clientWidth;
  const slidesWidth = document.querySelectorAll(".slide")[0].clientWidth;
  const counterSlides = 5;

  let slidesLength
    = (sliderWidth === slidesWidth) ? slidesLength = 5
    : Math.floor(counterSlides - (sliderWidth / slidesWidth));

  let counter = 0;

  console.log(slidesLength, Math.floor(counterSlides - (sliderWidth / slidesWidth)), sliderWidth, slidesWidth);

  btnNext.addEventListener("click", slideNext);
  btnPrev.addEventListener("click", slidePrev);
  document.addEventListener("load", checkCounter());

  function checkCounter () {
    // btnPrev.style.display = (counter === 0) ? "none" : "block";
    btnPrev.disabled = (counter === 0) ? true : false;
    // btnNext.style.display = (slidesLength > 0) ? "block" : "none";
    btnNext.disabled = (slidesLength > 0) ? false : true;
  }

  function slideNext() {
    if (counter < slidesLength) {
      imgs.style.transform += "translate(-100%)";
      ++counter;

      // btnPrev.style.display = (counter === 0) ? "none" : "block";
      btnPrev.disabled = (counter === 0) ? true : false;
      // btnNext.style.display = (counter < slidesLength - 1) ? "block" : "none";
      btnNext.disabled  = (counter < slidesLength - 1) ? false : true;
    }
  }

  function slidePrev() {
    if (counter !== 0) {
      --counter;
      imgs.style.transform += "translate(100%)";

      // btnPrev.style.display = (counter === 0) ? "none" : "block";
      btnPrev.disabled = (counter === 0) ? true : false;
      // btnNext.style.display = (counter < slidesLength) ? "block" : "none";
      btnNext.disabled = (counter < slidesLength) ? false : true;
    }
  }

});
