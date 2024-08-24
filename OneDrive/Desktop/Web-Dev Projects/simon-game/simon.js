$(document).ready(function() {
let level = 1;
let quad = [$(".topLeft"),$(".topRight"),$(".downLeft"),$(".downRight")];
let gamePattern = [Math.floor(Math.random() * 4)];
let userPattern = [];
let userLevel = 0;

// to start game when player clicks on play
    $(".play").on("click", function() {
        $(this).addClass("hide");
        startGame(0);
    })

    function startGame(index) {
        if(index < gamePattern.length) {
            setTimeout(function() {
                makeSound(gamePattern[index]);
                showPattern(gamePattern[index]);
                startGame(index+1);
            },1000);
        } else {
            $(".quadrant").off("click").on("click", function(evt) {
                let quadId = parseInt(evt.target.id);
                makeSound(quadId);
                showPattern(quadId);
                userPattern.push(quadId);
                userLevel++;

                if(checkWin(userLevel)) {
                    if(userPattern.length === gamePattern.length) {
                        level++;
                        $(".scoreBoard").text("Level - "+level);
                        $(".quadrant").off("click");
                        userPattern = [];
                        userLevel = 0;
                        gamePattern.push(Math.floor(Math.random() * 4));
                        setTimeout(function() {
                            startGame(0);
                        },1000);
                    } 
                } else {
                    makeSound(5);
                    alert("Wrong");
                    level = 1;
                    index=0;
                    $(".scoreBoard").text("Level - "+level);
                    gamePattern = [Math.floor(Math.random() * 4)];
                    userPattern = [];
                    userLevel = 0;
                    $(".play").removeClass("hide");
                }
            })
        }
    }


    
    // to show that the btn is pressed

    function showPattern(n) {
        quad[n].addClass("pressed");
        setTimeout(function() {
            quad[n].removeClass("pressed");
        },150)
    }

    // // to make sound effect when a btn is pressed
    
    function makeSound(n) {
        switch(n) {
            case 0 : myTone = new Audio("sounds/red.mp3");
                        myTone.play();
            break;
            case 1 : myTone = new Audio("sounds/green.mp3");
                        myTone.play();
            break;
            case 2 : myTone = new Audio("sounds/blue.mp3");
                        myTone.play();
            break;
            case 3 : myTone = new Audio("sounds/yellow.mp3");
                        myTone.play();
            break;
            default : myTone = new Audio("sounds/wrong.mp3");
        }
    }

    // // to check that which btn is being pressed

    function checkWin(userLevel) {
       for(let i = 0;i<userLevel;i++) {
        if(gamePattern[i] !== userPattern[i]) {
            return false;
        }
       }
       return true;
    }

})


