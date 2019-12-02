import fetch from 'axios'
import getConfig from 'next/config'

// export default async function getResults(req, res) {
//     const proxy = 'https://cors-anywhere.herokuapp.com/'
//     const apiURL = `${proxy}https://api.airtable.com/v0/${process.env.BASE}/entries?api_key=${process.env.APIKEY}`

//     try {
//         const result = await fetch(apiURL)
//         console.log(result.data.records)
//         res.status(200).json(result.data.records)
//     } catch (err) {
//         console.log(`Shoot! You hit an error: ${err}`)
//     }
// }

// export default async (req, res) => {
//     const proxy = 'https://cors-anywhere.herokuapp.com/'
//     const apiURL = `${proxy}https://api.airtable.com/v0/${process.env.BASE}/entries?api_key=${process.env.APIKEY}`

//     try {
//         const result = await fetch(apiURL)
//         console.log(result.data.records)
//         res.json(result.data.records)
//     } catch (err) {
//         console.log('error')
//         console.log(err)
//     }
// }

const proxy = 'https://cors-anywhere.herokuapp.com/'
const apiURL = `${proxy}https://api.airtable.com/v0/${process.env.BASE}/entries?api_key=${process.env.APIKEY}`

module.exports = async (req, res) => {
    try {
        const result = await fetch(apiURL)
        console.log(result.data.records)
        res.status(200).send(result.data.records)
    } catch (err) {
        console.log(err)
    }
}
