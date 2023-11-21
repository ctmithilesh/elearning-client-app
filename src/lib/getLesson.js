import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null 
const bearer = 'Bearer'
export const getLesson = async (bToken ) => {

   console.log(bToken)

    await axios.get(endpoints.get_lesson, {
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

