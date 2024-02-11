const express = require('express');
const sequelize = require('sequelize');
const {activityRouter} = require('./mypage.scrap.activity.route');
const {communityRouter} = require('./mypage.scrap.community.route');

const scrapRouter = express.Router();

scrapRouter.use('/activity',activityRouter);
scrapRouter.use('/community',communityRouter);
console.log('scrapRouter');
module.exports = {scrapRouter};