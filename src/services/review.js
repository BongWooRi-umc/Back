const {Review,sequelize} = require('../models');
const { QueryTypes } = require('sequelize');
const {actReview:actPaging, communityReview:comPaging} = require('../config/paging');
const {isScrapCommu} = require('./isScrap');
const {reviewComments} = require('./comment');
const {ScrapType:CommuType} = require('../enums/communityType');

exports.activityReviews = async(actId, userId)=>{
    try{
        if(!userId){
            list = await Review.findAll({
                where:{
                    ActId: actId
                },
                attributes: ['actTitle','actDate','content','score',],
                order: [['createdAt','DESC']],
                limit:actPaging,
            });
        } else {
            queryString = "SELECT reviews.actTitle, reviews.content, reviews.score, reviews.actDate, scrapcommus.id AS isScrap FROM reviews";
            queryString += " LEFT JOIN scrapcommus ON reviews.id = scrapcommus.ReviewId" + " AND scrapcommus.scrapType = 0";;
            queryString += " AND scrapcommus.UserId = " + userId;
            queryString += " ORDER BY reviews.createdAt";
            queryString += " limit " + actPaging;
            list = await sequelize.query(queryString,{type:QueryTypes.SELECT});
        }
        if (!list) {
            return {'isSuccess':false};
        } else {
            return {'isSuccess':true,'isLogin':true,'result':list};
        }
    }catch (error){
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};

exports.communityReview = async(userId)=>{
    try{
        if(!userId){
            list = await Review.findAll({
                attributes: ['actTitle', 'content', 'scrapCount', 'comments','createdAt', [sequelize.literal('1'), 'type'],],
                order: [['createdAt', 'DESC']],
                limit: comPaging,
            });
        }
        else{
            queryString = "SELECT reviews.actTitle, reviews.content, reviews.scrapCount, reviews.comments, reviews.createdAt, scrapcommus.id AS isScrap FROM reviews";
            queryString += " LEFT JOIN scrapcommus ON scrapcommus.UserId = " + userId;
            queryString += " ORDER BY reviews.createdAt";
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

exports.getCommuDetail = async(reviewId,userId)=>{
    try{
        queryString = "SELECT Reviews.actTitle, Reviews.content, Users.nickname, Reviews.UserId AS userId, Reviews.score, Reviews.id AS reviewId, Reviews.scrapCount, Reviews.viewCount, Reviews.comments";
        queryString += " FROM Reviews";
        queryString += " LEFT JOIN Users";
        queryString += " ON Reviews.UserId = Users.id";
        queryString += " WHERE Reviews.id = " + reviewId;
        queryString += " ORDER BY Reviews.createdAt;";
        review = await sequelize.query(queryString,{type:QueryTypes.SELECT});
        review = review[0];

        if(!review)
            return {'isSuccess':false};
        
        if(userId){
            isScrap = isScrapCommu(userId,reviewId,2);
            if(isScrap)
                review.isScrap = true;
            else
                review.isScrap = false;
        }

        comments = await reviewComments(reviewId);
        if(comments)
            review.comment = comments;
        else
            review.comment = {};

        return {'isSuccess':true,'result':review};
    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};            
