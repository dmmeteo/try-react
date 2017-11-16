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
        let textEl = ReactDOM.findDOMNode(this.refs.text);

        let author = ReactDOM.findDOMNode(this.refs.author).value.trim();
        let text = textEl.value;

        let item = [{
            author: author,
            text: text,
            bigText: '...'
        }];

        window.ee.emit('News.add', item); //TODO need refactor ro redux

        textEl.value = '';
        this.setState({textIsEmpty: true});
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
        let agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;

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
                        Add news
                    </button>
                </form>
            </div>
        )
    }
}

export default Form