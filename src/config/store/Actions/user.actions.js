// Note: these are redux integration for future purpose not using redux right now


// Actions for user 

export const add_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}

export const remove_user = () => {
    return {
        type: "REMOVE_USER"
    }
}

