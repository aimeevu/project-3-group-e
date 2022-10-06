 function mycharts2019(selectYear){ 
    getData();
    async function getData() {
       const response = await fetch("/gun_violenceDB/combinedData2");
       const data = await response.json();
       console.log(data);
       
       var dataset=data[0]
       console.log(dataset)
       
       //var arraydata =Object.values(dataset)
       //console.log(arraydata)

       labels = [];
       values = [];
       values_a =[];
       values_m =[];
       values_f =[];

       for (i = 0; i < 50; i++) {
          labels.push(dataset.State[i]);
          values.push(dataset.accidentalDeath[i]+dataset.massShootings[i]+dataset.fatalPoliceShootings[i]);
          values_a.push(dataset.accidentalDeath[i])
          values_m.push(dataset.massShootings[i])
          values_f.push(dataset.fatalPoliceShootings[i])
       }
        
       console.log(labels)
       // Bar chart
       new Chart(document.getElementById("bar-chart"), {
          type: 'horizontalBar',
          data: {
             labels: labels,
             datasets: [
                {
                   label: "totalDeath",
                   backgroundColor: "#A76EAF",
                   data: values
                }
             ]
          },
          options: {
             legend: { display: false },
             title: {
                display: true,
                text: 'U.S Death Count'
             },
             scales: {
               y:[{
                  ticks:{
                     display: true,
                     autoSkip: false
                  }
               }],
               
           }
          }
       });
       // line chart
       new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
           labels: labels,
           datasets: [
              {
                data: values_a, 
                label: "AccidentalDeath",
                borderColor: "#D64550",  
                fill: false  
              },
              {
                data: values_m, 
                label: "MassShootings",
                borderColor: "#2E1E0F",  
                fill: false
              },
              {
                data: values_f, 
                label: "FatalPoliceShootings",
                borderColor: "#A76EAF",  
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
   }
   function mycharts2020(selectYear){ 
      getData();
      async function getData() {
         const response = await fetch("/gun_violenceDB/combinedData2");
         const data = await response.json();
         console.log(data);
         
         var dataset=data[0]
         console.log(dataset)
         
         //var arraydata =Object.values(dataset)
         //console.log(arraydata)
  
         labels = [];
         values = [];
         values_a =[];
         values_m =[];
         values_f =[];
  
         for (i = 50; i < 99; i++) {
            labels.push(dataset.State[i]);
            values.push(dataset.accidentalDeath[i]+dataset.massShootings[i]+dataset.fatalPoliceShootings[i]);
            values_a.push(dataset.accidentalDeath[i])
            values_m.push(dataset.massShootings[i])
            values_f.push(dataset.fatalPoliceShootings[i])
         }
          
         console.log(labels)
         // Bar chart
         new Chart(document.getElementById("bar-chart"), {
            type: 'horizontalBar',
            data: {
               labels: labels,
               datasets: [
                  {
                     label: "totalDeath",
                     backgroundColor: "#A76EAF",
                     data: values
                  }
               ]
            },
            options: {
               legend: { display: false },
               title: {
                  display: true,
                  text: 'U.S Death Count'
               },
               scales: {
                 y:[{
                    ticks:{
                       display: true,
                       autoSkip: false
                    }
                 }],
                 
             }
            }
         });
         // line chart
         new Chart(document.getElementById("line-chart"), {
          type: 'line',
          data: {
             labels: labels,
             datasets: [
                {
                  data: values_a, 
                  label: "AccidentalDeath",
                  borderColor: "#D64550",  
                  fill: false  
                },
                {
                  data: values_m, 
                  label: "MassShootings",
                  borderColor: "#2E1E0F",  
                  fill: false
                },
                {
                  data: values_f, 
                  label: "FatalPoliceShootings",
                  borderColor: "#A76EAF",  
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
     }
     
     function mycharts2021(selectYear){ 
      getData();
      async function getData() {
         const response = await fetch("/gun_violenceDB/combinedData2");
         const data = await response.json();
         console.log(data);
         
         var dataset=data[0]
         console.log(dataset)
         
         //var arraydata =Object.values(dataset)
         //console.log(arraydata)
  
         labels = [];
         values = [];
         values_a =[];
         values_m =[];
         values_f =[];
  
         for (i = 99; i < 150; i++) {
            labels.push(dataset.State[i]);
            values.push(dataset.accidentalDeath[i]+dataset.massShootings[i]+dataset.fatalPoliceShootings[i]);
            values_a.push(dataset.accidentalDeath[i])
            values_m.push(dataset.massShootings[i])
            values_f.push(dataset.fatalPoliceShootings[i])
         }
          
         console.log(labels)
         // Bar chart
         new Chart(document.getElementById("bar-chart"), {
            type: 'horizontalBar',
            data: {
               labels: labels,
               datasets: [
                  {
                     label: "totalDeath",
                     backgroundColor: "#A76EAF",
                     data: values
                  }
               ]
            },
            options: {
               legend: { display: false },
               title: {
                  display: true,
                  text: 'U.S Death Count'
               },
               scales: {
                 y:[{
                    ticks:{
                       display: true,
                       autoSkip: false
                    }
                 }],
                 
             }
            }
         });
         // line chart
         new Chart(document.getElementById("line-chart"), {
          type: 'line',
          data: {
             labels: labels,
             datasets: [
                {
                  data: values_a, 
                  label: "AccidentalDeath",
                  borderColor: "#D64550",  
                  fill: false  
                },
                {
                  data: values_m, 
                  label: "MassShootings",
                  borderColor: "#2E1E0F",  
                  fill: false
                },
                {
                  data: values_f, 
                  label: "FatalPoliceShootings",
                  borderColor: "#A76EAF",  
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
     } 
     function mycharts2022(selectYear){ 
      getData();
      async function getData() {
         const response = await fetch("/gun_violenceDB/combinedData2");
         const data = await response.json();
         console.log(data);
         
         var dataset=data[0]
         console.log(dataset)
         
         //var arraydata =Object.values(dataset)
         //console.log(arraydata)
  
         labels = [];
         values = [];
         values_a =[];
         values_m =[];
         values_f =[];
  
         for (i = 150; i < 201; i++) {
            labels.push(dataset.State[i]);
            values.push(dataset.accidentalDeath[i]+dataset.massShootings[i]+dataset.fatalPoliceShootings[i]);
            values_a.push(dataset.accidentalDeath[i])
            values_m.push(dataset.massShootings[i])
            values_f.push(dataset.fatalPoliceShootings[i])
         }
          
         console.log(labels)
         // Bar chart
         new Chart(document.getElementById("bar-chart"), {
            type: 'horizontalBar',
            data: {
               labels: labels,
               datasets: [
                  {
                     label: "totalDeath",
                     backgroundColor: "#A76EAF",
                     data: values
                  }
               ]
            },
            options: {
               legend: { display: false },
               title: {
                  display: true,
                  text: 'U.S Death Count'
               },
               scales: {
                 y:[{
                    ticks:{
                       display: true,
                       autoSkip: false
                    }
                 }],
                 
             }
            }
         });
         // line chart
         new Chart(document.getElementById("line-chart"), {
          type: 'line',
          data: {
             labels: labels,
             datasets: [
                {
                  data: values_a, 
                  label: "AccidentalDeath",
                  borderColor: "#D64550",  
                  fill: false  
                },
                {
                  data: values_m, 
                  label: "MassShootings",
                  borderColor: "#2E1E0F",  
                  fill: false
                },
                {
                  data: values_f, 
                  label: "FatalPoliceShootings",
                  borderColor: "#A76EAF",  
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
     }

     function SearchContext() {
      var selectedValue = document.getElementById("myDropdown").value;
      switch (selectedValue) {
          case "2019":
              mycharts2019();
              break;
          case "2020":
              mycharts2020();
              break;
          case "2021":
              mycharts2021();
              break;
          case "2022":
              mycharts2022();
              break;
      }
  }
   

    //  Initializes the page with default plots using first sample
  function init(){
   
      // Reset demographic info and visuals to first sample when page is refreshed.
       mycharts2019


  };

// Pull data for new subject into charts.
function optionChanged(newState) {
  mycharts2020(newState);

}
init(); 
   
   //Pie chart
   getData2();
    async function getData2() {
       const response = await fetch("/gun_violenceDB/combineData_StateParty");
       const data = await response.json();
       console.log(data);
       
       var dataset_p=data[0]
       console.log(dataset_p)

      
       values_a = [dataset_p.accidentalDeath.Democratic, dataset_p.accidentalDeath.Republican];
       values_m = [dataset_p.massShootings.Democratic, dataset_p.massShootings.Republican];
       values_f = [dataset_p.fatalPoliceShootings.Democratic, dataset_p.fatalPoliceShootings.Republican];
       values_s = [dataset_p.accidentalDeath.Democratic+dataset_p.massShootings.Democratic+dataset_p.fatalPoliceShootings.Democratic,
         dataset_p.accidentalDeath.Republican+dataset_p.massShootings.Republican+dataset_p.fatalPoliceShootings.Republican]
      
       console.log(values_a)
      
       new Chart(document.getElementById("pie-chart"), {
          type: 'pie',
          data: {
             labels: ["Democratic","Republican"],
             datasets: [
                {
                   label: "Death by Party Affiliations",
                   backgroundColor: ['#334BFF','#D64550'],
                   data: values_a
                }
             ]
          },
          options: {
            responsive: true,
            plugins: {
               legend: {display: true, position: 'right'},
               title: {
                  display: true,
                  text: 'AccidentalDeath by Party',
                  padding:{
                     top: 10,
                     bottom:20
                  }
               }
             }
           },
              
           });

         new Chart(document.getElementById("pie-chart2"), {
            type: 'pie',
            data: {
               labels: ["Democratic","Republican"],
               datasets: [
                  {
                     label: "Death by Party Affiliations",
                     backgroundColor: ['#334BFF','#D64550'],
                     data: values_m
                  }
               ]
            },
            options: {
              responsive: true,
              plugins: {
                 legend: {display: true,},
                 title: {
                    display: true,
                    text: ' MassShooting Death by Party',
                    padding:{
                       top: 10,
                       bottom:20
                    }
                 }
               }
             },
                
             });
         new Chart(document.getElementById("pie-chart3"), {
            type: 'pie',
            data: {
               labels: ["Democratic","Republican"],
               datasets: [
                  {
                     label: "Death by Party Affiliations",
                     backgroundColor: ['#334BFF','#D64550'],
                     data: values_f
                  }
               ]
            },
            options: {
               responsive: true,
               plugins: {
                  legend: {display: true,},
                  title: {
                     display: true,
                     text: 'fatalPoliceShooting by Party',
                     padding:{
                        top: 10,
                        bottom:20
                     }
                  }
               }
               },
                  
               });
               new Chart(document.getElementById("pie-chart4"), {
                  type: 'pie',
                  data: {
                     labels: ["Democratic","Republican"],
                     datasets: [
                        {
                           label: "Death by Party Affiliations",
                           backgroundColor: ['#334BFF','#D64550'],
                           data: values_s
                        }
                     ]
                  },
                  options: {
                     responsive: true,
                     plugins: {
                        legend: {display: true,},
                        title: {
                           display: true,
                           text: 'fatalPoliceShooting by Party',
                           padding:{
                              top: 10,
                              bottom:20
                           }
                        }
                     }
                     },
                        
                     });
    
      }
      //Pie chart
   getData3();
   async function getData3() {
      const response = await fetch("/gun_violenceDB/gunOwnership_StateParty");
      const data = await response.json();
   
      var dataset_g=data[0]
      console.log(dataset_g)

      values_g = [dataset_g.totalGuns.Democratic, dataset_g.totalGuns.Republican];

      new Chart(document.getElementById("pie-chart5"), {
         type: 'pie',
         data: {
            labels: ["Democratic","Republican"],
            datasets: [
               {
                  label: "TotalGuns by Party Affiliations",
                  backgroundColor: ['#334BFF','#D64550'],
                  data: values_g
               }
            ]
         },
         options: {
           responsive: true,
           plugins: {
              legend: {display: true, position: 'right'},
              title: {
                 display: true,
                 text: 'AccidentalDeath by Party',
                 padding:{
                    top: 10,
                    bottom:20
                 }
              }
            }
          },
             
          });
   }