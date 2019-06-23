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
                <div className='privacy-menu-flex-parent-container'>
                    <PrivacyMenu left={true}></PrivacyMenu>
                    <PrivacyDesc right={true}></PrivacyDesc>
                </div>

        )
    };
}