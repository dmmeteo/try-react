import React, { Component } from 'react';
import News from './news';
import Comments from './comments';

var my_news = [
    {
        author: 'John Doe',
        text: 'On Thursday, the fourth day...'
    },
    {
        author: 'Just Harry',
        text: 'I think that $ should be worth 5 hryvnia!'
    },
    {
        author: 'Guest',
        text: 'Is free. Download. The best site - http: // localhost: 3000'
    }
];

class App extends Component {
  render() {
    return (
      <div className="app">
          <h3>News:</h3>
          <News data={my_news} />
          {/*<Comments />*/}
      </div>
    );
  }
}

export default App;
