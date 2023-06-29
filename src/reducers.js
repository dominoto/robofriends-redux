import { CHANGE_SEARCH_FIELD } from "./constants";

// Set initial values of state
const initialState = {
    searchField:''
}

// Reducer function with switch case according to action
export const searchRobots = (state=initialState, action={}) => {
    switch(action.type){
        // If value in search field changes, return new object made from state with modified searchField
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}