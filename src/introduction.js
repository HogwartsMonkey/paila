import React from 'react';
import Fade from 'react-reveal/Fade';
import { runInThisContext } from 'vm';


export class TextSection extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            willReveal:this.props.willReveal
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            (this.props = this.props)
        }
    }

    componentDidMount(){
        const element = document.querySelector(".h2-container");
        let offsetHeight = element.offsetHeight;
        let offsetBottom = element.offsetTop + offsetHeight;
        let delta =  (offsetBottom -this.props.windowPosition);
        if( delta < this.props.windowHeight ){
            this.setState({willReveal:true,offsetHeight: offsetHeight ,offsetBottom: offsetBottom})
        }
        else{
            this.setState({offsetHeight: offsetHeight ,offsetBottom: offsetBottom});

        } 
    

    }

    render(){
        return(

            <Fade when={this.state.willReveal} bottom delay={300}>
                <div className="h2-container">

                <Fade when={this.props.selectedSection == 0 ? true : false} bottom delay={300}>
                <div style={{position:'absolute'}}><h2> {this.props.currentHeadline[0]}</h2></div>
                </Fade>

                <Fade when={this.props.selectedSection == 1 ? true : false} bottom delay={300}>
                <div style={{position:'absolute'}}><h2> {this.props.currentHeadline[1]}</h2></div>
                </Fade>

                <Fade when={this.props.selectedSection == 2 ? true : false} bottom delay={300}>
                <div style={{position:'absolute'}}><h2> {this.props.currentHeadline[2]}</h2></div>
                </Fade>

                <Fade when={this.props.selectedSection == 3 ? true : false} bottom delay={300}>
                <div style={{position:'absolute'}}><h2> {this.props.currentHeadline[3]}</h2></div>
                </Fade>

                <Fade when={this.props.selectedSection == 4 ? true : false} bottom delay={300}>
                <div style={{position:'absolute'}}><h2> {this.props.currentHeadline[4]}</h2></div>
                </Fade>

                </div>
         </Fade>
        )
    };
}

export class TextBox extends React.Component{
    constructor(props){
    super(props);
        this.state = {
            offsetHeight:'',
            offsetBottom:'',
            willReveal: false,
            selectedSection: this.props.selectedSection,
        };
    }

    componentDidUpdate(prevProps){
        let delta =  (this.props.TextBoxoffSetBottom-this.props.windowHeight);
        if (prevProps !== this.props){
            if( this.props.windowPosition > this.state.offsetHeight ||delta < this.props.windowHeight ){
                this.setState({willReveal:true})
            }
            if(this.props.selectedSection !== this.state.selectedSection)  {
                this.setState({selectedSection: this.props.selectedSection})
            }
        }
    }

    componentDidMount(){
        const element = document.getElementById("text_box");
        let offsetHeight = element.offsetHeight;
        let offsetBottom = element.offsetTop + offsetHeight;
        let delta =  (this.props.TextBoxoffSetBottom-this.props.windowPosition);
        if( delta < this.props.windowHeight ){
            this.setState({willReveal:true,offsetHeight: offsetHeight ,offsetBottom: offsetBottom})
        }
        else{
            this.setState({offsetHeight: offsetHeight ,offsetBottom: offsetBottom});

        } 
    }

    

    render(){
        return(
           
           <Fade when={(this.props.showSection == true || this.state.willReveal ? true : false )} bottom>
           <div id="text_box" className="nav_bar_section">
         
            <div className="nav_bar_section_1">
           <Fade when={(this.props.selectedSection == 0  ? true : false )} bottom>
            <p>{this.props.currentTextInTextBox[0]} </p>
            </Fade>

            <Fade when={(this.props.selectedSection == 1  ? true : false )} bottom>
            <p>{this.props.currentTextInTextBox[1]} </p>
            </Fade>

            <Fade when={(this.props.selectedSection == 2 ? true : false )} bottom>
            <p>{this.props.currentTextInTextBox[2]} </p>
            </Fade>

            <Fade when={(this.props.selectedSection == 3  ? true : false )} bottom>
           <p>{this.props.currentTextInTextBox[3]} </p>
           
            </Fade>

            <Fade when={(this.props.selectedSection == 4  ? true : false )} bottom>
            <p>{this.props.currentTextInTextBox[4]} </p>
            </Fade>

            </div>
            <Fade when={(this.props.selectedSection == 3  ? true : false )} bottom>

            <div className="nav_bar_section_2">
           
            </div>
            </Fade>

            </div>
            </Fade> 
        )
    };
}