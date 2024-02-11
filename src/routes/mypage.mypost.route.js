const express = require('express');
const sequelize = require('sequelize');

const {articleRouter} = require('./mypage.mypost.article.route');
const {reviewRouter} = require('./mypage.mypost.review.route');

const mypostRouter = express.Router();

const {Article} = require('../models');
const {Review} = require('../models');

mypostRouter.use('/article',articleRouter);
mypostRouter.use('/review',reviewRouter);


mypostRouter.get('/', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (UserId) {
        const articles = await Article.findAll({
          attributes: ['title', 'content', 'likes', 'comments','createdAt','createdAt', [sequelize.literal('NULL'), 'score'], [sequelize.literal('1'), 'type' , ]],
          where: {
            userId: UserId
          }
        });
      
        const reviews = await Review.findAll({
          attributes: ['title', 'content','likes', 'comments', 'createdAt', 'score', [sequelize.literal('0'), 'type']],
          where: {
            userId: UserId
          }
        });
        const result = [...articles, ...reviews].sort((a, b) => b.createdAt - a.createdAt);

        if (result.length === 0) {
            return res.status(400).json({
              code: 400,
              message: 'No result'
            });
          }

          const formattedResult = result.map(item => ({
            type: item.type,
            title: item.title,
            content: item.content,
            score: item.score || null, // score가 없으면 null로 설정
            likes: item.likes,
            comments: item.comments,
            createdDate: item.createdAt, // 'createdAt'을 'createdDate'로 변경
          }));
        
        res.send(formattedResult);
      } else {
        // 로그인 인증 실패
        if (error.name === 'UnauthorizedError') { 
            return res.status(400).json({
              code: 400,
              message: 'Unauthorized access.'
            });
          }};
    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
})

module.exports = {mypostRouter};

