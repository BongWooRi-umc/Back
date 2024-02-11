const express = require('express');
const mysql = require('mysql');
const sequelize = require('sequelize');
const {myactivityRouter} = require('./mypage.myactivity.route.js');
const {scrapRouter} = require('./mypage.scrap.route.js');
const {mypostRouter} = require('./mypage.mypost.route.js');
const {nicknameRouter} = require('./mypage.nickname.route.js');

const {UserApply} = require('../models');
const {User} = require('../models');

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
        const data = await UserApply.findAll({
          attributes: [
            [sequelize.fn('SUM', sequelize.literal('CASE WHEN applyStatus ="applied" THEN 1 ELSE 0 END')), 'applyCount'],
            [sequelize.fn('SUM', sequelize.literal('CASE WHEN applyStatus ="approved" THEN 1 ELSE 0 END')), 'admissionCount'],
            [sequelize.fn('SUM', sequelize.literal('CASE WHEN applyStatus ="end" THEN 1 ELSE 0 END')), 'endCount'],
            [sequelize.col('User.nickname'), 'nickname'],
          ],
          include: {
            model: User,
            attributes: [], // 불필요한 열을 방지하기 위해 빈 배열로 설정
          },
          where: {
            userId: UserId,
          },
          group: ['User.id'], // 'User.id', 'UserApply.id'로 그룹화
          raw: true,
        });

                // 데이터 매핑
        const mappedData = data.map(item => ({
          nickname: item.nickname,
          applyCount: parseInt(item.applyCount),
          admissionCount: parseInt(item.admissionCount),
          endCount: parseInt(item.endCount),
        }));
        res.json(mappedData);
      } else {
        // 로그인 인증 실패
        res.status(400).json({
          code: 400,
          message: 'Unauthorized access.'
        });
      }
    } catch(error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
  });
  

module.exports = {mypageRouter};