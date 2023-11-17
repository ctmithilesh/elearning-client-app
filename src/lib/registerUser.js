import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null
export const registerUser = async (first_name, last_name, email, password, role) => {

    await axios.post(endpoints.register, { first_name, last_name, email, password, role })
        .then(res => {
            console.log(res)
            data = res.data
        })
        .catch(err => {
            console.log(err)
        })

    return data
}

