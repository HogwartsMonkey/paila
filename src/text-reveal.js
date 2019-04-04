import React from 'react';
import Fade from 'react-reveal/Fade';

export class FadeHeader extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="headline-container">
      
        <div className="h-1">
          <Fade when={this.props.willReavel}  delay={2100}  >
            <h1>Paila</h1>
          </Fade>
        </div>
        <div className="h-1">
          <Fade when={this.props.willReavel}  delay={2100}  >
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

            <Fade when={this.props.willReavel} delay={300}>
            <p>Exploring Data.</p>
            </Fade> 

            <Fade when={this.props.willReavel} delay={900}>
          <p> Crunching Figures.</p>
          </Fade>

            <Fade when={this.props.willReavel} delay={1400} cascade>
          <p>Delivering.</p>
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
    <Fade when={this.props.willReavel} delay={2100}>
      <div className="nav_menu">
        <ul>
            <li>Who</li>
            <li>How</li>
            <li>Why</li>
          </ul>
      </div>
    </Fade>
  )
};
}
