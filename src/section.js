import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './text-reveal.js';


export default class Section extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
        willReavel: false, 
        frontLayerStyle:{backgroundColor:'trasparent',width:'100%',height:'100%',transition:'background-color 2s ease'}
    
    };

    }

    componentDidMount(){
       // setTimeout(function(){this.setState({frontLayerStyle: {backgroundColor:'transparent',width:'100%',height:'100%',transition:'background-color 1s ease'}})}.bind(this),1100);
        this.setState((state)=>{
             return ({willReavel : true})
        })
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

            </div>

            </React.Fragment>
        )
    };






}