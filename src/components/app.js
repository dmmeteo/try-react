import React, { Component } from 'react';
import News from './news';
import Comments from './comments';

var my_news = [
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
];

class App extends Component {
  render() {
    return (
      <div className="app">
          <h3>News:</h3>
          <News data={my_news} />
          <hr/>
          <Comments />
      </div>
    );
  }
}

export default App;
