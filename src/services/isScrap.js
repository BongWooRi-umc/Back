const {ScrapCommu,ScrapActivity} = require('../models');
const {ScrapType} = require('../enums/communityType');


exports.isScrapCommu = async (userId,commuId,type)=>{
    try{
        if(type===ScrapType.ARTICLE)
            scrap = await ScrapCommu.findOne({
                where:{
                    UserId: userId,
                    articleId: commuId,
                    scrapType: type,
                },
            });
        else
            scrap = await ScrapCommu.findOne({
                where:{
                    UserId: userId,
                    articleId: commuId,
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

