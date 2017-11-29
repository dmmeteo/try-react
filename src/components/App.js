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
        const { name, surname, age } = this.props.user;
        return (
            <div>
                <Header items={menu}/>
                <Container>
                    <p>Привет из App, {name} {surname}!</p>
                    <p>Тебе уже {age} ?</p>
                    <AddArticleForm/>
                    <hr/>
                    <News data={this.props.lessonsData}/>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state,
        lessonsData: state
    }
}

export default connect(mapStateToProps)(App);
