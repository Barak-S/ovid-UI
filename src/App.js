import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CovidData from './CovidData'
import Nav from './Nav'
import About from './About'
import Home from './Home'
import Footer from './Footer'


function App() {
  
  return (
    <Router>
      <div className="App">
        <header >
          <Nav></Nav>
          <CovidData></CovidData>
        </header>
        <Switch>
            <Route exact path = "/"render={(routerProps)=> <Home {...routerProps}/> }/>
            <Route exact path= "/about" render={(routerProps) => <About {...routerProps}/>}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;