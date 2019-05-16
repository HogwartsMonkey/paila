import React from 'react';
import {TextSection,TextBox} from './introduction.js';
import {ServicesDesktop,ServicesMobile} from './section-b.js';



export function ResponsiveServicesMenu(props){
    const isMobile = props.isMobile;
    if(isMobile){
        return (
            <ServicesMobile
            services={props.services} 
            willReveal={props.willReveal}
            servicesDesc = {props.servicesDesc}
            selectedSection = {props.selectedSection}
            />
        )
        }
    
      else{ return(
             <ServicesDesktop
                 services={props.services} 
                 willReveal={props.willReveal}
                 servicesDesc = {props.servicesDesc}

                 />
      )
      }
}