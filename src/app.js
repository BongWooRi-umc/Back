const express = require('express');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();
const {register1Router} = require('./routes/register1.route.js');
const {register2Router} = require('./routes/register2.route.js');

const {authRouter} = require('./routes/auth.route.js');
const {homeRouter} = require('./routes/home.route.js');
const {communityRouter} = require('./routes/community.route.js');
const {mypageRouter} = require('./routes/mypage.route.js');
const {insertDataRouter} = require('./insertData/insertData.route.js');

const {sequelize} = require('./models');
const passportConfig = require('./passport');

const app = express();
app.set('port', process.env.PORT||3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

sequelize.sync({force: false})
    .then(()=>{
        console.log("DB connected");

    })
    .catch((err)=>{
        console.error(err);
    });

    // 테스트 위한 미들웨어 추가
    // 테스트를 위해 UserId를 고정 값으로 설정 (예시: 1)
// app.use((req, res, next) => {
//     req.user = { id: 1 };
//     next();
// });

app.use('/register1',register1Router);
app.use('/register2',register2Router);
app.use('/auth',authRouter);
app.use('/home',homeRouter);
app.use('/community',communityRouter);
app.use('/mypage',mypageRouter);
app.use('/insertData',insertDataRouter);
console.log('router ready');

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});
app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.localserror = err;
    res.status(err.status || 500);
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});