import config from 'config'
import nodeProxy from 'node-proxy-http'

const { app, proxy } = nodeProxy()

const PORT = process.env.PORT || 5000

app.use('/', proxy)

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT} to ${config.get('api.endpoint')}`)
})