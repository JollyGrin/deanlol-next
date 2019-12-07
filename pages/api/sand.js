import micro from 'micro'
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
        return err
    }
}

export default async (req, res) => {
    // try {
    //     const data = await getResults()
    // } catch (err) {
    //     return err
    // }

    res.status(200).json(data)
}
