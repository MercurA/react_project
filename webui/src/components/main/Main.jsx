import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchUsersData} from '../../actions/actions';

class Main extends Component {

    componentDidMount(){
        const {dispatch} = this.props
        dispatch(fetchUsersData())
    }

    render(){
        return (
            <div>
            <h5>Title</h5>
            <ul>
                {this.createList()}
            </ul>
            </div>
        )
    }
    createList(){
        debugger
        if(this.props.reducers.user > 0){
            this.props.reducers.user.map((u,i)=>{
                return (
                    <li key={i}>{u.name}</li>
                )
            })
        }
    }
}
Main.propTypes = {
    users: PropsTypes.array,
    dispatch: PropsTypes.func.isRequired
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Main)