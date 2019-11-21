import {FETCH_DATA, NEW_REQUEST, SUBMIT_REQUEST} from '../actions/types';

const initialState ={
    data: [],
    request: {}
}

export default function(state = initialState, actions) {
    switch(actions.type){
        default: 
            return state
        case FETCH_DATA:
            console.log("then this action will go here after Dispatch")
            return {
                ...state,
                data: actions.payload
            }
        case NEW_REQUEST:
            return{
                ...state,
                request: actions.payload
            }
        case SUBMIT_REQUEST:
            return{
                ...state,
                data: actions.payload,
                request: actions.request
            }
    }
}