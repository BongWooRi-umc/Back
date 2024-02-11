const express = require('express');
const sequelize = require('sequelize');

const commentRouter = express.Router();
const {ArticleComment} = require('../models');

async (req,res)=> {
    // ArticleComment에 댓글 추가
    await ArticleComment.create({
        articleId: artId,
        userId: userId,
        content: content,
        createdAt: createdDate
    });
}

module.exports = {commentRouter};