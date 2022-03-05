
import {state, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addNewPost, updateNewMessage, updateNewPost} from "./redux/state"

const  rerenderTree = () => {
    ReactDOM.render(
        <App state={state}
             addNewPost={addNewPost}
             updateNewPost={updateNewPost}
             addNewMessage={addNewMessage}
             updateNewMessage={updateNewMessage}
        />,
        document.getElementById('root')
    );
};

rerenderTree();

subscribe(rerenderTree);
