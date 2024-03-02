const {Article,User,sequelize} = require('../models');
const { QueryTypes } = require('sequelize');
const {communityArticle:comPaging} = require('../config/paging');
const {isScrapCommu} = require('./isScrap');
const {articleComments} = require('./comment');

exports.communityArticle = async(userId)=>{
    try{
        if(!userId){
            list = await Article.findAll({
                attributes: ['title', 'content', 'scrapCount', 'comments','createdAt', [sequelize.literal('0'), 'type'],],
                order: [['createdAt', 'DESC']],
                limit: comPaging,
            });
        } else {
            queryString = "SELECT Articles.title, articles.content, articles.scrapCount, articles.comments, articles.createdAt, scrapcommus.id AS isScrap FROM articles";
            queryString += " LEFT JOIN scrapcommus ON scrapcommus.UserId = " + userId + " AND scrapcommus.scrapType = 1";
            queryString += " ORDER BY articles.createdAt";
            queryString += " limit " + comPaging;
            list = await sequelize.query(queryString,{type:QueryTypes.SELECT});
        }
        if (!list) {
            return {'isSuccess':false};
        } else {
            return {'isSuccess':true,'isLogin':true,'result':list};
        }
    } catch {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};

exports.getCommuDetail = async(articleId,userId)=>{
    try{
        queryString = "SELECT Articles.id AS articleId, Articles.title, Articles.content, Articles.scrapCount, Articles.viewCount, Articles.comments, Articles.id As articleId, Articles.UserId AS userId, Users.nickname";
        queryString += " FROM Articles";
        queryString += " LEFT JOIN Users";
        queryString += " ON Articles.UserId = Users.id";
        queryString += " WHERE Articles.id = " + articleId;
        queryString += " ORDER BY Articles.createdAt;";
        article = await sequelize.query(queryString,{type:QueryTypes.SELECT});
        article = article[0];
        
        if(!article)
            return {'isSuccess':false};
        

        if(userId){
            isScrap = isScrapCommu(userId,articleId,1);
            if(isScrap)
                article.isScrap = true;
            else
                article.isScrap = false;
        }

        comments = await articleComments(articleId);
        if(comments)
            article.comment = comments;
        else
            article.comment = {};

        return {'isSuccess':true,'result':article};
    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};




