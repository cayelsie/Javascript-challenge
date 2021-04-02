// from data.js
var tableData = data;

// set a variable for table body
var tbody = d3.select("tbody");

// Create a reusable function for creating the table
var createTable = selectData  => {

  //Start with a clean slate
  tbody.html("");

  //Loop through entire array
  selectData.forEach((sighting) => {

  //append one table row for each object in the array
  var row = tbody.append("tr");

  //Loops through each object (dictionary) in the array
  Object.entries(sighting).forEach(([key, value]) => {

    // Append a cell to the row for each value in the object
    var cell = row.append("td");

    //Update each cell's text with each value in the object
    cell.html(value);
  });
});
};

//Run the create table function with the original table data for display
createTable(tableData);

//Set variable for the filter button
var filterButton = d3.select("#filter-btn");

//Create an event handler for the filter date button
filterButton.on("click", search);

//Set up a function for the multiple search filters, used with event handler
function search() {

  //Prevents page from refreshing when working with a form 
  d3.event.preventDefault();

//set variable for user input boxes
  var userInput1 = d3.select("#datetime");
  var userInput2 = d3.select("#city");
  var userInput3= d3.select("#state");
  var userInput4 = d3.select("#country");
  var userInput5 = d3.select("#shape");

  //Set variable for the actual input the user types in, correct for extra spacing or capitals
  var userDate = userInput1.property("value").trim();
  var userCity = userInput2.property("value").toLowerCase().trim();
  var userState = userInput3.property("value").toLowerCase().trim();
  var userCountry = userInput4.property("value").toLowerCase().trim();
  var userShape = userInput5.property("value").toLowerCase().trim();

//    //Console log the date, city just to check
   
//   console.log(userInput1, userDate);
  
//    console.log(userInput2, userCity);

//Set a separate variable for the original data to use in the multiple filters
  var filterData = tableData;

//If the date field has text, filter for it
  if (userDate) {
    filterData = filterData.filter(sightings => sightings.datetime === userDate);
  }

//Continuing with only the possible date filtered data, if the city field has text, filter for it  
  if (userCity) {
    filterData = filterData.filter(sightings => sightings.city === userCity);
  }

  //Continuing with only the possible date & city filtered data, if the state field has text, filter for it 
  if (userState) {
    filterData = filterData.filter(sightings => sightings.state === userState);
  }

  //Continuing with only the possible date, city & state filtered data, if the country field has text, filter for it 
  if (userCountry) {
    filterData = filterData.filter(sightings => sightings.country === userCountry);
  }

  //Continuing with only the possible date, city, state & country filtered data, if the shape field has text, filter for it 
  if (userShape) {
    filterData = filterData.filter(sightings => sightings.shape === userShape);
  }

//Display only the filtered data in the table, using the createTable function
  createTable(filterData);

};






