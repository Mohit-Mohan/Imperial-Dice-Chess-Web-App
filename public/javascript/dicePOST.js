/*jslint white*/
/*jslint this*/

// Final dicePOST.js file, with resolved erros, showcasing triple rolled dice,
// for added element to the chess game.

// Defining piece images to be uploaded as dice sides.
const images = ["../../media/Pieces/wb.png","../../media/Pieces/wk.png",
"../../media/Pieces/wn.png", "../../media/Pieces/wq.png",
"../../media/Pieces/wp.png", "../../media/Pieces/wr.png"];

const dice = document.querySelectorAll("img");

// Declaring a funtion which reads an array dice, 
// and gives classname shake to each value in the array dice
function tripleroll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    // Timeout per shake animation is set to 500ms
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        // Randomly getting images from array
        let roll1 = Math.floor(Math.random() * 6);
        let roll2 = Math.floor(Math.random() * 6);
        let roll3 = Math.floor(Math.random() * 6);
        document.querySelector("#die-1").setAttribute("src", images[roll1]);
        document.querySelector("#die-2").setAttribute("src", images[roll2]);
        document.querySelector("#die-3").setAttribute("src", images[roll3]);
    }, 500);
}
// Function is being called
tripleroll();