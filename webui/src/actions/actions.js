import fetch from 'cross-fetch';

export const RECIEVED_DATA = 'RECIEVED_DATA';

const URL = 'http://localhost:3001/api/get'

function revievedData(users) {
    return {
        type: RECIEVED_DATA,
        users: users.data
    }
}

function fetchUsers() {
    return dispatch => {
        return fetch(URL)
        .then(response => response.json())
        .then(json => dispatch(revievedData(json)))
    }
}

export function fetchUsersData() {
    return (dispatch, getState) => {
        return dispatch(fetchUsers())
    }
}