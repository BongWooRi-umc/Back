const express = require('express');
const sequelize = require('sequelize');
const {both} = require('../controllers/community');
const {articlesRouter}  = require('./community.articles.route.js');
const {reviewsRouter} = require('./community.reviews.route.js');
const {searchRouter} = require('./community.search.route.js');
const {postRouter} = require('./community.post.route.js');

const communityRouter = express.Router();

communityRouter.use('/articles',articlesRouter);
communityRouter.use('/reviews',reviewsRouter);
communityRouter.use('/search',searchRouter);
communityRouter.use('/post',postRouter);

communityRouter.get('/', both);
module.exports = {communityRouter};