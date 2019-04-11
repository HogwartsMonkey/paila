import React from 'react';
import Fade from 'react-reveal/Fade';

export class ContactForm extends React.Component{
    constructor(props){
        super(props);
            this.state={
            name:'',
            email:'',
            willReveal:false,
            offsetTop:''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }

      componentDidUpdate(prevProps){
          let delta =this.state.offsetTop - this.props.windowPosition ;
        if (prevProps !== this.props){
            if( delta < this.props.windowHeight){
                this.setState({willReveal:true})
            }
        }
    }

      componentDidMount(){
        const element = document.querySelector("form");
        let offsetTop = element.offsetTop;
        this.setState({offsetTop: offsetTop});
    }

    render(){
        return(
                <Fade when={this.state.willReveal} top>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </label>
                        <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </Fade>
        )
    };
}