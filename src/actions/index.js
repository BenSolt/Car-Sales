//REMOVE
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = price => {
  console.log(price);
  return { type: REMOVE_ITEM, payload: price };
};

//ADD ITEM
export const ADD_ITEM = 'ADD_ITEM';
export const addItem = store => {
  console.log(store);
  return { type: ADD_ITEM, payload: store };
};
