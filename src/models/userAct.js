class userAct{
    //for create user Activity log
    constructor(userId, activityId, isFinished){
        this.userId = userId;
        this.activityId = activityId;
        this.isFinished = isFinished;
    }
    //for getter
    constructor(id, userId, activityId, isFinished){
        this.id = id
        this.userId = userId;
        this.activityId = activityId;
        this.isFinished = isFinished;
    }
}