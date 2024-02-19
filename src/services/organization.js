const {Org} = require('../models');

exports.orgDetail = async(orgId)=>{
    try{
        org = await Org.findOne({
            where: {
                id: orgId,
            },
        });
        if (!org) {
            return {'isSuccess':false,'result':'No result'};
        }
        else {
            return {'isSuccess':true,'result':org};
        }
    }catch (error){
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};

