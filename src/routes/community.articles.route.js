const express = require('express');
const sequelize = require('sequelize');
const {commentRouter} = require('./community.articles.comment.route.js');
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

articlesRouter.get('/', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;

    // 사용자 ID가 존재하는 경우에만 데이터 조회
    if (!UserId) {
        const result = await Article.findAll({
            attributes: ['title', 'content', 'likes', 'comments','createdAt','createdAt', [sequelize.literal('0'), 'type'],],
            order: [['createdAt', 'DESC']],
        });
        if (result.length === 0) {
            return res.status(400).json({
              code: 400,
              message: 'No result'
            });
          }

        res.send(result);

    } else {
        // 로그인 인증 실패
            return res.status(400).json({
              code: 400,
              message: 'Unauthorized access.'
            });
          };
    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
})

articlesRouter.get('/:id', async (req,res)=> {
    try {
        // 세션에서 사용자 ID 가져오기
    const UserId = req.user ? req.user.id : null;
        // 게시글 ID 가져오기
    const ArtId = req.params ? req.params.id : null;

    if (!ArtId) {
        return res.status(400).json({
          code: 400,
          message: '이미 삭제된 게시물'
        });
      }

    if (!UserId) {
        const result = await Article.findOne({
            attributes: [
                'id','title','content','createdAt','likes','comments'
              ],
              include: [
                {
                  model: User,
                  attributes: ['id','nickname'], // To exclude other user columns
                },
                {
                    model: ArticleComment,
                    attributes: ['userId', 'content', 'createdAt'],
                    include: [
                        {
                          model: User,
                          attributes: ['nickname'],
                        },
                      ],
                  },
              ],
              where: {
                id: ArtId,
              },
          });
          const formattedResult = {
            articleId: result.id,
            title: result.title,
            content: result.content,
            nickname: result.User.nickname,
            userId: result.User.id,
            likes: result.likes,
            comments: result.comments,
            comment: result.ArticleComments.map(comment => ({
                nickname: comment.User.nickname,
                userId: comment.userId,
                content: comment.content,
                createdAt: comment.createdAt,
              })),
          };

          res.send(formattedResult);
          
    } else { 
        return res.status(400).json({
          code: 400,
          message: 'Unauthorized access.'
        });
    }} catch (error) {
        console.log(error);
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error'
    });
}
});


module.exports = {articlesRouter};