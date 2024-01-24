class article{
    //for create article
    constructor(userId, title, content, likes){
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.likes = likes;
        this.createdAt = new Date();
    }
    //for getter from DB
    constructor(id, userId, title, content, likes,createdAt){
        this.id=  id;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.likes = likes;
        this.createdAt = createdAt;
    }
}