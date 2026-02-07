let input=document.querySelector("#user-input");
let btn=document.querySelector("#submit");
let guess=document.querySelector("#previous-guess");
let attempts=document.querySelector("#attempts-left");
let message=document.querySelector("#final-message");
let newGame=document.querySelector("#new");

let num=Math.floor(Math.random()*100)+1;
console.log(num)
let previousGuess=[];
let chance=0;
let playGame=true;




btn.addEventListener("click",()=>{
   
    let userInput=parseInt(input.value);
    previousGuess.push(userInput);
    chance++;
    message.innerHTML=""
    guess.innerHTML=`previous guesses: ${previousGuess}`
    attempts.innerHTML=`attempts left: ${10-chance}`
    validateGuess(userInput)
});



const validateGuess=function(userInput){
    if(userInput>100){
        message.innerHTML="invalid guess! choose a number below 100"
        return;
    }
    else if(userInput<1){
        message.innerHTML="invalid guess! choose a number above 0"
        return;
    }
    else if(isNaN(userInput)){
        message.innerHTML="invalid guess! please enter a number"
        return;
    }
    else{
        checkGuess(userInput)
    }

}


const canPlay=function(chance){
    if(chance>=10){
        btn.disabled=true;
        playGame=false;
        endGame(num)
    }
}


const checkGuess=function(userInput){
    if(userInput<num){
        message.innerHTML="low!"
    }
    else if(userInput>num){
        message.innerHTML="high!"
    }
    else if(userInput===num){
        message.innerHTML="GUESSED CORRECT!"
        playGame=false;
        btn.disabled=true;
    }
   
canPlay(chance)
}

const endGame=function(num){
    message.innerHTML=`chances over! the number was ${num}`;
}


newGame.addEventListener("click",()=>{
    chance=0;
    previousGuess=[]; 
    num=Math.floor(Math.random()*100)+1; 
    playGame=true; 
    btn.disabled=false;
    input.value=""; 
    guess.innerHTML="";
    attempts.innerHTML="10"; 
    message.innerHTML="";
    console.log(num);
});