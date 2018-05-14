import React, {Component, PropTypes} from 'react';
import Grid from 'material-ui/Grid';
import GridElement from '../components/GridElement';
const styles = {
    box: {
        height: '10rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dummy: {
        fontSize: 30,
        display: 'flex',
        paddingBottom: '5rem',
        backgroundColor: '#000'
    }
};
class Container2 extends Component {
    static propTypes = {
        data: PropTypes.array
    };
    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <Grid container justify={'center'} alignItems={'center'}  spacing={0}>
                    {this.props.data && this.props.data.map((item, i) => {
                        return  <Grid key={i} style={styles.box} item md={4}><GridElement key={i} item={item} color={'white'}/></Grid>;
                    })}

                </Grid>
            </div>
        );
    }
}

export default Container2;
