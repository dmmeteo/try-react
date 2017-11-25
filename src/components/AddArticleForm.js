import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class AddArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }

    onBtnClickHandler(e) {
        e.preventDefault();
        this.setState({textIsEmpty: true});
    }

    onFieldChange(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({['' + fieldName]: false});
        } else {
            this.setState({['' + fieldName]: true});
        }
    }

    onCheckRuleClick() {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    }

    render() {
        let agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;

        return (
            <Form>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="email"
                           placeholder="article title"
                           onChange={this.onFieldChange.bind(this, 'textIsEmpty')}/>
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
                        onClick={this.onBtnClickHandler}
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

// TODO create redux Store
export default AddArticleForm