import React from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class FadeHeader extends React.Component {
    constructor(props){
        super(props);
    }
    
  render() {
    return (
      <div className="headline-container">
      
        <div className="h-1">
          <Fade when={this.props.willReavel}  duration={1000} bottom  delay={300}  >
            <Link to={'${match.url}/privacy'}><h1>Paila</h1></Link>
          </Fade>
        </div>
        <div className="h-1">
          <Fade when={this.props.willReavel} duration={1000}  bottom  delay={300}  >
            <h1>Creating Value.</h1>
          </Fade>
        </div>
      
      </div>
    );
  }
}

export class TextHeader extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
      return(
          <div className="text">

            <Fade when={this.props.willReavel}  duration={1000} top delay={300}>
            <div> <p>Exploring Data.</p></div>
            </Fade> 

            <Fade when={this.props.willReavel} duration={1000} top  delay={300}>
            <div>  <p>Serving Creativity.</p></div>
          </Fade>

            <Fade when={this.props.willReavel} duration={1000} top delay={300}>
            <div><p>Delivering.</p></div>
          </Fade>

          </div>
      )
  }
}

export class NavBar extends React.Component{
  constructor(props){
    super(props); 
    
}


  render(){
return(
    <Fade when={this.props.willReavel} duration={1000} bottom delay={300}>
    <div className="text-box">
        <div className="nav_menu">
          <ul>
              <li className={this.props.selectedSection == 1 ? "text-color" : ""} onClick={()=>{this.props.changeVisability(1)}}>Who</li>
              <li className={this.props.selectedSection == 2 ? "text-color" : ""} onClick={()=>{this.props.changeVisability(2)}}>How</li>
              <li className={this.props.selectedSection == 3 ? "text-color" : ""} onClick={()=>{this.props.changeVisability(3); this.props.isMobile? window.scrollTo({top:this.props.servicesOffsetBottom,behavior:'smooth'}):window.scrollTo({top:this.props.servicesOffsetBottom,behavior:'smooth'})}}>What</li>
              <li className={this.props.selectedSection == 4 ? "text-color" : ""} onClick={()=>{this.props.changeVisability(4)}}>Why</li>
          </ul>
        </div>
      </div>
    </Fade>
  )
};
}
