const express = require('express');
const sequelize = require('sequelize');
const communityRouter = express.Router();

const {ScrapCommu} = require('../models');

communityRouter.get('/', async(req,res)=> {
    try {
      const UserId = req.user.id; // 예시: 사용자 ID는 로그인한 사용자의 ID로 가정
  
      // 사용자 ID가 존재하는 경우에만 데이터 조회
      if (UserId) {     
        const Data = await ScrapCommu.findAll({
          attributes : ['articleId','title','context','comments','likes','createdTime'],
            where: {
              userId: UserId
            },
            order: [['createdTime', 'DESC']]
          });

        if (Data.length === 0) {
          return res.status(400).json({
            code: 400,
            message: 'No result'
          });
        }
        const formattedResult = Data.map(item => ({
          actId: item.articleId,
          title : item.title,
          content: item.context,
          comments : item.comments,
          likes : item.likes,
          createdAt: item.createdTime, // 'createdAt'을 'createdDate'로 변경
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
      console.log(error)
      res.status(500).json({
      code: 500,
      message: 'Internal Server Error'
    });
    }    
  });
  
module.exports = {communityRouter};