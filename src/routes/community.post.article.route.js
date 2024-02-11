const express = require('express');
const sequelize = require('sequelize');

const articleRouter = express.Router();
const {Article} = require('../models');

articleRouter.post('/',async(req,res)=> {
    const UserId = req.user ? req.user.id : null;

    if (UserId) {
    await Article.create({
        title: title,
        content: content,
        userId: UserId
      });
    } else {
        return res.status(400).json({
            code: 400,
            message: 'Unauthorized access.'
          });
        };
})

module.exports = {articleRouter};