//use the data.json instead of the complete_data.json
let data = gunViolenceData.data

   console.log(data);

   function getData(state,year , freq = 10){
    let date=[]
    let killed=[]
    let injured=[]
    for (let i = 0; i < data.length; i++) {
        let row = data[i];
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
        const [date,killed,injured]=getData(state,year);
        
        let trace1 = {
            x: date,
            y: killed,
            name: "Deaths",
            type: "bar"
            
        };
        
        let trace2 = {
            x: date,
            y: injured,
            name: "Injuries",
            type: "line"
        };
        
        let graph = [trace1,trace2];
        
        let layout = {
            title: "Gun Violence Over the Course of One Year",
            barmode: "group",
            margin: {
                l: 50,
                r: 50,
                b: 200,
                t: 50,
                pad: 4
              }
        };
        
         Plotly.newPlot("plot", graph, layout);
        
};

function changeYear(event) {
    let year = event.target.value * 1
    drawChart("Minnesota", year);
}

        drawChart("Minnesota", 2014); //default chart

        document.getElementById("selDataset").addEventListener("change", changeYear);

