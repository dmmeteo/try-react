import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

export default class Page extends React.Component {
    render() {
        const {category, articles} = this.props;
        let newsTemplate;

        if (articles.length > 0) {
            newsTemplate = articles.map((item, index) => (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            )
        }
        return (
            <div>
                <h2>From category: {category}</h2>
                <hr/>

                {newsTemplate}

                <strong style={{'display': (articles.length > 0 ? 'block' : 'none')}}>
                    Count of news: {articles.length}
                </strong>
            </div>
        )

    }
}

Page.PropTypes = {
    category: PropTypes.string.isRequired,
    articles: PropTypes.array.isRequired
};