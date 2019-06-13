import React from 'react';
import {FadeHeader} from './nav-menu.js';
import { Fade } from 'react-reveal';
import PrivacySectionContainer from './privacy-section-container.js';

export default class Privacy extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="background">
                    <div className="header">
                    <FadeHeader top={true} durtation={0}/>
                    </div>
                <div style={{width:'100%',height:'500px'}}>
                    <PrivacySectionContainer></PrivacySectionContainer>
              


                </div>
     </div>




        )
    }
} 