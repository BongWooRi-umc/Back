const express = require('express');
const {response,errResponse} = require('../config/response');
const {communityArticle:paging} = require('../config/paging');
const {status} = require('../config/response.status');
const {communityArticle:articles,getCommuDetail:articleDetail} = require('../services/article');
const {communityReview:reviews,getCommuDetail:reviewDetail} = require('../services/review');

exports.both = async(req,res,)=>{
    if (req.user){
        article = await articles(req.user.id);
        review = await reviews(req.user.id);
    }
    else{
        article = await articles();
        review = await reviews();
    }
    // article = article.result.Article;
    // review = review.result;
    let list = [...article.result, ...review.result].sort((a, b) => b.createdAt - a.createdAt);

    res.send(response(status.SUCCESS,list));

};

exports.articles = async(req,res,)=>{
    if(req.user)
        list = await articles(req.user.id);
    else
        list = await articles();

    if (list.isSuccess)
        res.send(response(status.SUCCESS,list.result));
    else
        res.send(errResponse(status.NORESULT));
};

exports.reviews = async(req,res,)=>{
    if(req.user)
        list = await reviews(req.user.id);
    else
        list = await reviews();

    if (list.isSuccess)
        res.send(response(status.SUCCESS,list.result));
    else
        res.send(errResponse(status.NORESULT));
};

exports.articleDetail = async(req,res,)=>{
    if(req.user)
        article = await articleDetail(req.params.articleId,req.user.id);
    else
        article = await articleDetail(req.params.articleId);

    if(article.isSuccess)
        res.send(response(status.SUCCESS,article.result));
    else    
        res.send(errResponse(status.NORESULT));
};

exports.reviewDetail = async(req,res,)=>{
    if(req.user)
        review = await reviewDetail(req.params.reviewId,req.user.id);
    else
        review = await reviewDetail(req.params.reviewId);

    if(review.isSuccess)
        res.send(response(status.SUCCESS,review.result));
    else
        res.send(errResponse(status.NORESULT));
};