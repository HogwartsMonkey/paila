import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Section from '../../src/components/section.js';

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