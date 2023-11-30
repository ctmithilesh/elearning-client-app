import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null
const bearer = 'Bearer'
let url = 'https://elearningbck-891190cb2aaa.herokuapp.com/api/v1/lessons'
export const addNewContent = async (contentTitle, contentUrl, contentDescription, contentOrder, courseId, jwtToken) => {

    console.log(bearer, jwtToken)


    await axios.post(url + `/${courseId}/content`, { contentTitle, contentUrl, contentDescription, contentOrder }, {
        headers: {
            'Authorization': `${bearer} ${jwtToken}`,
            'Content-Type': 'application/json'
        },

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

