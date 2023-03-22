# This repository contains the code which was used to connect the Airtable API to google sheets

Problem: 
To be able to visualise data onto tableau, it required the use of tableau's native Web Data Connector (WDC) to connect to third party websites such as Airtable. However, the WDC was used to extract data periodically instead of having a live connection. Due to operational demands, a live connection was needed to speed up workflows and reduce man hours.

Solution: 
Using the Airtable API and Google's app scripts (Javascript based), I managed to connect link the database to a google sheet to allow tableau to connect to the google sheet more efficiently.
