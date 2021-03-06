const express = require('express')
const request = require("request")
const app = express();

app.get('/data', async (req, res) => {
    makeAPICall('https://data.covid19india.org/data.json')
        .then(resp => res.json(resp))
})
app.get('/zone', async (req, res) => {
    makeAPICall('https://api.covid19india.org/zones.json')
        .then(resp => res.json(resp))
})
app.get('/state', async (req, res) => {
    makeAPICall('https://data.covid19india.org/v2/state_district_wise.json')
        .then(resp => res.json(resp))
})

app.get('/zone')
const makeAPICall = (url) =>
    new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err) reject(err)
            resolve(body)
        });
    })


app.listen(3000, () => console.log("server started"))