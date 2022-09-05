import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/Dialogs.Container";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {NewHeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";

class App extends React.Component<AppPropsType, {}> {

    componentDidMount() {
        this.props.initializeApp()
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
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
        );
    }
};

export type AppPropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapDispatchToPropsType = {
    initializeApp: () => void,
};

type MapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


export default compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}))(App)
