import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react'
import PropTypes from 'prop-types'
import Main from '../main/Main';

export const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Route path='/login' component={Main} />
            </Router>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root