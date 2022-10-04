    
    getData();
    async function getData() {
       const response = await fetch("/gun_violenceDB/combine2019");
       const data = await response.json();
       console.log(data);
       
       
       var dataset=data[0]
       console.log(dataset)

       //length = dataset.State.length;
       //console.log(length);
       

       // Bar chart
       labels = [];
       values = [];
       values_a =[];
       values_m =[];
       values_f =[];

       for (i = 0; i < 49; i++) {
          labels.push(dataset.State[i]);
          values.push(dataset.accidentalDeath[i]+dataset.massShootings[i]+dataset.fatalPoliceShootings[i]);
          values_a.push(dataset.accidentalDeath[i])
          values_m.push(dataset.massShootings[i])
          values_f.push(dataset.fatalPoliceShootings[i])
       }
       new Chart(document.getElementById("bar-chart"), {
          type: 'horizontalBar',
          data: {
             labels: labels,
             datasets: [
                {
                   label: "totalDeath",
                   backgroundColor: "#8e5ea2",
                   data: values
                }
             ]
          },
          options: {
             legend: { display: false },
             title: {
                display: true,
                text: 'U.S Death Count'
             }
          }
       });
       new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
           labels: labels,
           datasets: [
              {
                data: values_a, 
                label: "AccidentalDeath",
                borderColor: "red",  
                fill: false  
              },
              {
                data: values_m, 
                label: "MassShootings",
                borderColor: "green",  
                fill: false
              },
              {
                data: values_f, 
                label: "FatalPoliceShootings",
                borderColor: "blue",  
                fill: false
              }
           ]
        },
        options: {
           legend: { display: true },
           title: {
              display: true,
              text: 'U.S Death Count'
           }
        }
     });
   
    
    }
 

// line chart
