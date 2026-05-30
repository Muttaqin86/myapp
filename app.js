const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('GitHub - CI/CD Jenkins Local Success 🚀')
  res.send('AUTO DEPLOY SUCCESS 🚀')
})

app.listen(4040, '0.0.0.0', () => {
  console.log('App running on port 4040')
})