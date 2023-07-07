import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
  } from "./constants";

// Set initial values of state for searchfield
const initialStateSearch = {
    searchField:''
}

// Reducer function with switch case according to action
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type){
        // If value in search field changes, return new object made from state with modified searchField
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

// Set initial values of state for fetching robots
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

// Reducer function with switch case: waits for fetch, fetches successfully or fetch failed
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}