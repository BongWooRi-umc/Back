const {Review} = require('../models');
const {ReviewPaging:paging} = require('../config/variable');

exports.activityReviews = async(actId)=>{
    try{
        list = await Review.findAll({
            where:{
                ActId: actId
            },
            attribute: ['actTitle','content','score','actData',],
            limit:paging,
        });
        if (!list) {
            return {'isSuccess':false,'result':'No result'};
        }
        else {
            return {'isSuccess':true,'isLogin':false,'result':org};
        }
    }catch (error){
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};
exports.getReviews = async(actId, userId)=>{
    try{
        list = await Review.findAll({
            where:{
                ActId: actId
            },
            attribute: ['actTitle','content','score','actData',],
            limit:paging,
        });
        if (!list) {
            return {'isSuccess':false,'result':'No result'};
        }
        else {
            return {'isSuccess':true,'isLogin':true,'result':list};
        }
    }catch (error){
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};