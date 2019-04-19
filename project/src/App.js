import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './css/style.css';
import Navbar from './compnents/navbar';
import Home from './compnents/home';
import Billing from './compnents/billing';
import Review from './compnents/review';
import Complete from './compnents/complete';



class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
          <Navbar title= "Forever21" />
        <Route exact path= "/" render = {() => <Home title = "Forever21" />} />
        <Route path = "/actors" component = {Billing}/>
        <Route path = "/actress" component = {Review}/>
        <Route path = "/films" component = {Complete}/>
        </div>
        </BrowserRouter>

    );
  }
}

export default App;
