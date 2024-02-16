const {Activity}  = require('../models');

exports.getDetail = async(actId)=>{
    try{
        console.log(actId);
        act = await Activity.findOne({
            where:{
                id: actId
            },
            attributes:['title','OrgId','recruBegin','recruEnd','actBegin','actEnd','recruNum','signedNum','content','place_do','place_si','actSubject','actType','isOnline','confirmType','actField','actFieldDetail','isRecru','actDay'],
        });
        if(!act){
            return {'isSuccess':false,'result':'No result'};
        }
        else {
            return {'isSuccess':true,'result':act};
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};