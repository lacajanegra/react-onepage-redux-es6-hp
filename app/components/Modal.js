import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Button from 'material-ui/Button';

class Modal extends React.Component {
    static propTypes = {
        video: PropTypes.string
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        const backdropStyle = {
            position: 'fixed',
            zIndex: '100',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 50
        };
        const modalStyle = {
            backgroundColor: '#000',
            borderRadius: 5,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}

                    <div className="footer">
                        <Button variant="fab" color="primary" aria-label="close" onClick={this.props.onClose}
                                style={{position: 'absolute', top: 30, right: 30, backgroundColor: '#3c3c3c'}}>
                             X
                        </Button>
                        <ReactPlayer
                            url={this.props.video || 'https://vimeo.com/243556536'} width={'100%'} playing/>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;
