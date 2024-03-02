const express = require('express');
const sequelize = require('sequelize');
const {Review,User,ReviewComment} = require('../models');
const {reviews,reviewDetail} = require('../controllers/community');
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

reviewsRouter.get('/', reviews);

reviewsRouter.get('/:reviewId', reviewDetail);

module.exports = {reviewsRouter};