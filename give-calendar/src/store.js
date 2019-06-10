import {createStore, combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';

const initState = {
    display : false,
    selectedDate : 0,
    index : 0,
    events : []
}


export function calendarReducer(state = initState, action = {}) {
    switch (action.type) {
        case 'SHOW' :            
            return Object.assign({}, state, {
                display : true,
                selectedDate : action.selectedDate,
                index: state.index,
                events: state.events
            });
        case 'HIDE' :            
            return Object.assign({}, state, {
                display: false,
                selectedDate : state.selectedDate,
                index: state.index,
                events: state.events
            });
        case 'ADD' :            
            let newEvents = state.events.slice();
            let newIndex = state.index + 1;
            newEvents.splice(newIndex, 0, action.data)
            return Object.assign({}, state, {
                display : false,
                selectedDate : state.selectedDate,
                index : newIndex,
                events: newEvents
            })
        default :
            return state;
    }
}


const rootReducer = combineReducers({  
    form: formReducer,
    calendar : calendarReducer
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

export function addEvent(formData) {
    return {
        type: 'ADD',
        data: formData
    }
}

export default store;