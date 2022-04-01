
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const  rerenderTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
};

rerenderTree();

store.subscribe(rerenderTree);
