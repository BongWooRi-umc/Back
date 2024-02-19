const {ScrapCommu,ScrapActivity} = require('../models');


exports.isScrapCommu = async (userId,commuId,type)=>{
    try{
        scrap = await ScrapCommu.findOne({
            where:{
                UserId: userId,
                CommuId: commuId,
                scrapType: type,
            },
        });
        if(scrap) { return true;}
        else {return false;}
    }catch (error){
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};
        
exports.isScrapAct = async(userId,actId)=>{
    try{
        scrap = await ScrapActivity.findOne({
            where:{
                UserId: userId,
                ActId: actId,
            },
            attributes:['id'],
        });
        if(scrap){ return true;}
        else { return false;}
    }catch (error){
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};

