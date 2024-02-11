const express = require('express');
const sequelize = require('sequelize');
const {ScrapActivity} = require('../models');
const {Activity} = require('../models');
const {Org} = require('../models');
const { Op } = require('sequelize');

const activityRouter = express.Router();

activityRouter.get('/', async(req,res)=> {
  try {
    const UserId = req.user.id; // 예시: 사용자 ID는 로그인한 사용자의 ID로 가정

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (UserId) {     
    const Data = await ScrapActivity.findAll({
        attributes: [],
        include: [
          {
            model: Activity,
            attributes: [
              'id','title', 'isRecru','actType','confirmType',
              // 기타 필요한 activity 열들을 추가
            ],
            include: [
              {
                model: Org,
                attributes: ['name'], // 필요한 Org 열이 있으면 추가
                required: false
              }
            ]
          }
        ],
        where: {
          userId: UserId
        }
      })

      if (Data.length === 0) {
        return res.status(400).json({
          code: 400,
          message: 'No result'
        });
      }
    
      const transformedResult = Data.map(item => ({
        actId: item.Activity.id,
        title: item.Activity.title,
        orgName: item.Activity.Org.name,
        isRecru: item.Activity.isRecru,
        actType: item.Activity.actType,
        confirmType: item.Activity.confirmType,
      }));
      
      res.json(transformedResult);
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
});

module.exports = {activityRouter};