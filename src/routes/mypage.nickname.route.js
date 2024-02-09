const express = require('express');

const nicknameRouter = express.Router();

const User = require('../models/User');

nicknameRouter.patch('/', async(req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
    
    if (UserId) {
        // id가 UserId인 데이터의 nickname을 업데이트
    const updatedUser = await User.update(
        {
        nickname: nickname
        },
        {
        where: {
            id: UserId
        }
        }
    );
    } else {
        if (error.name === 'UnauthorizedError') {
            return res.status(400).json({
            code: 400,
            message: 'Unauthorized access.'
            });
        }
    }} catch (error) {
        res.status(500).json({
        code: 500,
        message: 'Internal Server Error'
        });
    }
});

module.exports = {nicknameRouter};