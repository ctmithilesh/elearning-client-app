import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null 
export const loginUser = async (username, password) => {

    await axios.post(endpoints.login, { username, password })
    .then(res=>{
        console.log(res)
        data = res.data 
    })
    .catch(err=>{
        console.log(err)
    })

    return data
}

