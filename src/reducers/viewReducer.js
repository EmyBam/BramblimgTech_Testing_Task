import {
    SORTING_PROPERTY,
    SORTING_ORDER,
    VIEW_TYPE,
    LANGUAGE
} from '../actions'

const setViewSettings = (state, action) => {

    if (state === undefined) {
        return {
            sortingProperty: null,
            sortingOrder: null,
            viewType: null,
            language: null
        }
    }

    switch (action.type) {
        case SORTING_PROPERTY :
             return {
                ...state.view,
                 sortingProperty: action.payload
            };

        case SORTING_ORDER:
            return {
                ...state.view,
                sortingOrder: action.payload
            };

        case VIEW_TYPE:
            return {
                ...state.view,
                viewType: action.payload
            };

        case LANGUAGE:
            return {
                ...state.view,
                language: action.payload
            };

        default:
            return state.view;
    }

}

export default setViewSettings;