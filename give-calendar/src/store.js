import {createStore, combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';


export function displayReducer(show = false, action = {}) {
    switch (action.type) {
        case 'SHOW' :
            return true;
        case 'HIDE' :
            return false;
        default :
            return show;
    }
}

export function showForm() {
    return {type: 'SHOW'};
}

export function hideForm() {
    return {type: 'HIDE'};
}

const rootReducer = combineReducers({  
    form: formReducer,
    display : displayReducer
})



export default createStore(rootReducer);


