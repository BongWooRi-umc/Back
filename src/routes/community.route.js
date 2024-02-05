const express = require('express');
const {articlesRouter}  = require('./community.articles.route.js');
const {reviewsRouter} = require('./community.reviews.route.js');
const {searchRouter} = require('./community.search.route.js');
const {postRouter} = require('./community.post.route.js');

const communityRouter = express.Router();

communityRouter.use('/article',articlesRouter);
communityRouter.use('/reviews',reviewsRouter);
communityRouter.use('/search',searchRouter);
communityRouter.use('/post',postRouter);

module.exports = {communityRouter};