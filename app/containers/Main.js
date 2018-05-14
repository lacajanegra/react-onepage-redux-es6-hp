import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { app } from '../styles/app.scss';
import ContainerHeader from './ContainerHeader';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import Container6 from './Container6';
import Container7 from './Container7';

import {fetchData} from '../actions';


class Main extends Component {
    static propTypes = {
        fetchData: PropTypes.func.isRequired,
        data: PropTypes.object
    };
    componentWillMount() {
        this.props.fetchData();
    }
    render() {
        return (
            <div className={app}>
                <ContainerHeader/>
                {this.props.data.familia &&
                <Container1 data={this.props.data}/>
                }
                {this.props.data.diferenciadores &&
                <Container2 data={this.props.data.diferenciadores}/>
                }
                {this.props.data.especificaciones &&
                <Container3 data={this.props.data.especificaciones}/>
                }
                {this.props.data.visualesFicha &&
                <Container4 data={this.props.data.visualesFicha}/>
                }
                {this.props.data.video &&
                <Container5 data={this.props.data.video}/>
                }
                {this.props.data.galeria &&
                <Container6 data={this.props.data.galeria}/>
                }
                {this.props.data.legales &&
                <Container7 data={this.props.data.legales}/>
                }
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchData() {
            dispatch(fetchData());
        }
    };
};

const mapStateProps = state => {
    console.log('state', state);
    return {
        data: state.omen.data// fetch data success
    };
};

export default connect(
    mapStateProps,
    mapDispatchToProps
)(Main);
