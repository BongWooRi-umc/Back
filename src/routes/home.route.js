const express = require('express');
const {searchRouter} = require('./home.search.route.js');
const {activityRouter} = require('./home.activity.route.js');
const {home} = require('../controllers/home')
const homeRouter = express.Router();

console.log('homeRouter');
homeRouter.use('/search',searchRouter);
homeRouter.use('/activity',activityRouter);
homeRouter.get('/',home);

module.exports = {homeRouter};
