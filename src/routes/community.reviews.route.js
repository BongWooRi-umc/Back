const express = require('express');
const sequelize = require('sequelize');
const {commentRouter} = require('./community.reviews.comment.route.js');
const {Review,User,ReviewComment} = require('../models');
const reviewsRouter = express.Router();

reviewsRouter.post('/:id/comment',async(req,res)=> {
    const UserId = req.user ? req.user.id : null;
    const ArtId = req.params.id;

    if (UserId) {
    // ReviewComment에 댓글 추가
    await ReviewComment.create({
        reviewId: ArtId,
        userId: UserId,
        content: content,
        createdAt : Date.now()
    });
    } else {
        res.status(500).json({
        code: 500,
        message: 'Internal Server Error'
        });
    }
});

reviewsRouter.get('/', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (!UserId) {
        const result = await Review.findAll({
            attributes: ['title', 'content', 'likes', 'comments','createdAt','createdAt', [sequelize.literal('0'), 'type'],],
            order: [['createdAt', 'DESC']],
        });
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
})

reviewsRouter.get('/:id', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
        // 게시글 ID 가져오기
    const ReviewId = req.params ? req.params.id : null;

    if (!ReviewId) {
        return res.status(400).json({
          code: 400,
          message: '이미 삭제된 게시물'
        });
      }

    if (!UserId) {
        const result = await Review.findOne({
            attributes: [
                'title','content','createdAt','likes','comments','score','createdAt'
              ],
              include: [
                {
                  model: User,
                  attributes: ['id','nickname'], // To exclude other user columns
                },
                {
                    model: ReviewComment,
                    attributes: ['UserId', 'content', 'createdAt'],
                    include: [
                        {
                          model: User,
                          attributes: ['nickname'],
                        },
                      ],
                  },
              ],
              where: {
                id: ReviewId,
              },
          });
          const formattedResult = {
            actTitle: result.title,
            content: result.content,
            nickname: result.User.nickname,
            userId: result.User.id,
            score: result.score,
            likes: result.likes,
            comments: result.comments,
            createdAt: result.createdAt,
            comment: result.ReviewComments.map(comment => ({
                nickname: comment.User.nickname,
                userId: comment.UserId,
                content: comment.content,
                createdAt: comment.createdAt,
              })),
          };

          res.send(formattedResult);
          
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


module.exports = {reviewsRouter};