let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

function roll1() {
    if (dice1 === 1) {
        document.querySelector('.img1').setAttribute('src', './images/dice1.png');
    } else if (dice1 === 2) {
        document.querySelector('.img1').setAttribute('src', './images/dice2.png');
    } else if (dice1 === 3) {
        document.querySelector('.img1').setAttribute('src', './images/dice3.png');
    } else if (dice1 === 4) {
        document.querySelector('.img1').setAttribute('src', './images/dice4.png');
    } else if (dice1 === 5) {
        document.querySelector('.img1').setAttribute('src', './images/dice5.png');
    } else if (dice1 === 6) {
        document.querySelector('.img1').setAttribute('src', './images/dice6.png');
    }
}

function roll2() {
    if (dice2 === 1) {
        document.querySelector('.img2').setAttribute('src', './images/dice1.png');
    } else if (dice2 === 2) {
        document.querySelector('.img2').setAttribute('src', './images/dice2.png');
    } else if (dice2 === 3) {
        document.querySelector('.img2').setAttribute('src', './images/dice3.png');
    } else if (dice2 === 4) {
        document.querySelector('.img2').setAttribute('src', './images/dice4.png');
    } else if (dice2 === 5) {
        document.querySelector('.img2').setAttribute('src', './images/dice5.png');
    } else if (dice2 === 6) {
        document.querySelector('.img2').setAttribute('src', './images/dice6.png');
    }
}

function winner(){
    if (dice1>dice2){
        document.querySelector('h1').textContent = "🚩 Player 1 wins!"
    }else if(dice1<dice2){
        document.querySelector('h1').textContent ="Player 2 wins! 🚩"  
    }else if(dice1===dice2){
        document.querySelector('h1').textContent ="🚩Draw!🚩"
    }
}

roll1();
roll2();
winner();

