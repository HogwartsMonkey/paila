import React from 'react';
import { Fade } from 'react-reveal';

export class PrivacyMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
        render(){
            return (
                <Fade left={this.props.left}>
                <div style={{width:'50%',height:'100%',backgroundColor:'white',display:'flex',flexDirection:'column'}}>

                </div>
                </Fade>
            )
        }
    
}