const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/users', require('./routers/api/users'));




app.listen(3000, ()=>{
    console.log('server is started')
})

