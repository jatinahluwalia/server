const mongoose = require("mongoose")

const snippetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
},{timestamps: true})

const snippets = mongoose.model("snippets", snippetSchema)
module.exports = snippets