import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../actions/actions';
import { SideNav, Icon, Button } from 'react-materialize';
import SideNavItem from 'react-materialize/lib/SideNavItem';
class Main extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchUsersData())
    }

    render() {
        return (
            <div>
                <SideNav
                    trigger={this.createMenuButton()}
                    options={{ closeOnClick: true }}
                >
                <SideNavItem userView/>
                </SideNav>
                <ul>
                    {this.createList()}
                </ul>
            </div>
        )
    }
    createMenuButton(){
        return (
            <div>
                <Button>
                    <Icon>menu</Icon>
                </Button>
            </div>
        )
    }

    createList() {
        if (this.props.reducers.user > 0) {
            this.props.reducers.user.map((u, i) => {
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