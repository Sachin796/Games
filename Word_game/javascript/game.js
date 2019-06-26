let words = ["batmen", "spiderman", "superman", "hulk", "thor"];
let randomword, data, i, j;
let dummy;
let dummy1 = "h";
var x;


function generate() {
    document.getElementById("guessavenger").innerHTML = "Guess the avenger below ... ENJOY !!!";
    randomword = words[Math.floor(Math.random() * words.length)];
    let count = (randomword.length) + 1;
    let success = 0;
    console.log(randomword);
    var dummy = [];
    dummy = randomword.split('');
    dummy1 = randomword.toLowerCase();
    data = [];
    document.getElementById("blanks").innerHTML = "";

    //Call all the  relative functions below
    blanksfill();
    imagedisplay(dummy1);
    gameplay(count, success);
}

function blanksfill() {
    for (i = 0; i < randomword.length; i++) {
        data.push("_")
        document.getElementById("blanks").append("_ \n");
    }
}

function imagedisplay(dummy1) {
    console.log(dummy1);
    if (dummy1 === "batmen") {
        document.getElementById("display").innerHTML = "<img src='images/batman.jpg'></img>";
    } else if (dummy1 === "superman") {
        document.getElementById("display").innerHTML = "<img src='images/superman.jpg'></img>";
    } else if (dummy1 === "spiderman") {
        document.getElementById("display").innerHTML = "<img src='images/spiderman.jpg'></img>";
    } else if (dummy1 === "hulk") {
        document.getElementById("display").innerHTML = "<img src='images/hulk.jpg'></img>";
    } else if (dummy1 === "thor") {
        document.getElementById("display").innerHTML = "<img src='images/thor.jpg'></img>";
    }
}

function gameplay(count, success) {

    document.onkeyup = function keypress(event) {
        breakloop: if (count == 0) {
            alert("Sorry You lost...  no more guesses left... !!! ");
            return;
        } else if (count != 0) {
            if (success === (randomword.length)) {
                document.getElementById("final").innerHTML =
                    "<span style='color:yellowgreen'>Congragulations on winning the game !!!! Press below to play again </span>";
                break breakloop;
            } else {
                for (j = 0; j < randomword.length; j++) {
                    if (randomword.charAt(j) === event.key) {
                        success++;
                        console.log(success);
                        data[j] = event.key.toLowerCase();
                        console.log(count);
                        document.getElementById("blanks").innerHTML = (data.join(' '));
                        document.getElementById("final").innerHTML = ("Number of guesses left : - " +
                            count);
                        break;
                    }
                }
            }
            if (randomword.charAt(j) != event.key) {
                count--;
                document.getElementById("final").innerHTML = ("Number of guesses left : - " + count);
            }
        }
    }
    document.getElementById("final").innerHTML = ("Number of guesses left : - " + count);

};