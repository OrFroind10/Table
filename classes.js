class Person {
    constructor(src1,src2){
        this.id = src1.id;
        this.firstName = src1.firstName;
        this.lastName = src1.lastName;
        this.capsule = src1.capsule; 
        this.age = src2.age;
        this.city = src2.city;
        this.gender = src2.gender;
        this.hobby = src2.hobby;
    }
}

class Participants {
    constructor(){
        this.list = [];
    }

    addPerson(src1,src2){
        let p = new Person(src1,src2);
        this.list.push(p);
    }
}