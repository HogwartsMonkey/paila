import React from 'react';
import Fade from 'react-reveal/Fade';


export class Services extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            willReveal: this.props.willRevealServices,
            offsetTop:'',
            changeSection:this.props.changeSection

        }
    }

    componentDidUpdate(prevProps){
        if( prevProps.willRevealServices !== this.props.willRevealServices){
            this.setState({willReveal:this.props.willRevealServices})
        }
    }

    
    render(){
        return(

            <Fade when={this.state.willReveal} >
            <div id="services-menu" style={{width:'100%',height:'200px'}}>
                <div style={{position:'relative',width:'50%',height:'%100',left:'50%',transform:'translateX(-50%)'}}>
                <div style={{marginRight:'10px',display:'inline-block',width:'30%',height:'100%',textAlign:'center',backgroundColor:'yellow',borderRadius:'5px'}}>
                    {this.props.services[0]}
                </div>
                <div style={{marginRight:'10px',display:'inline-block',width:'30%',height:'100%',textAlign:'center',backgroundColor:'yellow',borderRadius:'5px'}}>
                    {this.props.services[1]}
                </div>  
                <div style={{marginRight:'10px',display:'inline-block',width:'30%',height:'100%',textAlign:'center',backgroundColor:'yellow',borderRadius:'5px'}}>{this.props.services[2]}
                </div>
                </div>
          </div>
          </Fade>


        )
    };
}
