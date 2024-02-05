const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const {register1Router} = require('./routes/register1.route.js');
const {register2Router} = require('./routes/register2.route.js');
const {loginRouter} = require('./routes/login.route.js');
const {homeRouter} = require('./routes/home.route.js');
const {communityRouter} = require('./routes/community.route.js');
const {mypageRouter} = require('./routes/mypage.route.js');

const {sequelize} = require('./models');

const app = express();
app.set('port', 3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

sequelize.sync({force: false})
    .then(()=>{
        console.log("DB connected");

    })
    .catch((err)=>{
        console.error(err);
    });


app.use('/register1',register1Router);
app.use('/register2',register2Router);
app.use('/login',loginRouter);
app.use('/home',homeRouter);
app.use('/community',communityRouter);
app.use('/mypage',mypageRouter);

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