//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Calendar = require('./models/Calendar')
const Task = require('./models/Task')
const Note = require('./models/Note')
// const Calendar = require('./models/Calendar')
//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Calendar,
    Note,
    Task
  },
}
