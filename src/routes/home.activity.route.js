const {activity, org, actReviews} = require('../controllers/home.js');

const express = require('express');

const activityRouter = express.Router();

activityRouter.get('/:actId',activity);
activityRouter.get('/:actId/org/:orgId',org);
activityRouter.use('/:actId/review',actReview);


console.log('home activity');

module.exports = {activityRouter};