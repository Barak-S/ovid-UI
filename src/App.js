import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CovidData from './CovidData'
import CountryStatFinder from './countryStatFinder'

function App() {
  return (
    <div className="App">
      <body>
          <h2>Covid-19 Data UI</h2>
          <CovidData></CovidData>
          <CountryStatFinder></CountryStatFinder>
      </body>
    </div>
  );
}

export default App;
