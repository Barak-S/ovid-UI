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
        </header>
        <Switch>
            <Route exact path = "/"render={(routerProps)=> <Home {...routerProps}/> }/>
            {/* <Route exact path= "/contact" render={(routerProps) => <Contact {...routerProps}/>}/> */}
            {/* <Route exact path= "/about" render={(routerProps) => <About {...routerProps}/>}/> */}
            {/* <Route exact path= "/news" render={(routerProps) => <News {...routerProps}/>}/> */}
        </Switch>
  
      </div>
    </Router>
  );
}

export default App;