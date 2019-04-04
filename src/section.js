import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './text-reveal.js';


export default class Section extends React.Component{
    constructor(props){
    super(props);
    this.state = { willReavel: false}
    }

    componentDidMount(){
        this.setState((state)=>{
            return {willReavel : true}
        })
    }

    render(){

        return(
            <React.Fragment>
            <div className="background">
                <div className="container">
                    <TextHeader willReavel={this.state.willReavel}/>
                    <FadeHeader willReavel={this.state.willReavel}/>
                </div>
                <NavBar willReavel={this.state.willReavel}/>
            </div>
            </React.Fragment>
        )
    };






}