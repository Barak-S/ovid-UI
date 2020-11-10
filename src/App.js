import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CovidData from './component/CovidData'
import CountryTable from './containers/countryStatFinder'
import Nav from './component/Nav'
import About from './containers/About'
import Footer from './component/Footer'


function App() {
  
  return (
    <Router>
      <div className="App">
        <header >
          <Nav></Nav>
          <CovidData></CovidData>
        </header>
        <Switch>
            <Route exact path = "/"render={(routerProps)=> <CountryTable {...routerProps}/> }/>
            <Route exact path= "/about" render={(routerProps) => <About {...routerProps}/>}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;