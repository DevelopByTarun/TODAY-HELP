import { createStore } from 'redux';
import { Reducer } from '../reducer/reducer';

export const Store = createStore(Reducer);
Store.subscribe(()=>{
    console.log("Subscribe Demo  ",Store.getState());
})