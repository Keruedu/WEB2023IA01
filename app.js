const http = require('http')
const app = require('./app')
const port = process.env.PORT || 4000;
const server = http.createServer(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})