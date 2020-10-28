const express = require("express")
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//Routes

const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')


//enviroment variables

env.config()

// mongodb connection

mongoose.connect(process.env.MONGODB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
  }
  ).then(() => {
      console.log("MongoDB is connected")
  })

app.use(bodyParser())

app.use('/api', authRoutes)
app.use('/api', adminRoutes)


app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from server'
  })
})

app.post('/data', (req, res, next) => {
  res.status(200).json({
    message: req.body
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running, port ${process.env.PORT}`)
})

