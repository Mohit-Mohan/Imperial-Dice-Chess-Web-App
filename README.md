**CID:** 01722521

# Project
This repository is for the submission of your **Computing 2: Applications** coursework.

You should complete the proforma and populate this repository with your project submission.

* **Repository Creation Check:** Tuesday 4th May 18:00 – Update your CID in this file to check your submission.
* **Peer Assessment Deadline:** Tuesday 8th June 18:00
* **Final Submission Deadline:** Thursday 17th June 16:00

# Computing 2 Submission Proforma

For each section, write a maximum of 200 words.

****** How to start the web-app: Go to terminal

                                 Type node server.js (after installation)
                                 
                                 Go to Firefox developer
                                 
                                 Type http://localhost:8080/chess, and you shall be guided by the Home page.

## Brief
*State what you set out to acomplish with this web app.*

The web-app I chose to create was a two-player chess app with 3 dice elements in order to add a degree of luck to the strategy game, for people who just want to play casually. However, I made the dice feature optional in the sense that you do not have to use it if you do not want to. I also wanted to give it a Design Engineering theme, allowing me to showcase different UX/UI elements and make the game more fun and authentic.

I start the game off on the home webpage allowing users to read up on the new rules and select their player names, which gets stored on the main chess page as well through queries. This then leads the user to the main page where the game begins. Users can toggle between themes and even start a new game at any instance via simple user interface. The Dice Chess game mode has all basic rules of chess as well as some niche rules, with further implementation possible through existing code but not necessary under the current game theme.


## Coding
*Highlight your approach to coding in this project.*

The Project is separated into clear files, each having specific functions with thorough commenting and a general guide through given along for each file. All media, css, ejs, test and server files are separated and easy to distinguish. The rules of chess along with the board and some UI elements are created on a single script.js using Object Oriented and Functional programming to guide the programmer in a sequential manner through the code as well as allow for thorough debugging at all instances. This script.js is then called by the main.js file where execution takes place.

The functions make use of mapping, filtering, looping using forEach, for-of and while loops to create the board and its functions. Callbacks were also used to repeatedly ask server for feedback and also allowed the server to run smoothly. The code written overall, including all UI/UX elements is efficient and clear. I woluld also like to reference the course on Web Development I took on Udemy called “The Web Developer BootCamp 2021” as well as chess codes on youtube specifically by Tudor Todurescu and A Young Developer.  All of these sources allowed me to create a unique version of chess with a Design Engineering flavour.

## UX/UI
*Outline the key elements of your UX/UI design.*

The web-app uses a simple user interface with buttons, accompanied by consistent text to guide the user through the features of the game. The design caters to multiple user types by giving users the options to choose their background and chessboard themes. This is done through creation of multiple css files catering to the favourite subjects of the users, allowing them personalised choices of aesthetic. The javascript implemenation for the same is found in themes.js. The pieces are also in the form of the teachers to add an element of fun, with proper instructions provided for clarity.

The use of subtle animations using keyframes and mouse movements is also clear in the rolling of the dice for piece selection as well as moving the pieces on the board, the board also shows the users probale moves on selecting a piece to further guide people who are new to the game and ensure a smooth gaming experience. The UX/UI design is majorly focused on giving users their own choices of experiencing the web-app, with change allowed at any stage with simple toggling or using buttons.

## Data
*Explain how you structure and process your data.*

The program runs on the localhost:8080/chess which is the home page of the Web App. The program takes in two user inputs which are the names of the two players.The names are sent to the server which is a NodeJs server and goes to the URL localhost:8080/. The input names are sent to this URL as queries and are thus displayed along with the Chess board. The names are stored in the server as such and displayed even if the page is refreshed.


The Board, Pieces, Player, Squares and ultimately Chess are all classes which are interlinked and all these can be called using a single Chess Class as done in main.js. All functions can therefore be called via an object.The board renders on the URL localhost:8080/ as a normal chess board and the pieces are placed in the squares of the chess board via x and y coordinates.

All the names, moves, images and the positions of the pieces were stored in a JSON file through which we used the individual values of each chess piece. All the data was prewritten in the JSON file and a path was created so as to reduce the time to declare and call each value for each piece individually.

## Debugging
*Describe how you used debugging practices and tools and how they helped you overcome a bug or conceptual issue.*

The debugging process I followed consisted of a variety of approaches ranging from console.log in the terminal and later on Firefox developer, axe extension debugger, PBT and abstract user testing of the game and the features. The first stage of testing used constant checking on the terminal for logged Boolean values and calling functions of the class through objects. This proved hugely successful in establishing the foundations of the code.

I also made a chess.test.js file to test out subtle properties including that of white always having the first move, castling only being allowed to initiate by the king, check mate occurring only when the king,  pieces being captured only by those of the opposite colour, however, I was unable to completely implement these tests due to uncaught errors.


User testing was done to essentially break the program and find further bugs, this lead to the find of a subtle bug in the dicePRE.js file where the random roll was called twice leading to same rolls all the time. This was later fixed in the dicePOST.js which worked efficiently. Both files are available for view.




## Best Practice
*Outline your use of software development best practices*

This program requires many interlinks between css, ejs, js, json, png, and jpg  files which are therefore sub-divided into specific folders for systematic flow. There are very few JSlint errors and the use of for loops has been replaced with forEach, for.of and while for better practice. Multiple css themes and authenticity of the app also allow for increased user satisfaction.

The app can also be navigated via a simple keyboard and the program though complicated can easily be understood with the running commentary on each file. The use of Object.freeze for exporting to other modules is also prevalent.   The errors related to the server side are being detected via try and catch method, which on detection send an error from the server to the user as an alert, with a scope for further error handling. 