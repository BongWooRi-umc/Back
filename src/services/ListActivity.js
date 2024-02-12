const {Article} = require('../models');

const paging = 9;

exports.orderByDate = ()=>{
    try{
        list = Article.findAll({
            attribute: ['ActId','title','orgName','isRecur','actType','confirmType'],
            order: [['createdAt','DESC']],
            limit:paging,
        });
        if (!list) {
            return {'isSuccess':false,result:'No result'};
        }
        else {
            return {'isSuccess':true,result:list};
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};
