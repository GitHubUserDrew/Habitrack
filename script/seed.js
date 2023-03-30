'use strict'

const { db, models: { User, Calendar, Task, Note } } = require('../server/db')


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  // Creating Calendars
  const calendar = await Promise.all([
    Calendar.create({
      id: 1,
      title: 'event',
      description: 'hello',
      // start_date: 2022 - 01 - 03,
      // end_date: 2022 - 01 - 05,
      // start_time: 00 - 01,
      // end_time: 00 - 02
    }),
    Calendar.create({
      id: 2
      , title: 'event1',
      description: 'bye',
      // start_date: 2022 - 01 - 06,
      // end_date: 2022 - 01 - 08,
      // start_time: 01 - 01,
      // end_time: 02 - 02
    }),
  ])

  //creating tasks
  const task = await Promise.all([
    Task.create({
      id: 0,
      title: 'dothis',
      description: 'doit!',
      status: "new",
    }),
    Task.create({
      id: 1,
      title: 'dothat',
      description: 'doit!',
      status: "new",
    }),
  ])

 //creating notes
 const note = await Promise.all([
  Note.create({
    id: 0,
    title: 'whatup',
    content: 'hello',
  }),
  Note.create({
    id: 1,
    title: 'whatdown',
    content: 'goodbye'
  }),
])

  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    calendar: {
      event1: calendar[0],
      event2: calendar[1],
    },
    task: {
      dothis: task[0],
      dothat: task[1],
    },
    note: {
      whatup: task[0],
      whatdown: task[1],
    },
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log(`seeded ${User.length} users`)

  console.log(`seeded ${Calendar.length} Calendar`)
  console.log(`seeded ${Task.length} Task`)
  console.log(`seeded ${Note.length} Note`);
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
