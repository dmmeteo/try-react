import React, {Component} from 'react';
import PropTypes from 'prop-types'; //Migrating from React.PropTypes after(v15.5)

class Article extends Component {
    static propTypes = {
        data: PropTypes.shape({
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    };

    render() {
        var author = this.props.data.author,
            text = this.props.data.text;

        return (
            <div className="article">
                <p className="news__author">{author}</p>
                <p className="news__text">{text}</p>
            </div>
        )
    }
}

export default Article
