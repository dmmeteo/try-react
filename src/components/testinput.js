import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TestInput extends Component {
    onBtnClickHandler(){
        console.log(this.refs);
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    }

    render() {
        return(
            <div>
                <input className="test-input"
                       defaultValue=""
                       placeholder="Enter your text here..."
                       ref="myTestInput"
                />
                <button onClick={this.onBtnClickHandler.bind(this)}>Show alert!</button>
            </div>
        )
    }
}

export default TestInput