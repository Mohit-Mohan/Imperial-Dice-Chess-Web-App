/*jslint white*/
/*jslint this*/

// This is the main property based testing file, 
// where functions are checked through mocha testing and fast-check,
// valid concerns like player moves, is check mate, castling only with king,
// eat only opposition pieces and other tests were carried out as part of debug.
// The template followed is of PBT, 
// the tests did not seem to run due to an uncaught error in the debug console,
// hence were verified manually and through console logs as best possible, 
// however, the process is documented below.

import Chess from "../public/javascript/chess.js";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;

const Game = new Chess(); // game

Game.init(function () {
	this.start();
}); // initialize

describe("White is always first", function () {
        it(
            "Given a board; " +
            "Game starts; " +
            "White has first move; ",
            function () {
                fc.assert(fc.property(
                    Game.start === true && Game.info.turn === "white"
                ));
                return true;
            }
        );
    });

describe("Game ends at Check Mate", function () {
        it(
            "Given a board; " +
            "player is under check; " +
            "no more moves possible; ",
            function () {
                fc.assert(fc.property(
                    Game.isMate === true && Game.testMove === null
                ));
                return true;
            }
        );
    });

describe("Castling only with king", function () {
        it(
            "Given a board; " +
            "King chosen; " +
            "Castling possible if no piece present; ",
            function () {
                fc.assert(fc.property(
                    Game.info.name === "king" && Game.castling() === true
                ));
                return true;
            }
        );
    });

describe("Eat opposition pieces", function () {
        it(
            "Given a board; " +
            "Check possible moves; " +
            "Eat if move possible; " +
            "and color opposite; ",
            function () {
                fc.assert(fc.property(
                    Game.getPossibilities() === true && Game.testEnemy === true 
                    && Game.info.piece.player.data.role === true
                ));
                return true;
            }
        );
    });

// describe("is check mate", function () {

//     property(
//         "Description of an expectation or property",
//         [ // What kind of input arguments are expected.
//             fc.array(fc.string)
//         ],
//         function (input) {
//             const Game = new Chess(); // game

//             Game.init(function () {
// 	        this.start();

//             }); // initialize

//             // ...
//             return true; // or false – on success or failure.
//         }
//     );

// });

// describe("Possible Moves", function () {
//     it(
//         "Given a board; " +
//         "After finding all possible moves for any peice on the board; " +
//         "Then none of the moves should be on a piece with the same color",
//         function () {
//             fc.assert(fc.property(
//                 arbBoard,
//                 arbPosition,

//                 function (board, position) {
//                     const clashes = posColor(board, position,
//                      postDBG).clashes;
//                     return clashes[0] === undefined;
//                 }

//             ));
//         }
//     );
// });

