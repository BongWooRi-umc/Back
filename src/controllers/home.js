const express = require('express');
const {response} = require('../config/response');
const {status} = require('../config/response.status');
const orderByDate = require('../services/ListActivity');

exports.home = async(req,res,)=>{
    res.send(response(status.SUCCESS,''));
};

exports.search = async(req,res,)=>{
    res.send(()=>{
        page = orderByDate();
        if (page.isSuccess)
            res.send(response(status.SUCCESS,page.result));
        else
            res.send(response(status.NORESULT,page.result));
    })
};

// exports.activity = async(req,res,next)=>{
//     res.send(()=>{
