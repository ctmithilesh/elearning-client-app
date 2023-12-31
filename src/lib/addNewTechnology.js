import axios from "axios"
import { endpoints } from "../data/endpoints"
let data = null
const bearer = 'Bearer'
export const addNewTechnology = async (technologyTitle, bToken) => {

    console.log(bearer, bToken)

    await axios.post(endpoints.add_technology, { technologyTitle }, {
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

