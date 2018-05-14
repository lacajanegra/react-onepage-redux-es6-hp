import React, {Component, PropTypes} from 'react';
import Grid from 'material-ui/Grid';
import image from '../assets/img/left_notebook.png';
import RedTitle from '../components/RedTitle';
import EspecificationList from '../components/EspecificationList';

const styles = {
    dummy: {
        // height: '30rem',
        fontSize: 30,
        display: 'flex',
        marginBottom: '4rem'
    },
    box: {
        backgroundColor: '#fff',
        height: '26rem',
        alignItems: 'center'
    },
    imageWrapper: {
        width: '100%',
        height: 100,
        position: 'relative',
        top: '-30px'
    },
    image: {
        // width: '35rem'
    },
    rightBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'purple',
        height: '26rem',
        // justifyContent: 'center'
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
        width: '100%',
        position: 'relative',
    }
};

class Container3 extends Component {
    static propTypes = {
        data: PropTypes.array
    };
    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <Grid container  alignItems={'center'}  spacing={0}>
                    <Grid style={styles.box} item md={6}>
                        <div style={styles.imageWrapper} >
                            <img style={styles.image} src={image}/>
                        </div>
                    </Grid>
                    <Grid style={styles.rightBox} item md={6}>
                        <div style={styles.especificationsTitle}>
                            <RedTitle text={'Especificaciones principales'}/>

                        </div>
                        <div style={styles.especifications}>
                            {this.props.data &&
                            <EspecificationList especifications={this.props.data}/>
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Container3;

