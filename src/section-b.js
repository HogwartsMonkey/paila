import React from 'react';
import Fade from 'react-reveal/Fade';
import { callbackify } from 'util';


export class ServicesDesktop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            offsetTop:'',
            willReveal: this.props.willReveal,
            toggleMenu: false

        }
    }

    componentDidUpdate(prevProps){
        if( prevProps.willReveal !== this.props.willReveal){
            this.setState({willReveal:this.props.willReveal})
        }
    }

    
    render(){
        return(

            <Fade when={this.state.willReveal} left >
            <div id="services-menu" >
                <div className="services-nav-menu">
                
                    <div className="services-nav-menu-item">

                        {this.props.services[0]}
                     </div>
                       
              

                    <div className="services-nav-menu-item">
                            {this.props.services[1]}
                    </div>
                        
                
                    <div className="services-nav-menu-item" onClick={()=>{ this.setState({toggleMenu:!this.state.toggleMenu  })}}>
                            {this.props.services[2]}
                    </div>
                 
                   
                </div>
                <div className={this.state.toggleMenu == true ? 'services-nav-menu-content width-full' : 'services-nav-menu-content width-none'}></div>


          </div>
          </Fade>


        )
    };
}

export class ServicesMobile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            offsetTop:'',
            willReveal: this.props.willReveal,
            toggleMenu: false

        }
    }

    componentDidUpdate(prevProps){
        if( prevProps.willReveal !== this.props.willReveal){
            this.setState({willReveal:this.props.willReveal})
        }
    }

    
    render(){
        return(

            <Fade when={this.state.willReveal} bottom >
            <div id="services-menu-flex" >
                
                    <div className="services-nav-menu-flex-container">

                        <div className="services-nav-menu-flex-item ">
                            {this.props.services[0]}
                        </div>
                    <div className="services-nav-menu-flex-item hidden"></div>

                     </div>
                       
              

                    <div className="services-nav-menu-flex-container">
                        <div className="services-nav-menu-flex-item ">
                            {this.props.services[1]}
                        </div>
                            <div className="services-nav-menu-flex-item hidden">
                            glgkslgksglksglksglk
                            </div>
                    </div>
                        
                
                    <div className="services-nav-menu-flex-container" onClick={()=>{ this.setState({toggleMenu:!this.state.toggleMenu  })}}>
                           <div className="services-nav-menu-flex-item">
                             {this.props.services[2]}
                             </div>
                             <div className={this.state.toggleMenu? "services-nav-menu-flex-item":"services-nav-menu-flex-item hidden"} >
                             dlet see if it works
                             </div>
                    </div>
                 
                   


          </div>
          </Fade>


        )
    };
}
