import React, {Component, PropTypes} from 'react';
import Grid from 'material-ui/Grid';
// import image from '../assets/img/left_notebook.png';
import RedTitle from '../components/RedTitle';
import EspecificationList from '../components/EspecificationList';

const styles = {
    dummy: {
        fontSize: 30,
        display: 'flex',
    },
    box: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    imageWrapper: {
        width: '100%',
        height: 100,
        position: 'relative',
        top: '-20vw'
    },
    image: {
        width: '50vw'
    },
    rightBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    especificationsTitle: {
        backgroundColor: '#fff',
        borderRadius: 15,
        textAlign: 'center',
        width: '55%',
        position: 'relative',
        top: '-20px'
    },
    especifications: {
        position: 'relative',
        top: '-20px'
    }
};

class Container3 extends Component {
    static propTypes = {
        data: PropTypes.object
    };
    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <Grid container  alignItems={'center'}  spacing={0}>
                    <Grid style={styles.box} item xs={false} sm={false} item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div style={styles.imageWrapper} >
                            <img style={styles.image} src={this.props.data.imagenEspecificaciones}/>
                        </div>
                    </Grid>
                    <Grid style={styles.rightBox} item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div style={styles.especificationsTitle}>
                            <RedTitle text={'Especificaciones principales'}/>
                        </div>
                        <div style={styles.especifications}>
                            {this.props.data &&
                            <EspecificationList especifications={this.props.data.especificaciones}/>
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Container3;

