import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import News from './News';
import Form from './Form';
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

class App extends Component {
  render() {
    return (
      <div>
          <Header items={menu}/>
          <Container>
              <News data={my_news} />
          </Container>
      </div>
    );
  }
}

export default App;
