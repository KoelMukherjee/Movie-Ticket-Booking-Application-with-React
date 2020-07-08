import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import BookTicket from "./components/bookTicket";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom' 

const routing = (  
    <Router>  
      <div> 
        <Route exact path="/" component={App} /> 
        <Route path="/tickets" component={BookTicket} />
      </div>  
    </Router>  
  )  
  ReactDOM.render(routing, document.getElementById('root'));  