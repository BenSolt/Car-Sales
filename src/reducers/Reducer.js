
export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case UPDATE:
            console.log("action here?");
            return {
                ...state,
                title: action.payload
            };
            default:
                return state;
    }
};