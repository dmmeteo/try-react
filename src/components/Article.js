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
            name: PropTypes.string.isRequired,
            html_url: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired
        })
    };

    readmoreClick(e){
        e.preventDefault();
        this.setState({visible: true}, function() {
            alert('State is changed!');
        });
    }

    render() {
        let reposName = this.props.data.name,
            created_at = this.props.data.created_at,
            html_url = this.props.data.html_url,
            visible = this.state.visible;

        return (
            <div>
                <h2>
                    <Badge color="secondary">{reposName}</Badge>
                </h2>
                <p>{created_at}</p>
                <Button
                   color="info"
                   size="sm"
                   onClick={this.readmoreClick.bind(this)}
                   style={{'display': (visible ? 'none':'block')}}
                >
                   URL
                </Button>
                <p className={'news__big-text ' + (visible ? '':'fade')}>{html_url}</p>
            </div>
        )
    }
}
