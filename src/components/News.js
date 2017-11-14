import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

class News extends Component {
    constructor(props){
        super(props);
    }

    static propTypes = {
        data: PropTypes.array.isRequired
    };

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
