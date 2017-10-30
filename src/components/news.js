import React, {Component} from 'react';

class News extends Component {
    render() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <p>{item.author}</p>
                        <p>{item.text}</p>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>No news...</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length > 0 ? '':'none'}>Count of news: {data.length}</strong>
            </div>
        )
    }
}

export default News
