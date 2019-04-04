import React from 'react';
import FadeHeader from './text-reveal.js';

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
            <div className="background">
                <div className="container">
                    <div className="text">
                    <p>Crunching.<br></br>Turning.<br></br>Delivering.</p></div>
                    <FadeHeader willReavel={this.state.willReavel}/>
                </div>
            </div>
        )
    };






}