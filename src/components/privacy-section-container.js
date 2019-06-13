import React from 'react';
import { Fade } from 'react-reveal';
import {PrivacyDesc} from './privacy-desc.js'
import {PrivacyMenu} from './privacy-menu.js';

export default class PrivacySectionContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
                <div style={{display:'flex',flexDirection:'row',width:'100%',height:'100%'}}>
                    <PrivacyMenu></PrivacyMenu>
                    <PrivacyDesc></PrivacyDesc>
                </div>

        )
    };
}