const express = require('express');
const sequelize = require('sequelize');
const reviewRouter = express.Router();

const {Review} = require('../models');

reviewRouter.get('/', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (UserId) {
        const result = await Review.findAll({
            attributes: ['title', 'score', 'createdAt'],
            where: {
              userId: UserId
            },
            order: [['createdAt', 'DESC']]
          });

        if (result.length === 0) {
            return res.status(400).json({
              code: 400,
              message: 'No result'
            });
          }
          const formattedResult = result.map(item => ({
            title: item.title,
            score: item.score,
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
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
});

reviewRouter.get('/:id', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
        // 게시글 ID 가져오기
    const ReviewId = req.params ? req.params.id : null;

    if (!ReviewId) {
        return res.status(400).json({
          code: 400,
          message: '이미 삭제된 후기'
        });
      }

    if (UserId) {
        const result = await Review.findOne({
            attributes: ['title', 'createdAt', 'content', 'userId','id','score'],
            where: {
              userId: UserId,
              id: ReviewId
            }
          });

          res.send(result);
    } else { 
        if (error.name === 'UnauthorizedError') {
        return res.status(400).json({
          code: 400,
          message: 'Unauthorized access.'
        });
        }
    }
    } catch (error) {
        console.log(error);
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error'
    });
}
});

reviewRouter.patch('/:id', async (req,res)=> {
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

reviewRouter.delete('/:id', async (req,res)=> {
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