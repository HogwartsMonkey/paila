import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './text-reveal.js';
import {TextSection,TextBox} from './introduction.js';
import {ContactForm} from './contact-form.js';
import {ResponsiveServicesMenu} from './is-mobile-function.js';
import {isMobile} from 'react-device-detect';

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
        currentTextInTextBox: [
            'Reach New Audiences. Enhance Each Ones Value. Reveal Your Business True Potential',
            'Online Industry Centric. We Help Our Clients Break Their Benchmark Glass Ceiling.',
            'Performance Based Advertising.',
            'Iusto paulo lucilius sit in. Errem bonorum eos te. Eu prima dolore cum. Et vim augue suavitate, dolorum salutandi complectitur vix cu. In nullam noster vim, te est exerci aperiam, quo euismod salutatus eu.2',
            'Iusto paulo lucilius sit in. Errem bonorum eos te. Eu prima dolore cum. Et vim augue suavitate, dolorum salutandi complectitur vix cu. In nullam noster vim, te est exerci aperiam, quo euismod salutatus eu.',
            ],
        selectedSection: 0,
        TextBoxoffSetBottom:'',
        windowHeight: window.innerHeight,
        services: ['','PPC','Invoice Account','Analytics'],
        servicesDesc:[
            '',
            'Manage Your SEM Activity Wisely. Get Optimized Results and Grow Further',
            'Many accounts get deactivated or susspened because of payment issues. consider solved',
            'Tailored-Made solutions or SaSS providers'

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

    handleScroll(e){
        let currentY = window.pageYOffset;
        let delta = this.state.servicesOffsetBottom - currentY ;
            if( delta < this.state.windowHeight){
                this.setState({positionY: currentY,willReavelServices:true,selectedSection:3})
            }
            
              else {

                        this.setState({positionY: currentY,willReavelServices:false})       
              } 
        }
   

    changeVisability(i){
        let delta =  this.state.TextBoxoffSetBottom-this.state.positionY;
        if(delta > this.state.windowHeight){
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
        let offsetBottom = (element.offsetTop + element.offsetHeight);
        this.setState({servicesOffsetBottom: offsetBottom});
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
                     
                    />
                </div>
              
            </div>

            </React.Fragment>
        )
    };
}