const express = require('express');
const qs = require('querystring');
const home = require('../controllers/home');

const searchRouter = express.Router();
console.log('searchRouter');

searchRouter.get('/',home.search);

module.exports = {searchRouter};