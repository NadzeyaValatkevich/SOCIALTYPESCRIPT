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
import {StoreType} from "./redux/state";

type StorePropsType = {
    store: StoreType,
};

const App: React.FC<StorePropsType> = (props: StorePropsType) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs dialogsPage={state.dialogsPage}
                                                                   dispatch={props.store.dispatch.bind(props.store)}

                        />}/>
                        <Route path={'/profile'} element={<Profile profilePage={state.profilePage}
                                                                   dispatch={props.store.dispatch.bind(props.store)}
                                                                   store={props.store}

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
