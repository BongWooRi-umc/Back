const {orgRouter} = require('./home.activity.org.route.js');
const {reviewRouter} = require('./home.activity.review.route.js');

const express = require('express');

const activityRouter = express.Router();

activityRouter.use('/org',orgRouter);
activityRouter.use('/review',reviewRouter);
activityRouter.get('/:actId',);
console.log('home activity');

module.exports = {activityRouter};