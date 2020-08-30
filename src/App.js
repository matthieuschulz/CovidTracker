import React, {useState, useEffect} from 'react';
import './App.css';
import {MenuItem,FormControl,Select, Card, CardContent} from "@material-ui/core";
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [country,  setCountryInfo] = useState({});

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

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    // 2 Conditions Worldwide vs countries
    //https://disease;sh/v3/covid-19/all
    //https://diseases.sh/v3/covid-19/countries/[COUNTRY_CODE]

    const url = countryCode === "worldwide"
     ?  `https://disease;sh/v3/covid-19/all`
     : `https://diseases.sh/v3/covid-19/countries/${countryCode}`;

     
     await fetch(url)
     .then(response => response.json())
     .then(data =>{
       setCountry(countryCode); // updates input field
       setCouuntryInfo(data); // stores response
     })


     
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
           {/* Header */}
          <h1>COVID 19 TRACKER</h1>
          {/* Title + Select input dropdown field */}
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value="worldwide">WorldWide</MenuItem>

            {countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
        

      <div className = "app__stats">
         <InfoBox title="Covid 19 Cases" cases={123} total={2000}/>

         <InfoBox title="Recovered" cases={123} total={2000}/>

         <InfoBox title="Deaths"cases={122} total={2000}/>
        {/* InfoBox title: Corona cases */}
        {/* InfoBox title: Corona recoveries */}
        {/* InfoBox title: Corona deaths*/}
      </div>

        {/* Map */}
        <Map/>
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Life Cases by Country</h3>
          {/* Table */}
        <h3> WorldWide new  cases</h3>
        </CardContent>
        
        {/* Graph */}
      </Card>
      
    </div>
    
  );
}

export default App;
