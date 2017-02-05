var colorField = $('#color-field'),
    setColor = $('#set-color'),
    brush = $('.brush'),
    colorId;

setColor.on('click', function (e) {
    //to prevent page from refreshing
    e.preventDefault();
    changeColor();
});
setColor.on('keyup', function (e) {

    if(e.keyCode == 13) {
        //to prevent page from refreshing
        e.preventDefault();
        changeColor();
    }
});

makeTwentyDivs();

$('.square').on('click', function () {

    $(this).css('background', colorId);
});

function changeColor(){
    colorId = colorField.val();
    brush.css('background', colorId);
}

function makeTwentyDivs() {
    for(var i=0 ; i<20 ; i++){
        $('.controls').append("<div class='square'></div>");
    }
}


