import React, {Component, PropTypes} from 'react';
// import '../stylesheets/DumbComponent.scss'
import image from '../assets/img/omen_notebook.png';
import Background from '../assets/img/background_c1.jpg';
import Grid from 'material-ui/Grid';
import RedTitle from '../components/RedTitle';

const styles = {
    dummy: {
        backgroundColor: '#000',
        // height: '30rem',
        fontSize: 30,
        display: 'flex'
    },
    container: {
        backgroundImage: `url(${Background})`
    },
    wrapper: {
        marginTop: '4rem',
        display: 'flex',
        // height: '20rem',
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
        width: '34rem'
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


class Container1 extends Component {
    static propTypes = {
        data: PropTypes.object
    };
    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <Grid container style={styles.container} spacing={0}>
                    <Grid style={styles.wrapper} md={6}>
                        <div style={styles.box}>
                            <div>
                                <RedTitle text={this.props.data.familia}/>
                                <span style={styles.lightTitle}>
                                    {this.props.data.modelo}
                                </span>
                            </div>
                            <Grid md={12}>
                                <span style={styles.subtitle}>
                                {this.props.data.subtitulo}
                                </span>
                            </Grid>
                            <Grid md={12}>
                                <div style={styles.body}>
                                    {this.props.data.introducción}
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid style={styles.rightBox} item md={6}>
                        <img style={styles.img} src={image}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default Container1;
