const express = require('express');
const {user,article,org,activity,review,scrapReview} = require('./insertData.js');
const insertDataRouter = express.Router();

insertDataRouter.get('/user',user);
insertDataRouter.get('/article',article);
insertDataRouter.get('/org',org);
insertDataRouter.get('/activity',activity);
insertDataRouter.get('/review',review);
insertDataRouter.get('/scrapReview',scrapReview);


module.exports = {insertDataRouter};