// from data.js
var tableData = data;

// set a variable for table body
var tbody = d3.select("tbody");


// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)

// Loop through entire array
tableData.forEach((sighting) => {

    //Console log each object in the array
    console.log(sighting);

    //append one table row for each object in the array
    var row = tbody.append("tr");

    //Loops through each object (dictionary) in the array
    Object.entries(sighting).forEach(([key, value]) => {

      //Console log each key and value  
      console.log(key, value);

      // Append a cell to the row for each value in the object
      var cell = row.append("td");

      //Update each cell's text with each value in the object
      cell.text(value);
    });
  });



