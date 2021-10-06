import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import About from './Components/Navbar/about'
import Service from './Components/Navbar/service'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
    <Router>
    <div>      
    <Navbar/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/service">
            <Service/>
          </Route>
          <Route exact path="/navbar">
            <Navbar />
          </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default App
