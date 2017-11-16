import React, {Component} from 'react';

class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('email:'+this.state.email);
        console.log('password:'+this.state.password);
    }

    handleOnChange(fieldName, e){
        if (e.target.value.length > 0) {
            this.setState({[''+fieldName]: e.target.value})
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="registration">
                <input
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleOnChange.bind(this, 'email')}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleOnChange.bind(this, 'password')}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default RegistrationForm