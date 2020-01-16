const app = require('../src/app')

describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      // If initial tests don't work, don't forget to add authorization token
      .set('Authorization', `Bearer ${process.env.API_TOKEN}`)
      .expect(200, 'Hello, world!')
  })
})