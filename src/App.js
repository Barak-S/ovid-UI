import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CovidData from './CovidData'
import Nav from './Nav'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import News from './News'


function App() {

  // const [countryName, setCountryName] = useState('us')

  
  return (
    <Router>
      <div className="App">
        <header >
          <Nav></Nav>
          <CovidData></CovidData>
          <meta name="viewport" content="width=device-width" ></meta>
        </header>
        <Switch>
          <Route exact path = "/"render={(routerProps)=> <Home {...routerProps}/> }/>
        </Switch>
        <Switch>
          <Route exact path= "/contact" render={(routerProps) => <Contact {...routerProps}/>}/>
        </Switch>
        <Switch>
          <Route exact path= "/about" render={(routerProps) => <About {...routerProps}/>}/>
        </Switch>
  
      </div>
    </Router>
  );
}

export default App;