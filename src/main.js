const jQuery = require('jquery');

jQuery(".slider").dnSlide({
  "response": true,
  afterClickBtnFn: function (i) {
    console.log(i);
  }
});

