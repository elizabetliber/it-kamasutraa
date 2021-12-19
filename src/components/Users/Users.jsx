import React from "react";
import {NavLink} from "react-router-dom";

import userPhoto from "../../assets/images/cat.jpg";

import styles from "./Users.module.css";


function Users({
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   users,
                   follow,
                   unfollow
               }) {
    let pagesSize = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesSize; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((item) => {
                    return (<span
                        className={currentPage === item && styles.selectedPage}
                        onClick={() => {
                            onPageChanged(item)
                        }}
                    >{item}</span>)
                })}
            </div>
            {users.map((item) => {
                return (
                    <>
                        <span>
                            <div>
                                <NavLink to={"/profile/" + item.id}>
                                 <img src={item.photos.small !== null ? item.photos.small : userPhoto} alt="user"
                                      className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {item.followed ?
                                    <button onClick={() => unfollow(item.id)}>Unfollow</button> :
                                    <button onClick={() => follow(item.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                        <span>
                            <div>{item.name}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{"item.location.city"}</div>
                            <div>{"item.location.country"}</div>
                        </span>
                    </span>
                    </>
                )
            })}
        </div>
    )
}

export default Users