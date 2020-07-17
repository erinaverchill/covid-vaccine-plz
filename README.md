## UCI Data Analytics Bootcamp - Group Project #2: COVID-19 Dashboard
### Erin Averill, Srinivas Hanumansetty, Adrian Llamas, Andrea Rosenberger, and Jungie Son

#### Data Sources
CDPH Coronavirus Science Branch (3/18/2020 - present)
https://data.ca.gov/dataset/covid-19-cases
[from https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/nCOV2019.aspx]

OC Health Care Agency
https://ochca.maps.arcgis.com/apps/opsdashboard/index.html#/5839a554eaac45c2b8e05dacc74c3bec

County of Los Angeles Public Health
http://publichealth.lacounty.gov/media/Coronavirus/locations.htm

San Diego County Communicable Disease Registry; SANDAG 2019 Population Estimates (Prepared June 2020)
https://www.sandiegocounty.gov/content/dam/sdc/hhsa/programs/phs/Epidemiology/COVID-19%20Daily%20Update_City%20of%20Residence.pdf

Santa Barbara Public Health Dept
https://publichealthsbc.org/status-reports/

CalRedie Communicable Disease Registry/Prepared by Riverside University Health System: Public Health, Epidemiology & Program Evaluation
https://www.rivcoph.org/Portals/0/Documents/CoronaVirus/July/Dashboard/2/City_Report_071320.pdf?ver=2020-07-13-151405-373&timestamp=1594678461087

San Bernardino County Department of Public Health
https://sbcph.maps.arcgis.com/apps/opsdashboard/index.html#/e7624f177c6449dcb88498437c1b921d

https://www.worldometers.info/coronavirus/usa/california/

https://occovid19.ochealthinfo.com/coronavirus-in-oc

http://publichealth.lacounty.gov/media/Coronavirus/data/index.htm

https://sbcovid19.com/

#### Purpose
Group 3 will make a dashboard with the most up-to-date available data, including positive/negative tests, hospitalizations, ICUs, ventilations, deaths, and recoveries.  
Visualizations on our dashboard will include a Python Flask–powered RESTful API, HTML/CSS, and SQL.

#### Process
Admin/Intermediary/DevOps - Adrian and Erin

Back End (Acquisition, cleaning, ETL) - Jung Je, Adrian and Andrea (DB)
  - Scraping city data - by cases (https://coronavirus.egovoc.com/coronavirus-in-oc)
  - JSON
  - Postgres/SQL Database 
  
Front End - Erin and Srinivas
  - JavaScript, Visualization
  - html/css index page
