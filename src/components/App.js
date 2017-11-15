import React, {Component} from 'react';
import News from './News';
import Add from './Add';

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
];



class App extends Component {
    constructor(props){
        super(props);
        this.state = {news: my_news}
    }

    componentDidMount(){
        let self = this;
        window.ee.addListener('News.add', function (item) {
            let nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
        })
    }

    componentWillMount(){
        window.ee.removeListener('News.add');
    }

    render() {
        console.log('render');
        return (
            <div className="app">
                <Add/>
                <hr/>
                <h3>News:</h3>
                <News data={my_news}/>
            </div>
        );
    }
}

export default App;
