const express = require('express');
const {applyRouter} = require('./mypage.myactivity.apply.route.js');
const {admissionRouter} = require('./mypage.myactivity.admission.route.js');
const {endRouter} = require('./mypage.myactivity.end.route.js');

const Activity = require('../models/Activity');

const myactivityRouter = express.Router();

myactivityRouter.use('/apply',applyRouter);
myactivityRouter.use('/admission',admissionRouter);
myactivityRouter.use('/end',endRouter);

myactivityRouter.get('/' , async (req,res)=> {
    try {
    // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (UserId) {
        const result = await UserAct.findAll({
          attributes: ['*'], // '*' 대신 실제 필요한 컬럼을 명시
          include: [
            {
              model: Activity,
              attributes: ['title', 'isRecru', 'actType', 'confirmType'],
              where: {
                id: sequelize.col('userAct.actId')
              }
            }
          ],
          where: {
            userId: userId
          }
        });
        if (Data.length === 0) {
            return res.status(400).json({
              code: 400,
              message: 'No result'
            });
          } 
          res.json(result); // 데이터 전달     
} else {
    // 로그인 인증 실패
    if (error.name === 'UnauthorizedError') { 
        return res.status(400).json({
          code: 400,
          message: 'Unauthorized access.'
        });
      }
    }
} catch(error) {
    res.status(500).json({
        code: 500,
        message: 'Internal Server Error'
      });
}
});
module.exports = {myactivityRouter};