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
var button1 = d3.select("#filter-btn1");
var button2 = d3.select("#filter-btn2");
var button3 = d3.select("#filter-btn3");
var button4 = d3.select("#filter-btn4");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// We can use the `on` function in d3 to attach an event to the handler function
//button.on("click", handleClick);

// You can also define the click handler inline
function dateFilter() {
  //clear data on current table
  tbody.html("");
  // stop the page from refresh
  d3.event.preventDefault();
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
  //displayTable(cityFilter);
  //displayTable(stateFilter);
  //console.log(dateFilter);
}

// We can use the `on` function in d3 to attach an event to the handler function
inputField.on("click", dateFilter);
button.on("click", dateFilter);

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputCity = d3.select("#city");

// You can also define the click handler inline
function filterDate() {
  //clear data on current table
  tbody.html("");
  // stop the page from refresh
  d3.event.preventDefault();
  //verify correct function is running
  console.log("The city filter button was clicked!");
  //create variable for value of input field
  var inputCityElement = inputCity.property("value");

  //filter by city
  var cityFilter = tableData.filter(
    ufoReport => ufoReport.city == inputCityElement
  );
  console.log(cityFilter);

  //display filtered table
  displayTable(cityFilter);
  //console.log(dateFilter);
}

// We can use the `on` function in d3 to attach an event to the handler function
inputCity.on("click", filterDate);
button1.on("click", filterDate);

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputState = d3.select("#state");

// You can also define the click handler inline
function filterState() {
  //clear data on current table
  tbody.html("");
  // stop the page from refresh
  d3.event.preventDefault();
  //verify correct function is running
  console.log("The filter state button was clicked!");
  //create variable for value of input field
  var inputStateElement = inputState.property("value");

  //filter by city
  var stateFilter = tableData.filter(
    ufoReport => ufoReport.state == inputStateElement
  );
  console.log(stateFilter);

  //display filtered table
  displayTable(stateFilter);
  //console.log(dateFilter);
}

// We can use the `on` function in d3 to attach an event to the handler function
inputCity.on("click", filterState);
button2.on("click", filterState);

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputCountry = d3.select("#country");

// You can also define the click handler inline
function filterCountry() {
  //clear data on current table
  tbody.html("");
  // stop the page from refresh
  d3.event.preventDefault();
  //verify correct function is running
  console.log("The filter country button was clicked!");
  //create variable for value of input field
  var inputCountryElement = inputCountry.property("value");

  //filter by city
  var countryFilter = tableData.filter(
    ufoReport => ufoReport.country == inputCountryElement
  );
  console.log(countryFilter);

  //display filtered table
  displayTable(countryFilter);
  //console.log(dateFilter);
}

// We can use the `on` function in d3 to attach an event to the handler function
inputCity.on("click", filterCountry);
button3.on("click", filterCountry);

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputShape = d3.select("#shape");

// You can also define the click handler inline
function filterShape() {
  //clear data on current table
  tbody.html("");
  // stop the page from refresh
  d3.event.preventDefault();
  //verify correct function is running
  console.log("The filter shape button was clicked!");
  //create variable for value of input field
  var inputShapeElement = inputShape.property("value");

  //filter by city
  var shapeFilter = tableData.filter(
    ufoReport => ufoReport.shape == inputShapeElement
  );
  console.log(shapeFilter);

  //display filtered table
  displayTable(shapeFilter);
  //console.log(dateFilter);
}

// We can use the `on` function in d3 to attach an event to the handler function
inputCity.on("click", filterShape);
button4.on("click", filterShape);
