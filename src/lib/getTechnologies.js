import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null 
const bearer = 'Bearer'
export const getTechnologies = async (bToken) => {

    console.log(bearer, bToken)

    await axios.get(endpoints.get_technology,{
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

