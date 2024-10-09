const express = require("express");
app =express()


let movies =[
    {
      id : "1",
      movie : "beast",
      director : "nelson"
    },
    {
      id : "2",
      movie : "jailer",
      director : "nelson"
    },
    {
      id : "3",
      movie : "vallai",
      director : "maran"
    },
];

app.get('/', (req, res)=>{
    res.json(movies)
});


app.listen(3000, ()=>console.log('server is ready'))