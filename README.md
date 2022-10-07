# Project 3 | Group E
## Gun Violence in America

### Description:
<p>We all know that gun violence in the US is prevalent, but is gun violence getting worse over the years? For our project, we will use an interactive  dashboard to show viewers the impact that guns have had over the years across the US. How has the pandemic impacted gun violence? Has gun violence increased in a certain state, and does being a red state or a blue state affect their safety from the dangers of guns? Our goal is to create a visual presentation of the data that we find to answer these questions.</p>

### Project Website
<a href= "https://aimeevu.github.io/project-3-group-e/templates/index.html">Click Me To Enter Our Site</a>

### Detailed Slide Presentation
<a href= "project_documents/Group E Project 3.pdf">Click Me To View Our Presentation</a>

### Group Members:

* <a href="https://github.com/sesu0722">Selina</a>
* <a href="https://github.com/Ariwodo16">Mike Ariwodo</a>
* <a href="https://github.com/WMatthewARC">William M</a>
* <a href="https://github.com/aimeevu">Aimee V</a>
* <a href="https://github.com/jlmamp">Jarvis L</a>
* <a href="https://github.com/vertta">Vertta M</a>
* <a href="https://github.com/pradipraodeo">Pradip</a>
* <a href="https://github.com/vkk125">Valentina Z</a>
* <a href="https://github.com/jdellinger80">James D</a>
* <a href="https://github.com/GigiSchulte">Gina S S</a>

### Datasets:

* <a href="https://www.gunviolencearchive.org/mass-shooting">Gun Violence Archive: Mass Shootings</a>
* <a href="https://www.safehome.org/data/firearms-guns-statistics/#police">Safehome: Police Firearms Gun Statistics</a>
* <a href="https://www.gunviolencearchive.org/accidental-injuries">Gun Violence Archive: Accidental Injuries</a>
* <a href="https://www.gunviolencearchive.org/accidental-deaths">Gun Violence Archive: Accidental Deaths</a>
* <a href="https://worldpopulationreview.com/state-rankings/gun-ownership-by-state">Gun Ownership By State</a>
* <a href="https://en.wikipedia.org/wiki/Political_party_strength_in_U.S._states">Political Party Strength in US States</a>

### Database:

<p>For this project, we decided to use MongoDB for our database.</p>

### Tasks:

* Set up database - Vertta/Selina
* Clean data - James Dellinger
* Flask API - William
* HTML/CSS frame of website - Gina/Aimee
* Interactive Map - Valentina/Michael
* Drop Down Charts - Selina/Michael/Jarvis
* PowerPoint Presentation - (Done by Tuesday) - Aimee/Pradip/William

### Sketch:
![sketch](./image/ReadMe-sketch.png)
### ETL Methodology Used:
* Data was  pulled into a Jupyter notebook and cleansed using python to ensure the dataset had consistency across data sets . The date chosen were after 2019.  
* Fields Needed For Charts - # Killed, # Injured, State, Year
* Fields Needed For Map - State, Gun Ownership Percentage

### Flask Application Overview:
 <p>With the database loaded, we connect MongoDB and import the data to active Api for visualization with Javascript</p>
 
![Flask](./image/Api_accidentalDeath.png)

### Decorating The Site:

https://coolors.co/334bff-4d2d52-f4d58d-697268-d64550



### Visualizations

* Gun ownership by State - Interactive map

![map](./image/mappic.jpg)

* Injured vs Killed visualization

![injured](./image/Readme-injured-killed.png)

* Dashboard for Gun violence
   <p>The dashboard contains pie charts for gun violence vs.party affiliation, bar chart for the total death count of each states and line chart representing three different kinds of gun violence. With a dropdown to see the data from year to year</p>
   <p>Pie charts: charts are created using Javascript chart.js library base on the gun ownership by states data and gun death by states. Which shows the total counts for guns and death in blue vs. red states.</p> 
   https://github.com/aimeevu/project-3-group-e/blob/selina/images/By%20party.png
   <br>
   <p>Bar chart and line chart: The bar chart and line chart are made by chart.js as well. The data is the combined dataset that contains the information per year and state. these two charts will show new data base on the dropdown selections</p>
  https://github.com/aimeevu/project-3-group-e/blob/selina/images/bar%20and%20line.png
   <br>
