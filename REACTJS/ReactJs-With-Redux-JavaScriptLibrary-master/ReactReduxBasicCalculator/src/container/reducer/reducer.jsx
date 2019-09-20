import { InitialState } from '../state/initialState';

export const Reducer = (state = InitialState, action)=> {

    if(action.type && action.type == 'ADDITION') {
        let sum = parseInt(action.payload.firstNumber) + parseInt(action.payload.secondNumber);
        return {
            firstNumber: action.payload.firstNumber,
            secondNumber: action.payload.secondNumber,
            result: sum
        }
        // state.firstNumber = parseInt(action.payload.firstNumber);
        // state.secondNumber = parseInt(action.payload.secondNumber);
        // state.result = state.firstNumber + state.secondNumber;
        // return {
        //     result: state.result 
        // }
    }
    else
    if(action.type && action.type == 'SUBTRACTION') {
        let sub = parseInt(action.payload.firstNumber) - parseInt(action.payload.secondNumber);
        return {
            firstNumber: action.payload.firstNumber,
            secondNumber: action.payload.secondNumber,
            result: sub
        }
        // state.firstNumber = parseInt(action.payload.firstNumber);
        // state.secondNumber = parseInt(action.payload.secondNumber);
        // state.result = state.firstNumber - state.secondNumber;
        // return {
        //     result: state.result 
        // }
    }
    else
    if(action.type && action.type == 'MULTIPLICATION') {
        let mul = parseInt(action.payload.firstNumber) * parseInt(action.payload.secondNumber);
        return {
            firstNumber: action.payload.firstNumber,
            secondNumber: action.payload.secondNumber,
            result: mul
        }
        // state.firstNumber = parseInt(action.payload.firstNumber);
        // state.secondNumber = parseInt(action.payload.secondNumber);
        // state.result = state.firstNumber * state.secondNumber;
        // return {
        //     result: state.result 
        // }
    }
    else
    if(action.type && action.type == 'DIVISION') {
        let div = parseInt(action.payload.firstNumber) / parseInt(action.payload.secondNumber);
        return {
            firstNumber: action.payload.firstNumber,
            secondNumber: action.payload.secondNumber,
            result: div
        }
        // state.firstNumber = parseInt(action.payload.firstNumber);
        // state.secondNumber = parseInt(action.payload.secondNumber);
        // state.result = state.firstNumber / state.secondNumber;
        // return {
        //     result: state.result 
        // }
    }
    return state;
}