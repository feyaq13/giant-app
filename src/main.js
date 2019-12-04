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
  $('.section-video__video').show().get(0).play();
}


