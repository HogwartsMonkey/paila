import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Fade from 'react-reveal';
import Section from '../../src/components/section.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter(){
  
     return(  
        <Router>
      <Route exact path="/" component={Section} />

<Fade bottom>
        <footer>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Privacy">Pricacy</Link>
            </li>
            <li>
              <Link to="/Cookies">Cookies</Link>
            </li>
          </ul>
  
        </footer>
</Fade>
      </Router>
    )
   
}

ReactDOM.render(<AppRouter/>,document.getElementById('app'));