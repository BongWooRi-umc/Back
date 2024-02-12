const express = require('express');
const sequelize = require('sequelize');

const reviewRouter = express.Router();
const {Review} = require('../models');
reviewRouter.get('/',async(req,res)=> {
    try {
    const UserId = req.user ? req.user.id : null;
    if(UserId) {
    const result = await UserAct.findAll({
        attributes: ['actTitle', 'actId'],
        where: {
          userId: UserId,
        },
      });

      if (result.length === 0) {
        return res.status(400).json({
          code: 400,
          message: 'No result'
        });
        }
        const formattedResult = result.map(item => ({
        actTitle: item.actTitle,
        userActId: item.actId, // 여기서 userActId로 표현되어야 하는지 정확한 정보가 없어서 actId로 대체했습니다.
      }));
      
      res.json(formattedResult);
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


reviewRouter.post('/',async(req,res)=> {
    const UserId = req.user ? req.user.id : null;

    if (UserId) {
    await Review.create({
        "userId" : UserId,
        "content": content,
        "score": score,
        "actId": userActId,
        "actTitle": actTitle,
      });
    } else {
        return res.status(400).json({
            code: 400,
            message: 'Unauthorized access.'
          });
        };
})
module.exports = {reviewRouter}