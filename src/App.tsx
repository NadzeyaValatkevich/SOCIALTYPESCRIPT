import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType, updateNewMessage} from "./redux/state";

type StatePropsType = {
    state: RootStateType,
    addNewPost: (postMessage:string) => void,
    updateNewPost: (newText: string) => void,
    addNewMessage: (newMessage: string) => void,
    updateNewMessage: (messageText: string) => void,
};

const App = (props: StatePropsType) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                   addNewMessage={props.addNewMessage}
                                                                   updateNewMessage={updateNewMessage}
                        />}/>
                        <Route path={'/profile'} element={<Profile profilePage={props.state.profilePage}
                                                                   addNewPost={props.addNewPost}
                                                                   updateNewPost={props.updateNewPost}

                        />}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;
