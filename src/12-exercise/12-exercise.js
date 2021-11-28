import $ from "jquery";

function exercise12() {
  // Complete the code of the functionvar 
  var myW = $('.box').width();
  var myH = parseInt($('.box').height());
  
  $('.mb').on('click', function () {

    
    $('.box').text(myW + 'x' + myH)


    myW+=20
    myH+=20

  })


}

export default exercise12;
