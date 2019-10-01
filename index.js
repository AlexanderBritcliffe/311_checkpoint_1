const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 4000

let routers = require('./routes/users')
app.use(bodyParser.json());
app.use(routers)

app.get('/', (req, res) => res.send('Working'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})

