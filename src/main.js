$('.owl-carousel').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  items: 7,
  // autoHeight: true,
  // autoWidth: true,
  navText: [
    `<button class="next-button">
        <img src="images/long-arrow-pointing-to-right.svg" alt="icon" class="icon">
     </button>`,
    `<button class="prev-button">
       <img src="images/long-arrow-pointing-to-right.svg" alt="icon" class="icon">
    </button>`
  ],
  responsive:{
    0:{
      items: 7,
    },
    768:{
      items: 7,
    },
    990:{
      items: 7,
    }
  },
  onInitialized: coverFlowEfx,
  onTranslate: coverFlowEfx,
});

function coverFlowEfx(e){
  if ($('.owl-dots')) {
    $('.owl-dots').remove();
  }

  idx = e.item.index;
  console.log(idx);
  // $('.owl-item.big').removeClass('big');
  // $('.owl-item.medium').removeClass('medium');
  // $('.owl-item.mdright').removeClass('mdright');
  // $('.owl-item.mdleft').removeClass('mdleft');
  // $('.owl-item.smallRight').removeClass('smallRight');
  // $('.owl-item.smallLeft').removeClass('smallLeft');
  // $('.owl-item.smallerLeft').removeClass('smallerLeft');
  // $('.owl-item.smallerRight').removeClass('smallerRight');

  // $('.owl-item').eq(idx - 1).addClass('medium mdleft');
  // $('.owl-item').eq(idx).addClass('big');
  // $('.owl-item').eq(idx + 1).addClass('medium mdright');
  // $('.owl-item').eq(idx + 2).addClass('smallRight');
  // $('.owl-item').eq(idx - 2).addClass('smallLeft');
  // $('.owl-item').eq(idx - 3).addClass('smallerLeft');
  // $('.owl-item').eq(idx + 3).addClass('smallerRight');

}
