import { UserResponse } from "../shared/types/UserType"

export function userAction (user?: UserResponse){
    return{
        type: 'User',
        payload: user
    }
}
