import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import News from '../components/News';
import Header from '../components/Header';
import AddArticleForm from '../components/AddArticleForm';

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
        const {name} = this.props.user;
        const {category, articles} = this.props.page;
        return (
            <div>
                <Header items={menu}/>
                <Container>
                    <p>Hello from App, {name}!</p>
                    <AddArticleForm/>
                    <hr/>
                    <h3>from category: {category}</h3>
                    <News data={articles}/>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App);
