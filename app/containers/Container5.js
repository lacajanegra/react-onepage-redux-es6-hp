import React, {Component, PropTypes} from 'react';
// import '../stylesheets/DumbComponent.scss'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ModalVideo from 'react-modal-video';

const styles = {
    dummy: {
        backgroundColor: '#2e2e2e',
        // height: '30rem',
        fontSize: 12,
        display: 'flex'
    },
    wrapper: {
        marginTop: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        // height: '20rem',
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

class Container5 extends Component {
    static propTypes = {
        data: PropTypes.string
    };
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({isOpen: true});
    }

    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <ModalVideo channel={'youtube'} isOpen={this.state.isOpen} videoId={'L61p2uyiMSo'} onClose={() => this.setState({isOpen: false})} />
                <Grid container spacing={0}>
                    <Grid style={styles.wrapper} md={12}>
                        <div style={styles.box}>
                            <Button variant="raised" color="secondary" onClick={this.openModal}>
                                Secondary
                            </Button>
                            {this.props.data}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Container5;
