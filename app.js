const express = require('express')
const {addDays} = require('date-fns')
const app = express()

app.get('/', (request, response) => {
  const todayDate = new Date()
  const dateAfterHundredDays = addDays(todayDate, 100)
  response.send(
    `${dateAfterHundredDays.getDate()}/${
      dateAfterHundredDays.getMonth() + 1
    }/${dateAfterHundredDays.getFullYear()}`,
  )
})

app.listen(3000)

module.exports = app
