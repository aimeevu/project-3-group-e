// load json data
d3.json("./json_data/combinedData.json").then((data) => {
    // console.log(data)

    var config = {responsive: true}
// dropdown
var config = {responsive: true}

let size = 0;

for (key in data) {
  if (data.hasOwnProperty(key)) size++;
}

// get unique years

let all_year = [];

for (key in data) {
  all_year.push(data[key].Year);
}

function removeDuplicates(all_year) {
  return [...new Set(all_year)];
}

all_year = removeDuplicates(all_year).sort();

// Create country dropdown selction

var select = document.getElementById("selectYear");

for (let i = 0; i < all_year.length; i++) {
  var opt = all_year[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}
const updateChart = (Year) => {
    let accidentDeath = 0;
    let policeShot = 0;
    
    if (!Year) {
        for (let i = 0; i < size; i++){
            if(data[i].accidentalDeath > 0){
                accidentDeath++;
            } else if (data[i].fatalPoliceShootings > 0){
                policeShot++;
            } else{   
            }
        }
     }else {
        for (let i = 0; i < size; i++) {
          if (data[i].accidentalDeath > 0 && data[i].Year == Year) {
            accidentDeath++;
          } else if (data[i].fatalPoliceShootings > 0 && data[i].Year == Year) {
            policeShot++;
          } else {
          }
        }
      }

      // plot line chart
      let trace1 = {
        values: [accidentDeath, policeShot],
        labels: ["accidentalDeath", "fatalPoliceShootings"],
        type: "pie",
        textinfo: "value+percent"
      };

      let chart = [trace1];

      let layout = {
        title: "Police vs Mass"
      };

      Plotly.newPlot("plot", chart, layout, config);
//   Unique States
    let all_states = [];

    for (key in data) {
        if (!Year) {
          all_states.push(data[key].State);
        } else {
          if (data[key].Year == Year) {
            all_states.push(data[key].State);
          }
        }
    };

    function removeDuplicates(all_states) {
        return [...new Set(all_states)];
    };

    all_states = removeDuplicates(all_states).sort();

    let state_count = [];

    for ( let i = 0; i < all_states.length; i++ ) {
      let selected_state = all_states[i];

      let number = 0

        for (key in data) {
          if (!Year && data[key].State == selected_state) {
            number++;
          } else {
            if (data[key].Year == Year && data[key].State == selected_state) {
              number++;
            }
          }
        };

        state_count[i] = {
          "state": selected_state,
          "count": number
        };

    };

    console.log(all_states);

    console.log(Year);

    console.log(state_count);

    const topN = (arr, n) => {
        if (n > arr.length){
            return false;
        }
        return arr
        .slice()
        .sort((a,b) => {
            return b.count - a.count
        })
        .slice(0, n);
    };

//     maxN = Math.min(state_count.length, 50)

//     console.log(`maxN is ${maxN}`)

//     top_list = topN(state_count, maxN)

//     console.log(top_list);

//     var x = []
//     var y = []

//     let extractColumn = (arr, column) => arr.map(x=>x[column]);

//     y = extractColumn(top_list, "count")
//     x = extractColumn(top_list, "state")

//     var trace2 = {
//         x: y,
//         y: x,
//         text: x,
//         type: "bar",
//         orientation: "h",
//     };

//     var data2 = [trace2];

//     var bar_title = `Top ${maxN} Most Popular Sport states`

//     var layout2 = {
//         title: bar_title,
//         xaxis: { autorange: true},
//         yaxis: { autorange: "reversed", padding: 100},
//         margin: { t: 70, l: 100 },
//     };

//     Plotly.newPlot("bar", data2, layout2, config);
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

    var trace_police = {
        x: state_array,
        y: police_array,
        name: 'Injured',
        type: 'bar',
        marker: {color: 'rgb(255, 0, 255)'}
    };

    var trace_accident = {
        x: state_array,
        y: accident_array,
        name: 'Killed',
        type: 'bar',
        marker: {color: 'rgb(0, 0, 255)'}
    };

    var data = [trace_police, trace_accident];
    
    var layout2 = {
        barmode: 'stack',
        title: "Injured vs Killed",
        yaxis: {
                labelAutoFit: true},
    margin: { t: 70, l: 180 }
    };

    Plotly.newPlot('bar', data, layout2, config);
  
  };
  
  

  updateChart("");

  select.addEventListener("change", (ev) => {
    const Year = ev.target.value;
    updateChart(Year);
  });
})
