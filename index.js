require ('dotenv').config()

const express = require ('express')

const app =express()

const port=4000

app.get('/',(req,res)=>{
  res.send(`<h1>Hello User...</h1>`)
})

app.get('/register',(req,res)=>{
  res.send("<h1>Registere Successfully.</h1>")
})

app.get('/login',(req,res)=>{
  res.send("<h1>Logged In Successgully.</h1>")
})

app.listen(process.env.PORT,()=>{
  console.log(`Server created. Listening on port ${process.env.PORT}`)
  
})
