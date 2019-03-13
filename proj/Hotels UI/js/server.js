const express = require('express')
const app = express()

app.use('/data' , (req , res)=>{
    console.log("We got the request from f-end to b-end js")
})

app.listen(8080 , ()=>{

    console.log("Server running at http://localhost:8080")
})

module.exports = app;