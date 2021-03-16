const SORTING_PROPERTY = 'SORTING_PROPERTY';
const SORTING_ORDER = 'SORTING_ORDER';
const VIEW_TYPE = 'VIEW_TYPE';
const LANGUAGE = 'LANGUAGE';


const sortingProperty = (property) => {
    return {
        type: SORTING_PROPERTY,
        payload: property
    }
};

const sortingOrder = (order) => {
    return {
        type: SORTING_ORDER,
        payload: order
    }
};

const viewType = (type) => {
    return {
        type: VIEW_TYPE,
        payload: type
    }
}

const language = (lang) => {
    return {
        type: LANGUAGE,
        payload: lang
    }
}


const sortByProperty = (dispatch, property) => {
    dispatch(sortingProperty(property))
}

const sortByOrder = (dispatch, direction) => {
    dispatch(sortingOrder(direction))
}

const setViewType = (dispatch, type) => {
    dispatch(viewType(type))
}

const switchLanguage = (dispatch, lang) => {
    dispatch(language(lang))
}

export {
    SORTING_PROPERTY,
    SORTING_ORDER,
    VIEW_TYPE,
    LANGUAGE,
    sortByProperty,
    sortByOrder,
    setViewType,
    switchLanguage
}