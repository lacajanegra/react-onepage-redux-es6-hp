import React, {Component} from 'react';
// import '../stylesheets/DumbComponent.scss'
import image from '../assets/img/omen_logo.png';
import Grid from 'material-ui/Grid';

const styles = {
    dummy: {
        backgroundColor: 'black',
        height: '8rem',
        fontSize: 30,
        display: 'flex'
    },
    box: {
        backgroundColor: 'blue'
    },
    img: {
        width: '25vw'
    },
    wrapper: {
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: '70%',
        fontSize: '2.5vw',
        textAlign: 'right'
    },
    line: {
        display: 'block',
        width: '30%',
        height: '1px',
        border: '0',
        borderTop: '1px solid #c3152b',
        margin: '1em 0',
        padding: '0'
    }
};


class ContainerHeader extends Component {
    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <Grid container spacing={0}>
                    <Grid style={styles.wrapper} item xs={6} sm={6} md={4} lg={4} xl={4}>
                        <img style={styles.img} src={image}/>
                    </Grid>
                    <Grid item xs={false} sm={false} md={4} lg={4} xl={4}/>
                    <Grid style={styles.wrapper} item xs={6} sm={6} md={4} lg={4} xl={4}>
                        <div style={styles.text}>OMEN Laptop 17</div>
                        <hr style={styles.line} width="10"/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ContainerHeader;

