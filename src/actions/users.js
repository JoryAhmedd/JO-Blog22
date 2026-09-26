import { isEmail, minLength } from "@/helpers/validators";
import userDB from "@/data/usersDB"

export const login = ({email, password}) => {
    if(!email || !password) {
        throw new Error ("Please provide email and password!")
    }

    if (!isEmail({value: email})) {
        throw new Error ("Please provide a valid email!")
    }

    if (minLength({value:password, min: 6})) {
        throw new Error ("Password should be at least  6 chars!")
    }

    // search user
    const userExist = userDB.find((user) => user.email === email);
    console.log(userExist);

    if (!userExist) {
        throw new Error('No user exist with this email')
    }
    
    // check if user actually exist

    // check if password is correct

    // return user

}