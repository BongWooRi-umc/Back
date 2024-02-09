const express = require('express');
const {activityRouter} = require('./mypage.scrap.activity.route');
const {communityRouter} = require('./mypage.scrap.community.route');

scrapRouter.use('/activity',activityRouter);
scrapRouter.use('/community',communityRouter);
console.log('scrapRouter');
module.exports = {scrapRouter};