const FETCH_PERSONS_REQUESTED = 'FETCH_PERSONS_REQUESTED';
const FETCH_PERSONS_SUCCESS = 'FETCH_PERSONS_SUCCESS';
const FETCH_PERSONS_FAILURE = 'FETCH_PERSONS_FAILURE';
const FAVOURITE = 'FAVOURITE';


const personsRequested = () => {
    return {
        type: FETCH_PERSONS_REQUESTED,
    }
};

const personsLoaded = (persons) => {
    return {
        type: FETCH_PERSONS_SUCCESS,
        payload: persons
    }
};

const personsError = (error) => {
    return {
        type: FETCH_PERSONS_FAILURE,
        payload: error
    }
};

const favourite = (id) => {
    return {
        type: FAVOURITE,
        payload: id
    }
}

const fetchAllPersons = (service, dispatch, date) => {
    dispatch(personsRequested());
    service.fetchAllPersons(date)
        .then(data => dispatch(personsLoaded(data)))
        .catch(err => {
            console.log(err);
            dispatch(personsError(err));
        })
};

const toggleFavourite = (dispatch, id) => {
    dispatch(favourite(id))
}

export {
    FETCH_PERSONS_REQUESTED,
    FETCH_PERSONS_SUCCESS,
    FETCH_PERSONS_FAILURE,
    FAVOURITE,
    fetchAllPersons,
    toggleFavourite
}