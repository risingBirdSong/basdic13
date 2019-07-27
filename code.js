"use strict";
function establishGrid(howManyRows, howManyColumns) {
    var isThisLikeA_DOM = [];
    for (var i = 1; i <= howManyRows; i++) {
        $(".main").append("<div class=\"row\"></div>");
        isThisLikeA_DOM.push("<div class=\"row\"></div>");
    }
    for (var j = 1; j <= howManyColumns; j++) {
        $(".row").append("<div class='column'><p>" + j + "</p></div>");
    }
}
establishGrid(100, 100);
function placeDivOverTheTop(x, y) {
}
