import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import Page from '../components/Page';
import User from '../components/User';
import Header from '../components/Header';
import AddArticleForm from '../components/AddArticleForm';

let menu = [ //TODO normal menu from redux
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
        const {user, page} = this.props;
        return (
            <div>
                <Header items={menu}/>
                <User name={user.name}/>
                <Container>
                    <AddArticleForm/>
                    <hr/>
                    <Page articles={page.articles} category={page.category}/>
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
