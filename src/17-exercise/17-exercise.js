import $ from "jquery";

function exercise17() {
  // Complete the code of the function
    $('.mb').on('click', function () {
      $('.box').animate({'height':'16em', 'width':'20em', 'left':'40px'}, 300)
    })
}

export default exercise17;
