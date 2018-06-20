import React from 'react';
import { Route } from 'react-router';
import Login from '../pages/login/Login';


class Routes extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div>
                <Route exact path="/" component={Login} />
            </div>
        );
    }
}
export default Routes;