import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';

class AddArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agreeNotChecked: true,
            titleIsEmpty: true,
            textIsEmpty: true,
            title: ''
        };
        this.btnClickHandler = this.btnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }

    btnClickHandler(e) {
        e.preventDefault();
        this.setState({
            textIsEmpty: true
        });
    }

    onFieldChange(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({['' + fieldName]: false});
        } else {
            this.setState({['' + fieldName]: true});
        }
        if (fieldName === 'titleIsEmpty') {
            this.props.onBtnClickHandler(e.target.value)
        }
    }

    onCheckRuleClick() {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    }

    render() {
        let agreeNotChecked = this.state.agreeNotChecked,
            titleIsEmpty = this.state.titleIsEmpty,
            textIsEmpty = this.state.textIsEmpty;

        return (
            <Form>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text"
                           placeholder="article title"
                           onChange={this.onFieldChange.bind(this, 'titleIsEmpty')}/>
                </FormGroup>
                <FormGroup>
                    <Label for="text">Text of article</Label>
                    <Input type="textarea"
                           onChange={this.onFieldChange.bind(this, 'textIsEmpty')}/>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"
                               defaultChecked={false}
                               onChange={this.onCheckRuleClick}/>{' '}
                        I agree with site rules
                    </Label>{' '}
                    <Button
                        onClick={this.btnClickHandler}
                        disabled={this.state.agreeNotChecked}
                        color={this.state.agreeNotChecked ? "secondary":"primary"}
                        size="lg"
                    >
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onBtnClickHandler: (title) => {
            dispatch({type: 'ADD_ARTICLE', title: title})
        }
    })
)(AddArticleForm);
// TODO create redux Store
// export default AddArticleForm