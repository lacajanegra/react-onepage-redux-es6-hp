import React, {Component} from 'react';
// import '../stylesheets/DumbComponent.scss'
import image from '../assets/img/omen_logo.png';
import Grid from 'material-ui/Grid';

const styles = {
    dummy: {
        // fontFamily: font,
        backgroundColor: 'black',
        height: '8rem',
        fontSize: 30,
        display: 'flex'
    },
    box: {
        backgroundColor: 'blue'
    },
    img: {
        width: '15rem'
    },
    wrapper: {
        display: 'flex',
        color: 'white',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: '70%',
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
                    <Grid style={styles.wrapper} item sm={12} md={4}>
                        <img style={styles.img} src={image}/>
                    </Grid>
                    <Grid item sm={1} md={4}/>
                    <Grid style={styles.wrapper} item sm={12} md={4}>
                        <div style={styles.text}>OMEN Laptop 17</div>
                        <hr style={styles.line} width="10"/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ContainerHeader;

