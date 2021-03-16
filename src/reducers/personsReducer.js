import {
    FETCH_PERSONS_REQUESTED,
    FETCH_PERSONS_SUCCESS,
    FETCH_PERSONS_FAILURE,
    FAVOURITE
} from '../actions'

const getPersons = (state, action) => {

    if (state === undefined) {
        return {
            persons: [],
            personsLoading: false,
            personsError: null
        }
    }

    switch (action.type) {
        case FETCH_PERSONS_REQUESTED :
            return {
                ...state.persons,
                personsLoading: true,
                personsError: null
            };

        case FETCH_PERSONS_SUCCESS:
            return {
                ...state.persons,
                persons: action.payload,
                personsLoading: false,
                personsError: null,
            };

        case FETCH_PERSONS_FAILURE:
            return {
                ...state.persons,
                personsLoading: false,
                personsError: action.payload,
            };

        case FAVOURITE:
            const person = state.persons.persons.find(person => person.id === action.payload);
            person.favourite = !person.favourite;
            const updatedPersons = state.persons.persons.map(item =>
                item.id === action.payload ? person : item
            )
            return {
                ...state.persons,
                persons: updatedPersons
            };

        default:
            return state.persons;

    }

}

export default getPersons;