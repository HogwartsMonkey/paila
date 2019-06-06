import React from 'react';
import Partner from '../assets/google_partner.jpg';
import Fade from 'react-reveal/Fade';
import { Z_BLOCK } from 'zlib';


export class BottomLinks extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fade bottom>
                    <div className="footer-bar">
                        <div className="img-container">
                            <img className="img-responsive" src={Partner}/>
                        </div>
                        <div className="col-3-5">
                            <ul>
                                <li href="./privacy.html">Privacy</li>
                                <li>Cookies</li>
                            </ul>
                        </div>

                    </div>
            </Fade>
        )
    };
}