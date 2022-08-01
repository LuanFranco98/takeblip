
const { Router } = require('express')
const { createGitController } = require('./factories/controller')
const { handler } = require('./handlers/handler')

const routes = Router()
routes.get('/', handler(createGitController()))
routes.get('/:user/:n/:lang', handler(createGitController()))

module.exports = routes
