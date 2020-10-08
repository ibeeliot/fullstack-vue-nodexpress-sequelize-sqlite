const express = require('express')
// const bodyPraser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT || 8081

// morgan docs mandate string of combine to print out a certain way -> pretty neat
app.use(morgan('combined'))
app.use(express())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'you reached home' })
})

app.get('/status', (req, res) => {
  res.status(200).json({ message: 'hello' })
})

app.listen(PORT, () => {
  console.log(`${PORT} is starting...`)
})
