import React, {Component, PropTypes} from 'react';
// import '../stylesheets/DumbComponent.scss'
import Gallery from '../components/Gallery';

const styles = {
    dummy: {
        backgroundColor: '#c3152b',
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
        height: '26rem',
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

class Container6 extends Component {
    static propTypes = {
        data: PropTypes.any
    };
    render() {
        return (
            <div style={styles.dummy}>
                {this.props.data.length > 0 &&
                <Gallery photos={this.props.data}/>
                }
            </div>
        );
    }
}

export default Container6;

