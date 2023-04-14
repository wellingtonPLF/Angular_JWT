import { UserResponse } from "../shared/types/UserType";


const INITIAL_USER_STATE: UserResponse = {
    nickName: "unknow", 
    email: "unknow", 
    bornDate: new Date("2002-03-10")
}

export const userReducer = (state = INITIAL_USER_STATE, action: any) => {
    switch(action.type){
        case 'User':
            if (action.payload == undefined){
                return INITIAL_USER_STATE;
            }
            return action.payload;
        default:
            return state
    }
}
