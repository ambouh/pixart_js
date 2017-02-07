var colorField = $('#color-field'),
    setColor = $('#set-color'),
    brush = $('.brush:nth-child(1)'),
    brush2 = $('.brush:nth-child(2)')

    //,brush3 = $('.brush:nth-child(3)')
    ;

setColor.on('keyup', function (e) {

    if(e.keyCode == 13) {
        //to prevent page from refreshing
        e.preventDefault();
        paint(brush,colorField.val());
    }
});

setColor.on('click', function (e) {
    //to prevent page from refreshing
    e.preventDefault();
    paint(brush,colorField.val());
});

/*makeDivs() - creates 8000 divs that is used as a board*/
function makeDivs() {
    for(var i=0 ; i<8000 ; i++){
        $('.controls').append("<div class='square'></div>");
    }
}

makeDivs();

/*paint() - takes two argument a selected element and a color,
    it applies this color to the element*/
$('.square').on('mouseover', function () {
        var selectedElement = $(this);
        var colorToUse = brush.css('backgroundColor');

        paint(selectedElement, colorToUse);
    }
);

function paint(selectedElement, colorToUse){
    var colorToPaint = colorToUse;
    selectedElement.css('background', colorToPaint);
}











/*
brush2.on('click', function () {
    var color2 = brush2.css('backgroundColor');
    changeColor(color2);
});



function changeColor(color){
    colorId = color;
    brush.css('background', colorId);
}


*/




