const express = require('express');
const {articleRouter} = require('./mypage.mypost.article.route');
const {reviewRouter} = require('./mypage.mypost.review.route');

const mypostRouter = express.Router();

mypostRouter.use('/article',articleRouter);
mypostRouter.use('/review',reviewRouter);
console.log('mypostRoute');

module.exports = {mypostRouter};

