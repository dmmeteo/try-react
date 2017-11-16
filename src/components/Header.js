import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static PorpTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                Header:
                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        )
    }
}

export default Header