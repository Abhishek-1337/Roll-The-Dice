const imgTag = document.querySelector('img');
const button = document.querySelectorAll('.number__boxes-box');
const timingState = document.querySelector('.text__secondary-one');
const isGuessRight = document.querySelector('.text__secondary-two');
const selectedVar1 = document.querySelector('.leader__board-span-text1');
const selectedVar2 = document.querySelector('.leader__board-span-text2');
let number = 0, score = 0, varTimeLeft = -5, timerId = 0, selectedNum = 0;


function resolve(){
    score += 1;
    selectedNum = 0;
    selectedVar2.innerText = score;
    isGuessRight.innerText = "Your Guess was right";
}

function reject(){
    selectedNum = 0;
    isGuessRight.innerText = "Your Guess was wrong"; 
    clearInterval(timerId);
}

while(!timerId){
    if(varTimeLeft === 3){
    timerId = setInterval(()=>{
            if(varTimeLeft === 0){

                timingState.innerText = "";

                if(selectedNum !== 0){
                    number = Math.floor(Math.random()*6)+1;
                    imgTag.src = 'img/dice'+number+'.png';

                    if(selectedNum === number && number != 0){
                        resolve();
                    }
                    else{
                        reject();
                    }

                }

                else if(selectedNum === 0){
                        isGuessRight.innerText = "Select a number"; 
                    }
               
                varTimeLeft = 3;
                
            }

            else{
                timingState.innerText = "The dice will change in "+varTimeLeft+" seconds";
                varTimeLeft--;
            }
       
    },1000);

    }

    else{
        timingState.innerText = "Loading game will start in a few second!";
        varTimeLeft++;
    }
}

for(let btn of button){
        btn.addEventListener('click',()=>{
            selectedNum = parseInt(btn.innerText);
            selectedVar1.innerText = selectedNum;
        });     
}




  


