const { ScrapActivity } = require('../models/scrapActivity');

exports.isScrap= (ActId,UserId)=>{
    try{
        Det = ScrapActivity.findOne({
            attirbutes:['id'],
            where:{
                ActId: ActId,
                UserId: UserId
            },
        });
        if(Det){ return true;}
        else { return false; }
    }catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};