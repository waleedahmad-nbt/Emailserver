const express = require("express")
require("dotenv").config()

const app = express()

app.use(express.json())

app.get("/" , (req , res)=>{
    res.send("Server Runing Susscesfully")
})

app.get("/Email" , (req , res)=>{
    res.send("Email Send Susscesfully")
})

const port  = process.env.PORT || 4000

app.listen(port , ()=>{
    console.log("Server is Runing on " + port);
})