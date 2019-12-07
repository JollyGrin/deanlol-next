import fetch from 'axios'
import getConfig from 'next/config'

const apiURL = `https://api.airtable.com/v0/${process.env.BASE}/entries?api_key=${process.env.APIKEY}`

module.exports = async (req, res) => {
    try {
        const result = await fetch(apiURL)
        const response = result.data.records
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json('Sorry biatch, aint working')
    }
}
