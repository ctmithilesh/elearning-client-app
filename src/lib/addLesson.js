import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null
const bearer = 'Bearer'
export const addLesson = async (lessonTitle, lessonOrder, bToken) => {

    console.log(bearer, bToken)

    await axios.post(endpoints.add_new_lesson, {lessonTitle, lessonOrder  }, {
        headers: {
            'Authorization': `${bearer} ${bToken}`,
            'Content-Type':'application/json'
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

