import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Import Create Store
import { createStore } from "redux";
//Import Provider
import { Provider } from "react-redux";
//Import Reducer from file path
import {MyReducer} from "./reducers";

import 'bulma/css/bulma.css';
import './styles.scss';


function reducer() {
    return {
        car: {
            price: 26395,
            name: '2019 Ford Mustang',
            image:
              'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
          },
          store: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Racing detail package', price: 1500 },
            { id: 3, name: 'Premium sound system', price: 500 },
            { id: 4, name: 'Rear spoiler', price: 250 }
          ]
    }
}




//const for Store and mock reducer
const store = createStore(reducer);






const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
rootElement);
