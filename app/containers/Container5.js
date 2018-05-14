import React, {Component, PropTypes} from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Modal from '../components/Modal';
import {css} from '../styles/modal.scss';

const styles = {
    dummy: {
        backgroundColor: '#fff',
        // height: '30rem',
        fontSize: 12,
        display: 'flex'
    },
    wrapper: {
        paddingTop: '3rem',
        paddingBottom: '5rem',
        display: 'flex',
        // height: '20rem',
        alignItems: 'baseline',
        justifyContent: 'center',
        margin: '0 auto'
    },
    box: {
        textAlign: 'center',
        // maxWidth: '70%',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',

    }
};

class Container5 extends Component {
    static propTypes = {
        data: PropTypes.string
    };
    constructor() {
        super();
        this.state = {
            isOpen: false,
            open: false,
        };
        this.openModal = this.openModal.bind(this);
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }



    openModal() {
        this.setState({isOpen: true});
    }

    render() {
        return (
            <div className="dummy" style={styles.dummy}>
                <Grid container spacing={0}>
                    <Grid style={styles.wrapper} md={12}>
                        <div style={styles.box}>
                            <Modal show={this.state.isOpen}
                                   onClose={this.toggleModal}>
                            </Modal>
                            <Button variant="raised" color="secondary" style={{backgroundColor: '#c3152b'}} onClick={this.toggleModal}>
                                Ver video
                            </Button>
                        </div>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Container5;
