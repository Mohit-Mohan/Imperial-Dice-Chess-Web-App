/*jslint white*/
/*jslint this*/

// The main file, where the game is initialised and board is created,
// along with all functions from the class called.
import Chess from "./script.js";

const Game = new Chess(); // Game

Game.init(function () {
	this.start();
}); // Initialize