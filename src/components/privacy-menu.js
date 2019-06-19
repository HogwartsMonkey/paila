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
                    <MenuItem/>
                </div>
                </Fade>
            )
        }
    
}

class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toggleMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
       
    }

     toggleMenu(e){
        this.setState({toggleMenu: !this.state.toogleMenu})
    }
    

    render(){
        return(
            <div>
                <div onClick={this.toggleMenu}>
                    <p>What data do we collect?</p>
                </div>
                <div className={this.state.toggleMenu ? 'visable': 'flex-hidden'}>
                 <p>We only track data you have selected to share.</p>

                </div>

            </div>
        )
    };
}