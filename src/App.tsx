import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/Dialogs.Container";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {NewHeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <NewHeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
