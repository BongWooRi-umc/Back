const express = require('express');

const reviewRouter = express.Router();

const Review = require('../models/Review');

reviewRouter.get('/', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (UserId) {
        const result = await Review.findAll({
            attributes: ['title', 'content', 'score'],
            where: {
              userId: UserId
            },
            order: [['createdAt', 'DESC']]
          });

        if (Data.length === 0) {
            return res.status(400).json({
              code: 400,
              message: 'No result'
            });
          }
        res.send(result);

      } else {
        // 로그인 인증 실패
        if (error.name === 'UnauthorizedError') { 
            return res.status(400).json({
              code: 400,
              message: 'Unauthorized access.'
            });
          }};
    } catch (error) {
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
});

reviewRouter.get('/{:id}', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
        // 게시글 ID 가져오기
    const reviewId = req.params.id;

    if (!reviewId) {
        return res.status(400).json({
          code: 400,
          message: '이미 삭제된 후기'
        });
      }

    if (UserId) {
        const result = await Review.findOne({
            attributes: ['title', 'createdAt', 'content', 'score'],
            where: {
              userId: UserId,
              id: ReviewId
            }
          });
    } else { 
        if (error.name === 'UnauthorizedError') {
        return res.status(400).json({
          code: 400,
          message: 'Unauthorized access.'
        });
        }
    }
    res.send(result);
    
    } catch (error) {
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error'
    });
}
});

reviewRouter.patch('/{:id}', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
        // 게시글 ID 가져오기
    const ReviewId = req.params.id;
    
    if (UserId) {
        const [affectedRows] = await Review.update(
            {
              title: req.body.title, // req.body.title에 업데이트할 값이 있어야 합니다.
              content: req.body.content, // req.body.content에 업데이트할 값이 있어야 합니다.
              score: req.body.score // req.body.score에 업데이트할 값이 있어야 합니다.
            },
            {
              where: {
                userId: UserId,
                id: ReviewId
              }
            }
          );
    } else { 
        if (error.name === 'UnauthorizedError') {
        return res.status(400).json({
        code: 400,
        message: 'Unauthorized access.'
        });
        }
    }
    } catch (error) {
    res.status(500).json({
    code: 500,
    message: 'Internal Server Error'
    });
}
});

reviewRouter.delete('/{:id}', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
        // 게시글 ID 가져오기
    const ReviewId = req.params.id;
    
    if (UserId) {
        const deletedRows = await Review.destroy({
            where: {
              id: ReviewId,
              userId: UserId
            }
          });
    } else {
        if (error.name === 'UnauthorizedError') {
            return res.status(400).json({
            code: 400,
            message: 'Unauthorized access.'
            });
            }
    } 
    }   catch (error) {
        res.status(500).json({
        code: 500,
        message: 'Internal Server Error'
        });
    }
});

module.exports = {reviewRouter};