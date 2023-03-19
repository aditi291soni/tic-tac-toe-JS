let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gammeover.mp3");
let turn = "X";
let gameoverturn = false;
const TurnChanges = () => {
  return turn === "X" ? "0" : "X";
};
const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      (boxText[e[0]].innerText === boxText[e[1]].innerText) &&
    (  boxText[e[1]].innerText === boxText[e[2]].innerText) &&
    (  boxText[e[0]].innerText !== "")
    ) {
      document.querySelector(".turns").innerText =
        boxText[e[0]].innerText + "  WON";
        console.log("won")
        gameoverturn=true
        gameover.play()
        document.querySelector('.img').getElementsByTagName('img')[0].style.width='90%'
    }
  });
};
let box = document.getElementsByClassName("box");
Array.from(box).forEach((elem) => {
  let boxText = elem.querySelector(".boxText");
  elem.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      console.log("hello");
      turn = TurnChanges();

      ting.play();
      checkWin();
      if(gameoverturn===false){
         document.querySelector(".turns").innerText = " YOUR TURN " + turn;
         console.log("nwon")
         
      }
    }
  });
});

reset.addEventListener('click', ()=>{
   let boxtexts = document.querySelectorAll('.boxText');
   Array.from(boxtexts).forEach(element => {
       element.innerText = ""
   });
   turn = "X"; 
   gameoverturn = false
   document.querySelector(".turns").innerText = " YOUR TURN " + turn;
   document.querySelector('.img').getElementsByTagName('img')[0].style.width='0px'

})
