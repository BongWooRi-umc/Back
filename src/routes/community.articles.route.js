const express = require('express');
const {articles,articleDetail} = require('../controllers/community');
const {Article,User, ArticleComment} = require('../models');

const articlesRouter = express.Router();

articlesRouter.post('/:id/comment',async(req,res)=> {
    const UserId = req.user ? req.user.id : null;
    const ArtId = req.params.id;

    if (UserId) {
    // ArticleComment에 댓글 추가
    await ArticleComment.create({
        articleId: ArtId,
        userId: UserId,
        content: content,
        createdAt : Date.now()
    });
    } else {
        res.status(500).json({
        code: 500,
        message: 'Internal Server Error'
        });
    }
});

//전체보기
articlesRouter.get('/', articles);

//게시글 상세보기
articlesRouter.get('/:articleId', articleDetail);


module.exports = {articlesRouter};