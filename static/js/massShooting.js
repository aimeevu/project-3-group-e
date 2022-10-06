// load json data
d3.json("../json_data/clean_massShooting.json").then((data) => {
    console.log(data);
    // calculate the size of objects (# of rows)
    var config = {responsive:true}



    let year_array =  [];
    let state_array = [];
    let kill_array = [];
    let injure_array = [];
    let city_array = [];

    for (let key = 0; key<1800; key++) {
        year_array.push(data[key].Year);
        state_array.push(data[key].State);
        city_array.push(data[key].City_Or_County);
        kill_array.push(data[key].Killed);
        injure_array.push(data[key].Injured);
    };
    

    var trace_injured = {
        x: state_array,
        y: injure_array,
        name: 'Injured',
        type: 'bar',
        marker: {color: 'rgb(214, 69, 80)'}
    };

    var trace_killed = {
        x: state_array,
        y: kill_array,
        name: 'Killed',
        type: 'bar',
        marker: {color: 'rgb(167, 110, 175)'}
    };

    var data = [trace_injured, trace_killed];
      
    var layout = {
        barmode: 'group',
        title: "Injured vs Killed",
      margin: { t: 80, l: 180 }
      };
    
    Plotly.newPlot('mass_Shooting', data, layout, config);
   
});