/*jslint white*/
/*jslint this*/

// Dice.js file with errors, predebugged version, 
// the same images were shown on two die, implying error in code.
// Upon debugging, the error was found and dealt with in the post debugged file.

const images = ["../../media/Pieces/wb.png","../../media/Pieces/wk.png",
"../../media/Pieces/wn.png","../../media/Pieces/wq.png",
"../../media/Pieces/wp.png","../../media/Pieces/wr.png"];

const dice = document.querySelectorAll("img");

function tripleroll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let roll1 = Math.floor(Math.random() * 6);
        let roll2 = Math.floor(Math.random() * 6);
        // Value for roll3 declared but never read pinpoints error origin
        let roll3 = Math.floor(Math.random() * 6);
        document.querySelector("#die-1").setAttribute("src", images[roll1]);
        document.querySelector("#die-2").setAttribute("src", images[roll2]);
        // Calling roll2 twice led to same value being rolled every time
        // Silly error but fixed upon debugging
        document.querySelector("#die-3").setAttribute("src", images[roll2]);
    }, 500);
}
tripleroll();