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

//Create function to loop display table
function displayTable(data) {
  //clear current entry
  tbody.text("");
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
}

//Display all table data
displayTable(tableData);

//Use a date form in your HTML document and write JavaScript code that will listen for events and
//search through the date/time column to find rows that match user input.

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// We can use the `on` function in d3 to attach an event to the handler function
//button.on("click", handleClick);

// You can also define the click handler inline
function handleChange() {
  //clear data on current table
  tbody.html("");
  //verify correct function is running
  console.log("Hi, the date filter button was clicked!");
  //create variable for value of input field
  var inputElement = inputField.property("value");
  //console.log(inputElement);
  //filter by date
  var dateFilter = tableData.filter(
    ufoReport => ufoReport.datetime == inputElement
  );
  //display filtered table
  displayTable(dateFilter);
  //console.log(dateFilter);
}

// We can use the `on` function in d3 to attach an event to the handler function
inputField.on("click", handleChange);
button.on("click", handleChange);
