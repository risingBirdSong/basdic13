function establishGrid(howManyRows: number, howManyColumns: number) {
  let isThisLikeA_DOM = [];
  for (let i = 1; i <= howManyRows; i++) {
    $(".main").append(`<div class="row"></div>`);
    isThisLikeA_DOM.push(`<div class="row"></div>`);
  }

  
  for (let j = 1; j <= howManyColumns; j++) {
    $(".row").append(`<div class='column'><p>${j}</p></div>`);
  }

}

establishGrid(100, 100);


function placeDivOverTheTop(x : number, y : number) {

}

