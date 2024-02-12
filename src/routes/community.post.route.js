const express = require('express');
const sequelize = require('sequelize');
const {articleRouter} = require('./community.post.article.route.js');
const {reviewRouter} = require('./community.post.review.route.js');

const postRouter = express.Router();

postRouter.use('/article',articleRouter);
postRouter.use('/review',reviewRouter);


postRouter.get('/', async(req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (UserId) {
        return res.status(200).json({
            code: 200,
            message: 'Authorization confirmed.'
            });
    } else {
        return res.status(400).json({
            code: 400,
            message: 'Unauthorized access.'
          });
    }} catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
});

module.exports = {postRouter};