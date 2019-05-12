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

            <Fade when={this.state.willReveal} left>
                
            <div id="services-menu">

             <Fade when={this.state.willReveal} left>
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
                </Fade>
            
                <Fade when={this.state.toggleMenu} left distance={'10%'}>
                    <div className={this.state.toggleMenu == true ? 'services-nav-menu-content width-full' : 'services-nav-menu-content width-none'}></div>
                </Fade>

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
            toggleMenu1: false,
            toogleMenu2: false,
            toogleMenu3:false

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
                
                    <div className="services-nav-menu-flex-container left">

                        <div className="services-nav-menu-flex-item " onClick={()=>{ this.setState({toggleMenu1:!this.state.toggleMenu1  })}}>
                            {this.props.services[0]}
                        </div>
                    <div className={this.state.toggleMenu1? "services-nav-menu-flex-item left":"services-nav-menu-flex-item left hidden"}></div>

                     </div>
                       
              

                    <div className="services-nav-menu-flex-container">
                        <div className="services-nav-menu-flex-item " onClick={()=>{ this.setState({toggleMenu2:!this.state.toggleMenu2  })}}>
                            {this.props.services[1]}
                        </div>
                            <div className={this.state.toggleMenu2? "services-nav-menu-flex-item left":"services-nav-menu-flex-item left hidden"}>
                            glgkslgksglksglksglk sghsgsdgsdg gsdsdhsdhsdhsh
                            dsdgsdgsdgsdgdsgsgsd astrwrwr
                            </div>
                    </div>
                        
                
                    <div className="services-nav-menu-flex-container" onClick={()=>{ this.setState({toggleMenu3:!this.state.toggleMenu3  })}}>
                           <div className="services-nav-menu-flex-item">
                             {this.props.services[2]}
                             </div>
                             <div className={this.state.toggleMenu3? "services-nav-menu-flex-item left":"services-nav-menu-flex-item left hidden"}  >
                             dlet see if it works when you add a lot of words in it
                             </div>
                    </div>
                 
                   


          </div>
          </Fade>


        )
    };
}
