console.log(gunViolenceData)
let incidentTime = []
let incidentDeaths = []
let incidentInjuries = []
let minnesotaTime = []
let minnesotaDeaths = []
let minnesotaInjuries = []
let illinoisTime = []
let illinoisDeaths = []
let illinoisInjuries = []
let californiaTime = []
let californiaDeaths = []
let californiaInjuries = []
let oregonTime = []
let oregonDeaths = []
let oregonInjuries = []
let maineTime = []
let maineDeaths = []
let maineInjuries = []
let newYorkTime = []
let newYorkDeaths = []
let newYorkInjuries = []
let floridaTime = []
let floridaDeaths = []
let floridaInjuries = []
let alabamaTime = []
let alabamaDeaths = []
let alabamaInjuries = []

for (let i = 0; i < gunViolenceData.metadata.length; i++) {
  let row = gunViolenceData.metadata[i];
  if (row.state === 'Minnesota') {
    minnesotaTime.push(row.year);
    minnesotaDeaths.push(row.n_killed);
    minnesotaInjuries.push(row.n_injured);
  }
}

for (let i = 0; i < gunViolenceData.metadata.length; i++) {
  let row = gunViolenceData.metadata[i];
  if (row.state === 'Illinois') {
    illinoisTime.push(row.year);
    illinoisDeaths.push(row.n_killed);
    illinoisInjuries.push(row.n_injured);
  }
}

for (let i = 0; i < gunViolenceData.metadata.length; i++) {
  let row = gunViolenceData.metadata[i];
  if (row.state === 'California') {
    californiaTime.push(row.year);
    californiaDeaths.push(row.n_killed);
    californiaInjuries.push(row.n_injured);
  }
}

for (let i = 0; i < gunViolenceData.metadata.length; i++) {
  let row = gunViolenceData.metadata[i];
  if (row.state === 'Oregon') {
    oregonTime.push(row.year);
    oregonDeaths.push(row.n_killed);
    oregonInjuries.push(row.n_injured);
  }
}

for (let i = 0; i < gunViolenceData.metadata.length; i++) {
  let row = gunViolenceData.metadata[i];
  if (row.state === 'Maine') {
    maineTime.push(row.year);
    maineDeaths.push(row.n_killed);
    maineInjuries.push(row.n_injured);
  }
}

for (let i = 0; i < gunViolenceData.metadata.length; i++) {
  let row = gunViolenceData.metadata[i];
  if (row.state === 'New York') {
    newYorkTime.push(row.year);
    newYorkDeaths.push(row.n_killed);
    newYorkInjuries.push(row.n_injured);
  }
}


function init() {
  data = [minnesotaTime, minnesotaDeaths, minnesotaInjuries]
  changeBarGraph(data)
}

// for (let i = 0; i < gunViolenceData.metadata.length; i++) {
//   let row = gunViolenceData.metadata[i];
//   incidentTime.push(row.year);
//   incidentDeaths.push(row.n_killed);
//   incidentInjuries.push(row.n_injured);
// }
// console.log(incidentTime)
// console.log(incidentDeaths)
// console.log(incidentInjuries)
// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = []
  if (dataset == 'Minnesota') {
    data = [minnesotaTime, minnesotaDeaths, minnesotaInjuries];
  }
  else if (dataset == 'Illinois') {
    data = [illinoisTime, illinoisDeaths, illinoisInjuries];
  }
  else if (dataset == 'California') {
    data = [californiaTime, californiaDeaths, californiaInjuries];
  }
  else if (dataset == 'Oregon') {
    data = [oregonTime, oregonDeaths, oregonInjuries];
  }
  else if (dataset == 'Maine') {
    data = [maineTime, maineDeaths, maineInjuries];
  }
  else if (dataset == 'New York') {
    data = [newYorkTime, newYorkDeaths, newYorkInjuries];
  }
  else if (dataset == 'Florida') {
    data = [floridaTime, floridaDeaths, floridaInjuries];
  }
  else if (dataset == 'Alabama') {
    data = [alabamaTime, alabamaDeaths, alabamaInjuries];
  }
  
// Call function to update the chart
  updatePlotly(data);
}
function changeBarGraph(data) {
  let time = data[0]
  let deaths = data[1]
  let injured = data[2]
  let trace1 = {
    x: time,
    y: deaths,
    name: "Deaths",
    type: "bar"
  };
  
  let trace2 = {
    x: time,
    y: injured,
    name: "Injuries",
    type: "bar"
  };

  // Create data array
let datas = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Deaths vs Injuries per Year",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
}
}
plotly.newPlot("plot", datas, layout)
};
// Update the restyled plot's values
function updatePlotly(data) {
  // Plotly.restyle("plot", "values", [data])
  changeBarGraph(data)
  }

init();

