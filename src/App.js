import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CovidData from './CovidData'
import CountryStatFinder from './CountryStatFinder'
import News from './News'

import { Row } from 'react-bootstrap';


function App() {

  const [countryName, setCountryName] = useState('us')

  
  return (
    <div className="App">
      <body>
          <h2>Covid-19 Data UI</h2>
          <CovidData></CovidData>
            <Row>
                <CountryStatFinder></CountryStatFinder>
                <News
                  countryName={countryName}
                ></News>
            </Row>
             

      </body>
    </div>
  );
}

export default App;