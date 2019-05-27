import React from 'react';
import Fade from 'react-reveal/Fade';
import { callbackify } from 'util';


export class ServicesDesktop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            offsetTop:'',
            willReveal: this.props.willReveal,
            selectedSection:0,
            toggleMenu: false

        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidUpdate(prevProps){
        if( prevProps.willReveal !== this.props.willReveal){
            this.setState({willReveal:this.props.willReveal})
        }
    }

    toggleMenu(i){
        if(this.state.toggleMenu){
            this.setState({selectedSection:i})
        }
        else{
            this.setState({toggleMenu:!this.state.toogleMenu,selectedSection:i})
        }

    }
    
    render(){
        return(

            <Fade when={this.state.willReveal} left>
                
            <div id="services-menu">

             <Fade when={this.state.willReveal} left>
                <div className="services-nav-menu">

                   <div className="row"> 
                        <div className="col-1-6">
                            
                        <div className="vertical" onClick={()=>{this.toggleMenu(1)}}></div>
                        <div className="horizontal"></div>

                        </div>
                        <div className={this.state.selectedSection == 1 ?"services-nav-menu-item ffffa9" : "services-nav-menu-item "} onClick={()=>{this.toggleMenu(1)}}>

                            {this.props.services[1]}
                        </div>
                    </div>     

                    <div className="row"> 
                    <div className="col-1-6">

                        <div className="vertical" onClick={()=>{this.toggleMenu(2)}}></div>
                        <div className="horizontal"></div> 
                          
                        </div>
                        <div className={this.state.selectedSection == 2 ?"services-nav-menu-item ffffa9" : "services-nav-menu-item "} onClick={()=>{this.toggleMenu(2)}}>
                                {this.props.services[2]}
                        </div>
                    </div>
                        
                    <div className="row">
                    <div className="col-1-6">
                            
                        <div className="vertical" onClick={()=>{this.toggleMenu(3)}}></div>
                        <div className="horizontal"></div>

                    </div>

                        <div className={this.state.selectedSection == 3 ?"services-nav-menu-item ffffa9" : "services-nav-menu-item "} onClick={()=>{this.toggleMenu(3)}}>
                                {this.props.services[3]}
                        </div>
                    </div>
                   
                </div>
                </Fade>
            
                <Fade when={this.state.toggleMenu} left distance={'10%'} duration={400}>
                    <div className={this.state.toggleMenu == true && this.state.willReveal ==true? 'services-nav-menu-content width-full' : 'services-nav-menu-content width-none'}>
                    
                    <Fade when={(this.state.selectedSection == 0  ? true : false )} >
                    <p>{this.props.servicesDesc[0]} </p>
                     </Fade>
                     <Fade when={(this.state.selectedSection == 1  ? true : false )} >
                    <p>{this.props.servicesDesc[1]} </p>
                     </Fade>
                     <Fade when={(this.state.selectedSection == 2  ? true : false )} >
                    <p>{this.props.servicesDesc[2]} </p>
                     </Fade>
                     <Fade when={(this.state.selectedSection == 3  ? true : false )} >
                    <p>{this.props.servicesDesc[3]} </p>
                     </Fade>
        
                    
                    
                    </div>
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
            selectedSection:this.props.selectedSection,
            toggleMenu1: false,
            toogleMenu2: false,
            toogleMenu3:false

        }
    }

    componentDidUpdate(prevProps){
        if( prevProps.willReveal !== this.props.willReveal || prevProps.selectedSection !== this.props.selectedSection){
            this.setState({willReveal:this.props.willReveal,selectedSection:this.props.selectedSection})
        }
    }

    
    render(){
        return(

            <Fade when={this.state.willReveal || this.state.selectedSection==3? true : false} bottom >
            <div id="services-menu-flex" >
                
                    <div className="services-nav-menu-flex-container left">

                        <div className="services-nav-menu-flex-item " onClick={()=>{ this.setState({toggleMenu1:!this.state.toggleMenu1  })}}>
                            {this.props.services[1]}
                        </div>
                    <div className={this.state.toggleMenu1? "services-nav-menu-flex-item left":"services-nav-menu-flex-item left hidden"}>
                            <Fade when = {this.state.toggleMenu1} >
                             { this.props.servicesDesc[1]}
                             </Fade>
                    
                    </div>
                                

                     </div>
                       
              

                    <div className="services-nav-menu-flex-container">
                        <div className="services-nav-menu-flex-item " onClick={()=>{ this.setState({toggleMenu2:!this.state.toggleMenu2  })}}>
                            {this.props.services[2]}
                        </div>
                            <div className={this.state.toggleMenu2? "services-nav-menu-flex-item left":"services-nav-menu-flex-item left hidden"}>
                            <Fade when = {this.state.toggleMenu2}  spy={this.state.toogleMenu2}>
                             { this.props.servicesDesc[2]}
                             </Fade>
                            </div>
                    </div>
                        
                
                    <div className="services-nav-menu-flex-container" onClick={()=>{ this.setState({toggleMenu3:!this.state.toggleMenu3  })}}>
                           <div className="services-nav-menu-flex-item">
                             {this.props.services[3]}
                             </div>
                             <div className={this.state.toggleMenu3? "services-nav-menu-flex-item left":"services-nav-menu-flex-item left hidden"}>
                             <Fade when = {this.state.toggleMenu3}   spy={this.state.toogleMenu3} >
                             { this.props.servicesDesc[3]}
                             </Fade>
                             </div>
                    </div>
                 
                   


          </div>
          </Fade>


        )
    };
}
