import { usersDB } from "@/data/usersDB";
import { isEmail, minLength } from "@/helpers/validators";

export const login = ({email, password}) => {
    // check if email and password exist
    // لو معرفتش تنفذ الكود يبقى ضيف الايرور دا
    if(!email || !password) {
        throw new Error ("Please provide email and password!")
    }

    if (!isEmail({value: email})) {
        throw new Error ("Please provide a valid email!")
    }

    if (!minLength({value:password, min: 6})) {
        throw new Error ("Password should be at least  6 chars!")
    }

    // search user
    const userExist = usersDB.find((user) => user.email === email);

    // بندور على اليوزر
    // check if user exists
    if (!userExist) {
        throw new Error('No user exist with this email')
    }
    
    // check if password is correct
    if (userExist.password !== password) {
        throw new Error ("Password and email do not match")
    }

    // مينفعش ارجع الباسورد ابدا للفرونت اند
    delete userExist.password

    // return user
    return userExist;
}