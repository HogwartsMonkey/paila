import React from 'react';
import Fade from 'react-reveal/Fade';
import { runInThisContext } from 'vm';


export class TextSection extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <Fade when={this.props.willReveal} bottom delay={300}>
                <div className="h2-container">
                <div><h2>{this.props.headline}</h2></div>
                
                <div><h3>{this.props.text}</h3></div>
                </div>
         </Fade>
        )
    };
}

export class TextBox extends React.Component{
    constructor(props){
    super(props);
        this.state = {
            offset:'',
            willReveal: false,
            selectedSection: this.props.selectedSection
        };
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props){
            if( this.props.windowPosition > this.state.offset){
                this.setState({willReveal:true})
            }
            if(this.props.selectedSection !== this.state.selectedSection)  {
                this.setState({selectedSection: this.props.selectedSection})
            }
        }
    }

    componentDidMount(){
        const element = document.getElementById("text_box");
        let offsetTop = element.offsetHeight;
        this.setState({offset: offsetTop});
    }

    render(){
        return(
           <Fade when={(this.state.willReveal==true ||this.props.showSection == true ? true : false )} bottom>
           <div id="text_box" style= {{marginTop: '50px',width:'100%',height:'50px',backgroundColor:'white'}}>
            <p style={{textAlign:'center',padding:'10px'}}>
                {this.props.currentTextInTextBox[this.state.selectedSection]}
            </p>
            
            </div>
            </Fade> 
        )
    };
}