enum htmlItem {
  p = "p",
  h3 = "h3"
}

let isPaused = false;
let pausePoint: number;
let snapshot: any;
let argument: number = 30;
let howMuchToDelay = 100;

function appending(
  numbers: number,
  delayInMS: number,
  tag: htmlItem,
  i: number = 0,
  stateCondition: any = "<p class='left_bracket child'>let outPutArr = [</p>"
) {
  console.log(delayInMS);
  let main = $(".main");
  let arrStart = $(".arr_start");
  let arrEnd = $(".arr_end");
  let insideArr = $(".inside_of_array");

  arrStart.append(stateCondition);

  function lognumbers(input: number) {
    console.log(argument);
    let myInterval = setInterval(function() {
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

      let appendMe = `<${tag} id="current">${i}, </${tag}>`;
      insideArr.append(appendMe);

      setTimeout(function() {
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

$(".howManyNumbers").submit(function() {
  argument = parseInt(
    //@ts-ignore
    $(this)
      .children()
      .val()
  );
  $(".argument").text(argument);
});

$(".howFast").submit(function(){
  howMuchToDelay = parseFloat(
    //@ts-ignore
    $(this).children().val());
})

let outPutArr: number[] = [];
function pushToArray(input: number) {
  for (let i = 0; i <= input; i++) {
    outPutArr.push(i);
  }
  return outPutArr;
}
pushToArray(argument);
