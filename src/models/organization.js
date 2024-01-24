class Org{
    //for create organization
    constructor(name, url, tel, location){
        this.name = name;
        this.url = url;
        this.tel = tel;
        this.location = location;
        this.createdAt = new Date();
    }
    //for getter
    constructor(id, name, url, tel, location, createdAt, modifiedAt){
        this.id = id;
        this.name = name;
        this.url = url;
        this.tel = tel;
        this.location = location;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}

