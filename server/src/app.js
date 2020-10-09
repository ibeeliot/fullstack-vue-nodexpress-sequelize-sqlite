const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT || 8081

// morgan docs mandate string of combine to print out a certain way -> pretty neat
app.use(express.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'you reached home' })
})

app.get('/status', (req, res) => {
  res.status(200).json({ message: 'hello' })
})

app.post('/register', (req, res) => {
  if (!req.body.email) {
    res.status(400).json({
      error: 'No email was given'
    })
  } else {
    res.status(200).json({
      success: `${req.body.email} was just created as a username`
    })
  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is starting...`)
})
