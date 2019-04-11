import React from 'react';
import {NavBar,TextHeader,FadeHeader} from './text-reveal.js';
import {TextSection,TextBox} from './introduction.js';
import {ContactForm} from './contact-form.js';

export default class Section extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
        willReavel: false, 
        frontLayerStyle:{backgroundColor:'trasparent',width:'100%',height:'100%',transition:'background-color 2s ease'},
        currentHeadline: ['Choose Yourself','Who','How','What','why'],
        positionY:1,
        showSection: false,
        currentTextInTextBox: [
            'Reach New Audiences. Enhance Each Ones Value. Reveal Your Business True Potential',
            'Iusto paulo lucilius sit in. Errem bonorum eos te. Eu prima dolore cum. Et vim augue suavitate, dolorum salutandi complectitur vix cu. In nullam noster vim, te est exerci aperiam, quo euismod salutatus eu.',
            'um propriae accusamus ne. Vidit magna feugiat eum ex. Eos id eirmod vulputate, meis interpretaris eu vis. Ea stet prima nec, et propriae sapientem necessitatibus eam. Mazim platonem mel eu, ex dicit noluisse rationi',
            'Iusto paulo lucilius sit in. Errem bonorum eos te. Eu prima dolore cum. Et vim augue suavitate, dolorum salutandi complectitur vix cu. In nullam noster vim, te est exerci aperiam, quo euismod salutatus eu.2',
            'Iusto paulo lucilius sit in. Errem bonorum eos te. Eu prima dolore cum. Et vim augue suavitate, dolorum salutandi complectitur vix cu. In nullam noster vim, te est exerci aperiam, quo euismod salutatus eu.',
            ],
        selectedSection: 0,
        TextBoxoffSetBottom:'',
        windowHeight: window.innerHeight
    }

        this.handleScroll = this.handleScroll.bind(this);
        this.changeVisability = this.changeVisability.bind(this);
        this.getTextBoxOffSetBottom = this.getTextBoxOffSetBottom.bind(this);
    }
    

    componentDidMount(){
        let container = document.querySelector('.headline-container');
        let containerPosition = container.offsetTop;
        window.addEventListener('scroll',this.handleScroll);
        this.getTextBoxOffSetBottom();
        this.setState((state)=>{
             return ({willReavel : true,windowBottom:containerPosition })
        })
    }


    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }

    handleScroll(e){
        let currentY = window.pageYOffset;
        this.setState({positionY: currentY});
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
                    willReavel={this.state.willReavel} 
                    currentHeadline={this.state.currentHeadline} 
                    selectedSection={this.state.selectedSection}/>

                <TextBox 
                    showSection={this.state.showSection} 
                    windowPosition={this.state.positionY} 
                    currentTextInTextBox={this.state.currentTextInTextBox} 
                    selectedSection={this.state.selectedSection}/>

                <ContactForm/>
            </div>

            </React.Fragment>
        )
    };






}