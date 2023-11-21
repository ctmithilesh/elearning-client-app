import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null 
const bearer = 'Bearer'
export const getUserProfile = async (bToken, email ) => {

   console.log(bToken, email)

    await axios.get(endpoints.get_user_profile,{ email }, {
        headers:{
            'Authorization':`${bearer} ${bToken}`,
            "Content-Type":'application/json'
        }
    })
    .then(res=>{
        console.log(res)
        data = res.data 
    })
    .catch(err=>{
        console.log(err)
    })

    return data
}

