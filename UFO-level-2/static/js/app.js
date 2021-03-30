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
    cell.text(value);
  });
});
};

//Run the create table function with the original table data
createTable(tableData);

//Set variable for the filter button
var filterButton = d3.select("#filter-btn");

// // //Create an event handler for the filter date button
filterButton.on("click", search);

function search() {

  // //Prevents page from refreshing when working with a form
  // d3.event.preventDefault();

//set variable for user input boxes
  var userInput1 = d3.select("#datetime");
  var userInput2 = d3.select("#city");
  var userInput3= d3.select("#state");
  var userInput4 = d3.select("#country");
  var userInput5 = d3.select("#shape");

  //Set variable for the actual date the user types in
  var userDate = userInput1.property("value");
  var userCity = userInput2.property("value");
  var userState = userInput3.property("value");
  var userCountry = userInput4.property("value");
  var userShape = userInput5.property("value");

//    //Console log the date just to check
   
//   console.log(userInput1, userDate);
  
//    console.log(userInput2, userCity);

  if(userDate) {
    var dateResults = tableData.filter(sightings => sightings.datetime === userDate);
    createTable(dateResults);
  }
  
  else if (userCity) {
    var cityResults = tableData.filter(sightings => sightings.city === userCity);
    createTable(cityResults);
  }

  else if (userState) {
    var stateResults = tableData.filter(sightings => sightings.state === userState);
    createTable(stateResults);
  }
  else if (userCountry) {
    var countryResults = tableData.filter(sightings => sightings.country === userCountry);
    createTable(countryResults);
  }

  else if (userShape) {
    var shapeResults = tableData.filter(sightings => sightings.shape === userShape);
    createTable(shapeResults);
  }
};


//Filter the table based on the user's date selection
  // var results = tableData.filter(sightings => sightings.city === userCity);
  // console.log(sightings.city);
  //                                             sightings.city === userCity &&
  //                                             sightings.state === userState &&
  //                                             sightings.country === userCountry &&
  //                                             sightings.country === userShape);

    //Overwrite the table display to empty to get ready to display the chosen results
//     tbody.html("");

// //      // Loop through entire array of the chosen results
//   results.forEach((UFOdata) => {

// //     //append one table row for each object in the array
//     var row = tbody.append("tr");

// //     //Loops through each object (dictionary) in the array
//     Object.entries(UFOdata).forEach(([key, value]) => {

// // //       // Append a cell to the row for each value in the object
//       var cell = row.append("td");

// // //       //Update each cell's text with each value in the object
//       cell.text(value);
//     });

// };

// };




