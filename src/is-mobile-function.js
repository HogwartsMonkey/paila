import React from 'react';
import {TextSection,TextBox} from './introduction.js';
import {ServicesDesktop} from './section-b.js';



export function ResponsiveServicesMenu(props){
    const isMobile = props.isMobile;
    if(isMobile){
        return (
                <TextBox/>
        )
        }
    
      else{ return(
             <ServicesDesktop
                 services={props.services} 
                 willReveal={props.willReveal}
                 />
      )
      }
}