import { UPDATE_DATES_REGISTER } from '../constants/Register'
import {createStore} from "redux";
const INITIAL_STATE={
    firstName:"",
    lastName:"",
    age:0,
    country:"",
    city:""
}

const Register=(state = INITIAL_STATE, action)=>{
   switch(action.type){
       case UPDATE_DATES_REGISTER:
        console.log(action)
           return{...state,...action.payload}
        default:
            return state;
   }
}

export default createStore(Register);