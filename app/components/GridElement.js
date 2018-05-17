import React, {Component, PropTypes} from 'react';
const styles = {
    img: {
        width: '6vw'
    },
    itemWrap: {
        paddingLeft: '3vw',
        paddingRight: '3vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        margin: '0.5vw',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2vw',
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
                        fontSize: '1.5vw',
                        fontWeight: 'lighter',
                        maxWidth: '30vw',
                        color: this.props.color}}>{this.props.item.descripcion}</div>
                </div>
            </div>
        );
    }
}

export default GridElement;

