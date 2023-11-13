import {createReducer} from '@reduxjs/toolkit'
import eventsActions from '../actions/eventsActions'

const initialState = []

const eventsReducer = createReducer(initialState, (builder) => {
    return builder.addCase(eventsActions.get_events.fulfilled, (state, action) =>{

        //Con "..."(spread operator) clonamos el estado antedior y le agregamos algo nuevo para no modificar al original 
        // let newState = {...state, details: action.payload} o {...state, events: action.payload.events}
        let newState = action.payload;


        //Va a retornar al nuevo estado
        return newState;

        
    }); 
}); 

export default eventsReducer;