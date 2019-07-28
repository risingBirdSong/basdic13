enum htmlItem {
  p = "p",
  h3 = "h3"
}

let isPaused = false;

function appending(numbers: number, delayInMS: number, tag: htmlItem, isPaused = false) {
  let main = $(".main");
  let arrStart = $(".arr_start");
  let arrEnd = $(".arr_end");
  let insideArr = $(".inside_of_array");

  arrStart.append("<p class='left_bracket child'>let outPutArr = [</p>");

  let i = 0;
  function lognumbers(input: number) {
    console.log(i);
    if (isPaused === true) {
      console.log('i should be paused');
      delayInMS = 100000000;
    }
    let myInterval = setInterval(function() {
      if (i >= input) {
        console.log("i should clear");
        clearInterval(myInterval);
      }
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
  appending(30, 300, htmlItem.p);
}

function pauseTheSequence () {
  isPaused = true;
}

$(".begin").click(startTheSequence);

$(".end").click(pauseTheSequence);
