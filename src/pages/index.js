import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Fade from 'react-reveal';
import Section from '../../src/components/section.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter(){
  
     return(  
        <Router>
      <Route exact path="/" component={renderSection} />

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

function renderSection({match}){
    return(
        <React.Fragment>
            <Section match={match}/>
        </React.Fragment>
    )


}

ReactDOM.render(<AppRouter/>,document.getElementById('app'));