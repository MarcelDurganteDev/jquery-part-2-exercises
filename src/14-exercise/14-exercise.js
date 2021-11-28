import $ from "jquery";

function exercise14() {
  // Complete the code of the function
  var myH = $('.box').outerHeight();
  var myW = $('.box').outerWidth();

  $('.mb').on('click', function () {

    $('.box').outerHeight(myW)
    $('.box').outerWidth(myH)

    
  })
}

export default exercise14;
