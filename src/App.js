import React, {useState, useEffect} from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"

function App() {
  const [countries, setCountries] = useState([]);

  //STATE = How to declare a variable in REACT
  //USEEFFECT = Runs a piece of code based on a given condition
  //async -> sned a request, wait for it, do something with info

  useEffect(() => {
   
   const getCountriesData = async() => {
     await fetch("https://disease.sh/v3/covid-19/countries")
     .then((response) => response.json())
     .then((data) => {
          const countries = data.map((country) => ({
              name: country.country, //United States, United Kingdom
              value: country.countryInfo.iso2 //UK, USA, FR
            }));
          setCountries(countries);
            

     });
   };
   getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
          <h1>COVID 19 TRACKER</h1>

        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"

          >
            {
              countries.map(country => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }
            {/* Loop through all countries and show a drop down list of the options*/}
            
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">Wddd</MenuItem>
            <MenuItem value="worldwide">Wd,dd,d,d,de</MenuItem>
            <MenuItem value="worldwide">yoooo</MenuItem>
            <MenuItem value="worldwide">WorldWide1234343</MenuItem>
          
          </Select>

          

        </FormControl>
      </div>
        

        {/* Header */}
        {/* Title + Select input dropdown field */}

        {/* InfoBox */}
        {/* InfoBox */}
        {/* InfoBox */}

        {/* Table */}
        {/* Graph */}

        {/* Map */}
        


    </div>
    
  );
}




export default App;
