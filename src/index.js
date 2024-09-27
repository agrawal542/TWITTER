const express = require('express')
const connect = require('./config/database')
const app = express()
const port = 8000




app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, async() => {
   console.log(`server listening on port ${port}`)
   await connect() ;
   console.log("Mongo db connected")

})