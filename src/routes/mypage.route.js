const express = require('express');
const {myactivityRouter} = require('./mypage.myactivity.route.js');
const {scrapRouter} = require('./mypage.scrap.route.js');
const {mypostRouter} = require('./mypage.mypost.route.js');
const {nicknameRouter} = require('./mypage.nickname.route.js');

const mypageRouter = express.Router();

mypageRouter.use('/myactivity',myactivityRouter);
mypageRouter.use('/scrap',scrapRouter);
mypageRouter.use('/mypost',mypostRouter);
mypageRouter.use('/nickname',nicknameRouter);
console.log('mypageRouter');
module.exports = {mypageRouter};