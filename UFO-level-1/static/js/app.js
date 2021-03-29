// from data.js
var tableData = data;

// set a variable for table body
var tbody = d3.select("tbody");


// Loop through entire array
tableData.forEach((sighting) => {

  //append one table row for each object in the array
  var row = tbody.append("tr");

  //Loops through each object (dictionary) in the array
  Object.entries(sighting).forEach(([key, value]) => {

    // Append a cell to the row for each value in the object
    var cell = row.append("td");

    //Update each cell's text with each value in the object
    cell.text(value);
  });
});

//Set variable for the filter date button
var filterDate = d3.select("#filter-btn")

//Create an event handler for the filter date button
filterDate.on("click", searchDate)

//Create a function for the event handler
function searchDate() {

  //Set variable for the area of the form where user inputs the date
  var userDate = d3.select("#datetime")

  //Set variable for the actual date the user types in
  var userValue = userDate.property("value")

  //Console log the date just to check
  console.log(userDate, userValue)

  //Filter the table based on the user's date selection
  var results = tableData.filter(sightings => sightings.datetime === userValue)


  //Overwrite the table display to empty to get ready to display the chosen results
  tbody.html("")

  // Loop through entire array of the chosen results
  results.forEach((UFOdata) => {

    //append one table row for each object in the array
    var row = tbody.append("tr");

    //Loops through each object (dictionary) in the array
    Object.entries(UFOdata).forEach(([key, value]) => {

      // Append a cell to the row for each value in the object
      var cell = row.append("td");

      //Update each cell's text with each value in the object
      cell.text(value);
    });
  });

}






