const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('gitHub - CI/CD Jenkins Local Success 🚀')
})

app.listen(4040, '0.0.0.0', () => {
  console.log('App running on port 4040')
})