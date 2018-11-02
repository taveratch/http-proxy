import centerClientRESERVE from './mock/center-client_RESERVE.json'
import centerClientSEARCH from './mock/center-client_SEARCH.json'
import express from 'express'

const PORT = 5000
const app = express()

app.get('/search', (req, res) => {
  res.json(centerClientSEARCH)
})

app.post('/reserve', (req, res) => {
  res.json(centerClientRESERVE)
})

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`)
})