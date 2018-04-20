#!/usr/bin/env node

const {db, User, Pug} = require('../server/db')
const faker = require('faker')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'grace@hopper.com', password: '123', isAdmin: true})
  ])
  const pugs = await Promise.all([
    Pug.create({name: 'Cody', imageUrl: '/cody.png'}),
    Pug.create({name: 'Doug', imageUrl: '/doug.jpeg'}),
    ...Array.from({length: 50}).map(() => Pug.create({
      name: faker.name.firstName()
    }))
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${pugs.length} pugs`)
  console.log('email: ', users[0].email, ' password: 123')
  console.log('email: ', users[1].email, ' password: 123')
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
