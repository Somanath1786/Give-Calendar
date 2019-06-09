import {createStore, combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';

const initState = {
    display : false,
    selectedDate : 0
}


export function displayReducer(state = initState, action = {}) {
    switch (action.type) {
        case 'SHOW' :            
            return Object.assign({}, state, {
                display : true,
                selectedDate : action.selectedDate
            });
        case 'HIDE' :            
            return Object.assign({}, state, {
                display: false
            });
        default :
            return state;
    }
}


const rootReducer = combineReducers({  
    form: formReducer,
    myReducer : displayReducer
})



const store = createStore(rootReducer);

export function showForm(date) {    
    console.log(store.getState());
    return {
        type: 'SHOW',
        selectedDate : date  
        };
}

export function hideForm() {
    console.log(store.getState());
    return {
        type: 'HIDE',
        display: false
    };
}

export default store;