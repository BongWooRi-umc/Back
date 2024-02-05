const express = require('express');
const {commentRouter} = require('./community.articles.comment.route.js');

const articlesRouter = express.Router();

articlesRouter.use('/comment',commentRouter);

module.exports = {articlesRouter};