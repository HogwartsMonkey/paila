import React from 'react';
import { Fade } from 'react-reveal';

export class PrivacyDesc extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
        render(){
            return (
                <Fade right={this.props.right}>
                <div style={{width:'50%',height:'100%',backgroundColor:'red'}}>

                </div>
                </Fade>
            )
        }
    
}