import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";

import './App.css';
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path='/dialogs' exact element={*/}
                        {/*    <DialogsContainer/>*/}
                        {/*}/>*/}
                        <Route path='/profile' exact element={
                            <ProfileContainer/>
                        }/>
                        {/*<Route path='/users' exact element={*/}
                        {/*    <UsersContainer/>*/}
                        {/*}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;