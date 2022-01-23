const express = require("express")
const genreRouter = express.Router()
const axios = require("axios").default;
const key = process.env.KEY;
const limit = process.env.LIMIT

genreRouter
    .route("/:genre")
    .get((req, res, next) => {
        const genre = req.params.genre
        axios.get(`http://api.shoutcast.com/station/advancedsearch?mt=audio/mpeg&search=${genre}&limit=${limit}&f=json&k=${key}`, {
        }).then(genres => {
            res.send({data: genres.data.response.data.stationlist.station})
        }).catch(next)

    })
module.exports = genreRouter