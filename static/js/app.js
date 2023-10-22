// Map
let data = gunViolenceData.data;

let data_2013 = [];
let data_2014 = [];
let data_2015 = [];
let data_2016 = [];
let data_2017 = [];
let data_2018 = [];

function createCircle(array, current_data) {  
    let lat = current_data.latitude;
    let lon = current_data.longitude;  
    let date = current_data.date;
    let killed = current_data.n_killed;
    let injured = current_data.n_injured
    array.push(
        L.circleMarker([lat,lon], {
            color: "red",
            radius: 1
            }).bindPopup(date + "<br> Killed: "+ killed + "<br> Injured: "+ injured));
    return array;
}

for (let i=0; i<data.length; i++) {
    let current_data = data[i];
    let lat = current_data.latitude;
    let lon = current_data.longitude;
    if (lat) {
        if (lon) {
            if (current_data.year === 2013) {
                createCircle(data_2013, current_data)      
            }
            else if (current_data.year === 2014){
                createCircle(data_2014, current_data)
            }
            else if (current_data.year === 2015){
                createCircle(data_2015, current_data)
            }
            else if (current_data.year === 2016){
                createCircle(data_2016, current_data)
            }
            else if (current_data.year === 2017){
                createCircle(data_2017, current_data)
            }
            else {
                createCircle(data_2018, current_data)
            }
        }
    }    
}

let defaultToDarkFilter = [
    'grayscale:100%',
]

let street = L.tileLayer.colorFilter('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    filter: defaultToDarkFilter,
})


let layer_2013 = L.layerGroup(data_2013);
let layer_2014 = L.layerGroup(data_2014);
let layer_2015 = L.layerGroup(data_2015);
let layer_2016 = L.layerGroup(data_2016);
let layer_2017 = L.layerGroup(data_2017);
let layer_2018 = L.layerGroup(data_2018);

let baseMaps = {
    "Street Map": street,
  };

let overlayMaps = {
    "2013": layer_2013,
    "2014": layer_2014,
    "2015": layer_2015,
    "2016": layer_2016,
    "2017": layer_2017,
    "2018": layer_2018
};

let myMap = L.map("map", {
    center: [44.9778,-93.2650],
    zoom: 10,
    layers: [street, layer_2014]
  });
  

L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);


// table
metadata = gunViolenceData.metadata;
let metadata_2014 = [];
let metadata_2015 = [];
let metadata_2016 = [];
let metadata_2017 = [];
let metadata_2018 = [];

for (let i=0; i<metadata.length; i++){
    let current = metadata[i];
    let year = current.year;
    if (year === 2014) {
        metadata_2014.push(current);
    }
    else if (year === 2015) {
        metadata_2015.push(current);
    }
    else if (year === 2016) {
        metadata_2016.push(current);
    }
    else if (year === 2017) {
        metadata_2017.push(current);
    }
    else {
        metadata_2018.push(current);
    }
}

console.log(metadata_2015)

d3.selectAll("#selDataset1").on("change", getData1);

function getData1(){
    let dropdownMenu = d3.select("#selDataset1");
    let dataset = dropdownMenu.property("value");
    let data = [];
    if (dataset === "2014") {
        data = metadata_2014;
    }
    else if (dataset === "2015") {
        data = metadata_2015;
    }
    else if (dataset === "2016") {
        data = metadata_2016;
    }
    else if (dataset === "2017") {
        data = metadata_2017;
    }
    else {
        data = metadata_2018;
    }
    metadataTable(data)
}

function metadataTable(metadata) {
    for (let i = 0; i<8; i++){
        let current_data = metadata[i]
        let table = d3.select("table");
        table.attr("class", "table table-striped");
        let tbody = d3.select("tbody");
        let row = tbody.append("tr");
        d3.select(".row" + i + " .column1").text(current_data.state)
        d3.select(".row" + i + " .column2").text(current_data.n_killed);
        d3.select(".row" + i + " .column3").text(current_data.n_injured);
        d3.select(".row" + i + " .column4").text(current_data.mass_shooting);
        }
    }


// Deaths vs Injuries per state
let time = [2014, 2015, 2016, 2017, 2018]
let minnesotaDeaths = []
let minnesotaInjuries = []
let illinoisDeaths = []
let illinoisInjuries = []
let californiaDeaths = []
let californiaInjuries = []
let oregonDeaths = []
let oregonInjuries = []
let maineDeaths = []
let maineInjuries = []
let newYorkDeaths = []
let newYorkInjuries = []
let floridaDeaths = []
let floridaInjuries = []
let alabamaDeaths = []
let alabamaInjuries = []

for (let i = 0; i < metadata.length; i++) {
    let row = gunViolenceData.metadata[i];
    if (row.state === 'Minnesota') {
        minnesotaDeaths.push(row.n_killed);
        minnesotaInjuries.push(row.n_injured);
    }
    else if (row.state === 'Illinois') {
        illinoisDeaths.push(row.n_killed);
        illinoisInjuries.push(row.n_injured);
    }
    else if (row.state === 'California') {
        californiaDeaths.push(row.n_killed);
        californiaInjuries.push(row.n_injured);
    }
    else if (row.state === 'Oregon') {
        oregonDeaths.push(row.n_killed);
        oregonInjuries.push(row.n_injured);
      }
    else if (row.state === 'Maine') {
        maineDeaths.push(row.n_killed);
        maineInjuries.push(row.n_injured);
      }
    else if (row.state === 'New York') {
        newYorkDeaths.push(row.n_killed);
        newYorkInjuries.push(row.n_injured);
      }
    else if (row.state === 'Florida') {
        floridaDeaths.push(row.n_killed);
        floridaInjuries.push(row.n_injured);
    }
    else {
        alabamaDeaths.push(row.n_killed);
        alabamaInjuries.push(row.n_injured);
    }
  }

function init1() {
    data = [minnesotaDeaths, minnesotaInjuries]
    changeBarGraph(data)
}

d3.selectAll("#selDataset2").on("change", getData2);

function getData2() {
    let dropdownMenu = d3.select("#selDataset2");
    // Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
    let data = []
    if (dataset == 'Minnesota') {
      data = [minnesotaDeaths, minnesotaInjuries];
    }
    else if (dataset == 'Illinois') {
      data = [illinoisDeaths, illinoisInjuries];
    }
    else if (dataset == 'California') {
      data = [californiaDeaths, californiaInjuries];
    }
    else if (dataset == 'Oregon') {
      data = [oregonDeaths, oregonInjuries];
    }
    else if (dataset == 'Maine') {
      data = [maineDeaths, maineInjuries];
    }
    else if (dataset == 'New York') {
      data = [newYorkDeaths, newYorkInjuries];
    }
    else if (dataset == 'Florida') {
      data = [floridaDeaths, floridaInjuries];
    }
    else if (dataset == 'Alabama') {
      data = [alabamaDeaths, alabamaInjuries];
    }
    
  // Call function to update the chart
    changeBarGraph(data);
}

function changeBarGraph(data) {
    let deaths = data[0]
    let injured = data[1]
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
  Plotly.newPlot("plot1", datas, layout)
};

init1();

// Deaths vs Injuries per year
let data2 = gunViolenceData.data

function getData3(state,year , freq = 10){
    let date=[]
    let killed=[]
    let injured=[]
    for (let i = 0; i < data2.length; i++) {
        let row = data2[i];
        if (row.state === state) {
            if (row.year === year) {
                date.push(row.date);
                killed.push(row.n_killed);
                injured.push(row.n_injured);
    
            }
        }
    }
    
    // group the results by weeks, two weeks, and/or months according to the freq.
    let monthsKilled=[]
    let monthsInjured=[]
    let monthsArr=[]
    let n=date.length ///n = number of accidents

    // loop the months of the Year
    for(let month=1;month<=12;month++){
        //loop the parts of the Month
        for(let part=1;part<=31;part+=freq){
        let numKilled=0;
        let numInjured=0;
        // number of killed and injuries in this part of the Month
        for(let u=0;u<n;u++){
            let dateAccident=date[u].split('-')
            let accidentMonth=dateAccident[1]
            let accidentDay=dateAccident[2]
            if(accidentMonth== month && accidentDay>=part && accidentDay<part+freq ){  //this accident happend this month 
                numKilled +=killed[u]
                numInjured +=injured[u]
            }
        }
        monthsKilled.push(numKilled);
        monthsInjured.push(numInjured);
        monthsArr.push(month+"-"+part+"-"+year);
        }
    }
   
    return [monthsArr, monthsKilled, monthsInjured]
};
   
// create our chart
function drawChart(state,year){
        const [date,killed,injured]=getData3(state,year);
        
        let trace1 = {
            x: date,
            y: killed,
            name: "Deaths",
            type: "line"
            
        };
        
        let trace2 = {
            x: date,
            y: injured,
            name: "Injuries",
            type: "line"
        };
        
        let graph = [trace1,trace2];
        
        let layout = {
            title: "Gun Violence Over the Course of One Year in Minnesota",
            barmode: "group",
            margin: {
                l: 50,
                r: 50,
                b: 200,
                t: 50,
                pad: 4
              }
        };
        
         Plotly.newPlot("plot2", graph, layout);
        
};

function changeYear(event) {
    let year = event.target.value * 1
    drawChart("Minnesota", year);
}

drawChart("Minnesota", 2014); //default chart

document.getElementById("selDataset3").addEventListener("change", changeYear);


// https://getbootstrap.com/docs/4.1/layout/grid/