import React, {Component} from 'react';
import Article from './Article';

class News extends Component {
    render() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>No news...</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '':'none')}>Count of news: {data.length}</strong>
            </div>
        )
    }
}

export default News
