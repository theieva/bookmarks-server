require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const BookmarksService = require('./bookmarks/bookmarks-service')
const validateBearerToken = require('./validate-bearer-token')
const handleErrors = require('./handleErrors')
const bookmarksRouter = require('./bookmarks/bookmarks-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(validateBearerToken)
app.use(bookmarksRouter)
app.use(handleErrors)

module.exports = app