const express = require("express")
const app = express()
const snippets = require("../models/snippets.js")
const router = express.Router()
const mongoose = require("mongoose")

//Get Snippet

router.get("/snippets", (req, res) => {
    snippets.find()
        .then((result) => {
            res.send(result)
        })
})

router.post("/snippets", (req, res) => {
    console.log(req.body)
    const snippetss = new snippets(req.body)
    snippetss.save()
        .then((result) => {
            res.send("Success")
        })
        .catch(err => {
            res.send("Error")
        })
})

router.delete("/snippets/:id", (req, res) => {
    const id = req.params.id
    snippets.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/snippets" })
        })
})

module.exports = router