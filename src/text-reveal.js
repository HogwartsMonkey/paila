import React from 'react';
import Fade from 'react-reveal/Fade';

export default class FadeHeader extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="headline-container">
      
        <div className="h-1">
          <Fade when={this.props.willReavel}  delay={1800}  >
            <h1>Paila</h1>
          </Fade>
        </div>
        <div className="h-1">
          <Fade when={this.props.willReavel}  delay={1800}  >
            <h1>Create Value.</h1>
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
          </Fade> <Fade when={this.props.willReavel} delay={900}>
         <p> Crunching Figures</p>
         </Fade>
          <Fade when={this.props.willReavel} delay={1400}>
         <p>Delivering.</p>
         </Fade>
          </div>
      )
  }
}


