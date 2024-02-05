const express = require('express');
const {applyRouter} = require('./mypage.myactivity.apply.route.js');
const {admissionRouter} = require('./mypage.myactivity.admission.route.js');
const {endRouter} = require('./mypage.myactivity.end.route.js');

const myactivityRouter = express.Router();

myactivityRouter.use('/apply',applyRouter);
myactivityRouter.use('/admission',admissionRouter);
myactivityRouter.use('/end',endRouter);

module.exports = {myactivityRouter};