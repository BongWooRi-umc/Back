const express = require('express');
const {searchRouter} = require('./home.search.route.js');
const {activityRouter} = require('./home.activity.route.js');

const homeRouter = express.Router();

homeRouter.use('/search',searchRouter);
homeRouter.use('/activity',activityRouter);
console.log('homeRouter');
module.exports = {homeRouter};