import { UPDATE_CAR } from '../actions';

const initialState = {

    
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    }
  };


export const carReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case UPDATE_CAR:
            console.log("action here?");
            return {
                ...state,
               car: state.price
            };
            default:
                return state;
    }
};