const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h1>GitHub - CI/CD Jenkins Local Success 🚀</h1>
    <h2>AUTO DEPLOY SUCCESS 🚀</h2>
  `)
})

app.listen(4040, '0.0.0.0', () => {
  console.log('App running on port 4040')
})