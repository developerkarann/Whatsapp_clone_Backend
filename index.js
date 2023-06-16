const express = require('express')
const DatabaseConnection = require('./database');
const Router = require('./routes/route')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express();

app.use(cors())
const PORT = 8000;

app.use(bodyparser.json({ extended: true}))
app.use(bodyparser.urlencoded({ extended: true}))

app.use(Router)

app.get('/',(req,res)=>{
    res.send('<h1>Hello World </h1>')
})

DatabaseConnection();

app.listen(PORT, ()=>{
    console.log(`Server is runnig on port ${PORT} successfully`)
})