import $ from "jquery";
 
function exercise19() {
  // Complete the code of the function
  $('.mb').on('click', function () {
      $('.img').animate({'width':'24em'},1200).animate({'height':'16em'},100, createPh()).animate({'padding':'2em'}, 1000, createPp())
  })

function createPw () {
  var durationPw = $('.ex-wrapper').append($('<p>Finished animating: '+$('.img').animate() + 'px</p>'))
  console.log(durationPw.duration)
}
function createPh () {
  $('.ex-wrapper').append($('<p>Finished animating: '+$('.img').animate() + 'px</p>'))
}
function createPp () {
  $('.ex-wrapper').append($('<p>Finished animating: '+$('.img').animate()) + 'px</p>')
} */
}
/* exercise19(); */

 export default exercise19; 