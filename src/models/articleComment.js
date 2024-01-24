class articleComment{
    //for create comment
    constructor(articleId, userId, content){
        this.articleId = articleId;
        this.userId = userId;
        this.content = content;
        this.createdAt = new Date();
    }
    //for getter
    constructor(commentId, articleId, userId, content, createdAt, modifiedAt){
        this.commentId = commentId;
        this.articleId = articleId;
        this.userId = userId;
        this.content = content;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}
