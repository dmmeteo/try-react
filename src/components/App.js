import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import News from './News';
import Header from './Header';

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
let urlGetUser = username => `https://api.github.com/users/${username}`;
let urlGetRepos = username => `https://api.github.com/users/${username}/repos`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubData: [],
            reposData: {}
        };
    }

    componentDidMount() {
        fetch(urlGetUser('dmmeteo'))
            .then(d => d.json())
            .then(d => {
                this.setState({
                    githubData: d
                })
            });
        fetch(urlGetRepos('dmmeteo'))
            .then(data => data.json())
            .then(data => {
                this.setState({
                    reposData: data
                })
            })

    }

    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <Header items={menu}/>
                <Container>
                    <h3>{this.state.githubData.name}</h3>
                    <h4>{this.props.username}</h4>
                    <News data={this.state.reposData}/>
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
