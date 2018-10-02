class Person {
    constructor(Personname, favcolor) {
        this.name = Personname;
        this.color = favcolor;    
    }
    
    greet() {
        console.log("Hi There, my name is "+this.name+" and my favorite color is "+this.color);
    }
}

module.exports = Person;