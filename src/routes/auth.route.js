const express = require('express');
const passport = require('passport');

const { isNotLoggedIn } = require('../middlewares');
const { register1, register2, login } = require('../controllers/auth');

const authRouter = express.Router();

authRouter.post('/register1', isNotLoggedIn, register1);
authRouter.post('/register2', isNotLoggedIn, register2);
authRouter.post('/login',isNotLoggedIn, login);

module.exports = {authRouter};