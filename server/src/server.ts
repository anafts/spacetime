import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World!'
})

app
  .listen({
    port: 6006,
  })
  .then(() => {
    console.log('Server is running on port 6006')
  })
