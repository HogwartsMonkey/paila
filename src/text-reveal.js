import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div style={{'width':'100%','height':'100%'}}>
        <div className="h-1">
        <Fade when={this.props.willReavel}  delay={300}  >
          <h1>Create Value.</h1>
        </Fade>
        </div>
      </div>
    );
  }
}

export default FadeExample;
