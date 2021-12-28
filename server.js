const express = require('express')
const request = require("request")
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send("Welcome to Covid App")
})
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
app.get('vaccine', async (req, res) => {
    makeAPICall('https://www.mygov.in/sites/default/files/covid/vaccine/vaccine_counts_today.json')
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


app.listen(PORT, () => console.log("server started"))