
//use the data.json instead of the complete_data.json because it
//has the metadata
d3.json('static/data/complete_data.json').then(data=>{
    
    console.log(data)
    let dateList = [];
    let incidentCount = [];

    // date is in an unknown format, convert into a date format
    // and create a loop 
    for (let i = 0; i <data.length; i++) {
        var incidentDate = new Date(data[i].date);
        //creating x label 
        dateList.push(incidentDate.toUTCString());
        //creating the ylable
        incidentCount.push(data[i].n_killed + data[i].n_injured);

    };

    // create a line chart for Gun Violence over the course of year
    let title = 'Gun Violence Over the Course Of Year';
    let lineChart = {
        x: dateList,
        y: incidentCount,
        type: 'line',
        //legend: 

    };

    let chart = [lineChart];
    
    let layout = {
    title: title
    };

    Plotly.newPlot("plot", chart, layout)


});