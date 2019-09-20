import { InitialState } from '../state/initialState';

export const Reducer = (state = InitialState, action)=> {
    
    if(action.type && action.type == 'PLUS') {
        return {
            counter: state.counter + action.payload.value
        }
    }
    if(action.type && action.type == 'MINUS') {
        return {
            counter: state.counter - action.payload.value
        }
    }
    return state;
}