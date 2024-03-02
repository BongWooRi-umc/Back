const {reviewComment,sequelize} = require('../models');
const { QueryTypes } = require('sequelize');
const {communityArticle:comPaging} = require('../config/paging');

exports.articleComments = async(artId)=>{
    try{
        queryString = "SELECT UserId AS userId, content, ArticleComments.createdAt, Users.nickname";
        queryString += " FROM ArticleComments";
        queryString += " LEFT JOIN Users";
        queryString += " ON ArticleComments.UserId = Users.id";
        queryString += " WHERE ArticleComments.ArticleId = " + artId;
        queryString += " ORDER BY ArticleComments.createdAt;";
        list = await sequelize.query(queryString,{type:QueryTypes.SELECT});
        
        return list
    } catch (error){
        return 0;
    }
};

exports.reviewComments = async(reviewId)=>{
    try{
        queryString = "SELECT UserId AS userId, content, ReviewComments.createdAt, User.nickname";
        queryString += " FROM ReviewComments";
        queryString += " LEFT JOIN Users";
        queryString += " ON ReviewComments.UserId = Users.id";
        queryString += " WHERE ReviewComments.ArticleId = " + artId;
        queryString += " ORDER BY ReviewComments.createdAt;";
        list = await sequelize.query(queryString,{type:QueryTypes.SELECT});
        
        return list
    } catch (error){
        return 0;
    }
};
