import React from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"

function App() {
  return (
    <div className="app">
      <div className="app__header">
          <h1>COVID 19 TRACKER</h1>

        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
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
