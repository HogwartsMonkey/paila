import React from 'react-dom';
import ReactDOM from 'react-dom';
import './privacy.scss';
import PrivacySection from '../../src/components/privacy-section.js';

class Privacy extends React.Component{
    render(){
        return(
            <React.Fregmant>
            <PrivacySection/>
            </React.Fregmant>
        );
    }
}

ReactDOM.render(<Privacy/>,document.getElementById('app'))