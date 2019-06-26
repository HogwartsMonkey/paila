import React from 'react';
import { Fade } from 'react-reveal';

const privacy = [
    {desc:'what data do you collect',summary: 'We only track data you have selected to share.'},
    {desc:'Do you use cookies',summary: 'Google Anlytics and Google Ads Browser Cookies'},
    {desc:'Do you collect Personal date',summary: 'We will never collect any personal data.'}
]

export class PrivacyMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }

    renderMenuItem(itemsArray){
        const allMenuItems = itemsArray.map( item =>
            <MenuItem array={item}/>
        )
        return allMenuItems
    }

        render(){
            return (
                <Fade left={this.props.left}>
                <div className='privacy-menu-flex-child-container'>
                    {this.renderMenuItem(privacy)}
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
         var newState = !this.state.toggleMenu
        this.setState({toggleMenu: newState})
    }
    

    render(){
        return(
            <div>
                <div onClick={()=>{this.toggleMenu()}}>
                    <p>{this.props.array.desc}</p>
                </div>
                <div className={this.state.toggleMenu ? 'visable': 'flex-hidden'}>
                 <p>{this.props.array.summary}</p>

                </div>

            </div>
        )
    };
}