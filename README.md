<h2> #  Project 3 | Group E </h2>
<h1>Gun Violence in America</h1>


<p>
<h3> Description:</h3>  
We all know that gun violence in the US is prevalent, but is gun violence getting worse over the years? For our project, we will use an interactive  dashboard to show viewers the impact that guns have had over the years across the US. How has the pandemic impacted gun violence? Has gun violence increased in a certain state, and does being a red state or a blue state affect their safety from the dangers of guns? Our goal is to create a visual presentation of the data that we find to answer these questions. 
<p>
<h3> Group Members:</h3> <br>
Selina<br>
Mike Ariwodo<br>
William M<br>
Aimee V<br>
Jarvis L<br>
Vertta M<br>
Pradip<br>
Valentina Z<br>
James D<br>
Gina S<br>
Preston H<br>
<p>
  <br>
  
<h3>Datasets:</h3>  <br> 
https://www.gunviolencearchive.org/mass-shooting  <br>
 https://www.safehome.org/data/firearms-guns-statistics/#police  <br>
https://www.gunviolencearchive.org/accidental-injuries <br>
https://www.gunviolencearchive.org/accidental-deaths <br>
https://worldpopulationreview.com/state-rankings/gun-ownership-by-state  <br>
https://en.wikipedia.org/wiki/Political_party_strength_in_U.S._states  <br>
<p>
<h3> Database: MongoDB  </h3> <br>

<p>
<h3> Tasks:  </h3><br>

* Set up database - Vertta/Selina
* Clean data - James Dellinger
* Flask API - Aimee
* HTML/CSS frame of website - Gina/Aimee
* Interactions
  - Interactive - Valentina/Michael
  - Heatmap toggle button
  - State Statistics Display
* Drop Down Categories - William/Jarvis
  - How has the pandemic affected gun violence
    - Time
    - Count of Data Categories
  - Rate of death vs year
    - Number of Deaths
    - Year
  - Rate of injury vs year
    - Number of Injury
    - Year
  - Red vs Blue - Political view //need list of states and party affiliation
    - State Party
    - Time
    - Count of Data Categories
* Types of gun violence (Data categories) - displayed on map
  - Mass Shooting
  - Officer Involved Shootings
  - Accidental Injuries
  - Accidental Deaths
* PowerPoint Presentation - (Done by Tuesday) - Aimee/Pradip
 
<p>

<h3>Sketch: </h3>  <br>

<h3>ETL</h3>
   <p>The extract process,.....<p> <br>
   <p>The transform process, we use jupyter notebook(gundata_clean_load.ipynb) to clean the original datasets includs sorting, rename, groupby and merge by year, state to get the data we need, then conver the cleaned datasets into json file. </p> <br>
   <p>The load process, we use pymongo, MongoClient to connect and load the datasets into MongoDB collections </p> <br>
  Mongodb_gun_violenceDB.png


<h3> Python Flask Api</h3> <br> 
   <p></p>

