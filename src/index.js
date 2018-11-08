import config from 'config'
import express from 'express'
import response from './mock/response.json'

const PORT = 5000
const app = express()

app.get('/', (req, res) => {
  res.json(response)
})

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT} to ${config.get('api.endpoint')}`)
})