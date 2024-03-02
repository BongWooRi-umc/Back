const express = require('express');
const {user,article,org,activity,review,scrapReview,articleComment} = require('./insertData.js');
const insertDataRouter = express.Router();

insertDataRouter.get('/user',user);
insertDataRouter.get('/article',article);
insertDataRouter.get('/org',org);
insertDataRouter.get('/activity',activity);
insertDataRouter.get('/review',review);
insertDataRouter.get('/scrapReview',scrapReview);
insertDataRouter.get('/articleComment',articleComment);
insertDataRouter.get('/all',()=>{
    user();
    org();
    activity();
    article();
    review();
    scrapReview();
    articleComment();
});

module.exports = {insertDataRouter};