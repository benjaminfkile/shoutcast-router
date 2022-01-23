const express = require("express")
const router = express.Router()
const axios = require("axios").default;
const key = process.env.KEY;
const limit = process.env.LIMIT

router
    .route("/:genre")
    .get((req, res, next) => {
        const genre = req.params.genre
        axios.get(`http://api.shoutcast.com/station/advancedsearch?mt=audio/mpeg&search=${genre}&limit=${limit}&f=json&k=${key}`, {
        }).then(suggestions => {
            res.json(suggestions.data)
        }).catch(next)

    })
module.exports = router