import React from 'react';
import Fade from 'react-reveal/Fade';

class TextHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="text">
            <p>Exploring Data.<br></br>Crunching Figures.<br></br>Delivering.</p>
            </div>
        )
    }
}

export default TextHeader;