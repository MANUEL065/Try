const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-paser")
const app = express()
const port = 3000


await connectDb("mongo://127.0.0.1.27017", () => {
  console.log
})


mongoose.connect('mongodb://localhost:27017/HelpdeskAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



export const server = express ()

//routes



app.get('/', (req, res) => {
  
    res.send('Hello World!')
  })


  app.get('/blood', (req, res) => {
    res.send('Hello blood!')
  })


app.listen(3000, ()=>(
    console.log("App is running on port 3000")
)
)

mongoose.connect()

