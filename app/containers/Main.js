import React, {Component} from 'react';
import ContainersWrapper from './ContainersWrapper';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <Router>
                    <Route path="/:id" component={ContainersWrapper}/>
            </Router>
        );
    }
}


export default Main;
