const express = require('express');
const {articleRouter} = require('./community.post.article.route.js');
const {reviewRouter} = require('./community.post.review.route.js');

const postRouter = express.Router();

postRouter.use('/article',articleRouter);
postRouter.use('/review',reviewRouter);

module.exports = {postRouter};