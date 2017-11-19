import React from 'react';
import PropTypes from 'prop-types'; //Migrating from React.PropTypes after(v15.5)
import { Badge, Button } from 'reactstrap';

export default class Article extends React.Component {
    constructor(props){
       super(props);
       this.state = {visible: false};
    }

    static propTypes = {
        data: PropTypes.shape({
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            bigText: PropTypes.string.isRequired
        })
    };

    readmoreClick(e){
        e.preventDefault();
        this.setState({visible: true}, function() {
            alert('State is changed!');
        });
    }

    render() {
        let author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        return (
            <div>
                <h2>Posted by <Badge color="secondary">{author}</Badge></h2>
                <p>{text}</p>
                <Button
                   color="info"
                   size="sm"
                   onClick={this.readmoreClick.bind(this)}
                   style={{'display': (visible ? 'none':'block')}}
                >
                    Detail...
                </Button>
                <p className={'news__big-text ' + (visible ? '':'fade')}>{bigText}</p>
            </div>
        )
    }
}
