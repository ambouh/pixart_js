var colorField = $('#color-field'),
    setColor = $('#set-color'),
    brush = $('.brush:nth-child(1)'),
    brush2 = $('.brush:nth-child(2)'),
    brush3 = $('.brush:nth-child(3)');

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


$('body').on('click', function (e) {
    e.preventDefault();
    var colorToUse;
    var selected = $(e.target);

    if(selected.is(setColor)) {
        e.preventDefault();
        brush3.css('backgroundColor', getColor(brush2));
        brush2.css('backgroundColor', getColor(brush));
        colorToUse = colorField.val();
    } else if (selected.is(brush2)) {
        colorToUse = getColor(brush2);
        brush2.css('backgroundColor', getColor(brush));
    } else if (selected.is(brush3)) {
        colorToUse = getColor(brush3);
        brush3.css('backgroundColor', getColor(brush2));
        brush2.css('backgroundColor', getColor(brush));

    } else {}

    paint(brush, colorToUse);

});

function paint(selectedElement, colorToUse){
    var colorToPaint = colorToUse;
    selectedElement.css('background', colorToPaint);
}


function getColor(element) {
    return element.css('backgroundColor');
}

