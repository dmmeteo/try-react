import React, {Component} from 'react';

class TestInput extends Component {
    constructor(props){
        super(props);
        this.state = {myValue: ''};
    }

    onChangeHandler(e){
        this.setState({myValue: e.target.value});
    }

    onBtnClickHandler(){
        alert(this.state.myValue);
    }

    render() {
        return(
            <div>
                <input className="test-input"
                       value={this.state.myValue}
                       onChange={this.onChangeHandler.bind(this)}
                       placeholder="Enter your text here..."
                />
                <button onClick={this.onBtnClickHandler.bind(this)}>Show alert!</button>
            </div>
        )
    }
}

export default TestInput