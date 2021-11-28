import $ from 'jquery';

function exercise11() {
    // Complete the code of the function
    var myBoxHeight = parseInt($('.box').height());
    var myP = $('<p></p>');
    var myBox = $('.box')

    $('.mb').on('click', function () {
        if ($(myP).length) {
            myP.text(myBoxHeight);
            myBox.before(myP);
            myBoxHeight += 20;
        }
    });
}

export default exercise11;
