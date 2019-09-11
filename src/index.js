import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Import Create Store
import { createStore } from "redux";
//Import Provider
import { Provider } from "react-redux";

import 'bulma/css/bulma.css';
import './styles.scss';

//const for Store and mock reducer
const store = createStore(reducer);

//Reducer function passed into createstore()
function reducer() {
    return {
        title: "hi from the Redux Store!"
    }
}


const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
rootElement);
