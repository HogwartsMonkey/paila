import React from 'react';
import Fade from 'react-reveal/Fade';


export class Services extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            willReveal:'',
            offsetTop:'',
            changeSection:this.props.changeSection

        }
    }

    componentDidUpdate(prevProps){
        let delta =this.state.offsetBottom - this.props.windowPosition ;
      if (prevProps !== this.props){
          if( delta < this.props.windowHeight || this.props.selectedSection == 3){
              this.setState({willReveal:true})
          }
          
            else {
                this.setState({willReveal:false})
            }
          
      }
  }

    componentDidMount(){
      const element = document.querySelector('#services-menu');
      let offsetBottom = (element.offsetTop+element.offsetHeight);
      this.setState({offsetBottom: offsetBottom});
  }
    render(){
        return(

            <Fade when={this.state.willReveal? true : false} >
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
