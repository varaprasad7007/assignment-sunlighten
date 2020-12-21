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

// this route will get json which get input string number to actual number
app.get('/exp', function(req, res) {
  var value = (3 + 2) * 5
  if (typeof value == 'string') {
    return res.json({ value: eval(value) })
  } else {
    return res.json({ value: value })
  }
})

app.listen(4000, () => {
  console.log('port running successfully')
})
