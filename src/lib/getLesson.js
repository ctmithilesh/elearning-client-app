import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null
const bearer = 'Bearer'
let url = 'https://elearningbck-891190cb2aaa.herokuapp.com/api/v1/courses'
export const getLesson = async (courseId, bToken) => {

    console.log(bToken)

    await axios.get(url + `/${courseId}/lessons`, {
        headers: {
            'Authorization': `${bearer} ${bToken}`,
            "Content-Type": 'application/json'
        }
    })
        .then(res => {
            console.log(res)
            data = res.data
        })
        .catch(err => {
            console.log(err)
        })

    return data
}

