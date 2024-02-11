const express = require('express');
const sequelize = require('sequelize');
const {UserApply} = require('../models');
const {Activity} = require('../models');

const endRouter = express.Router();

endRouter.get('/', async (req,res) => {
    try {
    const UserId = req.user ? req.user.id : null;

  // 사용자 ID가 존재하는 경우에만 데이터 조회
  if (UserId) {
    const Data = await UserApply.findAll({
      attributes: [
      ],
      include: {
        model: Activity,
        attributes: [
          'id',
          'title',
          'content',
          'isRecru',
          'actType',
          'confirmType',
        ],
      },
      where: {
        applyStatus: 'end',
      },
      raw: true,
    });

    const processedData = Data.map(item => ({
      actid: item['Activity.id'],
      title: item['Activity.title'],
      content: item['Activity.content'],
      isRecru: item['Activity.isRecru'],
      actType: item['Activity.actType'],
      confirmType: item['Activity.confirmType'],
    }));

    res.json(processedData); // 데이터 전달
    } else {
      // 로그인 인증 실패
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

module.exports = {endRouter};