enum htmlItem {
  p = "p",
  h3 = "h3"
}

function appending(numbers: number, delayInMS: number, tag: htmlItem) {
  let main = $(".main");
  let arrStart = $(".arr_start");
  let arrEnd = $(".arr_end");
  let insideArr = $(".inside_of_array");

  arrStart.append("<p class='left_bracket child'>let outPutArr = [</p>");

  let i = 0;
  function lognumbers(input: number) {
    console.log(i);
    let myInterval = setInterval(function() {
      if (i >= input) {
        console.log("i should clear");
        clearInterval(myInterval);
      }
      let appendMe = `<${tag}>${i}, </${tag}>`;
      insideArr.append(appendMe);
      i++;
    }, delayInMS);
  }

  lognumbers(numbers);

  arrEnd.append("<p class='right_bracket child'>]</p>");
}

appending(50, 300, htmlItem.p);
