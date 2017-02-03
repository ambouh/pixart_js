var colorField = $('#color-field'),
    setColor = $('#set-color'),
    brush = $('.brush'),
    colorId;

setColor.on('click', function (e) {
    //to prevent page from refreshing
    e.preventDefault();

    colorId = colorField.val();
    brush.css('background', colorId);
    console.log("hello!");
});
