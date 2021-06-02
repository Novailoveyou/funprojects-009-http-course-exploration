const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello From Express')
})

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
