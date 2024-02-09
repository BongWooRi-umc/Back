const express = require('express');
const passport = require('passport');

const { isNotLoggedIn } = require('../middlewares');
const { register, login } = require('../controllers/auth');

const authRouter = express.Router();

authRouter.post('/register', isNotLoggedIn, register);
authRouter.post('/login',isNotLoggedIn, login);

module.exports = {authRouter};