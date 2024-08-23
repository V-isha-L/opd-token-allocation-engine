let playBtn = document.querySelector(".play");
let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");
let win = document.querySelector(".winner");

playBtn.addEventListener("click",function() {
    let diceNum1 = Math.floor((Math.random() * 6) + 1);
    let diceNum2 = Math.floor((Math.random() * 6) + 1);
    

// for dice 1
    switch(diceNum1) {
        case 1 : dice1.classList.add("d1");
        break;
        case 2 : dice1.classList.add("d2");
        break;
        case 3 : dice1.classList.add("d3");
        break;
        case 4 : dice1.classList.add("d4");
        break;
        case 5 : dice1.classList.add("d5");
        break;
        case 6 : dice1.classList.add("d6");
        break;
        default : alert("tf You doin ?");
    }

// for dice 2
    switch(diceNum2) {
        case 1 : dice2.classList.add("d1");
        break;
        case 2 : dice2.classList.add("d2");
        break;
        case 3 : dice2.classList.add("d3");
        break;
        case 4 : dice2.classList.add("d4");
        break;
        case 5 : dice2.classList.add("d5");
        break;
        case 6 : dice2.classList.add("d6");
        break;
        default : alert("tf You doin ?");
    }

// winner

    if(diceNum1 > diceNum2) {
        win.innerHTML = "Winner is Player-1";
        win.classList.remove("hide");
    } else if(diceNum1 < diceNum2) {
        win.innerHTML = "Winner is Player-2";
        win.classList.remove("hide");
    } else {
        win.innerHTML = "The game is a tie";
        win.classList.remove("hide");
    }

})