import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div style={{'width':'100%','height':'100%'}}>
        <Fade when={this.props.willReavel}  delay={500}  >
          <h1>Know Your Customers</h1>
        </Fade>
        <Fade when={this.props.willReavel}  delay={600}  >
          <h1>Create Value</h1>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;
