import React from 'react';
import FadeExample from './text-reveal.js';

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
                    <FadeExample willReavel={this.state.willReavel}/>
                </div>
            </div>
        )
    };






}