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


function changeColor(){
    colorId = colorField.val();
    brush.css('background', colorId);
    console.log("hello!");
}
