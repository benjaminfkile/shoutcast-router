const express = require("express")
const stationRouter = express.Router()
const axios = require("axios").default;

stationRouter
    .route("/:id")
    .get((req, res, next) => {
        const id = req.params.id
        axios.get(`http://yp.shoutcast.com/sbin/tunein-station.xspf?id=${id}`, {
        }).then(station => {
            res.send({data: station.data})
        }).catch(next)

    })
module.exports = stationRouter