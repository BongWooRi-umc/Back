class User{
    //for create
    constructor(id, name, phone, email, nickname,password){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.createdAt = new Date();
    }
    //for getter from DB
    constructor(id, name, phone, email, nickname, password, createdAt, modifiedAt, picture){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

}