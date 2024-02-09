const express = require('express');

const communityRouter = express.Router();

const ScrapCommu = require('../models/ScrapCommu');

communityRouter,get('/', async(req,res)=> {
    try {
      const UserId = req.user.id; // 예시: 사용자 ID는 로그인한 사용자의 ID로 가정
  
      // 사용자 ID가 존재하는 경우에만 데이터 조회
      if (UserId) {     
        const Data = await ScrapCommu.findAll({
            where: {
              userId: UserId
            }
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
  
module.exports = {communityRouter};