/*jslint white*/
/*jslint this*/

// This file helps user navigate through different css sheets,
// implying different page aesthetics based on user preference.

// Toggling between different themes based on user selection.
const themeSelect = document.getElementById("themeSelect");
const themeStylesheet= document.getElementById("themeStylesheet");

// Adding an event listener change, 
// that changes value each time themeSelect is selected
themeSelect.addEventListener("change", () => {
    // Setting css file to be accessed
    themeStylesheet.setAttribute("href", "../css/"
    + themeSelect.value + ".css");
});