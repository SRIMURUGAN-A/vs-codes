const express = require('express')
const morgan = require('morgan')
const app = express()
const createError =require('http-errors')
require(`dotenv`).config



const port = process.env.port||3000

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log("server is start running")
})