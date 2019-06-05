import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './nav-menu.js';
import {TextSection,TextBox} from './introduction.js';
import {ContactForm} from './contact-form.js';
import {ResponsiveServicesMenu} from './is-mobile-function.js';
import {isMobile} from 'react-device-detect';
import { BottomLinks } from './links.js';

export default class Section extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
        willReavel: false, 
        willReavelServices: false,
        isWhenClicked: false,
        frontLayerStyle:{backgroundColor:'trasparent',width:'100%',height:'100%',transition:'background-color 2s ease'},
        currentHeadline: ['Choose Yourself','Who','How','What','why'],
        positionY:0,
        showSection: false,
        isMobile:isMobile,
        selectedSection:0,
        currentTextInTextBox: [
            'Reach New Audiences. Enhance Each Ones Value. Reveal Your Business True Potential',
            'Online Industry Centric. We Help Our Clients Break Their Benchmark Glass Ceiling.',
            'Performance Based Advertising.',
            'Iusto paulo lucilius sit in. Errem bonorum eos te. Eu prima dolore cum. Et vim augue suavitate, dolorum salutandi complectitur vix cu. In nullam noster vim, te est exerci aperiam, quo euismod salutatus eu.2',
            'Iusto paulo lucilius sit in. Errem bonorum eos te. Eu prima dolore cum. Et vim augue suavitate, dolorum salutandi complectitur vix cu. In nullam noster vim, te est exerci aperiam, quo euismod salutatus eu.',
            ],
        TextBoxoffSetBottom:'',
        windowHeight: window.innerHeight,
        services: ['','PPC','Payment Solutions','Analytics'],
        servicesDesc:[
            '',
            'Manage Your SEM Activity Wisely. Get Optimized Results and Grow Further',
            'Many accounts get deactivated or susspened because of payment issues. consider solved',
            'Tailored-Made solutions or SaSS providers adjusted to scale'

        ]
    }
        this.handleScroll = this.handleScroll.bind(this);
        this.changeVisability = this.changeVisability.bind(this);
        this.getTextBoxOffSetBottom = this.getTextBoxOffSetBottom.bind(this);
        this.getServicesOffsetBottom = this.getServicesOffsetBottom.bind(this);
        
    }
    

    componentDidMount(){
        let container = document.querySelector('.headline-container');
        let containerPosition = container.offsetTop;
        window.addEventListener('scroll',this.handleScroll);
        this.getTextBoxOffSetBottom();
        this.getServicesOffsetBottom(this.state.isMobile);
        this.setState((state)=>{
             return ({willReavel : true, windowBottom:containerPosition })
        })
    }


    componentWillUnmount(){
     window.removeEventListener('scroll',this.handleScroll)
    }

    handleScroll(e,isMobile){
        let currentY = window.pageYOffset;
        let delta = this.state.servicesOffsetTop - currentY ;
            if( delta < this.state.windowHeight || isMobile == true){
                this.setState({positionY: currentY,willReavelServices:true,selectedSection:3})
            }
            
              else {

                        this.setState({positionY: currentY,willReavelServices:false})       
              } 
        }
   

    changeVisability(i){
        let delta =  this.state.TextBoxoffSetBottom - this.state.positionY;
        if(delta > this.state.windowHeight && this.selectedSection == 3  ){
        window.scrollTo({top:this.state.windowBottom,behavior:'smooth'})
        }
        if(this.state.showSection == false || this.state.selectedSection !== i){
            this.setState( {showSection:true, selectedSection:i})
        }
    }

    getTextBoxOffSetBottom(){
        const element = document.getElementById("text_box");
        let offsetHeight = element.offsetHeight;
        let offsetBottom = element.offsetTop+offsetHeight;
        this.setState({TextBoxoffSetBottom: offsetBottom});
    }

    getServicesOffsetBottom(isMobile){
        let element = (isMobile == true ?  document.querySelector('#services-menu-flex') : document.querySelector('#services-menu'));
        let offsetTop = (element.offsetTop);
        let offSetBottom = element.offsetTop+element.offsetHeight
        this.setState({servicesOffsetTop: offsetTop,servicesOffsetBottom:offSetBottom});
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
            
                <NavBar 
                changeVisability={this.changeVisability} 
                willReavel={this.state.willReavel} 
                selectedSection={this.state.selectedSection}
                TextBoxOffSetBottom={this.state.TextBoxoffSetBottom} 
                windowBottom = {this.state.windowBottom}
                isMobile = {this.state.isMobile}
                servicesOffsetBottom = {this.state.servicesOffsetBottom}
                />

                <TextSection 
                    showSection={this.state.showSection} 
                    text={this.state.content} 
                    currentHeadline={this.state.currentHeadline} 
                    windowHeight={this.state.windowHeight}
                    windowPosition={this.state.currentY}
                    selectedSection={this.state.selectedSection}
                    TextBoxoffSetBottom={this.state.TextBoxoffSetBottom}
                    />

                <TextBox
                    showSection={this.state.showSection} 
                    windowPosition={this.state.positionY} 
                    currentTextInTextBox={this.state.currentTextInTextBox} 
                    selectedSection={this.state.selectedSection}
                    TextBoxoffSetBottom={this.state.TextBoxoffSetBottom}
                    windowHeight={this.state.windowHeight}
                    
             />
                <div className="footer">
                <ContactForm 
                windowPosition={this.state.positionY}
                windowHeight={this.state.windowHeight}
                 />
                <ResponsiveServicesMenu
                    isMobile={this.state.isMobile}
                    services={this.state.services} 
                     willReveal={this.state.willReavelServices}
                     servicesDesc={this.state.servicesDesc}
                     selectedSection={this.state.selectedSection}
                     servicesOffsetBottom ={this.state.servicesOffsetTop}
                     
                    />
                </div>
            </div>
            <BottomLinks/>

            </React.Fragment>
        )
    };
}