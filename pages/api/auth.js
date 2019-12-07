import Cors from 'micro-cors'
import fetch from 'axios'
import getConfig from 'next/config'
// const fetch = require('axios').default

const proxy = 'https://cors-anywhere.herokuapp.com/'
const apiURL = `${proxy}https://api.airtable.com/v0/${process.env.BASE}/entries?api_key=${process.env.APIKEY}`
const cors = Cors({
    allowedMethods: ['GET', 'HEAD'],
})

module.exports = async (req, res) => {
    try {
        const result = await fetch(apiURL)
        response = result.data.records
        console.log(response)
    } catch (err) {
        console.log(err)
        console.log('error123')
    }
}

// async function Endpoint(req, res) {
//     try {
//         const data = await fetch(apiURL)
//         response = data.data.records
//         res.json(response)
//     } catch (err) {
//         console.log(err)
//     }
// }

// export default cors(Endpoint)
