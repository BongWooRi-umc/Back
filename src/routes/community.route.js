const express = require('express');
const sequelize = require('sequelize');
const {articlesRouter}  = require('./community.articles.route.js');
const {reviewsRouter} = require('./community.reviews.route.js');
const {searchRouter} = require('./community.search.route.js');
const {postRouter} = require('./community.post.route.js');

const{Article, Review}  = require('../models');
const communityRouter = express.Router();

communityRouter.use('/article',articlesRouter);
communityRouter.use('/reviews',reviewsRouter);
communityRouter.use('/search',searchRouter);
communityRouter.use('/post',postRouter);

communityRouter.get('/', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (!UserId) {
        const articles = await Article.findAll({
          attributes: ['title', 'content', 'likes', 'comments','createdAt','createdAt', [sequelize.literal('0'), 'type'],],
          order: [['createdAt', 'DESC']],
        });
      
        const reviews = await Review.findAll({
            attributes: ['title', 'content', 'likes', 'comments','createdAt','createdAt', [sequelize.literal('1'), 'type'],],
            order: [['createdAt', 'DESC']],
        });
        const result = [...articles, ...reviews].sort((a, b) => b.createdAt - a.createdAt);

        if (result.length === 0) {
            return res.status(400).json({
              code: 400,
              message: 'No result'
            });
          }
        
        res.send(result);
      } else {
        // 로그인 인증 실패
            return res.status(400).json({
              code: 400,
              message: 'Unauthorized access.'
            });
          };
    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
});
module.exports = {communityRouter};