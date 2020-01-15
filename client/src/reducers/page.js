const initialState = {
    page: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_PAGE': 
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;
    }
}