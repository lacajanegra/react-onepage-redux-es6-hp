import React, {Component, PropTypes} from 'react';
// import '../stylesheets/DumbComponent.scss'
import Grid from 'material-ui/Grid';

const styles = {
    dummy: {
        backgroundColor: '#2e2e2e',
        fontSize: 12,
        display: 'flex'
    },
    wrapper: {
        marginTop: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    box: {
        textAlign: 'center',
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff'
    }
};

class Container7 extends Component {
    static propTypes = {
        data: PropTypes.string
    };
    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <Grid container spacing={0}>
                    <Grid style={styles.wrapper} md={12}>
                        <div style={styles.box}>
                            {this.props.data}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Container7;

