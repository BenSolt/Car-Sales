//UPDATE PRICE
export const UPDATE_PRICE = 'UPDATE_PRICE';
export const updatePrice = price => {
  console.log(price);
  return { type: UPDATE_PRICE, payload: price };
};

//UPDATE STORE
export const UPDATE_STORE = 'UPDATE_STORE';
export const updateStore = price => {
  console.log(price);
  return { type: UPDATE_STORE, payload: price };
};
//UPDATE CAR
export const UPDATE_CAR = 'UPDATE_CAR';
export const updateCar = price => {
  console.log(price);
  return { type: UPDATE_CAR, payload: price };
};