const express = require('express');
const {commentRouter} = require('./community.reviews.comment.route.js');

const reviewsRouter = express.Router();

module.exports = {reviewsRouter};