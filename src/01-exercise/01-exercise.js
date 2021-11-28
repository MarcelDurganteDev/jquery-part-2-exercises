import $ from 'jquery';

function exercise01() {
    // Complete the code of the function
    var myP = $('<p></p>');
    var cssValue = $('.box').css('padding');
    var myCssP = myP.text(cssValue);
    $('.box').after(myCssP);
}

export default exercise01;
