import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    toggleISFetchingActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";

import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleISFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.toggleISFetchingActionCreator(false)
                this.props.setUsersActionCreator(res.data.items)
                this.props.setTotalUsersCountActionCreator(res.data.totalCount)
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageActionCreator(pageNumber)
        this.props.toggleISFetchingActionCreator(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
            this.props.toggleISFetchingActionCreator(false);
            this.props.setUsersActionCreator(res.data.items);
        })

    }

    render() {
        console.log("this.props.isFetching", this.props.isFetching)
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.followActionCreator}
                    unfollow={this.props.unfollowActionCreator}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    toggleISFetchingActionCreator
})(UsersContainer)