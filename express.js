import express from 'express'
 
const app = express()

app.get('', (req, res)=>{
    res.send('Hello request from server')
})


app.get('/about', (req, res)=>{
    res.send('Hello from about page')
})


app.listen(3000)