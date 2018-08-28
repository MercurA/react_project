import { combineReducers } from 'redux';
import { RECIEVED_DATA } from '../actions/actions'
import GlobalState from '../store/initialStore';

function reducers(state = GlobalState, action) {
    switch (action.type) {
        case RECIEVED_DATA:
            return {
                ...state,
                users: action.users
            }
        default: {
            return state
        }
    }
}

const rootReducer = combineReducers({ reducers });

export default rootReducer;