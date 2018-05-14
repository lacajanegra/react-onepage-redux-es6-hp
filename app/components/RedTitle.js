import React, {Component, PropTypes} from 'react';

const styles = {
    title: {
        color: '#c3152b',
        fontWeight: 'bold',
        fontSize: '3vw'
    }
};

class RedTitle extends Component {
    static propTypes = {
        text: PropTypes.string
    };
    render() {
        return (
            <span style={styles.title}>
                {this.props.text}
            </span>
        );
    }
}

export default RedTitle;

