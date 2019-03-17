import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Section from './section.js';

class Main extends React.Component{
    render(){
   return (
       <React.Fragment>
           <Section/>
   </React.Fragment>
   )
    };
}

ReactDOM.render(<Main/>,document.getElementById('app'));