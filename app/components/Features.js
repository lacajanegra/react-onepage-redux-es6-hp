import React, {Component, PropTypes} from 'react';
// import '../../stylesheets/DumbComponent.scss'
import Grid from 'material-ui/Grid';
import GridElement from './GridElement';

const styles = {
    dummy: {
        backgroundColor: '#fff',
        // height: '30rem',
        fontSize: 30,
        display: 'flex'
    },
    wrapper: {
        display: 'flex',
        // height: '20rem',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        maxWidth: '30rem',
        display: 'flex',
        flexDirection: 'column'
    },
    rightBox: {
        display: 'flex',
        // height: '26rem',
        marginTop: '10vw',
        marginBottom: '10vw',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '35vw'
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
class Features extends Component {
    static propTypes = {
        i: PropTypes.number,
        data: PropTypes.object
    };
    render() {
        return (
            <Grid container spacing={0}>
                <Grid style={styles.wrapper} item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div>
                        {this.props.i % 2 !== 0 ?
                            <img style={styles.img} src={this.props.data.foto}/> :
                            <GridElement item={this.props.data} color={'#000'}/>
                        }

                    </div>
                </Grid>
                <Grid style={styles.rightBox} item xs={6} sm={6} md={6} lg={6} xl={6}>
                    {this.props.i % 2 !== 0 ?
                        <GridElement item={this.props.data} color={'#000'}/> :
                        <img style={styles.img} src={this.props.data.foto}/>
                    }

                </Grid>
            </Grid>
        );
    }
}

export default Features;
