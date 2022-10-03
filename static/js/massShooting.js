// load json data
d3.json("./json_data/clean_massShooting.json").then((data) => {
    console.log(data);
    // calculate the size of objects (# of rows)
    var config = {responsive:true}

    let year_array =  [];
    let state_array = [];
    let kill_array = [];
    let injure_array = [];
    let city_array = [];

    for (let key = 0; key<100; key++) {
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
        marker: {color: 'rgb(255, 0, 255)'}
    };

    var trace_killed = {
        x: state_array,
        y: kill_array,
        name: 'Killed',
        type: 'bar',
        marker: {color: 'rgb(0, 0, 255)'}
    };

    var data = [trace_injured, trace_killed];
      
    var layout = {
        barmode: 'stack',
        title: "Injured vs Killed",
        yaxis: {
                labelAutoFit: true},
      margin: { t: 70, l: 180 }
      };
    
    Plotly.newPlot('mass_Shooting', data, layout, config);

});