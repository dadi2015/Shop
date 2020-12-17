const express = require("express")
const env = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()


//Routes

const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const cardRoutes = require("./routes/cart")


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
app.use(cors())
app.use(express.json())
app.use('/api', authRoutes)
app.use('/public', express.static(path.join(__dirname, "uploads")))
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cardRoutes)


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

