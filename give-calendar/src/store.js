import {createStore, combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';

// The initial state of the store
const initState = {
    display : false,
    selectedDate : 0,
    index : 0,
    events : []
}

// This is the reducer that is used for mainitianing the state related to calendar
// Since I am using a redux-form, the form state is covered by that, and I only need to mainitain
// the state of the calendar events

// TODO: The way I am updating state on eah action can be improved.
// Using Object.assign was fine when the state was small initially, but is not practical as 
// the state grows. 

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
                selectedDate : 0,
                index: state.index,
                events: state.events
            });

        case 'ADD' :            
            let newEvents = state.events.slice();
            let newIndex = state.index + 1;

            // I am pre-populating the date field in the form and making it read only.
            // I could not find and easy way to do so with Reduc-Form Field component.
            // Anything that is not a Field Component will not be exported as a JSON object on submit
            // I need to store the date as a part of the event in the store and hence appending it
            // from action.selectedDate here

            action.data.selectedDate = state.selectedDate;
            newEvents.splice(newIndex, 0, action.data)

            return Object.assign({}, state, {
                display : false,
                selectedDate : state.selectedDate,
                index : newIndex,
                events: newEvents
            })

        // TODO: Add an action to delete an event
        default :
            return state;
    }
}

// Combine both the formReducer provided by redux-form and my custom calendar reducer
// into a single store
const rootReducer = combineReducers({  
    form: formReducer,
    calendar : calendarReducer
})

const store = createStore(rootReducer);

export function showForm(date) {
    return {
        type: 'SHOW',
        selectedDate : date  
        };
}

export function hideForm() {
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

// TODO: Add function for delete event

export default store;