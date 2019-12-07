const { send } = require('micro')
const cors = require('micro-cors')()
import fetch from 'axios'
import getConfig from 'next/config'

async function getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const apiURL = `${proxy}https://api.airtable.com/v0/${process.env.BASE}/entries?api_key=${process.env.APIKEY}`

    try {
        const result = await fetch(apiURL)
        return result.data.records
    } catch (err) {
        console.log(`Shoot! You hit an error: ${err}`)
    }
}

const handler = (req, res) => {
    getResults().then(data => {
        return data
    })
}

module.exports = cors(handler)
