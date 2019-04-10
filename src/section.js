import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './text-reveal.js';
import {TextSection,TextBox} from './introduction.js';

export default class Section extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
        willReavel: false, 
        frontLayerStyle:{backgroundColor:'trasparent',width:'100%',height:'100%',transition:'background-color 2s ease'},
        currentHeadline: ['Choose Yourself','Who','How','What','why'],
        positionY:1,
        showSection: false,
        currentTextInTextBox: [
            'Reach New Audiences. Enhance Each Ones Value. Reveal Your Business True Potential',
            'hello im 0',
            'um propriae accusamus ne. Vidit magna feugiat eum ex. Eos id eirmod vulputate, meis interpretaris eu vis. Ea stet prima nec, et propriae sapientem necessitatibus eam. Mazim platonem mel eu, ex dicit noluisse rationi',
            'hello Im number2',
            'hello Im number3',
            ],
        selectedSection: 0
    }

        this.handleScroll = this.handleScroll.bind(this);
        this.changeVisability = this.changeVisability.bind(this);
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

    changeVisability(i){
      if(this.state.showSection == false || this.state.showSection !== i){
        this.setState( {showSection:true,selectedSection:i})
      }
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
            
                <NavBar changeVisability={this.changeVisability} willReavel={this.state.willReavel} selectedSection={this.state.selectedSection}/>
                <TextSection showSection={this.state.showSection} text={this.state.content} willReavel={this.state.willReavel} currentHeadline={this.state.currentHeadline} selectedSection={this.state.selectedSection}/>
                <TextBox showSection={this.state.showSection} windowPosition={this.state.positionY} currentTextInTextBox={this.state.currentTextInTextBox} selectedSection={this.state.selectedSection}/>
           
            </div>

            </React.Fragment>
        )
    };






}