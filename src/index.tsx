
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "./StoreContext";


const  rerenderTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
    );
};

rerenderTree();

store.subscribe(rerenderTree);
