//http://localhost:3000/api/user

import axios from "axios";
import { api } from "./api-instance";


export const ApiSignUp = (data) => {
    return api.post('/user', data)
}