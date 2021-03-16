import getPersons from './personsReducer';
import setViewSettings from './viewReducer';

const reducer = (state, action) => {
    console.log(action.type);
    return {
        persons: getPersons(state, action),
        view: setViewSettings(state, action),
    };
};

export default reducer;