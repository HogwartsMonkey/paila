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
          <Fade when={this.props.willReavel}  duration={1000} bottom  delay={300}  >
            <h1>Paila</h1>
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
    <div style={{display:'block',position:'relative',minHeight:'50px'}}>
        <div className="nav_menu">
          <ul>
              <li onClick={function(){console.log('hi')}}>Who</li>
              <li>How</li>
              <li>What</li>
              <li>Why</li>
            </ul>
        </div>
      </div>
    </Fade>
  )
};
}
