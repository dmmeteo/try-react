import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Add extends Component {
    constructor(props){
        super(props);
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }
    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.author).focus();
    }

    onBtnClickHandler(e){
        e.preventDefault();
    }

    onCheckRuleClick(e){
        ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.target.checked;
    }

    render() {
        return(
            <div>
                <form className="add cf">
                    <input
                        className="add__author"
                        defaultValue=""
                        placeholder="Your name"
                        ref="author"
                    />
                    <textarea
                        className="add__text"
                        defaultValue=""
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
                        disabled>
                        Show alert
                    </button>
                </form>
            </div>
        )
    }
}

export default Add