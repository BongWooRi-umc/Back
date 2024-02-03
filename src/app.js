const express = require('express');
const path = require('path');
const morgan = require('morgan');

const {sequelize} = require('./models');

const app = express();
sequelize.sync({force: false})
    .then(()=>{
        console.log('DB connected.');
    })
    .catch((err)=>{
        console.error(err);
    });

app.use(morgan('dev'));

app.use((err,req,res,next)=>{
    const error = new Error (`There is no ${req.method} ${req.url} router.`);
    error.status = 404;
    next(error);
});

app.listen(app.get('port'), ()=>{
    console.log('Stand by at Port no.',app.get('port'));
});