import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Login from '../login/Login';
import App from '../../App';

export class MainRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login}></Route>
                    <Route path='/home' component={App}></Route>
                    <Route component={Login}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}