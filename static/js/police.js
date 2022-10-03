// load json data
d3.json("./json_data/combinedData.json").then((data) => {
  // console.log(data)

  let year_array =  [];
  let state_array = [];
  let police_array = [];
  let accident_array = [];

  for (let key = 0; key<100; key++) {
      year_array.push(data[key].Year);
      state_array.push(data[key].State);
      police_array.push(data[key].fatalPoliceShootings);
      accident_array.push(data[key].accidentalDeath);
  };

  // let labels = Object.keys(police_array);
// Display default plot
function init() {
  let data = [{
    values: state_array,
    labels: police_array,
    type: "plot"
  }];

  let data2 = [{
    x:state_array,
    y:police_array,
    type: "bar",
    orrientation:"h"
  }];

  let layout = {
    height: 600,
    width:1000
  };

  Plotly.newPlot("plot", data, layout);
  Plotly.newPlot("bar", data2, layout);
}
// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let info = [];

  if (dataset === 2019){
    info = 2019;
  }
  else if (dataset === 2020){
    info = 2020;
  }
  else if (dataset === 2021){
    info = 2021;
  }
  else {
    info = 2022;
  }
// Call function to update the chart
    updatePlotly(info); 
}
// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("plot", "values", [newdata]);
  Plotly.restyle("bar", "x", [newdata]);

}

init();

});
