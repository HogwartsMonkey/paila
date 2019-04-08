import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './text-reveal.js';
import {TextSection,TextBox} from './introduction.js';

export default class Section extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
        willReavel: false, 
        frontLayerStyle:{backgroundColor:'trasparent',width:'100%',height:'100%',transition:'background-color 2s ease'},
        headlineText: 'Choose Yourself',
        content: 'Reach New Audiences. Enhance Each Ones Value. Reveal Your Business True Potential',
        positionY:1
    }

        this.handleScroll = this.handleScroll.bind(this);
    }
    

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
        this.setState((state)=>{
             return ({willReavel : true})
       
        })
    }


    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }

    handleScroll(e){
        let currentY = window.pageYOffset;
        this.setState({positionY: currentY});
    }


    render(){

        return(
            <React.Fragment>

            <div className="background">

                <div className="container">

                    <div style={this.state.frontLayerStyle}>

                    <TextHeader willReavel={this.state.willReavel}/>
                    <FadeHeader willReavel={this.state.willReavel}/>

                  </div>

                </div>
            
                <NavBar willReavel={this.state.willReavel}/>
                <TextSection text={this.state.content} headline={this.state.headlineText} willReavel={this.state.willReavel}/>
                <div style={{width:'100%',height:'50px'}}></div>
                <TextBox windowPosition={this.state.positionY}/>
            </div>

            </React.Fragment>
        )
    };






}