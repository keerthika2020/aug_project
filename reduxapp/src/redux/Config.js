import {configureStore} from '@reduxjs/toolkit';
//configuration
//configure store helps to create store
//2 parametres: 1)state means initial state is 0, when pg is loaded initial value is 0
//action says whether it is inc/dec
const counterLogic=(state=0,action)=>{
    switch(action.type){
        case "add":
            return state+1;
        break;
        case "sub":
            return state-1;
        break;   
    }
    //if switch is not match,return below
    return state;
}
//object ie string is going to be stored so put {}, if it is array use[]
const storeMyDetailsReducer=(state={},action)=>{
    switch(action.type){
        case "saveDetails":
            console.log(action.data);
            return action.data;
            break;
    }
    return state;
}
export const mystore=configureStore({
    reducer:{
        //we should add reducer in mystore
        "counter":counterLogic,
        "myDetails":storeMyDetailsReducer
       
    }
})