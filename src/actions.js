import { CHANGE_SEARCH_FIELD } from "./constants";

// Action that will be used to change state
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
