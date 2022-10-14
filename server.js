/*jslint white*/

// In this server.js file, installation of node modules takes place firstly,
// which is used in this file along with express.
// Set the view type of the templates to ejs and setup the engine for it.
// Got the values from the /chess and / route parameters which 
// rendered the home and index ejs templates respectively.
// For storing, got the user input values as names of the players
// and passed them to the index.ejs file, which would show even if the page 
// was to be reloaded as they are being stored as queries in the URL. (Database)
// Also used try and catch error handling and alerted the error for the same.
const express = require("express");
const app = express();
const path = require("path");

// Setting the view type of the templates(files) as ejs in the folder view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// View engine setup
app.use(express.static(__dirname + "/public"));

// Getting the value from the URL localhost:8080/chess
app.get("/chess",(req,res) => {
    // Error Handling
    try{
    // Getting the User Input values as queries  
    const q = req.query.txt;
    const p = req.query.txt;
    // Rendering the home.ejs template
    res.render("home");
    }
    catch(error){
        alert("error");
    }
});

// Getting the value from the URL localhost:8080/ or localhost:8080
app.get("/", (req,res) => {
    // Error Handling
    try{
        // Getting the User Input values as queries 
        const q =  req.query.txt;
        const p =  req.query.txt;
         // Rendering the index.ejs template 
        //  and passing the Input values/queries found to the index.ejs template
        res.render("index",{q,p});
    }
    catch(error){
        alert("error");
    }
});

// Locally deploying the server on the port 8080 
// which when executed returns value in console
app.listen(8080,() => {
    console.log("running");
});