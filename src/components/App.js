import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import News from './News';
import Header from './Header';
import AddArticleForm from './AddArticleForm';
import lessons from '../lessons.json';

let menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonsData: []
        };
    }

    componentDidMount() {
        this.setState({
            lessonsData: lessons
        })
    }

    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <Header items={menu}/>
                <Container>
                    <AddArticleForm/>
                    <hr/>
                    <News data={this.state.lessonsData}/>
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App);
