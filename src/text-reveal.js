import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeHeader extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="headline-container">
      
        <div className="h-1">
          <Fade when={this.props.willReavel}  delay={300}  >
            <h1>Paila</h1>
          </Fade>
        </div>
        <div className="h-1">
          <Fade when={this.props.willReavel}  delay={300}  >
            <h1>Create Value.</h1>
          </Fade>
        </div>
      
      </div>
    );
  }
}

export default FadeHeader;
