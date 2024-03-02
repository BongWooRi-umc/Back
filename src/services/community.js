const {articles, reviews} = require('../models');
const { QueryTypes } = require('sequelize');
const {CommunityPaging:paging} = require('../config/variable');

exports.both = async()=>{
    try {
        // 세션에서 사용자 ID 가져오기
        const UserId = req.user ? req.user.id : null;

        
        // 사용자 ID가 없을경우
        if (!UserId) {
            const articles = await Article.findAll({
            attributes: ['title', 'content', 'scrapCount', 'comments','createdAt', [sequelize.literal('0'), 'type'],],
            order: [['createdAt', 'DESC']],
            limit: paging,
            });
        
            const reviews = await Review.findAll({
                attributes: ['actTitle', 'content', 'scrapCount', 'comments','createdAt', [sequelize.literal('1'), 'type'],],
                order: [['createdAt', 'DESC']],
                limit: paging,
            });
            const list = [...articles, ...reviews].sort((a, b) => b.createdAt - a.createdAt);
        }
        else{

            //select reviews.id, scrapcommus.id from reviews
            //left join scrapcommus on reviews.id = scrapcommus.ReviewId
            //order by review.createdAt;
            list = await sequelize.query(queryString,{type:QueryTypes.SELECT});
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        });
    }
};