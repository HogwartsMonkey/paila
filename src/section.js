import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './text-reveal.js';
import {TextSection,TextBox} from './introduction.js';
import {ContactForm} from './contact-form.js';
import {Services} from './section-b.js';

export default class Section extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
        willReavel: false, 
        willReavelServices: false,
        frontLayerStyle:{backgroundColor:'trasparent',width:'100%',height:'100%',transition:'background-color 2s ease'},
        currentHeadline: ['Choose Yourself','Who','How','What','why'],
        positionY:0,
        showSection: false,
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
        services: ['PPC','Invoice Account','Analytics']
    }
        this.handleScroll = this.handleScroll.bind(this);
        this.changeVisability = this.changeVisability.bind(this);
        this.getTextBoxOffSetBottom = this.getTextBoxOffSetBottom.bind(this);
        this.changeSection = this.changeSection.bind(this);
        this.getServicesOffsetBottom = this.getServicesOffsetBottom.bind(this);
    }
    

    componentDidMount(){
        let container = document.querySelector('.headline-container');
        let containerPosition = container.offsetTop;
        window.addEventListener('scroll',this.handleScroll);
        this.getTextBoxOffSetBottom();
        this.getServicesOffsetBottom();
        this.setState((state)=>{
             return ({willReavel : true, windowBottom:containerPosition })
        })
    }


    componentWillUnmount(){
     window.removeEventListener('scroll',this.handleScroll)
    }

    handleScroll(e){
        let currentY = window.pageYOffset;
        let delta = this.state.servicesOffSetBottom - currentY ;
            if( delta < this.state.windowHeight && this.state.willReavelServices == false){
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

    getServicesOffsetBottom(){
    const element = document.querySelector('#services-menu');
      let offsetBottom = (element.offsetTop+element.offsetHeight);
      this.setState({servicesOffSetBottom: offsetBottom});
    }

    changeSection(i){
        this.setState({selectedSection:i})
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
                 <Services 
                 services={this.state.services} 
                 windowHeight={this.state.windowHeight}
                 windowPosition={this.state.positionY}
                 changeSection={this.changeSection}
                 selectedSection={this.state.selectedSection}
                 willReavel={this.state.willReavelServices}
                  />
                </div>
              
            </div>

            </React.Fragment>
        )
    };
}