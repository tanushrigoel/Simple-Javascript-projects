let random_num=parseInt(Math.random()*100+1)

let userInput = document.querySelector('#num');
let prev = document.querySelector('.guesses')
let remain = document.querySelector('.remaining')
let lh = document.querySelector('.low_high')
let sub_but = document.querySelector('.submit')
let paras = document.querySelector('.result_paras')

let prev_guess=[]

let game=true

let num_guesses=1

let p=document.createElement('p')

if(game){
    sub_but.addEventListener('click',(e)=>{
        e.preventDefault()
        const userval = userInput.value;
        validateguess(userval)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess > 100 || guess < 1){
        alert("Please enter a number within 1 and 100")
    } else{
        prev_guess.push(guess)
        if(num_guesses >= 11){
            display_guess(guess)
            display_mess(`Random number was ${random_num}`)
            endgame()
        }
        else{
            display_guess(guess)
            check_guess(guess)
        }
    }
}

function check_guess(guess){
    if(guess == random_num){
        display_mess(`You guessed it right`)
        endgame()
    }
    else if(guess <  random_num){
        display_mess(`Guess a higher number`)
    }
    else{
        display_mess(`Guess a lower number`)
    }
}

function display_guess(guess){
    userInput.value=''
    prev.innerText+=` ${guess}`
    num_guesses++;
    remain.innerText=`${11 - num_guesses}`
}

function display_mess(message){
    lh.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    game=false
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    paras.appendChild(p)
    newgame()
}

function newgame(){
    const newga = document.querySelector('#newGame');
    newga.addEventListener('click',()=>{
        random_num = parseInt(Math.random() * 100 + 1)
        prev_guess=[]
        num_guesses=1
        prev.innerHTML=''
        lh.innerHTML=''
        remain.innerHTML=`${11-num_guesses}`
        userInput.removeAttribute('disabled')
        paras.removeChild(p)
        game=true
    });
}

