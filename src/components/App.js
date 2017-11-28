import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import News from './News';
import Header from './Header';
import AddArticleForm from './AddArticleForm';

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
    render() {
        return (
            <div>
                <Header items={menu}/>
                <Container>
                    <AddArticleForm/>
                    <hr/>
                    <News data={this.props.lessonsData}/>
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({
        lessonsData: state
    })
)(App);
