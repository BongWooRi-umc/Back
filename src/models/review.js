class review{
    //for create review
    constructor(userId, activityId, title, content,star){
        this.userId = userId;
        this.activityId = activityId;
        this.title = title;
        this.content = content;
        this.star = star;
        this.createdAt = new Date();
    }
    //for getter
    constructor(reviewId, userId, activityId, title, content, star, createdAt, modifiedAt){
        this.review = reviewId;
        this.userId = userId;
        this.activityId = activityId;
        this.title = title;
        this.content = content;
        this.star = star;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}