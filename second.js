const Family=require('./main');
const familyMembers=require('./main');

const Rauf=new Family(
    name="Rauf",
    surname="Bayramov",
    gender="M"
)
const Ilkin=new familyMembers(
    name="Ilkin",
    surname="Huseynov",
    gender="M",
    age=25
)



console.log(Rauf.introduce());

console.log(Ilkin.introduce());