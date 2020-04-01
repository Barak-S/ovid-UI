import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CovidData from './CovidData'
import CountryStatFinder from './CountryStatFinder'
import News from './News'

import { Container, Col, Row, Image, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <body>
          <h2>Covid-19 Data UI</h2>
          <CovidData></CovidData>
            <Row>
                <CountryStatFinder></CountryStatFinder>
                <News></News>
            </Row>
             

      </body>
    </div>
  );
}

export default App;
