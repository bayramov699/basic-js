const Family=require('./main');

class familyMembers extends Family{
    constructor(name,surname,gender,age){
        super(name,surname,gender);
        this._age=age;
    }
    get age(){
        return this._age;
    }
}
module.exports=familyMembers;