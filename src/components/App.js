import React from 'react';
import { Container } from 'reactstrap';
import News from './News';
import Header from './Header';

let my_news = [
    {
        author: 'John Doe',
        text: 'On Thursday, the fourth day...',
        bigText: 'at four and a quarter of an hour four black-eyed black-haired devils drew a black ink drawing.'
    },
    {
        author: 'Just Harry',
        text: 'I think that $ should be worth 5 hryvnia!',
        bigText: 'And the euro 8!'
    },
    {
        author: 'Guest',
        text: 'Is free. Download. The best site - http: // localhost: 3000',
        bigText: 'In fact, you just need to read a very long license agreement.'
    }
],
    menu = [
        {
            link: '/articles',
            label: 'Articles'
        },
        {
            link: '/contacts',
            label: 'Contacts'
        }
    ];
let urlForUsername = username => `https://api.github.com/users/${username}`;

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {githubData: ''};
    }

    componentDidMount(){
        fetch(urlForUsername(this.props.username))
            .then(d => d.json())
            .then(d => {
                this.setState({
                    githubData: d
                })
            })
    }

  render() {
    return (
      <div>
          <Header items={menu}/>
          <Container>
              <h3 username="dmmeteo">{this.state.githubData.name}</h3>
              <h4>{urlForUsername}</h4>
              <News data={my_news} />
          </Container>
      </div>
    );
  }
}
