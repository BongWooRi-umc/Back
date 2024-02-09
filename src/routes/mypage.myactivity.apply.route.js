const express = require('express');

const UserApply = require('../models/UserApply');
const Activity = require('../models/Activity');

const applyRouter = express.Router();

applyRouter.get('/', async (req,res) => {
  try{
  const UserId = req.user ? req.user.id : null;

  // 사용자 ID가 존재하는 경우에만 데이터 조회
  if (UserId) {
    const Data = await Activity.findAll({
        include: [
          {
            model: UserApply,
            attributes: [],
            where: {
              actId: sequelize.col('activity.id'),
              applyStatus: 0
            },
            required: true // INNER JOIN과 동일한 효과
          }
        ]
      });

      if (Data.length === 0) {
        return res.status(400).json({
          code: 400,
          message: 'No result'
        });
      }
    
    res.json(Data); // 데이터 전달
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

module.exports = {applyRouter};