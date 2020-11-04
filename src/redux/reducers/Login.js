import { UPDATE_USERS_STATES_START } from '../constants/Login'
import {createStore} from "redux";
const INITIAL_STATE={
    username:"",
    password:""
}

const Login=(state = INITIAL_STATE, action)=>{
   switch(action.type){
       case UPDATE_USERS_STATES_START:
        console.log(action)
           return{...state,...action.payload}
        default:
            return state;
   }
}

export default createStore(Login);