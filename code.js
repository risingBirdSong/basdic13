"use strict";
var htmlItem;
(function (htmlItem) {
    htmlItem["p"] = "p";
    htmlItem["h3"] = "h3";
})(htmlItem || (htmlItem = {}));
function appending(numbers, delayInMS, tag) {
    var main = $(".main");
    var arrStart = $(".arr_start");
    var arrEnd = $(".arr_end");
    var insideArr = $(".inside_of_array");
    arrStart.append("<p class='left_bracket child'>let outPutArr = [</p>");
    var i = 0;
    function lognumbers(input) {
        console.log(i);
        var myInterval = setInterval(function () {
            if (i >= input) {
                console.log("i should clear");
                clearInterval(myInterval);
            }
            var appendMe = "<" + tag + ">" + i + ", </" + tag + ">";
            insideArr.append(appendMe);
            i++;
        }, delayInMS);
    }
    lognumbers(numbers);
    arrEnd.append("<p class='right_bracket child'>]</p>");
}
appending(50, 300, htmlItem.p);
