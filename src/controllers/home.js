const express = require('express');
const {response} = require('../config/response');
const {status} = require('../config/response.status');
const {orderByDate} = require('../services/ListActivity');
const {getDetail} = require('../services/activityDetail');
const {isScrapAct} = require('../services/isScrap');
const { orgDetail } = require('../services/organization');


exports.home = async(req,res,)=>{
    res.send(response(status.SUCCESS,''));
};

exports.search = async(req,res,)=>{
    page = await orderByDate();
    if (page.isSuccess)
        res.send(response(status.SUCCESS,page.result));
    else
        res.send(response(status.NORESULT,page.result));
};

exports.activity = async(req,res,)=>{
    act = await getDetail(req.params.actId);
    if(req.user)
        act.isScrap = await isScrapAct(req.user.id,req.params.actId);
    if(act.isSuccess)
        res.send(response(status.SUCCESS,act.result));
    else
        res.send(response(status.NORESULT,act.result));
};

exports.org = async(req,res,)=>{
    org = await orgDetail(req.params.orgId);
    if(req.user)
        org.isScrap = await isScrapAct(req.user.id,req.params.actId);
    if(org.isSuccess)
        res.send(response(status.NORESULT,act.result));
    else
        res.send(response(status.NORESULT,act.result));
};