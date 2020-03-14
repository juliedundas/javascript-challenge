// from data.js
//Level 1: Automatic Table and Date Search (Required)
//READ IN TABLE INTO INDEX.HTML
//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends
//a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
//console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(ufoReport) {
  //console.log(ufoReport);

  // Step 2:  Use d3 to append one table row `tr` for each UFO report object
  var row = tbody.append("tr");
  //console.log(ufoReport);

  // Step 3:  Use `Object.entries` to console.log each UFO report value
  Object.entries(ufoReport).forEach(function([key, value]) {
    //console.log(key, value);
    // Step 4: Use d3 to append 1 cell per UFO report value (date, city, state, country, shape, duration, comments)
    var cell = row.append("td");
    //console.log(cell);
    cell.text(value);
  });
});

//Use a date form in your HTML document and write JavaScript code that will listen for events and
//search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");
var inputField = d3.select("#form-control");

function handleClick() {
  console.log("You clicked a button!");
  console.log(d3.event.target);
}

console.log("click", handleClick);
//var selectedDate = data.filter(selectDate);
