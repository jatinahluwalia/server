const express = require("express")
const app = express()
const mongoose = require("mongoose")
const routes = require("./Routes/routes.js")
const cors =  require("cors")

mongoose.set("strictQuery", true)

mongoose.connect("mongodb://127.0.0.1:27017/myways", { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>{
    app.listen(5000)
    console.log("Server started on port 5000")
    console.log("MongoDB Connected")
})
.catch(err=>{
    console.log(err)
})


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: true, credentials: true}));
app.use(routes)    