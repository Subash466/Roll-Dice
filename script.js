'use strict';

// Selecting elements
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const btnRule = document.querySelector('.btn-rule');

let playerScore, activePlayer, originalScore, playing;
//starting game event
function init(){
  playing=true;
  originalScore=[0,0];
  playerScore=0;
  activePlayer=0;
  document.querySelector(`#current-0`).textContent=0;
  document.querySelector(`#current-1`).textContent=0;
  document.getElementById(`score-0`).textContent=0;
  document.getElementById(`score-1`).textContent=0;
  player0.classList.add('player-active'); 
  player1.classList.remove('player-active');
  player1.classList.remove('player-winner');
  player0.classList.remove('player-winner'); 
  dice.classList.add('hidden');
}

init();
//switch player
function switchPlayer(){
  playerScore=0;
  document.querySelector(`#current-${activePlayer}`).textContent=playerScore;
  activePlayer=activePlayer===0 ? 1 : 0;
  player0.classList.toggle('player-active'); 
  player1.classList.toggle('player-active');
}
//roll dice
btnRoll.addEventListener("click",()=>{
  if(playing){
  let diceSuffle=Math.floor(Math.random()*6)+1;
  dice.classList.remove('hidden')
  dice.src=`dice-${diceSuffle}.png`;
 if(diceSuffle!=1){
  playerScore+=diceSuffle;
  document.querySelector(`#current-${activePlayer}`).textContent=playerScore;
 }else{
  switchPlayer()
 }
 }}
)

//hold event
btnHold.addEventListener('click',()=>{
  if(playing){
  originalScore[activePlayer]+=playerScore;
  document.getElementById(`score-${activePlayer}`).textContent=originalScore[activePlayer];
  if(originalScore[activePlayer]>=20){
    dice.classList.add('hidden');
    document.getElementById(`score-${activePlayer}`).textContent="WIN";
    document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
    document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
    playing=false;
  }else{
    switchPlayer()
  }}
})

//restart game event
btnNew.addEventListener('click',init);