import React from 'react';
import Fade from 'react-reveal/Fade';

export class ContactForm extends React.Component{
    constructor(props){
        super(props);
            this.state={
            name:'Type Name',
            email:'Type Email Address',
            willReveal:false,
            offsetTop:''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.restoreDefaultValue = this.restoreDefaultValue.bind(this);

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      resetForm(event){
        const target = event.target;
        const name = target.name;
        if(this.state[name] = [name.charAt(0).toLowerCase()+name.slice(1)])
        this.setState({[name]:''})
      }

      restoreDefaultValue(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
            if(this.state[name] == ''){
                this.setState({[name]:name.charAt(0).toUpperCase()+name.slice(1)})            
             }   
      }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }

      componentDidUpdate(prevProps){
          let delta =this.state.offsetBottom - this.props.windowPosition ;
        if (prevProps !== this.props){
            if( delta < this.props.windowHeight){
                this.setState({willReveal:true})
            }
        }
    }

      componentDidMount(){
        const element = document.querySelector("form");
        let offsetBottom = element.offsetTop+element.offsetHeight;
        this.setState({offsetBottom: offsetBottom});
    }

    render(){
        return(
                <Fade when={this.state.willReveal} bottom>
                    
                <form onSubmit={this.handleSubmit}>
                <div className="form">
                    <div>Get More Details</div>
                    <div>
                        <input type="text" name="name" onFocus={this.resetForm} onBlur={this.restoreDefaultValue} value={this.state.name} onChange={this.handleInputChange} />
                    </div>

                    <div>
                       <input className="pink" type="text" name="email" onFocus={this.resetForm} onBlur={this.restoreDefaultValue} value={this.state.email} onChange={this.handleInputChange} />
                    </div>

                    <div>
                       <input type="submit" value="Send"/>
                    </div>
             </div>
                 </form>
                   
                </Fade>
        )
    };
}