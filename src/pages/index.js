import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Fade from 'react-reveal';
import Section from '../../src/components/section.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Privacy from '../../src/components/privacy-section.js';

function AppRouter(){
  
     return(  
        <Router>
      <Route exact path="/" component={renderSection} />
      <Route exact path="/privacy" component={renderPrivacy} />
<Fade bottom>
        <footer>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/privacy">Pricacy</Link>
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

function renderPrivacy({match}){
  return(
      <React.Fragment>
          <Privacy match={match}/>
      </React.Fragment>
  )


}

ReactDOM.render(<AppRouter/>,document.getElementById('app'));