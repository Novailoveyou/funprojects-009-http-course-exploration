const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json()) // just an express thing so that req.body works
app.use(express.urlencoded({ extended: false })) // just an express thing so that req.body works for form submissions

app.get('/', (req, res) => {
  // res.send('Hello From Express')
  // res.send({ msg: 'Hello From Express' })
  // res.json({ msg: 'Hello From Express' })
  res.send(req.rawHeaders)
})

app.post('/contact', (req, res) => {
  // res.send(req.body)
  // res.send(req.body.name)
  res.send(req.header('Content-Type'))
})

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
