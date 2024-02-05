let button = document.querySelectorAll(".box");
let turn = true;
let count=0;
let winner = document.querySelector(".winner");
winner.style.visibility = "hidden";
let disabled = () => {
  button.forEach((element) => {
    element.disabled = true;
  });
};

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let addtext = (element) => {
  if (turn) {
    element.style.color = "red";
    element.innerText = "O";
    turn = false;
    element.disabled = true;
  } else {
    element.style.color = "green";
    element.innerText = "X";
    turn = true;
    element.disabled = true;
  }

  count++;
  console.log("the count is ",count);
  if(count==9)
  {
    winner.innerText = "DRAW";
    winner.style.visibility = "visible";
  }
  checkWinner();
};

button.forEach((element) => {
  element.addEventListener("click", () => addtext(element));
});
let reset = document.querySelector(".reset");
let reset_done = () => {
  button.forEach((val) => {
    val.innerText = " ";
    val.disabled = false;
    count=0;
  });
  winner.style.visibility = "hidden";
};
let checkWinner = () => {
winPattern.forEach((pattern) => {
    let index1 = button[pattern[0]].innerText;
    let index2 = button[pattern[1]].innerText;
    let index3 = button[pattern[2]].innerText;
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(index1, index2, index3);
    if (index1 != "" && index2 != "" && index3 != "") {
      if (index1 == index2 && index2 == index3) {
        if (index1 == "X") {
          winner.innerText = "Winner is X ✌️";
          winner.style.visibility = "visible";
          disabled();
        } else {
          winner.innerText = "Winner is O ✌️";
          winner.style.visibility = "visible";
          disabled();
        }
      }
    }
  });
};

reset.addEventListener("click", reset_done);
let new_game = document.querySelector(".New_game");
new_game.addEventListener("click", reset_done);
