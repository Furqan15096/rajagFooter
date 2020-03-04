import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard/index';



class MainComponent extends React.Component {
    render() {
        return (
            <Router>

                <Route exact path="/" component={Dashboard} />

            </Router>
        )
    }
}
export default MainComponent;