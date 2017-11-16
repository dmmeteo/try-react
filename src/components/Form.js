import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }
    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.author).focus();
    }


    onBtnClickHandler(e){
        e.preventDefault();
        let author = ReactDOM.findDOMNode(this.refs.author).value.trim();
        let text = ReactDOM.findDOMNode(this.refs.text).value.trim();
        alert('author: '+author+'\n'+'text: '+text);
    }

    onFieldChange(fieldName, e){
        if (e.target.value.trim().length > 0) {
            this.setState({[''+fieldName]: false});
        } else {
            this.setState({[''+fieldName]: true});
        }
    }

    onCheckRuleClick(){
        this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    }

    render() {
        return(
            <div>
                <form className="add cf">
                    <input
                        className="add__author"
                        onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                        placeholder="Your name"
                        ref="author"
                    />
                    <textarea
                        className="add__text"
                        onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                        placeholder="News taxt"
                        ref="text">
                    </textarea>
                    <label className="add__checkrule">
                        <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick}/>I agree with site rules
                    </label>
                    <button
                        className="add__btn"
                        onClick={this.onBtnClickHandler}
                        ref="alert_button"
                        disabled={this.state.agreeNotChecked}>
                        Show alert
                    </button>
                </form>
            </div>
        )
    }
}

export default Form