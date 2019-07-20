const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    const actualPage = '/home/home'
    const queryParams = 'home'
    app.render(req, res, actualPage, queryParams)
  })
  
  server.get('/assignment', (req, res) => {
    const actualPage = '/assignment/assignment'
    const queryParams = 'assignment'
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/assignment/coding', (req, res) => {
    const actualPage = '/assignment/pages/assignmentCoding';
    const queryParams = 'assignmentCoding';
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/competition', (req, res) => {
    const actualPage = '/competition/competition'
    const queryParams = 'competition'
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/management', (req, res) => {
    const actualPage = '/management/management'
    const queryParams = 'management'
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})