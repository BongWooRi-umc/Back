const {orgRouter} = require('./home.activity.org.route.js');
const {reviewRouter} = require('./home.activity.review.route.js');
const {activity, org} = require('../controllers/home.js');

const express = require('express');

const activityRouter = express.Router();

activityRouter.use('/org',orgRouter);
activityRouter.get('/:actId',activity);
activityRouter.get('/:actId/org/:orgId',org);
activityRouter.use('/:actId/review',reviewRouter);


console.log('home activity');

module.exports = {activityRouter};