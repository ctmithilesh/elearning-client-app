import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null
const bearer = 'Bearer'
export const addNewCourse = async (courseName, courseDescription, courseImage, startDate, endDate, facultyId, technologyId, bToken ) => {

    console.log(bearer, bToken)

    await axios.post(endpoints.add_new_course, { courseName, courseDescription, courseImage, startDate, endDate, facultyId, technologyId }, {
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

