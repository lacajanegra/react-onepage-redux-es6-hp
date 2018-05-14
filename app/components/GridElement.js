import React, {Component, PropTypes} from 'react';
const styles = {
    img: {
        width: '6rem'
    },
    itemWrap: {
        // width: '1rem'
        paddingLeft: '3rem',
        paddingRight: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        margin: '0.5rem',
        // width: '1rem',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#c3152b'
    },
};
class GridElement extends Component {
    static propTypes = {
        color: PropTypes.string,
        item: PropTypes.object
    };
    render() {
        return (
            <div>
                <div style={styles.itemWrap}>
                    <div style={styles.item}><img style={styles.img} src={this.props.item.imagen}/></div>
                </div>
                <div style={styles.itemWrap}>
                    <div style={styles.item}>{this.props.item.titulo}</div>
                </div>
                <div style={styles.itemWrap}>
                    <div style={{textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: 'lighter',
                        color: this.props.color}}>{this.props.item.descripcion}</div>
                </div>
            </div>
        );
    }
}

export default GridElement;

