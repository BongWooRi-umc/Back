const express = require('express');
const mysql = require('mysql');
const {myactivityRouter} = require('./mypage.myactivity.route.js');
const {scrapRouter} = require('./mypage.scrap.route.js');
const {mypostRouter} = require('./mypage.mypost.route.js');
const {nicknameRouter} = require('./mypage.nickname.route.js');

const UserApply = require('../models/UserApply');
const mypageRouter = express.Router();

mypageRouter.use('/myactivity',myactivityRouter);
mypageRouter.use('/scrap',scrapRouter);
mypageRouter.use('/mypost',mypostRouter);
mypageRouter.use('/nickname',nicknameRouter);

mypageRouter.get('/', async (req, res) => {
  try {
      // 세션에서 사용자 ID 가져오기
      const UserId = req.user ? req.user.id : null;
  
      // 사용자 ID가 존재하는 경우에만 데이터 조회
      if (UserId) {
        const data = await UserApply.findOne({
          attributes: [
            [
              sequelize.fn('SUM', sequelize.literal('CASE WHEN applyStatus = 2 THEN 1 ELSE 0 END')),
              'applyCount'
            ],
            [
              sequelize.fn('SUM', sequelize.literal('CASE WHEN applyStatus = 1 THEN 1 ELSE 0 END')),
              'admissionCount'
            ],
            [
              sequelize.fn('SUM', sequelize.literal('CASE WHEN applyStatus = 0 THEN 1 ELSE 0 END')),
              'endCount'
            ]
          ],
          where: {
            userId: UserId
          }
        });
        res.json(data); // 데이터 전달
      } else {
        // 로그인 인증 실패
        res.status(400).json({
          code: 400,
          message: 'Unauthorized access.'
        });
      }
    } catch(error) {
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
  });
  

module.exports = {mypageRouter};