"use strict";
var htmlItem;
(function (htmlItem) {
    htmlItem["p"] = "p";
    htmlItem["h3"] = "h3";
})(htmlItem || (htmlItem = {}));
var isPaused = false;
var pausePoint;
var snapshot;
var argument = 30;
var howMuchToDelay = 100;
function appending(numbers, delayInMS, tag, i, stateCondition) {
    if (i === void 0) { i = 0; }
    if (stateCondition === void 0) { stateCondition = "<p class='left_bracket child'>let outPutArr = [</p>"; }
    console.log(delayInMS);
    var main = $(".main");
    var arrStart = $(".arr_start");
    var arrEnd = $(".arr_end");
    var insideArr = $(".inside_of_array");
    arrStart.append(stateCondition);
    function lognumbers(input) {
        console.log(argument);
        var myInterval = setInterval(function () {
            if (i >= input) {
                clearInterval(myInterval);
            }
            if (isPaused === true) {
                clearInterval(myInterval);
            }
            pausePoint = i;
            snapshot = $(".arr_start")
                .html()
                .concat($(".inside_of_array").html());
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
    appending(argument, howMuchToDelay, htmlItem.p);
}
function pauseTheSequence() {
    console.log("hit pause");
    isPaused = true;
    console.log(snapshot);
}
function resumeSequence() {
    isPaused = false;
    $(".main div").empty();
    appending(argument, howMuchToDelay, htmlItem.p, pausePoint, snapshot);
}
$(".begin").click(startTheSequence);
$(".pause").click(pauseTheSequence);
$(".resume").click(resumeSequence);
$(".argument").text(argument);
$(".howManyNumbers").submit(function () {
    argument = parseInt(
    //@ts-ignore
    $(this)
        .children()
        .val());
    $(".argument").text(argument);
});
$(".howFast").submit(function () {
    howMuchToDelay = parseFloat(
    //@ts-ignore
    $(this).children().val());
});
var outPutArr = [];
function pushToArray(input) {
    for (var i = 0; i <= input; i++) {
        outPutArr.push(i);
    }
    return outPutArr;
}
pushToArray(argument);
