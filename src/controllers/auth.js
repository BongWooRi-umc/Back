const bcrypt  = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

exports.register1 = async(req,res,next)=>{
    const { email, nickname, phone } = req.body;
    try {
        const exUser = await User.findOne({ where: {email} });
        if(exUser){
            return res.redirect('/register1?error=exist');
        }
        res.status(200).send('request success');
    } catch (error){
        console.error(error);
        return next(error);
    }
};

exports.register2 = async(req,res,next)=>{
    const { name, email,nickname, phone, password, } = req.body;
    try{
        const exUser =  await User.findOne({ where: {email}});
        if(exUser){
            return res.redirect('/register2?error=exist');
        }
        const hash = await bcrypt.hash(password,12);
        await User.create({
            name,
            email,
            nickname,
            phone,
            password: hash,
        });
        return res.redirect('/login');
    }catch(error){
        console.error(error);
        return next(error);
    }
};

exports.login = (req, res, next) =>{
    passport.authenticate('local', (authError, user, info) =>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) =>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/home');
        });
    })(req,res,next);
};


