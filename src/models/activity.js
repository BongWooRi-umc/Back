class activity{
    //for create activity           
    constructor(orgId, title, recruBegin, recruEnd, recruNum,signedNum, content, actBegin, actEnd){
        this.orgId = orgId;
        this.title = title;
        this.recruBegin = recruBegin;
        this.recruEnd = recruEnd;
        this.recruNum = recruNum;
        this.signedNum = signedNum;
        this.content = content;
        this.actBegin = actBegin;
        this.actEnd = actEnd;
        this.createdAt = new Date();
    }
    //for getter
    constructor(id, orgId, title, recruBegin, recruEnd, recruNum,signedNum, content, actBegin, actEnd,createdAt, modifiedAt){
        this.id = id;
        this.orgId = orgId;
        this.title = title;
        this.recruBegin = recruBegin;
        this.recruEnd = recruEnd;
        this.recruNum = recruNum;
        this.signedNum = signedNum;
        this.content = content;
        this.actBegin = actBegin;
        this.actEnd = actEnd;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}