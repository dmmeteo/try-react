import React, { Component } from 'react';
import News from './News';
import Form from './Form';
import Header from './Header';
import RegistrationForm from './RegistrationForm';

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
      <div className="app">
          <Header items={menu}/><RegistrationForm/>
          <hr/>
          <Form/>
          <hr/>
          <News data={my_news} />
          <hr/>
      </div>
    );
  }
}

export default App;
