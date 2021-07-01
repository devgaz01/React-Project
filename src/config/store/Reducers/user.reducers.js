// Note: these are redux integration for future purpose not using redux right now


// this is user reducer, store of redux

const initialState= {
    user:null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.data}
        }
        case "REMOVE_USER": {
            return {...state, user: null}
        }
        default: {
            return state;
        }
    }
}

export default userReducer;