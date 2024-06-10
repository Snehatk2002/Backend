const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const student =require("./models/student")

const app=express()
app.use(cors())

app.get("/" ,(req,res)=>{
    res.send("hello")
})
app.post("/contact",(req,res)=>{
    res.send("welcome to my contact page")
})

app.post("/add",(req,res)=>{
    res.send("test")
})

app.listen(8080,()=>{
    console.log("SERVER STARTED")
})

