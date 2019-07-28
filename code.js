"use strict";
var htmlItem;
(function (htmlItem) {
    htmlItem["p"] = "p";
    htmlItem["h3"] = "h3";
})(htmlItem || (htmlItem = {}));
var isPaused = false;
function appending(numbers, delayInMS, tag, isPaused) {
    if (isPaused === void 0) { isPaused = false; }
    var main = $(".main");
    var arrStart = $(".arr_start");
    var arrEnd = $(".arr_end");
    var insideArr = $(".inside_of_array");
    arrStart.append("<p class='left_bracket child'>let outPutArr = [</p>");
    var i = 0;
    function lognumbers(input) {
        console.log(i);
        if (isPaused === true) {
            console.log('i should be paused');
            delayInMS = 100000000;
        }
        var myInterval = setInterval(function () {
            if (i >= input) {
                console.log("i should clear");
                clearInterval(myInterval);
            }
            var appendMe = "<" + tag + " id=\"current\">" + i + ", </" + tag + ">";
            insideArr.append(appendMe);
            setTimeout(function () {
                $("#current").removeAttr("id");
            }, delayInMS);
            i++;
        }, delayInMS);
    }
    lognumbers(numbers);
    arrEnd.append("<p class='right_bracket child'>];</p>");
}
function startTheSequence() {
    //@ts-ignore
    appending(30, 300, htmlItem.p);
}
function pauseTheSequence() {
    isPaused = true;
}
$(".begin").click(startTheSequence);
$(".end").click(pauseTheSequence);
