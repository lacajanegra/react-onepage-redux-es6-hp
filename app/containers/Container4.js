import React, {Component, PropTypes} from 'react';
// import '../stylesheets/DumbComponent.scss'
import Features from '../components/Features';
const styles = {
    dummy: {
        backgroundColor: '#fff',
        fontSize: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    wrapper: {
        marginTop: '4rem',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    box: {
        maxWidth: '30rem',
        display: 'flex',
        flexDirection: 'column'
    },
    rightBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '25rem'
    },
    lightTitle: {
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 'lighter'
    },
    subtitle: {
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    body: {
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: '1',
        marginTop: '1rem'
    }
};

class Container4 extends Component {
    static propTypes = {
        data: PropTypes.array
    };
    render() {
        return (
            <div style={styles.dummy}>
                {this.props.data.map((item, i) => {
                    return <Features key={i} data={item} i={i}/>;
                })}
            </div>
        );
    }
}

export default Container4;

