# Gun Violence in Minnesota 
<font size="3">**Group-Project-3: Team 7**  
**Contributors:**
- "Alice" Lan Nguyen
- Arnold Miranda Renoso
- Jacob Anderson
-  MaiDao Lor 
</font>

## Project Overview
We have acquired access to two essential datasets, namely the "Gun Violence Data" and "US Population by State," from the Kaggle website. The CSV file contains data pertaining to every documented incidents of gun violence in the US between January 2013 to March 2018, inclusive. Our analysis will focus on the geographical distribution of gun-related incidents within the states of California, Oregon, Minnesota, Illinois, New York, Maine, Florida, and Alabama.

The selection of these specific states is informed by a consideration of both the most perilous and safest states in the context of gun violence. Notably, Minnesota has been included due to its personal significance as our place of residence, emphasizing our commitment to understanding the dynamics of our local environment.

Furthermore, our analysis will encompass a comparative examination of trends over a specific year relative to the entirety of the dataset's temporal span. This approach will enable us to gain valuable insights into the evolution of gun-related incidents over time.

## Our Process
1. ETL Process:
- We will acquire datsets from CSV files and import them into Python for further analysis. 
- Merge and clean the datasets, transforming them into a structured dataframe for efficient analysis.
- Store the prepare dataframe into an SQLite database for data persistence.
    - In the Project3 file you will find 
2. Data Analysis:
- Conduct visual representations, includintg maps and plots, to enhance data understanding.
    - Within the "app.js" file, you will discover the dataset that pertains to the occurrence of gun violence over a one-year period for Minnesota. 
3. Website Development:
- Develop a website with the following components:
    - HTML: create the webpage structure
    - CSS: Apply styling to the webpage for a polished appearance. 
    - JavaScript: Enhance interactivity and user experience on the website. 
4. Flask: 
- Ensure seamless data access and interaction between the website and the data stored in the SQLite database using Flask.



## Resources
Dataset used:
- https://www.kaggle.com/datasets/jameslko/gun-violence-data : This Dataset contains most of the relevant gun violence information
- https://www.kaggle.com/datasets/alexandrepetit881234/us-population-by-state : This data set to get a better perspective by comparing the incidents to the population of each state. 

Coding resources:
- https://www.freecodecamp.org/newshow-to-make-line-charts-in-javascript
