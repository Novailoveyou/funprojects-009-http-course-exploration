const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json()) // just an express thing so that req.body works
app.use(express.urlencoded({ extended: false })) // just an express thing so that req.body works for form submissions
app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.send('Hello From Express')
  // res.send({ msg: 'Hello From Express' })
  // res.json({ msg: 'Hello From Express' })
  res.send(req.rawHeaders)
})

app.post('/contact', (req, res) => {
  // res.send(req.body)
  // res.send(req.body.name)
  // res.send(req.header('Content-Type'))

  if (!req.body.name) {
    return res.status(400).send('Name is required')
  }

  // DATABASE STUFF
  res.status(201).send(`Thank you ${req.body.name}`)
})

app.post('/login', (req, res) => {
  if (!req.header('x-auth-token')) {
    return res.status(400).send('No Token')
  }

  if (req.header('x-auth-token') !== '123456') {
    return res.status(401).send('Not authorized')
  }

  res.send('Logged In')
})

app.put('/post/:id', (req, res) => {
  // DATABSE STUFF to update something like a post

  res.json({
    id: req.params.id,
    title: req.body.title
  })
})

app.delete('/post/:id', (req, res) => {
  // DATABSE STUFF to update something like a post

  res.json({ msg: `Post ${req.params.id} deleted` })
})

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
