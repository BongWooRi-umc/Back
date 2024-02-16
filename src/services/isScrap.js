const {ScrapCommu,ScrapActivity} = require('../models');


exports.isScrapCommu = (userId,commuId,type)=>{
    try{

    }catch{
    }
};
        
exports.isScrapAct = async(userId,actId)=>{
    try{
        scrap = await ScrapActivity.findOnd({
            where:{
                userId: userId,
                actId: actId,
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

