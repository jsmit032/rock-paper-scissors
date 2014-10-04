window.onload = function() {
    var images = {
        rock : {
            src: 'img/rock.png'
        },

        paper : {
            src: 'img/paper.png'
        },

        scissors : {    
            src: 'img/scissors.png'
        }
    };
    for (var i in images) {
        var image = new Image();
        image.onclick = function(){
           userChoice = this.parentNode.id;
           //alert(compare(userChoice, computerChoice));
           Winner();
        };
        image.src = images[i].src;
        document.getElementById(i).appendChild(image);
    }

    var computerChoice = Math.floor(Math.random() * 3);

    computerChoice = (computerChoice == 0 ? "rock" : (computerChoice == 1 ? "paper" : "scissors"));

    var compare = function (choice1, choice2) {
        var answer = "Computer chose: " + choice2;
        if (choice1 === choice2) {
            return "The result is a tie!";
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return answer + ", You win!";
            } else {
                return answer + ", Computer wins!";
            }
        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return answer + ", You win!";
            } else {
                return answer + ", Computer wins!";
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return answer + ", You win!";
            } else {
            return answer + ", Computer wins!";
        }
        }
    }

    var Winner = function() {
        var winState = document.createElement("p");
        var callCompare = document.createTextNode(compare(userChoice, computerChoice));
        winState.appendChild(callCompare);

        var insert = document.getElementById("result");
        insert.appendChild(winState);
    }
};