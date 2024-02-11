const express = require('express');
const sequelize = require('sequelize');
const {applyRouter} = require('./mypage.myactivity.apply.route.js');
const {admissionRouter} = require('./mypage.myactivity.admission.route.js');
const {endRouter} = require('./mypage.myactivity.end.route.js');

const {Activity }= require('../models');
const {UserAct }= require('../models');

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
          attributes: ['actDate','reviewId'], // '*' 대신 실제 필요한 컬럼을 명시
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
            userId: UserId
          },
          raw:true,
        });

        if (result.length === 0) {
            return res.status(400).json({
              code: 400,
              message: 'No result'
            });
          } 
          
          const processedResult = result.map(item => ({
            actDate: item.actDate,
            reivewId: item.reviewId || 0,
            title: item['Activity.title'],
            isRecru: item['Activity.isRecru'],
            actType: item['Activity.actType'],
            confirmType: item['Activity.confirmType'],
          }));

          
          res.json(processedResult); // 데이터 전달     
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
    console.log(error);
    res.status(500).json({
        code: 500,
        message: 'Internal Server Error'
      });
}
});
module.exports = {myactivityRouter};