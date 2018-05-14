import React, {Component, PropTypes} from 'react';

const styles = {
    title: {
        color: '#c3152b',
        fontWeight: 'bold',
        fontSize: '1.5vw'
    },
    key: {
        fontWeight: 'bold',
        fontSize: '1vw'
    },
    value: {
        fontWeight: 'lighter',
        fontSize: '1vw'
    }
};

class EspecificationList extends Component {
    static propTypes = {
        especifications: PropTypes.array
    };
    render() {
        return (
            <ul>
                {this.props.especifications && this.props.especifications.map((item, i) => {
                    return  <li key={i}><span style={styles.key}>{item.key}:</span> <span style={styles.value}>{item.value}</span></li>;
                })}
            </ul>
        );
    }
}

export default EspecificationList;
