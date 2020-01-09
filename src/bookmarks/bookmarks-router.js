const express = require('express')
const uuid = require('uuid/v4')
const { isWebUri } = require('valid-url')
const logger = require('../logger')
const store = require('../store')

const bookmarksRouter = express.Router()
const bodyParser = express.json()

bookmarksRouter
.route('/bookmarks')
.get((req,res) => {
    res.json(store.bookmarks);
})

.post(bodyParser, (req, res) => {
    const { title, url, rating, description } = req.body;

    if (!title) {
        logger.error('Title is required');
        return res
          .status(400)
          .send('Invalid data');
      }

      if (!url) {
        logger.error('URL is required');
        return res
          .status(400)
          .send('Invalid data');
      }

      if (!rating) {
        logger.error('Rating is required');
        return res
          .status(400)
          .send('Invalid data');
      }

      if(!Number.isInteger(rating) || rating < 0 || rating > 5) { logger.error(`Rating ${rating} is invalid`)
      return res
        .status(400)
        .send(`Rating must be an integer between 0 and 5`)
      }

      if(!isWebUri(url)) {
          logger.error(`URL ${url} is invalid`)
          return res
            .status(400)
            .send(`URL must be a valid URL.`)
      }

      const bookmark = {
          id: uuid(),
          title,
          url,
          description,
          rating
      }

      store.bookmarks.push(bookmark)

      logger.info(`Bookmark with id ${bookmark.id} was created`)
        res
            .status(201)
            .location(`http://localhost:8000/bookmarks/${bookmark.id}`)
            .json(bookmark)
    
})

bookmarksRouter
    .route('/bookmarks/:bookmark_id')
    .get((req, res) => {
        const  { bookmark_id } = req.params
        const bookmark = store.bookmarks.find(c => c.id == bookmark_id)

        if (!bookmark) {
            logger.error(`Bookmark with id ${bookmark_id} not found.`)
            return res
              .status(404)
              .send('Bookmark Not Found')
          } res.json(bookmark)
    })
    .delete((req, res) => {
    const { bookmark_id } = req.params

    const bookmarkIndex = store.bookmarks.findIndex(b => b.id === bookmark_id)

    if (bookmarkIndex === -1) {
      logger.error(`Bookmark with id ${bookmark_id} not found.`)
      return res
        .status(404)
        .send('Bookmark Not Found')
    }

    store.bookmarks.splice(bookmarkIndex, 1)

    logger.info(`Bookmark with id ${bookmark_id} deleted.`)
    res
      .status(204)
      .end()
  })

module.exports = bookmarksRouter