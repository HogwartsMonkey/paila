import React from 'react';
import FadeHeader,{TextHeader} from './text-reveal.js';


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
                    <TextHeader willReavel={this.state.willReavel}/>
                    <FadeHeader willReavel={this.state.willReavel}/>
                </div>
            </div>
        )
    };






}