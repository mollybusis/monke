const express = require('express')
const cors = require('cors')
require("dotenv").config()
const mongoose = require("mongoose")
const app = express()
const port = 3001
const Submission = require("./models/Submission")
const debugging_mode = true
  const url = debugging_mode === true ? "http://localhost:3000" : "https://mollybusis.github.io/monke"
app.use(cors({ credentials: true, origin: url }));
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.DATABASE_URI)

// :3000/hello
// post(":3000/hello", {
//      firstName: "Molly"
// })
app.post("/hello", (req, res) => {
    const body = req.body
    console.log(body)
    // { firstName: "Molly" }
    const firstName = req.body.firstName // Molly
    const reversed = "ylloM"
    res.status(404).send(reversed) // data: yllOm
})

app.post("/addResponse", (req, res) => {
    const sleepThing = req.body.sleepThing
    Submission.create({
        sleepAccessory: sleepThing
    }).then(result => {
        console.log(result)
    })
})
app.get("/getResponses", (req, res) => {
    
    Submission.find().then(allFiles => {
        //allFiles is an array of individual documents
        const responses = []
        allFiles.forEach((file) =>{
            const sleepy = file.sleepAccessory
            responses.push(sleepy)
        })
        res.send(responses) //data:  data
    }).catch(() =>{
        res.sendStatus(500)
    })
    
})

Submission.find().then(allFiles => {
    //allFiles is an array of individual documents
})
// main method
app.listen(port, () => {
  console.log(`Monke app listening on port ${port}`)
})
