const express = require('express')

const app = express()

var timeData = new Date('2011-04-20T09:30:51.01')
timeData.getHours()
timeData.getMinutes()
timeData.getSeconds()

app.get('/', function(req, res) {
  res.send('Api is running')
})

app.get('/currentTime', (req, res) => {
  res.json({ timeData: timeData })
})
app.listen(4000, () => {
  console.log('port running successfully')
})
