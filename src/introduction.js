import React from 'react';
import Fade from 'react-reveal/Fade';


export class TextSection extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <Fade when={this.props.willReveal} bottom delay={300}>
                <div className="h2-container">
                <div><h2>{this.props.headline}</h2></div>
                
                <div><h3>{this.props.text}</h3></div>
                </div>
         </Fade>
        )
    };
}