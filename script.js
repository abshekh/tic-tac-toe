let turn = 0;
const cross = '<img src="images/cross.svg" alt="Cross" width="32" height="32" />';
const circle = '<img src="images/circle.svg" alt="Circle" width="32" height="32" />';

let box_1, box_2, box_3, box_4, box_5, box_6, box_7, box_8, box_9, winner, reset;

let alreadyFilled = [];

const checkBoxes = (box1, box2, box3) => {

  return box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML && alreadyFilled.includes(box1) && alreadyFilled.includes(box2) && alreadyFilled.includes(box3);
};

const checkIfWon = () => {
  const condition1 = checkBoxes(box_1, box_2, box_3);
  const condition2 = checkBoxes(box_4, box_5, box_6);
  const condition3 = checkBoxes(box_7, box_8, box_9);

  const condition4 = checkBoxes(box_1, box_4, box_7);
  const condition5 = checkBoxes(box_2, box_5, box_8);
  const condition6 = checkBoxes(box_3, box_6, box_9);

  const condition7 = checkBoxes(box_1, box_5, box_9);
  const condition8 = checkBoxes(box_3, box_5, box_7);

  if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8) return true;

  return false;

};

const handleClick = (box) => {
  if (!alreadyFilled.includes(box) && winner.innerHTML === '') {
    if (turn == 0) {
      box.innerHTML = cross;
      turn = 1;
      alreadyFilled.push(box);
      if (checkIfWon()) {
        winner.innerHTML = 'Winner is Cross';
      }
    } else {
      box.innerHTML = circle;
      turn = 0;
      alreadyFilled.push(box);
      if (checkIfWon()) {
        winner.innerHTML = 'Winner is Circle';
      }
    }

    if (alreadyFilled.length == 9 && winner.innerHTML === '') {
      winner.innerHTML = 'Draw!';
    }
  }
};


document.addEventListener("DOMContentLoaded", async () => {

  box_1 = document.getElementById('box-1');
  box_2 = document.getElementById('box-2');
  box_3 = document.getElementById('box-3');
  box_4 = document.getElementById('box-4');
  box_5 = document.getElementById('box-5');
  box_6 = document.getElementById('box-6');
  box_7 = document.getElementById('box-7');
  box_8 = document.getElementById('box-8');
  box_9 = document.getElementById('box-9');
  winner = document.getElementById('winner');
  reset = document.getElementById('reset');


  box_1.addEventListener("click", () => handleClick(box_1));
  box_2.addEventListener("click", () => handleClick(box_2));
  box_3.addEventListener("click", () => handleClick(box_3));
  box_4.addEventListener("click", () => handleClick(box_4));
  box_5.addEventListener("click", () => handleClick(box_5));
  box_6.addEventListener("click", () => handleClick(box_6));
  box_7.addEventListener("click", () => handleClick(box_7));
  box_8.addEventListener("click", () => handleClick(box_8));
  box_9.addEventListener("click", () => handleClick(box_9));

  reset.addEventListener("click", () => {
    alreadyFilled = [];
    winner.innerHTML = '';
    box_1.innerHTML = '';
    box_2.innerHTML = '';
    box_3.innerHTML = '';
    box_4.innerHTML = '';
    box_5.innerHTML = '';
    box_6.innerHTML = '';
    box_7.innerHTML = '';
    box_8.innerHTML = '';
    box_9.innerHTML = '';
    turn = 0;
  });

});